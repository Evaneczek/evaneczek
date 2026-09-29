/* Wygenerowane przez zbuduj.py z tresc/dane.py. Nie edytuj ręcznie. */
window.TEMAT = {
 "slug": "dane",
 "title": "Tabele, diagramy i średnia",
 "sign": "śr.",
 "lead": "Tabele, diagramy słupkowe i kołowe, wykresy i średnia arytmetyczna. Na egzaminie w 2025 i w 2026 roku pierwsze zadanie arkusza było z diagramem, a średnia pojawiła się w obu arkuszach.",
 "goals": {
  "learn": "7 umiejętności: odczytywanie tabel, diagramów słupkowych i kołowych oraz wykresów, tworzenie diagramów, średnia arytmetyczna i zadania ze średnią „w drugą stronę”.",
  "prereq": "Procenty (Dział 1) i liczby ujemne. Rozgrzewka na początku to sprawdzi.",
  "goal": "Minimum 12 z 14 punktów w teście na koniec tematu."
 },
 "skills": {
  "D1": "Odczytywanie danych z tabel",
  "D2": "Diagramy słupkowe",
  "D3": "Diagramy kołowe",
  "D4": "Wykresy w układzie współrzędnych",
  "D5": "Tworzenie diagramów",
  "D6": "Średnia arytmetyczna",
  "D7": "Średnia: suma i brakująca liczba"
 },
 "lessons": [
  {
   "title": "Tabela: wiersze, kolumny i sumy",
   "skills": [
    "D1"
   ],
   "intro": "Tabelę czyta się jak mapę: szukasz wiersza i kolumny, a liczba jest na ich przecięciu. Zanim zaczniesz liczyć, przeczytaj nagłówki i jednostki.",
   "rule": {
    "t": "Najpierw znajdź właściwy wiersz i kolumnę, sprawdź jednostkę, a dopiero potem licz.",
    "f": [
     "łącznie → dodajesz",
     "o ile więcej → odejmujesz",
     "ile razy więcej → dzielisz",
     "jaki procent → część : całość · 100%"
    ],
    "e": "Uważaj na słowa: „co najmniej 4” to 4, 5 i 6, a „więcej niż 4” to tylko 5 i 6."
   },
   "visual": {
    "type": "table",
    "head": [
     "ocena",
     "1",
     "2",
     "3",
     "4",
     "5",
     "6"
    ],
    "rows": [
     [
      "liczba uczniów",
      1,
      3,
      8,
      7,
      4,
      2
     ]
    ],
    "caption": "Oceny ze sprawdzianu w klasie 8b"
   },
   "example": {
    "q": "Tabela pokazuje oceny ze sprawdzianu w klasie 8b. Ilu uczniów pisało sprawdzian? Ilu dostało ocenę co najmniej 4? Jaki to procent klasy?",
    "steps": [
     "Wszyscy uczniowie: 1 + 3 + 8 + 7 + 4 + 2 = 25.",
     "Co najmniej 4, czyli oceny 4, 5 i 6: 7 + 4 + 2 = 13 uczniów.",
     "Część przez całość: 13 : 25 = 0,52, czyli 52%."
    ],
    "result": "Sprawdzian pisało 25 uczniów, 13 z nich (52%) dostało co najmniej 4.",
    "tip": "Dolny wiersz tabeli mówi, ilu uczniów dostało daną ocenę. To nie są oceny, tylko liczby uczniów.",
    "check": [
     "1 + 3 + 8 + 7 + 4 + 2 == 25",
     "7 + 4 + 2 == 13",
     "F(13, 25) == F('0.52')"
    ]
   },
   "you": [
    {
     "id": "y1",
     "type": "fields",
     "data": {
      "head": [
       "dzień",
       "pon.",
       "wt.",
       "śr.",
       "czw.",
       "pt."
      ],
      "rows": [
       [
        "liczba książek",
        24,
        18,
        30,
        15,
        33
       ]
      ]
     },
     "q": "Tabela pokazuje, ile książek wypożyczono w bibliotece szkolnej. Ile książek wypożyczono łącznie? O ile więcej książek wypożyczono w piątek niż w czwartek?",
     "fields": [
      {
       "label": "Łącznie",
       "ans": 120,
       "show": "120"
      },
      {
       "label": "O ile więcej",
       "ans": 18,
       "show": "18",
       "why": [
        [
         2.2,
         "2,2 mówi, ile razy więcej (33 : 15). Pytanie „o ile” to różnica: 33 − 15."
        ]
       ]
      }
     ],
     "sol": [
      "Łącznie: [[24 + 18 + 30 + 15 + 33 = 120]].",
      "O ile więcej: [[33 − 15 = 18]]."
     ],
     "answer": "120 książek, o 18 więcej.",
     "tip": "„O ile” to odejmowanie, „ile razy” to dzielenie.",
     "check": [
      "24 + 18 + 30 + 15 + 33 == 120",
      "33 - 15 == 18"
     ]
    },
    {
     "id": "y1b",
     "type": "pf",
     "data": {
      "head": [
       "dzień",
       "pon.",
       "wt.",
       "śr.",
       "czw.",
       "pt."
      ],
      "rows": [
       [
        "liczba książek",
        24,
        18,
        30,
        15,
        33
       ]
      ]
     },
     "q": "Oceń prawdziwość zdań o danych z tabeli.",
     "items": [
      {
       "t": "W środę wypożyczono dwa razy więcej książek niż w czwartek.",
       "ok": "P"
      },
      {
       "t": "Najmniej książek wypożyczono we wtorek.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> [[30 = 2 · 15]]. Prawda.",
      "<b>Zdanie 2.</b> Najmniej było w czwartek: 15. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "Przy „najmniej” i „najwięcej” przejrzyj cały wiersz, a nie tylko pierwsze liczby.",
     "check": [
      "30 == 2*15",
      "min(24, 18, 30, 15, 33) == 15"
     ]
    }
   ]
  },
  {
   "title": "Diagram słupkowy: odczytywanie wartości",
   "skills": [
    "D2"
   ],
   "intro": "Na diagramie słupkowym wartość odczytujesz z osi pionowej, na wysokości końca słupka. Najważniejsze jest sprawdzenie, co ile są linie siatki.",
   "rule": {
    "t": "Ustal podziałkę osi: to różnica dwóch sąsiednich liczb na osi. Słupek między liniami to wartość pośrednia.",
    "f": [
     "linie co 10: słupek w połowie między 30 i 40 → 35",
     "najwyższy słupek → największa wartość",
     "wszyscy razem → suma wszystkich słupków"
    ],
    "e": "Nie zakładaj, że linie są co 1. Na egzaminie bywają co 2, co 5, co 20, a nawet co 0,5."
   },
   "visual": {
    "type": "chart",
    "kind": "cols",
    "min": 0,
    "max": 40,
    "step": 10,
    "ylabel": "liczba uczniów",
    "rows": [
     [
      "piłka nożna",
      35
     ],
     [
      "siatkówka",
      20
     ],
     [
      "koszykówka",
      15
     ],
     [
      "pływanie",
      25
     ],
     [
      "inne",
      10
     ]
    ],
    "alt": "Diagram słupkowy: piłka nożna 35, siatkówka 20, koszykówka 15, pływanie 25, inne 10 uczniów",
    "caption": "Linie co 10. Pływanie: w połowie między 20 i 30, czyli 25"
   },
   "example": {
    "q": "Diagram pokazuje wyniki ankiety o ulubionym sporcie. Ilu uczniów wybrało pływanie? O ile więcej uczniów wybrało piłkę nożną niż koszykówkę? Ilu uczniów wzięło udział w ankiecie?",
    "steps": [
     "Linie siatki są co 10. Słupek „pływanie” kończy się w połowie między 20 i 30: 25 uczniów.",
     "Piłka nożna 35, koszykówka 15: 35 − 15 = 20.",
     "Wszyscy: 35 + 20 + 15 + 25 + 10 = 105."
    ],
    "result": "Pływanie 25 uczniów, piłka nożna o 20 więcej niż koszykówka, w ankiecie 105 uczniów.",
    "tip": "Zapisz ołówkiem wartość nad każdym słupkiem. Potem liczysz już tylko na liczbach.",
    "check": [
     "35 - 15 == 20",
     "35 + 20 + 15 + 25 + 10 == 105"
    ]
   },
   "you": [
    {
     "id": "y2",
     "type": "fields",
     "chart": {
      "kind": "cols",
      "min": 0,
      "max": 40,
      "step": 10,
      "ylabel": "rowery",
      "rows": [
       [
        "pon.",
        25
       ],
       [
        "wt.",
        15
       ],
       [
        "śr.",
        35
       ],
       [
        "czw.",
        20
       ]
      ],
      "alt": "Diagram słupkowy: poniedziałek 25, wtorek 15, środa 35, czwartek 20 rowerów"
     },
     "q": "Diagram pokazuje, ile rowerów wypożyczono w kolejnych dniach. Ile rowerów wypożyczono w środę? Ile łącznie w tych czterech dniach?",
     "fields": [
      {
       "label": "Środa",
       "ans": 35,
       "show": "35",
       "why": [
        [
         30,
         "Linie są co 10. Słupek środy kończy się w połowie między 30 i 40."
        ],
        [
         40,
         "Słupek nie sięga linii 40, kończy się w połowie między 30 i 40."
        ]
       ]
      },
      {
       "label": "Łącznie",
       "ans": 95,
       "show": "95"
      }
     ],
     "sol": [
      "Środa: w połowie między 30 i 40, czyli [[35]].",
      "Łącznie: [[25 + 15 + 35 + 20 = 95]]."
     ],
     "answer": "35 i 95 rowerów.",
     "tip": "Najpierw podziałka.",
     "check": [
      "25 + 15 + 35 + 20 == 95"
     ]
    },
    {
     "id": "y2b",
     "type": "abcd",
     "chart": {
      "kind": "cols",
      "min": 0,
      "max": 20,
      "step": 2,
      "ylabel": "tys. mieszkańców",
      "rows": [
       [
        "Adamów",
        12
       ],
       [
        "Borowo",
        18
       ],
       [
        "Cisowo",
        8
       ],
       [
        "Dębno",
        14
       ]
      ],
      "alt": "Diagram słupkowy: Adamów 12, Borowo 18, Cisowo 8, Dębno 14 tysięcy mieszkańców"
     },
     "q": "Diagram pokazuje liczbę mieszkańców czterech gmin w tysiącach. O ile więcej mieszkańców ma Borowo niż Cisowo?",
     "opts": [
      "10 000",
      "10",
      "2,25 raza",
      "26 000"
     ],
     "ok": 0,
     "why": {
      "B": "Oś podaje tysiące mieszkańców. 10 tysięcy to 10 000.",
      "C": "18 : 8 = 2,25 mówi, ile razy więcej, a pytanie brzmi „o ile”.",
      "D": "Dodałeś liczby mieszkańców, a trzeba je odjąć."
     },
     "sol": [
      "Borowo 18 tys., Cisowo 8 tys.: [[18 − 8 = 10]] tys., czyli [[10 000]]."
     ],
     "answer": "A, 10 000.",
     "tip": "Zawsze czytaj opis osi: tu są tysiące.",
     "check": [
      "(18 - 8)*1000 == 10000"
     ]
    }
   ]
  },
  {
   "title": "Porównywanie danych i oś, która nie zaczyna się od zera",
   "skills": [
    "D2"
   ],
   "intro": "Na egzaminie często trzeba porównać dwie wartości z diagramu: o ile, ile razy albo o ile procent. Jest też pułapka z informatora CKE: oś pionowa, która nie zaczyna się od zera.",
   "rule": {
    "t": "Porównujesz liczby odczytane z osi, a nie wysokości słupków.",
    "f": [
     "o ile więcej: różnica",
     "ile razy więcej: iloraz",
     "o ile procent więcej: różnica : wartość, z którą porównujesz · 100%"
    ],
    "e": "Jeśli oś zaczyna się np. od 200, słupek dwa razy wyższy NIE oznacza dwa razy większej wartości."
   },
   "visual": {
    "type": "chart",
    "kind": "cols",
    "min": 200,
    "max": 320,
    "step": 20,
    "ylabel": "rowery",
    "rows": [
     [
      "2024 r.",
      240
     ],
     [
      "2025 r.",
      300
     ]
    ],
    "alt": "Diagram słupkowy z osią od 200: 2024 r. 240 rowerów, 2025 r. 300 rowerów",
    "caption": "Oś zaczyna się od 200. Słupek z 2025 roku jest 2,5 raza wyższy, ale 300 to tylko 1,25 raza więcej niż 240"
   },
   "example": {
    "q": "Diagram pokazuje, ile rowerów sprzedał sklep. Czy w 2025 roku sklep sprzedał 2,5 raza więcej rowerów niż w 2024 roku? O ile procent wzrosła sprzedaż?",
    "steps": [
     "Odczytujemy liczby z osi: 2024 r. 240 rowerów, 2025 r. 300 rowerów.",
     "Ile razy więcej: 300 : 240 = 1,25. To nie jest 2,5 raza, choć słupek tak wygląda, bo oś zaczyna się od 200.",
     "O ile procent: różnica 300 − 240 = 60, porównujemy z rokiem 2024: 60 : 240 = 0,25, czyli 25%."
    ],
    "result": "Nie. Sprzedaż wzrosła 1,25 raza, czyli o 25%.",
    "tip": "Takie zadanie jest w informatorze CKE: słupek dwa razy wyższy, a wzrost tylko o 40%.",
    "check": [
     "F(300, 240) == F('1.25')",
     "F(300 - 240, 240) == F('0.25')",
     "F(300 - 200, 240 - 200) == F('2.5')"
    ]
   },
   "you": [
    {
     "id": "y3",
     "type": "tn",
     "chart": {
      "kind": "cols",
      "min": 100,
      "max": 350,
      "step": 50,
      "ylabel": "sztuki",
      "rows": [
       [
        "2024 r.",
        200
       ],
       [
        "2025 r.",
        300
       ]
      ],
      "alt": "Diagram słupkowy z osią od 100: 2024 r. 200, 2025 r. 300 sztuk"
     },
     "q": "Diagram pokazuje, ile hulajnóg sprzedał sklep. Czy w 2025 roku sklep sprzedał o 100% więcej hulajnóg niż w 2024 roku? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
     "ok": "N",
     "reasons": {
      "1": "słupek z 2025 roku jest dwa razy wyższy",
      "2": "300 − 200 = 100, a 100 : 200 = 0,5, czyli o 50%",
      "3": "sklep sprzedał o 100 hulajnóg więcej"
     },
     "okReason": "2",
     "sol": [
      "Oś zaczyna się od 100, więc wysokość słupków myli. Odczytujemy liczby: [[200]] i [[300]].",
      "Różnica [[100]], porównujemy z rokiem 2024: [[100 : 200 = 0,5 = 50%]]. Wzrost o 50%, a nie o 100%.",
      "Uzasadnienie 3 jest prawdziwe, ale mówi o sztukach, a nie o procentach."
     ],
     "answer": "N, uzasadnienie 2.",
     "tip": "Zawsze sprawdź, od jakiej liczby zaczyna się oś.",
     "check": [
      "F(300 - 200, 200) == F('0.5')"
     ]
    },
    {
     "id": "y3b",
     "type": "fields",
     "chart": {
      "kind": "cols",
      "min": 0,
      "max": 70,
      "step": 10,
      "ylabel": "zł",
      "rows": [
       [
        "styczeń",
        40
       ],
       [
        "luty",
        50
       ],
       [
        "marzec",
        60
       ]
      ],
      "alt": "Diagram słupkowy: styczeń 40 zł, luty 50 zł, marzec 60 zł"
     },
     "q": "Diagram pokazuje, ile złotych Aldona odłożyła w kolejnych miesiącach na deskorolkę za 180 zł. O ile procent więcej odłożyła w marcu niż w styczniu? Jaki procent ceny deskorolki odłożyła w styczniu i lutym razem?",
     "fields": [
      {
       "label": "O ile % więcej",
       "ans": 50,
       "show": "50%",
       "why": [
        [
         20,
         "20 zł to różnica w złotych. W procentach: 20 : 40."
        ],
        [
         33.3,
         "Porównujesz z marcem. Pytanie: więcej niż w styczniu, więc dzielisz przez 40."
        ]
       ]
      },
      {
       "label": "Styczeń i luty (%)",
       "ans": 50,
       "show": "50%",
       "why": [
        [
         90,
         "90 zł to kwota. Procent ceny: 90 : 180."
        ]
       ]
      }
     ],
     "sol": [
      "Różnica: [[60 − 40 = 20]] zł. Porównujemy ze styczniem: [[20 : 40 = 0,5 = 50%]].",
      "Styczeń i luty: [[40 + 50 = 90]] zł, [[90 : 180 = 0,5 = 50%]]."
     ],
     "answer": "O 50% więcej, razem 50% ceny.",
     "tip": "Podobne zadanie otwierało arkusz egzaminu w 2025 roku.",
     "check": [
      "F(60 - 40, 40) == F('0.5')",
      "F(40 + 50, 180) == F('0.5')"
     ]
    }
   ]
  },
  {
   "title": "Diagram kołowy",
   "skills": [
    "D3"
   ],
   "intro": "Diagram kołowy pokazuje, jak całość dzieli się na części. Całe koło to 100%, a każdy wycinek to procent całości. Pół koła to 50%, ćwiartka to 25%.",
   "rule": {
    "t": "Brakujący wycinek: 100% minus pozostałe. Liczba osób w wycinku: procent z liczby wszystkich.",
    "f": [
     "całe koło = 100%",
     "½ koła = 50%, ¼ koła = 25%",
     "liczba osób = procent · liczba wszystkich"
    ],
    "e": "Procent z diagramu dotyczy całości. „O ile więcej osób” liczysz na liczbach osób albo na różnicy procentów z całości."
   },
   "visual": {
    "type": "chart",
    "kind": "pie",
    "rows": [
     [
      "pieszo",
      35
     ],
     [
      "autobus",
      30
     ],
     [
      "rower",
      20,
      false
     ],
     [
      "samochód",
      15
     ]
    ],
    "alt": "Diagram kołowy: pieszo 35%, autobus 30%, rower nieznane, samochód 15%",
    "caption": "Rower: 100% − 35% − 30% − 15% = 20%"
   },
   "example": {
    "q": "W ankiecie o sposobie dojazdu do szkoły wzięło udział 400 uczniów. Ilu uczniów dojeżdża rowerem? O ile więcej uczniów przychodzi pieszo niż przyjeżdża samochodem?",
    "steps": [
     "Rower to brakujący wycinek: 100% − 35% − 30% − 15% = 20%.",
     "20% z 400: 10% to 40, więc 20% to 80 uczniów.",
     "Pieszo 35%, samochód 15%, różnica 20% z 400, czyli 80 uczniów."
    ],
    "result": "Rowerem dojeżdża 80 uczniów. Pieszo przychodzi o 80 uczniów więcej niż przyjeżdża samochodem.",
    "tip": "W 2026 roku pierwsze zadanie arkusza było właśnie takie: brakujący wycinek i liczba zadań z działu.",
    "check": [
     "100 - 35 - 30 - 15 == 20",
     "F(20, 100)*400 == 80",
     "F(35 - 15, 100)*400 == 80"
    ]
   },
   "you": [
    {
     "id": "y4",
     "type": "fields",
     "chart": {
      "kind": "pie",
      "rows": [
       [
        "jedzenie",
        30
       ],
       [
        "mieszkanie",
        25
       ],
       [
        "transport",
        10
       ],
       [
        "inne",
        35,
        false
       ]
      ],
      "alt": "Diagram kołowy: jedzenie 30%, mieszkanie 25%, transport 10%, inne nieznane"
     },
     "q": "Diagram pokazuje, jak rodzina dzieli miesięczne wydatki w wysokości 6 000 zł. Jaki procent wydatków to „inne”? Ile to złotych?",
     "fields": [
      {
       "label": "Inne (%)",
       "ans": 35,
       "show": "35%",
       "why": [
        [
         65,
         "65% to suma pozostałych wycinków. Inne: 100% − 65%."
        ]
       ]
      },
      {
       "label": "Inne (zł)",
       "ans": 2100,
       "show": "2 100",
       "why": [
        [
         35,
         "35 to procent. W złotych: 35% z 6 000 zł."
        ]
       ]
      }
     ],
     "sol": [
      "[[100% − 30% − 25% − 10% = 35%]].",
      "[[35% z 6 000 zł = 0,35 · 6 000 = 2 100 zł]]."
     ],
     "answer": "35%, czyli 2 100 zł.",
     "tip": "10% z 6 000 to 600.",
     "check": [
      "100 - 30 - 25 - 10 == 35",
      "F(35, 100)*6000 == 2100"
     ]
    },
    {
     "id": "y4b",
     "type": "pf",
     "chart": {
      "kind": "pie",
      "rows": [
       [
        "kawa",
        45
       ],
       [
        "herbata",
        30
       ],
       [
        "sok",
        20
       ],
       [
        "woda",
        5
       ]
      ],
      "alt": "Diagram kołowy: kawa 45%, herbata 30%, sok 20%, woda 5%"
     },
     "q": "Diagram pokazuje, co do picia wybrało 200 gości na przyjęciu. Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "Herbatę wybrało 60 gości.",
       "ok": "P"
      },
      {
       "t": "Kawę wybrało więcej niż połowa gości.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> [[30% z 200 = 60]]. Prawda.",
      "<b>Zdanie 2.</b> 45% to mniej niż 50%, czyli mniej niż połowa. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "Połowa to 50%. Wycinek większy od połowy koła przekracza 50%.",
     "check": [
      "F(30, 100)*200 == 60",
      "45 < 50"
     ]
    }
   ]
  },
  {
   "title": "Tworzenie diagramów: słupki i wycinki",
   "skills": [
    "D5"
   ],
   "intro": "Czasem trzeba samemu przygotować diagram. W diagramie słupkowym dobierasz podziałkę osi, a w kołowym liczysz kąty wycinków. Całe koło to 360°.",
   "rule": {
    "t": "Kąt wycinka = część : całość · 360°. Procent wycinka = kąt : 360° · 100%.",
    "f": [
     "50% = 180°, 25% = 90°, 10% = 36°",
     "1% = 3,6°",
     "wysokość słupka: wartość : podziałka"
    ],
    "e": "Kąty wszystkich wycinków muszą dać razem 360°, a procenty 100%. To dobre sprawdzenie."
   },
   "visual": {
    "type": "chart",
    "kind": "pie",
    "rows": [
     [
      "pies",
      50
     ],
     [
      "kot",
      25
     ],
     [
      "rybki",
      16.666666666666668
     ],
     [
      "brak",
      8.333333333333334
     ]
    ],
    "alt": "Diagram kołowy z kątami: pies 180°, kot 90°, rybki 60°, brak 30°",
    "deg": true,
    "caption": "12 z 24 to połowa, czyli 180°. 4 z 24 to 1/6, czyli 60°"
   },
   "example": {
    "q": "W klasie jest 24 uczniów: 12 ma psa, 6 ma kota, 4 mają rybki, a 2 nie mają zwierzęcia. Oblicz kąty wycinków diagramu kołowego.",
    "steps": [
     "Pies: 12 z 24 to 1/2, a 1/2 · 360° = 180°.",
     "Kot: 6 z 24 to 1/4, a 1/4 · 360° = 90°. Rybki: 4 z 24 to 1/6, a 1/6 · 360° = 60°.",
     "Brak zwierzęcia: 2 z 24 to 1/12, a 1/12 · 360° = 30°. Sprawdzenie: 180° + 90° + 60° + 30° = 360°."
    ],
    "result": "Pies 180°, kot 90°, rybki 60°, brak zwierzęcia 30°.",
    "tip": "Krótsza droga: jeden uczeń to 360° : 24 = 15°. Potem mnożysz: 12 · 15° = 180° itd.",
    "check": [
     "F(12, 24)*360 == 180",
     "F(6, 24)*360 == 90",
     "F(4, 24)*360 == 60",
     "F(2, 24)*360 == 30",
     "180 + 90 + 60 + 30 == 360"
    ]
   },
   "you": [
    {
     "id": "y5",
     "type": "fields",
     "q": "Na diagramie kołowym wycinek „siatkówka” ma kąt 72°. W ankiecie wzięło udział 30 uczniów. Jaki procent uczniów wybrał siatkówkę? Ilu to uczniów?",
     "fields": [
      {
       "label": "Procent",
       "ans": 20,
       "show": "20%",
       "why": [
        [
         72,
         "72° to kąt, a nie procent. Procent: 72 : 360 · 100%."
        ]
       ]
      },
      {
       "label": "Liczba uczniów",
       "ans": 6,
       "show": "6",
       "why": [
        [
         20,
         "20 to procent. Liczba uczniów: 20% z 30."
        ]
       ]
      }
     ],
     "sol": [
      "[[72° : 360° = 0,2 = 20%]].",
      "[[20% z 30 = 6]] uczniów."
     ],
     "answer": "20%, czyli 6 uczniów.",
     "tip": "10% koła to 36°.",
     "check": [
      "F(72, 360) == F('0.2')",
      "F(20, 100)*30 == 6"
     ]
    },
    {
     "id": "y5b",
     "type": "fields",
     "q": "Na diagramie słupkowym słupek oznaczający 150 zł ma wysokość 3 cm. Jaką wysokość powinien mieć słupek oznaczający 250 zł?",
     "fields": [
      {
       "label": "Wysokość (cm)",
       "ans": 5,
       "show": "5",
       "why": [
        [
         4,
         "Słupek nie rośnie o 1 cm na każde 100 zł. Tu 1 cm oznacza 150 : 3 = 50 zł."
        ]
       ]
      }
     ],
     "sol": [
      "1 cm oznacza [[150 : 3 = 50]] zł.",
      "250 zł to [[250 : 50 = 5]] cm."
     ],
     "answer": "5 cm.",
     "tip": "Najpierw ustal, ile oznacza 1 cm.",
     "check": [
      "150/3 == 50",
      "250/50 == 5"
     ]
    }
   ]
  },
  {
   "title": "Wykresy w układzie współrzędnych",
   "skills": [
    "D4"
   ],
   "intro": "Wykres pokazuje, jak jedna wielkość zmienia się w zależności od drugiej, najczęściej od czasu. Czas jest na osi poziomej, a na pionowej na przykład odległość albo temperatura.",
   "rule": {
    "t": "Odczyt: od osi poziomej idziesz w górę do wykresu, a potem w bok do osi pionowej.",
    "f": [
     "linia w górę → wartości rosną",
     "linia w dół → wartości maleją",
     "linia pozioma → wartość się nie zmienia (np. postój)"
    ],
    "e": "Na wykresie odległości od domu linia w dół nie oznacza jazdy z górki. Oznacza powrót w stronę domu."
   },
   "visual": {
    "type": "chart",
    "kind": "line",
    "x": {
     "min": 0,
     "max": 40,
     "step": 5,
     "label": "czas (min)"
    },
    "y": {
     "min": 0,
     "max": 8,
     "step": 1,
     "label": "odległość od domu (km)"
    },
    "alt": "Wykres: od 0 do 20 min odległość rośnie od 0 do 4 km, od 20 do 30 min stoi na 4 km, od 30 do 40 min rośnie do 7 km",
    "pts": [
     [
      0,
      0
     ],
     [
      20,
      4
     ],
     [
      30,
      4
     ],
     [
      40,
      7
     ]
    ],
    "caption": "Pozioma linia od 20. do 30. minuty: 10 minut postoju 4 km od domu"
   },
   "example": {
    "q": "Ola jechała rowerem do babci. Wykres pokazuje jej odległość od domu. Ile trwał postój? Ile kilometrów przejechała po postoju? Kiedy jechała szybciej: przed postojem czy po nim?",
    "steps": [
     "Postój to pozioma część wykresu: od 20. do 30. minuty, czyli 10 minut, 4 km od domu.",
     "Po postoju odległość wzrosła z 4 km do 7 km: 3 km w 10 minut.",
     "Przed postojem: 4 km w 20 minut, czyli 1 km w 5 minut. Po postoju: 3 km w 10 minut, czyli 1 km w 3⅓ minuty. Po postoju jechała szybciej."
    ],
    "result": "Postój trwał 10 minut. Po postoju przejechała 3 km i jechała szybciej niż przed postojem.",
    "tip": "Im bardziej stroma linia, tym szybciej rośnie odległość, czyli tym większa prędkość.",
    "check": [
     "30 - 20 == 10",
     "7 - 4 == 3",
     "F(4, 20) < F(3, 10)"
    ]
   },
   "you": [
    {
     "id": "y6",
     "type": "fields",
     "chart": {
      "kind": "line",
      "x": {
       "cats": [
        "6:00",
        "8:00",
        "10:00",
        "12:00",
        "14:00",
        "16:00",
        "18:00"
       ]
      },
      "y": {
       "min": -4,
       "max": 10,
       "step": 2,
       "label": "°C"
      },
      "alt": "Wykres temperatury: 6:00 −2, 8:00 0, 10:00 4, 12:00 6, 14:00 8, 16:00 6, 18:00 2 stopnie",
      "pts": [
       [
        0,
        -2
       ],
       [
        1,
        0
       ],
       [
        2,
        4
       ],
       [
        3,
        6
       ],
       [
        4,
        8
       ],
       [
        5,
        6
       ],
       [
        6,
        2
       ]
      ]
     },
     "q": "Wykres pokazuje temperaturę powietrza w ciągu dnia. Jaka była temperatura o 10:00? O ile stopni wzrosła temperatura od 6:00 do 14:00?",
     "fields": [
      {
       "label": "O 10:00 (°C)",
       "ans": 4,
       "show": "4"
      },
      {
       "label": "Wzrost (°C)",
       "ans": 10,
       "show": "10",
       "why": [
        [
         6,
         "Od −2 do 8 jest 8 − (−2) = 10 stopni, a nie 8 − 2."
        ],
        [
         8,
         "8 to temperatura o 14:00. Wzrost liczysz od −2."
        ]
       ]
      }
     ],
     "sol": [
      "O 10:00: [[4 °C]].",
      "Wzrost: [[8 − (−2) = 10]] stopni."
     ],
     "answer": "4 °C, wzrost o 10 stopni.",
     "tip": "Od liczby ujemnej do dodatniej: dodajesz odległości od zera.",
     "check": [
      "8 - (-2) == 10"
     ]
    },
    {
     "id": "y6b",
     "type": "pf",
     "chart": {
      "kind": "line",
      "x": {
       "cats": [
        "6:00",
        "8:00",
        "10:00",
        "12:00",
        "14:00",
        "16:00",
        "18:00"
       ]
      },
      "y": {
       "min": -4,
       "max": 10,
       "step": 2,
       "label": "°C"
      },
      "alt": "Wykres temperatury: 6:00 −2, 8:00 0, 10:00 4, 12:00 6, 14:00 8, 16:00 6, 18:00 2 stopnie",
      "pts": [
       [
        0,
        -2
       ],
       [
        1,
        0
       ],
       [
        2,
        4
       ],
       [
        3,
        6
       ],
       [
        4,
        8
       ],
       [
        5,
        6
       ],
       [
        6,
        2
       ]
      ]
     },
     "q": "Oceń prawdziwość zdań o temperaturze z wykresu.",
     "items": [
      {
       "t": "Od 14:00 do 18:00 temperatura spadała.",
       "ok": "P"
      },
      {
       "t": "O 8:00 temperatura była ujemna.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> Po 14:00 linia idzie w dół: 8, 6, 2. Prawda.",
      "<b>Zdanie 2.</b> O 8:00 było 0 °C, a zero nie jest liczbą ujemną. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "Zero nie jest ani dodatnie, ani ujemne.",
     "check": [
      "8 > 6 > 2"
     ]
    }
   ]
  },
  {
   "title": "Średnia arytmetyczna",
   "skills": [
    "D6"
   ],
   "intro": "Średnia arytmetyczna to wynik „po wyrównaniu”: tyle wypadłoby na każdą daną, gdyby wszystkie były równe. Liczysz ją, dodając wszystkie liczby i dzieląc przez to, ile ich jest.",
   "rule": {
    "t": "Średnia = suma liczb : liczba danych.",
    "f": [
     "4, 6 i 11: (4 + 6 + 11) : 3 = 7",
     "z tabeli: każdą wartość mnożysz przez to, ile razy wystąpiła"
    ],
    "e": "Zero też jest daną: nic nie dodaje do sumy, ale liczy się do liczby danych. Liczby ujemne dodajesz z minusem."
   },
   "visual": {
    "type": "chart",
    "kind": "cols",
    "min": 0,
    "max": 12,
    "step": 2,
    "ylabel": "punkty",
    "rows": [
     [
      "Ala",
      4
     ],
     [
      "Bartek",
      6
     ],
     [
      "Celina",
      11
     ]
    ],
    "alt": "Diagram słupkowy: Ala 4, Bartek 6, Celina 11 punktów",
    "vals": true,
    "caption": "Średnia: (4 + 6 + 11) : 3 = 21 : 3 = 7 punktów"
   },
   "example": {
    "q": "Tabela pokazuje oceny ze sprawdzianu w klasie 8b (1 uczeń dostał 1, 3 uczniów 2, 8 uczniów 3, 7 uczniów 4, 4 uczniów 5, 2 uczniów 6). Oblicz średnią ocen.",
    "steps": [
     "Uczniów jest 1 + 3 + 8 + 7 + 4 + 2 = 25.",
     "Suma ocen: każdą ocenę liczysz tyle razy, ilu uczniów ją dostało: 1 · 1 + 2 · 3 + 3 · 8 + 4 · 7 + 5 · 4 + 6 · 2 = 1 + 6 + 24 + 28 + 20 + 12 = 91.",
     "Średnia: 91 : 25 = 3,64."
    ],
    "result": "Średnia ocen w klasie to 3,64.",
    "tip": "Nie licz (1 + 2 + 3 + 4 + 5 + 6) : 6 = 3,5. To średnia z nagłówków tabeli, a nie z ocen uczniów.",
    "check": [
     "1*1 + 2*3 + 3*8 + 4*7 + 5*4 + 6*2 == 91",
     "F(91, 25) == F('3.64')"
    ]
   },
   "you": [
    {
     "id": "y7",
     "type": "fields",
     "q": "Temperatury o północy w ciągu pięciu dni wynosiły: −4 °C, 2 °C, 0 °C, 5 °C, 7 °C. Oblicz średnią temperaturę.",
     "fields": [
      {
       "label": "Średnia (°C)",
       "ans": 2,
       "show": "2",
       "why": [
        [
         2.5,
         "Pominąłeś zero. Dni jest 5, więc dzielisz przez 5."
        ],
        [
         3.6,
         "−4 dodajesz z minusem: suma to 10, a nie 18."
        ]
       ]
      }
     ],
     "sol": [
      "Suma: [[−4 + 2 + 0 + 5 + 7 = 10]].",
      "Średnia: [[10 : 5 = 2]] °C."
     ],
     "answer": "2 °C.",
     "tip": "Liczba danych to liczba dni, także tych z zerem.",
     "check": [
      "-4 + 2 + 0 + 5 + 7 == 10",
      "10/5 == 2"
     ]
    },
    {
     "id": "y7b",
     "type": "fields",
     "data": {
      "head": [
       "liczba rodzeństwa",
       "0",
       "1",
       "2",
       "3"
      ],
      "rows": [
       [
        "liczba uczniów",
        4,
        10,
        5,
        1
       ]
      ]
     },
     "q": "Tabela pokazuje, ile rodzeństwa mają uczniowie klasy 8a. Oblicz średnią liczbę rodzeństwa na ucznia.",
     "fields": [
      {
       "label": "Średnia",
       "ans": 1.15,
       "show": "1,15",
       "why": [
        [
         1.5,
         "(0 + 1 + 2 + 3) : 4 to średnia z nagłówków. Każdą liczbę liczysz tyle razy, ilu uczniów ją ma."
        ],
        [
         5,
         "5 to średnia liczba uczniów w kolumnie (20 : 4)."
        ]
       ]
      }
     ],
     "sol": [
      "Uczniów: [[4 + 10 + 5 + 1 = 20]].",
      "Suma rodzeństwa: [[0 · 4 + 1 · 10 + 2 · 5 + 3 · 1 = 23]].",
      "Średnia: [[23 : 20 = 1,15]]."
     ],
     "answer": "1,15.",
     "tip": "Średnia może nie być liczbą całkowitą, nawet gdy liczysz osoby.",
     "check": [
      "0*4 + 1*10 + 2*5 + 3*1 == 23",
      "F(23, 20) == F('1.15')"
     ]
    }
   ]
  },
  {
   "title": "Średnia w drugą stronę: suma i brakująca liczba",
   "skills": [
    "D7"
   ],
   "intro": "Jeśli znasz średnią i wiesz, ile jest liczb, znasz też ich sumę: suma = średnia · liczba danych. Na tym opierały się zadania ze średnią na egzaminie w 2025 i w 2026 roku.",
   "rule": {
    "t": "Suma = średnia · liczba danych. Brakująca liczba = nowa suma − stara suma.",
    "f": [
     "4 liczby o średniej 9 → suma 36",
     "po dopisaniu liczby: nowa suma = nowa średnia · (liczba danych + 1)"
    ],
    "e": "Średnia dwóch grup razem to NIE jest średnia ze średnich, chyba że grupy są równe. Licz sumy."
   },
   "visual": {
    "type": "tape",
    "rows": [
     {
      "label": "a, b, c, d",
      "parts": [
       {
        "t": "9"
       },
       {
        "t": "9"
       },
       {
        "t": "9"
       },
       {
        "t": "9"
       }
      ],
      "sum": "= 36"
     },
     {
      "label": "e, f",
      "parts": [
       {
        "t": "6",
        "c": 1
       },
       {
        "t": "6",
        "c": 1
       }
      ],
      "sum": "= 12"
     }
    ],
    "total": "razem 48 : 6 = 8",
    "alt": "Cztery liczby o średniej 9 dają sumę 36, dwie liczby o średniej 6 dają sumę 12, razem 48, średnia 8",
    "caption": "Średnia sześciu liczb: 8, a nie (9 + 6) : 2 = 7,5"
   },
   "example": {
    "q": "Średnia arytmetyczna czterech liczb a, b, c, d jest równa 9, a średnia arytmetyczna dwóch liczb e i f jest równa 6. O ile suma a + b + c + d jest większa od sumy e + f? Ile wynosi średnia wszystkich sześciu liczb? (Egzamin 2025, zadanie 4.)",
    "steps": [
     "Suma czterech liczb: 4 · 9 = 36. Suma dwóch liczb: 2 · 6 = 12.",
     "Różnica sum: 36 − 12 = 24.",
     "Wszystkie sześć liczb: suma 36 + 12 = 48, średnia 48 : 6 = 8."
    ],
    "result": "Suma jest większa o 24, a średnia sześciu liczb to 8.",
    "tip": "W arkuszu była też odpowiedź 7,5, czyli (9 + 6) : 2. To pułapka: grupy mają różną liczbę danych.",
    "check": [
     "4*9 == 36",
     "2*6 == 12",
     "36 - 12 == 24",
     "(36 + 12)/6 == 8"
    ]
   },
   "you": [
    {
     "id": "y8",
     "type": "fields",
     "q": "Średnia arytmetyczna liczb x i y jest równa 6, a średnia arytmetyczna liczb x, y, z jest równa 8. Oblicz z.",
     "fields": [
      {
       "label": "z",
       "ans": 12,
       "show": "12",
       "why": [
        [
         10,
         "(6 + 10) : 2 = 8 to średnia ze średniej i z. Średnia trzech liczb to suma : 3."
        ],
        [
         2,
         "8 − 6 = 2 to różnica średnich, a nie liczba z."
        ]
       ]
      }
     ],
     "sol": [
      "[[x + y = 2 · 6 = 12]].",
      "[[x + y + z = 3 · 8 = 24]].",
      "[[z = 24 − 12 = 12]]."
     ],
     "answer": "z = 12.",
     "tip": "Podobne zadanie było na egzaminie w 2026 roku.",
     "check": [
      "3*8 - 2*6 == 12"
     ]
    },
    {
     "id": "y8b",
     "type": "fields",
     "q": "Średnia wieku czterech członków rodziny to 25 lat. Gdy dołączył do nich dziadek, średnia wieku wzrosła do 32 lat. Ile lat ma dziadek?",
     "fields": [
      {
       "label": "Wiek dziadka",
       "ans": 60,
       "show": "60",
       "why": [
        [
         7,
         "32 − 25 = 7 to różnica średnich."
        ],
        [
         39,
         "(25 + 39) : 2 = 32, ale tak liczy się średnią dwóch liczb, a osób jest pięć."
        ]
       ]
      }
     ],
     "sol": [
      "Suma lat czterech osób: [[4 · 25 = 100]].",
      "Suma lat pięciu osób: [[5 · 32 = 160]].",
      "Dziadek: [[160 − 100 = 60]] lat."
     ],
     "answer": "60 lat.",
     "tip": "Sprawdzenie: (100 + 60) : 5 = 32.",
     "check": [
      "5*32 - 4*25 == 60"
     ]
    }
   ]
  }
 ],
 "traps": [
  {
   "name": "Oś, która nie zaczyna się od zera",
   "bad": "słupek dwa razy wyższy, więc dwa razy więcej",
   "good": "odczytaj liczby z osi: 300 i 200, czyli o 50% więcej"
  },
  {
   "name": "Kąt zamiast procentu",
   "bad": "wycinek 72° to 72%",
   "good": "72° : 360° = 0,2, czyli 20%"
  },
  {
   "name": "Średnia ze średnich",
   "bad": "4 liczby o średniej 9 i 2 o średniej 6: (9 + 6) : 2",
   "good": "(36 + 12) : 6 = 8"
  }
 ],
 "cheat": {
  "title": "Dane i średnia w 6 zasadach",
  "rules": [
   {
    "t": "Tabela.",
    "f": [
     "wiersz × kolumna",
     "łącznie: dodaj"
    ],
    "e": "„Co najmniej 4” to 4, 5, 6."
   },
   {
    "t": "Diagram słupkowy.",
    "f": [
     "najpierw podziałka",
     "porównuj liczby, nie wysokości"
    ],
    "e": "Sprawdź, od jakiej liczby zaczyna się oś."
   },
   {
    "t": "Porównania.",
    "f": [
     "o ile: różnica",
     "ile razy: iloraz",
     "o ile %: różnica : wartość porównywana"
    ],
    "e": "Procent liczysz od tego, z czym porównujesz."
   },
   {
    "t": "Diagram kołowy.",
    "f": [
     "koło = 100% = 360°",
     "1% = 3,6°",
     "kąt = część : całość · 360°"
    ],
    "e": "Brakujący wycinek: 100% minus reszta."
   },
   {
    "t": "Wykres.",
    "f": [
     "w górę: rośnie",
     "w dół: maleje",
     "poziomo: stała wartość"
    ],
    "e": "Na wykresie odległości poziomo = postój."
   },
   {
    "t": "Średnia.",
    "f": [
     "średnia = suma : liczba danych",
     "suma = średnia · liczba danych"
    ],
    "e": "Średnia grup: licz sumy, nie średnią średnich."
   }
  ]
 },
 "memo": {
  "title": "Wzory do danych",
  "rows": [
   [
    "średnia",
    "suma",
    "kąt wycinka",
    "procent wycinka"
   ],
   [
    "suma : liczba danych",
    "średnia · liczba danych",
    "część : całość · 360°",
    "kąt : 360° · 100%"
   ]
  ],
  "note": "Całe koło to 360° i 100%. Ćwiartka: 90° i 25%."
 },
 "warmup": {
  "id": "w0",
  "type": "fields",
  "q": "Rozgrzewka: dodawanie, procenty i dzielenie.",
  "fields": [
   {
    "label": "35 + 20 + 15 + 25 + 10",
    "ans": 105,
    "show": "105"
   },
   {
    "label": "20% z 400",
    "ans": 80,
    "show": "80"
   },
   {
    "label": "(4 + 6 + 11) : 3",
    "ans": 7,
    "show": "7"
   }
  ],
  "sol": [
   "<b>35 + 20 + 15 + 25 + 10</b> = [[105]].",
   "<b>20% z 400</b>: 10% to 40, więc 20% to [[80]].",
   "<b>(4 + 6 + 11) : 3</b> = 21 : 3 = [[7]]."
  ],
  "answer": "105, 80 i 7.",
  "tip": "Te trzy rachunki to cały temat w pigułce: suma danych, procent z diagramu kołowego i średnia. Jeśli procent nie wyszedł, wróć do tematu „Procenty”.",
  "check": [
   "35 + 20 + 15 + 25 + 10 == 105",
   "F(20, 100)*400 == 80",
   "(4 + 6 + 11)/3 == 7"
  ]
 },
 "levels": [
  {
   "n": 1,
   "name": "Podstawy",
   "desc": "Odczytywanie tabel, diagramów i wykresów oraz liczenie średniej. Przy każdym diagramie najpierw sprawdź podziałkę osi."
  },
  {
   "n": 2,
   "name": "Trening",
   "desc": "Oś, która nie zaczyna się od zera, kąty wycinków, średnia z tabeli i średnia w drugą stronę. Zadania jak na egzaminie."
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
    "D1"
   ],
   "type": "fields",
   "data": {
    "head": [
     "dzień",
     "czwartek",
     "piątek",
     "sobota",
     "niedziela"
    ],
    "rows": [
     [
      "liczba biletów",
      86,
      124,
      215,
      175
     ]
    ]
   },
   "q": "Tabela pokazuje, ile biletów sprzedało kino w kolejnych dniach. Ile biletów sprzedano łącznie? O ile więcej biletów sprzedano w sobotę niż w czwartek?",
   "fields": [
    {
     "label": "Łącznie",
     "ans": 600,
     "show": "600"
    },
    {
     "label": "O ile więcej",
     "ans": 129,
     "show": "129",
     "why": [
      [
       2.5,
       "2,5 mówi, ile razy więcej (215 : 86). Pytanie „o ile” to różnica: 215 − 86."
      ]
     ]
    }
   ],
   "sol": [
    "Łącznie: [[86 + 124 + 215 + 175 = 600]].",
    "O ile więcej: [[215 − 86 = 129]]."
   ],
   "answer": "600 biletów, o 129 więcej.",
   "tip": "„O ile” to odejmowanie.",
   "check": [
    "86 + 124 + 215 + 175 == 600",
    "215 - 86 == 129",
    "215/86 == 2.5"
   ],
   "twin": {
    "type": "fields",
    "data": {
     "head": [
      "miesiąc",
      "marzec",
      "kwiecień",
      "maj",
      "czerwiec"
     ],
     "rows": [
      [
       "liczba odwiedzających",
       1250,
       980,
       1640,
       2130
      ]
     ]
    },
    "q": "Tabela pokazuje, ile osób odwiedziło muzeum. Ile osób odwiedziło muzeum łącznie w tych miesiącach? O ile więcej osób było w czerwcu niż w kwietniu?",
    "fields": [
     {
      "label": "Łącznie",
      "ans": 6000,
      "show": "6 000"
     },
     {
      "label": "O ile więcej",
      "ans": 1150,
      "show": "1 150"
     }
    ],
    "sol": [
     "Łącznie: [[1 250 + 980 + 1 640 + 2 130 = 6 000]].",
     "O ile więcej: [[2 130 − 980 = 1 150]]."
    ],
    "answer": "6 000 osób, o 1 150 więcej.",
    "tip": "Dodawaj po dwie liczby.",
    "check": [
     "1250 + 980 + 1640 + 2130 == 6000",
     "2130 - 980 == 1150"
    ]
   }
  },
  {
   "id": "a2",
   "level": 1,
   "skills": [
    "D1"
   ],
   "type": "pf",
   "data": {
    "head": [
     "ocena",
     "1",
     "2",
     "3",
     "4",
     "5",
     "6"
    ],
    "rows": [
     [
      "liczba uczniów",
      1,
      4,
      7,
      8,
      5,
      3
     ]
    ]
   },
   "q": "Tabela pokazuje oceny ze sprawdzianu z matematyki. Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Sprawdzian pisało 28 uczniów.",
     "ok": "P"
    },
    {
     "t": "Ocenę co najmniej 5 dostało 5 uczniów.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[1 + 4 + 7 + 8 + 5 + 3 = 28]]. Prawda.",
    "<b>Zdanie 2.</b> Co najmniej 5 to oceny 5 i 6: [[5 + 3 = 8]] uczniów. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "„Co najmniej 5” obejmuje także 5.",
   "check": [
    "1 + 4 + 7 + 8 + 5 + 3 == 28",
    "5 + 3 == 8"
   ],
   "twin": {
    "type": "pf",
    "data": {
     "head": [
      "liczba przeczytanych książek",
      "0",
      "1",
      "2",
      "3",
      "4"
     ],
     "rows": [
      [
       "liczba uczniów",
       3,
       6,
       9,
       4,
       2
      ]
     ]
    },
    "q": "Tabela pokazuje, ile książek przeczytali uczniowie w wakacje. Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Więcej niż 2 książki przeczytało 6 uczniów.",
      "ok": "P"
     },
     {
      "t": "W klasie jest 20 uczniów.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> Więcej niż 2 to 3 i 4: [[4 + 2 = 6]]. Prawda.",
     "<b>Zdanie 2.</b> [[3 + 6 + 9 + 4 + 2 = 24]]. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "„Więcej niż 2” nie obejmuje 2.",
    "check": [
     "4 + 2 == 6",
     "3 + 6 + 9 + 4 + 2 == 24"
    ]
   }
  },
  {
   "id": "a3",
   "level": 1,
   "skills": [
    "D2"
   ],
   "type": "fields",
   "chart": {
    "kind": "cols",
    "min": 0,
    "max": 80,
    "step": 20,
    "ylabel": "liczba uczniów",
    "rows": [
     [
      "piłka nożna",
      70
     ],
     [
      "siatkówka",
      50
     ],
     [
      "koszykówka",
      30
     ],
     [
      "pływanie",
      60
     ]
    ],
    "alt": "Diagram słupkowy: piłka nożna 70, siatkówka 50, koszykówka 30, pływanie 60 uczniów"
   },
   "q": "Diagram pokazuje wyniki ankiety o ulubionym sporcie. Ilu uczniów wybrało siatkówkę? Ilu uczniów wzięło udział w ankiecie?",
   "fields": [
    {
     "label": "Siatkówka",
     "ans": 50,
     "show": "50",
     "why": [
      [
       40,
       "Linie są co 20. Słupek kończy się w połowie między 40 i 60."
      ],
      [
       60,
       "Słupek siatkówki nie sięga linii 60, kończy się w połowie między 40 i 60."
      ]
     ]
    },
    {
     "label": "Wszyscy",
     "ans": 210,
     "show": "210"
    }
   ],
   "sol": [
    "Siatkówka: w połowie między 40 i 60, czyli [[50]].",
    "Wszyscy: [[70 + 50 + 30 + 60 = 210]]."
   ],
   "answer": "50 uczniów, w ankiecie 210.",
   "tip": "Najpierw podziałka: tu co 20.",
   "check": [
    "70 + 50 + 30 + 60 == 210"
   ],
   "twin": {
    "type": "fields",
    "chart": {
     "kind": "cols",
     "min": 0,
     "max": 60,
     "step": 10,
     "ylabel": "porcje",
     "rows": [
      [
       "pon.",
       30
      ],
      [
       "wt.",
       45
      ],
      [
       "śr.",
       25
      ],
      [
       "czw.",
       50
      ]
     ],
     "alt": "Diagram słupkowy: poniedziałek 30, wtorek 45, środa 25, czwartek 50 porcji"
    },
    "q": "Diagram pokazuje, ile porcji pizzy sprzedała pizzeria w kolejnych dniach. Ile porcji sprzedano we wtorek? Ile łącznie w tych czterech dniach?",
    "fields": [
     {
      "label": "Wtorek",
      "ans": 45,
      "show": "45",
      "why": [
       [
        40,
        "Linie są co 10. Słupek kończy się w połowie między 40 i 50."
       ],
       [
        50,
        "Słupek wtorku nie sięga linii 50."
       ]
      ]
     },
     {
      "label": "Łącznie",
      "ans": 150,
      "show": "150"
     }
    ],
    "sol": [
     "Wtorek: w połowie między 40 i 50, czyli [[45]].",
     "Łącznie: [[30 + 45 + 25 + 50 = 150]]."
    ],
    "answer": "45 i 150 porcji.",
    "tip": "Linie co 10.",
    "check": [
     "30 + 45 + 25 + 50 == 150"
    ]
   }
  },
  {
   "id": "a4",
   "level": 1,
   "skills": [
    "D2"
   ],
   "type": "abcd",
   "chart": {
    "kind": "cols",
    "min": 0,
    "max": 12,
    "step": 2,
    "ylabel": "tys. turystów",
    "rows": [
     [
      "A",
      6
     ],
     [
      "B",
      10
     ],
     [
      "C",
      4
     ],
     [
      "D",
      8
     ]
    ],
    "alt": "Diagram słupkowy: schronisko A 6, B 10, C 4, D 8 tysięcy turystów"
   },
   "q": "Diagram pokazuje, ilu turystów (w tysiącach) nocowało w czterech schroniskach w ciągu roku. O ile więcej turystów nocowało w schronisku B niż w schronisku C?",
   "opts": [
    "6",
    "2,5 raza",
    "6 000",
    "14 000"
   ],
   "ok": 2,
   "why": {
    "A": "Oś podaje tysiące turystów. 6 tysięcy to 6 000.",
    "B": "10 : 4 = 2,5 mówi, ile razy więcej, a pytanie brzmi „o ile”.",
    "D": "Dodałeś liczby, a trzeba je odjąć."
   },
   "sol": [
    "B: 10 tys., C: 4 tys. [[10 − 4 = 6]] tys., czyli [[6 000]]."
   ],
   "answer": "C, 6 000.",
   "tip": "Opis osi: tysiące.",
   "check": [
    "(10 - 4)*1000 == 6000"
   ],
   "twin": {
    "type": "abcd",
    "chart": {
     "kind": "cols",
     "min": 0,
     "max": 20,
     "step": 2,
     "ylabel": "tys. mieszkańców",
     "rows": [
      [
       "Adamów",
       12
      ],
      [
       "Borowo",
       18
      ],
      [
       "Cisowo",
       8
      ],
      [
       "Dębno",
       14
      ]
     ],
     "alt": "Diagram słupkowy: Adamów 12, Borowo 18, Cisowo 8, Dębno 14 tysięcy mieszkańców"
    },
    "q": "Diagram pokazuje liczbę mieszkańców czterech gmin w tysiącach. O ile więcej mieszkańców ma Dębno niż Adamów?",
    "opts": [
     "2 000",
     "2",
     "14 000",
     "26 000"
    ],
    "ok": 0,
    "why": {
     "B": "Oś podaje tysiące. 2 tysiące to 2 000.",
     "C": "14 tys. to liczba mieszkańców Dębna, a nie różnica.",
     "D": "Dodałeś liczby zamiast je odjąć."
    },
    "sol": [
     "[[14 − 12 = 2]] tys., czyli [[2 000]]."
    ],
    "answer": "A, 2 000.",
    "tip": "O ile: różnica.",
    "check": [
     "(14 - 12)*1000 == 2000"
    ]
   }
  },
  {
   "id": "a5",
   "level": 1,
   "skills": [
    "D3"
   ],
   "type": "fields",
   "chart": {
    "kind": "pie",
    "rows": [
     [
      "telewizja",
      40
     ],
     [
      "internet",
      35
     ],
     [
      "radio",
      10
     ],
     [
      "prasa",
      15,
      false
     ]
    ],
    "alt": "Diagram kołowy: telewizja 40%, internet 35%, radio 10%, prasa nieznane"
   },
   "q": "W ankiecie o źródłach wiadomości wzięło udział 300 osób. Jaki procent ankietowanych wybrał prasę? Ile to osób?",
   "fields": [
    {
     "label": "Prasa (%)",
     "ans": 15,
     "show": "15%",
     "why": [
      [
       85,
       "85% to suma pozostałych wycinków. Prasa: 100% − 85%."
      ]
     ]
    },
    {
     "label": "Liczba osób",
     "ans": 45,
     "show": "45",
     "why": [
      [
       15,
       "15 to procent. Liczba osób: 15% z 300."
      ]
     ]
    }
   ],
   "sol": [
    "[[100% − 40% − 35% − 10% = 15%]].",
    "[[15% z 300 = 45]] osób."
   ],
   "answer": "15%, czyli 45 osób.",
   "tip": "1% z 300 to 3.",
   "check": [
    "100 - 40 - 35 - 10 == 15",
    "F(15, 100)*300 == 45"
   ],
   "twin": {
    "type": "fields",
    "chart": {
     "kind": "pie",
     "rows": [
      [
       "kawa",
       45
      ],
      [
       "herbata",
       30
      ],
      [
       "sok",
       20,
       false
      ],
      [
       "woda",
       5
      ]
     ],
     "alt": "Diagram kołowy: kawa 45%, herbata 30%, sok nieznane, woda 5%"
    },
    "q": "Diagram pokazuje, co do picia wybrało 500 gości. Jaki procent gości wybrał sok? Ilu to gości?",
    "fields": [
     {
      "label": "Sok (%)",
      "ans": 20,
      "show": "20%"
     },
     {
      "label": "Liczba gości",
      "ans": 100,
      "show": "100",
      "why": [
       [
        20,
        "20 to procent. Liczba gości: 20% z 500."
       ]
      ]
     }
    ],
    "sol": [
     "[[100% − 45% − 30% − 5% = 20%]].",
     "[[20% z 500 = 100]]."
    ],
    "answer": "20%, czyli 100 gości.",
    "tip": "10% z 500 to 50.",
    "check": [
     "100 - 45 - 30 - 5 == 20",
     "F(20, 100)*500 == 100"
    ]
   }
  },
  {
   "id": "a6",
   "level": 1,
   "skills": [
    "D4"
   ],
   "type": "fields",
   "chart": {
    "kind": "line",
    "x": {
     "cats": [
      "pon.",
      "wt.",
      "śr.",
      "czw.",
      "pt.",
      "sob.",
      "niedz."
     ]
    },
    "y": {
     "min": -8,
     "max": 4,
     "step": 2,
     "label": "°C"
    },
    "alt": "Wykres najniższej temperatury w nocy: pon. −4, wt. −6, śr. −2, czw. 0, pt. 2, sob. −2, niedz. −4 stopnie",
    "pts": [
     [
      0,
      -4
     ],
     [
      1,
      -6
     ],
     [
      2,
      -2
     ],
     [
      3,
      0
     ],
     [
      4,
      2
     ],
     [
      5,
      -2
     ],
     [
      6,
      -4
     ]
    ]
   },
   "q": "Wykres pokazuje najniższą temperaturę w kolejnych nocach tygodnia. Jaka była najniższa temperatura w całym tygodniu? O ile stopni cieplej było w piątek niż we wtorek?",
   "fields": [
    {
     "label": "Najniższa (°C)",
     "ans": -6,
     "show": "−6",
     "why": [
      [
       2,
       "2 °C to najwyższa temperatura. Najniższa to najniżej położony punkt."
      ],
      [
       -4,
       "Najniżej położony punkt jest we wtorek."
      ]
     ]
    },
    {
     "label": "O ile cieplej",
     "ans": 8,
     "show": "8",
     "why": [
      [
       4,
       "Od −6 do 2 jest 2 − (−6) = 8 stopni."
      ]
     ]
    }
   ],
   "sol": [
    "Najniżej jest punkt z wtorku: [[−6 °C]].",
    "[[2 − (−6) = 8]] stopni."
   ],
   "answer": "−6 °C, o 8 stopni.",
   "tip": "Odejmowanie liczby ujemnej to dodawanie.",
   "check": [
    "2 - (-6) == 8"
   ],
   "twin": {
    "type": "fields",
    "chart": {
     "kind": "line",
     "x": {
      "cats": [
       "6:00",
       "8:00",
       "10:00",
       "12:00",
       "14:00",
       "16:00",
       "18:00"
      ]
     },
     "y": {
      "min": -4,
      "max": 10,
      "step": 2,
      "label": "°C"
     },
     "alt": "Wykres temperatury: 6:00 −2, 8:00 0, 10:00 4, 12:00 6, 14:00 8, 16:00 6, 18:00 2 stopnie",
     "pts": [
      [
       0,
       -2
      ],
      [
       1,
       0
      ],
      [
       2,
       4
      ],
      [
       3,
       6
      ],
      [
       4,
       8
      ],
      [
       5,
       6
      ],
      [
       6,
       2
      ]
     ]
    },
    "q": "Wykres pokazuje temperaturę powietrza w ciągu dnia. O której godzinie było najcieplej? O ile stopni spadła temperatura od 14:00 do 18:00?",
    "fields": [
     {
      "label": "Godzina",
      "ans": 14,
      "show": "14",
      "why": [
       [
        8,
        "8 to temperatura (8 °C), a pytanie dotyczy godziny."
       ]
      ]
     },
     {
      "label": "Spadek (°C)",
      "ans": 6,
      "show": "6"
     }
    ],
    "note": "Godzinę wpisz jako liczbę, np. 14.",
    "sol": [
     "Najwyżej jest punkt o [[14:00]] (8 °C).",
     "Spadek: [[8 − 2 = 6]] stopni."
    ],
    "answer": "O 14:00, spadek o 6 stopni.",
    "tip": "Najcieplej: najwyższy punkt.",
    "check": [
     "8 - 2 == 6"
    ]
   }
  },
  {
   "id": "a7",
   "level": 1,
   "skills": [
    "D6"
   ],
   "type": "fields",
   "q": "Oblicz średnią arytmetyczną liczb: 7, 12, 9, 4, 13.",
   "fields": [
    {
     "label": "Średnia",
     "ans": 9,
     "show": "9",
     "why": [
      [
       11.25,
       "Liczb jest 5, więc dzielisz przez 5, a nie przez 4."
      ],
      [
       45,
       "45 to suma. Podziel ją przez 5."
      ]
     ]
    }
   ],
   "sol": [
    "Suma: [[7 + 12 + 9 + 4 + 13 = 45]].",
    "Średnia: [[45 : 5 = 9]]."
   ],
   "answer": "9.",
   "tip": "Policz liczby, zanim podzielisz.",
   "check": [
    "7 + 12 + 9 + 4 + 13 == 45",
    "45/5 == 9"
   ],
   "twin": {
    "type": "fields",
    "q": "Kasia w pięciu skokach w dal uzyskała: 3,2 m; 3,5 m; 2,9 m; 3,4 m; 3,0 m. Oblicz średnią długość skoku.",
    "fields": [
     {
      "label": "Średnia (m)",
      "ans": 3.2,
      "show": "3,2",
      "why": [
       [
        4,
        "Skoków jest 5, więc dzielisz przez 5."
       ]
      ]
     }
    ],
    "sol": [
     "Suma: [[3,2 + 3,5 + 2,9 + 3,4 + 3,0 = 16]].",
     "Średnia: [[16 : 5 = 3,2]] m."
    ],
    "answer": "3,2 m.",
    "tip": "Dodawaj dziesiąte części starannie.",
    "check": [
     "F('3.2') + F('3.5') + F('2.9') + F('3.4') + F('3.0') == 16",
     "F(16, 5) == F('3.2')"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Oblicz średnią arytmetyczną liczb: 15, 8, 11, 6.",
    "fields": [
     {
      "label": "Średnia",
      "ans": 10,
      "show": "10"
     }
    ],
    "sol": [
     "[[(15 + 8 + 11 + 6) : 4 = 40 : 4 = 10]]."
    ],
    "answer": "10.",
    "tip": "4 liczby, dzielisz przez 4.",
    "check": [
     "(15 + 8 + 11 + 6)/4 == 10"
    ]
   }
  },
  {
   "id": "a8",
   "level": 1,
   "skills": [
    "D6"
   ],
   "type": "abcd",
   "q": "Średnia arytmetyczna liczb −5, 0, 3, 8, 4 jest równa:",
   "opts": [
    "2,5",
    "4",
    "10",
    "2"
   ],
   "ok": 3,
   "why": {
    "A": "10 : 4 = 2,5. Zero też jest daną, więc dzielisz przez 5.",
    "B": "−5 dodajesz z minusem: suma to 10, a nie 20.",
    "C": "10 to suma. Trzeba ją podzielić przez liczbę danych."
   },
   "sol": [
    "Suma: [[−5 + 0 + 3 + 8 + 4 = 10]].",
    "Średnia: [[10 : 5 = 2]]."
   ],
   "answer": "D, 2.",
   "tip": "Danych jest 5, także zero.",
   "check": [
    "-5 + 0 + 3 + 8 + 4 == 10"
   ],
   "twin": {
    "type": "abcd",
    "q": "Średnia arytmetyczna liczb −6, 0, 2, 9, 5, 2 jest równa:",
    "opts": [
     "2,4",
     "2",
     "4",
     "12"
    ],
    "ok": 1,
    "why": {
     "A": "12 : 5 = 2,4. Zero też jest daną: dzielisz przez 6.",
     "C": "−6 dodajesz z minusem: suma to 12, a nie 24.",
     "D": "12 to suma, a nie średnia."
    },
    "sol": [
     "Suma: [[−6 + 0 + 2 + 9 + 5 + 2 = 12]].",
     "Średnia: [[12 : 6 = 2]]."
    ],
    "answer": "B, 2.",
    "tip": "Policz, ile jest liczb: 6.",
    "check": [
     "-6 + 0 + 2 + 9 + 5 + 2 == 12"
    ]
   }
  },
  {
   "id": "b1",
   "level": 2,
   "skills": [
    "D2"
   ],
   "type": "tn",
   "chart": {
    "kind": "cols",
    "min": 400,
    "max": 700,
    "step": 50,
    "ylabel": "sztuki",
    "rows": [
     [
      "2024 r.",
      500
     ],
     [
      "2025 r.",
      600
     ]
    ],
    "alt": "Diagram słupkowy z osią od 400: 2024 r. 500, 2025 r. 600 sztuk"
   },
   "q": "Diagram pokazuje, ile hulajnóg sprzedał sklep. Czy w 2025 roku sklep sprzedał dwa razy więcej hulajnóg niż w 2024 roku? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "N",
   "reasons": {
    "1": "słupek z 2025 roku jest dwa razy wyższy",
    "2": "600 : 500 = 1,2, czyli sprzedaż wzrosła o 20%",
    "3": "oś zaczyna się od 400, więc diagram jest błędny"
   },
   "okReason": "2",
   "sol": [
    "Oś zaczyna się od 400, więc słupki mylą. Odczytujemy liczby: [[500]] i [[600]].",
    "[[600 : 500 = 1,2]], czyli wzrost o 20%, a nie dwa razy.",
    "Diagram z osią od 400 nie jest błędny, tylko trzeba go czytać z liczb na osi."
   ],
   "answer": "N, uzasadnienie 2.",
   "tip": "Takie zadanie jest w informatorze CKE.",
   "check": [
    "F(600, 500) == F('1.2')",
    "(600 - 400) == 2*(500 - 400)"
   ],
   "twin": {
    "type": "tn",
    "chart": {
     "kind": "cols",
     "min": 50,
     "max": 200,
     "step": 25,
     "ylabel": "porcje",
     "rows": [
      [
       "kwiecień",
       100
      ],
      [
       "maj",
       150
      ]
     ],
     "alt": "Diagram słupkowy z osią od 50: kwiecień 100, maj 150 porcji lodów"
    },
    "q": "Diagram pokazuje, ile porcji lodów sprzedała lodziarnia. Czy w maju sprzedano o 100% więcej lodów niż w kwietniu? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "N",
    "reasons": {
     "1": "150 − 100 = 50, a 50 : 100 = 0,5, czyli o 50%",
     "2": "słupek z maja jest dwa razy wyższy",
     "3": "w maju sprzedano o 50 porcji więcej"
    },
    "okReason": "1",
    "sol": [
     "Liczby z osi: [[100]] i [[150]]. Różnica [[50]], [[50 : 100 = 50%]].",
     "Uzasadnienie 3 jest prawdziwe, ale mówi o porcjach, a nie o procentach."
    ],
    "answer": "N, uzasadnienie 1.",
    "tip": "Oś od 50.",
    "check": [
     "F(150 - 100, 100) == F('0.5')",
     "(150 - 50) == 2*(100 - 50)"
    ]
   }
  },
  {
   "id": "b2",
   "level": 2,
   "skills": [
    "D3",
    "D5"
   ],
   "type": "fields",
   "q": "Na diagramie kołowym wycinek „pieszo” ma kąt 126°. W ankiecie wzięło udział 200 uczniów. Jaki procent uczniów przychodzi do szkoły pieszo? Ilu to uczniów?",
   "fields": [
    {
     "label": "Procent",
     "ans": 35,
     "show": "35%",
     "why": [
      [
       126,
       "126° to kąt. Procent: 126 : 360 · 100%."
      ]
     ]
    },
    {
     "label": "Liczba uczniów",
     "ans": 70,
     "show": "70",
     "why": [
      [
       35,
       "35 to procent. Liczba uczniów: 35% z 200."
      ],
      [
       126,
       "126 to kąt, a nie liczba uczniów."
      ]
     ]
    }
   ],
   "sol": [
    "[[126° : 360° = 0,35 = 35%]].",
    "[[35% z 200 = 70]] uczniów."
   ],
   "answer": "35%, czyli 70 uczniów.",
   "tip": "10% koła to 36°, a 5% to 18°.",
   "check": [
    "F(126, 360) == F('0.35')",
    "F(35, 100)*200 == 70"
   ],
   "twin": {
    "type": "fields",
    "q": "Na diagramie kołowym wycinek „radio” ma kąt 54°. W ankiecie wzięło udział 400 osób. Jaki procent ankietowanych wybrał radio? Ile to osób?",
    "fields": [
     {
      "label": "Procent",
      "ans": 15,
      "show": "15%",
      "why": [
       [
        54,
        "54° to kąt."
       ]
      ]
     },
     {
      "label": "Liczba osób",
      "ans": 60,
      "show": "60"
     }
    ],
    "sol": [
     "[[54° : 360° = 0,15 = 15%]].",
     "[[15% z 400 = 60]]."
    ],
    "answer": "15%, czyli 60 osób.",
    "tip": "36° + 18° = 54°, czyli 10% + 5%.",
    "check": [
     "F(54, 360) == F('0.15')",
     "F(15, 100)*400 == 60"
    ]
   }
  },
  {
   "id": "b3",
   "level": 2,
   "skills": [
    "D5"
   ],
   "type": "fields",
   "q": "W klasie jest 30 uczniów: 15 uczy się angielskiego, 10 niemieckiego, a 5 hiszpańskiego. Oblicz kąty wycinków diagramu kołowego.",
   "fields": [
    {
     "label": "angielski (°)",
     "ans": 180,
     "show": "180",
     "why": [
      [
       50,
       "50 to procent. Kąt: połowa koła, czyli 180°."
      ]
     ]
    },
    {
     "label": "niemiecki (°)",
     "ans": 120,
     "show": "120",
     "why": [
      [
       10,
       "10 to liczba uczniów. Kąt: 10 : 30 · 360°."
      ],
      [
       100,
       "Całe koło ma 360°, a nie 300°."
      ]
     ]
    },
    {
     "label": "hiszpański (°)",
     "ans": 60,
     "show": "60"
    }
   ],
   "sol": [
    "Jeden uczeń to [[360° : 30 = 12°]].",
    "Angielski [[15 · 12° = 180°]], niemiecki [[10 · 12° = 120°]], hiszpański [[5 · 12° = 60°]].",
    "Sprawdzenie: [[180 + 120 + 60 = 360]]."
   ],
   "answer": "180°, 120° i 60°.",
   "tip": "Kąty razem muszą dać 360°.",
   "check": [
    "360/30 == 12",
    "15*12 == 180",
    "10*12 == 120",
    "5*12 == 60"
   ],
   "twin": {
    "type": "fields",
    "q": "W grupie jest 40 osób: 10 wybrało kino, 18 basen, a 12 kręgle. Oblicz kąty wycinków diagramu kołowego.",
    "fields": [
     {
      "label": "kino (°)",
      "ans": 90,
      "show": "90"
     },
     {
      "label": "basen (°)",
      "ans": 162,
      "show": "162",
      "why": [
       [
        18,
        "18 to liczba osób. Kąt: 18 · 9°."
       ]
      ]
     },
     {
      "label": "kręgle (°)",
      "ans": 108,
      "show": "108"
     }
    ],
    "sol": [
     "Jedna osoba to [[360° : 40 = 9°]].",
     "[[10 · 9° = 90°]], [[18 · 9° = 162°]], [[12 · 9° = 108°]]."
    ],
    "answer": "90°, 162° i 108°.",
    "tip": "Sprawdź: 90 + 162 + 108 = 360.",
    "check": [
     "360/40 == 9",
     "90 + 162 + 108 == 360"
    ]
   }
  },
  {
   "id": "b4",
   "level": 2,
   "skills": [
    "D4"
   ],
   "type": "pf",
   "chart": {
    "kind": "line",
    "x": {
     "min": 0,
     "max": 40,
     "step": 5,
     "label": "czas (min)"
    },
    "y": {
     "min": 0,
     "max": 3,
     "step": 0.5,
     "label": "odległość od domu (km)"
    },
    "alt": "Wykres: od 0 do 10 min odległość rośnie do 1 km, do 15 min stoi, do 20 min maleje do 0, do 25 min stoi w domu, do 35 min rośnie do 3 km, do 40 min stoi",
    "pts": [
     [
      0,
      0
     ],
     [
      10,
      1
     ],
     [
      15,
      1
     ],
     [
      20,
      0
     ],
     [
      25,
      0
     ],
     [
      35,
      3
     ],
     [
      40,
      3
     ]
    ]
   },
   "q": "Tomek poszedł na przystanek, ale zapomniał biletu i wrócił do domu. Potem pojechał do szkoły rowerem. Wykres pokazuje jego odległość od domu. Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Tomek był na przystanku przez 5 minut.",
     "ok": "P"
    },
    {
     "t": "Po 20 minutach Tomek był 1 km od domu.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> Pozioma linia na wysokości 1 km: od 10. do 15. minuty. Prawda.",
    "<b>Zdanie 2.</b> W 20. minucie wykres jest na 0 km: Tomek był w domu. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Poziomo: stoi w miejscu. W dół: wraca w stronę domu.",
   "check": [
    "15 - 10 == 5"
   ],
   "twin": {
    "type": "pf",
    "chart": {
     "kind": "line",
     "x": {
      "min": 0,
      "max": 40,
      "step": 5,
      "label": "czas (min)"
     },
     "y": {
      "min": 0,
      "max": 3,
      "step": 0.5,
      "label": "odległość od domu (km)"
     },
     "alt": "Wykres: od 0 do 10 min odległość rośnie do 1 km, do 15 min stoi, do 20 min maleje do 0, do 25 min stoi w domu, do 35 min rośnie do 3 km, do 40 min stoi",
     "pts": [
      [
       0,
       0
      ],
      [
       10,
       1
      ],
      [
       15,
       1
      ],
      [
       20,
       0
      ],
      [
       25,
       0
      ],
      [
       35,
       3
      ],
      [
       40,
       3
      ]
     ]
    },
    "q": "Wykres pokazuje odległość Tomka od domu (tak jak w poprzednim zadaniu). Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Od 15. do 20. minuty Tomek wracał do domu.",
      "ok": "P"
     },
     {
      "t": "Szkoła jest 1 km od domu Tomka.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> Linia spada z 1 km do 0 km. Prawda.",
     "<b>Zdanie 2.</b> 1 km od domu jest przystanek. Szkoła jest na końcu wykresu: 3 km. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Koniec wykresu to cel podróży.",
    "check": [
     "True"
    ]
   }
  },
  {
   "id": "b5",
   "level": 2,
   "skills": [
    "D6"
   ],
   "type": "fields",
   "data": {
    "head": [
     "ocena",
     "2",
     "3",
     "4",
     "5",
     "6"
    ],
    "rows": [
     [
      "liczba uczniów",
      2,
      5,
      8,
      4,
      1
     ]
    ]
   },
   "q": "Tabela pokazuje oceny z kartkówki w klasie 8c. Oblicz średnią ocen.",
   "fields": [
    {
     "label": "Średnia",
     "ans": 3.85,
     "show": "3,85",
     "why": [
      [
       4,
       "(2 + 3 + 4 + 5 + 6) : 5 = 4 to średnia z nagłówków. Każdą ocenę liczysz tyle razy, ilu uczniów ją dostało."
      ]
     ]
    }
   ],
   "sol": [
    "Uczniów: [[2 + 5 + 8 + 4 + 1 = 20]].",
    "Suma ocen: [[2 · 2 + 3 · 5 + 4 · 8 + 5 · 4 + 6 · 1 = 4 + 15 + 32 + 20 + 6 = 77]].",
    "Średnia: [[77 : 20 = 3,85]]."
   ],
   "answer": "3,85.",
   "tip": "Dzielisz przez liczbę uczniów, a nie przez liczbę kolumn.",
   "check": [
    "2*2 + 3*5 + 4*8 + 5*4 + 6*1 == 77",
    "F(77, 20) == F('3.85')"
   ],
   "twin": {
    "type": "fields",
    "data": {
     "head": [
      "liczba rodzeństwa",
      "0",
      "1",
      "2",
      "3"
     ],
     "rows": [
      [
       "liczba uczniów",
       4,
       10,
       5,
       1
      ]
     ]
    },
    "q": "Tabela pokazuje, ile rodzeństwa mają uczniowie klasy 8a. Oblicz średnią liczbę rodzeństwa na ucznia.",
    "fields": [
     {
      "label": "Średnia",
      "ans": 1.15,
      "show": "1,15",
      "why": [
       [
        1.5,
        "To średnia z nagłówków tabeli."
       ]
      ]
     }
    ],
    "sol": [
     "Uczniów: [[20]].",
     "Suma: [[0 · 4 + 1 · 10 + 2 · 5 + 3 · 1 = 23]].",
     "Średnia: [[23 : 20 = 1,15]]."
    ],
    "answer": "1,15.",
    "tip": "Mnożysz wartość przez liczbę uczniów.",
    "check": [
     "F(23, 20) == F('1.15')"
    ]
   }
  },
  {
   "id": "b6",
   "level": 2,
   "skills": [
    "D7"
   ],
   "type": "pair",
   "q": "Średnia arytmetyczna trzech liczb a, b, c jest równa 8, a średnia arytmetyczna dwóch liczb d i e jest równa 13. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "Suma liczb d i e jest większa od sumy liczb a, b, c o",
     "opts": {
      "A": "2",
      "B": "5"
     },
     "ok": "A"
    },
    {
     "label": "Średnia arytmetyczna wszystkich pięciu liczb jest równa",
     "opts": {
      "C": "10",
      "D": "10,5"
     },
     "ok": "C"
    }
   ],
   "sol": [
    "Sumy: [[a + b + c = 3 · 8 = 24]], [[d + e = 2 · 13 = 26]]. Różnica: [[26 − 24 = 2]]. Odpowiedź 5 to różnica średnich 13 − 8.",
    "Wszystkie liczby: [[(24 + 26) : 5 = 10]]. Odpowiedź 10,5 to średnia ze średnich (8 + 13) : 2."
   ],
   "answer": "A i C.",
   "tip": "Tak wyglądało zadanie 4 z egzaminu w 2025 roku.",
   "check": [
    "2*13 - 3*8 == 2",
    "(24 + 26)/5 == 10",
    "(8 + 13)/2 == 10.5"
   ],
   "twin": {
    "type": "pair",
    "q": "Średnia arytmetyczna czterech liczb jest równa 6, a średnia arytmetyczna dwóch innych liczb jest równa 15. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Suma dwóch liczb jest większa od sumy czterech liczb o",
      "opts": {
       "A": "9",
       "B": "6"
      },
      "ok": "B"
     },
     {
      "label": "Średnia arytmetyczna wszystkich sześciu liczb jest równa",
      "opts": {
       "C": "9",
       "D": "10,5"
      },
      "ok": "C"
     }
    ],
    "sol": [
     "Sumy: [[4 · 6 = 24]] i [[2 · 15 = 30]], różnica [[6]].",
     "Średnia: [[(24 + 30) : 6 = 9]]. 10,5 to średnia ze średnich."
    ],
    "answer": "B i C.",
    "tip": "Licz sumy.",
    "check": [
     "2*15 - 4*6 == 6",
     "(24 + 30)/6 == 9"
    ]
   }
  },
  {
   "id": "b7",
   "level": 2,
   "skills": [
    "D7"
   ],
   "type": "abcd",
   "q": "Średnia arytmetyczna dwóch liczb x i y jest równa 6, a średnia arytmetyczna trzech liczb x, y, z jest równa 9. Liczba z jest równa:",
   "opts": [
    "12",
    "15",
    "3",
    "21"
   ],
   "ok": 1,
   "why": {
    "A": "(6 + 12) : 2 = 9 to średnia ze średniej i z. Średnia trzech liczb to ich suma podzielona przez 3.",
    "C": "9 − 6 = 3 to różnica średnich, a nie liczba z.",
    "D": "Suma x i y to 2 · 6 = 12, a nie 6."
   },
   "sol": [
    "[[x + y = 2 · 6 = 12]].",
    "[[x + y + z = 3 · 9 = 27]].",
    "[[z = 27 − 12 = 15]]."
   ],
   "answer": "B, 15.",
   "tip": "Tak wyglądało zadanie 9 z egzaminu w 2026 roku.",
   "check": [
    "3*9 - 2*6 == 15"
   ],
   "twin": {
    "type": "abcd",
    "q": "Średnia arytmetyczna dwóch liczb x i y jest równa 10, a średnia arytmetyczna trzech liczb x, y, z jest równa 8. Liczba z jest równa:",
    "opts": [
     "6",
     "2",
     "14",
     "4"
    ],
    "ok": 3,
    "why": {
     "A": "(10 + 6) : 2 = 8 to średnia ze średniej i z, a nie średnia trzech liczb.",
     "B": "10 − 8 = 2 to różnica średnich.",
     "C": "Suma x i y to 20, a nie 10."
    },
    "sol": [
     "[[x + y = 20]], [[x + y + z = 24]], [[z = 4]]."
    ],
    "answer": "D, 4.",
    "tip": "Nowa średnia jest mniejsza, więc z jest mniejsze od średniej.",
    "check": [
     "3*8 - 2*10 == 4"
    ]
   }
  },
  {
   "id": "c1",
   "level": 3,
   "skills": [
    "D7"
   ],
   "type": "self",
   "q": "Średnia pięciu ocen Oli z matematyki to 4,2. Po kolejnej ocenie średnia wzrosła do 4,5. Jaką ocenę dostała Ola? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczyłeś sumę pięciu ocen: 5 · 4,2 = 21.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś sumę sześciu ocen 6 · 4,5 = 27 i podałeś ocenę 27 − 21 = 6.",
     "pts": 1
    }
   ],
   "sol": [
    "Suma pięciu ocen: [[5 · 4,2 = 21]].",
    "Suma sześciu ocen: [[6 · 4,5 = 27]].",
    "Nowa ocena: [[27 − 21 = 6]]."
   ],
   "answer": "Ola dostała 6.",
   "tip": "Sprawdzenie: (21 + 6) : 6 = 4,5.",
   "check": [
    "5*F('4.2') == 21",
    "6*F('4.5') == 27"
   ],
   "twin": {
    "type": "self",
    "q": "Średnia wieku czterech zawodników drużyny to 15 lat. Po dołączeniu trenera średnia wieku wzrosła do 20 lat. Ile lat ma trener? Zapisz obliczenia.",
    "criteria": [
     {
      "t": "Obliczyłeś sumę wieku zawodników: 4 · 15 = 60.",
      "pts": 1
     },
     {
      "t": "Obliczyłeś 5 · 20 = 100 i wiek trenera 40 lat.",
      "pts": 1
     }
    ],
    "sol": [
     "[[4 · 15 = 60]], [[5 · 20 = 100]], [[100 − 60 = 40]]."
    ],
    "answer": "40 lat.",
    "tip": "Suma = średnia · liczba osób.",
    "check": [
     "5*20 - 4*15 == 40"
    ]
   }
  },
  {
   "id": "c2",
   "level": 3,
   "skills": [
    "D3",
    "D5"
   ],
   "type": "self",
   "q": "W ankiecie wzięło udział 80 uczniów. Wycieczkę w góry wybrało 32 uczniów, nad morze 24, do Warszawy 16, a pozostali do Krakowa. Oblicz, jaki procent uczniów wybrał każdą propozycję, i kąty wycinków diagramu kołowego. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczyłeś liczbę uczniów dla Krakowa (8) i procenty: 40%, 30%, 20%, 10%.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś kąty: 144°, 108°, 72°, 36° (razem 360°).",
     "pts": 1
    }
   ],
   "sol": [
    "Kraków: [[80 − 32 − 24 − 16 = 8]].",
    "Procenty: [[32 : 80 = 40%]], [[24 : 80 = 30%]], [[16 : 80 = 20%]], [[8 : 80 = 10%]].",
    "Kąty (1% = 3,6°): [[144°]], [[108°]], [[72°]], [[36°]]. Razem [[360°]]."
   ],
   "answer": "40%, 30%, 20%, 10%; kąty 144°, 108°, 72°, 36°.",
   "tip": "10% to 36°, więc kąt = procent · 3,6°.",
   "check": [
    "80 - 32 - 24 - 16 == 8",
    "F(32, 80) == F('0.4')",
    "F(24, 80) == F('0.3')",
    "40*F('3.6') == 144",
    "144 + 108 + 72 + 36 == 360"
   ],
   "twin": {
    "type": "self",
    "q": "W ankiecie wzięło udział 120 osób. Pizzę wybrało 54 osoby, pierogi 30, sałatkę 24, a pozostali zupę. Oblicz procenty i kąty wycinków diagramu kołowego. Zapisz obliczenia.",
    "criteria": [
     {
      "t": "Zupa: 12 osób. Procenty: 45%, 25%, 20%, 10%.",
      "pts": 1
     },
     {
      "t": "Kąty: 162°, 90°, 72°, 36°.",
      "pts": 1
     }
    ],
    "sol": [
     "Zupa: [[120 − 54 − 30 − 24 = 12]].",
     "[[45%]], [[25%]], [[20%]], [[10%]].",
     "[[162°]], [[90°]], [[72°]], [[36°]]."
    ],
    "answer": "45%, 25%, 20%, 10%; 162°, 90°, 72°, 36°.",
    "tip": "Sprawdź: kąty dają 360°.",
    "check": [
     "120 - 54 - 30 - 24 == 12",
     "F(54, 120) == F('0.45')",
     "162 + 90 + 72 + 36 == 360"
    ]
   }
  },
  {
   "id": "c3",
   "level": 3,
   "skills": [
    "D4"
   ],
   "type": "self",
   "chart": {
    "kind": "line",
    "x": {
     "min": 0,
     "max": 3,
     "step": 0.5,
     "label": "czas (h)"
    },
    "y": {
     "min": 0,
     "max": 35,
     "step": 5,
     "label": "odległość (km)"
    },
    "alt": "Wykres: w pierwszej godzinie odległość rośnie do 15 km, przez pół godziny stoi, potem przez 1,5 godziny rośnie do 30 km",
    "pts": [
     [
      0,
      0
     ],
     [
      1,
      15
     ],
     [
      1.5,
      15
     ],
     [
      3,
      30
     ]
    ]
   },
   "q": "Wykres pokazuje, jak zmieniała się odległość pana Adama od domu podczas wycieczki rowerowej. Oblicz jego średnią prędkość przed postojem i po postoju. Kiedy jechał szybciej? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Odczytałeś z wykresu: przed postojem 15 km w 1 h, po postoju 15 km w 1,5 h.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś prędkości 15 km/h i 10 km/h i odpowiedziałeś: szybciej przed postojem.",
     "pts": 1
    }
   ],
   "sol": [
    "Przed postojem: [[15 km w 1 h]], czyli [[15 km/h]].",
    "Po postoju: od 1,5 h do 3 h, z 15 km do 30 km: [[15 km w 1,5 h]], czyli [[15 : 1,5 = 10 km/h]].",
    "Szybciej jechał przed postojem."
   ],
   "answer": "15 km/h przed postojem, 10 km/h po nim. Szybciej przed postojem.",
   "tip": "Postój (linia pozioma) nie wlicza się do czasu jazdy po postoju: liczysz od 1,5 h do 3 h.",
   "check": [
    "30 - 15 == 15",
    "15/F('1.5') == 10"
   ],
   "twin": {
    "type": "self",
    "chart": {
     "kind": "line",
     "x": {
      "min": 0,
      "max": 4,
      "step": 1,
      "label": "czas (h)"
     },
     "y": {
      "min": 0,
      "max": 35,
      "step": 5,
      "label": "odległość (km)"
     },
     "alt": "Wykres: przez 2 godziny odległość rośnie do 20 km, przez godzinę stoi, w ostatniej godzinie rośnie do 35 km",
     "pts": [
      [
       0,
       0
      ],
      [
       2,
       20
      ],
      [
       3,
       20
      ],
      [
       4,
       35
      ]
     ]
    },
    "q": "Wykres pokazuje odległość pani Ewy od domu podczas wycieczki rowerowej. Oblicz jej średnią prędkość przed postojem i po postoju. Kiedy jechała szybciej? Zapisz obliczenia.",
    "criteria": [
     {
      "t": "Odczytałeś: 20 km w 2 h, potem 15 km w 1 h.",
      "pts": 1
     },
     {
      "t": "Prędkości 10 km/h i 15 km/h, szybciej po postoju.",
      "pts": 1
     }
    ],
    "sol": [
     "Przed: [[20 : 2 = 10 km/h]].",
     "Po: [[35 − 20 = 15]] km w 1 h, [[15 km/h]]. Szybciej po postoju."
    ],
    "answer": "10 km/h i 15 km/h, szybciej po postoju.",
    "tip": "Bardziej stroma linia: większa prędkość.",
    "check": [
     "20/2 == 10",
     "35 - 20 == 15"
    ]
   }
  },
  {
   "id": "c4",
   "level": 3,
   "skills": [
    "D2",
    "D6"
   ],
   "type": "self",
   "chart": {
    "kind": "cols",
    "min": 0,
    "max": 80,
    "step": 10,
    "ylabel": "zł",
    "rows": [
     [
      "styczeń",
      40
     ],
     [
      "luty",
      70
     ],
     [
      "marzec",
      50
     ],
     [
      "kwiecień",
      60
     ]
    ],
    "alt": "Diagram słupkowy: styczeń 40 zł, luty 70 zł, marzec 50 zł, kwiecień 60 zł"
   },
   "q": "Diagram pokazuje, ile złotych Kuba odkładał w kolejnych miesiącach. Ile złotych musi odłożyć w maju, żeby średnio odkładał 60 zł miesięcznie przez te pięć miesięcy? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Odczytałeś kwoty i obliczyłeś sumę: 40 + 70 + 50 + 60 = 220 zł.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś 5 · 60 = 300 zł i kwotę na maj: 300 − 220 = 80 zł.",
     "pts": 1
    }
   ],
   "sol": [
    "Suma z czterech miesięcy: [[40 + 70 + 50 + 60 = 220]] zł.",
    "Potrzebna suma z pięciu miesięcy: [[5 · 60 = 300]] zł.",
    "Maj: [[300 − 220 = 80]] zł."
   ],
   "answer": "80 zł.",
   "tip": "Średnia 60 zł przez 5 miesięcy to razem 300 zł.",
   "check": [
    "40 + 70 + 50 + 60 == 220",
    "5*60 - 220 == 80"
   ],
   "twin": {
    "type": "self",
    "chart": {
     "kind": "cols",
     "min": 0,
     "max": 70,
     "step": 10,
     "ylabel": "zł",
     "rows": [
      [
       "styczeń",
       30
      ],
      [
       "luty",
       45
      ],
      [
       "marzec",
       25
      ],
      [
       "kwiecień",
       40
      ]
     ],
     "alt": "Diagram słupkowy: styczeń 30 zł, luty 45 zł, marzec 25 zł, kwiecień 40 zł"
    },
    "q": "Diagram pokazuje, ile złotych Zosia odkładała w kolejnych miesiącach. Ile musi odłożyć w maju, żeby średnio odkładała 40 zł miesięcznie przez pięć miesięcy? Zapisz obliczenia.",
    "criteria": [
     {
      "t": "Suma czterech miesięcy: 140 zł.",
      "pts": 1
     },
     {
      "t": "5 · 40 = 200 zł, maj: 60 zł.",
      "pts": 1
     }
    ],
    "sol": [
     "[[30 + 45 + 25 + 40 = 140]] zł.",
     "[[5 · 40 − 140 = 60]] zł."
    ],
    "answer": "60 zł.",
    "tip": "45 i 25 leżą w połowie między liniami.",
    "check": [
     "30 + 45 + 25 + 40 == 140",
     "5*40 - 140 == 60"
    ]
   }
  },
  {
   "id": "c5",
   "level": 3,
   "skills": [
    "D7"
   ],
   "type": "self",
   "q": "W klasie jest 12 dziewcząt i 8 chłopców. Średni wzrost dziewcząt to 160 cm, a chłopców 165 cm. Oblicz średni wzrost wszystkich uczniów tej klasy. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczyłeś sumy wzrostu: 12 · 160 = 1 920 cm i 8 · 165 = 1 320 cm.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś średnią: 3 240 : 20 = 162 cm.",
     "pts": 1
    }
   ],
   "sol": [
    "Dziewczęta: [[12 · 160 = 1 920]] cm. Chłopcy: [[8 · 165 = 1 320]] cm.",
    "Razem: [[3 240]] cm, uczniów 20, średnia [[3 240 : 20 = 162]] cm.",
    "To nie jest (160 + 165) : 2 = 162,5 cm, bo dziewcząt jest więcej niż chłopców."
   ],
   "answer": "162 cm.",
   "tip": "Średnia jest bliżej średniej liczniejszej grupy.",
   "check": [
    "12*160 == 1920",
    "8*165 == 1320",
    "(1920 + 1320)/20 == 162"
   ],
   "twin": {
    "type": "self",
    "q": "Grupa A (10 osób) napisała test średnio na 18 punktów, a grupa B (15 osób) średnio na 23 punkty. Oblicz średni wynik wszystkich 25 osób. Zapisz obliczenia.",
    "criteria": [
     {
      "t": "Sumy punktów: 180 i 345.",
      "pts": 1
     },
     {
      "t": "Średnia: 525 : 25 = 21 punktów.",
      "pts": 1
     }
    ],
    "sol": [
     "[[10 · 18 = 180]], [[15 · 23 = 345]].",
     "[[(180 + 345) : 25 = 21]]."
    ],
    "answer": "21 punktów.",
    "tip": "Nie licz (18 + 23) : 2.",
    "check": [
     "(10*18 + 15*23)/25 == 21"
    ]
   }
  }
 ],
 "test": [
  {
   "id": "t1",
   "skills": [
    "D1"
   ],
   "type": "fields",
   "data": {
    "head": [
     "rok",
     "2021",
     "2022",
     "2023",
     "2024"
    ],
    "rows": [
     [
      "liczba uczniów",
      412,
      438,
      455,
      470
     ]
    ]
   },
   "q": "Tabela pokazuje liczbę uczniów w szkole w kolejnych latach. O ile wzrosła liczba uczniów od 2021 do 2024 roku?",
   "fields": [
    {
     "label": "O ile",
     "ans": 58,
     "show": "58"
    }
   ],
   "sol": [
    "[[470 − 412 = 58]]."
   ],
   "answer": "O 58 uczniów.",
   "tip": "Różnica.",
   "check": [
    "470 - 412 == 58"
   ],
   "pts": 1
  },
  {
   "id": "t2",
   "skills": [
    "D2"
   ],
   "type": "fields",
   "chart": {
    "kind": "cols",
    "min": 0,
    "max": 60,
    "step": 10,
    "ylabel": "kg",
    "rows": [
     [
      "7a",
      25
     ],
     [
      "7b",
      40
     ],
     [
      "8a",
      55
     ],
     [
      "8b",
      30
     ]
    ],
    "alt": "Diagram słupkowy: 7a 25 kg, 7b 40 kg, 8a 55 kg, 8b 30 kg"
   },
   "q": "Diagram pokazuje, ile kilogramów makulatury zebrały klasy. Ile kilogramów makulatury zebrały wszystkie klasy razem?",
   "fields": [
    {
     "label": "Razem (kg)",
     "ans": 150,
     "show": "150"
    }
   ],
   "sol": [
    "[[25 + 40 + 55 + 30 = 150]] kg."
   ],
   "answer": "150 kg.",
   "tip": "Linie co 10.",
   "check": [
    "25 + 40 + 55 + 30 == 150"
   ],
   "pts": 1
  },
  {
   "id": "t3",
   "skills": [
    "D2"
   ],
   "type": "tn",
   "chart": {
    "kind": "cols",
    "min": 80,
    "max": 140,
    "step": 10,
    "ylabel": "tys. zł",
    "rows": [
     [
      "2024 r.",
      100
     ],
     [
      "2025 r.",
      120
     ]
    ],
    "alt": "Diagram słupkowy z osią od 80: 2024 r. 100, 2025 r. 120 tysięcy złotych"
   },
   "q": "Diagram pokazuje przychody firmy. Czy w 2025 roku przychód był dwa razy większy niż w 2024 roku? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "N",
   "reasons": {
    "1": "120 : 100 = 1,2, czyli przychód wzrósł o 20%",
    "2": "słupek z 2025 roku jest dwa razy wyższy",
    "3": "przychód wzrósł o 20 tysięcy złotych, a więc dwa razy"
   },
   "okReason": "1",
   "sol": [
    "Oś zaczyna się od 80. Liczby: [[100]] i [[120]] tys. zł. [[120 : 100 = 1,2]], czyli wzrost o 20%."
   ],
   "answer": "N, uzasadnienie 1.",
   "tip": "Porównuj liczby z osi.",
   "check": [
    "F(120, 100) == F('1.2')",
    "(120 - 80) == 2*(100 - 80)"
   ],
   "pts": 1
  },
  {
   "id": "t4",
   "skills": [
    "D3"
   ],
   "type": "fields",
   "chart": {
    "kind": "pie",
    "rows": [
     [
      "angielski",
      45
     ],
     [
      "niemiecki",
      30
     ],
     [
      "francuski",
      15
     ],
     [
      "hiszpański",
      10,
      false
     ]
    ],
    "alt": "Diagram kołowy: angielski 45%, niemiecki 30%, francuski 15%, hiszpański nieznane"
   },
   "q": "Diagram pokazuje, jaki język obcy wybrało 240 uczniów. Ilu uczniów wybrało hiszpański?",
   "fields": [
    {
     "label": "Liczba uczniów",
     "ans": 24,
     "show": "24"
    }
   ],
   "sol": [
    "[[100% − 45% − 30% − 15% = 10%]].",
    "[[10% z 240 = 24]]."
   ],
   "answer": "24 uczniów.",
   "tip": "Brakujący wycinek.",
   "check": [
    "100 - 45 - 30 - 15 == 10",
    "F(10, 100)*240 == 24"
   ],
   "pts": 1
  },
  {
   "id": "t5",
   "skills": [
    "D5"
   ],
   "type": "abcd",
   "q": "W klasie jest 25 uczniów, a 10 z nich dojeżdża do szkoły autobusem. Wycinek „autobus” na diagramie kołowym ma kąt:",
   "opts": [
    "144°",
    "40°",
    "10°",
    "36°"
   ],
   "ok": 0,
   "why": {
    "B": "40 to procent (40%), a nie kąt. 40% z 360° to 144°.",
    "C": "10 to liczba uczniów, a nie kąt.",
    "D": "36° to 10% koła. Autobus to 10 z 25 uczniów, czyli 40%."
   },
   "sol": [
    "[[10 : 25 = 0,4 = 40%]].",
    "[[40% z 360° = 144°]]."
   ],
   "answer": "A, 144°.",
   "tip": "Jeden uczeń to 360° : 25 = 14,4°.",
   "check": [
    "F(10, 25)*360 == 144"
   ],
   "pts": 1
  },
  {
   "id": "t6",
   "skills": [
    "D4"
   ],
   "type": "fields",
   "chart": {
    "kind": "line",
    "x": {
     "min": 0,
     "max": 6,
     "step": 1,
     "label": "czas (h)"
    },
    "y": {
     "min": 0,
     "max": 60,
     "step": 10,
     "label": "woda (l)"
    },
    "alt": "Wykres ilości wody w zbiorniku: 0 h 50 l, 1 h 40 l, 2 h 30 l, 3 h 30 l, 4 h 20 l, 5 h 40 l, 6 h 60 l",
    "pts": [
     [
      0,
      50
     ],
     [
      1,
      40
     ],
     [
      2,
      30
     ],
     [
      3,
      30
     ],
     [
      4,
      20
     ],
     [
      5,
      40
     ],
     [
      6,
      60
     ]
    ]
   },
   "q": "Wykres pokazuje, ile litrów wody było w zbiorniku w kolejnych godzinach. Przez ile godzin ilość wody się nie zmieniała? Ile litrów wody było w zbiorniku po 5 godzinach?",
   "fields": [
    {
     "label": "Godziny",
     "ans": 1,
     "show": "1"
    },
    {
     "label": "Woda (l)",
     "ans": 40,
     "show": "40"
    }
   ],
   "sol": [
    "Pozioma linia od 2. do 3. godziny: [[1]] godzina.",
    "Po 5 godzinach: [[40]] l."
   ],
   "answer": "1 godzina, 40 l.",
   "tip": "Poziomo: bez zmian.",
   "check": [
    "3 - 2 == 1"
   ],
   "pts": 1
  },
  {
   "id": "t7",
   "skills": [
    "D4"
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
      "pt."
     ]
    },
    "y": {
     "min": -4,
     "max": 6,
     "step": 2,
     "label": "°C"
    },
    "alt": "Wykres temperatury: pon. −2, wt. 0, śr. 4, czw. 4, pt. −4 stopnie",
    "pts": [
     [
      0,
      -2
     ],
     [
      1,
      0
     ],
     [
      2,
      4
     ],
     [
      3,
      4
     ],
     [
      4,
      -4
     ]
    ]
   },
   "q": "Wykres pokazuje temperaturę o 7:00 w kolejnych dniach. Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "W środę i w czwartek temperatura była taka sama.",
     "ok": "P"
    },
    {
     "t": "Najniższa temperatura była w poniedziałek.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> Obie po 4 °C: pozioma linia. Prawda.",
    "<b>Zdanie 2.</b> Najniżej jest punkt z piątku: −4 °C. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Najniższy punkt wykresu.",
   "check": [
    "-4 < -2"
   ],
   "pts": 1
  },
  {
   "id": "t8",
   "skills": [
    "D6"
   ],
   "type": "fields",
   "q": "Oblicz średnią arytmetyczną liczb: 12, −3, 0, 7, 9.",
   "fields": [
    {
     "label": "Średnia",
     "ans": 5,
     "show": "5"
    }
   ],
   "sol": [
    "Suma [[25]], średnia [[25 : 5 = 5]]."
   ],
   "answer": "5.",
   "tip": "Zero też się liczy.",
   "check": [
    "(12 - 3 + 0 + 7 + 9)/5 == 5"
   ],
   "pts": 1
  },
  {
   "id": "t9",
   "skills": [
    "D6"
   ],
   "type": "abcd",
   "data": {
    "head": [
     "liczba zwierząt w domu",
     "0",
     "1",
     "2"
    ],
    "rows": [
     [
      "liczba uczniów",
      5,
      12,
      3
     ]
    ]
   },
   "q": "Tabela pokazuje, ile zwierząt mają w domu uczniowie klasy 8b. Średnia liczba zwierząt na ucznia jest równa:",
   "opts": [
    "1",
    "6",
    "0,9",
    "18"
   ],
   "ok": 2,
   "why": {
    "A": "(0 + 1 + 2) : 3 = 1 to średnia z nagłówków tabeli.",
    "B": "18 : 3 = 6: podzieliłeś przez liczbę kolumn, a trzeba przez liczbę uczniów (20).",
    "D": "18 to liczba wszystkich zwierząt. Trzeba ją podzielić przez 20."
   },
   "sol": [
    "Uczniów: [[5 + 12 + 3 = 20]]. Zwierząt: [[0 · 5 + 1 · 12 + 2 · 3 = 18]].",
    "Średnia: [[18 : 20 = 0,9]]."
   ],
   "answer": "C, 0,9.",
   "tip": "Średnia może być mniejsza od 1.",
   "check": [
    "F(0*5 + 1*12 + 2*3, 20) == F('0.9')"
   ],
   "pts": 1
  },
  {
   "id": "t10",
   "skills": [
    "D7"
   ],
   "type": "pair",
   "q": "Średnia arytmetyczna pięciu liczb jest równa 7. Dopisano do nich liczbę 13. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "Suma sześciu liczb jest równa",
     "opts": {
      "A": "48",
      "B": "20"
     },
     "ok": "A"
    },
    {
     "label": "Średnia arytmetyczna sześciu liczb jest równa",
     "opts": {
      "C": "8",
      "D": "10"
     },
     "ok": "C"
    }
   ],
   "sol": [
    "[[5 · 7 + 13 = 48]].",
    "[[48 : 6 = 8]]. 10 to (7 + 13) : 2, czyli średnia ze średniej i nowej liczby."
   ],
   "answer": "A i C.",
   "tip": "Suma = średnia · liczba danych.",
   "check": [
    "5*7 + 13 == 48",
    "48/6 == 8"
   ],
   "pts": 1
  },
  {
   "id": "t11",
   "skills": [
    "D7"
   ],
   "type": "self",
   "q": "Średnia długość skoków czterech skoczków to 110 m. Po skoku piątego zawodnika średnia spadła do 108 m. Ile metrów skoczył piąty zawodnik? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczyłeś sumy: 4 · 110 = 440 m i 5 · 108 = 540 m.",
     "pts": 1
    },
    {
     "t": "Podałeś wynik: 540 − 440 = 100 m.",
     "pts": 1
    }
   ],
   "sol": [
    "[[4 · 110 = 440]] m, [[5 · 108 = 540]] m.",
    "[[540 − 440 = 100]] m."
   ],
   "answer": "100 m.",
   "tip": "Średnia spadła, więc skok był krótszy niż 108 m.",
   "check": [
    "5*108 - 4*110 == 100"
   ],
   "pts": 2
  },
  {
   "id": "t12",
   "skills": [
    "D3",
    "D5"
   ],
   "type": "self",
   "q": "Lodziarnia sprzedała w ciągu dnia 60 porcji lodów: 27 waniliowych, 18 czekoladowych, a resztę truskawkowych. Oblicz, jaki procent sprzedanych porcji stanowiły lody truskawkowe, i kąt wycinka „truskawkowe” na diagramie kołowym. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczyłeś liczbę porcji truskawkowych (15) i procent: 15 : 60 = 25%.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś kąt: 25% z 360° = 90°.",
     "pts": 1
    }
   ],
   "sol": [
    "[[60 − 27 − 18 = 15]] porcji.",
    "[[15 : 60 = 0,25 = 25%]].",
    "[[25% z 360° = 90°]]."
   ],
   "answer": "25%, kąt 90°.",
   "tip": "Ćwiartka koła to 25% i 90°.",
   "check": [
    "60 - 27 - 18 == 15",
    "F(15, 60) == F('0.25')",
    "F(15, 60)*360 == 90"
   ],
   "pts": 2
  }
 ],
 "test_minutes": 35,
 "pass": 12,
 "dzial": "Dział 4: Dane i prawdopodobieństwo"
};
