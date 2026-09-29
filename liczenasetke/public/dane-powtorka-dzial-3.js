/* Wygenerowane przez zbuduj.py z tresc/powtorka-dzial-3.py. Nie edytuj ręcznie. */
window.TEMAT = {
 "slug": "powtorka-dzial-3",
 "title": "Powtórka: Dział 3",
 "sign": "Σ",
 "lead": "Zadania ze wszystkich tematów geometrii, wymieszane jak na egzaminie, także oba dowody z podstawy programowej. Na koniec sprawdzian całego działu: 15 zadań, 20 punktów, jak w arkuszu CKE.",
 "goals": {
  "learn": "Rozpoznawać, czy zadanie wymaga kątów, pola, twierdzenia Pitagorasa, współrzędnych czy wzoru na bryłę, łączyć tematy i zapisywać rozwiązania zadań otwartych tak, żeby dostać wszystkie punkty.",
  "prereq": "Wszystkie pięć tematów Działu 3.",
  "goal": "Minimum 17 z 20 punktów w sprawdzianie działu."
 },
 "skills": {
  "E1": "Kąty, trójkąty i czworokąty",
  "E2": "Pola, koło i okrąg",
  "E3": "Twierdzenie Pitagorasa",
  "E4": "Układ współrzędnych",
  "E5": "Graniastosłupy i ostrosłupy"
 },
 "lessons": [
  {
   "title": "Jak rozpoznać, czego użyć",
   "skills": [
    "E1",
    "E2",
    "E3",
    "E4",
    "E5"
   ],
   "intro": "Na egzaminie zadanie nie ma napisu „Pitagoras” ani „pole koła”. Słowa i rysunek podpowiadają jednak metodę. Najpierw zaznacz na rysunku wszystko, co wiesz, i poszukaj kątów prostych.",
   "rule": {
    "t": "Zanim zaczniesz liczyć, zapytaj: czego szukam, co wiem i jaki kształt widzę.",
    "f": [
     "kąt prosty i dwa boki → Pitagoras",
     "proste równoległe → kąty naprzemianległe i odpowiadające",
     "znane pole, szukany odcinek → wzór w drugą stronę",
     "litry → objętość w dm³",
     "współrzędne → kratki, środek, Pitagoras"
    ],
    "e": "Rysunek na egzaminie często nie jest w skali. Licz z danych, a nie z linijki."
   },
   "visual": {
    "type": "shape",
    "circlesFirst": true,
    "pts": {
     "A": [
      -2,
      -1
     ],
     "B": [
      0,
      -1
     ],
     "E": [
      2,
      -1
     ],
     "F": [
      2,
      1
     ],
     "C": [
      0,
      1
     ],
     "D": [
      -2,
      1
     ],
     "S": [
      0,
      0
     ]
    },
    "circles": [
     {
      "c": "S",
      "r": 2.236,
      "sh": true
     }
    ],
    "polys": [
     [
      "A",
      "E",
      "F",
      "D"
     ],
     [
      "B",
      "C"
     ]
    ],
    "segs": [
     [
      "A",
      "F"
     ]
    ],
    "alt": "Dwa kwadraty ABCD i BEFC tworzą prostokąt AEFD wpisany w koło o środku S. Zamalowana jest część koła poza prostokątem.",
    "caption": "AF jest średnicą: AF² = (2a)² + a² = 5a². Pole zamalowane = pole koła − pole prostokąta"
   },
   "example": {
    "q": "Kwadraty ABCD i BEFC, każdy o polu 20 cm², ułożono obok siebie tak, że odcinki AF i DE są średnicami okręgu. Oblicz pole części koła poza kwadratami. Przyjmij π ≈ 3,14. (Aneks do repetytorium na egzamin 2025.)",
    "steps": [
     "Bok kwadratu a: a² = 20. Trójkąt AEF jest prostokątny: AE = 2a, EF = a.",
     "Z twierdzenia Pitagorasa: AF² = (2a)² + a² = 5a² = 100, więc AF = 10 cm i r = 5 cm.",
     "Pole koła: 25π ≈ 78,5 cm². Kwadraty: 2 · 20 = 40 cm². Różnica: 25π − 40 ≈ 38,5 cm²."
    ],
    "result": "25π − 40 cm², czyli ok. 38,5 cm².",
    "tip": "Nie musisz liczyć boku a = √20. Wystarczy a², bo we wzorach i tak jest kwadrat.",
    "check": [
     "5*20 == 100",
     "25*F('3.14') - 40 == F('38.5')"
    ]
   },
   "you": [
    {
     "id": "y1",
     "type": "abcd",
     "q": "Trójkąt prostokątny ma przyprostokątne 5 cm i 12 cm. Pole koła, którego średnicą jest przeciwprostokątna tego trójkąta, jest równe:",
     "opts": [
      "42,25π cm²",
      "169π cm²",
      "13π cm²",
      "6,5π cm²"
     ],
     "ok": 0,
     "why": {
      "B": "13 to średnica. Do wzoru wstawiasz promień 6,5.",
      "C": "13π cm to długość okręgu, a nie pole koła.",
      "D": "Promień trzeba podnieść do kwadratu: 6,5² = 42,25."
     },
     "sol": [
      "Przeciwprostokątna: [[√(25 + 144) = 13]] cm, promień [[6,5]] cm.",
      "[[P = 6,5²π = 42,25π]] cm²."
     ],
     "answer": "A, 42,25π cm².",
     "tip": "Dwa tematy w jednym zadaniu: Pitagoras i koło.",
     "check": [
      "5**2 + 12**2 == 13**2",
      "F('6.5')**2 == F('42.25')"
     ]
    },
    {
     "id": "y1b",
     "type": "pf",
     "q": "Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "W trapezie ABCD (AB ∥ CD) kąty przy ramieniu AD dają razem 180°.",
       "ok": "P"
      },
      {
       "t": "Objętość ostrosłupa to pole podstawy razy wysokość.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> To kąty przy prostych równoległych. Prawda.",
      "<b>Zdanie 2.</b> Trzeba jeszcze podzielić przez 3. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "Powtórz wzory z podsumowania tematu.",
     "check": [
      "True"
     ]
    }
   ]
  },
  {
   "title": "Zadanie otwarte z geometrii na pełne punkty",
   "skills": [
    "E1",
    "E2",
    "E3",
    "E4",
    "E5"
   ],
   "intro": "Zadanie za 3 punkty z geometrii ma zwykle trzy etapy: brakujący odcinek (często z Pitagorasa), pole albo objętość i na końcu odpowiedź na pytanie z treści (koszt, liczba opakowań, litry). Za każdy etap jest punkt.",
   "rule": {
    "t": "Zrób rysunek z oznaczeniami, zapisz, z czego korzystasz („z twierdzenia Pitagorasa”), licz z jednostkami i odpowiedz na pytanie z treści.",
    "f": [
     "1. rysunek i dane",
     "2. brakujący odcinek",
     "3. pole lub objętość",
     "4. odpowiedź na pytanie (koszt, litry, sztuki)"
    ],
    "e": "Samo pole to nie jest odpowiedź, jeśli pytają o koszt ogrodzenia."
   },
   "visual": {
    "type": "shape",
    "pts": {
     "A": [
      0,
      0
     ],
     "B": [
      30,
      0
     ],
     "C": [
      18,
      16
     ],
     "D": [
      0,
      16
     ],
     "H": [
      18,
      0
     ]
    },
    "polys": [
     [
      "A",
      "B",
      "C",
      "D"
     ]
    ],
    "segs": [
     [
      "C",
      "H"
     ]
    ],
    "angles": [
     {
      "at": "A",
      "from": "B",
      "to": "D",
      "right": true
     },
     {
      "at": "H",
      "from": "B",
      "to": "C",
      "right": true
     }
    ],
    "hide": [
     "H"
    ],
    "sides": [
     [
      "A",
      "B",
      "30 m"
     ],
     [
      "D",
      "C",
      "18 m"
     ],
     [
      "B",
      "C",
      "20 m"
     ],
     [
      "C",
      "H",
      "h",
      1
     ]
    ],
    "alt": "Działka w kształcie trapezu prostokątnego: podstawy 30 m i 18 m, ukośne ramię 20 m.",
    "caption": "30 − 18 = 12, h² = 20² − 12² = 256, h = 16"
   },
   "example": {
    "q": "Działka ma kształt trapezu prostokątnego o podstawach 30 m i 18 m. Dłuższe ramię ma 20 m. Oblicz pole działki i koszt ogrodzenia jej siatką po 25 zł za metr.",
    "steps": [
     "Z twierdzenia Pitagorasa: 30 − 18 = 12 m, h² = 20² − 12² = 400 − 144 = 256, h = 16 m. (1 punkt)",
     "Pole: P = (30 + 18) · 16 : 2 = 384 m². (1 punkt)",
     "Obwód: 30 + 18 + 16 + 20 = 84 m. Koszt: 84 · 25 = 2 100 zł. (1 punkt)"
    ],
    "result": "Pole 384 m², koszt ogrodzenia 2 100 zł.",
    "tip": "Zadanie z trapezem i kosztem było na egzaminie w 2026 roku (zadanie 19).",
    "check": [
     "20**2 - 12**2 == 16**2",
     "(30 + 18)*16/2 == 384",
     "(30 + 18 + 16 + 20)*25 == 2100"
    ]
   },
   "you": [
    {
     "id": "y2",
     "type": "fields",
     "q": "Trapez prostokątny ma podstawy 11 cm i 5 cm, a dłuższe ramię 10 cm. Oblicz jego wysokość i pole.",
     "fields": [
      {
       "label": "h (cm)",
       "ans": 8,
       "show": "8",
       "why": [
        [
         6,
         "6 cm to różnica podstaw. Wysokość: √(100 − 36)."
        ]
       ]
      },
      {
       "label": "Pole (cm²)",
       "ans": 64,
       "show": "64",
       "why": [
        [
         128,
         "Zapomniano podzielić przez 2."
        ]
       ]
      }
     ],
     "sol": [
      "[[11 − 5 = 6]], [[h² = 100 − 36 = 64]], [[h = 8]] cm.",
      "[[P = 16 · 8 : 2 = 64]] cm²."
     ],
     "answer": "8 cm i 64 cm².",
     "tip": "Najpierw brakujący odcinek.",
     "check": [
      "10**2 - 6**2 == 8**2",
      "16*8/2 == 64"
     ]
    },
    {
     "id": "y2b",
     "type": "pf",
     "q": "Oceń prawdziwość zdań o zadaniach otwartych z geometrii.",
     "items": [
      {
       "t": "Punkt można dostać za poprawnie obliczoną wysokość, nawet jeśli dalej pojawi się błąd rachunkowy.",
       "ok": "P"
      },
      {
       "t": "Jeśli pytają o koszt ogrodzenia, wystarczy podać pole działki.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> Punkty są przyznawane za kolejne etapy. Prawda.",
      "<b>Zdanie 2.</b> Ogrodzenie to obwód, a odpowiedzią jest kwota w złotych. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "Zawsze wracaj do pytania z treści.",
     "check": [
      "True"
     ]
    }
   ]
  }
 ],
 "traps": [
  {
   "name": "Rysunek zamiast danych",
   "bad": "kąt wygląda na prosty, więc liczę z Pitagorasa",
   "good": "Pitagoras tylko wtedy, gdy kąt prosty wynika z treści"
  },
  {
   "name": "Średnica zamiast promienia",
   "bad": "d = 13: P = 169π",
   "good": "r = 6,5: P = 42,25π"
  },
  {
   "name": "Brak dzielenia przez 3",
   "bad": "ostrosłup: V = Pp · H",
   "good": "V = Pp · H : 3"
  }
 ],
 "cheat": {
  "title": "Cały Dział 3",
  "rules": [
   {
    "t": "Kąty.",
    "f": [
     "przyległe 180°",
     "trójkąt 180°",
     "czworokąt 360°",
     "przy równoległych: równe albo razem 180°"
    ],
    "e": "Nierówność trójkąta: dwa krótsze > najdłuższy."
   },
   {
    "t": "Pola.",
    "f": [
     "a · h : 2",
     "(a + b) · h : 2",
     "e · f : 2"
    ],
    "e": "1 ha = 10 000 m²."
   },
   {
    "t": "Koło.",
    "f": [
     "L = 2πr",
     "P = πr²"
    ],
    "e": "π ≈ 3,14."
   },
   {
    "t": "Pitagoras.",
    "f": [
     "a² + b² = c²",
     "d = a√2",
     "h = a√3/2"
    ],
    "e": "Tylko w trójkącie prostokątnym."
   },
   {
    "t": "Układ.",
    "f": [
     "środek: średnie",
     "B = 2S − A",
     "długość: Pitagoras"
    ],
    "e": "Najpierw x."
   },
   {
    "t": "Bryły.",
    "f": [
     "V = Pp · H",
     "ostrosłup: V = Pp · H : 3",
     "1 l = 1 dm³"
    ],
    "e": "Ostrosłup ma jedną podstawę."
   }
  ]
 },
 "memo": {
  "title": "Wzory z całego działu",
  "rows": [
   [
    "trójkąt",
    "trapez",
    "koło",
    "Pitagoras",
    "graniastosłup",
    "ostrosłup"
   ],
   [
    "a · h : 2",
    "(a + b) · h : 2",
    "πr², 2πr",
    "a² + b² = c²",
    "Pp · H",
    "Pp · H : 3"
   ]
  ],
  "note": "Na egzaminie przyjmuje się π ≈ 3,14, chyba że treść mówi inaczej. Wynik dokładny zapisujesz z π albo z pierwiastkiem."
 },
 "warmup": {
  "id": "w0",
  "type": "fields",
  "q": "Rozgrzewka: po jednym rachunku z każdego tematu.",
  "fields": [
   {
    "label": "180 − 48 − 67",
    "ans": 65,
    "show": "65"
   },
   {
    "label": "√(6² + 8²)",
    "ans": 10,
    "show": "10"
   },
   {
    "label": "36 · 8 : 3",
    "ans": 96,
    "show": "96"
   }
  ],
  "sol": [
   "<b>180 − 48 − 67</b> = [[65]].",
   "<b>√(36 + 64)</b> = √100 = [[10]].",
   "<b>36 · 8 : 3</b> = 12 · 8 = [[96]]."
  ],
  "answer": "65, 10 i 96.",
  "tip": "Jeśli coś nie wyszło, wróć do tematu, z którego jest ten rachunek.",
  "check": [
   "180 - 48 - 67 == 65",
   "6**2 + 8**2 == 10**2",
   "36*8/3 == 96"
  ]
 },
 "levels": [
  {
   "n": 1,
   "name": "Zamknięte",
   "desc": "Zadania ze wszystkich tematów działu, wymieszane jak na egzaminie. Najpierw rozpoznaj, jakiej metody użyć."
  },
  {
   "n": 2,
   "name": "Otwarte",
   "desc": "Zadania otwarte z różnych tematów, w tym dowody z podstawy programowej. Rozwiązuj na kartce, zapisuj etapy i oceniaj się według punktacji."
  }
 ],
 "practice": [
  {
   "id": "p1",
   "level": 1,
   "skills": [
    "E1"
   ],
   "type": "fields",
   "q": "W trójkącie równoramiennym kąt przy podstawie ma 72°. Oblicz kąt między ramionami.",
   "fields": [
    {
     "label": "Kąt (°)",
     "ans": 36,
     "show": "36",
     "why": [
      [
       108,
       "Kąty przy podstawie są dwa: 180° − 2 · 72°."
      ],
      [
       72,
       "72° mają kąty przy podstawie."
      ]
     ]
    }
   ],
   "sol": [
    "[[180° − 2 · 72° = 36°]]."
   ],
   "answer": "36°.",
   "tip": "Dwa kąty przy podstawie.",
   "check": [
    "180 - 2*72 == 36"
   ],
   "twin": {
    "type": "fields",
    "q": "W trójkącie równoramiennym kąt między ramionami ma 50°. Oblicz kąt przy podstawie.",
    "fields": [
     {
      "label": "Kąt (°)",
      "ans": 65,
      "show": "65",
      "why": [
       [
        130,
        "Podziel przez 2."
       ]
      ]
     }
    ],
    "sol": [
     "[[(180° − 50°) : 2 = 65°]]."
    ],
    "answer": "65°.",
    "tip": "Kąty przy podstawie są równe.",
    "check": [
     "(180 - 50)/2 == 65"
    ]
   }
  },
  {
   "id": "p2",
   "level": 1,
   "skills": [
    "E2"
   ],
   "type": "abcd",
   "q": "Okrąg ma długość 10π cm. Pole koła ograniczonego tym okręgiem jest równe:",
   "opts": [
    "100π cm²",
    "10π cm²",
    "25π cm²",
    "5π cm²"
   ],
   "ok": 2,
   "why": {
    "A": "10 to średnica. Promień to 5.",
    "B": "10π to długość okręgu.",
    "D": "Promień trzeba podnieść do kwadratu."
   },
   "sol": [
    "[[2πr = 10π]], [[r = 5]] cm, [[P = 25π]] cm²."
   ],
   "answer": "C, 25π cm².",
   "tip": "Najpierw promień.",
   "check": [
    "2*5 == 10",
    "5**2 == 25"
   ],
   "twin": {
    "type": "abcd",
    "q": "Koło ma pole 49π cm². Długość okręgu, który je ogranicza, jest równa:",
    "opts": [
     "14π cm",
     "7π cm",
     "49π cm",
     "98π cm"
    ],
    "ok": 0,
    "why": {
     "B": "7 to promień. L = 2πr.",
     "C": "49π to pole.",
     "D": "Wstawiono 49 zamiast promienia."
    },
    "sol": [
     "[[r = 7]], [[L = 14π]] cm."
    ],
    "answer": "A, 14π cm.",
    "tip": "r² = 49.",
    "check": [
     "7**2 == 49"
    ]
   }
  },
  {
   "id": "p3",
   "level": 1,
   "skills": [
    "E3"
   ],
   "type": "fields",
   "q": "Prostokąt ma boki 9 cm i 12 cm. Oblicz długość jego przekątnej.",
   "fields": [
    {
     "label": "d (cm)",
     "ans": 15,
     "show": "15",
     "why": [
      [
       21,
       "Dodano boki. d² = 81 + 144."
      ]
     ]
    }
   ],
   "sol": [
    "[[d = √(81 + 144) = 15]] cm."
   ],
   "answer": "15 cm.",
   "tip": "3, 4, 5 razy 3.",
   "check": [
    "9**2 + 12**2 == 15**2"
   ],
   "twin": {
    "type": "fields",
    "q": "Prostokąt ma boki 20 cm i 21 cm. Oblicz długość jego przekątnej.",
    "fields": [
     {
      "label": "d (cm)",
      "ans": 29,
      "show": "29",
      "why": [
       [
        41,
        "Dodano boki."
       ]
      ]
     }
    ],
    "sol": [
     "[[d = √(400 + 441) = 29]] cm."
    ],
    "answer": "29 cm.",
    "tip": "841 = 29².",
    "check": [
     "20**2 + 21**2 == 29**2"
    ]
   }
  },
  {
   "id": "p4",
   "level": 1,
   "skills": [
    "E4"
   ],
   "type": "fields",
   "q": "Oblicz współrzędne środka odcinka AB, gdzie A(−4, 7) i B(2, −1).",
   "fields": [
    {
     "label": "x",
     "ans": -1,
     "show": "−1",
     "why": [
      [
       3,
       "To połowa różnicy. Średnia: (−4 + 2) : 2."
      ]
     ]
    },
    {
     "label": "y",
     "ans": 3,
     "show": "3",
     "why": [
      [
       -4,
       "To połowa różnicy. Średnia: (7 − 1) : 2."
      ]
     ]
    }
   ],
   "sol": [
    "[[(−4 + 2) : 2 = −1]], [[(7 − 1) : 2 = 3]]. S(−1, 3)."
   ],
   "answer": "S(−1, 3).",
   "tip": "Średnie.",
   "check": [
    "(-4 + 2)/2 == -1",
    "(7 - 1)/2 == 3"
   ],
   "twin": {
    "type": "fields",
    "q": "Oblicz współrzędne środka odcinka AB, gdzie A(5, −2) i B(−3, 6).",
    "fields": [
     {
      "label": "x",
      "ans": 1,
      "show": "1"
     },
     {
      "label": "y",
      "ans": 2,
      "show": "2"
     }
    ],
    "sol": [
     "[[S(1, 2)]]."
    ],
    "answer": "S(1, 2).",
    "tip": "Średnie.",
    "check": [
     "(5 - 3)/2 == 1",
     "(-2 + 6)/2 == 2"
    ]
   }
  },
  {
   "id": "p5",
   "level": 1,
   "skills": [
    "E5"
   ],
   "type": "fields",
   "q": "Ile litrów wody zmieści się w prostopadłościennym zbiorniku o wymiarach 2 dm × 3 dm × 5 dm?",
   "fields": [
    {
     "label": "Litry",
     "ans": 30,
     "show": "30",
     "why": [
      [
       10,
       "Dodano wymiary. Objętość to iloczyn."
      ],
      [
       30000,
       "30 dm³ to 30 litrów, bo 1 l = 1 dm³."
      ]
     ]
    }
   ],
   "sol": [
    "[[V = 2 · 3 · 5 = 30]] dm³ [[= 30]] l."
   ],
   "answer": "30 l.",
   "tip": "1 dm³ = 1 l.",
   "check": [
    "2*3*5 == 30"
   ],
   "twin": {
    "type": "fields",
    "q": "Ile litrów wody zmieści się w prostopadłościennym zbiorniku o wymiarach 6 dm × 5 dm × 2 dm?",
    "fields": [
     {
      "label": "Litry",
      "ans": 60,
      "show": "60"
     }
    ],
    "sol": [
     "[[60]] dm³ = [[60]] l."
    ],
    "answer": "60 l.",
    "tip": "1 dm³ = 1 l.",
    "check": [
     "6*5*2 == 60"
    ]
   }
  },
  {
   "id": "p6",
   "level": 1,
   "skills": [
    "E1",
    "E2"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Suma kątów każdego czworokąta wynosi 360°.",
     "ok": "P"
    },
    {
     "t": "Romb o przekątnych 6 cm i 8 cm ma pole 48 cm².",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> Prawda.",
    "<b>Zdanie 2.</b> [[6 · 8 : 2 = 24]] cm². Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Romb: e · f : 2.",
   "check": [
    "6*8/2 == 24"
   ],
   "twin": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Kąt zewnętrzny trójkąta równobocznego ma 120°.",
      "ok": "P"
     },
     {
      "t": "Koło o promieniu 3 cm ma pole 6π cm².",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[180° − 60° = 120°]]. Prawda.",
     "<b>Zdanie 2.</b> [[π · 3² = 9π]] cm². Fałsz."
    ],
    "answer": "P, F.",
    "tip": "6π cm to długość okręgu.",
    "check": [
     "180 - 60 == 120"
    ]
   }
  },
  {
   "id": "p7",
   "level": 1,
   "skills": [
    "E3",
    "E4"
   ],
   "type": "fields",
   "q": "Oblicz długość odcinka AB, gdzie A(−1, −3) i B(5, 5).",
   "fields": [
    {
     "label": "|AB|",
     "ans": 10,
     "show": "10",
     "why": [
      [
       14,
       "Dodano przesunięcia 6 i 8."
      ]
     ]
    }
   ],
   "sol": [
    "Przesunięcia [[6]] i [[8]], [[|AB| = 10]]."
   ],
   "answer": "10.",
   "tip": "6, 8, 10.",
   "check": [
    "6**2 + 8**2 == 10**2"
   ],
   "twin": {
    "type": "fields",
    "q": "Oblicz długość odcinka AB, gdzie A(−3, 2) i B(2, 14).",
    "fields": [
     {
      "label": "|AB|",
      "ans": 13,
      "show": "13",
      "why": [
       [
        17,
        "Dodano przesunięcia."
       ]
      ]
     }
    ],
    "sol": [
     "Przesunięcia [[5]] i [[12]], [[|AB| = 13]]."
    ],
    "answer": "13.",
    "tip": "5, 12, 13.",
    "check": [
     "5**2 + 12**2 == 13**2"
    ]
   }
  },
  {
   "id": "p8",
   "level": 1,
   "skills": [
    "E5",
    "E3"
   ],
   "type": "fields",
   "q": "Ostrosłup prawidłowy czworokątny ma krawędź podstawy 10 cm, a wysokość jego ściany bocznej ma 13 cm. Oblicz wysokość i objętość ostrosłupa.",
   "fields": [
    {
     "label": "H (cm)",
     "ans": 12,
     "show": "12",
     "why": [
      [
       8,
       "Połowa krawędzi to 5, a nie 10: H² = 169 − 25."
      ]
     ]
    },
    {
     "label": "V (cm³)",
     "ans": 400,
     "show": "400",
     "why": [
      [
       1200,
       "Dzielisz przez 3."
      ]
     ]
    }
   ],
   "sol": [
    "[[H² = 13² − 5² = 144]], [[H = 12]] cm.",
    "[[V = 100 · 12 : 3 = 400]] cm³."
   ],
   "answer": "12 cm i 400 cm³.",
   "tip": "Trójkąt SOM.",
   "check": [
    "13**2 - 5**2 == 12**2",
    "100*12/3 == 400"
   ],
   "twin": {
    "type": "fields",
    "q": "Ostrosłup prawidłowy czworokątny ma krawędź podstawy 6 cm, a wysokość jego ściany bocznej ma 5 cm. Oblicz wysokość i objętość ostrosłupa.",
    "fields": [
     {
      "label": "H (cm)",
      "ans": 4,
      "show": "4"
     },
     {
      "label": "V (cm³)",
      "ans": 48,
      "show": "48",
      "why": [
       [
        144,
        "Dzielisz przez 3."
       ]
      ]
     }
    ],
    "sol": [
     "[[H = √(25 − 9) = 4]] cm.",
     "[[V = 36 · 4 : 3 = 48]] cm³."
    ],
    "answer": "4 cm i 48 cm³.",
    "tip": "3, 4, 5.",
    "check": [
     "5**2 - 3**2 == 4**2",
     "36*4/3 == 48"
    ]
   }
  },
  {
   "id": "p9",
   "level": 1,
   "skills": [
    "E2"
   ],
   "type": "fields",
   "q": "Ile arów ma prostokątna działka o wymiarach 40 m × 35 m?",
   "fields": [
    {
     "label": "Ary",
     "ans": 14,
     "show": "14",
     "why": [
      [
       1400,
       "1 400 to m². 1 a = 100 m²."
      ],
      [
       140,
       "1 a = 100 m², więc dzielisz przez 100."
      ]
     ]
    }
   ],
   "sol": [
    "[[40 · 35 = 1 400]] m² [[= 14]] a."
   ],
   "answer": "14 a.",
   "tip": "1 a = 100 m².",
   "check": [
    "40*35 == 1400"
   ],
   "twin": {
    "type": "fields",
    "q": "Ile hektarów ma prostokątne pole o wymiarach 80 m × 50 m?",
    "fields": [
     {
      "label": "Hektary",
      "ans": 0.4,
      "show": "0,4",
      "why": [
       [
        40,
        "40 to ary. 1 ha = 100 a."
       ]
      ]
     }
    ],
    "sol": [
     "[[4 000]] m² [[= 0,4]] ha."
    ],
    "answer": "0,4 ha.",
    "tip": "1 ha = 10 000 m².",
    "check": [
     "F(80*50, 10000) == F('0.4')"
    ]
   }
  },
  {
   "id": "p10",
   "level": 1,
   "skills": [
    "E1"
   ],
   "type": "abcd",
   "q": "Proste k i l są równoległe. Kąty naprzemianległe przy tych prostych mają miary 4x − 10° i 2x + 30°. Ile wynosi x?",
   "opts": [
    "10",
    "25",
    "70",
    "20"
   ],
   "ok": 3,
   "why": {
    "A": "Sprawdź: 4 · 10 − 10 = 30, a 2 · 10 + 30 = 50. Kąty naprzemianległe są równe.",
    "B": "Sprawdź: 90 i 80 to nie są równe kąty.",
    "C": "70° to miara kąta, a nie x."
   },
   "sol": [
    "[[4x − 10 = 2x + 30]], [[2x = 40]], [[x = 20]]. Kąty mają po 70°."
   ],
   "answer": "D, 20.",
   "tip": "Naprzemianległe: równe.",
   "check": [
    "4*20 - 10 == 2*20 + 30 == 70"
   ],
   "twin": {
    "type": "abcd",
    "q": "Proste k i l są równoległe. Kąty odpowiadające przy tych prostych mają miary 3x + 5° i 5x − 25°. Ile wynosi x?",
    "opts": [
     "5",
     "15",
     "50",
     "30"
    ],
    "ok": 1,
    "why": {
     "A": "Sprawdź: 20 i 0 to nie są równe kąty.",
     "C": "50° to miara kąta, a nie x.",
     "D": "Sprawdź: 95 i 125 to nie są równe kąty."
    },
    "sol": [
     "[[3x + 5 = 5x − 25]], [[x = 15]]. Kąty: [[50°]]."
    ],
    "answer": "B, 15.",
    "tip": "Odpowiadające: równe.",
    "check": [
     "3*15 + 5 == 5*15 - 25 == 50"
    ]
   }
  },
  {
   "id": "p11",
   "level": 1,
   "skills": [
    "E4",
    "E2"
   ],
   "type": "fields",
   "q": "Oblicz pole trapezu ABCD o wierzchołkach A(−3, 0), B(5, 0), C(3, 4) i D(−1, 4).",
   "vis": {
    "type": "shape",
    "axes": true,
    "grid": true,
    "pts": {
     "A": [
      -3,
      0
     ],
     "B": [
      5,
      0
     ],
     "C": [
      3,
      4
     ],
     "D": [
      -1,
      4
     ]
    },
    "polys": [
     [
      "A",
      "B",
      "C",
      "D"
     ]
    ],
    "shade": [
     0
    ],
    "alt": "Trapez ABCD w układzie współrzędnych z podstawą AB na osi x."
   },
   "fields": [
    {
     "label": "Pole",
     "ans": 24,
     "show": "24",
     "why": [
      [
       48,
       "Zapomniano podzielić przez 2."
      ],
      [
       32,
       "Podstawa DC ma 3 − (−1) = 4, a nie 8."
      ]
     ]
    }
   ],
   "sol": [
    "[[AB = 8]], [[DC = 4]], [[h = 4]].",
    "[[P = (8 + 4) · 4 : 2 = 24]]."
   ],
   "answer": "24.",
   "tip": "Długości z kratek.",
   "check": [
    "(8 + 4)*4/2 == 24"
   ],
   "twin": {
    "type": "fields",
    "q": "Oblicz pole trapezu ABCD o wierzchołkach A(−4, −1), B(4, −1), C(1, 3) i D(−1, 3).",
    "fields": [
     {
      "label": "Pole",
      "ans": 20,
      "show": "20",
      "why": [
       [
        40,
        "Podziel przez 2."
       ]
      ]
     }
    ],
    "sol": [
     "[[AB = 8]], [[DC = 2]], [[h = 4]], [[P = 20]]."
    ],
    "answer": "20.",
    "tip": "h = 3 − (−1).",
    "check": [
     "(8 + 2)*4/2 == 20"
    ]
   }
  },
  {
   "id": "p12",
   "level": 1,
   "skills": [
    "E5"
   ],
   "type": "abcd",
   "q": "Graniastosłup ma 18 krawędzi. Ile ma ścian?",
   "opts": [
    "6",
    "8",
    "18",
    "12"
   ],
   "ok": 1,
   "why": {
    "A": "To liczba ścian bocznych. Dolicz dwie podstawy.",
    "C": "To liczba krawędzi.",
    "D": "To liczba wierzchołków."
   },
   "sol": [
    "[[3n = 18]], [[n = 6]], ścian: [[6 + 2 = 8]]."
   ],
   "answer": "B, 8.",
   "tip": "3n krawędzi.",
   "check": [
    "3*6 == 18"
   ],
   "twin": {
    "type": "abcd",
    "q": "Ostrosłup ma 18 krawędzi. Ile ma ścian?",
    "opts": [
     "9",
     "18",
     "11",
     "10"
    ],
    "ok": 3,
    "why": {
     "A": "To liczba ścian bocznych. Dolicz podstawę.",
     "B": "To liczba krawędzi.",
     "C": "Ostrosłup ma jedną podstawę: 9 + 1."
    },
    "sol": [
     "[[2n = 18]], [[n = 9]], ścian: [[10]]."
    ],
    "answer": "D, 10.",
    "tip": "2n krawędzi.",
    "check": [
     "2*9 == 18"
    ]
   }
  },
  {
   "id": "q1",
   "level": 2,
   "skills": [
    "E3",
    "E2"
   ],
   "type": "self",
   "q": "Kwadraty ABCD i BEFC, każdy o polu 45 cm², ułożono obok siebie tak, że odcinki AF i DE są średnicami okręgu o środku S. Oblicz przybliżone pole części koła poza kwadratami. Przyjmij π ≈ 3,14. Zapisz obliczenia.",
   "vis": {
    "type": "shape",
    "circlesFirst": true,
    "pts": {
     "A": [
      -2,
      -1
     ],
     "B": [
      0,
      -1
     ],
     "E": [
      2,
      -1
     ],
     "F": [
      2,
      1
     ],
     "C": [
      0,
      1
     ],
     "D": [
      -2,
      1
     ],
     "S": [
      0,
      0
     ]
    },
    "circles": [
     {
      "c": "S",
      "r": 2.236,
      "sh": true
     }
    ],
    "polys": [
     [
      "A",
      "E",
      "F",
      "D"
     ],
     [
      "B",
      "C"
     ]
    ],
    "segs": [
     [
      "A",
      "F"
     ]
    ],
    "alt": "Dwa kwadraty ABCD i BEFC tworzą prostokąt AEFD wpisany w koło o środku S. Zamalowana jest część koła poza prostokątem."
   },
   "criteria": [
    {
     "t": "Zapisano twierdzenie Pitagorasa dla trójkąta AEF: AF² = (2a)² + a² = 5a² = 225.",
     "pts": 1
    },
    {
     "t": "Obliczono promień: AF = 15 cm, r = 7,5 cm (albo r² = 56,25).",
     "pts": 1
    },
    {
     "t": "Obliczono pole: 56,25π − 90 ≈ 86,6 cm².",
     "pts": 1
    }
   ],
   "sol": [
    "[[a² = 45]], [[AF² = 4a² + a² = 5 · 45 = 225]], [[AF = 15]] cm, [[r = 7,5]] cm.",
    "Koło: [[56,25π ≈ 176,6]] cm², kwadraty: [[90]] cm².",
    "[[176,6 − 90 ≈ 86,6]] cm²."
   ],
   "answer": "Ok. 86,6 cm².",
   "tip": "Tak wygląda przykład z aneksu do repetytorium na egzamin 2025.",
   "check": [
    "5*45 == 225 == 15**2",
    "F('56.25')*F('3.14') - 90 == F('86.625')"
   ],
   "twin": {
    "type": "self",
    "q": "Kwadraty ABCD i BEFC, każdy o polu 80 cm², ułożono obok siebie tak, że AF i DE są średnicami okręgu. Oblicz przybliżone pole części koła poza kwadratami. Przyjmij π ≈ 3,14. Zapisz obliczenia.",
    "criteria": [
     {
      "t": "AF² = 5 · 80 = 400.",
      "pts": 1
     },
     {
      "t": "AF = 20 cm, r = 10 cm.",
      "pts": 1
     },
     {
      "t": "Pole: 100π − 160 ≈ 154 cm².",
      "pts": 1
     }
    ],
    "sol": [
     "[[AF = 20]], [[r = 10]].",
     "[[100π − 160 ≈ 314 − 160 = 154]] cm²."
    ],
    "answer": "Ok. 154 cm².",
    "tip": "Wystarczy a².",
    "check": [
     "5*80 == 400 == 20**2",
     "100*F('3.14') - 160 == 154"
    ]
   }
  },
  {
   "id": "q2",
   "level": 2,
   "skills": [
    "E1"
   ],
   "type": "self",
   "q": "Dany jest ostrokątny trójkąt równoramienny ABC, w którym AC = BC. W tym trójkącie poprowadzono wysokość AD. Udowodnij, że kąt ACB jest dwa razy większy od kąta BAD. (Przykład z podstawy programowej.)",
   "criteria": [
    {
     "t": "Oznaczono kąt ACB jako γ i wyrażono kąt przy podstawie: ABC = (180° − γ) : 2 = 90° − γ/2.",
     "pts": 1
    },
    {
     "t": "Z trójkąta prostokątnego ABD wyznaczono BAD = 90° − (90° − γ/2) = γ/2 i zapisano wniosek: ACB = 2 · BAD.",
     "pts": 1
    }
   ],
   "sol": [
    "Niech [[ACB = γ]]. Trójkąt jest równoramienny (AC = BC), więc [[CAB = ABC = (180° − γ) : 2 = 90° − γ/2]].",
    "Trójkąt ABD ma kąt prosty przy D, więc [[BAD = 90° − ABD = 90° − (90° − γ/2) = γ/2]].",
    "Zatem [[ACB = γ = 2 · BAD]]."
   ],
   "answer": "Kąt ACB = γ, kąt BAD = γ/2, więc ACB jest dwa razy większy.",
   "tip": "W dowodzie z kątami oznacz jeden kąt literą i wyrażaj przez nią pozostałe.",
   "check": [
    "True"
   ],
   "twin": {
    "type": "self",
    "q": "Na bokach BC i CD prostokąta ABCD zbudowano, na zewnątrz prostokąta, trójkąty równoboczne BCE i CDF. Udowodnij, że AE = AF. (Przykład z podstawy programowej.)",
    "criteria": [
     {
      "t": "Zapisano równości boków: AB = CD = DF oraz BE = BC = AD.",
      "pts": 1
     },
     {
      "t": "Zapisano, że kąty ABE i FDA mają po 90° + 60° = 150°, i wyciągnięto wniosek z cechy bkb: trójkąty ABE i FDA są przystające, więc AE = AF.",
      "pts": 1
     }
    ],
    "sol": [
     "[[AB = CD = DF]] (bok prostokąta i bok trójkąta równobocznego), [[BE = BC = AD]].",
     "[[ABE = 90° + 60° = 150°]] i [[FDA = 90° + 60° = 150°]].",
     "Cecha [[bkb]]: trójkąty ABE i FDA są przystające, więc [[AE = AF]]."
    ],
    "answer": "Trójkąty ABE i FDA są przystające (bkb), więc AE = AF.",
    "tip": "Szukaj dwóch trójkątów, w których leżą odcinki AE i AF.",
    "check": [
     "90 + 60 == 150"
    ]
   }
  },
  {
   "id": "q3",
   "level": 2,
   "skills": [
    "E5",
    "E3"
   ],
   "type": "self",
   "q": "Sześcian ma krawędź 6 cm. Ostrosłup ma podstawę taką jak dolna ściana sześcianu, a wierzchołek w środku górnej ściany. Oblicz objętość części sześcianu poza ostrosłupem i pole powierzchni bocznej ostrosłupa. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono objętość ostrosłupa: 36 · 6 : 3 = 72 cm³.",
     "pts": 1
    },
    {
     "t": "Obliczono objętość części poza ostrosłupem: 216 − 72 = 144 cm³.",
     "pts": 1
    },
    {
     "t": "Obliczono wysokość ściany: √(36 + 9) = 3√5 cm i pole boczne: 4 · 6 · 3√5 : 2 = 36√5 cm².",
     "pts": 1
    }
   ],
   "sol": [
    "[[V_ostr = 36 · 6 : 3 = 72]] cm³, [[216 − 72 = 144]] cm³.",
    "Wysokość ściany: [[√(6² + 3²) = √45 = 3√5]] cm.",
    "[[Pb = 4 · 6 · 3√5 : 2 = 36√5]] cm²."
   ],
   "answer": "144 cm³ i 36√5 cm².",
   "tip": "Ostrosłup w sześcianie był w zadaniu za 3 punkty na egzaminie w 2026 roku.",
   "check": [
    "216 - 72 == 144",
    "36 + 9 == 45 == 9*5",
    "4*6*3/2 == 36"
   ],
   "twin": {
    "type": "self",
    "q": "Sześcian ma krawędź 4 cm. Ostrosłup ma podstawę taką jak dolna ściana sześcianu, a wierzchołek w środku górnej ściany. Oblicz objętość części sześcianu poza ostrosłupem i pole powierzchni bocznej ostrosłupa. Zapisz obliczenia.",
    "criteria": [
     {
      "t": "V ostrosłupa: 64/3 cm³.",
      "pts": 1
     },
     {
      "t": "Poza ostrosłupem: 128/3 = 42 2/3 cm³.",
      "pts": 1
     },
     {
      "t": "Pole boczne: 16√5 cm² (wysokość ściany 2√5).",
      "pts": 1
     }
    ],
    "sol": [
     "[[V_ostr = 16 · 4 : 3 = 64/3]] cm³, [[64 − 64/3 = 128/3]] cm³.",
     "Wysokość ściany: [[√20 = 2√5]], [[Pb = 4 · 4 · 2√5 : 2 = 16√5]] cm²."
    ],
    "answer": "128/3 cm³ i 16√5 cm².",
    "tip": "Część poza ostrosłupem to 2/3 sześcianu.",
    "check": [
     "64 - F(64, 3) == F(128, 3)",
     "16 + 4 == 20 == 4*5"
    ]
   }
  },
  {
   "id": "q4",
   "level": 2,
   "skills": [
    "E4",
    "E2"
   ],
   "type": "self",
   "q": "Punkty A(−3, −2), B(3, −2) i C(5, 2) są wierzchołkami równoległoboku ABCD. Oblicz współrzędne punktu D i pole równoległoboku. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono D(−1, 2): przesunięcie z B do C (2, 4) dodano do A.",
     "pts": 1
    },
    {
     "t": "Obliczono pole: podstawa 6, wysokość 4, P = 24.",
     "pts": 1
    }
   ],
   "sol": [
    "Z B do C: [[(2, 4)]]. [[D = (−3 + 2, −2 + 4) = (−1, 2)]].",
    "[[AB = 6]], wysokość [[2 − (−2) = 4]], [[P = 24]]."
   ],
   "answer": "D(−1, 2), pole 24.",
   "tip": "Równoległobok w układzie był na egzaminie w 2025 roku.",
   "check": [
    "-3 + 2 == -1",
    "6*4 == 24"
   ],
   "twin": {
    "type": "self",
    "q": "Punkty A(−2, −1), B(2, −1) i C(3, 3) są wierzchołkami równoległoboku ABCD. Oblicz współrzędne punktu D i pole równoległoboku. Zapisz obliczenia.",
    "criteria": [
     {
      "t": "D(−1, 3).",
      "pts": 1
     },
     {
      "t": "Pole 16.",
      "pts": 1
     }
    ],
    "sol": [
     "[[D(−1, 3)]].",
     "[[P = 4 · 4 = 16]]."
    ],
    "answer": "D(−1, 3), pole 16.",
    "tip": "Z A do D jak z B do C.",
    "check": [
     "-2 + 1 == -1",
     "4*4 == 16"
    ]
   }
  },
  {
   "id": "q5",
   "level": 2,
   "skills": [
    "E2",
    "E3"
   ],
   "type": "self",
   "q": "Działka ma kształt trapezu prostokątnego o podstawach 40 m i 25 m. Dłuższe ramię ma 17 m. Oblicz pole działki i koszt ogrodzenia jej siatką po 30 zł za metr. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono wysokość z twierdzenia Pitagorasa: 40 − 25 = 15, h = √(289 − 225) = 8 m.",
     "pts": 1
    },
    {
     "t": "Obliczono pole: (40 + 25) · 8 : 2 = 260 m².",
     "pts": 1
    },
    {
     "t": "Obliczono koszt: obwód 90 m, 90 · 30 = 2 700 zł.",
     "pts": 1
    }
   ],
   "sol": [
    "[[h = √(17² − 15²) = 8]] m.",
    "[[P = 65 · 8 : 2 = 260]] m².",
    "Obwód: [[40 + 25 + 8 + 17 = 90]] m, koszt [[2 700]] zł."
   ],
   "answer": "260 m², 2 700 zł.",
   "tip": "8, 15, 17.",
   "check": [
    "17**2 - 15**2 == 8**2",
    "65*8/2 == 260",
    "90*30 == 2700"
   ],
   "twin": {
    "type": "self",
    "q": "Działka ma kształt trapezu prostokątnego o podstawach 21 m i 9 m. Dłuższe ramię ma 13 m. Oblicz pole działki i koszt ogrodzenia siatką po 20 zł za metr. Zapisz obliczenia.",
    "criteria": [
     {
      "t": "h = 5 m.",
      "pts": 1
     },
     {
      "t": "Pole 75 m².",
      "pts": 1
     },
     {
      "t": "Obwód 48 m, koszt 960 zł.",
      "pts": 1
     }
    ],
    "sol": [
     "[[21 − 9 = 12]], [[h = 5]] m.",
     "[[P = 30 · 5 : 2 = 75]] m².",
     "Obwód [[48]] m, koszt [[960]] zł."
    ],
    "answer": "75 m², 960 zł.",
    "tip": "5, 12, 13.",
    "check": [
     "13**2 - 12**2 == 5**2",
     "30*5/2 == 75",
     "48*20 == 960"
    ]
   }
  },
  {
   "id": "q6",
   "level": 2,
   "skills": [
    "E5",
    "E2"
   ],
   "type": "self",
   "q": "Do naczynia w kształcie prostopadłościanu o podstawie 20 cm × 15 cm nalano 4,5 litra wody. Do jakiej wysokości sięga woda? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Zamieniono litry: 4,5 l = 4 500 cm³ i obliczono pole podstawy 300 cm².",
     "pts": 1
    },
    {
     "t": "Obliczono wysokość: 4 500 : 300 = 15 cm.",
     "pts": 1
    }
   ],
   "sol": [
    "[[4,5 l = 4 500 cm³]], [[Pp = 300]] cm².",
    "[[h = 4 500 : 300 = 15]] cm."
   ],
   "answer": "15 cm.",
   "tip": "h = V : Pp.",
   "check": [
    "F('4.5')*1000 == 4500",
    "4500/300 == 15"
   ],
   "twin": {
    "type": "self",
    "q": "Do naczynia w kształcie prostopadłościanu o podstawie 25 cm × 12 cm nalano 2,4 litra wody. Do jakiej wysokości sięga woda? Zapisz obliczenia.",
    "criteria": [
     {
      "t": "2 400 cm³ i pole podstawy 300 cm².",
      "pts": 1
     },
     {
      "t": "Wysokość 8 cm.",
      "pts": 1
     }
    ],
    "sol": [
     "[[2 400 : 300 = 8]] cm."
    ],
    "answer": "8 cm.",
    "tip": "1 l = 1 000 cm³.",
    "check": [
     "2400/300 == 8"
    ]
   }
  }
 ],
 "test": [
  {
   "id": "t1",
   "skills": [
    "E1"
   ],
   "type": "fields",
   "q": "W trójkącie ABC kąt A ma 48°, a kąt zewnętrzny przy wierzchołku B ma 115°. Oblicz kąt C.",
   "fields": [
    {
     "label": "Kąt C (°)",
     "ans": 67,
     "show": "67"
    }
   ],
   "sol": [
    "[[B = 65°]], [[C = 180° − 48° − 65° = 67°]]."
   ],
   "answer": "67°.",
   "tip": "Albo 115° − 48°.",
   "check": [
    "115 - 48 == 67"
   ],
   "pts": 1
  },
  {
   "id": "t2",
   "skills": [
    "E1"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Z odcinków 4 cm, 5 cm i 10 cm można zbudować trójkąt.",
     "ok": "F"
    },
    {
     "t": "Kąty wierzchołkowe są równe.",
     "ok": "P"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[4 + 5 = 9 < 10]]. Fałsz.",
    "<b>Zdanie 2.</b> Prawda."
   ],
   "answer": "F, P.",
   "tip": "Nierówność trójkąta.",
   "check": [
    "4 + 5 < 10"
   ],
   "pts": 1
  },
  {
   "id": "t3",
   "skills": [
    "E2"
   ],
   "type": "fields",
   "q": "Trapez ma podstawy 12 cm i 8 cm oraz wysokość 5 cm. Oblicz jego pole.",
   "fields": [
    {
     "label": "Pole (cm²)",
     "ans": 50,
     "show": "50"
    }
   ],
   "sol": [
    "[[(12 + 8) · 5 : 2 = 50]] cm²."
   ],
   "answer": "50 cm².",
   "tip": "(a + b) · h : 2.",
   "check": [
    "20*5/2 == 50"
   ],
   "pts": 1
  },
  {
   "id": "t4",
   "skills": [
    "E2"
   ],
   "type": "abcd",
   "q": "Okrąg ma długość 16π cm. Pole koła ograniczonego tym okręgiem jest równe:",
   "opts": [
    "64π cm²",
    "256π cm²",
    "16π cm²",
    "8π cm²"
   ],
   "ok": 0,
   "why": {
    "B": "16 to średnica. r = 8.",
    "C": "16π to długość okręgu.",
    "D": "Promień do kwadratu: 64."
   },
   "sol": [
    "[[r = 8]], [[P = 64π]] cm²."
   ],
   "answer": "A, 64π cm².",
   "tip": "Najpierw promień.",
   "check": [
    "8**2 == 64"
   ],
   "pts": 1
  },
  {
   "id": "t5",
   "skills": [
    "E2"
   ],
   "type": "fields",
   "q": "Oblicz pole koła o średnicy 12 cm. Przyjmij π ≈ 3,14.",
   "fields": [
    {
     "label": "P ≈ (cm²)",
     "ans": 113.04,
     "show": "113,04"
    }
   ],
   "sol": [
    "[[r = 6]], [[P = 36π ≈ 113,04]] cm²."
   ],
   "answer": "Ok. 113,04 cm².",
   "tip": "r = d : 2.",
   "check": [
    "36*F('3.14') == F('113.04')"
   ],
   "pts": 1
  },
  {
   "id": "t6",
   "skills": [
    "E3"
   ],
   "type": "fields",
   "q": "Przeciwprostokątna trójkąta prostokątnego ma 17 cm, a jedna przyprostokątna 15 cm. Oblicz drugą przyprostokątną.",
   "fields": [
    {
     "label": "b (cm)",
     "ans": 8,
     "show": "8"
    }
   ],
   "sol": [
    "[[√(289 − 225) = 8]] cm."
   ],
   "answer": "8 cm.",
   "tip": "8, 15, 17.",
   "check": [
    "17**2 - 15**2 == 8**2"
   ],
   "pts": 1
  },
  {
   "id": "t7",
   "skills": [
    "E3"
   ],
   "type": "abcd",
   "q": "Wysokość trójkąta równobocznego o boku 6 cm ma długość:",
   "opts": [
    "6√3 cm",
    "3 cm",
    "3√3 cm",
    "9√3 cm"
   ],
   "ok": 2,
   "why": {
    "A": "Podziel przez 2.",
    "B": "To połowa boku.",
    "D": "9√3 cm² to pole."
   },
   "sol": [
    "[[h = √(36 − 9) = 3√3]] cm."
   ],
   "answer": "C, 3√3 cm.",
   "tip": "a√3/2.",
   "check": [
    "36 - 9 == 27 == 9*3"
   ],
   "pts": 1
  },
  {
   "id": "t8",
   "skills": [
    "E4"
   ],
   "type": "fields",
   "q": "Oblicz współrzędne środka odcinka AB, gdzie A(−5, 4) i B(3, −2).",
   "fields": [
    {
     "label": "x",
     "ans": -1,
     "show": "−1"
    },
    {
     "label": "y",
     "ans": 1,
     "show": "1"
    }
   ],
   "sol": [
    "[[S(−1, 1)]]."
   ],
   "answer": "S(−1, 1).",
   "tip": "Średnie.",
   "check": [
    "(-5 + 3)/2 == -1",
    "(4 - 2)/2 == 1"
   ],
   "pts": 1
  },
  {
   "id": "t9",
   "skills": [
    "E4",
    "E3"
   ],
   "type": "fields",
   "q": "Oblicz długość odcinka AB, gdzie A(−2, 1) i B(4, 9).",
   "fields": [
    {
     "label": "|AB|",
     "ans": 10,
     "show": "10"
    }
   ],
   "sol": [
    "Przesunięcia [[6]] i [[8]], [[|AB| = 10]]."
   ],
   "answer": "10.",
   "tip": "Pitagoras.",
   "check": [
    "6**2 + 8**2 == 10**2"
   ],
   "pts": 1
  },
  {
   "id": "t10",
   "skills": [
    "E5"
   ],
   "type": "abcd",
   "q": "2,4 m³ to:",
   "opts": [
    "240 l",
    "24 000 l",
    "2 400 l",
    "24 l"
   ],
   "ok": 2,
   "why": {
    "A": "1 m³ = 1 000 l.",
    "B": "O jedno zero za dużo.",
    "D": "Mnożysz przez 1 000."
   },
   "sol": [
    "[[2 400]] l."
   ],
   "answer": "C, 2 400 l.",
   "tip": "1 m³ = 1 000 l.",
   "check": [
    "F('2.4')*1000 == 2400"
   ],
   "pts": 1
  },
  {
   "id": "t11",
   "skills": [
    "E5",
    "E2"
   ],
   "type": "fields",
   "q": "Podstawą graniastosłupa prostego jest romb o przekątnych 6 cm i 8 cm. Wysokość graniastosłupa to 10 cm. Oblicz jego objętość.",
   "fields": [
    {
     "label": "V (cm³)",
     "ans": 240,
     "show": "240"
    }
   ],
   "sol": [
    "[[Pp = 24]] cm², [[V = 240]] cm³."
   ],
   "answer": "240 cm³.",
   "tip": "Pp · H.",
   "check": [
    "6*8/2*10 == 240"
   ],
   "pts": 1
  },
  {
   "id": "t12",
   "skills": [
    "E5"
   ],
   "type": "tn",
   "q": "Czy do sześciennego pojemnika o krawędzi 2 dm zmieści się 10 litrów wody? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "N",
   "reasons": {
    "1": "jego objętość to 8 dm³, czyli 8 l",
    "2": "jego objętość to 6 dm³",
    "3": "litrów nie można porównywać z decymetrami"
   },
   "okReason": "1",
   "sol": [
    "[[2³ = 8]] dm³ = 8 l < 10 l."
   ],
   "answer": "N, uzasadnienie 1.",
   "tip": "1 dm³ = 1 l.",
   "check": [
    "2**3 == 8"
   ],
   "pts": 1
  },
  {
   "id": "t13",
   "skills": [
    "E2",
    "E3"
   ],
   "type": "self",
   "q": "Działka ma kształt trapezu prostokątnego o podstawach 24 m i 16 m. Dłuższe ramię ma 10 m. Oblicz pole działki i koszt ogrodzenia jej siatką po 15 zł za metr. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono wysokość: 24 − 16 = 8, h = √(100 − 64) = 6 m.",
     "pts": 1
    },
    {
     "t": "Obliczono pole: (24 + 16) · 6 : 2 = 120 m².",
     "pts": 1
    },
    {
     "t": "Obliczono koszt: obwód 56 m, 56 · 15 = 840 zł.",
     "pts": 1
    }
   ],
   "sol": [
    "[[h = 6]] m.",
    "[[P = 120]] m².",
    "Obwód [[24 + 16 + 6 + 10 = 56]] m, koszt [[840]] zł."
   ],
   "answer": "120 m², 840 zł.",
   "tip": "6, 8, 10.",
   "check": [
    "10**2 - 8**2 == 6**2",
    "40*6/2 == 120",
    "56*15 == 840"
   ],
   "pts": 3
  },
  {
   "id": "t14",
   "skills": [
    "E5",
    "E3"
   ],
   "type": "self",
   "q": "Ostrosłup prawidłowy czworokątny ma krawędź podstawy 12 cm, a wysokość jego ściany bocznej ma 10 cm. Oblicz objętość i pole powierzchni całkowitej ostrosłupa. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono wysokość ostrosłupa: √(100 − 36) = 8 cm.",
     "pts": 1
    },
    {
     "t": "Obliczono objętość: 144 · 8 : 3 = 384 cm³.",
     "pts": 1
    },
    {
     "t": "Obliczono pole: 144 + 4 · 12 · 10 : 2 = 384 cm².",
     "pts": 1
    }
   ],
   "sol": [
    "[[H = √(10² − 6²) = 8]] cm.",
    "[[V = 144 · 8 : 3 = 384]] cm³.",
    "[[Pc = 144 + 240 = 384]] cm²."
   ],
   "answer": "384 cm³ i 384 cm².",
   "tip": "Połowa krawędzi: 6.",
   "check": [
    "10**2 - 6**2 == 8**2",
    "144*8/3 == 384",
    "144 + 4*12*10/2 == 384"
   ],
   "pts": 3
  },
  {
   "id": "t15",
   "skills": [
    "E4",
    "E3"
   ],
   "type": "self",
   "q": "Punkt S(2, −2) jest środkiem odcinka AB, a A(−1, 2). Oblicz współrzędne punktu B i długość odcinka AB. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono B(5, −6).",
     "pts": 1
    },
    {
     "t": "Obliczono |AB| = √(36 + 64) = 10.",
     "pts": 1
    }
   ],
   "sol": [
    "[[B = (4 + 1, −4 − 2) = (5, −6)]].",
    "[[|AB| = 10]]."
   ],
   "answer": "B(5, −6), |AB| = 10.",
   "tip": "B = 2S − A.",
   "check": [
    "2*2 + 1 == 5",
    "2*(-2) - 2 == -6",
    "6**2 + 8**2 == 10**2"
   ],
   "pts": 2
  }
 ],
 "test_minutes": 60,
 "pass": 17,
 "dzial": "Dział 3: Geometria"
};
