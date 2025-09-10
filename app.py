import streamlit as st
import sqlite3
import requests
from requests.utils import quote
from datetime import datetime, timedelta
import pandas as pd
import math

# ------------------------------
# Konfiguracja strony
# ------------------------------
st.set_page_config(page_title="Steam Skins Tracker", layout="wide")

# ------------------------------
# Baza danych
# ------------------------------
conn = sqlite3.connect("zakupy.db", check_same_thread=False)
c = conn.cursor()

# Tabela główna
c.execute("""
CREATE TABLE IF NOT EXISTS zakupy (
    id INTEGER PRIMARY KEY,
    nazwa TEXT,
    cena_zakupu REAL,
    ilosc INTEGER,
    manual_price REAL,
    manual_edited INTEGER DEFAULT 0
)
""")
conn.commit()

# Tabela historii portfela (przechowujemy procentowy profit względem wydatków)
c.execute("""
CREATE TABLE IF NOT EXISTS historia_portfela (
    data TEXT PRIMARY KEY,
    profit_percent REAL
)
""")
conn.commit()

# ------------------------------
# Cache cen Steam + timer
# ------------------------------
if "steam_cache" not in st.session_state:
    st.session_state.steam_cache = {}   # { market_hash_name: (price_float, timestamp_datetime) }
if "last_refresh" not in st.session_state:
    st.session_state.last_refresh = datetime.min

CACHE_TIME = timedelta(minutes=5)

def pobierz_cene(nazwa):
    """Pobiera cenę z cache lub z API Steam. Zwraca float albo string z błędem."""
    teraz = datetime.now()

    # jeśli mamy cache i nie wygasł -> zwracamy
    if nazwa in st.session_state.steam_cache:
        cena, ts = st.session_state.steam_cache[nazwa]
        if teraz - ts < CACHE_TIME:
            return cena

    # pobieramy z API
    nazwa_encoded = quote(nazwa)
    url = f"https://steamcommunity.com/market/priceoverview/?country=PL&currency=6&appid=730&market_hash_name={nazwa_encoded}"
    headers = {"User-Agent": "Mozilla/5.0"}

    try:
        r = requests.get(url, headers=headers, timeout=6)
        if r.status_code != 200:
            return "Błąd połączenia"
        data = r.json()
        if not data.get("success"):
            return "Błąd nazwy"
        if not data.get("lowest_price"):
            return "Brak ofert"
        cena_str = data["lowest_price"].replace("zł", "").replace(",", ".").strip()
        cena = float(cena_str)
        st.session_state.steam_cache[nazwa] = (cena, teraz)
        st.session_state.last_refresh = teraz
        return cena
    except Exception as e:
        # nie wyświetlamy stack trace w DB, ale pokazujemy przyjazny komunikat
        return "Błąd połączenia"

# ------------------------------
# Nagłówek + timer + ręczne odświeżanie
# ------------------------------
st.title("📊 Steam Skins Tracker")

next_refresh = st.session_state.last_refresh + CACHE_TIME
remaining = next_refresh - datetime.now()

col_left, col_right = st.columns([3,1])
with col_left:
    if remaining.total_seconds() > 0:
        mins, secs = divmod(int(remaining.total_seconds()), 60)
        st.info(f"⏳ Odświeżenie cen za: **{mins} min {secs} sek**")
    else:
        st.warning("🔄 Odświeżanie dostępne – nowe ceny pobiorą się przy najbliższym zapytaniu.")
with col_right:
    if st.button("♻️ Odśwież ceny teraz"):
        st.session_state.steam_cache = {}
        st.session_state.last_refresh = datetime.min
        st.success("✅ Cache wyczyszczony — nowe ceny pobiorą się przy kolejnym zapytaniu.")

# ------------------------------
# Formularz dodawania przedmiotu
# ------------------------------
with st.form("dodaj_form"):
    nazwa = st.text_input("Nazwa przedmiotu (market_hash_name)")
    cena = st.number_input("Cena zakupu (zł)", step=0.01, min_value=0.0)
    ilosc = st.number_input("Ilość", min_value=1, step=1)
    if st.form_submit_button("Dodaj"):
        if nazwa and cena > 0 and ilosc > 0:
            c.execute("INSERT INTO zakupy (nazwa, cena_zakupu, ilosc) VALUES (?, ?, ?)",
                      (nazwa.strip(), float(cena), int(ilosc)))
            conn.commit()
            st.success("Dodano!")
        else:
            st.error("Uzupełnij poprawnie pola: nazwa, cena (>0), ilość (>0).")

