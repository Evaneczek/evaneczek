import streamlit as st
import sqlite3
import requests
from requests.utils import quote

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
def pobierz_cene(nazwa):
    nazwa_encoded = quote(nazwa)
    url = f"https://steamcommunity.com/market/priceoverview/?country=PL&currency=6&appid=730&market_hash_name={nazwa_encoded}"
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}

    try:
        r = requests.get(url, headers=headers, timeout=5).json()
        if r.get('success') and r.get('lowest_price'):
            cena_str = r['lowest_price'].replace('zł', '').replace(',', '.').strip()
            return float(cena_str)
        else:
            return None
    except Exception as e:
        print("Błąd przy pobieraniu ceny:", e)
        return None

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

# Pobranie danych z bazy
c.execute("SELECT nazwa, cena_zakupu, ilosc FROM zakupy")
rows = c.fetchall()

# Wyświetlanie tabeli
if rows:
    data = []
    for nazwa, cena_zakupu, ilosc in rows:
        cena_aktualna = pobierz_cene(nazwa)

        if cena_aktualna is None:
            zysk = None
            procent = None
            cena_aktualna_display = "Sprawdź nazwę przedmiotu"
        else:
            zysk = (cena_aktualna - cena_zakupu) * ilosc
            procent = (cena_aktualna - cena_zakupu) / cena_zakupu * 100
            cena_aktualna_display = round(cena_aktualna, 2)

        data.append([
            nazwa,
            round(cena_zakupu, 2),
            cena_aktualna_display,
            ilosc,
            round(zysk, 2) if zysk is not None else "-",
            f"{round(procent, 2)}%" if procent is not None else "-"
        ])

    st.table(data)
