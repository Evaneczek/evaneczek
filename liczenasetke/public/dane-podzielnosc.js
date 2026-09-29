/* Wygenerowane przez zbuduj.py z tresc/podzielnosc.py. Nie edytuj ręcznie. */
window.TEMAT = {
 "slug": "podzielnosc",
 "title": "Podzielność, NWD i NWW",
 "sign": "÷",
 "lead": "Cechy podzielności, liczby pierwsze, NWD i NWW. Na egzaminie w 2026 roku już drugie zadanie wymagało NWD i NWW, a w 2025 roku trzeba było znaleźć liczbę dającą daną resztę z dzielenia.",
 "goals": {
  "learn": "7 umiejętności: cechy podzielności, liczby pierwsze, rozkład na czynniki, NWD, NWW, dzielenie z resztą oraz parzystość i liczenie liczb o danej własności.",
  "prereq": "Tabliczka mnożenia. Rozgrzewka na początku to sprawdzi.",
  "goal": "Minimum 12 z 14 punktów w teście na koniec tematu."
 },
 "skills": {
  "P1": "Cechy podzielności",
  "P2": "Liczby pierwsze i złożone",
  "P3": "Rozkład na czynniki pierwsze",
  "P4": "Największy wspólny dzielnik (NWD)",
  "P5": "Najmniejsza wspólna wielokrotność (NWW)",
  "P6": "Dzielenie z resztą",
  "P7": "Parzystość i liczenie liczb o danej własności"
 },
 "lessons": [
  {
   "title": "Cechy podzielności",
   "skills": [
    "P1"
   ],
   "intro": "Cechy podzielności pozwalają w kilka sekund sprawdzić, czy liczba dzieli się przez 2, 3, 4, 5, 9, 10 albo 100, bez wykonywania dzielenia. Na egzaminie oszczędzają czas i chronią przed pomyłką.",
   "rule": {
    "t": "Przez 2, 5, 10 i 100 patrzysz na końcówkę. Przez 3 i 9 na sumę cyfr. Przez 4 na dwie ostatnie cyfry.",
    "f": [
     "2: ostatnia cyfra parzysta",
     "5: ostatnia cyfra 0 lub 5",
     "4: dwie ostatnie cyfry tworzą liczbę podzielną przez 4",
     "3 i 9: suma cyfr dzieli się przez 3 lub 9"
    ],
    "e": "Przez 6 dzieli się liczba, która dzieli się jednocześnie przez 2 i przez 3. Nie ma cechy „suma cyfr przez 6”."
   },
   "example": {
    "q": "Czy liczba 7 452 jest podzielna przez 3, przez 9 i przez 4?",
    "steps": [
     "Suma cyfr: 7 + 4 + 5 + 2 = 18. 18 dzieli się przez 3 i przez 9, więc 7 452 też.",
     "Dwie ostatnie cyfry tworzą liczbę 52, a 52 : 4 = 13. Więc 7 452 dzieli się przez 4.",
     "Sprawdzenie dzieleniem: 7 452 : 36 = 207, czyli liczba dzieli się przez 4 i przez 9 jednocześnie."
    ],
    "result": "7 452 dzieli się przez 3, przez 9 i przez 4.",
    "tip": "Przy cesze podzielności przez 4 patrz na DWIE ostatnie cyfry, a nie na jedną.",
    "check": [
     "7452 % 3 == 0",
     "7452 % 9 == 0",
     "7452 % 4 == 0",
     "7452 / 36 == 207"
    ]
   },
   "you": [
    {
     "id": "y1",
     "type": "fields",
     "q": "W zapisie liczby 4■8 brakuje cyfry dziesiątek. Jaką cyfrę trzeba wpisać, żeby liczba była podzielna przez 9?",
     "fields": [
      {
       "label": "Cyfra",
       "ans": 6,
       "show": "6"
      }
     ],
     "sol": [
      "Suma cyfr: 4 + ■ + 8 = 12 + ■. Ma się dzielić przez 9.",
      "Najbliższa wielokrotność 9 większa od 12 to 18, więc [[■ = 6]]. Liczba 468 = 9 · 52."
     ],
     "answer": "6.",
     "tip": "Następna wielokrotność 9 to 27, ale wtedy ■ = 15, a to nie jest cyfra.",
     "check": [
      "468 % 9 == 0",
      "468 / 9 == 52"
     ]
    },
    {
     "id": "y1b",
     "type": "pf",
     "q": "Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "Liczba 2 316 jest podzielna przez 4.",
       "ok": "P"
      },
      {
       "t": "Liczba 2 316 jest podzielna przez 9.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> Dwie ostatnie cyfry to 16, a 16 : 4 = 4. Prawda.",
      "<b>Zdanie 2.</b> Suma cyfr: 2 + 3 + 1 + 6 = 12. 12 nie dzieli się przez 9. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "12 dzieli się przez 3, więc 2 316 dzieli się przez 3, ale nie przez 9.",
     "check": [
      "2316 % 4 == 0",
      "2316 % 9 != 0"
     ]
    }
   ]
  },
  {
   "title": "Liczby pierwsze i złożone",
   "skills": [
    "P2"
   ],
   "intro": "Liczby pierwsze to „cegiełki”, z których przez mnożenie zbudujesz każdą inną liczbę. Przydadzą się w rozkładzie na czynniki, a potem przy NWD i NWW.",
   "rule": {
    "t": "Liczba pierwsza ma dokładnie dwa dzielniki: 1 i samą siebie. Liczba złożona ma więcej dzielników.",
    "f": [
     "pierwsze do 30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29",
     "1 nie jest ani pierwsza, ani złożona"
    ],
    "e": "2 to jedyna parzysta liczba pierwsza. Nie każda liczba nieparzysta jest pierwsza: 9, 15, 21, 51, 91 są złożone."
   },
   "example": {
    "q": "Które z liczb 51, 53, 57, 91 są pierwsze?",
    "steps": [
     "51: suma cyfr 6, więc dzieli się przez 3. 51 = 3 · 17, złożona.",
     "57: suma cyfr 12, więc dzieli się przez 3. 57 = 3 · 19, złożona.",
     "91: nie dzieli się przez 2, 3, 5, ale 91 = 7 · 13, złożona.",
     "53: nie dzieli się przez 2, 3, 5 ani 7 (7 · 7 = 49, 7 · 8 = 56). Pierwsza."
    ],
    "result": "Tylko 53 jest liczbą pierwszą.",
    "tip": "Sprawdzając, czy liczba jest pierwsza, wystarczy dzielić przez 2, 3, 5, 7… dopóki kwadrat dzielnika nie przekroczy tej liczby.",
    "check": [
     "51 == 3*17",
     "57 == 3*19",
     "91 == 7*13",
     "all(53 % d for d in range(2, 53))"
    ]
   },
   "you": [
    {
     "id": "y2",
     "type": "abcd",
     "q": "Która z liczb jest liczbą pierwszą?",
     "opts": [
      "87",
      "91",
      "97",
      "111"
     ],
     "ok": 2,
     "why": {
      "A": "87 = 3 · 29 (suma cyfr 15 dzieli się przez 3).",
      "B": "91 = 7 · 13.",
      "D": "111 = 3 · 37 (suma cyfr 3)."
     },
     "sol": [
      "87 i 111 dzielą się przez 3 (sumy cyfr 15 i 3). 91 = 7 · 13.",
      "97 nie dzieli się przez 2, 3, 5 ani 7, a 11 · 11 = 121 to już więcej niż 97. Jest pierwsza."
     ],
     "answer": "C, 97.",
     "tip": "Najpierw sprawdź cechy podzielności przez 2, 3 i 5. Większość liczb złożonych odpada od razu.",
     "check": [
      "87 == 3*29",
      "91 == 7*13",
      "111 == 3*37",
      "all(97 % d for d in range(2, 97))"
     ]
    },
    {
     "id": "y2b",
     "type": "pf",
     "q": "Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "Każda liczba nieparzysta jest liczbą pierwszą.",
       "ok": "F"
      },
      {
       "t": "Liczba 2 jest liczbą pierwszą.",
       "ok": "P"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> Wystarczy jeden przykład, że tak nie jest: 9 = 3 · 3 jest nieparzysta, ale złożona. Fałsz.",
      "<b>Zdanie 2.</b> 2 ma dokładnie dwa dzielniki: 1 i 2. Prawda."
     ],
     "answer": "F, P.",
     "tip": "Żeby pokazać, że zdanie „każda…” jest fałszywe, wystarczy jeden kontrprzykład.",
     "check": [
      "9 == 3*3"
     ]
    }
   ]
  },
  {
   "title": "Rozkład na czynniki pierwsze",
   "skills": [
    "P3"
   ],
   "intro": "Każdą liczbę złożoną można zapisać jako iloczyn liczb pierwszych, i to tylko na jeden sposób. Ten zapis to klucz do NWD i NWW.",
   "rule": {
    "t": "Dziel liczbę po kolei przez najmniejsze liczby pierwsze, aż zostanie 1.",
    "f": [
     "360 = 2 · 2 · 2 · 3 · 3 · 5 = 2³ · 3² · 5"
    ],
    "e": "W rozkładzie mogą być tylko liczby pierwsze. Zapis 150 = 2 · 3 · 25 nie jest rozkładem, bo 25 = 5 · 5."
   },
   "example": {
    "q": "Rozłóż liczbę 360 na czynniki pierwsze.",
    "steps": [
     "360 : 2 = 180, 180 : 2 = 90, 90 : 2 = 45. Przez 2 dzielimy trzy razy.",
     "45 : 3 = 15, 15 : 3 = 5. Przez 3 dzielimy dwa razy.",
     "5 : 5 = 1. Koniec."
    ],
    "result": "360 = 2 · 2 · 2 · 3 · 3 · 5 = 2³ · 3² · 5.",
    "tip": "Zapisuj w słupku: po lewej liczba, po prawej dzielnik. Łatwo wtedy sprawdzić każdy krok.",
    "check": [
     "2**3 * 3**2 * 5 == 360"
    ]
   },
   "you": [
    {
     "id": "y3",
     "type": "fields",
     "q": "Uzupełnij rozkład: 84 = 2^a · 3^b · 7^c. Podaj wykładniki.",
     "fields": [
      {
       "label": "a",
       "ans": 2,
       "show": "2"
      },
      {
       "label": "b",
       "ans": 1,
       "show": "1"
      },
      {
       "label": "c",
       "ans": 1,
       "show": "1"
      }
     ],
     "sol": [
      "[[84 : 2 = 42]], [[42 : 2 = 21]], [[21 : 3 = 7]], [[7 : 7 = 1]].",
      "84 = 2 · 2 · 3 · 7 = [[2² · 3 · 7]], więc a = 2, b = 1, c = 1."
     ],
     "answer": "a = 2, b = 1, c = 1.",
     "tip": "Liczba bez wykładnika ma wykładnik 1: 3 = 3¹.",
     "check": [
      "2**2 * 3 * 7 == 84"
     ]
    },
    {
     "id": "y3b",
     "type": "abcd",
     "q": "Rozkładem liczby 150 na czynniki pierwsze jest:",
     "opts": [
      "2 · 3 · 25",
      "2 · 3 · 5 · 5",
      "2 · 75",
      "6 · 25"
     ],
     "ok": 1,
     "why": {
      "A": "25 nie jest liczbą pierwszą (25 = 5 · 5).",
      "C": "75 nie jest liczbą pierwszą.",
      "D": "Ani 6, ani 25 nie są liczbami pierwszymi."
     },
     "sol": [
      "[[150 : 2 = 75]], [[75 : 3 = 25]], [[25 : 5 = 5]], [[5 : 5 = 1]].",
      "150 = 2 · 3 · 5 · 5. Wszystkie iloczyny w odpowiedziach dają 150, ale tylko w B są same liczby pierwsze."
     ],
     "answer": "B, 2 · 3 · 5 · 5.",
     "tip": "Sprawdź każdy czynnik: czy to na pewno liczba pierwsza?",
     "check": [
      "2*3*5*5 == 150"
     ]
    }
   ]
  },
  {
   "title": "NWD: największy wspólny dzielnik",
   "skills": [
    "P4"
   ],
   "intro": "NWD to największa liczba, przez którą dzielą się obie dane liczby. W zadaniach tekstowych pojawia się, gdy coś dzielimy na jak największe równe części: paczki, bukiety, kwadratowe płytki.",
   "rule": {
    "t": "Rozłóż obie liczby na czynniki. NWD to iloczyn czynników wspólnych.",
    "f": [
     "60 = 2 · 2 · 3 · 5",
     "84 = 2 · 2 · 3 · 7",
     "NWD(60, 84) = 2 · 2 · 3 = 12"
    ],
    "e": "Czynnik wspólny bierzesz tyle razy, ile razy występuje w obu rozkładach (najmniejszą potęgę)."
   },
   "example": {
    "q": "Oblicz NWD(60, 84).",
    "steps": [
     "Rozkłady: 60 = 2 · 2 · 3 · 5, 84 = 2 · 2 · 3 · 7.",
     "Wspólne czynniki: 2, 2 i 3. Piątka i siódemka są tylko w jednym rozkładzie.",
     "NWD = 2 · 2 · 3 = 12. Sprawdzenie: 60 : 12 = 5, 84 : 12 = 7."
    ],
    "result": "NWD(60, 84) = 12.",
    "tip": "Po obliczeniu NWD sprawdź, czy obie liczby naprawdę się przez nie dzielą.",
    "check": [
     "math.gcd(60, 84) == 12"
    ]
   },
   "you": [
    {
     "id": "y4",
     "type": "fields",
     "q": "Oblicz NWD(48, 180).",
     "fields": [
      {
       "label": "NWD",
       "ans": 12,
       "show": "12"
      }
     ],
     "sol": [
      "48 = 2 · 2 · 2 · 2 · 3, 180 = 2 · 2 · 3 · 3 · 5.",
      "Wspólne: 2, 2, 3. [[NWD = 2 · 2 · 3 = 12]]."
     ],
     "answer": "12.",
     "tip": "Skreślaj wspólne czynniki parami w obu rozkładach.",
     "check": [
      "math.gcd(48, 180) == 12"
     ]
    },
    {
     "id": "y4b",
     "type": "fields",
     "q": "Kwiaciarka ma 36 róż i 60 tulipanów. Chce zrobić jak najwięcej jednakowych bukietów i zużyć wszystkie kwiaty.",
     "fields": [
      {
       "label": "Ile bukietów?",
       "ans": 12,
       "show": "12"
      },
      {
       "label": "Ile róż w bukiecie?",
       "ans": 3,
       "show": "3"
      },
      {
       "label": "Ile tulipanów w bukiecie?",
       "ans": 5,
       "show": "5"
      }
     ],
     "sol": [
      "Liczba bukietów musi dzielić 36 i 60, a ma być największa: to NWD.",
      "36 = 2 · 2 · 3 · 3, 60 = 2 · 2 · 3 · 5, więc [[NWD = 12]].",
      "W bukiecie: [[36 : 12 = 3]] róże i [[60 : 12 = 5]] tulipanów."
     ],
     "answer": "12 bukietów po 3 róże i 5 tulipanów.",
     "tip": "„Jak najwięcej jednakowych części” to sygnał: licz NWD.",
     "check": [
      "math.gcd(36, 60) == 12"
     ]
    }
   ]
  },
  {
   "title": "NWW: najmniejsza wspólna wielokrotność",
   "skills": [
    "P5"
   ],
   "intro": "NWW to najmniejsza liczba, która dzieli się przez obie dane liczby. W zadaniach pojawia się, gdy coś powtarza się regularnie i pytają, kiedy zdarzy się jednocześnie: autobusy, dzwonki, treningi.",
   "rule": {
    "t": "Rozłóż obie liczby na czynniki. NWW to iloczyn wszystkich czynników jednej liczby i brakujących czynników drugiej.",
    "f": [
     "12 = 2 · 2 · 3",
     "18 = 2 · 3 · 3",
     "NWW(12, 18) = 2 · 2 · 3 · 3 = 36"
    ],
    "e": "Przydatna kontrola: NWD · NWW = iloczyn obu liczb. Tu 6 · 36 = 216 = 12 · 18."
   },
   "example": {
    "q": "Autobus linii A odjeżdża z przystanku co 12 minut, a linii B co 18 minut. O 8:00 odjechały razem. O której znów odjadą razem?",
    "steps": [
     "Szukamy najmniejszej liczby minut, która dzieli się przez 12 i przez 18: to NWW.",
     "12 = 2 · 2 · 3, 18 = 2 · 3 · 3. Bierzemy 2 · 2 · 3 i dokładamy brakującą trójkę: NWW = 36.",
     "8:00 + 36 minut = 8:36."
    ],
    "result": "Autobusy znów odjadą razem o 8:36.",
    "tip": "„Kiedy znów razem” to sygnał: licz NWW.",
    "check": [
     "math.lcm(12, 18) == 36"
    ]
   },
   "you": [
    {
     "id": "y5",
     "type": "fields",
     "q": "Oblicz.",
     "fields": [
      {
       "label": "NWW(15, 20)",
       "ans": 60,
       "show": "60"
      },
      {
       "label": "NWW(8, 12)",
       "ans": 24,
       "show": "24"
      }
     ],
     "sol": [
      "15 = 3 · 5, 20 = 2 · 2 · 5. [[NWW = 2 · 2 · 3 · 5 = 60]].",
      "8 = 2 · 2 · 2, 12 = 2 · 2 · 3. [[NWW = 2 · 2 · 2 · 3 = 24]]."
     ],
     "answer": "60 i 24.",
     "tip": "Sprawdź: 60 dzieli się przez 15 i 20, a 24 przez 8 i 12.",
     "check": [
      "math.lcm(15, 20) == 60",
      "math.lcm(8, 12) == 24"
     ]
    }
   ]
  },
  {
   "title": "Dzielenie z resztą",
   "skills": [
    "P6"
   ],
   "intro": "Nie każde dzielenie wychodzi „równo”. Gdy zostaje reszta, zapisujemy ją osobno. Na egzaminie w 2025 roku trzeba było wskazać liczbę, która przy dzieleniu przez 7 daje resztę 1.",
   "rule": {
    "t": "a = b · q + r, gdzie reszta r jest mniejsza od dzielnika b.",
    "f": [
     "47 = 5 · 9 + 2",
     "0 ≤ r < b"
    ],
    "e": "Reszta z dzielenia przez 5 może wynosić tylko 0, 1, 2, 3 albo 4. Gdy wychodzi 5 lub więcej, iloraz jest za mały."
   },
   "example": {
    "q": "Jaka jest reszta z dzielenia 95 przez 7? Zapisz wynik w postaci a = b · q + r.",
    "steps": [
     "Szukamy największej wielokrotności 7, która nie przekracza 95: 7 · 13 = 91 (7 · 14 = 98 to już za dużo).",
     "Reszta: 95 − 91 = 4.",
     "Zapis: 95 = 7 · 13 + 4."
    ],
    "result": "Reszta wynosi 4.",
    "tip": "Sprawdzenie: pomnóż iloraz przez dzielnik i dodaj resztę. Musi wyjść liczba, którą dzielisz.",
    "check": [
     "95 == 7*13 + 4",
     "95 % 7 == 4"
    ]
   },
   "you": [
    {
     "id": "y6",
     "type": "fields",
     "q": "Podziel 100 przez 8.",
     "fields": [
      {
       "label": "Iloraz",
       "ans": 12,
       "show": "12"
      },
      {
       "label": "Reszta",
       "ans": 4,
       "show": "4"
      }
     ],
     "sol": [
      "[[8 · 12 = 96]], a 8 · 13 = 104 to za dużo.",
      "Reszta: [[100 − 96 = 4]]. Zapis: 100 = 8 · 12 + 4."
     ],
     "answer": "Iloraz 12, reszta 4.",
     "tip": "Reszta 4 jest mniejsza od 8, więc wszystko się zgadza.",
     "check": [
      "100 == 8*12 + 4"
     ]
    },
    {
     "id": "y6b",
     "type": "abcd",
     "q": "Która z liczb przy dzieleniu przez 6 daje resztę 5?",
     "opts": [
      "54",
      "53",
      "56",
      "58"
     ],
     "ok": 1,
     "why": {
      "A": "54 = 6 · 9, reszta 0.",
      "C": "56 = 6 · 9 + 2, reszta 2.",
      "D": "58 = 6 · 9 + 4, reszta 4."
     },
     "sol": [
      "Najbliższa wielokrotność 6 to 48 (6 · 8) albo 54 (6 · 9).",
      "[[53 = 6 · 8 + 5]], więc reszta to 5."
     ],
     "answer": "B, 53.",
     "tip": "Liczba o 1 mniejsza od wielokrotności 6 zawsze daje resztę 5.",
     "check": [
      "53 % 6 == 5",
      "54 % 6 == 0",
      "56 % 6 == 2",
      "58 % 6 == 4"
     ]
    }
   ]
  },
  {
   "title": "Parzystość i liczenie liczb",
   "skills": [
    "P7"
   ],
   "intro": "Czasem nie trzeba nic dokładnie liczyć, wystarczy wiedzieć, czy liczba jest parzysta. Na egzaminie 2026 było zadanie z kulami, w którym cała sztuczka polegała na parzystości. Do tego pytania typu „ile jest liczb od 1 do 200 podzielnych przez 7?”.",
   "rule": {
    "t": "Parzysta ± parzysta = parzysta. Nieparzysta ± nieparzysta = parzysta. Parzysta ± nieparzysta = nieparzysta.",
    "f": [
     "ile liczb od 1 do n dzieli się przez k: iloraz n : k bez reszty"
    ],
    "e": "Iloczyn jest nieparzysty tylko wtedy, gdy wszystkie czynniki są nieparzyste."
   },
   "example": {
    "q": "Ile jest liczb od 1 do 200 podzielnych przez 7?",
    "steps": [
     "Liczby podzielne przez 7 to 7 · 1, 7 · 2, 7 · 3 i tak dalej.",
     "Szukamy, ile razy 7 mieści się w 200: 200 : 7 = 28 reszty 4, bo 7 · 28 = 196.",
     "Następna wielokrotność, 7 · 29 = 203, jest już większa od 200."
    ],
    "result": "Takich liczb jest 28.",
    "tip": "Liczb dwucyfrowych podzielnych przez k szukasz tak: wszystkie do 99 minus te do 9.",
    "check": [
     "200 // 7 == 28",
     "len([n for n in range(1, 201) if n % 7 == 0]) == 28"
    ]
   },
   "you": [
    {
     "id": "y7",
     "type": "fields",
     "q": "Ile jest liczb od 1 do 100 podzielnych przez 8?",
     "fields": [
      {
       "label": "Liczba",
       "ans": 12,
       "show": "12"
      }
     ],
     "sol": [
      "[[100 : 8 = 12]] reszty 4, bo 8 · 12 = 96, a 8 · 13 = 104 > 100."
     ],
     "answer": "12.",
     "tip": "Reszta nie ma znaczenia. Liczy się tylko iloraz.",
     "check": [
      "100 // 8 == 12"
     ]
    },
    {
     "id": "y7b",
     "type": "pf",
     "q": "Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "Suma dwóch liczb nieparzystych jest parzysta.",
       "ok": "P"
      },
      {
       "t": "Iloczyn liczby parzystej i nieparzystej jest nieparzysty.",
       "ok": "F"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> Np. 3 + 5 = 8, 7 + 9 = 16. Dwie „nadwyżki” po 1 tworzą parę. Prawda.",
      "<b>Zdanie 2.</b> Np. 2 · 3 = 6. Jeśli jeden czynnik jest parzysty, iloczyn jest parzysty. Fałsz."
     ],
     "answer": "P, F.",
     "tip": "Sprawdzaj takie zdania na małych liczbach, ale pamiętaj, że przykład niczego nie dowodzi. Dowodzi reguła.",
     "check": [
      "(3+5) % 2 == 0",
      "(2*3) % 2 == 0"
     ]
    }
   ]
  }
 ],
 "traps": [
  {
   "name": "Jedynka jako liczba pierwsza",
   "bad": "1 jest liczbą pierwszą",
   "good": "1 ma tylko jeden dzielnik, więc nie jest ani pierwsza, ani złożona"
  },
  {
   "name": "NWD pomylone z NWW",
   "bad": "bukiety z 36 róż i 60 tulipanów: NWW = 180",
   "good": "dzielimy na równe części, więc NWD = 12. NWW jest do „kiedy znów razem”."
  },
  {
   "name": "Reszta większa od dzielnika",
   "bad": "47 : 5 = 8 reszty 7",
   "good": "47 = 5 · 9 + 2. Reszta musi być mniejsza od 5."
  }
 ],
 "cheat": {
  "title": "Podzielność w 7 zasadach",
  "rules": [
   {
    "t": "Cechy podzielności.",
    "f": [
     "2, 5, 10, 100: końcówka",
     "4: dwie ostatnie cyfry",
     "3, 9: suma cyfr"
    ],
    "e": "Przez 6: przez 2 i przez 3 jednocześnie."
   },
   {
    "t": "Liczba pierwsza ma dokładnie dwa dzielniki.",
    "f": [
     "2, 3, 5, 7, 11, 13, 17, 19, 23, 29"
    ],
    "e": "1 nie jest pierwsza. 2 to jedyna parzysta pierwsza."
   },
   {
    "t": "Rozkład: dziel przez najmniejsze liczby pierwsze.",
    "f": [
     "360 = 2³ · 3² · 5"
    ],
    "e": "W rozkładzie są tylko liczby pierwsze."
   },
   {
    "t": "NWD: wspólne czynniki.",
    "f": [
     "NWD(60, 84) = 2 · 2 · 3 = 12"
    ],
    "e": "Równe części, bukiety, płytki: NWD."
   },
   {
    "t": "NWW: wszystkie czynniki jednej i brakujące drugiej.",
    "f": [
     "NWW(12, 18) = 36"
    ],
    "e": "Kiedy znów razem: NWW. Kontrola: NWD · NWW = a · b."
   },
   {
    "t": "Dzielenie z resztą.",
    "f": [
     "a = b · q + r, r < b"
    ],
    "e": "95 = 7 · 13 + 4"
   },
   {
    "t": "Parzystość i liczenie.",
    "f": [
     "n + n = p, p + n = n",
     "ile liczb ≤ n dzieli się przez k: n : k"
    ],
    "e": "od 1 do 200 przez 7: 28 liczb"
   }
  ]
 },
 "memo": {
  "title": "Cechy podzielności: warto znać na pamięć",
  "rows": [
   [
    "przez 2",
    "przez 3",
    "przez 4",
    "przez 5",
    "przez 9",
    "przez 10"
   ],
   [
    "cyfra parzysta na końcu",
    "suma cyfr : 3",
    "2 ostatnie cyfry : 4",
    "0 lub 5 na końcu",
    "suma cyfr : 9",
    "0 na końcu"
   ]
  ],
  "note": "Liczby pierwsze do 50: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47."
 },
 "warmup": {
  "id": "w0",
  "type": "fields",
  "q": "Rozgrzewka z tabliczki mnożenia. Bez kalkulatora.",
  "fields": [
   {
    "label": "6 · 7",
    "ans": 42,
    "show": "42"
   },
   {
    "label": "72 : 8",
    "ans": 9,
    "show": "9"
   },
   {
    "label": "13 · 4",
    "ans": 52,
    "show": "52"
   }
  ],
  "sol": [
   "<b>6 · 7</b> = [[42]].",
   "<b>72 : 8</b> = [[9]], bo 8 · 9 = 72.",
   "<b>13 · 4</b> = 10 · 4 + 3 · 4 = 40 + 12 = [[52]]."
  ],
  "answer": "42, 9 i 52.",
  "tip": "Podzielność to tabliczka mnożenia „od drugiej strony”. Im pewniej ją znasz, tym szybciej pójdzie ten temat.",
  "check": [
   "6*7 == 42",
   "72/8 == 9",
   "13*4 == 52"
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
    "P1"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Liczba 5 130 jest podzielna przez 9.",
     "ok": "P"
    },
    {
     "t": "Liczba 5 130 jest podzielna przez 4.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> Suma cyfr: [[5 + 1 + 3 + 0 = 9]]. Dzieli się przez 9. Prawda.",
    "<b>Zdanie 2.</b> Dwie ostatnie cyfry: 30. 30 nie dzieli się przez 4. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Przez 4: dwie ostatnie cyfry. Przez 9: suma cyfr.",
   "check": [
    "5130 % 9 == 0",
    "5130 % 4 != 0"
   ],
   "twin": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Liczba 3 024 jest podzielna przez 9.",
      "ok": "P"
     },
     {
      "t": "Liczba 3 024 jest podzielna przez 5.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[3 + 0 + 2 + 4 = 9]]. Prawda.",
     "<b>Zdanie 2.</b> Ostatnia cyfra to 4, a nie 0 ani 5. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Przez 5 dzielą się tylko liczby zakończone na 0 lub 5.",
    "check": [
     "3024 % 9 == 0",
     "3024 % 5 != 0"
    ]
   },
   "twin2": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Liczba 7 236 jest podzielna przez 9.",
      "ok": "P"
     },
     {
      "t": "Liczba 7 236 jest podzielna przez 5.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[7 + 2 + 3 + 6 = 18]]. Prawda.",
     "<b>Zdanie 2.</b> Kończy się na 6. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Przez 9: suma cyfr. Przez 5: 0 lub 5 na końcu.",
    "check": [
     "7236 % 9 == 0",
     "7236 % 5 != 0"
    ]
   }
  },
  {
   "id": "a3",
   "level": 1,
   "skills": [
    "P2"
   ],
   "type": "abcd",
   "q": "Która z liczb jest liczbą pierwszą?",
   "opts": [
    "51",
    "57",
    "59",
    "91"
   ],
   "ok": 2,
   "why": {
    "A": "51 = 3 · 17.",
    "B": "57 = 3 · 19.",
    "D": "91 = 7 · 13."
   },
   "sol": [
    "51 i 57 dzielą się przez 3 (sumy cyfr 6 i 12). 91 = 7 · 13.",
    "59 nie dzieli się przez 2, 3, 5 ani 7. Jest pierwsza."
   ],
   "answer": "C, 59.",
   "tip": "Liczby 51, 57 i 91 to klasyczne pułapki: wyglądają na pierwsze, ale nie są.",
   "check": [
    "51 == 3*17",
    "57 == 3*19",
    "91 == 7*13",
    "all(59 % d for d in range(2, 59))"
   ],
   "twin": {
    "type": "abcd",
    "q": "Która z liczb jest liczbą pierwszą?",
    "opts": [
     "83",
     "49",
     "77",
     "87"
    ],
    "ok": 0,
    "why": {
     "B": "49 = 7 · 7.",
     "C": "77 = 7 · 11.",
     "D": "87 = 3 · 29."
    },
    "sol": [
     "49 = 7 · 7, 77 = 7 · 11, 87 = 3 · 29.",
     "83 nie dzieli się przez 2, 3, 5 ani 7. Jest pierwsza."
    ],
    "answer": "A, 83.",
    "tip": "Kwadraty liczb pierwszych (49, 121, 169) nigdy nie są pierwsze.",
    "check": [
     "49 == 7*7",
     "77 == 7*11",
     "87 == 3*29",
     "all(83 % d for d in range(2, 83))"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Która z liczb jest liczbą pierwszą?",
    "opts": [
     "39",
     "69",
     "93",
     "71"
    ],
    "ok": 3,
    "why": {
     "A": "39 = 3 · 13.",
     "B": "69 = 3 · 23.",
     "C": "93 = 3 · 31."
    },
    "sol": [
     "39, 69 i 93 mają sumy cyfr podzielne przez 3. 71 nie dzieli się przez 2, 3, 5 ani 7."
    ],
    "answer": "D, 71.",
    "tip": "Sprawdź cechę podzielności przez 3.",
    "check": [
     "39 == 3*13",
     "69 == 3*23",
     "93 == 3*31",
     "all(71 % d for d in range(2, 71))"
    ]
   }
  },
  {
   "id": "a9",
   "level": 1,
   "skills": [
    "P6"
   ],
   "type": "abcd",
   "q": "Dane są liczby: 61, 64, 66, 69. Która z nich przy dzieleniu przez 8 daje resztę 2?",
   "opts": [
    "61",
    "66",
    "64",
    "69"
   ],
   "ok": 1,
   "why": {
    "A": "61 = 8 · 7 + 5, reszta 5.",
    "C": "64 = 8 · 8, reszta 0.",
    "D": "69 = 8 · 8 + 5, reszta 5."
   },
   "sol": [
    "Najbliższa wielokrotność 8 to 64. [[66 = 8 · 8 + 2]], więc reszta to 2."
   ],
   "answer": "B, 66.",
   "tip": "Liczba o 2 większa od wielokrotności 8 daje resztę 2.",
   "check": [
    "61 % 8 == 5",
    "64 % 8 == 0",
    "66 % 8 == 2",
    "69 % 8 == 5"
   ],
   "twin": {
    "type": "abcd",
    "q": "Dane są liczby: 40, 42, 45, 47. Która z nich przy dzieleniu przez 6 daje resztę 4?",
    "opts": [
     "42",
     "40",
     "45",
     "47"
    ],
    "ok": 1,
    "why": {
     "A": "42 = 6 · 7, reszta 0.",
     "C": "45 = 6 · 7 + 3, reszta 3.",
     "D": "47 = 6 · 7 + 5, reszta 5."
    },
    "sol": [
     "[[40 = 6 · 6 + 4]], więc reszta to 4."
    ],
    "answer": "B, 40.",
    "tip": "Sprawdź każdą liczbę: znajdź najbliższą mniejszą wielokrotność 6.",
    "check": [
     "40 % 6 == 4",
     "42 % 6 == 0",
     "45 % 6 == 3",
     "47 % 6 == 5"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Dane są liczby: 50, 53, 55, 58. Która z nich przy dzieleniu przez 7 daje resztę 4?",
    "opts": [
     "50",
     "55",
     "58",
     "53"
    ],
    "ok": 3,
    "why": {
     "A": "50 = 7 · 7 + 1, reszta 1.",
     "B": "55 = 7 · 7 + 6, reszta 6.",
     "C": "58 = 7 · 8 + 2, reszta 2."
    },
    "sol": [
     "[[53 = 7 · 7 + 4]]."
    ],
    "answer": "D, 53.",
    "tip": "Wielokrotności 7: 49, 56.",
    "check": [
     "50 % 7 == 1",
     "53 % 7 == 4",
     "55 % 7 == 6",
     "58 % 7 == 2"
    ]
   }
  },
  {
   "id": "a10",
   "level": 1,
   "skills": [
    "P7"
   ],
   "type": "fields",
   "q": "Ile jest liczb od 1 do 100 podzielnych przez 7?",
   "fields": [
    {
     "label": "Liczba",
     "ans": 14,
     "show": "14",
     "why": [
      [
       98,
       "98 to największa taka liczba. Pytanie jest o to, ile ich jest: 98 : 7 = 14."
      ]
     ]
    }
   ],
   "sol": [
    "[[100 : 7 = 14]] reszty 2, bo 7 · 14 = 98, a 7 · 15 = 105 > 100."
   ],
   "answer": "14.",
   "tip": "Liczy się tylko iloraz.",
   "check": [
    "100 // 7 == 14"
   ],
   "twin": {
    "type": "fields",
    "q": "Ile jest liczb od 1 do 100 podzielnych przez 9?",
    "fields": [
     {
      "label": "Liczba",
      "ans": 11,
      "show": "11"
     }
    ],
    "sol": [
     "[[100 : 9 = 11]] reszty 1, bo 9 · 11 = 99."
    ],
    "answer": "11.",
    "tip": "Największa taka liczba to 99.",
    "check": [
     "100 // 9 == 11"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Ile jest liczb od 1 do 100 podzielnych przez 6?",
    "fields": [
     {
      "label": "Liczba",
      "ans": 16,
      "show": "16",
      "why": [
       [
        96,
        "96 to największa taka liczba, a pytanie jest o liczbę takich liczb."
       ]
      ]
     }
    ],
    "sol": [
     "[[100 : 6 = 16]] reszty 4 (6 · 16 = 96)."
    ],
    "answer": "16.",
    "tip": "Liczy się iloraz.",
    "check": [
     "100 // 6 == 16"
    ]
   }
  },
  {
   "id": "a12",
   "level": 1,
   "skills": [
    "P2"
   ],
   "type": "fields",
   "q": "Ile jest liczb pierwszych większych od 20 i mniejszych od 40?",
   "fields": [
    {
     "label": "Liczba",
     "ans": 4,
     "show": "4",
     "why": [
      [
       3,
       "Nie pomijaj żadnej: 23, 29, 31 i 37 są pierwsze."
      ],
      [
       5,
       "Któraś z Twoich liczb jest złożona: 21, 25, 27, 33, 35 i 39 odpadają."
      ]
     ]
    }
   ],
   "sol": [
    "Sprawdzamy nieparzyste od 21 do 39. Odpadają: 21, 27, 33, 39 (przez 3), 25, 35 (przez 5).",
    "Zostają [[23, 29, 31, 37]]. To 4 liczby."
   ],
   "answer": "4 (23, 29, 31, 37).",
   "tip": "Parzyste od razu odpadają. Sprawdzaj tylko nieparzyste.",
   "check": [
    "len([n for n in range(21, 40) if all(n % d for d in range(2, n))]) == 4"
   ],
   "twin": {
    "type": "fields",
    "q": "Ile jest liczb pierwszych większych od 40 i mniejszych od 60?",
    "fields": [
     {
      "label": "Liczba",
      "ans": 5,
      "show": "5"
     }
    ],
    "sol": [
     "Nieparzyste od 41 do 59 bez podzielnych przez 3, 5 i 7 (49 = 7 · 7).",
     "Zostają [[41, 43, 47, 53, 59]]."
    ],
    "answer": "5 (41, 43, 47, 53, 59).",
    "tip": "Uważaj na 49 i 51: obie są złożone.",
    "check": [
     "len([n for n in range(41, 60) if all(n % d for d in range(2, n))]) == 5"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Ile jest liczb pierwszych większych od 60 i mniejszych od 80?",
    "fields": [
     {
      "label": "Liczba",
      "ans": 5,
      "show": "5",
      "why": [
       [
        6,
        "77 = 7 · 11 jest złożona."
       ],
       [
        4,
        "Sprawdź 61, 67, 71, 73 i 79."
       ]
      ]
     }
    ],
    "sol": [
     "Nieparzyste od 61 do 79 bez podzielnych przez 3, 5, 7: [[61, 67, 71, 73, 79]]."
    ],
    "answer": "5.",
    "tip": "77 = 7 · 11.",
    "check": [
     "len([n for n in range(61, 80) if all(n % d for d in range(2, n))]) == 5"
    ]
   }
  },
  {
   "id": "b3",
   "level": 2,
   "skills": [
    "P4",
    "P5"
   ],
   "type": "pair",
   "q": "Liczba X jest największym wspólnym dzielnikiem liczb 18 i 27, a Y najmniejszą wspólną wielokrotnością liczb 4 i 6. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "Liczba X jest równa",
     "opts": {
      "A": "9",
      "B": "3"
     },
     "ok": "A"
    },
    {
     "label": "Liczba Y jest równa",
     "opts": {
      "C": "24",
      "D": "12"
     },
     "ok": "D"
    }
   ],
   "sol": [
    "18 = 2 · 3 · 3, 27 = 3 · 3 · 3. Wspólne: 3 · 3, więc [[X = 9]]. Odpowiedź B to tylko jeden wspólny czynnik.",
    "4 = 2 · 2, 6 = 2 · 3. [[Y = 2 · 2 · 3 = 12]]. Odpowiedź C to iloczyn 4 · 6, ale to nie najmniejsza wspólna wielokrotność."
   ],
   "answer": "A i D.",
   "tip": "Takie zadanie było na egzaminie w 2026 roku (kod do szafki z NWD i NWW).",
   "check": [
    "math.gcd(18, 27) == 9",
    "math.lcm(4, 6) == 12"
   ],
   "twin": {
    "type": "pair",
    "q": "Liczba X jest największym wspólnym dzielnikiem liczb 24 i 40, a Y najmniejszą wspólną wielokrotnością liczb 6 i 10. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Liczba X jest równa",
      "opts": {
       "A": "4",
       "B": "8"
      },
      "ok": "B"
     },
     {
      "label": "Liczba Y jest równa",
      "opts": {
       "C": "30",
       "D": "60"
      },
      "ok": "C"
     }
    ],
    "sol": [
     "24 = 2³ · 3, 40 = 2³ · 5. [[X = 2³ = 8]].",
     "6 = 2 · 3, 10 = 2 · 5. [[Y = 2 · 3 · 5 = 30]]. 60 to iloczyn 6 · 10."
    ],
    "answer": "B i C.",
    "tip": "Iloczyn dwóch liczb to wspólna wielokrotność, ale często nie najmniejsza.",
    "check": [
     "math.gcd(24, 40) == 8",
     "math.lcm(6, 10) == 30"
    ]
   },
   "twin2": {
    "type": "pair",
    "q": "Liczba X jest największym wspólnym dzielnikiem liczb 36 i 48, a Y najmniejszą wspólną wielokrotnością liczb 8 i 12. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Liczba X jest równa",
      "opts": {
       "A": "12",
       "B": "6"
      },
      "ok": "A"
     },
     {
      "label": "Liczba Y jest równa",
      "opts": {
       "C": "96",
       "D": "24"
      },
      "ok": "D"
     }
    ],
    "sol": [
     "36 = 2² · 3², 48 = 2⁴ · 3. [[X = 2² · 3 = 12]].",
     "8 = 2³, 12 = 2² · 3. [[Y = 2³ · 3 = 24]]. 96 to iloczyn."
    ],
    "answer": "A i D.",
    "tip": "NWD: wspólne, NWW: wszystkie.",
    "check": [
     "math.gcd(36, 48) == 12",
     "math.lcm(8, 12) == 24"
    ]
   }
  },
  {
   "id": "b4",
   "level": 2,
   "skills": [
    "P1"
   ],
   "type": "tn",
   "q": "Czy liczba 1 236 jest podzielna przez 6? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "T",
   "reasons": {
    "1": "jest parzysta i suma jej cyfr (12) dzieli się przez 3",
    "2": "suma jej cyfr (12) dzieli się przez 6",
    "3": "jej ostatnia cyfra (6) dzieli się przez 6"
   },
   "okReason": "1",
   "sol": [
    "Przez 6 dzieli się liczba podzielna przez 2 i przez 3.",
    "1 236 jest parzysta, a suma cyfr [[1 + 2 + 3 + 6 = 12]] dzieli się przez 3. Tak.",
    "Uzasadnienia 2 i 3 korzystają z nieistniejących cech podzielności przez 6 (np. 16 kończy się na 6, a nie dzieli się przez 6)."
   ],
   "answer": "T, uzasadnienie 1.",
   "tip": "Cecha podzielności przez 6 to dwie cechy naraz: przez 2 i przez 3.",
   "check": [
    "1236 % 6 == 0"
   ],
   "twin": {
    "type": "tn",
    "q": "Czy liczba 3 426 jest podzielna przez 9? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "N",
    "reasons": {
     "1": "suma jej cyfr (15) nie dzieli się przez 9",
     "2": "jej ostatnia cyfra (6) nie dzieli się przez 9",
     "3": "jest liczbą parzystą"
    },
    "okReason": "1",
    "sol": [
     "Suma cyfr: [[3 + 4 + 2 + 6 = 15]]. 15 nie dzieli się przez 9, więc nie.",
     "Uzasadnienia 2 i 3 nie mają związku z podzielnością przez 9 (np. 18 jest parzysta i dzieli się przez 9)."
    ],
    "answer": "N, uzasadnienie 1.",
    "tip": "Przez 9 decyduje wyłącznie suma cyfr.",
    "check": [
     "3426 % 9 != 0"
    ]
   },
   "twin2": {
    "type": "tn",
    "q": "Czy liczba 4 518 jest podzielna przez 6? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "T",
    "reasons": {
     "1": "jest parzysta i suma jej cyfr (18) dzieli się przez 3",
     "2": "suma jej cyfr (18) dzieli się przez 6",
     "3": "jej ostatnia cyfra (8) jest parzysta"
    },
    "okReason": "1",
    "sol": [
     "Parzysta i [[4 + 5 + 1 + 8 = 18]], a 18 dzieli się przez 3. Tak.",
     "Uzasadnienie 3 wystarcza tylko do podzielności przez 2."
    ],
    "answer": "T, uzasadnienie 1.",
    "tip": "Przez 6 = przez 2 i przez 3.",
    "check": [
     "4518 % 6 == 0"
    ]
   }
  },
  {
   "id": "b5",
   "level": 2,
   "skills": [
    "P2",
    "P3"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Liczba 91 jest liczbą pierwszą.",
     "ok": "F"
    },
    {
     "t": "Liczba 1 nie jest liczbą pierwszą.",
     "ok": "P"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[91 = 7 · 13]], więc jest złożona. Fałsz.",
    "<b>Zdanie 2.</b> 1 ma tylko jeden dzielnik, a liczba pierwsza musi mieć dokładnie dwa. Prawda."
   ],
   "answer": "F, P.",
   "tip": "91 to najczęstsza pułapka w zadaniach o liczbach pierwszych.",
   "check": [
    "91 == 7*13"
   ],
   "twin": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Liczba 57 jest liczbą złożoną.",
      "ok": "P"
     },
     {
      "t": "Liczba 29 jest liczbą złożoną.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[57 = 3 · 19]]. Prawda.",
     "<b>Zdanie 2.</b> 29 dzieli się tylko przez 1 i 29, więc jest pierwsza. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Suma cyfr 57 to 12, więc od razu widać podzielność przez 3.",
    "check": [
     "57 == 3*19",
     "all(29 % d for d in range(2, 29))"
    ]
   },
   "twin2": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Liczba 51 jest liczbą pierwszą.",
      "ok": "F"
     },
     {
      "t": "Liczba 97 jest liczbą pierwszą.",
      "ok": "P"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> 51 = 3 · 17. Fałsz.",
     "<b>Zdanie 2.</b> 97 nie dzieli się przez 2, 3, 5 ani 7. Prawda."
    ],
    "answer": "F, P.",
    "tip": "51: suma cyfr 6.",
    "check": [
     "51 == 3*17",
     "all(97 % d for d in range(2, 97))"
    ]
   }
  },
  {
   "id": "b12",
   "level": 2,
   "skills": [
    "P7"
   ],
   "type": "tn",
   "q": "W pudełku było 9 kul ponumerowanych od 1 do 9. Wylosowano 4 kule. Suma numerów dowolnych dwóch kul, które zostały w pudełku, jest parzysta. Czy wszystkie wylosowane kule mają numery parzyste? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "T",
   "reasons": {
    "1": "zostało 5 kul, wszystkie o tej samej parzystości, a liczb parzystych od 1 do 9 są tylko 4",
    "2": "suma dwóch liczb parzystych jest nieparzysta",
    "3": "wylosowano 4 kule, a 4 jest liczbą parzystą"
   },
   "okReason": "1",
   "sol": [
    "Suma dwóch liczb jest parzysta, gdy obie są parzyste albo obie nieparzyste. Skoro każda para pozostałych kul daje sumę parzystą, wszystkie 5 pozostałych kul ma tę samą parzystość.",
    "Numerów parzystych od 1 do 9 są tylko 4 (2, 4, 6, 8), więc 5 pozostałych kul musi mieć numery nieparzyste: 1, 3, 5, 7, 9.",
    "Wylosowano więc kule 2, 4, 6, 8, czyli same parzyste. Uzasadnienie 2 jest nieprawdziwe, a 3 nie ma związku z zadaniem."
   ],
   "answer": "T, uzasadnienie 1.",
   "tip": "Podobne zadanie było na egzaminie w 2026 roku. Kluczem była parzystość, a nie liczenie.",
   "check": [
    "len([n for n in range(1, 10) if n % 2 == 1]) == 5",
    "len([n for n in range(1, 10) if n % 2 == 0]) == 4"
   ],
   "twin": {
    "type": "tn",
    "q": "W pudełku było 7 kul ponumerowanych od 1 do 7. Wylosowano 3 kule. Suma numerów dowolnych dwóch kul, które zostały w pudełku, jest parzysta. Czy suma numerów wylosowanych kul jest równa 12? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "T",
    "reasons": {
     "1": "zostały kule 1, 3, 5, 7, więc wylosowano 2, 4, 6",
     "2": "zostały kule 2, 4, 6, a 2 + 4 + 6 = 12",
     "3": "12 jest liczbą parzystą"
    },
    "okReason": "1",
    "sol": [
     "Zostały 4 kule o tej samej parzystości. Parzystych od 1 do 7 są tylko 3, więc zostały nieparzyste: 1, 3, 5, 7.",
     "Wylosowano 2, 4, 6, a [[2 + 4 + 6 = 12]]. Tak."
    ],
    "answer": "T, uzasadnienie 1.",
    "tip": "Najpierw ustal, które kule zostały, potem które wylosowano.",
    "check": [
     "2 + 4 + 6 == 12"
    ]
   },
   "twin2": {
    "type": "tn",
    "q": "W pudełku było 11 kul ponumerowanych od 1 do 11. Wylosowano 5 kul. Suma numerów dowolnych dwóch kul, które zostały w pudełku, jest parzysta. Czy suma numerów wylosowanych kul jest równa 30? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "T",
    "reasons": {
     "1": "zostały kule 1, 3, 5, 7, 9, 11, więc wylosowano 2, 4, 6, 8, 10",
     "2": "wylosowano 5 kul, a 5 · 6 = 30",
     "3": "30 jest liczbą parzystą"
    },
    "okReason": "1",
    "sol": [
     "Zostało 6 kul tej samej parzystości. Parzystych od 1 do 11 jest tylko 5, więc zostały nieparzyste.",
     "Wylosowano 2, 4, 6, 8, 10: [[2 + 4 + 6 + 8 + 10 = 30]]. Tak."
    ],
    "answer": "T, uzasadnienie 1.",
    "tip": "Tak wyglądało zadanie 6 na egzaminie w 2026 roku.",
    "check": [
     "2+4+6+8+10 == 30"
    ]
   }
  },
  {
   "id": "c1",
   "level": 3,
   "skills": [
    "P1",
    "P6"
   ],
   "type": "self",
   "q": "Kuba zapisał liczbę czterocyfrową podzielną przez 9. Skreślił w niej cyfrę jedności i otrzymał liczbę 385. Jaką liczbę czterocyfrową zapisał Kuba? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Zapisano, że liczba ma postać 385■ i jej suma cyfr 3 + 8 + 5 + ■ = 16 + ■ musi dzielić się przez 9.",
     "pts": 1
    },
    {
     "t": "Wyznaczono ■ = 2 i podano liczbę 3 852.",
     "pts": 1
    }
   ],
   "sol": [
    "Skreślona cyfra to cyfra jedności, więc liczba Kuby to 385■.",
    "Suma cyfr: [[3 + 8 + 5 + ■ = 16 + ■]]. Ma być podzielna przez 9, a ■ to cyfra od 0 do 9, więc 16 + ■ = 18 i [[■ = 2]].",
    "Sprawdzenie: 3 852 : 9 = 428."
   ],
   "answer": "Kuba zapisał liczbę 3 852.",
   "tip": "Podobne zadanie jest w informatorze CKE (z podzielnością przez 7). Zawsze zapisz szukaną liczbę z „okienkiem” na cyfrę.",
   "check": [
    "3852 % 9 == 0",
    "[d for d in range(10) if (3850 + d) % 9 == 0] == [2]"
   ]
  },
  {
   "id": "c2",
   "level": 3,
   "skills": [
    "P4",
    "P3"
   ],
   "type": "self",
   "q": "Prostokątną podłogę o wymiarach 360 cm na 480 cm trzeba wyłożyć jednakowymi kwadratowymi płytkami, bez cięcia, tak żeby płytki były jak największe. Jaki bok ma taka płytka i ile płytek potrzeba? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Zauważono, że bok płytki to NWD(360, 480), i zapisano rozkłady lub inne poprawne obliczenie NWD.",
     "pts": 1
    },
    {
     "t": "Obliczono bok płytki: 120 cm.",
     "pts": 1
    },
    {
     "t": "Obliczono liczbę płytek: 3 · 4 = 12.",
     "pts": 1
    }
   ],
   "sol": [
    "Bok płytki musi dzielić 360 i 480, a ma być jak największy: to NWD.",
    "360 = 2³ · 3² · 5, 480 = 2⁵ · 3 · 5. Wspólne: [[2³ · 3 · 5 = 120]]. Bok płytki: 120 cm.",
    "Wzdłuż krótszego boku: [[360 : 120 = 3]] płytki, wzdłuż dłuższego [[480 : 120 = 4]]. Razem [[3 · 4 = 12]] płytek."
   ],
   "answer": "Płytka ma bok 120 cm, potrzeba 12 płytek.",
   "tip": "Liczbę płytek licz jako „rzędy razy kolumny”.",
   "check": [
    "math.gcd(360, 480) == 120",
    "(360//120)*(480//120) == 12"
   ]
  },
  {
   "id": "c6",
   "level": 3,
   "skills": [
    "P3",
    "P4",
    "P5"
   ],
   "type": "pair",
   "q": "Dane są liczby a = 2² · 3 · 5 oraz b = 2 · 3² · 7. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "NWD(a, b) jest równy",
     "opts": {
      "A": "6",
      "B": "30"
     },
     "ok": "A"
    },
    {
     "label": "NWW(a, b) jest równa",
     "opts": {
      "C": "1 260",
      "D": "420"
     },
     "ok": "C"
    }
   ],
   "sol": [
    "NWD: wspólne czynniki w najmniejszych potęgach: [[2 · 3 = 6]].",
    "NWW: wszystkie czynniki w największych potęgach: [[2² · 3² · 5 · 7 = 4 · 9 · 35 = 1 260]]. Odpowiedź D pomija jedną trójkę."
   ],
   "answer": "A i C.",
   "tip": "Nie trzeba liczyć a i b. Wystarczą rozkłady. (a = 60, b = 126, a 60 · 126 = 6 · 1 260.)",
   "check": [
    "math.gcd(60, 126) == 6",
    "math.lcm(60, 126) == 1260",
    "2**2*3*5 == 60",
    "2*3**2*7 == 126"
   ],
   "twin": {
    "type": "pair",
    "q": "Dane są liczby a = 2³ · 5 oraz b = 2 · 3 · 5². Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "NWD(a, b) jest równy",
      "opts": {
       "A": "40",
       "B": "10"
      },
      "ok": "B"
     },
     {
      "label": "NWW(a, b) jest równa",
      "opts": {
       "C": "6 000",
       "D": "600"
      },
      "ok": "D"
     }
    ],
    "sol": [
     "NWD: [[2 · 5 = 10]].",
     "NWW: [[2³ · 3 · 5² = 8 · 3 · 25 = 600]]. 6 000 to iloczyn a · b."
    ],
    "answer": "B i D.",
    "tip": "Najmniejsze potęgi wspólnych czynników: NWD. Największe potęgi wszystkich: NWW.",
    "check": [
     "math.gcd(40, 150) == 10",
     "math.lcm(40, 150) == 600",
     "40*150 == 6000"
    ]
   },
   "twin2": {
    "type": "pair",
    "q": "Dane są liczby a = 3² · 5 oraz b = 2 · 3 · 5². Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "NWD(a, b) jest równy",
      "opts": {
       "A": "45",
       "B": "15"
      },
      "ok": "B"
     },
     {
      "label": "NWW(a, b) jest równa",
      "opts": {
       "C": "450",
       "D": "6 750"
      },
      "ok": "C"
     }
    ],
    "sol": [
     "NWD: [[3 · 5 = 15]].",
     "NWW: [[2 · 3² · 5² = 450]]. 6 750 to iloczyn a · b = 45 · 150."
    ],
    "answer": "B i C.",
    "tip": "Kontrola: 15 · 450 = 6 750.",
    "check": [
     "math.gcd(45, 150) == 15",
     "math.lcm(45, 150) == 450",
     "45*150 == 6750"
    ]
   }
  },
  {
   "id": "c10",
   "level": 3,
   "skills": [
    "P6",
    "P1"
   ],
   "type": "self",
   "q": "Agnieszka zapisała liczbę czterocyfrową podzielną przez 7. Skreśliła w tej liczbie cyfrę jedności i otrzymała liczbę 496. Jaką liczbę czterocyfrową zapisała Agnieszka? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Zapisano, że liczba ma postać 496■, i poprawnie sprawdzano podzielność przez 7 (np. 4 960 : 7 = 708 reszty 4).",
     "pts": 1
    },
    {
     "t": "Podano liczbę 4 963 (7 · 709 = 4 963).",
     "pts": 1
    }
   ],
   "sol": [
    "Liczba ma postać 496■, czyli leży między 4 960 a 4 969.",
    "[[4 960 : 7 = 708]] reszty 4. Brakuje 3 do kolejnej wielokrotności 7, więc [[4 960 + 3 = 4 963 = 7 · 709]].",
    "Następna wielokrotność, 4 970, ma już inną cyfrę dziesiątek."
   ],
   "answer": "4 963.",
   "tip": "To zadanie 35 z informatora CKE. Dla 7 nie ma prostej cechy podzielności, więc dzielisz.",
   "check": [
    "[n for n in range(4960, 4970) if n % 7 == 0] == [4963]"
   ]
  }
 ],
 "test": [
  {
   "id": "t1",
   "skills": [
    "P1"
   ],
   "type": "abcd",
   "q": "Która z liczb jest podzielna przez 9?",
   "opts": [
    "4 518",
    "1 234",
    "3 337",
    "6 052"
   ],
   "ok": 0,
   "why": {
    "B": "Suma cyfr 10.",
    "C": "Suma cyfr 16.",
    "D": "Suma cyfr 13."
   },
   "sol": [
    "Sumy cyfr: 10, [[18]], 16, 13. Tylko 18 dzieli się przez 9."
   ],
   "answer": "A, 4 518.",
   "tip": "Przez 9: suma cyfr.",
   "check": [
    "4518 % 9 == 0",
    "1234 % 9 != 0",
    "3337 % 9 != 0",
    "6052 % 9 != 0"
   ],
   "pts": 1
  },
  {
   "id": "t2",
   "skills": [
    "P2"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Liczba 87 jest liczbą pierwszą.",
     "ok": "F"
    },
    {
     "t": "Liczba 2 jest jedyną parzystą liczbą pierwszą.",
     "ok": "P"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> 87 = 3 · 29. Fałsz.",
    "<b>Zdanie 2.</b> Każda inna liczba parzysta dzieli się przez 2, więc ma co najmniej trzy dzielniki. Prawda."
   ],
   "answer": "F, P.",
   "tip": "Suma cyfr 87 to 15.",
   "check": [
    "87 == 3*29"
   ],
   "pts": 1
  },
  {
   "id": "t3",
   "skills": [
    "P3"
   ],
   "type": "fields",
   "q": "Uzupełnij rozkład: 300 = 2^a · 3 · 5^b.",
   "fields": [
    {
     "label": "a",
     "ans": 2,
     "show": "2"
    },
    {
     "label": "b",
     "ans": 2,
     "show": "2"
    }
   ],
   "sol": [
    "300 = 2 · 2 · 3 · 5 · 5 = [[2² · 3 · 5²]]."
   ],
   "answer": "a = 2, b = 2.",
   "tip": "300 = 3 · 100 = 3 · 2² · 5².",
   "check": [
    "2**2*3*5**2 == 300"
   ],
   "pts": 1
  },
  {
   "id": "t4",
   "skills": [
    "P4"
   ],
   "type": "fields",
   "q": "Oblicz NWD(84, 126).",
   "fields": [
    {
     "label": "NWD",
     "ans": 42,
     "show": "42"
    }
   ],
   "sol": [
    "84 = 2² · 3 · 7, 126 = 2 · 3² · 7.",
    "Wspólne: [[2 · 3 · 7 = 42]]."
   ],
   "answer": "42.",
   "tip": "Sprawdź: 84 : 42 = 2, 126 : 42 = 3.",
   "check": [
    "math.gcd(84, 126) == 42"
   ],
   "pts": 1
  },
  {
   "id": "t5",
   "skills": [
    "P5"
   ],
   "type": "abcd",
   "q": "NWW(12, 30) jest równa:",
   "opts": [
    "360",
    "6",
    "60",
    "120"
   ],
   "ok": 2,
   "why": {
    "A": "360 to iloczyn 12 · 30, a nie najmniejsza wspólna wielokrotność.",
    "B": "6 to NWD, a nie NWW.",
    "D": "120 to wspólna wielokrotność, ale nie najmniejsza."
   },
   "sol": [
    "12 = 2² · 3, 30 = 2 · 3 · 5.",
    "[[NWW = 2² · 3 · 5 = 60]]."
   ],
   "answer": "C, 60.",
   "tip": "Kontrola: NWD · NWW = 6 · 60 = 360 = 12 · 30.",
   "check": [
    "math.lcm(12, 30) == 60",
    "math.gcd(12, 30) == 6"
   ],
   "pts": 1
  },
  {
   "id": "t6",
   "skills": [
    "P6"
   ],
   "type": "fields",
   "q": "Podziel 150 przez 11.",
   "fields": [
    {
     "label": "Iloraz",
     "ans": 13,
     "show": "13"
    },
    {
     "label": "Reszta",
     "ans": 7,
     "show": "7"
    }
   ],
   "sol": [
    "[[11 · 13 = 143]], a 11 · 14 = 154 to za dużo.",
    "Reszta: [[150 − 143 = 7]]."
   ],
   "answer": "Iloraz 13, reszta 7.",
   "tip": "Reszta < 11.",
   "check": [
    "150 == 11*13 + 7"
   ],
   "pts": 1
  },
  {
   "id": "t7",
   "skills": [
    "P7"
   ],
   "type": "fields",
   "q": "Ile jest liczb od 1 do 150 podzielnych przez 12?",
   "fields": [
    {
     "label": "Liczba",
     "ans": 12,
     "show": "12"
    }
   ],
   "sol": [
    "[[150 : 12 = 12]] reszty 6, bo 12 · 12 = 144."
   ],
   "answer": "12.",
   "tip": "Liczy się iloraz.",
   "check": [
    "150 // 12 == 12"
   ],
   "pts": 1
  },
  {
   "id": "t8",
   "skills": [
    "P4"
   ],
   "type": "self",
   "q": "Kwiaciarka ma 42 róże i 70 goździków. Chce zrobić jak najwięcej jednakowych bukietów i zużyć wszystkie kwiaty. Ile bukietów zrobi i ile róż oraz ile goździków będzie w każdym bukiecie? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono NWD(42, 70) = 14, czyli liczbę bukietów.",
     "pts": 1
    },
    {
     "t": "Obliczono skład bukietu: 3 róże i 5 goździków.",
     "pts": 1
    }
   ],
   "sol": [
    "42 = 2 · 3 · 7, 70 = 2 · 5 · 7. [[NWD = 2 · 7 = 14]] bukietów.",
    "Róż w bukiecie: [[42 : 14 = 3]], goździków [[70 : 14 = 5]]."
   ],
   "answer": "14 bukietów, w każdym 3 róże i 5 goździków.",
   "tip": "W zadaniu otwartym zapisz, dlaczego liczysz NWD.",
   "check": [
    "math.gcd(42, 70) == 14"
   ],
   "pts": 2
  },
  {
   "id": "t9",
   "skills": [
    "P5"
   ],
   "type": "fields",
   "q": "Jedna lampka błyska co 6 sekund, a druga co 9 sekund. Błysnęły razem. Po ilu sekundach znów błysną razem?",
   "fields": [
    {
     "label": "Po ilu sekundach?",
     "ans": 18,
     "show": "18"
    }
   ],
   "sol": [
    "[[NWW(6, 9) = 18]] (6 = 2 · 3, 9 = 3², więc 2 · 3²)."
   ],
   "answer": "Po 18 sekundach.",
   "tip": "Kiedy znów razem: NWW.",
   "check": [
    "math.lcm(6, 9) == 18"
   ],
   "pts": 1
  },
  {
   "id": "t10",
   "skills": [
    "P1",
    "P7"
   ],
   "type": "tn",
   "q": "Czy liczba 211 jest podzielna przez 3? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "N",
   "reasons": {
    "1": "suma cyfr liczby 211 to 4, a 4 nie dzieli się przez 3",
    "2": "211 jest liczbą nieparzystą",
    "3": "ostatnia cyfra liczby 211 to 1"
   },
   "okReason": "1",
   "sol": [
    "Suma cyfr: [[2 + 1 + 1 = 4]]. 4 nie dzieli się przez 3, więc 211 też nie.",
    "Uzasadnienia 2 i 3 nie mają związku z podzielnością przez 3 (np. 21 jest nieparzysta, kończy się na 1, a dzieli się przez 3)."
   ],
   "answer": "N, uzasadnienie 1.",
   "tip": "Przez 3 decyduje suma cyfr.",
   "check": [
    "211 % 3 != 0"
   ],
   "pts": 1
  },
  {
   "id": "t11",
   "skills": [
    "P1",
    "P6"
   ],
   "type": "self",
   "q": "Agata zapisała liczbę czterocyfrową podzielną przez 4 i przez 9. Skreśliła w niej cyfrę jedności i otrzymała liczbę 734. Jaką liczbę zapisała Agata? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Z warunku podzielności przez 9 wyznaczono cyfrę jedności: 7 + 3 + 4 + ■ = 14 + ■ = 18, więc ■ = 4.",
     "pts": 1
    },
    {
     "t": "Sprawdzono podzielność przez 4 (dwie ostatnie cyfry 44 : 4 = 11) i podano liczbę 7 344.",
     "pts": 1
    }
   ],
   "sol": [
    "Liczba ma postać 734■. Suma cyfr [[14 + ■]] ma dzielić się przez 9, więc [[■ = 4]].",
    "Przez 4: dwie ostatnie cyfry to 44, a 44 : 4 = 11. Zgadza się. Liczba to 7 344."
   ],
   "answer": "7 344.",
   "tip": "Gdy są dwa warunki, sprawdź oba.",
   "check": [
    "7344 % 36 == 0",
    "[d for d in range(10) if (7340 + d) % 36 == 0] == [4]"
   ],
   "pts": 2
  },
  {
   "id": "t12",
   "skills": [
    "P3",
    "P4",
    "P5"
   ],
   "type": "pair",
   "q": "Dane są liczby a = 2³ · 3 i b = 2² · 3². Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "NWD(a, b) jest równy",
     "opts": {
      "A": "12",
      "B": "6"
     },
     "ok": "A"
    },
    {
     "label": "NWW(a, b) jest równa",
     "opts": {
      "C": "864",
      "D": "72"
     },
     "ok": "D"
    }
   ],
   "sol": [
    "NWD: najmniejsze potęgi, [[2² · 3 = 12]].",
    "NWW: największe potęgi, [[2³ · 3² = 72]]. 864 to iloczyn a · b = 24 · 36."
   ],
   "answer": "A i D.",
   "tip": "Kontrola: 12 · 72 = 864 = 24 · 36.",
   "check": [
    "math.gcd(24, 36) == 12",
    "math.lcm(24, 36) == 72",
    "24*36 == 864"
   ],
   "pts": 1
  }
 ],
 "test_minutes": 35,
 "pass": 12,
 "dzial": "Dział 1: Liczby i działania"
};
