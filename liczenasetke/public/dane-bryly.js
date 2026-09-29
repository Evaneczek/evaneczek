/* Wygenerowane przez zbuduj.py z tresc/bryly.py. Nie edytuj ręcznie. */
window.TEMAT = {
 "slug": "bryly",
 "title": "Graniastosłupy i ostrosłupy",
 "sign": "▱",
 "lead": "Rodzaje brył, siatki, prostopadłościan i sześcian, jednostki objętości, graniastosłupy i ostrosłupy. Zadania z bryłami były na egzaminie w 2025 roku (prostopadłościan, ostrosłup) i w 2026 roku (ostrosłup w sześcianie za 3 punkty).",
 "goals": {
  "learn": "6 umiejętności: rodzaje brył, siatki, prostopadłościan i sześcian, jednostki objętości, graniastosłupy proste i ostrosłupy.",
  "prereq": "Pola figur i twierdzenie Pitagorasa (wcześniejsze tematy tego działu). Rozgrzewka na początku to sprawdzi.",
  "goal": "Minimum 12 z 14 punktów w teście na koniec tematu."
 },
 "skills": {
  "B1": "Rodzaje brył",
  "B2": "Siatki brył",
  "B3": "Prostopadłościan i sześcian",
  "B4": "Jednostki objętości i pojemności",
  "B5": "Graniastosłupy proste",
  "B6": "Ostrosłupy"
 },
 "lessons": [
  {
   "title": "Rodzaje brył",
   "skills": [
    "B1"
   ],
   "intro": "Graniastosłup ma dwie jednakowe, równoległe podstawy połączone ścianami bocznymi. Ostrosłup ma jedną podstawę, a ściany boczne to trójkąty, które schodzą się w jednym wierzchołku. Nazwę bierzemy od podstawy: trójkątny, czworokątny, sześciokątny.",
   "rule": {
    "t": "Graniastosłup prosty ma ściany boczne prostokątne. Bryła prawidłowa ma w podstawie wielokąt foremny (np. kwadrat, trójkąt równoboczny). Walec, stożek i kula nie są graniastosłupami ani ostrosłupami: mają powierzchnie zakrzywione.",
    "f": [
     "graniastosłup n-kątny: 2n wierzchołków, 3n krawędzi, n + 2 ściany",
     "ostrosłup n-kątny: n + 1 wierzchołków, 2n krawędzi, n + 1 ścian"
    ],
    "e": "Sześcian i prostopadłościan to też graniastosłupy (czworokątne)."
   },
   "visual": {
    "type": "solid",
    "names": {
     "A": "",
     "B": "",
     "C": "",
     "D": "",
     "E": "",
     "F": "",
     "G": "",
     "H": "",
     "S": "",
     "O": "",
     "M": "",
     "A1": "",
     "B1": "",
     "C1": "",
     "P0": "",
     "P1": "",
     "P2": "",
     "P3": ""
    },
    "pts3": {
     "A": [
      0,
      0,
      0
     ],
     "B": [
      4,
      0,
      0
     ],
     "C": [
      4,
      3,
      0
     ],
     "A1": [
      0,
      0,
      5
     ],
     "B1": [
      4,
      0,
      5
     ],
     "C1": [
      4,
      3,
      5
     ]
    },
    "polys": [
     [
      "A",
      "B",
      "B1",
      "A1"
     ],
     [
      "B",
      "C",
      "C1",
      "B1"
     ],
     [
      "A1",
      "B1",
      "C1"
     ]
    ],
    "segs": [
     [
      "A",
      "C"
     ]
    ],
    "sides": [],
    "alt": "Graniastosłup trójkątny: dwie trójkątne podstawy i trzy prostokątne ściany boczne. Krawędzie niewidoczne są przerywane.",
    "caption": "Graniastosłup trójkątny: 6 wierzchołków, 9 krawędzi, 5 ścian. Krawędzie niewidoczne rysujemy przerywaną linią"
   },
   "example": {
    "q": "Ile wierzchołków, krawędzi i ścian ma graniastosłup sześciokątny?",
    "steps": [
     "Dwie podstawy po 6 wierzchołków: 2 · 6 = 12 wierzchołków.",
     "Krawędzie: 6 w dolnej podstawie, 6 w górnej i 6 bocznych: 3 · 6 = 18.",
     "Ściany: 2 podstawy i 6 ścian bocznych: 8."
    ],
    "result": "12 wierzchołków, 18 krawędzi, 8 ścian.",
    "tip": "Nie ucz się wzorów na pamięć: wyobraź sobie dwie podstawy i ściany między nimi.",
    "check": [
     "2*6 == 12",
     "3*6 == 18",
     "6 + 2 == 8"
    ]
   },
   "you": [
    {
     "id": "y1",
     "type": "abcd",
     "q": "Ostrosłup ma 10 krawędzi. Jaki wielokąt jest jego podstawą?",
     "opts": [
      "pięciokąt",
      "dziesięciokąt",
      "sześciokąt",
      "czworokąt"
     ],
     "ok": 0,
     "why": {
      "B": "Ostrosłup n-kątny ma 2n krawędzi: n w podstawie i n bocznych.",
      "C": "Ostrosłup sześciokątny ma 12 krawędzi.",
      "D": "Ostrosłup czworokątny ma 8 krawędzi."
     },
     "sol": [
      "[[2n = 10]], [[n = 5]]: podstawą jest pięciokąt."
     ],
     "answer": "A, pięciokąt.",
     "tip": "Połowa krawędzi jest w podstawie.",
     "check": [
      "2*5 == 10"
     ]
    },
    {
     "id": "y1b",
     "type": "pf",
     "q": "Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "Puszka po napoju ma kształt walca.",
       "ok": "P"
      },
      {
       "t": "Piramida egipska ma kształt graniastosłupa.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> Dwie okrągłe podstawy i zakrzywiona ściana: walec. Prawda.",
      "<b>Zdanie 2.</b> Ściany boczne schodzą się w jednym wierzchołku: to ostrosłup. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "Wierzchołek na górze to ostrosłup albo stożek.",
     "check": [
      "True"
     ]
    }
   ]
  },
  {
   "title": "Siatki brył",
   "skills": [
    "B2"
   ],
   "intro": "Siatka to bryła „rozłożona na płasko”. Pole siatki jest równe polu powierzchni całkowitej bryły, dlatego siatka bardzo pomaga w liczeniu pól.",
   "rule": {
    "t": "Siatka graniastosłupa: dwie podstawy i ściany boczne (w graniastosłupie prostym prostokąty). Siatka ostrosłupa: podstawa i trójkąty.",
    "f": [
     "prostopadłościan: 6 prostokątów, po 2 jednakowe",
     "sześcian: 6 kwadratów",
     "ostrosłup n-kątny: podstawa + n trójkątów"
    ],
    "e": "Ściany boczne graniastosłupa razem tworzą prostokąt o bokach: obwód podstawy × wysokość."
   },
   "visual": {
    "type": "shape",
    "nodots": true,
    "pts": {
     "R0a": [
      0,
      0
     ],
     "R0b": [
      4,
      0
     ],
     "R0c": [
      4,
      3
     ],
     "R0d": [
      0,
      3
     ],
     "R1a": [
      4,
      0
     ],
     "R1b": [
      6,
      0
     ],
     "R1c": [
      6,
      3
     ],
     "R1d": [
      4,
      3
     ],
     "R2a": [
      6,
      0
     ],
     "R2b": [
      10,
      0
     ],
     "R2c": [
      10,
      3
     ],
     "R2d": [
      6,
      3
     ],
     "R3a": [
      10,
      0
     ],
     "R3b": [
      12,
      0
     ],
     "R3c": [
      12,
      3
     ],
     "R3d": [
      10,
      3
     ],
     "Ta": [
      0,
      3
     ],
     "Tb": [
      4,
      3
     ],
     "Tc": [
      4,
      5
     ],
     "Td": [
      0,
      5
     ],
     "Ba": [
      0,
      -2
     ],
     "Bb": [
      4,
      -2
     ],
     "Bc": [
      4,
      0
     ],
     "Bd": [
      0,
      0
     ]
    },
    "polys": [
     [
      "R0a",
      "R0b",
      "R0c",
      "R0d"
     ],
     [
      "R1a",
      "R1b",
      "R1c",
      "R1d"
     ],
     [
      "R2a",
      "R2b",
      "R2c",
      "R2d"
     ],
     [
      "R3a",
      "R3b",
      "R3c",
      "R3d"
     ],
     [
      "Ta",
      "Tb",
      "Tc",
      "Td"
     ],
     [
      "Ba",
      "Bb",
      "Bc",
      "Bd"
     ]
    ],
    "shade": [
     4,
     5
    ],
    "names": {
     "R0a": "",
     "R0b": "",
     "R0c": "",
     "R0d": "",
     "R1a": "",
     "R1b": "",
     "R1c": "",
     "R1d": "",
     "R2a": "",
     "R2b": "",
     "R2c": "",
     "R2d": "",
     "R3a": "",
     "R3b": "",
     "R3c": "",
     "R3d": "",
     "Ta": "",
     "Tb": "",
     "Tc": "",
     "Td": "",
     "Ba": "",
     "Bb": "",
     "Bc": "",
     "Bd": ""
    },
    "sides": [
     [
      "R0a",
      "R0b",
      "4"
     ],
     [
      "R1a",
      "R1b",
      "2"
     ],
     [
      "R3b",
      "R3c",
      "3"
     ]
    ],
    "alt": "Siatka prostopadłościanu 4 na 2 na 3: cztery ściany boczne w rzędzie i dwie podstawy.",
    "caption": "Siatka prostopadłościanu 4 × 2 × 3. Pole: 2 · (4 · 2 + 4 · 3 + 2 · 3) = 52"
   },
   "example": {
    "q": "Oblicz pole siatki prostopadłościanu o wymiarach 4 cm × 2 cm × 3 cm.",
    "steps": [
     "Ściany: 4 · 2 = 8 cm², 4 · 3 = 12 cm², 2 · 3 = 6 cm², każda para dwa razy.",
     "Pole: 2 · (8 + 12 + 6) = 2 · 26 = 52 cm².",
     "Inaczej: 4 ściany boczne razem to prostokąt (4 + 2 + 4 + 2) × 3 = 36 cm², plus dwie podstawy 2 · 8 = 16 cm²."
    ],
    "result": "52 cm².",
    "tip": "Oba sposoby dają ten sam wynik. Wybierz ten, który lepiej widzisz.",
    "check": [
     "2*(8 + 12 + 6) == 52",
     "12*3 + 16 == 52"
    ]
   },
   "you": [
    {
     "id": "y2",
     "type": "pf",
     "q": "Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "Siatka sześcianu składa się z 6 przystających kwadratów.",
       "ok": "P"
      },
      {
       "t": "Siatka ostrosłupa czworokątnego składa się z 4 trójkątów.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> Sześcian ma 6 kwadratowych ścian. Prawda.",
      "<b>Zdanie 2.</b> 4 trójkąty i jeszcze czworokątna podstawa: 5 wielokątów. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "Nie zapominaj o podstawie.",
     "check": [
      "4 + 1 == 5"
     ]
    },
    {
     "id": "y2b",
     "type": "fields",
     "q": "Z ilu wielokątów składa się siatka graniastosłupa pięciokątnego?",
     "fields": [
      {
       "label": "Liczba wielokątów",
       "ans": 7,
       "show": "7",
       "why": [
        [
         6,
         "Graniastosłup ma dwie podstawy, a nie jedną."
        ],
        [
         5,
         "Dolicz dwie podstawy."
        ]
       ]
      }
     ],
     "sol": [
      "[[2]] podstawy i [[5]] ścian bocznych: [[7]]."
     ],
     "answer": "7.",
     "tip": "n + 2.",
     "check": [
      "5 + 2 == 7"
     ]
    }
   ]
  },
  {
   "title": "Prostopadłościan i sześcian",
   "skills": [
    "B3"
   ],
   "intro": "Objętość mówi, ile sześcianików 1 × 1 × 1 zmieści się w bryle. Pole powierzchni to suma pól wszystkich ścian, np. ile papieru trzeba na oklejenie pudełka.",
   "rule": {
    "t": "Prostopadłościan a × b × c: V = a · b · c, P = 2(ab + bc + ac). Sześcian o krawędzi a: V = a³, P = 6a².",
    "f": [
     "V = a · b · c",
     "P = 2(ab + bc + ac)",
     "sześcian: V = a³, P = 6a²",
     "suma krawędzi: 4(a + b + c), sześcian 12a"
    ],
    "e": "Objętość w cm³, pole w cm². Sześcian ma 12 krawędzi, a nie 6."
   },
   "visual": {
    "type": "solid",
    "names": {
     "A": "",
     "B": "",
     "C": "",
     "D": "",
     "E": "",
     "F": "",
     "G": "",
     "H": "",
     "S": "",
     "O": "",
     "M": "",
     "A1": "",
     "B1": "",
     "C1": "",
     "P0": "",
     "P1": "",
     "P2": "",
     "P3": ""
    },
    "pts3": {
     "A": [
      0,
      0,
      0
     ],
     "B": [
      5,
      0,
      0
     ],
     "C": [
      5,
      3,
      0
     ],
     "D": [
      0,
      3,
      0
     ],
     "E": [
      0,
      0,
      4
     ],
     "F": [
      5,
      0,
      4
     ],
     "G": [
      5,
      3,
      4
     ],
     "H": [
      0,
      3,
      4
     ]
    },
    "polys": [
     [
      "A",
      "B",
      "F",
      "E"
     ],
     [
      "B",
      "C",
      "G",
      "F"
     ],
     [
      "E",
      "F",
      "G",
      "H"
     ]
    ],
    "segs": [
     [
      "A",
      "D"
     ],
     [
      "D",
      "C"
     ],
     [
      "D",
      "H"
     ]
    ],
    "sides": [
     [
      "A",
      "B",
      "5"
     ],
     [
      "B",
      "C",
      "3"
     ],
     [
      "C",
      "G",
      "4"
     ]
    ],
    "alt": "Prostopadłościan o wymiarach 5 na 3 na 4.",
    "caption": "V = 5 · 3 · 4 = 60, P = 2 · (15 + 12 + 20) = 94"
   },
   "example": {
    "q": "Akwarium ma kształt prostopadłościanu 50 cm × 30 cm × 40 cm (wysokość) i nie ma pokrywy. Oblicz jego objętość i pole szkła.",
    "steps": [
     "V = 50 · 30 · 40 = 60 000 cm³ = 60 litrów.",
     "Dno: 50 · 30 = 1 500 cm². Ściany przednia i tylna: 2 · 50 · 40 = 4 000 cm². Ściany boczne: 2 · 30 · 40 = 2 400 cm².",
     "Szkło: 1 500 + 4 000 + 2 400 = 7 900 cm² (bez pokrywy)."
    ],
    "result": "V = 60 000 cm³ = 60 l, szkło: 7 900 cm².",
    "tip": "Czytaj, czy bryła ma wszystkie ściany. Akwarium, basen czy pudełko bez wieka mają jedną mniej.",
    "check": [
     "50*30*40 == 60000",
     "1500 + 2*50*40 + 2*30*40 == 7900"
    ]
   },
   "you": [
    {
     "id": "y3",
     "type": "fields",
     "q": "Oblicz objętość i pole powierzchni sześcianu o krawędzi 3 cm.",
     "fields": [
      {
       "label": "V (cm³)",
       "ans": 27,
       "show": "27",
       "why": [
        [
         9,
         "9 cm² to pole jednej ściany. V = 3 · 3 · 3."
        ]
       ]
      },
      {
       "label": "P (cm²)",
       "ans": 54,
       "show": "54",
       "why": [
        [
         9,
         "To pole jednej ściany. Ścian jest 6."
        ],
        [
         36,
         "Sześcian ma 6 ścian, a nie 4."
        ]
       ]
      }
     ],
     "sol": [
      "[[V = 3³ = 27]] cm³.",
      "[[P = 6 · 9 = 54]] cm²."
     ],
     "answer": "27 cm³ i 54 cm².",
     "tip": "6 ścian.",
     "check": [
      "3**3 == 27",
      "6*9 == 54"
     ]
    },
    {
     "id": "y3b",
     "type": "fields",
     "q": "Pudełko ma wymiary 6 cm × 4 cm × 2,5 cm. Oblicz jego objętość.",
     "fields": [
      {
       "label": "V (cm³)",
       "ans": 60,
       "show": "60",
       "why": [
        [
         12.5,
         "Dodano wymiary. Objętość to iloczyn."
        ]
       ]
      }
     ],
     "sol": [
      "[[V = 6 · 4 · 2,5 = 60]] cm³."
     ],
     "answer": "60 cm³.",
     "tip": "Mnóż w wygodnej kolejności: 4 · 2,5 = 10.",
     "check": [
      "6*4*F('2.5') == 60"
     ]
    }
   ]
  },
  {
   "title": "Jednostki objętości i pojemności",
   "skills": [
    "B4"
   ],
   "intro": "1 dm = 10 cm, ale 1 dm³ = 10 · 10 · 10 = 1 000 cm³. Przy objętości przelicznik podnosisz do sześcianu. Pojemność (litry) to po prostu objętość w innych jednostkach.",
   "rule": {
    "t": "Jednostki objętości rosną co 1 000. Litr to decymetr sześcienny, a mililitr to centymetr sześcienny.",
    "f": [
     "1 l = 1 dm³ = 1 000 cm³",
     "1 ml = 1 cm³",
     "1 m³ = 1 000 dm³ = 1 000 l"
    ],
    "e": "Zamień długości na tę samą jednostkę przed mnożeniem: 1,5 m to 15 dm."
   },
   "visual": {
    "type": "solid",
    "names": {
     "A": "",
     "B": "",
     "C": "",
     "D": "",
     "E": "",
     "F": "",
     "G": "",
     "H": "",
     "S": "",
     "O": "",
     "M": "",
     "A1": "",
     "B1": "",
     "C1": "",
     "P0": "",
     "P1": "",
     "P2": "",
     "P3": ""
    },
    "pts3": {
     "A": [
      0,
      0,
      0
     ],
     "B": [
      3,
      0,
      0
     ],
     "C": [
      3,
      3,
      0
     ],
     "D": [
      0,
      3,
      0
     ],
     "E": [
      0,
      0,
      3
     ],
     "F": [
      3,
      0,
      3
     ],
     "G": [
      3,
      3,
      3
     ],
     "H": [
      0,
      3,
      3
     ]
    },
    "polys": [
     [
      "A",
      "B",
      "F",
      "E"
     ],
     [
      "B",
      "C",
      "G",
      "F"
     ],
     [
      "E",
      "F",
      "G",
      "H"
     ]
    ],
    "segs": [
     [
      "A",
      "D"
     ],
     [
      "D",
      "C"
     ],
     [
      "D",
      "H"
     ]
    ],
    "sides": [
     [
      "A",
      "B",
      "1 dm"
     ],
     [
      "B",
      "C",
      "1 dm"
     ],
     [
      "C",
      "G",
      "1 dm"
     ]
    ],
    "alt": "Sześcian o krawędzi 1 dm, czyli 10 cm.",
    "caption": "1 dm³ = 10 cm · 10 cm · 10 cm = 1 000 cm³ = 1 litr"
   },
   "example": {
    "q": "Basen ma wymiary 10 m × 4 m i głębokość 1,5 m. Ile litrów wody zmieści się w nim do pełna?",
    "steps": [
     "V = 10 · 4 · 1,5 = 60 m³.",
     "1 m³ = 1 000 l, więc 60 m³ = 60 000 l."
    ],
    "result": "60 000 litrów.",
    "tip": "Najłatwiej liczyć w metrach, a na końcu zamienić m³ na litry.",
    "check": [
     "10*4*F('1.5') == 60",
     "60*1000 == 60000"
    ]
   },
   "you": [
    {
     "id": "y4",
     "type": "abcd",
     "q": "2,5 l to:",
     "opts": [
      "2 500 cm³",
      "250 cm³",
      "25 dm³",
      "0,25 m³"
     ],
     "ok": 0,
     "why": {
      "B": "1 l = 1 000 cm³, więc mnożysz przez 1 000.",
      "C": "1 l = 1 dm³, więc 2,5 l = 2,5 dm³.",
      "D": "1 m³ = 1 000 l, więc 2,5 l = 0,0025 m³."
     },
     "sol": [
      "[[2,5 · 1 000 = 2 500]] cm³."
     ],
     "answer": "A, 2 500 cm³.",
     "tip": "1 l = 1 000 cm³.",
     "check": [
      "F('2.5')*1000 == 2500"
     ]
    },
    {
     "id": "y4b",
     "type": "fields",
     "q": "Ile litrów wody zmieści się w zbiorniku o wymiarach 1 m × 0,5 m × 0,4 m?",
     "fields": [
      {
       "label": "Litry",
       "ans": 200,
       "show": "200",
       "why": [
        [
         0.2,
         "0,2 to m³. 1 m³ = 1 000 l."
        ],
        [
         20,
         "1 m³ = 1 000 l, a nie 100 l."
        ]
       ]
      }
     ],
     "sol": [
      "[[V = 1 · 0,5 · 0,4 = 0,2]] m³ [[= 200]] l."
     ],
     "answer": "200 l.",
     "tip": "Albo w dm: 10 · 5 · 4 = 200 dm³.",
     "check": [
      "1*F('0.5')*F('0.4')*1000 == 200"
     ]
    }
   ]
  },
  {
   "title": "Graniastosłupy proste",
   "skills": [
    "B5"
   ],
   "intro": "Każdy graniastosłup prosty liczy się jak prostopadłościan: objętość to pole podstawy razy wysokość. Pole powierzchni to dwie podstawy i ściany boczne.",
   "rule": {
    "t": "V = Pp · H. Pc = 2 · Pp + Pb, gdzie Pb (pole boczne) = obwód podstawy · H.",
    "f": [
     "V = Pp · H",
     "Pb = obwód podstawy · H",
     "Pc = 2Pp + Pb"
    ],
    "e": "Wysokość graniastosłupa (H) to nie to samo co wysokość trójkąta w podstawie."
   },
   "visual": {
    "type": "solid",
    "names": {
     "A": "",
     "B": "",
     "C": "",
     "D": "",
     "E": "",
     "F": "",
     "G": "",
     "H": "",
     "S": "",
     "O": "",
     "M": "",
     "A1": "",
     "B1": "",
     "C1": "",
     "P0": "",
     "P1": "",
     "P2": "",
     "P3": ""
    },
    "pts3": {
     "A": [
      0,
      0,
      0
     ],
     "B": [
      4,
      0,
      0
     ],
     "C": [
      4,
      3,
      0
     ],
     "A1": [
      0,
      0,
      5
     ],
     "B1": [
      4,
      0,
      5
     ],
     "C1": [
      4,
      3,
      5
     ]
    },
    "polys": [
     [
      "A",
      "B",
      "B1",
      "A1"
     ],
     [
      "B",
      "C",
      "C1",
      "B1"
     ],
     [
      "A1",
      "B1",
      "C1"
     ]
    ],
    "segs": [
     [
      "A",
      "C"
     ]
    ],
    "sides": [
     [
      "A",
      "B",
      "4"
     ],
     [
      "B",
      "C",
      "3"
     ],
     [
      "C",
      "C1",
      "10"
     ]
    ],
    "alt": "Graniastosłup prosty: podstawa to trójkąt prostokątny o przyprostokątnych 3 i 4, wysokość bryły 10.",
    "caption": "Pp = 3 · 4 : 2 = 6, V = 6 · 10 = 60"
   },
   "example": {
    "q": "Podstawą graniastosłupa prostego jest trójkąt prostokątny o bokach 3 cm, 4 cm i 5 cm. Wysokość graniastosłupa to 10 cm. Oblicz objętość i pole powierzchni całkowitej.",
    "steps": [
     "Pp = 3 · 4 : 2 = 6 cm². V = 6 · 10 = 60 cm³.",
     "Obwód podstawy: 3 + 4 + 5 = 12 cm, Pb = 12 · 10 = 120 cm².",
     "Pc = 2 · 6 + 120 = 132 cm²."
    ],
    "result": "V = 60 cm³, Pc = 132 cm².",
    "tip": "Najpierw policz pole podstawy. Bez niego nie ruszysz ani objętości, ani pola.",
    "check": [
     "3*4/2 == 6",
     "6*10 == 60",
     "2*6 + 12*10 == 132"
    ]
   },
   "you": [
    {
     "id": "y5",
     "type": "fields",
     "q": "Graniastosłup prawidłowy czworokątny ma krawędź podstawy 5 cm i wysokość 8 cm. Oblicz objętość i pole powierzchni całkowitej.",
     "fields": [
      {
       "label": "V (cm³)",
       "ans": 200,
       "show": "200",
       "why": [
        [
         40,
         "Podstawa to kwadrat 5 × 5 = 25, a nie 5."
        ]
       ]
      },
      {
       "label": "Pc (cm²)",
       "ans": 210,
       "show": "210",
       "why": [
        [
         185,
         "Podstawy są dwie: 2 · 25."
        ],
        [
         160,
         "Dolicz dwie podstawy."
        ]
       ]
      }
     ],
     "sol": [
      "[[V = 25 · 8 = 200]] cm³.",
      "[[Pc = 2 · 25 + 4 · 5 · 8 = 210]] cm²."
     ],
     "answer": "200 cm³ i 210 cm².",
     "tip": "Prawidłowy czworokątny: w podstawie kwadrat.",
     "check": [
      "25*8 == 200",
      "2*25 + 4*5*8 == 210"
     ]
    },
    {
     "id": "y5b",
     "type": "abcd",
     "q": "Graniastosłup prawidłowy trójkątny ma krawędź podstawy 6 cm i wysokość 10 cm. Pole jego powierzchni bocznej jest równe:",
     "opts": [
      "180 cm²",
      "60 cm²",
      "90 cm²",
      "360 cm²"
     ],
     "ok": 0,
     "why": {
      "B": "60 cm² to jedna ściana boczna. Są trzy.",
      "C": "Nie dzielisz przez 2: ściany boczne to prostokąty.",
      "D": "Ścian bocznych jest 3, a nie 6."
     },
     "sol": [
      "[[Pb = 3 · 6 · 10 = 180]] cm²."
     ],
     "answer": "A, 180 cm².",
     "tip": "Obwód podstawy razy H.",
     "check": [
      "3*6*10 == 180"
     ]
    }
   ]
  },
  {
   "title": "Ostrosłupy",
   "skills": [
    "B6"
   ],
   "intro": "Ostrosłup mieści 3 razy mniej niż graniastosłup o takiej samej podstawie i wysokości. Do pola powierzchni potrzebna jest wysokość ściany bocznej, którą zwykle liczysz z twierdzenia Pitagorasa.",
   "rule": {
    "t": "V = Pp · H : 3. Pc = Pp + Pb (jedna podstawa!). W ostrosłupie prawidłowym czworokątnym: (wysokość ściany)² = H² + (a/2)².",
    "f": [
     "V = ⅓ · Pp · H",
     "Pc = Pp + Pb",
     "SM² = SO² + OM²"
    ],
    "e": "Nie myl wysokości ostrosłupa SO z wysokością ściany bocznej SM."
   },
   "visual": {
    "type": "solid",
    "names": {
     "A": "",
     "B": "",
     "C": "",
     "D": "",
     "E": "",
     "F": "",
     "G": "",
     "H": "",
     "S": "S",
     "O": "O",
     "M": "M",
     "A1": "",
     "B1": "",
     "C1": "",
     "P0": "",
     "P1": "",
     "P2": "",
     "P3": ""
    },
    "pts3": {
     "A": [
      0,
      0,
      0
     ],
     "B": [
      6,
      0,
      0
     ],
     "C": [
      6,
      6,
      0
     ],
     "D": [
      0,
      6,
      0
     ],
     "S": [
      3.0,
      3.0,
      4
     ],
     "O": [
      3.0,
      3.0,
      0
     ],
     "M": [
      3.0,
      0,
      0
     ]
    },
    "polys": [
     [
      "A",
      "B",
      "S"
     ],
     [
      "B",
      "C",
      "S"
     ]
    ],
    "segs": [
     [
      "A",
      "D"
     ],
     [
      "D",
      "C"
     ],
     [
      "D",
      "S"
     ],
     [
      "S",
      "O"
     ],
     [
      "S",
      "M"
     ],
     [
      "O",
      "M"
     ]
    ],
    "sides": [
     [
      "A",
      "M",
      "3"
     ],
     [
      "S",
      "O",
      "H",
      -1
     ],
     [
      "S",
      "M",
      "h",
      1
     ]
    ],
    "alt": "Ostrosłup prawidłowy czworokątny o krawędzi podstawy 6 i wysokości 4; SM to wysokość ściany bocznej.",
    "caption": "SO = H = 4, OM = 3, więc SM = √(16 + 9) = 5"
   },
   "example": {
    "q": "Ostrosłup prawidłowy czworokątny ma krawędź podstawy 6 cm i wysokość 4 cm. Oblicz jego objętość i pole powierzchni całkowitej.",
    "steps": [
     "Pp = 6 · 6 = 36 cm². V = 36 · 4 : 3 = 48 cm³.",
     "Wysokość ściany bocznej: trójkąt SOM, OM = 3 cm (połowa krawędzi), SO = 4 cm, więc SM = √(9 + 16) = 5 cm.",
     "Jedna ściana: 6 · 5 : 2 = 15 cm², cztery: 60 cm². Pc = 36 + 60 = 96 cm²."
    ],
    "result": "V = 48 cm³, Pc = 96 cm².",
    "tip": "Zadania z ostrosłupem były na egzaminie w 2025 i 2026 roku (za 3 punkty).",
    "check": [
     "36*4/3 == 48",
     "3**2 + 4**2 == 5**2",
     "36 + 4*(6*5/2) == 96"
    ]
   },
   "you": [
    {
     "id": "y6",
     "type": "fields",
     "q": "Podstawą ostrosłupa jest prostokąt 5 cm × 4 cm, a wysokość ostrosłupa to 6 cm. Oblicz objętość.",
     "fields": [
      {
       "label": "V (cm³)",
       "ans": 40,
       "show": "40",
       "why": [
        [
         120,
         "Ostrosłup: dzielisz przez 3."
        ],
        [
         60,
         "Dzielisz przez 3, a nie przez 2."
        ]
       ]
      }
     ],
     "sol": [
      "[[Pp = 20]] cm², [[V = 20 · 6 : 3 = 40]] cm³."
     ],
     "answer": "40 cm³.",
     "tip": "⅓ · Pp · H.",
     "check": [
      "20*6/3 == 40"
     ]
    },
    {
     "id": "y6b",
     "type": "abcd",
     "q": "Ostrosłup i graniastosłup mają takie same podstawy i takie same wysokości. Objętość ostrosłupa jest:",
     "opts": [
      "3 razy mniejsza",
      "3 razy większa",
      "2 razy mniejsza",
      "taka sama"
     ],
     "ok": 0,
     "why": {
      "B": "Odwrotnie: ostrosłup jest „spiczasty”, mieści mniej.",
      "C": "We wzorze na objętość ostrosłupa dzielisz przez 3, a nie przez 2.",
      "D": "Ostrosłup zwęża się ku górze, więc mieści mniej."
     },
     "sol": [
      "[[V = Pp · H : 3]], a graniastosłup: [[Pp · H]]."
     ],
     "answer": "A, 3 razy mniejsza.",
     "tip": "Stąd ⅓ we wzorze.",
     "check": [
      "True"
     ]
    }
   ]
  }
 ],
 "traps": [
  {
   "name": "Przelicznik jak dla długości",
   "bad": "1 dm³ = 10 cm³",
   "good": "1 dm³ = 1 000 cm³ = 1 l"
  },
  {
   "name": "Brak dzielenia przez 3",
   "bad": "ostrosłup: V = Pp · H",
   "good": "V = Pp · H : 3"
  },
  {
   "name": "Wysokość bryły zamiast wysokości ściany",
   "bad": "pole ściany ostrosłupa: a · H : 2",
   "good": "a · h : 2, gdzie h² = H² + (a/2)²"
  }
 ],
 "cheat": {
  "title": "Bryły w 6 zasadach",
  "rules": [
   {
    "t": "Rodzaje brył.",
    "f": [
     "graniastosłup: 2n, 3n, n + 2",
     "ostrosłup: n + 1, 2n, n + 1"
    ],
    "e": "Walec, stożek, kula: tylko rozpoznawanie."
   },
   {
    "t": "Siatki.",
    "f": [
     "pole siatki = pole powierzchni bryły"
    ],
    "e": "Nie zapominaj o podstawach."
   },
   {
    "t": "Prostopadłościan i sześcian.",
    "f": [
     "V = abc, P = 2(ab + bc + ac)",
     "V = a³, P = 6a²"
    ],
    "e": "Czy bryła ma wieko?"
   },
   {
    "t": "Jednostki.",
    "f": [
     "1 l = 1 dm³ = 1 000 cm³",
     "1 m³ = 1 000 l",
     "1 ml = 1 cm³"
    ],
    "e": "Przelicznik co 1 000."
   },
   {
    "t": "Graniastosłup prosty.",
    "f": [
     "V = Pp · H",
     "Pc = 2Pp + obwód · H"
    ],
    "e": "Najpierw pole podstawy."
   },
   {
    "t": "Ostrosłup.",
    "f": [
     "V = Pp · H : 3",
     "Pc = Pp + Pb"
    ],
    "e": "Wysokość ściany z Pitagorasa."
   }
  ]
 },
 "memo": {
  "title": "Wzory na bryły",
  "rows": [
   [
    "prostopadłościan",
    "sześcian",
    "graniastosłup",
    "ostrosłup"
   ],
   [
    "V = abc",
    "V = a³",
    "V = Pp · H",
    "V = Pp · H : 3"
   ]
  ],
  "note": "Pole powierzchni: suma pól wszystkich ścian. 1 l = 1 dm³, 1 m³ = 1 000 l."
 },
 "warmup": {
  "id": "w0",
  "type": "fields",
  "q": "Rozgrzewka: iloczyny i pola.",
  "fields": [
   {
    "label": "4 · 2,5 · 6",
    "ans": 60,
    "show": "60"
   },
   {
    "label": "Pole trójkąta 6 × 8 (przyprostokątne)",
    "ans": 24,
    "show": "24"
   },
   {
    "label": "36 · 4 : 3",
    "ans": 48,
    "show": "48"
   }
  ],
  "sol": [
   "<b>4 · 2,5 · 6</b> = 10 · 6 = [[60]].",
   "<b>6 · 8 : 2</b> = [[24]].",
   "<b>36 · 4 : 3</b> = 12 · 4 = [[48]]."
  ],
  "answer": "60, 24 i 48.",
  "tip": "Bryły to pola z poprzednich tematów razy wysokość. Jeśli pole trójkąta sprawiło kłopot, wróć do tematu „Pola”.",
  "check": [
   "4*F('2.5')*6 == 60",
   "6*8/2 == 24",
   "36*4/3 == 48"
  ]
 },
 "levels": [
  {
   "n": 1,
   "name": "Podstawy",
   "desc": "Rodzaje brył, siatki, prostopadłościan, jednostki i proste wzory na objętość."
  },
  {
   "n": 2,
   "name": "Trening",
   "desc": "Pola powierzchni graniastosłupów i ostrosłupów, wysokość ściany z Pitagorasa, zadania z litrami."
  },
  {
   "n": 3,
   "name": "Egzamin",
   "desc": "Zadania otwarte jak na egzaminie, także przykłady z podstawy programowej. Rozwiązuj na kartce, a potem oceniaj się według punktacji."
  }
 ],
 "practice": [
  {
   "id": "a1",
   "level": 1,
   "skills": [
    "B1"
   ],
   "type": "fields",
   "q": "Ile wierzchołków, krawędzi i ścian ma graniastosłup ośmiokątny?",
   "fields": [
    {
     "label": "Wierzchołki",
     "ans": 16,
     "show": "16",
     "why": [
      [
       8,
       "Graniastosłup ma dwie podstawy po 8 wierzchołków."
      ]
     ]
    },
    {
     "label": "Krawędzie",
     "ans": 24,
     "show": "24",
     "why": [
      [
       16,
       "Dolicz 8 krawędzi bocznych: 8 + 8 + 8."
      ]
     ]
    },
    {
     "label": "Ściany",
     "ans": 10,
     "show": "10",
     "why": [
      [
       8,
       "Dolicz dwie podstawy."
      ]
     ]
    }
   ],
   "sol": [
    "[[2 · 8 = 16]] wierzchołków, [[3 · 8 = 24]] krawędzie, [[8 + 2 = 10]] ścian."
   ],
   "answer": "16, 24 i 10.",
   "tip": "2n, 3n, n + 2.",
   "check": [
    "2*8 == 16",
    "3*8 == 24"
   ],
   "twin": {
    "type": "fields",
    "q": "Ile wierzchołków, krawędzi i ścian ma ostrosłup sześciokątny?",
    "fields": [
     {
      "label": "Wierzchołki",
      "ans": 7,
      "show": "7",
      "why": [
       [
        6,
        "Dolicz wierzchołek na górze."
       ]
      ]
     },
     {
      "label": "Krawędzie",
      "ans": 12,
      "show": "12",
      "why": [
       [
        6,
        "Dolicz 6 krawędzi bocznych."
       ]
      ]
     },
     {
      "label": "Ściany",
      "ans": 7,
      "show": "7",
      "why": [
       [
        6,
        "Dolicz podstawę."
       ]
      ]
     }
    ],
    "sol": [
     "[[6 + 1 = 7]] wierzchołków, [[2 · 6 = 12]] krawędzi, [[6 + 1 = 7]] ścian."
    ],
    "answer": "7, 12 i 7.",
    "tip": "n + 1, 2n, n + 1.",
    "check": [
     "2*6 == 12"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Ile wierzchołków, krawędzi i ścian ma graniastosłup pięciokątny?",
    "fields": [
     {
      "label": "Wierzchołki",
      "ans": 10,
      "show": "10"
     },
     {
      "label": "Krawędzie",
      "ans": 15,
      "show": "15"
     },
     {
      "label": "Ściany",
      "ans": 7,
      "show": "7"
     }
    ],
    "sol": [
     "[[10]], [[15]], [[7]]."
    ],
    "answer": "10, 15 i 7.",
    "tip": "2n, 3n, n + 2.",
    "check": [
     "3*5 == 15"
    ]
   }
  },
  {
   "id": "a2",
   "level": 1,
   "skills": [
    "B1"
   ],
   "type": "abcd",
   "q": "Który opis pasuje do ostrosłupa prawidłowego czworokątnego?",
   "opts": [
    "podstawa jest prostokątem, a ściany boczne to 4 prostokąty",
    "ma dwie podstawy, które są kwadratami",
    "podstawa jest kwadratem, a ściany boczne to 4 jednakowe trójkąty równoramienne",
    "podstawa jest dowolnym czworokątem, a ściany boczne to trójkąty"
   ],
   "ok": 2,
   "why": {
    "A": "Ściany boczne prostokątne ma graniastosłup, a nie ostrosłup.",
    "B": "Dwie podstawy ma graniastosłup.",
    "D": "„Prawidłowy” oznacza, że w podstawie jest wielokąt foremny, czyli kwadrat."
   },
   "sol": [
    "Prawidłowy: w podstawie [[wielokąt foremny]] (kwadrat). Ostrosłup: [[trójkątne ściany boczne]]."
   ],
   "answer": "C, podstawa jest kwadratem, a ściany boczne to 4 jednakowe trójkąty równoramienne.",
   "tip": "Prawidłowy = foremna podstawa.",
   "check": [
    "True"
   ],
   "twin": {
    "type": "abcd",
    "q": "Która bryła nie jest graniastosłupem?",
    "opts": [
     "walec",
     "sześcian",
     "prostopadłościan",
     "graniastosłup prawidłowy sześciokątny"
    ],
    "ok": 0,
    "why": {
     "B": "Sześcian to graniastosłup czworokątny o kwadratowych ścianach.",
     "C": "Prostopadłościan to graniastosłup czworokątny.",
     "D": "Sama nazwa mówi, że to graniastosłup."
    },
    "sol": [
     "Walec ma [[okrągłe podstawy i zakrzywioną ścianę]], więc nie jest graniastosłupem."
    ],
    "answer": "A, walec.",
    "tip": "Graniastosłup ma tylko płaskie ściany.",
    "check": [
     "True"
    ]
   }
  },
  {
   "id": "a3",
   "level": 1,
   "skills": [
    "B2"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Siatka sześcianu składa się z 6 przystających kwadratów.",
     "ok": "P"
    },
    {
     "t": "Siatka graniastosłupa trójkątnego składa się z 3 prostokątów i 1 trójkąta.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> Prawda.",
    "<b>Zdanie 2.</b> Graniastosłup ma dwie podstawy: [[2]] trójkąty i [[3]] prostokąty. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Dwie podstawy.",
   "check": [
    "2 + 3 == 5"
   ],
   "twin": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Siatka ostrosłupa czworokątnego składa się z 5 wielokątów.",
      "ok": "P"
     },
     {
      "t": "Siatka ostrosłupa trójkątnego składa się z 3 trójkątów.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> Podstawa i 4 trójkąty. Prawda.",
     "<b>Zdanie 2.</b> 3 ściany boczne i trójkątna podstawa: [[4]] trójkąty. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Nie zapominaj o podstawie.",
    "check": [
     "3 + 1 == 4"
    ]
   }
  },
  {
   "id": "a4",
   "level": 1,
   "skills": [
    "B3"
   ],
   "type": "fields",
   "q": "Oblicz objętość i pole powierzchni prostopadłościanu z rysunku (wymiary w cm).",
   "vis": {
    "type": "solid",
    "names": {
     "A": "",
     "B": "",
     "C": "",
     "D": "",
     "E": "",
     "F": "",
     "G": "",
     "H": "",
     "S": "",
     "O": "",
     "M": "",
     "A1": "",
     "B1": "",
     "C1": "",
     "P0": "",
     "P1": "",
     "P2": "",
     "P3": ""
    },
    "pts3": {
     "A": [
      0,
      0,
      0
     ],
     "B": [
      5,
      0,
      0
     ],
     "C": [
      5,
      3,
      0
     ],
     "D": [
      0,
      3,
      0
     ],
     "E": [
      0,
      0,
      4
     ],
     "F": [
      5,
      0,
      4
     ],
     "G": [
      5,
      3,
      4
     ],
     "H": [
      0,
      3,
      4
     ]
    },
    "polys": [
     [
      "A",
      "B",
      "F",
      "E"
     ],
     [
      "B",
      "C",
      "G",
      "F"
     ],
     [
      "E",
      "F",
      "G",
      "H"
     ]
    ],
    "segs": [
     [
      "A",
      "D"
     ],
     [
      "D",
      "C"
     ],
     [
      "D",
      "H"
     ]
    ],
    "sides": [
     [
      "A",
      "B",
      "5"
     ],
     [
      "B",
      "C",
      "3"
     ],
     [
      "C",
      "G",
      "4"
     ]
    ],
    "alt": "Prostopadłościan o wymiarach 5 na 3 na 4."
   },
   "fields": [
    {
     "label": "V (cm³)",
     "ans": 60,
     "show": "60",
     "why": [
      [
       12,
       "Dodano wymiary. Objętość to iloczyn."
      ]
     ]
    },
    {
     "label": "P (cm²)",
     "ans": 94,
     "show": "94",
     "why": [
      [
       47,
       "Każda ściana występuje dwa razy: pomnóż przez 2."
      ]
     ]
    }
   ],
   "sol": [
    "[[V = 5 · 3 · 4 = 60]] cm³.",
    "[[P = 2 · (15 + 12 + 20) = 94]] cm²."
   ],
   "answer": "60 cm³ i 94 cm².",
   "tip": "Trzy różne ściany, każda dwa razy.",
   "check": [
    "5*3*4 == 60",
    "2*(15 + 12 + 20) == 94"
   ],
   "twin": {
    "type": "fields",
    "q": "Oblicz objętość i pole powierzchni prostopadłościanu o wymiarach 6 cm × 2 cm × 5 cm.",
    "fields": [
     {
      "label": "V (cm³)",
      "ans": 60,
      "show": "60"
     },
     {
      "label": "P (cm²)",
      "ans": 104,
      "show": "104",
      "why": [
       [
        52,
        "Pomnóż przez 2."
       ]
      ]
     }
    ],
    "sol": [
     "[[V = 60]] cm³.",
     "[[P = 2 · (12 + 30 + 10) = 104]] cm²."
    ],
    "answer": "60 cm³ i 104 cm².",
    "tip": "P = 2(ab + bc + ac).",
    "check": [
     "6*2*5 == 60",
     "2*(12 + 30 + 10) == 104"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Oblicz objętość i pole powierzchni prostopadłościanu o wymiarach 10 cm × 4 cm × 3 cm.",
    "fields": [
     {
      "label": "V (cm³)",
      "ans": 120,
      "show": "120"
     },
     {
      "label": "P (cm²)",
      "ans": 164,
      "show": "164"
     }
    ],
    "sol": [
     "[[V = 120]] cm³, [[P = 2 · (40 + 12 + 30) = 164]] cm²."
    ],
    "answer": "120 cm³ i 164 cm².",
    "tip": "Trzy pary ścian.",
    "check": [
     "10*4*3 == 120",
     "2*(40 + 12 + 30) == 164"
    ]
   }
  },
  {
   "id": "a5",
   "level": 1,
   "skills": [
    "B3"
   ],
   "type": "fields",
   "q": "Oblicz objętość i pole powierzchni sześcianu o krawędzi 4 cm.",
   "fields": [
    {
     "label": "V (cm³)",
     "ans": 64,
     "show": "64",
     "why": [
      [
       16,
       "16 cm² to pole jednej ściany. V = 4 · 4 · 4."
      ],
      [
       12,
       "Objętość to 4 · 4 · 4, a nie 4 · 3."
      ]
     ]
    },
    {
     "label": "P (cm²)",
     "ans": 96,
     "show": "96",
     "why": [
      [
       16,
       "To pole jednej ściany. Ścian jest 6."
      ],
      [
       64,
       "Pole to 6 · 16."
      ]
     ]
    }
   ],
   "sol": [
    "[[V = 4³ = 64]] cm³.",
    "[[P = 6 · 16 = 96]] cm²."
   ],
   "answer": "64 cm³ i 96 cm².",
   "tip": "a³ i 6a².",
   "check": [
    "4**3 == 64",
    "6*16 == 96"
   ],
   "twin": {
    "type": "fields",
    "q": "Oblicz objętość i pole powierzchni sześcianu o krawędzi 5 cm.",
    "fields": [
     {
      "label": "V (cm³)",
      "ans": 125,
      "show": "125",
      "why": [
       [
        25,
        "To pole ściany."
       ]
      ]
     },
     {
      "label": "P (cm²)",
      "ans": 150,
      "show": "150",
      "why": [
       [
        25,
        "Ścian jest 6."
       ]
      ]
     }
    ],
    "sol": [
     "[[V = 125]] cm³, [[P = 150]] cm²."
    ],
    "answer": "125 cm³ i 150 cm².",
    "tip": "a³ i 6a².",
    "check": [
     "5**3 == 125",
     "6*25 == 150"
    ]
   }
  },
  {
   "id": "a6",
   "level": 1,
   "skills": [
    "B4"
   ],
   "type": "abcd",
   "q": "0,75 m³ to:",
   "opts": [
    "75 l",
    "7 500 l",
    "7,5 l",
    "750 l"
   ],
   "ok": 3,
   "why": {
    "A": "1 m³ = 1 000 l, a nie 100 l.",
    "B": "O jedno zero za dużo.",
    "C": "1 m³ = 1 000 l, więc mnożysz przez 1 000."
   },
   "sol": [
    "[[0,75 · 1 000 = 750]] l."
   ],
   "answer": "D, 750 l.",
   "tip": "1 m³ = 1 000 l.",
   "check": [
    "F('0.75')*1000 == 750"
   ],
   "twin": {
    "type": "abcd",
    "q": "350 ml to:",
    "opts": [
     "3,5 dm³",
     "350 cm³",
     "35 cm³",
     "0,35 cm³"
    ],
    "ok": 1,
    "why": {
     "A": "3,5 dm³ to 3,5 l. 350 ml to 0,35 l.",
     "C": "1 ml = 1 cm³, więc liczba się nie zmienia.",
     "D": "1 ml = 1 cm³."
    },
    "sol": [
     "[[1 ml = 1 cm³]], więc [[350 ml = 350 cm³]]."
    ],
    "answer": "B, 350 cm³.",
    "tip": "Mililitr to centymetr sześcienny.",
    "check": [
     "True"
    ]
   }
  },
  {
   "id": "a7",
   "level": 1,
   "skills": [
    "B5"
   ],
   "type": "fields",
   "q": "Graniastosłup prosty ma pole podstawy 12 cm² i wysokość 7 cm. Oblicz jego objętość.",
   "fields": [
    {
     "label": "V (cm³)",
     "ans": 84,
     "show": "84",
     "why": [
      [
       28,
       "Dzielisz przez 3 tylko w ostrosłupie. Graniastosłup: Pp · H."
      ]
     ]
    }
   ],
   "sol": [
    "[[V = 12 · 7 = 84]] cm³."
   ],
   "answer": "84 cm³.",
   "tip": "Pp · H.",
   "check": [
    "12*7 == 84"
   ],
   "twin": {
    "type": "fields",
    "q": "Graniastosłup prosty ma pole podstawy 15 cm² i wysokość 6 cm. Oblicz jego objętość.",
    "fields": [
     {
      "label": "V (cm³)",
      "ans": 90,
      "show": "90",
      "why": [
       [
        30,
        "Dzielisz przez 3 tylko w ostrosłupie."
       ]
      ]
     }
    ],
    "sol": [
     "[[V = 15 · 6 = 90]] cm³."
    ],
    "answer": "90 cm³.",
    "tip": "Pp · H.",
    "check": [
     "15*6 == 90"
    ]
   }
  },
  {
   "id": "a8",
   "level": 1,
   "skills": [
    "B6"
   ],
   "type": "fields",
   "q": "Ostrosłup ma pole podstawy 18 cm² i wysokość 5 cm. Oblicz jego objętość.",
   "fields": [
    {
     "label": "V (cm³)",
     "ans": 30,
     "show": "30",
     "why": [
      [
       90,
       "Ostrosłup: dzielisz przez 3."
      ],
      [
       45,
       "Dzielisz przez 3, a nie przez 2."
      ]
     ]
    }
   ],
   "sol": [
    "[[V = 18 · 5 : 3 = 30]] cm³."
   ],
   "answer": "30 cm³.",
   "tip": "⅓ · Pp · H.",
   "check": [
    "18*5/3 == 30"
   ],
   "twin": {
    "type": "fields",
    "q": "Ostrosłup ma pole podstawy 24 cm² i wysokość 7 cm. Oblicz jego objętość.",
    "fields": [
     {
      "label": "V (cm³)",
      "ans": 56,
      "show": "56",
      "why": [
       [
        168,
        "Dzielisz przez 3."
       ]
      ]
     }
    ],
    "sol": [
     "[[V = 24 · 7 : 3 = 56]] cm³."
    ],
    "answer": "56 cm³.",
    "tip": "24 : 3 = 8.",
    "check": [
     "24*7/3 == 56"
    ]
   }
  },
  {
   "id": "b1",
   "level": 2,
   "skills": [
    "B5"
   ],
   "type": "fields",
   "q": "Graniastosłup prawidłowy czworokątny ma krawędź podstawy 3 cm i wysokość 10 cm. Oblicz objętość i pole powierzchni całkowitej.",
   "fields": [
    {
     "label": "V (cm³)",
     "ans": 90,
     "show": "90",
     "why": [
      [
       30,
       "Podstawa to kwadrat 3 × 3 = 9."
      ]
     ]
    },
    {
     "label": "Pc (cm²)",
     "ans": 138,
     "show": "138",
     "why": [
      [
       129,
       "Podstawy są dwie: 2 · 9."
      ],
      [
       120,
       "Dolicz dwie podstawy."
      ]
     ]
    }
   ],
   "sol": [
    "[[V = 9 · 10 = 90]] cm³.",
    "[[Pc = 2 · 9 + 4 · 3 · 10 = 138]] cm²."
   ],
   "answer": "90 cm³ i 138 cm².",
   "tip": "2 podstawy + 4 ściany.",
   "check": [
    "9*10 == 90",
    "18 + 120 == 138"
   ],
   "twin": {
    "type": "fields",
    "q": "Graniastosłup prawidłowy czworokątny ma krawędź podstawy 6 cm i wysokość 5 cm. Oblicz objętość i pole powierzchni całkowitej.",
    "fields": [
     {
      "label": "V (cm³)",
      "ans": 180,
      "show": "180"
     },
     {
      "label": "Pc (cm²)",
      "ans": 192,
      "show": "192",
      "why": [
       [
        156,
        "Podstawy są dwie."
       ]
      ]
     }
    ],
    "sol": [
     "[[V = 36 · 5 = 180]] cm³.",
     "[[Pc = 72 + 120 = 192]] cm²."
    ],
    "answer": "180 cm³ i 192 cm².",
    "tip": "Kwadrat w podstawie.",
    "check": [
     "36*5 == 180",
     "2*36 + 4*6*5 == 192"
    ]
   }
  },
  {
   "id": "b2",
   "level": 2,
   "skills": [
    "B5"
   ],
   "type": "fields",
   "q": "Podstawą graniastosłupa prostego jest trójkąt prostokątny o bokach 6 cm, 8 cm i 10 cm. Wysokość graniastosłupa to 12 cm. Oblicz objętość i pole powierzchni całkowitej.",
   "vis": {
    "type": "solid",
    "names": {
     "A": "",
     "B": "",
     "C": "",
     "D": "",
     "E": "",
     "F": "",
     "G": "",
     "H": "",
     "S": "",
     "O": "",
     "M": "",
     "A1": "",
     "B1": "",
     "C1": "",
     "P0": "",
     "P1": "",
     "P2": "",
     "P3": ""
    },
    "pts3": {
     "A": [
      0,
      0,
      0
     ],
     "B": [
      4,
      0,
      0
     ],
     "C": [
      4,
      3,
      0
     ],
     "A1": [
      0,
      0,
      5
     ],
     "B1": [
      4,
      0,
      5
     ],
     "C1": [
      4,
      3,
      5
     ]
    },
    "polys": [
     [
      "A",
      "B",
      "B1",
      "A1"
     ],
     [
      "B",
      "C",
      "C1",
      "B1"
     ],
     [
      "A1",
      "B1",
      "C1"
     ]
    ],
    "segs": [
     [
      "A",
      "C"
     ]
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
      "C",
      "C1",
      "12"
     ]
    ],
    "alt": "Graniastosłup prosty o podstawie trójkąta prostokątnego."
   },
   "fields": [
    {
     "label": "V (cm³)",
     "ans": 288,
     "show": "288",
     "why": [
      [
       576,
       "Pole trójkąta to 6 · 8 : 2 = 24, a nie 48."
      ]
     ]
    },
    {
     "label": "Pc (cm²)",
     "ans": 336,
     "show": "336",
     "why": [
      [
       312,
       "Podstawy są dwie: 2 · 24."
      ]
     ]
    }
   ],
   "sol": [
    "[[Pp = 24]] cm², [[V = 24 · 12 = 288]] cm³.",
    "Obwód podstawy: [[24]] cm, [[Pb = 24 · 12 = 288]] cm².",
    "[[Pc = 48 + 288 = 336]] cm²."
   ],
   "answer": "288 cm³ i 336 cm².",
   "tip": "Obwód podstawy razy H to pole boczne.",
   "check": [
    "6*8/2 == 24",
    "24*12 == 288",
    "2*24 + 24*12 == 336"
   ],
   "twin": {
    "type": "fields",
    "q": "Podstawą graniastosłupa prostego jest trójkąt prostokątny o bokach 5 cm, 12 cm i 13 cm. Wysokość graniastosłupa to 10 cm. Oblicz objętość i pole powierzchni całkowitej.",
    "fields": [
     {
      "label": "V (cm³)",
      "ans": 300,
      "show": "300",
      "why": [
       [
        600,
        "Pole trójkąta: 5 · 12 : 2 = 30."
       ]
      ]
     },
     {
      "label": "Pc (cm²)",
      "ans": 360,
      "show": "360"
     }
    ],
    "sol": [
     "[[Pp = 30]], [[V = 300]] cm³.",
     "[[Pc = 60 + 30 · 10 = 360]] cm²."
    ],
    "answer": "300 cm³ i 360 cm².",
    "tip": "Obwód 30 cm.",
    "check": [
     "5*12/2 == 30",
     "60 + 30*10 == 360"
    ]
   }
  },
  {
   "id": "b3",
   "level": 2,
   "skills": [
    "B6"
   ],
   "type": "fields",
   "q": "Ostrosłup prawidłowy czworokątny ma krawędź podstawy 6 cm i wysokość 4 cm. Oblicz wysokość ściany bocznej, pole powierzchni całkowitej i objętość.",
   "vis": {
    "type": "solid",
    "names": {
     "A": "",
     "B": "",
     "C": "",
     "D": "",
     "E": "",
     "F": "",
     "G": "",
     "H": "",
     "S": "S",
     "O": "O",
     "M": "M",
     "A1": "",
     "B1": "",
     "C1": "",
     "P0": "",
     "P1": "",
     "P2": "",
     "P3": ""
    },
    "pts3": {
     "A": [
      0,
      0,
      0
     ],
     "B": [
      6,
      0,
      0
     ],
     "C": [
      6,
      6,
      0
     ],
     "D": [
      0,
      6,
      0
     ],
     "S": [
      3.0,
      3.0,
      4
     ],
     "O": [
      3.0,
      3.0,
      0
     ],
     "M": [
      3.0,
      0,
      0
     ]
    },
    "polys": [
     [
      "A",
      "B",
      "S"
     ],
     [
      "B",
      "C",
      "S"
     ]
    ],
    "segs": [
     [
      "A",
      "D"
     ],
     [
      "D",
      "C"
     ],
     [
      "D",
      "S"
     ],
     [
      "S",
      "O"
     ],
     [
      "S",
      "M"
     ],
     [
      "O",
      "M"
     ]
    ],
    "sides": [
     [
      "A",
      "M",
      "3"
     ],
     [
      "S",
      "O",
      "4",
      -1
     ],
     [
      "S",
      "M",
      "h",
      1
     ]
    ],
    "alt": "Ostrosłup prawidłowy czworokątny z wysokością SO i wysokością ściany bocznej SM."
   },
   "fields": [
    {
     "label": "Wysokość ściany (cm)",
     "ans": 5,
     "show": "5",
     "why": [
      [
       4,
       "4 cm to wysokość ostrosłupa. Wysokość ściany: √(4² + 3²)."
      ],
      [
       7,
       "Nie dodawaj długości: √(16 + 9)."
      ]
     ]
    },
    {
     "label": "Pc (cm²)",
     "ans": 96,
     "show": "96",
     "why": [
      [
       60,
       "Dolicz podstawę 36 cm²."
      ],
      [
       132,
       "Podstawa jest jedna."
      ]
     ]
    },
    {
     "label": "V (cm³)",
     "ans": 48,
     "show": "48",
     "why": [
      [
       144,
       "Ostrosłup: dzielisz przez 3."
      ]
     ]
    }
   ],
   "sol": [
    "[[h² = 4² + 3² = 25]], [[h = 5]] cm.",
    "[[Pc = 36 + 4 · 6 · 5 : 2 = 96]] cm².",
    "[[V = 36 · 4 : 3 = 48]] cm³."
   ],
   "answer": "5 cm, 96 cm², 48 cm³.",
   "tip": "OM to połowa krawędzi podstawy.",
   "check": [
    "4**2 + 3**2 == 5**2",
    "36 + 4*6*5/2 == 96",
    "36*4/3 == 48"
   ],
   "twin": {
    "type": "fields",
    "q": "Ostrosłup prawidłowy czworokątny ma krawędź podstawy 10 cm i wysokość 12 cm. Oblicz wysokość ściany bocznej, pole powierzchni całkowitej i objętość.",
    "fields": [
     {
      "label": "Wysokość ściany (cm)",
      "ans": 13,
      "show": "13",
      "why": [
       [
        12,
        "12 cm to wysokość ostrosłupa."
       ]
      ]
     },
     {
      "label": "Pc (cm²)",
      "ans": 360,
      "show": "360"
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
     "[[h² = 144 + 25 = 169]], [[h = 13]] cm.",
     "[[Pc = 100 + 4 · 10 · 13 : 2 = 360]] cm².",
     "[[V = 100 · 12 : 3 = 400]] cm³."
    ],
    "answer": "13 cm, 360 cm², 400 cm³.",
    "tip": "5, 12, 13.",
    "check": [
     "12**2 + 5**2 == 13**2",
     "100 + 4*10*13/2 == 360",
     "100*12/3 == 400"
    ]
   }
  },
  {
   "id": "b4",
   "level": 2,
   "skills": [
    "B4",
    "B3"
   ],
   "type": "fields",
   "q": "Akwarium ma wymiary 60 cm × 40 cm × 50 cm (wysokość). Nalano do niego wody do wysokości 45 cm. Ile litrów wody jest w akwarium?",
   "fields": [
    {
     "label": "Litry",
     "ans": 108,
     "show": "108",
     "why": [
      [
       120,
       "To pojemność całego akwarium (do 50 cm). Woda sięga 45 cm."
      ],
      [
       108000,
       "To cm³. 1 l = 1 000 cm³."
      ]
     ]
    }
   ],
   "sol": [
    "[[V = 60 · 40 · 45 = 108 000]] cm³.",
    "[[108 000 cm³ = 108]] l."
   ],
   "answer": "108 l.",
   "tip": "Liczysz objętość wody, nie całego akwarium.",
   "check": [
    "60*40*45 == 108000"
   ],
   "twin": {
    "type": "fields",
    "q": "Akwarium ma wymiary 50 cm × 30 cm × 40 cm (wysokość). Nalano do niego wody do wysokości 32 cm. Ile litrów wody jest w akwarium?",
    "fields": [
     {
      "label": "Litry",
      "ans": 48,
      "show": "48",
      "why": [
       [
        60,
        "To całe akwarium. Woda sięga 32 cm."
       ]
      ]
     }
    ],
    "sol": [
     "[[50 · 30 · 32 = 48 000]] cm³ [[= 48]] l."
    ],
    "answer": "48 l.",
    "tip": "1 l = 1 000 cm³.",
    "check": [
     "50*30*32 == 48000"
    ]
   }
  },
  {
   "id": "b5",
   "level": 2,
   "skills": [
    "B3"
   ],
   "type": "fields",
   "q": "Suma długości wszystkich krawędzi sześcianu wynosi 60 cm. Oblicz objętość tego sześcianu.",
   "fields": [
    {
     "label": "V (cm³)",
     "ans": 125,
     "show": "125",
     "why": [
      [
       1000,
       "Sześcian ma 12 krawędzi, a nie 6: a = 60 : 12 = 5."
      ],
      [
       3375,
       "Sześcian ma 12 krawędzi, a nie 4."
      ]
     ]
    }
   ],
   "sol": [
    "[[a = 60 : 12 = 5]] cm.",
    "[[V = 5³ = 125]] cm³."
   ],
   "answer": "125 cm³.",
   "tip": "12 krawędzi.",
   "check": [
    "60/12 == 5",
    "5**3 == 125"
   ],
   "twin": {
    "type": "fields",
    "q": "Krawędzie prostopadłościanu mają długości a, 2a i 3a, a suma długości wszystkich jego krawędzi wynosi 96 cm. Oblicz objętość prostopadłościanu.",
    "fields": [
     {
      "label": "V (cm³)",
      "ans": 384,
      "show": "384",
      "why": [
       [
        6144,
        "Każda krawędź występuje 4 razy: 4 · 6a = 96, więc a = 4."
       ]
      ]
     }
    ],
    "sol": [
     "[[4 · (a + 2a + 3a) = 24a = 96]], [[a = 4]].",
     "Krawędzie: 4, 8, 12. [[V = 4 · 8 · 12 = 384]] cm³."
    ],
    "answer": "384 cm³.",
    "tip": "Po 4 krawędzie każdej długości.",
    "check": [
     "24*4 == 96",
     "4*8*12 == 384"
    ]
   }
  },
  {
   "id": "b6",
   "level": 2,
   "skills": [
    "B6",
    "B3"
   ],
   "type": "abcd",
   "q": "Sześcian ma krawędź 6 cm. Ostrosłup ma podstawę taką jak dolna ściana sześcianu, a wierzchołek na górnej ścianie sześcianu. Objętość ostrosłupa jest równa:",
   "vis": {
    "type": "solid",
    "names": {
     "A": "",
     "B": "",
     "C": "",
     "D": "",
     "E": "",
     "F": "",
     "G": "",
     "H": "",
     "S": "",
     "O": "",
     "M": "",
     "A1": "",
     "B1": "",
     "C1": "",
     "P0": "",
     "P1": "",
     "P2": "",
     "P3": ""
    },
    "pts3": {
     "A": [
      0,
      0,
      0
     ],
     "B": [
      4,
      0,
      0
     ],
     "C": [
      4,
      4,
      0
     ],
     "D": [
      0,
      4,
      0
     ],
     "E": [
      0,
      0,
      4
     ],
     "F": [
      4,
      0,
      4
     ],
     "G": [
      4,
      4,
      4
     ],
     "H": [
      0,
      4,
      4
     ],
     "S": [
      2,
      2,
      4
     ]
    },
    "polys": [
     [
      "A",
      "B",
      "F",
      "E"
     ],
     [
      "B",
      "C",
      "G",
      "F"
     ],
     [
      "E",
      "F",
      "G",
      "H"
     ],
     [
      "A",
      "B",
      "S"
     ],
     [
      "B",
      "C",
      "S"
     ]
    ],
    "shade": [
     3,
     4
    ],
    "segs": [
     [
      "A",
      "D"
     ],
     [
      "D",
      "C"
     ],
     [
      "D",
      "H"
     ],
     [
      "D",
      "S"
     ]
    ],
    "alt": "Sześcian z ostrosłupem wpisanym: podstawa to dolna ściana, wierzchołek na środku górnej ściany."
   },
   "opts": [
    "216 cm³",
    "72 cm³",
    "108 cm³",
    "36 cm³"
   ],
   "ok": 1,
   "why": {
    "A": "216 cm³ to objętość całego sześcianu.",
    "C": "Dzielisz przez 3, a nie przez 2.",
    "D": "36 cm² to pole podstawy."
   },
   "sol": [
    "Wysokość ostrosłupa = krawędź sześcianu = [[6]] cm.",
    "[[V = 36 · 6 : 3 = 72]] cm³."
   ],
   "answer": "B, 72 cm³.",
   "tip": "Ostrosłup w sześcianie był na egzaminie w 2026 roku.",
   "check": [
    "36*6/3 == 72"
   ],
   "twin": {
    "type": "abcd",
    "q": "Ostrosłup i graniastosłup mają takie same podstawy i takie same wysokości. Objętość graniastosłupa to 150 cm³. Objętość ostrosłupa jest równa:",
    "opts": [
     "450 cm³",
     "75 cm³",
     "150 cm³",
     "50 cm³"
    ],
    "ok": 3,
    "why": {
     "A": "Ostrosłup ma mniejszą objętość, a nie większą.",
     "B": "Dzielisz przez 3, a nie przez 2.",
     "C": "Objętości nie są równe."
    },
    "sol": [
     "[[150 : 3 = 50]] cm³."
    ],
    "answer": "D, 50 cm³.",
    "tip": "Ostrosłup to ⅓ graniastosłupa.",
    "check": [
     "150/3 == 50"
    ]
   }
  },
  {
   "id": "b7",
   "level": 2,
   "skills": [
    "B1",
    "B2"
   ],
   "type": "fields",
   "q": "Graniastosłup ma 21 krawędzi. Ile ma wierzchołków, a ile ścian?",
   "fields": [
    {
     "label": "Wierzchołki",
     "ans": 14,
     "show": "14",
     "why": [
      [
       7,
       "Podstawy są dwie, po 7 wierzchołków."
      ],
      [
       21,
       "Liczba wierzchołków to 2n, a krawędzi 3n."
      ]
     ]
    },
    {
     "label": "Ściany",
     "ans": 9,
     "show": "9",
     "why": [
      [
       7,
       "Dolicz dwie podstawy."
      ]
     ]
    }
   ],
   "sol": [
    "[[3n = 21]], [[n = 7]]: graniastosłup siedmiokątny.",
    "Wierzchołki: [[14]], ściany: [[9]]."
   ],
   "answer": "14 wierzchołków i 9 ścian.",
   "tip": "Najpierw n.",
   "check": [
    "3*7 == 21",
    "2*7 == 14",
    "7 + 2 == 9"
   ],
   "twin": {
    "type": "fields",
    "q": "Ostrosłup ma 16 krawędzi. Ile ma wierzchołków, a ile ścian?",
    "fields": [
     {
      "label": "Wierzchołki",
      "ans": 9,
      "show": "9",
      "why": [
       [
        8,
        "Dolicz wierzchołek na górze."
       ]
      ]
     },
     {
      "label": "Ściany",
      "ans": 9,
      "show": "9",
      "why": [
       [
        8,
        "Dolicz podstawę."
       ]
      ]
     }
    ],
    "sol": [
     "[[2n = 16]], [[n = 8]].",
     "Wierzchołki: [[9]], ściany: [[9]]."
    ],
    "answer": "9 wierzchołków i 9 ścian.",
    "tip": "Ostrosłup: 2n krawędzi.",
    "check": [
     "2*8 == 16"
    ]
   }
  },
  {
   "id": "c1",
   "level": 3,
   "skills": [
    "B5"
   ],
   "type": "self",
   "q": "Podstawą graniastosłupa prostego jest trójkąt równoramienny, którego dwa kąty mają miarę po 45°, a najdłuższy bok ma długość 6√2 dm. Jeden z boków prostokąta, który jest w tym graniastosłupie ścianą boczną o największej powierzchni, ma długość 4 dm. Oblicz objętość i pole powierzchni całkowitej tego graniastosłupa. (Przykład z podstawy programowej.)",
   "criteria": [
    {
     "t": "Zauważono, że podstawa to trójkąt prostokątny równoramienny, i obliczono przyprostokątne: 6 dm (bo przeciwprostokątna to a√2), a także ustalono, że wysokość graniastosłupa to 4 dm.",
     "pts": 1
    },
    {
     "t": "Obliczono objętość: Pp = 6 · 6 : 2 = 18 dm², V = 18 · 4 = 72 dm³.",
     "pts": 1
    },
    {
     "t": "Obliczono pole: Pc = 2 · 18 + (6 + 6 + 6√2) · 4 = 84 + 24√2 dm².",
     "pts": 1
    }
   ],
   "sol": [
    "Kąty 45°, 45°, 90°: trójkąt prostokątny równoramienny, [[a√2 = 6√2]], [[a = 6]] dm.",
    "Największa ściana leży na boku 6√2, jej drugi bok to wysokość graniastosłupa: [[H = 4]] dm.",
    "[[Pp = 18]] dm², [[V = 72]] dm³.",
    "[[Pc = 36 + (12 + 6√2) · 4 = 84 + 24√2]] dm²."
   ],
   "answer": "V = 72 dm³, Pc = (84 + 24√2) dm².",
   "tip": "Przeciwprostokątna trójkąta 45°, 45°, 90° to a√2.",
   "check": [
    "6*6/2 == 18",
    "18*4 == 72",
    "36 + 12*4 == 84",
    "6*4 == 24"
   ],
   "twin": {
    "type": "self",
    "q": "Podstawą graniastosłupa prostego jest trójkąt równoramienny o kątach 45°, 45° i 90°, którego najdłuższy bok ma 4√2 cm. Największa ściana boczna ma jeden bok długości 5 cm. Oblicz objętość i pole powierzchni całkowitej graniastosłupa.",
    "criteria": [
     {
      "t": "Przyprostokątne 4 cm, H = 5 cm.",
      "pts": 1
     },
     {
      "t": "V = 8 · 5 = 40 cm³.",
      "pts": 1
     },
     {
      "t": "Pc = 16 + (8 + 4√2) · 5 = 56 + 20√2 cm².",
      "pts": 1
     }
    ],
    "sol": [
     "[[a = 4]] cm, [[Pp = 8]] cm², [[V = 40]] cm³.",
     "[[Pc = 16 + 40 + 20√2 = 56 + 20√2]] cm²."
    ],
    "answer": "V = 40 cm³, Pc = (56 + 20√2) cm².",
    "tip": "a√2 = 4√2.",
    "check": [
     "4*4/2 == 8",
     "8*5 == 40",
     "16 + 8*5 == 56"
    ]
   }
  },
  {
   "id": "c2",
   "level": 3,
   "skills": [
    "B6"
   ],
   "type": "self",
   "q": "Prostokąt ABCD jest podstawą ostrosłupa ABCDS, punkt M jest środkiem krawędzi AD, a odcinek MS jest wysokością ostrosłupa. AD = 10 cm, AS = 13 cm, AB = 20 cm. Oblicz objętość ostrosłupa. (Przykład z podstawy programowej.)",
   "vis": {
    "type": "solid",
    "names": {
     "A": "A",
     "B": "B",
     "C": "C",
     "D": "D",
     "E": "",
     "F": "",
     "G": "",
     "H": "",
     "S": "S",
     "O": "",
     "M": "M",
     "A1": "",
     "B1": "",
     "C1": "",
     "P0": "",
     "P1": "",
     "P2": "",
     "P3": ""
    },
    "pts3": {
     "A": [
      0,
      0,
      0
     ],
     "B": [
      6,
      0,
      0
     ],
     "C": [
      6,
      3,
      0
     ],
     "D": [
      0,
      3,
      0
     ],
     "M": [
      0,
      1.5,
      0
     ],
     "S": [
      0,
      1.5,
      3.6
     ]
    },
    "polys": [
     [
      "A",
      "B",
      "S"
     ],
     [
      "B",
      "C",
      "S"
     ]
    ],
    "segs": [
     [
      "A",
      "D"
     ],
     [
      "D",
      "C"
     ],
     [
      "D",
      "S"
     ],
     [
      "M",
      "S"
     ]
    ],
    "alt": "Ostrosłup ABCDS o podstawie prostokąta; wysokość MS wychodzi ze środka M krawędzi AD."
   },
   "criteria": [
    {
     "t": "Zauważono trójkąt prostokątny AMS i AM = 5 cm.",
     "pts": 1
    },
    {
     "t": "Obliczono MS = √(169 − 25) = 12 cm.",
     "pts": 1
    },
    {
     "t": "Obliczono objętość: 10 · 20 · 12 : 3 = 800 cm³.",
     "pts": 1
    }
   ],
   "sol": [
    "[[AM = 10 : 2 = 5]] cm.",
    "Trójkąt AMS ma kąt prosty przy M: [[MS² = 13² − 5² = 144]], [[MS = 12]] cm.",
    "[[V = 200 · 12 : 3 = 800]] cm³."
   ],
   "answer": "800 cm³.",
   "tip": "Szukaj trójkąta prostokątnego z wysokością ostrosłupa.",
   "check": [
    "13**2 - 5**2 == 12**2",
    "10*20*12/3 == 800"
   ],
   "twin": {
    "type": "self",
    "q": "Prostokąt ABCD jest podstawą ostrosłupa ABCDS, punkt M jest środkiem krawędzi AD, a odcinek MS jest wysokością ostrosłupa. AD = 12 cm, AS = 10 cm, AB = 15 cm. Oblicz objętość ostrosłupa.",
    "criteria": [
     {
      "t": "AM = 6 cm.",
      "pts": 1
     },
     {
      "t": "MS = 8 cm.",
      "pts": 1
     },
     {
      "t": "V = 180 · 8 : 3 = 480 cm³.",
      "pts": 1
     }
    ],
    "sol": [
     "[[AM = 6]], [[MS = √(100 − 36) = 8]] cm.",
     "[[V = 180 · 8 : 3 = 480]] cm³."
    ],
    "answer": "480 cm³.",
    "tip": "6, 8, 10.",
    "check": [
     "10**2 - 6**2 == 8**2",
     "12*15*8/3 == 480"
    ]
   }
  },
  {
   "id": "c3",
   "level": 3,
   "skills": [
    "B4",
    "B3"
   ],
   "type": "self",
   "q": "Basen ma kształt prostopadłościanu o wymiarach 25 m × 10 m i głębokość 1,6 m. Wodę nalano do 90% pojemności basenu. Ile metrów sześciennych i ile litrów wody jest w basenie? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono pojemność basenu: 25 · 10 · 1,6 = 400 m³.",
     "pts": 1
    },
    {
     "t": "Obliczono ilość wody: 90% z 400 = 360 m³ = 360 000 l.",
     "pts": 1
    }
   ],
   "sol": [
    "[[V = 25 · 10 · 1,6 = 400]] m³.",
    "[[0,9 · 400 = 360]] m³ [[= 360 000]] l."
   ],
   "answer": "360 m³, czyli 360 000 l.",
   "tip": "Procenty z Działu 1 wracają w geometrii.",
   "check": [
    "25*10*F('1.6') == 400",
    "F('0.9')*400 == 360"
   ],
   "twin": {
    "type": "self",
    "q": "Basen ma wymiary 12 m × 6 m i głębokość 1,5 m. Wodę nalano do 80% pojemności. Ile m³ i ile litrów wody jest w basenie? Zapisz obliczenia.",
    "criteria": [
     {
      "t": "Pojemność: 108 m³.",
      "pts": 1
     },
     {
      "t": "Woda: 86,4 m³ = 86 400 l.",
      "pts": 1
     }
    ],
    "sol": [
     "[[V = 108]] m³.",
     "[[0,8 · 108 = 86,4]] m³ [[= 86 400]] l."
    ],
    "answer": "86,4 m³, czyli 86 400 l.",
    "tip": "1 m³ = 1 000 l.",
    "check": [
     "12*6*F('1.5') == 108",
     "F('0.8')*108 == F('86.4')"
    ]
   }
  },
  {
   "id": "c4",
   "level": 3,
   "skills": [
    "B3"
   ],
   "type": "fields",
   "q": "Prostopadłościan ma w podstawie kwadrat o boku 4 cm, a jego objętość wynosi 112 cm³. Oblicz wysokość i pole powierzchni prostopadłościanu.",
   "fields": [
    {
     "label": "H (cm)",
     "ans": 7,
     "show": "7",
     "why": [
      [
       28,
       "Pole podstawy to 4 · 4 = 16, a nie 4."
      ]
     ]
    },
    {
     "label": "P (cm²)",
     "ans": 144,
     "show": "144",
     "why": [
      [
       128,
       "Podstawy są dwie: 2 · 16."
      ]
     ]
    }
   ],
   "sol": [
    "[[H = 112 : 16 = 7]] cm.",
    "[[P = 2 · 16 + 4 · 4 · 7 = 144]] cm²."
   ],
   "answer": "7 cm i 144 cm².",
   "tip": "H = V : Pp.",
   "check": [
    "16*7 == 112",
    "32 + 112 == 144"
   ],
   "twin": {
    "type": "fields",
    "q": "Prostopadłościan ma w podstawie kwadrat o boku 5 cm, a jego objętość wynosi 150 cm³. Oblicz wysokość i pole powierzchni prostopadłościanu.",
    "fields": [
     {
      "label": "H (cm)",
      "ans": 6,
      "show": "6",
      "why": [
       [
        30,
        "Pole podstawy to 25."
       ]
      ]
     },
     {
      "label": "P (cm²)",
      "ans": 170,
      "show": "170"
     }
    ],
    "sol": [
     "[[H = 150 : 25 = 6]] cm.",
     "[[P = 50 + 120 = 170]] cm²."
    ],
    "answer": "6 cm i 170 cm².",
    "tip": "H = V : Pp.",
    "check": [
     "25*6 == 150",
     "50 + 4*5*6 == 170"
    ]
   }
  },
  {
   "id": "c5",
   "level": 3,
   "skills": [
    "B6",
    "B2"
   ],
   "type": "abcd",
   "q": "Ostrosłup prawidłowy czworokątny ma wszystkie krawędzie długości 6 cm. Pole powierzchni całkowitej tego ostrosłupa jest równe:",
   "opts": [
    "36 + 36√3 cm²",
    "36 + 9√3 cm²",
    "36√3 cm²",
    "180 cm²"
   ],
   "ok": 0,
   "why": {
    "B": "9√3 cm² to pole jednej ściany bocznej. Ścian jest 4.",
    "C": "To tylko ściany boczne. Dolicz podstawę 36 cm².",
    "D": "Ściany boczne to trójkąty równoboczne, a nie kwadraty."
   },
   "sol": [
    "Ściany boczne to trójkąty równoboczne o boku 6: każda ma pole [[6²√3 : 4 = 9√3]] cm².",
    "[[Pc = 36 + 4 · 9√3 = 36 + 36√3]] cm²."
   ],
   "answer": "A, 36 + 36√3 cm².",
   "tip": "Wszystkie krawędzie równe: ściany boczne są równoboczne.",
   "check": [
    "F(36, 4) == 9",
    "4*9 == 36"
   ],
   "twin": {
    "type": "abcd",
    "q": "Ostrosłup prawidłowy czworokątny ma wszystkie krawędzie długości 4 cm. Pole powierzchni całkowitej tego ostrosłupa jest równe:",
    "opts": [
     "16 + 4√3 cm²",
     "16√3 cm²",
     "16 + 16√3 cm²",
     "80 cm²"
    ],
    "ok": 2,
    "why": {
     "A": "To tylko jedna ściana boczna.",
     "B": "Dolicz podstawę.",
     "D": "Ściany to trójkąty, a nie kwadraty."
    },
    "sol": [
     "Ściana: [[16√3 : 4 = 4√3]], cztery: [[16√3]].",
     "[[Pc = 16 + 16√3]] cm²."
    ],
    "answer": "C, 16 + 16√3 cm².",
    "tip": "a²√3 : 4.",
    "check": [
     "F(16, 4) == 4"
    ]
   }
  }
 ],
 "test": [
  {
   "id": "t1",
   "skills": [
    "B1"
   ],
   "type": "fields",
   "q": "Ile wierzchołków, krawędzi i ścian ma ostrosłup pięciokątny?",
   "fields": [
    {
     "label": "Wierzchołki",
     "ans": 6,
     "show": "6"
    },
    {
     "label": "Krawędzie",
     "ans": 10,
     "show": "10"
    },
    {
     "label": "Ściany",
     "ans": 6,
     "show": "6"
    }
   ],
   "sol": [
    "[[6]], [[10]], [[6]]."
   ],
   "answer": "6, 10 i 6.",
   "tip": "n + 1, 2n, n + 1.",
   "check": [
    "2*5 == 10"
   ],
   "pts": 1
  },
  {
   "id": "t2",
   "skills": [
    "B1"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Walec jest graniastosłupem.",
     "ok": "F"
    },
    {
     "t": "Każdy sześcian jest prostopadłościanem.",
     "ok": "P"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> Walec ma zakrzywioną ścianę. Fałsz.",
    "<b>Zdanie 2.</b> Sześcian to prostopadłościan o równych krawędziach. Prawda."
   ],
   "answer": "F, P.",
   "tip": "Graniastosłupy mają płaskie ściany.",
   "check": [
    "True"
   ],
   "pts": 1
  },
  {
   "id": "t3",
   "skills": [
    "B2"
   ],
   "type": "abcd",
   "q": "Z ilu wielokątów składa się siatka graniastosłupa sześciokątnego?",
   "opts": [
    "6",
    "12",
    "8",
    "7"
   ],
   "ok": 2,
   "why": {
    "A": "To tylko ściany boczne.",
    "B": "12 to liczba wierzchołków.",
    "D": "Graniastosłup ma dwie podstawy."
   },
   "sol": [
    "[[6 + 2 = 8]]."
   ],
   "answer": "C, 8.",
   "tip": "n + 2.",
   "check": [
    "6 + 2 == 8"
   ],
   "pts": 1
  },
  {
   "id": "t4",
   "skills": [
    "B3"
   ],
   "type": "fields",
   "q": "Oblicz objętość prostopadłościanu o wymiarach 8 cm × 5 cm × 3 cm.",
   "fields": [
    {
     "label": "V (cm³)",
     "ans": 120,
     "show": "120"
    }
   ],
   "sol": [
    "[[8 · 5 · 3 = 120]] cm³."
   ],
   "answer": "120 cm³.",
   "tip": "abc.",
   "check": [
    "8*5*3 == 120"
   ],
   "pts": 1
  },
  {
   "id": "t5",
   "skills": [
    "B3"
   ],
   "type": "fields",
   "q": "Pole powierzchni sześcianu wynosi 150 cm². Oblicz jego objętość.",
   "fields": [
    {
     "label": "V (cm³)",
     "ans": 125,
     "show": "125"
    }
   ],
   "sol": [
    "Ściana: [[150 : 6 = 25]] cm², [[a = 5]] cm, [[V = 125]] cm³."
   ],
   "answer": "125 cm³.",
   "tip": "Najpierw krawędź.",
   "check": [
    "150/6 == 25",
    "5**3 == 125"
   ],
   "pts": 1
  },
  {
   "id": "t6",
   "skills": [
    "B4"
   ],
   "type": "abcd",
   "q": "1,2 m³ to:",
   "opts": [
    "1 200 l",
    "120 l",
    "12 000 l",
    "12 l"
   ],
   "ok": 0,
   "why": {
    "B": "1 m³ = 1 000 l.",
    "C": "O jedno zero za dużo.",
    "D": "Mnożysz przez 1 000, a nie przez 10."
   },
   "sol": [
    "[[1,2 · 1 000 = 1 200]] l."
   ],
   "answer": "A, 1 200 l.",
   "tip": "1 m³ = 1 000 l.",
   "check": [
    "F('1.2')*1000 == 1200"
   ],
   "pts": 1
  },
  {
   "id": "t7",
   "skills": [
    "B5"
   ],
   "type": "fields",
   "q": "Graniastosłup prawidłowy czworokątny ma krawędź podstawy 4 cm i wysokość 9 cm. Oblicz jego objętość.",
   "fields": [
    {
     "label": "V (cm³)",
     "ans": 144,
     "show": "144"
    }
   ],
   "sol": [
    "[[16 · 9 = 144]] cm³."
   ],
   "answer": "144 cm³.",
   "tip": "Pp · H.",
   "check": [
    "16*9 == 144"
   ],
   "pts": 1
  },
  {
   "id": "t8",
   "skills": [
    "B5"
   ],
   "type": "fields",
   "q": "Podstawą graniastosłupa prostego jest trójkąt prostokątny o bokach 3 cm, 4 cm i 5 cm, a wysokość graniastosłupa to 10 cm. Oblicz pole powierzchni całkowitej.",
   "fields": [
    {
     "label": "Pc (cm²)",
     "ans": 132,
     "show": "132"
    }
   ],
   "sol": [
    "[[Pc = 2 · 6 + 12 · 10 = 132]] cm²."
   ],
   "answer": "132 cm².",
   "tip": "2Pp + obwód · H.",
   "check": [
    "2*6 + 12*10 == 132"
   ],
   "pts": 1
  },
  {
   "id": "t9",
   "skills": [
    "B6"
   ],
   "type": "fields",
   "q": "Podstawą ostrosłupa jest prostokąt 6 cm × 5 cm, a jego wysokość to 8 cm. Oblicz objętość.",
   "fields": [
    {
     "label": "V (cm³)",
     "ans": 80,
     "show": "80"
    }
   ],
   "sol": [
    "[[30 · 8 : 3 = 80]] cm³."
   ],
   "answer": "80 cm³.",
   "tip": "Dziel przez 3.",
   "check": [
    "30*8/3 == 80"
   ],
   "pts": 1
  },
  {
   "id": "t10",
   "skills": [
    "B6"
   ],
   "type": "tn",
   "q": "Czy objętość ostrosłupa o polu podstawy 30 cm² i wysokości 10 cm jest równa 300 cm³? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "N",
   "reasons": {
    "1": "objętość ostrosłupa to Pp · H : 3, czyli 100 cm³",
    "2": "objętość ostrosłupa to Pp · H : 2, czyli 150 cm³",
    "3": "objętość zależy od liczby krawędzi"
   },
   "okReason": "1",
   "sol": [
    "[[V = 30 · 10 : 3 = 100]] cm³."
   ],
   "answer": "N, uzasadnienie 1.",
   "tip": "Ostrosłup: ⅓.",
   "check": [
    "30*10/3 == 100"
   ],
   "pts": 1
  },
  {
   "id": "t11",
   "skills": [
    "B6"
   ],
   "type": "self",
   "q": "Ostrosłup prawidłowy czworokątny ma krawędź podstawy 8 cm i wysokość 3 cm. Oblicz pole powierzchni całkowitej. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono wysokość ściany bocznej: √(3² + 4²) = 5 cm.",
     "pts": 1
    },
    {
     "t": "Obliczono Pc = 64 + 4 · 8 · 5 : 2 = 144 cm².",
     "pts": 1
    }
   ],
   "sol": [
    "[[h = √(9 + 16) = 5]] cm.",
    "[[Pc = 64 + 80 = 144]] cm²."
   ],
   "answer": "144 cm².",
   "tip": "Połowa krawędzi: 4.",
   "check": [
    "3**2 + 4**2 == 5**2",
    "64 + 4*8*5/2 == 144"
   ],
   "pts": 2
  },
  {
   "id": "t12",
   "skills": [
    "B4",
    "B3"
   ],
   "type": "self",
   "q": "Karton soku ma kształt prostopadłościanu 6 cm × 4 cm × 10 cm. Ile takich kartonów można całkowicie napełnić 3 litrami soku? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono objętość kartonu: 240 cm³ = 0,24 l.",
     "pts": 1
    },
    {
     "t": "Obliczono liczbę pełnych kartonów: 3 000 : 240 = 12,5, czyli 12.",
     "pts": 1
    }
   ],
   "sol": [
    "[[V = 6 · 4 · 10 = 240]] cm³.",
    "[[3 l = 3 000 cm³]], [[3 000 : 240 = 12,5]], więc [[12]] pełnych kartonów."
   ],
   "answer": "12 kartonów.",
   "tip": "Pytają o pełne kartony, więc zaokrąglasz w dół.",
   "check": [
    "6*4*10 == 240",
    "F(3000, 240) == F('12.5')"
   ],
   "pts": 2
  }
 ],
 "test_minutes": 35,
 "pass": 12,
 "dzial": "Dział 3: Geometria"
};
