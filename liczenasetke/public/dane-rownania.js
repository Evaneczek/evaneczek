/* Wygenerowane przez zbuduj.py z tresc/rownania.py. Nie edytuj ręcznie. */
window.TEMAT = {
 "slug": "rownania",
 "title": "Równania",
 "sign": "=",
 "lead": "Równania pierwszego stopnia, przekształcanie wzorów i zadania tekstowe z równaniem, także z procentami. Zadanie otwarte z równaniem za 2–3 punkty było na egzaminie w 2025 i w 2026 roku.",
 "goals": {
  "learn": "8 umiejętności: sprawdzanie rozwiązania, proste równania, równania z x po obu stronach, z nawiasami i ułamkami, przekształcanie wzorów, układanie równania, pełne rozwiązanie zadania tekstowego i równania z procentami.",
  "prereq": "Wyrażenia algebraiczne: redukcja i opuszczanie nawiasów. Rozgrzewka na początku to sprawdzi.",
  "goal": "Minimum 12 z 14 punktów w teście na koniec tematu."
 },
 "skills": {
  "R1": "Sprawdzanie, czy liczba jest rozwiązaniem",
  "R2": "Proste równania: działanie odwrotne",
  "R3": "Równania z x po obu stronach",
  "R4": "Równania z nawiasami i ułamkami",
  "R5": "Przekształcanie wzorów",
  "R6": "Układanie równania z treści",
  "R7": "Zadania tekstowe z równaniem",
  "R8": "Równania z procentami"
 },
 "lessons": [
  {
   "title": "Czy liczba jest rozwiązaniem?",
   "skills": [
    "R1"
   ],
   "intro": "Rozwiązanie równania to liczba, która po wstawieniu w miejsce x daje prawdziwą równość. Gdy na egzaminie pytają „która liczba jest rozwiązaniem”, nie musisz nic rozwiązywać: wystarczy sprawdzić podane liczby.",
   "rule": {
    "t": "Wstaw liczbę osobno do lewej i do prawej strony. Jeśli wyjdzie to samo, liczba jest rozwiązaniem.",
    "f": [
     "x = 3 w równaniu 2x + 1 = 7:",
     "L = 2 · 3 + 1 = 7, P = 7, L = P"
    ],
    "e": "Liczbę ujemną wstawiaj w nawiasie. Równanie z x² sprawdzasz tak samo, a może mieć ono dwa rozwiązania."
   },
   "visual": {
    "type": "scale",
    "left": "2x + 1",
    "right": "7",
    "note": "Równanie jak waga: obie strony muszą ważyć tyle samo",
    "alt": "Waga: na lewej szalce 2x + 1, na prawej 7"
   },
   "example": {
    "q": "Które z liczb −2, 1, 3 są rozwiązaniami równania x² − x = 6?",
    "steps": [
     "x = −2: L = (−2)² − (−2) = 4 + 2 = 6, P = 6. Jest rozwiązaniem.",
     "x = 1: L = 1 − 1 = 0, a P = 6. Nie jest.",
     "x = 3: L = 9 − 3 = 6, P = 6. Jest rozwiązaniem."
    ],
    "result": "Rozwiązaniami są −2 i 3.",
    "tip": "W podstawie programowej jest podobny przykład: sprawdź, które liczby całkowite niedodatnie większe od −8 spełniają równanie x/8 + x/2 = 0. Pasuje tylko 0.",
    "check": [
     "(-2)**2 - (-2) == 6",
     "1**2 - 1 != 6",
     "3**2 - 3 == 6",
     "[x for x in range(-7, 1) if F(x, 8) + F(x, 2) == 0] == [0]"
    ]
   },
   "you": [
    {
     "id": "y1",
     "type": "abcd",
     "q": "Która liczba jest rozwiązaniem równania 3x − 5 = x + 7?",
     "opts": [
      "6",
      "2",
      "−6",
      "12"
     ],
     "ok": 0,
     "why": {
      "B": "Dla x = 2: L = 1, a P = 9.",
      "C": "Dla x = −6: L = −23, a P = 1.",
      "D": "Dla x = 12: L = 31, a P = 19."
     },
     "sol": [
      "Dla x = 6: [[L = 3 · 6 − 5 = 13]], [[P = 6 + 7 = 13]]. Równe."
     ],
     "answer": "A, 6.",
     "tip": "Sprawdzaj po kolei, zapisując L i P.",
     "check": [
      "3*6 - 5 == 6 + 7",
      "3*2 - 5 != 2 + 7",
      "3*(-6) - 5 != -6 + 7",
      "3*12 - 5 != 12 + 7"
     ]
    },
    {
     "id": "y1b",
     "type": "pf",
     "q": "Oceń prawdziwość zdań o równaniu x/8 + x/2 = 0.",
     "items": [
      {
       "t": "Liczba 0 jest rozwiązaniem tego równania.",
       "ok": "P"
      },
      {
       "t": "Liczba −4 jest rozwiązaniem tego równania.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> [[0/8 + 0/2 = 0]]. Prawda.",
      "<b>Zdanie 2.</b> [[−4/8 + (−4)/2 = −0,5 − 2 = −2,5]], a nie 0. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "To przykład z podstawy programowej.",
     "check": [
      "F(0, 8) + F(0, 2) == 0",
      "F(-4, 8) + F(-4, 2) == F(-5, 2)"
     ]
    }
   ]
  },
  {
   "title": "Proste równania: działanie odwrotne",
   "skills": [
    "R2"
   ],
   "intro": "Najprostsze równania rozwiązujesz, cofając to, co zrobiono z x: dodawanie cofasz odejmowaniem, a mnożenie dzieleniem.",
   "rule": {
    "t": "Cofaj działania w odwrotnej kolejności, zaczynając od ostatniego.",
    "f": [
     "x + 7 = 12 → x = 12 − 7 = 5",
     "4x = 28 → x = 28 : 4 = 7",
     "x : 3 = 5 → x = 5 · 3 = 15"
    ],
    "e": "Zawsze sprawdź wynik, wstawiając go do równania. To 10 sekund, a chroni przed utratą punktu."
   },
   "example": {
    "q": "Rozwiąż równanie (x − 2) : 3 = 4. (Przykład z podstawy programowej.)",
    "steps": [
     "Z x najpierw odjęto 2, a potem wynik podzielono przez 3.",
     "Cofamy od końca. Dzielenie przez 3 cofamy mnożeniem: x − 2 = 4 · 3 = 12.",
     "Odejmowanie 2 cofamy dodawaniem: x = 12 + 2 = 14.",
     "Sprawdzenie: (14 − 2) : 3 = 12 : 3 = 4. Zgadza się."
    ],
    "result": "x = 14.",
    "tip": "Możesz też „zgadywać” i sprawdzać. Na egzaminie to dozwolona metoda, byle z zapisanym sprawdzeniem.",
    "check": [
     "(14 - 2)/3 == 4"
    ]
   },
   "you": [
    {
     "id": "y2",
     "type": "fields",
     "q": "Rozwiąż równanie 5x + 3 = 38.",
     "fields": [
      {
       "label": "x",
       "ans": 7,
       "show": "7",
       "why": [
        [
         8.2,
         "Najpierw odejmij 3, a nie dodawaj: 5x = 35."
        ],
        [
         7.6,
         "Najpierw pozbądź się +3: 5x = 35, a potem dziel przez 5."
        ]
       ]
      }
     ],
     "sol": [
      "[[5x = 38 − 3 = 35]].",
      "[[x = 35 : 5 = 7]]. Sprawdzenie: 5 · 7 + 3 = 38."
     ],
     "answer": "x = 7.",
     "tip": "Najpierw pozbądź się dodawania, potem mnożenia.",
     "check": [
      "5*7 + 3 == 38"
     ]
    },
    {
     "id": "y2b",
     "type": "fields",
     "q": "Rozwiąż równanie x : 4 − 1 = 5.",
     "fields": [
      {
       "label": "x",
       "ans": 24,
       "show": "24",
       "why": [
        [
         16,
         "Najpierw dodaj 1: x : 4 = 6, więc x = 24."
        ],
        [
         1.5,
         "x : 4 = 6, więc x = 6 · 4, a nie 6 : 4."
        ]
       ]
      }
     ],
     "sol": [
      "[[x : 4 = 6]].",
      "[[x = 6 · 4 = 24]]."
     ],
     "answer": "x = 24.",
     "tip": "Dzielenie cofasz mnożeniem.",
     "check": [
      "24/4 - 1 == 5"
     ]
    }
   ]
  },
  {
   "title": "Równania z x po obu stronach",
   "skills": [
    "R3"
   ],
   "intro": "Gdy x jest po obu stronach, pomyśl o wadze. Możesz zdjąć albo dołożyć to samo na obu szalkach, a waga dalej będzie w równowadze. To metoda równań równoważnych.",
   "rule": {
    "t": "Wyrazy z x zbierz po jednej stronie, a liczby po drugiej. Wyraz przeniesiony na drugą stronę zmienia znak.",
    "f": [
     "5x − 4 = 2x + 11",
     "5x − 2x = 11 + 4",
     "3x = 15, x = 5"
    ],
    "e": "„Przenoszenie ze zmianą znaku” to skrót. Naprawdę odejmujesz 2x i dodajesz 4 po obu stronach."
   },
   "visual": {
    "type": "scale",
    "left": "5x − 4",
    "right": "2x + 11",
    "note": "Zdejmij 2x z obu szalek: zostaje 3x − 4 = 11",
    "alt": "Waga: na lewej szalce 5x − 4, na prawej 2x + 11"
   },
   "example": {
    "q": "Rozwiąż równanie 5x − 4 = 2x + 11.",
    "steps": [
     "Odejmujemy 2x od obu stron: 3x − 4 = 11.",
     "Dodajemy 4 do obu stron: 3x = 15.",
     "Dzielimy obie strony przez 3: x = 5.",
     "Sprawdzenie: L = 25 − 4 = 21, P = 10 + 11 = 21."
    ],
    "result": "x = 5.",
    "tip": "Zbieraj x po tej stronie, gdzie jest ich więcej. Wtedy unikniesz dzielenia przez liczbę ujemną.",
    "check": [
     "5*5 - 4 == 2*5 + 11"
    ]
   },
   "you": [
    {
     "id": "y3",
     "type": "fields",
     "q": "Rozwiąż równanie 7x + 2 = 3x − 10.",
     "fields": [
      {
       "label": "x",
       "ans": -3,
       "show": "−3",
       "why": [
        [
         3,
         "4x = −12, więc x = −3. Nie gub minusa."
        ],
        [
         -2,
         "−10 − 2 = −12, a nie −8."
        ]
       ]
      }
     ],
     "sol": [
      "[[7x − 3x = −10 − 2]].",
      "[[4x = −12]], [[x = −3]]. Sprawdzenie: L = −21 + 2 = −19, P = −9 − 10 = −19."
     ],
     "answer": "x = −3.",
     "tip": "Liczbę ujemną wpisz ze znakiem minus.",
     "check": [
      "7*(-3) + 2 == 3*(-3) - 10"
     ]
    },
    {
     "id": "y3b",
     "type": "abcd",
     "q": "Rozwiązaniem równania 2 − x = 3x + 14 jest liczba:",
     "opts": [
      "−3",
      "3",
      "4",
      "−4"
     ],
     "ok": 0,
     "why": {
      "B": "−4x = 12, więc x = −3. Dzieląc przez liczbę ujemną, dostajesz wynik ujemny.",
      "C": "Dwójka przeniesiona na prawą stronę zmienia znak: 14 − 2 = 12, a nie 16.",
      "D": "Po przeniesieniu dwójki jest 14 − 2 = 12, a nie 14 + 2 = 16."
     },
     "sol": [
      "[[−x − 3x = 14 − 2]], czyli [[−4x = 12]].",
      "[[x = 12 : (−4) = −3]]."
     ],
     "answer": "A, −3.",
     "tip": "Możesz też zebrać x po prawej: 2 − 14 = 4x, czyli −12 = 4x.",
     "check": [
      "2 - (-3) == 3*(-3) + 14"
     ]
    }
   ]
  },
  {
   "title": "Równania z nawiasami i ułamkami",
   "skills": [
    "R4"
   ],
   "intro": "Gdy w równaniu są nawiasy albo ułamki, najpierw się ich pozbywasz. Potem rozwiązujesz jak zwykłe równanie.",
   "rule": {
    "t": "Nawiasy: wymnóż. Ułamki: pomnóż obie strony przez wspólny mianownik.",
    "f": [
     "3(x − 2) = x + 4 → 3x − 6 = x + 4",
     "x/2 + x/3 = 10 → (· 6) 3x + 2x = 60"
    ],
    "e": "Mnożąc obie strony przez liczbę, pomnóż KAŻDY wyraz, także ten bez ułamka."
   },
   "example": {
    "q": "Rozwiąż równanie x/2 − (x − 1)/3 = 2.",
    "steps": [
     "Wspólny mianownik 2 i 3 to 6. Mnożymy każdy wyraz przez 6: 3x − 2(x − 1) = 12.",
     "Minus przed nawiasem: 3x − 2x + 2 = 12.",
     "x + 2 = 12, więc x = 10.",
     "Sprawdzenie: 10/2 − 9/3 = 5 − 3 = 2."
    ],
    "result": "x = 10.",
    "tip": "Licznik z kilkoma wyrazami po pomnożeniu bierz w nawias: 2(x − 1). Wtedy nie zgubisz znaku.",
    "check": [
     "F(10, 2) - F(10 - 1, 3) == 2"
    ]
   },
   "you": [
    {
     "id": "y4",
     "type": "fields",
     "q": "Rozwiąż równanie 2(x + 3) = 5x − 9.",
     "fields": [
      {
       "label": "x",
       "ans": 5,
       "show": "5",
       "why": [
        [
         4,
         "2 mnoży też trójkę: 2(x + 3) = 2x + 6."
        ]
       ]
      }
     ],
     "sol": [
      "[[2x + 6 = 5x − 9]].",
      "[[6 + 9 = 5x − 2x]], [[15 = 3x]], [[x = 5]]."
     ],
     "answer": "x = 5.",
     "tip": "Sprawdzenie: 2 · 8 = 16 i 25 − 9 = 16.",
     "check": [
      "2*(5 + 3) == 5*5 - 9"
     ]
    },
    {
     "id": "y4b",
     "type": "fields",
     "q": "Rozwiąż równanie x/3 + x/4 = 14.",
     "fields": [
      {
       "label": "x",
       "ans": 24,
       "show": "24",
       "why": [
        [
         2,
         "Pomnóż przez 12 także prawą stronę: 14 · 12 = 168."
        ]
       ]
      }
     ],
     "sol": [
      "Mnożymy przez 12: [[4x + 3x = 168]].",
      "[[7x = 168]], [[x = 24]]."
     ],
     "answer": "x = 24.",
     "tip": "Sprawdzenie: 24/3 + 24/4 = 8 + 6 = 14.",
     "check": [
      "F(24, 3) + F(24, 4) == 14"
     ]
    }
   ]
  },
  {
   "title": "Przekształcanie wzorów",
   "skills": [
    "R5"
   ],
   "intro": "Czasem znasz wynik wzoru, a szukasz jednej z liczb: wysokości z pola albo czasu z drogi i prędkości. Wzór traktujesz wtedy jak równanie.",
   "rule": {
    "t": "Szukaną literę zostaw samą po jednej stronie, cofając działania tak jak w równaniu.",
    "f": [
     "s = v · t → t = s : v",
     "P = a · h : 2 → h = 2P : a",
     "P = (a + b) · h : 2 → h = 2P : (a + b)"
    ],
    "e": "Możesz najpierw wstawić liczby, a potem rozwiązać równanie. Wynik będzie ten sam, a pomyłek mniej."
   },
   "example": {
    "q": "Trapez ma pole 45 cm², a jego podstawy mają 7 cm i 11 cm. Oblicz wysokość trapezu.",
    "steps": [
     "Wzór: P = (a + b) · h : 2.",
     "Wstawiamy: 45 = (7 + 11) · h : 2, czyli 45 = 18h : 2 = 9h.",
     "h = 45 : 9 = 5 cm."
    ],
    "result": "Wysokość trapezu to 5 cm.",
    "tip": "Sprawdzenie: (7 + 11) · 5 : 2 = 90 : 2 = 45.",
    "check": [
     "(7 + 11)*5/2 == 45"
    ]
   },
   "you": [
    {
     "id": "y5",
     "type": "abcd",
     "q": "Ze wzoru s = v · t wyznaczono t. Otrzymano:",
     "opts": [
      "t = s : v",
      "t = v : s",
      "t = s · v",
      "t = s − v"
     ],
     "ok": 0,
     "why": {
      "B": "Odwrotnie. Sprawdź: 100 km przy 50 km/h to 2 h, a 50 : 100 = 0,5.",
      "C": "Mnożenie cofasz dzieleniem, a nie mnożeniem.",
      "D": "Mnożenie cofasz dzieleniem, a nie odejmowaniem."
     },
     "sol": [
      "[[s = v · t]]. Dzielimy obie strony przez v: [[t = s : v]]."
     ],
     "answer": "A, t = s : v.",
     "tip": "Sprawdź wzór na prostych liczbach: 100 km, 50 km/h, 2 h.",
     "check": [
      "100/50 == 2"
     ]
    },
    {
     "id": "y5b",
     "type": "fields",
     "q": "Rowerzysta pokonał odcinek 100 m z prędkością 5 m/s. Ile sekund jechał? (Egzamin 2025, zadanie 9.)",
     "fields": [
      {
       "label": "Czas (s)",
       "ans": 20,
       "show": "20",
       "why": [
        [
         500,
         "Czas to droga podzielona przez prędkość: 100 : 5."
        ],
        [
         0.05,
         "Odwrotnie: dzielisz drogę przez prędkość, 100 : 5 = 20."
        ]
       ]
      }
     ],
     "sol": [
      "[[t = s : v = 100 : 5 = 20]] s."
     ],
     "answer": "20 sekund.",
     "tip": "Na egzaminie odpowiedzi to były 50, 20, 500 i 200 sekund.",
     "check": [
      "100/5 == 20"
     ]
    }
   ]
  },
  {
   "title": "Układanie równania z treści",
   "skills": [
    "R6"
   ],
   "intro": "Najtrudniejsze w zadaniu tekstowym jest ułożenie równania. Samo rozwiązanie to potem 3 linijki. Na egzaminie za poprawny sposób (czyli dobre równanie) jest zwykle pierwszy punkt.",
   "rule": {
    "t": "1. Oznacz x jedną niewiadomą (zwykle najmniejszą). 2. Pozostałe wielkości zapisz za pomocą x. 3. Znajdź w treści zdanie o równości i zapisz je jako równanie.",
    "f": [
     "„razem mają 60” → suma = 60",
     "„po dolaniu po 6 l jest 2 razy więcej” → 4x + 6 = 2(x + 6)"
    ],
    "e": "Na końcu odpowiedz na pytanie z zadania. Często pytają nie o x, tylko o coś innego."
   },
   "visual": {
    "type": "tape",
    "alt": "Pierwszy zbiornik to 4 razy x, drugi to x",
    "rows": [
     {
      "label": "Pierwszy",
      "parts": [
       {
        "t": "x"
       },
       {
        "t": "x"
       },
       {
        "t": "x"
       },
       {
        "t": "x"
       }
      ],
      "sum": "4x"
     },
     {
      "label": "Drugi",
      "parts": [
       {
        "t": "x"
       }
      ],
      "sum": "x"
     }
    ],
    "caption": "W pierwszym zbiorniku jest 4 razy więcej wody niż w drugim"
   },
   "example": {
    "q": "W pierwszym zbiorniku było 4 razy więcej litrów wody niż w drugim. Do każdego wlano po 6 litrów. Teraz w pierwszym jest 2 razy więcej wody niż w drugim. Ile łącznie litrów wody jest teraz w obu zbiornikach? (Informator CKE, zadanie 28, 2 pkt.)",
    "steps": [
     "Oznaczamy: w drugim zbiorniku było x litrów, w pierwszym 4x.",
     "Po dolaniu: pierwszy 4x + 6, drugi x + 6. Pierwszy ma 2 razy więcej: 4x + 6 = 2(x + 6).",
     "4x + 6 = 2x + 12, więc 2x = 6 i x = 3.",
     "Teraz w drugim jest 3 + 6 = 9 l, w pierwszym 12 + 6 = 18 l. Razem 27 litrów."
    ],
    "result": "W obu zbiornikach jest teraz 27 litrów wody.",
    "tip": "Pytano o łączną ilość wody PO dolaniu, a nie o x. Sprawdzenie z treścią: 18 = 2 · 9.",
    "check": [
     "4*3 + 6 == 2*(3 + 6)",
     "(4*3 + 6) + (3 + 6) == 27"
    ]
   },
   "you": [
    {
     "id": "y6",
     "type": "abcd",
     "q": "Andrzej ma o 28 plakatów więcej niż Basia, a Marek ma 3 razy mniej plakatów niż Basia. Andrzej i Marek mają razem 60 plakatów. Basia ma x plakatów. Które równanie opisuje tę sytuację?",
     "opts": [
      "x + 28 + x/3 = 60",
      "x + 28 + 3x = 60",
      "28x + x/3 = 60",
      "x + (x + 28) + x/3 = 60"
     ],
     "ok": 0,
     "why": {
      "B": "Marek ma 3 razy MNIEJ niż Basia: x/3, a nie 3x.",
      "C": "„O 28 więcej” to x + 28, a nie 28x.",
      "D": "Razem mają tylko Andrzej i Marek, bez Basi."
     },
     "sol": [
      "Andrzej: [[x + 28]], Marek: [[x/3]].",
      "Andrzej i Marek razem: [[x + 28 + x/3 = 60]]."
     ],
     "answer": "A, x + 28 + x/3 = 60.",
     "tip": "Podobne zadanie (z innymi liczbami) było na egzaminie w 2025 roku.",
     "check": [
      "24 + 28 + F(24, 3) == 60"
     ]
    },
    {
     "id": "y6b",
     "type": "fields",
     "q": "Suma trzech kolejnych liczb naturalnych jest równa 75. Jaka jest najmniejsza z tych liczb?",
     "fields": [
      {
       "label": "Najmniejsza liczba",
       "ans": 24,
       "show": "24",
       "why": [
        [
         25,
         "25 to środkowa liczba. Najmniejsza to 24."
        ],
        [
         26,
         "26 to największa liczba."
        ]
       ]
      }
     ],
     "sol": [
      "[[n + (n + 1) + (n + 2) = 75]].",
      "[[3n + 3 = 75]], [[3n = 72]], [[n = 24]]."
     ],
     "answer": "24.",
     "tip": "Sprawdzenie: 24 + 25 + 26 = 75.",
     "check": [
      "24 + 25 + 26 == 75"
     ]
    }
   ]
  },
  {
   "title": "Zadania tekstowe: pełne rozwiązanie",
   "skills": [
    "R7"
   ],
   "intro": "Zadanie tekstowe z równaniem za 2–3 punkty jest na egzaminie co roku: w 2025 roku o plakatach, w 2026 o kartkach do origami. Punkty są za kolejne etapy, więc liczy się porządny zapis.",
   "rule": {
    "t": "Zapisz: oznaczenia, równanie, rozwiązanie, sprawdzenie z treścią i odpowiedź.",
    "f": [
     "x – liczba kartek czerwonych",
     "1,5x – niebieskich, x − 10 – zielonych",
     "równanie → x → odpowiedź na pytanie"
    ],
    "e": "Sprawdzaj z treścią zadania, a nie z równaniem. Jeśli równanie było źle ułożone, sprawdzenie w równaniu niczego nie wykryje."
   },
   "example": {
    "q": "Ela przygotowała 160 kartek w czterech kolorach. Białych było 37. Niebieskich było 1,5 raza więcej niż czerwonych, a zielonych o 10 mniej niż czerwonych. Ile kartek niebieskich przygotowała Ela? (Egzamin 2026, zadanie 15, 2 pkt.)",
    "steps": [
     "Oznaczamy: x – liczba kartek czerwonych. Niebieskich: 1,5x, zielonych: x − 10, białych: 37.",
     "Równanie: x + 1,5x + (x − 10) + 37 = 160.",
     "3,5x + 27 = 160, 3,5x = 133, x = 38.",
     "Niebieskich: 1,5 · 38 = 57. Sprawdzenie z treścią: 37 + 38 + 57 + 28 = 160."
    ],
    "result": "Ela przygotowała 57 kartek niebieskich.",
    "tip": "Pytanie było o kartki niebieskie, a x to kartki czerwone. Odpowiedź 38 byłaby błędna.",
    "check": [
     "38 + F('1.5')*38 + (38 - 10) + 37 == 160",
     "F('1.5')*38 == 57"
    ]
   },
   "you": [
    {
     "id": "y7",
     "type": "fields",
     "q": "Za 3 bilety normalne i 2 ulgowe zapłacono 120 zł. Bilet ulgowy jest o 50% tańszy od normalnego. Ile kosztuje bilet normalny? (Na podstawie zadania 18 z informatora CKE.)",
     "fields": [
      {
       "label": "Bilet normalny (zł)",
       "ans": 30,
       "show": "30",
       "why": [
        [
         24,
         "Bilet ulgowy kosztuje połowę normalnego: 3n + 2 · 0,5n = 4n, a nie 5n."
        ],
        [
         15,
         "15 zł kosztuje bilet ulgowy."
        ]
       ]
      }
     ],
     "sol": [
      "n – cena biletu normalnego, ulgowy: [[0,5n]].",
      "[[3n + 2 · 0,5n = 120]], [[4n = 120]], [[n = 30]] zł."
     ],
     "answer": "30 zł.",
     "tip": "Sprawdzenie: 3 · 30 + 2 · 15 = 90 + 30 = 120.",
     "check": [
      "3*30 + 2*15 == 120"
     ]
    },
    {
     "id": "y7b",
     "type": "fields",
     "q": "Mama jest 3 razy starsza od córki. Za 12 lat będzie od niej 2 razy starsza. Ile lat ma teraz córka?",
     "fields": [
      {
       "label": "Wiek córki",
       "ans": 12,
       "show": "12",
       "why": [
        [
         36,
         "36 lat ma mama. Pytanie jest o córkę."
        ],
        [
         24,
         "24 lata córka będzie mieć za 12 lat."
        ]
       ]
      }
     ],
     "sol": [
      "Córka: x, mama: 3x. Za 12 lat: córka [[x + 12]], mama [[3x + 12]].",
      "[[3x + 12 = 2(x + 12)]], [[3x + 12 = 2x + 24]], [[x = 12]]."
     ],
     "answer": "12 lat.",
     "tip": "Za 12 lat starsza jest i mama, i córka.",
     "check": [
      "3*12 + 12 == 2*(12 + 12)"
     ]
    }
   ]
  },
  {
   "title": "Równania z procentami",
   "skills": [
    "R8"
   ],
   "intro": "Gdy nie znasz liczby, od której liczono procent, oznacz ją x. Takie zadania łączą procenty z równaniem i są w wymaganiach egzaminacyjnych wprost.",
   "rule": {
    "t": "p% liczby x zapisujesz jako liczbę dziesiętną razy x, np. 20% · x = 0,2x.",
    "f": [
     "po obniżce o 20%: 0,8x",
     "o 40% więcej niż x: 1,4x",
     "x + 1,4x = 2,4x"
    ],
    "e": "Zawsze ustal, od czego liczysz procent. „O 40% więcej niż chłopców” to 40% liczby chłopców."
   },
   "example": {
    "q": "W klasie jest 24 uczniów. Dziewcząt jest o 40% więcej niż chłopców. Ilu jest chłopców?",
    "steps": [
     "x – liczba chłopców. Dziewcząt jest o 40% więcej: x + 0,4x = 1,4x.",
     "Równanie: x + 1,4x = 24, czyli 2,4x = 24.",
     "x = 10. Dziewcząt: 1,4 · 10 = 14.",
     "Sprawdzenie: 10 + 14 = 24, a 14 to o 4 więcej niż 10, czyli o 40%."
    ],
    "result": "W klasie jest 10 chłopców.",
    "tip": "Nie licz 40% z 24. Procent liczy się od liczby chłopców, której na początku nie znamy.",
    "check": [
     "10 + F('1.4')*10 == 24"
    ]
   },
   "you": [
    {
     "id": "y8",
     "type": "fields",
     "q": "Po obniżce o 15% kurtka kosztuje 170 zł. Ile kosztowała przed obniżką?",
     "fields": [
      {
       "label": "Cena (zł)",
       "ans": 200,
       "show": "200",
       "why": [
        [
         195.5,
         "Obniżkę liczono od starej ceny, a nie od 170 zł: 0,85x = 170."
        ],
        [
         144.5,
         "To cena po kolejnej obniżce. Szukasz ceny wyższej niż 170 zł."
        ]
       ]
      }
     ],
     "sol": [
      "[[0,85x = 170]].",
      "[[x = 170 : 0,85 = 200]] zł."
     ],
     "answer": "200 zł.",
     "tip": "Sprawdzenie: 15% z 200 to 30 zł, a 200 − 30 = 170.",
     "check": [
      "F('0.85')*200 == 170"
     ]
    },
    {
     "id": "y8b",
     "type": "abcd",
     "q": "Liczba x zwiększona o 25% jest równa 60. Które równanie to opisuje?",
     "opts": [
      "1,25x = 60",
      "0,25x = 60",
      "x + 25 = 60",
      "0,75x = 60"
     ],
     "ok": 0,
     "why": {
      "B": "0,25x to tylko te 25%. Liczba zwiększona o 25% to x + 0,25x.",
      "C": "25% to nie 25 jednostek.",
      "D": "0,75x to liczba zmniejszona o 25%."
     },
     "sol": [
      "[[x + 0,25x = 1,25x]], więc [[1,25x = 60]]. Rozwiązanie: x = 48."
     ],
     "answer": "A, 1,25x = 60.",
     "tip": "Zwiększona o p%: mnożysz przez (1 + p/100).",
     "check": [
      "F('1.25')*48 == 60"
     ]
    }
   ]
  }
 ],
 "traps": [
  {
   "name": "Brak zmiany znaku przy przenoszeniu",
   "bad": "3x + 5 = 20 → 3x = 20 + 5",
   "good": "3x = 20 − 5 = 15"
  },
  {
   "name": "Mnożenie tylko jednej strony",
   "bad": "x/3 + 2 = 5 → x + 2 = 15",
   "good": "każdy wyraz razy 3: x + 6 = 15"
  },
  {
   "name": "Odpowiedź o x zamiast o to, o co pytają",
   "bad": "x = 38, więc niebieskich kartek jest 38",
   "good": "x to czerwone, niebieskich jest 1,5x = 57"
  }
 ],
 "cheat": {
  "title": "Równania w 8 zasadach",
  "rules": [
   {
    "t": "Czy liczba jest rozwiązaniem?",
    "f": [
     "wstaw do L i do P, porównaj"
    ],
    "e": "Liczby ujemne w nawiasach."
   },
   {
    "t": "Proste równania: cofaj działania od końca.",
    "f": [
     "(x − 2) : 3 = 4 → x − 2 = 12 → x = 14"
    ],
    "e": "Dodawanie ↔ odejmowanie, mnożenie ↔ dzielenie."
   },
   {
    "t": "x po obu stronach: x na jedną stronę, liczby na drugą.",
    "f": [
     "5x − 4 = 2x + 11 → 3x = 15"
    ],
    "e": "Przeniesiony wyraz zmienia znak."
   },
   {
    "t": "Nawiasy wymnóż, ułamki usuń mnożeniem przez wspólny mianownik.",
    "f": [
     "x/2 + x/3 = 10 → 3x + 2x = 60"
    ],
    "e": "Mnożysz KAŻDY wyraz."
   },
   {
    "t": "Wzory przekształcasz jak równania.",
    "f": [
     "t = s : v",
     "h = 2P : a"
    ],
    "e": "Albo najpierw wstaw liczby."
   },
   {
    "t": "Układanie równania.",
    "f": [
     "x – najmniejsza niewiadoma",
     "reszta przez x",
     "zdanie o równości → równanie"
    ],
    "e": "Za dobre równanie jest często pierwszy punkt."
   },
   {
    "t": "Pełne rozwiązanie zadania.",
    "f": [
     "oznaczenia → równanie → x → sprawdzenie z treścią → odpowiedź"
    ],
    "e": "Odpowiadaj na pytanie z zadania, nie o x."
   },
   {
    "t": "Procenty w równaniu.",
    "f": [
     "obniżka o 15%: 0,85x",
     "o 40% więcej: 1,4x"
    ],
    "e": "Procent liczysz od nieznanej wielkości x."
   }
  ]
 },
 "memo": {
  "title": "Jak cofać działania",
  "rows": [
   [
    "+ 5",
    "− 5",
    "· 4",
    ": 4",
    "· (−2)",
    ": 3"
   ],
   [
    "cofasz: − 5",
    "cofasz: + 5",
    "cofasz: : 4",
    "cofasz: · 4",
    "cofasz: : (−2)",
    "cofasz: · 3"
   ]
  ],
  "note": "Plan zadania tekstowego: oznaczenia → równanie → rozwiązanie → sprawdzenie z treścią → odpowiedź pełnym zdaniem."
 },
 "warmup": {
  "id": "w0",
  "type": "fields",
  "q": "Rozgrzewka: wyrażenia z poprzedniego tematu.",
  "fields": [
   {
    "label": "7 − 3 · (−2)",
    "ans": 13,
    "show": "13"
   },
   {
    "label": "3x − 5 dla x = 4",
    "ans": 7,
    "show": "7"
   },
   {
    "label": "Liczba, która pomnożona przez 6 daje 42",
    "ans": 7,
    "show": "7"
   }
  ],
  "sol": [
   "<b>7 − 3 · (−2)</b> = 7 + 6 = [[13]].",
   "<b>3 · 4 − 5</b> = [[7]].",
   "<b>6 · ? = 42</b>, czyli 42 : 6 = [[7]]. To już jest proste równanie."
  ],
  "answer": "13, 7 i 7.",
  "tip": "Jeśli coś tu nie wyszło, wróć do tematu „Wyrażenia algebraiczne”.",
  "check": [
   "7 - 3*(-2) == 13",
   "3*4 - 5 == 7",
   "42/6 == 7"
  ]
 },
 "levels": [
  {
   "n": 1,
   "name": "Podstawy",
   "desc": "Każda umiejętność osobno. Tu masz się poczuć pewnie."
  },
  {
   "n": 2,
   "name": "Trening",
   "desc": "Zadania jak na egzaminie, także tekstowe. Czytaj uważnie, o co pytają."
  },
  {
   "n": 3,
   "name": "Egzamin",
   "desc": "Najtrudniejsze zadania, w tym otwarte z punktacją. Rozwiązuj na kartce, jak na egzaminie, i dopiero potem oceniaj się według punktacji."
  }
 ],
 "practice": [
  {
   "id": "a1",
   "level": 1,
   "skills": [
    "R1"
   ],
   "type": "abcd",
   "q": "Która liczba jest rozwiązaniem równania 4x + 3 = 2x − 5?",
   "opts": [
    "4",
    "−1",
    "−4",
    "1"
   ],
   "ok": 2,
   "why": {
    "A": "Dla x = 4: L = 19, a P = 3.",
    "B": "Dla x = −1: L = −1, a P = −7.",
    "D": "Dla x = 1: L = 7, a P = −3."
   },
   "sol": [
    "Dla x = −4: [[L = −16 + 3 = −13]], [[P = −8 − 5 = −13]]. Równe."
   ],
   "answer": "C, −4.",
   "tip": "Wstawiaj liczby ujemne w nawiasach.",
   "check": [
    "4*(-4) + 3 == 2*(-4) - 5",
    "4*4 + 3 != 2*4 - 5",
    "4*(-1) + 3 != 2*(-1) - 5",
    "4*1 + 3 != 2*1 - 5"
   ],
   "twin": {
    "type": "abcd",
    "q": "Która liczba jest rozwiązaniem równania 6 − x = 2x + 15?",
    "opts": [
     "−3",
     "3",
     "7",
     "−7"
    ],
    "ok": 0,
    "why": {
     "B": "Dla x = 3: L = 3, a P = 21.",
     "C": "Dla x = 7: L = −1, a P = 29.",
     "D": "Dla x = −7: L = 13, a P = 1."
    },
    "sol": [
     "Dla x = −3: [[L = 6 + 3 = 9]], [[P = −6 + 15 = 9]]."
    ],
    "answer": "A, −3.",
    "tip": "6 − (−3) = 6 + 3.",
    "check": [
     "6 - (-3) == 2*(-3) + 15",
     "6 - 3 != 2*3 + 15",
     "6 - 7 != 2*7 + 15",
     "6 - (-7) != 2*(-7) + 15"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Która liczba jest rozwiązaniem równania x² = 5x − 6?",
    "opts": [
     "−2",
     "−3",
     "6",
     "3"
    ],
    "ok": 3,
    "why": {
     "A": "Dla x = −2: L = 4, a P = −16.",
     "B": "Dla x = −3: L = 9, a P = −21.",
     "C": "Dla x = 6: L = 36, a P = 24."
    },
    "sol": [
     "Dla x = 3: [[L = 9]], [[P = 15 − 6 = 9]]. (Liczba 2 też spełnia to równanie, ale nie ma jej wśród odpowiedzi.)"
    ],
    "answer": "D, 3.",
    "tip": "Równanie z x² może mieć dwa rozwiązania.",
    "check": [
     "3**2 == 5*3 - 6",
     "2**2 == 5*2 - 6",
     "(-2)**2 != 5*(-2) - 6",
     "(-3)**2 != 5*(-3) - 6",
     "6**2 != 5*6 - 6"
    ]
   }
  },
  {
   "id": "a2",
   "level": 1,
   "skills": [
    "R1"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Liczba 2 jest rozwiązaniem równania 3(x − 1) = x + 1.",
     "ok": "P"
    },
    {
     "t": "Liczba −1 jest rozwiązaniem równania x² + 2x = 1.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[L = 3 · 1 = 3]], [[P = 2 + 1 = 3]]. Prawda.",
    "<b>Zdanie 2.</b> [[L = 1 − 2 = −1]], a P = 1. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "(−1)² = 1, a 2 · (−1) = −2.",
   "check": [
    "3*(2 - 1) == 2 + 1",
    "(-1)**2 + 2*(-1) != 1"
   ],
   "twin": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Liczba −2 jest rozwiązaniem równania 5 − x = 7.",
      "ok": "P"
     },
     {
      "t": "Liczba 3 jest rozwiązaniem równania x² − 9 = x.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[5 − (−2) = 7]]. Prawda.",
     "<b>Zdanie 2.</b> [[L = 9 − 9 = 0]], a P = 3. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Odejmowanie liczby ujemnej to dodawanie.",
    "check": [
     "5 - (-2) == 7",
     "3**2 - 9 != 3"
    ]
   },
   "twin2": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Liczba 0 jest rozwiązaniem równania x/8 + x/2 = 0.",
      "ok": "P"
     },
     {
      "t": "Liczba 4 jest rozwiązaniem równania x/2 + x/4 = 4.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[0 + 0 = 0]]. Prawda.",
     "<b>Zdanie 2.</b> [[4/2 + 4/4 = 2 + 1 = 3]], a nie 4. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Wstaw i policz obie strony.",
    "check": [
     "F(4, 2) + F(4, 4) == 3"
    ]
   }
  },
  {
   "id": "a5",
   "level": 1,
   "skills": [
    "R3"
   ],
   "type": "fields",
   "q": "Rozwiąż równanie 6x − 5 = 2x + 7.",
   "fields": [
    {
     "label": "x",
     "ans": 3,
     "show": "3",
     "why": [
      [
       0.5,
       "Liczby na jedną stronę: 7 + 5 = 12, a nie 2."
      ]
     ]
    }
   ],
   "sol": [
    "[[6x − 2x = 7 + 5]], [[4x = 12]], [[x = 3]]."
   ],
   "answer": "x = 3.",
   "tip": "Sprawdzenie: 18 − 5 = 13 i 6 + 7 = 13.",
   "check": [
    "6*3 - 5 == 2*3 + 7"
   ],
   "twin": {
    "type": "fields",
    "q": "Rozwiąż równanie 3x + 8 = 5x − 4.",
    "fields": [
     {
      "label": "x",
      "ans": 6,
      "show": "6",
      "why": [
       [
        -6,
        "−2x = −12, więc x = 6 (minus przez minus daje plus)."
       ],
       [
        2,
        "Przenosząc 8 na drugą stronę, zmieniasz znak: −4 − 8 = −12."
       ]
      ]
     }
    ],
    "sol": [
     "[[8 + 4 = 5x − 3x]], [[12 = 2x]], [[x = 6]]."
    ],
    "answer": "x = 6.",
    "tip": "Zbieraj x tam, gdzie jest ich więcej.",
    "check": [
     "3*6 + 8 == 5*6 - 4"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Rozwiąż równanie x − 9 = 4x + 6.",
    "fields": [
     {
      "label": "x",
      "ans": -5,
      "show": "−5",
      "why": [
       [
        5,
        "−3x = 15 daje x = −5. Pilnuj minusa."
       ],
       [
        -1,
        "6 + 9 = 15, a nie 3."
       ]
      ]
     }
    ],
    "sol": [
     "[[−9 − 6 = 4x − x]], [[−15 = 3x]], [[x = −5]]."
    ],
    "answer": "x = −5.",
    "tip": "Sprawdzenie: −5 − 9 = −14 i −20 + 6 = −14.",
    "check": [
     "-5 - 9 == 4*(-5) + 6"
    ]
   }
  },
  {
   "id": "a6",
   "level": 1,
   "skills": [
    "R3"
   ],
   "type": "abcd",
   "q": "Rozwiązaniem równania 5 − 2x = 3x − 20 jest liczba:",
   "opts": [
    "−5",
    "5",
    "3",
    "−3"
   ],
   "ok": 1,
   "why": {
    "A": "25 = 5x, więc x = 5, liczba dodatnia.",
    "C": "5 + 20 = 25, a nie 15.",
    "D": "−20 przeniesione na drugą stronę zmienia znak: 5 + 20 = 25."
   },
   "sol": [
    "[[5 + 20 = 3x + 2x]], [[25 = 5x]], [[x = 5]]."
   ],
   "answer": "B, 5.",
   "tip": "Sprawdzenie: 5 − 10 = −5 i 15 − 20 = −5.",
   "check": [
    "5 - 2*5 == 3*5 - 20"
   ],
   "twin": {
    "type": "abcd",
    "q": "Rozwiązaniem równania 2x + 9 = 5x − 3 jest liczba:",
    "opts": [
     "−4",
     "4",
     "2",
     "6"
    ],
    "ok": 1,
    "why": {
     "A": "12 = 3x, więc x = 4, liczba dodatnia.",
     "C": "9 + 3 = 12, a nie 6.",
     "D": "Dzielisz 12 przez 3, a nie przez 2."
    },
    "sol": [
     "[[9 + 3 = 5x − 2x]], [[12 = 3x]], [[x = 4]]."
    ],
    "answer": "B, 4.",
    "tip": "Sprawdzenie: 8 + 9 = 17 i 20 − 3 = 17.",
    "check": [
     "2*4 + 9 == 5*4 - 3"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Rozwiązaniem równania 7x − 1 = 4x − 13 jest liczba:",
    "opts": [
     "4",
     "−14/3",
     "−3",
     "−4"
    ],
    "ok": 3,
    "why": {
     "A": "3x = −12, więc x = −4.",
     "B": "−13 + 1 = −12, a nie −14.",
     "C": "−12 : 3 = −4."
    },
    "sol": [
     "[[7x − 4x = −13 + 1]], [[3x = −12]], [[x = −4]]."
    ],
    "answer": "D, −4.",
    "tip": "Minus jedynkę przenosisz jako plus jedynkę.",
    "check": [
     "7*(-4) - 1 == 4*(-4) - 13"
    ]
   }
  },
  {
   "id": "a7",
   "level": 1,
   "skills": [
    "R4"
   ],
   "type": "fields",
   "q": "Rozwiąż równanie 3(x − 2) = x + 8.",
   "fields": [
    {
     "label": "x",
     "ans": 7,
     "show": "7",
     "why": [
      [
       5,
       "3 mnoży też dwójkę: 3(x − 2) = 3x − 6."
      ]
     ]
    }
   ],
   "sol": [
    "[[3x − 6 = x + 8]], [[2x = 14]], [[x = 7]]."
   ],
   "answer": "x = 7.",
   "tip": "Sprawdzenie: 3 · 5 = 15 i 7 + 8 = 15.",
   "check": [
    "3*(7 - 2) == 7 + 8"
   ],
   "twin": {
    "type": "fields",
    "q": "Rozwiąż równanie 2(3x + 1) = 4x + 10.",
    "fields": [
     {
      "label": "x",
      "ans": 4,
      "show": "4",
      "why": [
       [
        4.5,
        "2 mnoży też jedynkę: 6x + 2."
       ]
      ]
     }
    ],
    "sol": [
     "[[6x + 2 = 4x + 10]], [[2x = 8]], [[x = 4]]."
    ],
    "answer": "x = 4.",
    "tip": "Sprawdzenie: 2 · 13 = 26 i 16 + 10 = 26.",
    "check": [
     "2*(3*4 + 1) == 4*4 + 10"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Rozwiąż równanie 5 − (x − 3) = 2x − 1.",
    "fields": [
     {
      "label": "x",
      "ans": 3,
      "show": "3",
      "why": [
       [
        1,
        "Minus przed nawiasem: −(x − 3) = −x + 3."
       ]
      ]
     }
    ],
    "sol": [
     "[[5 − x + 3 = 2x − 1]], [[8 − x = 2x − 1]].",
     "[[9 = 3x]], [[x = 3]]."
    ],
    "answer": "x = 3.",
    "tip": "Sprawdzenie: 5 − 0 = 5 i 6 − 1 = 5.",
    "check": [
     "5 - (3 - 3) == 2*3 - 1"
    ]
   }
  },
  {
   "id": "a9",
   "level": 1,
   "skills": [
    "R5"
   ],
   "type": "abcd",
   "q": "Ze wzoru P = a · h : 2 wyznaczono h. Otrzymano:",
   "opts": [
    "h = 2P : a",
    "h = P : 2a",
    "h = 2a : P",
    "h = P · a : 2"
   ],
   "ok": 0,
   "why": {
    "B": "Dzielenie przez 2 cofasz mnożeniem przez 2: 2P, a nie P : 2.",
    "C": "Odwrotnie: P ma być w liczniku.",
    "D": "Mnożenie przez a cofasz dzieleniem przez a."
   },
   "sol": [
    "[[P = a · h : 2]]. Mnożymy przez 2: [[2P = a · h]]. Dzielimy przez a: [[h = 2P : a]]."
   ],
   "answer": "A, h = 2P : a.",
   "tip": "Sprawdź na liczbach: a = 6, h = 4, P = 12, a 2 · 12 : 6 = 4.",
   "check": [
    "2*12/6 == 4"
   ],
   "twin": {
    "type": "abcd",
    "q": "Ze wzoru O = 2a + 2b wyznaczono a. Otrzymano:",
    "opts": [
     "a = O : 2 − 2b",
     "a = O − 2b",
     "a = (O − 2b) : 2",
     "a = (O + 2b) : 2"
    ],
    "ok": 2,
    "why": {
     "A": "Przez 2 dzielisz całą różnicę O − 2b, a nie tylko O.",
     "B": "Zostaje 2a = O − 2b. Trzeba jeszcze podzielić przez 2.",
     "D": "2b przenosisz ze zmianą znaku: O − 2b."
    },
    "sol": [
     "[[2a = O − 2b]], [[a = (O − 2b) : 2]]."
    ],
    "answer": "C, a = (O − 2b) : 2.",
    "tip": "Sprawdź: O = 20, b = 4, a = (20 − 8) : 2 = 6.",
    "check": [
     "(20 - 2*4)/2 == 6",
     "2*6 + 2*4 == 20"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Ze wzoru V = a · b · c wyznaczono c. Otrzymano:",
    "opts": [
     "c = V − a · b",
     "c = a · b : V",
     "c = V : (a · b)",
     "c = V · a · b"
    ],
    "ok": 2,
    "why": {
     "A": "Mnożenie cofasz dzieleniem, a nie odejmowaniem.",
     "B": "Odwrotnie: V ma być w liczniku.",
     "D": "Mnożenie cofasz dzieleniem."
    },
    "sol": [
     "Dzielimy obie strony przez a · b: [[c = V : (a · b)]]."
    ],
    "answer": "C, c = V : (a · b).",
    "tip": "Sprawdź: 2 · 3 · 4 = 24, a 24 : 6 = 4.",
    "check": [
     "24/(2*3) == 4"
    ]
   }
  },
  {
   "id": "a10",
   "level": 1,
   "skills": [
    "R5",
    "R2"
   ],
   "type": "fields",
   "q": "Trójkąt ma pole 30 cm², a jego podstawa ma 12 cm. Oblicz wysokość opuszczoną na tę podstawę. (Pole trójkąta: P = a · h : 2.)",
   "fields": [
    {
     "label": "h (cm)",
     "ans": 5,
     "show": "5",
     "why": [
      [
       2.5,
       "Pomnóż pole przez 2: 60 : 12 = 5."
      ],
      [
       180,
       "h = 2P : a, a nie P · a : 2."
      ]
     ]
    }
   ],
   "sol": [
    "[[30 = 12 · h : 2 = 6h]], [[h = 5]] cm."
   ],
   "answer": "5 cm.",
   "tip": "Sprawdzenie: 12 · 5 : 2 = 30.",
   "check": [
    "12*5/2 == 30"
   ],
   "twin": {
    "type": "fields",
    "q": "Samochód przejechał 240 km w 3 godziny. Z jaką średnią prędkością jechał?",
    "fields": [
     {
      "label": "v (km/h)",
      "ans": 80,
      "show": "80",
      "why": [
       [
        720,
        "Prędkość to droga podzielona przez czas."
       ]
      ]
     }
    ],
    "sol": [
     "[[v = s : t = 240 : 3 = 80]] km/h."
    ],
    "answer": "80 km/h.",
    "tip": "v = s : t.",
    "check": [
     "240/3 == 80"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Prostokąt ma pole 84 cm² i jeden bok długości 7 cm. Jaką długość ma drugi bok?",
    "fields": [
     {
      "label": "Bok (cm)",
      "ans": 12,
      "show": "12",
      "why": [
       [
        588,
        "Drugi bok to pole podzielone przez znany bok: 84 : 7."
       ]
      ]
     }
    ],
    "sol": [
     "[[84 = 7 · b]], [[b = 12]] cm."
    ],
    "answer": "12 cm.",
    "tip": "Sprawdzenie: 7 · 12 = 84.",
    "check": [
     "7*12 == 84"
    ]
   }
  },
  {
   "id": "a11",
   "level": 1,
   "skills": [
    "R6"
   ],
   "type": "abcd",
   "q": "Ola ma o 12 zł więcej niż Kuba. Razem mają 70 zł. Kuba ma x zł. Które równanie opisuje tę sytuację?",
   "opts": [
    "x + (x + 12) = 70",
    "x + 12 = 70",
    "x + 12x = 70",
    "2x − 12 = 70"
   ],
   "ok": 0,
   "why": {
    "B": "To tylko pieniądze Oli, a 70 zł mają razem.",
    "C": "„O 12 więcej” to x + 12, a nie 12x.",
    "D": "Ola ma więcej, więc + 12, a nie − 12."
   },
   "sol": [
    "Ola: [[x + 12]]. Razem: [[x + (x + 12) = 70]]. Rozwiązanie: x = 29."
   ],
   "answer": "A, x + (x + 12) = 70.",
   "tip": "Sprawdzenie: 29 + 41 = 70.",
   "check": [
    "29 + (29 + 12) == 70"
   ],
   "twin": {
    "type": "abcd",
    "q": "Trzy kolejne liczby naturalne dają w sumie 57. Najmniejsza z nich to n. Które równanie opisuje tę sytuację?",
    "opts": [
     "3n = 57",
     "n + 2n + 3n = 57",
     "n + (n + 2) + (n + 4) = 57",
     "n + (n + 1) + (n + 2) = 57"
    ],
    "ok": 3,
    "why": {
     "A": "Liczby są kolejne, a nie równe: n, n + 1, n + 2.",
     "B": "Kolejne liczby to n, n + 1, n + 2, a nie n, 2n, 3n.",
     "C": "To kolejne liczby parzyste albo nieparzyste, a nie kolejne naturalne."
    },
    "sol": [
     "[[n + (n + 1) + (n + 2) = 57]]. Rozwiązanie: n = 18 (18 + 19 + 20 = 57)."
    ],
    "answer": "D, n + (n + 1) + (n + 2) = 57.",
    "tip": "Kolejne liczby różnią się o 1.",
    "check": [
     "18 + 19 + 20 == 57"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Obwód prostokąta wynosi 40 cm. Jeden bok jest o 4 cm dłuższy od drugiego. Krótszy bok ma x cm. Które równanie opisuje tę sytuację?",
    "opts": [
     "x + (x + 4) = 40",
     "2x + 2(x + 4) = 40",
     "x · (x + 4) = 40",
     "4x + 4 = 40"
    ],
    "ok": 1,
    "why": {
     "A": "To połowa obwodu. Obwód to suma czterech boków.",
     "C": "Iloczyn boków to pole, a nie obwód.",
     "D": "Dłuższe boki są dwa, więc dopisujesz 4 dwa razy: 4x + 8."
    },
    "sol": [
     "[[2x + 2(x + 4) = 40]]. Rozwiązanie: 4x + 8 = 40, x = 8."
    ],
    "answer": "B, 2x + 2(x + 4) = 40.",
    "tip": "Sprawdzenie: boki 8 i 12, obwód 40.",
    "check": [
     "2*8 + 2*12 == 40"
    ]
   }
  },
  {
   "id": "b2",
   "level": 2,
   "skills": [
    "R8"
   ],
   "type": "fields",
   "q": "Po podwyżce o 20% bilet kosztuje 42 zł. Ile kosztował przed podwyżką?",
   "fields": [
    {
     "label": "Cena (zł)",
     "ans": 35,
     "show": "35",
     "why": [
      [
       33.6,
       "Podwyżkę liczono od starej ceny: 1,2x = 42."
      ],
      [
       50.4,
       "To cena po kolejnej podwyżce. Szukasz ceny niższej."
      ]
     ]
    }
   ],
   "sol": [
    "[[1,2x = 42]], [[x = 42 : 1,2 = 35]] zł."
   ],
   "answer": "35 zł.",
   "tip": "Sprawdzenie: 20% z 35 to 7, a 35 + 7 = 42.",
   "check": [
    "F('1.2')*35 == 42"
   ],
   "twin": {
    "type": "fields",
    "q": "Po obniżce o 30% buty kosztują 140 zł. Ile kosztowały przed obniżką?",
    "fields": [
     {
      "label": "Cena (zł)",
      "ans": 200,
      "show": "200",
      "why": [
       [
        182,
        "Obniżkę liczono od starej ceny: 0,7x = 140."
       ],
       [
        98,
        "Szukasz ceny wyższej niż 140 zł."
       ]
      ]
     }
    ],
    "sol": [
     "[[0,7x = 140]], [[x = 200]] zł."
    ],
    "answer": "200 zł.",
    "tip": "Cena przed zmianą: dzielisz.",
    "check": [
     "F('0.7')*200 == 140"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Liczba zwiększona o 15% jest równa 69. Jaka to liczba?",
    "fields": [
     {
      "label": "Liczba",
      "ans": 60,
      "show": "60",
      "why": [
       [
        58.65,
        "15% liczono od szukanej liczby: 1,15x = 69."
       ]
      ]
     }
    ],
    "sol": [
     "[[1,15x = 69]], [[x = 60]]."
    ],
    "answer": "60.",
    "tip": "Sprawdzenie: 60 + 9 = 69.",
    "check": [
     "F('1.15')*60 == 69"
    ]
   }
  },
  {
   "id": "b5",
   "level": 2,
   "skills": [
    "R5"
   ],
   "type": "pair",
   "q": "Pole trapezu obliczamy ze wzoru P = (a + b) · h : 2. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "Trapez o polu 60 cm² i podstawach 7 cm i 13 cm ma wysokość",
     "opts": {
      "A": "6 cm",
      "B": "3 cm"
     },
     "ok": "A"
    },
    {
     "label": "Wzór na wysokość trapezu ma postać",
     "opts": {
      "C": "h = 2P : (a + b)",
      "D": "h = P : 2(a + b)"
     },
     "ok": "C"
    }
   ],
   "sol": [
    "[[60 = 20 · h : 2 = 10h]], [[h = 6]] cm. 3 cm wychodzi, gdy zapomni się o dzieleniu przez 2.",
    "[[2P = (a + b) · h]], więc [[h = 2P : (a + b)]]."
   ],
   "answer": "A i C.",
   "tip": "Sprawdzenie: (7 + 13) · 6 : 2 = 60.",
   "check": [
    "(7 + 13)*6/2 == 60"
   ],
   "twin": {
    "type": "pair",
    "q": "Drogę obliczamy ze wzoru s = v · t. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Pociąg jadący z prędkością 90 km/h pokona 225 km w czasie",
      "opts": {
       "A": "2,5 h",
       "B": "2 h 5 min"
      },
      "ok": "A"
     },
     {
      "label": "Wzór na prędkość ma postać",
      "opts": {
       "C": "v = s : t",
       "D": "v = t : s"
      },
      "ok": "C"
     }
    ],
    "sol": [
     "[[t = 225 : 90 = 2,5]] h, czyli 2 h 30 min, a nie 2 h 5 min.",
     "[[v = s : t]]."
    ],
    "answer": "A i C.",
    "tip": "0,5 h to 30 minut.",
    "check": [
     "225/90 == 2.5"
    ]
   },
   "twin2": {
    "type": "pair",
    "q": "Obwód prostokąta obliczamy ze wzoru O = 2(a + b). Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Prostokąt o obwodzie 30 cm i boku 6 cm ma drugi bok długości",
      "opts": {
       "A": "9 cm",
       "B": "24 cm"
      },
      "ok": "A"
     },
     {
      "label": "Wzór na b ma postać",
      "opts": {
       "C": "b = O : 2 − a",
       "D": "b = O − 2a"
      },
      "ok": "C"
     }
    ],
    "sol": [
     "[[30 = 2(6 + b)]], [[15 = 6 + b]], [[b = 9]] cm.",
     "[[O : 2 = a + b]], więc [[b = O : 2 − a]]. Zapis O − 2a to 2b, a nie b."
    ],
    "answer": "A i C.",
    "tip": "Połowa obwodu to suma dwóch sąsiednich boków.",
    "check": [
     "2*(6 + 9) == 30"
    ]
   }
  },
  {
   "id": "b6",
   "level": 2,
   "skills": [
    "R1"
   ],
   "type": "tn",
   "q": "Czy liczba 4 jest rozwiązaniem równania x/2 + x/4 = 3? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "T",
   "reasons": {
    "1": "po wstawieniu 4: 4/2 + 4/4 = 2 + 1 = 3, czyli lewa strona jest równa prawej",
    "2": "4 jest liczbą parzystą",
    "3": "4 dzieli się przez 2 i przez 4"
   },
   "okReason": "1",
   "sol": [
    "[[4/2 + 4/4 = 2 + 1 = 3]]. Tak.",
    "Uzasadnienia 2 i 3 są prawdziwe, ale nie sprawdzają równania."
   ],
   "answer": "T, uzasadnienie 1.",
   "tip": "Rozwiązanie sprawdza się tylko przez wstawienie.",
   "check": [
    "F(4, 2) + F(4, 4) == 3"
   ],
   "twin": {
    "type": "tn",
    "q": "Czy liczba −3 jest rozwiązaniem równania x² + 2x = 3? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "T",
    "reasons": {
     "1": "(−3)² + 2 · (−3) = 9 − 6 = 3",
     "2": "−3 jest liczbą ujemną",
     "3": "3 · (−1) = −3"
    },
    "okReason": "1",
    "sol": [
     "[[9 − 6 = 3]]. Tak."
    ],
    "answer": "T, uzasadnienie 1.",
    "tip": "(−3)² = 9.",
    "check": [
     "(-3)**2 + 2*(-3) == 3"
    ]
   },
   "twin2": {
    "type": "tn",
    "q": "Czy liczba 2 jest rozwiązaniem równania 3x − 4 = x + 2? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "N",
    "reasons": {
     "1": "lewa strona to 3 · 2 − 4 = 2, a prawa 2 + 2 = 4",
     "2": "2 jest liczbą parzystą",
     "3": "2 jest liczbą pierwszą"
    },
    "okReason": "1",
    "sol": [
     "[[L = 2]], [[P = 4]]. Nie. (Rozwiązaniem jest x = 3.)"
    ],
    "answer": "N, uzasadnienie 1.",
    "tip": "Parzystość nie ma tu znaczenia.",
    "check": [
     "3*2 - 4 != 2 + 2",
     "3*3 - 4 == 3 + 2"
    ]
   }
  },
  {
   "id": "b7",
   "level": 2,
   "skills": [
    "R6"
   ],
   "type": "pair",
   "q": "W pierwszym zbiorniku jest 3 razy więcej wody niż w drugim. Z pierwszego odlano 20 litrów, a do drugiego dolano 20 litrów i teraz w obu jest tyle samo wody. W drugim zbiorniku było x litrów. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "Sytuację opisuje równanie",
     "opts": {
      "A": "3x − 20 = x + 20",
      "B": "3x + 20 = x − 20"
     },
     "ok": "A"
    },
    {
     "label": "W drugim zbiorniku było na początku",
     "opts": {
      "C": "20 litrów",
      "D": "40 litrów"
     },
     "ok": "C"
    }
   ],
   "sol": [
    "Z pierwszego ODLANO: [[3x − 20]]. Do drugiego DOLANO: [[x + 20]].",
    "[[3x − 20 = x + 20]], [[2x = 40]], [[x = 20]] litrów."
   ],
   "answer": "A i C.",
   "tip": "Sprawdzenie: 60 − 20 = 40 i 20 + 20 = 40.",
   "check": [
    "3*20 - 20 == 20 + 20"
   ],
   "twin": {
    "type": "pair",
    "q": "Tata ma 40 lat, a syn 12 lat. Za ile lat tata będzie 3 razy starszy od syna? Szukana liczba lat to x. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Sytuację opisuje równanie",
      "opts": {
       "A": "40 + x = 3(12 + x)",
       "B": "40 + x = 3 · 12 + x"
      },
      "ok": "A"
     },
     {
      "label": "Tata będzie 3 razy starszy za",
      "opts": {
       "C": "2 lata",
       "D": "4 lata"
      },
      "ok": "C"
     }
    ],
    "sol": [
     "[[40 + x = 3(12 + x) = 36 + 3x]], [[4 = 2x]], [[x = 2]]."
    ],
    "answer": "A i C.",
    "tip": "Sprawdzenie: 42 = 3 · 14.",
    "check": [
     "40 + 2 == 3*(12 + 2)"
    ]
   },
   "twin2": {
    "type": "pair",
    "q": "Kasia ma 3 razy więcej naklejek niż Tomek. Gdy Kasia dała Tomkowi 10 naklejek, mieli po tyle samo. Tomek miał x naklejek. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Sytuację opisuje równanie",
      "opts": {
       "A": "3x − 10 = x + 10",
       "B": "3x = x + 10"
      },
      "ok": "A"
     },
     {
      "label": "Tomek miał na początku",
      "opts": {
       "C": "20 naklejek",
       "D": "10 naklejek"
      },
      "ok": "D"
     }
    ],
    "sol": [
     "[[3x − 10 = x + 10]], [[2x = 20]], [[x = 10]]."
    ],
    "answer": "A i D.",
    "tip": "Sprawdzenie: 30 − 10 = 20 i 10 + 10 = 20.",
    "check": [
     "3*10 - 10 == 10 + 10"
    ]
   }
  },
  {
   "id": "b9",
   "level": 2,
   "skills": [
    "R5",
    "R2"
   ],
   "type": "fields",
   "q": "Biegacz pokonał 400 m w czasie 80 s. Z jaką średnią prędkością biegł (w m/s)?",
   "fields": [
    {
     "label": "v (m/s)",
     "ans": 5,
     "show": "5",
     "why": [
      [
       32000,
       "Prędkość to droga podzielona przez czas, a nie iloczyn."
      ],
      [
       0.2,
       "Odwrotnie: 400 : 80 = 5."
      ]
     ]
    }
   ],
   "sol": [
    "[[v = 400 : 80 = 5]] m/s."
   ],
   "answer": "5 m/s.",
   "tip": "v = s : t.",
   "check": [
    "400/80 == 5"
   ],
   "twin": {
    "type": "fields",
    "q": "Ile sekund potrwa przejazd 150 m z prędkością 6 m/s?",
    "fields": [
     {
      "label": "t (s)",
      "ans": 25,
      "show": "25",
      "why": [
       [
        900,
        "Czas to droga podzielona przez prędkość."
       ]
      ]
     }
    ],
    "sol": [
     "[[t = 150 : 6 = 25]] s."
    ],
    "answer": "25 s.",
    "tip": "t = s : v.",
    "check": [
     "150/6 == 25"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Ślimak pełznie z prędkością 2 cm na minutę. Jaką drogę (w cm) pokona w ciągu 1,5 godziny?",
    "fields": [
     {
      "label": "s (cm)",
      "ans": 180,
      "show": "180",
      "why": [
       [
        3,
        "1,5 godziny to 90 minut, a prędkość jest w centymetrach na minutę."
       ]
      ]
     }
    ],
    "sol": [
     "[[1,5 h = 90 min]], [[s = 2 · 90 = 180]] cm."
    ],
    "answer": "180 cm.",
    "tip": "Jednostki czasu muszą pasować do prędkości.",
    "check": [
     "2*90 == 180"
    ]
   }
  },
  {
   "id": "b10",
   "level": 2,
   "skills": [
    "R3"
   ],
   "type": "fields",
   "q": "Rozwiąż równanie 0,5x + 3 = 0,2x + 6.",
   "fields": [
    {
     "label": "x",
     "ans": 10,
     "show": "10",
     "why": [
      [
       1,
       "3 : 0,3 = 30 : 3 = 10."
      ]
     ]
    }
   ],
   "sol": [
    "[[0,5x − 0,2x = 6 − 3]], [[0,3x = 3]], [[x = 10]]."
   ],
   "answer": "x = 10.",
   "tip": "Możesz najpierw pomnożyć wszystko przez 10: 5x + 30 = 2x + 60.",
   "check": [
    "F('0.5')*10 + 3 == F('0.2')*10 + 6"
   ],
   "twin": {
    "type": "fields",
    "q": "Rozwiąż równanie 1,5x − 4 = 0,5x + 2.",
    "fields": [
     {
      "label": "x",
      "ans": 6,
      "show": "6"
     }
    ],
    "sol": [
     "[[1,5x − 0,5x = 2 + 4]], [[x = 6]]."
    ],
    "answer": "x = 6.",
    "tip": "1,5x − 0,5x = 1x.",
    "check": [
     "F('1.5')*6 - 4 == F('0.5')*6 + 2"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Rozwiąż równanie 0,4x + 1 = 0,1x − 2.",
    "fields": [
     {
      "label": "x",
      "ans": -10,
      "show": "−10",
      "why": [
       [
        10,
        "−2 − 1 = −3, więc x = −3 : 0,3 = −10."
       ]
      ]
     }
    ],
    "sol": [
     "[[0,3x = −3]], [[x = −10]]."
    ],
    "answer": "x = −10.",
    "tip": "Sprawdzenie: −4 + 1 = −3 i −1 − 2 = −3.",
    "check": [
     "F('0.4')*(-10) + 1 == F('0.1')*(-10) - 2"
    ]
   }
  },
  {
   "id": "b11",
   "level": 2,
   "skills": [
    "R7"
   ],
   "type": "abcd",
   "q": "Mama jest o 26 lat starsza od córki. Za 5 lat będzie od niej 3 razy starsza. Ile lat ma teraz córka?",
   "opts": [
    "13",
    "8",
    "34",
    "5"
   ],
   "ok": 1,
   "why": {
    "A": "13 lat córka będzie miała za 5 lat.",
    "C": "34 lata ma mama.",
    "D": "Za 5 lat mama ma x + 31, a córka x + 5. Równanie: x + 31 = 3(x + 5)."
   },
   "sol": [
    "Córka: x, mama: x + 26. Za 5 lat: [[x + 31 = 3(x + 5)]].",
    "[[x + 31 = 3x + 15]], [[16 = 2x]], [[x = 8]]."
   ],
   "answer": "B, 8.",
   "tip": "Sprawdzenie: za 5 lat 39 i 13, a 39 = 3 · 13.",
   "check": [
    "8 + 26 + 5 == 3*(8 + 5)"
   ],
   "twin": {
    "type": "abcd",
    "q": "Brat jest 4 razy starszy od siostry. Za 6 lat będzie od niej 2 razy starszy. Ile lat ma teraz siostra?",
    "opts": [
     "12",
     "9",
     "6",
     "3"
    ],
    "ok": 3,
    "why": {
     "A": "12 lat ma brat.",
     "B": "9 lat siostra będzie miała za 6 lat.",
     "C": "4x + 6 = 2x + 12, więc 2x = 6 i x = 3."
    },
    "sol": [
     "[[4x + 6 = 2(x + 6)]], [[2x = 6]], [[x = 3]]."
    ],
    "answer": "D, 3.",
    "tip": "Sprawdzenie: za 6 lat 18 i 9.",
    "check": [
     "4*3 + 6 == 2*(3 + 6)"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Ojciec ma 45 lat, a syn 15. Ile lat temu ojciec był 4 razy starszy od syna?",
    "opts": [
     "5",
     "10",
     "40",
     "3"
    ],
    "ok": 0,
    "why": {
     "B": "10 lat miał wtedy syn.",
     "C": "40 lat miał wtedy ojciec.",
     "D": "45 − x = 60 − 4x daje 3x = 15, czyli x = 5."
    },
    "sol": [
     "[[45 − x = 4(15 − x)]], [[45 − x = 60 − 4x]], [[3x = 15]], [[x = 5]]."
    ],
    "answer": "A, 5.",
    "tip": "x lat temu obaj byli o x lat młodsi.",
    "check": [
     "45 - 5 == 4*(15 - 5)"
    ]
   }
  },
  {
   "id": "b12",
   "level": 2,
   "skills": [
    "R8"
   ],
   "type": "tn",
   "q": "Cenę kurtki obniżono o 20%, a potem nową cenę podniesiono o 20%. Czy kurtka kosztuje teraz tyle samo co na początku? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "N",
   "reasons": {
    "1": "cena po zmianach to 0,8x · 1,2 = 0,96x, czyli o 4% mniej niż na początku",
    "2": "−20% + 20% = 0%",
    "3": "podwyżkę liczono od niższej ceny, więc była większa niż obniżka"
   },
   "okReason": "1",
   "sol": [
    "[[0,8 · 1,2 = 0,96]]. Kurtka kosztuje 96% ceny początkowej. Nie.",
    "Uzasadnienie 2 to typowy błąd. Uzasadnienie 3 jest fałszywe: podwyżka od niższej ceny jest MNIEJSZA."
   ],
   "answer": "N, uzasadnienie 1.",
   "tip": "Kolejne zmiany procentowe mnożysz, a nie dodajesz.",
   "check": [
    "F('0.8')*F('1.2') == F('0.96')"
   ],
   "twin": {
    "type": "tn",
    "q": "Liczbę zwiększono o 10%, a potem otrzymany wynik zwiększono o 10%. Czy liczba wzrosła łącznie o 21%? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "T",
    "reasons": {
     "1": "1,1 · 1,1 = 1,21, czyli liczba wzrosła o 21%",
     "2": "10% + 10% = 20%",
     "3": "10 · 10 = 100"
    },
    "okReason": "1",
    "sol": [
     "[[1,1 · 1,1 = 1,21]]. Tak."
    ],
    "answer": "T, uzasadnienie 1.",
    "tip": "Druga podwyżka liczy się od większej liczby.",
    "check": [
     "F('1.1')*F('1.1') == F('1.21')"
    ]
   },
   "twin2": {
    "type": "tn",
    "q": "Cenę podniesiono o 50%, a potem nową cenę obniżono o 50%. Czy cena wróciła do początkowej? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "N",
    "reasons": {
     "1": "1,5 · 0,5 = 0,75, czyli cena jest o 25% niższa niż na początku",
     "2": "+50% − 50% = 0%",
     "3": "50% to połowa"
    },
    "okReason": "1",
    "sol": [
     "[[1,5 · 0,5 = 0,75]]. Nie."
    ],
    "answer": "N, uzasadnienie 1.",
    "tip": "Np. 100 zł → 150 zł → 75 zł.",
    "check": [
     "F('1.5')*F('0.5') == F('0.75')"
    ]
   }
  },
  {
   "id": "c1",
   "level": 3,
   "skills": [
    "R7",
    "R6"
   ],
   "type": "self",
   "q": "Andrzej ma o 28 plakatów więcej niż Basia, a Marek ma 3 razy mniej plakatów niż Basia. Andrzej i Marek mają razem 60 plakatów. Ile plakatów ma każde z tych dzieci? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Wprowadziłeś oznaczenia i ułożyłeś równanie, np. x + 28 + x/3 = 60 (x – plakaty Basi).",
     "pts": 1
    },
    {
     "t": "Rozwiązałeś równanie: x = 24.",
     "pts": 1
    },
    {
     "t": "Podałeś liczby plakatów wszystkich dzieci: Basia 24, Andrzej 52, Marek 8.",
     "pts": 1
    }
   ],
   "sol": [
    "x – plakaty Basi. Andrzej: [[x + 28]], Marek: [[x/3]].",
    "[[x + 28 + x/3 = 60]], [[4x/3 = 32]], [[x = 24]].",
    "Andrzej: [[52]], Marek: [[8]]. Sprawdzenie: 52 + 8 = 60."
   ],
   "answer": "Basia ma 24 plakaty, Andrzej 52, a Marek 8.",
   "tip": "Podobne zadanie (z innymi liczbami) było na egzaminie w 2025 roku za 3 punkty. Pytano o wszystkie dzieci, więc odpowiedź musi zawierać trzy liczby.",
   "check": [
    "24 + 28 + F(24, 3) == 60"
   ]
  },
  {
   "id": "c4",
   "level": 3,
   "skills": [
    "R8"
   ],
   "type": "self",
   "q": "Cena roweru wzrosła o 10%, a potem nowa cena spadła o 10%. Teraz rower kosztuje 1 485 zł. Ile kosztował na początku? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Ułożyłeś równanie 1,1 · 0,9 · x = 1 485, czyli 0,99x = 1 485.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś cenę początkową: 1 500 zł.",
     "pts": 1
    }
   ],
   "sol": [
    "[[1,1 · 0,9 = 0,99]], więc [[0,99x = 1 485]].",
    "[[x = 1 485 : 0,99 = 1 500]] zł."
   ],
   "answer": "1 500 zł.",
   "tip": "Sprawdzenie: 1 500 → 1 650 → 1 485.",
   "check": [
    "F('1.1')*F('0.9')*1500 == 1485"
   ]
  },
  {
   "id": "c6",
   "level": 3,
   "skills": [
    "R5"
   ],
   "type": "pair",
   "q": "Temperaturę w stopniach Fahrenheita obliczamy ze wzoru F = 1,8C + 32, gdzie C to temperatura w stopniach Celsjusza. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "Temperatura 30 °C to",
     "opts": {
      "A": "86 °F",
      "B": "62 °F"
     },
     "ok": "A"
    },
    {
     "label": "Wzór na C ma postać",
     "opts": {
      "C": "C = (F − 32) : 1,8",
      "D": "C = F : 1,8 − 32"
     },
     "ok": "C"
    }
   ],
   "sol": [
    "[[1,8 · 30 + 32 = 54 + 32 = 86]]. 62 wychodzi, gdy zapomni się o mnożeniu przez 1,8.",
    "[[F − 32 = 1,8C]], więc [[C = (F − 32) : 1,8]]. Najpierw odejmujesz 32, dopiero potem dzielisz."
   ],
   "answer": "A i C.",
   "tip": "Cofaj działania od końca: najpierw „+ 32”, potem „· 1,8”.",
   "check": [
    "F('1.8')*30 + 32 == 86",
    "(86 - 32)/F('1.8') == 30"
   ],
   "twin": {
    "type": "pair",
    "q": "Koszt przejazdu taksówką obliczamy ze wzoru K = 8 + 3,5d, gdzie d to liczba kilometrów. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Za 12 km zapłacimy",
      "opts": {
       "A": "50 zł",
       "B": "138 zł"
      },
      "ok": "A"
     },
     {
      "label": "Za 43 zł przejedziemy",
      "opts": {
       "C": "10 km",
       "D": "12,3 km"
      },
      "ok": "C"
     }
    ],
    "sol": [
     "[[8 + 3,5 · 12 = 8 + 42 = 50]] zł. 138 zł to (8 + 3,5) · 12.",
     "[[43 = 8 + 3,5d]], [[35 = 3,5d]], [[d = 10]] km."
    ],
    "answer": "A i C.",
    "tip": "Opłatę za start odejmij, zanim podzielisz.",
    "check": [
     "8 + F('3.5')*12 == 50",
     "8 + F('3.5')*10 == 43"
    ]
   },
   "twin2": {
    "type": "pair",
    "q": "Liczbę przekątnych wielokąta o n bokach obliczamy ze wzoru d = ½n(n − 3). Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Ośmiokąt ma",
      "opts": {
       "A": "20 przekątnych",
       "B": "40 przekątnych"
      },
      "ok": "A"
     },
     {
      "label": "Wielokąt, który ma 9 przekątnych, ma boków",
      "opts": {
       "C": "6",
       "D": "9"
      },
      "ok": "C"
     }
    ],
    "sol": [
     "[[½ · 8 · 5 = 20]].",
     "Sprawdzamy: [[½ · 6 · 3 = 9]]. Dziewięciokąt ma ½ · 9 · 6 = 27 przekątnych."
    ],
    "answer": "A i C.",
    "tip": "Gdy wzór jest trudny do przekształcenia, sprawdź podane odpowiedzi.",
    "check": [
     "8*5/2 == 20",
     "6*3/2 == 9",
     "9*6/2 == 27"
    ]
   }
  },
  {
   "id": "c8",
   "level": 3,
   "skills": [
    "R1",
    "R4"
   ],
   "type": "tn",
   "q": "Czy liczba −2 jest jedynym rozwiązaniem równania x² = 4? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "N",
   "reasons": {
    "1": "liczba 2 też jest rozwiązaniem, bo 2² = 4",
    "2": "(−2)² = 4",
    "3": "równanie z x² nie ma rozwiązań ujemnych"
   },
   "okReason": "1",
   "sol": [
    "[[(−2)² = 4]] i [[2² = 4]]. Są dwa rozwiązania, więc −2 nie jest jedynym. Nie.",
    "Uzasadnienie 2 jest prawdziwe, ale nie odpowiada na pytanie o „jedyne”. Uzasadnienie 3 jest fałszywe."
   ],
   "answer": "N, uzasadnienie 1.",
   "tip": "Równanie z x² może mieć dwa rozwiązania.",
   "check": [
    "(-2)**2 == 4",
    "2**2 == 4"
   ],
   "twin": {
    "type": "tn",
    "q": "Czy liczba 1 jest rozwiązaniem równania x³ − x = 0? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "T",
    "reasons": {
     "1": "1³ − 1 = 1 − 1 = 0",
     "2": "1 jest najmniejszą dodatnią liczbą naturalną",
     "3": "x³ i x mają ten sam znak"
    },
    "okReason": "1",
    "sol": [
     "[[1³ − 1 = 0]]. Tak."
    ],
    "answer": "T, uzasadnienie 1.",
    "tip": "Wstaw i policz.",
    "check": [
     "1**3 - 1 == 0"
    ]
   },
   "twin2": {
    "type": "tn",
    "q": "Czy równanie 3(x − 2) = 3x − 6 jest spełnione przez każdą liczbę x? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "T",
    "reasons": {
     "1": "po wymnożeniu lewa strona to 3x − 6, czyli dokładnie prawa strona",
     "2": "dla x = 2 obie strony są równe 0",
     "3": "3 · 2 = 6"
    },
    "okReason": "1",
    "sol": [
     "[[3(x − 2) = 3x − 6]] dla każdego x. Tak.",
     "Uzasadnienie 2 to tylko jeden przykład."
    ],
    "answer": "T, uzasadnienie 1.",
    "tip": "Gdy obie strony po uproszczeniu są takie same, pasuje każda liczba.",
    "check": [
     "all(3*(x - 2) == 3*x - 6 for x in range(-10, 10))"
    ]
   }
  },
  {
   "id": "c10",
   "level": 3,
   "skills": [
    "R8",
    "R7"
   ],
   "type": "self",
   "q": "W sklepie były jabłka i gruszki, razem 240 kg. Jabłek było o 50% więcej niż gruszek. Sprzedano 20% jabłek. Ile kilogramów jabłek zostało? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Ułożyłeś równanie x + 1,5x = 240 (x – gruszki).",
     "pts": 1
    },
    {
     "t": "Obliczyłeś masę jabłek: 144 kg.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś, ile jabłek zostało: 0,8 · 144 = 115,2 kg.",
     "pts": 1
    }
   ],
   "sol": [
    "[[x + 1,5x = 240]], [[2,5x = 240]], [[x = 96]] kg gruszek.",
    "Jabłka: [[1,5 · 96 = 144]] kg.",
    "Zostało 80%: [[0,8 · 144 = 115,2]] kg."
   ],
   "answer": "115,2 kg jabłek.",
   "tip": "„O 50% więcej niż gruszek” – procent od gruszek.",
   "check": [
    "96 + F('1.5')*96 == 240",
    "F('0.8')*144 == F('115.2')"
   ]
  },
  {
   "id": "c11",
   "level": 3,
   "skills": [
    "R7",
    "R6"
   ],
   "type": "self",
   "q": "Ojciec i syn mają razem 50 lat. 5 lat temu ojciec był 4 razy starszy od syna. Ile lat ma teraz syn? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Zapisałeś wiek obu osób za pomocą jednej niewiadomej, np. syn s, ojciec 50 − s.",
     "pts": 1
    },
    {
     "t": "Ułożyłeś równanie dla sytuacji sprzed 5 lat: 45 − s = 4(s − 5).",
     "pts": 1
    },
    {
     "t": "Obliczyłeś wiek syna: 13 lat.",
     "pts": 1
    }
   ],
   "sol": [
    "Syn: s, ojciec: [[50 − s]]. 5 lat temu: [[s − 5]] i [[45 − s]].",
    "[[45 − s = 4(s − 5) = 4s − 20]], [[65 = 5s]], [[s = 13]].",
    "Sprawdzenie: teraz 13 i 37, 5 lat temu 8 i 32, a 32 = 4 · 8."
   ],
   "answer": "Syn ma 13 lat.",
   "tip": "5 lat temu obaj byli o 5 lat młodsi.",
   "check": [
    "(50 - 13) - 5 == 4*(13 - 5)"
   ]
  }
 ],
 "test": [
  {
   "id": "t1",
   "skills": [
    "R1"
   ],
   "type": "abcd",
   "q": "Która liczba jest rozwiązaniem równania 2x + 7 = 5x − 2?",
   "opts": [
    "−3",
    "5/3",
    "3",
    "9"
   ],
   "ok": 2,
   "why": {
    "A": "Dla x = −3: L = 1, a P = −17.",
    "B": "Dla x = 5/3: L = 31/3, a P = 19/3.",
    "D": "Dla x = 9: L = 25, a P = 43."
   },
   "sol": [
    "Dla x = 3: [[L = 13]], [[P = 13]]."
   ],
   "answer": "C, 3.",
   "tip": "Wstawiaj po kolei.",
   "check": [
    "2*3 + 7 == 5*3 - 2",
    "2*(-3) + 7 != 5*(-3) - 2",
    "2*F(5, 3) + 7 != 5*F(5, 3) - 2",
    "2*9 + 7 != 5*9 - 2"
   ],
   "pts": 1
  },
  {
   "id": "t2",
   "skills": [
    "R2"
   ],
   "type": "fields",
   "q": "Rozwiąż równanie (x − 5) : 4 = 3.",
   "fields": [
    {
     "label": "x",
     "ans": 17,
     "show": "17"
    }
   ],
   "sol": [
    "[[x − 5 = 12]], [[x = 17]]."
   ],
   "answer": "x = 17.",
   "tip": "Cofaj od końca.",
   "check": [
    "(17 - 5)/4 == 3"
   ],
   "pts": 1
  },
  {
   "id": "t3",
   "skills": [
    "R3"
   ],
   "type": "fields",
   "q": "Rozwiąż równanie 8x − 3 = 5x + 12.",
   "fields": [
    {
     "label": "x",
     "ans": 5,
     "show": "5"
    }
   ],
   "sol": [
    "[[3x = 15]], [[x = 5]]."
   ],
   "answer": "x = 5.",
   "tip": "Sprawdzenie: 37 = 37.",
   "check": [
    "8*5 - 3 == 5*5 + 12"
   ],
   "pts": 1
  },
  {
   "id": "t4",
   "skills": [
    "R4"
   ],
   "type": "abcd",
   "q": "Rozwiązaniem równania 4(x − 1) − 2(x + 3) = 0 jest liczba:",
   "opts": [
    "−1",
    "3,5",
    "5",
    "−5"
   ],
   "ok": 2,
   "why": {
    "A": "−2(x + 3) = −2x − 6, a nie −2x + 6.",
    "B": "4 mnoży też −1: 4(x − 1) = 4x − 4.",
    "D": "2x = 10, więc x = 5, liczba dodatnia."
   },
   "sol": [
    "[[4x − 4 − 2x − 6 = 0]], [[2x = 10]], [[x = 5]]."
   ],
   "answer": "C, 5.",
   "tip": "Liczba przed nawiasem mnoży każdy wyraz.",
   "check": [
    "4*(5 - 1) - 2*(5 + 3) == 0"
   ],
   "pts": 1
  },
  {
   "id": "t5",
   "skills": [
    "R4"
   ],
   "type": "fields",
   "q": "Rozwiąż równanie x/3 + x/6 = 5.",
   "fields": [
    {
     "label": "x",
     "ans": 10,
     "show": "10"
    }
   ],
   "sol": [
    "Mnożymy przez 6: [[2x + x = 30]], [[x = 10]]."
   ],
   "answer": "x = 10.",
   "tip": "Wspólny mianownik 6.",
   "check": [
    "F(10, 3) + F(10, 6) == 5"
   ],
   "pts": 1
  },
  {
   "id": "t6",
   "skills": [
    "R5"
   ],
   "type": "pair",
   "q": "Pole równoległoboku obliczamy ze wzoru P = a · h. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "Równoległobok o boku 8 cm i wysokości 5 cm opuszczonej na ten bok ma pole",
     "opts": {
      "A": "40 cm²",
      "B": "20 cm²"
     },
     "ok": "A"
    },
    {
     "label": "Równoległobok o polu 42 cm² i boku 6 cm ma wysokość opuszczoną na ten bok",
     "opts": {
      "C": "7 cm",
      "D": "36 cm"
     },
     "ok": "C"
    }
   ],
   "sol": [
    "[[8 · 5 = 40]] cm².",
    "[[h = 42 : 6 = 7]] cm."
   ],
   "answer": "A i C.",
   "tip": "W równoległoboku nie dzielisz przez 2.",
   "check": [
    "8*5 == 40",
    "42/6 == 7"
   ],
   "pts": 1
  },
  {
   "id": "t7",
   "skills": [
    "R5"
   ],
   "type": "fields",
   "q": "Samochód jedzie ze stałą prędkością 72 km/h. Ile minut zajmie mu przejechanie 18 km?",
   "fields": [
    {
     "label": "Czas (min)",
     "ans": 15,
     "show": "15"
    }
   ],
   "sol": [
    "[[t = 18 : 72 = 0,25]] h.",
    "[[0,25 h = 15]] min."
   ],
   "answer": "15 minut.",
   "tip": "Na koniec zamień godziny na minuty.",
   "check": [
    "F(18, 72)*60 == 15"
   ],
   "pts": 1
  },
  {
   "id": "t8",
   "skills": [
    "R6"
   ],
   "type": "abcd",
   "q": "Pan Adam jest 3 razy starszy od syna. Razem mają 48 lat. Syn ma x lat. Które równanie opisuje tę sytuację?",
   "opts": [
    "x + 3x = 48",
    "3x = 48",
    "x + 3 = 48",
    "x + x/3 = 48"
   ],
   "ok": 0,
   "why": {
    "B": "3x to tylko wiek taty. Razem mają x + 3x.",
    "C": "„3 razy starszy” to 3x, a nie x + 3.",
    "D": "Tata jest starszy, więc 3x, a nie x : 3."
   },
   "sol": [
    "Tata: [[3x]]. Razem: [[x + 3x = 48]]. Syn ma 12 lat."
   ],
   "answer": "A, x + 3x = 48.",
   "tip": "Sprawdzenie: 12 + 36 = 48.",
   "check": [
    "12 + 36 == 48"
   ],
   "pts": 1
  },
  {
   "id": "t9",
   "skills": [
    "R8"
   ],
   "type": "fields",
   "q": "Po obniżce o 25% gra kosztuje 90 zł. Ile kosztowała przed obniżką?",
   "fields": [
    {
     "label": "Cena (zł)",
     "ans": 120,
     "show": "120"
    }
   ],
   "sol": [
    "[[0,75x = 90]], [[x = 120]] zł."
   ],
   "answer": "120 zł.",
   "tip": "Cena przed zmianą: dzielisz.",
   "check": [
    "F('0.75')*120 == 90"
   ],
   "pts": 1
  },
  {
   "id": "t10",
   "skills": [
    "R8"
   ],
   "type": "tn",
   "q": "Cenę obniżono o 10%, a potem nową cenę obniżono jeszcze o 10%. Czy łącznie cena spadła o 20%? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "N",
   "reasons": {
    "1": "0,9 · 0,9 = 0,81, czyli cena spadła o 19%",
    "2": "10% + 10% = 20%",
    "3": "druga obniżka była liczona od wyższej ceny"
   },
   "okReason": "1",
   "sol": [
    "[[0,9 · 0,9 = 0,81]]. Cena spadła o 19%, a nie o 20%. Nie.",
    "Uzasadnienie 3 jest fałszywe: druga obniżka była liczona od niższej ceny."
   ],
   "answer": "N, uzasadnienie 1.",
   "tip": "Kolejne zmiany procentowe mnożysz.",
   "check": [
    "F('0.9')*F('0.9') == F('0.81')"
   ],
   "pts": 1
  },
  {
   "id": "t11",
   "skills": [
    "R7"
   ],
   "type": "self",
   "q": "Za 4 kg jabłek i 2 kg śliwek zapłacono 32 zł. Kilogram śliwek jest o 4 zł droższy od kilograma jabłek. Ile kosztuje kilogram jabłek? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Ułożyłeś poprawne równanie, np. 4x + 2(x + 4) = 32.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś cenę kilograma jabłek: 4 zł.",
     "pts": 1
    }
   ],
   "sol": [
    "[[4x + 2(x + 4) = 32]], [[6x + 8 = 32]], [[x = 4]] zł."
   ],
   "answer": "4 zł.",
   "tip": "Sprawdzenie: 16 + 16 = 32.",
   "check": [
    "4*4 + 2*(4 + 4) == 32"
   ],
   "pts": 2
  },
  {
   "id": "t12",
   "skills": [
    "R7",
    "R6"
   ],
   "type": "self",
   "q": "W pierwszej skrzynce jest 3 razy więcej jabłek niż w drugiej. Gdy z pierwszej skrzynki przełożono 15 jabłek do drugiej, w obu było tyle samo jabłek. Ile jabłek było na początku w każdej skrzynce? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Ułożyłeś poprawne równanie, np. 3x − 15 = x + 15.",
     "pts": 1
    },
    {
     "t": "Podałeś liczby jabłek w obu skrzynkach: 45 i 15.",
     "pts": 1
    }
   ],
   "sol": [
    "[[3x − 15 = x + 15]], [[2x = 30]], [[x = 15]].",
    "W pierwszej [[45]], w drugiej [[15]]. Sprawdzenie: 30 = 30."
   ],
   "answer": "45 i 15 jabłek.",
   "tip": "Odpowiedz o obie skrzynki.",
   "check": [
    "3*15 - 15 == 15 + 15"
   ],
   "pts": 2
  }
 ],
 "test_minutes": 35,
 "pass": 12,
 "dzial": "Dział 2: Algebra"
};
