/* Wygenerowane przez zbuduj.py z tresc/wyrazenia-algebraiczne.py. Nie edytuj ręcznie. */
window.TEMAT = {
 "slug": "wyrazenia-algebraiczne",
 "title": "Wyrażenia algebraiczne",
 "sign": "x²",
 "lead": "Zapisywanie zależności za pomocą liter, obliczanie wartości wyrażeń, redukcja wyrazów podobnych i mnożenie sum. Na egzaminie w 2026 roku dwa zadania zamknięte wymagały właśnie wyrażeń: cena kotów ze zniżką i wzór na sumę liczb.",
 "goals": {
  "learn": "8 umiejętności: zapisywanie wyrażeń z treści, wartość wyrażenia, wyrazy podobne, nawiasy, mnożenie sumy przez jednomian i przez sumę, wyrażenia w zadaniach i korzystanie ze wzorów.",
  "prereq": "Działania na liczbach ujemnych i ułamkach (Dział 1). Rozgrzewka na początku to sprawdzi.",
  "goal": "Minimum 12 z 14 punktów w teście na koniec tematu."
 },
 "skills": {
  "A1": "Zapisywanie wyrażeń z treści",
  "A2": "Wartość liczbowa wyrażenia",
  "A3": "Wyrazy podobne",
  "A4": "Nawiasy: dodawanie i odejmowanie sum",
  "A5": "Mnożenie sumy przez jednomian",
  "A6": "Mnożenie sumy przez sumę",
  "A7": "Wyrażenia w zadaniach",
  "A8": "Wzory"
 },
 "lessons": [
  {
   "title": "Zapisywanie wyrażeń z treści",
   "skills": [
    "A1"
   ],
   "intro": "Litera zastępuje liczbę, której nie znamy albo która może się zmieniać. Zadanie tekstowe tłumaczysz na język matematyki tak jak zdanie z polskiego na angielski: słowo po słowie.",
   "rule": {
    "t": "„O” oznacza dodawanie albo odejmowanie. „Razy” oznacza mnożenie albo dzielenie.",
    "f": [
     "o 5 więcej niż x: x + 5",
     "o 5 mniej niż x: x − 5",
     "3 razy więcej niż x: 3x",
     "3 razy mniej niż x: x : 3",
     "połowa x: x : 2"
    ],
    "e": "Najczęstsza pomyłka: „3 razy mniej” zapisane jako x − 3. Poprawnie: x : 3."
   },
   "visual": {
    "type": "tape",
    "alt": "Model paskowy: Basia x, Andrzej x i 28, Marek jedna trzecia x",
    "rows": [
     {
      "label": "Basia",
      "parts": [
       {
        "t": "x"
       }
      ]
     },
     {
      "label": "Andrzej",
      "parts": [
       {
        "t": "x"
       },
       {
        "t": "28",
        "c": 1,
        "w": 0.8
       }
      ],
      "sum": "x + 28"
     },
     {
      "label": "Marek",
      "parts": [
       {
        "t": "x : 3",
        "w": 0.34
       }
      ]
     }
    ],
    "caption": "Andrzej ma o 28 więcej niż Basia, a Marek 3 razy mniej niż Basia (egzamin 2025, zadanie 17)"
   },
   "example": {
    "q": "Bartek zebrał n kasztanów, a Grześ 7 razy więcej. Grześ w drodze zgubił 10 kasztanów, a połowę pozostałych oddał Bartkowi. Ile kasztanów ma teraz każdy z chłopców? (Przykład z podstawy programowej.)",
    "steps": [
     "Grześ na początku: 7 razy więcej niż Bartek, czyli 7n.",
     "Po zgubieniu 10 kasztanów Grześ ma 7n − 10.",
     "Połowę oddaje: (7n − 10) : 2 = 3,5n − 5. Tyle dostaje Bartek i tyle zostaje Grzesiowi.",
     "Bartek ma teraz n + 3,5n − 5 = 4,5n − 5, a Grześ 3,5n − 5."
    ],
    "result": "Bartek ma 4,5n − 5 kasztanów, a Grześ 3,5n − 5.",
    "tip": "Sprawdź na liczbie. Dla n = 10: Grześ zebrał 70, zgubił 10, oddał połowę z 60, czyli 30. Bartek ma 10 + 30 = 40, a 4,5 · 10 − 5 = 40. Zgadza się.",
    "check": [
     "all(n + (7*n - 10)/2 == 4.5*n - 5 for n in range(2, 30))",
     "10 + (70 - 10)/2 == 40"
    ]
   },
   "you": [
    {
     "id": "y1",
     "type": "abcd",
     "q": "Ola ma x zł, a Kuba o 12 zł mniej niż Ola. Ile złotych mają razem?",
     "opts": [
      "2x − 12",
      "x − 12",
      "2x + 12",
      "12 − 2x"
     ],
     "ok": 0,
     "why": {
      "B": "To tylko pieniądze Kuby. Trzeba jeszcze dodać pieniądze Oli.",
      "C": "Kuba ma mniej niż Ola, więc 12 odejmujemy.",
      "D": "12 − 2x to zupełnie inna liczba niż 2x − 12, kolejność odejmowania ma znaczenie."
     },
     "sol": [
      "Kuba ma [[x − 12]] zł.",
      "Razem: [[x + (x − 12) = 2x − 12]]."
     ],
     "answer": "A, 2x − 12.",
     "tip": "Sprawdź na liczbie: gdy Ola ma 20 zł, Kuba ma 8 zł, razem 28 zł, a 2 · 20 − 12 = 28.",
     "check": [
      "2*20 - 12 == 20 + (20 - 12)"
     ]
    },
    {
     "id": "y1b",
     "type": "pf",
     "q": "Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "Liczbę o 4 większą od podwojonej liczby a zapisujemy jako 2a + 4.",
       "ok": "P"
      },
      {
       "t": "Liczbę 3 razy mniejszą od b zapisujemy jako b − 3.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> Podwojona liczba a to 2a, o 4 większa: [[2a + 4]]. Prawda.",
      "<b>Zdanie 2.</b> „3 razy mniejsza” to dzielenie: [[b : 3]]. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "„Razy” zawsze oznacza mnożenie albo dzielenie.",
     "check": [
      "2*5 + 4 == 14"
     ]
    }
   ]
  },
  {
   "title": "Wartość liczbowa wyrażenia",
   "skills": [
    "A2"
   ],
   "intro": "Obliczyć wartość wyrażenia to wstawić liczbę w miejsce litery i policzyć. Najwięcej punktów uczniowie tracą przy liczbach ujemnych i potęgach.",
   "rule": {
    "t": "Wstaw liczbę w miejsce litery. Liczbę ujemną zawsze wstawiaj w nawiasie.",
    "f": [
     "dla x = −3: 2x² = 2 · (−3)² = 2 · 9 = 18",
     "dla x = −3: −4x = −4 · (−3) = 12"
    ],
    "e": "(−3)² = 9, ale −3² = −9. Potęga dotyczy tylko tego, co stoi bezpośrednio pod nią."
   },
   "example": {
    "q": "Oblicz wartość wyrażenia 3a² − 2ab + b dla a = −2 i b = 5.",
    "steps": [
     "Wstawiamy liczby w nawiasach: 3 · (−2)² − 2 · (−2) · 5 + 5.",
     "Najpierw potęga: (−2)² = 4, więc 3 · 4 = 12.",
     "Potem iloczyn: 2 · (−2) · 5 = −20. Odejmujemy −20, czyli dodajemy 20.",
     "12 + 20 + 5 = 37."
    ],
    "result": "Wartość wyrażenia to 37.",
    "tip": "Zapisz najpierw całe wyrażenie z liczbami w nawiasach, a dopiero potem licz. Wtedy nie zgubisz żadnego minusa.",
    "check": [
     "3*(-2)**2 - 2*(-2)*5 + 5 == 37"
    ]
   },
   "you": [
    {
     "id": "y2",
     "type": "fields",
     "q": "Oblicz wartość wyrażenia x² − 4x dla x = −3.",
     "fields": [
      {
       "label": "Wartość",
       "ans": 21,
       "show": "21",
       "why": [
        [
         3,
         "(−3)² = 9, a nie −9. Liczbę ujemną podnosisz do kwadratu w nawiasie."
        ],
        [
         -3,
         "−4 · (−3) = +12, a nie −12. Minus razy minus daje plus."
        ]
       ]
      }
     ],
     "sol": [
      "[[(−3)² − 4 · (−3) = 9 + 12 = 21]]."
     ],
     "answer": "21.",
     "tip": "Minus razy minus daje plus: −4 · (−3) = 12.",
     "check": [
      "(-3)**2 - 4*(-3) == 21"
     ]
    },
    {
     "id": "y2b",
     "type": "abcd",
     "q": "Wartość wyrażenia 2(a − b) dla a = 1/2 i b = −1/4 jest równa:",
     "opts": [
      "3/2",
      "1/2",
      "3/4",
      "−3/2"
     ],
     "ok": 0,
     "why": {
      "B": "a − b = 1/2 − (−1/4) = 3/4. Odejmowanie liczby ujemnej to dodawanie, a nie odejmowanie.",
      "C": "3/4 to wartość nawiasu. Trzeba ją jeszcze pomnożyć przez 2.",
      "D": "1/2 + 1/4 to liczba dodatnia, więc wynik też jest dodatni."
     },
     "sol": [
      "[[a − b = 1/2 − (−1/4) = 1/2 + 1/4 = 3/4]].",
      "[[2 · 3/4 = 3/2]]."
     ],
     "answer": "A, 3/2.",
     "tip": "Wstawiając b = −1/4, zapisz je w nawiasie.",
     "check": [
      "2*(F(1, 2) - F(-1, 4)) == F(3, 2)"
     ]
    }
   ]
  },
  {
   "title": "Wyrazy podobne",
   "skills": [
    "A3"
   ],
   "intro": "Wyrazy podobne mają te same litery w tych samych potęgach i różnią się tylko liczbą z przodu. Tylko je można do siebie dodawać, tak jak jabłka z jabłkami.",
   "rule": {
    "t": "Dodajesz liczby stojące przed literami, a część z literami przepisujesz bez zmian.",
    "f": [
     "3x + 5x = 8x",
     "4a² − a² = 3a²",
     "2x + 3y zostaje bez zmian"
    ],
    "e": "x i x² to NIE są wyrazy podobne: 2x + 3x² nie da się uprościć. Tak samo 2x + 3 nie jest równe 5x."
   },
   "example": {
    "q": "Uprość wyrażenie 5x − 3 + 2x² − 7x + 8 − x².",
    "steps": [
     "Wyrazy z x²: 2x² − x² = x².",
     "Wyrazy z x: 5x − 7x = −2x.",
     "Same liczby: −3 + 8 = 5.",
     "Porządkujemy od najwyższej potęgi: x² − 2x + 5."
    ],
    "result": "5x − 3 + 2x² − 7x + 8 − x² = x² − 2x + 5.",
    "tip": "Podkreślaj wyrazy podobne tym samym kolorem albo tym samym znaczkiem. Znak przed wyrazem idzie razem z nim.",
    "check": [
     "all(abs((5*x - 3 + 2*x**2 - 7*x + 8 - x**2) - (x**2 - 2*x + 5)) < 1e-9 for x in range(-6, 7))"
    ]
   },
   "you": [
    {
     "id": "y3",
     "type": "fields",
     "q": "Uprość wyrażenie 7a − 4 − 3a + 10. Wynik ma postać ■a + ■. Wpisz brakujące liczby.",
     "fields": [
      {
       "label": "Liczba przy a",
       "ans": 4,
       "show": "4",
       "why": [
        [
         10,
         "Minus przed 3a oznacza odejmowanie: 7a − 3a = 4a."
        ]
       ]
      },
      {
       "label": "Liczba bez a",
       "ans": 6,
       "show": "6",
       "why": [
        [
         14,
         "−4 + 10 = 6. Uważaj na minus przed czwórką."
        ],
        [
         -14,
         "−4 + 10 = 6."
        ]
       ]
      }
     ],
     "sol": [
      "Wyrazy z a: [[7a − 3a = 4a]].",
      "Liczby: [[−4 + 10 = 6]].",
      "Wynik: 4a + 6."
     ],
     "answer": "4a + 6.",
     "tip": "Znak stojący przed wyrazem należy do tego wyrazu.",
     "check": [
      "all(abs((7*x - 4 - 3*x + 10) - (4*x + 6)) < 1e-9 for x in range(-6, 7))"
     ]
    },
    {
     "id": "y3b",
     "type": "pf",
     "q": "Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "2x + 3x = 5x²",
       "ok": "F"
      },
      {
       "t": "4ab − ab = 3ab",
       "ok": "P"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> Przy dodawaniu wyrazów podobnych potęga się nie zmienia: [[2x + 3x = 5x]]. Fałsz.",
      "<b>Zdanie 2.</b> ab to 1ab, więc [[4ab − 1ab = 3ab]]. Prawda."
     ],
     "answer": "F, P.",
     "tip": "Sama litera oznacza jeden raz tę literę: a = 1a.",
     "check": [
      "all(abs((2*x + 3*x) - (5*x)) < 1e-9 for x in range(-6, 7))",
      "4*6 - 6 == 3*6"
     ]
    }
   ]
  },
  {
   "title": "Nawiasy: dodawanie i odejmowanie sum",
   "skills": [
    "A4"
   ],
   "intro": "Sumę algebraiczną w nawiasie dodajesz albo odejmujesz od innej. Wszystko zależy od znaku przed nawiasem. W informatorze CKE jest zadanie, w którym trzeba było porównać trzy takie wyrażenia.",
   "rule": {
    "t": "Plus przed nawiasem: opuszczasz nawias bez zmian. Minus przed nawiasem: zmieniasz znaki WSZYSTKICH wyrazów w nawiasie.",
    "f": [
     "+(2x − 5) = 2x − 5",
     "−(2x − 5) = −2x + 5",
     "−(−3x + 2) = 3x − 2"
    ],
    "e": "Najczęstszy błąd to zmiana znaku tylko pierwszego wyrazu. −(3x + 4) to −3x − 4, a nie −3x + 4."
   },
   "example": {
    "q": "Uprość wyrażenie (4x − 3) − (x − 7) + (2x + 1).",
    "steps": [
     "Opuszczamy nawiasy. Przed drugim nawiasem stoi minus, więc zmieniają się oba znaki: 4x − 3 − x + 7 + 2x + 1.",
     "Wyrazy z x: 4x − x + 2x = 5x.",
     "Liczby: −3 + 7 + 1 = 5."
    ],
    "result": "Wynik: 5x + 5.",
    "tip": "Przy minusie przed nawiasem przepisz wnętrze nawiasu ze zmienionymi znakami, zanim zaczniesz cokolwiek dodawać.",
    "check": [
     "all(abs(((4*x - 3) - (x - 7) + (2*x + 1)) - (5*x + 5)) < 1e-9 for x in range(-6, 7))"
    ]
   },
   "you": [
    {
     "id": "y4",
     "type": "abcd",
     "q": "Dla każdej liczby x wyrażenie 6 − (−3x + 2) jest równe:",
     "opts": [
      "3x + 4",
      "−3x + 4",
      "3x + 8",
      "−3x + 8"
     ],
     "ok": 0,
     "why": {
      "B": "Minus przed nawiasem zmienia −3x na +3x.",
      "C": "Minus przed nawiasem zmienia także +2 na −2: 6 − 2 = 4.",
      "D": "Minus przed nawiasem zmienia znaki obu wyrazów w nawiasie."
     },
     "sol": [
      "[[6 − (−3x + 2) = 6 + 3x − 2 = 3x + 4]]."
     ],
     "answer": "A, 3x + 4.",
     "tip": "To fragment zadania 12 z informatora CKE.",
     "check": [
      "all(abs((6 - (-3*x + 2)) - (3*x + 4)) < 1e-9 for x in range(-6, 7))"
     ]
    },
    {
     "id": "y4b",
     "type": "fields",
     "q": "Uprość wyrażenie (5a + 2) − (3a − 6). Wynik ma postać ■a + ■.",
     "fields": [
      {
       "label": "Liczba przy a",
       "ans": 2,
       "show": "2",
       "why": [
        [
         8,
         "Minus przed nawiasem zmienia +3a na −3a: 5a − 3a = 2a."
        ]
       ]
      },
      {
       "label": "Liczba bez a",
       "ans": 8,
       "show": "8",
       "why": [
        [
         -4,
         "−(−6) = +6, więc 2 + 6 = 8."
        ]
       ]
      }
     ],
     "sol": [
      "Opuszczamy nawias: [[5a + 2 − 3a + 6]].",
      "[[5a − 3a = 2a]], [[2 + 6 = 8]]. Wynik: 2a + 8."
     ],
     "answer": "2a + 8.",
     "tip": "Minus i minus dają plus: −(−6) = +6.",
     "check": [
      "all(abs(((5*x + 2) - (3*x - 6)) - (2*x + 8)) < 1e-9 for x in range(-6, 7))"
     ]
    }
   ]
  },
  {
   "title": "Mnożenie sumy przez jednomian",
   "skills": [
    "A5"
   ],
   "intro": "Liczba albo wyraz przed nawiasem mnoży KAŻDY wyraz w nawiasie. Tak liczy się na przykład pole prostokąta o bokach 3 i x + 4.",
   "rule": {
    "t": "a(b + c) = ab + ac. Mnożysz każdy wyraz z nawiasu i pilnujesz znaków.",
    "f": [
     "3(x + 4) = 3x + 12",
     "−2(x − 5) = −2x + 10",
     "x(x + 3) = x² + 3x"
    ],
    "e": "Liczba ujemna przed nawiasem zmienia znaki wszystkich wyrazów: −2 · (−5) = +10."
   },
   "visual": {
    "type": "area",
    "cols": [
     "x",
     "4"
    ],
    "rows": [
     "3"
    ],
    "cells": [
     [
      "3x",
      "12"
     ]
    ],
    "cw": [
     2,
     1
    ],
    "alt": "Prostokąt 3 na x + 4 podzielony na części 3x i 12",
    "caption": "Pole prostokąta: 3 · (x + 4) = 3x + 12"
   },
   "example": {
    "q": "Uprość wyrażenie 2(3x − 1) − 3(x − 4).",
    "steps": [
     "Pierwszy nawias: 2 · 3x − 2 · 1 = 6x − 2.",
     "Drugi nawias mnożymy przez −3: −3 · x = −3x, a −3 · (−4) = +12.",
     "Razem: 6x − 2 − 3x + 12 = 3x + 10."
    ],
    "result": "Wynik: 3x + 10.",
    "tip": "Liczbę przed nawiasem traktuj razem ze znakiem: w −3(x − 4) mnożysz przez −3.",
    "check": [
     "all(abs((2*(3*x - 1) - 3*(x - 4)) - (3*x + 10)) < 1e-9 for x in range(-6, 7))"
    ]
   },
   "you": [
    {
     "id": "y5",
     "type": "fields",
     "q": "Uprość wyrażenie −4(2x − 3) + 5x. Wynik ma postać ■x + ■.",
     "fields": [
      {
       "label": "Liczba przy x",
       "ans": -3,
       "show": "−3",
       "why": [
        [
         13,
         "−4 · 2x = −8x, a −8x + 5x = −3x."
        ]
       ]
      },
      {
       "label": "Liczba bez x",
       "ans": 12,
       "show": "12",
       "why": [
        [
         -12,
         "−4 · (−3) = +12."
        ],
        [
         -3,
         "−4 mnoży też −3: −4 · (−3) = 12."
        ]
       ]
      }
     ],
     "sol": [
      "[[−4 · 2x = −8x]], [[−4 · (−3) = +12]].",
      "[[−8x + 12 + 5x = −3x + 12]]."
     ],
     "answer": "−3x + 12.",
     "tip": "Wpisując liczbę ujemną, użyj znaku minus.",
     "check": [
      "all(abs((-4*(2*x - 3) + 5*x) - (-3*x + 12)) < 1e-9 for x in range(-6, 7))"
     ]
    },
    {
     "id": "y5b",
     "type": "abcd",
     "q": "Wyrażenie a(2a − 5) + 3a jest równe:",
     "opts": [
      "2a² − 2a",
      "2a² − 8a",
      "2a − 2",
      "2a² + 2a"
     ],
     "ok": 0,
     "why": {
      "B": "−5a + 3a = −2a, a nie −8a.",
      "C": "a · 2a = 2a², a nie 2a.",
      "D": "−5a + 3a daje wynik ujemny: −2a."
     },
     "sol": [
      "[[a · 2a = 2a²]], [[a · (−5) = −5a]].",
      "[[2a² − 5a + 3a = 2a² − 2a]]."
     ],
     "answer": "A, 2a² − 2a.",
     "tip": "a · a = a².",
     "check": [
      "all(abs((x*(2*x - 5) + 3*x) - (2*x**2 - 2*x)) < 1e-9 for x in range(-6, 7))"
     ]
    }
   ]
  },
  {
   "title": "Mnożenie sumy przez sumę",
   "skills": [
    "A6"
   ],
   "intro": "Nawias razy nawias: każdy wyraz z pierwszego nawiasu mnożysz przez każdy wyraz z drugiego. Przy dwóch dwumianach wychodzą 4 iloczyny, a potem redukujesz wyrazy podobne.",
   "rule": {
    "t": "(a + b)(c + d) = ac + ad + bc + bd",
    "f": [
     "(x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6",
     "(x − 1)(x + 1) = x² + x − x − 1 = x² − 1"
    ],
    "e": "Nie gub środkowych wyrazów: (x + 3)² = (x + 3)(x + 3) = x² + 6x + 9, a nie x² + 9."
   },
   "visual": {
    "type": "area",
    "cols": [
     "x",
     "3"
    ],
    "rows": [
     "x",
     "2"
    ],
    "cells": [
     [
      "x²",
      "3x"
     ],
     [
      "2x",
      "6"
     ]
    ],
    "cw": [
     2,
     1
    ],
    "rh": [
     2,
     1
    ],
    "alt": "Prostokąt o bokach x + 3 i x + 2 podzielony na cztery części: x², 3x, 2x, 6",
    "caption": "(x + 3)(x + 2) = x² + 3x + 2x + 6 = x² + 5x + 6"
   },
   "example": {
    "q": "Uprość wyrażenie (2x − 1)(x + 4).",
    "steps": [
     "2x mnożymy przez każdy wyraz drugiego nawiasu: 2x · x = 2x², 2x · 4 = 8x.",
     "−1 mnożymy przez każdy wyraz: −1 · x = −x, −1 · 4 = −4.",
     "Razem: 2x² + 8x − x − 4 = 2x² + 7x − 4."
    ],
    "result": "Wynik: 2x² + 7x − 4.",
    "tip": "Rysuj strzałki od każdego wyrazu z pierwszego nawiasu do każdego z drugiego. Muszą być 4 strzałki.",
    "check": [
     "all(abs(((2*x - 1)*(x + 4)) - (2*x**2 + 7*x - 4)) < 1e-9 for x in range(-6, 7))"
    ]
   },
   "you": [
    {
     "id": "y6",
     "type": "fields",
     "q": "Uzupełnij: (x − 5)(x + 2) = x² + ■x + ■.",
     "fields": [
      {
       "label": "Liczba przy x",
       "ans": -3,
       "show": "−3",
       "why": [
        [
         3,
         "2x − 5x = −3x."
        ],
        [
         -7,
         "Iloczyny to −5x i +2x. Razem −3x."
        ]
       ]
      },
      {
       "label": "Liczba bez x",
       "ans": -10,
       "show": "−10",
       "why": [
        [
         10,
         "−5 · 2 = −10."
        ],
        [
         -3,
         "Wyraz bez x to iloczyn −5 · 2 = −10, a nie suma."
        ]
       ]
      }
     ],
     "sol": [
      "[[x · x = x²]], [[x · 2 = 2x]], [[−5 · x = −5x]], [[−5 · 2 = −10]].",
      "[[2x − 5x = −3x]]. Wynik: x² − 3x − 10."
     ],
     "answer": "x² − 3x − 10.",
     "tip": "Liczba bez x to zawsze iloczyn liczb z obu nawiasów.",
     "check": [
      "all(abs(((x - 5)*(x + 2)) - (x**2 - 3*x - 10)) < 1e-9 for x in range(-6, 7))"
     ]
    },
    {
     "id": "y6b",
     "type": "pf",
     "q": "Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "(x + 4)² = x² + 16",
       "ok": "F"
      },
      {
       "t": "(a + 1)(a − 1) = a² − 1",
       "ok": "P"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> [[(x + 4)(x + 4) = x² + 4x + 4x + 16 = x² + 8x + 16]]. Brakuje 8x. Fałsz.",
      "<b>Zdanie 2.</b> [[a² − a + a − 1 = a² − 1]]. Prawda."
     ],
     "answer": "F, P.",
     "tip": "Kwadrat nawiasu zapisz jako iloczyn dwóch takich samych nawiasów.",
     "check": [
      "all(abs(((x + 4)**2) - (x**2 + 8*x + 16)) < 1e-9 for x in range(-6, 7))",
      "all(abs(((x + 1)*(x - 1)) - (x**2 - 1)) < 1e-9 for x in range(-6, 7))"
     ]
    }
   ]
  },
  {
   "title": "Wyrażenia w zadaniach",
   "skills": [
    "A7"
   ],
   "intro": "Na egzaminie wyrażenia pojawiają się w zadaniach z życia i w geometrii: cena z rabatem, obwód, pole, kolejne liczby. W 2026 roku trzeba było wybrać wyrażenie opisujące cenę dwóch kotów kupionych ze zniżką.",
   "rule": {
    "t": "Oznacz literą jedną nieznaną wielkość i wszystko inne zapisz za jej pomocą.",
    "f": [
     "zniżka 40%: płacisz 60%, czyli 0,6x",
     "podwyżka 10%: 1,1x",
     "kolejne liczby: n, n + 1, n + 2",
     "kolejne parzyste: 2n, 2n + 2, 2n + 4"
    ],
    "e": "Po obniżce o p% płacisz (100 − p)% ceny, a nie p% ceny."
   },
   "example": {
    "q": "Kocur kosztuje x zł, a kotka y zł. Janek kupił kocura ze zniżką 40% i kotkę ze zniżką 20%. Które wyrażenie opisuje, ile zapłacił? (Egzamin 2026, zadanie 5.)",
    "steps": [
     "Zniżka 40% na kocura: Janek płaci 100% − 40% = 60% ceny, czyli 0,6x.",
     "Zniżka 20% na kotkę: płaci 80% ceny, czyli 0,8y.",
     "Razem: 0,6x + 0,8y."
    ],
    "result": "Janek zapłacił 0,6x + 0,8y zł.",
    "tip": "Na egzaminie była też odpowiedź 0,4x + 0,2y. To kwoty zniżek, a nie to, co się płaci.",
    "check": [
     "all(abs(0.6*x + 0.8*y - (x - 0.4*x + y - 0.2*y)) < 1e-9 for x in range(1, 20) for y in range(1, 20))"
    ]
   },
   "you": [
    {
     "id": "y7",
     "type": "abcd",
     "q": "Prostokąt ma boki x i x + 3. Jego obwód jest równy:",
     "opts": [
      "4x + 6",
      "2x + 3",
      "4x + 3",
      "x² + 3x"
     ],
     "ok": 0,
     "why": {
      "B": "To połowa obwodu, czyli suma dwóch sąsiednich boków.",
      "C": "Bok x + 3 występuje dwa razy, więc trójki są dwie: 3 + 3 = 6.",
      "D": "x² + 3x to pole prostokąta, a nie obwód."
     },
     "sol": [
      "Obwód to suma czterech boków: [[x + (x + 3) + x + (x + 3) = 4x + 6]]."
     ],
     "answer": "A, 4x + 6.",
     "tip": "Obwód: suma boków. Pole: iloczyn boków.",
     "check": [
      "all(abs((2*x + 2*(x + 3)) - (4*x + 6)) < 1e-9 for x in range(-6, 7))"
     ]
    },
    {
     "id": "y7b",
     "type": "fields",
     "q": "Suma trzech kolejnych liczb naturalnych, z których najmniejsza to n, ma postać ■n + ■. Wpisz brakujące liczby.",
     "fields": [
      {
       "label": "Liczba przy n",
       "ans": 3,
       "show": "3"
      },
      {
       "label": "Liczba bez n",
       "ans": 3,
       "show": "3",
       "why": [
        [
         2,
         "Liczby to n, n + 1 i n + 2, więc 1 + 2 = 3."
        ]
       ]
      }
     ],
     "sol": [
      "Kolejne liczby: n, n + 1, n + 2.",
      "[[n + (n + 1) + (n + 2) = 3n + 3]]."
     ],
     "answer": "3n + 3.",
     "tip": "3n + 3 = 3(n + 1), więc taka suma zawsze dzieli się przez 3.",
     "check": [
      "all(n + (n + 1) + (n + 2) == 3*n + 3 for n in range(50))"
     ]
    }
   ]
  },
  {
   "title": "Wzory",
   "skills": [
    "A8"
   ],
   "intro": "Wzór to przepis: wstawiasz dane i liczysz. Na egzaminie w 2026 roku był wzór na sumę kolejnych liczb od 1 do n i trzeba było z niego skorzystać oraz zapisać go inaczej.",
   "rule": {
    "t": "Zapisz, co oznacza każda litera, wstaw liczby i licz w kolejności działań.",
    "f": [
     "S = ½n(n + 1)",
     "pole trójkąta: P = a · h : 2",
     "droga: s = v · t"
    ],
    "e": "Dane muszą być w pasujących jednostkach: nie mieszaj centymetrów z metrami ani minut z godzinami."
   },
   "example": {
    "q": "Sumę S = 1 + 2 + 3 + … + n można obliczyć ze wzoru S = ½n(n + 1). Oblicz sumę liczb od 1 do 100 i zapisz wzór bez nawiasu. (Egzamin 2026, zadanie 8.)",
    "steps": [
     "Tu n = 100.",
     "S = ½ · 100 · 101 = 50 · 101 = 5 050.",
     "Bez nawiasu: ½n(n + 1) = ½n · n + ½n · 1 = ½n² + ½n."
    ],
    "result": "Suma to 5 050, a wzór bez nawiasu: S = ½n² + ½n.",
    "tip": "Na egzaminie była też odpowiedź S = ½n² + 1. To błąd: ½n mnoży obie liczby w nawiasie, także jedynkę.",
    "check": [
     "sum(range(1, 101)) == 5050",
     "all(n*(n + 1)/2 == n*n/2 + n/2 for n in range(60))"
    ]
   },
   "you": [
    {
     "id": "y8",
     "type": "fields",
     "q": "Korzystając ze wzoru S = ½n(n + 1), oblicz sumę liczb od 1 do 40.",
     "fields": [
      {
       "label": "Suma",
       "ans": 820,
       "show": "820",
       "why": [
        [
         1640,
         "Nie zapomnij o ½: 40 · 41 = 1 640, a połowa to 820."
        ]
       ]
      }
     ],
     "sol": [
      "[[S = ½ · 40 · 41 = 20 · 41 = 820]]."
     ],
     "answer": "820.",
     "tip": "Najpierw weź połowę parzystej liczby: ½ · 40 = 20.",
     "check": [
      "sum(range(1, 41)) == 820"
     ]
    },
    {
     "id": "y8b",
     "type": "pf",
     "q": "Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "Pole trójkąta o podstawie 6 cm i wysokości 5 cm jest równe 15 cm².",
       "ok": "P"
      },
      {
       "t": "Samochód jadący z prędkością 60 km/h w ciągu 30 minut przejedzie 1 800 km.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> [[P = 6 · 5 : 2 = 15]] cm². Prawda.",
      "<b>Zdanie 2.</b> 30 minut to 0,5 h, więc [[s = 60 · 0,5 = 30]] km. Wynik 1 800 powstaje, gdy pomnoży się km/h przez minuty. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "Przy prędkości w km/h czas musi być w godzinach.",
     "check": [
      "6*5/2 == 15",
      "60*0.5 == 30"
     ]
    }
   ]
  }
 ],
 "traps": [
  {
   "name": "„Razy” zapisane jako „o”",
   "bad": "3 razy mniej niż x: x − 3",
   "good": "3 razy mniej niż x: x : 3"
  },
  {
   "name": "Minus przed nawiasem",
   "bad": "−(2x − 5) = −2x − 5",
   "good": "−(2x − 5) = −2x + 5: zmieniasz znaki wszystkich wyrazów"
  },
  {
   "name": "Mnożenie tylko pierwszego wyrazu",
   "bad": "3(x + 4) = 3x + 4",
   "good": "3(x + 4) = 3x + 12"
  }
 ],
 "cheat": {
  "title": "Wyrażenia algebraiczne w 8 zasadach",
  "rules": [
   {
    "t": "Z polskiego na algebrę.",
    "f": [
     "o 5 więcej: x + 5",
     "3 razy więcej: 3x",
     "3 razy mniej: x : 3"
    ],
    "e": "„O” to dodawanie lub odejmowanie, „razy” to mnożenie lub dzielenie."
   },
   {
    "t": "Wartość wyrażenia: liczby ujemne w nawiasach.",
    "f": [
     "x = −3: x² = (−3)² = 9"
    ],
    "e": "−3² = −9, a (−3)² = 9."
   },
   {
    "t": "Wyrazy podobne: dodajesz liczby przed literami.",
    "f": [
     "3x + 5x = 8x",
     "4a² − a² = 3a²"
    ],
    "e": "2x + 3 i 2x + 3x² zostają bez zmian."
   },
   {
    "t": "Minus przed nawiasem zmienia wszystkie znaki.",
    "f": [
     "−(2x − 5) = −2x + 5"
    ],
    "e": "Plus przed nawiasem: nic się nie zmienia."
   },
   {
    "t": "Liczba przed nawiasem mnoży każdy wyraz.",
    "f": [
     "−2(x − 5) = −2x + 10"
    ],
    "e": "x(x + 3) = x² + 3x"
   },
   {
    "t": "Nawias razy nawias: 4 iloczyny.",
    "f": [
     "(a + b)(c + d) = ac + ad + bc + bd"
    ],
    "e": "(x + 3)² = x² + 6x + 9"
   },
   {
    "t": "Wyrażenia w zadaniach.",
    "f": [
     "zniżka 40%: 0,6x",
     "kolejne liczby: n, n + 1, n + 2"
    ],
    "e": "Sprawdź wyrażenie na konkretnej liczbie."
   },
   {
    "t": "Wzory: wstaw i policz.",
    "f": [
     "S = ½n(n + 1)",
     "P = a · h : 2",
     "s = v · t"
    ],
    "e": "Jednostki muszą do siebie pasować."
   }
  ]
 },
 "memo": {
  "title": "Słownik: z polskiego na algebrę",
  "rows": [
   [
    "o 3 więcej",
    "o 3 mniej",
    "3 razy więcej",
    "3 razy mniej",
    "połowa",
    "kwadrat"
   ],
   [
    "x + 3",
    "x − 3",
    "3x",
    "x : 3",
    "x : 2",
    "x²"
   ]
  ],
  "note": "Kolejne liczby: n, n + 1, n + 2. Kolejne parzyste: 2n, 2n + 2, 2n + 4. Kolejne nieparzyste: 2n + 1, 2n + 3, 2n + 5."
 },
 "warmup": {
  "id": "w0",
  "type": "fields",
  "q": "Rozgrzewka: liczby ujemne. Bez kalkulatora.",
  "fields": [
   {
    "label": "(−3) · (−4)",
    "ans": 12,
    "show": "12"
   },
   {
    "label": "−5 + 8",
    "ans": 3,
    "show": "3"
   },
   {
    "label": "(−2)² − 3",
    "ans": 1,
    "show": "1"
   }
  ],
  "sol": [
   "<b>(−3) · (−4)</b> = [[12]]: minus razy minus daje plus.",
   "<b>−5 + 8</b> = [[3]].",
   "<b>(−2)² − 3</b> = 4 − 3 = [[1]]."
  ],
  "answer": "12, 3 i 1.",
  "tip": "W algebrze bez przerwy mnożysz i dodajesz liczby ujemne. Jeśli coś tu nie wyszło, wróć do tematu „Liczby i działania”.",
  "check": [
   "(-3)*(-4) == 12",
   "-5 + 8 == 3",
   "(-2)**2 - 3 == 1"
  ]
 },
 "levels": [
  {
   "n": 1,
   "name": "Podstawy",
   "desc": "Każda umiejętność osobno. Tu masz się poczuć pewnie."
  },
  {
   "n": 2,
   "name": "Trening",
   "desc": "Zadania jak na egzaminie, także tekstowe. Czytaj uważnie, o co pytają."
  },
  {
   "n": 3,
   "name": "Egzamin",
   "desc": "Najtrudniejsze zadania, w tym otwarte z punktacją. Rozwiązuj na kartce, jak na egzaminie, i dopiero potem oceniaj się według punktacji."
  }
 ],
 "practice": [
  {
   "id": "a1",
   "level": 1,
   "skills": [
    "A1"
   ],
   "type": "abcd",
   "q": "Liczbę o 7 mniejszą od potrojonej liczby x zapisujemy jako:",
   "opts": [
    "3(x − 7)",
    "7 − 3x",
    "3x − 7",
    "3x + 7"
   ],
   "ok": 2,
   "why": {
    "A": "Tu najpierw odjęto 7, a potem pomnożono przez 3. W treści najpierw jest potrojenie, potem odjęcie.",
    "B": "7 − 3x to liczba o 3x mniejsza od 7, a nie odwrotnie.",
    "D": "„Mniejsza” oznacza odejmowanie."
   },
   "sol": [
    "Potrojona liczba x: [[3x]].",
    "O 7 mniejsza: [[3x − 7]]."
   ],
   "answer": "C, 3x − 7.",
   "tip": "Czytaj od końca: „od potrojonej liczby x” to 3x, „o 7 mniejszą” to − 7.",
   "check": [
    "3*10 - 7 == 23"
   ],
   "twin": {
    "type": "abcd",
    "q": "Liczbę o 5 większą od połowy liczby a zapisujemy jako:",
    "opts": [
     "a : 2 + 5",
     "(a + 5) : 2",
     "2a + 5",
     "a : 2 − 5"
    ],
    "ok": 0,
    "why": {
     "B": "Tu najpierw dodano 5, a dopiero potem wzięto połowę.",
     "C": "Połowa to dzielenie przez 2, a nie mnożenie.",
     "D": "„Większa” oznacza dodawanie."
    },
    "sol": [
     "Połowa liczby a: [[a : 2]]. O 5 większa: [[a : 2 + 5]]."
    ],
    "answer": "A, a : 2 + 5.",
    "tip": "Sprawdź na liczbie: dla a = 10 połowa to 5, a o 5 większa: 10.",
    "check": [
     "10/2 + 5 == 10"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Kwadrat sumy liczb a i b zapisujemy jako:",
    "opts": [
     "a² + b²",
     "a + b²",
     "2(a + b)",
     "(a + b)²"
    ],
    "ok": 3,
    "why": {
     "A": "To suma kwadratów, a nie kwadrat sumy.",
     "B": "Tu do kwadratu podniesiono tylko b.",
     "C": "To podwojona suma, a nie kwadrat."
    },
    "sol": [
     "Suma: a + b. Jej kwadrat: [[(a + b)²]]."
    ],
    "answer": "D, (a + b)².",
    "tip": "Ostatnie słowo mówi, co robisz na końcu: „kwadrat sumy” to najpierw suma, potem kwadrat.",
    "check": [
     "(2 + 3)**2 != 2**2 + 3**2"
    ]
   }
  },
  {
   "id": "a2",
   "level": 1,
   "skills": [
    "A1"
   ],
   "type": "pair",
   "q": "Pan Adam ma x lat. Jego syn jest o 28 lat młodszy, a córka jest 3 razy młodsza od pana Adama. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "Syn ma lat",
     "opts": {
      "A": "x − 28",
      "B": "28 − x"
     },
     "ok": "A"
    },
    {
     "label": "Córka ma lat",
     "opts": {
      "C": "x − 3",
      "D": "x : 3"
     },
     "ok": "D"
    }
   ],
   "sol": [
    "Syn jest o 28 lat młodszy: [[x − 28]]. Zapis 28 − x dałby liczbę ujemną.",
    "Córka jest 3 razy młodsza: [[x : 3]]."
   ],
   "answer": "A i D.",
   "tip": "„O 28 młodszy” to odejmowanie, „3 razy młodsza” to dzielenie.",
   "check": [
    "45 - 28 == 17",
    "45/3 == 15"
   ],
   "twin": {
    "type": "pair",
    "q": "Kasia ma y naklejek. Tomek ma 4 razy więcej naklejek niż Kasia, a Ola o 15 mniej niż Kasia. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Tomek ma naklejek",
      "opts": {
       "A": "y + 4",
       "B": "4y"
      },
      "ok": "B"
     },
     {
      "label": "Ola ma naklejek",
      "opts": {
       "C": "y − 15",
       "D": "15 − y"
      },
      "ok": "C"
     }
    ],
    "sol": [
     "4 razy więcej: [[4y]].",
     "O 15 mniej: [[y − 15]]."
    ],
    "answer": "B i C.",
    "tip": "„Razy” to mnożenie, „o” to dodawanie lub odejmowanie.",
    "check": [
     "4*20 == 80",
     "20 - 15 == 5"
    ]
   },
   "twin2": {
    "type": "pair",
    "q": "Bilet ulgowy kosztuje b zł, a normalny jest 2 razy droższy. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Bilet normalny kosztuje",
      "opts": {
       "A": "b + 2",
       "B": "2b"
      },
      "ok": "B"
     },
     {
      "label": "3 bilety normalne i 2 ulgowe kosztują",
      "opts": {
       "C": "8b",
       "D": "5b"
      },
      "ok": "C"
     }
    ],
    "sol": [
     "Normalny: [[2b]].",
     "[[3 · 2b + 2 · b = 6b + 2b = 8b]]. 5b to cena 5 biletów ulgowych."
    ],
    "answer": "B i C.",
    "tip": "Najpierw zapisz cenę jednego biletu każdego rodzaju.",
    "check": [
     "all(abs((3*2*x + 2*x) - (8*x)) < 1e-9 for x in range(-6, 7))"
    ]
   }
  },
  {
   "id": "a3",
   "level": 1,
   "skills": [
    "A2"
   ],
   "type": "fields",
   "q": "Oblicz wartość wyrażenia 5 − 2x dla x = −4.",
   "fields": [
    {
     "label": "Wartość",
     "ans": 13,
     "show": "13",
     "why": [
      [
       -3,
       "−2 · (−4) = +8, więc 5 + 8 = 13."
      ],
      [
       -12,
       "Najpierw mnożenie 2 · (−4), dopiero potem odejmowanie."
      ]
     ]
    }
   ],
   "sol": [
    "[[5 − 2 · (−4) = 5 + 8 = 13]]."
   ],
   "answer": "13.",
   "tip": "Odjąć liczbę ujemną to dodać liczbę dodatnią.",
   "check": [
    "5 - 2*(-4) == 13"
   ],
   "twin": {
    "type": "fields",
    "q": "Oblicz wartość wyrażenia 3a² dla a = −2.",
    "fields": [
     {
      "label": "Wartość",
      "ans": 12,
      "show": "12",
      "why": [
       [
        -12,
        "(−2)² = 4, liczba dodatnia. 3 · 4 = 12."
       ],
       [
        36,
        "Do kwadratu podnosisz tylko a, a nie 3a: 3 · 4 = 12."
       ]
      ]
     }
    ],
    "sol": [
     "[[3 · (−2)² = 3 · 4 = 12]]."
    ],
    "answer": "12.",
    "tip": "Najpierw potęga, potem mnożenie.",
    "check": [
     "3*(-2)**2 == 12"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Oblicz wartość wyrażenia x² − x dla x = −5.",
    "fields": [
     {
      "label": "Wartość",
      "ans": 30,
      "show": "30",
      "why": [
       [
        20,
        "−(−5) = +5, więc 25 + 5 = 30."
       ],
       [
        -20,
        "(−5)² = 25, a nie −25."
       ]
      ]
     }
    ],
    "sol": [
     "[[(−5)² − (−5) = 25 + 5 = 30]]."
    ],
    "answer": "30.",
    "tip": "Wstawiaj liczbę ujemną w nawiasie w każde miejsce, gdzie stoi x.",
    "check": [
     "(-5)**2 - (-5) == 30"
    ]
   }
  },
  {
   "id": "a4",
   "level": 1,
   "skills": [
    "A2"
   ],
   "type": "abcd",
   "q": "Wartość wyrażenia 2a − b² dla a = 3 i b = −2 jest równa:",
   "opts": [
    "10",
    "2",
    "5",
    "−1"
   ],
   "ok": 1,
   "why": {
    "A": "b² = (−2)² = 4, więc odejmujemy 4: 6 − 4 = 2.",
    "C": "2a to 2 · 3 = 6, a nie 3² = 9.",
    "D": "2a = 2 · 3 = 6. Nie pomijaj dwójki."
   },
   "sol": [
    "[[2 · 3 − (−2)² = 6 − 4 = 2]]."
   ],
   "answer": "B, 2.",
   "tip": "2a to 2 razy a, a a² to a razy a.",
   "check": [
    "2*3 - (-2)**2 == 2"
   ],
   "twin": {
    "type": "abcd",
    "q": "Wartość wyrażenia a² − 3ab dla a = −1 i b = 2 jest równa:",
    "opts": [
     "−5",
     "7",
     "5",
     "−7"
    ],
    "ok": 1,
    "why": {
     "A": "−3 · (−1) · 2 = +6, a nie −6.",
     "C": "(−1)² = 1, a nie −1.",
     "D": "Tu są dwa błędy naraz: (−1)² = 1 i −3 · (−1) · 2 = +6."
    },
    "sol": [
     "[[(−1)² − 3 · (−1) · 2 = 1 + 6 = 7]]."
    ],
    "answer": "B, 7.",
    "tip": "Policz osobno znak iloczynu: dwa minusy dają plus.",
    "check": [
     "(-1)**2 - 3*(-1)*2 == 7"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Wartość wyrażenia (x − y)² dla x = 2 i y = −3 jest równa:",
    "opts": [
     "1",
     "13",
     "−25",
     "25"
    ],
    "ok": 3,
    "why": {
     "A": "x − y = 2 − (−3) = 5, a nie −1.",
     "B": "(x − y)² to nie x² + y² = 4 + 9.",
     "C": "Kwadrat liczby nigdy nie jest ujemny."
    },
    "sol": [
     "[[x − y = 2 − (−3) = 5]], a [[5² = 25]]."
    ],
    "answer": "D, 25.",
    "tip": "Najpierw nawias, potem potęga.",
    "check": [
     "(2 - (-3))**2 == 25"
    ]
   }
  },
  {
   "id": "a6",
   "level": 1,
   "skills": [
    "A3"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "3a + 2b = 5ab",
     "ok": "F"
    },
    {
     "t": "x² + x² = 2x²",
     "ok": "P"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> 3a i 2b to wyrazy niepodobne (inne litery), nie da się ich dodać. Fałsz.",
    "<b>Zdanie 2.</b> [[1x² + 1x² = 2x²]]. Prawda."
   ],
   "answer": "F, P.",
   "tip": "Dodawać można tylko wyrazy z tą samą częścią literową.",
   "check": [
    "all(abs((x**2 + x**2) - (2*x**2)) < 1e-9 for x in range(-6, 7))"
   ],
   "twin": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "5x − x = 5",
      "ok": "F"
     },
     {
      "t": "2ab + 3ba = 5ab",
      "ok": "P"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[5x − 1x = 4x]]. Fałsz.",
     "<b>Zdanie 2.</b> ba to to samo co ab, bo kolejność mnożenia nie ma znaczenia. [[2ab + 3ab = 5ab]]. Prawda."
    ],
    "answer": "F, P.",
    "tip": "x to 1x, więc 5x − x = 4x.",
    "check": [
     "all(abs((5*x - x) - (4*x)) < 1e-9 for x in range(-6, 7))"
    ]
   },
   "twin2": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "4y² − y² = 3y²",
      "ok": "P"
     },
     {
      "t": "2x + 2 = 4x",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[4y² − 1y² = 3y²]]. Prawda.",
     "<b>Zdanie 2.</b> 2x i 2 to wyrazy niepodobne. Np. dla x = 1: 2 + 2 = 4, ale dla x = 2: 4 + 2 = 6, a 4 · 2 = 8. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Liczby bez litery nie łączą się z wyrazami z literą.",
    "check": [
     "2*2 + 2 != 4*2"
    ]
   }
  },
  {
   "id": "a7",
   "level": 1,
   "skills": [
    "A4"
   ],
   "type": "abcd",
   "q": "Wyrażenie (3x + 5) − (x − 2) jest równe:",
   "opts": [
    "2x + 7",
    "2x + 3",
    "4x + 3",
    "2x − 7"
   ],
   "ok": 0,
   "why": {
    "B": "−(x − 2) = −x + 2. Zmieniasz znak także przy dwójce.",
    "C": "Minus przed nawiasem zmienia +x na −x.",
    "D": "5 + 2 = 7, a nie −7."
   },
   "sol": [
    "[[3x + 5 − x + 2 = 2x + 7]]."
   ],
   "answer": "A, 2x + 7.",
   "tip": "Przy minusie przed nawiasem zmieniasz znaki wszystkich wyrazów.",
   "check": [
    "all(abs(((3*x + 5) - (x - 2)) - (2*x + 7)) < 1e-9 for x in range(-6, 7))"
   ],
   "twin": {
    "type": "abcd",
    "q": "Wyrażenie (4a − 1) − (2a + 3) jest równe:",
    "opts": [
     "2a + 2",
     "6a − 4",
     "2a − 4",
     "2a − 2"
    ],
    "ok": 2,
    "why": {
     "A": "−(2a + 3) = −2a − 3, więc −1 − 3 = −4.",
     "B": "Minus przed nawiasem: 4a − 2a = 2a.",
     "D": "−1 − 3 = −4, a nie −2."
    },
    "sol": [
     "[[4a − 1 − 2a − 3 = 2a − 4]]."
    ],
    "answer": "C, 2a − 4.",
    "tip": "Minus przed nawiasem: +3 zmienia się na −3.",
    "check": [
     "all(abs(((4*x - 1) - (2*x + 3)) - (2*x - 4)) < 1e-9 for x in range(-6, 7))"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Wyrażenie 5 − (2 − y) jest równe:",
    "opts": [
     "3 − y",
     "7 − y",
     "3 + y",
     "7 + y"
    ],
    "ok": 2,
    "why": {
     "A": "−(−y) = +y.",
     "B": "−(2 − y) = −2 + y, więc 5 − 2 = 3.",
     "D": "Dwójka też zmienia znak: 5 − 2 = 3."
    },
    "sol": [
     "[[5 − 2 + y = 3 + y]]."
    ],
    "answer": "C, 3 + y.",
    "tip": "Zmieniasz znaki obu wyrazów w nawiasie.",
    "check": [
     "all(abs((5 - (2 - x)) - (3 + x)) < 1e-9 for x in range(-6, 7))"
    ]
   }
  },
  {
   "id": "a11",
   "level": 1,
   "skills": [
    "A6"
   ],
   "type": "abcd",
   "q": "Wyrażenie (x + 5)(x − 2) jest równe:",
   "opts": [
    "x² + 3x − 10",
    "x² − 10",
    "x² + 7x − 10",
    "x² − 3x − 10"
   ],
   "ok": 0,
   "why": {
    "B": "Brakuje środkowych wyrazów: −2x + 5x = 3x.",
    "C": "Środkowe wyrazy to −2x i 5x. Razem 3x, a nie 7x.",
    "D": "5x − 2x = +3x."
   },
   "sol": [
    "[[x² − 2x + 5x − 10 = x² + 3x − 10]]."
   ],
   "answer": "A, x² + 3x − 10.",
   "tip": "Nawias razy nawias: 4 iloczyny.",
   "check": [
    "all(abs(((x + 5)*(x - 2)) - (x**2 + 3*x - 10)) < 1e-9 for x in range(-6, 7))"
   ],
   "twin": {
    "type": "abcd",
    "q": "Wyrażenie (a − 3)(a − 4) jest równe:",
    "opts": [
     "a² + 12",
     "a² − 7a − 12",
     "a² − a + 12",
     "a² − 7a + 12"
    ],
    "ok": 3,
    "why": {
     "A": "Brakuje środkowych wyrazów: −4a − 3a = −7a.",
     "B": "(−3) · (−4) = +12.",
     "C": "−4a − 3a = −7a."
    },
    "sol": [
     "[[a² − 4a − 3a + 12 = a² − 7a + 12]]."
    ],
    "answer": "D, a² − 7a + 12.",
    "tip": "Minus razy minus daje plus.",
    "check": [
     "all(abs(((x - 3)*(x - 4)) - (x**2 - 7*x + 12)) < 1e-9 for x in range(-6, 7))"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Wyrażenie (2x + 1)(x + 3) jest równe:",
    "opts": [
     "2x² + 3",
     "2x² + 7x + 3",
     "2x² + 4x + 3",
     "3x² + 7x + 3"
    ],
    "ok": 1,
    "why": {
     "A": "Brakuje środkowych wyrazów: 6x + x = 7x.",
     "C": "2x · 3 = 6x, a nie 3x.",
     "D": "2x · x = 2x²."
    },
    "sol": [
     "[[2x² + 6x + x + 3 = 2x² + 7x + 3]]."
    ],
    "answer": "B, 2x² + 7x + 3.",
    "tip": "Policz wszystkie 4 iloczyny, zanim zaczniesz dodawać.",
    "check": [
     "all(abs(((2*x + 1)*(x + 3)) - (2*x**2 + 7*x + 3)) < 1e-9 for x in range(-6, 7))"
    ]
   }
  },
  {
   "id": "b4",
   "level": 2,
   "skills": [
    "A5",
    "A3"
   ],
   "type": "fields",
   "q": "Uprość wyrażenie 3(x − 2) − 2(x − 5). Wynik ma postać ■x + ■.",
   "fields": [
    {
     "label": "Liczba przy x",
     "ans": 1,
     "show": "1",
     "why": [
      [
       5,
       "−2 · x = −2x, więc 3x − 2x = x."
      ]
     ]
    },
    {
     "label": "Liczba bez x",
     "ans": 4,
     "show": "4",
     "why": [
      [
       -16,
       "−2 · (−5) = +10: −6 + 10 = 4."
      ],
      [
       -1,
       "−2 mnoży też −5: +10. −6 + 10 = 4."
      ]
     ]
    }
   ],
   "sol": [
    "[[3x − 6 − 2x + 10 = x + 4]]."
   ],
   "answer": "x + 4.",
   "tip": "Wynik x + 4 oznacza, że liczba przy x to 1.",
   "check": [
    "all(abs((3*(x - 2) - 2*(x - 5)) - (x + 4)) < 1e-9 for x in range(-6, 7))"
   ],
   "twin": {
    "type": "fields",
    "q": "Uprość wyrażenie 4(2a + 1) − 3(a − 2). Wynik ma postać ■a + ■.",
    "fields": [
     {
      "label": "Liczba przy a",
      "ans": 5,
      "show": "5"
     },
     {
      "label": "Liczba bez a",
      "ans": 10,
      "show": "10",
      "why": [
       [
        -2,
        "−3 · (−2) = +6: 4 + 6 = 10."
       ]
      ]
     }
    ],
    "sol": [
     "[[8a + 4 − 3a + 6 = 5a + 10]]."
    ],
    "answer": "5a + 10.",
    "tip": "Liczba przed nawiasem razem ze znakiem.",
    "check": [
     "all(abs((4*(2*x + 1) - 3*(x - 2)) - (5*x + 10)) < 1e-9 for x in range(-6, 7))"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Uprość wyrażenie 2(3y − 4) − (y − 8). Wynik ma postać ■y + ■.",
    "fields": [
     {
      "label": "Liczba przy y",
      "ans": 5,
      "show": "5"
     },
     {
      "label": "Liczba bez y",
      "ans": 0,
      "show": "0",
      "why": [
       [
        -16,
        "−(−8) = +8: −8 + 8 = 0."
       ]
      ]
     }
    ],
    "sol": [
     "[[6y − 8 − y + 8 = 5y]]. Liczba bez y to 0."
    ],
    "answer": "5y (liczba bez y to 0).",
    "tip": "Liczby mogą się zredukować do zera.",
    "check": [
     "all(abs((2*(3*x - 4) - (x - 8)) - (5*x)) < 1e-9 for x in range(-6, 7))"
    ]
   }
  },
  {
   "id": "b5",
   "level": 2,
   "skills": [
    "A6"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "(x + 3)² = x² + 9",
     "ok": "F"
    },
    {
     "t": "(x − 1)(x + 1) = x² − 1",
     "ok": "P"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[(x + 3)(x + 3) = x² + 6x + 9]]. Fałsz.",
    "<b>Zdanie 2.</b> [[x² + x − x − 1 = x² − 1]]. Prawda."
   ],
   "answer": "F, P.",
   "tip": "Sprawdź na liczbie: dla x = 1 (1 + 3)² = 16, a 1 + 9 = 10.",
   "check": [
    "all(abs(((x + 3)**2) - (x**2 + 6*x + 9)) < 1e-9 for x in range(-6, 7))",
    "all(abs(((x - 1)*(x + 1)) - (x**2 - 1)) < 1e-9 for x in range(-6, 7))"
   ],
   "twin": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "(a + 2)(a + 5) = a² + 7a + 10",
      "ok": "P"
     },
     {
      "t": "(a − 4)² = a² − 16",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[a² + 5a + 2a + 10]]. Prawda.",
     "<b>Zdanie 2.</b> [[(a − 4)(a − 4) = a² − 8a + 16]]. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Kwadrat nawiasu to nawias razy nawias.",
    "check": [
     "all(abs(((x + 2)*(x + 5)) - (x**2 + 7*x + 10)) < 1e-9 for x in range(-6, 7))",
     "all(abs(((x - 4)**2) - (x**2 - 8*x + 16)) < 1e-9 for x in range(-6, 7))"
    ]
   },
   "twin2": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "(2x − 1)(2x + 1) = 4x² − 1",
      "ok": "P"
     },
     {
      "t": "(x + 1)² = x² + x + 1",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[4x² + 2x − 2x − 1 = 4x² − 1]]. Prawda.",
     "<b>Zdanie 2.</b> [[(x + 1)(x + 1) = x² + 2x + 1]]. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Środkowe wyrazy są dwa: x i x.",
    "check": [
     "all(abs(((2*x - 1)*(2*x + 1)) - (4*x**2 - 1)) < 1e-9 for x in range(-6, 7))",
     "all(abs(((x + 1)**2) - (x**2 + 2*x + 1)) < 1e-9 for x in range(-6, 7))"
    ]
   }
  },
  {
   "id": "b7",
   "level": 2,
   "skills": [
    "A1"
   ],
   "type": "tn",
   "q": "Ewa ma e lat, a Marek jest o 6 lat starszy od Ewy. Czy za 4 lata Marek będzie miał e + 10 lat? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "T",
   "reasons": {
    "1": "Marek ma teraz e + 6 lat, a za 4 lata będzie miał e + 6 + 4 = e + 10",
    "2": "za 4 lata Ewa będzie miała e + 4 lat",
    "3": "6 + 4 = 10, a 10 jest liczbą parzystą"
   },
   "okReason": "1",
   "sol": [
    "Marek teraz: [[e + 6]]. Za 4 lata: [[e + 6 + 4 = e + 10]]. Tak.",
    "Uzasadnienie 2 jest prawdziwe, ale mówi o Ewie. Uzasadnienie 3 nie ma związku z pytaniem."
   ],
   "answer": "T, uzasadnienie 1.",
   "tip": "Za kilka lat wszyscy są starsi o tyle samo lat.",
   "check": [
    "all(e + 6 + 4 == e + 10 for e in range(30))"
   ],
   "twin": {
    "type": "tn",
    "q": "Kasia ma k zł, a Janek 2 razy więcej. Janek wydał 10 zł. Czy teraz mają razem 3k − 10 zł? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "T",
    "reasons": {
     "1": "Janek ma teraz 2k − 10, a razem k + 2k − 10 = 3k − 10",
     "2": "2 + 1 = 3",
     "3": "Kasia nic nie wydała"
    },
    "okReason": "1",
    "sol": [
     "Janek: [[2k − 10]]. Razem: [[k + 2k − 10 = 3k − 10]]. Tak.",
     "Uzasadnienia 2 i 3 są prawdziwe, ale nie pokazują, skąd bierze się całe wyrażenie."
    ],
    "answer": "T, uzasadnienie 1.",
    "tip": "Uzasadnienie musi wyjaśniać cały wynik, a nie jego kawałek.",
    "check": [
     "all(abs((x + 2*x - 10) - (3*x - 10)) < 1e-9 for x in range(-6, 7))"
    ]
   },
   "twin2": {
    "type": "tn",
    "q": "Liczba a jest parzysta. Czy liczba a + 3 jest nieparzysta? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "T",
    "reasons": {
     "1": "suma liczby parzystej i nieparzystej jest nieparzysta, a 3 jest nieparzyste",
     "2": "a + 3 jest większe od a",
     "3": "3 jest liczbą pierwszą"
    },
    "okReason": "1",
    "sol": [
     "Parzysta + nieparzysta = nieparzysta. Np. 4 + 3 = 7. Tak.",
     "Uzasadnienia 2 i 3 są prawdziwe, ale nie mówią nic o parzystości."
    ],
    "answer": "T, uzasadnienie 1.",
    "tip": "Parzysta liczba to 2n, więc a + 3 = 2n + 3 = 2(n + 1) + 1.",
    "check": [
     "all((a + 3) % 2 == 1 for a in range(0, 100, 2))"
    ]
   }
  },
  {
   "id": "b8",
   "level": 2,
   "skills": [
    "A8"
   ],
   "type": "fields",
   "q": "Pole trapezu obliczamy ze wzoru P = (a + b) · h : 2. Oblicz pole trapezu o podstawach 7 cm i 5 cm oraz wysokości 4 cm.",
   "fields": [
    {
     "label": "Pole (cm²)",
     "ans": 24,
     "show": "24",
     "why": [
      [
       48,
       "Nie zapomnij podzielić przez 2: (7 + 5) · 4 = 48, a połowa to 24."
      ],
      [
       140,
       "Podstawy się dodaje, a nie mnoży: 7 + 5 = 12."
      ]
     ]
    }
   ],
   "sol": [
    "[[P = (7 + 5) · 4 : 2 = 12 · 4 : 2 = 24]] cm²."
   ],
   "answer": "24 cm².",
   "tip": "Najpierw nawias, potem mnożenie i dzielenie.",
   "check": [
    "(7 + 5)*4/2 == 24"
   ],
   "twin": {
    "type": "fields",
    "q": "Drogę obliczamy ze wzoru s = v · t. Samochód jedzie z prędkością 80 km/h przez 2,5 godziny. Jaką drogę pokona?",
    "fields": [
     {
      "label": "Droga (km)",
      "ans": 200,
      "show": "200",
      "why": [
       [
        32,
        "Droga to prędkość RAZY czas, a nie prędkość podzielona przez czas."
       ]
      ]
     }
    ],
    "sol": [
     "[[s = 80 · 2,5 = 200]] km."
    ],
    "answer": "200 km.",
    "tip": "80 · 2,5 = 80 · 2 + 80 · 0,5 = 160 + 40.",
    "check": [
     "80*2.5 == 200"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Sumę S = 1 + 2 + … + n obliczamy ze wzoru S = ½n(n + 1). Oblicz sumę liczb od 1 do 60.",
    "fields": [
     {
      "label": "Suma",
      "ans": 1830,
      "show": "1 830",
      "why": [
       [
        3660,
        "Nie zapomnij o ½: 60 · 61 = 3 660, a połowa to 1 830."
       ]
      ]
     }
    ],
    "sol": [
     "[[S = ½ · 60 · 61 = 30 · 61 = 1 830]]."
    ],
    "answer": "1 830.",
    "tip": "Połowę weź z parzystej liczby.",
    "check": [
     "sum(range(1, 61)) == 1830"
    ]
   }
  },
  {
   "id": "b9",
   "level": 2,
   "skills": [
    "A8",
    "A5"
   ],
   "type": "pair",
   "q": "Sumę S = 1 + 2 + 3 + … + n kolejnych liczb naturalnych można obliczyć ze wzoru S = ½n(n + 1). Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "Suma liczb od 1 do 50 jest równa",
     "opts": {
      "A": "1 275",
      "B": "2 550"
     },
     "ok": "A"
    },
    {
     "label": "Wzór po przekształceniu ma postać",
     "opts": {
      "C": "S = ½n² + ½n",
      "D": "S = ½n² + 1"
     },
     "ok": "C"
    }
   ],
   "sol": [
    "[[S = ½ · 50 · 51 = 25 · 51 = 1 275]]. 2 550 to wynik bez ½.",
    "[[½n(n + 1) = ½n² + ½n]]. W zapisie ½n² + 1 zapomniano pomnożyć jedynki przez ½n."
   ],
   "answer": "A i C.",
   "tip": "Tak wyglądało zadanie 8 na egzaminie w 2026 roku.",
   "check": [
    "sum(range(1, 51)) == 1275",
    "all(n*(n + 1)/2 == n*n/2 + n/2 for n in range(60))"
   ],
   "twin": {
    "type": "pair",
    "q": "Obwód prostokąta o bokach a i b obliczamy ze wzoru O = 2(a + b). Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Dla a = 7 i b = 3 obwód jest równy",
      "opts": {
       "A": "20",
       "B": "17"
      },
      "ok": "A"
     },
     {
      "label": "Wzór bez nawiasu ma postać",
      "opts": {
       "C": "O = 2a + b",
       "D": "O = 2a + 2b"
      },
      "ok": "D"
     }
    ],
    "sol": [
     "[[2 · (7 + 3) = 20]]. 17 wychodzi, gdy pomnoży się przez 2 tylko a.",
     "[[2(a + b) = 2a + 2b]]."
    ],
    "answer": "A i D.",
    "tip": "2 mnoży oba wyrazy w nawiasie.",
    "check": [
     "2*(7 + 3) == 20"
    ]
   },
   "twin2": {
    "type": "pair",
    "q": "Liczbę przekątnych wielokąta o n bokach obliczamy ze wzoru d = ½n(n − 3). Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Sześciokąt ma przekątnych",
      "opts": {
       "A": "9",
       "B": "18"
      },
      "ok": "A"
     },
     {
      "label": "Wzór bez nawiasu ma postać",
      "opts": {
       "C": "d = ½n² − 3",
       "D": "d = ½n² − 1,5n"
      },
      "ok": "D"
     }
    ],
    "sol": [
     "[[d = ½ · 6 · 3 = 9]].",
     "[[½n · n − ½n · 3 = ½n² − 1,5n]]."
    ],
    "answer": "A i D.",
    "tip": "½ · 3 = 1,5.",
    "check": [
     "6*(6 - 3)/2 == 9",
     "all(n*(n - 3)/2 == n*n/2 - 1.5*n for n in range(60))"
    ]
   }
  },
  {
   "id": "b12",
   "level": 2,
   "skills": [
    "A3",
    "A4"
   ],
   "type": "tn",
   "q": "Czy wyrażenie (2x + 3) − 2(x − 1) ma taką samą wartość dla każdej liczby x? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "T",
   "reasons": {
    "1": "po uproszczeniu 2x + 3 − 2x + 2 = 5, a x znika",
    "2": "dla x = 0 wychodzi 5",
    "3": "w wyrażeniu są nawiasy"
   },
   "okReason": "1",
   "sol": [
    "[[2x + 3 − 2x + 2 = 5]]. Dla każdego x wychodzi 5. Tak.",
    "Uzasadnienie 2 to tylko jeden przykład, a pytanie dotyczy każdej liczby."
   ],
   "answer": "T, uzasadnienie 1.",
   "tip": "Przykład niczego nie dowodzi. Dowodzi uproszczenie wyrażenia.",
   "check": [
    "all(abs(((2*x + 3) - 2*(x - 1)) - (5)) < 1e-9 for x in range(-6, 7))"
   ],
   "twin": {
    "type": "tn",
    "q": "Czy wyrażenie 3(a + 2) − (3a − 1) jest równe 7 dla każdej liczby a? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "T",
    "reasons": {
     "1": "po uproszczeniu 3a + 6 − 3a + 1 = 7",
     "2": "dla a = 1 wychodzi 7",
     "3": "3 + 2 + 1 + 1 = 7"
    },
    "okReason": "1",
    "sol": [
     "[[3a + 6 − 3a + 1 = 7]]. Tak."
    ],
    "answer": "T, uzasadnienie 1.",
    "tip": "Sprawdzenie jednej liczby to za mało.",
    "check": [
     "all(abs((3*(x + 2) - (3*x - 1)) - (7)) < 1e-9 for x in range(-6, 7))"
    ]
   },
   "twin2": {
    "type": "tn",
    "q": "Czy wyrażenie x(x + 2) − x² jest równe 2 dla każdej liczby x? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "N",
    "reasons": {
     "1": "po uproszczeniu zostaje 2x, a to zależy od x",
     "2": "dla x = 1 wychodzi 2",
     "3": "x² − x² = 0"
    },
    "okReason": "1",
    "sol": [
     "[[x² + 2x − x² = 2x]]. Np. dla x = 3 wychodzi 6. Nie.",
     "Uzasadnienie 2 pokazuje, że czasem wychodzi 2, ale nie zawsze."
    ],
    "answer": "N, uzasadnienie 1.",
    "tip": "Wystarczy jeden kontrprzykład, żeby „zawsze” było nieprawdą.",
    "check": [
     "all(abs((x*(x + 2) - x**2) - (2*x)) < 1e-9 for x in range(-6, 7))"
    ]
   }
  },
  {
   "id": "c1",
   "level": 3,
   "skills": [
    "A1",
    "A7"
   ],
   "type": "self",
   "q": "Grześ zebrał n kasztanów, a Bartek 3 razy więcej. Potem Bartek dał Grzesiowi 8 kasztanów. Zapisz wyrażeniami, ile kasztanów ma teraz każdy z chłopców i o ile więcej kasztanów ma teraz Bartek niż Grześ.",
   "criteria": [
    {
     "t": "Zapisałeś, ile ma teraz Bartek: 3n − 8.",
     "pts": 1
    },
    {
     "t": "Zapisałeś, ile ma teraz Grześ: n + 8.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś różnicę: (3n − 8) − (n + 8) = 2n − 16.",
     "pts": 1
    }
   ],
   "sol": [
    "Bartek na początku: 3n, po oddaniu: [[3n − 8]].",
    "Grześ: [[n + 8]].",
    "Różnica: [[(3n − 8) − (n + 8) = 3n − 8 − n − 8 = 2n − 16]]."
   ],
   "answer": "Bartek: 3n − 8, Grześ: n + 8, Bartek ma o 2n − 16 więcej.",
   "tip": "Sprawdź na liczbie: dla n = 20 Bartek ma 52, Grześ 28, różnica 24 = 2 · 20 − 16.",
   "check": [
    "all(abs(((3*x - 8) - (x + 8)) - (2*x - 16)) < 1e-9 for x in range(-6, 7))"
   ]
  },
  {
   "id": "c2",
   "level": 3,
   "skills": [
    "A5",
    "A6",
    "A7"
   ],
   "type": "self",
   "q": "Prostokąt ma boki x + 3 i 2x, a kwadrat ma bok x + 1 (x > 0). Uzasadnij, że pole prostokąta jest większe od pola kwadratu o x² + 4x − 1.",
   "criteria": [
    {
     "t": "Zapisałeś pole prostokąta: 2x(x + 3) = 2x² + 6x.",
     "pts": 1
    },
    {
     "t": "Zapisałeś pole kwadratu: (x + 1)² = x² + 2x + 1.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś różnicę 2x² + 6x − (x² + 2x + 1) = x² + 4x − 1 i zapisałeś wniosek.",
     "pts": 1
    }
   ],
   "sol": [
    "Pole prostokąta: [[2x(x + 3) = 2x² + 6x]].",
    "Pole kwadratu: [[(x + 1)(x + 1) = x² + 2x + 1]].",
    "Różnica: [[2x² + 6x − x² − 2x − 1 = x² + 4x − 1]]. Zgadza się z treścią, co kończy uzasadnienie."
   ],
   "answer": "Różnica pól to x² + 4x − 1.",
   "tip": "Odejmując pole kwadratu, weź je w nawias. Minus zmieni wszystkie trzy znaki.",
   "check": [
    "all(abs((2*x*(x + 3) - (x + 1)**2) - (x**2 + 4*x - 1)) < 1e-9 for x in range(-6, 7))"
   ]
  },
  {
   "id": "c3",
   "level": 3,
   "skills": [
    "A2",
    "A4"
   ],
   "type": "pf",
   "q": "Dane są wyrażenia A = 2(x − 1) − x oraz B = x − 2. Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Wyrażenia A i B mają równe wartości dla każdej liczby x.",
     "ok": "P"
    },
    {
     "t": "Dla x = −3 wartość wyrażenia A jest równa 1.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[A = 2x − 2 − x = x − 2 = B]]. Prawda.",
    "<b>Zdanie 2.</b> [[A = −3 − 2 = −5]]. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Najpierw uprość, potem wstaw liczbę. Mniej liczenia i mniej pomyłek.",
   "check": [
    "all(abs((2*(x - 1) - x) - (x - 2)) < 1e-9 for x in range(-6, 7))",
    "2*(-3 - 1) - (-3) == -5"
   ],
   "twin": {
    "type": "pf",
    "q": "Dane są wyrażenia A = 3(x + 1) − 2x oraz B = x + 3. Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Wyrażenia A i B mają równe wartości dla każdej liczby x.",
      "ok": "P"
     },
     {
      "t": "Dla x = −2 wartość wyrażenia A jest równa −1.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[A = 3x + 3 − 2x = x + 3 = B]]. Prawda.",
     "<b>Zdanie 2.</b> [[A = −2 + 3 = 1]]. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Uprość, potem wstaw.",
    "check": [
     "all(abs((3*(x + 1) - 2*x) - (x + 3)) < 1e-9 for x in range(-6, 7))",
     "3*(-2 + 1) - 2*(-2) == 1"
    ]
   },
   "twin2": {
    "type": "pf",
    "q": "Dane są wyrażenia A = x² − x(x − 2) oraz B = 2x. Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Wyrażenia A i B mają równe wartości dla każdej liczby x.",
      "ok": "P"
     },
     {
      "t": "Dla x = −1 wartość wyrażenia A jest równa 2.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[A = x² − x² + 2x = 2x = B]]. Prawda.",
     "<b>Zdanie 2.</b> [[A = 2 · (−1) = −2]]. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "−x · (−2) = +2x.",
    "check": [
     "all(abs((x**2 - x*(x - 2)) - (2*x)) < 1e-9 for x in range(-6, 7))",
     "(-1)**2 - (-1)*(-1 - 2) == -2"
    ]
   }
  },
  {
   "id": "c10",
   "level": 3,
   "skills": [
    "A5",
    "A2",
    "A7"
   ],
   "type": "self",
   "q": "Z prostokąta o bokach 2a i a + 6 wycięto kwadrat o boku a. Zapisz w najprostszej postaci pole pozostałej części i oblicz je dla a = 3.",
   "criteria": [
    {
     "t": "Zapisałeś pole prostokąta: 2a(a + 6) = 2a² + 12a.",
     "pts": 1
    },
    {
     "t": "Odjąłeś pole kwadratu i uprościłeś: 2a² + 12a − a² = a² + 12a.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś pole dla a = 3: 9 + 36 = 45.",
     "pts": 1
    }
   ],
   "sol": [
    "Prostokąt: [[2a(a + 6) = 2a² + 12a]].",
    "Po wycięciu kwadratu: [[2a² + 12a − a² = a² + 12a]].",
    "Dla a = 3: [[9 + 36 = 45]]. Sprawdzenie: prostokąt 6 · 9 = 54, kwadrat 9, 54 − 9 = 45."
   ],
   "answer": "a² + 12a, dla a = 3 pole wynosi 45.",
   "tip": "Sprawdzenie na konkretnej liczbie to dobry nawyk w zadaniach otwartych.",
   "check": [
    "all(abs((2*x*(x + 6) - x**2) - (x**2 + 12*x)) < 1e-9 for x in range(-6, 7))",
    "3**2 + 12*3 == 45",
    "6*9 - 9 == 45"
   ]
  }
 ],
 "test": [
  {
   "id": "t1",
   "skills": [
    "A1"
   ],
   "type": "abcd",
   "q": "Liczbę o 4 mniejszą od kwadratu liczby a zapisujemy jako:",
   "opts": [
    "(a − 4)²",
    "a² − 4",
    "4 − a²",
    "2a − 4"
   ],
   "ok": 1,
   "why": {
    "A": "Tu do kwadratu podniesiono różnicę a − 4.",
    "C": "Odwrócona kolejność odejmowania.",
    "D": "Kwadrat to a · a, a nie 2 · a."
   },
   "sol": [
    "Kwadrat liczby a: [[a²]]. O 4 mniejsza: [[a² − 4]]."
   ],
   "answer": "B, a² − 4.",
   "tip": "Najpierw kwadrat, potem odejmowanie.",
   "check": [
    "5**2 - 4 == 21"
   ],
   "pts": 1
  },
  {
   "id": "t2",
   "skills": [
    "A2"
   ],
   "type": "fields",
   "q": "Oblicz wartość wyrażenia 3x² − 2x dla x = −2.",
   "fields": [
    {
     "label": "Wartość",
     "ans": 16,
     "show": "16"
    }
   ],
   "sol": [
    "[[3 · (−2)² − 2 · (−2) = 12 + 4 = 16]]."
   ],
   "answer": "16.",
   "tip": "Liczby ujemne w nawiasach.",
   "check": [
    "3*(-2)**2 - 2*(-2) == 16"
   ],
   "pts": 1
  },
  {
   "id": "t3",
   "skills": [
    "A3"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "5a − a = 4a",
     "ok": "P"
    },
    {
     "t": "3x + 3 = 6x",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[5a − 1a = 4a]]. Prawda.",
    "<b>Zdanie 2.</b> 3x i 3 to wyrazy niepodobne. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Liczba bez litery nie łączy się z wyrazem z literą.",
   "check": [
    "all(abs((5*x - x) - (4*x)) < 1e-9 for x in range(-6, 7))"
   ],
   "pts": 1
  },
  {
   "id": "t4",
   "skills": [
    "A4"
   ],
   "type": "abcd",
   "q": "Wyrażenie (2x − 7) − (3x − 4) jest równe:",
   "opts": [
    "−x − 11",
    "5x − 3",
    "−x + 3",
    "−x − 3"
   ],
   "ok": 3,
   "why": {
    "A": "−(−4) = +4, więc −7 + 4 = −3.",
    "B": "Minus przed nawiasem: 2x − 3x = −x.",
    "C": "−7 + 4 = −3."
   },
   "sol": [
    "[[2x − 7 − 3x + 4 = −x − 3]]."
   ],
   "answer": "D, −x − 3.",
   "tip": "Minus przed nawiasem zmienia wszystkie znaki.",
   "check": [
    "all(abs(((2*x - 7) - (3*x - 4)) - (-x - 3)) < 1e-9 for x in range(-6, 7))"
   ],
   "pts": 1
  },
  {
   "id": "t5",
   "skills": [
    "A5"
   ],
   "type": "fields",
   "q": "Uprość wyrażenie −3(2a − 5) + 4a. Wynik ma postać ■a + ■.",
   "fields": [
    {
     "label": "Liczba przy a",
     "ans": -2,
     "show": "−2"
    },
    {
     "label": "Liczba bez a",
     "ans": 15,
     "show": "15"
    }
   ],
   "sol": [
    "[[−6a + 15 + 4a = −2a + 15]]."
   ],
   "answer": "−2a + 15.",
   "tip": "−3 · (−5) = +15.",
   "check": [
    "all(abs((-3*(2*x - 5) + 4*x) - (-2*x + 15)) < 1e-9 for x in range(-6, 7))"
   ],
   "pts": 1
  },
  {
   "id": "t6",
   "skills": [
    "A6"
   ],
   "type": "abcd",
   "q": "Wyrażenie (x − 3)(x + 5) jest równe:",
   "opts": [
    "x² + 2x − 15",
    "x² − 15",
    "x² − 2x − 15",
    "x² + 8x − 15"
   ],
   "ok": 0,
   "why": {
    "B": "Brakuje środkowych wyrazów: 5x − 3x = 2x.",
    "C": "5x − 3x = +2x.",
    "D": "5x − 3x = 2x, a nie 8x."
   },
   "sol": [
    "[[x² + 5x − 3x − 15 = x² + 2x − 15]]."
   ],
   "answer": "A, x² + 2x − 15.",
   "tip": "4 iloczyny.",
   "check": [
    "all(abs(((x - 3)*(x + 5)) - (x**2 + 2*x - 15)) < 1e-9 for x in range(-6, 7))"
   ],
   "pts": 1
  },
  {
   "id": "t7",
   "skills": [
    "A7"
   ],
   "type": "abcd",
   "q": "Pani Ewa kupiła 3 kg jabłek po j zł za kilogram i 2 kg gruszek, które były droższe od jabłek o 1,5 zł za kilogram. Ile zapłaciła?",
   "opts": [
    "5j + 1,5",
    "3j + 3",
    "5j + 3",
    "6j + 3"
   ],
   "ok": 2,
   "why": {
    "A": "Dopłata 1,5 zł jest przy każdym z 2 kg: 2 · 1,5 = 3.",
    "B": "Gruszki kosztują j + 1,5 za kg, więc 2 kg to 2j + 3.",
    "D": "3j + 2j = 5j."
   },
   "sol": [
    "Jabłka: [[3j]]. Gruszki: [[2(j + 1,5) = 2j + 3]].",
    "Razem: [[5j + 3]]."
   ],
   "answer": "C, 5j + 3.",
   "tip": "Najpierw cena 1 kg gruszek.",
   "check": [
    "all(abs((3*x + 2*(x + 1.5)) - (5*x + 3)) < 1e-9 for x in range(-6, 7))"
   ],
   "pts": 1
  },
  {
   "id": "t8",
   "skills": [
    "A8"
   ],
   "type": "pair",
   "q": "Pole trójkąta obliczamy ze wzoru P = a · h : 2. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "Trójkąt o podstawie 10 cm i wysokości 7 cm ma pole",
     "opts": {
      "A": "35 cm²",
      "B": "70 cm²"
     },
     "ok": "A"
    },
    {
     "label": "Trójkąt o polu 24 cm² i podstawie 8 cm ma wysokość",
     "opts": {
      "C": "3 cm",
      "D": "6 cm"
     },
     "ok": "D"
    }
   ],
   "sol": [
    "[[10 · 7 : 2 = 35]] cm².",
    "[[24 = 8 · h : 2]], czyli [[8h = 48]] i [[h = 6]] cm."
   ],
   "answer": "A i D.",
   "tip": "Pamiętaj o dzieleniu przez 2.",
   "check": [
    "10*7/2 == 35",
    "8*6/2 == 24"
   ],
   "pts": 1
  },
  {
   "id": "t9",
   "skills": [
    "A7"
   ],
   "type": "tn",
   "q": "Czy suma trzech kolejnych liczb parzystych zawsze dzieli się przez 6? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "T",
   "reasons": {
    "1": "2n + (2n + 2) + (2n + 4) = 6n + 6 = 6(n + 1)",
    "2": "2 + 4 + 6 = 12, a 12 dzieli się przez 6",
    "3": "każda liczba parzysta dzieli się przez 2"
   },
   "okReason": "1",
   "sol": [
    "[[2n + 2n + 2 + 2n + 4 = 6n + 6 = 6(n + 1)]]. Tak.",
    "Uzasadnienie 2 to tylko przykład."
   ],
   "answer": "T, uzasadnienie 1.",
   "tip": "„Zawsze” wymaga zapisu ogólnego.",
   "check": [
    "all(6*n + 6 == 2*n + 2*n + 2 + 2*n + 4 for n in range(50))"
   ],
   "pts": 1
  },
  {
   "id": "t10",
   "skills": [
    "A2",
    "A5"
   ],
   "type": "abcd",
   "q": "Wiadomo, że x − y = 3. Wartość wyrażenia 4x − 4y − 5 jest równa:",
   "opts": [
    "−2",
    "17",
    "7",
    "12"
   ],
   "ok": 2,
   "why": {
    "A": "4x − 4y = 4(x − y) = 12, a nie 3.",
    "B": "12 − 5 = 7, a nie 12 + 5.",
    "D": "Odejmij jeszcze 5."
   },
   "sol": [
    "[[4x − 4y = 4(x − y) = 12]], a [[12 − 5 = 7]]."
   ],
   "answer": "C, 7.",
   "tip": "Wyłącz 4 przed nawias.",
   "check": [
    "all(4*(y + 3) - 4*y - 5 == 7 for y in range(-10, 10))"
   ],
   "pts": 1
  },
  {
   "id": "t11",
   "skills": [
    "A6",
    "A7"
   ],
   "type": "self",
   "q": "Uzasadnij, że pole prostokąta o bokach x + 5 i x − 1 (x > 1) jest o 4x − 5 większe od pola kwadratu o boku x.",
   "criteria": [
    {
     "t": "Zapisałeś pole prostokąta: (x + 5)(x − 1) = x² + 4x − 5.",
     "pts": 1
    },
    {
     "t": "Odjąłeś pole kwadratu x² i zapisałeś wniosek: różnica to 4x − 5.",
     "pts": 1
    }
   ],
   "sol": [
    "[[(x + 5)(x − 1) = x² − x + 5x − 5 = x² + 4x − 5]].",
    "[[x² + 4x − 5 − x² = 4x − 5]]. Pole prostokąta jest o 4x − 5 większe."
   ],
   "answer": "Różnica pól to 4x − 5.",
   "tip": "Uzasadnienie kończ zdaniem-wnioskiem.",
   "check": [
    "all(abs(((x + 5)*(x - 1) - x**2) - (4*x - 5)) < 1e-9 for x in range(-6, 7))"
   ],
   "pts": 2
  },
  {
   "id": "t12",
   "skills": [
    "A1",
    "A3"
   ],
   "type": "self",
   "q": "Ania ma a zł, Basia 3 razy więcej niż Ania, a Celina o 15 zł mniej niż Basia. Zapisz w najprostszej postaci, ile złotych mają razem, i oblicz tę kwotę dla a = 20.",
   "criteria": [
    {
     "t": "Zapisałeś sumę w najprostszej postaci: a + 3a + (3a − 15) = 7a − 15.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś kwotę dla a = 20: 125 zł.",
     "pts": 1
    }
   ],
   "sol": [
    "Basia: [[3a]], Celina: [[3a − 15]].",
    "Razem: [[a + 3a + 3a − 15 = 7a − 15]].",
    "Dla a = 20: [[140 − 15 = 125]] zł."
   ],
   "answer": "7a − 15 zł, dla a = 20 to 125 zł.",
   "tip": "Sprawdzenie: 20 + 60 + 45 = 125.",
   "check": [
    "all(abs((x + 3*x + (3*x - 15)) - (7*x - 15)) < 1e-9 for x in range(-6, 7))",
    "20 + 60 + 45 == 125"
   ],
   "pts": 2
  }
 ],
 "test_minutes": 35,
 "pass": 12,
 "dzial": "Dział 2: Algebra"
};
