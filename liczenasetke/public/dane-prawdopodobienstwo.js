/* Wygenerowane przez zbuduj.py z tresc/prawdopodobienstwo.py. Nie edytuj ręcznie. */
window.TEMAT = {
 "slug": "prawdopodobienstwo",
 "title": "Zliczanie i prawdopodobieństwo",
 "sign": "P(A)",
 "lead": "Liczenie liczb o danej własności, wypisywanie możliwości i prawdopodobieństwo: kostka, moneta, kule i losy. Loteria z losami od 1 do 72 była na egzaminie w 2025 roku, a kule z numerami w 2026 roku.",
 "goals": {
  "learn": "6 umiejętności: zliczanie liczb, wypisywanie wszystkich możliwości, prawdopodobieństwo przy kostce i monecie, losowanie kul, losowanie liczb i losów oraz zadania z rozumowaniem.",
  "prereq": "Ułamki zwykłe (skracanie i porównywanie) i podzielność (Dział 1). Rozgrzewka na początku to sprawdzi.",
  "goal": "Minimum 12 z 14 punktów w teście na koniec tematu."
 },
 "skills": {
  "P1": "Zliczanie liczb o danej własności",
  "P2": "Wypisywanie wszystkich możliwości",
  "P3": "Kostka i moneta",
  "P4": "Losowanie kul",
  "P5": "Losowanie liczb i losów",
  "P6": "Zadania z rozumowaniem"
 },
 "lessons": [
  {
   "title": "Ile jest liczb od a do b?",
   "skills": [
    "P1"
   ],
   "intro": "Na egzaminie często trzeba policzyć, ile jest liczb spełniających warunek, np. ile jest losów o numerach od 46 do 72 albo ile liczb dwucyfrowych dzieli się przez 5. Wypisywanie wszystkiego trwa za długo, a łatwo pomylić się o jeden.",
   "rule": {
    "t": "Liczb całkowitych od a do b (razem z a i b) jest b − a + 1.",
    "f": [
     "od 46 do 72: 72 − 46 + 1 = 27",
     "liczb dwucyfrowych (od 10 do 99): 90",
     "wielokrotności 3 wśród liczb od 1 do 50: 50 : 3 = 16 reszty 2, czyli 16"
    ],
    "e": "Samo b − a to o jeden za mało: od 1 do 3 są trzy liczby (1, 2, 3), a 3 − 1 = 2."
   },
   "visual": {
    "type": "cards",
    "from": 1,
    "to": 72,
    "hl": [
     1,
     2,
     3,
     4,
     5,
     6,
     7,
     8,
     9,
     46,
     47,
     48,
     49,
     50,
     51,
     52,
     53,
     54,
     55,
     56,
     57,
     58,
     59,
     60,
     61,
     62,
     63,
     64,
     65,
     66,
     67,
     68,
     69,
     70,
     71,
     72
    ],
    "per": 12,
    "alt": "Losy od 1 do 72, wyróżnione losy od 1 do 9 i od 46 do 72",
    "caption": "Wygrywają losy od 1 do 9 i od 46 do 72: 9 + 27 = 36 losów"
   },
   "example": {
    "q": "Losy mają numery od 1 do 72. Wygrywają losy o numerach od 1 do 9 i od 46 do 72. Ile jest losów wygrywających, a ile pustych?",
    "steps": [
     "Od 1 do 9: 9 losów.",
     "Od 46 do 72: 72 − 46 + 1 = 27 losów.",
     "Wygrywających jest 9 + 27 = 36, a pustych 72 − 36 = 36 (numery od 10 do 45)."
    ],
    "result": "36 losów wygrywających i 36 pustych.",
    "tip": "To dane z zadania 10 z egzaminu w 2025 roku. Najczęstszy błąd: 72 − 46 = 26.",
    "check": [
     "72 - 46 + 1 == 27",
     "9 + 27 == 36",
     "45 - 10 + 1 == 36"
    ]
   },
   "you": [
    {
     "id": "y1",
     "type": "fields",
     "q": "Ile jest liczb całkowitych od 25 do 60 (razem z 25 i 60)? Ile z nich jest parzystych?",
     "fields": [
      {
       "label": "Wszystkich",
       "ans": 36,
       "show": "36",
       "why": [
        [
         35,
         "60 − 25 = 35 to o jeden za mało: liczysz też 25."
        ]
       ]
      },
      {
       "label": "Parzystych",
       "ans": 18,
       "show": "18",
       "why": [
        [
         17,
         "Parzyste to 26, 28, …, 60: (60 − 26) : 2 + 1 = 18."
        ]
       ]
      }
     ],
     "sol": [
      "Wszystkich: [[60 − 25 + 1 = 36]].",
      "Parzyste od 26 do 60 co 2: [[(60 − 26) : 2 + 1 = 18]]."
     ],
     "answer": "36 liczb, 18 parzystych.",
     "tip": "Sprawdź na małym przykładzie: od 2 do 6 parzyste to 2, 4, 6, czyli (6 − 2) : 2 + 1 = 3.",
     "check": [
      "60 - 25 + 1 == 36",
      "len(range(26, 61, 2)) == 18"
     ]
    },
    {
     "id": "y1b",
     "type": "abcd",
     "q": "Ile liczb dwucyfrowych jest podzielnych przez 5?",
     "opts": [
      "18",
      "19",
      "17",
      "20"
     ],
     "ok": 0,
     "why": {
      "B": "19 to wielokrotności 5 od 5 do 95. Liczba 5 nie jest dwucyfrowa.",
      "C": "(95 − 10) : 5 = 17 to liczba odstępów. Liczb jest o jedną więcej.",
      "D": "100 : 5 = 20 liczy też 5 i 100, które nie są dwucyfrowe."
     },
     "sol": [
      "Liczby 10, 15, 20, …, 95.",
      "[[(95 − 10) : 5 + 1 = 18]]."
     ],
     "answer": "A, 18.",
     "tip": "Pierwsza dwucyfrowa wielokrotność 5 to 10, ostatnia to 95.",
     "check": [
      "len(range(10, 100, 5)) == 18"
     ]
    }
   ]
  },
  {
   "title": "Wypisywanie wszystkich możliwości",
   "skills": [
    "P2"
   ],
   "intro": "Gdy możliwości jest niewiele, najpewniej jest je wypisać. Rób to według stałego porządku, żeby niczego nie pominąć i niczego nie policzyć dwa razy.",
   "rule": {
    "t": "Ustal porządek: najpierw pierwsza cyfra (albo pierwsza osoba) i wszystkie możliwości dla niej, dopiero potem następna.",
    "f": [
     "cyfry 1, 2, 3, różne: 12, 13, 21, 23, 31, 32",
     "dwie monety: OO, OR, RO, RR",
     "pary z A, B, C, D: AB, AC, AD, BC, BD, CD"
    ],
    "e": "Sprawdź, czy kolejność ma znaczenie. Liczby 12 i 21 są różne, ale para Ala–Bartek to ta sama para co Bartek–Ala."
   },
   "visual": {
    "type": "coins",
    "rows": [
     [
      "O",
      "O"
     ],
     [
      "O",
      "R"
     ],
     [
      "R",
      "O"
     ],
     [
      "R",
      "R"
     ]
    ],
    "hl": [],
    "alt": "Cztery wyniki rzutu dwiema monetami: OO, OR, RO, RR",
    "caption": "Dwie monety: 4 wyniki. OR i RO to różne wyniki (pierwsza i druga moneta)"
   },
   "example": {
    "q": "Z cyfr 0, 1, 3 i 5 tworzymy liczby dwucyfrowe o różnych cyfrach. Ile jest takich liczb? Ile z nich dzieli się przez 5?",
    "steps": [
     "Pierwsza cyfra nie może być zerem, więc zaczynamy od 1, 3 albo 5.",
     "Z jedynką: 10, 13, 15. Z trójką: 30, 31, 35. Z piątką: 50, 51, 53. Razem 9 liczb.",
     "Przez 5 dzielą się liczby zakończone na 0 lub 5: 10, 15, 30, 35, 50, czyli 5 liczb."
    ],
    "result": "9 liczb, z czego 5 dzieli się przez 5.",
    "tip": "Zero nie może stać na początku liczby. To najczęstsza pułapka w takich zadaniach.",
    "check": [
     "len([10, 13, 15, 30, 31, 35, 50, 51, 53]) == 9",
     "len([n for n in [10, 13, 15, 30, 31, 35, 50, 51, 53] if n % 5 == 0]) == 5"
    ]
   },
   "you": [
    {
     "id": "y2",
     "type": "fields",
     "q": "W turnieju grają 4 drużyny: A, B, C i D. Każda drużyna gra z każdą inną jeden mecz. Ile meczów zostanie rozegranych?",
     "fields": [
      {
       "label": "Liczba meczów",
       "ans": 6,
       "show": "6",
       "why": [
        [
         12,
         "Mecz A–B to ten sam mecz co B–A. Policzono każdy dwa razy."
        ],
        [
         16,
         "4 · 4 liczy też mecze drużyny z samą sobą i każdy mecz dwa razy."
        ]
       ]
      }
     ],
     "sol": [
      "Wypisujemy po kolei: [[AB, AC, AD]], [[BC, BD]], [[CD]].",
      "Razem [[6]] meczów."
     ],
     "answer": "6 meczów.",
     "tip": "Drużyna B nie gra już z A, bo ten mecz jest wypisany.",
     "check": [
      "3 + 2 + 1 == 6"
     ]
    },
    {
     "id": "y2b",
     "type": "pf",
     "q": "Rzucamy dwiema monetami. Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "Są 4 możliwe wyniki.",
       "ok": "P"
      },
      {
       "t": "Wynik „jeden orzeł i jedna reszka” może wypaść tylko na jeden sposób.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> [[OO, OR, RO, RR]]. Prawda.",
      "<b>Zdanie 2.</b> Na dwa sposoby: [[OR]] i [[RO]]. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "Wyobraź sobie dwie różne monety: złotówkę i dwuzłotówkę.",
     "check": [
      "len(['OO', 'OR', 'RO', 'RR']) == 4"
     ]
    }
   ]
  },
  {
   "title": "Co to jest prawdopodobieństwo",
   "skills": [
    "P3"
   ],
   "intro": "Prawdopodobieństwo mówi, jak duża jest szansa, że coś się zdarzy. Gdy każdy wynik jest tak samo możliwy, jak w rzucie symetryczną kostką czy losowaniu kuli, liczy się je jednym wzorem.",
   "rule": {
    "t": "Prawdopodobieństwo = liczba wyników sprzyjających : liczba wszystkich wyników.",
    "f": [
     "kostka, parzysta liczba oczek: 3 : 6 = 1/2",
     "zawsze od 0 do 1",
     "zdarzenie niemożliwe: 0, zdarzenie pewne: 1"
    ],
    "e": "Prawdopodobieństwo nie może być większe od 1 ani ujemne. Jeśli wyszło 7/6, coś jest źle."
   },
   "visual": {
    "type": "dice",
    "hl": [
     2,
     4,
     6
    ],
    "alt": "Ścianki kostki: 1, 2, 3, 4, 5, 6, wyróżnione 2, 4 i 6",
    "caption": "Parzysta liczba oczek: 3 wyniki z 6, czyli 3/6 = 1/2"
   },
   "example": {
    "q": "Rzucamy raz symetryczną sześcienną kostką do gry. Oblicz prawdopodobieństwo, że wypadnie: a) liczba oczek większa od 2, ale mniejsza od 6; b) 7 oczek; c) co najwyżej 6 oczek.",
    "steps": [
     "a) Większa od 2 i mniejsza od 6: 3, 4, 5. To 3 wyniki z 6, P = 3/6 = 1/2. (Informator CKE, zadanie 8.)",
     "b) Na kostce nie ma 7 oczek: zdarzenie niemożliwe, P = 0.",
     "c) Każdy wynik ma co najwyżej 6 oczek: zdarzenie pewne, P = 1."
    ],
    "result": "a) 1/2, b) 0, c) 1.",
    "tip": "„Większa od 2” nie obejmuje 2, a „mniejsza od 6” nie obejmuje 6.",
    "check": [
     "F(3, 6) == F(1, 2)"
    ]
   },
   "you": [
    {
     "id": "y3",
     "type": "fields",
     "vis": {
      "type": "dice",
      "hl": [
       3,
       6
      ],
      "alt": "Ścianki kostki, wyróżnione 3 i 6"
     },
     "note": "Wynik wpisz jako ułamek, np. 3/8.",
     "q": "Rzucamy raz kostką sześcienną. Oblicz prawdopodobieństwo, że wypadnie liczba oczek podzielna przez 3.",
     "fields": [
      {
       "label": "P",
       "ans": 0.3333333333333333,
       "show": "1/3",
       "why": [
        [
         0.5,
         "Przez 3 dzielą się tylko 3 i 6, czyli 2 wyniki z 6."
        ],
        [
         2,
         "2 to liczba wyników sprzyjających. Podziel ją przez 6."
        ]
       ]
      }
     ],
     "sol": [
      "Sprzyjające: [[3 i 6]].",
      "[[P = 2/6 = 1/3]]."
     ],
     "answer": "1/3.",
     "tip": "Wynik skracaj, ale 2/6 też jest dobrą odpowiedzią.",
     "check": [
      "F(2, 6) == F(1, 3)"
     ]
    },
    {
     "id": "y3b",
     "type": "pf",
     "q": "Rzucamy raz kostką sześcienną. Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "Prawdopodobieństwo wyrzucenia 0 oczek jest równe 0.",
       "ok": "P"
      },
      {
       "t": "Prawdopodobieństwo wyrzucenia liczby pierwszej jest równe 2/3.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> Na kostce nie ma zera: zdarzenie niemożliwe. Prawda.",
      "<b>Zdanie 2.</b> Liczby pierwsze to 2, 3, 5 (1 nie jest pierwsza): [[3/6 = 1/2]]. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "1 nie jest liczbą pierwszą.",
     "check": [
      "F(3, 6) == F(1, 2)"
     ]
    }
   ]
  },
  {
   "title": "Kostka i moneta",
   "skills": [
    "P3"
   ],
   "intro": "Moneta ma 2 wyniki: orła (O) i reszkę (R). Sześcienna kostka ma 6 wyników. Kostka wielościenna może mieć więcej ścian, np. 8, 12 albo 20, ponumerowanych od 1.",
   "rule": {
    "t": "Najpierw policz wszystkie wyniki, potem sprzyjające.",
    "f": [
     "moneta: P(orzeł) = 1/2",
     "kostka ośmiościenna: 8 wyników",
     "dwie monety: 4 wyniki (OO, OR, RO, RR)"
    ],
    "e": "Przy dwóch monetach „orzeł i reszka” to dwa wyniki: OR i RO. Dlatego P = 2/4 = 1/2, a nie 1/3."
   },
   "visual": {
    "type": "coins",
    "rows": [
     [
      "O",
      "O"
     ],
     [
      "O",
      "R"
     ],
     [
      "R",
      "O"
     ],
     [
      "R",
      "R"
     ]
    ],
    "hl": [
     1,
     2
    ],
    "alt": "Wyniki rzutu dwiema monetami, wyróżnione OR i RO",
    "caption": "Jeden orzeł i jedna reszka: 2 wyniki z 4, P = 1/2"
   },
   "example": {
    "q": "Rzucamy raz kostką dwunastościenną o ścianach ponumerowanych od 1 do 12. Oblicz prawdopodobieństwo, że wypadnie liczba: a) większa od 8; b) będąca dzielnikiem liczby 12.",
    "steps": [
     "Wszystkich wyników jest 12.",
     "a) 9, 10, 11, 12: 4 wyniki, P = 4/12 = 1/3.",
     "b) Dzielniki 12: 1, 2, 3, 4, 6, 12, czyli 6 wyników, P = 6/12 = 1/2."
    ],
    "result": "a) 1/3, b) 1/2.",
    "tip": "Wypisując dzielniki, nie zapomnij o 1 i o samej liczbie.",
    "check": [
     "F(4, 12) == F(1, 3)",
     "len([d for d in range(1, 13) if 12 % d == 0]) == 6"
    ]
   },
   "you": [
    {
     "id": "y4",
     "type": "fields",
     "vis": {
      "type": "coins",
      "rows": [
       [
        "O",
        "O"
       ],
       [
        "O",
        "R"
       ],
       [
        "R",
        "O"
       ],
       [
        "R",
        "R"
       ]
      ],
      "hl": [
       0
      ],
      "alt": "Wyniki rzutu dwiema monetami, wyróżnione OO"
     },
     "note": "Wynik wpisz jako ułamek, np. 3/8.",
     "q": "Rzucamy dwiema monetami. Oblicz prawdopodobieństwo, że wypadną dwa orły.",
     "fields": [
      {
       "label": "P",
       "ans": 0.25,
       "show": "1/4",
       "why": [
        [
         0.5,
         "Dwa orły to tylko jeden wynik (OO) z czterech."
        ],
        [
         0.3333333333333333,
         "Wyników jest 4, a nie 3: OR i RO to dwa różne wyniki."
        ]
       ]
      }
     ],
     "sol": [
      "Wszystkie wyniki: [[OO, OR, RO, RR]].",
      "Sprzyjający: [[OO]]. [[P = 1/4]]."
     ],
     "answer": "1/4.",
     "tip": "Wypisz wszystkie wyniki.",
     "check": [
      "F(1, 4) == F('0.25')"
     ]
    },
    {
     "id": "y4b",
     "type": "abcd",
     "q": "Rzucamy raz kostką ośmiościenną o ścianach ponumerowanych od 1 do 8. Prawdopodobieństwo, że wypadnie liczba parzysta większa od 3, jest równe:",
     "opts": [
      "3/8",
      "1/2",
      "5/8",
      "3/6"
     ],
     "ok": 0,
     "why": {
      "B": "1/2 to szansa na liczbę parzystą. Warunek „większa od 3” odrzuca 2.",
      "C": "5/8 to liczby większe od 3 (od 4 do 8). Muszą być jeszcze parzyste.",
      "D": "Kostka ma 8 ścian, więc dzielisz przez 8, a nie przez 6."
     },
     "sol": [
      "Sprzyjające: [[4, 6, 8]].",
      "[[P = 3/8]]."
     ],
     "answer": "A, 3/8.",
     "tip": "Oba warunki naraz: parzysta i większa od 3.",
     "check": [
      "len([n for n in range(1, 9) if n % 2 == 0 and n > 3]) == 3"
     ]
    }
   ]
  },
  {
   "title": "Losowanie kul",
   "skills": [
    "P4"
   ],
   "intro": "W pudełku są kule w różnych kolorach. Losujemy jedną kulę i każda ma taką samą szansę. Liczy się liczba kul, a nie liczba kolorów.",
   "rule": {
    "t": "P(kula danego koloru) = liczba kul tego koloru : liczba wszystkich kul.",
    "f": [
     "3 czerwone, 5 niebieskich, 2 białe: P(czerwona) = 3/10",
     "P(nie biała) = 8/10 = 4/5",
     "prawdopodobieństwa wszystkich kolorów dają razem 1"
    ],
    "e": "Trzy kolory nie oznaczają, że każdy ma szansę 1/3. Liczy się, ile jest kul każdego koloru."
   },
   "visual": {
    "type": "urn",
    "balls": [
     [
      "r",
      3
     ],
     [
      "b",
      5
     ],
     [
      "w",
      2
     ]
    ],
    "alt": "Pudełko: 3 kule czerwone, 5 niebieskich i 2 białe",
    "caption": "10 kul: P(czerwona) = 3/10, P(niebieska) = 5/10 = 1/2"
   },
   "example": {
    "q": "W pudełku są 3 kule czerwone, 5 niebieskich i 2 białe. Losujemy jedną kulę. Oblicz prawdopodobieństwo wylosowania kuli: a) czerwonej; b) niebieskiej; c) takiej, która nie jest biała.",
    "steps": [
     "Wszystkich kul jest 3 + 5 + 2 = 10.",
     "a) 3/10. b) 5/10 = 1/2.",
     "c) Nie biała, czyli czerwona albo niebieska: 3 + 5 = 8 kul, P = 8/10 = 4/5."
    ],
    "result": "a) 3/10, b) 1/2, c) 4/5.",
    "tip": "Sprawdzenie: 3/10 + 5/10 + 2/10 = 1. Szansa na „nie białą” to 1 − 2/10.",
    "check": [
     "3 + 5 + 2 == 10",
     "F(8, 10) == F(4, 5)",
     "F(3, 10) + F(5, 10) + F(2, 10) == 1"
    ]
   },
   "you": [
    {
     "id": "y5",
     "type": "fields",
     "vis": {
      "type": "urn",
      "balls": [
       [
        "g",
        6
       ],
       [
        "y",
        4
       ],
       [
        "r",
        10
       ]
      ],
      "alt": "Pudełko: 6 kul zielonych, 4 żółte i 10 czerwonych",
      "per": 10
     },
     "note": "Wynik wpisz jako ułamek, np. 3/8.",
     "q": "W pudełku jest 6 kul zielonych, 4 żółte i 10 czerwonych. Losujemy jedną kulę. Oblicz prawdopodobieństwo wylosowania kuli żółtej.",
     "fields": [
      {
       "label": "P",
       "ans": 0.2,
       "show": "1/5",
       "why": [
        [
         0.3333333333333333,
         "Kolory są trzy, ale kul jest 20. Żółtych jest 4."
        ],
        [
         4,
         "4 to liczba kul żółtych. Podziel ją przez 20."
        ]
       ]
      }
     ],
     "sol": [
      "Wszystkich kul: [[6 + 4 + 10 = 20]].",
      "[[P = 4/20 = 1/5]]."
     ],
     "answer": "1/5.",
     "tip": "Liczysz kule, nie kolory.",
     "check": [
      "F(4, 20) == F(1, 5)"
     ]
    },
    {
     "id": "y5b",
     "type": "abcd",
     "q": "W pudełku są tylko kule białe i czarne. Kul białych jest 12, a prawdopodobieństwo wylosowania kuli białej jest równe 3/4. Ile kul czarnych jest w pudełku?",
     "opts": [
      "4",
      "16",
      "9",
      "3"
     ],
     "ok": 0,
     "why": {
      "B": "16 to liczba wszystkich kul, a pytanie dotyczy czarnych.",
      "C": "3/4 z 12 to 9, ale 12 to kule białe, a nie wszystkie.",
      "D": "3 to licznik ułamka, a nie liczba kul."
     },
     "sol": [
      "Białe to 3/4 wszystkich kul, więc 1/4 to [[12 : 3 = 4]] kule.",
      "Wszystkich jest [[16]], czarnych [[16 − 12 = 4]]."
     ],
     "answer": "A, 4.",
     "tip": "Czarne to 1/4 wszystkich kul.",
     "check": [
      "F(12, 16) == F(3, 4)"
     ]
    }
   ]
  },
  {
   "title": "Losowanie liczb i losów",
   "skills": [
    "P5"
   ],
   "intro": "Losujemy liczbę, los albo kulę z numerem. Najpierw liczysz, ile jest wszystkich liczb, a potem ile z nich ma daną własność: parzystość, podzielność, cyfry.",
   "rule": {
    "t": "Połącz dwa kroki: zliczanie liczb (lekcja 1) i wzór na prawdopodobieństwo.",
    "f": [
     "od 1 do 30, podzielne przez 4: 4, 8, …, 28, czyli 7 liczb, P = 7/30",
     "liczb dwucyfrowych jest 90"
    ],
    "e": "Zanim podzielisz, sprawdź liczbę wszystkich możliwości: od 1 do 30 to 30 liczb, ale od 10 do 30 już 21."
   },
   "visual": {
    "type": "cards",
    "from": 1,
    "to": 30,
    "hl": [
     4,
     8,
     12,
     16,
     20,
     24,
     28
    ],
    "per": 10,
    "alt": "Kartki od 1 do 30, wyróżnione wielokrotności 4",
    "caption": "Podzielne przez 4: 7 liczb z 30, P = 7/30"
   },
   "example": {
    "q": "Na loterię przygotowano 72 losy ponumerowane od 1 do 72. Wygrywają losy o numerach od 1 do 9 i od 46 do 72, pozostałe są puste. Ada wyciąga jeden los. Oblicz prawdopodobieństwo wyciągnięcia losu pustego. (Egzamin 2025, zadanie 10.)",
    "steps": [
     "Wygrywających jest 9 + 27 = 36 (lekcja 1).",
     "Pustych jest 72 − 36 = 36, czyli losy od 10 do 45.",
     "P = 36/72 = 1/2."
    ],
    "result": "1/2.",
    "tip": "W arkuszu była odpowiedź 35/72. To wynik błędnego liczenia 45 − 10 = 35 bez dodania 1.",
    "check": [
     "45 - 10 + 1 == 36",
     "F(36, 72) == F(1, 2)"
    ]
   },
   "you": [
    {
     "id": "y6",
     "type": "fields",
     "note": "Wynik wpisz jako ułamek, np. 3/8.",
     "q": "Losujemy jedną liczbę spośród liczb od 1 do 40. Oblicz prawdopodobieństwo, że będzie podzielna przez 6.",
     "fields": [
      {
       "label": "P",
       "ans": 0.15,
       "show": "3/20",
       "why": [
        [
         0.16666666666666666,
         "1/6 byłoby przy liczbach od 1 do 36. Tu jest 40 liczb, a podzielnych przez 6 jest 6."
        ],
        [
         6,
         "6 to liczba wyników sprzyjających. Podziel ją przez 40."
        ]
       ]
      }
     ],
     "sol": [
      "Podzielne przez 6: [[6, 12, 18, 24, 30, 36]], czyli 6 liczb.",
      "[[P = 6/40 = 3/20]]."
     ],
     "answer": "3/20.",
     "tip": "40 : 6 = 6 reszty 4.",
     "check": [
      "len(range(6, 41, 6)) == 6",
      "F(6, 40) == F(3, 20)"
     ]
    },
    {
     "id": "y6b",
     "type": "pf",
     "q": "Losujemy jedną liczbę dwucyfrową. Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "Prawdopodobieństwo wylosowania liczby o dwóch takich samych cyfrach jest równe 1/10.",
       "ok": "P"
      },
      {
       "t": "Wszystkich liczb dwucyfrowych jest 89.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> 11, 22, …, 99 to 9 liczb, [[9/90 = 1/10]]. Prawda.",
      "<b>Zdanie 2.</b> [[99 − 10 + 1 = 90]]. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "99 − 10 = 89 to klasyczny błąd „o jeden”.",
     "check": [
      "F(9, 90) == F(1, 10)",
      "99 - 10 + 1 == 90"
     ]
    }
   ]
  },
  {
   "title": "Porównywanie szans i dokładanie kul",
   "skills": [
    "P6"
   ],
   "intro": "Czasem trzeba porównać szanse w dwóch pudełkach albo sprawdzić, jak zmieni się szansa po dołożeniu lub wyjęciu kul. Za każdym razem liczysz od nowa: kule danego koloru i wszystkie kule.",
   "rule": {
    "t": "Po dołożeniu kul zmienia się też liczba wszystkich kul, a nie tylko kul jednego koloru.",
    "f": [
     "2 czerwone i 3 białe: P(czerwona) = 2/5",
     "dokładamy 1 czerwoną: 3/6 = 1/2",
     "porównanie: 2/5 = 0,4 < 1/2 = 0,5"
    ],
    "e": "Porównuj prawdopodobieństwa, a nie liczby kul. Więcej kul danego koloru nie zawsze oznacza większą szansę."
   },
   "visual": {
    "type": "urn",
    "balls": [
     [
      "r",
      3
     ],
     [
      "w",
      3
     ]
    ],
    "alt": "Pudełko: 3 kule czerwone i 3 białe",
    "caption": "Były 2 czerwone i 3 białe. Po dołożeniu czerwonej: 3 z 6, P = 1/2"
   },
   "example": {
    "q": "W pudełku A są 3 kule czerwone i 5 białych, a w pudełku B 4 czerwone i 8 białych. Z którego pudełka łatwiej wylosować kulę czerwoną?",
    "steps": [
     "A: 3 czerwone z 8 kul, P = 3/8 = 0,375.",
     "B: 4 czerwone z 12 kul, P = 4/12 = 1/3 ≈ 0,333.",
     "3/8 > 1/3, więc łatwiej z pudełka A, choć w pudełku B jest więcej czerwonych kul."
    ],
    "result": "Z pudełka A.",
    "tip": "Ułamki porównasz, zamieniając je na ułamki dziesiętne albo sprowadzając do wspólnego mianownika: 9/24 i 8/24.",
    "check": [
     "F(3, 8) > F(4, 12)",
     "F(3, 8) == F(9, 24)",
     "F(1, 3) == F(8, 24)"
    ]
   },
   "you": [
    {
     "id": "y7",
     "type": "fields",
     "q": "W pudełku są 4 kule zielone i 6 niebieskich. Ile kul zielonych trzeba dołożyć, żeby prawdopodobieństwo wylosowania kuli zielonej było równe 1/2?",
     "fields": [
      {
       "label": "Dołożyć",
       "ans": 2,
       "show": "2",
       "why": [
        [
         1,
         "Po dołożeniu jednej zielonej: 5 z 11, to mniej niż połowa."
        ],
        [
         6,
         "Zielonych ma być tyle, ile niebieskich, czyli 6. Trzeba dołożyć 6 − 4."
        ]
       ]
      }
     ],
     "sol": [
      "P = 1/2, gdy zielonych jest tyle samo co niebieskich: [[6]].",
      "Dołożyć [[6 − 4 = 2]] kule. Sprawdzenie: [[6/12 = 1/2]]."
     ],
     "answer": "2 kule.",
     "tip": "Połowa: tyle samo kul obu kolorów.",
     "check": [
      "F(6, 12) == F(1, 2)"
     ]
    },
    {
     "id": "y7b",
     "type": "pf",
     "q": "W pudełku są 2 kule czerwone i 6 białych. Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "Po dołożeniu 2 kul czerwonych prawdopodobieństwo wylosowania kuli czerwonej będzie równe 4/8.",
       "ok": "F"
      },
      {
       "t": "Po wyjęciu 2 kul białych prawdopodobieństwo wylosowania kuli czerwonej będzie równe 1/3.",
       "ok": "P"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> Kul będzie 10, a nie 8: [[4/10 = 2/5]]. Fałsz.",
      "<b>Zdanie 2.</b> Zostaną 2 czerwone i 4 białe: [[2/6 = 1/3]]. Prawda."
     ],
     "answer": "F, P.",
     "tip": "Po zmianie policz od nowa wszystkie kule.",
     "check": [
      "F(4, 10) == F(2, 5)",
      "F(2, 6) == F(1, 3)"
     ]
    }
   ]
  },
  {
   "title": "Rozumowanie z kulami: ile ich jest?",
   "skills": [
    "P6"
   ],
   "intro": "W trudniejszych zadaniach nie znasz liczby kul. Znasz za to prawdopodobieństwo albo zależności między kolorami. Wtedy rozumujesz na częściach albo układasz proste równanie, tak jak w Dziale 2.",
   "rule": {
    "t": "Jeśli P(biała) = 1/3, to kule białe stanowią 1/3 wszystkich kul. Znając liczbę białych, znajdziesz wszystkie.",
    "f": [
     "P(biała) = 1/3, białych 5 → wszystkich 15",
     "białych 3 razy więcej niż czarnych: 3 części i 1 część, P(czarna) = 1/4"
    ],
    "e": "Liczba kul musi być liczbą naturalną. Jeśli wyszło 7,5 kuli, sprawdź obliczenia."
   },
   "visual": {
    "type": "urn",
    "balls": [
     [
      "w",
      9
     ],
     [
      "k",
      3
     ]
    ],
    "alt": "Pudełko: 9 kul białych i 3 czarne",
    "caption": "Białych 3 razy więcej niż czarnych: P(czarna) = 3/12 = 1/4"
   },
   "example": {
    "q": "W pudełku są tylko kule białe, czerwone i niebieskie. Kul białych jest trzy razy więcej niż czerwonych, a kul czerwonych jest dwa razy mniej niż niebieskich. Oblicz prawdopodobieństwo wylosowania kuli niebieskiej.",
    "steps": [
     "Oznacz liczbę kul czerwonych jako x. Białych jest 3x, a niebieskich 2x (czerwonych jest dwa razy mniej niż niebieskich).",
     "Wszystkich kul: x + 3x + 2x = 6x.",
     "P(niebieska) = 2x : 6x = 1/3. Wynik nie zależy od tego, ile jest kul."
    ],
    "result": "1/3.",
    "tip": "„Dwa razy mniej niż niebieskich” znaczy, że niebieskich jest dwa razy więcej: 2x.",
    "check": [
     "F(2, 6) == F(1, 3)"
    ]
   },
   "you": [
    {
     "id": "y8",
     "type": "fields",
     "q": "W pudełku są tylko kule białe i czarne. Prawdopodobieństwo wylosowania kuli białej jest równe 2/5. Kul czarnych jest 12. Ile kul białych jest w pudełku?",
     "fields": [
      {
       "label": "Kule białe",
       "ans": 8,
       "show": "8",
       "why": [
        [
         18,
         "Czarne to 3/5 wszystkich kul, a nie 2/5. Wszystkich jest 20."
        ],
        [
         20,
         "20 to liczba wszystkich kul. Białych jest 20 − 12."
        ]
       ]
      }
     ],
     "sol": [
      "Czarne to [[1 − 2/5 = 3/5]] wszystkich kul.",
      "1/5 to [[12 : 3 = 4]], wszystkich [[20]], białych [[20 − 12 = 8]]."
     ],
     "answer": "8 kul białych.",
     "tip": "Sprawdzenie: 8/20 = 2/5.",
     "check": [
      "F(8, 20) == F(2, 5)"
     ]
    },
    {
     "id": "y8b",
     "type": "fields",
     "vis": {
      "type": "urn",
      "list": [
       [
        "w",
        "1"
       ],
       [
        "w",
        "2"
       ],
       [
        "w",
        "3"
       ],
       [
        "w",
        "4"
       ],
       [
        "w",
        "5"
       ],
       [
        "w",
        "6"
       ],
       [
        "w",
        "7"
       ],
       [
        "w",
        "8"
       ],
       [
        "w",
        "9"
       ]
      ],
      "alt": "Dziewięć kul ponumerowanych od 1 do 9"
     },
     "q": "W pudełku było 9 kul ponumerowanych od 1 do 9. Wylosowano 4 kule. Suma liczb na dowolnych dwóch kulach, które zostały w pudełku, jest parzysta. Oblicz sumę liczb na wylosowanych kulach.",
     "fields": [
      {
       "label": "Suma",
       "ans": 20,
       "show": "20",
       "why": [
        [
         25,
         "25 to suma liczb nieparzystych, czyli kul, które zostały w pudełku."
        ]
       ]
      }
     ],
     "sol": [
      "Suma dwóch liczb jest parzysta, gdy obie są parzyste albo obie nieparzyste. Więc w pudełku zostały kule jednego rodzaju.",
      "Zostało 5 kul. Parzystych jest tylko 4 (2, 4, 6, 8), więc zostały nieparzyste: 1, 3, 5, 7, 9.",
      "Wylosowano parzyste: [[2 + 4 + 6 + 8 = 20]]."
     ],
     "answer": "20.",
     "tip": "Podobne zadanie było na egzaminie w 2026 roku (kule od 1 do 11).",
     "check": [
      "2 + 4 + 6 + 8 == 20",
      "1 + 3 + 5 + 7 + 9 == 25"
     ]
    }
   ]
  }
 ],
 "traps": [
  {
   "name": "Błąd „o jeden”",
   "bad": "od 46 do 72: 72 − 46 = 26 liczb",
   "good": "72 − 46 + 1 = 27"
  },
  {
   "name": "Dwie monety: 3 wyniki",
   "bad": "OO, OR, RR: P(OR) = 1/3",
   "good": "OO, OR, RO, RR: P(orzeł i reszka) = 2/4"
  },
  {
   "name": "Po dołożeniu kul stary mianownik",
   "bad": "2 czerwone i 6 białych, +2 czerwone: 4/8",
   "good": "4/10, bo kul jest teraz 10"
  }
 ],
 "cheat": {
  "title": "Zliczanie i prawdopodobieństwo w 6 zasadach",
  "rules": [
   {
    "t": "Liczby od a do b.",
    "f": [
     "b − a + 1"
    ],
    "e": "Dwucyfrowych jest 90."
   },
   {
    "t": "Wypisuj po kolei.",
    "f": [
     "najpierw pierwsza cyfra, potem reszta"
    ],
    "e": "Zero nie stoi na początku liczby."
   },
   {
    "t": "Prawdopodobieństwo.",
    "f": [
     "P = sprzyjające : wszystkie",
     "0 ≤ P ≤ 1"
    ],
    "e": "Niemożliwe: 0. Pewne: 1."
   },
   {
    "t": "Kostka i moneta.",
    "f": [
     "kostka: 6 wyników",
     "dwie monety: OO, OR, RO, RR"
    ],
    "e": "Kostka wielościenna: tyle wyników, ile ścian."
   },
   {
    "t": "Kule.",
    "f": [
     "P = kule koloru : wszystkie kule",
     "P(nie A) = 1 − P(A)"
    ],
    "e": "Liczysz kule, nie kolory."
   },
   {
    "t": "Zmiany i rozumowanie.",
    "f": [
     "po dołożeniu: nowy licznik i nowy mianownik",
     "P(biała) = 1/3 → białe to 1/3 wszystkich"
    ],
    "e": "Porównuj prawdopodobieństwa, nie liczby kul."
   }
  ]
 },
 "memo": {
  "title": "Najważniejsze wzory",
  "rows": [
   [
    "ile liczb od a do b",
    "prawdopodobieństwo",
    "zdarzenie przeciwne"
   ],
   [
    "b − a + 1",
    "sprzyjające : wszystkie",
    "1 − P"
   ]
  ],
  "note": "Prawdopodobieństwo zapisuj jako ułamek i skracaj go, np. 6/12 = 1/2."
 },
 "warmup": {
  "id": "w0",
  "type": "fields",
  "q": "Rozgrzewka: skracanie i porównywanie ułamków.",
  "fields": [
   {
    "label": "6/24 po skróceniu (wpisz ułamek)",
    "ans": 0.25,
    "show": "1/4"
   },
   {
    "label": "3/8 jako ułamek dziesiętny",
    "ans": 0.375,
    "show": "0,375"
   },
   {
    "label": "72 − 46 + 1",
    "ans": 27,
    "show": "27"
   }
  ],
  "sol": [
   "<b>6/24</b>: dzielimy licznik i mianownik przez 6, wychodzi [[1/4]].",
   "<b>3/8</b> = 3 : 8 = [[0,375]].",
   "<b>72 − 46 + 1</b> = [[27]]. Tak liczy się, ile jest liczb od 46 do 72."
  ],
  "answer": "1/4, 0,375 i 27.",
  "tip": "Prawdopodobieństwo to ułamek, więc skracanie i porównywanie ułamków przydaje się w każdym zadaniu. Jeśli coś nie wyszło, wróć do tematu „Ułamki zwykłe i dziesiętne”.",
  "check": [
   "F(6, 24) == F(1, 4)",
   "F(3, 8) == F('0.375')",
   "72 - 46 + 1 == 27"
  ]
 },
 "levels": [
  {
   "n": 1,
   "name": "Podstawy",
   "desc": "Zliczanie liczb, wypisywanie możliwości, kostka, moneta i kule. Najpierw policz wszystkie wyniki, potem sprzyjające."
  },
  {
   "n": 2,
   "name": "Trening",
   "desc": "Losy, kostki wielościenne, dokładanie kul i porównywanie szans. Zadania jak na egzaminie."
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
    "P1"
   ],
   "type": "fields",
   "q": "Ile jest liczb całkowitych od 18 do 75 (razem z 18 i 75)?",
   "fields": [
    {
     "label": "Liczb",
     "ans": 58,
     "show": "58",
     "why": [
      [
       57,
       "75 − 18 = 57 to o jeden za mało: liczysz też 18."
      ]
     ]
    }
   ],
   "sol": [
    "[[75 − 18 + 1 = 58]]."
   ],
   "answer": "58.",
   "tip": "b − a + 1.",
   "check": [
    "75 - 18 + 1 == 58"
   ],
   "twin": {
    "type": "fields",
    "q": "Ile jest liczb całkowitych od 125 do 200 (razem z 125 i 200)?",
    "fields": [
     {
      "label": "Liczb",
      "ans": 76,
      "show": "76",
      "why": [
       [
        75,
        "200 − 125 = 75 to o jeden za mało."
       ]
      ]
     }
    ],
    "sol": [
     "[[200 − 125 + 1 = 76]]."
    ],
    "answer": "76.",
    "tip": "Nie zapomnij o +1.",
    "check": [
     "200 - 125 + 1 == 76"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Ile jest liczb całkowitych od −5 do 5 (razem z −5 i 5)?",
    "fields": [
     {
      "label": "Liczb",
      "ans": 11,
      "show": "11",
      "why": [
       [
        10,
        "Zapomniano o zerze albo o jednym końcu: 5 − (−5) + 1 = 11."
       ]
      ]
     }
    ],
    "sol": [
     "[[5 − (−5) + 1 = 11]]. To −5, …, −1, 0, 1, …, 5."
    ],
    "answer": "11.",
    "tip": "Zero też jest liczbą całkowitą.",
    "check": [
     "5 - (-5) + 1 == 11"
    ]
   }
  },
  {
   "id": "a2",
   "level": 1,
   "skills": [
    "P1"
   ],
   "type": "abcd",
   "q": "Ile liczb podzielnych przez 7 jest wśród liczb od 1 do 100?",
   "opts": [
    "15",
    "13",
    "14",
    "10"
   ],
   "ok": 2,
   "why": {
    "A": "7 · 15 = 105, a to więcej niż 100.",
    "B": "Pominięto 7 · 1 = 7 albo 7 · 14 = 98.",
    "D": "100 : 10 = 10 to liczba wielokrotności 10, a nie 7."
   },
   "sol": [
    "Wielokrotności 7: 7, 14, …, 98.",
    "[[100 : 7 = 14 reszty 2]], więc [[14]] liczb."
   ],
   "answer": "C, 14.",
   "tip": "Część całkowita z dzielenia 100 : 7.",
   "check": [
    "len(range(7, 101, 7)) == 14"
   ],
   "twin": {
    "type": "abcd",
    "q": "Ile liczb dwucyfrowych jest podzielnych przez 4?",
    "opts": [
     "22",
     "24",
     "21",
     "25"
    ],
    "ok": 0,
    "why": {
     "B": "99 : 4 = 24 reszty 3 liczy też 4 i 8, które są jednocyfrowe.",
     "C": "(96 − 12) : 4 = 21 to liczba odstępów. Liczb jest o jedną więcej.",
     "D": "100 : 4 = 25 liczy też 4, 8 i 100."
    },
    "sol": [
     "Od 12 do 96 co 4: [[(96 − 12) : 4 + 1 = 22]]."
    ],
    "answer": "A, 22.",
    "tip": "Pierwsza: 12, ostatnia: 96.",
    "check": [
     "len(range(12, 100, 4)) == 22"
    ]
   }
  },
  {
   "id": "a3",
   "level": 1,
   "skills": [
    "P2"
   ],
   "type": "fields",
   "q": "Z cyfr 2, 5 i 7 tworzymy liczby dwucyfrowe. Cyfry mogą się powtarzać. Ile jest takich liczb?",
   "fields": [
    {
     "label": "Liczb",
     "ans": 9,
     "show": "9",
     "why": [
      [
       6,
       "6 to liczby bez powtórzeń. Tu cyfry mogą się powtarzać: dochodzą 22, 55 i 77."
      ],
      [
       3,
       "Z każdą cyfrą na początku są 3 liczby, a cyfr na początku są 3."
      ]
     ]
    }
   ],
   "sol": [
    "Z dwójką: [[22, 25, 27]]. Z piątką: [[52, 55, 57]]. Z siódemką: [[72, 75, 77]].",
    "Razem [[9]]."
   ],
   "answer": "9 liczb.",
   "tip": "Wypisuj według pierwszej cyfry.",
   "check": [
    "len([a*10 + b for a in (2, 5, 7) for b in (2, 5, 7)]) == 9"
   ],
   "twin": {
    "type": "fields",
    "q": "Z cyfr 1, 4 i 8 tworzymy liczby dwucyfrowe o różnych cyfrach. Ile jest takich liczb?",
    "fields": [
     {
      "label": "Liczb",
      "ans": 6,
      "show": "6",
      "why": [
       [
        9,
        "9 to liczby z powtórzeniami (11, 44, 88). Tu cyfry mają być różne."
       ]
      ]
     }
    ],
    "sol": [
     "[[14, 18, 41, 48, 81, 84]]: 6 liczb."
    ],
    "answer": "6 liczb.",
    "tip": "Różne cyfry: bez 11, 44 i 88.",
    "check": [
     "len([14, 18, 41, 48, 81, 84]) == 6"
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
   "note": "Wynik wpisz jako ułamek, np. 3/8.",
   "q": "Rzucamy raz kostką sześcienną. Oblicz prawdopodobieństwo wyrzucenia co najmniej 5 oczek.",
   "fields": [
    {
     "label": "P",
     "ans": 0.3333333333333333,
     "show": "1/3",
     "why": [
      [
       0.16666666666666666,
       "„Co najmniej 5” to 5 albo 6: dwa wyniki."
      ],
      [
       0.5,
       "Co najmniej 5 to tylko 5 i 6, a nie 4, 5 i 6."
      ]
     ]
    }
   ],
   "sol": [
    "Sprzyjające: [[5 i 6]].",
    "[[P = 2/6 = 1/3]]."
   ],
   "answer": "1/3.",
   "tip": "„Co najmniej 5” obejmuje 5.",
   "check": [
    "F(2, 6) == F(1, 3)"
   ],
   "twin": {
    "type": "fields",
    "note": "Wynik wpisz jako ułamek, np. 3/8.",
    "q": "Rzucamy raz kostką sześcienną. Oblicz prawdopodobieństwo wyrzucenia liczby oczek mniejszej od 3.",
    "fields": [
     {
      "label": "P",
      "ans": 0.3333333333333333,
      "show": "1/3",
      "why": [
       [
        0.5,
        "Mniejsza od 3 to 1 i 2, a nie 1, 2 i 3."
       ]
      ]
     }
    ],
    "sol": [
     "[[1 i 2]]: [[P = 2/6 = 1/3]]."
    ],
    "answer": "1/3.",
    "tip": "„Mniejsza od 3” nie obejmuje 3.",
    "check": [
     "F(2, 6) == F(1, 3)"
    ]
   }
  },
  {
   "id": "a5",
   "level": 1,
   "skills": [
    "P3"
   ],
   "type": "abcd",
   "vis": {
    "type": "coins",
    "rows": [
     [
      "O",
      "O"
     ],
     [
      "O",
      "R"
     ],
     [
      "R",
      "O"
     ],
     [
      "R",
      "R"
     ]
    ],
    "hl": [
     0,
     1,
     2
    ],
    "alt": "Wyniki rzutu dwiema monetami, wyróżnione OO, OR i RO"
   },
   "q": "Rzucamy dwiema monetami. Prawdopodobieństwo, że wypadnie co najmniej jeden orzeł, jest równe:",
   "opts": [
    "1/2",
    "2/3",
    "1/4",
    "3/4"
   ],
   "ok": 3,
   "why": {
    "A": "1/2 to szansa na orła przy jednej monecie.",
    "B": "Wyników jest 4, a nie 3: OR i RO to dwa różne wyniki.",
    "C": "1/4 to szansa na dwa orły. Co najmniej jeden orzeł to OO, OR i RO."
   },
   "sol": [
    "Sprzyjające: [[OO, OR, RO]].",
    "[[P = 3/4]]."
   ],
   "answer": "D, 3/4.",
   "tip": "„Co najmniej jeden” to jeden albo dwa.",
   "check": [
    "F(3, 4) == 1 - F(1, 4)"
   ],
   "twin": {
    "type": "abcd",
    "vis": {
     "type": "coins",
     "rows": [
      [
       "O",
       "O"
      ],
      [
       "O",
       "R"
      ],
      [
       "R",
       "O"
      ],
      [
       "R",
       "R"
      ]
     ],
     "hl": [
      0,
      3
     ],
     "alt": "Wyniki rzutu dwiema monetami, wyróżnione OO i RR"
    },
    "q": "Rzucamy dwiema monetami. Prawdopodobieństwo, że na obu monetach wypadnie to samo, jest równe:",
    "opts": [
     "1/4",
     "1/2",
     "1/3",
     "3/4"
    ],
    "ok": 1,
    "why": {
     "A": "1/4 to tylko dwa orły. „To samo” to OO albo RR.",
     "C": "Wyników jest 4: OO, OR, RO, RR.",
     "D": "3/4 to co najmniej jeden orzeł."
    },
    "sol": [
     "Sprzyjające: [[OO i RR]].",
     "[[P = 2/4 = 1/2]]."
    ],
    "answer": "B, 1/2.",
    "tip": "Wypisz 4 wyniki.",
    "check": [
     "F(2, 4) == F(1, 2)"
    ]
   }
  },
  {
   "id": "a6",
   "level": 1,
   "skills": [
    "P4"
   ],
   "type": "fields",
   "note": "Wynik wpisz jako ułamek, np. 3/8.",
   "vis": {
    "type": "urn",
    "balls": [
     [
      "r",
      2
     ],
     [
      "b",
      7
     ],
     [
      "g",
      3
     ]
    ],
    "alt": "Pudełko: 2 kule czerwone, 7 niebieskich i 3 zielone",
    "per": 6
   },
   "q": "W pudełku są 2 kule czerwone, 7 niebieskich i 3 zielone. Losujemy jedną kulę. Oblicz prawdopodobieństwo wylosowania kuli niebieskiej.",
   "fields": [
    {
     "label": "P",
     "ans": 0.5833333333333334,
     "show": "7/12",
     "why": [
      [
       0.3333333333333333,
       "Kolory są 3, ale kul jest 12."
      ],
      [
       7,
       "7 to liczba kul niebieskich. Podziel ją przez 12."
      ]
     ]
    }
   ],
   "sol": [
    "Wszystkich kul: [[2 + 7 + 3 = 12]].",
    "[[P = 7/12]]."
   ],
   "answer": "7/12.",
   "tip": "Kule, nie kolory.",
   "check": [
    "2 + 7 + 3 == 12"
   ],
   "twin": {
    "type": "fields",
    "note": "Wynik wpisz jako ułamek, np. 3/8.",
    "vis": {
     "type": "urn",
     "balls": [
      [
       "w",
       5
      ],
      [
       "k",
       3
      ],
      [
       "y",
       4
      ]
     ],
     "alt": "Pudełko: 5 kul białych, 3 czarne i 4 żółte",
     "per": 6
    },
    "q": "W pudełku jest 5 kul białych, 3 czarne i 4 żółte. Losujemy jedną kulę. Oblicz prawdopodobieństwo wylosowania kuli czarnej.",
    "fields": [
     {
      "label": "P",
      "ans": 0.25,
      "show": "1/4",
      "why": [
       [
        0.3333333333333333,
        "Kolory są 3, ale kul jest 12."
       ]
      ]
     }
    ],
    "sol": [
     "[[3/12 = 1/4]]."
    ],
    "answer": "1/4.",
    "tip": "3 z 12.",
    "check": [
     "F(3, 12) == F(1, 4)"
    ]
   }
  },
  {
   "id": "a7",
   "level": 1,
   "skills": [
    "P5"
   ],
   "type": "fields",
   "note": "Wynik wpisz jako ułamek, np. 3/8.",
   "q": "Losujemy jedną liczbę spośród liczb od 1 do 20. Oblicz prawdopodobieństwo, że będzie to liczba pierwsza.",
   "fields": [
    {
     "label": "P",
     "ans": 0.4,
     "show": "2/5",
     "why": [
      [
       0.45,
       "1 nie jest liczbą pierwszą. Pierwszych jest 8."
      ],
      [
       0.5,
       "Liczb pierwszych do 20 jest 8: 2, 3, 5, 7, 11, 13, 17, 19."
      ]
     ]
    }
   ],
   "sol": [
    "Liczby pierwsze: [[2, 3, 5, 7, 11, 13, 17, 19]], czyli 8.",
    "[[P = 8/20 = 2/5]]."
   ],
   "answer": "2/5.",
   "tip": "9 nie jest pierwsza (9 = 3 · 3), a 2 jest.",
   "check": [
    "len([n for n in range(2, 21) if all(n % d for d in range(2, n))]) == 8",
    "F(8, 20) == F(2, 5)"
   ],
   "twin": {
    "type": "fields",
    "note": "Wynik wpisz jako ułamek, np. 3/8.",
    "q": "Losujemy jedną liczbę spośród liczb od 1 do 30. Oblicz prawdopodobieństwo, że będzie to kwadrat liczby naturalnej (np. 9 = 3²).",
    "fields": [
     {
      "label": "P",
      "ans": 0.16666666666666666,
      "show": "1/6",
      "why": [
       [
        0.13333333333333333,
        "1 = 1² też jest kwadratem liczby naturalnej."
       ]
      ]
     }
    ],
    "sol": [
     "Kwadraty: [[1, 4, 9, 16, 25]], czyli 5 liczb.",
     "[[P = 5/30 = 1/6]]."
    ],
    "answer": "1/6.",
    "tip": "36 = 6² jest już większe od 30.",
    "check": [
     "F(5, 30) == F(1, 6)"
    ]
   }
  },
  {
   "id": "a8",
   "level": 1,
   "skills": [
    "P4"
   ],
   "type": "pf",
   "vis": {
    "type": "urn",
    "balls": [
     [
      "w",
      4
     ],
     [
      "k",
      6
     ]
    ],
    "alt": "Pudełko: 4 kule białe i 6 czarnych"
   },
   "q": "W pudełku są 4 kule białe i 6 czarnych. Losujemy jedną kulę. Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Prawdopodobieństwo wylosowania kuli białej jest równe 2/5.",
     "ok": "P"
    },
    {
     "t": "Prawdopodobieństwo wylosowania kuli czerwonej jest równe 1/10.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[4/10 = 2/5]]. Prawda.",
    "<b>Zdanie 2.</b> W pudełku nie ma czerwonych kul: prawdopodobieństwo to 0. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Zdarzenie niemożliwe ma prawdopodobieństwo 0.",
   "check": [
    "F(4, 10) == F(2, 5)"
   ],
   "twin": {
    "type": "pf",
    "vis": {
     "type": "urn",
     "balls": [
      [
       "y",
       3
      ],
      [
       "g",
       5
      ]
     ],
     "alt": "Pudełko: 3 kule żółte i 5 zielonych"
    },
    "q": "W pudełku są 3 kule żółte i 5 zielonych. Losujemy jedną kulę. Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Prawdopodobieństwo wylosowania kuli żółtej jest równe 3/5.",
      "ok": "F"
     },
     {
      "t": "Prawdopodobieństwo wylosowania kuli żółtej albo zielonej jest równe 1.",
      "ok": "P"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> Kul jest 8: [[3/8]]. Fałsz.",
     "<b>Zdanie 2.</b> Każda kula jest żółta albo zielona: zdarzenie pewne. Prawda."
    ],
    "answer": "F, P.",
    "tip": "3/5 to stosunek żółtych do zielonych, a nie prawdopodobieństwo.",
    "check": [
     "3 + 5 == 8"
    ]
   }
  },
  {
   "id": "b1",
   "level": 2,
   "skills": [
    "P1",
    "P5"
   ],
   "type": "abcd",
   "q": "Losy mają numery od 1 do 60. Wygrywają losy o numerach od 1 do 12 i od 41 do 60, pozostałe są puste. Prawdopodobieństwo wyciągnięcia losu pustego jest równe:",
   "opts": [
    "27/60",
    "28/60",
    "32/60",
    "20/60"
   ],
   "ok": 1,
   "why": {
    "A": "40 − 13 = 27 to o jeden za mało. Puste są losy od 13 do 40.",
    "C": "32/60 to szansa na los wygrywający (12 + 20).",
    "D": "20/60 to tylko losy od 41 do 60, a one wygrywają."
   },
   "sol": [
    "Puste: od 13 do 40, czyli [[40 − 13 + 1 = 28]].",
    "[[P = 28/60]]. Sprawdzenie: wygrywających [[12 + 20 = 32]], [[32 + 28 = 60]]."
   ],
   "answer": "B, 28/60.",
   "tip": "Takie zadanie było na egzaminie w 2025 roku.",
   "check": [
    "40 - 13 + 1 == 28",
    "12 + (60 - 41 + 1) == 32"
   ],
   "twin": {
    "type": "abcd",
    "q": "Losy mają numery od 1 do 80. Wygrywają losy o numerach od 1 do 15 i od 51 do 80, pozostałe są puste. Prawdopodobieństwo wyciągnięcia losu pustego jest równe:",
    "opts": [
     "34/80",
     "45/80",
     "30/80",
     "35/80"
    ],
    "ok": 3,
    "why": {
     "A": "50 − 16 = 34 to o jeden za mało.",
     "B": "45/80 to szansa na los wygrywający.",
     "C": "30/80 to tylko losy od 51 do 80, a one wygrywają."
    },
    "sol": [
     "Puste: od 16 do 50, czyli [[35]] losów.",
     "[[P = 35/80]]."
    ],
    "answer": "D, 35/80.",
    "tip": "Puste są w środku.",
    "check": [
     "50 - 16 + 1 == 35",
     "15 + 30 + 35 == 80"
    ]
   }
  },
  {
   "id": "b2",
   "level": 2,
   "skills": [
    "P2"
   ],
   "type": "fields",
   "q": "Na ile sposobów można ustawić w kolejce trzy osoby: Anię, Bartka i Celinę?",
   "fields": [
    {
     "label": "Sposobów",
     "ans": 6,
     "show": "6",
     "why": [
      [
       3,
       "Na początku może stać każda z 3 osób, a dla każdej pozostałe dwie można ustawić na 2 sposoby."
      ],
      [
       9,
       "Osoba nie może stać w kolejce dwa razy."
      ]
     ]
    }
   ],
   "sol": [
    "Z Anią na początku: [[ABC, ACB]]. Z Bartkiem: [[BAC, BCA]]. Z Celiną: [[CAB, CBA]].",
    "Razem [[6]]."
   ],
   "answer": "6 sposobów.",
   "tip": "Wypisuj według pierwszej osoby.",
   "check": [
    "len(['ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA']) == 6"
   ],
   "twin": {
    "type": "fields",
    "q": "Z pięciu osób wybieramy dwie do samorządu klasowego. Kolejność nie ma znaczenia. Na ile sposobów można to zrobić?",
    "fields": [
     {
      "label": "Sposobów",
      "ans": 10,
      "show": "10",
      "why": [
       [
        20,
        "Para Ania–Bartek to ta sama para co Bartek–Ania. 20 liczy każdą parę dwa razy."
       ],
       [
        25,
        "Osoba nie może być w parze sama ze sobą."
       ]
      ]
     }
    ],
    "sol": [
     "Osoby A, B, C, D, E: [[AB, AC, AD, AE]], [[BC, BD, BE]], [[CD, CE]], [[DE]].",
     "[[4 + 3 + 2 + 1 = 10]]."
    ],
    "answer": "10 sposobów.",
    "tip": "Nie cofaj się do liter już wypisanych.",
    "check": [
     "4 + 3 + 2 + 1 == 10"
    ]
   }
  },
  {
   "id": "b3",
   "level": 2,
   "skills": [
    "P3"
   ],
   "type": "fields",
   "note": "Wynik wpisz jako ułamek, np. 3/8.",
   "q": "Rzucamy raz kostką dwudziestościenną o ścianach ponumerowanych od 1 do 20. Oblicz prawdopodobieństwo, że wypadnie liczba podzielna przez 3 lub przez 5.",
   "fields": [
    {
     "label": "P",
     "ans": 0.45,
     "show": "9/20",
     "why": [
      [
       0.5,
       "15 dzieli się i przez 3, i przez 5. Policzono ją dwa razy."
      ],
      [
       0.3,
       "To tylko liczby podzielne przez 3. Doliczyć trzeba 5, 10 i 20."
      ]
     ]
    }
   ],
   "sol": [
    "Przez 3: [[3, 6, 9, 12, 15, 18]]. Przez 5: [[5, 10, 15, 20]].",
    "Razem bez powtórzenia 15: [[6 + 4 − 1 = 9]].",
    "[[P = 9/20]]."
   ],
   "answer": "9/20.",
   "tip": "Wypisz wszystkie liczby w jednym ciągu, wtedy od razu widać powtórki.",
   "check": [
    "len([n for n in range(1, 21) if n % 3 == 0 or n % 5 == 0]) == 9"
   ],
   "twin": {
    "type": "fields",
    "note": "Wynik wpisz jako ułamek, np. 3/8.",
    "q": "Rzucamy raz kostką ośmiościenną o ścianach ponumerowanych od 1 do 8. Oblicz prawdopodobieństwo, że wypadnie liczba parzysta lub podzielna przez 3.",
    "fields": [
     {
      "label": "P",
      "ans": 0.625,
      "show": "5/8",
      "why": [
       [
        0.75,
        "6 jest parzysta i podzielna przez 3. Policzono ją dwa razy."
       ]
      ]
     }
    ],
    "sol": [
     "Sprzyjające: [[2, 3, 4, 6, 8]].",
     "[[P = 5/8]]."
    ],
    "answer": "5/8.",
    "tip": "6 liczysz raz.",
    "check": [
     "len([n for n in range(1, 9) if n % 2 == 0 or n % 3 == 0]) == 5"
    ]
   }
  },
  {
   "id": "b4",
   "level": 2,
   "skills": [
    "P4"
   ],
   "type": "abcd",
   "q": "W pudełku jest 30 kul: białe, czerwone i niebieskie. Prawdopodobieństwo wylosowania kuli białej jest równe 1/5, a czerwonej 1/2. Ile jest kul niebieskich?",
   "opts": [
    "9",
    "15",
    "6",
    "3"
   ],
   "ok": 0,
   "why": {
    "B": "15 to kule czerwone (1/2 z 30).",
    "C": "6 to kule białe (1/5 z 30).",
    "D": "3/10 to prawdopodobieństwo wylosowania kuli niebieskiej. Kul jest 3/10 z 30, czyli 9."
   },
   "sol": [
    "Białe: [[1/5 · 30 = 6]]. Czerwone: [[1/2 · 30 = 15]].",
    "Niebieskie: [[30 − 6 − 15 = 9]]."
   ],
   "answer": "A, 9.",
   "tip": "Liczba kul = prawdopodobieństwo · liczba wszystkich kul.",
   "check": [
    "30 - 6 - 15 == 9",
    "F(9, 30) == F(3, 10)"
   ],
   "twin": {
    "type": "abcd",
    "q": "W pudełku jest 48 kul: białe, czerwone i niebieskie. Prawdopodobieństwo wylosowania kuli białej jest równe 1/4, a czerwonej 1/3. Ile jest kul niebieskich?",
    "opts": [
     "16",
     "12",
     "20",
     "5"
    ],
    "ok": 2,
    "why": {
     "A": "16 to kule czerwone.",
     "B": "12 to kule białe.",
     "D": "5/12 to prawdopodobieństwo. Kul jest 5/12 z 48, czyli 20."
    },
    "sol": [
     "Białe [[12]], czerwone [[16]], niebieskie [[48 − 28 = 20]]."
    ],
    "answer": "C, 20.",
    "tip": "1/4 z 48 = 12.",
    "check": [
     "48 - 12 - 16 == 20"
    ]
   }
  },
  {
   "id": "b5",
   "level": 2,
   "skills": [
    "P6"
   ],
   "type": "fields",
   "q": "W pudełku są 3 kule czerwone i 9 białych. Ile kul czerwonych trzeba dołożyć, żeby prawdopodobieństwo wylosowania kuli czerwonej było równe 1/2?",
   "fields": [
    {
     "label": "Dołożyć",
     "ans": 6,
     "show": "6",
     "why": [
      [
       3,
       "Po dołożeniu 3 czerwonych: 6 z 15, to mniej niż połowa."
      ],
      [
       9,
       "9 to liczba białych. Czerwonych ma być 9, więc dokładasz 9 − 3."
      ]
     ]
    }
   ],
   "sol": [
    "Połowa: czerwonych tyle co białych, czyli [[9]].",
    "Dołożyć [[9 − 3 = 6]]. Sprawdzenie: [[9/18 = 1/2]]."
   ],
   "answer": "6 kul.",
   "tip": "Białe się nie zmieniają.",
   "check": [
    "F(9, 18) == F(1, 2)"
   ],
   "twin": {
    "type": "fields",
    "q": "W pudełku jest 5 kul zielonych i 3 żółte. Ile kul żółtych trzeba dołożyć, żeby prawdopodobieństwo wylosowania kuli żółtej było równe 1/2?",
    "fields": [
     {
      "label": "Dołożyć",
      "ans": 2,
      "show": "2",
      "why": [
       [
        1,
        "Po dołożeniu jednej: 4 z 9, to mniej niż połowa."
       ]
      ]
     }
    ],
    "sol": [
     "Żółtych ma być [[5]], dołożyć [[2]]."
    ],
    "answer": "2 kule.",
    "tip": "Sprawdzenie: 5/10 = 1/2.",
    "check": [
     "F(5, 10) == F(1, 2)"
    ]
   }
  },
  {
   "id": "b6",
   "level": 2,
   "skills": [
    "P6"
   ],
   "type": "pf",
   "q": "W pudełku A są 2 kule czerwone i 3 białe, a w pudełku B 3 kule czerwone i 5 białych. Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Łatwiej wylosować kulę czerwoną z pudełka B, bo jest w nim więcej kul czerwonych.",
     "ok": "F"
    },
    {
     "t": "Prawdopodobieństwo wylosowania kuli białej z pudełka B jest równe 5/8.",
     "ok": "P"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> A: [[2/5 = 0,4]], B: [[3/8 = 0,375]]. Łatwiej z pudełka A. Fałsz.",
    "<b>Zdanie 2.</b> W B jest 8 kul, białych 5: [[5/8]]. Prawda."
   ],
   "answer": "F, P.",
   "tip": "Porównuj prawdopodobieństwa, nie liczby kul.",
   "check": [
    "F(2, 5) > F(3, 8)"
   ],
   "twin": {
    "type": "pf",
    "q": "W pudełku A jest 1 kula czerwona i 4 białe, a w pudełku B 2 czerwone i 6 białych. Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Łatwiej wylosować kulę czerwoną z pudełka B.",
      "ok": "P"
     },
     {
      "t": "Prawdopodobieństwo wylosowania kuli białej z pudełka A jest równe 1/4.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> A: [[1/5 = 0,2]], B: [[2/8 = 0,25]]. Prawda.",
     "<b>Zdanie 2.</b> [[4/5]]. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "1/4 to stosunek czerwonych do białych w A.",
    "check": [
     "F(2, 8) > F(1, 5)"
    ]
   }
  },
  {
   "id": "b7",
   "level": 2,
   "skills": [
    "P6"
   ],
   "type": "pair",
   "vis": {
    "type": "urn",
    "list": [
     [
      "w",
      "1"
     ],
     [
      "w",
      "2"
     ],
     [
      "w",
      "3"
     ],
     [
      "w",
      "4"
     ],
     [
      "w",
      "5"
     ],
     [
      "w",
      "6"
     ],
     [
      "w",
      "7"
     ],
     [
      "w",
      "8"
     ],
     [
      "w",
      "9"
     ],
     [
      "w",
      "10"
     ],
     [
      "w",
      "11"
     ],
     [
      "w",
      "12"
     ],
     [
      "w",
      "13"
     ]
    ],
    "alt": "Trzynaście kul ponumerowanych od 1 do 13"
   },
   "q": "W pudełku było 13 kul ponumerowanych od 1 do 13. Wylosowano 6 kul. Suma liczb na dowolnych dwóch kulach, które zostały w pudełku, jest parzysta. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "W pudełku zostały kule z liczbami",
     "opts": {
      "A": "nieparzystymi",
      "B": "parzystymi"
     },
     "ok": "A"
    },
    {
     "label": "Suma liczb na wylosowanych kulach jest równa",
     "opts": {
      "C": "42",
      "D": "49"
     },
     "ok": "C"
    }
   ],
   "sol": [
    "Suma dwóch liczb jest parzysta, gdy obie są parzyste albo obie nieparzyste, więc zostały kule jednego rodzaju.",
    "Zostało 7 kul. Parzystych jest tylko 6 (2, 4, …, 12), więc zostały nieparzyste: 1, 3, …, 13.",
    "Wylosowano parzyste: [[2 + 4 + 6 + 8 + 10 + 12 = 42]]. 49 to suma nieparzystych, które zostały."
   ],
   "answer": "A i C.",
   "tip": "Tak wyglądało zadanie 6 z egzaminu w 2026 roku (kule od 1 do 11).",
   "check": [
    "sum(range(2, 13, 2)) == 42",
    "sum(range(1, 14, 2)) == 49"
   ],
   "twin": {
    "type": "pair",
    "vis": {
     "type": "urn",
     "list": [
      [
       "w",
       "1"
      ],
      [
       "w",
       "2"
      ],
      [
       "w",
       "3"
      ],
      [
       "w",
       "4"
      ],
      [
       "w",
       "5"
      ],
      [
       "w",
       "6"
      ],
      [
       "w",
       "7"
      ],
      [
       "w",
       "8"
      ],
      [
       "w",
       "9"
      ],
      [
       "w",
       "10"
      ],
      [
       "w",
       "11"
      ],
      [
       "w",
       "12"
      ],
      [
       "w",
       "13"
      ],
      [
       "w",
       "14"
      ],
      [
       "w",
       "15"
      ]
     ],
     "alt": "Piętnaście kul ponumerowanych od 1 do 15"
    },
    "q": "W pudełku było 15 kul ponumerowanych od 1 do 15. Wylosowano 7 kul. Suma liczb na dowolnych dwóch kulach, które zostały w pudełku, jest parzysta. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "W pudełku zostały kule z liczbami",
      "opts": {
       "A": "parzystymi",
       "B": "nieparzystymi"
      },
      "ok": "B"
     },
     {
      "label": "Suma liczb na wylosowanych kulach jest równa",
      "opts": {
       "C": "64",
       "D": "56"
      },
      "ok": "D"
     }
    ],
    "sol": [
     "Zostało 8 kul jednego rodzaju. Parzystych jest tylko 7, więc zostały nieparzyste.",
     "Wylosowano parzyste: [[2 + 4 + … + 14 = 56]]. 64 to suma nieparzystych."
    ],
    "answer": "B i D.",
    "tip": "Policz, ile jest liczb parzystych, a ile nieparzystych.",
    "check": [
     "sum(range(2, 15, 2)) == 56",
     "sum(range(1, 16, 2)) == 64"
    ]
   }
  },
  {
   "id": "c1",
   "level": 3,
   "skills": [
    "P6"
   ],
   "type": "self",
   "q": "W pudełku są tylko kule białe, czerwone i niebieskie. Kul białych jest dwa razy więcej niż czerwonych, a niebieskich jest o 3 więcej niż czerwonych. Prawdopodobieństwo wylosowania kuli niebieskiej jest równe 1/3. Ile kul jest w pudełku? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Zapisano liczby kul przez jedną niewiadomą (czerwone x, białe 2x, niebieskie x + 3) i równanie, np. 3(x + 3) = 4x + 3.",
     "pts": 1
    },
    {
     "t": "Rozwiązano równanie (x = 6) i podano liczbę wszystkich kul: 27.",
     "pts": 1
    }
   ],
   "sol": [
    "Czerwone [[x]], białe [[2x]], niebieskie [[x + 3]]. Wszystkich [[4x + 3]].",
    "Niebieskie to 1/3 wszystkich: [[3(x + 3) = 4x + 3]], [[3x + 9 = 4x + 3]], [[x = 6]].",
    "Wszystkich kul: [[4 · 6 + 3 = 27]]. Sprawdzenie: niebieskich 9, [[9/27 = 1/3]]."
   ],
   "answer": "27 kul.",
   "tip": "Niebieskie · 3 = wszystkie.",
   "check": [
    "3*(6 + 3) == 4*6 + 3",
    "F(9, 27) == F(1, 3)"
   ],
   "twin": {
    "type": "self",
    "q": "W pudełku są tylko kule białe, czerwone i niebieskie. Kul białych jest trzy razy więcej niż czerwonych, a niebieskich jest o 4 więcej niż czerwonych. Prawdopodobieństwo wylosowania kuli niebieskiej jest równe 1/4. Ile kul jest w pudełku? Zapisz obliczenia.",
    "criteria": [
     {
      "t": "Czerwone x, białe 3x, niebieskie x + 4; równanie 4(x + 4) = 5x + 4.",
      "pts": 1
     },
     {
      "t": "x = 12, wszystkich 64 kule.",
      "pts": 1
     }
    ],
    "sol": [
     "Wszystkich [[5x + 4]]. [[4(x + 4) = 5x + 4]], [[x = 12]].",
     "Wszystkich [[64]]. Sprawdzenie: [[16/64 = 1/4]]."
    ],
    "answer": "64 kule.",
    "tip": "Niebieskie · 4 = wszystkie.",
    "check": [
     "4*(12 + 4) == 5*12 + 4",
     "F(16, 64) == F(1, 4)"
    ]
   }
  },
  {
   "id": "c2",
   "level": 3,
   "skills": [
    "P1",
    "P5"
   ],
   "type": "self",
   "q": "Losujemy jedną liczbę dwucyfrową. Oblicz prawdopodobieństwo, że suma jej cyfr jest równa 5. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Podano liczbę wszystkich liczb dwucyfrowych: 90.",
     "pts": 1
    },
    {
     "t": "Wypisano liczby 14, 23, 32, 41, 50 i obliczono P = 5/90 = 1/18.",
     "pts": 1
    }
   ],
   "sol": [
    "Wszystkich: [[99 − 10 + 1 = 90]].",
    "Suma cyfr 5: [[14, 23, 32, 41, 50]], czyli 5 liczb.",
    "[[P = 5/90 = 1/18]]."
   ],
   "answer": "1/18.",
   "tip": "Nie zapomnij o 50.",
   "check": [
    "len([n for n in range(10, 100) if n // 10 + n % 10 == 5]) == 5",
    "F(5, 90) == F(1, 18)"
   ],
   "twin": {
    "type": "self",
    "q": "Losujemy jedną liczbę dwucyfrową. Oblicz prawdopodobieństwo, że cyfra dziesiątek jest o 3 większa od cyfry jedności. Zapisz obliczenia.",
    "criteria": [
     {
      "t": "Wszystkich liczb: 90.",
      "pts": 1
     },
     {
      "t": "Liczby 30, 41, 52, 63, 74, 85, 96, P = 7/90.",
      "pts": 1
     }
    ],
    "sol": [
     "[[90]] liczb.",
     "[[30, 41, 52, 63, 74, 85, 96]]: 7 liczb, [[P = 7/90]]."
    ],
    "answer": "7/90.",
    "tip": "Zacznij od cyfry jedności 0.",
    "check": [
     "len([n for n in range(10, 100) if n // 10 - n % 10 == 3]) == 7"
    ]
   }
  },
  {
   "id": "c3",
   "level": 3,
   "skills": [
    "P2",
    "P3"
   ],
   "type": "self",
   "q": "Rzucamy trzema monetami. Wypisz wszystkie możliwe wyniki i oblicz prawdopodobieństwo, że wypadną dokładnie dwa orły.",
   "criteria": [
    {
     "t": "Wypisano 8 wyników: OOO, OOR, ORO, ORR, ROO, ROR, RRO, RRR.",
     "pts": 1
    },
    {
     "t": "Wskazano 3 sprzyjające (OOR, ORO, ROO) i P = 3/8.",
     "pts": 1
    }
   ],
   "sol": [
    "Wyniki: [[OOO, OOR, ORO, ORR, ROO, ROR, RRO, RRR]], czyli 8.",
    "Dokładnie dwa orły: [[OOR, ORO, ROO]].",
    "[[P = 3/8]]."
   ],
   "answer": "3/8.",
   "tip": "Wypisuj jak w słowniku: najpierw wszystkie zaczynające się od O.",
   "check": [
    "len([a + b + c for a in 'OR' for b in 'OR' for c in 'OR']) == 8"
   ],
   "twin": {
    "type": "self",
    "q": "Rzucamy trzema monetami. Wypisz wszystkie wyniki i oblicz prawdopodobieństwo, że wypadnie co najmniej jedna reszka.",
    "criteria": [
     {
      "t": "8 wyników.",
      "pts": 1
     },
     {
      "t": "Sprzyjające: wszystkie oprócz OOO, P = 7/8.",
      "pts": 1
     }
    ],
    "sol": [
     "8 wyników.",
     "Bez reszki jest tylko [[OOO]], więc [[P = 7/8]]."
    ],
    "answer": "7/8.",
    "tip": "Łatwiej policzyć, kiedy reszki nie ma.",
    "check": [
     "1 - F(1, 8) == F(7, 8)"
    ]
   }
  },
  {
   "id": "c4",
   "level": 3,
   "skills": [
    "P4",
    "P6"
   ],
   "type": "self",
   "q": "W pudełku są 4 kule czerwone i 8 białych. a) Oblicz prawdopodobieństwo wylosowania kuli czerwonej. b) Ile kul białych trzeba wyjąć z pudełka, żeby prawdopodobieństwo wylosowania kuli czerwonej było równe 2/3? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "a) Obliczono P = 4/12 = 1/3.",
     "pts": 1
    },
    {
     "t": "b) Ustalono, że wszystkich kul ma być 6 (4 to 2/3 z 6), więc trzeba wyjąć 6 białych.",
     "pts": 1
    }
   ],
   "sol": [
    "a) [[4/12 = 1/3]].",
    "b) Czerwone mają być 2/3 wszystkich, a jest ich 4, więc 1/3 to [[2]] kule, a wszystkich ma być [[6]].",
    "Białych ma zostać [[2]], więc wyjmujemy [[8 − 2 = 6]]."
   ],
   "answer": "a) 1/3, b) 6 kul białych.",
   "tip": "Czerwonych nie ruszamy, więc zmienia się tylko mianownik.",
   "check": [
    "F(4, 12) == F(1, 3)",
    "F(4, 6) == F(2, 3)"
   ],
   "twin": {
    "type": "self",
    "q": "W pudełku jest 5 kul czerwonych i 10 białych. a) Oblicz prawdopodobieństwo wylosowania kuli czerwonej. b) Ile kul białych trzeba wyjąć, żeby to prawdopodobieństwo było równe 1/2? Zapisz obliczenia.",
    "criteria": [
     {
      "t": "a) P = 5/15 = 1/3.",
      "pts": 1
     },
     {
      "t": "b) Białych ma zostać 5, wyjąć 5.",
      "pts": 1
     }
    ],
    "sol": [
     "a) [[1/3]].",
     "b) Połowa: białych tyle co czerwonych, [[5]]. Wyjąć [[10 − 5 = 5]]."
    ],
    "answer": "a) 1/3, b) 5 kul.",
    "tip": "Sprawdzenie: 5/10 = 1/2.",
    "check": [
     "F(5, 10) == F(1, 2)"
    ]
   }
  },
  {
   "id": "c5",
   "level": 3,
   "skills": [
    "P1",
    "P5"
   ],
   "type": "self",
   "q": "Kasia losuje jedną kartkę spośród kartek ponumerowanych od 1 do 50. Oblicz prawdopodobieństwo, że numer kartki jest podzielny przez 4, ale nie jest podzielny przez 8. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Policzono liczby podzielne przez 4 (12) i przez 8 (6).",
     "pts": 1
    },
    {
     "t": "Obliczono 12 − 6 = 6 i P = 6/50 = 3/25.",
     "pts": 1
    }
   ],
   "sol": [
    "Przez 4: [[4, 8, …, 48]], czyli 12. Przez 8: [[8, 16, …, 48]], czyli 6.",
    "Podzielne przez 4, ale nie przez 8: [[12 − 6 = 6]] (4, 12, 20, 28, 36, 44).",
    "[[P = 6/50 = 3/25]]."
   ],
   "answer": "3/25.",
   "tip": "Każda liczba podzielna przez 8 dzieli się też przez 4.",
   "check": [
    "len([n for n in range(1, 51) if n % 4 == 0 and n % 8 != 0]) == 6",
    "F(6, 50) == F(3, 25)"
   ],
   "twin": {
    "type": "self",
    "q": "Losujemy jedną liczbę spośród liczb od 1 do 60. Oblicz prawdopodobieństwo, że jest podzielna przez 3, ale nie jest podzielna przez 6. Zapisz obliczenia.",
    "criteria": [
     {
      "t": "Przez 3: 20 liczb, przez 6: 10 liczb.",
      "pts": 1
     },
     {
      "t": "20 − 10 = 10, P = 10/60 = 1/6.",
      "pts": 1
     }
    ],
    "sol": [
     "[[20 − 10 = 10]] liczb.",
     "[[P = 10/60 = 1/6]]."
    ],
    "answer": "1/6.",
    "tip": "To liczby nieparzyste podzielne przez 3.",
    "check": [
     "len([n for n in range(1, 61) if n % 3 == 0 and n % 6 != 0]) == 10"
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
   "q": "Ile jest liczb całkowitych od 37 do 91 (razem z 37 i 91)?",
   "fields": [
    {
     "label": "Liczb",
     "ans": 55,
     "show": "55"
    }
   ],
   "sol": [
    "[[91 − 37 + 1 = 55]]."
   ],
   "answer": "55.",
   "tip": "b − a + 1.",
   "check": [
    "91 - 37 + 1 == 55"
   ],
   "pts": 1
  },
  {
   "id": "t2",
   "skills": [
    "P1"
   ],
   "type": "abcd",
   "q": "Ile liczb dwucyfrowych jest podzielnych przez 6?",
   "opts": [
    "16",
    "14",
    "15",
    "90"
   ],
   "ok": 2,
   "why": {
    "A": "Wielokrotności 6 od 6 do 96 jest 16, ale 6 nie jest dwucyfrowa.",
    "B": "(96 − 12) : 6 = 14 to liczba odstępów. Liczb jest o jedną więcej.",
    "D": "90 to liczba wszystkich liczb dwucyfrowych."
   },
   "sol": [
    "Od 12 do 96 co 6: [[(96 − 12) : 6 + 1 = 15]]."
   ],
   "answer": "C, 15.",
   "tip": "Pierwsza: 12.",
   "check": [
    "len(range(12, 100, 6)) == 15"
   ],
   "pts": 1
  },
  {
   "id": "t3",
   "skills": [
    "P2"
   ],
   "type": "fields",
   "q": "Ile różnych liczb trzycyfrowych o różnych cyfrach można ułożyć z cyfr 1, 2 i 3?",
   "fields": [
    {
     "label": "Liczb",
     "ans": 6,
     "show": "6"
    }
   ],
   "sol": [
    "[[123, 132, 213, 231, 312, 321]]."
   ],
   "answer": "6.",
   "tip": "Wypisuj według pierwszej cyfry.",
   "check": [
    "len([123, 132, 213, 231, 312, 321]) == 6"
   ],
   "pts": 1
  },
  {
   "id": "t4",
   "skills": [
    "P3"
   ],
   "type": "fields",
   "note": "Wynik wpisz jako ułamek, np. 3/8.",
   "q": "Rzucamy raz kostką sześcienną. Oblicz prawdopodobieństwo, że wypadnie liczba oczek będąca dzielnikiem liczby 6.",
   "fields": [
    {
     "label": "P",
     "ans": 0.6666666666666666,
     "show": "2/3"
    }
   ],
   "sol": [
    "Dzielniki 6: [[1, 2, 3, 6]].",
    "[[P = 4/6 = 2/3]]."
   ],
   "answer": "2/3.",
   "tip": "1 i 6 też są dzielnikami 6.",
   "check": [
    "F(4, 6) == F(2, 3)"
   ],
   "pts": 1
  },
  {
   "id": "t5",
   "skills": [
    "P3"
   ],
   "type": "abcd",
   "q": "Rzucamy dwiema monetami. Prawdopodobieństwo, że wypadną dwie reszki, jest równe:",
   "opts": [
    "1/4",
    "1/2",
    "1/3",
    "3/4"
   ],
   "ok": 0,
   "why": {
    "B": "1/2 to szansa na reszkę przy jednej monecie.",
    "C": "Wyników jest 4: OO, OR, RO, RR.",
    "D": "3/4 to co najmniej jedna reszka."
   },
   "sol": [
    "Tylko [[RR]] z 4 wyników: [[P = 1/4]]."
   ],
   "answer": "A, 1/4.",
   "tip": "Wypisz 4 wyniki.",
   "check": [
    "F(1, 4) == F('0.25')"
   ],
   "pts": 1
  },
  {
   "id": "t6",
   "skills": [
    "P4"
   ],
   "type": "fields",
   "note": "Wynik wpisz jako ułamek, np. 3/8.",
   "vis": {
    "type": "urn",
    "balls": [
     [
      "r",
      5
     ],
     [
      "g",
      8
     ],
     [
      "y",
      7
     ]
    ],
    "alt": "Pudełko: 5 kul czerwonych, 8 zielonych i 7 żółtych",
    "per": 10
   },
   "q": "W pudełku jest 5 kul czerwonych, 8 zielonych i 7 żółtych. Oblicz prawdopodobieństwo wylosowania kuli, która nie jest zielona.",
   "fields": [
    {
     "label": "P",
     "ans": 0.6,
     "show": "3/5"
    }
   ],
   "sol": [
    "Nie zielone: [[5 + 7 = 12]] z [[20]].",
    "[[P = 12/20 = 3/5]]."
   ],
   "answer": "3/5.",
   "tip": "Albo 1 − 8/20.",
   "check": [
    "F(12, 20) == F(3, 5)",
    "1 - F(8, 20) == F(3, 5)"
   ],
   "pts": 1
  },
  {
   "id": "t7",
   "skills": [
    "P4"
   ],
   "type": "pf",
   "q": "W pudełku są tylko kule białe i czarne, razem 24 kule. Prawdopodobieństwo wylosowania kuli białej jest równe 3/8. Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "W pudełku jest 9 kul białych.",
     "ok": "P"
    },
    {
     "t": "Prawdopodobieństwo wylosowania kuli czarnej jest równe 3/5.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[3/8 · 24 = 9]]. Prawda.",
    "<b>Zdanie 2.</b> [[1 − 3/8 = 5/8]]. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Razem 1.",
   "check": [
    "F(3, 8)*24 == 9",
    "1 - F(3, 8) == F(5, 8)"
   ],
   "pts": 1
  },
  {
   "id": "t8",
   "skills": [
    "P5"
   ],
   "type": "abcd",
   "q": "Losy mają numery od 1 do 50. Wygrywają losy o numerach od 1 do 5 i od 31 do 50. Prawdopodobieństwo wyciągnięcia losu wygrywającego jest równe:",
   "opts": [
    "12/25",
    "1/10",
    "2/5",
    "1/2"
   ],
   "ok": 3,
   "why": {
    "A": "Od 31 do 50 jest 50 − 31 + 1 = 20 losów, a nie 19.",
    "B": "5/50 to tylko losy od 1 do 5.",
    "C": "20/50 to tylko losy od 31 do 50."
   },
   "sol": [
    "Wygrywające: [[5 + 20 = 25]].",
    "[[P = 25/50 = 1/2]]."
   ],
   "answer": "D, 1/2.",
   "tip": "b − a + 1.",
   "check": [
    "5 + (50 - 31 + 1) == 25",
    "F(24, 50) == F(12, 25)"
   ],
   "pts": 1
  },
  {
   "id": "t9",
   "skills": [
    "P5"
   ],
   "type": "fields",
   "note": "Wynik wpisz jako ułamek, np. 3/8.",
   "q": "Losujemy jedną liczbę spośród liczb od 1 do 30. Oblicz prawdopodobieństwo, że będzie podzielna przez 4.",
   "fields": [
    {
     "label": "P",
     "ans": 0.23333333333333334,
     "show": "7/30"
    }
   ],
   "sol": [
    "[[4, 8, …, 28]]: 7 liczb.",
    "[[P = 7/30]]."
   ],
   "answer": "7/30.",
   "tip": "30 : 4 = 7 reszty 2.",
   "check": [
    "len(range(4, 31, 4)) == 7"
   ],
   "pts": 1
  },
  {
   "id": "t10",
   "skills": [
    "P6"
   ],
   "type": "pair",
   "q": "W pudełku są tylko kule białe i czerwone. Kul białych jest 12, a prawdopodobieństwo wylosowania kuli czerwonej jest równe 1/4. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "W pudełku są",
     "opts": {
      "A": "4 kule czerwone",
      "B": "3 kule czerwone"
     },
     "ok": "A"
    },
    {
     "label": "Po dołożeniu 4 kul czerwonych prawdopodobieństwo wylosowania kuli czerwonej będzie równe",
     "opts": {
      "C": "1/2",
      "D": "2/5"
     },
     "ok": "D"
    }
   ],
   "sol": [
    "Białe to [[3/4]] wszystkich, więc 1/4 to [[12 : 3 = 4]] kule czerwone.",
    "Po dołożeniu: [[8]] czerwonych z [[20]], [[P = 8/20 = 2/5]]."
   ],
   "answer": "A i D.",
   "tip": "Po dołożeniu zmienia się też liczba wszystkich kul.",
   "check": [
    "F(4, 16) == F(1, 4)",
    "F(8, 20) == F(2, 5)"
   ],
   "pts": 1
  },
  {
   "id": "t11",
   "skills": [
    "P6"
   ],
   "type": "self",
   "q": "W pudełku są tylko kule zielone i niebieskie. Zielonych jest 4 razy więcej niż niebieskich. Po dołożeniu 6 kul niebieskich prawdopodobieństwo wylosowania kuli niebieskiej jest równe 1/2. Ile kul było w pudełku na początku? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Oznaczono niebieskie x, zielone 4x i zapisano warunek x + 6 = 4x (połowa: tyle samo kul obu kolorów).",
     "pts": 1
    },
    {
     "t": "Obliczono x = 2 i liczbę kul na początku: 2 + 8 = 10.",
     "pts": 1
    }
   ],
   "sol": [
    "Niebieskie [[x]], zielone [[4x]].",
    "Po dołożeniu P = 1/2, więc niebieskich jest tyle co zielonych: [[x + 6 = 4x]], [[x = 2]].",
    "Na początku: [[2 + 8 = 10]] kul."
   ],
   "answer": "10 kul.",
   "tip": "Sprawdzenie: 8 niebieskich i 8 zielonych, 8/16 = 1/2.",
   "check": [
    "2 + 6 == 4*2",
    "F(8, 16) == F(1, 2)"
   ],
   "pts": 2
  },
  {
   "id": "t12",
   "skills": [
    "P1",
    "P5"
   ],
   "type": "self",
   "q": "Losujemy jedną liczbę dwucyfrową. Oblicz prawdopodobieństwo, że będzie to liczba mniejsza od 40 i podzielna przez 5. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Podano liczbę wszystkich liczb dwucyfrowych: 90.",
     "pts": 1
    },
    {
     "t": "Wypisano 10, 15, 20, 25, 30, 35 i obliczono P = 6/90 = 1/15.",
     "pts": 1
    }
   ],
   "sol": [
    "Wszystkich: [[90]].",
    "Sprzyjające: [[10, 15, 20, 25, 30, 35]], czyli 6.",
    "[[P = 6/90 = 1/15]]."
   ],
   "answer": "1/15.",
   "tip": "40 nie jest mniejsze od 40.",
   "check": [
    "len(range(10, 40, 5)) == 6",
    "F(6, 90) == F(1, 15)"
   ],
   "pts": 2
  }
 ],
 "test_minutes": 35,
 "pass": 12,
 "dzial": "Dział 4: Dane i prawdopodobieństwo"
};
