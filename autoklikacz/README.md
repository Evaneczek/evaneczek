# Autoklikacz

Dwa skrypty robiące to samo:

- **co 30 sekund** – klik w wybrane miejsce na ekranie,
- **co 5 minut** – `Enter` → `Ctrl+V` → `Enter` → `Enter`.

Klawisze trafiają do aktywnego okna (zwykle tego, w które właśnie kliknął autoklikacz).

## Wersja 1: AutoHotkey (Windows, najprościej)

1. Zainstaluj AutoHotkey **v2** ze strony https://www.autohotkey.com
2. Kliknij dwa razy `autoklikacz.ahk`.
3. Najedź myszką na miejsce do klikania i wciśnij **F6** (zapisuje pozycję).
4. **F7** – start / pauza, **F8** – zamknięcie.

## Wersja 2: Python (Windows / macOS / Linux)

```
pip install pyautogui
python autoklikacz.py
```

Po starcie masz 5 sekund, żeby najechać myszką na miejsce do klikania.
Zatrzymanie: `Ctrl+C` w terminalu albo szybko przesuń mysz w **lewy górny róg** ekranu.

Czasy zmienisz na górze pliku (`CLICK_INTERVAL`, `PASTE_INTERVAL`).

- macOS: zamiast Ctrl+V używany jest Cmd+V; terminal musi mieć uprawnienie
  „Dostępność” (Ustawienia → Prywatność i ochrona → Dostępność).
- Linux: potrzebne `sudo apt install python3-tk` i sesja X11 (nie Wayland).
