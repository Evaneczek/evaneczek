import streamlit as st
import sqlite3
import requests
from requests.utils import quote
from datetime import datetime, timedelta
import pandas as pd

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

# BEZPIECZNA migracja / utworzenie tabeli historii (tak żeby nie było błędów)
# jeśli tabela nie istnieje -> tworzymy z obiema kolumnami (profit i profit_percent)
c.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='historia_portfela'")
if not c.fetchone():
    c.execute("""
    CREATE TABLE historia_portfela (
        data TEXT PRIMARY KEY,
        profit REAL,
        profit_percent REAL
    )
    """)
    conn.commit()
else:
    # tabela istnieje -> sprawdź kolumny i dodaj brakujące
    cols = [row[1] for row in c.execute("PRAGMA table_info(historia_portfela)").fetchall()]
    if "profit" not in cols:
        try:
            c.execute("ALTER TABLE historia_portfela ADD COLUMN profit REAL DEFAULT 0")
            conn.commit()
        except Exception:
            pass
    if "profit_percent" not in cols:
        try:
            c.execute("ALTER TABLE historia_portfela ADD COLUMN profit_percent REAL DEFAULT 0")
            conn.commit()
        except Exception:
            pass

# ------------------------------
# Cache cen Steam + timer
# ------------------------------
if "steam_cache" not in st.session_state:
    st.session_state.steam_cache = {}
if "last_refresh" not in st.session_state:
    st.session_state.last_refresh = datetime.min

CACHE_TIME = timedelta(minutes=5)

def pobierz_cene(nazwa):
    teraz = datetime.now()
    # korzystaj z cache jeśli nie wygasł
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
    except Exception:
        return "Błąd połączenia"

# ------------------------------
# UI
# ------------------------------
st.title("📊 Steam Skins Tracker")

# Timer odświeżania cache i ręczne odświeżenie
next_refresh = st.session_state.last_refresh + CACHE_TIME
remaining = next_refresh - datetime.now()

col1, col2 = st.columns([3,1])
with col1:
    if remaining.total_seconds() > 0:
        mins, secs = divmod(int(remaining.total_seconds()), 60)
        st.info(f"⏳ Odświeżenie cen za: **{mins} min {secs} sek**")
    else:
        st.warning("🔄 Odświeżanie dostępne – nowe ceny pobiorą się przy kolejnym zapytaniu.")
with col2:
    if st.button("♻️ Odśwież ceny teraz"):
        st.session_state.steam_cache = {}
        st.session_state.last_refresh = datetime.min
        st.success("✅ Cache wyczyszczony — nowe ceny pobiorą się przy kolejnym zapytaniu.")

# Formularz dodawania przedmiotu
with st.form("dodaj_form"):
    nazwa = st.text_input("Nazwa przedmiotu (market_hash_name)")
    cena = st.number_input("Cena zakupu (zł)", step=0.01)
    ilosc = st.number_input("Ilość", min_value=1, step=1)
    if st.form_submit_button("Dodaj"):
        if nazwa and cena > 0 and ilosc > 0:
            c.execute("INSERT INTO zakupy (nazwa, cena_zakupu, ilosc) VALUES (?, ?, ?)", (nazwa.strip(), float(cena), int(ilosc)))
            conn.commit()
            st.success("Dodano!")
        else:
            st.error("Uzupełnij wszystkie pola poprawnie!")

# Reset listy
if st.button("🗑️ Resetuj listę zakupów"):
    c.execute("DELETE FROM zakupy")
    conn.commit()
    st.warning("Lista została wyczyszczona!")

# Pobranie przedmiotów
c.execute("SELECT id, nazwa, cena_zakupu, ilosc, manual_price, manual_edited FROM zakupy")
rows = c.fetchall()

# Agregaty do historii
total_profit = 0.0
total_spent = 0.0
total_value = 0.0

# Wyświetlanie items
if rows:
    st.subheader("📋 Twoje przedmioty")
else:
    st.info("Brak przedmiotów — dodaj coś w formularzu powyżej.")

