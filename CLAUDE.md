# Notatki dla Claude

W tym repo są dwa niezależne projekty:

- `app.py`: Steam Skins Tracker (Streamlit).
- `nauka/`: Atlas Wykładów, strona do nauki ze studiów: https://claude.ai/artifact/3dBi7aqwMkoWdjyG3PBomF

Gdy użytkownik przysyła prezentację (albo nazwę pliku na Dysku Google) i chce z niej notatek,
przerób ją na wykład w Atlasie według `nauka/INSTRUKCJA.md`. Planu zajęć użytkownik
na stronie nie chce (usunięty na prośbę) — nie dodawaj go bez wyraźnej prośby.

Oszczędzaj limit użycia (prośba użytkownika, 20.10.2026): prezentacje przerabiaj sam, w jednym
przebiegu, bez Workflow i bez dodatkowych agentów. Obrazy slajdów oglądaj tylko wtedy, gdy tekst
z pliku ich nie oddaje (diagramy, tabele, osie czasu). Przed zapisem sprawdź notatkę skryptem
`nauka/tools/validate_note.py` (z `--theory` dla przedmiotów teoretycznych).
