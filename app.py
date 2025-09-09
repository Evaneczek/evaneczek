import streamlit as st
import sqlite3
import requests
from requests.utils import quote
import time

# ------------------------------
# Baza danych
# ------------------------------
conn = sqlite3.connect("zakupy.db", check_same_thread=False)
c = conn.cursor()

# Tworzymy tabelę z kolumną manual_price
c.execute("""
CREATE TABLE IF NOT EXISTS zakupy (
    id INTEGER PRIMARY KEY,
    nazwa TEXT,
    cena_zakupu REAL,
    ilosc INTEGER
)
""")
conn.commit()

# Dodanie kolumny manual_price jeśli nie istnieje
try:
    c.execute("ALTER TABLE zakupy ADD COLUMN manual_price REAL")
    conn.commit()
except sqlite3.OperationalError:
    pass

# ------------------------------
# Funkcja pobierająca cenę z Steam
# ------------------------------
def pobierz_cene(nazwa, retries=2):
    nazwa_encoded = quote(nazwa)
    url = f"https://steamcommunity.com/market/priceoverview/?country=PL&currency=6&appid=730&market_hash_name={nazwa_encoded}"
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}

    for attempt in range(retries):
        try:
            r = requests.get(url, headers=headers, timeout=5)
            if r.status_code != 200:
                time.sleep(1)
                continue

            data = r.json()
            if not data.get("success"):
                return "Błąd nazwy"
            elif not data.get("lowest_price"):
                return "Brak ofert"
            else:
                cena_str = data["lowest_price"].replace("zł", "").replace(",", ".").strip()
                return float(cena_str)

        except Exception as e:
            print(f"Próba {attempt+1}: błąd przy pobieraniu ceny {nazwa} -> {e}")
            time.sleep(1)

    return "Błąd połączenia"

# ------------------------------
# Interfejs Streamlit
# ------------------------------
st.title("📊 Steam Skins Tracker")

# Formularz dodawania przedmiotu
with st.form("dodaj_form"):
    nazwa = st.text_input("Nazwa przedmiotu (market_hash_name)")
    cena = st.number_input("Cena zakupu (zł)", step=0.01)
    ilosc = st.number_input("Ilość", min_value=1, step=1)
    if st.form_submit_button("Dodaj"):
        if nazwa and cena > 0 and ilosc > 0:
            c.execute("INSERT INTO zakupy (nazwa, cena_zakupu, ilosc) VALUES (?, ?, ?)", (nazwa, cena, ilosc))
            conn.commit()
            st.success("Dodano!")
        else:
            st.error("Uzupełnij wszystkie pola poprawnie!")

# Resetowanie całej listy
if st.button("🔄 Resetuj listę zakupów"):
    c.execute("DELETE FROM zakupy")
    conn.commit()
    st.warning("Lista została wyczyszczona!")

# Pobranie danych z bazy
c.execute("SELECT id, nazwa, cena_zakupu, ilosc, manual_price FROM zakupy")
rows = c.fetchall()

