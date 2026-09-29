/* Wygenerowane przez zbuduj.py z tresc/powtorka-dzial-2.py. Nie edytuj ręcznie. */
window.TEMAT = {
 "slug": "powtorka-dzial-2",
 "title": "Powtórka: Dział 2",
 "sign": "Σ",
 "lead": "Zadania ze wszystkich tematów działu, wymieszane jak na egzaminie, gdzie nikt nie podpowiada, jakiej metody użyć. Na koniec sprawdzian całego działu: 15 zadań, 20 punktów, jak w arkuszu CKE.",
 "goals": {
  "learn": "Rozpoznawać, czy zadanie wymaga wyrażenia, równania, proporcji czy wzoru na prędkość, łączyć tematy i zapisywać rozwiązania zadań otwartych tak, żeby dostać wszystkie punkty.",
  "prereq": "Wszystkie cztery tematy Działu 2.",
  "goal": "Minimum 17 z 20 punktów w sprawdzianie działu."
 },
 "skills": {
  "D1": "Wyrażenia algebraiczne",
  "D2": "Równania",
  "D3": "Proporcjonalność",
  "D4": "Zadania tekstowe"
 },
 "lessons": [
  {
   "title": "Jak rozpoznać, co liczyć",
   "skills": [
    "D1",
    "D2",
    "D3",
    "D4"
   ],
   "intro": "Na egzaminie zadanie nie ma napisu „równania” ani „proporcjonalność”. Metodę trzeba rozpoznać samemu, a pomagają w tym słowa-klucze w treści.",
   "rule": {
    "t": "Zanim zaczniesz liczyć, odpowiedz sobie: czego szukam, co wiem i jakie słowo-klucz jest w treści.",
    "f": [
     "„o … więcej”, „… razy więcej” → wyrażenie z literą",
     "„razem”, „tyle samo”, „po zmianie” → równanie",
     "„za tyle kilogramów” → cena jednej jednostki albo proporcja",
     "„w stosunku” → podział na części",
     "„z prędkością” → s = v · t"
    ],
    "e": "Po rozwiązaniu sprawdź, czy wynik ma sens: cena nie może być ujemna, a część nie może być większa od całości."
   },
   "example": {
    "q": "Za 3 kg jabłek i 2 kg gruszek zapłacono 26 zł. Kilogram gruszek jest o 3 zł droższy od kilograma jabłek. Ile kosztuje 5 kg jabłek?",
    "steps": [
     "Słowa-klucze: „o 3 zł droższy” (wyrażenie), „zapłacono 26 zł” (równanie), „ile kosztuje 5 kg” (cena innej ilości).",
     "x – cena 1 kg jabłek, gruszki: x + 3. Równanie: 3x + 2(x + 3) = 26.",
     "5x + 6 = 26, 5x = 20, x = 4 zł.",
     "5 kg jabłek: 5 · 4 = 20 zł. Sprawdzenie: 3 · 4 + 2 · 7 = 12 + 14 = 26."
    ],
    "result": "5 kg jabłek kosztuje 20 zł.",
    "tip": "Jedno zadanie łączy często dwa tematy: tu równanie i proporcjonalność.",
    "check": [
     "3*4 + 2*(4 + 3) == 26",
     "5*4 == 20"
    ]
   },
   "you": [
    {
     "id": "y1",
     "type": "abcd",
     "q": "Kwotę 350 zł podzielono w stosunku 2 : 5. Jak obliczysz większą część?",
     "opts": [
      "350 : 7 · 5",
      "350 : 5",
      "350 · 5 : 2",
      "350 : 2 · 5"
     ],
     "ok": 0,
     "why": {
      "B": "350 : 5 to nie jest jedna część: części jest 2 + 5 = 7.",
      "C": "Dzielisz przez sumę części, czyli przez 7.",
      "D": "Dzielisz przez sumę części 7, a nie przez 2."
     },
     "sol": [
      "Części: [[2 + 5 = 7]]. Jedna część: [[350 : 7 = 50]] zł. Większa: [[5 · 50 = 250]] zł."
     ],
     "answer": "A, 350 : 7 · 5.",
     "tip": "„W stosunku” → dziel przez sumę części.",
     "check": [
      "350/7*5 == 250"
     ]
    },
    {
     "id": "y1b",
     "type": "abcd",
     "q": "Po obniżce o 20% kurtka kosztuje 240 zł. Które równanie opisuje cenę x przed obniżką?",
     "opts": [
      "0,8x = 240",
      "0,2x = 240",
      "x − 20 = 240",
      "1,2 · 240 = x"
     ],
     "ok": 0,
     "why": {
      "B": "0,2x to kwota obniżki, a nie cena po obniżce.",
      "C": "20% to nie 20 zł.",
      "D": "Podwyżka 240 zł o 20% daje 288 zł, a cena przed obniżką to 240 : 0,8 = 300 zł."
     },
     "sol": [
      "Po obniżce zostaje 80% ceny: [[0,8x = 240]], [[x = 300]] zł."
     ],
     "answer": "A, 0,8x = 240.",
     "tip": "Cena przed zmianą: równanie albo dzielenie.",
     "check": [
      "F('0.8')*300 == 240",
      "F('1.2')*240 == 288"
     ]
    }
   ]
  },
  {
   "title": "Zadanie z równaniem na pełne punkty",
   "skills": [
    "D1",
    "D2",
    "D3",
    "D4"
   ],
   "intro": "Zadanie tekstowe z równaniem za 2–3 punkty było na egzaminie w 2025 i w 2026 roku. Egzaminator przyznaje punkty za kolejne etapy, więc porządny zapis daje punkty nawet wtedy, gdy na końcu pojawi się błąd w rachunkach.",
   "rule": {
    "t": "Zapisz: oznaczenie niewiadomej, równanie, rozwiązanie, sprawdzenie z treścią i odpowiedź.",
    "f": [
     "1. x – … (co oznacza x)",
     "2. równanie z treści",
     "3. rozwiązanie",
     "4. sprawdzenie z treścią",
     "5. odpowiedź na pytanie z zadania"
    ],
    "e": "Odpowiadaj dokładnie na pytanie. Jeśli pytają o tulipany, a x to żonkile, odpowiedź „x = 30” nie wystarczy."
   },
   "example": {
    "q": "Ogrodnik posadził 3 razy więcej tulipanów niż żonkili. Potem dosadził 40 żonkili i wtedy żonkili było o 20 mniej niż tulipanów. Ile tulipanów posadził?",
    "steps": [
     "Oznaczenie: x – liczba żonkili na początku, tulipanów: 3x. (Za to i za równanie jest zwykle pierwszy punkt.)",
     "Równanie: po dosadzeniu żonkili jest x + 40 i to o 20 mniej niż tulipanów: x + 40 + 20 = 3x.",
     "Rozwiązanie: 2x = 60, x = 30. Tulipanów: 3 · 30 = 90.",
     "Sprawdzenie z treścią: żonkili 30 + 40 = 70, tulipanów 90, różnica 20. Zgadza się."
    ],
    "result": "Ogrodnik posadził 90 tulipanów.",
    "tip": "Pełne rozwiązanie to równanie, wynik i odpowiedź na pytanie. Samo „x = 30” byłoby błędną odpowiedzią.",
    "check": [
     "30 + 40 + 20 == 3*30",
     "3*30 - (30 + 40) == 20"
    ]
   },
   "you": [
    {
     "id": "y2",
     "type": "fields",
     "q": "W dwóch klasach jest razem 52 uczniów. W klasie A jest o 4 uczniów więcej niż w klasie B. Ilu uczniów jest w klasie A?",
     "fields": [
      {
       "label": "Klasa A",
       "ans": 28,
       "show": "28",
       "why": [
        [
         24,
         "24 uczniów jest w klasie B. Pytanie jest o klasę A."
        ],
        [
         26,
         "Po równo byłoby po 26, ale klasa A ma o 4 uczniów więcej."
        ]
       ]
      }
     ],
     "sol": [
      "x – klasa B, klasa A: [[x + 4]].",
      "[[x + x + 4 = 52]], [[2x = 48]], [[x = 24]]. Klasa A: [[28]]."
     ],
     "answer": "28 uczniów.",
     "tip": "Sprawdzenie: 28 + 24 = 52, a 28 − 24 = 4.",
     "check": [
      "28 + 24 == 52"
     ]
    },
    {
     "id": "y2b",
     "type": "pf",
     "q": "Oceń prawdziwość zdań o zadaniach otwartych na egzaminie.",
     "items": [
      {
       "t": "Punkt można dostać także za poprawny sposób rozwiązania, nawet gdy w rachunkach pojawi się błąd.",
       "ok": "P"
      },
      {
       "t": "Jeśli wynik jest dobry, nie trzeba zapisywać obliczeń.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> W zasadach oceniania CKE punkty są przyznawane za kolejne etapy, np. za poprawny sposób obliczenia. Prawda.",
      "<b>Zdanie 2.</b> Polecenie „Zapisz obliczenia” oznacza, że sam wynik nie wystarczy. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "Zawsze zapisuj, co liczysz.",
     "check": [
      "True"
     ]
    }
   ]
  }
 ],
 "traps": [
  {
   "name": "Minus przed nawiasem",
   "bad": "−(2x − 5) = −2x − 5",
   "good": "−2x + 5"
  },
  {
   "name": "Odpowiedź o x zamiast o to, o co pytają",
   "bad": "x = 30, więc tulipanów jest 30",
   "good": "x to żonkile, tulipanów jest 3x = 90"
  },
  {
   "name": "Procent od złej wielkości",
   "bad": "cena przed obniżką o 20%: 240 + 20% · 240",
   "good": "0,8x = 240, więc x = 300"
  }
 ],
 "cheat": {
  "title": "Cały Dział 2 na jednej stronie",
  "rules": [
   {
    "t": "Wyrażenia.",
    "f": [
     "o 5 więcej: x + 5",
     "3 razy więcej: 3x",
     "−(a − b) = −a + b",
     "(a + b)(c + d) = ac + ad + bc + bd"
    ],
    "e": "Wyrazy podobne: dodajesz liczby przed literami."
   },
   {
    "t": "Równania.",
    "f": [
     "x na jedną stronę, liczby na drugą",
     "przeniesiony wyraz zmienia znak",
     "ułamki: pomnóż przez wspólny mianownik"
    ],
    "e": "Sprawdzenie z treścią i odpowiedź na pytanie."
   },
   {
    "t": "Proporcjonalność.",
    "f": [
     "cena jednej jednostki · ilość",
     "a/b = c/d → a · d = b · c",
     "w stosunku: całość : suma części"
    ],
    "e": "Opłata stała + stawka to nie proporcjonalność."
   },
   {
    "t": "Zadania praktyczne.",
    "f": [
     "s = v · t",
     "1 m/s = 3,6 km/h",
     "1 kg = 100 dag",
     "skala 1 : 20 → razy 20"
    ],
    "e": "Opakowania zaokrąglaj w górę."
   }
  ]
 },
 "memo": {
  "title": "Słowa-klucze w zadaniach z algebry",
  "rows": [
   [
    "o … więcej",
    "… razy więcej",
    "razem / tyle samo",
    "w stosunku 2 : 3",
    "za tyle kilogramów",
    "z prędkością"
   ],
   [
    "x + …",
    "… · x",
    "równanie",
    "podział na 5 części",
    "cena za 1 kg",
    "s = v · t"
   ]
  ],
  "note": "Plan zadania otwartego: oznaczenia → równanie → rozwiązanie → sprawdzenie z treścią → odpowiedź pełnym zdaniem."
 },
 "warmup": {
  "id": "w0",
  "type": "fields",
  "q": "Rozgrzewka z całego działu.",
  "fields": [
   {
    "label": "3(x − 2) dla x = 5",
    "ans": 9,
    "show": "9"
   },
   {
    "label": "x z równania 2x + 1 = 9",
    "ans": 4,
    "show": "4"
   },
   {
    "label": "20% z 45",
    "ans": 9,
    "show": "9"
   }
  ],
  "sol": [
   "<b>3(5 − 2)</b> = 3 · 3 = [[9]].",
   "<b>2x = 8</b>, więc x = [[4]].",
   "<b>20%</b> to piąta część: 45 : 5 = [[9]]."
  ],
  "answer": "9, 4 i 9.",
  "tip": "Jeśli coś tu sprawia kłopot, wróć do odpowiedniego tematu przed powtórką.",
  "check": [
   "3*(5 - 2) == 9",
   "2*4 + 1 == 9",
   "45/5 == 9"
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
    "D1"
   ],
   "type": "abcd",
   "q": "Wyrażenie 2(x − 3) − (x − 8) jest równe:",
   "opts": [
    "x − 14",
    "3x + 2",
    "x + 2",
    "x − 2"
   ],
   "ok": 2,
   "why": {
    "A": "−(x − 8) = −x + 8, a nie −x − 8.",
    "B": "2x − x = x, a nie 3x.",
    "D": "−6 + 8 = 2, a nie −2."
   },
   "sol": [
    "[[2x − 6 − x + 8 = x + 2]]."
   ],
   "answer": "C, x + 2.",
   "tip": "Minus przed nawiasem zmienia oba znaki.",
   "check": [
    "all(2*(x - 3) - (x - 8) == x + 2 for x in range(-5, 6))"
   ],
   "twin": {
    "type": "abcd",
    "q": "Wyrażenie 3(a + 2) − (2a − 1) jest równe:",
    "opts": [
     "a + 7",
     "a + 5",
     "5a + 7",
     "a − 7"
    ],
    "ok": 0,
    "why": {
     "B": "−(2a − 1) = −2a + 1, więc 6 + 1 = 7.",
     "C": "3a − 2a = a.",
     "D": "6 + 1 = 7, a nie −7."
    },
    "sol": [
     "[[3a + 6 − 2a + 1 = a + 7]]."
    ],
    "answer": "A, a + 7.",
    "tip": "Najpierw nawiasy, potem redukcja.",
    "check": [
     "all(3*(a + 2) - (2*a - 1) == a + 7 for a in range(-5, 6))"
    ]
   }
  },
  {
   "id": "p3",
   "level": 1,
   "skills": [
    "D3"
   ],
   "type": "fields",
   "q": "Za 12 dag cukierków zapłacono 5,40 zł. Ile kosztuje 30 dag tych cukierków?",
   "fields": [
    {
     "label": "Cena (zł)",
     "ans": 13.5,
     "show": "13,50",
     "why": [
      [
       0.45,
       "0,45 zł to cena 1 dag. Pomnóż przez 30."
      ]
     ]
    }
   ],
   "sol": [
    "1 dag: [[5,40 : 12 = 0,45]] zł. 30 dag: [[30 · 0,45 = 13,50]] zł."
   ],
   "answer": "13,50 zł.",
   "tip": "Najpierw cena jednej jednostki.",
   "check": [
    "F('5.4')/12*30 == F('13.5')"
   ],
   "twin": {
    "type": "fields",
    "q": "7 zeszytów kosztuje 24,50 zł. Ile kosztują 4 takie zeszyty?",
    "fields": [
     {
      "label": "Cena (zł)",
      "ans": 14,
      "show": "14",
      "why": [
       [
        3.5,
        "3,50 zł to jeden zeszyt."
       ]
      ]
     }
    ],
    "sol": [
     "Jeden: [[3,50]] zł. Cztery: [[14]] zł."
    ],
    "answer": "14 zł.",
    "tip": "24,50 : 7 = 3,50.",
    "check": [
     "F('24.5')/7*4 == 14"
    ]
   }
  },
  {
   "id": "p5",
   "level": 1,
   "skills": [
    "D1",
    "D2"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Liczba 3 jest rozwiązaniem równania x² − 2x = 3.",
     "ok": "P"
    },
    {
     "t": "Dla każdej liczby x prawdziwa jest równość (x + 2)² = x² + 4.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[9 − 6 = 3]]. Prawda.",
    "<b>Zdanie 2.</b> [[(x + 2)² = x² + 4x + 4]]. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Kwadrat nawiasu ma środkowy wyraz.",
   "check": [
    "3**2 - 2*3 == 3",
    "(1 + 2)**2 != 1**2 + 4"
   ],
   "twin": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Liczba −1 jest rozwiązaniem równania x² + x = 0.",
      "ok": "P"
     },
     {
      "t": "Dla każdej liczby x prawdziwa jest równość (x − 1)(x + 1) = x² − 2x − 1.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[1 − 1 = 0]]. Prawda.",
     "<b>Zdanie 2.</b> [[(x − 1)(x + 1) = x² − 1]]. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "x − x = 0 w środku.",
    "check": [
     "(-1)**2 + (-1) == 0",
     "all((x - 1)*(x + 1) == x*x - 1 for x in range(-5, 6))"
    ]
   }
  },
  {
   "id": "p8",
   "level": 1,
   "skills": [
    "D1",
    "D4"
   ],
   "type": "abcd",
   "q": "Bilet dla dziecka kosztuje d zł, a dla dorosłego o 12 zł więcej. Ile zapłaci rodzina: 2 dorosłych i 3 dzieci?",
   "opts": [
    "5d + 12",
    "5d + 36",
    "2d + 24",
    "5d + 24"
   ],
   "ok": 3,
   "why": {
    "A": "Dopłata 12 zł jest przy każdym z 2 biletów dorosłych: 2 · 12 = 24.",
    "B": "Dopłata dotyczy 2 dorosłych, a nie 3 osób.",
    "C": "Trzeba dodać bilety dzieci: 3d."
   },
   "sol": [
    "[[2(d + 12) + 3d = 2d + 24 + 3d = 5d + 24]]."
   ],
   "answer": "D, 5d + 24.",
   "tip": "Najpierw cena jednego biletu dorosłego: d + 12.",
   "check": [
    "all(2*(d + 12) + 3*d == 5*d + 24 for d in range(0, 30))"
   ],
   "twin": {
    "type": "abcd",
    "q": "Zeszyt kosztuje z zł, a blok rysunkowy o 3 zł więcej. Ile kosztują 4 zeszyty i 2 bloki?",
    "opts": [
     "6z + 3",
     "6z + 6",
     "6z + 12",
     "4z + 6"
    ],
    "ok": 1,
    "why": {
     "A": "Dopłata 3 zł jest przy każdym z 2 bloków: 2 · 3 = 6.",
     "C": "Bloki są 2, a nie 4: 2 · 3 = 6.",
     "D": "Dolicz też 2 bloki: 2z."
    },
    "sol": [
     "[[4z + 2(z + 3) = 6z + 6]]."
    ],
    "answer": "B, 6z + 6.",
    "tip": "Dopłatę mnożysz przez liczbę sztuk.",
    "check": [
     "all(4*z + 2*(z + 3) == 6*z + 6 for z in range(0, 30))"
    ]
   }
  },
  {
   "id": "p10",
   "level": 1,
   "skills": [
    "D4"
   ],
   "type": "tn",
   "q": "Czy 2,75 h to 2 h 45 min? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "T",
   "reasons": {
    "1": "0,75 h = 0,75 · 60 min = 45 min",
    "2": "75 − 30 = 45",
    "3": "2,75 jest większe od 2"
   },
   "okReason": "1",
   "sol": [
    "[[0,75 · 60 = 45]] min. Tak."
   ],
   "answer": "T, uzasadnienie 1.",
   "tip": "Część godziny razy 60.",
   "check": [
    "F('0.75')*60 == 45"
   ],
   "twin": {
    "type": "tn",
    "q": "Czy 3,3 h to 3 h 30 min? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "N",
    "reasons": {
     "1": "0,3 h = 0,3 · 60 min = 18 min",
     "2": "3,3 jest większe od 3",
     "3": "30 = 3 · 10"
    },
    "okReason": "1",
    "sol": [
     "[[0,3 · 60 = 18]] min, więc 3,3 h = 3 h 18 min. Nie."
    ],
    "answer": "N, uzasadnienie 1.",
    "tip": "Godzina ma 60 minut, a nie 100.",
    "check": [
     "F('0.3')*60 == 18"
    ]
   }
  },
  {
   "id": "p11",
   "level": 1,
   "skills": [
    "D1"
   ],
   "type": "fields",
   "q": "Oblicz wartość wyrażenia 2a² − 3a dla a = −3.",
   "fields": [
    {
     "label": "Wartość",
     "ans": 27,
     "show": "27",
     "why": [
      [
       -9,
       "(−3)² = 9, więc 2 · 9 = 18, a −3 · (−3) = +9."
      ],
      [
       9,
       "−3 · (−3) = +9, więc 18 + 9 = 27."
      ]
     ]
    }
   ],
   "sol": [
    "[[2 · 9 − 3 · (−3) = 18 + 9 = 27]]."
   ],
   "answer": "27.",
   "tip": "Liczby ujemne w nawiasach.",
   "check": [
    "2*(-3)**2 - 3*(-3) == 27"
   ],
   "twin": {
    "type": "fields",
    "q": "Oblicz wartość wyrażenia x² − 5x dla x = −2.",
    "fields": [
     {
      "label": "Wartość",
      "ans": 14,
      "show": "14",
      "why": [
       [
        -6,
        "−5 · (−2) = +10: 4 + 10 = 14."
       ]
      ]
     }
    ],
    "sol": [
     "[[4 + 10 = 14]]."
    ],
    "answer": "14.",
    "tip": "(−2)² = 4.",
    "check": [
     "(-2)**2 - 5*(-2) == 14"
    ]
   }
  },
  {
   "id": "p12",
   "level": 1,
   "skills": [
    "D3"
   ],
   "type": "abcd",
   "q": "Który zakup jest najtańszy w przeliczeniu na kilogram?",
   "opts": [
    "2 kg za 9,20 zł",
    "3 kg za 13,50 zł",
    "5 kg za 23 zł",
    "1 kg za 4,70 zł"
   ],
   "ok": 1,
   "why": {
    "A": "4,60 zł za kilogram.",
    "C": "4,60 zł za kilogram.",
    "D": "4,70 zł za kilogram."
   },
   "sol": [
    "Za 1 kg: [[4,50]], [[4,60]], [[4,60]], [[4,70]] zł."
   ],
   "answer": "B, 3 kg za 13,50 zł.",
   "tip": "Przelicz na 1 kg.",
   "check": [
    "F('13.5')/3 == F('4.5')",
    "F('9.2')/2 == F(23, 5) == F('4.6')"
   ],
   "twin": {
    "type": "abcd",
    "q": "Który zakup jest najtańszy w przeliczeniu na kilogram?",
    "opts": [
     "2,5 kg za 6,50 zł",
     "1 kg za 2,70 zł",
     "10 kg za 26 zł",
     "4 kg za 10 zł"
    ],
    "ok": 3,
    "why": {
     "A": "2,60 zł za kilogram.",
     "B": "2,70 zł za kilogram.",
     "C": "2,60 zł za kilogram."
    },
    "sol": [
     "Za 1 kg: [[2,50]], [[2,60]], [[2,70]], [[2,60]] zł."
    ],
    "answer": "D, 4 kg za 10 zł.",
    "tip": "Największe opakowanie nie zawsze jest najtańsze.",
    "check": [
     "F(10, 4) == F('2.5')",
     "F('6.5')/F('2.5') == F(26, 10) == F('2.6')"
    ]
   }
  },
  {
   "id": "p14",
   "level": 1,
   "skills": [
    "D1",
    "D2"
   ],
   "type": "pair",
   "q": "Pole trapezu obliczamy ze wzoru P = (a + b) · h : 2. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "Trapez o podstawach 9 cm i 5 cm i wysokości 6 cm ma pole",
     "opts": {
      "A": "42 cm²",
      "B": "84 cm²"
     },
     "ok": "A"
    },
    {
     "label": "Trapez o polu 42 cm², wysokości 7 cm i podstawie 4 cm ma drugą podstawę",
     "opts": {
      "C": "8 cm",
      "D": "12 cm"
     },
     "ok": "C"
    }
   ],
   "sol": [
    "[[(9 + 5) · 6 : 2 = 42]] cm². 84 to wynik bez dzielenia przez 2.",
    "[[42 = (4 + b) · 7 : 2]], [[4 + b = 12]], [[b = 8]] cm. 12 cm to suma podstaw."
   ],
   "answer": "A i C.",
   "tip": "Wzór to też równanie.",
   "check": [
    "(9 + 5)*6/2 == 42",
    "(4 + 8)*7/2 == 42"
   ],
   "twin": {
    "type": "pair",
    "q": "Pole trójkąta obliczamy ze wzoru P = a · h : 2. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Trójkąt o podstawie 12 cm i wysokości 5 cm ma pole",
      "opts": {
       "A": "30 cm²",
       "B": "60 cm²"
      },
      "ok": "A"
     },
     {
      "label": "Trójkąt o polu 36 cm² i podstawie 9 cm ma wysokość",
      "opts": {
       "C": "4 cm",
       "D": "8 cm"
      },
      "ok": "D"
     }
    ],
    "sol": [
     "[[12 · 5 : 2 = 30]] cm².",
     "[[36 = 9h : 2]], [[h = 8]] cm."
    ],
    "answer": "A i D.",
    "tip": "h = 2P : a.",
    "check": [
     "12*5/2 == 30",
     "9*8/2 == 36"
    ]
   }
  },
  {
   "id": "q1",
   "level": 2,
   "skills": [
    "D2",
    "D4"
   ],
   "type": "self",
   "q": "Tata jest 4 razy starszy od syna. Za 20 lat będzie od niego 2 razy starszy. Ile lat ma teraz syn, a ile tata? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Zapisano wiek obu osób teraz i za 20 lat (x i 4x; x + 20 i 4x + 20).",
     "pts": 1
    },
    {
     "t": "Ułożono równanie 4x + 20 = 2(x + 20).",
     "pts": 1
    },
    {
     "t": "Obliczono wiek: syn 10 lat, tata 40 lat.",
     "pts": 1
    }
   ],
   "sol": [
    "[[4x + 20 = 2(x + 20) = 2x + 40]], [[2x = 20]], [[x = 10]].",
    "Syn [[10]] lat, tata [[40]] lat. Sprawdzenie: za 20 lat 60 i 30."
   ],
   "answer": "Syn ma 10 lat, a tata 40 lat.",
   "tip": "Za 20 lat starsi są obaj.",
   "check": [
    "4*10 + 20 == 2*(10 + 20)"
   ]
  },
  {
   "id": "q3",
   "level": 2,
   "skills": [
    "D3"
   ],
   "type": "self",
   "q": "Trzej przyjaciele wpłacili pieniądze na wspólny los: Adam 6 zł, Bartek 9 zł, a Czarek 15 zł. Los wygrał 2 000 zł. Ile powinien dostać każdy z nich przy podziale proporcjonalnym do wpłat? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Zapisano stosunek wpłat 2 : 3 : 5 albo udział jednej osoby (np. 6/30 = 1/5).",
     "pts": 1
    },
    {
     "t": "Zastosowano poprawny sposób obliczenia kwot dla wszystkich trzech osób.",
     "pts": 1
    },
    {
     "t": "Podano kwoty: Adam 400 zł, Bartek 600 zł, Czarek 1 000 zł.",
     "pts": 1
    }
   ],
   "sol": [
    "Razem wpłacili [[30]] zł. Stosunek: [[6 : 9 : 15 = 2 : 3 : 5]], 10 części.",
    "Jedna część: [[2 000 : 10 = 200]] zł.",
    "Adam [[400]] zł, Bartek [[600]] zł, Czarek [[1 000]] zł."
   ],
   "answer": "400 zł, 600 zł i 1 000 zł.",
   "tip": "Sprawdzenie: 400 + 600 + 1 000 = 2 000.",
   "check": [
    "2000/10*2 == 400",
    "2000/10*3 == 600",
    "2000/10*5 == 1000"
   ]
  },
  {
   "id": "q5",
   "level": 2,
   "skills": [
    "D3",
    "D2"
   ],
   "type": "self",
   "q": "W sadzie rosną jabłonie, grusze i śliwy w stosunku 5 : 3 : 2. Jabłoni jest o 36 więcej niż śliw. Ile drzew rośnie w sadzie? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Zauważono, że różnica 36 to 5 − 2 = 3 części, więc jedna część to 12 drzew.",
     "pts": 1
    },
    {
     "t": "Obliczono liczbę wszystkich drzew: 10 · 12 = 120.",
     "pts": 1
    }
   ],
   "sol": [
    "Różnica: [[5 − 2 = 3]] części = 36, więc jedna część: [[12]].",
    "Wszystkich części: [[10]], drzew: [[120]]."
   ],
   "answer": "120 drzew.",
   "tip": "Można też równaniem: 5x − 2x = 36.",
   "check": [
    "36/3*10 == 120",
    "5*12 - 2*12 == 36"
   ]
  },
  {
   "id": "q6",
   "level": 2,
   "skills": [
    "D4",
    "D3"
   ],
   "type": "self",
   "q": "Ogródek ma kształt prostokąta o wymiarach 14 m na 9 m. Na obsianie 40 m² potrzeba 1 kg nasion trawy. Nasiona sprzedaje się w paczkach po 0,5 kg, a paczka kosztuje 18,50 zł. Ile trzeba zapłacić za nasiona? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono pole ogródka (126 m²) i ilość nasion: 126 : 40 = 3,15 kg.",
     "pts": 1
    },
    {
     "t": "Obliczono liczbę paczek, zaokrąglając w górę: 3,15 : 0,5 = 6,3, więc 7 paczek.",
     "pts": 1
    },
    {
     "t": "Obliczono koszt: 7 · 18,50 = 129,50 zł.",
     "pts": 1
    }
   ],
   "sol": [
    "Pole: [[14 · 9 = 126]] m². Nasiona: [[126 : 40 = 3,15]] kg.",
    "Paczki: [[3,15 : 0,5 = 6,3]], więc [[7]].",
    "[[7 · 18,50 = 129,50]] zł."
   ],
   "answer": "129,50 zł.",
   "tip": "Paczek nie kupuje się w kawałkach.",
   "check": [
    "14*9 == 126",
    "F(126, 40)/F('0.5') == F('6.3')",
    "7*F('18.5') == F('129.5')"
   ]
  }
 ],
 "test": [
  {
   "id": "t1",
   "skills": [
    "D1"
   ],
   "type": "abcd",
   "q": "Wyrażenie (x + 3)(x − 2) jest równe:",
   "opts": [
    "x² + x − 6",
    "x² − 6",
    "x² − x − 6",
    "x² + 5x − 6"
   ],
   "ok": 0,
   "why": {
    "B": "Brakuje środkowych wyrazów: 3x − 2x = x.",
    "C": "3x − 2x = +x.",
    "D": "Środkowe wyrazy to 3x i −2x, razem x, a nie 5x."
   },
   "sol": [
    "[[x² − 2x + 3x − 6 = x² + x − 6]]."
   ],
   "answer": "A, x² + x − 6.",
   "tip": "4 iloczyny.",
   "check": [
    "all((x + 3)*(x - 2) == x*x + x - 6 for x in range(-5, 6))"
   ],
   "pts": 1
  },
  {
   "id": "t2",
   "skills": [
    "D1"
   ],
   "type": "fields",
   "q": "Oblicz wartość wyrażenia 3x − x² dla x = −2.",
   "fields": [
    {
     "label": "Wartość",
     "ans": -10,
     "show": "−10"
    }
   ],
   "sol": [
    "[[3 · (−2) − (−2)² = −6 − 4 = −10]]."
   ],
   "answer": "−10.",
   "tip": "(−2)² = 4, a potem odejmujesz.",
   "check": [
    "3*(-2) - (-2)**2 == -10"
   ],
   "pts": 1
  },
  {
   "id": "t3",
   "skills": [
    "D2"
   ],
   "type": "fields",
   "q": "Rozwiąż równanie x/2 + x/5 = 14.",
   "fields": [
    {
     "label": "x",
     "ans": 20,
     "show": "20"
    }
   ],
   "sol": [
    "Mnożymy przez 10: [[5x + 2x = 140]], [[x = 20]]."
   ],
   "answer": "x = 20.",
   "tip": "Wspólny mianownik 10.",
   "check": [
    "F(20, 2) + F(20, 5) == 14"
   ],
   "pts": 1
  },
  {
   "id": "t4",
   "skills": [
    "D2"
   ],
   "type": "abcd",
   "q": "Rozwiązaniem równania 5 − 2(x − 1) = x + 1 jest liczba:",
   "opts": [
    "2/3",
    "−2",
    "2",
    "6"
   ],
   "ok": 2,
   "why": {
    "A": "−2(x − 1) = −2x + 2, a nie −2x − 2.",
    "B": "6 = 3x daje x = 2, liczbę dodatnią.",
    "D": "Z 6 = 3x trzeba jeszcze podzielić przez 3."
   },
   "sol": [
    "[[5 − 2x + 2 = x + 1]], [[6 = 3x]], [[x = 2]]."
   ],
   "answer": "C, 2.",
   "tip": "Minus razy minus daje plus.",
   "check": [
    "5 - 2*(2 - 1) == 2 + 1"
   ],
   "pts": 1
  },
  {
   "id": "t5",
   "skills": [
    "D3"
   ],
   "type": "fields",
   "q": "Za 25 dag kawy zapłacono 16 zł. Ile kosztuje 1 kg tej kawy?",
   "fields": [
    {
     "label": "Cena (zł)",
     "ans": 64,
     "show": "64"
    }
   ],
   "sol": [
    "1 kg = 100 dag, czyli 4 razy po 25 dag: [[4 · 16 = 64]] zł."
   ],
   "answer": "64 zł.",
   "tip": "1 kg = 100 dag.",
   "check": [
    "100/25*16 == 64"
   ],
   "pts": 1
  },
  {
   "id": "t6",
   "skills": [
    "D3"
   ],
   "type": "abcd",
   "q": "Kwotę 540 zł podzielono w stosunku 4 : 5. Większa część to:",
   "opts": [
    "240 zł",
    "270 zł",
    "300 zł",
    "135 zł"
   ],
   "ok": 2,
   "why": {
    "A": "240 zł to mniejsza część.",
    "B": "270 zł to podział po równo.",
    "D": "540 : 4 = 135 to nie jest jedna część: części jest 9."
   },
   "sol": [
    "[[540 : 9 = 60]], [[5 · 60 = 300]] zł."
   ],
   "answer": "C, 300 zł.",
   "tip": "Dziel przez sumę części.",
   "check": [
    "540/9*5 == 300"
   ],
   "pts": 1
  },
  {
   "id": "t7",
   "skills": [
    "D4"
   ],
   "type": "fields",
   "q": "Ile minut to 2,15 h?",
   "fields": [
    {
     "label": "Minuty",
     "ans": 129,
     "show": "129"
    }
   ],
   "sol": [
    "[[2,15 · 60 = 129]] min (2 h 9 min)."
   ],
   "answer": "129 minut.",
   "tip": "0,15 h = 9 min.",
   "check": [
    "F('2.15')*60 == 129"
   ],
   "pts": 1
  },
  {
   "id": "t8",
   "skills": [
    "D4"
   ],
   "type": "abcd",
   "q": "Na mapie w skali 1 : 25 000 odcinek ma 8 cm. W rzeczywistości ma on długość:",
   "opts": [
    "2 km",
    "20 km",
    "200 m",
    "0,2 km"
   ],
   "ok": 0,
   "why": {
    "B": "200 000 cm = 2 km, a nie 20 km.",
    "C": "200 000 cm = 2 000 m, a nie 200 m.",
    "D": "200 000 cm = 2 km, a nie 0,2 km."
   },
   "sol": [
    "[[8 · 25 000 = 200 000]] cm = [[2]] km."
   ],
   "answer": "A, 2 km.",
   "tip": "1 km = 100 000 cm.",
   "check": [
    "8*25000/100000 == 2"
   ],
   "pts": 1
  },
  {
   "id": "t9",
   "skills": [
    "D2",
    "D3"
   ],
   "type": "fields",
   "q": "Po obniżce o 40% cena wynosi 57 zł. Ile wynosiła przed obniżką?",
   "fields": [
    {
     "label": "Cena (zł)",
     "ans": 95,
     "show": "95"
    }
   ],
   "sol": [
    "[[0,6x = 57]], [[x = 95]] zł."
   ],
   "answer": "95 zł.",
   "tip": "Zostaje 60% ceny.",
   "check": [
    "F('0.6')*95 == 57"
   ],
   "pts": 1
  },
  {
   "id": "t10",
   "skills": [
    "D4"
   ],
   "type": "pf",
   "q": "Samochód jedzie ze stałą prędkością 90 km/h. Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "W ciągu 20 minut przejedzie 30 km.",
     "ok": "P"
    },
    {
     "t": "Jego prędkość to 90 m/s.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[90 : 3 = 30]] km. Prawda.",
    "<b>Zdanie 2.</b> [[90 : 3,6 = 25]] m/s. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "20 min = 1/3 h.",
   "check": [
    "90/3 == 30",
    "90/F('3.6') == 25"
   ],
   "pts": 1
  },
  {
   "id": "t11",
   "skills": [
    "D1",
    "D2"
   ],
   "type": "pair",
   "q": "Obwód prostokąta obliczamy ze wzoru O = 2(a + b). Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "Dla a = 4,5 cm i b = 3 cm obwód jest równy",
     "opts": {
      "A": "15 cm",
      "B": "13,5 cm"
     },
     "ok": "A"
    },
    {
     "label": "Prostokąt o obwodzie 26 cm i boku 5 cm ma drugi bok",
     "opts": {
      "C": "8 cm",
      "D": "16 cm"
     },
     "ok": "C"
    }
   ],
   "sol": [
    "[[2 · 7,5 = 15]] cm.",
    "[[26 = 2(5 + b)]], [[13 = 5 + b]], [[b = 8]] cm."
   ],
   "answer": "A i C.",
   "tip": "Połowa obwodu to suma dwóch boków.",
   "check": [
    "2*(F('4.5') + 3) == 15",
    "2*(5 + 8) == 26"
   ],
   "pts": 1
  },
  {
   "id": "t12",
   "skills": [
    "D3",
    "D1"
   ],
   "type": "tn",
   "q": "Opłata za wypożyczenie hulajnogi to 10 zł plus 2 zł za każdy kilometr. Czy opłata jest wprost proporcjonalna do liczby kilometrów? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "N",
   "reasons": {
    "1": "za 1 km płacimy 12 zł, a za 2 km 14 zł, a nie 24 zł",
    "2": "opłata rośnie razem z liczbą kilometrów",
    "3": "10 i 2 to liczby parzyste"
   },
   "okReason": "1",
   "sol": [
    "Przy proporcjonalności za 2 km płacilibyśmy 2 razy więcej niż za 1 km, czyli 24 zł. Płacimy 14 zł. Nie."
   ],
   "answer": "N, uzasadnienie 1.",
   "tip": "Opłata stała psuje proporcjonalność.",
   "check": [
    "10 + 2*2 != 2*(10 + 2*1)"
   ],
   "pts": 1
  },
  {
   "id": "t13",
   "skills": [
    "D2"
   ],
   "type": "self",
   "q": "W dwóch pudełkach są razem 64 kredki. W pierwszym pudełku jest 3 razy więcej kredek niż w drugim. Ile kredek jest w każdym pudełku? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Ułożono równanie x + 3x = 64 (albo zauważono, że to 4 równe części).",
     "pts": 1
    },
    {
     "t": "Podano liczby kredek: 48 i 16.",
     "pts": 1
    }
   ],
   "sol": [
    "[[4x = 64]], [[x = 16]]. W pierwszym [[48]], w drugim [[16]]."
   ],
   "answer": "48 i 16 kredek.",
   "tip": "Odpowiedz o oba pudełka.",
   "check": [
    "16 + 48 == 64",
    "48 == 3*16"
   ],
   "pts": 2
  },
  {
   "id": "t14",
   "skills": [
    "D3"
   ],
   "type": "self",
   "q": "Trzy sąsiadki kupiły razem węgiel: pani Ala zamówiła 2 t, pani Beata 1,5 t, a pani Celina 2,5 t. Za cały węgiel z rabatem zapłaciły 7 200 zł. Ile powinna zapłacić każda z nich, żeby wpłaty były proporcjonalne do zamówionej ilości? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono łączną ilość (6 t) i cenę jednej tony: 7 200 : 6 = 1 200 zł, albo zapisano stosunek 4 : 3 : 5.",
     "pts": 1
    },
    {
     "t": "Zastosowano poprawny sposób obliczenia kwot dla wszystkich trzech pań.",
     "pts": 1
    },
    {
     "t": "Podano kwoty: Ala 2 400 zł, Beata 1 800 zł, Celina 3 000 zł.",
     "pts": 1
    }
   ],
   "sol": [
    "Razem [[6]] t, tona: [[7 200 : 6 = 1 200]] zł.",
    "Ala [[2 · 1 200 = 2 400]] zł, Beata [[1,5 · 1 200 = 1 800]] zł, Celina [[2,5 · 1 200 = 3 000]] zł."
   ],
   "answer": "2 400 zł, 1 800 zł i 3 000 zł.",
   "tip": "Sprawdzenie: 2 400 + 1 800 + 3 000 = 7 200.",
   "check": [
    "7200/6*2 == 2400",
    "F(7200, 6)*F('1.5') == 1800",
    "F(7200, 6)*F('2.5') == 3000"
   ],
   "pts": 3
  },
  {
   "id": "t15",
   "skills": [
    "D4"
   ],
   "type": "self",
   "q": "Pan Tomek wyjechał z domu o 7:20. Pierwsze 120 km jechał ze średnią prędkością 80 km/h, potem zrobił 20 minut przerwy, a pozostałe 90 km jechał z prędkością 60 km/h. O której dojechał na miejsce? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono czasy jazdy: 120 : 80 = 1,5 h i 90 : 60 = 1,5 h.",
     "pts": 1
    },
    {
     "t": "Obliczono łączny czas z przerwą: 3 h 20 min.",
     "pts": 1
    },
    {
     "t": "Podano godzinę przyjazdu: 10:40.",
     "pts": 1
    }
   ],
   "sol": [
    "[[120 : 80 = 1,5]] h, [[90 : 60 = 1,5]] h.",
    "Razem z przerwą: [[3 h 20 min]].",
    "[[7:20 + 3 h 20 min = 10:40]]."
   ],
   "answer": "O 10:40.",
   "tip": "Nie zapomnij o przerwie.",
   "check": [
    "7*60 + 20 + 90 + 20 + 90 == 10*60 + 40"
   ],
   "pts": 3
  }
 ],
 "test_minutes": 60,
 "pass": 17,
 "dzial": "Dział 2: Algebra"
};
