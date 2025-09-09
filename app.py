import streamlit as st
import sqlite3
import requests

# Baza danych
conn = sqlite3.connect("zakupy.db")
c = conn.cursor()
c.execute("""CREATE TABLE IF NOT EXISTS zakupy (
    id INTEGER PRIMARY KEY,
    nazwa TEXT,
    cena_zakupu REAL,
    ilosc INTEGER
)""")
conn.commit()

# Funkcja do pobierania cen
def pobierz_cene(nazwa):
    url = f"https://steamcommunity.com/market/priceoverview/?country=PL&currency=6&appid=730&market_hash_name={nazwa.replace(' ', '%20')}"
    try:
        r = requests.get(url, timeout=5).json()
        if r.get('success') and r.get('lowest_price'):
            # Usuwamy wszystko oprócz cyfr i kropki
            cena_str = r['lowest_price'].replace('zł', '').replace(',', '.').strip()
            return float(cena_str)
        else:
            return None
    except Exception as e:
        print("Błąd przy pobieraniu ceny:", e)
        return None

# UI
st.title("📊 Steam Skins Tracker")

# Dodawanie przedmiotu
with st.form("dodaj_form"):
    nazwa = st.text_input("Nazwa przedmiotu (market_hash_name)")
    cena = st.number_input("Cena zakupu (zł)", step=0.01)
    ilosc = st.number_input("Ilość", min_value=1, step=1)
    if st.form_submit_button("Dodaj"):
        c.execute("INSERT INTO zakupy (nazwa, cena_zakupu, ilosc) VALUES (?, ?, ?)", (nazwa, cena, ilosc))
        conn.commit()
        st.success("Dodano!")

# Wyświetlanie tabeli
c.execute("SELECT nazwa, cena_zakupu, ilosc FROM zakupy")
rows = c.fetchall()

if rows:
    data = []
    for nazwa, cena_zakupu, ilosc in rows:
        cena_aktualna = pobierz_cene(nazwa)
        zysk = (cena_aktualna - cena_zakupu) * ilosc
        procent = (cena_aktualna - cena_zakupu) / cena_zakupu * 100
        data.append([nazwa, cena_zakupu, cena_aktualna, ilosc, round(zysk, 2), f"{round(procent, 2)}%"])

    st.table(data)