# ------------------------------
# Wyświetlanie tabeli z edycją
# ------------------------------
if rows:
    st.subheader("📋 Twoje przedmioty")

    total_spent = 0
    total_value = 0

    for id_, nazwa, cena_zakupu, ilosc, manual_price in rows:
        if f"manual_edited_{id_}" not in st.session_state:
            st.session_state[f"manual_edited_{id_}"] = False

        manual_price_use = manual_price if manual_price else None

        # Początkowa cena do wyświetlenia
        if manual_price_use is not None:
            cena_display = manual_price_use
        else:
            cena_aktualna = pobierz_cene(nazwa)
            cena_display = round(cena_aktualna, 2) if isinstance(cena_aktualna, float) else 0.0

        # Obliczamy zysk/stratę
        if cena_display:
            zysk = (cena_display - cena_zakupu) * ilosc
        else:
            zysk = 0

        # Tworzymy label expandera z kolorem zysku/straty
        expander_label = nazwa
        if zysk > 0:
            expander_label += " 🟢"
        elif zysk < 0:
            expander_label += " 🔴"

        # Dodajemy ✏️ jeśli wcześniej ręcznie zmieniono cenę
        if st.session_state[f"manual_edited_{id_}"]:
            expander_label = f"✏️ {expander_label}"

        with st.expander(expander_label):
            # Edycja nazwy i ilości
            new_name = st.text_input(f"Nazwa przedmiotu", nazwa, key=f"name_{id_}")
            new_cena_zakupu = st.number_input(f"Cena zakupu (zł)", value=float(cena_zakupu), step=0.01, key=f"buy_{id_}")
            new_ilosc = st.number_input(f"Ilość", value=int(ilosc), min_value=1, step=1, key=f"qty_{id_}")

            # Pobranie ceny automatycznie jeśli brak manual_price
            if manual_price_use is not None:
                cena_display = manual_price_use
            else:
                cena_aktualna = pobierz_cene(new_name)
                if isinstance(cena_aktualna, float):
                    cena_display = round(cena_aktualna, 2)
                else:
                    st.warning(f"⚠️ {cena_aktualna} – możesz wpisać ręcznie cenę.")
                    cena_display = 0.0

            # Obliczenia zysku/straty z kolorami i pogrubioną ceną
            if cena_display:
                zysk = (cena_display - new_cena_zakupu) * new_ilosc
                procent = (cena_display - new_cena_zakupu) / new_cena_zakupu * 100
                zysk_display = round(zysk, 2)
                procent_display = round(procent, 2)
                total_spent += new_cena_zakupu * new_ilosc
                total_value += cena_display * new_ilosc

                if zysk > 0:
                    st.markdown(f"<span style='color:green'><b>{cena_display} zł</b> 📈 Zysk: {zysk_display} zł ({procent_display}%)</span>", unsafe_allow_html=True)
                elif zysk < 0:
                    st.markdown(f"<span style='color:red'><b>{cena_display} zł</b> 📉 Strata: {zysk_display} zł ({procent_display}%)</span>", unsafe_allow_html=True)
                else:
                    st.write(f"📈 Zysk/strata: 0 zł")
            else:
                st.write("⚠️ Brak ceny – możesz wpisać ręcznie")

            # -------------------------
            # Ręczna cena na sam dół
            # -------------------------
            manual_price_input = st.number_input(
                "Ręczna cena rynkowa (opcjonalnie)", 
                value=manual_price_use if manual_price_use else 0.0, 
                step=0.01, 
                key=f"manual_{id_}"
            )
            st.markdown("<small style='color:gray'>Ręczna cena nie jest wymagana, używana tylko w wyjątkowych przypadkach</small>", unsafe_allow_html=True)

            # Sprawdzenie ręcznej zmiany
            if manual_price_input != (manual_price_use if manual_price_use else 0.0):
                st.session_state[f"manual_edited_{id_}"] = True
            manual_price_use = manual_price_input if manual_price_input > 0 else None

            # Zapis zmian
            if st.button(f"💾 Zapisz zmiany", key=f"save_{id_}"):
                c.execute("UPDATE zakupy SET nazwa=?, cena_zakupu=?, ilosc=?, manual_price=? WHERE id=?",
                          (new_name, new_cena_zakupu, new_ilosc, manual_price_use, id_))
                conn.commit()
                st.success(f"Zapisano zmiany dla {new_name}")
                st.rerun()

            # Usuwanie
            if st.button(f"🗑️ Usuń", key=f"del_{id_}"):
                c.execute("DELETE FROM zakupy WHERE id=?", (id_,))
                conn.commit()
                st.warning(f"Usunięto: {nazwa}")
                st.rerun()

    # ------------------------------
    # Podsumowanie portfela
    # ------------------------------
    st.subheader("📊 Podsumowanie portfela")
    st.write(f"💸 Łączne wydatki: **{round(total_spent, 2)} zł**")
    st.write(f"💰 Obecna wartość: **{round(total_value, 2)} zł**")
    if total_spent > 0:
        total_profit = total_value - total_spent
        total_percent = (total_profit / total_spent) * 100
        if total_profit >= 0:
            st.success(f"📈 Łączny zysk: **{round(total_profit, 2)} zł ({round(total_percent, 2)}%)**")
        else:
            st.error(f"📉 Łączna strata: **{round(total_profit, 2)} zł ({round(total_percent, 2)}%)**")
