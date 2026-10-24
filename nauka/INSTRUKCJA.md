# Atlas Wykładów

Strona do nauki: https://claude.ai/artifact/3dBi7aqwMkoWdjyG3PBomF

`atlas-wykladow.html` to źródło strony (Artifact z możliwościami `db`, `user` i `sample`).
Przedmioty, wykłady, terminy i postępy są zapisane w bazie strony, nie w tym repozytorium.
Zmiany w wyglądzie publikuj z tego pliku pod ten sam adres.

## Jak Claude dodaje nowy wykład

Kolekcje w bazie tej strony:
- subjects/{id}: {name, stain, exam: "RRRR-MM-DD" | null, order: liczba, unit: "wyklad" | "zajecia", createdAt: ISO}
  stain: indygo | morski | granat | malina | sliwka | pomarancz | miod | oliwka | grafit | braz
  unit: jak strona nazywa kolejne notatki („Wykład 3” albo „Zajęcia 3”); "zajecia" dla ćwiczeń i lektoratów.
  Obecne przedmioty (id): podstawy-zarzadzania (Podstawy zarządzania – wykład, dr Anna Królikowska-Tomczak),
  podstawy-zarzadzania-cw (Podstawy zarządzania – ćwiczenia, dr Paweł Zawiślak; pliki „Zajęcia N. …”),
  podstawy-finansow, podstawy-prawa, podstawy-psychologii, podstawy-filozofii, generatywna-ai, profesjonalna-komunikacja,
  jezyk-angielski, jezyk-niemiecki (unit "zajecia"; pliki „ALK … Termin N”).
