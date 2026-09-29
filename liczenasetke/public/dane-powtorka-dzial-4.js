/* Wygenerowane przez zbuduj.py z tresc/powtorka-dzial-4.py. Nie edytuj ręcznie. */
window.TEMAT = {
 "slug": "powtorka-dzial-4",
 "title": "Powtórka: Dział 4",
 "sign": "Σ",
 "lead": "Zadania z danych, średniej, zliczania i prawdopodobieństwa, wymieszane jak na egzaminie. Na koniec sprawdzian całego działu: 15 zadań, 20 punktów, jak w arkuszu CKE.",
 "goals": {
  "learn": "Rozpoznawać, czy zadanie wymaga odczytu z diagramu, średniej, zliczania czy prawdopodobieństwa, łączyć te tematy i zapisywać rozwiązania zadań otwartych tak, żeby dostać wszystkie punkty.",
  "prereq": "Oba tematy Działu 4: „Tabele, diagramy i średnia” oraz „Zliczanie i prawdopodobieństwo”.",
  "goal": "Minimum 17 z 20 punktów w sprawdzianie działu."
 },
 "skills": {
  "F1": "Tabele, diagramy i wykresy",
  "F2": "Średnia arytmetyczna",
  "F3": "Zliczanie",
  "F4": "Prawdopodobieństwo"
 },
 "lessons": [
  {
   "title": "Jak rozpoznać, czego użyć",
   "skills": [
    "F1",
    "F2",
    "F3",
    "F4"
   ],
   "intro": "W zadaniach z Działu 4 dane są na diagramie, w tabeli albo w tekście, a pytanie może dotyczyć procentu, średniej albo szansy. Najpierw ustal, o co pytają, a potem wybierz narzędzie.",
   "rule": {
    "t": "Zanim zaczniesz liczyć, zapytaj: skąd wziąć liczby i które narzędzie pasuje do pytania.",
    "f": [
     "„łącznie”, „o ile”, „ile razy” → odczyt i działanie",
     "„jaki procent”, wycinek → procenty i 360°",
     "„średnio”, „średnia” → suma : liczba danych",
     "„szansa”, „prawdopodobieństwo” → sprzyjające : wszystkie"
    ],
    "e": "Na egzaminie jedno zadanie często łączy dwa tematy: diagram z procentami, średnią z równaniem, losowanie z podzielnością."
   },
   "visual": {
    "type": "chart",
    "kind": "cols",
    "min": 0,
    "max": 10,
    "step": 2,
    "ylabel": "liczba uczniów",
    "rows": [
     [
      "3 pkt",
      2
     ],
     [
      "4 pkt",
      5
     ],
     [
      "5 pkt",
      8
     ],
     [
      "6 pkt",
      5
     ]
    ],
    "alt": "Diagram słupkowy: 3 punkty 2 uczniów, 4 punkty 5 uczniów, 5 punktów 8 uczniów, 6 punktów 5 uczniów",
    "vals": true,
    "caption": "Z jednego diagramu: liczba uczniów, średnia i prawdopodobieństwo"
   },
   "example": {
    "q": "Diagram pokazuje wyniki kartkówki w klasie (od 3 do 6 punktów). Oblicz: a) ilu uczniów pisało kartkówkę; b) średni wynik; c) prawdopodobieństwo, że losowo wybrany uczeń tej klasy ma co najmniej 5 punktów.",
    "steps": [
     "a) 2 + 5 + 8 + 5 = 20 uczniów.",
     "b) Suma punktów: 3 · 2 + 4 · 5 + 5 · 8 + 6 · 5 = 6 + 20 + 40 + 30 = 96. Średnia: 96 : 20 = 4,8 punktu.",
     "c) Co najmniej 5 punktów: 8 + 5 = 13 uczniów z 20, P = 13/20."
    ],
    "result": "20 uczniów, średnio 4,8 punktu, P = 13/20.",
    "tip": "Losowanie ucznia to też doświadczenie losowe: każdy uczeń jest jak jedna kula w pudełku.",
    "check": [
     "2 + 5 + 8 + 5 == 20",
     "3*2 + 4*5 + 5*8 + 6*5 == 96",
     "F(96, 20) == F('4.8')"
    ]
   },
   "you": [
    {
     "id": "y1",
     "type": "abcd",
     "q": "Średnia arytmetyczna liczb 2, 4, 6, 8 i x jest równa 6. Losujemy jedną z tych pięciu liczb. Prawdopodobieństwo wylosowania liczby większej od 5 jest równe:",
     "opts": [
      "3/5",
      "2/5",
      "2/4",
      "1"
     ],
     "ok": 0,
     "why": {
      "B": "2/5 to liczby mniejsze od 5 (2 i 4).",
      "C": "Pominąłeś liczbę x. Liczb jest pięć, a x = 5 · 6 − 20 = 10.",
      "D": "Liczby 2 i 4 są mniejsze od 5."
     },
     "sol": [
      "[[x = 5 · 6 − (2 + 4 + 6 + 8) = 10]].",
      "Większe od 5: [[6, 8, 10]]. [[P = 3/5]]."
     ],
     "answer": "A, 3/5.",
     "tip": "Najpierw brakująca liczba ze średniej.",
     "check": [
      "5*6 - 20 == 10"
     ]
    },
    {
     "id": "y1b",
     "type": "pf",
     "chart": {
      "kind": "pie",
      "rows": [
       [
        "góry",
        30
       ],
       [
        "morze",
        40
       ],
       [
        "jeziora",
        20
       ],
       [
        "w domu",
        10
       ]
      ],
      "alt": "Diagram kołowy: góry 30%, morze 40%, jeziora 20%, w domu 10%"
     },
     "q": "Diagram pokazuje, gdzie 50 uczniów spędziło wakacje. Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "Nad morzem wakacje spędziło 20 uczniów.",
       "ok": "P"
      },
      {
       "t": "Prawdopodobieństwo, że losowo wybrany uczeń spędził wakacje w górach, jest równe 3/5.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> [[40% z 50 = 20]]. Prawda.",
      "<b>Zdanie 2.</b> Góry to 30%, czyli [[3/10]]. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "Procent z diagramu to od razu prawdopodobieństwo: 30% = 3/10.",
     "check": [
      "F(40, 100)*50 == 20",
      "F(30, 100) == F(3, 10)"
     ]
    }
   ]
  },
  {
   "title": "Zadanie otwarte z Działu 4 na pełne punkty",
   "skills": [
    "F1",
    "F2",
    "F3",
    "F4"
   ],
   "intro": "Zadania otwarte z danych i prawdopodobieństwa mają zwykle trzy etapy: odczytanie danych, obliczenie (suma, liczba wszystkich możliwości, liczba kul) i odpowiedź na pytanie. Za każdy etap jest punkt.",
   "rule": {
    "t": "Zapisz, skąd bierzesz liczby, licz krok po kroku i odpowiedz na pytanie z treści.",
    "f": [
     "1. dane z diagramu, tabeli albo treści",
     "2. suma albo liczba wszystkich możliwości",
     "3. wynik: średnia, procent, prawdopodobieństwo",
     "4. odpowiedź na pytanie"
    ],
    "e": "Prawdopodobieństwo podaj jako ułamek. Liczba kul musi wyjść naturalna, a średnia może wyjść ułamkiem."
   },
   "visual": {
    "type": "urn",
    "balls": [
     [
      "r",
      6
     ],
     [
      "b",
      9
     ]
    ],
    "alt": "Pudełko: 6 kul czerwonych i 9 niebieskich",
    "caption": "Niebieskich jest 9 i ich liczba się nie zmienia"
   },
   "example": {
    "q": "W pudełku jest 15 kul czerwonych i niebieskich. Prawdopodobieństwo wylosowania kuli czerwonej jest równe 2/5. Ile kul czerwonych trzeba dołożyć, żeby to prawdopodobieństwo było równe 11/20?",
    "steps": [
     "Czerwonych: 2/5 · 15 = 6, niebieskich 15 − 6 = 9. (1 punkt)",
     "Niebieskie się nie zmieniają. Po dołożeniu mają stanowić 1 − 11/20 = 9/20 wszystkich kul, a jest ich 9, więc wszystkich ma być 20. (1 punkt)",
     "Trzeba dołożyć 20 − 15 = 5 kul czerwonych. Sprawdzenie: 11 czerwonych z 20. (1 punkt)"
    ],
    "result": "Trzeba dołożyć 5 kul czerwonych.",
    "tip": "Najprościej rozumować na kolorze, którego liczba się nie zmienia.",
    "check": [
     "F(2, 5)*15 == 6",
     "1 - F(11, 20) == F(9, 20)",
     "F(6 + 5, 15 + 5) == F(11, 20)"
    ]
   },
   "you": [
    {
     "id": "y2",
     "type": "fields",
     "q": "Średni wzrost pięciu koszykarzy to 190 cm. Jednego zawodnika zastąpiono innym, o 10 cm wyższym. Ile wynosi teraz średni wzrost zawodników?",
     "fields": [
      {
       "label": "Średnia (cm)",
       "ans": 192,
       "show": "192",
       "why": [
        [
         200,
         "Średnia nie rośnie o całe 10 cm. 10 cm rozkłada się na pięciu zawodników."
        ]
       ]
      }
     ],
     "sol": [
      "Suma wzrostu: [[5 · 190 = 950]] cm, po zmianie [[960]] cm.",
      "Nowa średnia: [[960 : 5 = 192]] cm."
     ],
     "answer": "192 cm.",
     "tip": "Średnia rośnie o 10 : 5 = 2 cm.",
     "check": [
      "(5*190 + 10)/5 == 192"
     ]
    },
    {
     "id": "y2b",
     "type": "pf",
     "q": "Losujemy jedną liczbę spośród liczb od 1 do 100. Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "Prawdopodobieństwo wylosowania liczby podzielnej przez 10 jest równe 1/10.",
       "ok": "P"
      },
      {
       "t": "Prawdopodobieństwo wylosowania liczby trzycyfrowej jest równe 0.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> 10, 20, …, 100: [[10/100 = 1/10]]. Prawda.",
      "<b>Zdanie 2.</b> 100 jest liczbą trzycyfrową: [[1/100]]. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "Sprawdzaj końce przedziału.",
     "check": [
      "F(10, 100) == F(1, 10)"
     ]
    }
   ]
  }
 ],
 "traps": [
  {
   "name": "Oś nie od zera",
   "bad": "słupek dwa razy wyższy, więc dwa razy więcej",
   "good": "porównuj liczby z osi"
  },
  {
   "name": "Średnia ze średnich",
   "bad": "3 liczby o średniej 12 i 2 o średniej 7: (12 + 7) : 2",
   "good": "(36 + 14) : 5 = 10"
  },
  {
   "name": "Błąd „o jeden”",
   "bad": "od 20 do 39: 19 liczb",
   "good": "39 − 20 + 1 = 20"
  }
 ],
 "cheat": {
  "title": "Cały Dział 4",
  "rules": [
   {
    "t": "Diagramy.",
    "f": [
     "podziałka osi",
     "koło: 100% = 360°"
    ],
    "e": "Oś nie od zera: porównuj liczby, nie słupki."
   },
   {
    "t": "Wykres.",
    "f": [
     "w górę: rośnie",
     "poziomo: stała"
    ],
    "e": "Na wykresie drogi: poziomo = postój."
   },
   {
    "t": "Średnia.",
    "f": [
     "suma : liczba danych",
     "suma = średnia · liczba danych"
    ],
    "e": "Grupy: licz sumy."
   },
   {
    "t": "Zliczanie.",
    "f": [
     "od a do b: b − a + 1",
     "wypisuj po kolei"
    ],
    "e": "Zero nie stoi na początku liczby."
   },
   {
    "t": "Prawdopodobieństwo.",
    "f": [
     "sprzyjające : wszystkie",
     "0 ≤ P ≤ 1",
     "P(nie A) = 1 − P(A)"
    ],
    "e": "Dwie monety: OO, OR, RO, RR."
   },
   {
    "t": "Kule.",
    "f": [
     "P = kule koloru : wszystkie kule",
     "po zmianie licz od nowa"
    ],
    "e": "Rozumuj na kolorze, który się nie zmienia."
   }
  ]
 },
 "memo": {
  "title": "Wzory z całego działu",
  "rows": [
   [
    "średnia",
    "suma",
    "kąt wycinka",
    "od a do b",
    "prawdopodobieństwo"
   ],
   [
    "suma : liczba danych",
    "średnia · liczba danych",
    "część : całość · 360°",
    "b − a + 1",
    "sprzyjające : wszystkie"
   ]
  ],
  "note": "Prawdopodobieństwo zapisuj jako ułamek. Procent z diagramu kołowego to też prawdopodobieństwo: 30% = 3/10."
 },
 "warmup": {
  "id": "w0",
  "type": "fields",
  "q": "Rozgrzewka: po jednym rachunku z każdego tematu.",
  "fields": [
   {
    "label": "(3 + 7 + 8) : 3",
    "ans": 6,
    "show": "6"
   },
   {
    "label": "25% z 360°",
    "ans": 90,
    "show": "90"
   },
   {
    "label": "80 − 21 + 1",
    "ans": 60,
    "show": "60"
   }
  ],
  "sol": [
   "<b>(3 + 7 + 8) : 3</b> = 18 : 3 = [[6]].",
   "<b>25% z 360°</b> = 360 : 4 = [[90]].",
   "<b>80 − 21 + 1</b> = [[60]]. Tyle jest liczb od 21 do 80."
  ],
  "answer": "6, 90 i 60.",
  "tip": "Jeśli coś nie wyszło, wróć do tematu, z którego jest ten rachunek.",
  "check": [
   "(3 + 7 + 8)/3 == 6",
   "F(25, 100)*360 == 90",
   "80 - 21 + 1 == 60"
  ]
 },
 "levels": [
  {
   "n": 1,
   "name": "Zamknięte",
   "desc": "Zadania z obu tematów działu, wymieszane jak na egzaminie. Najpierw ustal, o co pytają: o dane, średnią czy szansę."
  },
  {
   "n": 2,
   "name": "Otwarte",
   "desc": "Zadania otwarte łączące diagramy, średnią, zliczanie i prawdopodobieństwo. Rozwiązuj na kartce, zapisuj etapy i oceniaj się według punktacji."
  }
 ],
 "practice": [
  {
   "id": "p1",
   "level": 1,
   "skills": [
    "F1",
    "F2"
   ],
   "type": "fields",
   "data": {
    "head": [
     "miesiąc",
     "kwiecień",
     "maj",
     "czerwiec",
     "lipiec",
     "sierpień"
    ],
    "rows": [
     [
      "dni słoneczne",
      12,
      18,
      22,
      25,
      23
     ]
    ]
   },
   "q": "Tabela pokazuje liczbę słonecznych dni w kolejnych miesiącach. O ile więcej słonecznych dni było w lipcu niż w kwietniu? Ile średnio słonecznych dni przypadało na jeden miesiąc?",
   "fields": [
    {
     "label": "O ile więcej",
     "ans": 13,
     "show": "13"
    },
    {
     "label": "Średnio",
     "ans": 20,
     "show": "20",
     "why": [
      [
       25,
       "Miesięcy jest 5, więc sumę 100 dzielisz przez 5."
      ]
     ]
    }
   ],
   "sol": [
    "[[25 − 12 = 13]].",
    "Suma [[12 + 18 + 22 + 25 + 23 = 100]], średnio [[100 : 5 = 20]]."
   ],
   "answer": "O 13 dni, średnio 20 dni.",
   "tip": "Policz miesiące w tabeli.",
   "check": [
    "25 - 12 == 13",
    "(12 + 18 + 22 + 25 + 23)/5 == 20"
   ],
   "twin": {
    "type": "fields",
    "data": {
     "head": [
      "miesiąc",
      "wrzesień",
      "październik",
      "listopad",
      "grudzień"
     ],
     "rows": [
      [
       "dni słoneczne",
       15,
       9,
       6,
       2
      ]
     ]
    },
    "q": "Tabela pokazuje liczbę słonecznych dni w kolejnych miesiącach. O ile mniej słonecznych dni było w grudniu niż we wrześniu? Ile średnio słonecznych dni przypadało na miesiąc?",
    "fields": [
     {
      "label": "O ile mniej",
      "ans": 13,
      "show": "13"
     },
     {
      "label": "Średnio",
      "ans": 8,
      "show": "8"
     }
    ],
    "sol": [
     "[[15 − 2 = 13]].",
     "[[(15 + 9 + 6 + 2) : 4 = 32 : 4 = 8]]."
    ],
    "answer": "O 13 dni, średnio 8 dni.",
    "tip": "4 miesiące.",
    "check": [
     "(15 + 9 + 6 + 2)/4 == 8"
    ]
   }
  },
  {
   "id": "p2",
   "level": 1,
   "skills": [
    "F1"
   ],
   "type": "abcd",
   "q": "Na diagramie kołowym wycinek ma kąt 90°. Jaki procent całości przedstawia ten wycinek?",
   "opts": [
    "90%",
    "30%",
    "25%",
    "50%"
   ],
   "ok": 2,
   "why": {
    "A": "90 to kąt, a nie procent.",
    "B": "Całe koło ma 360°, a nie 300°.",
    "D": "50% to półkole, czyli 180°."
   },
   "sol": [
    "[[90° : 360° = 1/4 = 25%]]."
   ],
   "answer": "C, 25%.",
   "tip": "Ćwiartka koła.",
   "check": [
    "F(90, 360) == F(1, 4)"
   ],
   "twin": {
    "type": "abcd",
    "q": "Na diagramie kołowym wycinek ma kąt 72°. Jaki procent całości przedstawia ten wycinek?",
    "opts": [
     "20%",
     "72%",
     "25%",
     "7,2%"
    ],
    "ok": 0,
    "why": {
     "B": "72 to kąt, a nie procent.",
     "C": "25% to 90°.",
     "D": "Podzieliłeś przez 10. Procent: 72 : 360 · 100%."
    },
    "sol": [
     "[[72° : 360° = 0,2 = 20%]]."
    ],
    "answer": "A, 20%.",
    "tip": "1% = 3,6°.",
    "check": [
     "F(72, 360) == F('0.2')"
    ]
   }
  },
  {
   "id": "p3",
   "level": 1,
   "skills": [
    "F1"
   ],
   "type": "fields",
   "chart": {
    "kind": "line",
    "x": {
     "min": 0,
     "max": 60,
     "step": 10,
     "label": "czas (min)"
    },
    "y": {
     "min": 0,
     "max": 12,
     "step": 2,
     "label": "odległość od domu (km)"
    },
    "pts": [
     [
      0,
      0
     ],
     [
      20,
      6
     ],
     [
      30,
      6
     ],
     [
      50,
      12
     ],
     [
      60,
      12
     ]
    ],
    "alt": "Wykres: do 20 min odległość rośnie do 6 km, do 30 min stoi, do 50 min rośnie do 12 km, do 60 min stoi"
   },
   "q": "Wykres pokazuje odległość rowerzysty od domu. Ile minut łącznie trwały postoje? Ile kilometrów przejechał rowerzysta w ciągu godziny?",
   "fields": [
    {
     "label": "Postoje (min)",
     "ans": 20,
     "show": "20",
     "why": [
      [
       10,
       "Są dwa postoje: od 20. do 30. i od 50. do 60. minuty."
      ]
     ]
    },
    {
     "label": "Droga (km)",
     "ans": 12,
     "show": "12"
    }
   ],
   "sol": [
    "Postoje: [[10 + 10 = 20]] minut.",
    "Na końcu jest [[12]] km od domu."
   ],
   "answer": "20 minut, 12 km.",
   "tip": "Poziome odcinki to postoje.",
   "check": [
    "(30 - 20) + (60 - 50) == 20"
   ],
   "twin": {
    "type": "fields",
    "chart": {
     "kind": "line",
     "x": {
      "min": 0,
      "max": 50,
      "step": 5,
      "label": "czas (min)"
     },
     "y": {
      "min": 0,
      "max": 12,
      "step": 2,
      "label": "odległość od domu (km)"
     },
     "pts": [
      [
       0,
       0
      ],
      [
       10,
       4
      ],
      [
       25,
       4
      ],
      [
       45,
       10
      ]
     ],
     "alt": "Wykres: do 10 min odległość rośnie do 4 km, do 25 min stoi, do 45 min rośnie do 10 km"
    },
    "q": "Wykres pokazuje odległość rowerzystki od domu. Ile minut trwał postój? Ile kilometrów przejechała po postoju?",
    "fields": [
     {
      "label": "Postój (min)",
      "ans": 15,
      "show": "15"
     },
     {
      "label": "Po postoju (km)",
      "ans": 6,
      "show": "6",
      "why": [
       [
        10,
        "10 km to cała droga. Po postoju: 10 − 4."
       ]
      ]
     }
    ],
    "sol": [
     "Postój: [[25 − 10 = 15]] minut.",
     "Po postoju: [[10 − 4 = 6]] km."
    ],
    "answer": "15 minut, 6 km.",
    "tip": "Odejmij odległości.",
    "check": [
     "25 - 10 == 15",
     "10 - 4 == 6"
    ]
   }
  },
  {
   "id": "p4",
   "level": 1,
   "skills": [
    "F2"
   ],
   "type": "fields",
   "q": "Średnia arytmetyczna liczb 4, x, 10 i 7 jest równa 8. Oblicz x.",
   "fields": [
    {
     "label": "x",
     "ans": 11,
     "show": "11",
     "why": [
      [
       21,
       "21 to suma znanych liczb. x = 4 · 8 − 21."
      ],
      [
       8,
       "Średnia to 8, ale x nie musi być równe średniej."
      ]
     ]
    }
   ],
   "sol": [
    "Suma czterech liczb: [[4 · 8 = 32]].",
    "[[x = 32 − (4 + 10 + 7) = 11]]."
   ],
   "answer": "x = 11.",
   "tip": "Suma = średnia · liczba danych.",
   "check": [
    "4*8 - (4 + 10 + 7) == 11"
   ],
   "twin": {
    "type": "fields",
    "q": "Średnia arytmetyczna liczb 3, 9, x, 12 i 5 jest równa 7. Oblicz x.",
    "fields": [
     {
      "label": "x",
      "ans": 6,
      "show": "6",
      "why": [
       [
        29,
        "29 to suma znanych liczb."
       ]
      ]
     }
    ],
    "sol": [
     "[[5 · 7 − (3 + 9 + 12 + 5) = 35 − 29 = 6]]."
    ],
    "answer": "x = 6.",
    "tip": "Pięć liczb.",
    "check": [
     "5*7 - 29 == 6"
    ]
   }
  },
  {
   "id": "p5",
   "level": 1,
   "skills": [
    "F2"
   ],
   "type": "pair",
   "q": "Średnia arytmetyczna trzech liczb jest równa 12, a średnia arytmetyczna dwóch innych liczb jest równa 7. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "Suma wszystkich pięciu liczb jest równa",
     "opts": {
      "A": "50",
      "B": "19"
     },
     "ok": "A"
    },
    {
     "label": "Średnia arytmetyczna wszystkich pięciu liczb jest równa",
     "opts": {
      "C": "9,5",
      "D": "10"
     },
     "ok": "D"
    }
   ],
   "sol": [
    "[[3 · 12 + 2 · 7 = 36 + 14 = 50]]. 19 to suma średnich.",
    "[[50 : 5 = 10]]. 9,5 to średnia ze średnich."
   ],
   "answer": "A i D.",
   "tip": "Licz sumy.",
   "check": [
    "3*12 + 2*7 == 50",
    "50/5 == 10"
   ],
   "twin": {
    "type": "pair",
    "q": "Średnia arytmetyczna czterech liczb jest równa 9, a średnia arytmetyczna sześciu innych liczb jest równa 4. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Suma wszystkich dziesięciu liczb jest równa",
      "opts": {
       "A": "13",
       "B": "60"
      },
      "ok": "B"
     },
     {
      "label": "Średnia arytmetyczna wszystkich dziesięciu liczb jest równa",
      "opts": {
       "C": "6",
       "D": "6,5"
      },
      "ok": "C"
     }
    ],
    "sol": [
     "[[36 + 24 = 60]].",
     "[[60 : 10 = 6]]. 6,5 to średnia ze średnich."
    ],
    "answer": "B i C.",
    "tip": "Suma = średnia · liczba danych.",
    "check": [
     "4*9 + 6*4 == 60"
    ]
   }
  },
  {
   "id": "p6",
   "level": 1,
   "skills": [
    "F3"
   ],
   "type": "fields",
   "q": "Ile jest liczb trzycyfrowych?",
   "fields": [
    {
     "label": "Liczb",
     "ans": 900,
     "show": "900",
     "why": [
      [
       899,
       "999 − 100 = 899 to o jeden za mało."
      ],
      [
       999,
       "Liczby od 1 do 99 nie są trzycyfrowe."
      ]
     ]
    }
   ],
   "sol": [
    "Od 100 do 999: [[999 − 100 + 1 = 900]]."
   ],
   "answer": "900.",
   "tip": "b − a + 1.",
   "check": [
    "999 - 100 + 1 == 900"
   ],
   "twin": {
    "type": "fields",
    "q": "Ile jest nieparzystych liczb dwucyfrowych?",
    "fields": [
     {
      "label": "Liczb",
      "ans": 45,
      "show": "45",
      "why": [
       [
        90,
        "90 to wszystkie liczby dwucyfrowe. Nieparzysta jest co druga."
       ],
       [
        44,
        "(99 − 11) : 2 = 44 to liczba odstępów."
       ]
      ]
     }
    ],
    "sol": [
     "11, 13, …, 99: [[(99 − 11) : 2 + 1 = 45]]."
    ],
    "answer": "45.",
    "tip": "Połowa z 90.",
    "check": [
     "len(range(11, 100, 2)) == 45"
    ]
   }
  },
  {
   "id": "p7",
   "level": 1,
   "skills": [
    "F3"
   ],
   "type": "abcd",
   "q": "Ile jest liczb dwucyfrowych, których cyfra jedności jest równa 7?",
   "opts": [
    "10",
    "8",
    "90",
    "9"
   ],
   "ok": 3,
   "why": {
    "A": "Liczba 7 nie jest dwucyfrowa.",
    "B": "Pominąłeś 17 albo 97.",
    "C": "90 to wszystkie liczby dwucyfrowe."
   },
   "sol": [
    "[[17, 27, …, 97]]: 9 liczb."
   ],
   "answer": "D, 9.",
   "tip": "Cyfra dziesiątek od 1 do 9.",
   "check": [
    "len(range(17, 100, 10)) == 9"
   ],
   "twin": {
    "type": "abcd",
    "q": "Ile jest liczb dwucyfrowych, w których cyfra dziesiątek jest równa cyfrze jedności?",
    "opts": [
     "10",
     "9",
     "11",
     "90"
    ],
    "ok": 1,
    "why": {
     "A": "00 nie jest liczbą dwucyfrową.",
     "C": "11 to pierwsza taka liczba, a nie ich liczba.",
     "D": "90 to wszystkie liczby dwucyfrowe."
    },
    "sol": [
     "[[11, 22, …, 99]]: 9 liczb."
    ],
    "answer": "B, 9.",
    "tip": "Wypisz je.",
    "check": [
     "len(range(11, 100, 11)) == 9"
    ]
   }
  },
  {
   "id": "p8",
   "level": 1,
   "skills": [
    "F4"
   ],
   "type": "fields",
   "note": "Wynik wpisz jako ułamek, np. 3/8.",
   "q": "Rzucamy raz kostką sześcienną. Oblicz prawdopodobieństwo, że wypadnie liczba oczek większa od 4.",
   "fields": [
    {
     "label": "P",
     "ans": 0.3333333333333333,
     "show": "1/3",
     "why": [
      [
       0.5,
       "Większa od 4 to 5 i 6, a nie 4, 5 i 6."
      ]
     ]
    }
   ],
   "sol": [
    "[[5 i 6]]: [[P = 2/6 = 1/3]]."
   ],
   "answer": "1/3.",
   "tip": "„Większa od 4” nie obejmuje 4.",
   "check": [
    "F(2, 6) == F(1, 3)"
   ],
   "twin": {
    "type": "fields",
    "note": "Wynik wpisz jako ułamek, np. 3/8.",
    "q": "Rzucamy raz kostką czworościenną o ścianach ponumerowanych od 1 do 4. Oblicz prawdopodobieństwo, że wypadnie liczba nieparzysta.",
    "fields": [
     {
      "label": "P",
      "ans": 0.5,
      "show": "1/2",
      "why": [
       [
        0.3333333333333333,
        "Kostka ma 4 ściany, więc dzielisz przez 4."
       ]
      ]
     }
    ],
    "sol": [
     "[[1 i 3]]: [[P = 2/4 = 1/2]]."
    ],
    "answer": "1/2.",
    "tip": "Wszystkich wyników: 4.",
    "check": [
     "F(2, 4) == F(1, 2)"
    ]
   }
  },
  {
   "id": "p9",
   "level": 1,
   "skills": [
    "F4"
   ],
   "type": "abcd",
   "vis": {
    "type": "urn",
    "balls": [
     [
      "w",
      3
     ],
     [
      "k",
      5
     ],
     [
      "g",
      4
     ]
    ],
    "alt": "Pudełko: 3 kule białe, 5 czarnych i 4 zielone",
    "per": 6
   },
   "q": "W pudełku są 3 kule białe, 5 czarnych i 4 zielone. Prawdopodobieństwo, że wylosowana kula nie będzie czarna, jest równe:",
   "opts": [
    "5/12",
    "7/12",
    "2/3",
    "1/3"
   ],
   "ok": 1,
   "why": {
    "A": "5/12 to szansa na kulę czarną.",
    "C": "„Nie czarna” to 2 kolory z 3, ale liczy się liczba kul, a nie kolorów.",
    "D": "Liczysz kolory, a nie kule."
   },
   "sol": [
    "Nie czarne: [[3 + 4 = 7]] kul z [[12]].",
    "[[P = 7/12]]."
   ],
   "answer": "B, 7/12.",
   "tip": "Albo 1 − 5/12.",
   "check": [
    "1 - F(5, 12) == F(7, 12)"
   ],
   "twin": {
    "type": "abcd",
    "vis": {
     "type": "urn",
     "balls": [
      [
       "r",
       2
      ],
      [
       "b",
       6
      ],
      [
       "y",
       4
      ]
     ],
     "alt": "Pudełko: 2 kule czerwone, 6 niebieskich i 4 żółte",
     "per": 6
    },
    "q": "W pudełku są 2 kule czerwone, 6 niebieskich i 4 żółte. Prawdopodobieństwo, że wylosowana kula nie będzie niebieska, jest równe:",
    "opts": [
     "2/3",
     "1/3",
     "1/6",
     "1/2"
    ],
    "ok": 3,
    "why": {
     "A": "Liczysz kolory, a nie kule.",
     "B": "1/3 to szansa na kulę żółtą.",
     "C": "1/6 to szansa na kulę czerwoną."
    },
    "sol": [
     "[[2 + 4 = 6]] z [[12]]: [[P = 1/2]]."
    ],
    "answer": "D, 1/2.",
    "tip": "Nie niebieska: czerwona albo żółta.",
    "check": [
     "F(6, 12) == F(1, 2)"
    ]
   }
  },
  {
   "id": "p10",
   "level": 1,
   "skills": [
    "F3",
    "F4"
   ],
   "type": "fields",
   "note": "Wynik wpisz jako ułamek, np. 3/8.",
   "q": "Losujemy jedną liczbę spośród liczb od 20 do 39. Oblicz prawdopodobieństwo, że będzie podzielna przez 3.",
   "fields": [
    {
     "label": "P",
     "ans": 0.35,
     "show": "7/20",
     "why": [
      [
       0.3684210526315789,
       "Od 20 do 39 jest 39 − 20 + 1 = 20 liczb, a nie 19."
      ],
      [
       0.3333333333333333,
       "Wśród tych 20 liczb przez 3 dzieli się dokładnie 7."
      ]
     ]
    }
   ],
   "sol": [
    "Wszystkich: [[20]]. Podzielne przez 3: [[21, 24, 27, 30, 33, 36, 39]], czyli 7.",
    "[[P = 7/20]]."
   ],
   "answer": "7/20.",
   "tip": "Wypisz wielokrotności 3 od 21.",
   "check": [
    "len([n for n in range(20, 40) if n % 3 == 0]) == 7"
   ],
   "twin": {
    "type": "fields",
    "note": "Wynik wpisz jako ułamek, np. 3/8.",
    "q": "Losujemy jedną liczbę spośród liczb od 11 do 30. Oblicz prawdopodobieństwo, że będzie podzielna przez 4.",
    "fields": [
     {
      "label": "P",
      "ans": 0.25,
      "show": "1/4",
      "why": [
       [
        0.2631578947368421,
        "Od 11 do 30 jest 20 liczb."
       ]
      ]
     }
    ],
    "sol": [
     "[[12, 16, 20, 24, 28]]: 5 z 20, [[P = 1/4]]."
    ],
    "answer": "1/4.",
    "tip": "b − a + 1.",
    "check": [
     "len([n for n in range(11, 31) if n % 4 == 0]) == 5"
    ]
   }
  },
  {
   "id": "p11",
   "level": 1,
   "skills": [
    "F1",
    "F4"
   ],
   "type": "pf",
   "chart": {
    "kind": "cols",
    "min": 0,
    "max": 16,
    "step": 2,
    "ylabel": "samochody",
    "rows": [
     [
      "biały",
      12
     ],
     [
      "czarny",
      8
     ],
     [
      "srebrny",
      15
     ],
     [
      "czerwony",
      5
     ]
    ],
    "alt": "Diagram słupkowy: białe 12, czarne 8, srebrne 15, czerwone 5 samochodów",
    "vals": true
   },
   "q": "Diagram pokazuje kolory samochodów na parkingu. Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Srebrnych samochodów jest o 25% więcej niż białych.",
     "ok": "P"
    },
    {
     "t": "Prawdopodobieństwo, że losowo wybrany samochód jest czerwony, jest równe 1/5.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[15 − 12 = 3]], [[3 : 12 = 25%]]. Prawda.",
    "<b>Zdanie 2.</b> Wszystkich [[40]], czerwonych 5: [[5/40 = 1/8]]. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Prawdopodobieństwo: czerwone przez wszystkie samochody na parkingu.",
   "check": [
    "F(15 - 12, 12) == F(1, 4)",
    "12 + 8 + 15 + 5 == 40"
   ],
   "twin": {
    "type": "pf",
    "chart": {
     "kind": "cols",
     "min": 0,
     "max": 16,
     "step": 2,
     "ylabel": "samochody",
     "rows": [
      [
       "biały",
       10
      ],
      [
       "czarny",
       14
      ],
      [
       "srebrny",
       12
      ],
      [
       "czerwony",
       4
      ]
     ],
     "alt": "Diagram słupkowy: białe 10, czarne 14, srebrne 12, czerwone 4 samochody",
     "vals": true
    },
    "q": "Diagram pokazuje kolory samochodów na parkingu. Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Czarnych samochodów jest o 40% więcej niż białych.",
      "ok": "P"
     },
     {
      "t": "Prawdopodobieństwo wylosowania samochodu srebrnego jest równe 12/30.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[4 : 10 = 40%]]. Prawda.",
     "<b>Zdanie 2.</b> Wszystkich jest [[40]]: [[12/40 = 3/10]]. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Policz wszystkie samochody.",
    "check": [
     "10 + 14 + 12 + 4 == 40",
     "F(12, 40) == F(3, 10)"
    ]
   }
  },
  {
   "id": "p12",
   "level": 1,
   "skills": [
    "F2",
    "F4"
   ],
   "type": "abcd",
   "q": "Średnia arytmetyczna liczb 1, 3, 5, 7 i x jest równa 5. Losujemy jedną z tych pięciu liczb. Prawdopodobieństwo, że wylosujemy liczbę większą od 5, jest równe:",
   "opts": [
    "2/5",
    "3/5",
    "1/2",
    "1/5"
   ],
   "ok": 0,
   "why": {
    "B": "3/5 liczy też 5, a 5 nie jest większe od 5.",
    "C": "Liczb jest pięć, razem z x.",
    "D": "Większe od 5 są dwie liczby: 7 i x = 9."
   },
   "sol": [
    "[[x = 5 · 5 − (1 + 3 + 5 + 7) = 9]].",
    "Większe od 5: [[7 i 9]]. [[P = 2/5]]."
   ],
   "answer": "A, 2/5.",
   "tip": "Najpierw x.",
   "check": [
    "25 - 16 == 9"
   ],
   "twin": {
    "type": "abcd",
    "q": "Średnia arytmetyczna liczb 2, 4, 6 i x jest równa 5. Losujemy jedną z tych czterech liczb. Prawdopodobieństwo, że wylosujemy liczbę większą od 5, jest równe:",
    "opts": [
     "1/4",
     "3/4",
     "1/2",
     "1/3"
    ],
    "ok": 2,
    "why": {
     "A": "Pominąłeś x = 8, które też jest większe od 5.",
     "B": "4 nie jest większe od 5.",
     "D": "Liczb jest cztery razem z x."
    },
    "sol": [
     "[[x = 20 − 12 = 8]].",
     "Większe od 5: [[6 i 8]], [[P = 2/4 = 1/2]]."
    ],
    "answer": "C, 1/2.",
    "tip": "Suma = średnia · liczba danych.",
    "check": [
     "4*5 - 12 == 8"
    ]
   }
  },
  {
   "id": "q1",
   "level": 2,
   "skills": [
    "F1",
    "F2"
   ],
   "type": "self",
   "chart": {
    "kind": "cols",
    "min": 0,
    "max": 8,
    "step": 1,
    "ylabel": "książki",
    "rows": [
     [
      "Ala",
      4
     ],
     [
      "Bartek",
      7
     ],
     [
      "Celina",
      2
     ],
     [
      "Darek",
      5
     ]
    ],
    "alt": "Diagram słupkowy: Ala 4, Bartek 7, Celina 2, Darek 5 książek"
   },
   "q": "Diagram pokazuje, ile książek przeczytało w wakacje czworo uczniów. Ewa też czytała, ale jej wyniku nie ma na diagramie. Średnia liczba książek przeczytanych przez całą piątkę to 5. Ile książek przeczytała Ewa? O ile procent więcej książek przeczytał Bartek niż Darek? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Odczytałeś wartości 4, 7, 2, 5 i obliczyłeś ich sumę: 18.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś liczbę książek Ewy: 5 · 5 − 18 = 7.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś: (7 − 5) : 5 = 0,4, czyli o 40%.",
     "pts": 1
    }
   ],
   "sol": [
    "Suma czterech: [[4 + 7 + 2 + 5 = 18]].",
    "Ewa: [[5 · 5 − 18 = 7]].",
    "Bartek i Darek: [[2 : 5 = 0,4 = 40%]]."
   ],
   "answer": "Ewa przeczytała 7 książek, Bartek o 40% więcej niż Darek.",
   "tip": "Procent liczysz od Darka, bo z nim porównujesz.",
   "check": [
    "4 + 7 + 2 + 5 == 18",
    "25 - 18 == 7",
    "F(7 - 5, 5) == F('0.4')"
   ],
   "twin": {
    "type": "self",
    "chart": {
     "kind": "cols",
     "min": 0,
     "max": 10,
     "step": 1,
     "ylabel": "książki",
     "rows": [
      [
       "Ala",
       6
      ],
      [
       "Bartek",
       3
      ],
      [
       "Celina",
       8
      ],
      [
       "Darek",
       4
      ]
     ],
     "alt": "Diagram słupkowy: Ala 6, Bartek 3, Celina 8, Darek 4 książki"
    },
    "q": "Diagram pokazuje, ile książek przeczytało czworo uczniów. Średnia dla całej piątki (z Ewą) to 6. Ile książek przeczytała Ewa? O ile procent więcej książek przeczytała Celina niż Darek? Zapisz obliczenia.",
    "criteria": [
     {
      "t": "Suma czterech: 21.",
      "pts": 1
     },
     {
      "t": "Ewa: 30 − 21 = 9.",
      "pts": 1
     },
     {
      "t": "Celina: o 100% więcej niż Darek.",
      "pts": 1
     }
    ],
    "sol": [
     "[[6 + 3 + 8 + 4 = 21]].",
     "[[5 · 6 − 21 = 9]].",
     "[[(8 − 4) : 4 = 1 = 100%]]."
    ],
    "answer": "9 książek, o 100%.",
    "tip": "Dwa razy więcej to o 100% więcej.",
    "check": [
     "5*6 - 21 == 9",
     "F(8 - 4, 4) == 1"
    ]
   }
  },
  {
   "id": "q2",
   "level": 2,
   "skills": [
    "F3",
    "F4"
   ],
   "type": "self",
   "q": "Z cyfr 1, 2, 3 i 4 tworzymy wszystkie liczby dwucyfrowe o różnych cyfrach. Losujemy jedną z nich. Oblicz prawdopodobieństwo, że wylosowana liczba jest parzysta i większa od 20. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Wypisałeś 12 liczb: 12, 13, 14, 21, 23, 24, 31, 32, 34, 41, 42, 43.",
     "pts": 1
    },
    {
     "t": "Wskazałeś sprzyjające: 24, 32, 34, 42.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś P = 4/12 = 1/3.",
     "pts": 1
    }
   ],
   "sol": [
    "Wszystkie: [[12, 13, 14, 21, 23, 24, 31, 32, 34, 41, 42, 43]] (12 liczb).",
    "Parzyste i większe od 20: [[24, 32, 34, 42]].",
    "[[P = 4/12 = 1/3]]."
   ],
   "answer": "1/3.",
   "tip": "14 i 12 są parzyste, ale nie są większe od 20.",
   "check": [
    "len([a*10 + b for a in (1, 2, 3, 4) for b in (1, 2, 3, 4) if a != b]) == 12",
    "len([n for n in (24, 32, 34, 42) if n % 2 == 0 and n > 20]) == 4"
   ],
   "twin": {
    "type": "self",
    "q": "Z cyfr 1, 2, 3 i 4 tworzymy wszystkie liczby dwucyfrowe o różnych cyfrach. Losujemy jedną z nich. Oblicz prawdopodobieństwo, że wylosowana liczba jest nieparzysta i mniejsza od 30. Zapisz obliczenia.",
    "criteria": [
     {
      "t": "12 liczb.",
      "pts": 1
     },
     {
      "t": "Sprzyjające: 13, 21, 23.",
      "pts": 1
     },
     {
      "t": "P = 3/12 = 1/4.",
      "pts": 1
     }
    ],
    "sol": [
     "12 liczb.",
     "[[13, 21, 23]].",
     "[[P = 3/12 = 1/4]]."
    ],
    "answer": "1/4.",
    "tip": "Nieparzyste kończą się na 1 albo 3.",
    "check": [
     "F(3, 12) == F(1, 4)"
    ]
   }
  },
  {
   "id": "q3",
   "level": 2,
   "skills": [
    "F2"
   ],
   "type": "self",
   "q": "Średnia wieku trzech braci to 12 lat. Najstarszy ma 16 lat, a najmłodszy 8 lat. Ile lat ma średni brat? Jaka będzie średnia wieku braci za 3 lata? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczyłeś wiek średniego brata: 3 · 12 − 16 − 8 = 12 lat.",
     "pts": 1
    },
    {
     "t": "Podałeś średnią za 3 lata: 15 lat (każdy jest starszy o 3, więc średnia rośnie o 3).",
     "pts": 1
    }
   ],
   "sol": [
    "Suma: [[3 · 12 = 36]], średni brat: [[36 − 24 = 12]] lat.",
    "Za 3 lata suma wzrośnie o 9: [[45 : 3 = 15]] lat."
   ],
   "answer": "12 lat, średnia za 3 lata: 15 lat.",
   "tip": "Gdy każda liczba rośnie o 3, średnia też rośnie o 3.",
   "check": [
    "3*12 - 16 - 8 == 12",
    "(36 + 9)/3 == 15"
   ],
   "twin": {
    "type": "self",
    "q": "Średnia masa czterech paczek to 5 kg. Trzy paczki ważą 3 kg, 6 kg i 4 kg. Ile waży czwarta? Jaka będzie średnia masa, gdy do każdej paczki dołożymy 0,5 kg? Zapisz obliczenia.",
    "criteria": [
     {
      "t": "Czwarta paczka: 20 − 13 = 7 kg.",
      "pts": 1
     },
     {
      "t": "Nowa średnia: 5,5 kg.",
      "pts": 1
     }
    ],
    "sol": [
     "[[4 · 5 − 13 = 7]] kg.",
     "Każda o 0,5 kg więcej: średnia [[5,5]] kg."
    ],
    "answer": "7 kg i 5,5 kg.",
    "tip": "Średnia rośnie o tyle, o ile każda liczba.",
    "check": [
     "4*5 - 13 == 7"
    ]
   }
  },
  {
   "id": "q4",
   "level": 2,
   "skills": [
    "F4"
   ],
   "type": "self",
   "q": "W pudełku są kule białe i czarne. Prawdopodobieństwo wylosowania kuli białej jest równe 3/7. Po dołożeniu 4 kul białych prawdopodobieństwo to wzrosło do 7/11. Ile kul było w pudełku na początku? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Zauważyłeś, że liczba kul czarnych się nie zmienia: na początku to 4/7 wszystkich, a potem 4/11 wszystkich.",
     "pts": 1
    },
    {
     "t": "Ułożyłeś równanie, np. dla czarnych c: 7c/4 + 4 = 11c/4, albo dla wszystkich n: 4n/7 = 4(n + 4)/11.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś: 4 czarne, na początku 7 kul (3 białe i 4 czarne).",
     "pts": 1
    }
   ],
   "sol": [
    "Czarne: na początku [[1 − 3/7 = 4/7]] wszystkich, po dołożeniu [[1 − 7/11 = 4/11]] wszystkich.",
    "Jeśli czarnych jest c, to na początku wszystkich jest [[7c/4]], a potem [[11c/4]]. Różnica to dołożone kule: [[11c/4 − 7c/4 = c = 4]].",
    "Na początku: [[7 · 4 : 4 = 7]] kul (3 białe i 4 czarne). Sprawdzenie: potem 7 białych z 11."
   ],
   "answer": "7 kul.",
   "tip": "Rozumuj na kolorze, którego nie dokładano.",
   "check": [
    "1 - F(3, 7) == F(4, 7)",
    "F(3 + 4, 7 + 4) == F(7, 11)"
   ],
   "twin": {
    "type": "self",
    "q": "W pudełku są kule białe i czarne. Prawdopodobieństwo wylosowania kuli białej jest równe 1/3. Po dołożeniu 3 kul białych prawdopodobieństwo to wzrosło do 1/2. Ile kul było w pudełku na początku? Zapisz obliczenia.",
    "criteria": [
     {
      "t": "Czarne: 2/3 wszystkich na początku, 1/2 wszystkich potem.",
      "pts": 1
     },
     {
      "t": "Równanie, np. 2c − 3c/2 = 3.",
      "pts": 1
     },
     {
      "t": "6 czarnych, na początku 9 kul.",
      "pts": 1
     }
    ],
    "sol": [
     "Czarnych c: na początku wszystkich [[3c/2]], potem [[2c]].",
     "[[2c − 3c/2 = c/2 = 3]], [[c = 6]].",
     "Na początku [[9]] kul (3 białe, 6 czarnych). Potem 6 z 12 = 1/2."
    ],
    "answer": "9 kul.",
    "tip": "Sprawdź wynik na końcu.",
    "check": [
     "F(3, 9) == F(1, 3)",
     "F(3 + 3, 9 + 3) == F(1, 2)"
    ]
   }
  },
  {
   "id": "q5",
   "level": 2,
   "skills": [
    "F1"
   ],
   "type": "self",
   "q": "Sklep sprzedał w ciągu tygodnia 200 kg owoców: 90 kg jabłek, 50 kg gruszek, 40 kg śliwek, a resztę stanowiły wiśnie. Oblicz, jaki procent sprzedanych owoców stanowił każdy rodzaj, i kąty wycinków diagramu kołowego. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczyłeś masę wiśni (20 kg) i procenty: 45%, 25%, 20%, 10%.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś kąty: 162°, 90°, 72°, 36°.",
     "pts": 1
    }
   ],
   "sol": [
    "Wiśnie: [[200 − 90 − 50 − 40 = 20]] kg.",
    "Procenty: [[45%]], [[25%]], [[20%]], [[10%]].",
    "Kąty (1% = 3,6°): [[162°]], [[90°]], [[72°]], [[36°]]."
   ],
   "answer": "45%, 25%, 20%, 10%; kąty 162°, 90°, 72°, 36°.",
   "tip": "Sprawdź: 162 + 90 + 72 + 36 = 360.",
   "check": [
    "200 - 90 - 50 - 40 == 20",
    "45*F('3.6') == 162",
    "162 + 90 + 72 + 36 == 360"
   ],
   "twin": {
    "type": "self",
    "q": "W ankiecie wzięło udział 400 osób: 140 wybrało kino, 100 teatr, 120 koncert, a reszta muzeum. Oblicz procenty i kąty wycinków diagramu kołowego. Zapisz obliczenia.",
    "criteria": [
     {
      "t": "Muzeum: 40 osób. Procenty 35%, 25%, 30%, 10%.",
      "pts": 1
     },
     {
      "t": "Kąty: 126°, 90°, 108°, 36°.",
      "pts": 1
     }
    ],
    "sol": [
     "[[400 − 360 = 40]].",
     "[[35%, 25%, 30%, 10%]].",
     "[[126°, 90°, 108°, 36°]]."
    ],
    "answer": "35%, 25%, 30%, 10%; 126°, 90°, 108°, 36°.",
    "tip": "Razem 360°.",
    "check": [
     "126 + 90 + 108 + 36 == 360",
     "35*F('3.6') == 126"
    ]
   }
  },
  {
   "id": "q6",
   "level": 2,
   "skills": [
    "F3",
    "F4"
   ],
   "type": "self",
   "q": "Losujemy jedną liczbę spośród liczb od 1 do 100. Oblicz prawdopodobieństwo, że w jej zapisie występuje cyfra 7. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Policzyłeś liczby z cyfrą 7: 7, 17, …, 97 (10 liczb) i 70–79 (10 liczb), z 77 policzoną raz, czyli 19.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś P = 19/100.",
     "pts": 1
    }
   ],
   "sol": [
    "Siódemka na miejscu jedności: [[7, 17, 27, …, 97]], czyli 10 liczb.",
    "Siódemka na miejscu dziesiątek: [[70, 71, …, 79]], czyli 10 liczb. Liczba 77 jest w obu grupach: razem [[19]].",
    "[[P = 19/100]]."
   ],
   "answer": "19/100.",
   "tip": "Uważaj na 77: łatwo policzyć ją dwa razy.",
   "check": [
    "len([n for n in range(1, 101) if '7' in str(n)]) == 19"
   ],
   "twin": {
    "type": "self",
    "q": "Losujemy jedną liczbę spośród liczb od 1 do 100. Oblicz prawdopodobieństwo, że w jej zapisie występuje cyfra 0. Zapisz obliczenia.",
    "criteria": [
     {
      "t": "Liczby z zerem: 10, 20, …, 90 i 100, razem 10.",
      "pts": 1
     },
     {
      "t": "P = 10/100 = 1/10.",
      "pts": 1
     }
    ],
    "sol": [
     "[[10, 20, …, 90, 100]]: 10 liczb.",
     "[[P = 1/10]]."
    ],
    "answer": "1/10.",
    "tip": "100 ma dwa zera, ale to jedna liczba.",
    "check": [
     "len([n for n in range(1, 101) if '0' in str(n)]) == 10"
    ]
   }
  }
 ],
 "test": [
  {
   "id": "t1",
   "skills": [
    "F1"
   ],
   "type": "fields",
   "data": {
    "head": [
     "rok",
     "2022",
     "2023",
     "2024"
    ],
    "rows": [
     [
      "liczba mieszkańców",
      120,
      135,
      150
     ]
    ]
   },
   "q": "Tabela pokazuje liczbę mieszkańców bloku. O ile procent wzrosła liczba mieszkańców od 2022 do 2024 roku?",
   "fields": [
    {
     "label": "O ile %",
     "ans": 25,
     "show": "25%"
    }
   ],
   "sol": [
    "[[150 − 120 = 30]], [[30 : 120 = 0,25 = 25%]]."
   ],
   "answer": "O 25%.",
   "tip": "Porównujesz z rokiem 2022.",
   "check": [
    "F(30, 120) == F(1, 4)"
   ],
   "pts": 1
  },
  {
   "id": "t2",
   "skills": [
    "F1"
   ],
   "type": "abcd",
   "chart": {
    "kind": "cols",
    "min": 240,
    "max": 380,
    "step": 20,
    "ylabel": "sztuki",
    "rows": [
     [
      "2024 r.",
      300
     ],
     [
      "2025 r.",
      360
     ]
    ],
    "alt": "Diagram słupkowy z osią od 240: 2024 r. 300, 2025 r. 360 sztuk"
   },
   "q": "Diagram pokazuje sprzedaż rowerów w sklepie. O ile procent wzrosła sprzedaż w 2025 roku w porównaniu z 2024 rokiem?",
   "opts": [
    "100%",
    "60%",
    "20%",
    "ok. 16,7%"
   ],
   "ok": 2,
   "why": {
    "A": "Słupek jest dwa razy wyższy, ale oś zaczyna się od 240.",
    "B": "60 to wzrost w sztukach, a nie w procentach.",
    "D": "60 : 360 porównuje z rokiem 2025. Porównujesz z 2024: 60 : 300."
   },
   "sol": [
    "[[360 − 300 = 60]], [[60 : 300 = 0,2 = 20%]]."
   ],
   "answer": "C, 20%.",
   "tip": "Liczby z osi, nie wysokości słupków.",
   "check": [
    "F(60, 300) == F('0.2')",
    "(360 - 240) == 2*(300 - 240)"
   ],
   "pts": 1
  },
  {
   "id": "t3",
   "skills": [
    "F1"
   ],
   "type": "fields",
   "chart": {
    "kind": "pie",
    "rows": [
     [
      "A",
      35
     ],
     [
      "B",
      25
     ],
     [
      "C",
      25,
      false
     ],
     [
      "D",
      15
     ]
    ],
    "alt": "Diagram kołowy: A 35%, B 25%, C nieznane, D 15%"
   },
   "q": "W wyborach do samorządu szkolnego głosowało 800 uczniów. Diagram pokazuje, jaki procent głosów dostał każdy kandydat. Ile głosów dostał kandydat C?",
   "fields": [
    {
     "label": "Głosy",
     "ans": 200,
     "show": "200"
    }
   ],
   "sol": [
    "[[100% − 35% − 25% − 15% = 25%]].",
    "[[25% z 800 = 200]]."
   ],
   "answer": "200 głosów.",
   "tip": "Brakujący wycinek.",
   "check": [
    "100 - 35 - 25 - 15 == 25",
    "F(25, 100)*800 == 200"
   ],
   "pts": 1
  },
  {
   "id": "t4",
   "skills": [
    "F1"
   ],
   "type": "pf",
   "chart": {
    "kind": "line",
    "x": {
     "cats": [
      "pon.",
      "wt.",
      "śr.",
      "czw.",
      "pt.",
      "sob."
     ]
    },
    "y": {
     "min": 0,
     "max": 30,
     "step": 5,
     "label": "°C"
    },
    "pts": [
     [
      0,
      15
     ],
     [
      1,
      20
     ],
     [
      2,
      25
     ],
     [
      3,
      25
     ],
     [
      4,
      20
     ],
     [
      5,
      10
     ]
    ],
    "alt": "Wykres temperatury w południe: pon. 15, wt. 20, śr. 25, czw. 25, pt. 20, sob. 10 stopni"
   },
   "q": "Wykres pokazuje temperaturę w południe w kolejnych dniach. Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Najwyższa temperatura była w środę i w czwartek.",
     "ok": "P"
    },
    {
     "t": "Od środy do soboty temperatura cały czas spadała.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> Najwyżej są punkty ze środy i czwartku, po 25 °C. Prawda.",
    "<b>Zdanie 2.</b> Od środy do czwartku temperatura się nie zmieniła (pozioma linia), spadała dopiero od czwartku. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Poziomy odcinek to brak zmiany.",
   "check": [
    "max(15, 20, 25, 25, 20, 10) == 25"
   ],
   "pts": 1
  },
  {
   "id": "t5",
   "skills": [
    "F2"
   ],
   "type": "fields",
   "q": "Oblicz średnią arytmetyczną liczb: −2, 5, 0, 9, 3.",
   "fields": [
    {
     "label": "Średnia",
     "ans": 3,
     "show": "3"
    }
   ],
   "sol": [
    "Suma [[15]], średnia [[15 : 5 = 3]]."
   ],
   "answer": "3.",
   "tip": "Zero też się liczy.",
   "check": [
    "(-2 + 5 + 0 + 9 + 3)/5 == 3"
   ],
   "pts": 1
  },
  {
   "id": "t6",
   "skills": [
    "F2"
   ],
   "type": "abcd",
   "q": "Średnia arytmetyczna liczb x i y jest równa 7, a średnia arytmetyczna liczb x, y, z jest równa 10. Liczba z jest równa:",
   "opts": [
    "16",
    "13",
    "3",
    "23"
   ],
   "ok": 0,
   "why": {
    "B": "(7 + 13) : 2 = 10 to średnia ze średniej i z, a nie średnia trzech liczb.",
    "C": "10 − 7 = 3 to różnica średnich.",
    "D": "Suma x i y to 14, a nie 7."
   },
   "sol": [
    "[[z = 3 · 10 − 2 · 7 = 16]]."
   ],
   "answer": "A, 16.",
   "tip": "Sumy.",
   "check": [
    "3*10 - 2*7 == 16"
   ],
   "pts": 1
  },
  {
   "id": "t7",
   "skills": [
    "F3"
   ],
   "type": "fields",
   "q": "Ile jest liczb całkowitych od −10 do 25 (razem z −10 i 25)?",
   "fields": [
    {
     "label": "Liczb",
     "ans": 36,
     "show": "36"
    }
   ],
   "sol": [
    "[[25 − (−10) + 1 = 36]]."
   ],
   "answer": "36.",
   "tip": "Zero też jest liczbą całkowitą.",
   "check": [
    "25 + 10 + 1 == 36"
   ],
   "pts": 1
  },
  {
   "id": "t8",
   "skills": [
    "F3"
   ],
   "type": "abcd",
   "q": "Na ile sposobów można wybrać dwie osoby spośród czterech, jeśli kolejność nie ma znaczenia?",
   "opts": [
    "12",
    "4",
    "16",
    "6"
   ],
   "ok": 3,
   "why": {
    "A": "12 liczy każdą parę dwa razy (A–B i B–A).",
    "B": "4 to liczba osób.",
    "C": "4 · 4 liczy też pary osoby z samą sobą."
   },
   "sol": [
    "[[AB, AC, AD, BC, BD, CD]]: 6."
   ],
   "answer": "D, 6.",
   "tip": "Wypisz pary.",
   "check": [
    "3 + 2 + 1 == 6"
   ],
   "pts": 1
  },
  {
   "id": "t9",
   "skills": [
    "F4"
   ],
   "type": "fields",
   "note": "Wynik wpisz jako ułamek, np. 3/8.",
   "q": "Rzucamy dwiema monetami. Oblicz prawdopodobieństwo, że wypadnie co najmniej jedna reszka.",
   "fields": [
    {
     "label": "P",
     "ans": 0.75,
     "show": "3/4"
    }
   ],
   "sol": [
    "[[OR, RO, RR]] z 4 wyników: [[P = 3/4]]."
   ],
   "answer": "3/4.",
   "tip": "Albo 1 − P(OO).",
   "check": [
    "1 - F(1, 4) == F(3, 4)"
   ],
   "pts": 1
  },
  {
   "id": "t10",
   "skills": [
    "F4"
   ],
   "type": "abcd",
   "q": "W pudełku są 4 kule czerwone, 6 zielonych i 10 niebieskich. Prawdopodobieństwo wylosowania kuli czerwonej jest równe:",
   "opts": [
    "1/3",
    "1/5",
    "4/10",
    "4"
   ],
   "ok": 1,
   "why": {
    "A": "Kolory są trzy, ale kul jest 20.",
    "C": "10 to kule niebieskie. Dzielisz przez liczbę wszystkich kul: 20.",
    "D": "4 to liczba kul czerwonych, a prawdopodobieństwo nie może być większe od 1."
   },
   "sol": [
    "[[4/20 = 1/5]]."
   ],
   "answer": "B, 1/5.",
   "tip": "Wszystkich kul: 20.",
   "check": [
    "F(4, 20) == F(1, 5)"
   ],
   "pts": 1
  },
  {
   "id": "t11",
   "skills": [
    "F3",
    "F4"
   ],
   "type": "fields",
   "note": "Wynik wpisz jako ułamek, np. 3/8.",
   "q": "Losujemy jedną liczbę spośród liczb od 1 do 50. Oblicz prawdopodobieństwo, że będzie podzielna przez 8.",
   "fields": [
    {
     "label": "P",
     "ans": 0.12,
     "show": "3/25"
    }
   ],
   "sol": [
    "[[8, 16, 24, 32, 40, 48]]: 6 liczb.",
    "[[P = 6/50 = 3/25]]."
   ],
   "answer": "3/25.",
   "tip": "50 : 8 = 6 reszty 2.",
   "check": [
    "len(range(8, 51, 8)) == 6",
    "F(6, 50) == F(3, 25)"
   ],
   "pts": 1
  },
  {
   "id": "t12",
   "skills": [
    "F4"
   ],
   "type": "pair",
   "q": "W pudełku są tylko kule białe i czarne. Kul białych jest 6, a prawdopodobieństwo wylosowania kuli białej jest równe 2/5. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "Kul czarnych jest",
     "opts": {
      "A": "9",
      "B": "15"
     },
     "ok": "A"
    },
    {
     "label": "Po wyjęciu 3 kul czarnych prawdopodobieństwo wylosowania kuli białej będzie równe",
     "opts": {
      "C": "1/2",
      "D": "2/3"
     },
     "ok": "C"
    }
   ],
   "sol": [
    "Białe to 2/5 wszystkich: 1/5 to [[3]], wszystkich [[15]], czarnych [[9]]. 15 to wszystkie kule.",
    "Po wyjęciu: 6 białych i 6 czarnych, [[P = 6/12 = 1/2]]."
   ],
   "answer": "A i C.",
   "tip": "Po wyjęciu kul policz wszystkie od nowa.",
   "check": [
    "F(6, 15) == F(2, 5)",
    "F(6, 12) == F(1, 2)"
   ],
   "pts": 1
  },
  {
   "id": "t13",
   "skills": [
    "F1",
    "F2"
   ],
   "type": "self",
   "chart": {
    "kind": "cols",
    "min": 0,
    "max": 24,
    "step": 3,
    "ylabel": "punkty",
    "rows": [
     [
      "I",
      12
     ],
     [
      "II",
      18
     ],
     [
      "III",
      9
     ],
     [
      "IV",
      15
     ],
     [
      "V",
      21
     ]
    ],
    "alt": "Diagram słupkowy: mecz I 12, II 18, III 9, IV 15, V 21 punktów"
   },
   "q": "Diagram pokazuje, ile punktów zdobyła drużyna w pięciu meczach. Oblicz średnią liczbę punktów na mecz. Ile punktów drużyna musi zdobyć w szóstym meczu, żeby średnia wzrosła o 1? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Odczytałeś wyniki i obliczyłeś sumę: 12 + 18 + 9 + 15 + 21 = 75.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś średnią: 75 : 5 = 15.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś wynik szóstego meczu: 6 · 16 − 75 = 21 punktów.",
     "pts": 1
    }
   ],
   "sol": [
    "Suma: [[75]] punktów, średnia [[15]].",
    "Nowa średnia 16, suma sześciu meczów [[6 · 16 = 96]].",
    "Szósty mecz: [[96 − 75 = 21]] punktów."
   ],
   "answer": "Średnia 15, w szóstym meczu 21 punktów.",
   "tip": "Linie co 3.",
   "check": [
    "12 + 18 + 9 + 15 + 21 == 75",
    "6*16 - 75 == 21"
   ],
   "pts": 3
  },
  {
   "id": "t14",
   "skills": [
    "F3",
    "F4"
   ],
   "type": "self",
   "q": "Z cyfr 0, 2, 5 i 7 tworzymy wszystkie liczby dwucyfrowe o różnych cyfrach. Losujemy jedną z nich. Oblicz prawdopodobieństwo, że wylosowana liczba jest podzielna przez 5. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Wypisałeś 9 liczb: 20, 25, 27, 50, 52, 57, 70, 72, 75 (bez zera na początku).",
     "pts": 1
    },
    {
     "t": "Wskazałeś 5 liczb podzielnych przez 5: 20, 25, 50, 70, 75.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś P = 5/9.",
     "pts": 1
    }
   ],
   "sol": [
    "Liczby: [[20, 25, 27, 50, 52, 57, 70, 72, 75]].",
    "Podzielne przez 5 (kończą się na 0 lub 5): [[20, 25, 50, 70, 75]].",
    "[[P = 5/9]]."
   ],
   "answer": "5/9.",
   "tip": "Zero nie stoi na początku.",
   "check": [
    "len([a*10 + b for a in (2, 5, 7) for b in (0, 2, 5, 7) if a != b]) == 9",
    "len([n for n in (20, 25, 27, 50, 52, 57, 70, 72, 75) if n % 5 == 0]) == 5"
   ],
   "pts": 3
  },
  {
   "id": "t15",
   "skills": [
    "F4"
   ],
   "type": "self",
   "q": "W pudełku jest 20 kul czerwonych i zielonych. Prawdopodobieństwo wylosowania kuli czerwonej jest równe 3/4. Ile kul zielonych trzeba dołożyć, żeby to prawdopodobieństwo było równe 3/5? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczyłeś: 15 kul czerwonych i 5 zielonych.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś: czerwone to 3/5 wszystkich, więc wszystkich ma być 25; trzeba dołożyć 5 zielonych.",
     "pts": 1
    }
   ],
   "sol": [
    "Czerwone: [[3/4 · 20 = 15]], zielone [[5]].",
    "Czerwonych się nie dokłada: 15 to 3/5 wszystkich, więc wszystkich [[25]]. Dołożyć [[25 − 20 = 5]] zielonych."
   ],
   "answer": "5 kul zielonych.",
   "tip": "Rozumuj na kolorze, który się nie zmienia.",
   "check": [
    "F(3, 4)*20 == 15",
    "F(15, 25) == F(3, 5)"
   ],
   "pts": 2
  }
 ],
 "test_minutes": 60,
 "pass": 17,
 "dzial": "Dział 4: Dane i prawdopodobieństwo"
};
