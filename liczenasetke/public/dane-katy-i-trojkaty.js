/* Wygenerowane przez zbuduj.py z tresc/katy-i-trojkaty.py. Nie edytuj ręcznie. */
window.TEMAT = {
 "slug": "katy-i-trojkaty",
 "title": "Kąty, trójkąty i czworokąty",
 "sign": "∠",
 "lead": "Kąty przyległe i wierzchołkowe, kąty przy prostych równoległych, kąty w trójkątach i czworokątach, nierówność trójkąta i przystawanie. Kąty trapezu były w zadaniu za 2 punkty na egzaminie w 2025 roku.",
 "goals": {
  "learn": "6 umiejętności: kąty przyległe i wierzchołkowe, kąty przy prostych równoległych, kąty w trójkącie, kąty w czworokątach, nierówność trójkąta, przystawanie i uzasadnienia.",
  "prereq": "Odejmowanie i dzielenie liczb oraz proste równania (Dział 2). Rozgrzewka na początku to sprawdzi.",
  "goal": "Minimum 12 z 14 punktów w teście na koniec tematu."
 },
 "skills": {
  "K1": "Kąty przyległe i wierzchołkowe",
  "K2": "Kąty przy prostych równoległych",
  "K3": "Kąty w trójkącie",
  "K4": "Czworokąty i ich kąty",
  "K5": "Nierówność trójkąta",
  "K6": "Przystawanie i uzasadnienia"
 },
 "lessons": [
  {
   "title": "Kąty przyległe i wierzchołkowe",
   "skills": [
    "K1"
   ],
   "intro": "Gdy dwie proste się przecinają, powstają 4 kąty. Wystarczy znać jeden, żeby obliczyć wszystkie.",
   "rule": {
    "t": "Kąty przyległe leżą obok siebie na jednej prostej i razem mają 180°. Kąty wierzchołkowe leżą naprzeciw siebie i są równe.",
    "f": [
     "przyległe: α + β = 180°",
     "wierzchołkowe: równe",
     "kąt prosty 90°, półpełny 180°, pełny 360°"
    ],
    "e": "Nie myl 180° z 90°. Do 90° dopełniają się tylko kąty, które razem tworzą kąt prosty."
   },
   "visual": {
    "type": "shape",
    "pts": {
     "A": [
      -4,
      0
     ],
     "B": [
      4,
      0
     ],
     "C": [
      -2,
      -3.5
     ],
     "D": [
      2,
      3.5
     ],
     "O": [
      0,
      0
     ]
    },
    "polys": [
     [
      "A",
      "B"
     ],
     [
      "C",
      "D"
     ]
    ],
    "angles": [
     {
      "at": "O",
      "from": "B",
      "to": "D",
      "t": "60°"
     }
    ],
    "alt": "Proste AB i CD przecinają się w punkcie O. Kąt BOD ma 60°.",
    "caption": "Kąt BOD ma 60°. Wierzchołkowy AOC też ma 60°, a przyległe AOD i BOC po 120°"
   },
   "example": {
    "q": "Proste AB i CD przecinają się w punkcie O. Kąt BOD ma 60°. Oblicz pozostałe kąty.",
    "steps": [
     "Kąt AOC jest wierzchołkowy do kąta BOD, więc ma 60°.",
     "Kąt AOD jest przyległy do kąta BOD: 180° − 60° = 120°.",
     "Kąt BOC jest wierzchołkowy do kąta AOD, więc też ma 120°."
    ],
    "result": "60°, 120°, 60° i 120°.",
    "tip": "Sprawdzenie: 60° + 120° + 60° + 120° = 360°, czyli kąt pełny.",
    "check": [
     "180 - 60 == 120",
     "60 + 120 + 60 + 120 == 360"
    ]
   },
   "you": [
    {
     "id": "y1",
     "type": "fields",
     "q": "Kąty α i β są przyległe. Kąt α ma 42°. Oblicz kąt β.",
     "fields": [
      {
       "label": "β (°)",
       "ans": 138,
       "show": "138",
       "why": [
        [
         48,
         "48° dopełnia do 90°. Kąty przyległe dają razem 180°."
        ]
       ]
      }
     ],
     "sol": [
      "[[β = 180° − 42° = 138°]]."
     ],
     "answer": "138°.",
     "tip": "Przyległe: razem 180°.",
     "check": [
      "180 - 42 == 138"
     ]
    },
    {
     "id": "y1b",
     "type": "pf",
     "q": "Dwie proste przecinają się. Jeden z kątów ma 90°. Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "Wszystkie cztery kąty mają po 90°.",
       "ok": "P"
      },
      {
       "t": "Suma wszystkich czterech kątów wynosi 180°.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> Przyległy: [[180° − 90° = 90°]], wierzchołkowe równe. Prawda.",
      "<b>Zdanie 2.</b> Suma to [[4 · 90° = 360°]]. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "Cztery kąty wokół punktu to zawsze 360°.",
     "check": [
      "180 - 90 == 90",
      "4*90 == 360"
     ]
    }
   ]
  },
  {
   "title": "Kąty przy prostych równoległych",
   "skills": [
    "K2"
   ],
   "intro": "Gdy prosta przecina dwie proste równoległe, powstaje 8 kątów, ale mają tylko dwie różne miary. Te dwie miary razem dają 180°.",
   "rule": {
    "t": "Kąty odpowiadające (w tym samym położeniu przy obu prostych) są równe. Kąty naprzemianległe (po przeciwnych stronach, między prostymi) też są równe.",
    "f": [
     "odpowiadające: równe",
     "naprzemianległe: równe",
     "każde dwa „różne” kąty: razem 180°"
    ],
    "e": "Te zasady działają tylko dla prostych równoległych. W trapezie: kąty przy tym samym ramieniu dają 180°."
   },
   "visual": {
    "type": "shape",
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
      -3,
      3
     ],
     "D": [
      5,
      3
     ],
     "P": [
      -0.5,
      -1.5
     ],
     "Q": [
      3.5,
      4.5
     ],
     "E": [
      0.5,
      0
     ],
     "G": [
      2.5,
      3
     ]
    },
    "polys": [
     [
      "A",
      "B"
     ],
     [
      "C",
      "D"
     ],
     [
      "P",
      "Q"
     ]
    ],
    "hide": [
     "A",
     "C",
     "P",
     "E",
     "G"
    ],
    "names": {
     "B": "k",
     "D": "l",
     "Q": "m"
    },
    "angles": [
     {
      "at": "E",
      "from": "B",
      "to": "G",
      "t": "56°"
     },
     {
      "at": "G",
      "from": "Q",
      "to": "C",
      "t": "x"
     }
    ],
    "alt": "Proste równoległe k i l przecięte prostą m. Przy dolnej prostej kąt 56°, przy górnej kąt x po drugiej stronie.",
    "caption": "Kąt x odpowiada kątowi, który jest przyległy do 56°, więc x = 180° − 56° = 124°"
   },
   "example": {
    "q": "Proste k i l są równoległe, a prosta m je przecina. Przy prostej k jest kąt 56°. Oblicz kąt x z rysunku.",
    "steps": [
     "Przy prostej k kąt przyległy do 56° ma 180° − 56° = 124°.",
     "Kąt x leży przy prostej l w tym samym położeniu co ten kąt 124°. To kąty odpowiadające.",
     "Kąty odpowiadające są równe, więc x = 124°."
    ],
    "result": "x = 124°.",
    "tip": "Na rysunku widać tylko dwa rodzaje kątów: ostre i rozwarte. Kąt x jest rozwarty, więc nie może mieć 56°.",
    "check": [
     "180 - 56 == 124"
    ]
   },
   "you": [
    {
     "id": "y2",
     "type": "fields",
     "q": "Proste k i l są równoległe. Kąt przy prostej k z rysunku ma 70°. Oblicz kąt x.",
     "vis": {
      "type": "shape",
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
        -3,
        3
       ],
       "D": [
        5,
        3
       ],
       "P": [
        -0.5,
        -1.5
       ],
       "Q": [
        3.5,
        4.5
       ],
       "E": [
        0.5,
        0
       ],
       "G": [
        2.5,
        3
       ]
      },
      "polys": [
       [
        "A",
        "B"
       ],
       [
        "C",
        "D"
       ],
       [
        "P",
        "Q"
       ]
      ],
      "hide": [
       "A",
       "C",
       "P",
       "E",
       "G"
      ],
      "names": {
       "B": "k",
       "D": "l",
       "Q": "m"
      },
      "angles": [
       {
        "at": "E",
        "from": "B",
        "to": "G",
        "t": "70°"
       },
       {
        "at": "G",
        "from": "Q",
        "to": "C",
        "t": "x"
       }
      ],
      "alt": "Proste równoległe k i l przecięte prostą m. Przy dolnej prostej kąt 70°, przy górnej kąt x po drugiej stronie."
     },
     "fields": [
      {
       "label": "x (°)",
       "ans": 110,
       "show": "110",
       "why": [
        [
         70,
         "Kąt x jest rozwarty, a 70° to kąt ostry. Kąty ostry i rozwarty dają razem 180°."
        ]
       ]
      }
     ],
     "sol": [
      "Kąt przyległy do 70°: [[180° − 70° = 110°]].",
      "x jest do niego odpowiadający, więc [[x = 110°]]."
     ],
     "answer": "110°.",
     "tip": "Ostry + rozwarty = 180°.",
     "check": [
      "180 - 70 == 110"
     ]
    },
    {
     "id": "y2b",
     "type": "pf",
     "q": "Prosta m przecina dwie proste równoległe. Jeden z powstałych kątów ma 35°. Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "Wśród powstałych kątów są kąty o mierze 145°.",
       "ok": "P"
      },
      {
       "t": "Wśród powstałych kątów jest kąt o mierze 55°.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> [[180° − 35° = 145°]]. Prawda.",
      "<b>Zdanie 2.</b> Są tylko kąty 35° i 145°. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "Tylko dwie miary: α i 180° − α.",
     "check": [
      "180 - 35 == 145"
     ]
    }
   ]
  },
  {
   "title": "Kąty w trójkącie",
   "skills": [
    "K3"
   ],
   "intro": "Suma kątów w każdym trójkącie to 180°. Na tym opiera się większość zadań z kątami na egzaminie.",
   "rule": {
    "t": "Suma kątów trójkąta wynosi 180°. W trójkącie równoramiennym kąty przy podstawie są równe. W równobocznym każdy kąt ma 60°.",
    "f": [
     "α + β + γ = 180°",
     "równoramienny: kąty przy podstawie równe",
     "równoboczny: 60°, 60°, 60°",
     "kąt zewnętrzny = suma dwóch kątów do niego nieprzyległych"
    ],
    "e": "W trójkącie równoramiennym sprawdź, który kąt podano: przy podstawie czy między ramionami."
   },
   "visual": {
    "type": "shape",
    "pts": {
     "A": [
      0,
      0
     ],
     "B": [
      6,
      0
     ],
     "C": [
      2,
      3.5
     ]
    },
    "polys": [
     [
      "A",
      "B",
      "C"
     ]
    ],
    "angles": [
     {
      "at": "A",
      "from": "B",
      "to": "C",
      "t": "60°"
     },
     {
      "at": "C",
      "from": "A",
      "to": "B",
      "t": "80°"
     },
     {
      "at": "B",
      "from": "C",
      "to": "A",
      "t": "?"
     }
    ],
    "alt": "Trójkąt ABC: kąt A 60°, kąt C 80°, kąt B nieznany.",
    "caption": "Kąt B = 180° − 60° − 80° = 40°"
   },
   "example": {
    "q": "W trójkącie równoramiennym kąt między ramionami ma 40°. Oblicz kąty przy podstawie.",
    "steps": [
     "Na dwa równe kąty przy podstawie zostaje 180° − 40° = 140°.",
     "Każdy z nich: 140° : 2 = 70°."
    ],
    "result": "Kąty przy podstawie mają po 70°.",
    "tip": "Sprawdzenie: 70° + 70° + 40° = 180°.",
    "check": [
     "(180 - 40)/2 == 70",
     "70 + 70 + 40 == 180"
    ]
   },
   "you": [
    {
     "id": "y3",
     "type": "fields",
     "q": "Dwa kąty trójkąta mają 52° i 71°. Oblicz trzeci kąt.",
     "fields": [
      {
       "label": "Kąt (°)",
       "ans": 57,
       "show": "57",
       "why": [
        [
         123,
         "123° to suma podanych kątów. Odejmij ją od 180°."
        ]
       ]
      }
     ],
     "sol": [
      "[[180° − 52° − 71° = 57°]]."
     ],
     "answer": "57°.",
     "tip": "Suma kątów trójkąta: 180°.",
     "check": [
      "180 - 52 - 71 == 57"
     ]
    },
    {
     "id": "y3b",
     "type": "fields",
     "q": "W trójkącie równoramiennym kąt przy podstawie ma 25°. Oblicz kąt między ramionami.",
     "fields": [
      {
       "label": "Kąt (°)",
       "ans": 130,
       "show": "130",
       "why": [
        [
         155,
         "Kąty przy podstawie są dwa. Odejmij 2 · 25°."
        ],
        [
         25,
         "Kąt przy podstawie ma 25°. Pytamy o kąt między ramionami."
        ]
       ]
      }
     ],
     "sol": [
      "[[180° − 2 · 25° = 130°]]."
     ],
     "answer": "130°.",
     "tip": "Są dwa kąty przy podstawie.",
     "check": [
      "180 - 2*25 == 130"
     ]
    }
   ]
  },
  {
   "title": "Czworokąty i ich kąty",
   "skills": [
    "K4"
   ],
   "intro": "Suma kątów każdego czworokąta to 360°. W trapezie i równoległoboku kąty przy jednym ramieniu dają 180°, bo leżą przy prostych równoległych.",
   "rule": {
    "t": "Trapez ma co najmniej jedną parę boków równoległych. Równoległobok ma dwie pary. Romb ma wszystkie boki równe. Prostokąt ma wszystkie kąty proste. Kwadrat jest jednocześnie rombem i prostokątem.",
    "f": [
     "suma kątów czworokąta: 360°",
     "trapez: kąty przy jednym ramieniu razem 180°",
     "równoległobok: kąty naprzeciw siebie równe"
    ],
    "e": "Kąty przy jednym ramieniu, a nie przy jednej podstawie, dają 180°."
   },
   "visual": {
    "type": "shape",
    "pts": {
     "A": [
      0,
      0
     ],
     "B": [
      7,
      0
     ],
     "C": [
      5,
      3
     ],
     "D": [
      1,
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
    "angles": [
     {
      "at": "A",
      "from": "B",
      "to": "D",
      "t": "70°"
     },
     {
      "at": "B",
      "from": "C",
      "to": "A",
      "t": "55°"
     },
     {
      "at": "D",
      "from": "A",
      "to": "C",
      "t": "?"
     },
     {
      "at": "C",
      "from": "D",
      "to": "B",
      "t": "?"
     }
    ],
    "alt": "Trapez ABCD, AB równoległe do CD. Kąt A ma 70°, kąt B ma 55°.",
    "caption": "AB ∥ CD, więc kąt D = 180° − 70° = 110°, a kąt C = 180° − 55° = 125°"
   },
   "example": {
    "q": "W trapezie ABCD (AB ∥ CD) kąt A ma 70°, a kąt B ma 55°. Oblicz kąty C i D.",
    "steps": [
     "Kąty A i D leżą przy ramieniu AD, więc D = 180° − 70° = 110°.",
     "Kąty B i C leżą przy ramieniu BC, więc C = 180° − 55° = 125°."
    ],
    "result": "Kąt C ma 125°, a kąt D ma 110°.",
    "tip": "Sprawdzenie: 70° + 55° + 125° + 110° = 360°. Tak było w zadaniu 18 na egzaminie w 2025 roku.",
    "check": [
     "180 - 70 == 110",
     "180 - 55 == 125",
     "70 + 55 + 125 + 110 == 360"
    ]
   },
   "you": [
    {
     "id": "y4",
     "type": "fields",
     "q": "W równoległoboku jeden kąt ma 64°. Oblicz kąt sąsiedni (przy tym samym boku).",
     "fields": [
      {
       "label": "Kąt (°)",
       "ans": 116,
       "show": "116",
       "why": [
        [
         64,
         "64° ma kąt naprzeciwległy. Sąsiedni razem z nim daje 180°."
        ]
       ]
      }
     ],
     "sol": [
      "[[180° − 64° = 116°]]."
     ],
     "answer": "116°.",
     "tip": "Kąty równoległoboku: dwa ostre i dwa rozwarte.",
     "check": [
      "180 - 64 == 116"
     ]
    },
    {
     "id": "y4b",
     "type": "pf",
     "q": "Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "Każdy kwadrat jest prostokątem.",
       "ok": "P"
      },
      {
       "t": "Każdy prostokąt jest kwadratem.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> Kwadrat ma 4 kąty proste. Prawda.",
      "<b>Zdanie 2.</b> Prostokąt 2 cm na 5 cm nie ma równych boków. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "Kwadrat to prostokąt o równych bokach.",
     "check": [
      "2 != 5"
     ]
    }
   ]
  },
  {
   "title": "Nierówność trójkąta",
   "skills": [
    "K5"
   ],
   "intro": "Nie z każdych trzech odcinków zbudujesz trójkąt. Jeśli dwa krótsze są razem za krótkie, nie „dosięgną” do siebie.",
   "rule": {
    "t": "Trójkąt istnieje, gdy suma dwóch krótszych boków jest większa od najdłuższego.",
    "f": [
     "3, 4, 6: 3 + 4 = 7 > 6, jest trójkąt",
     "3, 4, 7: 3 + 4 = 7, nie ma trójkąta",
     "trzeci bok leży między różnicą a sumą dwóch pozostałych"
    ],
    "e": "Równość to za mało: 3 + 4 = 7 daje odcinek, a nie trójkąt."
   },
   "visual": {
    "type": "shape",
    "pts": {
     "A": [
      0,
      0
     ],
     "B": [
      6,
      0
     ],
     "C": [
      2.417,
      1.78
     ]
    },
    "polys": [
     [
      "A",
      "B",
      "C"
     ]
    ],
    "sides": [
     [
      "A",
      "B",
      "6 cm"
     ],
     [
      "A",
      "C",
      "3 cm"
     ],
     [
      "B",
      "C",
      "4 cm"
     ]
    ],
    "alt": "Trójkąt o bokach 3 cm, 4 cm i 6 cm.",
    "caption": "3 + 4 = 7, a to więcej niż 6, więc trójkąt istnieje"
   },
   "example": {
    "q": "Dwa boki trójkąta mają 5 cm i 8 cm. Jaką długość może mieć trzeci bok, jeśli wyraża się liczbą całkowitą centymetrów?",
    "steps": [
     "Trzeci bok musi być krótszy niż 5 + 8 = 13 cm.",
     "Musi być dłuższy niż 8 − 5 = 3 cm, bo inaczej 5 cm i ten bok nie dosięgną do końców boku 8 cm.",
     "Liczby całkowite między 3 a 13: od 4 do 12."
    ],
    "result": "Od 4 cm do 12 cm.",
    "tip": "Sprawdzenie: 4, 5, 8: 4 + 5 = 9 > 8. A 3, 5, 8: 3 + 5 = 8, za mało.",
    "check": [
     "4 + 5 > 8",
     "not 3 + 5 > 8",
     "5 + 8 > 12",
     "not 5 + 8 > 13"
    ]
   },
   "you": [
    {
     "id": "y5",
     "type": "abcd",
     "q": "Z których odcinków można zbudować trójkąt?",
     "opts": [
      "4 cm, 5 cm, 8 cm",
      "2 cm, 3 cm, 6 cm",
      "3 cm, 5 cm, 8 cm",
      "1 cm, 4 cm, 7 cm"
     ],
     "ok": 0,
     "why": {
      "B": "2 + 3 = 5, a to mniej niż 6.",
      "C": "3 + 5 = 8. Równość to za mało.",
      "D": "1 + 4 = 5, a to mniej niż 7."
     },
     "sol": [
      "Dwa krótsze razem: [[4 + 5 = 9 > 8]]. Tylko ten zestaw spełnia warunek."
     ],
     "answer": "A, 4 cm, 5 cm, 8 cm.",
     "tip": "Dodaj dwa krótsze i porównaj z najdłuższym.",
     "check": [
      "4 + 5 > 8",
      "not 2 + 3 > 6",
      "not 3 + 5 > 8",
      "not 1 + 4 > 7"
     ]
    },
    {
     "id": "y5b",
     "type": "tn",
     "q": "Czy istnieje trójkąt o bokach 7 cm, 7 cm i 15 cm? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
     "ok": "N",
     "reasons": {
      "1": "7 + 7 = 14, a to mniej niż 15",
      "2": "trójkąt nie może mieć dwóch równych boków",
      "3": "15 jest liczbą nieparzystą"
     },
     "okReason": "1",
     "sol": [
      "Dwa krótsze boki: [[7 + 7 = 14 < 15]]. Nie ma takiego trójkąta."
     ],
     "answer": "N, uzasadnienie 1.",
     "tip": "Trójkąty równoramienne istnieją, ale ten jest za „płaski”.",
     "check": [
      "7 + 7 < 15"
     ]
    }
   ]
  },
  {
   "title": "Przystawanie i uzasadnienia",
   "skills": [
    "K6"
   ],
   "intro": "Trójkąty przystające mają te same wymiary, mogą być tylko przesunięte, obrócone lub odbite. Na egzaminie trzeba czasem uzasadnić, że dwa trójkąty przystają albo że kąty są równe.",
   "rule": {
    "t": "Trójkąty są przystające, gdy mają: trzy pary równych boków (bbb) albo dwie pary równych boków i równy kąt między nimi (bkb) albo bok i dwa kąty przy nim równe (kbk).",
    "f": [
     "bbb: boki, boki, boki",
     "bkb: kąt między tymi bokami",
     "kbk: kąty przy tym boku"
    ],
    "e": "Trzy równe kąty to za mało: trójkąty mogą być podobne, ale różnej wielkości."
   },
   "visual": {
    "type": "shape",
    "pts": {
     "A": [
      0,
      0
     ],
     "B": [
      5,
      0
     ],
     "C": [
      7,
      3
     ],
     "D": [
      2,
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
    "segs": [
     [
      "A",
      "C"
     ]
    ],
    "alt": "Równoległobok ABCD z przekątną AC.",
    "caption": "Przekątna AC dzieli równoległobok na trójkąty ABC i CDA: AB = CD, BC = DA, AC wspólny (bbb)"
   },
   "example": {
    "q": "Uzasadnij, że przekątna AC dzieli równoległobok ABCD na dwa trójkąty przystające.",
    "steps": [
     "W równoległoboku przeciwległe boki są równe: AB = CD i BC = DA.",
     "Bok AC jest wspólny dla obu trójkątów.",
     "Trójkąty ABC i CDA mają trzy pary równych boków, więc są przystające (cecha bbb)."
    ],
    "result": "Trójkąty ABC i CDA są przystające.",
    "tip": "W uzasadnieniu napisz, które boki lub kąty są równe i dlaczego, a na końcu podaj cechę przystawania.",
    "check": [
     "True"
    ]
   },
   "you": [
    {
     "id": "y6",
     "type": "pf",
     "q": "Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "Trójkąty przystające mają równe obwody.",
       "ok": "P"
      },
      {
       "t": "Trójkąty o równych obwodach są zawsze przystające.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> Mają takie same boki, więc taki sam obwód. Prawda.",
      "<b>Zdanie 2.</b> Trójkąty 3, 4, 5 i 4, 4, 4 mają obwód 12, a nie są przystające. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "Na fałsz wystarczy jeden kontrprzykład.",
     "check": [
      "3 + 4 + 5 == 4 + 4 + 4"
     ]
    },
    {
     "id": "y6b",
     "type": "abcd",
     "q": "Trójkąty ABC i KLM mają AB = KL, AC = KM i kąt BAC równy kątowi LKM. Na mocy której cechy są przystające?",
     "opts": [
      "bkb",
      "bbb",
      "kbk",
      "nie muszą być przystające"
     ],
     "ok": 0,
     "why": {
      "B": "Znamy tylko dwie pary boków, a nie trzy.",
      "C": "Znamy jeden kąt, a kbk wymaga dwóch kątów.",
      "D": "Dwa boki i kąt między nimi wystarczą."
     },
     "sol": [
      "Dwa boki i kąt [[między nimi]]: cecha bkb."
     ],
     "answer": "A, bkb.",
     "tip": "Sprawdź, czy kąt leży między podanymi bokami.",
     "check": [
      "True"
     ]
    }
   ]
  }
 ],
 "traps": [
  {
   "name": "Wszystkie kąty przy równoległych są równe",
   "bad": "przy równoległych jest 56°, więc x = 56°",
   "good": "kąty ostre są równe, rozwarte też; ostry + rozwarty = 180°"
  },
  {
   "name": "Pomylone kąty w trójkącie równoramiennym",
   "bad": "kąt przy podstawie 35°, między ramionami 180° − 35° = 145°",
   "good": "180° − 2 · 35° = 110°"
  },
  {
   "name": "Równość w nierówności trójkąta",
   "bad": "3, 5, 8: 3 + 5 = 8, więc jest trójkąt",
   "good": "suma dwóch krótszych musi być większa, nie równa"
  }
 ],
 "cheat": {
  "title": "Kąty i trójkąty w 6 zasadach",
  "rules": [
   {
    "t": "Kąty przyległe i wierzchołkowe.",
    "f": [
     "przyległe: razem 180°",
     "wierzchołkowe: równe"
    ],
    "e": "Kąty wokół punktu: razem 360°."
   },
   {
    "t": "Proste równoległe przecięte prostą.",
    "f": [
     "odpowiadające i naprzemianległe: równe",
     "ostry + rozwarty = 180°"
    ],
    "e": "Tylko dla prostych równoległych."
   },
   {
    "t": "Trójkąt: suma kątów 180°.",
    "f": [
     "równoramienny: kąty przy podstawie równe",
     "równoboczny: 3 · 60°",
     "kąt zewnętrzny = suma dwóch nieprzyległych"
    ],
    "e": "Sprawdź, który kąt podano."
   },
   {
    "t": "Czworokąt: suma kątów 360°.",
    "f": [
     "trapez i równoległobok: kąty przy ramieniu razem 180°"
    ],
    "e": "Kwadrat jest rombem i prostokątem."
   },
   {
    "t": "Nierówność trójkąta.",
    "f": [
     "dwa krótsze razem > najdłuższy"
    ],
    "e": "Równość to za mało."
   },
   {
    "t": "Przystawanie.",
    "f": [
     "bbb, bkb, kbk"
    ],
    "e": "Trzy kąty (kkk) nie wystarczą."
   }
  ]
 },
 "memo": {
  "title": "Kąty, które warto znać",
  "rows": [
   [
    "kąt prosty",
    "kąt półpełny",
    "kąt pełny",
    "trójkąt",
    "czworokąt",
    "trójkąt równoboczny"
   ],
   [
    "90°",
    "180°",
    "360°",
    "suma 180°",
    "suma 360°",
    "60°, 60°, 60°"
   ]
  ],
  "note": "Kąt ostry ma mniej niż 90°, rozwarty więcej niż 90° i mniej niż 180°."
 },
 "warmup": {
  "id": "w0",
  "type": "fields",
  "q": "Rozgrzewka: liczenie do 180° i 360°.",
  "fields": [
   {
    "label": "180 − 65",
    "ans": 115,
    "show": "115"
   },
   {
    "label": "360 − 95 − 110",
    "ans": 155,
    "show": "155"
   },
   {
    "label": "(180 − 50) : 2",
    "ans": 65,
    "show": "65"
   }
  ],
  "sol": [
   "<b>180 − 65</b> = [[115]].",
   "<b>360 − 95 − 110</b> = [[155]].",
   "<b>(180 − 50) : 2</b> = 130 : 2 = [[65]]."
  ],
  "answer": "115, 155 i 65.",
  "tip": "W geometrii kątów liczysz głównie do 180° i 360°. Rachunki muszą iść szybko.",
  "check": [
   "180 - 65 == 115",
   "360 - 95 - 110 == 155",
   "(180 - 50)/2 == 65"
  ]
 },
 "levels": [
  {
   "n": 1,
   "name": "Podstawy",
   "desc": "Każda zasada osobno. Rysunki są poglądowe, licz z danych, a nie z linijki."
  },
  {
   "n": 2,
   "name": "Trening",
   "desc": "Zadania jak na egzaminie: trapezy, trójkąty równoramienne i równoboczne, kąty zewnętrzne."
  },
  {
   "n": 3,
   "name": "Egzamin",
   "desc": "Uzasadnienia i zadania otwarte z punktacją. Rozwiązuj na kartce, a potem oceniaj się według punktacji."
  }
 ],
 "practice": [
  {
   "id": "a1",
   "level": 1,
   "skills": [
    "K1"
   ],
   "type": "fields",
   "q": "Kąty α i β są przyległe. Kąt α ma 35°. Oblicz kąt β.",
   "fields": [
    {
     "label": "β (°)",
     "ans": 145,
     "show": "145",
     "why": [
      [
       55,
       "55° dopełnia do 90°. Kąty przyległe dają razem 180°."
      ]
     ]
    }
   ],
   "sol": [
    "[[β = 180° − 35° = 145°]]."
   ],
   "answer": "145°.",
   "tip": "Przyległe leżą na jednej prostej: razem 180°.",
   "check": [
    "180 - 35 == 145"
   ],
   "twin": {
    "type": "fields",
    "q": "Kąty α i β są przyległe. Kąt α ma 72°. Oblicz kąt β.",
    "fields": [
     {
      "label": "β (°)",
      "ans": 108,
      "show": "108",
      "why": [
       [
        18,
        "18° dopełnia do 90°. Kąty przyległe dają razem 180°."
       ]
      ]
     }
    ],
    "sol": [
     "[[β = 180° − 72° = 108°]]."
    ],
    "answer": "108°.",
    "tip": "Razem 180°.",
    "check": [
     "180 - 72 == 108"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Kąty α i β są przyległe. Kąt α ma 128°. Oblicz kąt β.",
    "fields": [
     {
      "label": "β (°)",
      "ans": 52,
      "show": "52"
     }
    ],
    "sol": [
     "[[β = 180° − 128° = 52°]]."
    ],
    "answer": "52°.",
    "tip": "Razem 180°.",
    "check": [
     "180 - 128 == 52"
    ]
   }
  },
  {
   "id": "a2",
   "level": 1,
   "skills": [
    "K1"
   ],
   "type": "pf",
   "q": "Proste AB i CD przecinają się w punkcie O. Kąt BOD ma 60°. Oceń prawdziwość zdań.",
   "vis": {
    "type": "shape",
    "pts": {
     "A": [
      -4,
      0
     ],
     "B": [
      4,
      0
     ],
     "C": [
      -2,
      -3.5
     ],
     "D": [
      2,
      3.5
     ],
     "O": [
      0,
      0
     ]
    },
    "polys": [
     [
      "A",
      "B"
     ],
     [
      "C",
      "D"
     ]
    ],
    "angles": [
     {
      "at": "O",
      "from": "B",
      "to": "D",
      "t": "60°"
     }
    ],
    "alt": "Proste AB i CD przecinają się w punkcie O. Kąt BOD ma 60°."
   },
   "items": [
    {
     "t": "Kąt AOC ma 60°.",
     "ok": "P"
    },
    {
     "t": "Kąt AOD ma 60°.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> AOC i BOD są wierzchołkowe, więc równe. Prawda.",
    "<b>Zdanie 2.</b> AOD jest przyległy do BOD: [[180° − 60° = 120°]]. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Naprzeciw siebie: równe. Obok siebie: razem 180°.",
   "check": [
    "180 - 60 == 120"
   ],
   "twin": {
    "type": "pf",
    "q": "Proste AB i CD przecinają się w punkcie O. Kąt BOD ma 50°. Oceń prawdziwość zdań.",
    "vis": {
     "type": "shape",
     "pts": {
      "A": [
       -4,
       0
      ],
      "B": [
       4,
       0
      ],
      "C": [
       -2,
       -3.5
      ],
      "D": [
       2,
       3.5
      ],
      "O": [
       0,
       0
      ]
     },
     "polys": [
      [
       "A",
       "B"
      ],
      [
       "C",
       "D"
      ]
     ],
     "angles": [
      {
       "at": "O",
       "from": "B",
       "to": "D",
       "t": "50°"
      }
     ],
     "alt": "Proste AB i CD przecinają się w punkcie O. Kąt BOD ma 50°."
    },
    "items": [
     {
      "t": "Kąt BOC ma 130°.",
      "ok": "P"
     },
     {
      "t": "Suma kątów AOD i BOC wynosi 180°.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> BOC jest przyległy do BOD: [[180° − 50° = 130°]]. Prawda.",
     "<b>Zdanie 2.</b> AOD i BOC mają po 130°: [[130° + 130° = 260°]]. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "AOD i BOC są wierzchołkowe.",
    "check": [
     "180 - 50 == 130",
     "130 + 130 == 260"
    ]
   }
  },
  {
   "id": "a3",
   "level": 1,
   "skills": [
    "K2"
   ],
   "type": "fields",
   "q": "Proste k i l są równoległe. Kąt przy prostej k z rysunku ma 56°. Oblicz kąt x.",
   "vis": {
    "type": "shape",
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
      -3,
      3
     ],
     "D": [
      5,
      3
     ],
     "P": [
      -0.5,
      -1.5
     ],
     "Q": [
      3.5,
      4.5
     ],
     "E": [
      0.5,
      0
     ],
     "G": [
      2.5,
      3
     ]
    },
    "polys": [
     [
      "A",
      "B"
     ],
     [
      "C",
      "D"
     ],
     [
      "P",
      "Q"
     ]
    ],
    "hide": [
     "A",
     "C",
     "P",
     "E",
     "G"
    ],
    "names": {
     "B": "k",
     "D": "l",
     "Q": "m"
    },
    "angles": [
     {
      "at": "E",
      "from": "B",
      "to": "G",
      "t": "56°"
     },
     {
      "at": "G",
      "from": "Q",
      "to": "C",
      "t": "x"
     }
    ],
    "alt": "Proste równoległe k i l przecięte prostą m. Przy dolnej prostej kąt 56°, przy górnej kąt x po drugiej stronie."
   },
   "fields": [
    {
     "label": "x (°)",
     "ans": 124,
     "show": "124",
     "why": [
      [
       56,
       "Kąt x jest rozwarty, a 56° to kąt ostry. Razem dają 180°."
      ]
     ]
    }
   ],
   "sol": [
    "Kąt przyległy do 56°: [[180° − 56° = 124°]].",
    "x jest do niego odpowiadający: [[x = 124°]]."
   ],
   "answer": "124°.",
   "tip": "Ostry + rozwarty = 180°.",
   "check": [
    "180 - 56 == 124"
   ],
   "twin": {
    "type": "fields",
    "q": "Proste k i l są równoległe. Kąt przy prostej k z rysunku ma 48°. Oblicz kąt x.",
    "vis": {
     "type": "shape",
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
       -3,
       3
      ],
      "D": [
       5,
       3
      ],
      "P": [
       -0.5,
       -1.5
      ],
      "Q": [
       3.5,
       4.5
      ],
      "E": [
       0.5,
       0
      ],
      "G": [
       2.5,
       3
      ]
     },
     "polys": [
      [
       "A",
       "B"
      ],
      [
       "C",
       "D"
      ],
      [
       "P",
       "Q"
      ]
     ],
     "hide": [
      "A",
      "C",
      "P",
      "E",
      "G"
     ],
     "names": {
      "B": "k",
      "D": "l",
      "Q": "m"
     },
     "angles": [
      {
       "at": "E",
       "from": "B",
       "to": "G",
       "t": "48°"
      },
      {
       "at": "G",
       "from": "Q",
       "to": "C",
       "t": "x"
      }
     ],
     "alt": "Proste równoległe k i l przecięte prostą m. Przy dolnej prostej kąt 48°, przy górnej kąt x po drugiej stronie."
    },
    "fields": [
     {
      "label": "x (°)",
      "ans": 132,
      "show": "132",
      "why": [
       [
        48,
        "Kąt x jest rozwarty. 180° − 48°."
       ]
      ]
     }
    ],
    "sol": [
     "[[x = 180° − 48° = 132°]]."
    ],
    "answer": "132°.",
    "tip": "Ostry + rozwarty = 180°.",
    "check": [
     "180 - 48 == 132"
    ]
   }
  },
  {
   "id": "a4",
   "level": 1,
   "skills": [
    "K3"
   ],
   "type": "fields",
   "q": "Dwa kąty trójkąta mają 47° i 68°. Oblicz trzeci kąt.",
   "fields": [
    {
     "label": "Kąt (°)",
     "ans": 65,
     "show": "65",
     "why": [
      [
       115,
       "115° to suma podanych kątów. Odejmij ją od 180°."
      ]
     ]
    }
   ],
   "sol": [
    "[[180° − 47° − 68° = 65°]]."
   ],
   "answer": "65°.",
   "tip": "Suma kątów trójkąta: 180°.",
   "check": [
    "180 - 47 - 68 == 65"
   ],
   "twin": {
    "type": "fields",
    "q": "Trójkąt prostokątny ma jeden kąt ostry 34°. Oblicz drugi kąt ostry.",
    "fields": [
     {
      "label": "Kąt (°)",
      "ans": 56,
      "show": "56",
      "why": [
       [
        146,
        "Nie zapomnij o kącie prostym 90°."
       ]
      ]
     }
    ],
    "sol": [
     "[[180° − 90° − 34° = 56°]]."
    ],
    "answer": "56°.",
    "tip": "Kąt prosty to 90°.",
    "check": [
     "180 - 90 - 34 == 56"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Dwa kąty trójkąta mają 105° i 38°. Oblicz trzeci kąt.",
    "fields": [
     {
      "label": "Kąt (°)",
      "ans": 37,
      "show": "37"
     }
    ],
    "sol": [
     "[[180° − 105° − 38° = 37°]]."
    ],
    "answer": "37°.",
    "tip": "180° minus suma.",
    "check": [
     "180 - 105 - 38 == 37"
    ]
   }
  },
  {
   "id": "a5",
   "level": 1,
   "skills": [
    "K3"
   ],
   "type": "fields",
   "q": "W trójkącie równoramiennym kąt między ramionami ma 40°. Oblicz kąt przy podstawie.",
   "vis": {
    "type": "shape",
    "pts": {
     "A": [
      0,
      0
     ],
     "B": [
      5,
      0
     ],
     "C": [
      2.5,
      6.9
     ]
    },
    "polys": [
     [
      "A",
      "B",
      "C"
     ]
    ],
    "angles": [
     {
      "at": "C",
      "from": "A",
      "to": "B",
      "t": "40°",
      "r": 34
     },
     {
      "at": "A",
      "from": "B",
      "to": "C",
      "t": "x"
     },
     {
      "at": "B",
      "from": "C",
      "to": "A",
      "t": "x"
     }
    ],
    "alt": "Trójkąt równoramienny, kąt między ramionami 40°, kąty przy podstawie x."
   },
   "fields": [
    {
     "label": "x (°)",
     "ans": 70,
     "show": "70",
     "why": [
      [
       140,
       "140° to suma obu kątów przy podstawie. Podziel przez 2."
      ],
      [
       40,
       "40° ma kąt między ramionami."
      ]
     ]
    }
   ],
   "sol": [
    "[[180° − 40° = 140°]] na dwa równe kąty.",
    "[[x = 140° : 2 = 70°]]."
   ],
   "answer": "70°.",
   "tip": "Kąty przy podstawie są równe.",
   "check": [
    "(180 - 40)/2 == 70"
   ],
   "twin": {
    "type": "fields",
    "q": "W trójkącie równoramiennym kąt przy podstawie ma 35°. Oblicz kąt między ramionami.",
    "fields": [
     {
      "label": "Kąt (°)",
      "ans": 110,
      "show": "110",
      "why": [
       [
        145,
        "Kąty przy podstawie są dwa: odejmij 2 · 35°."
       ]
      ]
     }
    ],
    "sol": [
     "[[180° − 2 · 35° = 110°]]."
    ],
    "answer": "110°.",
    "tip": "Dwa kąty przy podstawie.",
    "check": [
     "180 - 2*35 == 110"
    ]
   }
  },
  {
   "id": "a6",
   "level": 1,
   "skills": [
    "K4"
   ],
   "type": "abcd",
   "q": "Który czworokąt ma zawsze wszystkie boki równej długości?",
   "opts": [
    "prostokąt",
    "trapez",
    "romb",
    "równoległobok"
   ],
   "ok": 2,
   "why": {
    "A": "Prostokąt ma równe tylko przeciwległe boki, chyba że jest kwadratem.",
    "B": "Trapez może mieć wszystkie boki różne.",
    "D": "Równoległobok ma równe tylko przeciwległe boki."
   },
   "sol": [
    "Romb to czworokąt, który ma [[wszystkie boki równe]]."
   ],
   "answer": "C, romb.",
   "tip": "Kwadrat jest szczególnym rombem.",
   "check": [
    "True"
   ],
   "twin": {
    "type": "abcd",
    "q": "Który czworokąt ma zawsze wszystkie kąty proste?",
    "opts": [
     "prostokąt",
     "romb",
     "trapez",
     "równoległobok"
    ],
    "ok": 0,
    "why": {
     "B": "Romb ma równe boki, ale jego kąty nie muszą być proste.",
     "C": "Trapez zwykle nie ma kątów prostych.",
     "D": "Równoległobok ma kąty proste tylko wtedy, gdy jest prostokątem."
    },
    "sol": [
     "Prostokąt ma [[4 kąty proste]]."
    ],
    "answer": "A, prostokąt.",
    "tip": "Kwadrat jest szczególnym prostokątem.",
    "check": [
     "True"
    ]
   }
  },
  {
   "id": "a7",
   "level": 1,
   "skills": [
    "K5"
   ],
   "type": "pf",
   "q": "Czy z odcinków o podanych długościach można zbudować trójkąt? Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Z odcinków 3 cm, 4 cm i 8 cm można zbudować trójkąt.",
     "ok": "F"
    },
    {
     "t": "Z odcinków 5 cm, 6 cm i 10 cm można zbudować trójkąt.",
     "ok": "P"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[3 + 4 = 7 < 8]]. Fałsz.",
    "<b>Zdanie 2.</b> [[5 + 6 = 11 > 10]]. Prawda."
   ],
   "answer": "F, P.",
   "tip": "Dwa krótsze razem muszą być dłuższe od najdłuższego.",
   "check": [
    "3 + 4 < 8",
    "5 + 6 > 10"
   ],
   "twin": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Z odcinków 2 cm, 7 cm i 9 cm można zbudować trójkąt.",
      "ok": "F"
     },
     {
      "t": "Z odcinków 4 cm, 4 cm i 7 cm można zbudować trójkąt.",
      "ok": "P"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[2 + 7 = 9]], równość to za mało. Fałsz.",
     "<b>Zdanie 2.</b> [[4 + 4 = 8 > 7]]. Prawda."
    ],
    "answer": "F, P.",
    "tip": "Równość nie wystarczy.",
    "check": [
     "2 + 7 == 9",
     "4 + 4 > 7"
    ]
   }
  },
  {
   "id": "b1",
   "level": 2,
   "skills": [
    "K2",
    "K4"
   ],
   "type": "fields",
   "q": "W trapezie ABCD (AB ∥ CD) kąt A ma 65°, a kąt B ma 50°. Oblicz kąty D i C.",
   "vis": {
    "type": "shape",
    "pts": {
     "A": [
      0,
      0
     ],
     "B": [
      7,
      0
     ],
     "C": [
      5,
      3
     ],
     "D": [
      1,
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
    "angles": [
     {
      "at": "A",
      "from": "B",
      "to": "D",
      "t": "65°"
     },
     {
      "at": "B",
      "from": "C",
      "to": "A",
      "t": "50°"
     },
     {
      "at": "D",
      "from": "A",
      "to": "C",
      "t": "?"
     },
     {
      "at": "C",
      "from": "D",
      "to": "B",
      "t": "?"
     }
    ],
    "alt": "Trapez ABCD, AB równoległe do CD. Kąt A ma 65°, kąt B ma 50°."
   },
   "fields": [
    {
     "label": "Kąt D (°)",
     "ans": 115,
     "show": "115",
     "why": [
      [
       130,
       "Kąt D leży przy ramieniu AD, razem z kątem A. 180° − 65°."
      ]
     ]
    },
    {
     "label": "Kąt C (°)",
     "ans": 130,
     "show": "130",
     "why": [
      [
       115,
       "Kąt C leży przy ramieniu BC, razem z kątem B. 180° − 50°."
      ]
     ]
    }
   ],
   "sol": [
    "Przy ramieniu AD: [[D = 180° − 65° = 115°]].",
    "Przy ramieniu BC: [[C = 180° − 50° = 130°]]."
   ],
   "answer": "D = 115°, C = 130°.",
   "tip": "Sprawdzenie: 65° + 50° + 130° + 115° = 360°. Taki trapez był w zadaniu 18 na egzaminie w 2025 roku.",
   "check": [
    "180 - 65 == 115",
    "180 - 50 == 130",
    "65 + 50 + 130 + 115 == 360"
   ],
   "twin": {
    "type": "fields",
    "q": "W trapezie ABCD (AB ∥ CD) kąt A ma 72°, a kąt B ma 58°. Oblicz kąty D i C.",
    "vis": {
     "type": "shape",
     "pts": {
      "A": [
       0,
       0
      ],
      "B": [
       7,
       0
      ],
      "C": [
       5,
       3
      ],
      "D": [
       1,
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
     "angles": [
      {
       "at": "A",
       "from": "B",
       "to": "D",
       "t": "72°"
      },
      {
       "at": "B",
       "from": "C",
       "to": "A",
       "t": "58°"
      },
      {
       "at": "D",
       "from": "A",
       "to": "C",
       "t": "?"
      },
      {
       "at": "C",
       "from": "D",
       "to": "B",
       "t": "?"
      }
     ],
     "alt": "Trapez ABCD, AB równoległe do CD. Kąt A ma 72°, kąt B ma 58°."
    },
    "fields": [
     {
      "label": "Kąt D (°)",
      "ans": 108,
      "show": "108"
     },
     {
      "label": "Kąt C (°)",
      "ans": 122,
      "show": "122"
     }
    ],
    "sol": [
     "[[D = 180° − 72° = 108°]], [[C = 180° − 58° = 122°]]."
    ],
    "answer": "D = 108°, C = 122°.",
    "tip": "Kąty przy ramieniu: 180°.",
    "check": [
     "180 - 72 == 108",
     "180 - 58 == 122"
    ]
   }
  },
  {
   "id": "b2",
   "level": 2,
   "skills": [
    "K4"
   ],
   "type": "fields",
   "q": "W równoległoboku jeden kąt jest 3 razy większy od drugiego. Oblicz kąty równoległoboku.",
   "fields": [
    {
     "label": "Mniejszy kąt (°)",
     "ans": 45,
     "show": "45",
     "why": [
      [
       60,
       "Kąty x i 3x dają razem 180°, a nie 240°. 4x = 180°."
      ],
      [
       90,
       "Suma kątów przy boku to 180°, a nie 360°. 4x = 180°."
      ]
     ]
    },
    {
     "label": "Większy kąt (°)",
     "ans": 135,
     "show": "135"
    }
   ],
   "sol": [
    "Kąty przy jednym boku: [[x + 3x = 180°]], [[4x = 180°]], [[x = 45°]].",
    "Większy: [[3 · 45° = 135°]]."
   ],
   "answer": "45° i 135°.",
   "tip": "Sprawdzenie: 45° + 135° = 180°.",
   "check": [
    "180/4 == 45",
    "3*45 == 135"
   ],
   "twin": {
    "type": "fields",
    "q": "W równoległoboku jeden kąt jest o 40° większy od drugiego. Oblicz kąty równoległoboku.",
    "fields": [
     {
      "label": "Mniejszy kąt (°)",
      "ans": 70,
      "show": "70"
     },
     {
      "label": "Większy kąt (°)",
      "ans": 110,
      "show": "110"
     }
    ],
    "sol": [
     "[[x + x + 40° = 180°]], [[2x = 140°]], [[x = 70°]].",
     "Większy: [[110°]]."
    ],
    "answer": "70° i 110°.",
    "tip": "Sprawdzenie: 70° + 110° = 180°.",
    "check": [
     "(180 - 40)/2 == 70",
     "70 + 40 == 110"
    ]
   }
  },
  {
   "id": "b3",
   "level": 2,
   "skills": [
    "K3"
   ],
   "type": "abcd",
   "q": "W trójkącie równobocznym ABC poprowadzono wysokość CD. Jaką miarę ma kąt ACD?",
   "opts": [
    "60°",
    "45°",
    "90°",
    "30°"
   ],
   "ok": 3,
   "why": {
    "A": "60° ma cały kąt ACB. Wysokość dzieli go na pół.",
    "B": "45° jest w trójkącie prostokątnym równoramiennym, a tu kąt A ma 60°.",
    "C": "90° ma kąt ADC między wysokością a bokiem AB."
   },
   "sol": [
    "W trójkącie ADC: kąt A ma [[60°]], kąt D ma [[90°]].",
    "Kąt ACD: [[180° − 60° − 90° = 30°]]."
   ],
   "answer": "D, 30°.",
   "tip": "Trójkąt równoboczny był w zadaniu 10 na egzaminie w 2026 roku.",
   "check": [
    "180 - 60 - 90 == 30"
   ],
   "twin": {
    "type": "abcd",
    "q": "W trójkącie równobocznym ABC przedłużono bok AB poza punkt B do punktu E. Jaką miarę ma kąt CBE?",
    "opts": [
     "60°",
     "120°",
     "90°",
     "150°"
    ],
    "ok": 1,
    "why": {
     "A": "60° ma kąt ABC wewnątrz trójkąta. CBE jest do niego przyległy.",
     "C": "Kąt CBE nie jest prosty: 180° − 60°.",
     "D": "150° powstałoby z kąta 30°, a kąt trójkąta równobocznego ma 60°."
    },
    "sol": [
     "[[180° − 60° = 120°]]."
    ],
    "answer": "B, 120°.",
    "tip": "Kąt zewnętrzny = 180° − kąt wewnętrzny.",
    "check": [
     "180 - 60 == 120"
    ]
   }
  },
  {
   "id": "b4",
   "level": 2,
   "skills": [
    "K1",
    "K3"
   ],
   "type": "fields",
   "q": "Kąt zewnętrzny trójkąta ABC przy wierzchołku B ma 110°, a kąt A ma 45°. Oblicz kąt C.",
   "vis": {
    "type": "shape",
    "pts": {
     "A": [
      0,
      0
     ],
     "B": [
      5,
      0
     ],
     "E": [
      7.5,
      0
     ],
     "C": [
      3,
      3
     ]
    },
    "polys": [
     [
      "A",
      "B",
      "C"
     ],
     [
      "B",
      "E"
     ]
    ],
    "hide": [
     "E"
    ],
    "angles": [
     {
      "at": "B",
      "from": "E",
      "to": "C",
      "t": "110°"
     },
     {
      "at": "A",
      "from": "B",
      "to": "C",
      "t": "45°"
     },
     {
      "at": "C",
      "from": "A",
      "to": "B",
      "t": "?"
     }
    ],
    "alt": "Trójkąt ABC z przedłużonym bokiem AB. Kąt zewnętrzny przy B 110°, kąt A 45°."
   },
   "fields": [
    {
     "label": "Kąt C (°)",
     "ans": 65,
     "show": "65",
     "why": [
      [
       25,
       "110° to kąt zewnętrzny, a nie kąt trójkąta. Kąt B = 180° − 110° = 70°."
      ],
      [
       70,
       "70° to kąt B. Szukamy kąta C."
      ]
     ]
    }
   ],
   "sol": [
    "Kąt B: [[180° − 110° = 70°]].",
    "Kąt C: [[180° − 45° − 70° = 65°]]."
   ],
   "answer": "65°.",
   "tip": "Szybciej: kąt zewnętrzny = suma dwóch nieprzyległych, więc C = 110° − 45° = 65°.",
   "check": [
    "180 - 110 == 70",
    "180 - 45 - 70 == 65",
    "110 - 45 == 65"
   ],
   "twin": {
    "type": "fields",
    "q": "Kąt zewnętrzny trójkąta ABC przy wierzchołku B ma 130°, a kąt A ma 60°. Oblicz kąt C.",
    "fields": [
     {
      "label": "Kąt C (°)",
      "ans": 70,
      "show": "70",
      "why": [
       [
        50,
        "50° to kąt B. Szukamy kąta C."
       ]
      ]
     }
    ],
    "sol": [
     "[[B = 50°]], [[C = 180° − 60° − 50° = 70°]]."
    ],
    "answer": "70°.",
    "tip": "Albo: 130° − 60° = 70°.",
    "check": [
     "180 - 60 - 50 == 70"
    ]
   }
  },
  {
   "id": "b5",
   "level": 2,
   "skills": [
    "K5"
   ],
   "type": "fields",
   "q": "Dwa boki trójkąta mają 4 cm i 9 cm. Trzeci bok wyraża się liczbą całkowitą centymetrów. Podaj najmniejszą i największą możliwą długość trzeciego boku.",
   "fields": [
    {
     "label": "Najmniejsza (cm)",
     "ans": 6,
     "show": "6",
     "why": [
      [
       5,
       "Bok 5 cm: 4 + 5 = 9, a to nie jest więcej niż 9."
      ]
     ]
    },
    {
     "label": "Największa (cm)",
     "ans": 12,
     "show": "12",
     "why": [
      [
       13,
       "Bok 13 cm: 4 + 9 = 13, a to nie jest więcej niż 13."
      ]
     ]
    }
   ],
   "sol": [
    "Trzeci bok: więcej niż [[9 − 4 = 5]] i mniej niż [[9 + 4 = 13]].",
    "Liczby całkowite: od [[6]] do [[12]]."
   ],
   "answer": "6 cm i 12 cm.",
   "tip": "Trzeci bok leży między różnicą a sumą.",
   "check": [
    "4 + 6 > 9",
    "not 4 + 5 > 9",
    "4 + 9 > 12",
    "not 4 + 9 > 13"
   ],
   "twin": {
    "type": "fields",
    "q": "Dwa boki trójkąta mają 3 cm i 7 cm. Trzeci bok wyraża się liczbą całkowitą centymetrów. Podaj najmniejszą i największą możliwą długość trzeciego boku.",
    "fields": [
     {
      "label": "Najmniejsza (cm)",
      "ans": 5,
      "show": "5"
     },
     {
      "label": "Największa (cm)",
      "ans": 9,
      "show": "9"
     }
    ],
    "sol": [
     "Więcej niż [[4]], mniej niż [[10]]: od [[5]] do [[9]]."
    ],
    "answer": "5 cm i 9 cm.",
    "tip": "Między różnicą a sumą.",
    "check": [
     "3 + 5 > 7",
     "not 3 + 4 > 7",
     "3 + 7 > 9"
    ]
   }
  },
  {
   "id": "b6",
   "level": 2,
   "skills": [
    "K6"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Dwa trójkąty, które mają odpowiednio równe wszystkie trzy boki, są przystające.",
     "ok": "P"
    },
    {
     "t": "Dwa trójkąty, które mają odpowiednio równe wszystkie trzy kąty, są przystające.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> To cecha bbb. Prawda.",
    "<b>Zdanie 2.</b> Trójkąty równoboczne o boku 2 cm i 5 cm mają te same kąty, a są różne. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Kąty nie mówią nic o wielkości trójkąta.",
   "check": [
    "True"
   ],
   "twin": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Przekątna dzieli równoległobok na dwa trójkąty przystające.",
      "ok": "P"
     },
     {
      "t": "Przekątna dzieli każdy trapez na dwa trójkąty przystające.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> Przeciwległe boki równe, przekątna wspólna: bbb. Prawda.",
     "<b>Zdanie 2.</b> W trapezie podstawy mają różne długości, więc trójkąty nie mają takich samych boków. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "W trapezie podstawy są różne.",
    "check": [
     "True"
    ]
   }
  },
  {
   "id": "c1",
   "level": 3,
   "skills": [
    "K2",
    "K3"
   ],
   "type": "self",
   "q": "W trapezie ABCD (AB ∥ CD) boki AD i DC mają równe długości, a kąt ADC ma 110°. Oblicz miarę kąta CAB. Zapisz obliczenia.",
   "vis": {
    "type": "shape",
    "pts": {
     "A": [
      0,
      0
     ],
     "B": [
      7,
      0
     ],
     "C": [
      4.2,
      2.8
     ],
     "D": [
      1,
      2.8
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
      "A",
      "C"
     ]
    ],
    "angles": [
     {
      "at": "D",
      "from": "A",
      "to": "C",
      "t": "110°"
     }
    ],
    "alt": "Trapez ABCD z przekątną AC. AD = DC, kąt D 110°."
   },
   "criteria": [
    {
     "t": "Zauważyłeś, że trójkąt ADC jest równoramienny i obliczyłeś kąt DCA = 35°.",
     "pts": 1
    },
    {
     "t": "Zauważyłeś, że kąty CAB i DCA są naprzemianległe, i podałeś wynik 35°.",
     "pts": 1
    }
   ],
   "sol": [
    "Trójkąt ADC jest równoramienny (AD = DC): [[DAC = DCA = (180° − 110°) : 2 = 35°]].",
    "AB ∥ CD, więc kąty CAB i DCA są naprzemianległe: [[CAB = 35°]]."
   ],
   "answer": "35°.",
   "tip": "W zadaniach z trapezem szukaj kątów naprzemianległych przy przekątnej.",
   "check": [
    "(180 - 110)/2 == 35"
   ],
   "twin": {
    "type": "self",
    "q": "W trapezie ABCD (AB ∥ CD) boki AD i DC mają równe długości, a kąt ADC ma 124°. Oblicz miarę kąta CAB. Zapisz obliczenia.",
    "criteria": [
     {
      "t": "Obliczyłeś kąt DCA = 28°.",
      "pts": 1
     },
     {
      "t": "Podałeś kąt CAB = 28° z uzasadnieniem (kąty naprzemianległe).",
      "pts": 1
     }
    ],
    "sol": [
     "[[DCA = (180° − 124°) : 2 = 28°]].",
     "[[CAB = DCA = 28°]] (naprzemianległe)."
    ],
    "answer": "28°.",
    "tip": "Najpierw trójkąt równoramienny.",
    "check": [
     "(180 - 124)/2 == 28"
    ]
   }
  },
  {
   "id": "c2",
   "level": 3,
   "skills": [
    "K6",
    "K1"
   ],
   "type": "self",
   "q": "Odcinki AB i CD przecinają się w punkcie S, który jest środkiem każdego z nich. Uzasadnij, że trójkąty ASC i BSD są przystające.",
   "vis": {
    "type": "shape",
    "pts": {
     "A": [
      0,
      0
     ],
     "B": [
      6,
      3
     ],
     "C": [
      1,
      3.5
     ],
     "D": [
      5,
      -0.5
     ],
     "S": [
      3,
      1.5
     ]
    },
    "polys": [
     [
      "A",
      "S",
      "C"
     ],
     [
      "B",
      "S",
      "D"
     ]
    ],
    "alt": "Odcinki AB i CD przecinają się w S. Trójkąty ASC i BSD."
   },
   "criteria": [
    {
     "t": "Zapisałeś AS = SB i CS = SD (S jest środkiem odcinków) oraz że kąty ASC i BSD są równe, bo są wierzchołkowe.",
     "pts": 1
    },
    {
     "t": "Podałeś cechę przystawania bkb i wniosek.",
     "pts": 1
    }
   ],
   "sol": [
    "[[AS = SB]] i [[CS = SD]], bo S jest środkiem obu odcinków.",
    "Kąty ASC i BSD są wierzchołkowe, więc równe.",
    "Dwa boki i kąt między nimi: cecha [[bkb]]. Trójkąty są przystające."
   ],
   "answer": "Trójkąty są przystające na mocy cechy bkb.",
   "tip": "Uzasadnienie: co jest równe, dlaczego, i jaka cecha.",
   "check": [
    "True"
   ],
   "twin": {
    "type": "self",
    "q": "W czworokącie ABCD boki AB i CD są równe i równoległe. Przekątne przecinają się w punkcie S. Uzasadnij, że trójkąty ABS i CDS są przystające.",
    "criteria": [
     {
      "t": "Zapisałeś AB = CD oraz równości kątów: BAS = DCS i ABS = CDS (naprzemianległe przy AB ∥ CD).",
      "pts": 1
     },
     {
      "t": "Podałeś cechę kbk i wniosek.",
      "pts": 1
     }
    ],
    "sol": [
     "AB ∥ CD, więc kąty [[BAC = DCA]] i [[ABD = CDB]] są naprzemianległe.",
     "AB = CD i kąty przy tych bokach równe: cecha [[kbk]]."
    ],
    "answer": "Trójkąty są przystające na mocy cechy kbk.",
    "tip": "Proste równoległe dają równe kąty naprzemianległe.",
    "check": [
     "True"
    ]
   }
  },
  {
   "id": "c3",
   "level": 3,
   "skills": [
    "K3"
   ],
   "type": "self",
   "q": "W trójkącie ABC kąt A ma 60°, a kąt B jest 2 razy większy od kąta C. Oblicz kąty B i C. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Ułożyłeś równanie 60° + 2x + x = 180° (albo równoważne), gdzie x to kąt C.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś C = 40° i B = 80°.",
     "pts": 1
    }
   ],
   "sol": [
    "Kąt C to x, kąt B to 2x: [[60° + 2x + x = 180°]], [[3x = 120°]], [[x = 40°]].",
    "[[C = 40°]], [[B = 80°]]. Sprawdzenie: 60° + 80° + 40° = 180°."
   ],
   "answer": "B = 80°, C = 40°.",
   "tip": "Nieznany kąt oznacz literą i ułóż równanie z sumy 180°.",
   "check": [
    "60 + 80 + 40 == 180",
    "120/3 == 40"
   ],
   "twin": {
    "type": "self",
    "q": "W trójkącie ABC kąt C ma 30°, a kąt A jest o 20° większy od kąta B. Oblicz kąty A i B. Zapisz obliczenia.",
    "criteria": [
     {
      "t": "Ułożyłeś równanie x + x + 20° + 30° = 180° (albo równoważne).",
      "pts": 1
     },
     {
      "t": "Obliczyłeś B = 65° i A = 85°.",
      "pts": 1
     }
    ],
    "sol": [
     "[[2x + 50° = 180°]], [[x = 65°]].",
     "[[B = 65°]], [[A = 85°]]."
    ],
    "answer": "A = 85°, B = 65°.",
    "tip": "Sprawdzenie: 85° + 65° + 30° = 180°.",
    "check": [
     "85 + 65 + 30 == 180"
    ]
   }
  },
  {
   "id": "c4",
   "level": 3,
   "skills": [
    "K5"
   ],
   "type": "tn",
   "q": "Czy istnieje trójkąt o obwodzie 20 cm, w którym jeden z boków ma 10 cm? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "N",
   "reasons": {
    "1": "pozostałe dwa boki mają razem 10 cm, a to nie jest więcej niż 10 cm",
    "2": "20 jest liczbą parzystą",
    "3": "bok trójkąta nie może mieć 10 cm"
   },
   "okReason": "1",
   "sol": [
    "Pozostałe boki razem: [[20 − 10 = 10]] cm. Suma dwóch boków musi być większa od trzeciego, a [[10]] nie jest większe od 10."
   ],
   "answer": "N, uzasadnienie 1.",
   "tip": "Najdłuższy bok musi być krótszy niż połowa obwodu.",
   "check": [
    "20 - 10 == 10"
   ],
   "twin": {
    "type": "tn",
    "q": "Czy istnieje trójkąt o obwodzie 20 cm, w którym najdłuższy bok ma 9 cm? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "T",
    "reasons": {
     "1": "na przykład boki 9 cm, 6 cm i 5 cm: 6 + 5 = 11 > 9",
     "2": "9 jest mniejsze od 20",
     "3": "każde trzy liczby tworzą trójkąt"
    },
    "okReason": "1",
    "sol": [
     "[[9 + 6 + 5 = 20]] i [[6 + 5 = 11 > 9]]. Taki trójkąt istnieje."
    ],
    "answer": "T, uzasadnienie 1.",
    "tip": "Wystarczy podać jeden przykład.",
    "check": [
     "9 + 6 + 5 == 20",
     "6 + 5 > 9"
    ]
   }
  },
  {
   "id": "c5",
   "level": 3,
   "skills": [
    "K1",
    "K2"
   ],
   "type": "fields",
   "q": "Proste k i l są równoległe, a prosta m je przecina. Kąty naprzemianległe mają miary 3x + 10° i 5x − 30°. Oblicz x i miarę tych kątów.",
   "fields": [
    {
     "label": "x",
     "ans": 20,
     "show": "20",
     "why": [
      [
       25,
       "Kąty naprzemianległe są równe, a nie dają razem 180°. Równanie: 3x + 10 = 5x − 30."
      ]
     ]
    },
    {
     "label": "Kąt (°)",
     "ans": 70,
     "show": "70",
     "why": [
      [
       110,
       "Podstaw x = 20 do 3x + 10."
      ]
     ]
    }
   ],
   "sol": [
    "Naprzemianległe są równe: [[3x + 10 = 5x − 30]], [[40 = 2x]], [[x = 20]].",
    "Kąt: [[3 · 20 + 10 = 70°]]. Sprawdzenie: 5 · 20 − 30 = 70."
   ],
   "answer": "x = 20, kąty mają po 70°.",
   "tip": "Równania z Działu 2 przydają się w geometrii.",
   "check": [
    "3*20 + 10 == 5*20 - 30 == 70"
   ],
   "twin": {
    "type": "fields",
    "q": "Proste k i l są równoległe, a prosta m je przecina. Kąty odpowiadające mają miary 2x + 15° i 4x − 25°. Oblicz x i miarę tych kątów.",
    "fields": [
     {
      "label": "x",
      "ans": 20,
      "show": "20"
     },
     {
      "label": "Kąt (°)",
      "ans": 55,
      "show": "55"
     }
    ],
    "sol": [
     "[[2x + 15 = 4x − 25]], [[x = 20]].",
     "Kąt: [[2 · 20 + 15 = 55°]]."
    ],
    "answer": "x = 20, kąty mają po 55°.",
    "tip": "Odpowiadające są równe.",
    "check": [
     "2*20 + 15 == 4*20 - 25 == 55"
    ]
   }
  }
 ],
 "test": [
  {
   "id": "t1",
   "skills": [
    "K1"
   ],
   "type": "abcd",
   "q": "Dwie proste przecinają się. Jeden z powstałych kątów ma 35°. Jakie miary mają pozostałe trzy kąty?",
   "opts": [
    "35°, 55°, 55°",
    "35°, 145°, 145°",
    "145°, 145°, 145°",
    "35°, 35°, 145°"
   ],
   "ok": 1,
   "why": {
    "A": "55° dopełnia do 90°, a kąty przyległe dają 180°.",
    "C": "Kąt wierzchołkowy do 35° też ma 35°.",
    "D": "Kąty 35° są tylko dwa: dany i wierzchołkowy."
   },
   "sol": [
    "Wierzchołkowy: [[35°]], przyległe: [[145°]] i [[145°]]."
   ],
   "answer": "B, 35°, 145°, 145°.",
   "tip": "Razem 360°.",
   "check": [
    "35 + 35 + 145 + 145 == 360"
   ],
   "pts": 1
  },
  {
   "id": "t2",
   "skills": [
    "K2"
   ],
   "type": "fields",
   "q": "Proste k i l są równoległe. Kąt przy prostej k z rysunku ma 64°. Oblicz kąt x.",
   "vis": {
    "type": "shape",
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
      -3,
      3
     ],
     "D": [
      5,
      3
     ],
     "P": [
      -0.5,
      -1.5
     ],
     "Q": [
      3.5,
      4.5
     ],
     "E": [
      0.5,
      0
     ],
     "G": [
      2.5,
      3
     ]
    },
    "polys": [
     [
      "A",
      "B"
     ],
     [
      "C",
      "D"
     ],
     [
      "P",
      "Q"
     ]
    ],
    "hide": [
     "A",
     "C",
     "P",
     "E",
     "G"
    ],
    "names": {
     "B": "k",
     "D": "l",
     "Q": "m"
    },
    "angles": [
     {
      "at": "E",
      "from": "B",
      "to": "G",
      "t": "64°"
     },
     {
      "at": "G",
      "from": "Q",
      "to": "C",
      "t": "x"
     }
    ],
    "alt": "Proste równoległe k i l przecięte prostą m. Przy dolnej prostej kąt 64°, przy górnej kąt x po drugiej stronie."
   },
   "fields": [
    {
     "label": "x (°)",
     "ans": 116,
     "show": "116"
    }
   ],
   "sol": [
    "[[x = 180° − 64° = 116°]]."
   ],
   "answer": "116°.",
   "tip": "Ostry + rozwarty = 180°.",
   "check": [
    "180 - 64 == 116"
   ],
   "pts": 1
  },
  {
   "id": "t3",
   "skills": [
    "K3"
   ],
   "type": "fields",
   "q": "Dwa kąty trójkąta mają 38° i 97°. Oblicz trzeci kąt.",
   "fields": [
    {
     "label": "Kąt (°)",
     "ans": 45,
     "show": "45"
    }
   ],
   "sol": [
    "[[180° − 38° − 97° = 45°]]."
   ],
   "answer": "45°.",
   "tip": "Suma 180°.",
   "check": [
    "180 - 38 - 97 == 45"
   ],
   "pts": 1
  },
  {
   "id": "t4",
   "skills": [
    "K3"
   ],
   "type": "abcd",
   "q": "W trójkącie równoramiennym kąt przy podstawie ma 50°. Jaką miarę ma kąt między ramionami?",
   "opts": [
    "50°",
    "130°",
    "65°",
    "80°"
   ],
   "ok": 3,
   "why": {
    "A": "50° mają kąty przy podstawie.",
    "B": "Kąty przy podstawie są dwa: 180° − 2 · 50°.",
    "C": "65° wyszłoby, gdyby 50° był kątem między ramionami."
   },
   "sol": [
    "[[180° − 2 · 50° = 80°]]."
   ],
   "answer": "D, 80°.",
   "tip": "Dwa kąty przy podstawie.",
   "check": [
    "180 - 2*50 == 80"
   ],
   "pts": 1
  },
  {
   "id": "t5",
   "skills": [
    "K4"
   ],
   "type": "fields",
   "q": "W trapezie ABCD (AB ∥ CD) kąt A ma 58°, a kąt B ma 76°. Oblicz kąty D i C.",
   "vis": {
    "type": "shape",
    "pts": {
     "A": [
      0,
      0
     ],
     "B": [
      7,
      0
     ],
     "C": [
      5,
      3
     ],
     "D": [
      1,
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
    "angles": [
     {
      "at": "A",
      "from": "B",
      "to": "D",
      "t": "58°"
     },
     {
      "at": "B",
      "from": "C",
      "to": "A",
      "t": "76°"
     },
     {
      "at": "D",
      "from": "A",
      "to": "C",
      "t": "?"
     },
     {
      "at": "C",
      "from": "D",
      "to": "B",
      "t": "?"
     }
    ],
    "alt": "Trapez ABCD, AB równoległe do CD. Kąt A ma 58°, kąt B ma 76°."
   },
   "fields": [
    {
     "label": "Kąt D (°)",
     "ans": 122,
     "show": "122"
    },
    {
     "label": "Kąt C (°)",
     "ans": 104,
     "show": "104"
    }
   ],
   "sol": [
    "[[D = 180° − 58° = 122°]], [[C = 180° − 76° = 104°]]."
   ],
   "answer": "D = 122°, C = 104°.",
   "tip": "Kąty przy ramieniu: 180°.",
   "check": [
    "180 - 58 == 122",
    "180 - 76 == 104"
   ],
   "pts": 1
  },
  {
   "id": "t6",
   "skills": [
    "K4"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Każdy kwadrat jest rombem.",
     "ok": "P"
    },
    {
     "t": "Każdy romb jest kwadratem.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> Kwadrat ma równe boki. Prawda.",
    "<b>Zdanie 2.</b> Romb nie musi mieć kątów prostych. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Kwadrat = romb + kąty proste.",
   "check": [
    "True"
   ],
   "pts": 1
  },
  {
   "id": "t7",
   "skills": [
    "K5"
   ],
   "type": "abcd",
   "q": "Z których odcinków można zbudować trójkąt?",
   "opts": [
    "5 cm, 7 cm, 11 cm",
    "3 cm, 5 cm, 9 cm",
    "4 cm, 6 cm, 10 cm",
    "2 cm, 2 cm, 5 cm"
   ],
   "ok": 0,
   "why": {
    "B": "3 + 5 = 8, a to mniej niż 9.",
    "C": "4 + 6 = 10. Równość to za mało.",
    "D": "2 + 2 = 4, a to mniej niż 5."
   },
   "sol": [
    "[[5 + 7 = 12 > 11]]."
   ],
   "answer": "A, 5 cm, 7 cm, 11 cm.",
   "tip": "Dwa krótsze razem > najdłuższy.",
   "check": [
    "5 + 7 > 11",
    "not 4 + 6 > 10"
   ],
   "pts": 1
  },
  {
   "id": "t8",
   "skills": [
    "K6"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Trójkąty przystające mają równe pola.",
     "ok": "P"
    },
    {
     "t": "Trójkąty o równych polach są zawsze przystające.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> Te same wymiary, to samo pole. Prawda.",
    "<b>Zdanie 2.</b> Trójkąt o podstawie 4 i wysokości 3 oraz trójkąt o podstawie 6 i wysokości 2 mają pole 6, a są różne. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Jeden kontrprzykład wystarczy.",
   "check": [
    "4*3/2 == 6*2/2 == 6"
   ],
   "pts": 1
  },
  {
   "id": "t9",
   "skills": [
    "K3"
   ],
   "type": "fields",
   "q": "Kąt zewnętrzny trójkąta ABC przy wierzchołku C ma 125°, a kąt A ma 70°. Oblicz kąt B.",
   "fields": [
    {
     "label": "Kąt B (°)",
     "ans": 55,
     "show": "55"
    }
   ],
   "sol": [
    "[[C = 180° − 125° = 55°]], [[B = 180° − 70° − 55° = 55°]]."
   ],
   "answer": "55°.",
   "tip": "Albo: 125° − 70° = 55°.",
   "check": [
    "125 - 70 == 55",
    "180 - 70 - 55 == 55"
   ],
   "pts": 1
  },
  {
   "id": "t10",
   "skills": [
    "K5"
   ],
   "type": "tn",
   "q": "Czy istnieje trójkąt o bokach 6 cm, 6 cm i 12 cm? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "N",
   "reasons": {
    "1": "6 + 6 = 12, a suma dwóch boków musi być większa od trzeciego",
    "2": "trójkąt nie może mieć dwóch równych boków",
    "3": "12 jest podzielne przez 6"
   },
   "okReason": "1",
   "sol": [
    "[[6 + 6 = 12]], równość to za mało."
   ],
   "answer": "N, uzasadnienie 1.",
   "tip": "Równość daje odcinek.",
   "check": [
    "6 + 6 == 12"
   ],
   "pts": 1
  },
  {
   "id": "t11",
   "skills": [
    "K2",
    "K3"
   ],
   "type": "self",
   "q": "W trapezie ABCD (AB ∥ CD) przekątna AC dzieli kąt DAB na dwa równe kąty. Kąt DAB ma 70°. Oblicz miarę kąta ADC. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczyłeś DAC = CAB = 35° i zauważyłeś, że DCA = CAB = 35° (kąty naprzemianległe).",
     "pts": 1
    },
    {
     "t": "Obliczyłeś ADC = 180° − 35° − 35° = 110°.",
     "pts": 1
    }
   ],
   "sol": [
    "[[DAC = CAB = 70° : 2 = 35°]].",
    "AB ∥ CD, więc [[DCA = CAB = 35°]] (naprzemianległe).",
    "W trójkącie ADC: [[ADC = 180° − 35° − 35° = 110°]]."
   ],
   "answer": "110°.",
   "tip": "Sprawdzenie: kąty A i D przy ramieniu AD: 70° + 110° = 180°.",
   "check": [
    "70/2 == 35",
    "180 - 35 - 35 == 110",
    "70 + 110 == 180"
   ],
   "pts": 2
  },
  {
   "id": "t12",
   "skills": [
    "K6"
   ],
   "type": "self",
   "q": "Punkt S jest środkiem odcinka AB i środkiem odcinka CD. Uzasadnij, że trójkąty ASD i BSC są przystające.",
   "criteria": [
    {
     "t": "Zapisałeś AS = SB, DS = SC oraz że kąty ASD i BSC są wierzchołkowe, więc równe.",
     "pts": 1
    },
    {
     "t": "Podałeś cechę bkb i wniosek.",
     "pts": 1
    }
   ],
   "sol": [
    "[[AS = SB]], [[DS = SC]] (S jest środkiem).",
    "Kąty ASD i BSC są wierzchołkowe, więc równe.",
    "Cecha [[bkb]]: trójkąty są przystające."
   ],
   "answer": "Trójkąty są przystające na mocy cechy bkb.",
   "tip": "Kąty wierzchołkowe to częsty „brakujący” element uzasadnienia.",
   "check": [
    "True"
   ],
   "pts": 2
  }
 ],
 "test_minutes": 35,
 "pass": 12,
 "dzial": "Dział 3: Geometria"
};
