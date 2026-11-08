"""
Autoklikacz + automatyczne wklejanie (Windows / macOS / Linux z X11).

Co robi:
  - co 30 sekund: klika lewym przyciskiem w wybrane miejsce na ekranie
  - co 5 minut:   Enter -> Ctrl+V -> Enter -> Enter

Uruchomienie:
  pip install pyautogui
  python autoklikacz.py

Po starcie masz 5 sekund, żeby najechać myszką na miejsce do klikania.
Skrypt zapamięta tę pozycję.

Zatrzymanie:
  - Ctrl+C w oknie terminala, albo
  - szybko przesuń mysz w LEWY GÓRNY RÓG ekranu (awaryjny stop).
"""
import sys
import time

import pyautogui

# --- USTAWIENIA (możesz zmienić) ---
CLICK_INTERVAL = 30        # co ile sekund klikać
PASTE_INTERVAL = 5 * 60    # co ile sekund robić Enter, Ctrl+V, Enter, Enter
COUNTDOWN = 5              # ile sekund na ustawienie myszy przed startem
# Jeśli chcesz wpisać współrzędne na sztywno, podaj je tu, np. CLICK_POS = (800, 450)
CLICK_POS = None
# ----------------------------------

pyautogui.FAILSAFE = True   # mysz w lewy górny róg = stop
pyautogui.PAUSE = 0.05

# Na macOS wklejanie to Cmd+V, wszędzie indziej Ctrl+V
PASTE_KEY = "command" if sys.platform == "darwin" else "ctrl"


def wybierz_miejsce():
    print(f"Najedź myszką na miejsce, w które mam klikać. Masz {COUNTDOWN} s...")
    for i in range(COUNTDOWN, 0, -1):
        print(f"  {i}...", flush=True)
        time.sleep(1)
    x, y = pyautogui.position()
    print(f"Zapisano pozycję: x={x}, y={y}")
    return x, y


def wklej():
    pyautogui.press("enter")
    time.sleep(0.3)
    pyautogui.hotkey(PASTE_KEY, "v")
    time.sleep(0.3)
    pyautogui.press("enter")
    time.sleep(0.3)
    pyautogui.press("enter")


def teraz_txt():
    return time.strftime("%H:%M:%S")


def main():
    x, y = CLICK_POS if CLICK_POS else wybierz_miejsce()

    print(f"START. Klik co {CLICK_INTERVAL} s, Enter+Ctrl+V+Enter+Enter co {PASTE_INTERVAL} s.")
    print("Stop: Ctrl+C albo mysz w lewy górny róg ekranu.\n")

    start = time.monotonic()
    nastepny_klik = start + CLICK_INTERVAL
    nastepne_wklejenie = start + PASTE_INTERVAL

    try:
        while True:
            teraz = time.monotonic()

            if teraz >= nastepny_klik:
                pyautogui.click(x, y)
                print(f"{teraz_txt()}  klik ({x}, {y})")
                nastepny_klik = teraz + CLICK_INTERVAL

            if teraz >= nastepne_wklejenie:
                wklej()
                print(f"{teraz_txt()}  Enter + Ctrl+V + Enter + Enter")
                nastepne_wklejenie = teraz + PASTE_INTERVAL

            time.sleep(0.2)
    except KeyboardInterrupt:
        print("\nZatrzymano (Ctrl+C).")
    except pyautogui.FailSafeException:
        print("\nZatrzymano (mysz w rogu ekranu).")


if __name__ == "__main__":
    main()
