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
