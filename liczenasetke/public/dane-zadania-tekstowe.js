/* Wygenerowane przez zbuduj.py z tresc/zadania-tekstowe.py. Nie edytuj ręcznie. */
window.TEMAT = {
 "slug": "zadania-tekstowe",
 "title": "Zadania tekstowe",
 "sign": "km/h",
 "lead": "Zegar i kalendarz, jednostki długości i masy, skala, prędkość, droga i czas oraz zadania wieloetapowe. Na egzaminie w 2025 roku były zadania o prędkości rowerzysty i o tablicach w skali, a w 2026 roku o drodze między miejscowościami i nasionach na ogródek.",
 "goals": {
  "learn": "7 umiejętności: obliczenia zegarowe i kalendarzowe, jednostki długości i masy, skala, prędkość, droga i czas oraz zadania wieloetapowe.",
  "prereq": "Mnożenie i dzielenie przez 10, 100 i 1 000. Rozgrzewka na początku to sprawdzi.",
  "goal": "Minimum 12 z 14 punktów w teście na koniec tematu."
 },
 "skills": {
  "Z1": "Obliczenia zegarowe",
  "Z2": "Obliczenia kalendarzowe",
  "Z3": "Jednostki długości",
  "Z4": "Jednostki masy",
  "Z5": "Skala",
  "Z6": "Prędkość, droga i czas",
  "Z7": "Zadania wieloetapowe"
 },
 "lessons": [
  {
   "title": "Obliczenia zegarowe",
   "skills": [
    "Z1"
   ],
   "intro": "Czas liczy się inaczej niż zwykłe liczby: godzina ma 60 minut, a nie 100. Stąd większość pomyłek w zadaniach z zegarem.",
   "rule": {
    "t": "Dodając czas, dodawaj osobno godziny i minuty. Gdy minut jest 60 lub więcej, zamień 60 minut na godzinę.",
    "f": [
     "7:45 + 50 min = 7 h 95 min = 8:35",
     "1,5 h = 1 h 30 min",
     "0,25 h = 15 min",
     "90 s = 1 min 30 s"
    ],
    "e": "1,5 h to 1 h 30 min, a nie 1 h 50 min. Część godziny zamieniasz na minuty, mnożąc przez 60."
   },
   "example": {
    "q": "Film zaczął się o 18:40 i trwał 1 h 55 min. O której się skończył?",
    "steps": [
     "Dodajemy godzinę: 18:40 + 1 h = 19:40.",
     "Dodajemy minuty: 19:40 + 55 min = 19 h 95 min.",
     "95 min = 1 h 35 min, więc film skończył się o 20:35."
    ],
    "result": "Film skończył się o 20:35.",
    "tip": "Możesz też dojść do pełnej godziny: 18:40 + 20 min = 19:00, zostaje 1 h 35 min, czyli 20:35.",
    "check": [
     "18*60 + 40 + 115 == 20*60 + 35"
    ]
   },
   "you": [
    {
     "id": "y1",
     "type": "fields",
     "q": "Pociąg odjechał o 9:35 i przyjechał o 12:10. Ile minut trwała podróż?",
     "fields": [
      {
       "label": "Czas (min)",
       "ans": 155,
       "show": "155",
       "why": [
        [
         275,
         "Nie odejmuj godzin jak zwykłych liczb (1 210 − 935). Od 9:35 do 12:10 to 2 h 35 min."
        ],
        [
         235,
         "Od 9:35 do 12:10 to 2 h 35 min = 155 min."
        ]
       ]
      }
     ],
     "sol": [
      "Od 9:35 do 10:00: [[25 min]]. Od 10:00 do 12:10: [[2 h 10 min = 130 min]].",
      "Razem: [[25 + 130 = 155]] minut."
     ],
     "answer": "155 minut.",
     "tip": "Dochodź do pełnych godzin.",
     "check": [
      "(12*60 + 10) - (9*60 + 35) == 155"
     ]
    },
    {
     "id": "y1b",
     "type": "pf",
     "q": "Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "1,25 h to 1 h 15 min.",
       "ok": "P"
      },
      {
       "t": "0,6 h to 60 minut.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> [[0,25 · 60 = 15]] min. Prawda.",
      "<b>Zdanie 2.</b> [[0,6 · 60 = 36]] min. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "Część godziny razy 60 = minuty.",
     "check": [
      "F('0.25')*60 == 15",
      "F('0.6')*60 == 36"
     ]
    }
   ]
  },
  {
   "title": "Obliczenia kalendarzowe",
   "skills": [
    "Z2"
   ],
   "intro": "Miesiące mają różną liczbę dni, a rok przestępny ma 366 dni. W zadaniach pyta się, ile dni minęło albo jaki będzie dzień tygodnia.",
   "rule": {
    "t": "Tydzień ma 7 dni. Żeby znaleźć dzień tygodnia za n dni, policz resztę z dzielenia n przez 7.",
    "f": [
     "30 dni: kwiecień, czerwiec, wrzesień, listopad",
     "luty: 28 dni, w roku przestępnym 29",
     "za 100 dni: 100 = 14 · 7 + 2, czyli 2 dni tygodnia dalej"
    ],
    "e": "Uważaj na „włącznie”: od 3 do 10 maja włącznie to 8 dni, a nie 7."
   },
   "example": {
    "q": "1 września 2026 roku to wtorek. Jaki dzień tygodnia będzie 1 grudnia 2026 roku?",
    "steps": [
     "Od 1 września do 1 grudnia mija: 30 dni września, 31 dni października i 30 dni listopada, razem 91 dni.",
     "91 = 13 · 7, reszta 0. To pełne tygodnie.",
     "Dzień tygodnia się nie zmienia: wtorek."
    ],
    "result": "1 grudnia 2026 roku to wtorek.",
    "tip": "Liczba dni w miesiącu na knykciach: knykieć to 31 dni, dołek między knykciami to 30 dni (a luty 28 albo 29).",
    "check": [
     "__import__('datetime').date(2026, 9, 1).weekday() == 1",
     "__import__('datetime').date(2026, 12, 1).weekday() == 1",
     "30 + 31 + 30 == 91"
    ]
   },
   "you": [
    {
     "id": "y2",
     "type": "abcd",
     "q": "Ile dni trwa okres od 25 lutego do 5 marca 2027 roku włącznie?",
     "opts": [
      "9",
      "10",
      "8",
      "11"
     ],
     "ok": 0,
     "why": {
      "B": "Rok 2027 nie jest przestępny: luty ma 28 dni, a nie 29.",
      "C": "Włącznie: liczysz też 25 lutego i 5 marca.",
      "D": "Luty 2027 ma 28 dni: 4 dni lutego i 5 dni marca."
     },
     "sol": [
      "Luty: 25, 26, 27, 28 – [[4]] dni. Marzec: 1–5 – [[5]] dni.",
      "Razem [[9]] dni."
     ],
     "answer": "A, 9.",
     "tip": "Rok przestępny dzieli się przez 4 (2028 tak, 2027 nie).",
     "check": [
      "(__import__('datetime').date(2027, 3, 5) - __import__('datetime').date(2027, 2, 25)).days + 1 == 9"
     ]
    },
    {
     "id": "y2b",
     "type": "pf",
     "q": "Dziś jest poniedziałek. Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "Za 45 dni będzie czwartek.",
       "ok": "P"
      },
      {
       "t": "Za 70 dni będzie niedziela.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> [[45 = 6 · 7 + 3]]: 3 dni po poniedziałku to czwartek. Prawda.",
      "<b>Zdanie 2.</b> [[70 = 10 · 7]]: pełne tygodnie, więc znów poniedziałek. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "Liczy się tylko reszta z dzielenia przez 7.",
     "check": [
      "45 % 7 == 3",
      "70 % 7 == 0"
     ]
    }
   ]
  },
  {
   "title": "Jednostki długości",
   "skills": [
    "Z3"
   ],
   "intro": "Na egzaminie długości podaje się w różnych jednostkach: mm, cm, dm, m, km. Przed liczeniem zamień wszystko na jedną jednostkę.",
   "rule": {
    "t": "1 km = 1 000 m, 1 m = 10 dm = 100 cm = 1 000 mm, 1 cm = 10 mm.",
    "f": [
     "2,5 km = 2 500 m",
     "35 cm = 0,35 m",
     "4 m 7 cm = 407 cm"
    ],
    "e": "Zamieniając na większą jednostkę, dzielisz. Na mniejszą mnożysz. 4 m 7 cm to 407 cm, a nie 470 cm."
   },
   "example": {
    "q": "Sznurek o długości 3,2 m pocięto na kawałki po 40 cm. Ile kawałków otrzymano?",
    "steps": [
     "Zamieniamy na tę samą jednostkę: 3,2 m = 320 cm.",
     "320 : 40 = 8."
    ],
    "result": "Otrzymano 8 kawałków.",
    "tip": "Zawsze zamieniaj na mniejszą jednostkę, wtedy unikasz ułamków.",
    "check": [
     "F('3.2')*100 == 320",
     "320/40 == 8"
    ]
   },
   "you": [
    {
     "id": "y3",
     "type": "fields",
     "q": "Ile centymetrów ma odcinek długości 2 m 5 cm?",
     "fields": [
      {
       "label": "Długość (cm)",
       "ans": 205,
       "show": "205",
       "why": [
        [
         250,
         "5 cm to nie 50 cm: 2 m 5 cm = 200 cm + 5 cm."
        ],
        [
         25,
         "2 m to 200 cm, a nie 20 cm."
        ]
       ]
      }
     ],
     "sol": [
      "[[2 m = 200 cm]], [[200 + 5 = 205]] cm."
     ],
     "answer": "205 cm.",
     "tip": "1 m = 100 cm.",
     "check": [
      "2*100 + 5 == 205"
     ]
    },
    {
     "id": "y3b",
     "type": "abcd",
     "q": "Która długość jest największa?",
     "opts": [
      "1,2 km",
      "950 m",
      "12 000 cm",
      "1 150 000 mm"
     ],
     "ok": 0,
     "why": {
      "B": "950 m to mniej niż 1 200 m.",
      "C": "12 000 cm = 120 m.",
      "D": "1 150 000 mm = 1 150 m, mniej niż 1 200 m."
     },
     "sol": [
      "W metrach: [[1 200]], [[950]], [[120]], [[1 150]] m."
     ],
     "answer": "A, 1,2 km.",
     "tip": "Porównuj w tej samej jednostce.",
     "check": [
      "F('1.2')*1000 == 1200",
      "12000/100 == 120",
      "1150000/1000 == 1150"
     ]
    }
   ]
  },
  {
   "title": "Jednostki masy",
   "skills": [
    "Z4"
   ],
   "intro": "W sklepie ceny podaje się za kilogram albo za 10 dag. W informatorze CKE jest zadanie z ceną orzechów podaną za dekagramy.",
   "rule": {
    "t": "1 t = 1 000 kg, 1 kg = 100 dag = 1 000 g, 1 dag = 10 g.",
    "f": [
     "0,5 kg = 50 dag = 500 g",
     "35 dag = 0,35 kg",
     "2,3 t = 2 300 kg"
    ],
    "e": "Dekagram to 10 gramów, a nie 100 gramów."
   },
   "example": {
    "q": "10 dag szynki kosztuje 4,20 zł. Ile kosztuje 350 g szynki?",
    "steps": [
     "350 g = 35 dag.",
     "35 dag to 3,5 razy po 10 dag: 3,5 · 4,20 = 14,70 zł."
    ],
    "result": "350 g szynki kosztuje 14,70 zł.",
    "tip": "Przy cenach „za 10 dag” najwygodniej przeliczać wszystko na dekagramy.",
    "check": [
     "F('3.5')*F('4.2') == F('14.7')"
    ]
   },
   "you": [
    {
     "id": "y4",
     "type": "fields",
     "q": "Ile gramów ma 2,4 kg?",
     "fields": [
      {
       "label": "Masa (g)",
       "ans": 2400,
       "show": "2 400",
       "why": [
        [
         240,
         "1 kg = 1 000 g, więc 2,4 kg = 2 400 g."
        ]
       ]
      }
     ],
     "sol": [
      "[[2,4 · 1 000 = 2 400]] g."
     ],
     "answer": "2 400 g.",
     "tip": "Na mniejszą jednostkę mnożysz.",
     "check": [
      "F('2.4')*1000 == 2400"
     ]
    },
    {
     "id": "y4b",
     "type": "pf",
     "q": "Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "25 dag to 0,25 kg.",
       "ok": "P"
      },
      {
       "t": "1,5 t to 150 kg.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> [[25 : 100 = 0,25]]. Prawda.",
      "<b>Zdanie 2.</b> [[1,5 · 1 000 = 1 500]] kg. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "1 t = 1 000 kg.",
     "check": [
      "F(25, 100) == F('0.25')",
      "F('1.5')*1000 == 1500"
     ]
    }
   ]
  },
  {
   "title": "Skala",
   "skills": [
    "Z5"
   ],
   "intro": "Skala mówi, ile razy rysunek jest mniejszy od rzeczywistości. Na egzaminie w 2025 roku było zadanie o dwóch tablicach, z których jedną narysowano w skali 1 : 20.",
   "rule": {
    "t": "Skala 1 : 20 oznacza, że 1 cm na rysunku to 20 cm w rzeczywistości.",
    "f": [
     "rzeczywistość = rysunek · 20",
     "rysunek = rzeczywistość : 20",
     "1 : 50 000 → 1 cm to 50 000 cm = 500 m"
    ],
    "e": "Przy mapach zamieniaj centymetry na metry albo kilometry: 1 km = 100 000 cm."
   },
   "example": {
    "q": "Na mapie w skali 1 : 25 000 odległość między szkołą a domem wynosi 6 cm. Ile to kilometrów?",
    "steps": [
     "W rzeczywistości: 6 cm · 25 000 = 150 000 cm.",
     "150 000 cm = 1 500 m = 1,5 km."
    ],
    "result": "Szkoła jest 1,5 km od domu.",
    "tip": "Szybki sposób: w skali 1 : 25 000 każdy centymetr to 250 m.",
    "check": [
     "6*25000 == 150000",
     "150000/100000 == 1.5"
    ]
   },
   "you": [
    {
     "id": "y5",
     "type": "fields",
     "q": "Stół ma 180 cm długości. Ile centymetrów ma na rysunku w skali 1 : 20?",
     "fields": [
      {
       "label": "Na rysunku (cm)",
       "ans": 9,
       "show": "9",
       "why": [
        [
         3600,
         "Na rysunku długość jest mniejsza: dzielisz przez 20."
        ]
       ]
      }
     ],
     "sol": [
      "[[180 : 20 = 9]] cm."
     ],
     "answer": "9 cm.",
     "tip": "Z rzeczywistości na rysunek: dzielisz.",
     "check": [
      "180/20 == 9"
     ]
    },
    {
     "id": "y5b",
     "type": "abcd",
     "q": "Na planie w skali 1 : 200 pokój ma wymiary 2 cm na 2,5 cm. Jakie wymiary ma naprawdę?",
     "opts": [
      "4 m na 5 m",
      "40 cm na 50 cm",
      "2 m na 2,5 m",
      "400 m na 500 m"
     ],
     "ok": 0,
     "why": {
      "B": "2 cm · 200 = 400 cm = 4 m, a nie 40 cm.",
      "C": "Skala 1 : 200 oznacza 200 razy więcej, a nie 100 razy.",
      "D": "400 cm to 4 m, a nie 400 m."
     },
     "sol": [
      "[[2 · 200 = 400]] cm = 4 m, [[2,5 · 200 = 500]] cm = 5 m."
     ],
     "answer": "A, 4 m na 5 m.",
     "tip": "1 m = 100 cm.",
     "check": [
      "2*200 == 400",
      "F('2.5')*200 == 500"
     ]
    }
   ]
  },
  {
   "title": "Prędkość, droga i czas",
   "skills": [
    "Z6"
   ],
   "intro": "Trzy wielkości i jeden wzór. Na egzaminie w 2025 roku trzeba było obliczyć czas jazdy rowerzysty z prędkością 5 m/s, a w 2026 roku było zadanie otwarte o drodze między miejscowościami.",
   "rule": {
    "t": "droga = prędkość · czas, prędkość = droga : czas, czas = droga : prędkość",
    "f": [
     "s = v · t",
     "v = s : t",
     "t = s : v",
     "1 m/s = 3,6 km/h"
    ],
    "e": "Jednostki muszą do siebie pasować: przy km/h czas w godzinach, przy m/s w sekundach. 20 minut to 1/3 h, a nie 0,2 h."
   },
   "example": {
    "q": "Rowerzysta pokonał odcinek 100 m z prędkością 5 m/s. Ile trwała jazda? Z jaką prędkością jechał w km/h? (Egzamin 2025, zadanie 9.)",
    "steps": [
     "t = s : v = 100 : 5 = 20 s.",
     "W godzinie jest 3 600 s, więc w godzinę przejechałby 5 · 3 600 = 18 000 m = 18 km.",
     "5 m/s = 18 km/h."
    ],
    "result": "Jazda trwała 20 sekund, a prędkość to 18 km/h.",
    "tip": "Zamiana m/s na km/h: mnożysz przez 3,6. Z km/h na m/s: dzielisz przez 3,6.",
    "check": [
     "100/5 == 20",
     "5*3600/1000 == 18",
     "5*F('3.6') == 18"
    ]
   },
   "you": [
    {
     "id": "y6",
     "type": "fields",
     "q": "Samochód jechał 45 minut z prędkością 80 km/h. Jaką drogę przejechał?",
     "fields": [
      {
       "label": "Droga (km)",
       "ans": 60,
       "show": "60",
       "why": [
        [
         3600,
         "45 minut to 0,75 h. Prędkość jest w kilometrach na godzinę, a nie na minutę."
        ]
       ]
      }
     ],
     "sol": [
      "[[45 min = 0,75 h]].",
      "[[s = 80 · 0,75 = 60]] km."
     ],
     "answer": "60 km.",
     "tip": "45 minut to 3/4 godziny.",
     "check": [
      "80*F('0.75') == 60"
     ]
    },
    {
     "id": "y6b",
     "type": "abcd",
     "q": "Pieszy idzie z prędkością 5 km/h. Ile czasu zajmie mu przejście 2 km?",
     "opts": [
      "24 min",
      "2 h 30 min",
      "40 min",
      "10 min"
     ],
     "ok": 0,
     "why": {
      "B": "Czas to droga : prędkość, czyli 2 : 5, a nie 5 : 2.",
      "C": "0,4 h to 24 minuty, a nie 40 minut.",
      "D": "2 · 5 = 10 to nie jest czas."
     },
     "sol": [
      "[[t = 2 : 5 = 0,4]] h.",
      "[[0,4 · 60 = 24]] min."
     ],
     "answer": "A, 24 min.",
     "tip": "Na koniec zamień godziny na minuty.",
     "check": [
      "F(2, 5)*60 == 24"
     ]
    }
   ]
  },
  {
   "title": "Zadania wieloetapowe",
   "skills": [
    "Z7"
   ],
   "intro": "W zadaniach otwartych zwykle trzeba zrobić kilka kroków: policzyć pole, potem liczbę opakowań, potem koszt. Na egzaminie w 2026 roku takie było zadanie o nasionach na łąkę kwietną.",
   "rule": {
    "t": "Wypisz, czego szukasz i co wiesz. Rozplanuj kroki. Liczbę opakowań, puszek czy autobusów zaokrąglaj w górę.",
    "f": [
     "135 m² : 25 m² = 5,4 → 6 opakowań",
     "130 osób : 48 miejsc ≈ 2,7 → 3 autokary"
    ],
    "e": "Opakowań nie kupuje się w kawałkach: 5,4 opakowania to 6 opakowań, bo 5 by nie wystarczyło."
   },
   "example": {
    "q": "Ogródek ma kształt trapezu o podstawach 18 m i 12 m oraz wysokości 9 m. Jedno opakowanie nasion wystarcza na obsianie 25 m² i kosztuje 23,80 zł. Ile trzeba zapłacić za nasiona na cały ogródek? (Na podstawie zadania 19 z egzaminu 2026.)",
    "steps": [
     "Pole ogródka: (18 + 12) · 9 : 2 = 135 m².",
     "Opakowania: 135 : 25 = 5,4. Pięć opakowań wystarczy na 125 m², więc trzeba kupić 6.",
     "Koszt: 6 · 23,80 = 142,80 zł."
    ],
    "result": "Trzeba zapłacić 142,80 zł.",
    "tip": "Zapisz przy każdym kroku, co liczysz. W zadaniu otwartym punkty są za kolejne etapy.",
    "check": [
     "(18 + 12)*9/2 == 135",
     "F(135, 25) == F('5.4')",
     "6*F('23.8') == F('142.8')"
    ]
   },
   "you": [
    {
     "id": "y7",
     "type": "fields",
     "q": "Na wycieczkę jedzie 130 osób. Autokar ma 48 miejsc. Ile autokarów trzeba zamówić?",
     "fields": [
      {
       "label": "Autokary",
       "ans": 3,
       "show": "3",
       "why": [
        [
         2,
         "2 autokary to 96 miejsc, za mało dla 130 osób."
        ]
       ]
      }
     ],
     "sol": [
      "[[130 : 48 ≈ 2,7]]. Dwa autokary mają 96 miejsc, więc potrzebne są [[3]]."
     ],
     "answer": "3 autokary.",
     "tip": "Przy „ile potrzeba” zaokrąglasz w górę.",
     "check": [
      "2*48 < 130 <= 3*48"
     ]
    },
    {
     "id": "y7b",
     "type": "fields",
     "q": "Ściana ma wymiary 4 m na 2,5 m i trzeba ją pomalować dwa razy. Litr farby wystarcza na 6 m², a farbę sprzedaje się w puszkach po 1 l po 32 zł. Ile trzeba zapłacić za farbę?",
     "fields": [
      {
       "label": "Koszt (zł)",
       "ans": 128,
       "show": "128",
       "why": [
        [
         64,
         "Ściana jest malowana dwa razy: 20 m², czyli 4 puszki."
        ],
        [
         96,
         "20 : 6 ≈ 3,33, więc trzeba kupić 4 puszki, a nie 3."
        ]
       ]
      }
     ],
     "sol": [
      "Pole: [[4 · 2,5 = 10]] m², dwa razy: [[20]] m².",
      "Farba: [[20 : 6 ≈ 3,33]] l, więc [[4]] puszki.",
      "[[4 · 32 = 128]] zł."
     ],
     "answer": "128 zł.",
     "tip": "Najpierw całkowita powierzchnia do pomalowania.",
     "check": [
      "4*F('2.5')*2 == 20",
      "3 < F(20, 6) < 4",
      "4*32 == 128"
     ]
    }
   ]
  }
 ],
 "traps": [
  {
   "name": "Część godziny jak minuty",
   "bad": "1,5 h = 1 h 50 min",
   "good": "0,5 h = 30 min, więc 1,5 h = 1 h 30 min"
  },
  {
   "name": "Km/h razy minuty",
   "bad": "80 km/h · 45 min = 3 600 km",
   "good": "45 min = 0,75 h, 80 · 0,75 = 60 km"
  },
  {
   "name": "Zaokrąglenie w dół",
   "bad": "5,4 opakowania → 5 opakowań",
   "good": "5 opakowań nie wystarczy, trzeba 6"
  }
 ],
 "cheat": {
  "title": "Zadania praktyczne w 7 zasadach",
  "rules": [
   {
    "t": "Zegar: godzina ma 60 minut.",
    "f": [
     "1,5 h = 1 h 30 min",
     "0,25 h = 15 min"
    ],
    "e": "Dochodź do pełnych godzin."
   },
   {
    "t": "Kalendarz: reszta z dzielenia przez 7.",
    "f": [
     "30 dni: IV, VI, IX, XI",
     "luty: 28 (29)"
    ],
    "e": "Uważaj na „włącznie”."
   },
   {
    "t": "Długość.",
    "f": [
     "1 km = 1 000 m",
     "1 m = 100 cm = 1 000 mm"
    ],
    "e": "Na mniejszą jednostkę mnożysz."
   },
   {
    "t": "Masa.",
    "f": [
     "1 kg = 100 dag = 1 000 g",
     "1 t = 1 000 kg"
    ],
    "e": "1 dag = 10 g"
   },
   {
    "t": "Skala.",
    "f": [
     "rzeczywistość = rysunek · skala",
     "1 km = 100 000 cm"
    ],
    "e": "Na rysunku zawsze mniej."
   },
   {
    "t": "Prędkość.",
    "f": [
     "s = v · t",
     "v = s : t",
     "t = s : v",
     "1 m/s = 3,6 km/h"
    ],
    "e": "Jednostki muszą pasować."
   },
   {
    "t": "Zadania wieloetapowe.",
    "f": [
     "co wiem → czego szukam → kroki → odpowiedź"
    ],
    "e": "Opakowania zaokrąglaj w górę."
   }
  ]
 },
 "memo": {
  "title": "Jednostki: tabela do zapamiętania",
  "rows": [
   [
    "1 km",
    "1 m",
    "1 cm",
    "1 kg",
    "1 dag",
    "1 h"
   ],
   [
    "1 000 m",
    "100 cm",
    "10 mm",
    "100 dag",
    "10 g",
    "60 min = 3 600 s"
   ]
  ],
  "note": "1 m/s = 3,6 km/h. Miesiące po 30 dni: kwiecień, czerwiec, wrzesień, listopad. Luty ma 28 dni, a w roku przestępnym 29."
 },
 "warmup": {
  "id": "w0",
  "type": "fields",
  "q": "Rozgrzewka: mnożenie i dzielenie przez 10, 100 i 1 000.",
  "fields": [
   {
    "label": "3,5 · 1 000",
    "ans": 3500,
    "show": "3 500"
   },
   {
    "label": "450 : 100",
    "ans": 4.5,
    "show": "4,5"
   },
   {
    "label": "0,08 · 100",
    "ans": 8,
    "show": "8"
   }
  ],
  "sol": [
   "<b>3,5 · 1 000</b>: przecinek o 3 miejsca w prawo, [[3 500]].",
   "<b>450 : 100</b>: przecinek o 2 miejsca w lewo, [[4,5]].",
   "<b>0,08 · 100</b> = [[8]]."
  ],
  "answer": "3 500, 4,5 i 8.",
  "tip": "Zamiana jednostek to właśnie takie przesuwanie przecinka.",
  "check": [
   "F('3.5')*1000 == 3500",
   "F(450, 100) == F('4.5')",
   "F('0.08')*100 == 8"
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
    "Z1"
   ],
   "type": "fields",
   "q": "Lekcja zaczęła się o 10:50 i trwała 45 minut. O której się skończyła? Wpisz godzinę i minuty.",
   "fields": [
    {
     "label": "Godzina",
     "ans": 11,
     "show": "11",
     "why": [
      [
       10,
       "10:50 + 45 min to już po 11:00."
      ]
     ]
    },
    {
     "label": "Minuty",
     "ans": 35,
     "show": "35",
     "why": [
      [
       95,
       "95 minut to 1 h 35 min, więc godzina się zmienia."
      ]
     ]
    }
   ],
   "sol": [
    "[[10:50 + 10 min = 11:00]], zostaje 35 min.",
    "Koniec: [[11:35]]."
   ],
   "answer": "11:35.",
   "tip": "Dochodź do pełnej godziny.",
   "check": [
    "10*60 + 50 + 45 == 11*60 + 35"
   ],
   "twin": {
    "type": "fields",
    "q": "Mecz zaczął się o 17:25 i trwał 1 h 50 min. O której się skończył? Wpisz godzinę i minuty.",
    "fields": [
     {
      "label": "Godzina",
      "ans": 19,
      "show": "19"
     },
     {
      "label": "Minuty",
      "ans": 15,
      "show": "15",
      "why": [
       [
        75,
        "75 minut to 1 h 15 min."
       ]
      ]
     }
    ],
    "sol": [
     "[[17:25 + 1 h = 18:25]], [[18:25 + 50 min = 19:15]]."
    ],
    "answer": "19:15.",
    "tip": "Najpierw godziny, potem minuty.",
    "check": [
     "17*60 + 25 + 110 == 19*60 + 15"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Autobus odjechał o 22:40 i jechał 2 h 35 min. O której przyjechał? Wpisz godzinę i minuty.",
    "fields": [
     {
      "label": "Godzina",
      "ans": 1,
      "show": "1",
      "why": [
       [
        25,
        "Po 24:00 zaczyna się nowa doba: 25:15 to 1:15."
       ]
      ]
     },
     {
      "label": "Minuty",
      "ans": 15,
      "show": "15"
     }
    ],
    "sol": [
     "[[22:40 + 2 h 35 min = 25:15]], czyli [[1:15]] następnego dnia."
    ],
    "answer": "1:15.",
    "tip": "Doba ma 24 godziny.",
    "check": [
     "(22*60 + 40 + 155) - 24*60 == 1*60 + 15"
    ]
   }
  },
  {
   "id": "a3",
   "level": 1,
   "skills": [
    "Z2"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Rok 2028 jest rokiem przestępnym.",
     "ok": "P"
    },
    {
     "t": "Kwiecień ma 31 dni.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> 2028 dzieli się przez 4. Prawda.",
    "<b>Zdanie 2.</b> Kwiecień ma 30 dni. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "30 dni: kwiecień, czerwiec, wrzesień, listopad.",
   "check": [
    "__import__('calendar').isleap(2028)",
    "__import__('calendar').monthrange(2027, 4)[1] == 30"
   ],
   "twin": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Wrzesień ma 30 dni.",
      "ok": "P"
     },
     {
      "t": "Rok 2027 ma 366 dni.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> Prawda.",
     "<b>Zdanie 2.</b> 2027 nie dzieli się przez 4, więc ma 365 dni. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Rok przestępny: 366 dni.",
    "check": [
     "__import__('calendar').monthrange(2027, 9)[1] == 30",
     "not __import__('calendar').isleap(2027)"
    ]
   },
   "twin2": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Luty 2028 roku ma 29 dni.",
      "ok": "P"
     },
     {
      "t": "Od 1 do 31 stycznia włącznie jest 30 dni.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> 2028 to rok przestępny. Prawda.",
     "<b>Zdanie 2.</b> Włącznie: 31 dni. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Włącznie liczysz pierwszy i ostatni dzień.",
    "check": [
     "__import__('calendar').monthrange(2028, 2)[1] == 29"
    ]
   }
  },
  {
   "id": "a4",
   "level": 1,
   "skills": [
    "Z2"
   ],
   "type": "abcd",
   "q": "Dziś jest środa. Jaki dzień tygodnia będzie za 30 dni?",
   "opts": [
    "czwartek",
    "środa",
    "piątek",
    "sobota"
   ],
   "ok": 2,
   "why": {
    "A": "30 = 4 · 7 + 2. Przesuwasz się o 2 dni, a nie o 1.",
    "B": "30 dni to nie pełne tygodnie: 28 dni to 4 tygodnie, zostają 2 dni.",
    "D": "Reszta z dzielenia 30 przez 7 to 2, a nie 3."
   },
   "sol": [
    "[[30 = 4 · 7 + 2]]. Środa + 2 dni = piątek."
   ],
   "answer": "C, piątek.",
   "tip": "Liczy się reszta z dzielenia przez 7.",
   "check": [
    "30 % 7 == 2"
   ],
   "twin": {
    "type": "abcd",
    "q": "Dziś jest poniedziałek. Jaki dzień tygodnia będzie za 100 dni?",
    "opts": [
     "środa",
     "wtorek",
     "czwartek",
     "poniedziałek"
    ],
    "ok": 0,
    "why": {
     "B": "Reszta z dzielenia 100 przez 7 to 2, a nie 1.",
     "C": "Reszta to 2, a nie 3.",
     "D": "100 nie dzieli się przez 7."
    },
    "sol": [
     "[[100 = 14 · 7 + 2]]. Poniedziałek + 2 = środa."
    ],
    "answer": "A, środa.",
    "tip": "14 · 7 = 98.",
    "check": [
     "100 % 7 == 2"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Dziś jest sobota. Jaki dzień tygodnia będzie za 50 dni?",
    "opts": [
     "sobota",
     "poniedziałek",
     "piątek",
     "niedziela"
    ],
    "ok": 3,
    "why": {
     "A": "49 dni to pełne tygodnie, ale zostaje jeszcze 1 dzień.",
     "B": "Reszta z dzielenia 50 przez 7 to 1, a nie 2.",
     "C": "Liczysz w przód, a nie wstecz."
    },
    "sol": [
     "[[50 = 7 · 7 + 1]]. Sobota + 1 = niedziela."
    ],
    "answer": "D, niedziela.",
    "tip": "7 · 7 = 49.",
    "check": [
     "50 % 7 == 1"
    ]
   }
  },
  {
   "id": "a5",
   "level": 1,
   "skills": [
    "Z3"
   ],
   "type": "fields",
   "q": "Zamień 3,05 m na centymetry.",
   "fields": [
    {
     "label": "cm",
     "ans": 305,
     "show": "305",
     "why": [
      [
       350,
       "0,05 m to 5 cm, a nie 50 cm."
      ],
      [
       30.5,
       "Na mniejszą jednostkę mnożysz przez 100."
      ]
     ]
    }
   ],
   "sol": [
    "[[3,05 · 100 = 305]] cm."
   ],
   "answer": "305 cm.",
   "tip": "1 m = 100 cm.",
   "check": [
    "F('3.05')*100 == 305"
   ],
   "twin": {
    "type": "fields",
    "q": "Zamień 4 250 m na kilometry.",
    "fields": [
     {
      "label": "km",
      "ans": 4.25,
      "show": "4,25",
      "why": [
       [
        4250000,
        "Na większą jednostkę dzielisz: 4 250 : 1 000."
       ]
      ]
     }
    ],
    "sol": [
     "[[4 250 : 1 000 = 4,25]] km."
    ],
    "answer": "4,25 km.",
    "tip": "1 km = 1 000 m.",
    "check": [
     "F(4250, 1000) == F('4.25')"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Zamień 72 mm na centymetry.",
    "fields": [
     {
      "label": "cm",
      "ans": 7.2,
      "show": "7,2",
      "why": [
       [
        720,
        "Na większą jednostkę dzielisz: 72 : 10."
       ]
      ]
     }
    ],
    "sol": [
     "[[72 : 10 = 7,2]] cm."
    ],
    "answer": "7,2 cm.",
    "tip": "1 cm = 10 mm.",
    "check": [
     "F(72, 10) == F('7.2')"
    ]
   }
  },
  {
   "id": "a6",
   "level": 1,
   "skills": [
    "Z3"
   ],
   "type": "abcd",
   "q": "Boisko ma wymiary 90 m na 45 m. Jaki jest jego obwód?",
   "opts": [
    "2,7 km",
    "0,27 km",
    "27 km",
    "0,135 km"
   ],
   "ok": 1,
   "why": {
    "A": "270 m to 0,27 km, bo 1 km = 1 000 m.",
    "C": "Dzielisz przez 1 000, a nie przez 10.",
    "D": "To połowa obwodu: 90 + 45 = 135 m."
   },
   "sol": [
    "[[2 · (90 + 45) = 270]] m = [[0,27]] km."
   ],
   "answer": "B, 0,27 km.",
   "tip": "270 : 1 000 = 0,27.",
   "check": [
    "2*(90 + 45) == 270"
   ],
   "twin": {
    "type": "abcd",
    "q": "Bieżnia ma długość 400 m. Jaką drogę pokona biegacz, który przebiegnie 25 okrążeń?",
    "opts": [
     "1 km",
     "10 km",
     "100 km",
     "4 km"
    ],
    "ok": 1,
    "why": {
     "A": "25 · 400 = 10 000 m, a to 10 km.",
     "C": "10 000 m to 10 km, a nie 100 km.",
     "D": "400 m to jedno okrążenie, a nie 1 km."
    },
    "sol": [
     "[[25 · 400 = 10 000]] m = [[10]] km."
    ],
    "answer": "B, 10 km.",
    "tip": "1 km = 1 000 m.",
    "check": [
     "25*400 == 10000"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Z 5 m taśmy odcięto 3 kawałki po 85 cm. Ile taśmy zostało?",
    "opts": [
     "4,15 m",
     "2,55 m",
     "3,45 m",
     "2,45 m"
    ],
    "ok": 3,
    "why": {
     "A": "Odcięto 3 kawałki, a nie jeden.",
     "B": "2,55 m to długość odciętych kawałków.",
     "C": "3 · 85 = 255 cm, a 500 − 255 = 245 cm."
    },
    "sol": [
     "[[3 · 85 = 255]] cm, [[500 − 255 = 245]] cm = [[2,45]] m."
    ],
    "answer": "D, 2,45 m.",
    "tip": "Zamień 5 m na 500 cm.",
    "check": [
     "500 - 3*85 == 245"
    ]
   }
  },
  {
   "id": "a7",
   "level": 1,
   "skills": [
    "Z4"
   ],
   "type": "fields",
   "q": "Ile dekagramów ma 1,2 kg?",
   "fields": [
    {
     "label": "dag",
     "ans": 120,
     "show": "120",
     "why": [
      [
       12,
       "1 kg = 100 dag, więc 1,2 kg = 120 dag."
      ],
      [
       1200,
       "1 200 to liczba gramów. 1 dag = 10 g."
      ]
     ]
    }
   ],
   "sol": [
    "[[1,2 · 100 = 120]] dag."
   ],
   "answer": "120 dag.",
   "tip": "1 kg = 100 dag.",
   "check": [
    "F('1.2')*100 == 120"
   ],
   "twin": {
    "type": "fields",
    "q": "Ile kilogramów ma 350 dag?",
    "fields": [
     {
      "label": "kg",
      "ans": 3.5,
      "show": "3,5",
      "why": [
       [
        35,
        "1 kg = 100 dag, więc dzielisz przez 100."
       ]
      ]
     }
    ],
    "sol": [
     "[[350 : 100 = 3,5]] kg."
    ],
    "answer": "3,5 kg.",
    "tip": "Na większą jednostkę dzielisz.",
    "check": [
     "F(350, 100) == F('3.5')"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Ile gramów ma 45 dag?",
    "fields": [
     {
      "label": "g",
      "ans": 450,
      "show": "450",
      "why": [
       [
        4500,
        "1 dag = 10 g, a nie 100 g."
       ]
      ]
     }
    ],
    "sol": [
     "[[45 · 10 = 450]] g."
    ],
    "answer": "450 g.",
    "tip": "1 dag = 10 g.",
    "check": [
     "45*10 == 450"
    ]
   }
  },
  {
   "id": "a8",
   "level": 1,
   "skills": [
    "Z4"
   ],
   "type": "abcd",
   "q": "Paczka waży 2,5 kg. W środku jest 8 słoików po 25 dag. Ile waży samo opakowanie?",
   "opts": [
    "50 dag",
    "2,3 kg",
    "22,5 dag",
    "0,5 dag"
   ],
   "ok": 0,
   "why": {
    "B": "8 · 25 dag = 200 dag = 2 kg, a nie 200 g.",
    "C": "Słoików jest 8, a nie 1.",
    "D": "500 g = 50 dag, a nie 0,5 dag."
   },
   "sol": [
    "Słoiki: [[8 · 25 = 200]] dag = 2 kg.",
    "Opakowanie: [[2,5 − 2 = 0,5]] kg = [[50]] dag."
   ],
   "answer": "A, 50 dag.",
   "tip": "Zamień wszystko na dekagramy: 2,5 kg = 250 dag.",
   "check": [
    "250 - 8*25 == 50"
   ],
   "twin": {
    "type": "abcd",
    "q": "Ciężarówka wiezie 3,2 t towaru, w tym 40 skrzyń po 50 kg. Ile ważą pozostałe towary?",
    "opts": [
     "3 150 kg",
     "1,2 kg",
     "1 200 kg",
     "2 000 kg"
    ],
    "ok": 2,
    "why": {
     "A": "Skrzyń jest 40, a nie 1.",
     "B": "3 200 − 2 000 = 1 200 kg, a nie 1,2 kg.",
     "D": "2 000 kg ważą skrzynie."
    },
    "sol": [
     "[[3,2 t = 3 200 kg]], skrzynie: [[40 · 50 = 2 000]] kg.",
     "[[3 200 − 2 000 = 1 200]] kg."
    ],
    "answer": "C, 1 200 kg.",
    "tip": "1 t = 1 000 kg.",
    "check": [
     "3200 - 40*50 == 1200"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Z 1 kg cukru trzy razy wzięto po 15 dag. Ile cukru zostało?",
    "opts": [
     "85 dag",
     "0,55 dag",
     "55 dag",
     "550 dag"
    ],
    "ok": 2,
    "why": {
     "A": "Wzięto 3 razy po 15 dag, a nie raz.",
     "B": "55 dag = 0,55 kg, a nie 0,55 dag.",
     "D": "1 kg to 100 dag, a nie 1 000 dag."
    },
    "sol": [
     "[[100 − 3 · 15 = 55]] dag."
    ],
    "answer": "C, 55 dag.",
    "tip": "1 kg = 100 dag.",
    "check": [
     "100 - 3*15 == 55"
    ]
   }
  },
  {
   "id": "a10",
   "level": 1,
   "skills": [
    "Z5"
   ],
   "type": "abcd",
   "q": "Mała tablica narysowana w skali 1 : 20 jest kwadratem o boku 3 cm. Jaki bok ma ta tablica naprawdę?",
   "opts": [
    "60 cm",
    "6 cm",
    "0,15 cm",
    "23 cm"
   ],
   "ok": 0,
   "why": {
    "B": "Mnożysz przez 20: 3 · 20 = 60.",
    "C": "W rzeczywistości jest więcej niż na rysunku: mnożysz, a nie dzielisz.",
    "D": "Skala to mnożenie, a nie dodawanie."
   },
   "sol": [
    "[[3 · 20 = 60]] cm."
   ],
   "answer": "A, 60 cm.",
   "tip": "Ta tablica była w zadaniu 19 na egzaminie w 2025 roku.",
   "check": [
    "3*20 == 60"
   ],
   "twin": {
    "type": "abcd",
    "q": "Model samochodu w skali 1 : 43 ma 10 cm długości. Jaką długość ma prawdziwy samochód?",
    "opts": [
     "43 m",
     "0,43 m",
     "53 cm",
     "4,3 m"
    ],
    "ok": 3,
    "why": {
     "A": "430 cm to 4,3 m, a nie 43 m.",
     "B": "430 cm to 4,3 m, a nie 0,43 m.",
     "C": "Skala to mnożenie, a nie dodawanie."
    },
    "sol": [
     "[[10 · 43 = 430]] cm = [[4,3]] m."
    ],
    "answer": "D, 4,3 m.",
    "tip": "1 m = 100 cm.",
    "check": [
     "10*43 == 430"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Budynek ma 24 m wysokości. Jaką wysokość ma na rysunku w skali 1 : 400?",
    "opts": [
     "60 cm",
     "6 cm",
     "0,6 cm",
     "9 600 cm"
    ],
    "ok": 1,
    "why": {
     "A": "2 400 cm : 400 = 6 cm.",
     "C": "24 m to 2 400 cm, a 2 400 : 400 = 6.",
     "D": "Na rysunku jest mniej: dzielisz, a nie mnożysz."
    },
    "sol": [
     "[[24 m = 2 400 cm]], [[2 400 : 400 = 6]] cm."
    ],
    "answer": "B, 6 cm.",
    "tip": "Najpierw zamień metry na centymetry.",
    "check": [
     "2400/400 == 6"
    ]
   }
  },
  {
   "id": "b2",
   "level": 2,
   "skills": [
    "Z6",
    "Z1"
   ],
   "type": "fields",
   "q": "Pan Marek wyjechał o 7:40 i przejechał 150 km ze średnią prędkością 60 km/h. O której dojechał? Wpisz godzinę i minuty.",
   "fields": [
    {
     "label": "Godzina",
     "ans": 10,
     "show": "10",
     "why": [
      [
       9,
       "2,5 h to 2 h 30 min: 7:40 + 2:30 = 10:10."
      ]
     ]
    },
    {
     "label": "Minuty",
     "ans": 10,
     "show": "10",
     "why": [
      [
       40,
       "2,5 h to 2 h 30 min. Do minut dodaj 30: 40 + 30 = 70 min, czyli 1 h 10 min."
      ],
      [
       30,
       "0,5 h to 30 minut, ale trzeba je dodać do 7:40: wychodzi 10:10."
      ]
     ]
    }
   ],
   "sol": [
    "[[t = 150 : 60 = 2,5]] h = 2 h 30 min.",
    "[[7:40 + 2 h 30 min = 10:10]]."
   ],
   "answer": "10:10.",
   "tip": "Najpierw czas jazdy, potem godzina.",
   "check": [
    "7*60 + 40 + 150 == 10*60 + 10"
   ],
   "twin": {
    "type": "fields",
    "q": "Pani Ewa wyjechała o 13:15 i przejechała 210 km ze średnią prędkością 84 km/h. O której dojechała? Wpisz godzinę i minuty.",
    "fields": [
     {
      "label": "Godzina",
      "ans": 15,
      "show": "15"
     },
     {
      "label": "Minuty",
      "ans": 45,
      "show": "45"
     }
    ],
    "sol": [
     "[[210 : 84 = 2,5]] h. [[13:15 + 2 h 30 min = 15:45]]."
    ],
    "answer": "15:45.",
    "tip": "0,5 h = 30 min.",
    "check": [
     "F(210, 84) == F('2.5')"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Rowerzysta wyruszył o 8:50 i przejechał 45 km ze średnią prędkością 18 km/h. O której dojechał? Wpisz godzinę i minuty.",
    "fields": [
     {
      "label": "Godzina",
      "ans": 11,
      "show": "11"
     },
     {
      "label": "Minuty",
      "ans": 20,
      "show": "20"
     }
    ],
    "sol": [
     "[[45 : 18 = 2,5]] h. [[8:50 + 2 h 30 min = 11:20]]."
    ],
    "answer": "11:20.",
    "tip": "8:50 + 2 h = 10:50, + 30 min = 11:20.",
    "check": [
     "8*60 + 50 + 150 == 11*60 + 20"
    ]
   }
  },
  {
   "id": "b3",
   "level": 2,
   "skills": [
    "Z2"
   ],
   "type": "fields",
   "q": "Ile dni minęło od 20 marca do 15 czerwca tego samego roku? (Nie licz 20 marca, licz 15 czerwca.)",
   "fields": [
    {
     "label": "Dni",
     "ans": 87,
     "show": "87",
     "why": [
      [
       88,
       "20 marca nie liczymy: od 21 do 31 marca jest 11 dni."
      ],
      [
       86,
       "15 czerwca liczymy."
      ]
     ]
    }
   ],
   "sol": [
    "Marzec: [[11]] dni (21–31), kwiecień [[30]], maj [[31]], czerwiec [[15]].",
    "[[11 + 30 + 31 + 15 = 87]]."
   ],
   "answer": "87 dni.",
   "tip": "Wypisz miesiące po kolei.",
   "check": [
    "(__import__('datetime').date(2026, 6, 15) - __import__('datetime').date(2026, 3, 20)).days == 87"
   ],
   "twin": {
    "type": "fields",
    "q": "Ile dni minęło od 10 października do 5 grudnia tego samego roku? (Nie licz 10 października, licz 5 grudnia.)",
    "fields": [
     {
      "label": "Dni",
      "ans": 56,
      "show": "56"
     }
    ],
    "sol": [
     "Październik: [[21]] dni (11–31), listopad [[30]], grudzień [[5]]. Razem [[56]]."
    ],
    "answer": "56 dni.",
    "tip": "Październik ma 31 dni.",
    "check": [
     "(__import__('datetime').date(2026, 12, 5) - __import__('datetime').date(2026, 10, 10)).days == 56"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Ile dni minęło od 15 stycznia do 1 marca 2027 roku? (Nie licz 15 stycznia, licz 1 marca.)",
    "fields": [
     {
      "label": "Dni",
      "ans": 45,
      "show": "45",
      "why": [
       [
        46,
        "Rok 2027 nie jest przestępny: luty ma 28 dni."
       ]
      ]
     }
    ],
    "sol": [
     "Styczeń: [[16]] dni (16–31), luty [[28]], marzec [[1]]. Razem [[45]]."
    ],
    "answer": "45 dni.",
    "tip": "Sprawdź, czy rok jest przestępny.",
    "check": [
     "(__import__('datetime').date(2027, 3, 1) - __import__('datetime').date(2027, 1, 15)).days == 45"
    ]
   }
  },
  {
   "id": "b4",
   "level": 2,
   "skills": [
    "Z5"
   ],
   "type": "pf",
   "q": "Na planie w skali 1 : 500 działka jest prostokątem o wymiarach 6 cm na 4 cm. Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Działka ma naprawdę wymiary 30 m na 20 m.",
     "ok": "P"
    },
    {
     "t": "Pole działki wynosi 24 m².",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[6 · 500 = 3 000]] cm = 30 m, [[4 · 500 = 2 000]] cm = 20 m. Prawda.",
    "<b>Zdanie 2.</b> [[30 · 20 = 600]] m². 24 cm² to pole na planie. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Pole liczy się z prawdziwych wymiarów.",
   "check": [
    "6*500/100 == 30",
    "30*20 == 600"
   ],
   "twin": {
    "type": "pf",
    "q": "Na planie w skali 1 : 100 pokój jest prostokątem o wymiarach 4,5 cm na 3 cm. Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Pokój ma naprawdę wymiary 4,5 m na 3 m.",
      "ok": "P"
     },
     {
      "t": "Pole pokoju wynosi 13,5 cm².",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> 1 cm na planie to 100 cm = 1 m. Prawda.",
     "<b>Zdanie 2.</b> Pole to [[13,5 m²]], a nie cm². Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Uważaj na jednostki pola.",
    "check": [
     "F('4.5')*3 == F('13.5')"
    ]
   },
   "twin2": {
    "type": "pf",
    "q": "Na mapie w skali 1 : 25 000 jezioro ma długość 8 cm. Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Jezioro ma naprawdę 2 km długości.",
      "ok": "P"
     },
     {
      "t": "Na mapie w skali 1 : 50 000 to jezioro miałoby 16 cm długości.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[8 · 25 000 = 200 000]] cm = 2 km. Prawda.",
     "<b>Zdanie 2.</b> Mapa w skali 1 : 50 000 jest 2 razy „mniejsza”: [[4]] cm. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Większa druga liczba w skali to mniejszy rysunek.",
    "check": [
     "8*25000 == 200000",
     "200000/50000 == 4"
    ]
   }
  },
  {
   "id": "b7",
   "level": 2,
   "skills": [
    "Z3",
    "Z7"
   ],
   "type": "abcd",
   "q": "Wokół prostokątnej działki o wymiarach 25 m na 15 m stawia się płot ze słupkami co 2,5 m, także w rogach. Ile słupków potrzeba?",
   "opts": [
    "33",
    "32",
    "34",
    "16"
   ],
   "ok": 1,
   "why": {
    "A": "Płot jest zamknięty: ostatni słupek to ten sam co pierwszy, więc nie dodajesz 1.",
    "C": "Obwód 80 m : 2,5 m = 32.",
    "D": "16 słupków wystarczyłoby, gdyby stały co 5 m."
   },
   "sol": [
    "Obwód: [[2 · (25 + 15) = 80]] m.",
    "[[80 : 2,5 = 32]] słupki."
   ],
   "answer": "B, 32.",
   "tip": "Na zamkniętym obwodzie: słupków tyle, ile odstępów.",
   "check": [
    "2*(25 + 15)/F('2.5') == 32"
   ],
   "twin": {
    "type": "abcd",
    "q": "Wzdłuż prostej alejki o długości 60 m posadzono drzewa co 5 m, także na początku i na końcu alejki. Ile drzew posadzono?",
    "opts": [
     "12",
     "11",
     "14",
     "13"
    ],
    "ok": 3,
    "why": {
     "A": "Na początku i na końcu też: 60 : 5 + 1 = 13.",
     "B": "Odstępów jest 12, a drzew o jedno więcej.",
     "C": "60 : 5 = 12 odstępów, drzew jest 13."
    },
    "sol": [
     "Odstępów: [[60 : 5 = 12]]. Na prostej drogi drzew jest o 1 więcej: [[13]]."
    ],
    "answer": "D, 13.",
    "tip": "Na odcinku: drzew = odstępy + 1.",
    "check": [
     "60/5 + 1 == 13"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Wokół kwadratowego placu o boku 20 m ustawiono lampy co 4 m, także w rogach. Ile jest lamp?",
    "opts": [
     "20",
     "21",
     "16",
     "24"
    ],
    "ok": 0,
    "why": {
     "B": "Obwód jest zamknięty, więc nie dodajesz 1.",
     "C": "Obwód to 4 · 20 = 80 m, a 80 : 4 = 20.",
     "D": "24 wychodzi, gdy każdy bok liczy się osobno z oboma rogami, a rogi są wspólne."
    },
    "sol": [
     "Obwód: [[80]] m, [[80 : 4 = 20]] lamp."
    ],
    "answer": "A, 20.",
    "tip": "Rogi liczysz tylko raz.",
    "check": [
     "4*20/4 == 20"
    ]
   }
  },
  {
   "id": "b9",
   "level": 2,
   "skills": [
    "Z1"
   ],
   "type": "pair",
   "q": "Film trwa 135 minut i zaczyna się o 19:50. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "Film trwa",
     "opts": {
      "A": "2 h 15 min",
      "B": "1 h 35 min"
     },
     "ok": "A"
    },
    {
     "label": "Film kończy się o",
     "opts": {
      "C": "22:05",
      "D": "21:25"
     },
     "ok": "C"
    }
   ],
   "sol": [
    "[[135 = 120 + 15]], czyli 2 h 15 min. (1 h 35 min to 95 minut.)",
    "[[19:50 + 2 h 15 min = 22:05]]."
   ],
   "answer": "A i C.",
   "tip": "120 minut to 2 godziny.",
   "check": [
    "135 == 2*60 + 15",
    "19*60 + 50 + 135 == 22*60 + 5"
   ],
   "twin": {
    "type": "pair",
    "q": "Maraton trwał 3,2 h, a start był o 9:00. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "3,2 h to",
      "opts": {
       "A": "3 h 12 min",
       "B": "3 h 20 min"
      },
      "ok": "A"
     },
     {
      "label": "Bieg skończył się o",
      "opts": {
       "C": "12:12",
       "D": "12:20"
      },
      "ok": "C"
     }
    ],
    "sol": [
     "[[0,2 h = 0,2 · 60 = 12]] min.",
     "[[9:00 + 3 h 12 min = 12:12]]."
    ],
    "answer": "A i C.",
    "tip": "0,2 h to nie 20 minut.",
    "check": [
     "F('0.2')*60 == 12"
    ]
   },
   "twin2": {
    "type": "pair",
    "q": "Pociąg odjeżdża o 23:35 i jedzie 6 h 40 min. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Pociąg przyjedzie o",
      "opts": {
       "A": "6:15",
       "B": "30:15"
      },
      "ok": "A"
     },
     {
      "label": "Podróż trwa",
      "opts": {
       "C": "400 min",
       "D": "640 min"
      },
      "ok": "C"
     }
    ],
    "sol": [
     "[[23:35 + 6 h 40 min = 30:15]], czyli [[6:15]] następnego dnia.",
     "[[6 · 60 + 40 = 400]] min."
    ],
    "answer": "A i C.",
    "tip": "Po północy liczysz od nowa.",
    "check": [
     "(23*60 + 35 + 400) - 24*60 == 6*60 + 15"
    ]
   }
  },
  {
   "id": "b10",
   "level": 2,
   "skills": [
    "Z6"
   ],
   "type": "pf",
   "q": "Rowerzysta jedzie ze stałą prędkością 18 km/h. Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "W ciągu 20 minut przejedzie 6 km.",
     "ok": "P"
    },
    {
     "t": "Jego prędkość to 18 m/s.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> 20 min = 1/3 h, [[18 : 3 = 6]] km. Prawda.",
    "<b>Zdanie 2.</b> [[18 : 3,6 = 5]] m/s. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "km/h : 3,6 = m/s.",
   "check": [
    "F(18, 3) == 6",
    "18/F('3.6') == 5"
   ],
   "twin": {
    "type": "pf",
    "q": "Samochód jedzie ze stałą prędkością 90 km/h. Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "W ciągu 40 minut przejedzie 60 km.",
      "ok": "P"
     },
     {
      "t": "W ciągu 2 h 30 min przejedzie 200 km.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[90 · 2/3 = 60]] km. Prawda.",
     "<b>Zdanie 2.</b> [[90 · 2,5 = 225]] km. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "40 min = 2/3 h.",
    "check": [
     "90*F(2, 3) == 60",
     "90*F('2.5') == 225"
    ]
   },
   "twin2": {
    "type": "pf",
    "q": "Biegacz biegnie ze stałą prędkością 4 m/s. Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "W ciągu minuty przebiegnie 240 m.",
      "ok": "P"
     },
     {
      "t": "Jego prędkość to 4 km/h.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[4 · 60 = 240]] m. Prawda.",
     "<b>Zdanie 2.</b> [[4 · 3,6 = 14,4]] km/h. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "m/s · 3,6 = km/h.",
    "check": [
     "4*60 == 240",
     "4*F('3.6') == F('14.4')"
    ]
   }
  },
  {
   "id": "b11",
   "level": 2,
   "skills": [
    "Z7"
   ],
   "type": "tn",
   "q": "Pani Ewa ma 100 zł. Chce kupić 3 kg jabłek po 4,50 zł, 2 kg gruszek po 7,20 zł i 5 jogurtów po 3,80 zł. Czy wystarczy jej pieniędzy? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "T",
   "reasons": {
    "1": "zakupy kosztują 13,50 + 14,40 + 19 = 46,90 zł, czyli mniej niż 100 zł",
    "2": "każdy produkt kosztuje mniej niż 10 zł",
    "3": "kupuje tylko 10 rzeczy"
   },
   "okReason": "1",
   "sol": [
    "[[3 · 4,50 = 13,50]], [[2 · 7,20 = 14,40]], [[5 · 3,80 = 19]] zł.",
    "Razem [[46,90]] zł. Tak.",
    "Uzasadnienia 2 i 3 nie pokazują łącznej kwoty."
   ],
   "answer": "T, uzasadnienie 1.",
   "tip": "Policz całość, zanim odpowiesz.",
   "check": [
    "3*F('4.5') + 2*F('7.2') + 5*F('3.8') == F('46.9')"
   ],
   "twin": {
    "type": "tn",
    "q": "Tomek ma 50 zł. Chce kupić 4 zeszyty po 6,90 zł i 3 długopisy po 7,50 zł. Czy wystarczy mu pieniędzy? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "N",
    "reasons": {
     "1": "zakupy kosztują 27,60 + 22,50 = 50,10 zł, czyli więcej niż 50 zł",
     "2": "zeszyt jest tańszy od długopisu",
     "3": "kupuje 7 rzeczy"
    },
    "okReason": "1",
    "sol": [
     "[[4 · 6,90 = 27,60]], [[3 · 7,50 = 22,50]]. Razem [[50,10]] zł. Brakuje 10 groszy. Nie."
    ],
    "answer": "N, uzasadnienie 1.",
    "tip": "Liczy się każdy grosz.",
    "check": [
     "4*F('6.9') + 3*F('7.5') == F('50.1')"
    ]
   },
   "twin2": {
    "type": "tn",
    "q": "Rodzina ma 400 zł na wycieczkę. Chce kupić 4 bilety kolejowe po 62 zł i obiad dla 4 osób po 35 zł za osobę. Czy wystarczy jej pieniędzy? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "T",
    "reasons": {
     "1": "koszt to 248 + 140 = 388 zł, czyli mniej niż 400 zł",
     "2": "bilety są droższe od obiadu",
     "3": "400 dzieli się przez 4"
    },
    "okReason": "1",
    "sol": [
     "[[4 · 62 = 248]], [[4 · 35 = 140]], razem [[388]] zł. Tak."
    ],
    "answer": "T, uzasadnienie 1.",
    "tip": "Zostanie 12 zł.",
    "check": [
     "4*62 + 4*35 == 388"
    ]
   }
  },
  {
   "id": "b12",
   "level": 2,
   "skills": [
    "Z2",
    "Z7"
   ],
   "type": "fields",
   "q": "Pan Adam pracuje od poniedziałku do piątku po 7,5 godziny dziennie. Ile godzin pracuje w ciągu 4 tygodni?",
   "fields": [
    {
     "label": "Godziny",
     "ans": 150,
     "show": "150",
     "why": [
      [
       210,
       "Pracuje 5 dni w tygodniu, a nie 7."
      ]
     ]
    }
   ],
   "sol": [
    "Tydzień: [[5 · 7,5 = 37,5]] h. 4 tygodnie: [[4 · 37,5 = 150]] h."
   ],
   "answer": "150 godzin.",
   "tip": "Od poniedziałku do piątku to 5 dni.",
   "check": [
    "4*5*F('7.5') == 150"
   ],
   "twin": {
    "type": "fields",
    "q": "Ola czyta 25 stron dziennie. Ile dni zajmie jej przeczytanie książki, która ma 420 stron?",
    "fields": [
     {
      "label": "Dni",
      "ans": 17,
      "show": "17",
      "why": [
       [
        16,
        "Po 16 dniach przeczyta 400 stron, zostanie jeszcze 20."
       ],
       [
        16.8,
        "Liczba dni musi być całkowita: 16 dni to za mało."
       ]
      ]
     }
    ],
    "sol": [
     "[[420 : 25 = 16,8]]. Po 16 dniach zostaje jeszcze 20 stron, więc potrzeba [[17]] dni."
    ],
    "answer": "17 dni.",
    "tip": "Zaokrąglasz w górę.",
    "check": [
     "16*25 < 420 <= 17*25"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Z kranu kapie jedna kropla co 2 sekundy, a 20 kropel to 1 ml wody. Ile mililitrów wody wycieknie w ciągu doby?",
    "fields": [
     {
      "label": "Woda (ml)",
      "ans": 2160,
      "show": "2 160",
      "why": [
       [
        4320,
        "Kropla spada co 2 sekundy, więc kropel jest 43 200, a nie 86 400."
       ]
      ]
     }
    ],
    "sol": [
     "Doba: [[24 · 3 600 = 86 400]] s. Kropel: [[86 400 : 2 = 43 200]].",
     "[[43 200 : 20 = 2 160]] ml."
    ],
    "answer": "2 160 ml (ponad 2 litry).",
    "tip": "Doba ma 86 400 sekund.",
    "check": [
     "24*3600/2/20 == 2160"
    ]
   }
  },
  {
   "id": "c1",
   "level": 3,
   "skills": [
    "Z6",
    "Z7"
   ],
   "type": "self",
   "q": "Droga z Olszyny do Brzozowa przez Dębinę ma 123 km. Odcinek z Dębiny do Brzozowa jest o 27 km dłuższy od odcinka z Olszyny do Dębiny. Pan Karol jechał z Olszyny do Dębiny ze średnią prędkością 60 km/h, a z Dębiny do Brzozowa 75 km/h. Ile trwała cała podróż? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono długości odcinków: 48 km i 75 km (np. z równania x + x + 27 = 123).",
     "pts": 1
    },
    {
     "t": "Obliczono czasy jazdy: 48 : 60 = 0,8 h = 48 min oraz 75 : 75 = 1 h.",
     "pts": 1
    },
    {
     "t": "Podano łączny czas: 1 h 48 min.",
     "pts": 1
    }
   ],
   "sol": [
    "[[x + (x + 27) = 123]], [[2x = 96]], [[x = 48]] km. Drugi odcinek: [[75]] km.",
    "Czasy: [[48 : 60 = 0,8]] h = 48 min, [[75 : 75 = 1]] h.",
    "Razem: [[1 h 48 min]]."
   ],
   "answer": "1 h 48 min.",
   "tip": "Zadanie łączy równanie z drogą i czasem, jak zadanie 16 na egzaminie w 2026 roku (tam z innymi danymi).",
   "check": [
    "48 + 75 == 123",
    "F(48, 60)*60 == 48",
    "75/75 == 1"
   ]
  },
  {
   "id": "c2",
   "level": 3,
   "skills": [
    "Z5",
    "Z7"
   ],
   "type": "self",
   "q": "Na ścianie wiszą dwie tablice. Mała, narysowana w skali 1 : 20, jest kwadratem o boku 3 cm. Duża tablica jest prostokątem o rzeczywistych wymiarach 180 cm na 90 cm. Ile razy pole dużej tablicy jest większe od pola małej? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono rzeczywisty bok małej tablicy: 3 · 20 = 60 cm.",
     "pts": 1
    },
    {
     "t": "Obliczono pola: 3 600 cm² i 16 200 cm².",
     "pts": 1
    },
    {
     "t": "Obliczono iloraz: 16 200 : 3 600 = 4,5 raza.",
     "pts": 1
    }
   ],
   "sol": [
    "Mała tablica: [[3 · 20 = 60]] cm, pole [[60 · 60 = 3 600]] cm².",
    "Duża: [[180 · 90 = 16 200]] cm².",
    "[[16 200 : 3 600 = 4,5]]."
   ],
   "answer": "4,5 raza.",
   "tip": "Zbudowane jak zadanie 19 z egzaminu 2025. Pola liczysz zawsze z rzeczywistych wymiarów.",
   "check": [
    "(3*20)**2 == 3600",
    "180*90 == 16200",
    "F(16200, 3600) == F('4.5')"
   ]
  },
  {
   "id": "c6",
   "level": 3,
   "skills": [
    "Z5",
    "Z6"
   ],
   "type": "pair",
   "q": "Na mapie w skali 1 : 40 000 trasa spaceru ma 15 cm. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "Trasa ma w rzeczywistości",
     "opts": {
      "A": "6 km",
      "B": "60 km"
     },
     "ok": "A"
    },
    {
     "label": "Idąc z prędkością 4 km/h, przejdziesz ją w czasie",
     "opts": {
      "C": "1 h 30 min",
      "D": "1 h 50 min"
     },
     "ok": "C"
    }
   ],
   "sol": [
    "[[15 · 40 000 = 600 000]] cm = [[6]] km.",
    "[[6 : 4 = 1,5]] h = 1 h 30 min."
   ],
   "answer": "A i C.",
   "tip": "1,5 h to 1 h 30 min.",
   "check": [
    "15*40000/100000 == 6",
    "F(6, 4) == F('1.5')"
   ],
   "twin": {
    "type": "pair",
    "q": "Na mapie w skali 1 : 20 000 trasa rowerowa ma 18 cm. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Trasa ma w rzeczywistości",
      "opts": {
       "A": "3,6 km",
       "B": "36 km"
      },
      "ok": "A"
     },
     {
      "label": "Jadąc z prędkością 12 km/h, przejedziesz ją w czasie",
      "opts": {
       "C": "18 min",
       "D": "30 min"
      },
      "ok": "C"
     }
    ],
    "sol": [
     "[[18 · 20 000 = 360 000]] cm = [[3,6]] km.",
     "[[3,6 : 12 = 0,3]] h = [[18]] min."
    ],
    "answer": "A i C.",
    "tip": "0,3 h = 0,3 · 60 min.",
    "check": [
     "F(18*20000, 100000) == F('3.6')",
     "F('3.6')/12*60 == 18"
    ]
   },
   "twin2": {
    "type": "pair",
    "q": "Na mapie w skali 1 : 75 000 trasa biegu ma 8 cm. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Trasa ma w rzeczywistości",
      "opts": {
       "A": "6 km",
       "B": "0,6 km"
      },
      "ok": "A"
     },
     {
      "label": "Biegnąc z prędkością 10 km/h, pokonasz ją w czasie",
      "opts": {
       "C": "36 min",
       "D": "60 min"
      },
      "ok": "C"
     }
    ],
    "sol": [
     "[[8 · 75 000 = 600 000]] cm = [[6]] km.",
     "[[6 : 10 = 0,6]] h = [[36]] min."
    ],
    "answer": "A i C.",
    "tip": "0,6 h to nie 60 minut.",
    "check": [
     "8*75000/100000 == 6",
     "F(6, 10)*60 == 36"
    ]
   }
  },
  {
   "id": "c8",
   "level": 3,
   "skills": [
    "Z2"
   ],
   "type": "tn",
   "q": "1 stycznia 2027 roku wypada w piątek. Czy 1 marca 2027 roku wypada w poniedziałek? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "T",
   "reasons": {
    "1": "od 1 stycznia do 1 marca mija 31 + 28 = 59 dni, a 59 = 8 · 7 + 3, więc dzień tygodnia przesuwa się o 3 dni",
    "2": "styczeń ma 31 dni",
    "3": "rok 2027 nie jest przestępny"
   },
   "okReason": "1",
   "sol": [
    "[[31 + 28 = 59]] dni, [[59 = 8 · 7 + 3]]. Piątek + 3 dni = poniedziałek. Tak.",
    "Uzasadnienia 2 i 3 są prawdziwe, ale same nie prowadzą do odpowiedzi."
   ],
   "answer": "T, uzasadnienie 1.",
   "tip": "Sprawdzisz to w kalendarzu na 2027 rok.",
   "check": [
    "__import__('datetime').date(2027, 1, 1).weekday() == 4",
    "__import__('datetime').date(2027, 3, 1).weekday() == 0",
    "59 % 7 == 3"
   ],
   "twin": {
    "type": "tn",
    "q": "1 września 2026 roku to wtorek. Czy Wigilia, 24 grudnia 2026 roku, wypada w czwartek? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "T",
    "reasons": {
     "1": "od 1 września do 24 grudnia mija 29 + 31 + 30 + 24 = 114 dni, a 114 = 16 · 7 + 2",
     "2": "grudzień ma 31 dni",
     "3": "24 jest liczbą parzystą"
    },
    "okReason": "1",
    "sol": [
     "[[114 = 16 · 7 + 2]]. Wtorek + 2 = czwartek. Tak."
    ],
    "answer": "T, uzasadnienie 1.",
    "tip": "Od 1 września do 30 września mija 29 dni.",
    "check": [
     "__import__('datetime').date(2026, 12, 24).weekday() == 3",
     "114 % 7 == 2"
    ]
   },
   "twin2": {
    "type": "tn",
    "q": "1 stycznia 2027 roku wypada w piątek. Czy 11 maja 2027 roku, dzień egzaminu z matematyki, wypada we wtorek? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "T",
    "reasons": {
     "1": "od 1 stycznia do 11 maja mija 31 + 28 + 31 + 30 + 10 = 130 dni, a 130 = 18 · 7 + 4",
     "2": "maj ma 31 dni",
     "3": "egzaminy zawsze są we wtorki"
    },
    "okReason": "1",
    "sol": [
     "[[130 = 18 · 7 + 4]]. Piątek + 4 dni = wtorek. Tak.",
     "Uzasadnienie 3 jest nieprawdziwe: egzaminy bywają w różne dni tygodnia."
    ],
    "answer": "T, uzasadnienie 1.",
    "tip": "Od 1 maja do 11 maja mija 10 dni.",
    "check": [
     "__import__('datetime').date(2027, 5, 11).weekday() == 1",
     "130 % 7 == 4"
    ]
   }
  },
  {
   "id": "c10",
   "level": 3,
   "skills": [
    "Z4",
    "Z7"
   ],
   "type": "self",
   "q": "Sklep kupił 2,4 t jabłek po 1,80 zł za kilogram. 5% jabłek zgniło. Resztę sprzedano po 2,50 zł za kilogram. Ile złotych zarobił sklep? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Zamieniono 2,4 t na 2 400 kg i obliczono koszt zakupu: 4 320 zł.",
     "pts": 1
    },
    {
     "t": "Obliczono, ile sprzedano (2 280 kg), i przychód: 5 700 zł.",
     "pts": 1
    },
    {
     "t": "Obliczono zysk: 5 700 − 4 320 = 1 380 zł.",
     "pts": 1
    }
   ],
   "sol": [
    "[[2,4 t = 2 400 kg]], zakup: [[2 400 · 1,80 = 4 320]] zł.",
    "Sprzedano 95%: [[0,95 · 2 400 = 2 280]] kg, przychód: [[2 280 · 2,50 = 5 700]] zł.",
    "Zysk: [[1 380]] zł."
   ],
   "answer": "1 380 zł.",
   "tip": "Zysk = przychód − koszt.",
   "check": [
    "2400*F('1.8') == 4320",
    "F('0.95')*2400 == 2280",
    "2280*F('2.5') == 5700",
    "5700 - 4320 == 1380"
   ]
  },
  {
   "id": "c11",
   "level": 3,
   "skills": [
    "Z1",
    "Z7"
   ],
   "type": "self",
   "q": "Kasia gra na pianinie od poniedziałku do piątku po 40 minut, a w sobotę i niedzielę po 1 h 15 min. Ile czasu gra w ciągu 4 tygodni? Podaj wynik w godzinach i minutach. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono czas w ciągu tygodnia: 5 · 40 + 2 · 75 = 350 min.",
     "pts": 1
    },
    {
     "t": "Obliczono czas w ciągu 4 tygodni: 1 400 min.",
     "pts": 1
    },
    {
     "t": "Zamieniono na godziny i minuty: 23 h 20 min.",
     "pts": 1
    }
   ],
   "sol": [
    "Tydzień: [[5 · 40 = 200]] min i [[2 · 75 = 150]] min, razem [[350]] min.",
    "4 tygodnie: [[1 400]] min.",
    "[[1 400 = 23 · 60 + 20]], czyli [[23 h 20 min]]."
   ],
   "answer": "23 h 20 min.",
   "tip": "1 h 15 min = 75 min.",
   "check": [
    "4*(5*40 + 2*75) == 1400",
    "1400 == 23*60 + 20"
   ]
  }
 ],
 "test": [
  {
   "id": "t1",
   "skills": [
    "Z1"
   ],
   "type": "abcd",
   "q": "Ile minut to 1,6 h?",
   "opts": [
    "160 min",
    "106 min",
    "96 min",
    "16 min"
   ],
   "ok": 2,
   "why": {
    "A": "Godzina ma 60 minut, a nie 100.",
    "B": "0,6 h = 36 min, a nie 46 min.",
    "D": "Mnożysz przez 60: 1,6 · 60 = 96."
   },
   "sol": [
    "[[1,6 · 60 = 96]] min."
   ],
   "answer": "C, 96 min.",
   "tip": "Godziny · 60.",
   "check": [
    "F('1.6')*60 == 96"
   ],
   "pts": 1
  },
  {
   "id": "t2",
   "skills": [
    "Z1"
   ],
   "type": "fields",
   "q": "Lekcja trwała 45 minut i skończyła się o 12:35. O której się zaczęła? Wpisz godzinę i minuty.",
   "fields": [
    {
     "label": "Godzina",
     "ans": 11,
     "show": "11"
    },
    {
     "label": "Minuty",
     "ans": 50,
     "show": "50"
    }
   ],
   "sol": [
    "[[12:35 − 35 min = 12:00]], [[12:00 − 10 min = 11:50]]."
   ],
   "answer": "11:50.",
   "tip": "Cofaj się do pełnej godziny.",
   "check": [
    "12*60 + 35 - 45 == 11*60 + 50"
   ],
   "pts": 1
  },
  {
   "id": "t3",
   "skills": [
    "Z2"
   ],
   "type": "abcd",
   "q": "Dziś jest czwartek. Jaki dzień tygodnia będzie za 40 dni?",
   "opts": [
    "poniedziałek",
    "środa",
    "wtorek",
    "niedziela"
   ],
   "ok": 2,
   "why": {
    "A": "Reszta z dzielenia 40 przez 7 to 5, a nie 4.",
    "B": "Reszta to 5, a nie 6.",
    "D": "Reszta to 5, a nie 3."
   },
   "sol": [
    "[[40 = 5 · 7 + 5]]. Czwartek + 5 dni = wtorek."
   ],
   "answer": "C, wtorek.",
   "tip": "Liczy się reszta z dzielenia przez 7.",
   "check": [
    "40 % 7 == 5"
   ],
   "pts": 1
  },
  {
   "id": "t4",
   "skills": [
    "Z3"
   ],
   "type": "fields",
   "q": "Ile centymetrów ma 0,45 km?",
   "fields": [
    {
     "label": "cm",
     "ans": 45000,
     "show": "45 000"
    }
   ],
   "sol": [
    "[[0,45 km = 450 m = 45 000]] cm."
   ],
   "answer": "45 000 cm.",
   "tip": "1 km = 100 000 cm.",
   "check": [
    "F('0.45')*100000 == 45000"
   ],
   "pts": 1
  },
  {
   "id": "t5",
   "skills": [
    "Z4"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "3,5 kg to 350 dag.",
     "ok": "P"
    },
    {
     "t": "40 dag to 4 kg.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[3,5 · 100 = 350]]. Prawda.",
    "<b>Zdanie 2.</b> 40 dag = 0,4 kg. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "1 kg = 100 dag.",
   "check": [
    "F('3.5')*100 == 350",
    "F(40, 100) == F('0.4')"
   ],
   "pts": 1
  },
  {
   "id": "t6",
   "skills": [
    "Z5"
   ],
   "type": "fields",
   "q": "Na mapie w skali 1 : 60 000 odległość wynosi 5 cm. Ile to kilometrów?",
   "fields": [
    {
     "label": "km",
     "ans": 3,
     "show": "3"
    }
   ],
   "sol": [
    "[[5 · 60 000 = 300 000]] cm = [[3]] km."
   ],
   "answer": "3 km.",
   "tip": "1 km = 100 000 cm.",
   "check": [
    "5*60000/100000 == 3"
   ],
   "pts": 1
  },
  {
   "id": "t7",
   "skills": [
    "Z6"
   ],
   "type": "fields",
   "q": "Samochód jedzie z prędkością 75 km/h. Jaką drogę przejedzie w ciągu 1 h 12 min?",
   "fields": [
    {
     "label": "Droga (km)",
     "ans": 90,
     "show": "90"
    }
   ],
   "sol": [
    "[[1 h 12 min = 1,2 h]].",
    "[[75 · 1,2 = 90]] km."
   ],
   "answer": "90 km.",
   "tip": "12 min = 0,2 h.",
   "check": [
    "75*F('1.2') == 90"
   ],
   "pts": 1
  },
  {
   "id": "t8",
   "skills": [
    "Z6"
   ],
   "type": "abcd",
   "q": "Ile to jest 20 m/s w km/h?",
   "opts": [
    "72 km/h",
    "20 km/h",
    "5,56 km/h",
    "1 200 km/h"
   ],
   "ok": 0,
   "why": {
    "B": "20 m/s to nie 20 km/h.",
    "C": "Mnożysz przez 3,6, a nie dzielisz.",
    "D": "20 · 60 = 1 200 to metry na minutę."
   },
   "sol": [
    "[[20 · 3,6 = 72]] km/h."
   ],
   "answer": "A, 72 km/h.",
   "tip": "m/s · 3,6 = km/h.",
   "check": [
    "20*F('3.6') == 72"
   ],
   "pts": 1
  },
  {
   "id": "t9",
   "skills": [
    "Z5"
   ],
   "type": "pair",
   "q": "Rysunek wykonano w skali 1 : 50. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "Stół o długości 1,5 m ma na rysunku",
     "opts": {
      "A": "3 cm",
      "B": "30 cm"
     },
     "ok": "A"
    },
    {
     "label": "Szafa, która na rysunku ma 4 cm, ma naprawdę",
     "opts": {
      "C": "2 m",
      "D": "20 cm"
     },
     "ok": "C"
    }
   ],
   "sol": [
    "[[150 cm : 50 = 3]] cm.",
    "[[4 · 50 = 200]] cm = 2 m."
   ],
   "answer": "A i C.",
   "tip": "Na rysunek dzielisz, w rzeczywistość mnożysz.",
   "check": [
    "150/50 == 3",
    "4*50 == 200"
   ],
   "pts": 1
  },
  {
   "id": "t10",
   "skills": [
    "Z7"
   ],
   "type": "tn",
   "q": "Na wycieczkę jedzie 115 osób, a autokar ma 50 miejsc. Czy wystarczą 2 autokary? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "N",
   "reasons": {
    "1": "2 autokary mają 100 miejsc, a osób jest 115",
    "2": "115 to liczba nieparzysta",
    "3": "50 to liczba parzysta"
   },
   "okReason": "1",
   "sol": [
    "[[2 · 50 = 100]] miejsc to za mało dla 115 osób. Nie. Potrzebne są 3 autokary."
   ],
   "answer": "N, uzasadnienie 1.",
   "tip": "Porównaj liczbę miejsc z liczbą osób.",
   "check": [
    "2*50 < 115"
   ],
   "pts": 1
  },
  {
   "id": "t11",
   "skills": [
    "Z6",
    "Z1"
   ],
   "type": "self",
   "q": "Pan Jan wyjechał o 8:15 i przejechał 210 km ze średnią prędkością 70 km/h. Po drodze zatrzymał się na 25 minut. O której dojechał? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono czas jazdy: 210 : 70 = 3 h.",
     "pts": 1
    },
    {
     "t": "Doliczono postój i podano godzinę przyjazdu: 11:40.",
     "pts": 1
    }
   ],
   "sol": [
    "Jazda: [[210 : 70 = 3]] h. Z postojem: [[3 h 25 min]].",
    "[[8:15 + 3 h 25 min = 11:40]]."
   ],
   "answer": "O 11:40.",
   "tip": "Nie zapomnij o postoju.",
   "check": [
    "8*60 + 15 + 180 + 25 == 11*60 + 40"
   ],
   "pts": 2
  },
  {
   "id": "t12",
   "skills": [
    "Z7"
   ],
   "type": "self",
   "q": "Pokój ma podłogę o wymiarach 5 m na 4,2 m. Panele sprzedaje się w paczkach po 2,4 m², a paczka kosztuje 89 zł. Trzeba kupić o 10% więcej paneli, niż wynosi powierzchnia podłogi. Ile trzeba zapłacić za panele? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono potrzebną powierzchnię (5 · 4,2 = 21 m², z zapasem 23,1 m²) i liczbę paczek: 10.",
     "pts": 1
    },
    {
     "t": "Obliczono koszt: 10 · 89 = 890 zł.",
     "pts": 1
    }
   ],
   "sol": [
    "Podłoga: [[21]] m², z zapasem [[1,1 · 21 = 23,1]] m².",
    "[[23,1 : 2,4 ≈ 9,6]], więc [[10]] paczek. Koszt: [[890]] zł."
   ],
   "answer": "890 zł.",
   "tip": "Paczek nie kupuje się w kawałkach.",
   "check": [
    "5*F('4.2') == 21",
    "F('1.1')*21 == F('23.1')",
    "9 < F('23.1')/F('2.4') <= 10",
    "10*89 == 890"
   ],
   "pts": 2
  }
 ],
 "test_minutes": 35,
 "pass": 12,
 "dzial": "Dział 2: Algebra"
};
