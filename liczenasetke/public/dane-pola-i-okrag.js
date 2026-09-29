/* Wygenerowane przez zbuduj.py z tresc/pola-i-okrag.py. Nie edytuj ręcznie. */
window.TEMAT = {
 "slug": "pola-i-okrag",
 "title": "Pola, obwody, koło i okrąg",
 "sign": "□",
 "lead": "Obwody i pola wielokątów, figury złożone, jednostki pola, długość okręgu i pole koła. Pole czworokąta w kwadracie było w zadaniu za 3 punkty na egzaminie w 2025 roku, a koło obowiązuje na egzaminie od 2025 roku.",
 "goals": {
  "learn": "7 umiejętności: obwody, pola czworokątów, pola trójkąta i trapezu z wysokościami, pola figur złożonych, jednostki pola, długość okręgu i pole koła.",
  "prereq": "Mnożenie liczb dziesiętnych i potęgi (Dział 1). Rozgrzewka na początku to sprawdzi.",
  "goal": "Minimum 12 z 14 punktów w teście na koniec tematu."
 },
 "skills": {
  "P1": "Obwody wielokątów",
  "P2": "Pola prostokąta, kwadratu, równoległoboku i rombu",
  "P3": "Pola trójkąta i trapezu, wysokości",
  "P4": "Pola figur złożonych",
  "P5": "Jednostki pola",
  "P6": "Długość okręgu",
  "P7": "Pole koła"
 },
 "lessons": [
  {
   "title": "Obwody wielokątów",
   "skills": [
    "P1"
   ],
   "intro": "Obwód to długość „płotu” dookoła figury: suma długości wszystkich boków. Jednostką obwodu są zwykłe jednostki długości: cm, m, km.",
   "rule": {
    "t": "Obwód wielokąta to suma długości jego boków.",
    "f": [
     "prostokąt: 2a + 2b = 2(a + b)",
     "kwadrat: 4a",
     "trójkąt równoramienny: podstawa + 2 · ramię"
    ],
    "e": "Obwód podajesz w cm albo m, a pole w cm² albo m². Nie myl ich."
   },
   "visual": {
    "type": "shape",
    "pts": {
     "A": [
      0,
      0
     ],
     "B": [
      8,
      0
     ],
     "C": [
      8,
      5
     ],
     "D": [
      0,
      5
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
    "sides": [
     [
      "A",
      "B",
      "24 m"
     ],
     [
      "B",
      "C",
      "15 m"
     ]
    ],
    "alt": "Prostokątna działka 24 m na 15 m.",
    "caption": "Obwód: 2 · (24 m + 15 m) = 78 m"
   },
   "example": {
    "q": "Prostokątną działkę o wymiarach 24 m na 15 m trzeba ogrodzić siatką. W ogrodzeniu będzie brama szerokości 4 m (bez siatki). Ile metrów siatki potrzeba?",
    "steps": [
     "Obwód działki: 2 · (24 + 15) = 2 · 39 = 78 m.",
     "Na bramę siatki nie trzeba: 78 − 4 = 74 m."
    ],
    "result": "Potrzeba 74 m siatki.",
    "tip": "Czytaj dokładnie, czy wszystkie boki mają być ogrodzone.",
    "check": [
     "2*(24 + 15) == 78",
     "78 - 4 == 74"
    ]
   },
   "you": [
    {
     "id": "y1",
     "type": "fields",
     "q": "Kwadrat ma obwód 36 cm. Jaką długość ma jego bok?",
     "fields": [
      {
       "label": "Bok (cm)",
       "ans": 9,
       "show": "9",
       "why": [
        [
         6,
         "6 cm byłoby dla kwadratu o polu 36 cm². Obwód to 4 boki: 36 : 4."
        ],
        [
         18,
         "Kwadrat ma 4 równe boki, a nie 2."
        ]
       ]
      }
     ],
     "sol": [
      "[[36 : 4 = 9]] cm."
     ],
     "answer": "9 cm.",
     "tip": "Obwód kwadratu to 4a.",
     "check": [
      "36/4 == 9"
     ]
    },
    {
     "id": "y1b",
     "type": "fields",
     "q": "Trójkąt równoramienny ma obwód 32 cm, a jego podstawa ma 10 cm. Jaką długość ma ramię?",
     "fields": [
      {
       "label": "Ramię (cm)",
       "ans": 11,
       "show": "11",
       "why": [
        [
         22,
         "22 cm to oba ramiona razem. Podziel przez 2."
        ],
        [
         16,
         "Najpierw odejmij podstawę: 32 − 10 = 22, potem podziel przez 2."
        ]
       ]
      }
     ],
     "sol": [
      "Oba ramiona: [[32 − 10 = 22]] cm.",
      "Jedno ramię: [[22 : 2 = 11]] cm."
     ],
     "answer": "11 cm.",
     "tip": "Sprawdzenie: 10 + 11 + 11 = 32.",
     "check": [
      "(32 - 10)/2 == 11"
     ]
    }
   ]
  },
  {
   "title": "Pola prostokąta, równoległoboku i rombu",
   "skills": [
    "P2"
   ],
   "intro": "Pole mówi, ile kwadracików 1 × 1 zmieści się w figurze. Równoległobok można przekształcić w prostokąt: odciąć trójkąt z jednej strony i dostawić z drugiej. Dlatego liczy się go jak prostokąt, ale z wysokością zamiast boku.",
   "rule": {
    "t": "Prostokąt: a · b. Kwadrat: a · a. Równoległobok: bok razy wysokość opuszczona na ten bok. Romb: jak równoległobok albo przez przekątne e · f : 2.",
    "f": [
     "P = a · b",
     "P = a²",
     "P = a · h",
     "romb: P = e · f : 2"
    ],
    "e": "W równoległoboku mnożysz bok przez wysokość, a nie przez drugi bok."
   },
   "visual": {
    "type": "shape",
    "pts": {
     "A": [
      0,
      0
     ],
     "B": [
      9,
      0
     ],
     "C": [
      12,
      4
     ],
     "D": [
      3,
      4
     ],
     "H": [
      3,
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
      "D",
      "H"
     ]
    ],
    "angles": [
     {
      "at": "H",
      "from": "B",
      "to": "D",
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
      "a = 9 cm"
     ],
     [
      "D",
      "H",
      "h = 4 cm",
      -30
     ],
     [
      "A",
      "D",
      "5 cm"
     ]
    ],
    "alt": "Równoległobok o podstawie 9 cm, wysokości 4 cm i boku 5 cm.",
    "caption": "P = a · h = 9 · 4 = 36 cm². Bok 5 cm do pola nie jest potrzebny"
   },
   "example": {
    "q": "Przekątne rombu mają długości 8 dm i 10 dm. Oblicz pole rombu.",
    "steps": [
     "Przekątne rombu są prostopadłe, więc pole to połowa prostokąta zbudowanego na przekątnych.",
     "P = 8 · 10 : 2 = 40 dm²."
    ],
    "result": "Pole rombu wynosi 40 dm².",
    "tip": "Ten sam wzór działa dla kwadratu: kwadrat o przekątnej 6 cm ma pole 6 · 6 : 2 = 18 cm².",
    "check": [
     "8*10/2 == 40",
     "6*6/2 == 18"
    ]
   },
   "you": [
    {
     "id": "y2",
     "type": "fields",
     "q": "Równoległobok ma bok 12 cm i wysokość opuszczoną na ten bok 5 cm. Drugi bok ma 7 cm. Oblicz pole.",
     "fields": [
      {
       "label": "Pole (cm²)",
       "ans": 60,
       "show": "60",
       "why": [
        [
         84,
         "7 cm to bok, a nie wysokość. Mnożysz 12 · 5."
        ],
        [
         30,
         "Równoległobok nie jest trójkątem: nie dzielisz przez 2."
        ]
       ]
      }
     ],
     "sol": [
      "[[P = 12 · 5 = 60]] cm²."
     ],
     "answer": "60 cm².",
     "tip": "Bok i wysokość opuszczona na ten bok.",
     "check": [
      "12*5 == 60"
     ]
    },
    {
     "id": "y2b",
     "type": "abcd",
     "q": "Przekątne rombu mają 6 cm i 9 cm. Pole rombu jest równe:",
     "opts": [
      "27 cm²",
      "54 cm²",
      "15 cm²",
      "30 cm²"
     ],
     "ok": 0,
     "why": {
      "B": "54 cm² to pole prostokąta na przekątnych. Romb to połowa.",
      "C": "15 to suma przekątnych, a nie pole.",
      "D": "30 to obwód prostokąta 6 × 9, a nie pole rombu."
     },
     "sol": [
      "[[6 · 9 : 2 = 27]] cm²."
     ],
     "answer": "A, 27 cm².",
     "tip": "e · f : 2.",
     "check": [
      "6*9/2 == 27"
     ]
    }
   ]
  },
  {
   "title": "Pola trójkąta i trapezu, wysokości",
   "skills": [
    "P3"
   ],
   "intro": "Trójkąt to połowa równoległoboku, a trapez to połowa równoległoboku złożonego z dwóch takich samych trapezów. Stąd „: 2” we wzorach. Wzoru można też użyć w drugą stronę: gdy znasz pole, obliczysz wysokość.",
   "rule": {
    "t": "Trójkąt: podstawa razy wysokość na tę podstawę, podzielone przez 2. Trapez: suma podstaw razy wysokość, podzielone przez 2.",
    "f": [
     "trójkąt: P = a · h : 2",
     "trapez: P = (a + b) · h : 2",
     "wysokość z pola: h = 2P : a"
    ],
    "e": "W trójkącie prostokątnym przyprostokątne są dla siebie podstawą i wysokością: P = a · b : 2."
   },
   "visual": {
    "type": "shape",
    "pts": {
     "A": [
      0,
      0
     ],
     "B": [
      10,
      0
     ],
     "C": [
      3,
      5
     ],
     "H": [
      3,
      0
     ]
    },
    "polys": [
     [
      "A",
      "B",
      "C"
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
      "a"
     ],
     [
      "C",
      "H",
      "h",
      -12
     ]
    ],
    "alt": "Trójkąt z zaznaczoną podstawą a i wysokością h.",
    "caption": "P = a · h : 2"
   },
   "example": {
    "q": "Trójkąt prostokątny ma boki 5 cm, 12 cm i 13 cm. Oblicz jego najkrótszą wysokość. (Przykład z podstawy programowej.)",
    "steps": [
     "Przyprostokątne to 5 cm i 12 cm, więc pole: P = 5 · 12 : 2 = 30 cm².",
     "Dwie wysokości to same przyprostokątne: 5 cm i 12 cm. Trzecia wysokość jest opuszczona na przeciwprostokątną 13 cm.",
     "Z pola: 13 · h : 2 = 30, więc h = 60 : 13 = 4 8/13 cm. To mniej niż 5 cm."
    ],
    "result": "Najkrótsza wysokość ma 60/13 cm, czyli 4 8/13 cm.",
    "tip": "Najkrótsza wysokość jest opuszczona na najdłuższy bok.",
    "check": [
     "5*12/2 == 30",
     "F(60, 13) < 5",
     "13*F(60, 13)/2 == 30"
    ]
   },
   "you": [
    {
     "id": "y3",
     "type": "fields",
     "q": "Trapez ma podstawy 9 cm i 5 cm oraz wysokość 6 cm. Oblicz jego pole.",
     "fields": [
      {
       "label": "Pole (cm²)",
       "ans": 42,
       "show": "42",
       "why": [
        [
         84,
         "Zapomniano podzielić przez 2."
        ],
        [
         270,
         "Podstawy się dodaje, a nie mnoży."
        ]
       ]
      }
     ],
     "sol": [
      "[[P = (9 + 5) · 6 : 2 = 42]] cm²."
     ],
     "answer": "42 cm².",
     "tip": "Najpierw suma podstaw.",
     "check": [
      "(9 + 5)*6/2 == 42"
     ]
    },
    {
     "id": "y3b",
     "type": "fields",
     "q": "Trójkąt ma pole 42 cm², a jedna z jego podstaw ma 12 cm. Oblicz wysokość opuszczoną na tę podstawę.",
     "fields": [
      {
       "label": "h (cm)",
       "ans": 7,
       "show": "7",
       "why": [
        [
         3.5,
         "Pole to a · h : 2, więc h = 2 · 42 : 12, a nie 42 : 12."
        ]
       ]
      }
     ],
     "sol": [
      "[[12 · h : 2 = 42]], [[6h = 42]], [[h = 7]] cm."
     ],
     "answer": "7 cm.",
     "tip": "h = 2P : a.",
     "check": [
      "12*7/2 == 42"
     ]
    }
   ]
  },
  {
   "title": "Pola figur złożonych",
   "skills": [
    "P4"
   ],
   "intro": "Na egzaminie figura rzadko jest „czystym” prostokątem. Są dwa sposoby: podzielić ją na znane kawałki i dodać pola albo dorysować do większej figury i odjąć to, co zbędne. W 2025 roku zadanie za 3 punkty polegało na obliczeniu pola czworokąta wpisanego w kwadrat.",
   "rule": {
    "t": "Podział: pole całości = suma pól części. Uzupełnianie: pole = pole dużej figury − pola dorysowanych kawałków.",
    "f": [
     "L-kształt: dwa prostokąty",
     "czworokąt w kwadracie: kwadrat − 4 trójkąty",
     "figura na kratce: prostokąt − trójkąty prostokątne"
    ],
    "e": "Zaznacz na rysunku długości wszystkich kawałków, zanim zaczniesz liczyć."
   },
   "visual": {
    "type": "shape",
    "pts": {
     "A": [
      0,
      0
     ],
     "B": [
      8,
      0
     ],
     "C": [
      8,
      8
     ],
     "D": [
      0,
      8
     ],
     "K": [
      2,
      0
     ],
     "L": [
      8,
      3
     ],
     "M": [
      6,
      8
     ],
     "N": [
      0,
      5
     ]
    },
    "polys": [
     [
      "A",
      "B",
      "C",
      "D"
     ],
     [
      "K",
      "L",
      "M",
      "N"
     ]
    ],
    "shade": [
     1
    ],
    "sides": [
     [
      "A",
      "K",
      "2"
     ],
     [
      "K",
      "B",
      "6"
     ],
     [
      "B",
      "L",
      "3"
     ],
     [
      "L",
      "C",
      "5"
     ],
     [
      "C",
      "M",
      "2"
     ],
     [
      "M",
      "D",
      "6"
     ],
     [
      "D",
      "N",
      "3"
     ],
     [
      "N",
      "A",
      "5"
     ]
    ],
    "alt": "Kwadrat 8 na 8 z czworokątem KLMN, którego wierzchołki leżą na bokach.",
    "caption": "Pole KLMN = 64 − 5 − 9 − 5 − 9 = 36"
   },
   "example": {
    "q": "Kwadrat ABCD ma bok 8 cm. Punkty K, L, M, N leżą na bokach tak jak na rysunku (AK = 2, BL = 3, CM = 2, DN = 3). Oblicz pole czworokąta KLMN.",
    "steps": [
     "Pole kwadratu: 8 · 8 = 64 cm².",
     "Cztery trójkąty prostokątne w rogach: przy A: 2 · 5 : 2 = 5, przy B: 6 · 3 : 2 = 9, przy C: 5 · 2 : 2 = 5, przy D: 6 · 3 : 2 = 9.",
     "Razem trójkąty: 28 cm². Pole KLMN: 64 − 28 = 36 cm²."
    ],
    "result": "Pole czworokąta KLMN wynosi 36 cm².",
    "tip": "W rogach kwadratu zawsze są trójkąty prostokątne. Ich przyprostokątne odczytasz z boków kwadratu.",
    "check": [
     "2*5/2 + 6*3/2 + 5*2/2 + 6*3/2 == 28",
     "64 - 28 == 36"
    ]
   },
   "you": [
    {
     "id": "y4",
     "type": "fields",
     "q": "Oblicz pole figury z rysunku. Bok kratki ma 1 cm.",
     "vis": {
      "type": "shape",
      "grid": true,
      "nodots": true,
      "names": {
       "P0": "",
       "P1": "",
       "P2": "",
       "P3": "",
       "P4": "",
       "P5": ""
      },
      "pts": {
       "P0": [
        0,
        0
       ],
       "P1": [
        6,
        0
       ],
       "P2": [
        6,
        2
       ],
       "P3": [
        2,
        2
       ],
       "P4": [
        2,
        5
       ],
       "P5": [
        0,
        5
       ]
      },
      "polys": [
       [
        "P0",
        "P1",
        "P2",
        "P3",
        "P4",
        "P5"
       ]
      ],
      "shade": [
       0
      ],
      "alt": "Figura w kształcie litery L na kratce: pas 6 na 2 i słupek 2 na 3."
     },
     "fields": [
      {
       "label": "Pole (cm²)",
       "ans": 18,
       "show": "18",
       "why": [
        [
         30,
         "30 to pole prostokąta 6 × 5, a figura ma wycięty róg 4 × 3."
        ]
       ]
      }
     ],
     "sol": [
      "Dolny pas: [[6 · 2 = 12]] cm², słupek nad nim: [[2 · 3 = 6]] cm².",
      "Razem: [[18]] cm². Albo: [[6 · 5 − 4 · 3 = 18]]."
     ],
     "answer": "18 cm².",
     "tip": "Oba sposoby dają ten sam wynik.",
     "check": [
      "6*2 + 2*3 == 18",
      "6*5 - 4*3 == 18"
     ]
    },
    {
     "id": "y4b",
     "type": "fields",
     "q": "Oblicz pole zamalowanego trójkąta z rysunku. Bok kratki ma 1 cm.",
     "vis": {
      "type": "shape",
      "grid": true,
      "nodots": true,
      "names": {
       "P0": "",
       "P1": "",
       "P2": ""
      },
      "pts": {
       "P0": [
        0,
        0
       ],
       "P1": [
        4,
        1
       ],
       "P2": [
        1,
        3
       ]
      },
      "polys": [
       [
        "P0",
        "P1",
        "P2"
       ]
      ],
      "shade": [
       0
      ],
      "alt": "Trójkąt na kratce o wierzchołkach (0, 0), (4, 1), (1, 3), wpisany w prostokąt 4 na 3."
     },
     "fields": [
      {
       "label": "Pole (cm²)",
       "ans": 5.5,
       "show": "5,5",
       "why": [
        [
         12,
         "12 to pole prostokąta 4 × 3. Odejmij trzy trójkąty w rogach."
        ],
        [
         6,
         "Policz dokładnie trójkąty: 2 + 1,5 + 3 = 6,5, a 12 − 6,5 = 5,5."
        ]
       ]
      }
     ],
     "sol": [
      "Prostokąt: [[4 · 3 = 12]] cm².",
      "Trójkąty: [[4 · 1 : 2 = 2]], [[3 · 2 : 2 = 3]], [[1 · 3 : 2 = 1,5]].",
      "Pole: [[12 − 6,5 = 5,5]] cm²."
     ],
     "answer": "5,5 cm².",
     "tip": "Dorysuj prostokąt dookoła trójkąta.",
     "check": [
      "12 - (F(4*1, 2) + F(3*2, 2) + F(1*3, 2)) == F('5.5')"
     ]
    }
   ]
  },
  {
   "title": "Jednostki pola",
   "skills": [
    "P5"
   ],
   "intro": "1 dm to 10 cm, ale 1 dm² to aż 100 cm², bo w kwadracie 10 cm × 10 cm mieści się 10 rzędów po 10 kwadracików. Przy polach przelicznik podnosisz do kwadratu.",
   "rule": {
    "t": "Jednostki pola rosną co 100, bo 10 · 10 = 100. Ar i hektar to jednostki pól uprawnych i działek.",
    "f": [
     "1 cm² = 100 mm²",
     "1 dm² = 100 cm²",
     "1 m² = 100 dm² = 10 000 cm²",
     "1 a = 100 m²",
     "1 ha = 100 a = 10 000 m²",
     "1 km² = 100 ha = 1 000 000 m²"
    ],
    "e": "Zamieniaj jednostki długości przed mnożeniem: 1 km · 1 mm to 1 000 m · 0,001 m."
   },
   "visual": {
    "type": "shape",
    "grid": true,
    "nodots": true,
    "names": {
     "P0": "",
     "P1": "",
     "P2": "",
     "P3": "",
     "S0": "",
     "S1": "",
     "S2": "",
     "S3": ""
    },
    "pts": {
     "P0": [
      0,
      0
     ],
     "P1": [
      10,
      0
     ],
     "P2": [
      10,
      10
     ],
     "P3": [
      0,
      10
     ],
     "S0": [
      0,
      0
     ],
     "S1": [
      1,
      0
     ],
     "S2": [
      1,
      1
     ],
     "S3": [
      0,
      1
     ]
    },
    "polys": [
     [
      "P0",
      "P1",
      "P2",
      "P3"
     ],
     [
      "S0",
      "S1",
      "S2",
      "S3"
     ]
    ],
    "shade": [
     1
    ],
    "sides": [
     [
      "P0",
      "P1",
      "10 cm = 1 dm"
     ]
    ],
    "alt": "Kwadrat 10 cm na 10 cm podzielony na 100 kwadratów 1 cm na 1 cm.",
    "caption": "1 dm² = 10 cm · 10 cm = 100 cm². Zamalowany kwadracik to 1 cm²"
   },
   "example": {
    "q": "Działka ma wymiary 120 m na 50 m. Podaj jej pole w m², w arach i w hektarach.",
    "steps": [
     "P = 120 · 50 = 6 000 m².",
     "1 a = 100 m², więc 6 000 : 100 = 60 a.",
     "1 ha = 10 000 m², więc 6 000 : 10 000 = 0,6 ha."
    ],
    "result": "6 000 m² = 60 a = 0,6 ha.",
    "tip": "Ar to kwadrat 10 m × 10 m, hektar to kwadrat 100 m × 100 m.",
    "check": [
     "120*50 == 6000",
     "6000/100 == 60",
     "F(6000, 10000) == F('0.6')"
    ]
   },
   "you": [
    {
     "id": "y5",
     "type": "abcd",
     "q": "Ile to 3 m² w cm²?",
     "opts": [
      "30 000 cm²",
      "300 cm²",
      "3 000 cm²",
      "300 000 cm²"
     ],
     "ok": 0,
     "why": {
      "B": "To przelicznik jak dla długości (1 m = 100 cm). Przy polach jest 100 · 100.",
      "C": "1 m² to 10 000 cm², a nie 1 000 cm².",
      "D": "Za dużo o jedno zero: 3 · 10 000 = 30 000."
     },
     "sol": [
      "[[1 m² = 100 cm · 100 cm = 10 000 cm²]], więc [[3 m² = 30 000 cm²]]."
     ],
     "answer": "A, 30 000 cm².",
     "tip": "Przelicznik długości do kwadratu.",
     "check": [
      "3*100*100 == 30000"
     ]
    },
    {
     "id": "y5b",
     "type": "fields",
     "q": "Pole ma 2,4 ha. Ile to arów?",
     "fields": [
      {
       "label": "Ary",
       "ans": 240,
       "show": "240",
       "why": [
        [
         24,
         "1 ha = 100 a, więc mnożysz przez 100."
        ],
        [
         24000,
         "24 000 to metry kwadratowe, a nie ary."
        ]
       ]
      }
     ],
     "sol": [
      "[[2,4 · 100 = 240]] a."
     ],
     "answer": "240 a.",
     "tip": "1 ha = 100 a.",
     "check": [
      "F('2.4')*100 == 240"
     ]
    }
   ]
  },
  {
   "title": "Długość okręgu",
   "skills": [
    "P6"
   ],
   "intro": "Jeśli owiniesz sznurkiem dowolne koło i podzielisz długość sznurka przez średnicę, zawsze wyjdzie ok. 3,14. Ta liczba to π (czytaj: pi). Od 2025 roku długość okręgu i pole koła obowiązują na egzaminie.",
   "rule": {
    "t": "Długość okręgu (obwód koła) to π razy średnica, czyli 2 razy π razy promień.",
    "f": [
     "L = 2πr = πd",
     "d = 2r",
     "π ≈ 3,14"
    ],
    "e": "Wynik dokładny zostawiasz z π (np. 12π cm), a przybliżony liczysz z 3,14 (12 · 3,14 = 37,68 cm). Czytaj, o który wynik proszą."
   },
   "visual": {
    "type": "shape",
    "pts": {
     "O": [
      0,
      0
     ],
     "A": [
      -3,
      0
     ],
     "B": [
      3,
      0
     ]
    },
    "circles": [
     {
      "c": "O",
      "r": 3
     }
    ],
    "polys": [
     [
      "A",
      "B"
     ]
    ],
    "sides": [
     [
      "O",
      "B",
      "r",
      12
     ],
     [
      "A",
      "O",
      "r",
      12
     ]
    ],
    "alt": "Okrąg o środku O i średnicy AB złożonej z dwóch promieni.",
    "caption": "Średnica d = 2r. Długość okręgu L = πd = 2πr"
   },
   "example": {
    "q": "Koło roweru ma średnicę 70 cm. Jaką drogę przejedzie rower, gdy koło obróci się 1 000 razy? Przyjmij π ≈ 3,14.",
    "steps": [
     "Jeden obrót to długość okręgu: L = πd = 70π ≈ 70 · 3,14 = 219,8 cm.",
     "1 000 obrotów: 1 000 · 219,8 = 219 800 cm.",
     "Zamieniamy: 219 800 cm = 2 198 m ≈ 2,2 km."
    ],
    "result": "Rower przejedzie ok. 2 198 m, czyli ok. 2,2 km.",
    "tip": "Przy średnicy liczysz πd. Nie mnóż jeszcze przez 2, bo 2r to właśnie średnica.",
    "check": [
     "70*F('3.14') == F('219.8')",
     "1000*F('219.8') == 219800",
     "F(219800, 100) == 2198"
    ]
   },
   "you": [
    {
     "id": "y6",
     "type": "fields",
     "q": "Oblicz długość okręgu o promieniu 13 cm. Podaj wynik dokładny (ile razy π) i przybliżony (π ≈ 3,14).",
     "fields": [
      {
       "label": "L = … π (cm)",
       "ans": 26,
       "show": "26",
       "why": [
        [
         13,
         "Długość okręgu to 2πr, a nie πr."
        ],
        [
         169,
         "169π to pole koła (πr²)."
        ]
       ]
      },
      {
       "label": "L ≈ (cm)",
       "ans": 81.64,
       "show": "81,64",
       "why": [
        [
         40.82,
         "To połowa okręgu. L = 2 · 13 · 3,14."
        ]
       ]
      }
     ],
     "sol": [
      "[[L = 2π · 13 = 26π]] cm.",
      "[[26 · 3,14 = 81,64]] cm."
     ],
     "answer": "26π cm, czyli ok. 81,64 cm.",
     "tip": "Najpierw wynik z π, potem przybliżenie.",
     "check": [
      "2*13 == 26",
      "26*F('3.14') == F('81.64')"
     ]
    },
    {
     "id": "y6b",
     "type": "fields",
     "q": "Okrąg ma długość 84π m. Oblicz jego promień i średnicę.",
     "fields": [
      {
       "label": "r (m)",
       "ans": 42,
       "show": "42",
       "why": [
        [
         84,
         "84 to średnica: πd = 84π. Promień to połowa."
        ]
       ]
      },
      {
       "label": "d (m)",
       "ans": 84,
       "show": "84"
      }
     ],
     "sol": [
      "[[2πr = 84π]], dzielimy przez 2π: [[r = 42]] m.",
      "[[d = 2r = 84]] m."
     ],
     "answer": "r = 42 m, d = 84 m.",
     "tip": "π się skraca, nie trzeba go przybliżać.",
     "check": [
      "2*42 == 84"
     ]
    }
   ]
  },
  {
   "title": "Pole koła",
   "skills": [
    "P7"
   ],
   "intro": "Pole koła to π razy promień do kwadratu. To wzór, w którym najczęściej zdarza się błąd: wstawienie średnicy zamiast promienia albo pomylenie z długością okręgu.",
   "rule": {
    "t": "Pole koła: P = πr². Gdy znasz pole, promień obliczysz, dzieląc przez π i szukając liczby, która do kwadratu daje wynik.",
    "f": [
     "P = πr²",
     "d = 10 cm → r = 5 cm → P = 25π cm²",
     "P = 49π → r² = 49 → r = 7"
    ],
    "e": "Promień 2 razy większy daje pole 4 razy większe, bo r jest podnoszony do kwadratu."
   },
   "visual": {
    "type": "shape",
    "pts": {
     "A": [
      -5,
      -5
     ],
     "B": [
      5,
      -5
     ],
     "C": [
      5,
      5
     ],
     "D": [
      -5,
      5
     ],
     "O": [
      0,
      0
     ],
     "R": [
      5,
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
    "circles": [
     {
      "c": "O",
      "r": 5,
      "sh": true
     }
    ],
    "segs": [
     [
      "O",
      "R"
     ]
    ],
    "names": {
     "A": "",
     "B": "",
     "C": "",
     "D": "",
     "R": ""
    },
    "sides": [
     [
      "O",
      "R",
      "r = 5 cm",
      12
     ],
     [
      "A",
      "B",
      "10 cm"
     ]
    ],
    "alt": "Koło o promieniu 5 cm wpisane w kwadrat o boku 10 cm.",
    "caption": "Koło: 25π ≈ 78,5 cm². Kwadrat: 100 cm². Rogi: ok. 21,5 cm²"
   },
   "example": {
    "q": "W kwadrat o boku 10 cm wpisano koło. Oblicz pole koła i pole części kwadratu poza kołem. Przyjmij π ≈ 3,14.",
    "steps": [
     "Średnica koła to bok kwadratu, 10 cm, więc r = 5 cm.",
     "Pole koła: P = π · 5² = 25π ≈ 25 · 3,14 = 78,5 cm².",
     "Poza kołem: 100 − 78,5 = 21,5 cm²."
    ],
    "result": "Koło: 25π cm², czyli ok. 78,5 cm². Poza kołem: ok. 21,5 cm².",
    "tip": "Koło wpisane w kwadrat: średnica = bok kwadratu.",
    "check": [
     "25*F('3.14') == F('78.5')",
     "100 - F('78.5') == F('21.5')"
    ]
   },
   "you": [
    {
     "id": "y7",
     "type": "fields",
     "q": "Oblicz pole koła o promieniu 4,5 m. Podaj wynik dokładny i przybliżony (π ≈ 3,14).",
     "fields": [
      {
       "label": "P = … π (m²)",
       "ans": 20.25,
       "show": "20,25",
       "why": [
        [
         9,
         "9π to długość okręgu (2πr). Pole to πr² = π · 4,5²."
        ],
        [
         4.5,
         "Promień trzeba podnieść do kwadratu: 4,5 · 4,5."
        ]
       ]
      },
      {
       "label": "P ≈ (m²)",
       "ans": 63.585,
       "show": "63,585"
      }
     ],
     "sol": [
      "[[4,5² = 20,25]], więc [[P = 20,25π]] m².",
      "[[20,25 · 3,14 = 63,585]] m², czyli ok. 63,6 m²."
     ],
     "answer": "20,25π m², czyli ok. 63,6 m².",
     "tip": "Przykład z aneksu do repetytorium na egzamin 2025.",
     "check": [
      "F('4.5')**2 == F('20.25')",
      "F('20.25')*F('3.14') == F('63.585')"
     ]
    },
    {
     "id": "y7b",
     "type": "abcd",
     "q": "Koło ma pole 36π cm². Jaką długość ma okrąg, który je ogranicza?",
     "opts": [
      "12π cm",
      "6π cm",
      "18π cm",
      "36π cm"
     ],
     "ok": 0,
     "why": {
      "B": "6 to promień. Długość okręgu to 2π · 6.",
      "C": "18π powstaje, gdy 36 podzielisz przez 2. Najpierw oblicz promień: r² = 36.",
      "D": "36π to pole, a nie długość okręgu."
     },
     "sol": [
      "[[r² = 36]], [[r = 6]] cm.",
      "[[L = 2π · 6 = 12π]] cm."
     ],
     "answer": "A, 12π cm.",
     "tip": "Z pola najpierw promień.",
     "check": [
      "6**2 == 36",
      "2*6 == 12"
     ]
    }
   ]
  }
 ],
 "traps": [
  {
   "name": "Bok zamiast wysokości w równoległoboku",
   "bad": "boki 9 cm i 5 cm, wysokość 4 cm: P = 9 · 5 = 45 cm²",
   "good": "P = 9 · 4 = 36 cm²"
  },
  {
   "name": "Brak dzielenia przez 2",
   "bad": "trójkąt 12 cm i wysokość 7 cm: P = 84 cm²",
   "good": "P = 12 · 7 : 2 = 42 cm². Tak samo romb (e · f : 2) i trapez"
  },
  {
   "name": "Średnica zamiast promienia",
   "bad": "koło o średnicy 10 cm: P = π · 10² = 100π",
   "good": "r = 5 cm, P = 25π cm²"
  }
 ],
 "cheat": {
  "title": "Pola i koło w 7 zasadach",
  "rules": [
   {
    "t": "Obwód: suma boków.",
    "f": [
     "prostokąt 2(a + b)",
     "kwadrat 4a"
    ],
    "e": "Jednostki długości: cm, m."
   },
   {
    "t": "Czworokąty.",
    "f": [
     "prostokąt a · b",
     "kwadrat a²",
     "równoległobok a · h",
     "romb e · f : 2"
    ],
    "e": "Bok razy wysokość na ten bok."
   },
   {
    "t": "Trójkąt i trapez: dziel przez 2.",
    "f": [
     "a · h : 2",
     "(a + b) · h : 2",
     "h = 2P : a"
    ],
    "e": "Najkrótsza wysokość na najdłuższy bok."
   },
   {
    "t": "Figury złożone.",
    "f": [
     "podziel i dodaj",
     "dorysuj i odejmij"
    ],
    "e": "Najpierw podpisz wszystkie długości."
   },
   {
    "t": "Jednostki pola co 100.",
    "f": [
     "1 m² = 10 000 cm²",
     "1 a = 100 m²",
     "1 ha = 10 000 m²"
    ],
    "e": "Najpierw zamień długości, potem mnóż."
   },
   {
    "t": "Długość okręgu.",
    "f": [
     "L = 2πr = πd"
    ],
    "e": "Wynik dokładny z π, przybliżony z 3,14."
   },
   {
    "t": "Pole koła.",
    "f": [
     "P = πr²",
     "r² = P : π"
    ],
    "e": "Średnicę najpierw podziel przez 2."
   }
  ]
 },
 "memo": {
  "title": "Wzory na pola",
  "rows": [
   [
    "prostokąt",
    "równoległobok",
    "romb",
    "trójkąt",
    "trapez",
    "koło"
   ],
   [
    "a · b",
    "a · h",
    "e · f : 2",
    "a · h : 2",
    "(a + b) · h : 2",
    "πr²"
   ]
  ],
  "note": "Długość okręgu: L = 2πr. π ≈ 3,14. Jednostki: 1 a = 100 m², 1 ha = 10 000 m²."
 },
 "warmup": {
  "id": "w0",
  "type": "fields",
  "q": "Rozgrzewka: rachunki, które pojawią się w tym temacie.",
  "fields": [
   {
    "label": "12 · 7 : 2",
    "ans": 42,
    "show": "42"
   },
   {
    "label": "3,14 · 10",
    "ans": 31.4,
    "show": "31,4"
   },
   {
    "label": "6²",
    "ans": 36,
    "show": "36"
   }
  ],
  "sol": [
   "<b>12 · 7 : 2</b> = 84 : 2 = [[42]].",
   "<b>3,14 · 10</b> = [[31,4]].",
   "<b>6²</b> = 6 · 6 = [[36]]."
  ],
  "answer": "42, 31,4 i 36.",
  "tip": "Mnożenie przez 3,14 i potęgi to podstawa zadań z kołem. Jeśli coś nie wyszło, wróć do tematów z Działu 1.",
  "check": [
   "12*7/2 == 42",
   "F('3.14')*10 == F('31.4')",
   "6**2 == 36"
  ]
 },
 "levels": [
  {
   "n": 1,
   "name": "Podstawy",
   "desc": "Każdy wzór osobno. Zapisz wzór, podstaw liczby i dopisz jednostkę."
  },
  {
   "n": 2,
   "name": "Trening",
   "desc": "Wysokości z pola, figury na kratce i w kwadracie, jednostki i koło w zadaniach praktycznych."
  },
  {
   "n": 3,
   "name": "Egzamin",
   "desc": "Zadania otwarte jak na egzaminie: figury złożone, koło i koszty. Rozwiązuj na kartce, a potem oceniaj się według punktacji."
  }
 ],
 "practice": [
  {
   "id": "a1",
   "level": 1,
   "skills": [
    "P1"
   ],
   "type": "fields",
   "q": "Prostokąt ma boki 7,5 cm i 4 cm. Oblicz jego obwód.",
   "fields": [
    {
     "label": "Obwód (cm)",
     "ans": 23,
     "show": "23",
     "why": [
      [
       30,
       "30 cm² to pole. Obwód to suma boków."
      ],
      [
       11.5,
       "Dodano tylko dwa boki. Prostokąt ma cztery."
      ]
     ]
    }
   ],
   "sol": [
    "[[2 · (7,5 + 4) = 2 · 11,5 = 23]] cm."
   ],
   "answer": "23 cm.",
   "tip": "Obwód prostokąta: 2(a + b).",
   "check": [
    "2*(F('7.5') + 4) == 23"
   ],
   "twin": {
    "type": "fields",
    "q": "Kwadrat ma pole 49 cm². Oblicz jego obwód.",
    "fields": [
     {
      "label": "Obwód (cm)",
      "ans": 28,
      "show": "28",
      "why": [
       [
        7,
        "7 cm to bok. Obwód to 4 boki."
       ],
       [
        196,
        "Najpierw bok: 7 · 7 = 49, więc bok ma 7 cm."
       ]
      ]
     }
    ],
    "sol": [
     "Bok: [[7]] cm, bo [[7 · 7 = 49]].",
     "Obwód: [[4 · 7 = 28]] cm."
    ],
    "answer": "28 cm.",
    "tip": "Z pola najpierw bok.",
    "check": [
     "7*7 == 49",
     "4*7 == 28"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Trójkąt równoramienny ma obwód 30 cm, a jego podstawa ma 8 cm. Jaką długość ma ramię?",
    "fields": [
     {
      "label": "Ramię (cm)",
      "ans": 11,
      "show": "11"
     }
    ],
    "sol": [
     "[[(30 − 8) : 2 = 11]] cm."
    ],
    "answer": "11 cm.",
    "tip": "Dwa ramiona są równe.",
    "check": [
     "(30 - 8)/2 == 11"
    ]
   }
  },
  {
   "id": "a2",
   "level": 1,
   "skills": [
    "P2"
   ],
   "type": "fields",
   "q": "Oblicz pole równoległoboku z rysunku.",
   "vis": {
    "type": "shape",
    "pts": {
     "A": [
      0,
      0
     ],
     "B": [
      9,
      0
     ],
     "C": [
      12,
      4
     ],
     "D": [
      3,
      4
     ],
     "H": [
      3,
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
      "D",
      "H"
     ]
    ],
    "angles": [
     {
      "at": "H",
      "from": "B",
      "to": "D",
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
      "9 cm"
     ],
     [
      "D",
      "H",
      "4 cm",
      -24
     ],
     [
      "A",
      "D",
      "5 cm"
     ]
    ],
    "alt": "Równoległobok: podstawa 9 cm, wysokość 4 cm, bok 5 cm."
   },
   "fields": [
    {
     "label": "Pole (cm²)",
     "ans": 36,
     "show": "36",
     "why": [
      [
       45,
       "5 cm to bok, a nie wysokość. P = 9 · 4."
      ],
      [
       18,
       "Równoległobok to nie trójkąt: nie dzielisz przez 2."
      ]
     ]
    }
   ],
   "sol": [
    "[[P = 9 · 4 = 36]] cm²."
   ],
   "answer": "36 cm².",
   "tip": "Podstawa razy wysokość.",
   "check": [
    "9*4 == 36"
   ],
   "twin": {
    "type": "fields",
    "q": "Równoległobok ma bok 12 cm, wysokość opuszczoną na ten bok 3,5 cm i drugi bok 6 cm. Oblicz jego pole.",
    "fields": [
     {
      "label": "Pole (cm²)",
      "ans": 42,
      "show": "42",
      "why": [
       [
        72,
        "6 cm to bok, a nie wysokość. P = 12 · 3,5."
       ]
      ]
     }
    ],
    "sol": [
     "[[P = 12 · 3,5 = 42]] cm²."
    ],
    "answer": "42 cm².",
    "tip": "Bok i wysokość na ten bok.",
    "check": [
     "12*F('3.5') == 42"
    ]
   }
  },
  {
   "id": "a3",
   "level": 1,
   "skills": [
    "P2"
   ],
   "type": "abcd",
   "q": "Przekątne rombu mają długości 6 cm i 11 cm. Pole tego rombu jest równe:",
   "opts": [
    "66 cm²",
    "17 cm²",
    "33 cm²",
    "16,5 cm²"
   ],
   "ok": 2,
   "why": {
    "A": "66 cm² to iloczyn przekątnych bez dzielenia przez 2.",
    "B": "17 to suma przekątnych, a nie pole.",
    "D": "Podzielono przez 4 zamiast przez 2."
   },
   "sol": [
    "[[6 · 11 : 2 = 33]] cm²."
   ],
   "answer": "C, 33 cm².",
   "tip": "Romb: e · f : 2.",
   "check": [
    "6*11/2 == 33"
   ],
   "twin": {
    "type": "abcd",
    "q": "Przekątne rombu mają długości 14 dm i 9 dm. Pole tego rombu jest równe:",
    "opts": [
     "63 dm²",
     "126 dm²",
     "23 dm²",
     "31,5 dm²"
    ],
    "ok": 0,
    "why": {
     "B": "Brak dzielenia przez 2.",
     "C": "To suma przekątnych.",
     "D": "Podzielono przez 4 zamiast przez 2."
    },
    "sol": [
     "[[14 · 9 : 2 = 63]] dm²."
    ],
    "answer": "A, 63 dm².",
    "tip": "e · f : 2.",
    "check": [
     "14*9/2 == 63"
    ]
   }
  },
  {
   "id": "a4",
   "level": 1,
   "skills": [
    "P3"
   ],
   "type": "fields",
   "q": "Trójkąt ma podstawę 12 cm i wysokość opuszczoną na tę podstawę 7 cm. Oblicz jego pole.",
   "fields": [
    {
     "label": "Pole (cm²)",
     "ans": 42,
     "show": "42",
     "why": [
      [
       84,
       "Zapomniano podzielić przez 2."
      ]
     ]
    }
   ],
   "sol": [
    "[[P = 12 · 7 : 2 = 42]] cm²."
   ],
   "answer": "42 cm².",
   "tip": "Trójkąt to połowa równoległoboku.",
   "check": [
    "12*7/2 == 42"
   ],
   "twin": {
    "type": "fields",
    "q": "Trójkąt prostokątny ma przyprostokątne 9 cm i 8 cm. Oblicz jego pole.",
    "fields": [
     {
      "label": "Pole (cm²)",
      "ans": 36,
      "show": "36",
      "why": [
       [
        72,
        "Zapomniano podzielić przez 2."
       ]
      ]
     }
    ],
    "sol": [
     "[[P = 9 · 8 : 2 = 36]] cm²."
    ],
    "answer": "36 cm².",
    "tip": "Przyprostokątne to podstawa i wysokość.",
    "check": [
     "9*8/2 == 36"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Trójkąt ma podstawę 6,4 dm i wysokość opuszczoną na tę podstawę 5 dm. Oblicz jego pole.",
    "fields": [
     {
      "label": "Pole (dm²)",
      "ans": 16,
      "show": "16"
     }
    ],
    "sol": [
     "[[6,4 · 5 : 2 = 16]] dm²."
    ],
    "answer": "16 dm².",
    "tip": "a · h : 2.",
    "check": [
     "F('6.4')*5/2 == 16"
    ]
   }
  },
  {
   "id": "a5",
   "level": 1,
   "skills": [
    "P3"
   ],
   "type": "fields",
   "q": "Oblicz pole trapezu z rysunku.",
   "vis": {
    "type": "shape",
    "pts": {
     "A": [
      0,
      0
     ],
     "B": [
      11,
      0
     ],
     "C": [
      9,
      6
     ],
     "D": [
      2,
      6
     ],
     "H": [
      2,
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
      "D",
      "H"
     ]
    ],
    "angles": [
     {
      "at": "H",
      "from": "B",
      "to": "D",
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
      "11 cm"
     ],
     [
      "D",
      "C",
      "7 cm"
     ],
     [
      "D",
      "H",
      "6 cm",
      -24
     ]
    ],
    "alt": "Trapez o podstawach 11 cm i 7 cm i wysokości 6 cm."
   },
   "fields": [
    {
     "label": "Pole (cm²)",
     "ans": 54,
     "show": "54",
     "why": [
      [
       108,
       "Zapomniano podzielić przez 2."
      ],
      [
       462,
       "Podstawy się dodaje, a nie mnoży."
      ]
     ]
    }
   ],
   "sol": [
    "[[P = (11 + 7) · 6 : 2 = 54]] cm²."
   ],
   "answer": "54 cm².",
   "tip": "Suma podstaw razy wysokość, przez 2.",
   "check": [
    "(11 + 7)*6/2 == 54"
   ],
   "twin": {
    "type": "fields",
    "q": "Trapez ma podstawy 15 cm i 9 cm oraz wysokość 4 cm. Oblicz jego pole.",
    "fields": [
     {
      "label": "Pole (cm²)",
      "ans": 48,
      "show": "48",
      "why": [
       [
        96,
        "Zapomniano podzielić przez 2."
       ]
      ]
     }
    ],
    "sol": [
     "[[P = (15 + 9) · 4 : 2 = 48]] cm²."
    ],
    "answer": "48 cm².",
    "tip": "(a + b) · h : 2.",
    "check": [
     "(15 + 9)*4/2 == 48"
    ]
   }
  },
  {
   "id": "a6",
   "level": 1,
   "skills": [
    "P5"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "1 m² = 100 dm².",
     "ok": "P"
    },
    {
     "t": "1 ha = 1 000 m².",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[1 m² = 10 dm · 10 dm = 100 dm²]]. Prawda.",
    "<b>Zdanie 2.</b> [[1 ha = 100 m · 100 m = 10 000 m²]]. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Hektar to kwadrat 100 m × 100 m.",
   "check": [
    "10*10 == 100",
    "100*100 == 10000"
   ],
   "twin": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "3 a = 300 m².",
      "ok": "P"
     },
     {
      "t": "1 cm² = 10 mm².",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[1 a = 100 m²]], więc [[3 a = 300 m²]]. Prawda.",
     "<b>Zdanie 2.</b> [[1 cm² = 10 mm · 10 mm = 100 mm²]]. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Ar to kwadrat 10 m × 10 m.",
    "check": [
     "3*100 == 300",
     "10*10 == 100"
    ]
   }
  },
  {
   "id": "a7",
   "level": 1,
   "skills": [
    "P6"
   ],
   "type": "fields",
   "q": "Oblicz długość okręgu o promieniu 6 cm. Przyjmij π ≈ 3,14.",
   "fields": [
    {
     "label": "L ≈ (cm)",
     "ans": 37.68,
     "show": "37,68",
     "why": [
      [
       113.04,
       "To pole koła (πr²). Długość okręgu to 2πr."
      ],
      [
       18.84,
       "To połowa okręgu (πr). L = 2πr."
      ]
     ]
    }
   ],
   "sol": [
    "[[L = 2π · 6 = 12π]] cm.",
    "[[12 · 3,14 = 37,68]] cm."
   ],
   "answer": "12π cm, czyli ok. 37,68 cm.",
   "tip": "L = 2πr.",
   "check": [
    "12*F('3.14') == F('37.68')"
   ],
   "twin": {
    "type": "fields",
    "q": "Oblicz długość okręgu o średnicy 20 cm. Przyjmij π ≈ 3,14.",
    "fields": [
     {
      "label": "L ≈ (cm)",
      "ans": 62.8,
      "show": "62,8",
      "why": [
       [
        125.6,
        "Przy średnicy liczysz πd, bez mnożenia przez 2."
       ],
       [
        314,
        "To pole koła (π · 10²)."
       ]
      ]
     }
    ],
    "sol": [
     "[[L = π · 20 = 20π ≈ 62,8]] cm."
    ],
    "answer": "20π cm, czyli ok. 62,8 cm.",
    "tip": "L = πd.",
    "check": [
     "20*F('3.14') == F('62.8')"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Oblicz długość okręgu o promieniu 2,5 m. Przyjmij π ≈ 3,14.",
    "fields": [
     {
      "label": "L ≈ (m)",
      "ans": 15.7,
      "show": "15,7"
     }
    ],
    "sol": [
     "[[L = 2π · 2,5 = 5π ≈ 15,7]] m."
    ],
    "answer": "5π m, czyli ok. 15,7 m.",
    "tip": "2 · 2,5 = 5.",
    "check": [
     "5*F('3.14') == F('15.7')"
    ]
   }
  },
  {
   "id": "a8",
   "level": 1,
   "skills": [
    "P7"
   ],
   "type": "fields",
   "q": "Oblicz pole koła o promieniu 5 cm. Przyjmij π ≈ 3,14.",
   "fields": [
    {
     "label": "P ≈ (cm²)",
     "ans": 78.5,
     "show": "78,5",
     "why": [
      [
       31.4,
       "To długość okręgu (2πr). Pole to πr²."
      ],
      [
       15.7,
       "Promień trzeba podnieść do kwadratu: 5² = 25."
      ]
     ]
    }
   ],
   "sol": [
    "[[P = π · 5² = 25π]] cm².",
    "[[25 · 3,14 = 78,5]] cm²."
   ],
   "answer": "25π cm², czyli ok. 78,5 cm².",
   "tip": "P = πr².",
   "check": [
    "25*F('3.14') == F('78.5')"
   ],
   "twin": {
    "type": "fields",
    "q": "Oblicz pole koła o średnicy 8 dm. Przyjmij π ≈ 3,14.",
    "fields": [
     {
      "label": "P ≈ (dm²)",
      "ans": 50.24,
      "show": "50,24",
      "why": [
       [
        200.96,
        "Wstawiono średnicę zamiast promienia. r = 4 dm."
       ],
       [
        25.12,
        "To długość okręgu (πd). Pole to πr²."
       ]
      ]
     }
    ],
    "sol": [
     "[[r = 4]] dm, [[P = 16π ≈ 50,24]] dm²."
    ],
    "answer": "16π dm², czyli ok. 50,24 dm².",
    "tip": "Najpierw promień.",
    "check": [
     "16*F('3.14') == F('50.24')"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Oblicz pole koła o promieniu 3 m. Przyjmij π ≈ 3,14.",
    "fields": [
     {
      "label": "P ≈ (m²)",
      "ans": 28.26,
      "show": "28,26"
     }
    ],
    "sol": [
     "[[P = 9π ≈ 28,26]] m²."
    ],
    "answer": "9π m², czyli ok. 28,26 m².",
    "tip": "3² = 9.",
    "check": [
     "9*F('3.14') == F('28.26')"
    ]
   }
  },
  {
   "id": "b1",
   "level": 2,
   "skills": [
    "P3"
   ],
   "type": "fields",
   "q": "Trójkąt ma pole 36 cm², a jedna z jego podstaw ma 9 cm. Oblicz wysokość opuszczoną na tę podstawę.",
   "fields": [
    {
     "label": "h (cm)",
     "ans": 8,
     "show": "8",
     "why": [
      [
       4,
       "Pole to a · h : 2, więc h = 2 · 36 : 9."
      ]
     ]
    }
   ],
   "sol": [
    "[[9 · h : 2 = 36]], [[9h = 72]], [[h = 8]] cm."
   ],
   "answer": "8 cm.",
   "tip": "h = 2P : a.",
   "check": [
    "9*8/2 == 36"
   ],
   "twin": {
    "type": "fields",
    "q": "Trapez ma pole 60 cm², a jego podstawy mają 7 cm i 5 cm. Oblicz wysokość trapezu.",
    "fields": [
     {
      "label": "h (cm)",
      "ans": 10,
      "show": "10",
      "why": [
       [
        5,
        "Pole to (a + b) · h : 2, więc h = 2 · 60 : 12."
       ]
      ]
     }
    ],
    "sol": [
     "[[(7 + 5) · h : 2 = 60]], [[6h = 60]], [[h = 10]] cm."
    ],
    "answer": "10 cm.",
    "tip": "Najpierw suma podstaw.",
    "check": [
     "(7 + 5)*10/2 == 60"
    ]
   }
  },
  {
   "id": "b2",
   "level": 2,
   "skills": [
    "P3",
    "P1"
   ],
   "type": "fields",
   "q": "Trójkąt prostokątny ma boki 6 cm, 8 cm i 10 cm. Oblicz jego pole i najkrótszą wysokość.",
   "fields": [
    {
     "label": "Pole (cm²)",
     "ans": 24,
     "show": "24",
     "why": [
      [
       48,
       "Zapomniano podzielić przez 2."
      ],
      [
       30,
       "Mnożysz przyprostokątne 6 i 8, a nie 6 i 10."
      ]
     ]
    },
    {
     "label": "Najkrótsza wysokość (cm)",
     "ans": 4.8,
     "show": "4,8",
     "why": [
      [
       6,
       "6 cm to wysokość na bok 8 cm. Najkrótsza jest ta na najdłuższy bok 10 cm."
      ],
      [
       2.4,
       "h = 2P : a = 48 : 10."
      ]
     ]
    }
   ],
   "sol": [
    "Przyprostokątne 6 i 8: [[P = 6 · 8 : 2 = 24]] cm².",
    "Najkrótsza wysokość jest na przeciwprostokątną: [[10 · h : 2 = 24]], [[h = 4,8]] cm."
   ],
   "answer": "24 cm² i 4,8 cm.",
   "tip": "Tak wygląda przykład z podstawy programowej (trójkąt 5, 12, 13).",
   "check": [
    "6*8/2 == 24",
    "10*F('4.8')/2 == 24"
   ],
   "twin": {
    "type": "fields",
    "q": "Trójkąt prostokątny ma boki 9 cm, 12 cm i 15 cm. Oblicz jego pole i najkrótszą wysokość.",
    "fields": [
     {
      "label": "Pole (cm²)",
      "ans": 54,
      "show": "54"
     },
     {
      "label": "Najkrótsza wysokość (cm)",
      "ans": 7.2,
      "show": "7,2",
      "why": [
       [
        9,
        "Najkrótsza wysokość jest na najdłuższy bok 15 cm."
       ]
      ]
     }
    ],
    "sol": [
     "[[P = 9 · 12 : 2 = 54]] cm².",
     "[[15 · h : 2 = 54]], [[h = 7,2]] cm."
    ],
    "answer": "54 cm² i 7,2 cm.",
    "tip": "h = 2P : c.",
    "check": [
     "9*12/2 == 54",
     "15*F('7.2')/2 == 54"
    ]
   }
  },
  {
   "id": "b3",
   "level": 2,
   "skills": [
    "P4",
    "P1"
   ],
   "type": "fields",
   "q": "Oblicz pole i obwód figury z rysunku. Bok kratki ma 1 cm.",
   "vis": {
    "type": "shape",
    "grid": true,
    "nodots": true,
    "names": {
     "P0": "",
     "P1": "",
     "P2": "",
     "P3": "",
     "P4": "",
     "P5": ""
    },
    "pts": {
     "P0": [
      0,
      0
     ],
     "P1": [
      6,
      0
     ],
     "P2": [
      6,
      2
     ],
     "P3": [
      2,
      2
     ],
     "P4": [
      2,
      5
     ],
     "P5": [
      0,
      5
     ]
    },
    "polys": [
     [
      "P0",
      "P1",
      "P2",
      "P3",
      "P4",
      "P5"
     ]
    ],
    "shade": [
     0
    ],
    "alt": "Figura w kształcie litery L na kratce."
   },
   "fields": [
    {
     "label": "Pole (cm²)",
     "ans": 18,
     "show": "18",
     "why": [
      [
       30,
       "To pole prostokąta 6 × 5. Figura ma wycięty róg 4 × 3."
      ]
     ]
    },
    {
     "label": "Obwód (cm)",
     "ans": 22,
     "show": "22",
     "why": [
      [
       18,
       "Policz wszystkie 6 boków: 6 + 2 + 4 + 3 + 2 + 5."
      ]
     ]
    }
   ],
   "sol": [
    "Pole: [[6 · 2 + 2 · 3 = 18]] cm².",
    "Obwód: [[6 + 2 + 4 + 3 + 2 + 5 = 22]] cm."
   ],
   "answer": "18 cm² i 22 cm.",
   "tip": "Obwód L-kształtu jest taki sam jak obwód prostokąta 6 × 5: 2 · 11 = 22.",
   "check": [
    "6*2 + 2*3 == 18",
    "6 + 2 + 4 + 3 + 2 + 5 == 22",
    "2*(6 + 5) == 22"
   ],
   "twin": {
    "type": "fields",
    "q": "Oblicz pole i obwód figury z rysunku. Bok kratki ma 1 cm.",
    "vis": {
     "type": "shape",
     "grid": true,
     "nodots": true,
     "names": {
      "P0": "",
      "P1": "",
      "P2": "",
      "P3": "",
      "P4": "",
      "P5": ""
     },
     "pts": {
      "P0": [
       0,
       0
      ],
      "P1": [
       5,
       0
      ],
      "P2": [
       5,
       4
      ],
      "P3": [
       3,
       4
      ],
      "P4": [
       3,
       2
      ],
      "P5": [
       0,
       2
      ]
     },
     "polys": [
      [
       "P0",
       "P1",
       "P2",
       "P3",
       "P4",
       "P5"
      ]
     ],
     "shade": [
      0
     ],
     "alt": "Figura na kratce: pas 5 na 2 i słupek 2 na 2 po prawej."
    },
    "fields": [
     {
      "label": "Pole (cm²)",
      "ans": 14,
      "show": "14"
     },
     {
      "label": "Obwód (cm)",
      "ans": 18,
      "show": "18"
     }
    ],
    "sol": [
     "Pole: [[5 · 2 + 2 · 2 = 14]] cm².",
     "Obwód: [[5 + 4 + 2 + 2 + 3 + 2 = 18]] cm."
    ],
    "answer": "14 cm² i 18 cm.",
    "tip": "Policz każdy bok po kolei.",
    "check": [
     "5*2 + 2*2 == 14",
     "5 + 4 + 2 + 2 + 3 + 2 == 18"
    ]
   }
  },
  {
   "id": "b4",
   "level": 2,
   "skills": [
    "P4"
   ],
   "type": "fields",
   "q": "Kwadrat ABCD ma bok 10 cm. Punkty K, L, M, N leżą na bokach i AK = BL = CM = DN = 4 cm. Oblicz pole czworokąta KLMN.",
   "vis": {
    "type": "shape",
    "pts": {
     "A": [
      0,
      0
     ],
     "B": [
      10,
      0
     ],
     "C": [
      10,
      10
     ],
     "D": [
      0,
      10
     ],
     "K": [
      4,
      0
     ],
     "L": [
      10,
      4
     ],
     "M": [
      6,
      10
     ],
     "N": [
      0,
      6
     ]
    },
    "polys": [
     [
      "A",
      "B",
      "C",
      "D"
     ],
     [
      "K",
      "L",
      "M",
      "N"
     ]
    ],
    "shade": [
     1
    ],
    "sides": [
     [
      "A",
      "K",
      "4"
     ],
     [
      "B",
      "L",
      "4"
     ],
     [
      "C",
      "M",
      "4"
     ],
     [
      "D",
      "N",
      "4"
     ]
    ],
    "alt": "Kwadrat ABCD o boku 10. Punkty K, L, M, N leżą na bokach, AK = BL = CM = DN = 4. Czworokąt KLMN jest zamalowany."
   },
   "fields": [
    {
     "label": "Pole (cm²)",
     "ans": 52,
     "show": "52",
     "why": [
      [
       76,
       "Każdy trójkąt w rogu ma przyprostokątne 4 i 6, czyli pole 12, a nie 6."
      ],
      [
       48,
       "48 to suma pól trójkątów. Odejmij ją od pola kwadratu."
      ]
     ]
    }
   ],
   "sol": [
    "Kwadrat: [[100]] cm².",
    "Każdy trójkąt w rogu: [[4 · 6 : 2 = 12]] cm², razem [[48]] cm².",
    "KLMN: [[100 − 48 = 52]] cm²."
   ],
   "answer": "52 cm².",
   "tip": "Takie zadanie za 3 punkty było na egzaminie w 2025 roku.",
   "check": [
    "10*10 - 4*(4*6/2) == 52"
   ],
   "twin": {
    "type": "fields",
    "q": "Kwadrat ABCD ma bok 12 cm. Punkty K, L, M, N leżą na bokach i AK = BL = CM = DN = 3 cm. Oblicz pole czworokąta KLMN.",
    "vis": {
     "type": "shape",
     "pts": {
      "A": [
       0,
       0
      ],
      "B": [
       12,
       0
      ],
      "C": [
       12,
       12
      ],
      "D": [
       0,
       12
      ],
      "K": [
       3,
       0
      ],
      "L": [
       12,
       3
      ],
      "M": [
       9,
       12
      ],
      "N": [
       0,
       9
      ]
     },
     "polys": [
      [
       "A",
       "B",
       "C",
       "D"
      ],
      [
       "K",
       "L",
       "M",
       "N"
      ]
     ],
     "shade": [
      1
     ],
     "sides": [
      [
       "A",
       "K",
       "3"
      ],
      [
       "B",
       "L",
       "3"
      ],
      [
       "C",
       "M",
       "3"
      ],
      [
       "D",
       "N",
       "3"
      ]
     ],
     "alt": "Kwadrat ABCD o boku 12. Punkty K, L, M, N leżą na bokach, AK = BL = CM = DN = 3. Czworokąt KLMN jest zamalowany."
    },
    "fields": [
     {
      "label": "Pole (cm²)",
      "ans": 90,
      "show": "90",
      "why": [
       [
        54,
        "54 to suma pól trójkątów. Odejmij ją od 144."
       ]
      ]
     }
    ],
    "sol": [
     "Trójkąt w rogu: [[3 · 9 : 2 = 13,5]] cm², razem [[54]] cm².",
     "KLMN: [[144 − 54 = 90]] cm²."
    ],
    "answer": "90 cm².",
    "tip": "Kwadrat minus 4 trójkąty.",
    "check": [
     "144 - 4*F(3*9, 2) == 90"
    ]
   }
  },
  {
   "id": "b5",
   "level": 2,
   "skills": [
    "P5"
   ],
   "type": "abcd",
   "q": "Działka ma powierzchnię 0,35 ha. Ile to metrów kwadratowych?",
   "opts": [
    "350 m²",
    "35 000 m²",
    "35 m²",
    "3 500 m²"
   ],
   "ok": 3,
   "why": {
    "A": "To byłyby ary razy 10. 1 ha = 10 000 m².",
    "B": "O jedno zero za dużo: 0,35 · 10 000 = 3 500.",
    "C": "35 to liczba arów, a nie m²."
   },
   "sol": [
    "[[0,35 · 10 000 = 3 500]] m². To też [[35]] arów."
   ],
   "answer": "D, 3 500 m².",
   "tip": "1 ha = 10 000 m².",
   "check": [
    "F('0.35')*10000 == 3500"
   ],
   "twin": {
    "type": "abcd",
    "q": "Pokój ma powierzchnię 18 m². Ile to decymetrów kwadratowych?",
    "opts": [
     "180 dm²",
     "1 800 dm²",
     "18 000 dm²",
     "180 000 dm²"
    ],
    "ok": 1,
    "why": {
     "A": "To przelicznik jak dla długości. 1 m² = 100 dm².",
     "C": "O jedno zero za dużo.",
     "D": "To centymetry kwadratowe, a nie decymetry."
    },
    "sol": [
     "[[18 · 100 = 1 800]] dm²."
    ],
    "answer": "B, 1 800 dm².",
    "tip": "1 m² = 100 dm².",
    "check": [
     "18*100 == 1800"
    ]
   }
  },
  {
   "id": "b6",
   "level": 2,
   "skills": [
    "P6"
   ],
   "type": "fields",
   "q": "Koło roweru ma średnicę 60 cm. Ile metrów przejedzie rower, gdy koło obróci się 500 razy? Przyjmij π ≈ 3,14.",
   "fields": [
    {
     "label": "Droga (m)",
     "ans": 942,
     "show": "942",
     "why": [
      [
       471,
       "60 cm to średnica: jeden obrót to π · 60, a nie π · 30."
      ],
      [
       1884,
       "Przy średnicy nie mnożysz przez 2: L = πd."
      ]
     ]
    }
   ],
   "sol": [
    "Jeden obrót: [[π · 60 ≈ 188,4]] cm.",
    "500 obrotów: [[500 · 188,4 = 94 200]] cm [[= 942]] m."
   ],
   "answer": "942 m.",
   "tip": "100 cm = 1 m.",
   "check": [
    "60*F('3.14') == F('188.4')",
    "500*F('188.4') == 94200"
   ],
   "twin": {
    "type": "fields",
    "q": "Koło hulajnogi ma średnicę 20 cm. Ile metrów przejedzie hulajnoga, gdy koło obróci się 1 000 razy? Przyjmij π ≈ 3,14.",
    "fields": [
     {
      "label": "Droga (m)",
      "ans": 628,
      "show": "628",
      "why": [
       [
        314,
        "20 cm to średnica: L = π · 20."
       ]
      ]
     }
    ],
    "sol": [
     "Jeden obrót: [[π · 20 ≈ 62,8]] cm.",
     "[[1 000 · 62,8 = 62 800]] cm [[= 628]] m."
    ],
    "answer": "628 m.",
    "tip": "L = πd.",
    "check": [
     "1000*20*F('3.14') == 62800"
    ]
   }
  },
  {
   "id": "b7",
   "level": 2,
   "skills": [
    "P6",
    "P7"
   ],
   "type": "fields",
   "q": "Okrąg ma długość 18π cm. Oblicz promień i pole koła ograniczonego tym okręgiem. Przyjmij π ≈ 3,14.",
   "fields": [
    {
     "label": "r (cm)",
     "ans": 9,
     "show": "9",
     "why": [
      [
       18,
       "18 to średnica: 2πr = 18π, więc r = 9."
      ]
     ]
    },
    {
     "label": "P ≈ (cm²)",
     "ans": 254.34,
     "show": "254,34",
     "why": [
      [
       1017.36,
       "Wstawiono średnicę zamiast promienia."
      ]
     ]
    }
   ],
   "sol": [
    "[[2πr = 18π]], [[r = 9]] cm.",
    "[[P = 81π ≈ 81 · 3,14 = 254,34]] cm²."
   ],
   "answer": "r = 9 cm, P = 81π cm², czyli ok. 254,34 cm².",
   "tip": "Z długości promień, z promienia pole.",
   "check": [
    "2*9 == 18",
    "81*F('3.14') == F('254.34')"
   ],
   "twin": {
    "type": "fields",
    "q": "Koło ma pole 36π cm². Oblicz promień i długość okręgu, który ogranicza to koło. Przyjmij π ≈ 3,14.",
    "fields": [
     {
      "label": "r (cm)",
      "ans": 6,
      "show": "6",
      "why": [
       [
        18,
        "r² = 36, więc r = 6, a nie 36 : 2."
       ]
      ]
     },
     {
      "label": "L ≈ (cm)",
      "ans": 37.68,
      "show": "37,68"
     }
    ],
    "sol": [
     "[[r² = 36]], [[r = 6]] cm.",
     "[[L = 12π ≈ 37,68]] cm."
    ],
    "answer": "r = 6 cm, L = 12π cm, czyli ok. 37,68 cm.",
    "tip": "Z pola: szukasz liczby, która do kwadratu daje 36.",
    "check": [
     "6**2 == 36",
     "12*F('3.14') == F('37.68')"
    ]
   }
  },
  {
   "id": "c1",
   "level": 3,
   "skills": [
    "P4",
    "P7"
   ],
   "type": "self",
   "q": "Ogród ma kształt prostokąta 20 m na 12 m. W środku jest okrągła fontanna o średnicy 4 m, a reszta ogrodu to trawnik. Na 40 m² trawnika potrzeba 1 kg nasion, a nasiona sprzedaje się w paczkach po 1 kg. Ile paczek trzeba kupić? Przyjmij π ≈ 3,14. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono pole fontanny: r = 2 m, P = 4π ≈ 12,56 m².",
     "pts": 1
    },
    {
     "t": "Obliczono pole trawnika: 240 − 12,56 = 227,44 m².",
     "pts": 1
    },
    {
     "t": "Obliczono liczbę paczek z zaokrągleniem w górę: 227,44 : 40 ≈ 5,7, czyli 6 paczek.",
     "pts": 1
    }
   ],
   "sol": [
    "Ogród: [[20 · 12 = 240]] m². Fontanna: [[r = 2]] m, [[P = 4π ≈ 12,56]] m².",
    "Trawnik: [[240 − 12,56 = 227,44]] m².",
    "Nasiona: [[227,44 : 40 = 5,686]] kg, więc [[6]] paczek."
   ],
   "answer": "6 paczek.",
   "tip": "Paczek nie kupuje się w kawałkach, więc zaokrąglasz w górę. Podobne zadanie (trapez i koszt) było na egzaminie w 2026 roku.",
   "check": [
    "4*F('3.14') == F('12.56')",
    "240 - F('12.56') == F('227.44')",
    "F('227.44')/40 == F('5.686')"
   ],
   "twin": {
    "type": "self",
    "q": "Ogród ma kształt prostokąta 25 m na 16 m. W środku jest okrągły staw o średnicy 6 m, a reszta to trawnik. 1 kg nasion wystarcza na 50 m² trawnika, a nasiona są w paczkach po 1 kg. Ile paczek trzeba kupić? Przyjmij π ≈ 3,14. Zapisz obliczenia.",
    "criteria": [
     {
      "t": "Obliczono pole stawu: 9π ≈ 28,26 m².",
      "pts": 1
     },
     {
      "t": "Obliczono pole trawnika: 400 − 28,26 = 371,74 m².",
      "pts": 1
     },
     {
      "t": "Podano liczbę paczek: 371,74 : 50 ≈ 7,4, czyli 8 paczek.",
      "pts": 1
     }
    ],
    "sol": [
     "Staw: [[9π ≈ 28,26]] m².",
     "Trawnik: [[400 − 28,26 = 371,74]] m².",
     "[[371,74 : 50 ≈ 7,43]], więc [[8]] paczek."
    ],
    "answer": "8 paczek.",
    "tip": "Zaokrąglasz w górę.",
    "check": [
     "9*F('3.14') == F('28.26')",
     "400 - F('28.26') == F('371.74')"
    ]
   }
  },
  {
   "id": "c2",
   "level": 3,
   "skills": [
    "P2",
    "P3"
   ],
   "type": "self",
   "q": "Przekątne rombu ABCD mają długości AC = 8 dm i BD = 10 dm. Przekątną BD przedłużono do punktu E tak, że odcinek BE jest dwa razy dłuższy od tej przekątnej. Oblicz pole trójkąta CDE. (Zadanie ma dwie odpowiedzi.)",
   "criteria": [
    {
     "t": "Zauważono, że wysokość trójkąta CDE opuszczona z C na prostą BD ma 4 dm (połowa AC), i obliczono pole w jednym przypadku.",
     "pts": 1
    },
    {
     "t": "Rozważono oba położenia punktu E i podano obie odpowiedzi: 20 dm² i 60 dm².",
     "pts": 1
    }
   ],
   "sol": [
    "Przekątne rombu są prostopadłe i dzielą się na połowy, więc odległość C od prostej BD to [[8 : 2 = 4]] dm.",
    "BE = 20 dm. Jeśli E leży za punktem D, to [[DE = 20 − 10 = 10]] dm i [[P = 10 · 4 : 2 = 20]] dm².",
    "Jeśli E leży za punktem B, to [[DE = 10 + 20 = 30]] dm i [[P = 30 · 4 : 2 = 60]] dm²."
   ],
   "answer": "20 dm² albo 60 dm².",
   "tip": "To przykład z podstawy programowej. Punkt na prostej może leżeć po dwóch stronach.",
   "check": [
    "10*4/2 == 20",
    "30*4/2 == 60"
   ],
   "twin": {
    "type": "self",
    "q": "Przekątne rombu ABCD mają długości AC = 6 cm i BD = 12 cm. Przekątną BD przedłużono do punktu E tak, że BE = 18 cm. Oblicz pole trójkąta CDE. (Zadanie ma dwie odpowiedzi.)",
    "criteria": [
     {
      "t": "Wysokość z C na prostą BD: 3 cm, pole w jednym przypadku.",
      "pts": 1
     },
     {
      "t": "Obie odpowiedzi: 9 cm² i 45 cm².",
      "pts": 1
     }
    ],
    "sol": [
     "Wysokość: [[3]] cm.",
     "E za D: [[DE = 6]] cm, [[P = 9]] cm².",
     "E za B: [[DE = 30]] cm, [[P = 45]] cm²."
    ],
    "answer": "9 cm² albo 45 cm².",
    "tip": "Dwa położenia punktu E.",
    "check": [
     "6*3/2 == 9",
     "30*3/2 == 45"
    ]
   }
  },
  {
   "id": "c3",
   "level": 3,
   "skills": [
    "P7",
    "P4"
   ],
   "type": "self",
   "q": "Z kwadratowej blachy o boku 40 cm wycięto 4 jednakowe koła o największym możliwym promieniu (2 rzędy po 2 koła). Ile cm² blachy zostało jako odpad? Przyjmij π ≈ 3,14. Zapisz obliczenia.",
   "vis": {
    "type": "shape",
    "pts": {
     "A": [
      0,
      0
     ],
     "B": [
      4,
      0
     ],
     "C": [
      4,
      4
     ],
     "D": [
      0,
      4
     ],
     "O1": [
      1,
      1
     ],
     "O2": [
      3,
      1
     ],
     "O3": [
      1,
      3
     ],
     "O4": [
      3,
      3
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
    "circles": [
     {
      "c": "O1",
      "r": 1,
      "sh": true
     },
     {
      "c": "O2",
      "r": 1,
      "sh": true
     },
     {
      "c": "O3",
      "r": 1,
      "sh": true
     },
     {
      "c": "O4",
      "r": 1,
      "sh": true
     }
    ],
    "names": {
     "A": "",
     "B": "",
     "C": "",
     "D": "",
     "O1": "",
     "O2": "",
     "O3": "",
     "O4": ""
    },
    "nodots": true,
    "sides": [
     [
      "A",
      "B",
      "40 cm"
     ]
    ],
    "alt": "Kwadrat o boku 40 cm z czterema kołami ułożonymi w 2 rzędy po 2."
   },
   "criteria": [
    {
     "t": "Obliczono promień kół: 40 : 4 = 10 cm i pole czterech kół: 400π ≈ 1 256 cm².",
     "pts": 1
    },
    {
     "t": "Obliczono odpad: 1 600 − 1 256 = 344 cm².",
     "pts": 1
    }
   ],
   "sol": [
    "Średnica koła: [[40 : 2 = 20]] cm, promień [[10]] cm.",
    "Cztery koła: [[4 · 100π = 400π ≈ 1 256]] cm².",
    "Odpad: [[1 600 − 1 256 = 344]] cm²."
   ],
   "answer": "Ok. 344 cm².",
   "tip": "Dwa koła w rzędzie: dwie średnice to bok kwadratu.",
   "check": [
    "400*F('3.14') == 1256",
    "1600 - 1256 == 344"
   ],
   "twin": {
    "type": "self",
    "q": "Z prostokątnej blachy 60 cm na 30 cm wycięto 2 jednakowe koła o największym możliwym promieniu. Ile cm² blachy zostało jako odpad? Przyjmij π ≈ 3,14. Zapisz obliczenia.",
    "criteria": [
     {
      "t": "Promień 15 cm i pole dwóch kół: 450π ≈ 1 413 cm².",
      "pts": 1
     },
     {
      "t": "Odpad: 1 800 − 1 413 = 387 cm².",
      "pts": 1
     }
    ],
    "sol": [
     "[[r = 15]] cm, dwa koła: [[2 · 225π = 450π ≈ 1 413]] cm².",
     "Odpad: [[1 800 − 1 413 = 387]] cm²."
    ],
    "answer": "Ok. 387 cm².",
    "tip": "Średnica = krótszy bok.",
    "check": [
     "450*F('3.14') == 1413",
     "1800 - 1413 == 387"
    ]
   }
  },
  {
   "id": "c4",
   "level": 3,
   "skills": [
    "P5",
    "P3"
   ],
   "type": "fields",
   "q": "Trójkąt ma podstawę długości 1 km i wysokość 1 mm. Oblicz jego pole w m². (Przykład z podstawy programowej.)",
   "fields": [
    {
     "label": "Pole (m²)",
     "ans": 0.5,
     "show": "0,5",
     "why": [
      [
       500,
       "1 mm to 0,001 m, a nie 1 m."
      ],
      [
       1,
       "Zapomniano podzielić przez 2."
      ]
     ]
    }
   ],
   "sol": [
    "[[1 km = 1 000 m]], [[1 mm = 0,001 m]].",
    "[[P = 1 000 · 0,001 : 2 = 0,5]] m²."
   ],
   "answer": "0,5 m².",
   "tip": "Najpierw obie długości w tych samych jednostkach.",
   "check": [
    "1000*F('0.001')/2 == F('0.5')"
   ],
   "twin": {
    "type": "fields",
    "q": "Pas farby na drodze ma kształt prostokąta długości 2 km i szerokości 5 cm. Oblicz jego pole w m².",
    "fields": [
     {
      "label": "Pole (m²)",
      "ans": 100,
      "show": "100",
      "why": [
       [
        10000,
        "5 cm to 0,05 m, a nie 5 m."
       ]
      ]
     }
    ],
    "sol": [
     "[[2 000 m · 0,05 m = 100]] m²."
    ],
    "answer": "100 m².",
    "tip": "5 cm = 0,05 m.",
    "check": [
     "2000*F('0.05') == 100"
    ]
   }
  },
  {
   "id": "c5",
   "level": 3,
   "skills": [
    "P6",
    "P1"
   ],
   "type": "fields",
   "q": "Bieżnia składa się z dwóch prostych odcinków po 100 m i dwóch półokręgów o średnicy 64 m. Oblicz długość jednego okrążenia. Przyjmij π ≈ 3,14.",
   "vis": {
    "type": "shape",
    "pts": {
     "A": [
      0,
      0
     ],
     "B": [
      10,
      0
     ],
     "C": [
      10,
      6.4
     ],
     "D": [
      0,
      6.4
     ],
     "R": [
      10,
      3.2
     ],
     "L": [
      0,
      3.2
     ]
    },
    "polys": [
     [
      "A",
      "B"
     ],
     [
      "D",
      "C"
     ]
    ],
    "arcs": [
     {
      "c": "R",
      "r": 3.2,
      "a1": -90,
      "a2": 90,
      "open": true
     },
     {
      "c": "L",
      "r": 3.2,
      "a1": 90,
      "a2": 270,
      "open": true
     }
    ],
    "segs": [
     [
      "B",
      "C"
     ]
    ],
    "names": {
     "A": "",
     "B": "",
     "C": "",
     "D": "",
     "R": "",
     "L": ""
    },
    "nodots": true,
    "sides": [
     [
      "A",
      "B",
      "100 m"
     ],
     [
      "B",
      "C",
      "64 m",
      -26
     ]
    ],
    "alt": "Bieżnia: dwa odcinki po 100 m i dwa półokręgi o średnicy 64 m."
   },
   "fields": [
    {
     "label": "Długość (m)",
     "ans": 400.96,
     "show": "400,96",
     "why": [
      [
       601.92,
       "Dwa półokręgi to jeden cały okrąg: π · 64, a nie 2 · π · 64."
      ],
      [
       300.48,
       "Dwa półokręgi to cały okrąg, a nie połowa."
      ]
     ]
    }
   ],
   "sol": [
    "Dwa półokręgi to jeden okrąg: [[π · 64 ≈ 200,96]] m.",
    "Okrążenie: [[200 + 200,96 = 400,96]] m."
   ],
   "answer": "Ok. 400,96 m.",
   "tip": "Stąd bieżnia „400 m”.",
   "check": [
    "64*F('3.14') == F('200.96')",
    "200 + F('200.96') == F('400.96')"
   ],
   "twin": {
    "type": "fields",
    "q": "Tor składa się z dwóch prostych odcinków po 80 m i dwóch półokręgów o średnicy 50 m. Oblicz długość jednego okrążenia. Przyjmij π ≈ 3,14.",
    "fields": [
     {
      "label": "Długość (m)",
      "ans": 317,
      "show": "317",
      "why": [
       [
        474,
        "Dwa półokręgi to jeden okrąg: π · 50."
       ]
      ]
     }
    ],
    "sol": [
     "[[π · 50 ≈ 157]] m.",
     "[[160 + 157 = 317]] m."
    ],
    "answer": "Ok. 317 m.",
    "tip": "Dwa półokręgi = okrąg.",
    "check": [
     "50*F('3.14') == 157",
     "160 + 157 == 317"
    ]
   }
  }
 ],
 "test": [
  {
   "id": "t1",
   "skills": [
    "P1"
   ],
   "type": "fields",
   "q": "Trapez równoramienny ma podstawy 12 cm i 6 cm, a jego ramię ma 5 cm. Oblicz obwód trapezu.",
   "fields": [
    {
     "label": "Obwód (cm)",
     "ans": 28,
     "show": "28"
    }
   ],
   "sol": [
    "[[12 + 6 + 5 + 5 = 28]] cm."
   ],
   "answer": "28 cm.",
   "tip": "Dwa ramiona.",
   "check": [
    "12 + 6 + 5 + 5 == 28"
   ],
   "pts": 1
  },
  {
   "id": "t2",
   "skills": [
    "P2"
   ],
   "type": "abcd",
   "q": "Przekątne rombu mają 12 cm i 7 cm. Pole rombu jest równe:",
   "opts": [
    "84 cm²",
    "42 cm²",
    "19 cm²",
    "21 cm²"
   ],
   "ok": 1,
   "why": {
    "A": "Brak dzielenia przez 2.",
    "C": "To suma przekątnych.",
    "D": "Podzielono przez 4 zamiast przez 2."
   },
   "sol": [
    "[[12 · 7 : 2 = 42]] cm²."
   ],
   "answer": "B, 42 cm².",
   "tip": "e · f : 2.",
   "check": [
    "12*7/2 == 42"
   ],
   "pts": 1
  },
  {
   "id": "t3",
   "skills": [
    "P2",
    "P3"
   ],
   "type": "fields",
   "q": "Równoległobok ma boki 10 cm i 8 cm. Wysokość opuszczona na bok 10 cm ma 6 cm. Oblicz pole równoległoboku i wysokość opuszczoną na bok 8 cm.",
   "fields": [
    {
     "label": "Pole (cm²)",
     "ans": 60,
     "show": "60"
    },
    {
     "label": "Druga wysokość (cm)",
     "ans": 7.5,
     "show": "7,5"
    }
   ],
   "sol": [
    "[[P = 10 · 6 = 60]] cm².",
    "[[8 · h = 60]], [[h = 7,5]] cm."
   ],
   "answer": "60 cm² i 7,5 cm.",
   "tip": "Pole to samo, liczone z dwóch boków.",
   "check": [
    "10*6 == 60",
    "8*F('7.5') == 60"
   ],
   "pts": 1
  },
  {
   "id": "t4",
   "skills": [
    "P3"
   ],
   "type": "fields",
   "q": "Trapez ma podstawy 13 cm i 7 cm oraz wysokość 8 cm. Oblicz jego pole.",
   "fields": [
    {
     "label": "Pole (cm²)",
     "ans": 80,
     "show": "80"
    }
   ],
   "sol": [
    "[[(13 + 7) · 8 : 2 = 80]] cm²."
   ],
   "answer": "80 cm².",
   "tip": "(a + b) · h : 2.",
   "check": [
    "(13 + 7)*8/2 == 80"
   ],
   "pts": 1
  },
  {
   "id": "t5",
   "skills": [
    "P4"
   ],
   "type": "fields",
   "q": "Oblicz pole trójkąta z rysunku. Bok kratki ma 1 cm.",
   "vis": {
    "type": "shape",
    "grid": true,
    "nodots": true,
    "names": {
     "P0": "",
     "P1": "",
     "P2": ""
    },
    "pts": {
     "P0": [
      0,
      0
     ],
     "P1": [
      6,
      2
     ],
     "P2": [
      2,
      5
     ]
    },
    "polys": [
     [
      "P0",
      "P1",
      "P2"
     ]
    ],
    "shade": [
     0
    ],
    "alt": "Trójkąt na kratce o wierzchołkach (0, 0), (6, 2) i (2, 5)."
   },
   "fields": [
    {
     "label": "Pole (cm²)",
     "ans": 13,
     "show": "13"
    }
   ],
   "sol": [
    "Prostokąt dookoła: [[6 · 5 = 30]] cm².",
    "Trójkąty w rogach: [[6 · 2 : 2 = 6]], [[4 · 3 : 2 = 6]], [[2 · 5 : 2 = 5]].",
    "Pole: [[30 − 17 = 13]] cm²."
   ],
   "answer": "13 cm².",
   "tip": "Uzupełnij do prostokąta.",
   "check": [
    "30 - (6 + 6 + 5) == 13"
   ],
   "pts": 1
  },
  {
   "id": "t6",
   "skills": [
    "P5"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "2,5 ha = 25 000 m².",
     "ok": "P"
    },
    {
     "t": "4 m² = 400 cm².",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[2,5 · 10 000 = 25 000]]. Prawda.",
    "<b>Zdanie 2.</b> [[4 · 10 000 = 40 000]] cm². Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Przeliczniki pola co 100.",
   "check": [
    "F('2.5')*10000 == 25000",
    "4*10000 == 40000"
   ],
   "pts": 1
  },
  {
   "id": "t7",
   "skills": [
    "P6"
   ],
   "type": "abcd",
   "q": "Okrąg ma długość 36π cm. Promień tego okręgu jest równy:",
   "opts": [
    "36 cm",
    "6 cm",
    "9 cm",
    "18 cm"
   ],
   "ok": 3,
   "why": {
    "A": "36 cm to średnica.",
    "B": "6 cm byłoby promieniem koła o polu 36π. Tu mamy długość okręgu.",
    "C": "9 cm to połowa promienia."
   },
   "sol": [
    "[[2πr = 36π]], [[r = 18]] cm."
   ],
   "answer": "D, 18 cm.",
   "tip": "L = 2πr.",
   "check": [
    "2*18 == 36"
   ],
   "pts": 1
  },
  {
   "id": "t8",
   "skills": [
    "P7"
   ],
   "type": "fields",
   "q": "Oblicz pole koła o średnicy 14 cm. Przyjmij π ≈ 3,14.",
   "fields": [
    {
     "label": "P ≈ (cm²)",
     "ans": 153.86,
     "show": "153,86"
    }
   ],
   "sol": [
    "[[r = 7]] cm, [[P = 49π ≈ 153,86]] cm²."
   ],
   "answer": "49π cm², czyli ok. 153,86 cm².",
   "tip": "Najpierw promień.",
   "check": [
    "49*F('3.14') == F('153.86')"
   ],
   "pts": 1
  },
  {
   "id": "t9",
   "skills": [
    "P7"
   ],
   "type": "tn",
   "q": "Czy koło o promieniu 2 razy większym ma 2 razy większe pole? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "N",
   "reasons": {
    "1": "promień podnosimy do kwadratu, więc pole jest 4 razy większe",
    "2": "pole zależy tylko od liczby π",
    "3": "pole jest 2 razy większe tylko dla r = 1"
   },
   "okReason": "1",
   "sol": [
    "r = 1: [[P = π]]. r = 2: [[P = 4π]]. Pole jest [[4]] razy większe."
   ],
   "answer": "N, uzasadnienie 1.",
   "tip": "Sprawdź na przykładzie.",
   "check": [
    "2**2 == 4"
   ],
   "pts": 1
  },
  {
   "id": "t10",
   "skills": [
    "P6"
   ],
   "type": "abcd",
   "q": "Koło o średnicy 50 cm obróciło się 100 razy. Jaką drogę przebyło? Przyjmij π ≈ 3,14.",
   "opts": [
    "157 m",
    "78,5 m",
    "15,7 m",
    "1 570 m"
   ],
   "ok": 0,
   "why": {
    "B": "To wynik dla π · 25. 50 cm to średnica.",
    "C": "Źle zamienione jednostki: 15 700 cm = 157 m.",
    "D": "Źle zamienione jednostki: 100 cm = 1 m."
   },
   "sol": [
    "Jeden obrót: [[π · 50 ≈ 157]] cm.",
    "100 obrotów: [[15 700]] cm [[= 157]] m."
   ],
   "answer": "A, 157 m.",
   "tip": "L = πd.",
   "check": [
    "100*50*F('3.14') == 15700"
   ],
   "pts": 1
  },
  {
   "id": "t11",
   "skills": [
    "P4",
    "P3"
   ],
   "type": "self",
   "q": "Kwadrat ABCD ma bok 12 cm. Punkty K, L, M, N leżą na bokach AB, BC, CD, DA i AK = BL = CM = DN = 4 cm. Oblicz pole czworokąta KLMN. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono pole jednego trójkąta w rogu: 4 · 8 : 2 = 16 cm² (albo wszystkich: 64 cm²).",
     "pts": 1
    },
    {
     "t": "Obliczono pole KLMN: 144 − 64 = 80 cm².",
     "pts": 1
    }
   ],
   "sol": [
    "Trójkąt w rogu: [[4 · 8 : 2 = 16]] cm², cztery: [[64]] cm².",
    "KLMN: [[144 − 64 = 80]] cm²."
   ],
   "answer": "80 cm².",
   "tip": "Kwadrat minus 4 trójkąty.",
   "check": [
    "144 - 4*(4*8/2) == 80"
   ],
   "pts": 2
  },
  {
   "id": "t12",
   "skills": [
    "P7",
    "P5"
   ],
   "type": "self",
   "q": "Okrągły klomb o średnicy 6 m obsadzono bratkami: 9 sztuk na każdy metr kwadratowy. Ile bratków trzeba kupić? Przyjmij π ≈ 3,14. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono pole klombu: r = 3 m, P = 9π ≈ 28,26 m².",
     "pts": 1
    },
    {
     "t": "Obliczono liczbę bratków z zaokrągleniem w górę: 9 · 28,26 = 254,34, czyli 255.",
     "pts": 1
    }
   ],
   "sol": [
    "[[r = 3]] m, [[P = 9π ≈ 28,26]] m².",
    "[[9 · 28,26 = 254,34]], więc [[255]] bratków."
   ],
   "answer": "255 bratków.",
   "tip": "Nie kupisz części kwiatka.",
   "check": [
    "9*F('3.14') == F('28.26')",
    "9*F('28.26') == F('254.34')"
   ],
   "pts": 2
  }
 ],
 "test_minutes": 35,
 "pass": 12,
 "dzial": "Dział 3: Geometria"
};
