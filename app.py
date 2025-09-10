import streamlit as st
import sqlite3
import requests
from requests.utils import quote
from datetime import datetime, timedelta
import time

# ------------------------------
# Ustawienia Telegrama
# ------------------------------
TELEGRAM_BOT_TOKEN = "7482427043:AAFfXkDqRerxw-k4KMRI_affG4SsKFr2QZI"
CHAT_ID = "6540530451"

def wyslij_telegram(msg):
    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
    try:
        requests.get(url, params={"chat_id": CHAT_ID, "text": msg})
    except:
        pass

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
    manual_edited INTEGER DEFAULT 0,
    alert_price REAL
)
""")
conn.commit()

# Tabela historii portfela
c.execute("""
CREATE TABLE IF NOT EXISTS historia_portfela (
    data TEXT PRIMARY KEY,
    profit REAL
)
""")
conn.commit()

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
    if nazwa in st.session_state.steam_cache:
        cena, timestamp = st.session_state.steam_cache[nazwa]
        if teraz - timestamp < CACHE_TIME:
            return cena
    nazwa_encoded = quote(nazwa)
    url = f"https://steamcommunity.com/market/priceoverview/?country=PL&currency=6&appid=730&market_hash_name={nazwa_encoded}"
    headers = {"User-Agent": "Mozilla/5.0"}
    try:
        r = requests.get(url, headers=headers, timeout=5)
        data = r.json()
        if not data.get("success") or not data.get("lowest_price"):
            return 0.0
        cena_str = data["lowest_price"].replace("zł", "").replace(",", ".").strip()
        cena = float(cena_str)
        st.session_state.steam_cache[nazwa] = (cena, teraz)
        st.session_state.last_refresh = teraz
        return cena
    except:
        return 0.0

# ------------------------------
# Interfejs Streamlit
# ------------------------------
st.title("📊 Steam Skins Tracker")

# Timer odświeżania
next_refresh = st.session_state.last_refresh + CACHE_TIME
remaining = next_refresh - datetime.now()
col1, col2 = st.columns([3,1])
with col1:
    if remaining.total_seconds() > 0:
        mins, secs = divmod(int(remaining.total_seconds()), 60)
        st.info(f"⏳ Odświeżenie cen za: **{mins} min {secs} sek**")
with col2:
    if st.button("♻️ Odśwież ceny teraz"):
        st.session_state.steam_cache = {}
        st.session_state.last_refresh = datetime.min
        st.success("✅ Cache wyczyszczony – nowe ceny pobiorą się przy kolejnym zapytaniu.")

# ------------------------------
# Formularz dodawania przedmiotu
# ------------------------------
with st.form("dodaj_form"):
    nazwa = st.text_input("Nazwa przedmiotu (market_hash_name)")
    cena = st.number_input("Cena zakupu (zł)", step=0.01)
    ilosc = st.number_input("Ilość", min_value=1, step=1)
    alert = st.number_input("Alert cenowy (opcjonalnie)", value=0.0, step=0.01)
    if st.form_submit_button("Dodaj"):
        if nazwa and cena > 0 and ilosc > 0:
            c.execute("INSERT INTO zakupy (nazwa, cena_zakupu, ilosc, alert_price) VALUES (?, ?, ?, ?)",
                      (nazwa, cena, ilosc, alert))
            conn.commit()
            st.success("Dodano!")
        else:
            st.error("Uzupełnij wszystkie pola poprawnie!")

# Resetowanie całej listy
if st.button("🗑️ Resetuj listę zakupów"):
    c.execute("DELETE FROM zakupy")
    conn.commit()
    st.warning("Lista została wyczyszczona!")

# ------------------------------
# Pobranie danych z bazy
# ------------------------------
c.execute("SELECT id, nazwa, cena_zakupu, ilosc, manual_price, manual_edited, alert_price FROM zakupy")
rows = c.fetchall()

total_profit = 0
total_spent = 0
total_value = 0

for id_, nazwa, cena_zakupu, ilosc, manual_price, manual_edited, alert_price in rows:
    manual_price_use = manual_price if manual_price else None
    cena_display = manual_price_use if manual_price_use else pobierz_cene(nazwa)

    # Wysyłanie alertu jeśli cena przekroczy alert_price
    if alert_price and cena_display >= alert_price:
        wyslij_telegram(f"🔥 {nazwa} osiągnęło alertową cenę: {cena_display} zł!")

    zysk = (cena_display - cena_zakupu) * ilosc if isinstance(cena_display, float) else 0
    procent = (cena_display - cena_zakupu) / cena_zakupu * 100 if isinstance(cena_display, float) and cena_zakupu != 0 else 0

    total_profit += zysk
    total_spent += cena_zakupu * ilosc
    total_value += cena_display * ilosc if isinstance(cena_display, float) else 0

    # Kolory
    kolor_proc = "limegreen" if procent >= 0 else "red"
    kolor_zysk = "#32CD32" if zysk >= 0 else "#FF6347"
    znak = "+" if zysk >= 0 else ""
    exp_color = "#003300" if zysk >= 0 else "#330000"

    label = nazwa
    if zysk > 0:
        label += " 🟢"
    elif zysk < 0:
        label += " 🔴"
    if manual_edited == 1:
        label = "✏️ " + label

    with st.expander(label):
        # Cena zakupu na górze
        st.markdown(
            f"<div style='text-align:center; background-color:rgba(255,255,255,0.1); padding:5px; border-radius:5px'>"
            f"<span style='font-size:24px; font-weight:bold; color:white'>🛒 Cena zakupu: {cena_zakupu} zł</span>"
            f"</div>", unsafe_allow_html=True
        )

        # Obecna cena i zysk
        st.markdown(
            f"<div style='background-color:{exp_color}; padding:5px; border-radius:5px'>"
            f"<div style='display:flex; justify-content: space-between; align-items:center'>"
            f"<span style='font-size:24px; font-weight:bold; color:white'>💰 {cena_display} zł</span>"
            f"<span style='font-size:24px; font-weight:bold;'>"
            f"<span style='color:{kolor_zysk}'>{znak}{round(zysk,2)} zł</span>"
            f"<span style='color:{kolor_proc}'> ({round(procent,2)}%)</span>"
            f"</span></div></div>", unsafe_allow_html=True
        )

        # Edycja danych
        new_name = st.text_input("Nazwa przedmiotu", nazwa, key=f"name_{id_}")
        new_cena_zakupu = st.number_input("Cena zakupu (zł)", value=float(cena_zakupu), step=0.01, key=f"buy_{id_}")
        new_ilosc = st.number_input("Ilość", value=int(ilosc), min_value=1, step=1, key=f"qty_{id_}")

        # Ręczna cena
        manual_price_input = st.number_input(
            "Ręczna cena rynkowa (opcjonalnie)",
            value=manual_price if manual_price else 0.0,
            step=0.01,
            key=f"manual_{id_}"
        )
        if manual_price_input > 0 and manual_price_input != manual_price:
            c.execute("UPDATE zakupy SET manual_price=?, manual_edited=1 WHERE id=?",
                      (manual_price_input, id_))
            conn.commit()
            manual_edited = 1

        # Zapis
        if st.button(f"💾 Zapisz zmiany", key=f"save_{id_}"):
            c.execute("UPDATE zakupy SET nazwa=?, cena_zakupu=?, ilosc=?, alert_price=? WHERE id=?",
                      (new_name, new_cena_zakupu, new_ilosc, alert_price, id_))
            conn.commit()
            st.success(f"Zapisano zmiany dla {new_name}")

        # Usuń
        if st.button(f"🗑️ Usuń", key=f"del_{id_}"):
            c.execute("DELETE FROM zakupy WHERE id=?", (id_,))
            conn.commit()
            st.warning(f"Usunięto: {nazwa}")

# ------------------------------
# Podsumowanie portfela
# ------------------------------
st.subheader("📊 Podsumowanie portfela")
st.write(f"💸 Łączne wydatki: **{round(total_spent,2)} zł**")
st.write(f"💰 Obecna wartość: **{round(total_value,2)} zł**")
if total_profit >= 0:
    st.success(f"📈 Łączny zysk: **{round(total_profit,2)} zł ({round(total_profit/total_spent*100,2)}%)**")
else:
    st.error(f"📉 Łączna strata: **{round(total_profit,2)} zł ({round(total_profit/total_spent*100,2)}%)**")
