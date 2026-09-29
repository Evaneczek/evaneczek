/* Wygenerowane przez zbuduj.py z tresc/proporcjonalnosc.py. Nie edytuj ręcznie. */
window.TEMAT = {
 "slug": "proporcjonalnosc",
 "title": "Proporcjonalność",
 "sign": "∝",
 "lead": "Wielkości wprost proporcjonalne, proporcje, stosunek, podział proporcjonalny i porównywanie ofert. W informatorze CKE jest zadanie za 3 punkty o podziale proporcjonalnym i zadanie o cenie orzechów za dekagramy.",
 "goals": {
  "learn": "6 umiejętności: rozpoznawanie proporcjonalności, liczenie ceny innej ilości, proporcje, stosunek liczb, podział proporcjonalny i porównywanie ofert.",
  "prereq": "Mnożenie i dzielenie ułamków i liczb dziesiętnych (Dział 1). Rozgrzewka na początku to sprawdzi.",
  "goal": "Minimum 12 z 14 punktów w teście na koniec tematu."
 },
 "skills": {
  "K1": "Wielkości wprost proporcjonalne",
  "K2": "Ile kosztuje więcej albo mniej",
  "K3": "Proporcje",
  "K4": "Stosunek liczb",
  "K5": "Podział proporcjonalny",
  "K6": "Porównywanie ofert"
 },
 "lessons": [
  {
   "title": "Wielkości wprost proporcjonalne",
   "skills": [
    "K1"
   ],
   "intro": "Dwie wielkości są wprost proporcjonalne, gdy rosną w tym samym tempie: 2 razy więcej kilogramów to 2 razy wyższa cena, 3 razy dłuższa jazda ze stałą prędkością to 3 razy dłuższa droga.",
   "rule": {
    "t": "y jest wprost proporcjonalne do x, gdy iloraz y : x jest zawsze taki sam. Ten iloraz to współczynnik proporcjonalności.",
    "f": [
     "cena = 6 zł · liczba kilogramów",
     "y : x = 6 dla każdej pary"
    ],
    "e": "Nie wszystko, co rośnie, jest proporcjonalne. Taksówka za 8 zł plus 3 zł za kilometr: za 2 km nie płacisz 2 razy więcej niż za 1 km."
   },
   "visual": {
    "type": "chart",
    "kind": "cols",
    "min": 0,
    "max": 30,
    "step": 5,
    "vals": true,
    "ylabel": "zł",
    "rows": [
     [
      "1 kg",
      6
     ],
     [
      "2 kg",
      12
     ],
     [
      "3 kg",
      18
     ],
     [
      "4 kg",
      24
     ]
    ],
    "alt": "Diagram: 1 kg 6 zł, 2 kg 12 zł, 3 kg 18 zł, 4 kg 24 zł",
    "caption": "Każdy kilogram dokłada tyle samo: 6 zł. Cena : masa = 6"
   },
   "example": {
    "q": "2 bilety kosztują 30 zł, 3 bilety 45 zł, a 5 biletów 75 zł. Czy cena jest wprost proporcjonalna do liczby biletów?",
    "steps": [
     "Liczymy iloraz cena : liczba biletów: 30 : 2 = 15, 45 : 3 = 15, 75 : 5 = 15.",
     "Iloraz za każdym razem jest taki sam, więc wielkości są wprost proporcjonalne.",
     "Współczynnik 15 to cena jednego biletu."
    ],
    "result": "Tak. Jeden bilet kosztuje 15 zł.",
    "tip": "Sprawdzaj iloraz dla każdej pary liczb, a nie tylko dla jednej.",
    "check": [
     "30/2 == 45/3 == 75/5 == 15"
    ]
   },
   "you": [
    {
     "id": "y1",
     "type": "pf",
     "q": "Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "Droga przejechana ze stałą prędkością jest wprost proporcjonalna do czasu jazdy.",
       "ok": "P"
      },
      {
       "t": "Pole kwadratu jest wprost proporcjonalne do długości jego boku.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> s = v · t, a v jest stałe: 2 razy dłużej, to 2 razy dalej. Prawda.",
      "<b>Zdanie 2.</b> Bok 2 cm: pole 4 cm². Bok 4 cm: pole 16 cm². Bok 2 razy dłuższy, a pole 4 razy większe. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "Sprawdź na dwóch przykładach, czy „2 razy więcej” daje „2 razy więcej”.",
     "check": [
      "2**2 == 4",
      "4**2 == 16"
     ]
    },
    {
     "id": "y1b",
     "type": "abcd",
     "q": "W której tabeli y jest wprost proporcjonalne do x?",
     "opts": [
      "x: 1, 2, 5 | y: 4, 8, 20",
      "x: 1, 2, 5 | y: 4, 6, 12",
      "x: 1, 2, 5 | y: 5, 6, 9",
      "x: 1, 2, 5 | y: 4, 2, 0,8"
     ],
     "ok": 0,
     "why": {
      "B": "4 : 1 = 4, a 6 : 2 = 3. Ilorazy są różne.",
      "C": "5 : 1 = 5, a 6 : 2 = 3. Tu y rośnie o stałą liczbę, a nie proporcjonalnie.",
      "D": "Tu y maleje, gdy x rośnie. To nie jest proporcjonalność prosta."
     },
     "sol": [
      "Ilorazy y : x: [[4 : 1 = 8 : 2 = 20 : 5 = 4]]. Zawsze 4."
     ],
     "answer": "A, x: 1, 2, 5 | y: 4, 8, 20.",
     "tip": "Proporcjonalność to stały iloraz, a nie stała różnica.",
     "check": [
      "4/1 == 8/2 == 20/5"
     ]
    }
   ]
  },
  {
   "title": "Ile kosztuje więcej albo mniej",
   "skills": [
    "K2"
   ],
   "intro": "Najczęstsze zadanie z proporcjonalności: znasz cenę pewnej ilości towaru i liczysz cenę innej ilości. W informatorze CKE jest takie zadanie z orzechami pistacjowymi.",
   "rule": {
    "t": "Oblicz cenę jednej jednostki (1 kg, 10 dag, 1 sztuki), a potem pomnóż przez potrzebną ilość.",
    "f": [
     "30 dag za 15,75 zł → 10 dag za 5,25 zł",
     "40 dag: 4 · 5,25 = 21 zł",
     "1 kg = 100 dag: 10 · 5,25 = 52,50 zł"
    ],
    "e": "Uważaj na jednostki: 1 kg = 100 dag = 1 000 g."
   },
   "example": {
    "q": "Za 30 dag orzechów zapłacono 15,75 zł. Ile trzeba zapłacić za 40 dag, a ile za 1 kg? (Informator CKE, zadanie 5.)",
    "steps": [
     "Cena 10 dag: 15,75 : 3 = 5,25 zł.",
     "40 dag to 4 razy po 10 dag: 4 · 5,25 = 21 zł.",
     "1 kg to 100 dag, czyli 10 razy po 10 dag: 10 · 5,25 = 52,50 zł."
    ],
    "result": "40 dag kosztuje 21 zł, a 1 kg kosztuje 52,50 zł.",
    "tip": "Wybieraj wygodną jednostkę. Tu łatwiej liczyć cenę 10 dag niż 1 dag.",
    "check": [
     "F('15.75')/3 == F('5.25')",
     "4*F('5.25') == 21",
     "10*F('5.25') == F('52.5')"
    ]
   },
   "you": [
    {
     "id": "y2",
     "type": "fields",
     "q": "5 zeszytów kosztuje 17,50 zł. Ile kosztuje 8 takich zeszytów?",
     "fields": [
      {
       "label": "Cena (zł)",
       "ans": 28,
       "show": "28",
       "why": [
        [
         3.5,
         "3,50 zł to cena jednego zeszytu. Pomnóż przez 8."
        ]
       ]
      }
     ],
     "sol": [
      "Jeden zeszyt: [[17,50 : 5 = 3,50]] zł.",
      "8 zeszytów: [[8 · 3,50 = 28]] zł."
     ],
     "answer": "28 zł.",
     "tip": "Najpierw cena jednej sztuki.",
     "check": [
      "8*F('17.5')/5 == 28"
     ]
    },
    {
     "id": "y2b",
     "type": "pf",
     "q": "Za 25 dag sera zapłacono 11 zł. Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "Za 1 kg tego sera trzeba zapłacić 44 zł.",
       "ok": "P"
      },
      {
       "t": "Za 40 dag tego sera trzeba zapłacić 16 zł.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> 1 kg = 100 dag, czyli 4 razy po 25 dag: [[4 · 11 = 44]] zł. Prawda.",
      "<b>Zdanie 2.</b> 10 dag kosztuje [[11 : 2,5 = 4,40]] zł, a 40 dag: [[4 · 4,40 = 17,60]] zł. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "To zadanie zbudowane jak zadanie 5 z informatora CKE.",
     "check": [
      "4*11 == 44",
      "40*F(11, 25) == F('17.6')"
     ]
    }
   ]
  },
  {
   "title": "Proporcje",
   "skills": [
    "K3"
   ],
   "intro": "Proporcja to równość dwóch ilorazów, np. 3 : 4 = 6 : 8. Gdy nie znasz jednej liczby, mnożysz „na krzyż”. To szybki sposób na zadania typu „z tylu kilogramów… ile…”.",
   "rule": {
    "t": "Jeśli a/b = c/d, to a · d = b · c.",
    "f": [
     "x/12 = 5/4 → 4x = 60 → x = 15",
     "3 : x = 9 : 12 → 9x = 36 → x = 4"
    ],
    "e": "Zapisz obie wielkości w tej samej kolejności po obu stronach: porcje do porcji, mililitry do mililitrów."
   },
   "example": {
    "q": "Na 4 porcje naleśników potrzeba 250 ml mleka. Ile mleka potrzeba na 10 porcji?",
    "steps": [
     "Proporcja: porcje do mleka, 4 : 250 = 10 : x.",
     "Na krzyż: 4x = 250 · 10 = 2 500.",
     "x = 2 500 : 4 = 625 ml."
    ],
    "result": "Na 10 porcji potrzeba 625 ml mleka.",
    "tip": "Sprawdź sens: porcji jest 2,5 raza więcej, więc mleka też 2,5 raza więcej: 2,5 · 250 = 625.",
    "check": [
     "F(250*10, 4) == 625",
     "F('2.5')*250 == 625"
    ]
   },
   "you": [
    {
     "id": "y3",
     "type": "fields",
     "q": "Rozwiąż proporcję x/15 = 4/6.",
     "fields": [
      {
       "label": "x",
       "ans": 10,
       "show": "10",
       "why": [
        [
         22.5,
         "Na krzyż: 6 · x = 15 · 4, czyli 6x = 60."
        ]
       ]
      }
     ],
     "sol": [
      "[[6x = 15 · 4 = 60]], [[x = 10]]."
     ],
     "answer": "x = 10.",
     "tip": "Sprawdzenie: 10/15 = 2/3 i 4/6 = 2/3.",
     "check": [
      "F(10, 15) == F(4, 6)"
     ]
    },
    {
     "id": "y3b",
     "type": "fields",
     "q": "Z 6 kg jabłek robi się 4 litry soku. Ile litrów soku będzie z 15 kg jabłek?",
     "fields": [
      {
       "label": "Sok (l)",
       "ans": 10,
       "show": "10",
       "why": [
        [
         22.5,
         "Soku jest mniej niż jabłek: 15 · 4 : 6 = 10."
        ]
       ]
      }
     ],
     "sol": [
      "[[6 : 4 = 15 : x]], [[6x = 60]], [[x = 10]] litrów."
     ],
     "answer": "10 litrów.",
     "tip": "Jabłek jest 2,5 raza więcej, więc soku też: 2,5 · 4 = 10.",
     "check": [
      "F(15*4, 6) == 10"
     ]
    }
   ]
  },
  {
   "title": "Stosunek liczb",
   "skills": [
    "K4"
   ],
   "intro": "Stosunek 2 : 3 mówi, jak dzielą się części: na każde 2 części pierwszej wielkości przypadają 3 części drugiej. Stosunek skracasz jak ułamek.",
   "rule": {
    "t": "Stosunek możesz skracać i rozszerzać, dzieląc lub mnożąc obie liczby przez to samo.",
    "f": [
     "12 : 18 = 2 : 3",
     "0,5 : 2 = 5 : 20 = 1 : 4",
     "stosunek 2 : 3 → razem 5 części"
    ],
    "e": "Kolejność ma znaczenie: stosunek chłopców do dziewcząt 2 : 3 to nie to samo co 3 : 2."
   },
   "example": {
    "q": "W klasie jest 12 chłopców i 18 dziewcząt. Zapisz w najprostszej postaci stosunek liczby chłopców do liczby wszystkich uczniów.",
    "steps": [
     "Wszystkich uczniów: 12 + 18 = 30.",
     "Stosunek: 12 : 30.",
     "Dzielimy obie liczby przez 6: 2 : 5."
    ],
    "result": "Stosunek wynosi 2 : 5.",
    "tip": "Czytaj uważnie, czego do czego: chłopców do dziewcząt to 2 : 3, a chłopców do wszystkich to 2 : 5.",
    "check": [
     "F(12, 30) == F(2, 5)",
     "F(12, 18) == F(2, 3)"
    ]
   },
   "you": [
    {
     "id": "y4",
     "type": "abcd",
     "q": "Stosunek 45 : 60 w najprostszej postaci to:",
     "opts": [
      "3 : 4",
      "4 : 3",
      "9 : 12",
      "15 : 20"
     ],
     "ok": 0,
     "why": {
      "B": "Kolejność jest odwrócona.",
      "C": "9 : 12 da się jeszcze skrócić przez 3.",
      "D": "15 : 20 da się jeszcze skrócić przez 5."
     },
     "sol": [
      "Dzielimy obie liczby przez 15: [[45 : 60 = 3 : 4]]."
     ],
     "answer": "A, 3 : 4.",
     "tip": "Najprostsza postać: liczby nie mają już wspólnego dzielnika.",
     "check": [
      "F(45, 60) == F(3, 4)",
      "math.gcd(3, 4) == 1"
     ]
    },
    {
     "id": "y4b",
     "type": "fields",
     "q": "Mąka i cukier w cieście są w stosunku 5 : 2. Ile gramów cukru trzeba na 400 g mąki?",
     "fields": [
      {
       "label": "Cukier (g)",
       "ans": 160,
       "show": "160",
       "why": [
        [
         1000,
         "Cukru jest mniej niż mąki: 400 : 5 · 2 = 160."
        ]
       ]
      }
     ],
     "sol": [
      "Jedna część: [[400 : 5 = 80]] g.",
      "Cukier to 2 części: [[2 · 80 = 160]] g."
     ],
     "answer": "160 g.",
     "tip": "Najpierw jedna część, potem tyle części, ile trzeba.",
     "check": [
      "400/5*2 == 160"
     ]
    }
   ]
  },
  {
   "title": "Podział proporcjonalny",
   "skills": [
    "K5"
   ],
   "intro": "Dzielisz coś tak, żeby części były w danym stosunku, np. pieniądze według wkładu. W informatorze CKE jest zadanie za 3 punkty o trzech sąsiadkach, które płacą za kawę proporcjonalnie do zamówienia.",
   "rule": {
    "t": "1. Dodaj liczby ze stosunku. 2. Podziel całość przez tę sumę: to jedna część. 3. Pomnóż przez liczbę części każdej osoby.",
    "f": [
     "600 zł w stosunku 1 : 2 : 3",
     "1 + 2 + 3 = 6 części, jedna część: 100 zł",
     "100 zł, 200 zł, 300 zł"
    ],
    "e": "Na koniec sprawdź, czy części sumują się do całości."
   },
   "visual": {
    "type": "tape",
    "alt": "Ania 1 część, Bartek 2 części, Celina 3 części po 100 zł",
    "rows": [
     {
      "label": "Ania",
      "parts": [
       {
        "t": "100 zł"
       }
      ],
      "sum": "100 zł"
     },
     {
      "label": "Bartek",
      "parts": [
       {
        "t": "100 zł"
       },
       {
        "t": "100 zł"
       }
      ],
      "sum": "200 zł"
     },
     {
      "label": "Celina",
      "parts": [
       {
        "t": "100 zł"
       },
       {
        "t": "100 zł"
       },
       {
        "t": "100 zł"
       }
      ],
      "sum": "300 zł"
     }
    ],
    "total": "Razem 6 części = 600 zł, jedna część = 100 zł",
    "caption": "Podział 600 zł w stosunku 1 : 2 : 3"
   },
   "example": {
    "q": "Trzy sąsiadki zamówiły kawę: pani Malinowska za 120 zł, a pani Wiśniewska i pani Śliwińska po 90 zł. Dostały rabat i zapłaciły razem 260 zł. Ile powinna zapłacić każda z nich, żeby wpłaty były proporcjonalne do pierwotnej wartości zamówienia? (Informator CKE, zadanie 31, 3 pkt.)",
    "steps": [
     "Stosunek zamówień: 120 : 90 : 90 = 4 : 3 : 3 (dzielimy przez 30).",
     "Razem 4 + 3 + 3 = 10 części. Jedna część: 260 : 10 = 26 zł.",
     "Pani Malinowska: 4 · 26 = 104 zł. Pani Wiśniewska i pani Śliwińska: 3 · 26 = 78 zł.",
     "Sprawdzenie: 104 + 78 + 78 = 260."
    ],
    "result": "Pani Malinowska 104 zł, pani Wiśniewska i pani Śliwińska po 78 zł.",
    "tip": "Drugi sposób: rabat to 260 : 300 = 13/15, więc każda płaci 13/15 swojego zamówienia, np. 120 · 13/15 = 104 zł.",
    "check": [
     "260/10*4 == 104",
     "260/10*3 == 78",
     "104 + 78 + 78 == 260",
     "120*F(13, 15) == 104"
    ]
   },
   "you": [
    {
     "id": "y5",
     "type": "fields",
     "q": "Dwaj bracia podzielili 360 zł w stosunku 4 : 5. Ile dostał każdy z nich?",
     "fields": [
      {
       "label": "Mniejsza część (zł)",
       "ans": 160,
       "show": "160",
       "why": [
        [
         40,
         "40 zł to jedna część. Mniejsza część to 4 części."
        ],
        [
         180,
         "Po równo byłoby 180 zł, ale stosunek to 4 : 5."
        ]
       ]
      },
      {
       "label": "Większa część (zł)",
       "ans": 200,
       "show": "200"
      }
     ],
     "sol": [
      "Części: [[4 + 5 = 9]]. Jedna część: [[360 : 9 = 40]] zł.",
      "[[4 · 40 = 160]] zł i [[5 · 40 = 200]] zł."
     ],
     "answer": "160 zł i 200 zł.",
     "tip": "Sprawdzenie: 160 + 200 = 360.",
     "check": [
      "360/9*4 == 160",
      "360/9*5 == 200"
     ]
    },
    {
     "id": "y5b",
     "type": "abcd",
     "q": "Kasia i Ola kupiły razem los za 10 zł: Kasia dała 6 zł, a Ola 4 zł. Los wygrał 250 zł. Ile powinna dostać Kasia przy podziale proporcjonalnym do wkładu?",
     "opts": [
      "150 zł",
      "125 zł",
      "100 zł",
      "60 zł"
     ],
     "ok": 0,
     "why": {
      "B": "125 zł to podział po równo, a Kasia dała więcej.",
      "C": "100 zł to część Oli.",
      "D": "Kasia dała 6 z 10 zł, więc dostaje 6/10 wygranej, a nie 6/10 ze 100 zł."
     },
     "sol": [
      "Stosunek wkładów: [[6 : 4 = 3 : 2]], razem 5 części. Jedna część: [[250 : 5 = 50]] zł.",
      "Kasia: [[3 · 50 = 150]] zł."
     ],
     "answer": "A, 150 zł.",
     "tip": "Sprawdzenie: 150 + 100 = 250.",
     "check": [
      "250*F(6, 10) == 150"
     ]
    }
   ]
  },
  {
   "title": "Porównywanie ofert",
   "skills": [
    "K6"
   ],
   "intro": "W sklepie i na egzaminie trzeba czasem porównać oferty. Większe opakowanie bywa tańsze, ale nie zawsze. Porównujesz cenę tej samej ilości.",
   "rule": {
    "t": "Przelicz każdą ofertę na cenę tej samej ilości: 1 kg, 1 litra, 100 g albo 1 sztuki.",
    "f": [
     "0,75 l za 4,50 zł → 1 l za 6 zł",
     "2 l za 11 zł → 1 l za 5,50 zł"
    ],
    "e": "Sama cena opakowania nic nie mówi. Liczy się cena za kilogram albo za litr."
   },
   "example": {
    "q": "Sok w butelce 0,75 l kosztuje 4,50 zł, a w kartonie 2 l kosztuje 11 zł. Który zakup jest korzystniejszy?",
    "steps": [
     "Butelka: 4,50 : 0,75 = 6 zł za litr.",
     "Karton: 11 : 2 = 5,50 zł za litr.",
     "5,50 zł to mniej niż 6 zł, więc karton jest korzystniejszy."
    ],
    "result": "Karton: 5,50 zł za litr zamiast 6 zł za litr.",
    "tip": "Dzielenie przez 0,75 jest łatwiejsze, gdy pomnożysz obie liczby przez 100: 450 : 75 = 6.",
    "check": [
     "F('4.5')/F('0.75') == 6",
     "F(11, 2) == F('5.5')"
    ]
   },
   "you": [
    {
     "id": "y6",
     "type": "abcd",
     "q": "Który zakup jest najkorzystniejszy?",
     "opts": [
      "5 kg za 18 zł",
      "2 kg za 7,60 zł",
      "1 kg za 3,90 zł",
      "10 kg za 37 zł"
     ],
     "ok": 0,
     "why": {
      "B": "3,80 zł za kilogram, drożej niż 3,60 zł.",
      "C": "3,90 zł za kilogram to najdrożej.",
      "D": "3,70 zł za kilogram. Największe opakowanie nie zawsze jest najtańsze."
     },
     "sol": [
      "Ceny za 1 kg: [[18 : 5 = 3,60]], [[7,60 : 2 = 3,80]], [[3,90]], [[37 : 10 = 3,70]] zł.",
      "Najtaniej: 5 kg za 18 zł."
     ],
     "answer": "A, 5 kg za 18 zł.",
     "tip": "Przelicz wszystko na 1 kg.",
     "check": [
      "F(18, 5) < F('7.6')/2 < F('3.9')",
      "F(18, 5) < F(37, 10)"
     ]
    },
    {
     "id": "y6b",
     "type": "fields",
     "q": "Samochód spala 6 litrów benzyny na 100 km. Ile litrów spali na trasie 350 km?",
     "fields": [
      {
       "label": "Paliwo (l)",
       "ans": 21,
       "show": "21",
       "why": [
        [
         6,
         "6 litrów to spalanie na 100 km. Trasa jest 3,5 raza dłuższa."
        ],
        [
         2100,
         "6 litrów wystarcza na 100 km, a nie na 1 km."
        ]
       ]
      }
     ],
     "sol": [
      "350 km to [[3,5]] raza po 100 km.",
      "[[3,5 · 6 = 21]] litrów."
     ],
     "answer": "21 litrów.",
     "tip": "Spalanie podaje się zawsze na 100 km.",
     "check": [
      "F('3.5')*6 == 21"
     ]
    }
   ]
  }
 ],
 "traps": [
  {
   "name": "Wszystko, co rośnie, jest proporcjonalne",
   "bad": "taksówka 8 zł + 3 zł za km: za 2 km płacę 2 razy więcej niż za 1 km",
   "good": "11 zł i 14 zł to nie „2 razy więcej”. Proporcjonalność to stały iloraz."
  },
  {
   "name": "Proporcja w złej kolejności",
   "bad": "4 porcje : 250 ml = x ml : 10 porcji",
   "good": "porcje do mleka po obu stronach: 4 : 250 = 10 : x"
  },
  {
   "name": "Całość zamiast jednej części",
   "bad": "400 zł w stosunku 3 : 5: pierwsza część 3 · 400",
   "good": "400 : 8 = 50, potem 3 · 50 = 150 i 5 · 50 = 250"
  }
 ],
 "cheat": {
  "title": "Proporcjonalność w 6 zasadach",
  "rules": [
   {
    "t": "Wprost proporcjonalne: stały iloraz.",
    "f": [
     "y : x = stała",
     "2 razy więcej x → 2 razy więcej y"
    ],
    "e": "Opłata stała + dopłata to NIE jest proporcjonalność."
   },
   {
    "t": "Cena innej ilości: najpierw jedna jednostka.",
    "f": [
     "30 dag za 15,75 zł → 10 dag za 5,25 zł"
    ],
    "e": "1 kg = 100 dag = 1 000 g"
   },
   {
    "t": "Proporcja: mnożenie na krzyż.",
    "f": [
     "a/b = c/d → a · d = b · c"
    ],
    "e": "Te same wielkości w tej samej kolejności."
   },
   {
    "t": "Stosunek skracasz jak ułamek.",
    "f": [
     "45 : 60 = 3 : 4"
    ],
    "e": "Kolejność ma znaczenie."
   },
   {
    "t": "Podział proporcjonalny.",
    "f": [
     "suma części → jedna część → każdy udział"
    ],
    "e": "Sprawdź, czy części sumują się do całości."
   },
   {
    "t": "Porównywanie ofert.",
    "f": [
     "cena : ilość = cena za 1 kg albo 1 l"
    ],
    "e": "Większe opakowanie nie zawsze jest tańsze."
   }
  ]
 },
 "memo": {
  "title": "Jednostki, które warto znać",
  "rows": [
   [
    "1 kg",
    "1 dag",
    "1 t",
    "1 l",
    "1 h",
    "1 km"
   ],
   [
    "100 dag = 1 000 g",
    "10 g",
    "1 000 kg",
    "1 000 ml",
    "60 min",
    "1 000 m"
   ]
  ],
  "note": "Proporcja: a/b = c/d, więc a · d = b · c. Podział w stosunku 2 : 3: całość dzielisz na 5 części."
 },
 "warmup": {
  "id": "w0",
  "type": "fields",
  "q": "Rozgrzewka: dzielenie i ułamki.",
  "fields": [
   {
    "label": "15,75 : 3",
    "ans": 5.25,
    "show": "5,25"
   },
   {
    "label": "360 : 8",
    "ans": 45,
    "show": "45"
   },
   {
    "label": "3/4 z 200",
    "ans": 150,
    "show": "150"
   }
  ],
  "sol": [
   "<b>15,75 : 3</b> = [[5,25]].",
   "<b>360 : 8</b> = [[45]].",
   "<b>3/4 z 200</b>: 200 : 4 = 50, a 3 · 50 = [[150]]."
  ],
  "answer": "5,25, 45 i 150.",
  "tip": "Proporcjonalność to głównie dzielenie i mnożenie. Jeśli tu coś nie wyszło, wróć do tematu „Ułamki”.",
  "check": [
   "F('15.75')/3 == F('5.25')",
   "360/8 == 45",
   "F(3, 4)*200 == 150"
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
    "K1"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Cena jabłek jest wprost proporcjonalna do ich masy, gdy kilogram kosztuje zawsze tyle samo.",
     "ok": "P"
    },
    {
     "t": "Wiek dziecka jest wprost proporcjonalny do jego wzrostu.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> Cena = cena za kg · masa. 2 razy więcej kilogramów, 2 razy wyższa cena. Prawda.",
    "<b>Zdanie 2.</b> Dziecko 2 razy starsze nie jest 2 razy wyższe. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Zadaj pytanie: czy 2 razy więcej jednego daje zawsze 2 razy więcej drugiego?",
   "check": [
    "2*3*5 == 2*(3*5)"
   ],
   "twin": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Obwód kwadratu jest wprost proporcjonalny do długości jego boku.",
      "ok": "P"
     },
     {
      "t": "Pole kwadratu jest wprost proporcjonalne do długości jego boku.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> Obwód = 4 · bok. Stały iloraz 4. Prawda.",
     "<b>Zdanie 2.</b> Bok 3: pole 9, bok 6: pole 36. Bok 2 razy dłuższy, pole 4 razy większe. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Obwód: 4a. Pole: a · a.",
    "check": [
     "36 == 4*9"
    ]
   },
   "twin2": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Liczba kół samochodów osobowych na parkingu jest wprost proporcjonalna do liczby tych samochodów.",
      "ok": "P"
     },
     {
      "t": "Opłata za taksówkę 8 zł plus 3 zł za każdy kilometr jest wprost proporcjonalna do liczby kilometrów.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> Koła = 4 · liczba samochodów. Prawda.",
     "<b>Zdanie 2.</b> 1 km: 11 zł, 2 km: 14 zł. To nie 2 razy więcej. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Opłata stała psuje proporcjonalność.",
    "check": [
     "8 + 3*2 != 2*(8 + 3)"
    ]
   }
  },
  {
   "id": "a2",
   "level": 1,
   "skills": [
    "K1"
   ],
   "type": "fields",
   "q": "y jest wprost proporcjonalne do x. Dla x = 4 wartość y jest równa 10. Oblicz y dla x = 6.",
   "fields": [
    {
     "label": "y",
     "ans": 15,
     "show": "15",
     "why": [
      [
       12,
       "To nie jest dodawanie 2. Iloraz y : x = 2,5, więc y = 2,5 · 6 = 15."
      ]
     ]
    }
   ],
   "sol": [
    "Współczynnik: [[10 : 4 = 2,5]].",
    "[[y = 2,5 · 6 = 15]]."
   ],
   "answer": "15.",
   "tip": "Proporcjonalność to mnożenie przez stałą liczbę.",
   "check": [
    "F(10, 4)*6 == 15"
   ],
   "twin": {
    "type": "fields",
    "q": "y jest wprost proporcjonalne do x. Dla x = 3 wartość y jest równa 12. Oblicz y dla x = 7.",
    "fields": [
     {
      "label": "y",
      "ans": 28,
      "show": "28",
      "why": [
       [
        16,
        "To nie jest dodawanie. Iloraz y : x = 4, więc y = 4 · 7 = 28."
       ]
      ]
     }
    ],
    "sol": [
     "[[12 : 3 = 4]], [[y = 4 · 7 = 28]]."
    ],
    "answer": "28.",
    "tip": "Najpierw współczynnik.",
    "check": [
     "12/3*7 == 28"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "y jest wprost proporcjonalne do x. Dla x = 5 wartość y jest równa 2. Oblicz y dla x = 20.",
    "fields": [
     {
      "label": "y",
      "ans": 8,
      "show": "8",
      "why": [
       [
        17,
        "To nie jest dodawanie 15. x wzrósł 4 razy, więc y też: 4 · 2 = 8."
       ]
      ]
     }
    ],
    "sol": [
     "x wzrósł [[20 : 5 = 4]] razy, więc [[y = 4 · 2 = 8]]."
    ],
    "answer": "8.",
    "tip": "Ile razy więcej x, tyle razy więcej y.",
    "check": [
     "20/5*2 == 8"
    ]
   }
  },
  {
   "id": "a4",
   "level": 1,
   "skills": [
    "K2"
   ],
   "type": "pf",
   "q": "Za 40 dag sera zapłacono 18 zł. Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Za 1 kg tego sera trzeba zapłacić 45 zł.",
     "ok": "P"
    },
    {
     "t": "Za 25 dag tego sera trzeba zapłacić 12 zł.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> 10 dag kosztuje [[18 : 4 = 4,50]] zł, więc 100 dag: [[45]] zł. Prawda.",
    "<b>Zdanie 2.</b> 25 dag: [[2,5 · 4,50 = 11,25]] zł. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Wygodna jednostka: 10 dag.",
   "check": [
    "F(18, 4)*10 == 45",
    "F(18, 4)*F('2.5') == F('11.25')"
   ],
   "twin": {
    "type": "pf",
    "q": "Za 2,5 kg jabłek zapłacono 9 zł. Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "1 kg tych jabłek kosztuje 3,60 zł.",
      "ok": "P"
     },
     {
      "t": "4 kg tych jabłek kosztują 16 zł.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[9 : 2,5 = 3,60]] zł. Prawda.",
     "<b>Zdanie 2.</b> [[4 · 3,60 = 14,40]] zł. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "9 : 2,5 = 90 : 25.",
    "check": [
     "F(9)/F('2.5') == F('3.6')",
     "4*F('3.6') == F('14.4')"
    ]
   },
   "twin2": {
    "type": "pf",
    "q": "6 litrów farby kosztuje 150 zł. Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "1 litr tej farby kosztuje 25 zł.",
      "ok": "P"
     },
     {
      "t": "10 litrów tej farby kosztuje 200 zł.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[150 : 6 = 25]] zł. Prawda.",
     "<b>Zdanie 2.</b> [[10 · 25 = 250]] zł. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Najpierw cena litra.",
    "check": [
     "150/6 == 25",
     "10*25 == 250"
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
   "q": "Rozwiąż proporcję x/8 = 15/12.",
   "fields": [
    {
     "label": "x",
     "ans": 10,
     "show": "10",
     "why": [
      [
       6.4,
       "Na krzyż: 12 · x = 8 · 15, czyli 12x = 120."
      ]
     ]
    }
   ],
   "sol": [
    "[[12x = 8 · 15 = 120]], [[x = 10]]."
   ],
   "answer": "x = 10.",
   "tip": "Sprawdzenie: 10/8 = 5/4 i 15/12 = 5/4.",
   "check": [
    "F(10, 8) == F(15, 12)"
   ],
   "twin": {
    "type": "fields",
    "q": "Rozwiąż proporcję 6/x = 9/12.",
    "fields": [
     {
      "label": "x",
      "ans": 8,
      "show": "8",
      "why": [
       [
        4.5,
        "Na krzyż: 9 · x = 6 · 12 = 72."
       ]
      ]
     }
    ],
    "sol": [
     "[[9x = 72]], [[x = 8]]."
    ],
    "answer": "x = 8.",
    "tip": "Sprawdzenie: 6/8 = 3/4 i 9/12 = 3/4.",
    "check": [
     "F(6, 8) == F(9, 12)"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Rozwiąż proporcję 3 : 5 = x : 20.",
    "fields": [
     {
      "label": "x",
      "ans": 12,
      "show": "12"
     }
    ],
    "sol": [
     "[[5x = 3 · 20 = 60]], [[x = 12]]."
    ],
    "answer": "x = 12.",
    "tip": "20 to 4 razy 5, więc x to 4 razy 3.",
    "check": [
     "F(3, 5) == F(12, 20)"
    ]
   }
  },
  {
   "id": "a10",
   "level": 1,
   "skills": [
    "K5"
   ],
   "type": "abcd",
   "q": "Trzej koledzy złożyli się na grę: Adam dał 20 zł, Bartek 30 zł, a Czarek 50 zł. Po roku sprzedali grę za 80 zł i podzielili pieniądze proporcjonalnie do wkładów. Ile dostał Czarek?",
   "opts": [
    "26,67 zł",
    "50 zł",
    "40 zł",
    "30 zł"
   ],
   "ok": 2,
   "why": {
    "A": "To podział po równo, a Czarek dał najwięcej.",
    "B": "50 zł to jego wkład, a gra poszła za mniej: 80 zł.",
    "D": "30 zł to wkład Bartka, a nie część Czarka."
   },
   "sol": [
    "Czarek dał [[50 ze 100 zł]], czyli połowę.",
    "Dostaje połowę z 80 zł: [[40]] zł."
   ],
   "answer": "C, 40 zł.",
   "tip": "Udział w wygranej = udział we wkładzie.",
   "check": [
    "F(50, 100)*80 == 40"
   ],
   "twin": {
    "type": "abcd",
    "q": "Dwie firmy wynajęły autokar za 1 200 zł. Pierwsza wysłała 30 osób, a druga 18 osób. Ile powinna zapłacić pierwsza firma przy podziale proporcjonalnym do liczby osób?",
    "opts": [
     "750 zł",
     "600 zł",
     "450 zł",
     "720 zł"
    ],
    "ok": 0,
    "why": {
     "B": "600 zł to podział po równo.",
     "C": "450 zł płaci druga firma.",
     "D": "1 200 : 48 = 25 zł na osobę, a 30 · 25 = 750 zł."
    },
    "sol": [
     "Na osobę: [[1 200 : 48 = 25]] zł.",
     "Pierwsza firma: [[30 · 25 = 750]] zł."
    ],
    "answer": "A, 750 zł.",
    "tip": "Sprawdzenie: 750 + 450 = 1 200.",
    "check": [
     "1200/48*30 == 750"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Babcia podzieliła 900 zł między wnuki proporcjonalnie do ich wieku: 8, 10 i 12 lat. Ile dostał najstarszy wnuk?",
    "opts": [
     "300 zł",
     "240 zł",
     "450 zł",
     "360 zł"
    ],
    "ok": 3,
    "why": {
     "A": "300 zł to podział po równo.",
     "B": "240 zł dostał najmłodszy.",
     "C": "900 : 30 = 30 zł na rok życia, a 12 · 30 = 360 zł."
    },
    "sol": [
     "Suma lat: [[30]]. Na rok: [[900 : 30 = 30]] zł.",
     "Najstarszy: [[12 · 30 = 360]] zł."
    ],
    "answer": "D, 360 zł.",
    "tip": "Stosunek 8 : 10 : 12 = 4 : 5 : 6.",
    "check": [
     "900/30*12 == 360"
    ]
   }
  },
  {
   "id": "a11",
   "level": 1,
   "skills": [
    "K6"
   ],
   "type": "abcd",
   "q": "Który zakup jest najkorzystniejszy?",
   "opts": [
    "0,5 l za 2,20 zł",
    "1,5 l za 6 zł",
    "1 l za 4,20 zł",
    "2 l za 8,60 zł"
   ],
   "ok": 1,
   "why": {
    "A": "4,40 zł za litr.",
    "C": "4,20 zł za litr.",
    "D": "4,30 zł za litr."
   },
   "sol": [
    "Za litr: [[6 : 1,5 = 4]], [[2,20 : 0,5 = 4,40]], [[4,20]], [[8,60 : 2 = 4,30]] zł."
   ],
   "answer": "B, 1,5 l za 6 zł.",
   "tip": "Przelicz na 1 litr.",
   "check": [
    "6/F('1.5') == 4",
    "F('2.2')/F('0.5') == F('4.4')",
    "F('8.6')/2 == F('4.3')"
   ],
   "twin": {
    "type": "abcd",
    "q": "Który zakup jest najkorzystniejszy?",
    "opts": [
     "250 g za 6,50 zł",
     "400 g za 10 zł",
     "1 kg za 26 zł",
     "500 g za 12,80 zł"
    ],
    "ok": 1,
    "why": {
     "A": "26 zł za kilogram.",
     "C": "26 zł za kilogram.",
     "D": "25,60 zł za kilogram."
    },
    "sol": [
     "Za 1 kg: [[10 · 2,5 = 25]], [[6,50 · 4 = 26]], [[26]], [[12,80 · 2 = 25,60]] zł."
    ],
    "answer": "B, 400 g za 10 zł.",
    "tip": "1 kg = 1 000 g.",
    "check": [
     "F(10*1000, 400) == 25",
     "F('6.5')*4 == 26",
     "F('12.8')*2 == F('25.6')"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Który zakup jest najkorzystniejszy?",
    "opts": [
     "10 jaj za 8 zł",
     "6 jaj za 4,80 zł",
     "30 jaj za 24 zł",
     "12 jaj za 9 zł"
    ],
    "ok": 3,
    "why": {
     "A": "0,80 zł za jajko.",
     "B": "0,80 zł za jajko.",
     "C": "0,80 zł za jajko. Duże opakowanie nie zawsze jest tańsze."
    },
    "sol": [
     "Za jajko: [[9 : 12 = 0,75]] zł, w pozostałych ofertach [[0,80]] zł."
    ],
    "answer": "D, 12 jaj za 9 zł.",
    "tip": "Porównuj cenę jednej sztuki.",
    "check": [
     "F(9, 12) == F('0.75')",
     "F(8, 10) == F('4.8')/6 == F(24, 30)"
    ]
   }
  },
  {
   "id": "b3",
   "level": 2,
   "skills": [
    "K1"
   ],
   "type": "abcd",
   "q": "W tabeli y jest wprost proporcjonalne do x. Jaka jest liczba a?",
   "data": {
    "head": [
     "x",
     "2",
     "5",
     "8"
    ],
    "rows": [
     [
      "y",
      "7",
      "a",
      "28"
     ]
    ]
   },
   "opts": [
    "17,5",
    "10",
    "22",
    "20"
   ],
   "ok": 0,
   "why": {
    "B": "Iloraz y : x ma być stały: 7 : 2 = 3,5, a 10 : 5 = 2.",
    "C": "22 : 5 = 4,4, a 7 : 2 = 3,5.",
    "D": "20 : 5 = 4, a 7 : 2 = 3,5."
   },
   "sol": [
    "Współczynnik: [[7 : 2 = 28 : 8 = 3,5]].",
    "[[a = 3,5 · 5 = 17,5]]."
   ],
   "answer": "A, 17,5.",
   "tip": "Proporcjonalność: y = współczynnik · x.",
   "check": [
    "F(7, 2) == F(28, 8)",
    "F(7, 2)*5 == F('17.5')"
   ],
   "twin": {
    "type": "abcd",
    "q": "W tabeli y jest wprost proporcjonalne do x. Jaka jest liczba a?",
    "data": {
     "head": [
      "x",
      "3",
      "6",
      "9"
     ],
     "rows": [
      [
       "y",
       "5",
       "a",
       "15"
      ]
     ]
    },
    "opts": [
     "8",
     "12",
     "10",
     "7,5"
    ],
    "ok": 2,
    "why": {
     "A": "8 : 6 ≠ 5 : 3. Tu dodano 3, a trzeba mnożyć.",
     "B": "12 : 6 = 2, a 5 : 3 ≈ 1,67.",
     "D": "7,5 : 6 = 1,25, a 5 : 3 ≈ 1,67."
    },
    "sol": [
     "x wzrósł 2 razy (z 3 na 6), więc y też: [[a = 2 · 5 = 10]]."
    ],
    "answer": "C, 10.",
    "tip": "Porównuj „ile razy”, a nie „o ile”.",
    "check": [
     "F(5, 3) == F(10, 6) == F(15, 9)"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "W tabeli y jest wprost proporcjonalne do x. Jaka jest liczba a?",
    "data": {
     "head": [
      "x",
      "4",
      "10",
      "a"
     ],
     "rows": [
      [
       "y",
       "6",
       "15",
       "21"
      ]
     ]
    },
    "opts": [
     "16",
     "31,5",
     "14",
     "12"
    ],
    "ok": 2,
    "why": {
     "A": "21 : 16 ≠ 1,5.",
     "B": "31,5 to 21 · 1,5. Trzeba dzielić: 21 : 1,5.",
     "D": "21 : 12 = 1,75, a 6 : 4 = 1,5."
    },
    "sol": [
     "Współczynnik: [[6 : 4 = 1,5]]. [[a = 21 : 1,5 = 14]]."
    ],
    "answer": "C, 14.",
    "tip": "Gdy znasz y, a szukasz x, dzielisz przez współczynnik.",
    "check": [
     "F(6, 4) == F(15, 10) == F(21, 14)"
    ]
   }
  },
  {
   "id": "b4",
   "level": 2,
   "skills": [
    "K3",
    "K2"
   ],
   "type": "fields",
   "q": "Ze 120 kg ziarna otrzymuje się 90 kg mąki. Ile kilogramów ziarna trzeba zemleć, żeby otrzymać 150 kg mąki?",
   "fields": [
    {
     "label": "Ziarno (kg)",
     "ans": 200,
     "show": "200",
     "why": [
      [
       112.5,
       "Ziarna potrzeba więcej niż mąki: 150 · 120 : 90 = 200."
      ]
     ]
    }
   ],
   "sol": [
    "[[120 : 90 = x : 150]], [[90x = 18 000]], [[x = 200]] kg."
   ],
   "answer": "200 kg.",
   "tip": "Sprawdź sens: ziarna zawsze jest więcej niż mąki.",
   "check": [
    "F(150*120, 90) == 200"
   ],
   "twin": {
    "type": "fields",
    "q": "Z 8 kg truskawek otrzymuje się 5 kg dżemu. Ile kilogramów truskawek potrzeba na 12 kg dżemu?",
    "fields": [
     {
      "label": "Truskawki (kg)",
      "ans": 19.2,
      "show": "19,2",
      "why": [
       [
        7.5,
        "Truskawek potrzeba więcej niż dżemu: 12 · 8 : 5 = 19,2."
       ]
      ]
     }
    ],
    "sol": [
     "[[8 : 5 = x : 12]], [[5x = 96]], [[x = 19,2]] kg."
    ],
    "answer": "19,2 kg.",
    "tip": "Proporcja: truskawki do dżemu.",
    "check": [
     "F(12*8, 5) == F('19.2')"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Na mapie 3 cm odpowiadają 15 km. Ile centymetrów na tej mapie odpowiada 40 km?",
    "fields": [
     {
      "label": "Na mapie (cm)",
      "ans": 8,
      "show": "8",
      "why": [
       [
        200,
        "Na mapie jest mniej: 40 · 3 : 15 = 8."
       ]
      ]
     }
    ],
    "sol": [
     "1 cm to [[15 : 3 = 5]] km. 40 km to [[40 : 5 = 8]] cm."
    ],
    "answer": "8 cm.",
    "tip": "Najpierw: ile kilometrów to 1 cm.",
    "check": [
     "40/(15/3) == 8"
    ]
   }
  },
  {
   "id": "b5",
   "level": 2,
   "skills": [
    "K4",
    "K5"
   ],
   "type": "pair",
   "q": "W klasie jest 30 uczniów, a liczba chłopców i dziewcząt jest w stosunku 2 : 3. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "Chłopców w klasie jest",
     "opts": {
      "A": "12",
      "B": "20"
     },
     "ok": "A"
    },
    {
     "label": "Stosunek liczby dziewcząt do liczby wszystkich uczniów to",
     "opts": {
      "C": "3 : 5",
      "D": "3 : 2"
     },
     "ok": "C"
    }
   ],
   "sol": [
    "5 części, jedna: [[30 : 5 = 6]]. Chłopcy: [[2 · 6 = 12]]. 20 to 2/3 z 30, a nie 2/5.",
    "Dziewczęta: [[18]], wszyscy: [[30]]. [[18 : 30 = 3 : 5]]. 3 : 2 to dziewczęta do chłopców."
   ],
   "answer": "A i C.",
   "tip": "Czytaj uważnie: czego do czego.",
   "check": [
    "30/5*2 == 12",
    "F(18, 30) == F(3, 5)"
   ],
   "twin": {
    "type": "pair",
    "q": "Stop ma masę 50 kg, a miedź i cynk są w nim w stosunku 7 : 3. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Miedzi w stopie jest",
      "opts": {
       "A": "35 kg",
       "B": "21 kg"
      },
      "ok": "A"
     },
     {
      "label": "Stosunek masy cynku do masy całego stopu to",
      "opts": {
       "C": "3 : 7",
       "D": "3 : 10"
      },
      "ok": "D"
     }
    ],
    "sol": [
     "10 części, jedna: [[5]] kg. Miedź: [[35]] kg.",
     "Cynk: 3 części z 10: [[3 : 10]]. 3 : 7 to cynk do miedzi."
    ],
    "answer": "A i D.",
    "tip": "Cała mieszanka to suma części.",
    "check": [
     "50/10*7 == 35"
    ]
   },
   "twin2": {
    "type": "pair",
    "q": "Obwód prostokąta wynosi 36 cm, a jego boki są w stosunku 1 : 2. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Krótszy bok ma",
      "opts": {
       "A": "6 cm",
       "B": "12 cm"
      },
      "ok": "A"
     },
     {
      "label": "Pole prostokąta jest równe",
      "opts": {
       "C": "72 cm²",
       "D": "36 cm²"
      },
      "ok": "C"
     }
    ],
    "sol": [
     "Połowa obwodu: [[18]] cm, to 3 części, jedna: [[6]] cm. Boki 6 cm i 12 cm.",
     "Pole: [[6 · 12 = 72]] cm²."
    ],
    "answer": "A i C.",
    "tip": "Dzielisz połowę obwodu, bo to suma dwóch sąsiednich boków.",
    "check": [
     "2*(6 + 12) == 36",
     "6*12 == 72"
    ]
   }
  },
  {
   "id": "b6",
   "level": 2,
   "skills": [
    "K6"
   ],
   "type": "tn",
   "q": "Paczka 400 g herbaty kosztuje 20 zł, a paczka 250 g kosztuje 13 zł. Czy większa paczka jest tańsza w przeliczeniu na 100 g? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "T",
   "reasons": {
    "1": "100 g z dużej paczki kosztuje 5 zł, a z małej 5,20 zł",
    "2": "w dużej paczce jest więcej herbaty",
    "3": "20 zł to więcej niż 13 zł"
   },
   "okReason": "1",
   "sol": [
    "Duża: [[20 : 4 = 5]] zł za 100 g. Mała: [[13 : 2,5 = 5,20]] zł za 100 g. Tak.",
    "Uzasadnienia 2 i 3 są prawdziwe, ale nie porównują ceny tej samej ilości."
   ],
   "answer": "T, uzasadnienie 1.",
   "tip": "Porównanie wymaga ceny tej samej ilości.",
   "check": [
    "20/4 == 5",
    "F(13)/F('2.5') == F('5.2')"
   ],
   "twin": {
    "type": "tn",
    "q": "Butelka 1,5 l wody kosztuje 2,40 zł, a zgrzewka 6 butelek po 0,5 l kosztuje 4,50 zł. Czy litr wody ze zgrzewki jest tańszy? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "T",
    "reasons": {
     "1": "litr ze zgrzewki kosztuje 1,50 zł, a z dużej butelki 1,60 zł",
     "2": "w zgrzewce jest 6 butelek",
     "3": "4,50 zł to więcej niż 2,40 zł"
    },
    "okReason": "1",
    "sol": [
     "Zgrzewka: 3 l za 4,50 zł, czyli [[1,50]] zł za litr. Butelka: [[2,40 : 1,5 = 1,60]] zł za litr. Tak."
    ],
    "answer": "T, uzasadnienie 1.",
    "tip": "6 · 0,5 l = 3 l.",
    "check": [
     "F('4.5')/3 == F('1.5')",
     "F('2.4')/F('1.5') == F('1.6')"
    ]
   },
   "twin2": {
    "type": "tn",
    "q": "Opakowanie 1 kg proszku kosztuje 24 zł, a opakowanie 3 kg kosztuje 75 zł. Czy duże opakowanie jest tańsze w przeliczeniu na kilogram? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "N",
    "reasons": {
     "1": "kilogram z dużego opakowania kosztuje 25 zł, a z małego 24 zł",
     "2": "duże opakowanie zawsze jest tańsze",
     "3": "75 zł to więcej niż 24 zł"
    },
    "okReason": "1",
    "sol": [
     "[[75 : 3 = 25]] zł za kg, a małe [[24]] zł za kg. Nie."
    ],
    "answer": "N, uzasadnienie 1.",
    "tip": "Duże opakowanie nie zawsze jest tańsze.",
    "check": [
     "75/3 == 25"
    ]
   }
  },
  {
   "id": "b9",
   "level": 2,
   "skills": [
    "K1"
   ],
   "type": "pf",
   "q": "W tabeli podano masę jabłek i ich cenę. Oceń prawdziwość zdań.",
   "data": {
    "head": [
     "Masa (kg)",
     "1",
     "2",
     "3"
    ],
    "rows": [
     [
      "Cena (zł)",
      "4",
      "8",
      "12"
     ]
    ]
   },
   "items": [
    {
     "t": "Cena jest wprost proporcjonalna do masy jabłek.",
     "ok": "P"
    },
    {
     "t": "Za 7 kg tych jabłek zapłacimy 32 zł.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[4 : 1 = 8 : 2 = 12 : 3 = 4]]. Stały iloraz. Prawda.",
    "<b>Zdanie 2.</b> [[7 · 4 = 28]] zł. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Współczynnik to cena 1 kg.",
   "check": [
    "4/1 == 8/2 == 12/3",
    "7*4 == 28"
   ],
   "twin": {
    "type": "pf",
    "q": "W tabeli podano liczbę osób i koszt biletów. Oceń prawdziwość zdań.",
    "data": {
     "head": [
      "Liczba osób",
      "2",
      "4",
      "6"
     ],
     "rows": [
      [
       "Koszt (zł)",
       "36",
       "72",
       "108"
      ]
     ]
    },
    "items": [
     {
      "t": "Koszt jest wprost proporcjonalny do liczby osób.",
      "ok": "P"
     },
     {
      "t": "Bilety dla 10 osób kosztują 170 zł.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> Iloraz zawsze [[18]]. Prawda.",
     "<b>Zdanie 2.</b> [[10 · 18 = 180]] zł. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Jeden bilet: 18 zł.",
    "check": [
     "36/2 == 72/4 == 108/6 == 18"
    ]
   },
   "twin2": {
    "type": "pf",
    "q": "W tabeli podano czas postoju i opłatę za parking. Oceń prawdziwość zdań.",
    "data": {
     "head": [
      "Czas (h)",
      "1",
      "2",
      "3"
     ],
     "rows": [
      [
       "Opłata (zł)",
       "5",
       "8",
       "11"
      ]
     ]
    },
    "items": [
     {
      "t": "Opłata jest wprost proporcjonalna do czasu postoju.",
      "ok": "F"
     },
     {
      "t": "Za 4 godziny postoju zapłacimy 14 zł.",
      "ok": "P"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[5 : 1 = 5]], a [[8 : 2 = 4]]. Iloraz nie jest stały. Fałsz.",
     "<b>Zdanie 2.</b> Każda kolejna godzina kosztuje 3 zł: [[11 + 3 = 14]] zł. Prawda."
    ],
    "answer": "F, P.",
    "tip": "Stała różnica to nie proporcjonalność.",
    "check": [
     "5/1 != 8/2",
     "11 + 3 == 14"
    ]
   }
  },
  {
   "id": "b12",
   "level": 2,
   "skills": [
    "K5"
   ],
   "type": "tn",
   "q": "Mama podzieliła 90 cukierków między Olę i Kubę w stosunku 2 : 3. Czy Kuba dostał 54 cukierki? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "T",
   "reasons": {
    "1": "90 : 5 = 18, a Kuba dostał 3 części, czyli 3 · 18 = 54",
    "2": "54 dzieli się przez 3",
    "3": "Kuba dostał więcej niż Ola"
   },
   "okReason": "1",
   "sol": [
    "[[90 : 5 = 18]], Kuba: [[3 · 18 = 54]]. Tak.",
    "Uzasadnienia 2 i 3 są prawdziwe, ale nie pokazują, że to dokładnie 54."
   ],
   "answer": "T, uzasadnienie 1.",
   "tip": "Jedna część, potem liczba części.",
   "check": [
    "90/5*3 == 54"
   ],
   "twin": {
    "type": "tn",
    "q": "Kwotę 360 zł podzielono w stosunku 4 : 5. Czy mniejsza część wynosi 150 zł? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "N",
    "reasons": {
     "1": "360 : 9 = 40, a mniejsza część to 4 · 40 = 160 zł",
     "2": "150 zł to mniej niż połowa z 360 zł",
     "3": "4 to mniej niż 5"
    },
    "okReason": "1",
    "sol": [
     "[[360 : 9 = 40]], [[4 · 40 = 160]] zł. Nie."
    ],
    "answer": "N, uzasadnienie 1.",
    "tip": "Policz dokładnie.",
    "check": [
     "360/9*4 == 160"
    ]
   },
   "twin2": {
    "type": "tn",
    "q": "Sznurek o długości 120 m pocięto na trzy kawałki w stosunku 1 : 2 : 3. Czy najdłuższy kawałek ma 60 m? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "T",
    "reasons": {
     "1": "120 : 6 = 20, a najdłuższy kawałek to 3 części, czyli 60 m",
     "2": "3 to największa liczba w stosunku",
     "3": "60 jest liczbą parzystą"
    },
    "okReason": "1",
    "sol": [
     "[[120 : 6 = 20]], [[3 · 20 = 60]] m. Tak."
    ],
    "answer": "T, uzasadnienie 1.",
    "tip": "1 + 2 + 3 = 6 części.",
    "check": [
     "120/6*3 == 60"
    ]
   }
  },
  {
   "id": "c2",
   "level": 3,
   "skills": [
    "K2",
    "K6"
   ],
   "type": "self",
   "q": "Pan Tomek chce pomalować 45 m² ściany jedną warstwą farby. Litr farby wystarcza na 8 m². Farbę sprzedaje się w puszkach po 2,5 l, a jedna puszka kosztuje 39 zł. Ile zapłaci za farbę? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono, ile litrów farby potrzeba: 45 : 8 = 5,625 l.",
     "pts": 1
    },
    {
     "t": "Obliczono liczbę puszek, zaokrąglając w górę: 5,625 : 2,5 = 2,25, więc 3 puszki.",
     "pts": 1
    },
    {
     "t": "Obliczono koszt: 3 · 39 = 117 zł.",
     "pts": 1
    }
   ],
   "sol": [
    "Farba: [[45 : 8 = 5,625]] l.",
    "Puszki: [[5,625 : 2,5 = 2,25]]. Dwie puszki (5 l) to za mało, więc [[3]] puszki.",
    "Koszt: [[3 · 39 = 117]] zł."
   ],
   "answer": "117 zł.",
   "tip": "Puszek nie kupuje się w kawałkach. Podobny pomysł (opakowania nasion) był w zadaniu 19 na egzaminie w 2026 roku.",
   "check": [
    "F(45, 8) == F('5.625')",
    "F('5.625')/F('2.5') == F('2.25')",
    "3*39 == 117"
   ]
  },
  {
   "id": "c6",
   "level": 3,
   "skills": [
    "K6",
    "K2"
   ],
   "type": "pair",
   "q": "W markecie kawa kosztuje 64 zł za kilogram. W kawiarni paczka 250 g kosztuje 17 zł, a w promocji trzy paczki kupuje się w cenie dwóch. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "250 g kawy w markecie kosztuje",
     "opts": {
      "A": "16 zł",
      "B": "25,60 zł"
     },
     "ok": "A"
    },
    {
     "label": "750 g kawy taniej kupimy",
     "opts": {
      "C": "w markecie",
      "D": "w kawiarni"
     },
     "ok": "D"
    }
   ],
   "sol": [
    "250 g to ćwierć kilograma: [[64 : 4 = 16]] zł.",
    "750 g: w markecie [[3 · 16 = 48]] zł, w kawiarni 3 paczki w cenie dwóch: [[2 · 17 = 34]] zł. Taniej w kawiarni."
   ],
   "answer": "A i D.",
   "tip": "Promocja zmienia cenę za kilogram. Zawsze licz, ile zapłacisz naprawdę.",
   "check": [
    "64/4 == 16",
    "3*16 == 48",
    "2*17 == 34"
   ],
   "twin": {
    "type": "pair",
    "q": "W sklepie X sok kosztuje 5 zł za litr. W sklepie Y butelka 1,5 l tego samego soku kosztuje 6,90 zł. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "3 litry soku w sklepie X kosztują",
      "opts": {
       "A": "15 zł",
       "B": "10 zł"
      },
      "ok": "A"
     },
     {
      "label": "Litr soku jest tańszy",
      "opts": {
       "C": "w sklepie X",
       "D": "w sklepie Y"
      },
      "ok": "D"
     }
    ],
    "sol": [
     "[[3 · 5 = 15]] zł.",
     "W Y: [[6,90 : 1,5 = 4,60]] zł za litr, taniej niż 5 zł."
    ],
    "answer": "A i D.",
    "tip": "Porównuj cenę litra.",
    "check": [
     "F('6.9')/F('1.5') == F('4.6')"
    ]
   },
   "twin2": {
    "type": "pair",
    "q": "Na targu mandarynki kosztują 7,20 zł za kilogram. W markecie siatka 1,5 kg mandarynek kosztuje 9,90 zł. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "1,5 kg mandarynek na targu kosztuje",
      "opts": {
       "A": "10,80 zł",
       "B": "9,90 zł"
      },
      "ok": "A"
     },
     {
      "label": "Kilogram mandarynek jest tańszy",
      "opts": {
       "C": "na targu",
       "D": "w markecie"
      },
      "ok": "D"
     }
    ],
    "sol": [
     "[[1,5 · 7,20 = 10,80]] zł.",
     "W markecie: [[9,90 : 1,5 = 6,60]] zł za kg."
    ],
    "answer": "A i D.",
    "tip": "1,5 · 7,20 = 7,20 + 3,60.",
    "check": [
     "F('1.5')*F('7.2') == F('10.8')",
     "F('9.9')/F('1.5') == F('6.6')"
    ]
   }
  },
  {
   "id": "c10",
   "level": 3,
   "skills": [
    "K2",
    "K6"
   ],
   "type": "self",
   "q": "Ogródek ma kształt prostokąta o wymiarach 12 m na 8,5 m. Pani Anna chce go obsiać trawą. Jedno opakowanie nasion wystarcza na 25 m² i kosztuje 23,80 zł. Ile złotych musi wydać na nasiona? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono pole ogródka: 12 · 8,5 = 102 m².",
     "pts": 1
    },
    {
     "t": "Obliczono liczbę opakowań, zaokrąglając w górę: 102 : 25 = 4,08, więc 5 opakowań.",
     "pts": 1
    },
    {
     "t": "Obliczono koszt: 5 · 23,80 = 119 zł.",
     "pts": 1
    }
   ],
   "sol": [
    "Pole: [[12 · 8,5 = 102]] m².",
    "[[102 : 25 = 4,08]]. Cztery opakowania wystarczą na 100 m², czyli za mało. Trzeba [[5]].",
    "[[5 · 23,80 = 119]] zł."
   ],
   "answer": "119 zł.",
   "tip": "Podobnie wyglądało zadanie 19 na egzaminie w 2026 roku (tam ogródek był trapezem).",
   "check": [
    "12*F('8.5') == 102",
    "F(102, 25) == F('4.08')",
    "5*F('23.8') == 119"
   ]
  },
  {
   "id": "c11",
   "level": 3,
   "skills": [
    "K4",
    "K5"
   ],
   "type": "self",
   "q": "Zaprawę przygotowuje się z cementu, piasku i wody w stosunku masowym 1 : 3 : 0,5. Ile kilogramów piasku potrzeba na 180 kg zaprawy? Ile worków cementu po 25 kg trzeba kupić? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono jedną część: 1 + 3 + 0,5 = 4,5, a 180 : 4,5 = 40 kg.",
     "pts": 1
    },
    {
     "t": "Obliczono masę piasku: 3 · 40 = 120 kg.",
     "pts": 1
    },
    {
     "t": "Obliczono liczbę worków cementu: 40 kg, więc 2 worki.",
     "pts": 1
    }
   ],
   "sol": [
    "Części: [[1 + 3 + 0,5 = 4,5]]. Jedna część: [[180 : 4,5 = 40]] kg.",
    "Piasek: [[3 · 40 = 120]] kg.",
    "Cement: [[40]] kg. Jeden worek (25 kg) to za mało, więc [[2]] worki."
   ],
   "answer": "120 kg piasku i 2 worki cementu.",
   "tip": "Liczbę worków zaokrąglaj w górę.",
   "check": [
    "180/F('4.5') == 40",
    "3*40 == 120"
   ]
  }
 ],
 "test": [
  {
   "id": "t1",
   "skills": [
    "K1"
   ],
   "type": "pf",
   "q": "W tabeli y jest zależne od x. Oceń prawdziwość zdań.",
   "data": {
    "head": [
     "x",
     "2",
     "4",
     "10"
    ],
    "rows": [
     [
      "y",
      "5",
      "10",
      "25"
     ]
    ]
   },
   "items": [
    {
     "t": "y jest wprost proporcjonalne do x.",
     "ok": "P"
    },
    {
     "t": "Dla x = 6 wartość y jest równa 12.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> Iloraz zawsze [[2,5]]. Prawda.",
    "<b>Zdanie 2.</b> [[2,5 · 6 = 15]]. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Współczynnik 2,5.",
   "check": [
    "F(5, 2) == F(10, 4) == F(25, 10)",
    "F(5, 2)*6 == 15"
   ],
   "pts": 1
  },
  {
   "id": "t2",
   "skills": [
    "K2"
   ],
   "type": "fields",
   "q": "Za 35 dag orzechów zapłacono 14,70 zł. Ile kosztuje 1 kg tych orzechów?",
   "fields": [
    {
     "label": "Cena (zł)",
     "ans": 42,
     "show": "42"
    }
   ],
   "sol": [
    "1 dag: [[14,70 : 35 = 0,42]] zł. 1 kg = 100 dag: [[42]] zł."
   ],
   "answer": "42 zł.",
   "tip": "1 kg = 100 dag.",
   "check": [
    "F('14.7')/35*100 == 42"
   ],
   "pts": 1
  },
  {
   "id": "t3",
   "skills": [
    "K2"
   ],
   "type": "abcd",
   "q": "3 kg jabłek kosztują 8,40 zł. Ile kosztuje 5 kg tych jabłek?",
   "opts": [
    "14 zł",
    "10,40 zł",
    "2,80 zł",
    "13,40 zł"
   ],
   "ok": 0,
   "why": {
    "B": "Nie dodajesz 2 zł. 1 kg kosztuje 2,80 zł, a 5 kg: 5 · 2,80.",
    "C": "2,80 zł to cena 1 kg.",
    "D": "Nie dodajesz 5 zł do ceny. 5 · 2,80 = 14 zł."
   },
   "sol": [
    "1 kg: [[2,80]] zł. 5 kg: [[14]] zł."
   ],
   "answer": "A, 14 zł.",
   "tip": "Najpierw 1 kg.",
   "check": [
    "F('8.4')/3*5 == 14"
   ],
   "pts": 1
  },
  {
   "id": "t4",
   "skills": [
    "K3"
   ],
   "type": "fields",
   "q": "Rozwiąż proporcję x/12 = 9/4.",
   "fields": [
    {
     "label": "x",
     "ans": 27,
     "show": "27"
    }
   ],
   "sol": [
    "[[4x = 108]], [[x = 27]]."
   ],
   "answer": "x = 27.",
   "tip": "Na krzyż.",
   "check": [
    "F(27, 12) == F(9, 4)"
   ],
   "pts": 1
  },
  {
   "id": "t5",
   "skills": [
    "K4"
   ],
   "type": "abcd",
   "q": "Stosunek 1,2 : 3 w najprostszej postaci to:",
   "opts": [
    "5 : 2",
    "12 : 30",
    "4 : 10",
    "2 : 5"
   ],
   "ok": 3,
   "why": {
    "A": "Kolejność jest odwrócona.",
    "B": "12 : 30 da się skrócić przez 6.",
    "C": "4 : 10 da się skrócić przez 2."
   },
   "sol": [
    "[[1,2 : 3 = 12 : 30 = 2 : 5]]."
   ],
   "answer": "D, 2 : 5.",
   "tip": "Najpierw liczby całkowite.",
   "check": [
    "F('1.2')/3 == F(2, 5)"
   ],
   "pts": 1
  },
  {
   "id": "t6",
   "skills": [
    "K4"
   ],
   "type": "fields",
   "q": "Sok i woda są w stosunku 2 : 5. Wody jest 1 litr. Ile mililitrów soku?",
   "fields": [
    {
     "label": "Sok (ml)",
     "ans": 400,
     "show": "400"
    }
   ],
   "sol": [
    "1 l = 1 000 ml, jedna część: [[200]] ml. Sok: [[400]] ml."
   ],
   "answer": "400 ml.",
   "tip": "Woda to 5 części.",
   "check": [
    "1000/5*2 == 400"
   ],
   "pts": 1
  },
  {
   "id": "t7",
   "skills": [
    "K5"
   ],
   "type": "fields",
   "q": "Podziel 560 zł w stosunku 3 : 4.",
   "fields": [
    {
     "label": "Mniejsza część (zł)",
     "ans": 240,
     "show": "240"
    },
    {
     "label": "Większa część (zł)",
     "ans": 320,
     "show": "320"
    }
   ],
   "sol": [
    "7 części, jedna: [[80]] zł. [[240]] zł i [[320]] zł."
   ],
   "answer": "240 zł i 320 zł.",
   "tip": "Sprawdzenie: 240 + 320 = 560.",
   "check": [
    "560/7*3 == 240",
    "560/7*4 == 320"
   ],
   "pts": 1
  },
  {
   "id": "t8",
   "skills": [
    "K5"
   ],
   "type": "abcd",
   "q": "Dwie rodziny wynajęły domek za 2 100 zł. Pierwsza rodzina liczy 4 osoby, a druga 3 osoby. Ile zapłaci pierwsza rodzina przy podziale proporcjonalnym do liczby osób?",
   "opts": [
    "1 050 zł",
    "1 200 zł",
    "900 zł",
    "1 400 zł"
   ],
   "ok": 1,
   "why": {
    "A": "1 050 zł to podział po równo.",
    "C": "900 zł płaci druga rodzina.",
    "D": "2 100 : 7 = 300 zł na osobę, a 4 · 300 = 1 200 zł."
   },
   "sol": [
    "Na osobę: [[300]] zł. Pierwsza: [[1 200]] zł."
   ],
   "answer": "B, 1 200 zł.",
   "tip": "Sprawdzenie: 1 200 + 900 = 2 100.",
   "check": [
    "2100/7*4 == 1200"
   ],
   "pts": 1
  },
  {
   "id": "t9",
   "skills": [
    "K6"
   ],
   "type": "abcd",
   "q": "Który zakup jest najkorzystniejszy?",
   "opts": [
    "1 kg za 5,80 zł",
    "2 kg za 11 zł",
    "500 g za 2,90 zł",
    "5 kg za 28 zł"
   ],
   "ok": 1,
   "why": {
    "A": "5,80 zł za kilogram.",
    "C": "5,80 zł za kilogram.",
    "D": "5,60 zł za kilogram."
   },
   "sol": [
    "Za 1 kg: [[5,50]], [[5,80]], [[5,80]], [[5,60]] zł."
   ],
   "answer": "B, 2 kg za 11 zł.",
   "tip": "Przelicz na 1 kg.",
   "check": [
    "F(11, 2) == F('5.5')",
    "F('2.9')*2 == F('5.8')",
    "F(28, 5) == F('5.6')"
   ],
   "pts": 1
  },
  {
   "id": "t10",
   "skills": [
    "K1"
   ],
   "type": "tn",
   "q": "Parking kosztuje 4 zł za pierwszą godzinę i 3 zł za każdą następną. Czy opłata jest wprost proporcjonalna do czasu postoju? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "N",
   "reasons": {
    "1": "za 1 h płacimy 4 zł, a za 2 h 7 zł, a nie 8 zł",
    "2": "opłata rośnie, gdy rośnie czas",
    "3": "4 i 3 to różne liczby"
   },
   "okReason": "1",
   "sol": [
    "Przy proporcjonalności za 2 h płacilibyśmy 2 · 4 = 8 zł, a płacimy 7 zł. Nie."
   ],
   "answer": "N, uzasadnienie 1.",
   "tip": "Wystarczy jeden kontrprzykład.",
   "check": [
    "4 + 3 != 2*4"
   ],
   "pts": 1
  },
  {
   "id": "t11",
   "skills": [
    "K5"
   ],
   "type": "self",
   "q": "Trzej koledzy kupili razem piłkę. Adam zapłacił 30 zł, Bartek 45 zł, a Czarek 75 zł. Po sezonie sprzedali piłkę za 90 zł i podzielili pieniądze proporcjonalnie do wkładów. Ile dostał każdy z nich? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Zapisano stosunek wkładów 2 : 3 : 5 albo udziały (np. 30/150 = 1/5).",
     "pts": 1
    },
    {
     "t": "Obliczono kwoty: Adam 18 zł, Bartek 27 zł, Czarek 45 zł.",
     "pts": 1
    }
   ],
   "sol": [
    "[[30 : 45 : 75 = 2 : 3 : 5]], 10 części, jedna: [[9]] zł.",
    "Adam [[18]] zł, Bartek [[27]] zł, Czarek [[45]] zł."
   ],
   "answer": "18 zł, 27 zł i 45 zł.",
   "tip": "Sprawdzenie: 18 + 27 + 45 = 90.",
   "check": [
    "90/10*2 == 18",
    "90/10*3 == 27",
    "90/10*5 == 45"
   ],
   "pts": 2
  },
  {
   "id": "t12",
   "skills": [
    "K2"
   ],
   "type": "self",
   "q": "Na pomalowanie 1 m² ściany potrzeba 0,15 l farby. Farbę sprzedaje się w puszkach po 2 l. Ile puszek trzeba kupić, żeby pomalować 70 m² ściany? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono, ile farby potrzeba: 70 · 0,15 = 10,5 l.",
     "pts": 1
    },
    {
     "t": "Obliczono liczbę puszek, zaokrąglając w górę: 6 puszek.",
     "pts": 1
    }
   ],
   "sol": [
    "[[70 · 0,15 = 10,5]] l.",
    "[[10,5 : 2 = 5,25]], więc [[6]] puszek."
   ],
   "answer": "6 puszek.",
   "tip": "Puszek nie kupuje się w kawałkach.",
   "check": [
    "70*F('0.15') == F('10.5')",
    "F('10.5')/2 == F('5.25')"
   ],
   "pts": 2
  }
 ],
 "test_minutes": 35,
 "pass": 12,
 "dzial": "Dział 2: Algebra"
};
