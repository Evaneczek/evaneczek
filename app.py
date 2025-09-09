import streamlit as st
import sqlite3
import requests
from requests.utils import quote
import pandas as pd

# ------------------------------
# Baza danych
# ------------------------------
conn = sqlite3.connect("zakupy.db")
c = conn.cursor()
c.execute("""
CREATE TABLE IF NOT EXISTS zakupy (
    id INTEGER PRIMARY KEY,
    nazwa TEXT,
    cena_zakupu REAL,
    ilosc INTEGER
)
""")
conn.commit()

# ------------------------------
# Funkcja pobierająca cenę z Steam
# ------------------------------
import time

def pobierz_cene(nazwa, retries=3):
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

# Pobranie danych z bazy (z ID!)
c.execute("SELECT id, nazwa, cena_zakupu, ilosc FROM zakupy")
rows = c.fetchall()

# Wyświetlanie tabeli
if rows:
    data = []
    for id_, nazwa, cena_zakupu, ilosc in rows:
        cena_aktualna = pobierz_cene(nazwa)

        if isinstance(cena_aktualna, float):
            zysk = (cena_aktualna - cena_zakupu) * ilosc
            procent = (cena_aktualna - cena_zakupu) / cena_zakupu * 100
            cena_display = round(cena_aktualna, 2)
            zysk_display = round(zysk, 2)
            procent_display = f"{round(procent, 2)}%"
        else:
            cena_display = cena_aktualna  # komunikat z funkcji
            zysk_display = "-"
            procent_display = "-"

        # Dodajemy przycisk usuwania (unikalny klucz key=id_)
        delete_button = st.button(f"Usuń {nazwa}", key=f"del_{id_}")
        if delete_button:
            c.execute("DELETE FROM zakupy WHERE id=?", (id_,))
            conn.commit()
            st.warning(f"Usunięto: {nazwa}")
            st.experimental_rerun()  # odświeżenie strony

        data.append([
            nazwa,
            round(cena_zakupu, 2),
            cena_display,
            ilosc,
            zysk_display,
            procent_display
        ])

    # Tworzymy dataframe i wyświetlamy
    df = pd.DataFrame(data, columns=["Nazwa", "Cena zakupu", "Cena aktualna", "Ilość", "Zysk", "Procent"])
    st.dataframe(df, use_container_width=True)