# Reset listy (przycisk)
if st.button("🗑️ Resetuj listę zakupów (usuwa wszystkie przedmioty)"):
    c.execute("DELETE FROM zakupy")
    conn.commit()
    st.warning("Lista zakupów została wyczyszczona.")

# ------------------------------
# Wczytanie przedmiotów z DB
# ------------------------------
c.execute("SELECT id, nazwa, cena_zakupu, ilosc, manual_price, manual_edited FROM zakupy")
rows = c.fetchall()

# Przygotowanie agregatów do historii procentowej
total_spent = 0.0
total_value = 0.0
total_profit = 0.0

# ------------------------------
# Wyświetlanie listy przedmiotów (expandery)
# ------------------------------
if rows:
    st.subheader("📋 Twoje przedmioty")
else:
    st.info("Brak przedmiotów — dodaj pierwszy korzystając z formularza powyżej.")

for id_, nazwa, cena_zakupu, ilosc, manual_price, manual_edited in rows:
    # normalizacja typów
    nazwa = str(nazwa)
    cena_zakupu = float(cena_zakupu) if cena_zakupu is not None else 0.0
    ilosc = int(ilosc) if ilosc is not None else 1

    # cena rynkowa: manualna if set, else pobierz z API (cache)
    manual_price_use = float(manual_price) if manual_price not in (None, "") else None
    cena_display = manual_price_use if manual_price_use is not None else pobierz_cene(nazwa)

    # jeśli pobierz_cene zwróciło tekst błędu -> ustawimy cena_display na 0.0 i zachowamy info
    cena_f = cena_display if isinstance(cena_display, float) else 0.0

    # obliczenia
    zysk = (cena_f - cena_zakupu) * ilosc
    procent = ( (cena_f - cena_zakupu) / cena_zakupu * 100 ) if cena_zakupu != 0 else 0.0

    total_spent += cena_zakupu * ilosc
    total_value += cena_f * ilosc
    total_profit += zysk

    # kolory i etykiety
    kolor_proc = "limegreen" if procent >= 0 else "red"
    kolor_zysk = "#32CD32" if zysk >= 0 else "#FF6347"
    znak = "+" if zysk >= 0 else ""
    exp_color = "#063" if zysk >= 0 else "#600"

    label = nazwa
    if zysk > 0:
        label += " 🟢"
    elif zysk < 0:
        label += " 🔴"
    if int(manual_edited or 0) == 1:
        label = "✏️ " + label

    with st.expander(label):
        # cena zakupu pośrodku, półprzezroczyste tło
        st.markdown(
            f"<div style='text-align:center; background-color:rgba(255,255,255,0.08); padding:6px; border-radius:6px'>"
            f"<span style='font-size:22px; font-weight:bold; color:white'>🛒 Cena zakupu: {cena_zakupu:.2f} zł</span>"
            f"</div>",
            unsafe_allow_html=True
        )

        # wiersz: po lewej cena rynkowa, po prawej zysk i procent
        # jeśli cena_display to komunikat błędu, pokaż go jako ostrzeżenie zamiast wartości
        if isinstance(cena_display, float):
            left_html = f"<span style='font-size:22px; font-weight:bold; color:white'>💰 {cena_f:.2f} zł</span>"
        else:
            left_html = f"<span style='font-size:18px; font-weight:bold; color:orange'>⚠️ {cena_display}</span>"

        right_html = (f"<span style='font-size:22px; font-weight:bold;'>"
                      f"<span style='color:{kolor_zysk}'>{znak}{zysk:.2f} zł</span>"
                      f" <span style='color:{kolor_proc}; font-weight:bold'>({procent:.2f}%)</span>"
                      f"</span>")

        st.markdown(
            f"<div style='background-color:{exp_color}; padding:8px; border-radius:6px'>"
            f"<div style='display:flex; justify-content:space-between; align-items:center'>"
            f"{left_html}"
            f"{right_html}"
            f"</div></div>",
            unsafe_allow_html=True
        )

        # Edycja: nazwa, cena zakupu, ilość
        new_name = st.text_input("Nazwa przedmiotu", nazwa, key=f"name_{id_}")
        new_cena_zakupu = st.number_input("Cena zakupu (zł)", value=float(cena_zakupu), step=0.01, key=f"buy_{id_}")
        new_ilosc = st.number_input("Ilość", value=int(ilosc), min_value=1, step=1, key=f"qty_{id_}")

        # Ręczna cena (na samym dole)
        manual_price_input = st.number_input(
            "Ręczna cena rynkowa (opcjonalnie)",
            value=float(manual_price) if manual_price not in (None, "") else 0.0,
            step=0.01,
            key=f"manual_{id_}"
        )

        # zapis ręcznej ceny jeśli zmieniono i > 0
        if manual_price_input > 0 and (manual_price is None or abs(float(manual_price_input) - float(manual_price or 0)) > 1e-8):
            try:
                c.execute("UPDATE zakupy SET manual_price=?, manual_edited=1 WHERE id=?", (float(manual_price_input), id_))
                conn.commit()
                # odśwież lokalne zmienne by natychmiast pokazać efekt bez reloadu
                manual_price = float(manual_price_input)
                manual_edited = 1
                cena_f = float(manual_price_input)
                st.success("Ręczna cena zapisana.")
            except Exception as e:
                st.error(f"Nie udało się zapisać ręcznej ceny: {e}")

        # zapis edycji pola (nazwa/cena zakupu/ilosc)
        if st.button("💾 Zapisz zmiany", key=f"save_{id_}"):
            try:
                c.execute("UPDATE zakupy SET nazwa=?, cena_zakupu=?, ilosc=? WHERE id=?",
                          (new_name.strip(), float(new_cena_zakupu), int(new_ilosc), id_))
                conn.commit()
                st.success("Zapisano zmiany.")
            except Exception as e:
                st.error(f"Nie udało się zapisać zmian: {e}")

        # usuwanie
        if st.button("🗑️ Usuń", key=f"del_{id_}"):
            try:
                c.execute("DELETE FROM zakupy WHERE id=?", (id_,))
                conn.commit()
                st.warning("Usunięto przedmiot.")
            except Exception as e:
                st.error(f"Nie udało się usunąć: {e}")