- notes/{id}: {subjectId, nr, title, source (nazwa pliku), lectureDate: "RRRR-MM-DD" | null, addedAt: ISO, addedBy: "claude",
  summary (Markdown, 2–4 zdania),
  examInfo: [{text, src}] — wskazówki prowadzącego: notatki prowadzącego, slajdy „na egzamin”, co znać na pamięć, typowe błędy; src np. "slajd 3",
  deadlines: [{type: kolokwium | egzamin | sprawdzian | zaliczenie | projekt | prezentacja | inne, date: "RRRR-MM-DD" | null, title, scope}],
  highYield: [Markdown], sections: [{heading, body (Markdown)}],
  terms: [{term, def, quote?, source?}] — quote: dosłowne brzmienie definicji, gdy trzeba ją znać na pamięć,
  people: [{name, years, school, work, idea}] — przedmioty teoretyczne,
  formulas: [{name, expr, vars: [{sym, def}], when}], worked: [{title, problem, steps: [Markdown], result, sec}] — finanse; w prawie kazusy,
  vocab: [{w, pl, pos: n | v | adj | adv | phr, art: der | die | das | null, plural, forms, ex}],
  grammar: [{title, rule, pattern, examples: [{t, pl}], exceptions: [Markdown], sec}],
  mistakes: [{wrong, right, why}], exercises: [{title, instr, type: "choose" | "drag" | "type", bank?: [słowa do przeciągania], items: [{q (luka = ___), a, options?: [do wyboru], why?}]}], texts: [{title, text, pl}] — języki,
  examQuestions: [{q, outline (Markdown), fromSlides: true | false, sec}], literature: [tekst],
  mnemonics: [Markdown], practice: [Markdown — przykłady z praktyki],
  flashcards: [{id, q, a, sec}],
  quiz: [{q, options: [4 odpowiedzi], answer: indeks 0–3, why, explain: [4 wyjaśnienia w kolejności options], sec}],
  tags: [tekst]}
  sec = indeks (od 0) części w sections, do której odnosi się element. Pola, które nie pasują do przedmiotu, pomiń.
  Pola dopisywane przez stronę (nie ustawiaj ich sam): myNotes (notatki użytkownika), editedAt (użytkownik edytował),
  hasBackup (jest kopia wersji od Claude'a w noteBackups/{id}), own: true (notatka napisana przez użytkownika).
- noteBackups/{id}: kopia notatki od Claude'a sprzed pierwszej edycji użytkownika. Nie ruszać.
- events/{id}: terminy w kalendarzu: {type (jak w deadlines), subjectId, title, date: "RRRR-MM-DD", time: "GG:MM" | null,
  place, notes, lectureIds: [id notatek; pusta lista = cały przedmiot], checklist: [{t, done}], done: false, grade: "", createdAt: ISO}
- meta/plan: plan zajęć — użytkownik poprosił o jego usunięcie (19.10.2026). Nie dodawaj planu z powrotem, chyba że wyraźnie o to poprosi.
  Format, gdyby chciał go znowu: {items: [{d: "RRRR-MM-DD", s: "GG:MM", e: "GG:MM", sid, t: "w" | "ćw" | "k" | "el", who, room}]}.
- data/users/<id>/... — prywatny postęp użytkownika (status wykładów, fiszki, wyniki testów). Nie ruszać.

Kroki przy nowej prezentacji:
1. Odczytaj subjects i dopasuj przedmiot po nazwie. Jeśli go nie ma, zapytaj użytkownika.
2. Odczytaj notes z tym subjectId; nr = największy nr + 1 (wykłady numerowane kolejno od 1).
3. lectureDate: data wykładu, jeśli wynika z pliku albo z wiadomości użytkownika; inaczej null.
4. Przeczytaj całą prezentację, także obrazy, schematy, tabele i notatki prowadzącego.
   0) Notatka ma ułatwiać naukę, więc ma być KRÓTKA: tylko to, co trzeba umieć na zajęcia i egzamin. Nie przepisuj
      wszystkiego ze slajdów, pomijaj opisy obrazków, odesłania do podręcznika bez treści i dodatki spoza slajdów,
      które nie są potrzebne do zrozumienia. Liczebność: sections 3–7 (krótkie punkty), highYield 4–6, terms do 8,
      people do 6 (kluczowe osoby), examQuestions 2–3, mnemonics i practice najwyżej po 2.
   a) Trzymaj się slajdów i ich kolejności. Uzupełnienia z podręcznika oznaczaj dopiskiem „(spoza slajdów)”. Niczego nie zmyślaj.
   b) Nie pomijaj notatek prowadzącego, slajdów „Na egzamin” i „Przykładowe pytania”, terminów kolokwiów, prac domowych ani literatury:
      trafiają do examInfo, examQuestions (z planem odpowiedzi; dodaj 2–4 własne typowe pytania otwarte), deadlines i literature.
      Pomiń tylko slajd tytułowy, plan wykładu, podziękowania i dane kontaktowe.
   c) Definicję, którą trzeba znać dosłownie, przepisz bez skracania do terms[].quote ze źródłem; fiszka z tą definicją ma pełne brzmienie.
   d) Forma: po polsku, zwięźle, w punktach. Pogrubiaj tylko pojęcie albo liczbę do nauczenia (najwyżej 2 na punkt, nigdy całe zdanie
      ani cała kolumna tabeli); 3–6 najważniejszych faktów w całej notatce możesz zaznaczyć ==tak==. Porównania jako tabele Markdown
      (najwyżej 4 kolumny). Wyliczenia od 5 elementów jako lista numerowana. Podtytuły jako „### …”. Błędne formy jako ~~…~~.
   e) Typ przedmiotu:
      - teoria (zarządzanie, psychologia, filozofia, komunikacja, GenAI): każda osoba w people;
      - finanse: każdy wzór w formulas, 2–4 przykłady liczbowe krok po kroku w worked (rachunki przelicz dwa razy);
      - prawo: podstawa prawna przy instytucjach (bez wymyślania artykułów), kazusy w worked;
      - języki: wszystkie słówka i zwroty w vocab (rzeczowniki z rodzajnikiem i liczbą mnogą, czasowniki rozdzielne z „|”
        i formą 3. os. lp.) – najwyżej 20 najważniejszych, bez poleceń z podręcznika (hören, ankreuzen…); reguły w grammar
        (do 5; części reguły oznacz ==tak==), do 4 błędów w mistakes, do 3 ćwiczeń z rozwiązaniami zgodnymi z regułą
        w exercises (strona robi z nich zadania interaktywne: choose = wybór z options, drag = przeciąganie słów z bank, type = wpisywanie;
        w a sama odpowiedź, kilka luk w zdaniu rozdziel „ … ”, objaśnienie w why), 1 tekst wzorcowy z tłumaczeniem w texts. Słówek nie dubluj we flashcards: strona sama robi z nich fiszki.
   f) Fiszki 8–15 (języki: 6–10 poza słówkami): jedna fiszka to jeden fakt (nie „kto i kiedy” razem); odpowiedź do 15 słów, poza definicjami na pamięć;
      w pytaniu o listę podaj liczbę elementów; pokryj najważniejsze punkty highYield i pojęcia z terms (bez dublowania);
      id = "c" + 8 losowych znaków; sec.
   g) Test 6–8 pytań: 4 odpowiedzi podobnej długości i formy, bez „wszystkie/żadna z powyższych”; błędne odpowiedzi
      z pojęć, które się myli, a nie absurdy; co najmniej 1/3 pytań na zastosowanie (krótka sytuacja do rozpoznania);
      poprawna odpowiedź na różnych pozycjach (każda pozycja co najmniej raz) i nie częściej najdłuższa
      niż pozostałe; why (1 zdanie), explain (4 wyjaśnienia w kolejności options; przy błędnej: czym ona jest albo dlaczego
      nie pasuje), sec.
   h) Przed zapisem sprawdź: liczby, daty i nazwiska zgodne ze slajdami; rozwiązania ćwiczeń zgodne z regułą; sec w zakresie
      sections; answer 0–3; explain ma 4 elementy.
5. Zapisz notes/n-RRRRMMDD-xxxx (xxxx = 4 losowe znaki) z addedBy "claude".
6. Podaj użytkownikowi: przedmiot, numer wykładu, tytuł, liczbę fiszek i pytań oraz terminy z deadlines.
   Zapytaj, czy dodać je do kalendarza. Po zgodzie zapisz events/{id}: {type, subjectId, title, date, time: null, place: "",
   notes: scope, lectureIds: [], checklist: [], done: false, grade: "", createdAt: ISO}. Termin bez daty dodaj dopiero, gdy użytkownik ją poda
   (na stronie jest też przycisk „Dodaj do kalendarza” przy terminach w notatce).

Poprawianie istniejącego wykładu:
- Używaj update (nie set) i nie ruszaj myNotes, editedAt, hasBackup ani own.
- Jeśli notatka ma editedAt, użytkownik ją zmieniał: zapytaj, zanim nadpiszesz jego zmiany.
- Fiszkom zostaw ich id (postęp powtórek jest przypięty do id). Nowe fiszki dostają nowe id.

Zapis do bazy idzie przez narzędzie `ArtifactData` z adresem strony powyżej.
Ta sama instrukcja leży w bazie strony jako dokument `meta/instrukcja`.
