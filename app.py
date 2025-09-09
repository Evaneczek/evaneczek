import streamlit as st
import sqlite3
import requests
from requests.utils import quote
import pandas as pd
import time

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
c.execute("SELECT id, nazwa, cena_zakupu, ilosc FROM zakupy")
rows = c.fetchall()

# Wyświetlanie tabeli z edycją
if rows:
    st.subheader("📋 Twoje przedmioty")

    updated_rows = []
    for id_, nazwa, cena_zakupu, ilosc in rows:
        with st.expander(f"✏️ {nazwa} (ID: {id_})"):
            # Edycja nazwy i ceny zakupu
            new_name = st.text_input(f"Nazwa przedmiotu (ID {id_})", nazwa, key=f"name_{id_}")
            new_cena_zakupu = st.number_input(f"Cena zakupu (zł) (ID {id_})", value=float(cena_zakupu), step=0.01, key=f"buy_{id_}")
            new_ilosc = st.number_input(f"Ilość (ID {id_})", value=int(ilosc), min_value=1, step=1, key=f"qty_{id_}")

            # Pobieranie ceny z API
            cena_aktualna = pobierz_cene(new_name)

            if isinstance(cena_aktualna, float):
                cena_display = round(cena_aktualna, 2)
                manual_price = None
            else:
                # Jeśli API zwróci błąd -> użytkownik może wpisać cenę ręcznie
                st.warning(f"⚠️ {cena_aktualna} – możesz wpisać ręcznie cenę.")
                manual_price = st.number_input(f"Ręczna cena rynkowa (ID {id_})", step=0.01, key=f"manual_{id_}")
                cena_display = manual_price if manual_price else cena_aktualna

            # Obliczenia zysku
            if isinstance(cena_display, float):
                zysk = (cena_display - new_cena_zakupu) * new_ilosc
                procent = (cena_display - new_cena_zakupu) / new_cena_zakupu * 100
                zysk_display = round(zysk, 2)
                procent_display = f"{round(procent, 2)}%"
            else:
                zysk_display = "-"
                procent_display = "-"

            st.write(f"💰 Aktualna cena: {cena_display}")
            st.write(f"📈 Zysk: {zysk_display} ({procent_display})")

            # Zapis zmian
            if st.button(f"💾 Zapisz zmiany (ID {id_})", key=f"save_{id_}"):
                c.execute("UPDATE zakupy SET nazwa=?, cena_zakupu=?, ilosc=? WHERE id=?", (new_name, new_cena_zakupu, new_ilosc, id_))
                conn.commit()
                st.success(f"Zapisano zmiany dla {new_name}")
                st.experimental_rerun()

            # Usuwanie
            if st.button(f"🗑️ Usuń (ID {id_})", key=f"del_{id_}"):
                c.execute("DELETE FROM zakupy WHERE id=?", (id_,))
                conn.commit()
                st.warning(f"Usunięto: {nazwa}")
                st.experimental_rerun()