# ------------------------------
# Podsumowanie portfela (wartości i %)
# ------------------------------
st.subheader("📊 Podsumowanie portfela")
st.write(f"💸 Łączne wydatki: **{total_spent:.2f} zł**")
st.write(f"💰 Obecna wartość: **{total_value:.2f} zł**")

if total_spent > 0:
    profit_percent = (total_value - total_spent) / total_spent * 100
else:
    profit_percent = 0.0

if profit_percent >= 0:
    st.success(f"📈 Łączny zysk: **{profit_percent:.2f}%**")
else:
    st.error(f"📉 Łączna strata: **{profit_percent:.2f}%**")

# ------------------------------
# Zapis historii portfela (w %) z zabezpieczeniem przed NaN/Inf
# ------------------------------
today = datetime.today().strftime("%Y-%m-%d")
try:
    pct = float(profit_percent)
    if not math.isfinite(pct):
        pct = 0.0
except Exception:
    pct = 0.0

# upewniamy się, że tabela istnieje (bezpiecznie)
c.execute("""
CREATE TABLE IF NOT EXISTS historia_portfela (
    data TEXT PRIMARY KEY,
    profit_percent REAL
)
""")
conn.commit()

try:
    c.execute("INSERT OR REPLACE INTO historia_portfela (data, profit_percent) VALUES (?, ?)", (today, pct))
    conn.commit()
except Exception as e:
    st.error(f"Nie udało się zapisać historii portfela: {e}")

# ------------------------------
# Wykres historii portfela (w procentach)
# ------------------------------
c.execute("SELECT data, profit_percent FROM historia_portfela ORDER BY data ASC")
historia = c.fetchall()

if historia:
    df_hist = pd.DataFrame(historia, columns=["Data", "Profit %"])
    df_hist["Data"] = pd.to_datetime(df_hist["Data"])
    st.subheader("📈 Historia portfela (w % — profit względem wydatków)")
    st.line_chart(df_hist.set_index("Data")["Profit %"])
else:
    st.info("Brak zapisanej historii portfela — zostanie utworzona dzisiaj po wyliczeniu wartości.")

# ------------------------------
# Opcja: eksport CSV (backup)
# ------------------------------
if st.button("⬇️ Eksportuj listę do CSV"):
    c.execute("SELECT id, nazwa, cena_zakupu, ilosc, manual_price, manual_edited FROM zakupy")
    rows_all = c.fetchall()
    df_export = pd.DataFrame(rows_all, columns=["id","nazwa","cena_zakupu","ilosc","manual_price","manual_edited"])
    csv = df_export.to_csv(index=False).encode('utf-8')
    st.download_button("Pobierz CSV", data=csv, file_name="zakupy_export.csv", mime="text/csv")
