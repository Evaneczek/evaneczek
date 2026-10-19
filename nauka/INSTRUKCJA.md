# Atlas Wykładów

Strona do nauki: https://claude.ai/artifact/3dBi7aqwMkoWdjyG3PBomF

`atlas-wykladow.html` to źródło strony (Artifact z możliwościami `db`, `user` i `sample`).
Przedmioty, wykłady i postępy są zapisane w bazie strony, nie w tym repozytorium.
Zmiany w wyglądzie publikuj z tego pliku pod ten sam adres.

## Jak Claude dodaje nowy wykład

Kolekcje w bazie tej strony:
- subjects/{id}: {name, stain, exam: "RRRR-MM-DD" | null, order: liczba, createdAt: ISO}
  stain: indygo | morski | granat | malina | sliwka | pomarancz | miod | oliwka | grafit | braz
  Obecne przedmioty (id): podstawy-zarzadzania, podstawy-finansow, podstawy-prawa, podstawy-psychologii,
  podstawy-filozofii, generatywna-ai, profesjonalna-komunikacja, jezyk-angielski, jezyk-niemiecki.
- notes/{id}: {subjectId, nr, title, source (nazwa pliku), lectureDate: "RRRR-MM-DD" | null, addedAt: ISO, addedBy: "claude",
  summary (Markdown, 2–4 zdania), highYield: [Markdown], sections: [{heading, body (Markdown)}],
  terms: [{term, def}], mnemonics: [Markdown], practice: [Markdown — przykłady z praktyki],
  flashcards: [{q, a}], quiz: [{q, options: [4 odpowiedzi], answer: indeks 0–3, why}], tags: [tekst]}
- meta/plan: plan zajęć — użytkownik poprosił o jego usunięcie (19.10.2026). Nie dodawaj planu z powrotem, chyba że wyraźnie o to poprosi.
  Format, gdyby chciał go znowu: {items: [{d: "RRRR-MM-DD", s: "GG:MM", e: "GG:MM", sid, t: "w" | "ćw" | "k" | "el", who, room}]}.
- data/users/<id>/... — prywatny postęp użytkownika (status wykładów, fiszki, wyniki testów). Nie ruszać.

Kroki przy nowej prezentacji:
1. Odczytaj subjects i dopasuj przedmiot po nazwie. Jeśli go nie ma, zapytaj użytkownika.
2. Odczytaj notes z tym subjectId; nr = największy nr + 1 (wykłady numerowane kolejno od 1).
3. lectureDate: data wykładu, jeśli wynika z pliku albo z wiadomości użytkownika; inaczej null.
4. Przeczytaj całą prezentację, także obrazy, schematy i tabele. Pisz po polsku, zwięźle, w punktach; kluczowe pojęcia i liczby pogrubiaj; porównania jako tabele Markdown. Zachowaj kolejność tematów.
   Liczebność: sections 4–10, terms 5–15, flashcards 10–25, quiz 6–12 (różna pozycja poprawnej odpowiedzi). practice i mnemonics tylko gdy pasują.
5. Zapisz notes/n-RRRRMMDD-xxxx (xxxx = 4 losowe znaki) z addedBy "claude".
6. Podaj użytkownikowi: przedmiot, numer wykładu, tytuł i liczbę fiszek/pytań.

Zapis do bazy idzie przez narzędzie `ArtifactData` z adresem strony powyżej.
Ta sama instrukcja leży w bazie strony jako dokument `meta/instrukcja`.
