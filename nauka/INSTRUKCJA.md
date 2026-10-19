# Atlas Wykładów

Strona do nauki: https://claude.ai/artifact/3dBi7aqwMkoWdjyG3PBomF

`atlas-wykladow.html` to źródło strony (Artifact z możliwościami `db`, `user` i `sample`).
Przedmioty, wykłady i postępy są zapisane w bazie strony, nie w tym repozytorium.
Zmiany w wyglądzie publikuj z tego pliku pod ten sam adres.

## Jak Claude dodaje nowy wykład

Kolekcje w bazie tej strony:
- subjects/{id}: {name, stain, exam: "RRRR-MM-DD" | null, order: liczba, createdAt: ISO, example?: bool}
  stain: eozyna | hema | trichrom | sudan | pruski | pas | ziel | srebro
- notes/{id}: {subjectId, nr, title, source (nazwa pliku), lectureDate: "RRRR-MM-DD" | null, addedAt: ISO, addedBy: "claude",
  summary (Markdown, 2–4 zdania), highYield: [Markdown], sections: [{heading, body (Markdown)}],
  terms: [{term, def}], mnemonics: [Markdown], clinical: [Markdown],
  flashcards: [{q, a}], quiz: [{q, options: [4 odpowiedzi], answer: indeks 0–3, why}], tags: [tekst]}
- data/users/<id>/... — prywatny postęp użytkownika (status wykładów, fiszki, wyniki testów). Nie ruszać.

Kroki:
1. Odczytaj subjects i dopasuj przedmiot po nazwie. Jeśli go nie ma, zapytaj użytkownika albo utwórz nowy (order = max + 1).
2. Odczytaj notes z tym subjectId; nr = największy nr + 1 (wykłady numerowane kolejno od 1).
3. Przeczytaj całą prezentację, także obrazy, schematy i tabele. Pisz po polsku, zwięźle, w punktach; kluczowe pojęcia i liczby pogrubiaj; porównania jako tabele Markdown. Zachowaj kolejność tematów.
   Liczebność: sections 4–10, terms 5–15, flashcards 10–25, quiz 6–12 (różna pozycja poprawnej odpowiedzi). clinical i mnemonics tylko gdy pasują.
4. Zapisz notes/n-RRRRMMDD-xxxx (xxxx = 4 losowe znaki) z addedBy "claude", example pomiń.
5. Podaj użytkownikowi: przedmiot, numer wykładu, tytuł i liczbę fiszek/pytań.

Zapis do bazy idzie przez narzędzie `ArtifactData` z adresem strony powyżej.
Ta sama instrukcja leży w bazie strony jako dokument `meta/instrukcja`.
