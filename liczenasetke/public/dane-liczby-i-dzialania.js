/* Wygenerowane przez zbuduj.py z tresc/liczby-i-dzialania.py. Nie edytuj ręcznie. */
window.TEMAT = {
 "slug": "liczby-i-dzialania",
 "title": "Liczby i działania",
 "sign": "±",
 "lead": "Fundament całego egzaminu. Nawet dobrze zrozumiane zadanie kończy się złym wynikiem, jeśli pomylisz kolejność działań albo znak. Do tego oś liczbowa, system rzymski i zaokrąglanie, które też są w wymaganiach egzaminacyjnych.",
 "goals": {
  "learn": "8 umiejętności: kolejność działań, liczby ujemne, oś liczbowa (także odcinek podzielony na części, jak na egzaminie 2025), system rzymski, zaokrąglanie, szacowanie i sprytne liczenie.",
  "prereq": "Tabliczka mnożenia i działania pisemne z młodszych klas. Rozgrzewka na początku to sprawdzi.",
  "goal": "Minimum 13 z 15 punktów w teście na koniec tematu."
 },
 "skills": {
  "L1": "Kolejność wykonywania działań",
  "L2": "Dodawanie i odejmowanie liczb ujemnych",
  "L3": "Mnożenie, dzielenie i potęgi liczb ujemnych",
  "L4": "Oś liczbowa: odległość i środek",
  "L5": "Odcinek na osi podzielony na równe części",
  "L6": "System rzymski",
  "L7": "Zaokrąglanie i szacowanie",
  "L8": "Sprytne liczenie, „o ile” i „ile razy”"
 },
 "lessons": [
  {
   "title": "Kolejność działań",
   "skills": [
    "L1"
   ],
   "intro": "Na egzaminie wiele osób traci punkty nie dlatego, że nie umie liczyć, tylko dlatego, że liczy w złej kolejności. Kolejność działań to umowa, którą znają wszyscy matematycy na świecie. Dzięki niej każdy dostaje z tego samego wyrażenia ten sam wynik.",
   "rule": {
    "t": "Najpierw nawiasy, potem potęgi, potem mnożenie i dzielenie, na końcu dodawanie i odejmowanie.",
    "f": [
     "1. nawiasy",
     "2. potęgi i pierwiastki",
     "3. · i : od lewej",
     "4. + i − od lewej"
    ],
    "e": "Mnożenie NIE ma pierwszeństwa przed dzieleniem. Wykonujesz je po kolei od lewej: 24 : 4 · 2 = 6 · 2 = 12."
   },
   "example": {
    "q": "Oblicz: 36 − 4 · (8 − 5)² : 6",
    "steps": [
     "Najpierw nawias: 8 − 5 = 3.",
     "Potem potęga: 3² = 9. Mamy 36 − 4 · 9 : 6.",
     "Mnożenie i dzielenie od lewej: 4 · 9 = 36, a potem 36 : 6 = 6.",
     "Na końcu odejmowanie: 36 − 6 = 30."
    ],
    "result": "Wynik to 30.",
    "tip": "<b>Częsty błąd:</b> „36 − 4 = 32” na samym początku. Odejmowanie czeka na koniec.",
    "check": [
     "36 - 4*(8-5)**2/6 == 30"
    ]
   },
   "you": [
    {
     "id": "y1",
     "type": "fields",
     "q": "Oblicz: 50 − 2 · (7 − 3)² : 4",
     "fields": [
      {
       "label": "Wynik",
       "ans": 42,
       "show": "42"
      }
     ],
     "sol": [
      "Nawias: [[7 − 3 = 4]]. Potęga: [[4² = 16]]. Mamy 50 − 2 · 16 : 4.",
      "Mnożenie i dzielenie od lewej: [[2 · 16 = 32]], potem [[32 : 4 = 8]].",
      "Na końcu odejmowanie: [[50 − 8 = 42]]."
     ],
     "answer": "42.",
     "tip": "Zanim zaczniesz liczyć, podkreśl w wyrażeniu to, co liczysz najpierw.",
     "check": [
      "50 - 2*(7-3)**2/4 == 42"
     ]
    },
    {
     "id": "y1b",
     "type": "fields",
     "q": "Oblicz: 18 − 6 : 3 · 2",
     "fields": [
      {
       "label": "Wynik",
       "ans": 14,
       "show": "14"
      }
     ],
     "sol": [
      "Nie ma nawiasów ani potęg, więc zaczynamy od mnożenia i dzielenia, po kolei od lewej.",
      "Najpierw dzielenie, bo stoi wcześniej: [[6 : 3 = 2]]. Potem mnożenie: [[2 · 2 = 4]].",
      "Na końcu odejmowanie: [[18 − 4 = 14]]."
     ],
     "answer": "14.",
     "tip": "Wynik 17 oznacza, że 3 · 2 zostało pomnożone przed dzieleniem. Mnożenie i dzielenie liczysz od lewej.",
     "check": [
      "18 - 6/3*2 == 14"
     ]
    }
   ]
  },
  {
   "title": "Dodawanie i odejmowanie liczb ujemnych",
   "skills": [
    "L2"
   ],
   "intro": "Liczby ujemne znasz z życia: temperatura −5°C, 20 zł długu, garaż na poziomie −1. Dodawanie i odejmowanie najłatwiej zrozumieć jako ruch po osi liczbowej albo na termometrze.",
   "rule": {
    "t": "Dodać liczbę dodatnią to iść w prawo, odjąć to iść w lewo. Odjąć liczbę ujemną to tak, jak dodać dodatnią.",
    "f": [
     "a − (−b) = a + b",
     "a + (−b) = a − b"
    ],
    "e": "Z −3°C do 5°C temperatura wzrosła o 8 stopni, bo 5 − (−3) = 5 + 3 = 8."
   },
   "visual": {
    "type": "chart",
    "kind": "axis",
    "ticks": 10,
    "labels": {
     "0": "−4",
     "1": "−3",
     "2": "−2",
     "3": "−1",
     "4": "0",
     "5": "1",
     "6": "2",
     "7": "3",
     "8": "4",
     "9": "5",
     "10": "6"
    },
    "points": {
     "1": "A",
     "9": "B"
    },
    "alt": "Oś od −4 do 6, punkt A w −3, punkt B w 5",
    "caption": "Od A = −3 do B = 5 jest 8 kroków: 5 − (−3) = 8"
   },
   "example": {
    "q": "O godzinie 6:00 termometr pokazywał −7°C. Do południa temperatura wzrosła o 12 stopni, a do wieczora spadła o 9 stopni. Ile stopni było wieczorem?",
    "steps": [
     "Wzrost to dodawanie: −7 + 12 = 5. W południe było 5°C.",
     "Spadek to odejmowanie: 5 − 9 = −4.",
     "Sprawdzenie na termometrze: z −7 w górę o 12 kresek to 5, potem w dół o 9 kresek to −4."
    ],
    "result": "Wieczorem było −4°C.",
    "tip": "Gdy masz wątpliwość, narysuj szybko oś albo termometr i policz kreski.",
    "check": [
     "-7 + 12 - 9 == -4"
    ]
   },
   "you": [
    {
     "id": "y2",
     "type": "fields",
     "q": "Oblicz.",
     "fields": [
      {
       "label": "−8 + 3",
       "ans": -5,
       "show": "−5"
      },
      {
       "label": "−5 − 6",
       "ans": -11,
       "show": "−11"
      },
      {
       "label": "4 − (−7)",
       "ans": 11,
       "show": "11"
      },
      {
       "label": "−2 − (−9)",
       "ans": 7,
       "show": "7"
      }
     ],
     "sol": [
      "<b>−8 + 3:</b> z −8 idziemy 3 kroki w prawo: [[−5]]. <b>−5 − 6:</b> z −5 idziemy 6 kroków w lewo: [[−11]].",
      "<b>4 − (−7):</b> odjąć −7 to dodać 7: [[4 + 7 = 11]]. <b>−2 − (−9):</b> [[−2 + 9 = 7]]."
     ],
     "answer": "−5, −11, 11 i 7.",
     "tip": "Dwa minusy obok siebie (− (−…)) zamieniasz na plus.",
     "check": [
      "-8+3 == -5",
      "-5-6 == -11",
      "4-(-7) == 11",
      "-2-(-9) == 7"
     ]
    }
   ]
  },
  {
   "title": "Mnożenie i dzielenie liczb ujemnych",
   "skills": [
    "L3"
   ],
   "intro": "Przy mnożeniu i dzieleniu liczb ujemnych wystarczy jedna zasada o znakach. Najpierw ustalasz znak wyniku, a potem liczysz tak, jakby minusów nie było.",
   "rule": {
    "t": "Takie same znaki dają plus, różne znaki dają minus.",
    "f": [
     "(−) · (−) = +",
     "(−) · (+) = −",
     "parzysta liczba minusów: wynik dodatni"
    ],
    "e": "Uwaga na potęgi: (−2)² = (−2) · (−2) = 4, ale −2² = −(2 · 2) = −4. Nawias robi różnicę."
   },
   "example": {
    "q": "Oblicz: (−3) · (−4) − 20 : (−5)",
    "steps": [
     "Mnożenie: (−3) · (−4) = 12, bo dwa minusy dają plus.",
     "Dzielenie: 20 : (−5) = −4, bo różne znaki dają minus.",
     "Odejmowanie: 12 − (−4) = 12 + 4 = 16."
    ],
    "result": "Wynik to 16.",
    "tip": "Przy każdym mnożeniu i dzieleniu najpierw zapisz znak wyniku, a dopiero potem licz samą liczbę.",
    "check": [
     "(-3)*(-4) - 20/(-5) == 16"
    ]
   },
   "you": [
    {
     "id": "y3",
     "type": "fields",
     "q": "Oblicz: (−2) · 6 − (−18) : 3",
     "fields": [
      {
       "label": "Wynik",
       "ans": -6,
       "show": "−6"
      }
     ],
     "sol": [
      "Mnożenie: [[(−2) · 6 = −12]], bo różne znaki dają minus.",
      "Dzielenie: [[(−18) : 3 = −6]].",
      "Odejmowanie: [[−12 − (−6) = −12 + 6 = −6]]."
     ],
     "answer": "−6.",
     "tip": "Najpierw mnożenie i dzielenie, a znaki ustalaj przy każdym działaniu osobno.",
     "check": [
      "(-2)*6 - (-18)/3 == -6"
     ]
    },
    {
     "id": "y3b",
     "type": "pf",
     "q": "Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "Iloczyn (−1) · (−2) · (−3) · (−4) · (−5) jest liczbą dodatnią.",
       "ok": "F"
      },
      {
       "t": "(−3)² = 9",
       "ok": "P"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> Mnożymy pięć liczb ujemnych. Pięć to liczba nieparzysta, więc wynik jest ujemny (wynosi −120). Fałsz.",
      "<b>Zdanie 2.</b> [[(−3)² = (−3) · (−3) = 9]]. Prawda."
     ],
     "answer": "F, P.",
     "tip": "Nie licz długich iloczynów, żeby poznać znak. Wystarczy policzyć minusy.",
     "check": [
      "(-1)*(-2)*(-3)*(-4)*(-5) == -120",
      "(-3)**2 == 9"
     ]
    }
   ]
  },
  {
   "title": "Oś liczbowa: odległość i środek",
   "skills": [
    "L4"
   ],
   "intro": "Oś liczbowa pojawia się na egzaminie co roku. Najczęściej trzeba policzyć odległość między dwiema liczbami albo znaleźć liczbę, która leży dokładnie pośrodku.",
   "rule": {
    "t": "Odległość to większa liczba minus mniejsza. Środek to średnia obu liczb.",
    "f": [
     "odległość = b − a (gdy b > a)",
     "środek = (a + b) : 2"
    ],
    "e": "Wartość bezwzględna |a| to odległość liczby a od zera, np. |−7| = 7. Zapis x ≥ 1,5 oznacza wszystkie liczby od 1,5 w prawo, razem z 1,5."
   },
   "visual": {
    "type": "chart",
    "kind": "axis",
    "ticks": 16,
    "labels": {
     "0": "−3",
     "2": "−2",
     "4": "−1",
     "6": "0",
     "8": "1",
     "10": "2",
     "12": "3",
     "14": "4",
     "16": "5"
    },
    "points": {
     "1": "A",
     "8": "S",
     "15": "B"
    },
    "alt": "Oś: A = −2,5, S = 1, B = 4,5",
    "caption": "A = −2,5 i B = 4,5. Środek S = 1 leży 3,5 od każdego końca."
   },
   "example": {
    "q": "Na osi liczbowej zaznaczono liczby −2,5 i 4,5. Jaka jest odległość między nimi i jaka liczba leży dokładnie pośrodku?",
    "steps": [
     "Odległość: większa minus mniejsza, 4,5 − (−2,5) = 4,5 + 2,5 = 7.",
     "Środek: (−2,5 + 4,5) : 2 = 2 : 2 = 1.",
     "Sprawdzenie: od −2,5 do 1 jest 3,5 i od 1 do 4,5 też jest 3,5. Zgadza się."
    ],
    "result": "Odległość to 7, a środek to liczba 1.",
    "tip": "Odległość nigdy nie jest ujemna. Jeśli wyszedł Ci minus, odejmowanie było w złej kolejności.",
    "check": [
     "4.5 - (-2.5) == 7",
     "(-2.5 + 4.5)/2 == 1"
    ]
   },
   "you": [
    {
     "id": "y4",
     "type": "fields",
     "q": "Na osi liczbowej zaznaczono liczby −7 i 3.",
     "fields": [
      {
       "label": "Odległość między nimi",
       "ans": 10,
       "show": "10"
      },
      {
       "label": "Liczba pośrodku",
       "ans": -2,
       "show": "−2"
      }
     ],
     "sol": [
      "Odległość: [[3 − (−7) = 3 + 7 = 10]].",
      "Środek: [[(−7 + 3) : 2 = −4 : 2 = −2]]. Sprawdzenie: od −7 do −2 jest 5, od −2 do 3 też 5."
     ],
     "answer": "Odległość 10, środek −2.",
     "tip": "Środek leży w połowie odległości od każdego końca: tu 10 : 2 = 5.",
     "check": [
      "3 - (-7) == 10",
      "(-7 + 3)/2 == -2"
     ]
    },
    {
     "id": "y4b",
     "type": "pf",
     "q": "Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "Liczba −2 spełnia warunek x > −2.",
       "ok": "F"
      },
      {
       "t": "Liczba 1,5 spełnia warunek x ≥ 1,5.",
       "ok": "P"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> Znak > oznacza „większa”, a −2 nie jest większa od samej siebie. Fałsz.",
      "<b>Zdanie 2.</b> Znak ≥ oznacza „większa lub równa”, a 1,5 jest równa 1,5. Prawda."
     ],
     "answer": "F, P.",
     "tip": "Na osi zbiór x > a rysuje się z pustym kółkiem w a, a zbiór x ≥ a z zamalowanym.",
     "check": [
      "(-2 > -2) == False",
      "1.5 >= 1.5"
     ]
    }
   ]
  },
  {
   "title": "Odcinek podzielony na równe części",
   "skills": [
    "L5"
   ],
   "intro": "Na egzaminie w 2025 roku było zadanie z odcinkiem na osi podzielonym na 6 równych części. Znane były tylko dwie liczby, a trzeba było odczytać pozostałe. Wystarczy policzyć, ile wynosi jedna część.",
   "rule": {
    "t": "Długość odcinka podziel przez liczbę części. Potem od znanego punktu dodawaj tyle części, ile kresek dalej leży szukany punkt.",
    "f": [
     "jedna część = (prawy − lewy) : liczba części"
    ],
    "e": "Licz części, a nie kreski. Odcinek z 7 kreskami ma 6 części."
   },
   "visual": {
    "type": "chart",
    "kind": "axis",
    "ticks": 6,
    "labels": {
     "0": "−4",
     "6": "14"
    },
    "points": {
     "0": "A",
     "4": "B",
     "6": "C"
    },
    "alt": "Odcinek AC od −4 do 14 podzielony na 6 równych części, punkt B na czwartej kresce"
   },
   "example": {
    "q": "Odcinek AC na osi liczbowej podzielono na 6 równych części (rysunek wyżej). A = −4, C = 14. Jaką liczbę oznacza punkt B?",
    "steps": [
     "Długość odcinka: 14 − (−4) = 18.",
     "Jedna część: 18 : 6 = 3.",
     "Punkt B leży 4 części na prawo od A: −4 + 4 · 3 = −4 + 12 = 8."
    ],
    "result": "Punkt B oznacza liczbę 8.",
    "tip": "Sprawdź od drugiej strony: od C = 14 do B są 2 części, a 14 − 2 · 3 = 8. Zgadza się.",
    "check": [
     "(14 - (-4))/6 == 3",
     "-4 + 4*3 == 8"
    ]
   },
   "you": [
    {
     "id": "y5",
     "type": "fields",
     "chart": {
      "kind": "axis",
      "ticks": 5,
      "labels": {
       "0": "2",
       "5": "12"
      },
      "points": {
       "3": "P"
      },
      "alt": "Odcinek od 2 do 12 podzielony na 5 części, punkt P na trzeciej kresce"
     },
     "q": "Odcinek na osi podzielono na 5 równych części. Jaką liczbę oznacza punkt P?",
     "fields": [
      {
       "label": "P",
       "ans": 8,
       "show": "8"
      }
     ],
     "sol": [
      "Długość: [[12 − 2 = 10]]. Jedna część: [[10 : 5 = 2]].",
      "P leży 3 części od liczby 2: [[2 + 3 · 2 = 8]]."
     ],
     "answer": "8.",
     "tip": "Najpierw jedna część, potem dodawanie części.",
     "check": [
      "2 + 3*(12-2)/5 == 8"
     ]
    },
    {
     "id": "y5b",
     "type": "fields",
     "chart": {
      "kind": "axis",
      "ticks": 4,
      "labels": {
       "0": "−1",
       "4": "1"
      },
      "points": {
       "1": "K"
      },
      "alt": "Odcinek od −1 do 1 podzielony na 4 części, punkt K na pierwszej kresce"
     },
     "q": "Odcinek na osi podzielono na 4 równe części. Jaką liczbę oznacza punkt K?",
     "fields": [
      {
       "label": "K",
       "ans": -0.5,
       "show": "−0,5"
      }
     ],
     "sol": [
      "Długość: [[1 − (−1) = 2]]. Jedna część: [[2 : 4 = 0,5]].",
      "K leży 1 część od −1: [[−1 + 0,5 = −0,5]]."
     ],
     "answer": "−0,5.",
     "tip": "Część może być ułamkiem. To nic trudnego, liczysz tak samo.",
     "check": [
      "-1 + 2/4 == -0.5"
     ]
    }
   ]
  },
  {
   "title": "System rzymski",
   "skills": [
    "L6"
   ],
   "intro": "Liczby rzymskie do 3 000 są w wymaganiach egzaminacyjnych i były w informatorze CKE. Wystarczy znać 7 znaków i jedną zasadę odejmowania.",
   "rule": {
    "t": "I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000. Mniejszy znak przed większym odejmujesz.",
    "f": [
     "IV = 4, IX = 9",
     "XL = 40, XC = 90",
     "CD = 400, CM = 900"
    ],
    "e": "Ten sam znak piszesz najwyżej 3 razy z rzędu: 3 = III, ale 4 = IV. Odejmować wolno tylko w tych sześciu parach."
   },
   "example": {
    "q": "Zapisz liczbę 1 994 w systemie rzymskim.",
    "steps": [
     "Rozkładamy na tysiące, setki, dziesiątki i jedności: 1 000 + 900 + 90 + 4.",
     "Każdą część zamieniamy osobno: 1 000 = M, 900 = CM, 90 = XC, 4 = IV.",
     "Łączymy od lewej: M + CM + XC + IV."
    ],
    "result": "1 994 = MCMXCIV.",
    "tip": "Czytając liczbę rzymską, dziel ją na kawałki tak samo: MCM|XC|IV = 1 000 + 900 + 90 + 4.",
    "check": [
     "roman(1994) == 'MCMXCIV'"
    ]
   },
   "you": [
    {
     "id": "y6",
     "type": "fields",
     "q": "Zamień.",
     "fields": [
      {
       "label": "2 048 w systemie rzymskim",
       "ans": "MMXLVIII",
       "show": "MMXLVIII",
       "text": true
      },
      {
       "label": "CDXC w systemie dziesiątkowym",
       "ans": 490,
       "show": "490"
      }
     ],
     "sol": [
      "<b>2 048</b> = 2 000 + 40 + 8 = MM + XL + VIII = [[MMXLVIII]].",
      "<b>CDXC</b> = CD + XC = 400 + 90 = [[490]]."
     ],
     "answer": "MMXLVIII i 490.",
     "tip": "Zera w liczbie nie zapisuje się żadnym znakiem: 2 048 nie ma setek, więc po MM od razu jest XL.",
     "check": [
      "roman(2048) == 'MMXLVIII'",
      "roman(490) == 'CDXC'"
     ]
    },
    {
     "id": "y6b",
     "type": "abcd",
     "q": "Która z liczb leży na osi liczbowej najbliżej liczby 300?",
     "opts": [
      "CCLXX",
      "CCXC",
      "CCCXX",
      "CCCL"
     ],
     "ok": 1,
     "why": {
      "A": "CCLXX = 270, czyli 30 od 300. CCXC jest bliżej.",
      "C": "CCCXX = 320, czyli 20 od 300. CCXC jest bliżej.",
      "D": "CCCL = 350, czyli 50 od 300."
     },
     "sol": [
      "Zamieniamy: CCLXX = 270, CCXC = 290, CCCXX = 320, CCCL = 350.",
      "Odległości od 300: 30, [[10]], 20 i 50. Najbliżej jest CCXC."
     ],
     "answer": "B, CCXC.",
     "tip": "XC to 90, a nie 110. X stoi przed C, więc odejmujesz.",
     "check": [
      "roman(270) == 'CCLXX'",
      "roman(290) == 'CCXC'",
      "roman(320) == 'CCCXX'",
      "roman(350) == 'CCCL'"
     ]
    }
   ]
  },
  {
   "title": "Zaokrąglanie i szacowanie",
   "skills": [
    "L7"
   ],
   "intro": "Zaokrąglasz ceny, odległości i wyniki pomiarów. Szacowanie pozwala w kilka sekund sprawdzić, czy wynik ma sens. To najlepsza ochrona przed błędem o jedno zero.",
   "rule": {
    "t": "Patrzysz tylko na pierwszą cyfrę, którą odrzucasz: 0–4 w dół, 5–9 w górę.",
    "f": [
     "48 572 ≈ 49 000 (do tysięcy)",
     "3,146 ≈ 3,15 (do setnych)"
    ],
    "e": "Szacowanie: zaokrąglij liczby, żeby łatwo policzyć. 198 · 51 ≈ 200 · 50 = 10 000."
   },
   "example": {
    "q": "Zaokrąglij liczbę 26 849 do setek i do tysięcy.",
    "steps": [
     "Do setek: zostawiamy cyfrę setek (8) i patrzymy na cyfrę dziesiątek: 26 8|49. To 4, więc w dół: 26 800.",
     "Do tysięcy: patrzymy na cyfrę setek: 26|849. To 8, więc w górę: 27 000."
    ],
    "result": "26 849 ≈ 26 800 (do setek) ≈ 27 000 (do tysięcy).",
    "tip": "Zawsze zaokrąglaj z liczby wyjściowej, a nie z wyniku poprzedniego zaokrąglenia.",
    "check": [
     "round(26849, -2) == 26800",
     "round(26849, -3) == 27000"
    ]
   },
   "you": [
    {
     "id": "y7",
     "type": "fields",
     "q": "Zaokrąglij.",
     "fields": [
      {
       "label": "7,352 do części dziesiątych",
       "ans": 7.4,
       "show": "7,4"
      },
      {
       "label": "149 999 do tysięcy",
       "ans": 150000,
       "show": "150 000"
      }
     ],
     "sol": [
      "<b>7,352:</b> za cyfrą dziesiątych (3) stoi 5, więc w górę: [[7,4]].",
      "<b>149 999:</b> za cyfrą tysięcy (9) stoi 9, więc w górę. 149 tysięcy zamienia się w 150 tysięcy: [[150 000]]."
     ],
     "answer": "7,4 i 150 000.",
     "tip": "Gdy zaokrąglasz 9 w górę, zamienia się w 10 i przenosisz jedynkę dalej.",
     "check": [
      "round(149999, -3) == 150000"
     ]
    },
    {
     "id": "y7b",
     "type": "abcd",
     "q": "Wynik działania 402 · 19 jest najbliższy liczbie:",
     "opts": [
      "800",
      "8 000",
      "80 000",
      "4 200"
     ],
     "ok": 1,
     "why": {
      "A": "800 to o jedno zero za mało. 400 · 20 to 8 000.",
      "C": "80 000 to o jedno zero za dużo.",
      "D": "4 200 to mniej więcej 400 · 10, a 19 to prawie 20."
     },
     "sol": [
      "Szacujemy: 402 ≈ 400, 19 ≈ 20.",
      "[[400 · 20 = 8 000]]. Dokładny wynik to 7 638, więc 8 000 jest najbliżej."
     ],
     "answer": "B, 8 000.",
     "tip": "Szacując, zaokrąglaj do liczb, które łatwo pomnożyć w pamięci.",
     "check": [
      "402*19 == 7638"
     ]
    }
   ]
  },
  {
   "title": "Sprytne liczenie, „o ile” i „ile razy”",
   "skills": [
    "L8"
   ],
   "intro": "Na egzaminie nie ma kalkulatora, więc przydaje się liczenie w pamięci. Do tego dwa pytania, które łatwo pomylić: „o ile więcej” i „ile razy więcej”.",
   "rule": {
    "t": "„O ile więcej” to odejmowanie. „Ile razy więcej” to dzielenie.",
    "f": [
     "o ile: a − b",
     "ile razy: a : b",
     "23 + 49 + 77 = (23 + 77) + 49"
    ],
    "e": "Grupuj liczby tak, żeby dawały okrągłe wyniki: 25 · 17 · 4 = 100 · 17 = 1 700. Mnożenie przez 99: 99 · 14 = 100 · 14 − 14 = 1 386."
   },
   "example": {
    "q": "Oblicz sprytnie: 25 · 36 oraz 48 + 67 + 52.",
    "steps": [
     "25 · 36: rozkładamy 36 = 4 · 9. Wtedy 25 · 4 = 100 i 100 · 9 = 900.",
     "48 + 67 + 52: najpierw 48 + 52 = 100, potem 100 + 67 = 167."
    ],
    "result": "25 · 36 = 900, a 48 + 67 + 52 = 167.",
    "tip": "Szukaj par, które dają 10, 100 albo 1 000.",
    "check": [
     "25*36 == 900",
     "48+67+52 == 167"
    ]
   },
   "you": [
    {
     "id": "y8",
     "type": "fields",
     "q": "Porównaj liczby 144 i 36.",
     "fields": [
      {
       "label": "O ile 144 jest większe od 36?",
       "ans": 108,
       "show": "108"
      },
      {
       "label": "Ile razy 144 jest większe od 36?",
       "ans": 4,
       "show": "4"
      }
     ],
     "sol": [
      "O ile: odejmujemy, [[144 − 36 = 108]].",
      "Ile razy: dzielimy, [[144 : 36 = 4]]."
     ],
     "answer": "O 108, czyli 4 razy.",
     "tip": "Sprawdzenie: 36 + 108 = 144 i 36 · 4 = 144.",
     "check": [
      "144-36 == 108",
      "144/36 == 4"
     ]
    },
    {
     "id": "y8b",
     "type": "fields",
     "q": "Oblicz w pamięci.",
     "fields": [
      {
       "label": "5 · 23 · 20",
       "ans": 2300,
       "show": "2 300"
      },
      {
       "label": "99 · 12",
       "ans": 1188,
       "show": "1 188"
      }
     ],
     "sol": [
      "<b>5 · 23 · 20:</b> najpierw [[5 · 20 = 100]], potem [[100 · 23 = 2 300]].",
      "<b>99 · 12:</b> [[100 · 12 − 12 = 1 200 − 12 = 1 188]]."
     ],
     "answer": "2 300 i 1 188.",
     "tip": "Mnożenie możesz robić w dowolnej kolejności. Wybierz tę, która daje okrągłe liczby.",
     "check": [
      "5*23*20 == 2300",
      "99*12 == 1188"
     ]
    }
   ]
  }
 ],
 "traps": [
  {
   "name": "Mnożenie przed dzieleniem",
   "bad": "24 : 4 · 2 = 24 : 8 = 3",
   "good": "od lewej: 24 : 4 = 6, potem 6 · 2 = 12"
  },
  {
   "name": "Minus przed potęgą",
   "bad": "−3² = 9",
   "good": "−3² = −9, a (−3)² = 9. Nawias robi różnicę."
  },
  {
   "name": "Kreski zamiast części",
   "bad": "7 kresek, więc 7 części",
   "good": "7 kresek to 6 części (odstępów)"
  }
 ],
 "cheat": {
  "title": "Liczby i działania w 8 zasadach",
  "rules": [
   {
    "t": "Kolejność: nawiasy, potęgi, · i :, + i −.",
    "f": [
     "( ) → potęgi → · : → + −"
    ],
    "e": "Mnożenie i dzielenie od lewej: 20 − 12 : 4 · 2 = 20 − 6 = 14"
   },
   {
    "t": "Odjąć liczbę ujemną to dodać dodatnią.",
    "f": [
     "a − (−b) = a + b"
    ],
    "e": "3 − (−5) = 8 · −4 − 7 = −11"
   },
   {
    "t": "Znaki przy · i :: takie same dają +, różne −.",
    "f": [
     "(−) · (−) = +"
    ],
    "e": "(−2)² = 4, ale −2² = −4"
   },
   {
    "t": "Oś: odległość i środek.",
    "f": [
     "odległość = b − a",
     "środek = (a + b) : 2"
    ],
    "e": "−3 i 5: odległość 8, środek 1"
   },
   {
    "t": "Odcinek na części: najpierw jedna część.",
    "f": [
     "część = długość : liczba części"
    ],
    "e": "od −4 do 14 na 6 części: część = 3"
   },
   {
    "t": "Rzymskie: mniejszy przed większym odejmujesz.",
    "f": [
     "IV 4 · IX 9 · XL 40 · XC 90 · CD 400 · CM 900"
    ],
    "e": "1 994 = MCMXCIV"
   },
   {
    "t": "Zaokrąglanie: patrz na pierwszą odrzucaną cyfrę.",
    "f": [
     "0–4 w dół, 5–9 w górę"
    ],
    "e": "3 482 ≈ 3 500 (do setek)"
   },
   {
    "t": "O ile: odejmij. Ile razy: podziel.",
    "f": [
     "a − b",
     "a : b"
    ],
    "e": "144 i 36: o 108, 4 razy"
   }
  ]
 },
 "memo": {
  "title": "Znaki rzymskie: warto znać na pamięć",
  "rows": [
   [
    "I",
    "V",
    "X",
    "L",
    "C",
    "D",
    "M"
   ],
   [
    "1",
    "5",
    "10",
    "50",
    "100",
    "500",
    "1000"
   ]
  ],
  "note": "Tylko sześć par oznacza odejmowanie: IV, IX, XL, XC, CD, CM. Liczbę rzymską czytaj kawałkami: MCM|XC|IV = 1000 + 900 + 90 + 4."
 },
 "warmup": {
  "id": "w0",
  "type": "fields",
  "q": "Zanim zaczniesz: trzy rachunki z młodszych klas. Bez kalkulatora.",
  "fields": [
   {
    "label": "7 · 8",
    "ans": 56,
    "show": "56"
   },
   {
    "label": "144 : 12",
    "ans": 12,
    "show": "12"
   },
   {
    "label": "1 000 − 358",
    "ans": 642,
    "show": "642"
   }
  ],
  "sol": [
   "<b>7 · 8</b> to tabliczka mnożenia: [[56]]. Jeśli nie pamiętasz, policz 7 · 4 = 28 i podwój.",
   "<b>144 : 12.</b> 12 · 10 = 120, zostaje 24, czyli jeszcze 2 razy po 12. Razem [[12]].",
   "<b>1 000 − 358.</b> Od 358 do 400 brakuje 42, a od 400 do 1 000 brakuje 600. Razem [[642]]."
  ],
  "answer": "56, 12 i 642.",
  "tip": "Odejmując od 1 000, licz „ile brakuje do pełnej setki, a potem do tysiąca”.",
  "check": [
   "7*8 == 56",
   "144/12 == 12",
   "1000-358 == 642"
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
   "desc": "Zadania jak na egzaminie, umiejętności wymieszane. Czytaj uważnie, o co pytają."
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
    "L1"
   ],
   "type": "abcd",
   "q": "Wartość wyrażenia 18 − 6 : 3 · 2 jest równa:",
   "opts": [
    "17",
    "8",
    "14",
    "2"
   ],
   "ok": 2,
   "why": {
    "A": "17 to 18 − 6 : 6. Najpierw pomnożono 3 · 2, a mnożenie i dzielenie wykonuje się od lewej.",
    "B": "8 to (18 − 6) : 3 · 2. Odejmowanie wykonano jako pierwsze, a powinno być na końcu.",
    "D": "2 to (18 − 6) : (3 · 2). Dwa błędy naraz: odejmowanie na początku i mnożenie przed dzieleniem."
   },
   "sol": [
    "Nie ma nawiasów ani potęg, więc zaczynamy od mnożenia i dzielenia, po kolei od lewej.",
    "[[6 : 3 = 2]], potem [[2 · 2 = 4]].",
    "Na końcu [[18 − 4 = 14]]."
   ],
   "answer": "C, 14.",
   "tip": "Mnożenie i dzielenie są „równie ważne”. Decyduje kolejność od lewej.",
   "check": [
    "18 - 6/3*2 == 14",
    "18 - 6/(3*2) == 17",
    "(18-6)/3*2 == 8",
    "(18-6)/(3*2) == 2"
   ],
   "twin": {
    "type": "abcd",
    "q": "Wartość wyrażenia 30 − 12 : 4 · 3 jest równa:",
    "opts": [
     "21",
     "29",
     "13,5",
     "1,5"
    ],
    "ok": 0,
    "why": {
     "B": "29 to 30 − 12 : 12. Najpierw pomnożono 4 · 3, a trzeba liczyć od lewej.",
     "C": "13,5 to (30 − 12) : 4 · 3. Odejmowanie wykonano jako pierwsze.",
     "D": "1,5 to (30 − 12) : (4 · 3). Dwa błędy naraz."
    },
    "sol": [
     "[[12 : 4 = 3]], potem [[3 · 3 = 9]].",
     "Na końcu [[30 − 9 = 21]]."
    ],
    "answer": "A, 21.",
    "tip": "Podkreśl mnożenie i dzielenie, a potem licz je od lewej.",
    "check": [
     "30 - 12/4*3 == 21",
     "30 - 12/(4*3) == 29",
     "(30-12)/4*3 == 13.5",
     "(30-12)/(4*3) == 1.5"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Wartość wyrażenia 36 − 12 : 3 · 2 jest równa:",
    "opts": [
     "34",
     "16",
     "4",
     "28"
    ],
    "ok": 3,
    "why": {
     "A": "34 to 36 − 12 : 6. Najpierw pomnożono 3 · 2, a trzeba liczyć od lewej.",
     "B": "16 to (36 − 12) : 3 · 2. Odejmowanie wykonano jako pierwsze.",
     "C": "4 to (36 − 12) : (3 · 2). Dwa błędy naraz."
    },
    "sol": [
     "[[12 : 3 = 4]], [[4 · 2 = 8]], [[36 − 8 = 28]]."
    ],
    "answer": "D, 28.",
    "tip": "Mnożenie i dzielenie od lewej, odejmowanie na końcu.",
    "check": [
     "36 - 12/3*2 == 28",
     "36 - 12/(3*2) == 34",
     "(36-12)/3*2 == 16",
     "(36-12)/(3*2) == 4"
    ]
   }
  },
  {
   "id": "a2",
   "level": 1,
   "skills": [
    "L2"
   ],
   "type": "fields",
   "q": "Oblicz.",
   "fields": [
    {
     "label": "−9 + 4",
     "ans": -5,
     "show": "−5"
    },
    {
     "label": "−3 − 8",
     "ans": -11,
     "show": "−11",
     "why": [
      [
       5,
       "Masz 3 zł długu i pożyczasz jeszcze 8 zł. Dług rośnie, więc wynik jest ujemny: −11."
      ],
      [
       -5,
       "−3 − 8 to ruch o 8 w lewo od −3, czyli −11."
      ]
     ]
    },
    {
     "label": "6 − (−5)",
     "ans": 11,
     "show": "11",
     "why": [
      [
       1,
       "Odjąć −5 to dodać 5: 6 + 5 = 11."
      ]
     ]
    },
    {
     "label": "−7 − (−2)",
     "ans": -5,
     "show": "−5",
     "why": [
      [
       -9,
       "Odjąć −2 to dodać 2: −7 + 2 = −5."
      ]
     ]
    }
   ],
   "sol": [
    "<b>−9 + 4:</b> 9 zł długu, dostajesz 4 zł, dług maleje do 5 zł: [[−5]]. <b>−3 − 8:</b> dług rośnie: [[−11]].",
    "<b>6 − (−5)</b> = 6 + 5 = [[11]]. <b>−7 − (−2)</b> = −7 + 2 = [[−5]]."
   ],
   "answer": "−5, −11, 11 i −5.",
   "tip": "Wyobraź sobie długi i pieniądze albo temperaturę.",
   "check": [
    "-9+4 == -5",
    "-3-8 == -11",
    "6-(-5) == 11",
    "-7-(-2) == -5"
   ],
   "twin": {
    "type": "fields",
    "q": "Oblicz.",
    "fields": [
     {
      "label": "−6 + 10",
      "ans": 4,
      "show": "4"
     },
     {
      "label": "−2 − 9",
      "ans": -11,
      "show": "−11"
     },
     {
      "label": "3 − (−8)",
      "ans": 11,
      "show": "11"
     },
     {
      "label": "−10 − (−4)",
      "ans": -6,
      "show": "−6"
     }
    ],
    "sol": [
     "<b>−6 + 10</b> = [[4]]. <b>−2 − 9</b> = [[−11]].",
     "<b>3 − (−8)</b> = 3 + 8 = [[11]]. <b>−10 − (−4)</b> = −10 + 4 = [[−6]]."
    ],
    "answer": "4, −11, 11 i −6.",
    "tip": "Dwa minusy obok siebie zamieniasz na plus.",
    "check": [
     "-6+10 == 4",
     "-2-9 == -11",
     "3-(-8) == 11",
     "-10-(-4) == -6"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Oblicz.",
    "fields": [
     {
      "label": "−11 + 6",
      "ans": -5,
      "show": "−5"
     },
     {
      "label": "−4 − 5",
      "ans": -9,
      "show": "−9",
      "why": [
       [
        1,
        "Z −4 idziesz 5 w lewo: −9."
       ]
      ]
     },
     {
      "label": "2 − (−9)",
      "ans": 11,
      "show": "11",
      "why": [
       [
        -7,
        "Odjąć −9 to dodać 9: 2 + 9 = 11."
       ]
      ]
     },
     {
      "label": "−8 − (−3)",
      "ans": -5,
      "show": "−5",
      "why": [
       [
        -11,
        "Odjąć −3 to dodać 3: −8 + 3 = −5."
       ]
      ]
     }
    ],
    "sol": [
     "<b>−11 + 6</b> = [[−5]]. <b>−4 − 5</b> = [[−9]].",
     "<b>2 − (−9)</b> = 2 + 9 = [[11]]. <b>−8 − (−3)</b> = −8 + 3 = [[−5]]."
    ],
    "answer": "−5, −9, 11 i −5.",
    "tip": "− (−a) zamieniasz na + a.",
    "check": [
     "-11+6 == -5",
     "-4-5 == -9",
     "2-(-9) == 11",
     "-8-(-3) == -5"
    ]
   }
  },
  {
   "id": "a8",
   "level": 1,
   "skills": [
    "L7"
   ],
   "type": "abcd",
   "q": "Liczbę 48 572 zaokrąglono do tysięcy. Otrzymano:",
   "opts": [
    "48 000",
    "49 000",
    "48 600",
    "50 000"
   ],
   "ok": 1,
   "why": {
    "A": "Zaokrąglono w dół, a cyfra setek to 5. Od 5 zaokrąglamy w górę.",
    "C": "48 600 to zaokrąglenie do setek.",
    "D": "50 000 to zaokrąglenie do dziesiątek tysięcy."
   },
   "sol": [
    "Zostawiamy cyfrę tysięcy (8) i patrzymy na cyfrę setek: 48|572. To 5, więc w górę.",
    "48 tysięcy zamienia się w 49 tysięcy: [[49 000]]."
   ],
   "answer": "B, 49 000.",
   "tip": "Podkreśl cyfrę, do której zaokrąglasz, i patrz tylko na jedną cyfrę za nią.",
   "check": [
    "round(48572, -3) == 49000"
   ],
   "twin": {
    "type": "abcd",
    "q": "Liczbę 73 450 zaokrąglono do setek. Otrzymano:",
    "opts": [
     "73 400",
     "73 500",
     "73 000",
     "74 000"
    ],
    "ok": 1,
    "why": {
     "A": "Zaokrąglono w dół, a cyfra dziesiątek to 5. Od 5 zaokrąglamy w górę.",
     "C": "73 000 to zaokrąglenie do tysięcy.",
     "D": "74 000 to zła liczba: do tysięcy byłoby 73 000."
    },
    "sol": [
     "Patrzymy na cyfrę dziesiątek: 73 4|50. To 5, więc w górę: [[73 500]]."
    ],
    "answer": "B, 73 500.",
    "tip": "5 zawsze zaokrągla w górę.",
    "check": [
     "73450 // 100 * 100 + (100 if 73450 % 100 >= 50 else 0) == 73500"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Liczbę 26 481 zaokrąglono do tysięcy. Otrzymano:",
    "opts": [
     "27 000",
     "26 500",
     "30 000",
     "26 000"
    ],
    "ok": 3,
    "why": {
     "A": "Cyfra setek to 4, więc zaokrąglamy w dół.",
     "B": "26 500 to zaokrąglenie do setek.",
     "C": "30 000 to zaokrąglenie do dziesiątek tysięcy."
    },
    "sol": [
     "Cyfra za tysiącami: 26|481. To 4, więc w dół: [[26 000]]."
    ],
    "answer": "D, 26 000.",
    "tip": "0–4 w dół, 5–9 w górę.",
    "check": [
     "round(26481, -3) == 26000"
    ]
   }
  },
  {
   "id": "a10",
   "level": 1,
   "skills": [
    "L8"
   ],
   "type": "fields",
   "q": "Oblicz sprytnie, w pamięci.",
   "fields": [
    {
     "label": "25 · 17 · 4",
     "ans": 1700,
     "show": "1 700"
    },
    {
     "label": "99 · 15",
     "ans": 1485,
     "show": "1 485",
     "why": [
      [
       1500,
       "To 100 · 15. Mnożysz przez 99, więc odejmij jeszcze jedno 15: 1 500 − 15."
      ]
     ]
    }
   ],
   "sol": [
    "<b>25 · 17 · 4:</b> [[25 · 4 = 100]], a [[100 · 17 = 1 700]].",
    "<b>99 · 15:</b> [[100 · 15 − 15 = 1 500 − 15 = 1 485]]."
   ],
   "answer": "1 700 i 1 485.",
   "tip": "Mnożenie przez 99 to mnożenie przez 100 i odjęcie jednej liczby.",
   "check": [
    "25*17*4 == 1700",
    "99*15 == 1485"
   ],
   "twin": {
    "type": "fields",
    "q": "Oblicz sprytnie, w pamięci.",
    "fields": [
     {
      "label": "50 · 13 · 2",
      "ans": 1300,
      "show": "1 300"
     },
     {
      "label": "101 · 15",
      "ans": 1515,
      "show": "1 515"
     }
    ],
    "sol": [
     "<b>50 · 13 · 2:</b> [[50 · 2 = 100]], a [[100 · 13 = 1 300]].",
     "<b>101 · 15:</b> [[100 · 15 + 15 = 1 515]]."
    ],
    "answer": "1 300 i 1 515.",
    "tip": "101 · a = 100 · a + a.",
    "check": [
     "50*13*2 == 1300",
     "101*15 == 1515"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Oblicz sprytnie, w pamięci.",
    "fields": [
     {
      "label": "4 · 37 · 25",
      "ans": 3700,
      "show": "3 700"
     },
     {
      "label": "98 · 11",
      "ans": 1078,
      "show": "1 078",
      "why": [
       [
        1100,
        "To 100 · 11. Trzeba odjąć 2 · 11 = 22."
       ]
      ]
     }
    ],
    "sol": [
     "<b>4 · 37 · 25:</b> [[4 · 25 = 100]], [[100 · 37 = 3 700]].",
     "<b>98 · 11</b> = 100 · 11 − 2 · 11 = [[1 100 − 22 = 1 078]]."
    ],
    "answer": "3 700 i 1 078.",
    "tip": "98 = 100 − 2.",
    "check": [
     "4*37*25 == 3700",
     "98*11 == 1078"
    ]
   }
  },
  {
   "id": "a11",
   "level": 1,
   "skills": [
    "L8"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Liczba 120 jest o 90 większa od liczby 30.",
     "ok": "P"
    },
    {
     "t": "Liczba 120 jest 90 razy większa od liczby 30.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> „O ile” to odejmowanie: [[120 − 30 = 90]]. Prawda.",
    "<b>Zdanie 2.</b> „Ile razy” to dzielenie: [[120 : 30 = 4]]. 120 jest 4 razy większe, a nie 90 razy. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "O ile: odejmij. Ile razy: podziel.",
   "check": [
    "120-30 == 90",
    "120/30 == 4"
   ],
   "twin": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Liczba 84 jest 4 razy większa od liczby 21.",
      "ok": "P"
     },
     {
      "t": "Liczba 84 jest o 4 większa od liczby 21.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[84 : 21 = 4]]. Prawda.",
     "<b>Zdanie 2.</b> [[84 − 21 = 63]], więc 84 jest o 63 większe. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Sprawdź: 21 · 4 = 84, ale 21 + 4 = 25.",
    "check": [
     "84/21 == 4",
     "84-21 == 63"
    ]
   },
   "twin2": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Liczba 150 jest o 145 większa od liczby 5.",
      "ok": "P"
     },
     {
      "t": "Liczba 150 jest 145 razy większa od liczby 5.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[150 − 5 = 145]]. Prawda.",
     "<b>Zdanie 2.</b> [[150 : 5 = 30]], więc 30 razy. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "O ile: odejmij. Ile razy: podziel.",
    "check": [
     "150-5 == 145",
     "150/5 == 30"
    ]
   }
  },
  {
   "id": "b4",
   "level": 2,
   "skills": [
    "L5"
   ],
   "type": "pf",
   "chart": {
    "kind": "axis",
    "ticks": 6,
    "labels": {
     "0": "12",
     "2": "20"
    },
    "points": {
     "0": "A",
     "4": "B",
     "6": "C"
    },
    "alt": "Odcinek AC podzielony na 6 części; A = 12, druga kreska = 20, B na czwartej kresce"
   },
   "q": "Odcinek AC na osi liczbowej podzielono na 6 równych części. Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Jedna część ma długość 4.",
     "ok": "P"
    },
    {
     "t": "Punkt B oznacza liczbę 26.",
     "ok": "F"
    }
   ],
   "sol": [
    "Znamy dwie liczby: 12 i 20. Dzielą je 2 części, więc jedna część to [[(20 − 12) : 2 = 4]]. Zdanie 1 jest prawdziwe.",
    "B leży 4 części od A: [[12 + 4 · 4 = 28]]. B to 28, a nie 26. Zdanie 2 jest fałszywe."
   ],
   "answer": "P, F.",
   "tip": "Znane liczby nie muszą być na końcach odcinka. Licz, ile części je dzieli.",
   "check": [
    "(20-12)/2 == 4",
    "12 + 4*4 == 28"
   ],
   "twin": {
    "type": "pf",
    "chart": {
     "kind": "axis",
     "ticks": 6,
     "labels": {
      "0": "−9",
      "3": "0"
     },
     "points": {
      "0": "A",
      "5": "B",
      "6": "C"
     },
     "alt": "Odcinek AC na 6 części; A = −9, trzecia kreska = 0, B na piątej kresce"
    },
    "q": "Odcinek AC na osi liczbowej podzielono na 6 równych części. Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Jedna część ma długość 3.",
      "ok": "P"
     },
     {
      "t": "Punkt C oznacza liczbę 6.",
      "ok": "F"
     }
    ],
    "sol": [
     "Od −9 do 0 są 3 części, więc część to [[9 : 3 = 3]]. Prawda.",
     "C leży 6 części od A: [[−9 + 6 · 3 = 9]]. C to 9, a nie 6 (6 to punkt B). Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Sprawdź, który punkt jest na której kresce.",
    "check": [
     "(0-(-9))/3 == 3",
     "-9 + 6*3 == 9",
     "-9 + 5*3 == 6"
    ]
   },
   "twin2": {
    "type": "pf",
    "chart": {
     "kind": "axis",
     "ticks": 6,
     "labels": {
      "0": "−5",
      "2": "1"
     },
     "points": {
      "0": "A",
      "5": "B",
      "6": "C"
     },
     "alt": "Odcinek AC na 6 części; A = −5, druga kreska = 1, B na piątej kresce"
    },
    "q": "Odcinek AC na osi liczbowej podzielono na 6 równych części. Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Jedna część ma długość 3.",
      "ok": "P"
     },
     {
      "t": "Punkt C oznacza liczbę 10.",
      "ok": "F"
     }
    ],
    "sol": [
     "Od −5 do 1 są 2 części: [[6 : 2 = 3]]. Prawda.",
     "C: [[−5 + 6 · 3 = 13]]. 10 to punkt B. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Sprawdź, który punkt leży na której kresce.",
    "check": [
     "(1-(-5))/2 == 3",
     "-5 + 6*3 == 13",
     "-5 + 5*3 == 10"
    ]
   }
  },
  {
   "id": "b5",
   "level": 2,
   "skills": [
    "L6"
   ],
   "type": "abcd",
   "q": "Która z liczb leży na osi liczbowej najbliżej liczby 1 000?",
   "opts": [
    "CMLXX",
    "CMXL",
    "MLX",
    "MXL"
   ],
   "ok": 0,
   "why": {
    "B": "CMXL = 940, czyli 60 od 1 000.",
    "C": "MLX = 1 060, czyli 60 od 1 000.",
    "D": "MXL = 1 040, czyli 40 od 1 000. CMLXX jest bliżej (30)."
   },
   "sol": [
    "Zamieniamy: CMLXX = 900 + 70 = 970, CMXL = 900 + 40 = 940, MLX = 1 060, MXL = 1 040.",
    "Odległości od 1 000: [[30]], 60, 60, 40. Najbliżej jest CMLXX."
   ],
   "answer": "A, CMLXX.",
   "tip": "CM to 900, a nie 1 100. C stoi przed M, więc odejmujesz.",
   "check": [
    "roman(970) == 'CMLXX'",
    "roman(940) == 'CMXL'",
    "roman(1060) == 'MLX'",
    "roman(1040) == 'MXL'"
   ],
   "twin": {
    "type": "abcd",
    "q": "Która z liczb leży na osi liczbowej najbliżej liczby 500?",
    "opts": [
     "CDLX",
     "DXXX",
     "CDLXXX",
     "DXL"
    ],
    "ok": 2,
    "why": {
     "A": "CDLX = 460, czyli 40 od 500.",
     "B": "DXXX = 530, czyli 30 od 500. CDLXXX jest bliżej (20).",
     "D": "DXL = 540, czyli 40 od 500."
    },
    "sol": [
     "CDLXXX = 480, CDLX = 460, DXXX = 530, DXL = 540.",
     "Odległości od 500: [[20]], 40, 30, 40."
    ],
    "answer": "C, CDLXXX.",
    "tip": "CD to 400.",
    "check": [
     "roman(480) == 'CDLXXX'",
     "roman(460) == 'CDLX'",
     "roman(530) == 'DXXX'",
     "roman(540) == 'DXL'"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Która z liczb leży na osi liczbowej najbliżej liczby 2 000?",
    "opts": [
     "MMXX",
     "MCMLXX",
     "MCMXC",
     "MMXXX"
    ],
    "ok": 2,
    "why": {
     "A": "MMXX = 2 020, czyli 20 od 2 000.",
     "B": "MCMLXX = 1 970, czyli 30 od 2 000.",
     "D": "MMXXX = 2 030, czyli 30 od 2 000."
    },
    "sol": [
     "MCMXC = 1 990, MMXX = 2 020, MCMLXX = 1 970, MMXXX = 2 030.",
     "Odległości: [[10]], 20, 30, 30."
    ],
    "answer": "C, MCMXC.",
    "tip": "CM = 900.",
    "check": [
     "roman(1990) == 'MCMXC'",
     "roman(2020) == 'MMXX'",
     "roman(1970) == 'MCMLXX'",
     "roman(2030) == 'MMXXX'"
    ]
   }
  },
  {
   "id": "b9",
   "level": 2,
   "skills": [
    "L3"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "(−2)⁴ = 16",
     "ok": "P"
    },
    {
     "t": "−2⁴ = 16",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> Nawias obejmuje minus: [[(−2)⁴ = (−2) · (−2) · (−2) · (−2) = 16]]. Prawda.",
    "<b>Zdanie 2.</b> Bez nawiasu potęga dotyczy tylko 2: [[−2⁴ = −(2 · 2 · 2 · 2) = −16]]. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Potęga dotyczy tylko tego, co stoi tuż przed nią. Minus bez nawiasu zostaje na zewnątrz.",
   "check": [
    "(-2)**4 == 16",
    "-2**4 == -16"
   ],
   "twin": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "(−1)¹⁰¹ = 1",
      "ok": "F"
     },
     {
      "t": "(−5)² − 5² = 0",
      "ok": "P"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> 101 minusów to nieparzysta liczba, więc [[(−1)¹⁰¹ = −1]]. Fałsz.",
     "<b>Zdanie 2.</b> [[(−5)² = 25]] i [[5² = 25]], a 25 − 25 = 0. Prawda."
    ],
    "answer": "F, P.",
    "tip": "(−1) do potęgi parzystej to 1, do nieparzystej −1.",
    "check": [
     "(-1)**101 == -1",
     "(-5)**2 - 5**2 == 0"
    ]
   },
   "twin2": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "(−3)² = −9",
      "ok": "F"
     },
     {
      "t": "−(−2)³ = 8",
      "ok": "P"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[(−3)² = 9]]. Fałsz.",
     "<b>Zdanie 2.</b> [[(−2)³ = −8]], a minus przed nawiasem zmienia znak: 8. Prawda."
    ],
    "answer": "F, P.",
    "tip": "Najpierw potęga, potem minus przed nią.",
    "check": [
     "(-3)**2 == 9",
     "-(-2)**3 == 8"
    ]
   }
  },
  {
   "id": "b10",
   "level": 2,
   "skills": [
    "L4"
   ],
   "type": "pair",
   "q": "Na osi liczbowej zaznaczono liczby a = −4,5 i b = 3,5. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "Odległość między a i b wynosi",
     "opts": {
      "A": "8",
      "B": "1"
     },
     "ok": "A"
    },
    {
     "label": "Środek odcinka o końcach a i b to liczba",
     "opts": {
      "C": "−0,5",
      "D": "0,5"
     },
     "ok": "C"
    }
   ],
   "sol": [
    "Odległość: [[3,5 − (−4,5) = 8]]. Odpowiedź B to 4,5 − 3,5, czyli liczby bez minusa.",
    "Środek: [[(−4,5 + 3,5) : 2 = −1 : 2 = −0,5]]."
   ],
   "answer": "A i C.",
   "tip": "Sprawdź środek: od −4,5 do −0,5 jest 4 i od −0,5 do 3,5 też 4.",
   "check": [
    "3.5 - (-4.5) == 8",
    "(-4.5 + 3.5)/2 == -0.5"
   ],
   "twin": {
    "type": "pair",
    "q": "Na osi liczbowej zaznaczono liczby a = −6,5 i b = 1,5. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Odległość między a i b wynosi",
      "opts": {
       "A": "5",
       "B": "8"
      },
      "ok": "B"
     },
     {
      "label": "Środek odcinka o końcach a i b to liczba",
      "opts": {
       "C": "2,5",
       "D": "−2,5"
      },
      "ok": "D"
     }
    ],
    "sol": [
     "Odległość: [[1,5 − (−6,5) = 8]].",
     "Środek: [[(−6,5 + 1,5) : 2 = −5 : 2 = −2,5]]."
    ],
    "answer": "B i D.",
    "tip": "Gdy suma końców jest ujemna, środek też jest ujemny.",
    "check": [
     "1.5 - (-6.5) == 8",
     "(-6.5 + 1.5)/2 == -2.5"
    ]
   },
   "twin2": {
    "type": "pair",
    "q": "Na osi liczbowej zaznaczono liczby a = −2,5 i b = 5,5. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Odległość między a i b wynosi",
      "opts": {
       "A": "3",
       "B": "8"
      },
      "ok": "B"
     },
     {
      "label": "Środek odcinka o końcach a i b to liczba",
      "opts": {
       "C": "1,5",
       "D": "4"
      },
      "ok": "C"
     }
    ],
    "sol": [
     "Odległość: [[5,5 − (−2,5) = 8]]. 3 to 5,5 − 2,5.",
     "Środek: [[(−2,5 + 5,5) : 2 = 1,5]]. 4 to połowa odległości."
    ],
    "answer": "B i C.",
    "tip": "Środek to średnia końców.",
    "check": [
     "5.5 - (-2.5) == 8",
     "(-2.5 + 5.5)/2 == 1.5"
    ]
   }
  },
  {
   "id": "b11",
   "level": 2,
   "skills": [
    "L2",
    "L4"
   ],
   "type": "fields",
   "q": "W styczniu najniższa temperatura wyniosła −17°C, a najwyższa 6°C.",
   "fields": [
    {
     "label": "O ile stopni różniły się te temperatury?",
     "ans": 23,
     "show": "23",
     "why": [
      [
       11,
       "Od większej odejmij mniejszą: 6 − (−17) = 6 + 17 = 23."
      ]
     ]
    },
    {
     "label": "Jaka temperatura leży dokładnie pośrodku?",
     "ans": -5.5,
     "unit": "°C",
     "show": "−5,5°C",
     "why": [
      [
       -11,
       "−11 to suma. Środek to połowa sumy: −5,5."
      ]
     ]
    }
   ],
   "sol": [
    "Różnica: [[6 − (−17) = 6 + 17 = 23]] stopnie.",
    "Środek: [[(−17 + 6) : 2 = −11 : 2 = −5,5]]°C."
   ],
   "answer": "23 stopnie, środek −5,5°C.",
   "tip": "Termometr to pionowa oś liczbowa. Liczysz na nim tak samo.",
   "check": [
    "6 - (-17) == 23",
    "(-17 + 6)/2 == -5.5"
   ],
   "twin": {
    "type": "fields",
    "q": "W lutym najniższa temperatura wyniosła −12°C, a najwyższa 9°C.",
    "fields": [
     {
      "label": "O ile stopni różniły się te temperatury?",
      "ans": 21,
      "show": "21"
     },
     {
      "label": "Jaka temperatura leży dokładnie pośrodku?",
      "ans": -1.5,
      "unit": "°C",
      "show": "−1,5°C"
     }
    ],
    "sol": [
     "Różnica: [[9 − (−12) = 21]].",
     "Środek: [[(−12 + 9) : 2 = −3 : 2 = −1,5]]."
    ],
    "answer": "21 stopni, środek −1,5°C.",
    "tip": "Różnica: odejmij, środek: dodaj i podziel przez 2.",
    "check": [
     "9 - (-12) == 21",
     "(-12 + 9)/2 == -1.5"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "W grudniu najniższa temperatura wyniosła −21°C, a najwyższa 5°C.",
    "fields": [
     {
      "label": "O ile stopni różniły się te temperatury?",
      "ans": 26,
      "show": "26",
      "why": [
       [
        16,
        "5 − (−21) = 5 + 21 = 26."
       ]
      ]
     },
     {
      "label": "Jaka temperatura leży dokładnie pośrodku?",
      "ans": -8,
      "unit": "°C",
      "show": "−8°C"
     }
    ],
    "sol": [
     "[[5 − (−21) = 26]].",
     "[[(−21 + 5) : 2 = −16 : 2 = −8]]."
    ],
    "answer": "26 stopni, środek −8°C.",
    "tip": "Różnica: odejmij, środek: średnia.",
    "check": [
     "5 - (-21) == 26",
     "(-21 + 5)/2 == -8"
    ]
   }
  },
  {
   "id": "c5",
   "level": 3,
   "skills": [
    "L6",
    "L8"
   ],
   "type": "tn",
   "q": "Czy liczba MMXXVI jest o 2 000 większa od liczby XXVI? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "T",
   "reasons": {
    "1": "MMXXVI = 2 026 i XXVI = 26, a 2 026 − 26 = 2 000",
    "2": "MMXXVI ma dwa znaki M więcej, a M = 100",
    "3": "MMXXVI = 2 026 i XXVI = 26, a 2 026 : 26 ≈ 78"
   },
   "okReason": "1",
   "sol": [
    "MMXXVI = 2 026, XXVI = 26.",
    "„O ile większa” to odejmowanie: [[2 026 − 26 = 2 000]]. Tak.",
    "Uzasadnienie 2 ma zły fakt (M = 1 000), a 3 odpowiada na pytanie „ile razy”."
   ],
   "answer": "T, uzasadnienie 1.",
   "tip": "Uważaj na „o ile” i „ile razy” także w zadaniach z liczbami rzymskimi.",
   "check": [
    "roman(2026) == 'MMXXVI'",
    "2026 - 26 == 2000"
   ],
   "twin": {
    "type": "tn",
    "q": "Czy liczba CDXC jest dwa razy większa od liczby CCXL? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "N",
    "reasons": {
     "1": "CDXC = 490 i CCXL = 240, a 2 · 240 = 480",
     "2": "CDXC = 490 i CCXL = 245",
     "3": "CDXC = 610 i CCXL = 240"
    },
    "okReason": "1",
    "sol": [
     "CDXC = 400 + 90 = 490. CCXL = 200 + 40 = 240.",
     "Dwa razy 240 to [[480]], a nie 490. Nie.",
     "W uzasadnieniu 2 źle odczytano CCXL, a w 3 źle odczytano CDXC (CD to 400, a nie 600)."
    ],
    "answer": "N, uzasadnienie 1.",
    "tip": "CD = 400, bo C stoi przed D.",
    "check": [
     "roman(490) == 'CDXC'",
     "roman(240) == 'CCXL'",
     "2*240 == 480"
    ]
   },
   "twin2": {
    "type": "tn",
    "q": "Czy liczba MDCCC jest o 1 000 większa od liczby DCCC? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "T",
    "reasons": {
     "1": "MDCCC = 1 800 i DCCC = 800, a 1 800 − 800 = 1 000",
     "2": "MDCCC ma o jeden znak więcej, a M = 100",
     "3": "MDCCC = 1 800, a 1 800 : 800 = 2,25"
    },
    "okReason": "1",
    "sol": [
     "[[1 800 − 800 = 1 000]]. Tak. Uzasadnienie 2 ma zły fakt (M = 1 000), a 3 odpowiada na „ile razy”."
    ],
    "answer": "T, uzasadnienie 1.",
    "tip": "D = 500, więc DCCC = 800.",
    "check": [
     "roman(1800) == 'MDCCC'",
     "roman(800) == 'DCCC'"
    ]
   }
  },
  {
   "id": "c6",
   "level": 3,
   "skills": [
    "L7",
    "L8"
   ],
   "type": "self",
   "q": "Pan Adam ma 2 000 zł. Chce kupić 48 paczek płytek po 39,90 zł za paczkę. Uzasadnij bez dokładnego liczenia, że wystarczy mu pieniędzy.",
   "criteria": [
    {
     "t": "Zaokrąglono obie liczby w górę: 48 < 50 i 39,90 < 40, i obliczono 50 · 40 = 2 000.",
     "pts": 1
    },
    {
     "t": "Zapisano wniosek: prawdziwy koszt jest mniejszy niż 2 000 zł, bo obie liczby zaokrąglono w górę, więc pieniędzy wystarczy.",
     "pts": 1
    }
   ],
   "sol": [
    "Zaokrąglamy w górę: 48 paczek to mniej niż 50, a 39,90 zł to mniej niż 40 zł.",
    "[[50 · 40 = 2 000]] zł. Prawdziwy koszt jest mniejszy, bo kupuje mniej paczek i każda jest tańsza.",
    "Dokładnie: 48 · 39,90 = 1 915,20 zł, czyli mniej niż 2 000 zł."
   ],
   "answer": "48 · 39,90 < 50 · 40 = 2 000, więc pieniędzy wystarczy.",
   "tip": "W szacowaniu „czy wystarczy” zaokrąglaj w górę. Jeśli nawet wtedy wystarczy, to na pewno wystarczy.",
   "check": [
    "abs(48*39.90 - 1915.2) < 1e-6",
    "50*40 == 2000"
   ]
  },
  {
   "id": "c9",
   "level": 3,
   "skills": [
    "L1",
    "L3"
   ],
   "type": "self",
   "q": "Uzasadnij, że wartość wyrażenia (−2)⁴ − 2⁴ + (−3)² · (−1) jest liczbą ujemną.",
   "criteria": [
    {
     "t": "Obliczono poprawnie potęgi: (−2)⁴ = 16, 2⁴ = 16, (−3)² = 9.",
     "pts": 1
    },
    {
     "t": "Obliczono wartość wyrażenia: 16 − 16 + 9 · (−1) = −9 i zapisano wniosek, że jest ujemna.",
     "pts": 1
    }
   ],
   "sol": [
    "Potęgi: [[(−2)⁴ = 16]], [[2⁴ = 16]], [[(−3)² = 9]].",
    "Mnożenie przed dodawaniem: [[9 · (−1) = −9]].",
    "[[16 − 16 + (−9) = −9]]. −9 < 0, więc wartość jest ujemna."
   ],
   "answer": "Wartość wyrażenia to −9, czyli liczba ujemna.",
   "tip": "Zapisz każdy krok. Za same potęgi dostaniesz już punkt.",
   "check": [
    "(-2)**4 - 2**4 + (-3)**2 * (-1) == -9"
   ]
  },
  {
   "id": "c10",
   "level": 3,
   "skills": [
    "L5",
    "L4"
   ],
   "type": "self",
   "q": "Na osi liczbowej zaznaczono punkty A = −7 i B = 5. Odcinek AB podzielono na 4 równe części punktami K, L i M (w tej kolejności od A). Oblicz współrzędne punktów K, L, M oraz odległość punktu K od zera. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono długość odcinka (12) i długość jednej części (3).",
     "pts": 1
    },
    {
     "t": "Wyznaczono K = −4, L = −1, M = 2.",
     "pts": 1
    },
    {
     "t": "Podano odległość K od zera: 4.",
     "pts": 1
    }
   ],
   "sol": [
    "Długość: [[5 − (−7) = 12]]. Część: [[12 : 4 = 3]].",
    "[[K = −7 + 3 = −4]], [[L = −4 + 3 = −1]], [[M = −1 + 3 = 2]]. Sprawdzenie: M + 3 = 5 = B.",
    "Odległość K od zera to |−4| = [[4]]."
   ],
   "answer": "K = −4, L = −1, M = 2, odległość K od zera to 4.",
   "tip": "3 punkty dzielące wyznaczają 4 części.",
   "check": [
    "(5 - (-7))/4 == 3",
    "-7 + 3 == -4",
    "-7 + 9 == 2"
   ]
  }
 ],
 "test": [
  {
   "id": "t1",
   "skills": [
    "L1"
   ],
   "type": "abcd",
   "q": "Wartość wyrażenia 40 − 16 : 4 · 2 jest równa:",
   "opts": [
    "32",
    "38",
    "12",
    "3"
   ],
   "ok": 0,
   "why": {
    "B": "38 to 40 − 16 : 8. Najpierw pomnożono 4 · 2, a trzeba liczyć od lewej.",
    "C": "12 to (40 − 16) : 4 · 2. Odejmowanie wykonano jako pierwsze.",
    "D": "3 to (40 − 16) : (4 · 2). Dwa błędy naraz."
   },
   "sol": [
    "[[16 : 4 = 4]], [[4 · 2 = 8]], [[40 − 8 = 32]]."
   ],
   "answer": "A, 32.",
   "tip": "Mnożenie i dzielenie od lewej.",
   "check": [
    "40 - 16/4*2 == 32",
    "40 - 16/(4*2) == 38",
    "(40-16)/4*2 == 12",
    "(40-16)/(4*2) == 3"
   ],
   "pts": 1
  },
  {
   "id": "t2",
   "skills": [
    "L2"
   ],
   "type": "fields",
   "q": "Oblicz: −6 − (−10) + (−3)",
   "fields": [
    {
     "label": "Wynik",
     "ans": 1,
     "show": "1"
    }
   ],
   "sol": [
    "[[−6 − (−10) = −6 + 10 = 4]].",
    "[[4 + (−3) = 4 − 3 = 1]]."
   ],
   "answer": "1.",
   "tip": "− (−10) to + 10, a + (−3) to − 3.",
   "check": [
    "-6 - (-10) + (-3) == 1"
   ],
   "pts": 1
  },
  {
   "id": "t3",
   "skills": [
    "L3"
   ],
   "type": "abcd",
   "q": "Wartość wyrażenia (−2)³ − (−2)² jest równa:",
   "opts": [
    "−4",
    "4",
    "12",
    "−12"
   ],
   "ok": 3,
   "why": {
    "A": "−4 to −8 + 4. Ale (−2)² = 4 i to 4 odejmujemy, a nie dodajemy.",
    "B": "4 to 8 − 4. Ale (−2)³ = −8, bo trzy minusy dają minus.",
    "C": "12 to 8 + 4. Oba znaki są źle."
   },
   "sol": [
    "[[(−2)³ = −8]], bo trzy minusy dają minus. [[(−2)² = 4]].",
    "[[−8 − 4 = −12]]."
   ],
   "answer": "D, −12.",
   "tip": "Najpierw policz obie potęgi, potem odejmij.",
   "check": [
    "(-2)**3 - (-2)**2 == -12"
   ],
   "pts": 1
  },
  {
   "id": "t4",
   "skills": [
    "L4"
   ],
   "type": "fields",
   "pts": 2,
   "perField": true,
   "q": "Na osi liczbowej zaznaczono liczby −3,5 i 6.",
   "note": "Każdy dobry wynik to 1 punkt.",
   "fields": [
    {
     "label": "Odległość między nimi",
     "ans": 9.5,
     "show": "9,5"
    },
    {
     "label": "Liczba pośrodku",
     "ans": 1.25,
     "show": "1,25"
    }
   ],
   "sol": [
    "Odległość: [[6 − (−3,5) = 9,5]].",
    "Środek: [[(−3,5 + 6) : 2 = 2,5 : 2 = 1,25]]."
   ],
   "answer": "9,5 i 1,25.",
   "tip": "Środek: dodaj końce i podziel przez 2.",
   "check": [
    "6 - (-3.5) == 9.5",
    "(-3.5 + 6)/2 == 1.25"
   ]
  },
  {
   "id": "t5",
   "skills": [
    "L5"
   ],
   "type": "fields",
   "chart": {
    "kind": "axis",
    "ticks": 5,
    "labels": {
     "0": "−8",
     "5": "7"
    },
    "points": {
     "4": "M"
    },
    "alt": "Odcinek od −8 do 7 podzielony na 5 części, M na czwartej kresce"
   },
   "q": "Odcinek na osi podzielono na 5 równych części. Jaką liczbę oznacza punkt M?",
   "fields": [
    {
     "label": "M",
     "ans": 4,
     "show": "4"
    }
   ],
   "sol": [
    "Długość: [[7 − (−8) = 15]]. Część: [[15 : 5 = 3]].",
    "M: [[−8 + 4 · 3 = 4]]. Albo od drugiej strony: 7 − 3 = 4."
   ],
   "answer": "4.",
   "tip": "Licz części, nie kreski.",
   "check": [
    "-8 + 4*(7-(-8))/5 == 4"
   ],
   "pts": 1
  },
  {
   "id": "t6",
   "skills": [
    "L6"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Zapis MCMXC oznacza liczbę 1 990.",
     "ok": "P"
    },
    {
     "t": "Zapis CDL oznacza liczbę 650.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> M | CM | XC = 1 000 + 900 + 90 = 1 990. Prawda.",
    "<b>Zdanie 2.</b> CD to 400 (C przed D), więc CDL = 400 + 50 = 450. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "C przed D lub M oznacza odejmowanie.",
   "check": [
    "roman(1990) == 'MCMXC'",
    "roman(450) == 'CDL'"
   ],
   "pts": 1
  },
  {
   "id": "t7",
   "skills": [
    "L6"
   ],
   "type": "fields",
   "q": "Zapisz liczbę 2 999 w systemie rzymskim.",
   "fields": [
    {
     "label": "2 999",
     "ans": "MMCMXCIX",
     "show": "MMCMXCIX",
     "text": true
    }
   ],
   "sol": [
    "2 999 = 2 000 + 900 + 90 + 9 = MM + CM + XC + IX = [[MMCMXCIX]].",
    "Zapis MMIM jest niepoprawny: I wolno postawić tylko przed V i X."
   ],
   "answer": "MMCMXCIX.",
   "tip": "Nie skracaj „na skróty”. Rozkładaj na tysiące, setki, dziesiątki i jedności.",
   "check": [
    "roman(2999) == 'MMCMXCIX'"
   ],
   "pts": 1
  },
  {
   "id": "t8",
   "skills": [
    "L7"
   ],
   "type": "abcd",
   "q": "Liczba 15,467 zaokrąglona do części setnych to:",
   "opts": [
    "15,46",
    "15,47",
    "15,5",
    "15,4"
   ],
   "ok": 1,
   "why": {
    "A": "Zaokrąglono w dół, a za cyfrą setnych stoi 7.",
    "C": "15,5 to zaokrąglenie do części dziesiątych.",
    "D": "15,4 to obcięcie liczby, a nie zaokrąglenie."
   },
   "sol": [
    "Cyfra setnych to 6, za nią stoi 7: 15,46|7. Zaokrąglamy w górę: [[15,47]]."
   ],
   "answer": "B, 15,47.",
   "tip": "Setne to druga cyfra po przecinku.",
   "check": [
    "abs(round(15.467, 2) - 15.47) < 1e-9"
   ],
   "pts": 1
  },
  {
   "id": "t9",
   "skills": [
    "L8"
   ],
   "type": "fields",
   "q": "Porównaj liczby 1 200 i 40.",
   "fields": [
    {
     "label": "Ile razy 1 200 jest większe od 40?",
     "ans": 30,
     "show": "30"
    },
    {
     "label": "O ile 1 200 jest większe od 40?",
     "ans": 1160,
     "show": "1 160"
    }
   ],
   "sol": [
    "Ile razy: [[1 200 : 40 = 30]].",
    "O ile: [[1 200 − 40 = 1 160]]."
   ],
   "answer": "30 razy, o 1 160.",
   "tip": "Ile razy: podziel. O ile: odejmij.",
   "check": [
    "1200/40 == 30",
    "1200-40 == 1160"
   ],
   "pts": 1
  },
  {
   "id": "t10",
   "skills": [
    "L3",
    "L1"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "(−1) · (−1) · (−1) · (−1) = 1",
     "ok": "P"
    },
    {
     "t": "−3² + (−3)² = 18",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> Cztery minusy, czyli parzysta liczba: wynik dodatni, 1. Prawda.",
    "<b>Zdanie 2.</b> [[−3² = −9]] i [[(−3)² = 9]], a [[−9 + 9 = 0]]. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Minus bez nawiasu nie wchodzi pod potęgę.",
   "check": [
    "(-1)**4 == 1",
    "-3**2 + (-3)**2 == 0"
   ],
   "pts": 1
  },
  {
   "id": "t11",
   "skills": [
    "L2",
    "L4"
   ],
   "type": "self",
   "q": "W lutym najniższa temperatura wyniosła −13,5°C, a najwyższa 4,5°C. Uzasadnij, że różnica między nimi była większa niż 17 stopni.",
   "criteria": [
    {
     "t": "Obliczono różnicę: 4,5 − (−13,5) = 18 stopni.",
     "pts": 1
    },
    {
     "t": "Zapisano wniosek: 18 > 17, więc różnica była większa niż 17 stopni.",
     "pts": 1
    }
   ],
   "sol": [
    "Różnica: [[4,5 − (−13,5) = 4,5 + 13,5 = 18]] stopni.",
    "18 jest większe od 17, więc różnica była większa niż 17 stopni."
   ],
   "answer": "Różnica wynosi 18 stopni, czyli więcej niż 17.",
   "tip": "W uzasadnieniu zawsze porównaj swój wynik z liczbą z polecenia i zapisz wniosek.",
   "check": [
    "4.5 - (-13.5) == 18"
   ],
   "pts": 2
  },
  {
   "id": "t12",
   "skills": [
    "L1",
    "L3"
   ],
   "type": "fields",
   "pts": 2,
   "perField": true,
   "q": "Oblicz.",
   "note": "Każdy dobry wynik to 1 punkt.",
   "fields": [
    {
     "label": "2 · (−3)² − 4 · (−5)",
     "ans": 38,
     "show": "38"
    },
    {
     "label": "(−24) : 3 − (−2) · 5",
     "ans": 2,
     "show": "2"
    }
   ],
   "sol": [
    "<b>Pierwsze:</b> [[(−3)² = 9]], [[2 · 9 = 18]], [[4 · (−5) = −20]], [[18 − (−20) = 38]].",
    "<b>Drugie:</b> [[(−24) : 3 = −8]], [[(−2) · 5 = −10]], [[−8 − (−10) = 2]]."
   ],
   "answer": "38 i 2.",
   "tip": "Najpierw policz potęgi i iloczyny, na końcu odejmuj.",
   "check": [
    "2*(-3)**2 - 4*(-5) == 38",
    "(-24)/3 - (-2)*5 == 2"
   ]
  }
 ],
 "test_minutes": 35,
 "pass": 13,
 "dzial": "Dział 1: Liczby i działania"
};
