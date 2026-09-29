/* Wygenerowane przez zbuduj.py z tresc/pitagoras.py. Nie edytuj ręcznie. */
window.TEMAT = {
 "slug": "pitagoras",
 "title": "Twierdzenie Pitagorasa",
 "sign": "c²",
 "lead": "Przeciwprostokątna i przyprostokątne, przekątne, wysokości trójkątów, trapezy, romby i zadania z życia. Pitagoras jest w prawie każdym arkuszu, także w zadaniach z bryłami i układem współrzędnych.",
 "goals": {
  "learn": "6 umiejętności: przeciwprostokątna, przyprostokątna, przekątne kwadratu i prostokąta, wysokości trójkątów, trapezy i romby, zadania praktyczne.",
  "prereq": "Kwadraty, pierwiastki i wyłączanie czynnika przed pierwiastek (Dział 1). Rozgrzewka na początku to sprawdzi.",
  "goal": "Minimum 12 z 14 punktów w teście na koniec tematu."
 },
 "skills": {
  "G1": "Przeciwprostokątna",
  "G2": "Przyprostokątna",
  "G3": "Przekątna kwadratu i prostokąta",
  "G4": "Wysokości trójkątów równobocznych i równoramiennych",
  "G5": "Trapezy i romby",
  "G6": "Zadania praktyczne"
 },
 "lessons": [
  {
   "title": "Twierdzenie Pitagorasa",
   "skills": [
    "G1"
   ],
   "intro": "W trójkącie prostokątnym boki przy kącie prostym to przyprostokątne, a najdłuższy bok naprzeciw kąta prostego to przeciwprostokątna. Pitagoras zauważył, że kwadraty zbudowane na przyprostokątnych mają razem takie samo pole jak kwadrat na przeciwprostokątnej.",
   "rule": {
    "t": "W trójkącie prostokątnym suma kwadratów przyprostokątnych jest równa kwadratowi przeciwprostokątnej.",
    "f": [
     "a² + b² = c²",
     "c = √(a² + b²)",
     "3, 4, 5 i 6, 8, 10 i 5, 12, 13"
    ],
    "e": "Dodajesz kwadraty, a nie boki: √(3² + 4²) = 5, a nie 3 + 4 = 7."
   },
   "visual": {
    "type": "shape",
    "nodots": true,
    "pts": {
     "C": [
      0,
      0
     ],
     "A": [
      4,
      0
     ],
     "B": [
      0,
      3
     ],
     "S1": [
      4,
      -4
     ],
     "S2": [
      0,
      -4
     ],
     "S3": [
      -3,
      3
     ],
     "S4": [
      -3,
      0
     ],
     "S5": [
      3,
      7
     ],
     "S6": [
      7,
      4
     ],
     "Q1": [
      2,
      -2
     ],
     "Q2": [
      -1.5,
      1.5
     ],
     "Q3": [
      3.5,
      3.5
     ]
    },
    "polys": [
     [
      "C",
      "A",
      "B"
     ],
     [
      "C",
      "A",
      "S1",
      "S2"
     ],
     [
      "C",
      "B",
      "S3",
      "S4"
     ],
     [
      "A",
      "B",
      "S5",
      "S6"
     ]
    ],
    "shade": [
     1,
     2,
     3
    ],
    "angles": [
     {
      "at": "C",
      "from": "A",
      "to": "B",
      "right": true
     }
    ],
    "names": {
     "W1": "",
     "W2": "",
     "G1": "",
     "G2": "",
     "L1": "",
     "L2": "",
     "H": "",
     "H1": "",
     "H2": "",
     "Q1": "",
     "Q2": "",
     "Q3": "",
     "S1": "",
     "S2": "",
     "S3": "",
     "S4": "",
     "S5": "",
     "S6": "",
     "S7": "",
     "S8": "",
     "A": "",
     "B": "",
     "C": ""
    },
    "texts": [
     [
      "Q1",
      "4² = 16"
     ],
     [
      "Q2",
      "3² = 9"
     ],
     [
      "Q3",
      "5² = 25"
     ]
    ],
    "alt": "Trójkąt prostokątny o bokach 3, 4 i 5 z kwadratami zbudowanymi na każdym boku: 9, 16 i 25.",
    "caption": "Kwadraty na przyprostokątnych razem mają tyle, co kwadrat na przeciwprostokątnej: 9 + 16 = 25"
   },
   "example": {
    "q": "Przyprostokątne trójkąta prostokątnego mają 6 cm i 8 cm. Oblicz przeciwprostokątną.",
    "steps": [
     "c² = 6² + 8² = 36 + 64 = 100.",
     "c = √100 = 10 cm."
    ],
    "result": "Przeciwprostokątna ma 10 cm.",
    "tip": "Sprawdzenie sensu: przeciwprostokątna musi być najdłuższa, ale krótsza niż suma przyprostokątnych: 8 < 10 < 14.",
    "check": [
     "6**2 + 8**2 == 10**2"
    ]
   },
   "you": [
    {
     "id": "y1",
     "type": "fields",
     "q": "Przyprostokątne mają 5 cm i 12 cm. Oblicz przeciwprostokątną.",
     "fields": [
      {
       "label": "c (cm)",
       "ans": 13,
       "show": "13",
       "why": [
        [
         17,
         "Dodałeś boki. Dodaje się kwadraty: 25 + 144."
        ],
        [
         169,
         "169 to c². Wyciągnij pierwiastek."
        ]
       ]
      }
     ],
     "sol": [
      "[[c² = 25 + 144 = 169]], [[c = 13]] cm."
     ],
     "answer": "13 cm.",
     "tip": "5, 12, 13 warto zapamiętać.",
     "check": [
      "5**2 + 12**2 == 13**2"
     ]
    },
    {
     "id": "y1b",
     "type": "abcd",
     "q": "Przyprostokątne mają 2 cm i 3 cm. Przeciwprostokątna ma długość:",
     "opts": [
      "√13 cm",
      "5 cm",
      "13 cm",
      "√5 cm"
     ],
     "ok": 0,
     "why": {
      "B": "Dodałeś boki: 2 + 3. Dodaje się kwadraty: 4 + 9.",
      "C": "13 to c². Trzeba wyciągnąć pierwiastek.",
      "D": "√5 = √(2 + 3). Pod pierwiastkiem są kwadraty: 4 + 9."
     },
     "sol": [
      "[[c² = 4 + 9 = 13]], [[c = √13]] cm."
     ],
     "answer": "A, √13 cm.",
     "tip": "Wynik nie musi być liczbą całkowitą.",
     "check": [
      "2**2 + 3**2 == 13"
     ]
    }
   ]
  },
  {
   "title": "Obliczanie przyprostokątnej",
   "skills": [
    "G2"
   ],
   "intro": "Gdy znasz przeciwprostokątną i jedną przyprostokątną, drugą obliczysz, odejmując kwadraty. To ten sam wzór, tylko przekształcony.",
   "rule": {
    "t": "Przyprostokątna to pierwiastek z różnicy: kwadrat przeciwprostokątnej minus kwadrat drugiej przyprostokątnej.",
    "f": [
     "b² = c² − a²",
     "b = √(c² − a²)",
     "wynik √20 = √(4 · 5) = 2√5"
    ],
    "e": "Od c² odejmujesz, a nie dodajesz. Wynik musi być krótszy niż przeciwprostokątna."
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
      0,
      6
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
      "right": true
     }
    ],
    "sides": [
     [
      "A",
      "B",
      "8"
     ],
     [
      "B",
      "C",
      "c = 10"
     ],
     [
      "A",
      "C",
      "b = ?"
     ]
    ],
    "alt": "Trójkąt prostokątny: przyprostokątna 8, przeciwprostokątna 10, druga przyprostokątna nieznana.",
    "caption": "b² = 10² − 8² = 100 − 64 = 36, b = 6"
   },
   "example": {
    "q": "Przeciwprostokątna ma 17 cm, a jedna przyprostokątna 8 cm. Oblicz drugą przyprostokątną.",
    "steps": [
     "b² = 17² − 8² = 289 − 64 = 225.",
     "b = √225 = 15 cm."
    ],
    "result": "Druga przyprostokątna ma 15 cm.",
    "tip": "Sprawdzenie: 8² + 15² = 64 + 225 = 289 = 17².",
    "check": [
     "17**2 - 8**2 == 15**2"
    ]
   },
   "you": [
    {
     "id": "y2",
     "type": "fields",
     "q": "Przeciwprostokątna ma 10 cm, a jedna przyprostokątna 6 cm. Oblicz drugą przyprostokątną.",
     "fields": [
      {
       "label": "b (cm)",
       "ans": 8,
       "show": "8",
       "why": [
        [
         4,
         "Odejmujesz kwadraty, a nie boki: 100 − 36."
        ],
        [
         64,
         "64 to b². Wyciągnij pierwiastek."
        ]
       ]
      }
     ],
     "sol": [
      "[[b² = 100 − 36 = 64]], [[b = 8]] cm."
     ],
     "answer": "8 cm.",
     "tip": "6, 8, 10 to podwojone 3, 4, 5.",
     "check": [
      "10**2 - 6**2 == 8**2"
     ]
    },
    {
     "id": "y2b",
     "type": "abcd",
     "q": "Przeciwprostokątna ma 6 cm, a jedna przyprostokątna 4 cm. Druga przyprostokątna ma długość:",
     "opts": [
      "2√5 cm",
      "2 cm",
      "√52 cm",
      "10 cm"
     ],
     "ok": 0,
     "why": {
      "B": "Odjąłeś boki: 6 − 4. Odejmuje się kwadraty: 36 − 16.",
      "C": "√52 = √(36 + 16). Przy przyprostokątnej kwadraty się odejmuje.",
      "D": "10 to suma boków, a przyprostokątna musi być krótsza niż 6."
     },
     "sol": [
      "[[b² = 36 − 16 = 20]], [[b = √20 = √(4 · 5) = 2√5]] cm."
     ],
     "answer": "A, 2√5 cm.",
     "tip": "Wyłączanie czynnika przed pierwiastek znasz z Działu 1.",
     "check": [
      "36 - 16 == 4*5"
     ]
    }
   ]
  },
  {
   "title": "Przekątna kwadratu i prostokąta",
   "skills": [
    "G3"
   ],
   "intro": "Przekątna dzieli prostokąt na dwa trójkąty prostokątne. Boki prostokąta są przyprostokątnymi, a przekątna przeciwprostokątną.",
   "rule": {
    "t": "Przekątna prostokąta: d = √(a² + b²). Przekątna kwadratu o boku a: d = a√2.",
    "f": [
     "prostokąt 8 × 6: d = √(64 + 36) = 10",
     "kwadrat: d² = a² + a² = 2a², d = a√2",
     "bok kwadratu z przekątnej: a = d : √2"
    ],
    "e": "Przekątna kwadratu o boku 5 to 5√2 ≈ 7,07, a nie 10."
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
      6
     ],
     "D": [
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
      "A",
      "C"
     ]
    ],
    "angles": [
     {
      "at": "B",
      "from": "C",
      "to": "A",
      "right": true
     }
    ],
    "sides": [
     [
      "A",
      "B",
      "8"
     ],
     [
      "B",
      "C",
      "6"
     ],
     [
      "A",
      "C",
      "d = 10",
      1
     ]
    ],
    "alt": "Prostokąt 8 na 6 z przekątną AC długości 10.",
    "caption": "d² = 8² + 6² = 100, d = 10"
   },
   "example": {
    "q": "Oblicz przekątną kwadratu o boku 5 cm. Podaj wynik dokładny i przybliżony (√2 ≈ 1,41).",
    "steps": [
     "d² = 5² + 5² = 25 + 25 = 50.",
     "d = √50 = √(25 · 2) = 5√2 cm.",
     "5√2 ≈ 5 · 1,41 = 7,05 cm."
    ],
    "result": "d = 5√2 cm, czyli ok. 7 cm.",
    "tip": "Wzór d = a√2 wystarczy zapamiętać: przekątna kwadratu to bok razy √2.",
    "check": [
     "5**2 + 5**2 == 25*2",
     "5*F('1.41') == F('7.05')"
    ]
   },
   "you": [
    {
     "id": "y3",
     "type": "fields",
     "q": "Prostokąt ma boki 12 cm i 5 cm. Oblicz długość jego przekątnej.",
     "fields": [
      {
       "label": "d (cm)",
       "ans": 13,
       "show": "13",
       "why": [
        [
         17,
         "Dodałeś boki. d² = 144 + 25."
        ]
       ]
      }
     ],
     "sol": [
      "[[d² = 144 + 25 = 169]], [[d = 13]] cm."
     ],
     "answer": "13 cm.",
     "tip": "Przekątna jest przeciwprostokątną.",
     "check": [
      "12**2 + 5**2 == 13**2"
     ]
    },
    {
     "id": "y3b",
     "type": "abcd",
     "q": "Przekątna kwadratu ma długość 6√2 cm. Bok tego kwadratu ma długość:",
     "opts": [
      "6 cm",
      "6√2 cm",
      "3 cm",
      "12 cm"
     ],
     "ok": 0,
     "why": {
      "B": "To przekątna, a nie bok.",
      "C": "3 cm to połowa boku.",
      "D": "Przekątna jest dłuższa od boku, a nie odwrotnie."
     },
     "sol": [
      "[[d = a√2 = 6√2]], więc [[a = 6]] cm."
     ],
     "answer": "A, 6 cm.",
     "tip": "Porównaj z wzorem d = a√2.",
     "check": [
      "6**2 + 6**2 == 72",
      "(6*2**0.5)**2 - 72 < 1e-9"
     ]
    }
   ]
  },
  {
   "title": "Wysokości trójkątów",
   "skills": [
    "G4"
   ],
   "intro": "Wysokość trójkąta równobocznego i równoramiennego (opuszczona na podstawę) dzieli go na dwa jednakowe trójkąty prostokątne. Wysokość i połowa podstawy to przyprostokątne, a ramię to przeciwprostokątna.",
   "rule": {
    "t": "Trójkąt równoramienny: h² = ramię² − (połowa podstawy)². Trójkąt równoboczny o boku a: h = a√3 : 2.",
    "f": [
     "równoramienny 10, 10, 12: h² = 100 − 36 = 64, h = 8",
     "równoboczny: h = a√3/2",
     "pole równobocznego: a²√3/4"
    ],
    "e": "Bierzesz połowę podstawy, a nie całą: wysokość spada na środek podstawy."
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
      3,
      5.196
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
    "names": {
     "H": ""
    },
    "sides": [
     [
      "A",
      "C",
      "a"
     ],
     [
      "B",
      "C",
      "a"
     ],
     [
      "A",
      "H",
      "a/2"
     ],
     [
      "H",
      "B",
      "a/2"
     ],
     [
      "C",
      "H",
      "h",
      -1
     ]
    ],
    "alt": "Trójkąt równoboczny o boku a z wysokością h, która dzieli podstawę na dwie połowy a/2.",
    "caption": "h² = a² − (a/2)², h = a√3/2"
   },
   "example": {
    "q": "Oblicz wysokość i pole trójkąta równobocznego o boku 6 cm.",
    "steps": [
     "Wysokość dzieli podstawę na połowy po 3 cm: h² = 6² − 3² = 36 − 9 = 27.",
     "h = √27 = √(9 · 3) = 3√3 cm. To samo daje wzór a√3/2 = 6√3/2.",
     "Pole: P = 6 · 3√3 : 2 = 9√3 cm²."
    ],
    "result": "h = 3√3 cm, P = 9√3 cm².",
    "tip": "Trójkąt równoboczny był w zadaniu 10 na egzaminie w 2026 roku.",
    "check": [
     "6**2 - 3**2 == 27 == 9*3",
     "F(6*3, 2) == 9"
    ]
   },
   "you": [
    {
     "id": "y4",
     "type": "fields",
     "q": "Trójkąt równoramienny ma ramiona po 13 cm i podstawę 10 cm. Oblicz wysokość opuszczoną na podstawę i pole trójkąta.",
     "fields": [
      {
       "label": "h (cm)",
       "ans": 12,
       "show": "12",
       "why": [
        [
         3,
         "Weź połowę podstawy (5 cm), a potem odejmij kwadraty: 169 − 25."
        ]
       ]
      },
      {
       "label": "Pole (cm²)",
       "ans": 60,
       "show": "60",
       "why": [
        [
         120,
         "Zapomniałeś podzielić przez 2."
        ]
       ]
      }
     ],
     "sol": [
      "[[h² = 169 − 25 = 144]], [[h = 12]] cm.",
      "[[P = 10 · 12 : 2 = 60]] cm²."
     ],
     "answer": "12 cm i 60 cm².",
     "tip": "Połowa podstawy: 5 cm.",
     "check": [
      "13**2 - 5**2 == 12**2",
      "10*12/2 == 60"
     ]
    },
    {
     "id": "y4b",
     "type": "abcd",
     "q": "Wysokość trójkąta równobocznego o boku 10 cm ma długość:",
     "opts": [
      "5√3 cm",
      "10√3 cm",
      "5 cm",
      "25√3 cm"
     ],
     "ok": 0,
     "why": {
      "B": "Zapomniałeś podzielić przez 2: h = a√3 : 2.",
      "C": "5 cm to połowa boku, a nie wysokość.",
      "D": "25√3 cm² to pole tego trójkąta."
     },
     "sol": [
      "[[h² = 100 − 25 = 75]], [[h = √75 = 5√3]] cm."
     ],
     "answer": "A, 5√3 cm.",
     "tip": "h = a√3/2.",
     "check": [
      "100 - 25 == 75 == 25*3"
     ]
    }
   ]
  },
  {
   "title": "Trapezy i romby",
   "skills": [
    "G5"
   ],
   "intro": "W trapezie wysokości odcinają od dłuższej podstawy trójkąty prostokątne. W rombie przekątne przecinają się pod kątem prostym i dzielą się na połowy, więc tworzą 4 trójkąty prostokątne.",
   "rule": {
    "t": "Trapez równoramienny: odcinek przy podstawie = (a − b) : 2, potem Pitagoras z ramieniem. Romb: bok² = (e/2)² + (f/2)².",
    "f": [
     "trapez 16 i 6, ramię 13: (16 − 6) : 2 = 5, h² = 169 − 25, h = 12",
     "romb e = 16, f = 12: bok² = 8² + 6², bok = 10"
    ],
    "e": "W rombie bierzesz połowy przekątnych, a nie całe przekątne."
   },
   "visual": {
    "type": "shape",
    "pts": {
     "A": [
      0,
      0
     ],
     "B": [
      16,
      0
     ],
     "C": [
      11.0,
      12
     ],
     "D": [
      5.0,
      12
     ],
     "H1": [
      5.0,
      0
     ],
     "H2": [
      11.0,
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
      "H1"
     ],
     [
      "C",
      "H2"
     ]
    ],
    "hide": [
     "H1",
     "H2"
    ],
    "angles": [
     {
      "at": "H1",
      "from": "B",
      "to": "D",
      "right": true
     }
    ],
    "alt": "Trapez równoramienny o podstawach 16 i 6 i ramieniu 13, z dwiema wysokościami.",
    "sides": [
     [
      "A",
      "H1",
      "5"
     ],
     [
      "D",
      "C",
      "6"
     ],
     [
      "A",
      "D",
      "13"
     ],
     [
      "D",
      "H1",
      "h",
      -1
     ]
    ]
   },
   "example": {
    "q": "Trapez równoramienny ma podstawy 16 cm i 6 cm, a jego ramię ma 13 cm. Oblicz wysokość i pole trapezu.",
    "steps": [
     "Wysokości odcinają od dłuższej podstawy dwa odcinki: (16 − 6) : 2 = 5 cm.",
     "Trójkąt prostokątny: ramię 13 cm, przyprostokątna 5 cm. h² = 169 − 25 = 144, h = 12 cm.",
     "Pole: P = (16 + 6) · 12 : 2 = 132 cm²."
    ],
    "result": "h = 12 cm, P = 132 cm².",
    "tip": "Narysuj obie wysokości: widać wtedy prostokąt w środku i dwa trójkąty po bokach.",
    "check": [
     "(16 - 6)/2 == 5",
     "13**2 - 5**2 == 12**2",
     "(16 + 6)*12/2 == 132"
    ]
   },
   "you": [
    {
     "id": "y5",
     "type": "fields",
     "q": "Przekątne rombu mają 10 cm i 24 cm. Oblicz długość boku rombu.",
     "fields": [
      {
       "label": "Bok (cm)",
       "ans": 13,
       "show": "13",
       "why": [
        [
         26,
         "Weź połowy przekątnych: 5 i 12."
        ]
       ]
      }
     ],
     "sol": [
      "Połowy przekątnych: [[5]] i [[12]] cm.",
      "[[bok² = 25 + 144 = 169]], [[bok = 13]] cm."
     ],
     "answer": "13 cm.",
     "tip": "Przekątne dzielą się na połowy.",
     "check": [
      "5**2 + 12**2 == 13**2"
     ]
    },
    {
     "id": "y5b",
     "type": "fields",
     "q": "Trapez prostokątny ma podstawy 11 cm i 5 cm oraz wysokość 8 cm. Oblicz długość dłuższego ramienia.",
     "fields": [
      {
       "label": "Ramię (cm)",
       "ans": 10,
       "show": "10",
       "why": [
        [
         8,
         "8 cm ma krótsze ramię (wysokość). Dłuższe jest ukośne."
        ]
       ]
      }
     ],
     "sol": [
      "Różnica podstaw: [[11 − 5 = 6]] cm.",
      "[[ramię² = 36 + 64 = 100]], [[ramię = 10]] cm."
     ],
     "answer": "10 cm.",
     "tip": "W trapezie prostokątnym jedno ramię jest wysokością.",
     "check": [
      "6**2 + 8**2 == 10**2"
     ]
    }
   ]
  },
  {
   "title": "Zadania praktyczne",
   "skills": [
    "G6"
   ],
   "intro": "Podstawa programowa wymaga stosowania twierdzenia Pitagorasa w sytuacjach praktycznych: drabina przy ścianie, skrót przez park, liny masztu. Zawsze szukaj kąta prostego: ściana i ziemia, dwa boki prostokątnego placu.",
   "rule": {
    "t": "Narysuj trójkąt prostokątny, podpisz znane boki i zaznacz, który bok jest przeciwprostokątną (naprzeciw kąta prostego).",
    "f": [
     "drabina: przeciwprostokątna",
     "ściana i ziemia: przyprostokątne",
     "skrót przez prostokątny plac: przekątna"
    ],
    "e": "Zamień jednostki przed liczeniem: 50 cm to 0,5 m."
   },
   "visual": {
    "type": "shape",
    "pts": {
     "W1": [
      0,
      0
     ],
     "W2": [
      0,
      5.5
     ],
     "G1": [
      -0.6,
      0
     ],
     "G2": [
      2.6,
      0
     ],
     "L1": [
      1.4,
      0
     ],
     "L2": [
      0,
      4.8
     ]
    },
    "polys": [
     [
      "W1",
      "W2"
     ],
     [
      "G1",
      "G2"
     ],
     [
      "L1",
      "L2"
     ]
    ],
    "names": {
     "W1": "",
     "W2": "",
     "G1": "",
     "G2": "",
     "L1": "",
     "L2": "",
     "H": "",
     "H1": "",
     "H2": "",
     "Q1": "",
     "Q2": "",
     "Q3": "",
     "S1": "",
     "S2": "",
     "S3": "",
     "S4": "",
     "S5": "",
     "S6": "",
     "S7": "",
     "S8": ""
    },
    "nodots": true,
    "angles": [
     {
      "at": "W1",
      "from": "L1",
      "to": "L2",
      "right": true
     }
    ],
    "sides": [
     [
      "L1",
      "L2",
      "5 m"
     ],
     [
      "W1",
      "L1",
      "1,4 m",
      1
     ],
     [
      "W1",
      "L2",
      "h",
      1
     ]
    ],
    "alt": "Drabina długości 5 m oparta o pionową ścianę, dół drabiny 1,4 m od ściany.",
    "caption": "h² = 5² − 1,4² = 25 − 1,96 = 23,04, h = 4,8 m"
   },
   "example": {
    "q": "Drabina ma 5 m długości. Jej dolny koniec stoi 1,4 m od ściany. Na jakiej wysokości drabina dotyka ściany?",
    "steps": [
     "Drabina jest przeciwprostokątną, a odległość od ściany i wysokość to przyprostokątne.",
     "h² = 5² − 1,4² = 25 − 1,96 = 23,04.",
     "h = √23,04 = 4,8 m, bo 4,8 · 4,8 = 23,04."
    ],
    "result": "Drabina dotyka ściany na wysokości 4,8 m.",
    "tip": "Jeśli pierwiastek nie jest „ładny”, sprawdź mnożeniem, np. 4,8 · 4,8.",
    "check": [
     "25 - F('1.96') == F('23.04')",
     "F('4.8')**2 == F('23.04')"
    ]
   },
   "you": [
    {
     "id": "y6",
     "type": "fields",
     "q": "Prostokątny park ma wymiary 120 m na 50 m. Ile metrów krótsza jest droga po przekątnej niż wzdłuż dwóch boków?",
     "fields": [
      {
       "label": "Przekątna (m)",
       "ans": 130,
       "show": "130"
      },
      {
       "label": "Krócej o (m)",
       "ans": 40,
       "show": "40",
       "why": [
        [
         130,
         "130 m to długość przekątnej. Porównaj ją ze 120 + 50 = 170 m."
        ]
       ]
      }
     ],
     "sol": [
      "[[d² = 14 400 + 2 500 = 16 900]], [[d = 130]] m.",
      "Wzdłuż boków: [[170]] m. Krócej o [[40]] m."
     ],
     "answer": "130 m, krócej o 40 m.",
     "tip": "12, 5, 13 razy 10.",
     "check": [
      "120**2 + 50**2 == 130**2",
      "170 - 130 == 40"
     ]
    },
    {
     "id": "y6b",
     "type": "pf",
     "q": "Maszt ma 12 m wysokości. Linę przymocowano do jego wierzchołka i do ziemi 5 m od podstawy masztu. Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "Lina ma 13 m długości.",
       "ok": "P"
      },
      {
       "t": "Lina ma 17 m długości.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> [[12² + 5² = 169 = 13²]]. Prawda.",
      "<b>Zdanie 2.</b> 17 = 12 + 5, a boki się nie dodają. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "Lina to przeciwprostokątna.",
     "check": [
      "12**2 + 5**2 == 13**2"
     ]
    }
   ]
  }
 ],
 "traps": [
  {
   "name": "Dodawanie boków zamiast kwadratów",
   "bad": "przyprostokątne 3 i 4: c = 3 + 4 = 7",
   "good": "c² = 9 + 16 = 25, c = 5"
  },
  {
   "name": "Dodawanie przy przyprostokątnej",
   "bad": "c = 10, a = 6: b² = 100 + 36",
   "good": "b² = 100 − 36 = 64, b = 8"
  },
  {
   "name": "Cała podstawa zamiast połowy",
   "bad": "trójkąt 10, 10, 12: h² = 100 − 144",
   "good": "połowa podstawy 6: h² = 100 − 36, h = 8"
  }
 ],
 "cheat": {
  "title": "Pitagoras w 6 zasadach",
  "rules": [
   {
    "t": "Przeciwprostokątna: dodaj kwadraty.",
    "f": [
     "c² = a² + b²"
    ],
    "e": "Naprzeciw kąta prostego, najdłuższa."
   },
   {
    "t": "Przyprostokątna: odejmij kwadraty.",
    "f": [
     "b² = c² − a²"
    ],
    "e": "Wynik krótszy niż c."
   },
   {
    "t": "Przekątne.",
    "f": [
     "prostokąt: d² = a² + b²",
     "kwadrat: d = a√2"
    ],
    "e": "Przekątna kwadratu to nie 2a."
   },
   {
    "t": "Wysokości.",
    "f": [
     "równoramienny: h² = r² − (a/2)²",
     "równoboczny: h = a√3/2"
    ],
    "e": "Połowa podstawy."
   },
   {
    "t": "Trapez i romb.",
    "f": [
     "trapez: (a − b) : 2",
     "romb: połowy przekątnych"
    ],
    "e": "Narysuj obie wysokości."
   },
   {
    "t": "Trójki warte zapamiętania.",
    "f": [
     "3, 4, 5",
     "6, 8, 10",
     "5, 12, 13",
     "8, 15, 17"
    ],
    "e": "Pierwiastki upraszczaj: √50 = 5√2."
   }
  ]
 },
 "memo": {
  "title": "Kwadraty, które warto znać",
  "rows": [
   [
    "11²",
    "12²",
    "13²",
    "14²",
    "15²",
    "17²",
    "25²"
   ],
   [
    "121",
    "144",
    "169",
    "196",
    "225",
    "289",
    "625"
   ]
  ],
  "note": "√2 ≈ 1,41, √3 ≈ 1,73. Twierdzenie Pitagorasa działa tylko w trójkącie prostokątnym."
 },
 "warmup": {
  "id": "w0",
  "type": "fields",
  "q": "Rozgrzewka: kwadraty i pierwiastki.",
  "fields": [
   {
    "label": "13²",
    "ans": 169,
    "show": "169"
   },
   {
    "label": "√144",
    "ans": 12,
    "show": "12"
   },
   {
    "label": "√50 = … √2",
    "ans": 5,
    "show": "5"
   }
  ],
  "sol": [
   "<b>13²</b> = 13 · 13 = [[169]].",
   "<b>√144</b> = [[12]], bo 12 · 12 = 144.",
   "<b>√50</b> = √(25 · 2) = [[5]]√2."
  ],
  "answer": "169, 12 i 5√2.",
  "tip": "Jeśli coś nie wyszło, wróć do tematu „Potęgi i pierwiastki”.",
  "check": [
   "13**2 == 169",
   "12**2 == 144",
   "25*2 == 50"
  ]
 },
 "levels": [
  {
   "n": 1,
   "name": "Podstawy",
   "desc": "Przeciwprostokątna, przyprostokątna, przekątne i proste zastosowania. Zawsze zaznacz, gdzie jest kąt prosty."
  },
  {
   "n": 2,
   "name": "Trening",
   "desc": "Trójkąty równoboczne, trapezy, romby i zadania z życia. Wyniki mogą zawierać pierwiastki."
  },
  {
   "n": 3,
   "name": "Egzamin",
   "desc": "Zadania otwarte z punktacją, jak na egzaminie. Rozwiązuj na kartce, a potem oceniaj się według punktacji."
  }
 ],
 "practice": [
  {
   "id": "a1",
   "level": 1,
   "skills": [
    "G1"
   ],
   "type": "fields",
   "q": "Przyprostokątne trójkąta prostokątnego mają 9 cm i 12 cm. Oblicz przeciwprostokątną.",
   "fields": [
    {
     "label": "c (cm)",
     "ans": 15,
     "show": "15",
     "why": [
      [
       21,
       "Dodałeś boki. Dodaje się kwadraty: 81 + 144."
      ],
      [
       225,
       "225 to c². Wyciągnij pierwiastek."
      ]
     ]
    }
   ],
   "sol": [
    "[[c² = 81 + 144 = 225]], [[c = 15]] cm."
   ],
   "answer": "15 cm.",
   "tip": "9, 12, 15 to 3, 4, 5 razy 3.",
   "check": [
    "9**2 + 12**2 == 15**2"
   ],
   "twin": {
    "type": "fields",
    "q": "Przyprostokątne trójkąta prostokątnego mają 7 cm i 24 cm. Oblicz przeciwprostokątną.",
    "fields": [
     {
      "label": "c (cm)",
      "ans": 25,
      "show": "25",
      "why": [
       [
        31,
        "Dodałeś boki. Dodaje się kwadraty: 49 + 576."
       ],
       [
        625,
        "625 to c². Wyciągnij pierwiastek."
       ]
      ]
     }
    ],
    "sol": [
     "[[c² = 49 + 576 = 625]], [[c = 25]] cm."
    ],
    "answer": "25 cm.",
    "tip": "c² = a² + b².",
    "check": [
     "7**2 + 24**2 == 25**2"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Przyprostokątne trójkąta prostokątnego mają 20 cm i 21 cm. Oblicz przeciwprostokątną.",
    "fields": [
     {
      "label": "c (cm)",
      "ans": 29,
      "show": "29"
     }
    ],
    "sol": [
     "[[c² = 400 + 441 = 841]], [[c = 29]] cm."
    ],
    "answer": "29 cm.",
    "tip": "29 · 29 = 841.",
    "check": [
     "20**2 + 21**2 == 29**2"
    ]
   }
  },
  {
   "id": "a2",
   "level": 1,
   "skills": [
    "G2"
   ],
   "type": "fields",
   "q": "Przeciwprostokątna ma 25 cm, a jedna przyprostokątna 7 cm. Oblicz drugą przyprostokątną.",
   "fields": [
    {
     "label": "b (cm)",
     "ans": 24,
     "show": "24",
     "why": [
      [
       18,
       "Odejmujesz kwadraty, a nie boki: 625 − 49."
      ],
      [
       576,
       "576 to b². Wyciągnij pierwiastek."
      ]
     ]
    }
   ],
   "sol": [
    "[[b² = 625 − 49 = 576]], [[b = 24]] cm."
   ],
   "answer": "24 cm.",
   "tip": "b² = c² − a².",
   "check": [
    "25**2 - 7**2 == 24**2"
   ],
   "twin": {
    "type": "fields",
    "q": "Przeciwprostokątna ma 26 cm, a jedna przyprostokątna 10 cm. Oblicz drugą przyprostokątną.",
    "fields": [
     {
      "label": "b (cm)",
      "ans": 24,
      "show": "24",
      "why": [
       [
        16,
        "Odejmujesz kwadraty, a nie boki: 676 − 100."
       ]
      ]
     }
    ],
    "sol": [
     "[[b² = 676 − 100 = 576]], [[b = 24]] cm."
    ],
    "answer": "24 cm.",
    "tip": "10, 24, 26 to 5, 12, 13 razy 2.",
    "check": [
     "26**2 - 10**2 == 24**2"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Przeciwprostokątna ma 41 cm, a jedna przyprostokątna 9 cm. Oblicz drugą przyprostokątną.",
    "fields": [
     {
      "label": "b (cm)",
      "ans": 40,
      "show": "40"
     }
    ],
    "sol": [
     "[[b² = 1 681 − 81 = 1 600]], [[b = 40]] cm."
    ],
    "answer": "40 cm.",
    "tip": "b² = c² − a².",
    "check": [
     "41**2 - 9**2 == 40**2"
    ]
   }
  },
  {
   "id": "a3",
   "level": 1,
   "skills": [
    "G1"
   ],
   "type": "abcd",
   "q": "Przyprostokątne mają 4 cm i 6 cm. Przeciwprostokątna ma długość:",
   "opts": [
    "10 cm",
    "52 cm",
    "2√13 cm",
    "√10 cm"
   ],
   "ok": 2,
   "why": {
    "A": "Dodałeś boki: 4 + 6. Dodaje się kwadraty.",
    "B": "52 to c². Trzeba wyciągnąć pierwiastek.",
    "D": "√10 = √(4 + 6). Pod pierwiastkiem są kwadraty: 16 + 36."
   },
   "sol": [
    "[[c² = 16 + 36 = 52]], [[c = √52 = √(4 · 13) = 2√13]] cm."
   ],
   "answer": "C, 2√13 cm.",
   "tip": "Wyłącz czynnik przed pierwiastek.",
   "check": [
    "4**2 + 6**2 == 52 == 4*13"
   ],
   "twin": {
    "type": "abcd",
    "q": "Przyprostokątne mają po 3 cm. Przeciwprostokątna ma długość:",
    "opts": [
     "3√2 cm",
     "6 cm",
     "18 cm",
     "√6 cm"
    ],
    "ok": 0,
    "why": {
     "B": "Dodałeś boki. c² = 9 + 9.",
     "C": "18 to c². Trzeba wyciągnąć pierwiastek.",
     "D": "√6 = √(3 + 3). Pod pierwiastkiem są kwadraty."
    },
    "sol": [
     "[[c² = 9 + 9 = 18]], [[c = √18 = 3√2]] cm."
    ],
    "answer": "A, 3√2 cm.",
    "tip": "To połowa kwadratu: przekątna a√2.",
    "check": [
     "3**2 + 3**2 == 18 == 9*2"
    ]
   }
  },
  {
   "id": "a4",
   "level": 1,
   "skills": [
    "G3"
   ],
   "type": "fields",
   "q": "Prostokąt ma boki 15 cm i 8 cm. Oblicz długość jego przekątnej.",
   "fields": [
    {
     "label": "d (cm)",
     "ans": 17,
     "show": "17",
     "why": [
      [
       23,
       "Dodałeś boki. d² = 225 + 64."
      ],
      [
       289,
       "289 to d². Wyciągnij pierwiastek."
      ]
     ]
    }
   ],
   "sol": [
    "[[d² = 225 + 64 = 289]], [[d = 17]] cm."
   ],
   "answer": "17 cm.",
   "tip": "8, 15, 17 warto zapamiętać.",
   "check": [
    "15**2 + 8**2 == 17**2"
   ],
   "twin": {
    "type": "fields",
    "q": "Prostokąt ma boki 24 cm i 7 cm. Oblicz długość jego przekątnej.",
    "fields": [
     {
      "label": "d (cm)",
      "ans": 25,
      "show": "25",
      "why": [
       [
        31,
        "Dodałeś boki. d² = 576 + 49."
       ]
      ]
     }
    ],
    "sol": [
     "[[d² = 576 + 49 = 625]], [[d = 25]] cm."
    ],
    "answer": "25 cm.",
    "tip": "Przekątna to przeciwprostokątna.",
    "check": [
     "24**2 + 7**2 == 25**2"
    ]
   }
  },
  {
   "id": "a5",
   "level": 1,
   "skills": [
    "G3"
   ],
   "type": "abcd",
   "q": "Przekątna kwadratu o boku 4 cm ma długość:",
   "opts": [
    "8 cm",
    "16 cm",
    "2√2 cm",
    "4√2 cm"
   ],
   "ok": 3,
   "why": {
    "A": "8 = 4 + 4. Przekątna to a√2, a nie 2a.",
    "B": "16 cm² to pole kwadratu.",
    "C": "2√2 cm to połowa przekątnej."
   },
   "sol": [
    "[[d² = 16 + 16 = 32]], [[d = √32 = 4√2]] cm."
   ],
   "answer": "D, 4√2 cm.",
   "tip": "d = a√2.",
   "check": [
    "4**2 + 4**2 == 32 == 16*2"
   ],
   "twin": {
    "type": "abcd",
    "q": "Przekątna kwadratu ma długość 10√2 cm. Bok tego kwadratu ma długość:",
    "opts": [
     "10√2 cm",
     "10 cm",
     "5 cm",
     "20 cm"
    ],
    "ok": 1,
    "why": {
     "A": "To przekątna, a nie bok.",
     "C": "5 cm to połowa boku.",
     "D": "Bok jest krótszy od przekątnej."
    },
    "sol": [
     "[[d = a√2 = 10√2]], więc [[a = 10]] cm."
    ],
    "answer": "B, 10 cm.",
    "tip": "Porównaj z d = a√2.",
    "check": [
     "10**2 + 10**2 == 200 == 100*2"
    ]
   }
  },
  {
   "id": "a6",
   "level": 1,
   "skills": [
    "G4"
   ],
   "type": "fields",
   "q": "Trójkąt równoramienny ma ramiona po 10 cm i podstawę 12 cm. Oblicz wysokość opuszczoną na podstawę.",
   "fields": [
    {
     "label": "h (cm)",
     "ans": 8,
     "show": "8",
     "why": [
      [
       4,
       "Odejmujesz kwadraty, a nie długości: 100 − 36."
      ],
      [
       64,
       "64 to h². Wyciągnij pierwiastek."
      ]
     ]
    }
   ],
   "sol": [
    "Połowa podstawy: [[6]] cm.",
    "[[h² = 100 − 36 = 64]], [[h = 8]] cm."
   ],
   "answer": "8 cm.",
   "tip": "Wysokość spada na środek podstawy.",
   "check": [
    "10**2 - 6**2 == 8**2"
   ],
   "twin": {
    "type": "fields",
    "q": "Trójkąt równoramienny ma ramiona po 17 cm i podstawę 16 cm. Oblicz wysokość opuszczoną na podstawę.",
    "fields": [
     {
      "label": "h (cm)",
      "ans": 15,
      "show": "15",
      "why": [
       [
        9,
        "Odejmujesz kwadraty: 289 − 64."
       ]
      ]
     }
    ],
    "sol": [
     "[[h² = 289 − 64 = 225]], [[h = 15]] cm."
    ],
    "answer": "15 cm.",
    "tip": "Połowa podstawy: 8 cm.",
    "check": [
     "17**2 - 8**2 == 15**2"
    ]
   }
  },
  {
   "id": "a7",
   "level": 1,
   "skills": [
    "G6"
   ],
   "type": "fields",
   "q": "Drabina o długości 2,5 m opiera się o ścianę. Jej dolny koniec stoi 0,7 m od ściany. Na jakiej wysokości drabina dotyka ściany?",
   "fields": [
    {
     "label": "Wysokość (m)",
     "ans": 2.4,
     "show": "2,4",
     "why": [
      [
       1.8,
       "Odejmujesz kwadraty, a nie długości: 6,25 − 0,49."
      ]
     ]
    }
   ],
   "sol": [
    "[[h² = 6,25 − 0,49 = 5,76]], [[h = 2,4]] m."
   ],
   "answer": "2,4 m.",
   "tip": "Drabina to przeciwprostokątna. Sprawdzenie: 2,4 · 2,4 = 5,76.",
   "check": [
    "F('2.5')**2 - F('0.7')**2 == F('2.4')**2"
   ],
   "twin": {
    "type": "fields",
    "q": "Drabina o długości 5 m opiera się o ścianę. Jej dolny koniec stoi 1,4 m od ściany. Na jakiej wysokości drabina dotyka ściany?",
    "fields": [
     {
      "label": "Wysokość (m)",
      "ans": 4.8,
      "show": "4,8",
      "why": [
       [
        3.6,
        "Odejmujesz kwadraty: 25 − 1,96."
       ]
      ]
     }
    ],
    "sol": [
     "[[h² = 25 − 1,96 = 23,04]], [[h = 4,8]] m."
    ],
    "answer": "4,8 m.",
    "tip": "Sprawdzenie: 4,8 · 4,8 = 23,04.",
    "check": [
     "25 - F('1.4')**2 == F('4.8')**2"
    ]
   }
  },
  {
   "id": "b1",
   "level": 2,
   "skills": [
    "G4"
   ],
   "type": "abcd",
   "q": "Wysokość trójkąta równobocznego o boku 8 cm ma długość:",
   "opts": [
    "8√3 cm",
    "4√3 cm",
    "4 cm",
    "16√3 cm"
   ],
   "ok": 1,
   "why": {
    "A": "Zapomniałeś podzielić przez 2: h = a√3 : 2.",
    "C": "4 cm to połowa boku.",
    "D": "16√3 cm² to pole tego trójkąta."
   },
   "sol": [
    "[[h² = 64 − 16 = 48]], [[h = √48 = 4√3]] cm."
   ],
   "answer": "B, 4√3 cm.",
   "tip": "h = a√3/2.",
   "check": [
    "8**2 - 4**2 == 48 == 16*3"
   ],
   "twin": {
    "type": "abcd",
    "q": "Wysokość trójkąta równobocznego o boku 12 cm ma długość:",
    "opts": [
     "12√3 cm",
     "6 cm",
     "36√3 cm",
     "6√3 cm"
    ],
    "ok": 3,
    "why": {
     "A": "Zapomniałeś podzielić przez 2.",
     "B": "6 cm to połowa boku.",
     "C": "36√3 cm² to pole."
    },
    "sol": [
     "[[h² = 144 − 36 = 108]], [[h = √108 = 6√3]] cm."
    ],
    "answer": "D, 6√3 cm.",
    "tip": "h = a√3/2.",
    "check": [
     "144 - 36 == 108 == 36*3"
    ]
   }
  },
  {
   "id": "b2",
   "level": 2,
   "skills": [
    "G4"
   ],
   "type": "fields",
   "q": "Oblicz pole trójkąta równobocznego o boku 6 cm. Wynik zapisz w postaci … √3.",
   "fields": [
    {
     "label": "Pole = … √3 (cm²)",
     "ans": 9,
     "show": "9",
     "why": [
      [
       18,
       "Zapomniałeś podzielić przez 2: P = 6 · 3√3 : 2."
      ],
      [
       3,
       "3√3 to wysokość, a nie pole."
      ]
     ]
    }
   ],
   "sol": [
    "[[h = 3√3]] cm (bo h² = 36 − 9 = 27).",
    "[[P = 6 · 3√3 : 2 = 9√3]] cm²."
   ],
   "answer": "9√3 cm².",
   "tip": "Wzór: P = a²√3/4 = 36√3/4 = 9√3.",
   "check": [
    "36 - 9 == 27",
    "F(36, 4) == 9"
   ],
   "twin": {
    "type": "fields",
    "q": "Oblicz pole trójkąta równobocznego o boku 4 cm. Wynik zapisz w postaci … √3.",
    "fields": [
     {
      "label": "Pole = … √3 (cm²)",
      "ans": 4,
      "show": "4",
      "why": [
       [
        8,
        "Zapomniałeś podzielić przez 2."
       ],
       [
        2,
        "2√3 to wysokość."
       ]
      ]
     }
    ],
    "sol": [
     "[[h = 2√3]] cm.",
     "[[P = 4 · 2√3 : 2 = 4√3]] cm²."
    ],
    "answer": "4√3 cm².",
    "tip": "a²√3/4 = 16√3/4.",
    "check": [
     "16 - 4 == 12 == 4*3",
     "F(16, 4) == 4"
    ]
   }
  },
  {
   "id": "b3",
   "level": 2,
   "skills": [
    "G5"
   ],
   "type": "fields",
   "q": "Trapez równoramienny ma podstawy 20 cm i 8 cm, a ramię 10 cm. Oblicz wysokość i pole trapezu.",
   "vis": {
    "type": "shape",
    "pts": {
     "A": [
      0,
      0
     ],
     "B": [
      20,
      0
     ],
     "C": [
      14.0,
      8
     ],
     "D": [
      6.0,
      8
     ],
     "H1": [
      6.0,
      0
     ],
     "H2": [
      14.0,
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
      "H1"
     ],
     [
      "C",
      "H2"
     ]
    ],
    "hide": [
     "H1",
     "H2"
    ],
    "angles": [
     {
      "at": "H1",
      "from": "B",
      "to": "D",
      "right": true
     }
    ],
    "alt": "Trapez równoramienny o podstawach 20 i 8 i ramieniu 10, z dwiema wysokościami.",
    "sides": [
     [
      "A",
      "B",
      "20 cm"
     ],
     [
      "D",
      "C",
      "8 cm"
     ],
     [
      "A",
      "D",
      "10 cm"
     ]
    ]
   },
   "fields": [
    {
     "label": "h (cm)",
     "ans": 8,
     "show": "8",
     "why": [
      [
       6,
       "6 cm to odcinek przy podstawie: (20 − 8) : 2. Wysokość: √(100 − 36)."
      ]
     ]
    },
    {
     "label": "Pole (cm²)",
     "ans": 112,
     "show": "112",
     "why": [
      [
       224,
       "Zapomniałeś podzielić przez 2."
      ]
     ]
    }
   ],
   "sol": [
    "Odcinek przy podstawie: [[(20 − 8) : 2 = 6]] cm.",
    "[[h² = 100 − 36 = 64]], [[h = 8]] cm.",
    "[[P = (20 + 8) · 8 : 2 = 112]] cm²."
   ],
   "answer": "8 cm i 112 cm².",
   "tip": "Narysuj obie wysokości.",
   "check": [
    "(20 - 8)/2 == 6",
    "10**2 - 6**2 == 8**2",
    "(20 + 8)*8/2 == 112"
   ],
   "twin": {
    "type": "fields",
    "q": "Trapez równoramienny ma podstawy 14 cm i 4 cm, a ramię 13 cm. Oblicz wysokość i pole trapezu.",
    "fields": [
     {
      "label": "h (cm)",
      "ans": 12,
      "show": "12",
      "why": [
       [
        5,
        "5 cm to odcinek przy podstawie. Wysokość: √(169 − 25)."
       ]
      ]
     },
     {
      "label": "Pole (cm²)",
      "ans": 108,
      "show": "108"
     }
    ],
    "sol": [
     "[[(14 − 4) : 2 = 5]] cm, [[h² = 169 − 25 = 144]], [[h = 12]] cm.",
     "[[P = 18 · 12 : 2 = 108]] cm²."
    ],
    "answer": "12 cm i 108 cm².",
    "tip": "5, 12, 13.",
    "check": [
     "13**2 - 5**2 == 12**2",
     "18*12/2 == 108"
    ]
   }
  },
  {
   "id": "b4",
   "level": 2,
   "skills": [
    "G5"
   ],
   "type": "fields",
   "q": "Przekątne rombu mają 12 cm i 16 cm. Oblicz bok i obwód rombu.",
   "vis": {
    "type": "shape",
    "pts": {
     "A": [
      -8,
      0
     ],
     "B": [
      0,
      -6
     ],
     "C": [
      8,
      0
     ],
     "D": [
      0,
      6
     ],
     "O": [
      0,
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
      "A",
      "C"
     ],
     [
      "B",
      "D"
     ]
    ],
    "angles": [
     {
      "at": "O",
      "from": "C",
      "to": "D",
      "right": true
     }
    ],
    "names": {
     "O": ""
    },
    "sides": [
     [
      "O",
      "C",
      "8",
      1
     ],
     [
      "O",
      "D",
      "6",
      1
     ]
    ],
    "alt": "Romb z przekątnymi 16 i 12, które dzielą się na połowy 8 i 6."
   },
   "fields": [
    {
     "label": "Bok (cm)",
     "ans": 10,
     "show": "10",
     "why": [
      [
       20,
       "Weź połowy przekątnych: 6 i 8."
      ]
     ]
    },
    {
     "label": "Obwód (cm)",
     "ans": 40,
     "show": "40"
    }
   ],
   "sol": [
    "Połowy przekątnych: [[6]] i [[8]] cm.",
    "[[bok² = 36 + 64 = 100]], [[bok = 10]] cm.",
    "Obwód: [[4 · 10 = 40]] cm."
   ],
   "answer": "10 cm i 40 cm.",
   "tip": "Przekątne rombu są prostopadłe.",
   "check": [
    "6**2 + 8**2 == 10**2"
   ],
   "twin": {
    "type": "fields",
    "q": "Przekątne rombu mają 10 cm i 24 cm. Oblicz bok i obwód rombu.",
    "fields": [
     {
      "label": "Bok (cm)",
      "ans": 13,
      "show": "13",
      "why": [
       [
        26,
        "Weź połowy przekątnych: 5 i 12."
       ]
      ]
     },
     {
      "label": "Obwód (cm)",
      "ans": 52,
      "show": "52"
     }
    ],
    "sol": [
     "[[bok² = 25 + 144 = 169]], [[bok = 13]] cm.",
     "Obwód: [[52]] cm."
    ],
    "answer": "13 cm i 52 cm.",
    "tip": "Połowy przekątnych.",
    "check": [
     "5**2 + 12**2 == 13**2"
    ]
   }
  },
  {
   "id": "b5",
   "level": 2,
   "skills": [
    "G6",
    "G3"
   ],
   "type": "fields",
   "q": "Prostokątny plac ma wymiary 80 m na 60 m. Ile metrów ma ścieżka po przekątnej i o ile jest krótsza niż droga wzdłuż dwóch boków?",
   "fields": [
    {
     "label": "Przekątna (m)",
     "ans": 100,
     "show": "100"
    },
    {
     "label": "Krócej o (m)",
     "ans": 40,
     "show": "40",
     "why": [
      [
       100,
       "100 m to przekątna. Porównaj ją z 80 + 60 = 140 m."
      ]
     ]
    }
   ],
   "sol": [
    "[[d² = 6 400 + 3 600 = 10 000]], [[d = 100]] m.",
    "[[140 − 100 = 40]] m."
   ],
   "answer": "100 m, krócej o 40 m.",
   "tip": "6, 8, 10 razy 10.",
   "check": [
    "80**2 + 60**2 == 100**2"
   ],
   "twin": {
    "type": "fields",
    "q": "Prostokątny plac ma wymiary 45 m na 60 m. Ile metrów ma ścieżka po przekątnej i o ile jest krótsza niż droga wzdłuż dwóch boków?",
    "fields": [
     {
      "label": "Przekątna (m)",
      "ans": 75,
      "show": "75"
     },
     {
      "label": "Krócej o (m)",
      "ans": 30,
      "show": "30"
     }
    ],
    "sol": [
     "[[d² = 2 025 + 3 600 = 5 625]], [[d = 75]] m.",
     "[[105 − 75 = 30]] m."
    ],
    "answer": "75 m, krócej o 30 m.",
    "tip": "3, 4, 5 razy 15.",
    "check": [
     "45**2 + 60**2 == 75**2"
    ]
   }
  },
  {
   "id": "b6",
   "level": 2,
   "skills": [
    "G1",
    "G3"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Przekątna prostokąta o bokach 6 cm i 8 cm ma 10 cm.",
     "ok": "P"
    },
    {
     "t": "Przekątna kwadratu o boku 5 cm ma 10 cm.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[36 + 64 = 100]], [[d = 10]]. Prawda.",
    "<b>Zdanie 2.</b> [[d = 5√2 ≈ 7,07]] cm. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Przekątna kwadratu: a√2.",
   "check": [
    "6**2 + 8**2 == 10**2",
    "5**2 + 5**2 == 50"
   ],
   "twin": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Wysokość trójkąta równobocznego o boku 2 cm ma √3 cm.",
      "ok": "P"
     },
     {
      "t": "Trójkąt prostokątny o przyprostokątnych 1 cm i 1 cm ma przeciwprostokątną 2 cm.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[h² = 4 − 1 = 3]], [[h = √3]]. Prawda.",
     "<b>Zdanie 2.</b> [[c² = 1 + 1 = 2]], [[c = √2]]. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Dodaj kwadraty.",
    "check": [
     "4 - 1 == 3",
     "1 + 1 == 2"
    ]
   }
  },
  {
   "id": "c1",
   "level": 3,
   "skills": [
    "G1",
    "G4"
   ],
   "type": "self",
   "q": "W trójkącie ABC kąt C jest prosty, AC = 6 cm, BC = 8 cm. Odcinek CD jest wysokością opuszczoną na bok AB. Oblicz długość AB, pole trójkąta i długość CD. Zapisz obliczenia.",
   "vis": {
    "type": "shape",
    "pts": {
     "C": [
      0,
      0
     ],
     "B": [
      8,
      0
     ],
     "A": [
      0,
      6
     ],
     "D": [
      2.88,
      3.84
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
      "D"
     ]
    ],
    "angles": [
     {
      "at": "C",
      "from": "B",
      "to": "A",
      "right": true
     },
     {
      "at": "D",
      "from": "B",
      "to": "C",
      "right": true
     }
    ],
    "sides": [
     [
      "C",
      "A",
      "6 cm"
     ],
     [
      "C",
      "B",
      "8 cm"
     ]
    ],
    "alt": "Trójkąt prostokątny ABC z kątem prostym przy C i wysokością CD na przeciwprostokątną."
   },
   "criteria": [
    {
     "t": "Obliczyłeś AB = 10 cm (twierdzenie Pitagorasa).",
     "pts": 1
    },
    {
     "t": "Obliczyłeś pole trójkąta: 6 · 8 : 2 = 24 cm².",
     "pts": 1
    },
    {
     "t": "Obliczyłeś CD z pola: 10 · CD : 2 = 24, CD = 4,8 cm.",
     "pts": 1
    }
   ],
   "sol": [
    "[[AB² = 36 + 64 = 100]], [[AB = 10]] cm.",
    "[[P = 6 · 8 : 2 = 24]] cm².",
    "[[10 · CD : 2 = 24]], [[CD = 4,8]] cm."
   ],
   "answer": "AB = 10 cm, P = 24 cm², CD = 4,8 cm.",
   "tip": "Pole liczone na dwa sposoby daje wysokość. Tak wygląda przykład z podstawy programowej.",
   "check": [
    "6**2 + 8**2 == 10**2",
    "10*F('4.8')/2 == 24"
   ],
   "twin": {
    "type": "self",
    "q": "W trójkącie ABC kąt C jest prosty, AC = 5 cm, BC = 12 cm. CD jest wysokością opuszczoną na bok AB. Oblicz AB, pole trójkąta i CD. Zapisz obliczenia.",
    "criteria": [
     {
      "t": "AB = 13 cm.",
      "pts": 1
     },
     {
      "t": "Pole 30 cm².",
      "pts": 1
     },
     {
      "t": "CD = 60/13 cm, czyli 4 8/13 cm.",
      "pts": 1
     }
    ],
    "sol": [
     "[[AB = 13]] cm.",
     "[[P = 30]] cm².",
     "[[13 · CD : 2 = 30]], [[CD = 60/13]] cm."
    ],
    "answer": "13 cm, 30 cm², 60/13 cm.",
    "tip": "Pole na dwa sposoby.",
    "check": [
     "5**2 + 12**2 == 13**2",
     "13*F(60, 13)/2 == 30"
    ]
   }
  },
  {
   "id": "c2",
   "level": 3,
   "skills": [
    "G3",
    "G1"
   ],
   "type": "self",
   "q": "Kwadrat ABCD ma bok 8 cm. Punkt E jest środkiem boku BC. Oblicz obwód trójkąta AED. Wynik zapisz w najprostszej postaci. Zapisz obliczenia.",
   "vis": {
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
     "E": [
      8,
      4
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
      "A",
      "E",
      "D"
     ]
    ],
    "shade": [
     1
    ],
    "alt": "Kwadrat ABCD, punkt E w połowie boku BC, zamalowany trójkąt AED."
   },
   "criteria": [
    {
     "t": "Obliczyłeś AE = √(64 + 16) = √80 = 4√5 cm (i zauważyłeś, że DE = AE).",
     "pts": 1
    },
    {
     "t": "Podałeś obwód: 8 + 8√5 cm.",
     "pts": 1
    }
   ],
   "sol": [
    "Trójkąt ABE: [[AB = 8]], [[BE = 4]], [[AE² = 64 + 16 = 80]], [[AE = √80 = 4√5]] cm.",
    "Tak samo [[DE = 4√5]] cm.",
    "Obwód: [[8 + 4√5 + 4√5 = 8 + 8√5]] cm."
   ],
   "answer": "8 + 8√5 cm.",
   "tip": "√80 = √(16 · 5) = 4√5.",
   "check": [
    "8**2 + 4**2 == 80 == 16*5"
   ],
   "twin": {
    "type": "self",
    "q": "Kwadrat ABCD ma bok 6 cm. Punkt E jest środkiem boku BC. Oblicz obwód trójkąta AED. Wynik zapisz w najprostszej postaci. Zapisz obliczenia.",
    "criteria": [
     {
      "t": "AE = √45 = 3√5 cm.",
      "pts": 1
     },
     {
      "t": "Obwód: 6 + 6√5 cm.",
      "pts": 1
     }
    ],
    "sol": [
     "[[AE² = 36 + 9 = 45]], [[AE = 3√5]] cm.",
     "Obwód: [[6 + 6√5]] cm."
    ],
    "answer": "6 + 6√5 cm.",
    "tip": "√45 = √(9 · 5).",
    "check": [
     "6**2 + 3**2 == 45 == 9*5"
    ]
   }
  },
  {
   "id": "c3",
   "level": 3,
   "skills": [
    "G6"
   ],
   "type": "self",
   "q": "Maszt ma 12 m wysokości. Do jego wierzchołka przymocowano 4 liny, a każdą z nich przymocowano do ziemi 5 m od podstawy masztu. Na każdy węzeł trzeba doliczyć 0,5 m liny. Ile metrów liny trzeba kupić? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczyłeś długość jednej liny: √(144 + 25) = 13 m.",
     "pts": 1
    },
    {
     "t": "Doliczyłeś węzeł: 13,5 m na jedną linę.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś całość: 4 · 13,5 = 54 m.",
     "pts": 1
    }
   ],
   "sol": [
    "[[l² = 144 + 25 = 169]], [[l = 13]] m.",
    "Z węzłem: [[13,5]] m.",
    "Razem: [[4 · 13,5 = 54]] m."
   ],
   "answer": "54 m.",
   "tip": "Czytaj uważnie: węzeł jest na każdą linę.",
   "check": [
    "12**2 + 5**2 == 13**2",
    "4*F('13.5') == 54"
   ],
   "twin": {
    "type": "self",
    "q": "Maszt ma 8 m wysokości. Do jego wierzchołka przymocowano 3 liny, każdą 6 m od podstawy masztu. Na każdy węzeł trzeba doliczyć 1 m liny. Ile metrów liny trzeba kupić? Zapisz obliczenia.",
    "criteria": [
     {
      "t": "Jedna lina: 10 m.",
      "pts": 1
     },
     {
      "t": "Z węzłem: 11 m.",
      "pts": 1
     },
     {
      "t": "Razem: 33 m.",
      "pts": 1
     }
    ],
    "sol": [
     "[[l = 10]] m, z węzłem [[11]] m, razem [[33]] m."
    ],
    "answer": "33 m.",
    "tip": "6, 8, 10.",
    "check": [
     "8**2 + 6**2 == 10**2",
     "3*11 == 33"
    ]
   }
  },
  {
   "id": "c4",
   "level": 3,
   "skills": [
    "G2"
   ],
   "type": "fields",
   "q": "Przeciwprostokątna trójkąta prostokątnego ma długość 2√10 cm, a jedna z przyprostokątnych 2 cm. Oblicz drugą przyprostokątną.",
   "fields": [
    {
     "label": "b (cm)",
     "ans": 6,
     "show": "6",
     "why": [
      [
       36,
       "36 to b². Wyciągnij pierwiastek."
      ],
      [
       44,
       "Przy przyprostokątnej odejmujesz: 40 − 4."
      ]
     ]
    }
   ],
   "sol": [
    "[[(2√10)² = 4 · 10 = 40]].",
    "[[b² = 40 − 4 = 36]], [[b = 6]] cm."
   ],
   "answer": "6 cm.",
   "tip": "(2√10)² = 2² · (√10)² = 40.",
   "check": [
    "4*10 - 2**2 == 6**2"
   ],
   "twin": {
    "type": "fields",
    "q": "Przeciwprostokątna trójkąta prostokątnego ma długość 3√5 cm, a jedna z przyprostokątnych 6 cm. Oblicz drugą przyprostokątną.",
    "fields": [
     {
      "label": "b (cm)",
      "ans": 3,
      "show": "3",
      "why": [
       [
        9,
        "9 to b². Wyciągnij pierwiastek."
       ]
      ]
     }
    ],
    "sol": [
     "[[(3√5)² = 45]], [[b² = 45 − 36 = 9]], [[b = 3]] cm."
    ],
    "answer": "3 cm.",
    "tip": "(3√5)² = 9 · 5.",
    "check": [
     "9*5 - 6**2 == 3**2"
    ]
   }
  },
  {
   "id": "c5",
   "level": 3,
   "skills": [
    "G5"
   ],
   "type": "abcd",
   "q": "Trapez prostokątny ma podstawy 9 cm i 3 cm oraz wysokość 8 cm. Obwód tego trapezu jest równy:",
   "opts": [
    "30 cm",
    "28 cm",
    "20 cm",
    "48 cm"
   ],
   "ok": 0,
   "why": {
    "B": "Ukośne ramię ma 10 cm, a nie 8 cm.",
    "C": "Brakuje ukośnego ramienia: 9 + 3 + 8 to tylko trzy boki.",
    "D": "48 cm² to pole trapezu, a nie obwód."
   },
   "sol": [
    "Różnica podstaw: [[6]] cm, ukośne ramię: [[√(36 + 64) = 10]] cm.",
    "Obwód: [[9 + 3 + 8 + 10 = 30]] cm."
   ],
   "answer": "A, 30 cm.",
   "tip": "Ramię ukośne liczysz z Pitagorasa.",
   "check": [
    "6**2 + 8**2 == 10**2",
    "9 + 3 + 8 + 10 == 30",
    "(9 + 3)*8/2 == 48"
   ],
   "twin": {
    "type": "abcd",
    "q": "Trapez prostokątny ma podstawy 13 cm i 4 cm oraz wysokość 12 cm. Obwód tego trapezu jest równy:",
    "opts": [
     "41 cm",
     "29 cm",
     "44 cm",
     "102 cm"
    ],
    "ok": 2,
    "why": {
     "A": "Ukośne ramię ma 15 cm, a nie 12 cm.",
     "B": "Brakuje ukośnego ramienia.",
     "D": "102 cm² to pole trapezu."
    },
    "sol": [
     "Ukośne ramię: [[√(81 + 144) = 15]] cm.",
     "Obwód: [[13 + 4 + 12 + 15 = 44]] cm."
    ],
    "answer": "C, 44 cm.",
    "tip": "9, 12, 15.",
    "check": [
     "9**2 + 12**2 == 15**2",
     "(13 + 4)*12/2 == 102"
    ]
   }
  }
 ],
 "test": [
  {
   "id": "t1",
   "skills": [
    "G1"
   ],
   "type": "fields",
   "q": "Przyprostokątne mają 8 cm i 15 cm. Oblicz przeciwprostokątną.",
   "fields": [
    {
     "label": "c (cm)",
     "ans": 17,
     "show": "17"
    }
   ],
   "sol": [
    "[[c² = 64 + 225 = 289]], [[c = 17]] cm."
   ],
   "answer": "17 cm.",
   "tip": "c² = a² + b².",
   "check": [
    "8**2 + 15**2 == 17**2"
   ],
   "pts": 1
  },
  {
   "id": "t2",
   "skills": [
    "G2"
   ],
   "type": "fields",
   "q": "Przeciwprostokątna ma 13 cm, a jedna przyprostokątna 5 cm. Oblicz drugą przyprostokątną.",
   "fields": [
    {
     "label": "b (cm)",
     "ans": 12,
     "show": "12"
    }
   ],
   "sol": [
    "[[b² = 169 − 25 = 144]], [[b = 12]] cm."
   ],
   "answer": "12 cm.",
   "tip": "Odejmij kwadraty.",
   "check": [
    "13**2 - 5**2 == 12**2"
   ],
   "pts": 1
  },
  {
   "id": "t3",
   "skills": [
    "G1"
   ],
   "type": "abcd",
   "q": "Przyprostokątne mają 2 cm i 4 cm. Przeciwprostokątna ma długość:",
   "opts": [
    "6 cm",
    "20 cm",
    "2√5 cm",
    "√6 cm"
   ],
   "ok": 2,
   "why": {
    "A": "Dodałeś boki zamiast kwadratów.",
    "B": "20 to c².",
    "D": "√6 = √(2 + 4). Pod pierwiastkiem są kwadraty."
   },
   "sol": [
    "[[c² = 4 + 16 = 20]], [[c = 2√5]] cm."
   ],
   "answer": "C, 2√5 cm.",
   "tip": "√20 = √(4 · 5).",
   "check": [
    "2**2 + 4**2 == 20 == 4*5"
   ],
   "pts": 1
  },
  {
   "id": "t4",
   "skills": [
    "G3"
   ],
   "type": "abcd",
   "q": "Przekątna kwadratu o boku 7 cm ma długość:",
   "opts": [
    "7√2 cm",
    "14 cm",
    "49 cm",
    "7 cm"
   ],
   "ok": 0,
   "why": {
    "B": "Przekątna to a√2, a nie 2a.",
    "C": "49 cm² to pole kwadratu.",
    "D": "Przekątna jest dłuższa od boku."
   },
   "sol": [
    "[[d = 7√2]] cm."
   ],
   "answer": "A, 7√2 cm.",
   "tip": "d = a√2.",
   "check": [
    "7**2 + 7**2 == 49*2"
   ],
   "pts": 1
  },
  {
   "id": "t5",
   "skills": [
    "G3",
    "G2"
   ],
   "type": "fields",
   "q": "Przekątna prostokąta ma 25 cm, a jeden z jego boków 7 cm. Oblicz drugi bok i pole prostokąta.",
   "fields": [
    {
     "label": "Drugi bok (cm)",
     "ans": 24,
     "show": "24"
    },
    {
     "label": "Pole (cm²)",
     "ans": 168,
     "show": "168"
    }
   ],
   "sol": [
    "[[b² = 625 − 49 = 576]], [[b = 24]] cm.",
    "[[P = 7 · 24 = 168]] cm²."
   ],
   "answer": "24 cm i 168 cm².",
   "tip": "Przekątna to przeciwprostokątna.",
   "check": [
    "25**2 - 7**2 == 24**2",
    "7*24 == 168"
   ],
   "pts": 1
  },
  {
   "id": "t6",
   "skills": [
    "G4"
   ],
   "type": "abcd",
   "q": "Wysokość trójkąta równobocznego o boku 10 cm ma długość:",
   "opts": [
    "10√3 cm",
    "5 cm",
    "25√3 cm",
    "5√3 cm"
   ],
   "ok": 3,
   "why": {
    "A": "Zapomniałeś podzielić przez 2.",
    "B": "5 cm to połowa boku.",
    "C": "25√3 cm² to pole."
   },
   "sol": [
    "[[h² = 100 − 25 = 75]], [[h = 5√3]] cm."
   ],
   "answer": "D, 5√3 cm.",
   "tip": "h = a√3/2.",
   "check": [
    "100 - 25 == 75 == 25*3"
   ],
   "pts": 1
  },
  {
   "id": "t7",
   "skills": [
    "G4"
   ],
   "type": "fields",
   "q": "Trójkąt równoramienny ma ramiona po 5 cm i podstawę 8 cm. Oblicz jego pole.",
   "fields": [
    {
     "label": "Pole (cm²)",
     "ans": 12,
     "show": "12"
    }
   ],
   "sol": [
    "[[h² = 25 − 16 = 9]], [[h = 3]] cm.",
    "[[P = 8 · 3 : 2 = 12]] cm²."
   ],
   "answer": "12 cm².",
   "tip": "Połowa podstawy: 4.",
   "check": [
    "5**2 - 4**2 == 3**2",
    "8*3/2 == 12"
   ],
   "pts": 1
  },
  {
   "id": "t8",
   "skills": [
    "G5"
   ],
   "type": "fields",
   "q": "Przekątne rombu mają 6 cm i 8 cm. Oblicz bok rombu.",
   "fields": [
    {
     "label": "Bok (cm)",
     "ans": 5,
     "show": "5"
    }
   ],
   "sol": [
    "Połowy: [[3]] i [[4]]. [[bok = 5]] cm."
   ],
   "answer": "5 cm.",
   "tip": "Połowy przekątnych.",
   "check": [
    "3**2 + 4**2 == 5**2"
   ],
   "pts": 1
  },
  {
   "id": "t9",
   "skills": [
    "G6"
   ],
   "type": "fields",
   "q": "Drabina o długości 3,4 m opiera się o ścianę, a jej dolny koniec stoi 1,6 m od ściany. Na jakiej wysokości drabina dotyka ściany?",
   "fields": [
    {
     "label": "Wysokość (m)",
     "ans": 3,
     "show": "3"
    }
   ],
   "sol": [
    "[[h² = 11,56 − 2,56 = 9]], [[h = 3]] m."
   ],
   "answer": "3 m.",
   "tip": "Drabina to przeciwprostokątna.",
   "check": [
    "F('3.4')**2 - F('1.6')**2 == 9"
   ],
   "pts": 1
  },
  {
   "id": "t10",
   "skills": [
    "G1"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Trójkąt prostokątny o przyprostokątnych 1 cm i 2 cm ma przeciwprostokątną √5 cm.",
     "ok": "P"
    },
    {
     "t": "Trójkąt prostokątny o przyprostokątnych 3 cm i 4 cm ma pole 12 cm².",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[1 + 4 = 5]], [[c = √5]]. Prawda.",
    "<b>Zdanie 2.</b> [[P = 3 · 4 : 2 = 6]] cm². Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Pole trójkąta prostokątnego: a · b : 2.",
   "check": [
    "1 + 2**2 == 5",
    "3*4/2 == 6"
   ],
   "pts": 1
  },
  {
   "id": "t11",
   "skills": [
    "G5"
   ],
   "type": "self",
   "q": "Trapez równoramienny ma podstawy 18 cm i 8 cm, a jego ramię ma 13 cm. Oblicz pole trapezu. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczyłeś wysokość: (18 − 8) : 2 = 5, h² = 169 − 25, h = 12 cm.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś pole: (18 + 8) · 12 : 2 = 156 cm².",
     "pts": 1
    }
   ],
   "sol": [
    "[[(18 − 8) : 2 = 5]] cm, [[h = 12]] cm.",
    "[[P = 26 · 12 : 2 = 156]] cm²."
   ],
   "answer": "156 cm².",
   "tip": "Najpierw wysokość.",
   "check": [
    "13**2 - 5**2 == 12**2",
    "26*12/2 == 156"
   ],
   "pts": 2
  },
  {
   "id": "t12",
   "skills": [
    "G6"
   ],
   "type": "self",
   "q": "Z punktu A do punktu B można dojść ulicami: 300 m na wschód, a potem 400 m na północ. Przez łąkę można przejść prosto z A do B. O ile metrów krótsza jest droga przez łąkę? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczyłeś drogę przez łąkę: √(90 000 + 160 000) = 500 m.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś różnicę: 700 − 500 = 200 m.",
     "pts": 1
    }
   ],
   "sol": [
    "[[d² = 90 000 + 160 000 = 250 000]], [[d = 500]] m.",
    "Ulicami [[700]] m, krócej o [[200]] m."
   ],
   "answer": "O 200 m.",
   "tip": "3, 4, 5 razy 100.",
   "check": [
    "300**2 + 400**2 == 500**2",
    "700 - 500 == 200"
   ],
   "pts": 2
  }
 ],
 "test_minutes": 35,
 "pass": 12,
 "dzial": "Dział 3: Geometria"
};
