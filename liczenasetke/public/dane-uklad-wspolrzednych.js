/* Wygenerowane przez zbuduj.py z tresc/uklad-wspolrzednych.py. Nie edytuj ręcznie. */
window.TEMAT = {
 "slug": "uklad-wspolrzednych",
 "title": "Układ współrzędnych",
 "sign": "xy",
 "lead": "Współrzędne punktów, środek odcinka, drugi koniec odcinka, długość odcinka, punkty kratowe na prostej i figury w układzie. Równoległobok w układzie współrzędnych był na egzaminie w 2025 roku.",
 "goals": {
  "learn": "6 umiejętności: współrzędne punktów, środek odcinka, drugi koniec odcinka, długość odcinka, punkty na prostej i figury w układzie współrzędnych.",
  "prereq": "Liczby ujemne (Dział 1) i twierdzenie Pitagorasa. Rozgrzewka na początku to sprawdzi.",
  "goal": "Minimum 12 z 14 punktów w teście na koniec tematu."
 },
 "skills": {
  "U1": "Współrzędne punktów",
  "U2": "Środek odcinka",
  "U3": "Drugi koniec odcinka",
  "U4": "Długość odcinka",
  "U5": "Punkty kratowe na prostej",
  "U6": "Figury w układzie współrzędnych"
 },
 "lessons": [
  {
   "title": "Współrzędne punktów",
   "skills": [
    "U1"
   ],
   "intro": "Układ współrzędnych to dwie prostopadłe osie liczbowe: pozioma oś x i pionowa oś y. Każdy punkt ma adres (x, y): najpierw ruch w prawo lub w lewo, potem w górę lub w dół.",
   "rule": {
    "t": "Punkt (x, y): x mówi, jak daleko w prawo (x > 0) albo w lewo (x < 0) od osi y, a y – jak daleko w górę (y > 0) albo w dół (y < 0) od osi x.",
    "f": [
     "(3, 2): 3 w prawo, 2 w górę",
     "(−3, −1): 3 w lewo, 1 w dół",
     "na osi x: y = 0",
     "na osi y: x = 0"
    ],
    "e": "Kolejność ma znaczenie: (2, 5) i (5, 2) to różne punkty. Najpierw x."
   },
   "visual": {
    "type": "shape",
    "axes": true,
    "grid": true,
    "pts": {
     "A": [
      3,
      2
     ],
     "B": [
      -2,
      4
     ],
     "C": [
      -3,
      -1
     ],
     "D": [
      2,
      -3
     ]
    },
    "polys": [],
    "names": {
     "A": "A(3, 2)",
     "B": "B(−2, 4)",
     "C": "C(−3, −1)",
     "D": "D(2, −3)"
    },
    "alt": "Układ współrzędnych z punktami A(3, 2), B(−2, 4), C(−3, −1) i D(2, −3).",
    "caption": "Każdy punkt: najpierw x (poziomo), potem y (pionowo)"
   },
   "example": {
    "q": "Punkt P leży 4 jednostki na lewo od osi y i 2 jednostki pod osią x. Podaj jego współrzędne. Gdzie leży punkt Q(0, 5)?",
    "steps": [
     "Na lewo od osi y, więc x = −4. Pod osią x, więc y = −2. P(−4, −2).",
     "Punkt Q ma x = 0, czyli nie jest ani na lewo, ani na prawo od osi y. Leży na osi y, 5 jednostek w górę."
    ],
    "result": "P(−4, −2). Q leży na osi y.",
    "tip": "Punkty z x = 0 leżą na osi y, a punkty z y = 0 na osi x. Łatwo to pomylić.",
    "check": [
     "True"
    ]
   },
   "you": [
    {
     "id": "y1",
     "type": "fields",
     "q": "Odczytaj współrzędne punktu P z rysunku.",
     "vis": {
      "type": "shape",
      "axes": true,
      "grid": true,
      "pts": {
       "P": [
        -3,
        4
       ]
      },
      "polys": [],
      "names": {
       "P": "P"
      },
      "alt": "Punkt P w układzie współrzędnych: 3 w lewo i 4 w górę."
     },
     "fields": [
      {
       "label": "x",
       "ans": -3,
       "show": "−3",
       "why": [
        [
         3,
         "P leży na lewo od osi y, więc x jest ujemne."
        ],
        [
         4,
         "Najpierw x, czyli ruch poziomy."
        ]
       ]
      },
      {
       "label": "y",
       "ans": 4,
       "show": "4",
       "why": [
        [
         -3,
         "Najpierw x, potem y. y to ruch pionowy."
        ],
        [
         -4,
         "P leży nad osią x, więc y jest dodatnie."
        ]
       ]
      }
     ],
     "sol": [
      "3 w lewo: [[x = −3]]. 4 w górę: [[y = 4]]. P(−3, 4)."
     ],
     "answer": "P(−3, 4).",
     "tip": "Najpierw x.",
     "check": [
      "True"
     ]
    },
    {
     "id": "y1b",
     "type": "pf",
     "q": "Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "Punkt (0, 5) leży na osi y.",
       "ok": "P"
      },
      {
       "t": "Punkt (−3, 0) leży na osi y.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> x = 0, więc punkt leży na osi y. Prawda.",
      "<b>Zdanie 2.</b> y = 0, więc punkt leży na osi x. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "Zero na miejscu x: oś y. Zero na miejscu y: oś x.",
     "check": [
      "True"
     ]
    }
   ]
  },
  {
   "title": "Środek odcinka",
   "skills": [
    "U2"
   ],
   "intro": "Środek odcinka leży dokładnie w połowie drogi. Jego współrzędne to średnie współrzędnych końców: średnia z x-ów i średnia z y-ów.",
   "rule": {
    "t": "Środek odcinka o końcach A(x₁, y₁) i B(x₂, y₂): S = ((x₁ + x₂) : 2, (y₁ + y₂) : 2).",
    "f": [
     "A(−2, 1), B(4, 5): S = (1, 3)",
     "A(−1, 3), B(4, 3): S = (1,5; 3)",
     "gdy współrzędne są ułamkami, oddziela się je średnikiem"
    ],
    "e": "Dodajesz współrzędne i dzielisz przez 2. Nie odejmuj ich: różnica mówi o długości, a nie o położeniu środka."
   },
   "visual": {
    "type": "shape",
    "axes": true,
    "grid": true,
    "pts": {
     "A": [
      -2,
      1
     ],
     "B": [
      4,
      5
     ],
     "S": [
      1,
      3
     ]
    },
    "polys": [
     [
      "A",
      "B"
     ]
    ],
    "names": {
     "A": "A(−2, 1)",
     "B": "B(4, 5)",
     "S": "S(1, 3)"
    },
    "alt": "Odcinek AB z końcami A(−2, 1) i B(4, 5) oraz środkiem S(1, 3).",
    "caption": "S = ((−2 + 4) : 2, (1 + 5) : 2) = (1, 3)"
   },
   "example": {
    "q": "Oblicz współrzędne środka odcinka AB, gdzie A(−3, 2) i B(5, −4).",
    "steps": [
     "x środka: (−3 + 5) : 2 = 2 : 2 = 1.",
     "y środka: (2 + (−4)) : 2 = −2 : 2 = −1."
    ],
    "result": "S(1, −1).",
    "tip": "Sprawdzenie: z A do S jest 4 w prawo i 3 w dół, z S do B też 4 w prawo i 3 w dół.",
    "check": [
     "(-3 + 5)/2 == 1",
     "(2 - 4)/2 == -1"
    ]
   },
   "you": [
    {
     "id": "y2",
     "type": "fields",
     "q": "Oblicz współrzędne środka odcinka AB, gdzie A(2, 7) i B(6, −1).",
     "fields": [
      {
       "label": "x",
       "ans": 4,
       "show": "4",
       "why": [
        [
         2,
         "(6 − 2) : 2 to połowa długości. Środek: (2 + 6) : 2."
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
         "(−1 − 7) : 2 to połowa różnicy. Środek: (7 + (−1)) : 2."
        ],
        [
         6,
         "Nie podzieliłeś przez 2."
        ]
       ]
      }
     ],
     "sol": [
      "[[(2 + 6) : 2 = 4]], [[(7 − 1) : 2 = 3]]. S(4, 3)."
     ],
     "answer": "S(4, 3).",
     "tip": "Średnie współrzędnych.",
     "check": [
      "(2 + 6)/2 == 4",
      "(7 - 1)/2 == 3"
     ]
    },
    {
     "id": "y2b",
     "type": "abcd",
     "q": "Środkiem odcinka o końcach A(−1, 3) i B(4, 3) jest punkt:",
     "opts": [
      "(1,5; 3)",
      "(2,5; 3)",
      "(3; 6)",
      "(1,5; 0)"
     ],
     "ok": 0,
     "why": {
      "B": "2,5 to połowa długości odcinka (5 : 2), a nie współrzędna. x = (−1 + 4) : 2.",
      "C": "Dodałeś współrzędne, ale nie podzieliłeś przez 2.",
      "D": "y środka to (3 + 3) : 2 = 3, a nie 0."
     },
     "sol": [
      "[[x = (−1 + 4) : 2 = 1,5]], [[y = (3 + 3) : 2 = 3]]."
     ],
     "answer": "A, (1,5; 3).",
     "tip": "Przy ułamkach średnik oddziela x od y.",
     "check": [
      "F(-1 + 4, 2) == F('1.5')"
     ]
    }
   ]
  },
  {
   "title": "Drugi koniec odcinka",
   "skills": [
    "U3"
   ],
   "intro": "Czasem znasz jeden koniec odcinka i jego środek, a szukasz drugiego końca. Środek jest w połowie drogi, więc od środka idziesz dalej o tyle samo, ile z A do środka.",
   "rule": {
    "t": "Drugi koniec: B = S + (S − A), czyli x_B = 2 · x_S − x_A i y_B = 2 · y_S − y_A.",
    "f": [
     "A(1, 2), S(4, −1): z A do S +3 w prawo, −3 w dół",
     "B = (4 + 3, −1 − 3) = (7, −4)"
    ],
    "e": "Nie licz średniej z A i S. Wynik byłby środkiem odcinka AS, a nie końcem B."
   },
   "visual": {
    "type": "shape",
    "axes": true,
    "grid": true,
    "pts": {
     "A": [
      1,
      2
     ],
     "S": [
      4,
      -1
     ],
     "B": [
      7,
      -4
     ]
    },
    "polys": [
     [
      "A",
      "B"
     ]
    ],
    "names": {
     "A": "A(1, 2)",
     "S": "S(4, −1)",
     "B": "B(7, −4)"
    },
    "alt": "A(1, 2), środek S(4, −1) i drugi koniec B(7, −4).",
    "caption": "Z A do S: 3 w prawo i 3 w dół. Z S do B: znowu 3 w prawo i 3 w dół"
   },
   "example": {
    "q": "Punkt S(4, −1) jest środkiem odcinka AB, a A(1, 2). Oblicz współrzędne punktu B.",
    "steps": [
     "Z A do S: x rośnie o 4 − 1 = 3, y zmienia się o −1 − 2 = −3.",
     "Z S do B tak samo: x_B = 4 + 3 = 7, y_B = −1 + (−3) = −4.",
     "Sprawdzenie: środek A(1, 2) i B(7, −4) to ((1 + 7) : 2, (2 − 4) : 2) = (4, −1)."
    ],
    "result": "B(7, −4).",
    "tip": "Zawsze sprawdź wynik, licząc środek odcinka AB.",
    "check": [
     "2*4 - 1 == 7",
     "2*(-1) - 2 == -4",
     "(1 + 7)/2 == 4"
    ]
   },
   "you": [
    {
     "id": "y3",
     "type": "fields",
     "q": "Punkt S(1, 1) jest środkiem odcinka AB, a A(−2, 5). Oblicz współrzędne punktu B.",
     "fields": [
      {
       "label": "x",
       "ans": 4,
       "show": "4",
       "why": [
        [
         -0.5,
         "To średnia z A i S, czyli środek odcinka AS. B = 2S − A."
        ]
       ]
      },
      {
       "label": "y",
       "ans": -3,
       "show": "−3",
       "why": [
        [
         3,
         "To średnia z A i S. y_B = 2 · 1 − 5."
        ]
       ]
      }
     ],
     "sol": [
      "[[x_B = 2 · 1 − (−2) = 4]], [[y_B = 2 · 1 − 5 = −3]]. B(4, −3)."
     ],
     "answer": "B(4, −3).",
     "tip": "Sprawdzenie: ((−2 + 4) : 2, (5 − 3) : 2) = (1, 1).",
     "check": [
      "2*1 + 2 == 4",
      "2*1 - 5 == -3"
     ]
    },
    {
     "id": "y3b",
     "type": "abcd",
     "q": "Punkt S(0, 0) jest środkiem odcinka AB, a A(3, −5). Punkt B ma współrzędne:",
     "opts": [
      "(−3, 5)",
      "(1,5; −2,5)",
      "(3, 5)",
      "(−3, −5)"
     ],
     "ok": 0,
     "why": {
      "B": "To środek odcinka AS, a nie punkt B.",
      "C": "Zmieniłeś znak tylko jednej współrzędnej.",
      "D": "Zmieniłeś znak tylko jednej współrzędnej."
     },
     "sol": [
      "Środek to (0, 0), więc B jest „po drugiej stronie” zera: [[B(−3, 5)]]."
     ],
     "answer": "A, (−3, 5).",
     "tip": "Gdy środkiem jest (0, 0), zmieniasz znaki obu współrzędnych.",
     "check": [
      "2*0 - 3 == -3"
     ]
    }
   ]
  },
  {
   "title": "Długość odcinka",
   "skills": [
    "U4"
   ],
   "intro": "Odcinek poziomy lub pionowy mierzysz, odejmując współrzędne. Odcinek ukośny jest przeciwprostokątną trójkąta prostokątnego: jego przyprostokątne to przesunięcie w poziomie i w pionie.",
   "rule": {
    "t": "Długość AB: policz przesunięcie w poziomie (różnica x) i w pionie (różnica y), a potem użyj twierdzenia Pitagorasa.",
    "f": [
     "A(1, 1), B(5, 4): 4 w prawo, 3 w górę",
     "|AB|² = 4² + 3² = 25, |AB| = 5",
     "poziomy: A(−3, 2), B(5, 2): |AB| = 5 − (−3) = 8"
    ],
    "e": "Długość nie może być ujemna. Przesunięcie −6 to też 6 kratek."
   },
   "visual": {
    "type": "shape",
    "axes": true,
    "grid": true,
    "pts": {
     "A": [
      1,
      1
     ],
     "B": [
      5,
      4
     ],
     "K": [
      5,
      1
     ]
    },
    "polys": [
     [
      "A",
      "B"
     ]
    ],
    "names": {
     "A": "A",
     "B": "B",
     "K": ""
    },
    "segs": [
     [
      "A",
      "K"
     ],
     [
      "K",
      "B"
     ]
    ],
    "angles": [
     {
      "at": "K",
      "from": "A",
      "to": "B",
      "right": true
     }
    ],
    "sides": [
     [
      "A",
      "K",
      "4"
     ],
     [
      "K",
      "B",
      "3"
     ]
    ],
    "alt": "Odcinek AB od (1, 1) do (5, 4) z trójkątem prostokątnym o przyprostokątnych 4 i 3.",
    "caption": "|AB| = √(4² + 3²) = 5"
   },
   "example": {
    "q": "Oblicz długość odcinka AB, gdzie A(−2, −1) i B(4, 7).",
    "steps": [
     "W poziomie: 4 − (−2) = 6. W pionie: 7 − (−1) = 8.",
     "|AB|² = 6² + 8² = 36 + 64 = 100.",
     "|AB| = 10."
    ],
    "result": "Odcinek AB ma długość 10.",
    "tip": "Narysuj „schodek” z A do B: kratki w prawo i kratki w górę to przyprostokątne.",
    "check": [
     "(4 + 2)**2 + (7 + 1)**2 == 10**2"
    ]
   },
   "you": [
    {
     "id": "y4",
     "type": "fields",
     "q": "Oblicz długość odcinka AB, gdzie A(1, 2) i B(4, 6).",
     "fields": [
      {
       "label": "|AB|",
       "ans": 5,
       "show": "5",
       "why": [
        [
         7,
         "Dodałeś przesunięcia 3 i 4. Długość: √(9 + 16)."
        ]
       ]
      }
     ],
     "sol": [
      "Przesunięcia: [[3]] i [[4]].",
      "[[|AB| = √(9 + 16) = 5]]."
     ],
     "answer": "5.",
     "tip": "3, 4, 5.",
     "check": [
      "3**2 + 4**2 == 5**2"
     ]
    },
    {
     "id": "y4b",
     "type": "abcd",
     "q": "Długość odcinka o końcach A(−1, 1) i B(1, 5) jest równa:",
     "opts": [
      "2√5",
      "6",
      "20",
      "√6"
     ],
     "ok": 0,
     "why": {
      "B": "Dodałeś przesunięcia 2 i 4. Trzeba dodać ich kwadraty.",
      "C": "20 to kwadrat długości. Wyciągnij pierwiastek.",
      "D": "√6 = √(2 + 4). Pod pierwiastkiem są kwadraty: 4 + 16."
     },
     "sol": [
      "Przesunięcia: [[2]] i [[4]].",
      "[[|AB| = √(4 + 16) = √20 = 2√5]]."
     ],
     "answer": "A, 2√5.",
     "tip": "√20 = √(4 · 5).",
     "check": [
      "2**2 + 4**2 == 20 == 4*5"
     ]
    }
   ]
  },
  {
   "title": "Punkty kratowe na prostej",
   "skills": [
    "U5"
   ],
   "intro": "Punkt kratowy ma obie współrzędne całkowite. Jeśli prosta przechodzi przez dwa punkty kratowe, to idąc od jednego do drugiego tym samym „krokiem”, trafiasz na kolejne punkty kratowe tej prostej.",
   "rule": {
    "t": "Oblicz przesunięcie z A do B. Podziel obie liczby przez ich NWD: to najmniejszy krok. Dodawaj lub odejmuj ten krok od A.",
    "f": [
     "A(0, 1), B(6, 5): przesunięcie (6, 4), NWD = 2",
     "krok: (3, 2)",
     "punkty: (3, 3), (9, 7), (−3, −1)"
    ],
    "e": "Krok musi być ten sam w obu współrzędnych naraz: 3 w prawo i jednocześnie 2 w górę."
   },
   "visual": {
    "type": "shape",
    "axes": true,
    "grid": true,
    "pts": {
     "A": [
      0,
      1
     ],
     "P": [
      3,
      3
     ],
     "B": [
      6,
      5
     ],
     "Q": [
      -3,
      -1
     ]
    },
    "polys": [
     [
      "Q",
      "B"
     ]
    ],
    "names": {
     "A": "A",
     "P": "P",
     "B": "B",
     "Q": "Q"
    },
    "alt": "Prosta przez A(0, 1) i B(6, 5) z punktami kratowymi co 3 w prawo i 2 w górę.",
    "caption": "Krok (3, 2): z A(0, 1) do P(3, 3), potem do B(6, 5). W drugą stronę: Q(−3, −1)"
   },
   "example": {
    "q": "Prosta przechodzi przez punkty A(0, 1) i B(6, 5). Podaj trzy inne punkty kratowe tej prostej.",
    "steps": [
     "Przesunięcie z A do B: 6 w prawo i 4 w górę. NWD(6, 4) = 2.",
     "Najmniejszy krok: 3 w prawo i 2 w górę.",
     "Punkty: A + krok = (3, 3), B + krok = (9, 7), A − krok = (−3, −1)."
    ],
    "result": "Na przykład (3, 3), (9, 7) i (−3, −1).",
    "tip": "NWD znasz z tematu „Podzielność”.",
    "check": [
     "math.gcd(6, 4) == 2"
    ]
   },
   "you": [
    {
     "id": "y5",
     "type": "abcd",
     "q": "Prosta przechodzi przez punkty A(1, 1) i B(5, 3). Który punkt też leży na tej prostej?",
     "opts": [
      "(9, 5)",
      "(8, 5)",
      "(4, 3)",
      "(6, 3)"
     ],
     "ok": 0,
     "why": {
      "B": "Z A do (8, 5): 7 w prawo i 4 w górę. To nie jest wielokrotność kroku (2, 1).",
      "C": "Z A do (4, 3): 3 w prawo i 2 w górę, a na tej prostej 3 w prawo daje 1,5 w górę.",
      "D": "Z A do (6, 3): 5 w prawo daje na prostej 2,5 w górę, a nie 2."
     },
     "sol": [
      "Przesunięcie (4, 2), krok [[(2, 1)]].",
      "Z B(5, 3): [[(7, 4)]], potem [[(9, 5)]]."
     ],
     "answer": "A, (9, 5).",
     "tip": "Krok (2, 1): 2 w prawo, 1 w górę.",
     "check": [
      "math.gcd(4, 2) == 2",
      "(9 - 1)*1 == (5 - 1)*2"
     ]
    },
    {
     "id": "y5b",
     "type": "pf",
     "q": "Prosta przechodzi przez punkty O(0, 0) i B(4, 2). Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "Punkt (2, 1) leży na tej prostej.",
       "ok": "P"
      },
      {
       "t": "Punkt (6, 4) leży na tej prostej.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> Krok [[(2, 1)]]: z O(0, 0) do (2, 1). Prawda.",
      "<b>Zdanie 2.</b> Po (4, 2) jest [[(6, 3)]], a nie (6, 4). Fałsz."
     ],
     "answer": "P, F.",
     "tip": "Na tej prostej y jest zawsze połową x.",
     "check": [
      "6/2 == 3"
     ]
    }
   ]
  },
  {
   "title": "Figury w układzie współrzędnych",
   "skills": [
    "U6"
   ],
   "intro": "Gdy wierzchołki figury są w punktach kratowych, boki poziome i pionowe odczytasz z kratek, a wysokości często też. Czwarty wierzchołek równoległoboku znajdziesz, przesuwając punkt tak samo, jak przesuwa się przeciwległy bok. Takie zadanie było na egzaminie w 2025 roku.",
   "rule": {
    "t": "Równoległobok ABCD: przesunięcie z B do C jest takie samo jak z A do D. Pole: podstawa z kratek razy wysokość z kratek.",
    "f": [
     "A(−2, −1), B(3, −1), C(5, 3)",
     "z B do C: 2 w prawo, 4 w górę",
     "D = A + (2, 4) = (0, 3)",
     "pole: 5 · 4 = 20"
    ],
    "e": "Kolejność liter ABCD idzie dookoła figury. D leży naprzeciw B, a nie naprzeciw A."
   },
   "visual": {
    "type": "shape",
    "axes": true,
    "grid": true,
    "pts": {
     "A": [
      -2,
      -1
     ],
     "B": [
      3,
      -1
     ],
     "C": [
      5,
      3
     ],
     "D": [
      0,
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
    "names": {
     "A": "A(−2, −1)",
     "B": "B(3, −1)",
     "C": "C(5, 3)",
     "D": "D(0, 3)"
    },
    "shade": [
     0
    ],
    "alt": "Równoległobok o wierzchołkach A(−2, −1), B(3, −1), C(5, 3) i D(0, 3).",
    "caption": "AB = 5 kratek, wysokość = 4 kratki, pole = 20"
   },
   "example": {
    "q": "Punkty A(−2, −1), B(3, −1) i C(5, 3) są wierzchołkami równoległoboku ABCD. Oblicz współrzędne punktu D i pole równoległoboku.",
    "steps": [
     "Z B do C: x rośnie o 2, y rośnie o 4. Tak samo z A do D: D = (−2 + 2, −1 + 4) = (0, 3).",
     "Bok AB jest poziomy: 3 − (−2) = 5. Wysokość to odległość między prostymi y = −1 i y = 3: 4.",
     "Pole: 5 · 4 = 20."
    ],
    "result": "D(0, 3), pole 20.",
    "tip": "Sprawdzenie: środki przekątnych AC i BD to ten sam punkt (1,5; 1).",
    "check": [
     "-2 + 2 == 0",
     "-1 + 4 == 3",
     "5*4 == 20",
     "F(-2 + 5, 2) == F(3 + 0, 2)"
    ]
   },
   "you": [
    {
     "id": "y6",
     "type": "fields",
     "q": "Oblicz pole trójkąta o wierzchołkach A(−3, 0), B(3, 0) i C(1, 5).",
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
        3,
        0
       ],
       "C": [
        1,
        5
       ]
      },
      "polys": [
       [
        "A",
        "B",
        "C"
       ]
      ],
      "names": {
       "A": "A",
       "B": "B",
       "C": "C"
      },
      "shade": [
       0
      ],
      "alt": "Trójkąt ABC z podstawą AB na osi x i wierzchołkiem C(1, 5)."
     },
     "fields": [
      {
       "label": "Pole",
       "ans": 15,
       "show": "15",
       "why": [
        [
         30,
         "Zapomniałeś podzielić przez 2."
        ]
       ]
      }
     ],
     "sol": [
      "Podstawa AB: [[3 − (−3) = 6]], wysokość: [[5]].",
      "[[P = 6 · 5 : 2 = 15]]."
     ],
     "answer": "15.",
     "tip": "Wysokość to odległość C od osi x.",
     "check": [
      "6*5/2 == 15"
     ]
    },
    {
     "id": "y6b",
     "type": "fields",
     "q": "Prostokąt ABCD ma wierzchołki A(1, 1), B(6, 1) i C(6, 4). Oblicz współrzędne punktu D.",
     "fields": [
      {
       "label": "x",
       "ans": 1,
       "show": "1"
      },
      {
       "label": "y",
       "ans": 4,
       "show": "4",
       "why": [
        [
         1,
         "D leży nad A, na wysokości C."
        ]
       ]
      }
     ],
     "sol": [
      "D leży nad A i na wysokości C: [[D(1, 4)]]."
     ],
     "answer": "D(1, 4).",
     "tip": "Narysuj to na kratce.",
     "check": [
      "True"
     ]
    }
   ]
  }
 ],
 "traps": [
  {
   "name": "Zamienione współrzędne",
   "bad": "3 w lewo i 4 w górę: (4, −3)",
   "good": "najpierw x: (−3, 4)"
  },
  {
   "name": "Różnica zamiast średniej",
   "bad": "środek A(2, 7) i B(6, −1): ((6 − 2) : 2, …)",
   "good": "((2 + 6) : 2, (7 − 1) : 2) = (4, 3)"
  },
  {
   "name": "Dodawanie przesunięć",
   "bad": "3 w prawo i 4 w górę: |AB| = 7",
   "good": "|AB| = √(9 + 16) = 5"
  }
 ],
 "cheat": {
  "title": "Układ współrzędnych w 6 zasadach",
  "rules": [
   {
    "t": "Punkt (x, y).",
    "f": [
     "x: w prawo +, w lewo −",
     "y: w górę +, w dół −"
    ],
    "e": "Oś x: y = 0. Oś y: x = 0."
   },
   {
    "t": "Środek odcinka: średnie.",
    "f": [
     "((x₁ + x₂) : 2, (y₁ + y₂) : 2)"
    ],
    "e": "Przy ułamkach średnik: (1,5; 3)."
   },
   {
    "t": "Drugi koniec.",
    "f": [
     "B = 2S − A"
    ],
    "e": "Sprawdź, licząc środek AB."
   },
   {
    "t": "Długość odcinka.",
    "f": [
     "|AB|² = (różnica x)² + (różnica y)²"
    ],
    "e": "Przesunięcia to przyprostokątne."
   },
   {
    "t": "Punkty na prostej.",
    "f": [
     "krok = przesunięcie : NWD"
    ],
    "e": "Krok naraz w x i w y."
   },
   {
    "t": "Figury.",
    "f": [
     "równoległobok: z A do D jak z B do C",
     "pole z kratek"
    ],
    "e": "Litery idą dookoła figury."
   }
  ]
 },
 "memo": {
  "title": "Wzory w układzie współrzędnych",
  "rows": [
   [
    "środek",
    "drugi koniec",
    "długość"
   ],
   [
    "((x₁ + x₂) : 2, (y₁ + y₂) : 2)",
    "(2x_S − x_A, 2y_S − y_A)",
    "√((x₂ − x₁)² + (y₂ − y₁)²)"
   ]
  ],
  "note": "Punkt kratowy ma obie współrzędne całkowite."
 },
 "warmup": {
  "id": "w0",
  "type": "fields",
  "q": "Rozgrzewka: liczby ujemne.",
  "fields": [
   {
    "label": "5 − (−3)",
    "ans": 8,
    "show": "8"
   },
   {
    "label": "(−7 + 3) : 2",
    "ans": -2,
    "show": "−2"
   },
   {
    "label": "2 · (−1) − 4",
    "ans": -6,
    "show": "−6"
   }
  ],
  "sol": [
   "<b>5 − (−3)</b> = 5 + 3 = [[8]].",
   "<b>(−7 + 3) : 2</b> = −4 : 2 = [[−2]].",
   "<b>2 · (−1) − 4</b> = −2 − 4 = [[−6]]."
  ],
  "answer": "8, −2 i −6.",
  "tip": "W układzie współrzędnych ciągle liczysz na liczbach ujemnych. Jeśli coś nie wyszło, wróć do tematu „Liczby i działania”.",
  "check": [
   "5 + 3 == 8",
   "(-7 + 3)/2 == -2",
   "2*(-1) - 4 == -6"
  ]
 },
 "levels": [
  {
   "n": 1,
   "name": "Podstawy",
   "desc": "Odczytywanie punktów, środek odcinka i długość. Rysuj na kratce, to bardzo pomaga."
  },
  {
   "n": 2,
   "name": "Trening",
   "desc": "Drugi koniec odcinka, punkty na prostej, figury w układzie. Zadania jak na egzaminie."
  },
  {
   "n": 3,
   "name": "Egzamin",
   "desc": "Zadania otwarte z punktacją. Rozwiązuj na kartce, a potem oceniaj się według punktacji."
  }
 ],
 "practice": [
  {
   "id": "a1",
   "level": 1,
   "skills": [
    "U1"
   ],
   "type": "fields",
   "q": "Odczytaj współrzędne punktu P z rysunku.",
   "vis": {
    "type": "shape",
    "axes": true,
    "grid": true,
    "pts": {
     "P": [
      5,
      -2
     ]
    },
    "polys": [],
    "names": {
     "P": "P"
    },
    "alt": "Punkt P: 5 w prawo i 2 w dół."
   },
   "fields": [
    {
     "label": "x",
     "ans": 5,
     "show": "5",
     "why": [
      [
       -2,
       "Najpierw x, czyli ruch poziomy."
      ],
      [
       -5,
       "P leży na prawo od osi y, więc x jest dodatnie."
      ]
     ]
    },
    {
     "label": "y",
     "ans": -2,
     "show": "−2",
     "why": [
      [
       2,
       "P leży pod osią x, więc y jest ujemne."
      ],
      [
       5,
       "Najpierw x, potem y."
      ]
     ]
    }
   ],
   "sol": [
    "5 w prawo: [[x = 5]]. 2 w dół: [[y = −2]]. P(5, −2)."
   ],
   "answer": "P(5, −2).",
   "tip": "Najpierw x.",
   "check": [
    "True"
   ],
   "twin": {
    "type": "fields",
    "q": "Odczytaj współrzędne punktu P z rysunku.",
    "vis": {
     "type": "shape",
     "axes": true,
     "grid": true,
     "pts": {
      "P": [
       -4,
       -3
      ]
     },
     "polys": [],
     "names": {
      "P": "P"
     },
     "alt": "Punkt P: 4 w lewo i 3 w dół."
    },
    "fields": [
     {
      "label": "x",
      "ans": -4,
      "show": "−4",
      "why": [
       [
        4,
        "P leży na lewo od osi y."
       ],
       [
        -3,
        "Najpierw x."
       ]
      ]
     },
     {
      "label": "y",
      "ans": -3,
      "show": "−3",
      "why": [
       [
        3,
        "P leży pod osią x."
       ],
       [
        -4,
        "Najpierw x, potem y."
       ]
      ]
     }
    ],
    "sol": [
     "[[P(−4, −3)]]."
    ],
    "answer": "P(−4, −3).",
    "tip": "Lewo i dół to minusy.",
    "check": [
     "True"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Odczytaj współrzędne punktu P z rysunku.",
    "vis": {
     "type": "shape",
     "axes": true,
     "grid": true,
     "pts": {
      "P": [
       0,
       -3
      ]
     },
     "polys": [],
     "names": {
      "P": "P"
     },
     "alt": "Punkt P na osi y, 3 w dół."
    },
    "fields": [
     {
      "label": "x",
      "ans": 0,
      "show": "0"
     },
     {
      "label": "y",
      "ans": -3,
      "show": "−3"
     }
    ],
    "sol": [
     "P leży na osi y: [[P(0, −3)]]."
    ],
    "answer": "P(0, −3).",
    "tip": "Na osi y: x = 0.",
    "check": [
     "True"
    ]
   }
  },
  {
   "id": "a2",
   "level": 1,
   "skills": [
    "U1"
   ],
   "type": "abcd",
   "q": "Który punkt leży na osi y?",
   "opts": [
    "(−4, 0)",
    "(4, 4)",
    "(0, −4)",
    "(−4, −4)"
   ],
   "ok": 2,
   "why": {
    "A": "Ten punkt ma y = 0, więc leży na osi x.",
    "B": "Ten punkt nie leży na żadnej osi.",
    "D": "Ten punkt nie leży na żadnej osi."
   },
   "sol": [
    "Na osi y leżą punkty z [[x = 0]]."
   ],
   "answer": "C, (0, −4).",
   "tip": "Zero na miejscu x.",
   "check": [
    "True"
   ],
   "twin": {
    "type": "abcd",
    "q": "Który punkt leży poniżej osi x i na lewo od osi y?",
    "opts": [
     "(−2, −6)",
     "(2, −6)",
     "(−2, 6)",
     "(6, −2)"
    ],
    "ok": 0,
    "why": {
     "B": "x = 2 > 0, więc punkt jest na prawo od osi y.",
     "C": "y = 6 > 0, więc punkt jest nad osią x.",
     "D": "x = 6 > 0, więc punkt jest na prawo od osi y."
    },
    "sol": [
     "Oba znaki ujemne: [[x < 0]] i [[y < 0]]."
    ],
    "answer": "A, (−2, −6).",
    "tip": "Lewo: x ujemne. Dół: y ujemne.",
    "check": [
     "True"
    ]
   }
  },
  {
   "id": "a3",
   "level": 1,
   "skills": [
    "U2"
   ],
   "type": "fields",
   "q": "Oblicz współrzędne środka odcinka AB, gdzie A(2, −3) i B(8, 5).",
   "fields": [
    {
     "label": "x",
     "ans": 5,
     "show": "5",
     "why": [
      [
       3,
       "To połowa różnicy (8 − 2) : 2. Środek to średnia: (2 + 8) : 2."
      ],
      [
       10,
       "Nie podzieliłeś przez 2."
      ]
     ]
    },
    {
     "label": "y",
     "ans": 1,
     "show": "1",
     "why": [
      [
       4,
       "To połowa różnicy. Średnia: (−3 + 5) : 2."
      ],
      [
       2,
       "Nie podzieliłeś przez 2."
      ]
     ]
    }
   ],
   "sol": [
    "[[(2 + 8) : 2 = 5]], [[(−3 + 5) : 2 = 1]]. S(5, 1)."
   ],
   "answer": "S(5, 1).",
   "tip": "Średnie współrzędnych.",
   "check": [
    "(2 + 8)/2 == 5",
    "(-3 + 5)/2 == 1"
   ],
   "twin": {
    "type": "fields",
    "q": "Oblicz współrzędne środka odcinka AB, gdzie A(−4, 1) i B(6, −7).",
    "fields": [
     {
      "label": "x",
      "ans": 1,
      "show": "1",
      "why": [
       [
        5,
        "To połowa różnicy. Średnia: (−4 + 6) : 2."
       ]
      ]
     },
     {
      "label": "y",
      "ans": -3,
      "show": "−3",
      "why": [
       [
        -4,
        "To połowa różnicy. Średnia: (1 + (−7)) : 2."
       ]
      ]
     }
    ],
    "sol": [
     "[[(−4 + 6) : 2 = 1]], [[(1 − 7) : 2 = −3]]. S(1, −3)."
    ],
    "answer": "S(1, −3).",
    "tip": "Uważaj na znaki.",
    "check": [
     "(-4 + 6)/2 == 1",
     "(1 - 7)/2 == -3"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Oblicz współrzędne środka odcinka AB, gdzie A(−1, −2) i B(−5, 4).",
    "fields": [
     {
      "label": "x",
      "ans": -3,
      "show": "−3"
     },
     {
      "label": "y",
      "ans": 1,
      "show": "1"
     }
    ],
    "sol": [
     "[[(−1 − 5) : 2 = −3]], [[(−2 + 4) : 2 = 1]]. S(−3, 1)."
    ],
    "answer": "S(−3, 1).",
    "tip": "Średnie.",
    "check": [
     "(-1 - 5)/2 == -3",
     "(-2 + 4)/2 == 1"
    ]
   }
  },
  {
   "id": "a4",
   "level": 1,
   "skills": [
    "U2"
   ],
   "type": "abcd",
   "q": "Środkiem odcinka o końcach A(−5, 2) i B(2, −1) jest punkt:",
   "opts": [
    "(3,5; 1,5)",
    "(−3; 1)",
    "(1,5; −0,5)",
    "(−1,5; 0,5)"
   ],
   "ok": 3,
   "why": {
    "A": "Liczysz połowę różnicy, a trzeba średnią współrzędnych.",
    "B": "Nie podzieliłeś sum przez 2.",
    "C": "Pomylone znaki: (−5 + 2) : 2 = −1,5 i (2 − 1) : 2 = 0,5."
   },
   "sol": [
    "[[x = (−5 + 2) : 2 = −1,5]], [[y = (2 − 1) : 2 = 0,5]]."
   ],
   "answer": "D, (−1,5; 0,5).",
   "tip": "Ułamkowe współrzędne rozdziela średnik.",
   "check": [
    "F(-5 + 2, 2) == F('-1.5')",
    "F(2 - 1, 2) == F('0.5')"
   ],
   "twin": {
    "type": "abcd",
    "q": "Środkiem odcinka o końcach A(3, −1) i B(−2, 4) jest punkt:",
    "opts": [
     "(2,5; 2,5)",
     "(0,5; 1,5)",
     "(1; 3)",
     "(−0,5; 1,5)"
    ],
    "ok": 1,
    "why": {
     "A": "To połowy różnic, a nie średnie.",
     "C": "Nie podzieliłeś sum przez 2.",
     "D": "Pomylony znak: (3 + (−2)) : 2 = 0,5."
    },
    "sol": [
     "[[x = (3 − 2) : 2 = 0,5]], [[y = (−1 + 4) : 2 = 1,5]]."
    ],
    "answer": "B, (0,5; 1,5).",
    "tip": "Średnie.",
    "check": [
     "F(1, 2) == F('0.5')",
     "F(3, 2) == F('1.5')"
    ]
   }
  },
  {
   "id": "a5",
   "level": 1,
   "skills": [
    "U4"
   ],
   "type": "fields",
   "q": "Oblicz długość odcinka AB, gdzie A(−3, 2) i B(5, 2).",
   "fields": [
    {
     "label": "|AB|",
     "ans": 8,
     "show": "8",
     "why": [
      [
       2,
       "Od −3 do 5 jest 5 − (−3) = 8 kratek, a nie 5 + (−3)."
      ],
      [
       -8,
       "Długość nie może być ujemna."
      ]
     ]
    }
   ],
   "sol": [
    "Odcinek poziomy: [[5 − (−3) = 8]]."
   ],
   "answer": "8.",
   "tip": "Policz kratki na rysunku.",
   "check": [
    "5 + 3 == 8"
   ],
   "twin": {
    "type": "fields",
    "q": "Oblicz długość odcinka AB, gdzie A(1, −4) i B(1, 6).",
    "fields": [
     {
      "label": "|AB|",
      "ans": 10,
      "show": "10",
      "why": [
       [
        2,
        "Od −4 do 6 jest 6 − (−4) = 10."
       ]
      ]
     }
    ],
    "sol": [
     "Odcinek pionowy: [[6 − (−4) = 10]]."
    ],
    "answer": "10.",
    "tip": "Odejmij y.",
    "check": [
     "6 + 4 == 10"
    ]
   }
  },
  {
   "id": "a6",
   "level": 1,
   "skills": [
    "U4"
   ],
   "type": "fields",
   "q": "Oblicz długość odcinka AB, gdzie A(1, 1) i B(7, 9).",
   "vis": {
    "type": "shape",
    "axes": true,
    "grid": true,
    "pts": {
     "A": [
      1,
      1
     ],
     "B": [
      7,
      9
     ]
    },
    "polys": [
     [
      "A",
      "B"
     ]
    ],
    "names": {
     "A": "A",
     "B": "B"
    },
    "alt": "Odcinek AB od (1, 1) do (7, 9)."
   },
   "fields": [
    {
     "label": "|AB|",
     "ans": 10,
     "show": "10",
     "why": [
      [
       14,
       "Dodałeś przesunięcia 6 i 8. Długość: √(36 + 64)."
      ],
      [
       100,
       "100 to kwadrat długości. Wyciągnij pierwiastek."
      ]
     ]
    }
   ],
   "sol": [
    "Przesunięcia: [[6]] i [[8]].",
    "[[|AB| = √(36 + 64) = 10]]."
   ],
   "answer": "10.",
   "tip": "6, 8, 10.",
   "check": [
    "6**2 + 8**2 == 10**2"
   ],
   "twin": {
    "type": "fields",
    "q": "Oblicz długość odcinka AB, gdzie A(−2, 3) i B(3, −9).",
    "fields": [
     {
      "label": "|AB|",
      "ans": 13,
      "show": "13",
      "why": [
       [
        17,
        "Dodałeś przesunięcia 5 i 12."
       ]
      ]
     }
    ],
    "sol": [
     "Przesunięcia: [[5]] i [[12]].",
     "[[|AB| = √(25 + 144) = 13]]."
    ],
    "answer": "13.",
    "tip": "5, 12, 13.",
    "check": [
     "5**2 + 12**2 == 13**2"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Oblicz długość odcinka AB, gdzie A(0, 0) i B(8, 15).",
    "fields": [
     {
      "label": "|AB|",
      "ans": 17,
      "show": "17"
     }
    ],
    "sol": [
     "[[|AB| = √(64 + 225) = 17]]."
    ],
    "answer": "17.",
    "tip": "8, 15, 17.",
    "check": [
     "8**2 + 15**2 == 17**2"
    ]
   }
  },
  {
   "id": "b1",
   "level": 2,
   "skills": [
    "U3"
   ],
   "type": "fields",
   "q": "Punkt S(4, −1) jest środkiem odcinka AB, a A(1, 2). Oblicz współrzędne punktu B.",
   "fields": [
    {
     "label": "x",
     "ans": 7,
     "show": "7",
     "why": [
      [
       2.5,
       "To środek odcinka AS. B = 2S − A."
      ]
     ]
    },
    {
     "label": "y",
     "ans": -4,
     "show": "−4",
     "why": [
      [
       0.5,
       "To środek odcinka AS. y_B = 2 · (−1) − 2."
      ]
     ]
    }
   ],
   "sol": [
    "[[x_B = 2 · 4 − 1 = 7]], [[y_B = 2 · (−1) − 2 = −4]]. B(7, −4)."
   ],
   "answer": "B(7, −4).",
   "tip": "Sprawdzenie: środek A i B to S.",
   "check": [
    "2*4 - 1 == 7",
    "2*(-1) - 2 == -4"
   ],
   "twin": {
    "type": "fields",
    "q": "Punkt S(0, 2) jest środkiem odcinka AB, a A(−3, 5). Oblicz współrzędne punktu B.",
    "fields": [
     {
      "label": "x",
      "ans": 3,
      "show": "3",
      "why": [
       [
        -1.5,
        "To środek odcinka AS."
       ]
      ]
     },
     {
      "label": "y",
      "ans": -1,
      "show": "−1",
      "why": [
       [
        3.5,
        "To środek odcinka AS."
       ]
      ]
     }
    ],
    "sol": [
     "[[x_B = 0 + 3 = 3]], [[y_B = 4 − 5 = −1]]. B(3, −1)."
    ],
    "answer": "B(3, −1).",
    "tip": "B = 2S − A.",
    "check": [
     "2*0 + 3 == 3",
     "2*2 - 5 == -1"
    ]
   }
  },
  {
   "id": "b2",
   "level": 2,
   "skills": [
    "U4"
   ],
   "type": "abcd",
   "q": "Długość odcinka o końcach A(−2, −1) i B(1, 2) jest równa:",
   "opts": [
    "6",
    "3√2",
    "18",
    "√6"
   ],
   "ok": 1,
   "why": {
    "A": "Dodałeś przesunięcia 3 i 3. Trzeba dodać ich kwadraty.",
    "C": "18 to kwadrat długości.",
    "D": "√6 = √(3 + 3). Pod pierwiastkiem są kwadraty."
   },
   "sol": [
    "Przesunięcia: [[3]] i [[3]].",
    "[[|AB| = √18 = 3√2]]."
   ],
   "answer": "B, 3√2.",
   "tip": "To przekątna kwadratu 3 × 3.",
   "check": [
    "3**2 + 3**2 == 18 == 9*2"
   ],
   "twin": {
    "type": "abcd",
    "q": "Długość odcinka o końcach A(0, −3) i B(2, 3) jest równa:",
    "opts": [
     "8",
     "40",
     "2√2",
     "2√10"
    ],
    "ok": 3,
    "why": {
     "A": "Dodałeś przesunięcia 2 i 6.",
     "B": "40 to kwadrat długości.",
     "C": "Przesunięcie w pionie to 3 − (−3) = 6, a nie 0."
    },
    "sol": [
     "Przesunięcia: [[2]] i [[6]].",
     "[[|AB| = √40 = 2√10]]."
    ],
    "answer": "D, 2√10.",
    "tip": "√40 = √(4 · 10).",
    "check": [
     "2**2 + 6**2 == 40 == 4*10"
    ]
   }
  },
  {
   "id": "b3",
   "level": 2,
   "skills": [
    "U5"
   ],
   "type": "abcd",
   "q": "Prosta przechodzi przez punkty A(1, 1) i B(5, 3). Który punkt też leży na tej prostej?",
   "opts": [
    "(9, 5)",
    "(8, 5)",
    "(4, 3)",
    "(6, 3)"
   ],
   "ok": 0,
   "why": {
    "B": "Z A do (8, 5): 7 w prawo i 4 w górę. To nie jest wielokrotność kroku (2, 1).",
    "C": "3 w prawo daje na tej prostej 1,5 w górę, a nie 2.",
    "D": "5 w prawo daje na tej prostej 2,5 w górę, a nie 2."
   },
   "sol": [
    "Przesunięcie (4, 2), krok [[(2, 1)]].",
    "Z B(5, 3) dwa kroki: [[(9, 5)]]."
   ],
   "answer": "A, (9, 5).",
   "tip": "Krok = przesunięcie : NWD.",
   "check": [
    "(9 - 1)*2 == (5 - 1)*4"
   ],
   "twin": {
    "type": "abcd",
    "q": "Prosta przechodzi przez punkty A(−2, 0) i B(2, 6). Który punkt też leży na tej prostej?",
    "opts": [
     "(4, 8)",
     "(3, 6)",
     "(4, 9)",
     "(6, 10)"
    ],
    "ok": 2,
    "why": {
     "A": "Z B do (4, 8): 2 w prawo i 2 w górę, a krok to (2, 3).",
     "B": "Z B do (3, 6): 1 w prawo i 0 w górę.",
     "D": "Z B do (6, 10): 4 w prawo, a w górę powinno być 6, a nie 4."
    },
    "sol": [
     "Przesunięcie (4, 6), NWD 2, krok [[(2, 3)]].",
     "Z B(2, 6): [[(4, 9)]]."
    ],
    "answer": "C, (4, 9).",
    "tip": "Krok (2, 3).",
    "check": [
     "math.gcd(4, 6) == 2"
    ]
   }
  },
  {
   "id": "b4",
   "level": 2,
   "skills": [
    "U6"
   ],
   "type": "fields",
   "q": "Oblicz pole trójkąta o wierzchołkach A(−3, 0), B(3, 0) i C(1, 5).",
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
      3,
      0
     ],
     "C": [
      1,
      5
     ]
    },
    "polys": [
     [
      "A",
      "B",
      "C"
     ]
    ],
    "names": {
     "A": "A",
     "B": "B",
     "C": "C"
    },
    "shade": [
     0
    ],
    "alt": "Trójkąt ABC z podstawą na osi x i wierzchołkiem C(1, 5)."
   },
   "fields": [
    {
     "label": "Pole",
     "ans": 15,
     "show": "15",
     "why": [
      [
       30,
       "Zapomniałeś podzielić przez 2."
      ],
      [
       12,
       "Wysokość to 5 (odległość C od osi x), a podstawa to 6."
      ]
     ]
    }
   ],
   "sol": [
    "Podstawa: [[6]], wysokość: [[5]], [[P = 6 · 5 : 2 = 15]]."
   ],
   "answer": "15.",
   "tip": "Wysokość to odległość od osi x.",
   "check": [
    "6*5/2 == 15"
   ],
   "twin": {
    "type": "fields",
    "q": "Oblicz pole trójkąta o wierzchołkach A(−2, −1), B(4, −1) i C(0, 3).",
    "vis": {
     "type": "shape",
     "axes": true,
     "grid": true,
     "pts": {
      "A": [
       -2,
       -1
      ],
      "B": [
       4,
       -1
      ],
      "C": [
       0,
       3
      ]
     },
     "polys": [
      [
       "A",
       "B",
       "C"
      ]
     ],
     "names": {
      "A": "A",
      "B": "B",
      "C": "C"
     },
     "shade": [
      0
     ],
     "alt": "Trójkąt ABC z poziomą podstawą AB na wysokości y = −1."
    },
    "fields": [
     {
      "label": "Pole",
      "ans": 12,
      "show": "12",
      "why": [
       [
        24,
        "Zapomniałeś podzielić przez 2."
       ],
       [
        9,
        "Wysokość to 3 − (−1) = 4, a nie 3."
       ]
      ]
     }
    ],
    "sol": [
     "Podstawa: [[6]], wysokość: [[3 − (−1) = 4]], [[P = 12]]."
    ],
    "answer": "12.",
    "tip": "Wysokość liczona od y = −1.",
    "check": [
     "6*4/2 == 12"
    ]
   }
  },
  {
   "id": "b5",
   "level": 2,
   "skills": [
    "U6"
   ],
   "type": "fields",
   "q": "Punkty A(−2, −1), B(3, −1) i C(5, 3) są wierzchołkami równoległoboku ABCD. Oblicz współrzędne punktu D i pole równoległoboku.",
   "fields": [
    {
     "label": "x_D",
     "ans": 0,
     "show": "0",
     "why": [
      [
       10,
       "Przesuwasz A tak jak z B do C (2 w prawo), a nie dodajesz B i C."
      ]
     ]
    },
    {
     "label": "y_D",
     "ans": 3,
     "show": "3"
    },
    {
     "label": "Pole",
     "ans": 20,
     "show": "20",
     "why": [
      [
       10,
       "Równoległobok to nie trójkąt: nie dzielisz przez 2."
      ]
     ]
    }
   ],
   "sol": [
    "Z B do C: (2, 4). [[D = (−2 + 2, −1 + 4) = (0, 3)]].",
    "[[P = 5 · 4 = 20]]."
   ],
   "answer": "D(0, 3), pole 20.",
   "tip": "Takie zadanie było na egzaminie w 2025 roku.",
   "check": [
    "5*4 == 20"
   ],
   "twin": {
    "type": "fields",
    "q": "Punkty A(0, 0), B(4, 0) i C(6, 3) są wierzchołkami równoległoboku ABCD. Oblicz współrzędne punktu D i pole równoległoboku.",
    "fields": [
     {
      "label": "x_D",
      "ans": 2,
      "show": "2"
     },
     {
      "label": "y_D",
      "ans": 3,
      "show": "3"
     },
     {
      "label": "Pole",
      "ans": 12,
      "show": "12",
      "why": [
       [
        6,
        "Nie dzielisz przez 2."
       ]
      ]
     }
    ],
    "sol": [
     "Z B do C: (2, 3). [[D(2, 3)]].",
     "[[P = 4 · 3 = 12]]."
    ],
    "answer": "D(2, 3), pole 12.",
    "tip": "Z A do D jak z B do C.",
    "check": [
     "4*3 == 12"
    ]
   }
  },
  {
   "id": "b6",
   "level": 2,
   "skills": [
    "U2",
    "U4"
   ],
   "type": "pf",
   "q": "Dane są punkty A(−1, −2) i B(5, 6). Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Środkiem odcinka AB jest punkt (2, 2).",
     "ok": "P"
    },
    {
     "t": "Odcinek AB ma długość 14.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[((−1 + 5) : 2, (−2 + 6) : 2) = (2, 2)]]. Prawda.",
    "<b>Zdanie 2.</b> Przesunięcia 6 i 8: [[|AB| = 10]]. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "14 = 6 + 8: to typowy błąd.",
   "check": [
    "(-1 + 5)/2 == 2",
    "(-2 + 6)/2 == 2",
    "6**2 + 8**2 == 10**2"
   ],
   "twin": {
    "type": "pf",
    "q": "Dane są punkty A(2, −3) i B(−4, 5). Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Środkiem odcinka AB jest punkt (−1, 1).",
      "ok": "P"
     },
     {
      "t": "Odcinek AB ma długość 14.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[(−1, 1)]]. Prawda.",
     "<b>Zdanie 2.</b> Przesunięcia 6 i 8: [[|AB| = 10]]. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Nie dodawaj przesunięć.",
    "check": [
     "(2 - 4)/2 == -1",
     "(-3 + 5)/2 == 1"
    ]
   }
  },
  {
   "id": "c1",
   "level": 3,
   "skills": [
    "U6",
    "U4"
   ],
   "type": "self",
   "q": "Punkty A(−2, −1), B(4, −1) i C(4, 7) są wierzchołkami trójkąta. Oblicz obwód i pole tego trójkąta. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczyłeś długości boków poziomego i pionowego: AB = 6, BC = 8.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś AC = √(36 + 64) = 10.",
     "pts": 1
    },
    {
     "t": "Podałeś obwód 24 i pole 24.",
     "pts": 1
    }
   ],
   "sol": [
    "[[AB = 4 − (−2) = 6]], [[BC = 7 − (−1) = 8]].",
    "[[AC = √(36 + 64) = 10]].",
    "Obwód: [[24]]. Pole: [[6 · 8 : 2 = 24]]."
   ],
   "answer": "Obwód 24, pole 24.",
   "tip": "Kąt prosty jest przy B, bo AB jest poziomy, a BC pionowy.",
   "check": [
    "6**2 + 8**2 == 10**2",
    "6 + 8 + 10 == 24",
    "6*8/2 == 24"
   ],
   "twin": {
    "type": "self",
    "q": "Punkty A(−1, −3), B(4, −3) i C(4, 9) są wierzchołkami trójkąta. Oblicz obwód i pole tego trójkąta. Zapisz obliczenia.",
    "criteria": [
     {
      "t": "AB = 5, BC = 12.",
      "pts": 1
     },
     {
      "t": "AC = 13.",
      "pts": 1
     },
     {
      "t": "Obwód 30 i pole 30.",
      "pts": 1
     }
    ],
    "sol": [
     "[[AB = 5]], [[BC = 12]], [[AC = 13]].",
     "Obwód [[30]], pole [[30]]."
    ],
    "answer": "Obwód 30, pole 30.",
    "tip": "5, 12, 13.",
    "check": [
     "5**2 + 12**2 == 13**2",
     "5*12/2 == 30"
    ]
   }
  },
  {
   "id": "c2",
   "level": 3,
   "skills": [
    "U3",
    "U4"
   ],
   "type": "self",
   "q": "Punkt S(2, 3) jest środkiem odcinka AB, a A(−1, 5). Oblicz współrzędne punktu B i długość odcinka AB. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczyłeś B(5, 1).",
     "pts": 1
    },
    {
     "t": "Obliczyłeś |AB| = √(36 + 16) = √52 = 2√13.",
     "pts": 1
    }
   ],
   "sol": [
    "[[x_B = 4 + 1 = 5]], [[y_B = 6 − 5 = 1]]. B(5, 1).",
    "Przesunięcia: [[6]] i [[4]]. [[|AB| = √52 = 2√13]]."
   ],
   "answer": "B(5, 1), |AB| = 2√13.",
   "tip": "√52 = √(4 · 13).",
   "check": [
    "2*2 + 1 == 5",
    "2*3 - 5 == 1",
    "6**2 + 4**2 == 52 == 4*13"
   ],
   "twin": {
    "type": "self",
    "q": "Punkt S(1, −2) jest środkiem odcinka AB, a A(−3, 1). Oblicz współrzędne punktu B i długość odcinka AB. Zapisz obliczenia.",
    "criteria": [
     {
      "t": "B(5, −5).",
      "pts": 1
     },
     {
      "t": "|AB| = 10.",
      "pts": 1
     }
    ],
    "sol": [
     "[[B(5, −5)]].",
     "Przesunięcia 8 i 6: [[|AB| = 10]]."
    ],
    "answer": "B(5, −5), |AB| = 10.",
    "tip": "B = 2S − A.",
    "check": [
     "2*1 + 3 == 5",
     "2*(-2) - 1 == -5",
     "8**2 + 6**2 == 10**2"
    ]
   }
  },
  {
   "id": "c3",
   "level": 3,
   "skills": [
    "U6",
    "U4"
   ],
   "type": "self",
   "q": "Prostokąt ABCD ma wierzchołki A(−3, −2), B(5, −2) i C(5, 4). Oblicz współrzędne wierzchołka D i długość przekątnej prostokąta. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Podałeś D(−3, 4).",
     "pts": 1
    },
    {
     "t": "Obliczyłeś przekątną: boki 8 i 6, przekątna 10.",
     "pts": 1
    }
   ],
   "sol": [
    "D leży nad A na wysokości C: [[D(−3, 4)]].",
    "Boki: [[8]] i [[6]], przekątna: [[√100 = 10]]."
   ],
   "answer": "D(−3, 4), przekątna 10.",
   "tip": "Narysuj na kratce.",
   "check": [
    "8**2 + 6**2 == 10**2"
   ],
   "twin": {
    "type": "self",
    "q": "Prostokąt ABCD ma wierzchołki A(−1, −1), B(11, −1) i C(11, 4). Oblicz współrzędne wierzchołka D i długość przekątnej prostokąta. Zapisz obliczenia.",
    "criteria": [
     {
      "t": "D(−1, 4).",
      "pts": 1
     },
     {
      "t": "Boki 12 i 5, przekątna 13.",
      "pts": 1
     }
    ],
    "sol": [
     "[[D(−1, 4)]].",
     "[[√(144 + 25) = 13]]."
    ],
    "answer": "D(−1, 4), przekątna 13.",
    "tip": "5, 12, 13.",
    "check": [
     "12**2 + 5**2 == 13**2"
    ]
   }
  },
  {
   "id": "c4",
   "level": 3,
   "skills": [
    "U5"
   ],
   "type": "fields",
   "q": "Prosta przechodzi przez punkty A(−1, −2) i B(3, 4). Punkt P tej prostej ma x = 7. Oblicz jego drugą współrzędną.",
   "fields": [
    {
     "label": "y",
     "ans": 10,
     "show": "10",
     "why": [
      [
       8,
       "Krok to (2, 3): z B(3, 4) dwa kroki to 4 w prawo i 6 w górę."
      ],
      [
       12,
       "Przesunięcie (4, 6) z B daje (7, 10)."
      ]
     ]
    }
   ],
   "sol": [
    "Przesunięcie z A do B: [[(4, 6)]], krok [[(2, 3)]].",
    "Z B(3, 4) do x = 7 są 2 kroki: [[y = 4 + 6 = 10]]."
   ],
   "answer": "y = 10, P(7, 10).",
   "tip": "Ile kroków dzieli x = 3 od x = 7?",
   "check": [
    "(7 - 3)/2*3 + 4 == 10"
   ],
   "twin": {
    "type": "fields",
    "q": "Prosta przechodzi przez punkty A(0, 1) i B(4, 4). Punkt P tej prostej ma x = 12. Oblicz jego drugą współrzędną.",
    "fields": [
     {
      "label": "y",
      "ans": 10,
      "show": "10",
      "why": [
       [
        13,
        "Z A(0, 1) do x = 12 są 3 kroki (4, 3): 1 + 9 = 10."
       ]
      ]
     }
    ],
    "sol": [
     "Krok [[(4, 3)]]. Do x = 12 to 3 kroki: [[y = 1 + 9 = 10]]."
    ],
    "answer": "y = 10.",
    "tip": "12 : 4 = 3 kroki.",
    "check": [
     "1 + 12/4*3 == 10"
    ]
   }
  }
 ],
 "test": [
  {
   "id": "t1",
   "skills": [
    "U1"
   ],
   "type": "fields",
   "q": "Odczytaj współrzędne punktu Q z rysunku.",
   "vis": {
    "type": "shape",
    "axes": true,
    "grid": true,
    "pts": {
     "Q": [
      -4,
      -2
     ]
    },
    "polys": [],
    "names": {
     "Q": "Q"
    },
    "alt": "Punkt Q: 4 w lewo i 2 w dół."
   },
   "fields": [
    {
     "label": "x",
     "ans": -4,
     "show": "−4"
    },
    {
     "label": "y",
     "ans": -2,
     "show": "−2"
    }
   ],
   "sol": [
    "[[Q(−4, −2)]]."
   ],
   "answer": "Q(−4, −2).",
   "tip": "Najpierw x.",
   "check": [
    "True"
   ],
   "pts": 1
  },
  {
   "id": "t2",
   "skills": [
    "U1"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Punkt (0, −3) leży na osi y.",
     "ok": "P"
    },
    {
     "t": "Punkt (−2, 0) leży na osi y.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> x = 0. Prawda.",
    "<b>Zdanie 2.</b> y = 0, więc to oś x. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Zero na miejscu x: oś y.",
   "check": [
    "True"
   ],
   "pts": 1
  },
  {
   "id": "t3",
   "skills": [
    "U2"
   ],
   "type": "fields",
   "q": "Oblicz współrzędne środka odcinka AB, gdzie A(−6, 3) i B(2, −5).",
   "fields": [
    {
     "label": "x",
     "ans": -2,
     "show": "−2"
    },
    {
     "label": "y",
     "ans": -1,
     "show": "−1"
    }
   ],
   "sol": [
    "[[(−6 + 2) : 2 = −2]], [[(3 − 5) : 2 = −1]]."
   ],
   "answer": "S(−2, −1).",
   "tip": "Średnie.",
   "check": [
    "(-6 + 2)/2 == -2",
    "(3 - 5)/2 == -1"
   ],
   "pts": 1
  },
  {
   "id": "t4",
   "skills": [
    "U2"
   ],
   "type": "abcd",
   "q": "Środkiem odcinka o końcach A(3, −1) i B(−2, 4) jest punkt:",
   "opts": [
    "(2,5; 2,5)",
    "(1; 3)",
    "(0,5; 1,5)",
    "(−0,5; 1,5)"
   ],
   "ok": 2,
   "why": {
    "A": "To połowy różnic, a nie średnie.",
    "B": "Nie podzieliłeś sum przez 2.",
    "D": "Pomylony znak: (3 − 2) : 2 = 0,5."
   },
   "sol": [
    "[[(0,5; 1,5)]]."
   ],
   "answer": "C, (0,5; 1,5).",
   "tip": "Średnie.",
   "check": [
    "F(3 - 2, 2) == F('0.5')"
   ],
   "pts": 1
  },
  {
   "id": "t5",
   "skills": [
    "U3"
   ],
   "type": "fields",
   "q": "Punkt S(2, 1) jest środkiem odcinka AB, a A(−1, 4). Oblicz współrzędne punktu B.",
   "fields": [
    {
     "label": "x",
     "ans": 5,
     "show": "5"
    },
    {
     "label": "y",
     "ans": -2,
     "show": "−2"
    }
   ],
   "sol": [
    "[[B(4 + 1, 2 − 4) = (5, −2)]]."
   ],
   "answer": "B(5, −2).",
   "tip": "B = 2S − A.",
   "check": [
    "2*2 + 1 == 5",
    "2*1 - 4 == -2"
   ],
   "pts": 1
  },
  {
   "id": "t6",
   "skills": [
    "U4"
   ],
   "type": "fields",
   "q": "Oblicz długość odcinka AB, gdzie A(−3, −2) i B(9, 3).",
   "fields": [
    {
     "label": "|AB|",
     "ans": 13,
     "show": "13"
    }
   ],
   "sol": [
    "Przesunięcia [[12]] i [[5]], [[|AB| = 13]]."
   ],
   "answer": "13.",
   "tip": "5, 12, 13.",
   "check": [
    "12**2 + 5**2 == 13**2"
   ],
   "pts": 1
  },
  {
   "id": "t7",
   "skills": [
    "U4"
   ],
   "type": "abcd",
   "q": "Długość odcinka o końcach A(1, 1) i B(3, 5) jest równa:",
   "opts": [
    "2√5",
    "6",
    "20",
    "2√3"
   ],
   "ok": 0,
   "why": {
    "B": "Dodałeś przesunięcia.",
    "C": "20 to kwadrat długości.",
    "D": "Pod pierwiastkiem jest 4 + 16 = 20, a nie 12."
   },
   "sol": [
    "[[√(4 + 16) = √20 = 2√5]]."
   ],
   "answer": "A, 2√5.",
   "tip": "Kwadraty przesunięć.",
   "check": [
    "2**2 + 4**2 == 20"
   ],
   "pts": 1
  },
  {
   "id": "t8",
   "skills": [
    "U5"
   ],
   "type": "abcd",
   "q": "Prosta przechodzi przez punkty O(0, 0) i B(2, 3). Który punkt też leży na tej prostej?",
   "opts": [
    "(6, 8)",
    "(3, 2)",
    "(4, 5)",
    "(6, 9)"
   ],
   "ok": 3,
   "why": {
    "A": "3 kroki (2, 3) to (6, 9), a nie (6, 8).",
    "B": "Zamienione współrzędne.",
    "C": "2 kroki to (4, 6)."
   },
   "sol": [
    "Krok [[(2, 3)]], trzy kroki: [[(6, 9)]]."
   ],
   "answer": "D, (6, 9).",
   "tip": "Krok naraz w x i y.",
   "check": [
    "3*2 == 6",
    "3*3 == 9"
   ],
   "pts": 1
  },
  {
   "id": "t9",
   "skills": [
    "U6"
   ],
   "type": "fields",
   "q": "Oblicz pole trójkąta o wierzchołkach A(−4, −1), B(2, −1) i C(0, 5).",
   "fields": [
    {
     "label": "Pole",
     "ans": 18,
     "show": "18"
    }
   ],
   "sol": [
    "Podstawa [[6]], wysokość [[6]], [[P = 18]]."
   ],
   "answer": "18.",
   "tip": "Wysokość: 5 − (−1).",
   "check": [
    "6*6/2 == 18"
   ],
   "pts": 1
  },
  {
   "id": "t10",
   "skills": [
    "U6"
   ],
   "type": "fields",
   "q": "Punkty A(−3, 0), B(2, 0) i C(4, 3) są wierzchołkami równoległoboku ABCD. Oblicz współrzędne punktu D.",
   "fields": [
    {
     "label": "x_D",
     "ans": -1,
     "show": "−1"
    },
    {
     "label": "y_D",
     "ans": 3,
     "show": "3"
    }
   ],
   "sol": [
    "Z B do C: (2, 3). [[D = (−3 + 2, 0 + 3) = (−1, 3)]]."
   ],
   "answer": "D(−1, 3).",
   "tip": "Z A do D jak z B do C.",
   "check": [
    "-3 + 2 == -1"
   ],
   "pts": 1
  },
  {
   "id": "t11",
   "skills": [
    "U6",
    "U4"
   ],
   "type": "self",
   "q": "Punkty A(0, 0), B(8, 0) i C(8, 6) są wierzchołkami trójkąta. Oblicz jego obwód. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczyłeś AC = √(64 + 36) = 10.",
     "pts": 1
    },
    {
     "t": "Podałeś obwód: 8 + 6 + 10 = 24.",
     "pts": 1
    }
   ],
   "sol": [
    "[[AB = 8]], [[BC = 6]], [[AC = 10]].",
    "Obwód: [[24]]."
   ],
   "answer": "24.",
   "tip": "Kąt prosty przy B.",
   "check": [
    "8**2 + 6**2 == 10**2"
   ],
   "pts": 2
  },
  {
   "id": "t12",
   "skills": [
    "U3",
    "U4"
   ],
   "type": "self",
   "q": "Punkt S(−1, 2) jest środkiem odcinka AB, a A(3, −1). Oblicz współrzędne punktu B i długość odcinka AB. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczyłeś B(−5, 5).",
     "pts": 1
    },
    {
     "t": "Obliczyłeś |AB| = 10.",
     "pts": 1
    }
   ],
   "sol": [
    "[[B = (−2 − 3, 4 + 1) = (−5, 5)]].",
    "Przesunięcia 8 i 6: [[|AB| = 10]]."
   ],
   "answer": "B(−5, 5), |AB| = 10.",
   "tip": "Sprawdź środek.",
   "check": [
    "2*(-1) - 3 == -5",
    "2*2 + 1 == 5",
    "8**2 + 6**2 == 10**2"
   ],
   "pts": 2
  }
 ],
 "test_minutes": 35,
 "pass": 12,
 "dzial": "Dział 3: Geometria"
};
