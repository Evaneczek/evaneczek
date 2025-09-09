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

# Tworzymy tabelę z kolumnami manual_price i manual_edited
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

# ------------------------------
# Funkcja pobierająca cenę z Steam
# ------------------------------
def pobierz_cene(nazwa, retries=2):
    nazwa_encoded = quote(nazwa)
    url = f"https://steamcommunity.com/market/priceoverview/?country=PL&currency=6&appid=730&market_hash_name={nazwa_encoded}"
    headers = {"User-Agent": "Mozilla/5.0"}

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
# Funkcja pobierająca średnią cenę z historii (przykład)
# ------------------------------
def pobierz_srednia_cene(nazwa):
    """Zwraca przykładowe wartości dla 7 i 30 dni w zł i procenty w stosunku do obecnej ceny"""
    # W praktyce trzeba by użyć pricehistory API Steam i sparsować JSON
    # Tu damy symulowane wartości dla przykładu
    import random
    srednia_7 = round(random.uniform(0.9, 1.1), 2)
    srednia_30 = round(random.uniform(0.85, 1.15), 2)
    return srednia_7, srednia_30

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
c.execute("SELECT id, nazwa, cena_zakupu, ilosc, manual_price, manual_edited FROM zakupy")
rows = c.fetchall()

if rows:
    st.subheader("📋 Twoje przedmioty")
    total_spent = 0
    total_value = 0

    for id_, nazwa, cena_zakupu, ilosc, manual_price, manual_edited in rows:
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

        # Dodajemy ✏️ jeśli ręcznie zmieniono cenę
        if manual_edited == 1:
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

            # Pobranie przykładowych średnich cen 7 i 30 dni
            if isinstance(cena_display, float) and cena_display > 0:
                srednia_7, srednia_30 = pobierz_srednia_cene(new_name)
                proc_7 = round((srednia_7 - cena_display)/cena_display*100,2)
                proc_30 = round((srednia_30 - cena_display)/cena_display*100,2)
                st.markdown(
                    f"<span style='color:gray'>Średnia 7 dni: {srednia_7} zł ({proc_7}%) | "
                    f"Średnia 30 dni: {srednia_30} zł ({proc_30}%)</span>", unsafe_allow_html=True
                )

            # Obliczenia zysku/straty z dużą białą ceną
            if cena_display:
                zysk = (cena_display - new_cena_zakupu) * new_ilosc
                procent = (cena_display - new_cena_zakupu) / new_cena_zakupu * 100
                zysk_display = round(zysk, 2)
                procent_display = round(procent, 2)
                total_spent += new_cena_zakupu * new_ilosc
                total_value += cena_display * new_ilosc

                if zysk > 0:
                    st.markdown(
                        f"<span style='font-size:22px; color:white; font-weight:bold'>{cena_display} zł</span> "
                        f"<span style='color:green'>📈 Zysk: {zysk_display} zł ({procent_display}%)</span>",
                        unsafe_allow_html=True
                    )
                elif zysk < 0:
                    st.markdown(
                        f"<span style='font-size:22px; color:white; font-weight:bold'>{cena_display} zł</span> "
                        f"<span style='color:red'>📉 Strata: {zysk_display} zł ({procent_display}%)</span>",
                        unsafe_allow_html=True
                    )
                else:
                    st.markdown(
                        f"<span style='font-size:22px; color:white; font-weight:bold'>{c
