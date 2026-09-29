/* Wygenerowane przez zbuduj.py z tresc/powtorka-dzial-1.py. Nie edytuj ręcznie. */
window.TEMAT = {
 "slug": "powtorka-dzial-1",
 "title": "Powtórka: Dział 1",
 "sign": "Σ",
 "lead": "Zadania ze wszystkich tematów działu, wymieszane jak na egzaminie, gdzie nikt nie podpowiada, jakiej metody użyć. Na koniec sprawdzian całego działu: 15 zadań, 20 punktów, jak w arkuszu CKE.",
 "goals": {
  "learn": "Rozpoznawać, jaką metodę zastosować w zadaniu, łączyć tematy (procenty z ułamkami, NWD z procentami) i zapisywać rozwiązania zadań otwartych tak, żeby dostać wszystkie punkty.",
  "prereq": "Wszystkie pięć tematów Działu 1.",
  "goal": "Minimum 17 z 20 punktów w sprawdzianie działu."
 },
 "skills": {
  "R1": "Liczby i działania",
  "R2": "Podzielność, NWD i NWW",
  "R3": "Ułamki zwykłe i dziesiętne",
  "R4": "Potęgi i pierwiastki",
  "R5": "Procenty"
 },
 "lessons": [
  {
   "title": "Jak rozpoznać, co liczyć",
   "skills": [
    "R1",
    "R2",
    "R3",
    "R4",
    "R5"
   ],
   "intro": "Na egzaminie zadanie nie ma napisu „procenty” ani „NWW”. Trzeba samemu rozpoznać, jaką metodę zastosować. Pomagają w tym słowa-klucze w treści.",
   "rule": {
    "t": "Zanim zaczniesz liczyć, odpowiedz sobie: czego szukam, co wiem i jakie słowo-klucz jest w treści.",
    "f": [
     "„o ile procent” → różnica : wartość początkowa",
     "„jak najwięcej równych części” → NWD",
     "„kiedy znów razem” → NWW",
     "„cena przed zmianą” → dzielenie"
    ],
    "e": "Po rozwiązaniu sprawdź, czy wynik ma sens: cena przed obniżką musi być wyższa, część mniejsza od całości, odległość dodatnia."
   },
   "example": {
    "q": "Kurtka kosztowała 250 zł. Najpierw staniała o 1/5, a potem podrożała o 10%. Ile kosztuje teraz?",
    "steps": [
     "Słowa-klucze: „staniała o 1/5” (ułamek), „podrożała o 10%” (procent), „najpierw… a potem” (dwie zmiany po kolei).",
     "Po obniżce o 1/5 zostają 4/5 ceny: 250 · 4/5 = 200 zł.",
     "Podwyżka o 10% liczy się od 200 zł: 200 · 1,1 = 220 zł.",
     "Sprawdzenie sensu: 220 zł to mniej niż 250 zł. Zgadza się, bo obniżka (50 zł) była większa niż podwyżka (20 zł)."
    ],
    "result": "Kurtka kosztuje teraz 220 zł.",
    "tip": "Druga zmiana zawsze liczy się od nowej ceny, niezależnie od tego, czy jest ułamkiem, czy procentem.",
    "check": [
     "250 * F(4, 5) * F('1.1') == 220"
    ]
   },
   "you": [
    {
     "id": "y1",
     "type": "abcd",
     "q": "Autobus odjeżdża co 12 minut, a tramwaj co 18 minut. Odjechały razem. Po ilu minutach znów odjadą razem? Co trzeba obliczyć?",
     "opts": [
      "NWD(12, 18)",
      "NWW(12, 18)",
      "12 · 18",
      "18 − 12"
     ],
     "ok": 1,
     "why": {
      "A": "NWD służy do dzielenia na jak największe równe części, a tu pytamy „kiedy znów razem”.",
      "C": "12 · 18 = 216 to wspólna wielokrotność, ale nie najmniejsza.",
      "D": "Różnica nie ma tu znaczenia."
     },
     "sol": [
      "„Kiedy znów razem” to najmniejsza liczba minut podzielna przez 12 i przez 18, czyli [[NWW(12, 18) = 36]]."
     ],
     "answer": "B, NWW(12, 18).",
     "tip": "Kiedy znów razem: NWW. Równe części: NWD.",
     "check": [
      "math.lcm(12, 18) == 36"
     ]
    },
    {
     "id": "y1b",
     "type": "abcd",
     "q": "Po obniżce o 20% bluza kosztuje 64 zł. Jakim działaniem obliczysz cenę przed obniżką?",
     "opts": [
      "64 · 0,8",
      "64 : 0,8",
      "64 · 1,2",
      "64 − 20"
     ],
     "ok": 1,
     "why": {
      "A": "64 · 0,8 to kolejna obniżka, a szukasz ceny wyższej.",
      "C": "20% liczono od starej ceny, a nie od 64 zł.",
      "D": "Odjęto 20 zł zamiast procentów."
     },
     "sol": [
      "64 zł to 80% starej ceny: [[0,8x = 64]], więc [[x = 64 : 0,8 = 80]] zł."
     ],
     "answer": "B, 64 : 0,8.",
     "tip": "Cena przed zmianą: dzielisz.",
     "check": [
      "64 / F('0.8') == 80"
     ]
    }
   ]
  },
  {
   "title": "Jak zapisać zadanie otwarte",
   "skills": [
    "R1",
    "R2",
    "R3",
    "R4",
    "R5"
   ],
   "intro": "Zadania otwarte to połowa punktów egzaminu. Egzaminator przyznaje punkty za kolejne etapy, więc nawet niedokończone, ale dobrze zapisane rozwiązanie może dać punkt lub dwa.",
   "rule": {
    "t": "Zapisz: co liczysz, obliczenie, wynik z jednostką i odpowiedź pełnym zdaniem.",
    "f": [
     "1. podpisz, co liczysz",
     "2. zapisz obliczenie",
     "3. wynik z jednostką",
     "4. odpowiedź albo wniosek"
    ],
    "e": "Metoda prób i błędów jest dozwolona, ale trzeba sprawdzić wszystkie warunki zadania i to zapisać. W zadaniu „Uzasadnij” zawsze kończ wnioskiem."
   },
   "example": {
    "q": "Liczbę 7/15 zapisano jako sumę trzech ułamków. Dwa z nich to 1/5 i 1/6. Uzasadnij, że trzeci ma licznik 1. (Egzamin 2025, zadanie 16, 2 pkt.)",
    "steps": [
     "Co liczę: trzeci składnik to 7/15 − 1/5 − 1/6.",
     "Obliczenie: wspólny mianownik 30, czyli 14/30 − 6/30 − 5/30 = 3/30 = 1/10. (Za to jest pierwszy punkt.)",
     "Wniosek: trzeci składnik to 1/10, jego licznik to 1, a mianownik 10 jest liczbą całkowitą dodatnią. (Za wniosek jest drugi punkt.)"
    ],
    "result": "Pełne rozwiązanie: obliczenie i wniosek. Bez wniosku byłby tylko 1 punkt.",
    "tip": "Czytaj polecenie do końca: „Zapisz obliczenia” znaczy, że sam wynik nie wystarczy.",
    "check": [
     "F(7, 15) - F(1, 5) - F(1, 6) == F(1, 10)"
    ]
   },
   "you": [
    {
     "id": "y2",
     "type": "self",
     "q": "Uzasadnij, że 5/12 − 1/4 = 1/6. Zapisz obliczenia, a potem oceń się według punktacji.",
     "criteria": [
      {
       "t": "Sprowadzono do wspólnego mianownika i odjęto: 5/12 − 3/12 = 2/12.",
       "pts": 1
      },
      {
       "t": "Skrócono do 1/6 i zapisano wniosek.",
       "pts": 1
      }
     ],
     "sol": [
      "[[5/12 − 1/4 = 5/12 − 3/12 = 2/12 = 1/6]].",
      "Wniosek: różnica jest równa 1/6, co należało uzasadnić."
     ],
     "answer": "5/12 − 3/12 = 2/12 = 1/6.",
     "tip": "Samo „1/6” bez obliczeń nie dostanie punktów.",
     "check": [
      "F(5, 12) - F(1, 4) == F(1, 6)"
     ]
    }
   ]
  }
 ],
 "traps": [
  {
   "name": "Kolejność działań",
   "bad": "24 : 4 · 2 = 3",
   "good": "od lewej: 6 · 2 = 12"
  },
  {
   "name": "Dodawanie mianowników",
   "bad": "1/2 + 1/3 = 2/5",
   "good": "3/6 + 2/6 = 5/6"
  },
  {
   "name": "Cena przed zmianą",
   "bad": "po podwyżce o 25% jest 500 zł, więc przed: 375 zł",
   "good": "500 : 1,25 = 400 zł"
  }
 ],
 "cheat": {
  "title": "Słowa-klucze w zadaniach",
  "rules": [
   {
    "t": "„O ile więcej”, „ile razy więcej”.",
    "f": [
     "o ile: a − b",
     "ile razy: a : b"
    ],
    "e": "O ile procent: różnica : wartość początkowa."
   },
   {
    "t": "„Jak najwięcej równych części”, „jak największe płytki”.",
    "f": [
     "NWD"
    ],
    "e": "36 róż i 60 tulipanów: 12 bukietów"
   },
   {
    "t": "„Kiedy znów razem”, „najmniejsza liczba podzielna przez…”.",
    "f": [
     "NWW"
    ],
    "e": "co 12 i co 18 minut: po 36 minutach"
   },
   {
    "t": "„Część to…”, „procent to…”, „ile było na początku”.",
    "f": [
     "całość = część : ułamek"
    ],
    "e": "3/8 to 96 stron → 256 stron"
   },
   {
    "t": "„Najpierw… a potem…”.",
    "f": [
     "zmiany po kolei, mnożenie"
    ],
    "e": "−1/5, potem +10%: · 4/5 · 1,1"
   },
   {
    "t": "„Uzasadnij”.",
    "f": [
     "obliczenie + wniosek"
    ],
    "e": "Kończ zdaniem „więc…”."
   }
  ]
 },
 "memo": {
  "title": "Plan rozwiązania każdego zadania",
  "rows": [
   [
    "1",
    "2",
    "3",
    "4"
   ],
   [
    "Czego szukam?",
    "Co wiem?",
    "Jaka metoda?",
    "Czy wynik ma sens?"
   ]
  ],
  "note": "Na egzaminie masz 125 minut na około 20 zadań. Zadania zamknięte rób szybko, a czas zostaw na otwarte."
 },
 "warmup": {
  "id": "w0",
  "type": "fields",
  "q": "Rozgrzewka z całego działu.",
  "fields": [
   {
    "label": "25% z 80",
    "ans": 20,
    "show": "20"
   },
   {
    "label": "NWD(12, 30)",
    "ans": 6,
    "show": "6"
   },
   {
    "label": "2³ − (−1)",
    "ans": 9,
    "show": "9"
   }
  ],
  "sol": [
   "25% to ćwierć: [[80 : 4 = 20]].",
   "12 = 2² · 3, 30 = 2 · 3 · 5, wspólne: [[2 · 3 = 6]].",
   "[[8 − (−1) = 8 + 1 = 9]]."
  ],
  "answer": "20, 6 i 9.",
  "tip": "Jeśli coś tu sprawia kłopot, wróć do odpowiedniego tematu przed powtórką.",
  "check": [
   "F(1, 4) * 80 == 20",
   "math.gcd(12, 30) == 6",
   "2**3 - (-1) == 9"
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
   "desc": "Zadania otwarte z różnych tematów. Rozwiązuj na kartce, zapisuj etapy i oceniaj się według punktacji."
  }
 ],
 "practice": [
  {
   "id": "p1",
   "level": 1,
   "skills": [
    "R1",
    "R3"
   ],
   "type": "abcd",
   "q": "Wartość wyrażenia (−1,5 + 2 1/4) · (−4) jest równa:",
   "opts": [
    "3",
    "−15",
    "−3",
    "−3/16"
   ],
   "ok": 2,
   "why": {
    "A": "Zły znak: 0,75 · (−4) jest ujemne.",
    "B": "−15 wychodzi, gdy −1,5 i 2,25 dodasz jak liczby tego samego znaku.",
    "D": "−3/16 to 0,75 : (−4). Tu jest mnożenie."
   },
   "sol": [
    "2 1/4 = 2,25. Nawias: [[−1,5 + 2,25 = 0,75]].",
    "[[0,75 · (−4) = −3]]."
   ],
   "answer": "C, −3.",
   "tip": "Najpierw nawias, potem znak iloczynu.",
   "check": [
    "(F('-1.5') + F(9, 4)) * (-4) == -3"
   ],
   "twin": {
    "type": "abcd",
    "q": "Wartość wyrażenia (0,5 − 1 3/4) · 4 jest równa:",
    "opts": [
     "−5",
     "5",
     "−9",
     "−5/16"
    ],
    "ok": 0,
    "why": {
     "B": "Zły znak: w nawiasie wychodzi liczba ujemna.",
     "C": "−9 wychodzi z (0,5 + 1,75) · 4 ze znakiem minus.",
     "D": "−5/16 to wynik dzielenia przez 4."
    },
    "sol": [
     "[[0,5 − 1,75 = −1,25]], [[−1,25 · 4 = −5]]."
    ],
    "answer": "A, −5.",
    "tip": "1 3/4 = 1,75.",
    "check": [
     "(F('0.5') - F(7, 4)) * 4 == -5"
    ]
   }
  },
  {
   "id": "p3",
   "level": 1,
   "skills": [
    "R2",
    "R5"
   ],
   "type": "abcd",
   "q": "Jaki procent liczb od 1 do 50 stanowią liczby podzielne przez 5?",
   "opts": [
    "10%",
    "5%",
    "25%",
    "20%"
   ],
   "ok": 3,
   "why": {
    "A": "10 to liczba takich liczb, a nie procent.",
    "B": "5 to dzielnik z treści.",
    "C": "25% to 1/4, a liczb podzielnych przez 5 jest 1/5."
   },
   "sol": [
    "Podzielnych przez 5: [[50 : 5 = 10]].",
    "[[10 : 50 = 0,2 = 20%]]."
   ],
   "answer": "D, 20%.",
   "tip": "Część przez całość.",
   "check": [
    "F(50 // 5, 50) == F(1, 5)"
   ],
   "twin": {
    "type": "abcd",
    "q": "Jaki procent liczb od 1 do 40 stanowią liczby podzielne przez 4?",
    "opts": [
     "10%",
     "25%",
     "4%",
     "40%"
    ],
    "ok": 1,
    "why": {
     "A": "10 to liczba takich liczb.",
     "C": "4 to dzielnik z treści.",
     "D": "40 to liczba wszystkich liczb."
    },
    "sol": [
     "[[40 : 4 = 10]] liczb, [[10 : 40 = 25%]]."
    ],
    "answer": "B, 25%.",
    "tip": "Co czwarta liczba to 25%.",
    "check": [
     "F(40 // 4, 40) == F(1, 4)"
    ]
   }
  },
  {
   "id": "p4",
   "level": 1,
   "skills": [
    "R4",
    "R2"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Liczba 2⁴ · 3² jest podzielna przez 12.",
     "ok": "P"
    },
    {
     "t": "NWW(2³, 2 · 5) = 2⁴ · 5",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> 12 = 2² · 3, a w 2⁴ · 3² są co najmniej dwie dwójki i jedna trójka. Prawda (144 : 12 = 12).",
    "<b>Zdanie 2.</b> NWW: największe potęgi, [[2³ · 5 = 40]], a nie 2⁴ · 5. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Podzielność sprawdzisz na rozkładach.",
   "check": [
    "2**4 * 3**2 % 12 == 0",
    "math.lcm(8, 10) == 40"
   ],
   "twin": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Liczba 3³ · 5 jest podzielna przez 15.",
      "ok": "P"
     },
     {
      "t": "NWD(3², 3 · 7) = 3²",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> 15 = 3 · 5. Prawda.",
     "<b>Zdanie 2.</b> NWD(9, 21) = 3. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "NWD: najmniejsze potęgi wspólnych czynników.",
    "check": [
     "27 * 5 % 15 == 0",
     "math.gcd(9, 21) == 3"
    ]
   }
  },
  {
   "id": "p6",
   "level": 1,
   "skills": [
    "R3",
    "R5"
   ],
   "type": "tn",
   "q": "Czy 3/8 to więcej niż 35%? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "T",
   "reasons": {
    "1": "3/8 = 0,375 = 37,5%",
    "2": "3/8 = 3,8%",
    "3": "8 jest większe od 3"
   },
   "okReason": "1",
   "sol": [
    "[[3 : 8 = 0,375 = 37,5%]], a 37,5% > 35%. Tak."
   ],
   "answer": "T, uzasadnienie 1.",
   "tip": "Ułamek na procent: podziel i pomnóż przez 100.",
   "check": [
    "F(3, 8) == F('0.375')"
   ],
   "twin": {
    "type": "tn",
    "q": "Czy 2/9 to więcej niż 25%? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "N",
    "reasons": {
     "1": "2/9 = 0,222…, czyli około 22%",
     "2": "2/9 = 0,29, czyli 29%",
     "3": "9 jest większe od 2"
    },
    "okReason": "1",
    "sol": [
     "[[2 : 9 = 0,222…]], czyli około 22%, a to mniej niż 25%. Nie."
    ],
    "answer": "N, uzasadnienie 1.",
    "tip": "1/4 = 25%, a 2/9 < 2/8 = 1/4.",
    "check": [
     "F(2, 9) < F(1, 4)"
    ]
   }
  },
  {
   "id": "p12",
   "level": 1,
   "skills": [
    "R2",
    "R4"
   ],
   "type": "fields",
   "q": "Dane są liczby a = 2³ · 3² i b = 2² · 3³.",
   "fields": [
    {
     "label": "NWD(a, b)",
     "ans": 36,
     "show": "36",
     "why": [
      [
       216,
       "216 to NWW. NWD: najmniejsze potęgi, 2² · 3²."
      ]
     ]
    },
    {
     "label": "NWW(a, b)",
     "ans": 216,
     "show": "216",
     "why": [
      [
       36,
       "36 to NWD. NWW: największe potęgi, 2³ · 3³."
      ]
     ]
    }
   ],
   "sol": [
    "NWD: [[2² · 3² = 36]].",
    "NWW: [[2³ · 3³ = 216]]."
   ],
   "answer": "36 i 216.",
   "tip": "Kontrola: 36 · 216 = 72 · 108.",
   "check": [
    "math.gcd(72, 108) == 36",
    "math.lcm(72, 108) == 216"
   ],
   "twin": {
    "type": "fields",
    "q": "Dane są liczby a = 2 · 5² i b = 2² · 5.",
    "fields": [
     {
      "label": "NWD(a, b)",
      "ans": 10,
      "show": "10"
     },
     {
      "label": "NWW(a, b)",
      "ans": 100,
      "show": "100"
     }
    ],
    "sol": [
     "NWD: [[2 · 5 = 10]].",
     "NWW: [[2² · 5² = 100]]."
    ],
    "answer": "10 i 100.",
    "tip": "a = 50, b = 20.",
    "check": [
     "math.gcd(50, 20) == 10",
     "math.lcm(50, 20) == 100"
    ]
   }
  },
  {
   "id": "p13",
   "level": 1,
   "skills": [
    "R3",
    "R5"
   ],
   "type": "fields",
   "q": "Ola wydała 1/4 kieszonkowego na kino, a potem 20% reszty na książkę. Zostało jej 48 zł. Ile miała na początku?",
   "fields": [
    {
     "label": "Na początku",
     "ans": 80,
     "unit": "zł",
     "show": "80 zł",
     "why": [
      [
       87.27,
       "Nie odejmuj 25% i 20% od całości. 20% liczysz od reszty."
      ]
     ]
    }
   ],
   "sol": [
    "Po kinie zostały [[3/4]]. Po książce zostało 80% reszty: [[0,8 · 3/4 = 0,6]] kieszonkowego.",
    "[[48 : 0,6 = 80 zł]]."
   ],
   "answer": "80 zł.",
   "tip": "Ułamek i procent działają tak samo: mnożysz części, które zostają.",
   "check": [
    "48 / (F(3, 4) * F('0.8')) == 80"
   ],
   "twin": {
    "type": "fields",
    "q": "Kuba wydał 1/3 pieniędzy na grę, a potem 25% reszty na słuchawki. Zostało mu 30 zł. Ile miał na początku?",
    "fields": [
     {
      "label": "Na początku",
      "ans": 60,
      "unit": "zł",
      "show": "60 zł"
     }
    ],
    "sol": [
     "[[2/3 · 0,75 = 1/2]].",
     "[[30 : 1/2 = 60 zł]]."
    ],
    "answer": "60 zł.",
    "tip": "Zostaje połowa.",
    "check": [
     "30 / (F(2, 3) * F('0.75')) == 60"
    ]
   }
  },
  {
   "id": "p14",
   "level": 1,
   "skills": [
    "R1",
    "R2"
   ],
   "type": "tn",
   "q": "Czy liczba (−3)⁴ − 1 jest podzielna przez 10? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "T",
   "reasons": {
    "1": "(−3)⁴ − 1 = 81 − 1 = 80",
    "2": "(−3)⁴ − 1 = −81 − 1 = −82",
    "3": "4 − 1 = 3"
   },
   "okReason": "1",
   "sol": [
    "[[(−3)⁴ = 81]] (parzysta potęga). [[81 − 1 = 80]], a 80 kończy się zerem. Tak."
   ],
   "answer": "T, uzasadnienie 1.",
   "tip": "Przez 10 dzielą się liczby zakończone zerem.",
   "check": [
    "(-3)**4 - 1 == 80"
   ],
   "twin": {
    "type": "tn",
    "q": "Czy liczba (−2)⁴ + 3 jest podzielna przez 3? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "N",
    "reasons": {
     "1": "(−2)⁴ + 3 = 16 + 3 = 19",
     "2": "(−2)⁴ + 3 = −16 + 3 = −13",
     "3": "3 dzieli się przez 3"
    },
    "okReason": "1",
    "sol": [
     "[[16 + 3 = 19]], a 19 nie dzieli się przez 3. Nie."
    ],
    "answer": "N, uzasadnienie 1.",
    "tip": "Samo „+ 3” nie wystarcza, liczy się cała suma.",
    "check": [
     "(-2)**4 + 3 == 19"
    ]
   }
  },
  {
   "id": "q1",
   "level": 2,
   "skills": [
    "R5",
    "R3"
   ],
   "type": "self",
   "q": "Pan Tomek miał 1 200 zł. 3/8 tej kwoty wydał na rower, a 20% pozostałej kwoty na kask. Ile pieniędzy mu zostało? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono wydatek na rower (450 zł) i resztę (750 zł).",
     "pts": 1
    },
    {
     "t": "Obliczono wydatek na kask: 20% z 750 zł = 150 zł.",
     "pts": 1
    },
    {
     "t": "Podano, ile zostało: 600 zł.",
     "pts": 1
    }
   ],
   "sol": [
    "Rower: [[3/8 z 1 200 = 450 zł]]. Zostało [[750 zł]].",
    "Kask: [[20% z 750 = 150 zł]].",
    "Zostało [[750 − 150 = 600 zł]]."
   ],
   "answer": "600 zł.",
   "tip": "„Pozostałej kwoty” to 750 zł, a nie 1 200 zł.",
   "check": [
    "1200 - F(3, 8)*1200 == 750",
    "750 * F('0.8') == 600"
   ]
  },
  {
   "id": "q4",
   "level": 2,
   "skills": [
    "R1",
    "R3"
   ],
   "type": "self",
   "q": "Na osi liczbowej zaznaczono punkty A = −2 1/2 i B = 4. Punkt C jest środkiem odcinka AB. Oblicz, jaką liczbę oznacza punkt C i jaka jest odległość punktu C od punktu A. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono C = (−2,5 + 4) : 2 = 0,75.",
     "pts": 1
    },
    {
     "t": "Obliczono odległość AC = 0,75 − (−2,5) = 3,25 (albo połowę AB = 6,5 : 2).",
     "pts": 1
    }
   ],
   "sol": [
    "[[C = (−2,5 + 4) : 2 = 1,5 : 2 = 0,75]].",
    "[[AC = 0,75 − (−2,5) = 3,25]]. Sprawdzenie: AB = 6,5, a połowa to 3,25."
   ],
   "answer": "C = 0,75, odległość AC = 3,25.",
   "tip": "Liczbę mieszaną zamień na ułamek dziesiętny.",
   "check": [
    "(F('-2.5') + 4) / 2 == F('0.75')",
    "F('0.75') - F('-2.5') == F('3.25')"
   ]
  },
  {
   "id": "q5",
   "level": 2,
   "skills": [
    "R4",
    "R1"
   ],
   "type": "self",
   "q": "Ziarnko piasku waży około 6,5 · 10⁻⁵ g. Uzasadnij, że 20 000 takich ziarenek waży mniej niż 2 g.",
   "criteria": [
    {
     "t": "Zapisano obliczenie: 6,5 · 10⁻⁵ · 2 · 10⁴ = 13 · 10⁻¹ = 1,3 g.",
     "pts": 1
    },
    {
     "t": "Zapisano wniosek: 1,3 g < 2 g.",
     "pts": 1
    }
   ],
   "sol": [
    "[[20 000 = 2 · 10⁴]].",
    "[[6,5 · 2 = 13]], [[10⁻⁵ · 10⁴ = 10⁻¹]], więc 13 · 0,1 = [[1,3 g]] < 2 g."
   ],
   "answer": "1,3 g < 2 g.",
   "tip": "Mnożysz liczby i osobno potęgi 10.",
   "check": [
    "F('6.5') / 10**5 * 20000 == F('1.3')"
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
   "q": "Wartość wyrażenia (−2)³ − 3 · (−4) jest równa:",
   "opts": [
    "−20",
    "4",
    "20",
    "−4"
   ],
   "ok": 1,
   "why": {
    "A": "−20 to −8 − 12. Odjąć −12 to dodać 12.",
    "C": "20 wychodzi, gdy (−2)³ policzysz jako 8.",
    "D": "−4 wychodzi, gdy 3 · (−4) odejmiesz jako 4."
   },
   "sol": [
    "[[(−2)³ = −8]], [[3 · (−4) = −12]], [[−8 − (−12) = 4]]."
   ],
   "answer": "B, 4.",
   "tip": "Minus minus to plus.",
   "check": [
    "(-2)**3 - 3*(-4) == 4"
   ],
   "pts": 1
  },
  {
   "id": "t2",
   "skills": [
    "R1"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Zapis MCMLXIV oznacza liczbę 1 964.",
     "ok": "P"
    },
    {
     "t": "Liczba 4,65 zaokrąglona do części dziesiątych to 4,6.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> M | CM | LX | IV = 1 964. Prawda.",
    "<b>Zdanie 2.</b> Za cyfrą dziesiątych stoi 5, więc w górę: 4,7. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "5 zaokrąglasz w górę.",
   "check": [
    "roman(1964) == 'MCMLXIV'"
   ],
   "pts": 1
  },
  {
   "id": "t3",
   "skills": [
    "R2"
   ],
   "type": "abcd",
   "q": "Wartość wyrażenia NWD(48, 60) + NWW(4, 6) jest równa:",
   "opts": [
    "36",
    "252",
    "14",
    "24"
   ],
   "ok": 3,
   "why": {
    "A": "36 wychodzi, gdy NWW(4, 6) policzysz jako iloczyn 24.",
    "B": "252 to NWW(48, 60) + NWW(4, 6).",
    "C": "14 to NWD(48, 60) + NWD(4, 6)."
   },
   "sol": [
    "[[NWD(48, 60) = 12]], [[NWW(4, 6) = 12]]. Suma [[24]]."
   ],
   "answer": "D, 24.",
   "tip": "Uważaj, gdzie jest NWD, a gdzie NWW.",
   "check": [
    "math.gcd(48, 60) + math.lcm(4, 6) == 24"
   ],
   "pts": 1
  },
  {
   "id": "t4",
   "skills": [
    "R2"
   ],
   "type": "fields",
   "q": "Ile jest liczb dwucyfrowych podzielnych przez 9?",
   "fields": [
    {
     "label": "Liczba",
     "ans": 10,
     "show": "10"
    }
   ],
   "sol": [
    "[[99 : 9 = 11]], bez jednocyfrowej 9: [[10]] (od 18 do 99)."
   ],
   "answer": "10.",
   "tip": "Dwucyfrowe: do 99 minus do 9.",
   "check": [
    "len([n for n in range(10, 100) if n % 9 == 0]) == 10"
   ],
   "pts": 1
  },
  {
   "id": "t5",
   "skills": [
    "R3"
   ],
   "type": "abcd",
   "q": "Wartość wyrażenia (1 1/2 − 2,25) : 3/4 jest równa:",
   "opts": [
    "−1",
    "1",
    "−9/16",
    "−3/4"
   ],
   "ok": 0,
   "why": {
    "B": "Zły znak: w nawiasie wychodzi liczba ujemna.",
    "C": "−9/16 to mnożenie przez 3/4 zamiast dzielenia.",
    "D": "−3/4 to sam nawias, jeszcze niepodzielony."
   },
   "sol": [
    "[[1,5 − 2,25 = −0,75]], [[−3/4 : 3/4 = −1]]."
   ],
   "answer": "A, −1.",
   "tip": "Liczba podzielona przez siebie daje 1 (tu ze znakiem minus).",
   "check": [
    "(F(3, 2) - F('2.25')) / F(3, 4) == -1"
   ],
   "pts": 1
  },
  {
   "id": "t6",
   "skills": [
    "R3"
   ],
   "type": "fields",
   "q": "Jaką częścią kilograma jest 350 g? Podaj ułamek nieskracalny.",
   "fields": [
    {
     "label": "Licznik",
     "ans": 7,
     "show": "7"
    },
    {
     "label": "Mianownik",
     "ans": 20,
     "show": "20"
    }
   ],
   "sol": [
    "Kilogram to 1 000 g: [[350/1 000]], skracamy przez 50: [[7/20]]."
   ],
   "answer": "7/20.",
   "tip": "Kilogram ma 1 000 g.",
   "check": [
    "F(350, 1000) == F(7, 20)"
   ],
   "pts": 1
  },
  {
   "id": "t7",
   "skills": [
    "R4"
   ],
   "type": "abcd",
   "q": "Wartość wyrażenia 16³ : 8² zapisana w postaci potęgi liczby 2 jest równa:",
   "opts": [
    "2¹",
    "2¹⁸",
    "2⁶",
    "2⁹"
   ],
   "ok": 2,
   "why": {
    "A": "2¹ to 3 − 2 bez zamiany podstaw.",
    "B": "2¹⁸ to 2¹² · 2⁶. Przy dzieleniu odejmujesz.",
    "D": "2⁹ = 2¹² : 2³. Potraktowano 8² jak 8 = 2³, a 8² = 2⁶."
   },
   "sol": [
    "[[16³ = 2¹²]], [[8² = 2⁶]]. [[2¹² : 2⁶ = 2⁶]]."
   ],
   "answer": "C, 2⁶.",
   "tip": "16 = 2⁴, 8 = 2³.",
   "check": [
    "16**3 // 8**2 == 2**6"
   ],
   "pts": 1
  },
  {
   "id": "t8",
   "skills": [
    "R4",
    "R3"
   ],
   "type": "fields",
   "q": "Oblicz: √(1 7/9) + ∛0,125",
   "fields": [
    {
     "label": "Wynik",
     "ans": 1.8333333333333333,
     "show": "1 5/6"
    }
   ],
   "sol": [
    "[[√(16/9) = 4/3]], [[∛0,125 = 0,5 = 1/2]].",
    "[[4/3 + 1/2 = 8/6 + 3/6 = 11/6 = 1 5/6]]."
   ],
   "answer": "1 5/6.",
   "tip": "1 7/9 = 16/9.",
   "check": [
    "F(4, 3) + F(1, 2) == 1 + F(5, 6)"
   ],
   "pts": 1
  },
  {
   "id": "t9",
   "skills": [
    "R5"
   ],
   "type": "abcd",
   "q": "Po podwyżce o 25% cena wynosi 150 zł. Ile wynosiła przed podwyżką?",
   "opts": [
    "112,50 zł",
    "125 zł",
    "120 zł",
    "187,50 zł"
   ],
   "ok": 2,
   "why": {
    "A": "112,50 zł to 150 · 0,75. Trzeba podzielić przez 1,25.",
    "B": "125 zł to 150 − 25.",
    "D": "187,50 zł to kolejna podwyżka."
   },
   "sol": [
    "[[150 : 1,25 = 120 zł]]."
   ],
   "answer": "C, 120 zł.",
   "tip": "Cena przed: dzielisz.",
   "check": [
    "150 / F('1.25') == 120"
   ],
   "pts": 1
  },
  {
   "id": "t10",
   "skills": [
    "R5"
   ],
   "type": "pf",
   "chart": {
    "kind": "cols",
    "min": 0,
    "max": 60,
    "step": 10,
    "vals": true,
    "ylabel": "tys. zł",
    "rows": [
     [
      "I kw.",
      40
     ],
     [
      "II kw.",
      50
     ],
     [
      "III kw.",
      45
     ]
    ],
    "alt": "Diagram: I kwartał 40, II kwartał 50, III kwartał 45 tysięcy zł"
   },
   "q": "Diagram pokazuje sprzedaż sklepu w kolejnych kwartałach. Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "W II kwartale sprzedaż była o 25% większa niż w I kwartale.",
     "ok": "P"
    },
    {
     "t": "W III kwartale sprzedaż była o 5% mniejsza niż w II kwartale.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[10 : 40 = 25%]]. Prawda.",
    "<b>Zdanie 2.</b> [[5 : 50 = 10%]]. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "5 tys. zł to nie 5%.",
   "check": [
    "F(10, 40) == F(1, 4)",
    "F(5, 50) == F(1, 10)"
   ],
   "pts": 1
  },
  {
   "id": "t11",
   "skills": [
    "R5",
    "R3"
   ],
   "type": "fields",
   "q": "W klasie jest 40 uczniów, a 3/5 z nich to dziewczęta. 25% dziewcząt gra w siatkówkę. Ile dziewcząt gra w siatkówkę?",
   "fields": [
    {
     "label": "Liczba dziewcząt",
     "ans": 6,
     "show": "6"
    }
   ],
   "sol": [
    "Dziewczęta: [[3/5 z 40 = 24]].",
    "[[25% z 24 = 6]]."
   ],
   "answer": "6.",
   "tip": "25% liczysz z dziewcząt, a nie z klasy.",
   "check": [
    "F(3, 5) * 40 * F(1, 4) == 6"
   ],
   "pts": 1
  },
  {
   "id": "t12",
   "skills": [
    "R1",
    "R4"
   ],
   "type": "tn",
   "q": "Czy wartość wyrażenia √(16 + 9) − 3² jest liczbą ujemną? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "T",
   "reasons": {
    "1": "√(16 + 9) = 5, a 5 − 9 = −4",
    "2": "√(16 + 9) = 7, a 7 − 9 = −2",
    "3": "3² = 6, a 5 − 6 = −1"
   },
   "okReason": "1",
   "sol": [
    "[[√25 = 5]], [[3² = 9]], [[5 − 9 = −4]]. Tak."
   ],
   "answer": "T, uzasadnienie 1.",
   "tip": "Uzasadnienia 2 i 3 mają dobry wniosek, ale złe rachunki.",
   "check": [
    "math.isqrt(25) - 3**2 == -4"
   ],
   "pts": 1
  },
  {
   "id": "t13",
   "skills": [
    "R3"
   ],
   "type": "self",
   "q": "Uzasadnij, że 1/3 + 1/4 + 1/6 = 3/4.",
   "criteria": [
    {
     "t": "Sprowadzono do wspólnego mianownika: 4/12 + 3/12 + 2/12.",
     "pts": 1
    },
    {
     "t": "Obliczono 9/12 = 3/4 i zapisano wniosek.",
     "pts": 1
    }
   ],
   "sol": [
    "[[4/12 + 3/12 + 2/12 = 9/12 = 3/4]]."
   ],
   "answer": "9/12 = 3/4.",
   "tip": "NWW(3, 4, 6) = 12.",
   "check": [
    "F(1, 3) + F(1, 4) + F(1, 6) == F(3, 4)"
   ],
   "pts": 2
  },
  {
   "id": "t14",
   "skills": [
    "R5"
   ],
   "type": "self",
   "q": "Cena netto roweru to 1 500 zł. Do ceny doliczono 23% VAT, a potem sklep dał 10% rabatu od ceny z VAT. Ile zapłacono za rower? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono cenę z VAT: 1 500 · 1,23 = 1 845 zł.",
     "pts": 1
    },
    {
     "t": "Zastosowano rabat od ceny z VAT: 1 845 · 0,9.",
     "pts": 1
    },
    {
     "t": "Podano wynik: 1 660,50 zł.",
     "pts": 1
    }
   ],
   "sol": [
    "Z VAT: [[1 500 · 1,23 = 1 845 zł]].",
    "Rabat 10% od 1 845 zł: [[1 845 · 0,9 = 1 660,50 zł]]."
   ],
   "answer": "1 660,50 zł.",
   "tip": "Rabat liczy się od ceny z VAT, a nie od netto.",
   "check": [
    "1500 * F('1.23') * F('0.9') == F('1660.5')"
   ],
   "pts": 3
  },
  {
   "id": "t15",
   "skills": [
    "R2"
   ],
   "type": "self",
   "q": "Podłogę o wymiarach 240 cm na 180 cm trzeba wyłożyć jednakowymi kwadratowymi płytkami, jak największymi, bez cięcia. Jaki bok ma płytka i ile płytek potrzeba? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Zauważono, że bok płytki to NWD(240, 180).",
     "pts": 1
    },
    {
     "t": "Obliczono NWD = 60 cm.",
     "pts": 1
    },
    {
     "t": "Obliczono liczbę płytek: 4 · 3 = 12.",
     "pts": 1
    }
   ],
   "sol": [
    "240 = 2⁴ · 3 · 5, 180 = 2² · 3² · 5. [[NWD = 2² · 3 · 5 = 60]] cm.",
    "[[240 : 60 = 4]], [[180 : 60 = 3]], [[4 · 3 = 12]] płytek."
   ],
   "answer": "Bok 60 cm, 12 płytek.",
   "tip": "Rzędy razy kolumny.",
   "check": [
    "math.gcd(240, 180) == 60"
   ],
   "pts": 3
  }
 ],
 "test_minutes": 60,
 "pass": 17,
 "dzial": "Dział 1: Liczby i działania"
};