for id_, nazwa, cena_zakupu, ilosc, manual_price, manual_edited in rows:
    # normalizacja
    nazwa = str(nazwa)
    cena_zakupu = float(cena_zakupu) if cena_zakupu is not None else 0.0
    ilosc = int(ilosc) if ilosc is not None else 1

    manual_price_use = float(manual_price) if manual_price not in (None, "") else None
    cena_display_raw = manual_price_use if manual_price_use is not None else pobierz_cene(nazwa)
    cena_display = cena_display_raw if isinstance(cena_display_raw, float) else 0.0

    zysk = (cena_display - cena_zakupu) * ilosc
    procent = ((cena_display - cena_zakupu) / cena_zakupu * 100) if cena_zakupu != 0 else 0.0

    total_spent += cena_zakupu * ilosc
    total_value += cena_display * ilosc
    total_profit += zysk

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
        # Cena zakupu na górze, wyśrodkowana
        st.markdown(
            f"<div style='text-align:center; background-color:rgba(255,255,255,0.08); padding:6px; border-radius:6px'>"
            f"<span style='font-size:22px; font-weight:bold; color:white'>🛒 Cena zakupu: {cena_zakupu:.2f} zł</span>"
            f"</div>", unsafe_allow_html=True
        )

        # Obecna cena (po lewej) i zysk (po prawej)
        left_html = (f"<span style='font-size:22px; font-weight:bold; color:white'>💰 {cena_display:.2f} zł</span>"
                     if isinstance(cena_display_raw, float) else f"<span style='color:orange; font-weight:bold'>⚠️ {cena_display_raw}</span>")
        right_html = (f"<span style='font-size:22px; font-weight:bold;'>"
                      f"<span style='color:{kolor_zysk}'>{znak}{zysk:.2f} zł</span>"
                      f" <span style='color:{kolor_proc}; font-weight:bold'>({procent:.2f}%)</span>"
                      f"</span>")

        st.markdown(
            f"<div style='background-color:{exp_color}; padding:8px; border-radius:6px'>"
            f"<div style='display:flex; justify-content:space-between; align-items:center'>"
            f"{left_html}{right_html}"
            f"</div></div>", unsafe_allow_html=True
        )

        # Edycja
        new_name = st.text_input("Nazwa przedmiotu", nazwa, key=f"name_{id_}")
        new_cena_zakupu = st.number_input("Cena zakupu (zł)", value=float(cena_zakupu), step=0.01, key=f"buy_{id_}")
        new_ilosc = st.number_input("Ilość", value=int(ilosc), min_value=1, step=1, key=f"qty_{id_}")

        # Ręczna cena (na dole)
        manual_price_input = st.number_input(
            "Ręczna cena rynkowa (opcjonalnie)",
            value=float(manual_price) if manual_price not in (None, "") else 0.0,
            step=0.01,
            key=f"manual_{id_}"
        )
        if manual_price_input > 0 and (manual_price is None or abs(float(manual_price_input) - float(manual_price or 0)) > 1e-8):
            try:
                c.execute("UPDATE zakupy SET manual_price=?, manual_edited=1 WHERE id=?", (float(manual_price_input), id_))
                conn.commit()
                st.success("Ręczna cena zapisana.")
            except Exception as e:
                st.error(f"Nie udało się zapisać ręcznej ceny: {e}")

        # Zapis zmian
        if st.button("💾 Zapisz zmiany", key=f"save_{id_}"):
            try:
                c.execute("UPDATE zakupy SET nazwa=?, cena_zakupu=?, ilosc=? WHERE id=?",
                          (new_name.strip(), float(new_cena_zakupu), int(new_ilosc), id_))
                conn.commit()
                st.success("Zapisano zmiany.")
            except Exception as e:
                st.error(f"Nie udało się zapisać zmian: {e}")

        # Usuń
        if st.button("🗑️ Usuń", key=f"del_{id_}"):
            try:
                c.execute("DELETE FROM zakupy WHERE id=?", (id_,))
                conn.commit()
                st.warning("Usunięto przedmiot.")
            except Exception as e:
                st.error(f"Nie udało się usunąć: {e}")

# ------------------------------
# Podsumowanie portfela (wartości i procent)
# ------------------------------
st.subheader("📊 Podsumowanie portfela")
st.write(f"💸 Łączne wydatki: **{total_spent:.2f} zł**")
st.write(f"💰 Obecna wartość: **{total_value:.2f} zł**")

profit_percent = ((total_value - total_spent) / total_spent * 100) if total_spent > 0 else 0.0
if profit_percent >= 0:
    st.success(f"📈 Łączny wynik: **{profit_percent:.2f}%**")
else:
    st.error(f"📉 Łączny wynik: **{profit_percent:.2f}%**")

# ------------------------------
# Zapis historii portfela (zabezpieczony)
# ------------------------------
today = datetime.today().strftime("%Y-%m-%d")
# upewnij się, że wartości są liczbami
try:
    profit_val = float(total_profit)
except Exception:
    profit_val = 0.0
try:
    profit_pct = float(profit_percent)
except Exception:
    profit_pct = 0.0

# zapisujemy obie wartości (jeśli kolumny istnieją — migracja wyżej je utworzyła)
try:
    c.execute("INSERT OR REPLACE INTO historia_portfela (data, profit, profit_percent) VALUES (?, ?, ?)",
              (today, profit_val, profit_pct))
    conn.commit()
except Exception as e:
    st.error(f"Nie udało się zapisać historii portfela: {e}")

# ------------------------------
# Tryb wykresu (procenty vs zł)
# ------------------------------
mode = st.radio("📊 Tryb wykresu:", ["% (procenty)", "zł (kwota)"])

# Pobierz historię (bez wymuszonego ORDER BY; wyświetlamy wg daty w Pandas)
c.execute("SELECT data, profit, profit_percent FROM historia_portfela")
historia = c.fetchall()

if historia:
    df_hist = pd.DataFrame(historia, columns=["Data", "Profit", "Profit %"])
    # konwersja daty i sortowanie po dacie (żeby wykres był logiczny)
    df_hist["Data"] = pd.to_datetime(df_hist["Data"], errors='coerce')
    df_hist = df_hist.dropna(subset=["Data"]).sort_values("Data")
    st.subheader("📈 Historia portfela")
    if mode == "% (procenty)":
        st.line_chart(df_hist.set_index("Data")["Profit %"])
    else:
        st.line_chart(df_hist.set_index("Data")["Profit"])
else:
    st.info("Brak zapisanej historii portfela – zostanie utworzona dzisiaj po wyliczeniu wartości.")
