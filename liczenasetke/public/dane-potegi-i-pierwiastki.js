/* Wygenerowane przez zbuduj.py z tresc/potegi-i-pierwiastki.py. Nie edytuj ręcznie. */
window.TEMAT = {
 "slug": "potegi-i-pierwiastki",
 "title": "Potęgi i pierwiastki",
 "sign": "√",
 "lead": "Potęgi i pierwiastki są na egzaminie co roku, często w kilku zadaniach. W 2025 i 2026 roku były po dwa zadania zamknięte z tego tematu, a pierwiastki wracają też w geometrii.",
 "goals": {
  "learn": "9 umiejętności: potęgi, działania na potęgach, zamiana podstaw, notacja wykładnicza, pierwiastki, szacowanie, wyłączanie czynnika i działania na pierwiastkach.",
  "prereq": "Tabliczka mnożenia i działania na ułamkach. Rozgrzewka na początku to sprawdzi.",
  "goal": "Minimum 12 z 14 punktów w teście na koniec tematu."
 },
 "skills": {
  "W1": "Potęgi, kwadraty i sześciany",
  "W2": "Mnożenie i dzielenie potęg o tej samej podstawie",
  "W3": "Potęga potęgi i zamiana podstaw",
  "W4": "Notacja wykładnicza",
  "W5": "Obliczanie pierwiastków",
  "W6": "Szacowanie i porównywanie pierwiastków",
  "W7": "Wyłączanie i włączanie czynnika pod pierwiastek",
  "W8": "Działania na pierwiastkach",
  "W9": "Sprytne rachunki na potęgach"
 },
 "lessons": [
  {
   "title": "Potęgi, kwadraty i sześciany",
   "skills": [
    "W1"
   ],
   "intro": "Potęga to skrócony zapis mnożenia tej samej liczby. Kwadraty i sześciany pojawiają się wszędzie: w polach, objętościach i w twierdzeniu Pitagorasa.",
   "rule": {
    "t": "aⁿ to iloczyn n jednakowych czynników a.",
    "f": [
     "2⁵ = 2 · 2 · 2 · 2 · 2 = 32",
     "(−3)² = 9, (−2)³ = −8",
     "(2/3)² = 4/9, 0,1³ = 0,001"
    ],
    "e": "a¹ = a, a⁰ = 1 (gdy a ≠ 0). Uwaga: 2³ to NIE jest 2 · 3. Kwadraty do 15² i sześciany do 5³ warto znać na pamięć."
   },
   "example": {
    "q": "Oblicz 2³ · 3² oraz 5³ − 5².",
    "steps": [
     "2³ = 8, 3² = 9, więc 2³ · 3² = 8 · 9 = 72.",
     "5³ = 125, 5² = 25, więc 5³ − 5² = 125 − 25 = 100."
    ],
    "result": "2³ · 3² = 72, a 5³ − 5² = 100.",
    "tip": "To zadanie pochodzi z informatora CKE. Najczęstszy błąd: 2³ · 3² = 6⁵ albo 36. Różnych podstaw nie łączysz.",
    "check": [
     "2**3 * 3**2 == 72",
     "5**3 - 5**2 == 100"
    ]
   },
   "you": [
    {
     "id": "y1",
     "type": "fields",
     "q": "Oblicz.",
     "fields": [
      {
       "label": "(−1/2)³",
       "ans": -0.125,
       "show": "−1/8"
      },
      {
       "label": "0,3²",
       "ans": 0.09,
       "show": "0,09"
      },
      {
       "label": "(1 1/2)²",
       "ans": 2.25,
       "show": "2 1/4"
      }
     ],
     "sol": [
      "<b>(−1/2)³</b> = (−1/2) · (−1/2) · (−1/2) = [[−1/8]]. Trzy minusy, więc wynik ujemny.",
      "<b>0,3²</b> = 0,3 · 0,3 = [[0,09]], a nie 0,9.",
      "<b>(1 1/2)²</b> = (3/2)² = [[9/4 = 2 1/4]]."
     ],
     "answer": "−1/8; 0,09 i 2 1/4.",
     "tip": "Liczbę mieszaną przed potęgowaniem zamień na ułamek niewłaściwy.",
     "check": [
      "F(-1, 2)**3 == F(-1, 8)",
      "F('0.3')**2 == F('0.09')",
      "F(3, 2)**2 == F(9, 4)"
     ]
    }
   ]
  },
  {
   "title": "Mnożenie i dzielenie potęg",
   "skills": [
    "W2"
   ],
   "intro": "Gdy mnożysz lub dzielisz potęgi o tej samej podstawie, nie musisz ich liczyć. Wystarczy działać na wykładnikach.",
   "rule": {
    "t": "Przy tej samej podstawie: mnożąc, dodajesz wykładniki. Dzieląc, odejmujesz.",
    "f": [
     "aᵐ · aⁿ = aᵐ⁺ⁿ",
     "aᵐ : aⁿ = aᵐ⁻ⁿ"
    ],
    "e": "Działa tylko przy tej samej podstawie. Dodawania potęg tak się nie liczy: 2⁷ + 2⁷ to NIE jest 2¹⁴."
   },
   "example": {
    "q": "Zapisz w postaci jednej potęgi i oblicz: 3⁴ · 3⁵ : 3⁶.",
    "steps": [
     "Mnożenie: dodajemy wykładniki, 3⁴ · 3⁵ = 3⁹.",
     "Dzielenie: odejmujemy wykładniki, 3⁹ : 3⁶ = 3³.",
     "3³ = 27."
    ],
    "result": "3⁴ · 3⁵ : 3⁶ = 3³ = 27.",
    "tip": "Sprawdź na małym przykładzie: 2² · 2³ = 4 · 8 = 32 = 2⁵. Zgadza się, 2 + 3 = 5.",
    "check": [
     "3**4 * 3**5 // 3**6 == 3**3 == 27"
    ]
   },
   "you": [
    {
     "id": "y2",
     "type": "fields",
     "q": "5⁷ · 5³ : 5⁸ = 5^? Podaj wykładnik.",
     "fields": [
      {
       "label": "Wykładnik",
       "ans": 2,
       "show": "2"
      }
     ],
     "sol": [
      "[[7 + 3 = 10]], potem [[10 − 8 = 2]]. Wynik: 5² = 25."
     ],
     "answer": "2.",
     "tip": "Wykładniki liczysz od lewej, jak zwykłe działania.",
     "check": [
      "5**7 * 5**3 // 5**8 == 5**2"
     ]
    },
    {
     "id": "y2b",
     "type": "abcd",
     "q": "Wyrażenie a⁶ · a² : a⁴ (a ≠ 0) jest równe:",
     "opts": [
      "a⁴",
      "a³",
      "a¹²",
      "a⁸"
     ],
     "ok": 0,
     "why": {
      "B": "a³ wychodzi, gdy wykładniki pomnożysz i podzielisz (6 · 2 : 4). A trzeba dodać i odjąć.",
      "C": "a¹² to 6 + 2 + 4. Przy dzieleniu wykładniki odejmujesz.",
      "D": "a⁸ to tylko a⁶ · a². Pominięto dzielenie przez a⁴."
     },
     "sol": [
      "[[a⁶ · a² = a⁸]], potem [[a⁸ : a⁴ = a⁴]]."
     ],
     "answer": "A, a⁴.",
     "tip": "Mnożenie potęg: dodawanie wykładników. Dzielenie: odejmowanie.",
     "check": [
      "6 + 2 - 4 == 4"
     ]
    }
   ]
  },
  {
   "title": "Potęga potęgi i zamiana podstaw",
   "skills": [
    "W3"
   ],
   "intro": "Na egzaminie w 2025 roku było zadanie: zapisz 8⁶ : 4³ jako potęgę liczby 2. Podstawy są różne, ale 8 i 4 to też potęgi dwójki. Wystarczy je tak zapisać.",
   "rule": {
    "t": "Potęgę potęgi liczysz, mnożąc wykładniki. Potęgi o tym samym wykładniku możesz połączyć.",
    "f": [
     "(aᵐ)ⁿ = aᵐⁿ",
     "aⁿ · bⁿ = (a · b)ⁿ",
     "4 = 2², 8 = 2³, 9 = 3², 27 = 3³"
    ],
    "e": "Gdy podstawy są różne, spróbuj zapisać je jako potęgi tej samej liczby."
   },
   "example": {
    "q": "Zapisz 8⁶ : 4³ w postaci potęgi liczby 2.",
    "steps": [
     "8 = 2³, więc 8⁶ = (2³)⁶ = 2¹⁸.",
     "4 = 2², więc 4³ = (2²)³ = 2⁶.",
     "2¹⁸ : 2⁶ = 2¹²."
    ],
    "result": "8⁶ : 4³ = 2¹².",
    "tip": "W potędze potęgi wykładniki MNOŻYSZ: (2³)⁶ = 2¹⁸, a nie 2⁹.",
    "check": [
     "8**6 // 4**3 == 2**12"
    ]
   },
   "you": [
    {
     "id": "y3",
     "type": "fields",
     "q": "Podaj wykładniki.",
     "fields": [
      {
       "label": "(2³)⁴ = 2^?",
       "ans": 12,
       "show": "12"
      },
      {
       "label": "9⁴ : 27² = 3^?",
       "ans": 2,
       "show": "2"
      }
     ],
     "sol": [
      "<b>(2³)⁴</b> = 2^(3 · 4) = [[2¹²]].",
      "<b>9⁴ : 27²</b> = (3²)⁴ : (3³)² = [[3⁸ : 3⁶ = 3²]]."
     ],
     "answer": "12 i 2.",
     "tip": "Najpierw zamień podstawy, potem działaj na wykładnikach.",
     "check": [
      "(2**3)**4 == 2**12",
      "9**4 // 27**2 == 3**2"
     ]
    },
    {
     "id": "y3b",
     "type": "fields",
     "q": "Oblicz sprytnie.",
     "fields": [
      {
       "label": "25³ · 4³",
       "ans": 1000000,
       "show": "1 000 000"
      },
      {
       "label": "0,5⁶ · 2⁶",
       "ans": 1,
       "show": "1"
      }
     ],
     "sol": [
      "<b>25³ · 4³</b> = (25 · 4)³ = [[100³ = 1 000 000]].",
      "<b>0,5⁶ · 2⁶</b> = (0,5 · 2)⁶ = [[1⁶ = 1]]."
     ],
     "answer": "1 000 000 i 1.",
     "tip": "Ten sam wykładnik? Najpierw pomnóż podstawy.",
     "check": [
      "25**3 * 4**3 == 1000000",
      "F(1, 2)**6 * 2**6 == 1"
     ]
    }
   ]
  },
  {
   "title": "Notacja wykładnicza",
   "skills": [
    "W4"
   ],
   "intro": "Bardzo duże i bardzo małe liczby (odległości w kosmosie, rozmiary bakterii, pojemność dysku) zapisuje się krótko w notacji wykładniczej.",
   "rule": {
    "t": "Liczba w notacji wykładniczej to a · 10ᵏ, gdzie 1 ≤ a < 10, a k jest liczbą całkowitą.",
    "f": [
     "340 000 = 3,4 · 10⁵",
     "0,00052 = 5,2 · 10⁻⁴"
    ],
    "e": "Wykładnik mówi, o ile miejsc przesuwasz przecinek. Liczby duże mają k dodatnie, liczby mniejsze od 1 mają k ujemne. Zapis 34 · 10⁴ nie jest notacją wykładniczą, bo 34 > 10."
   },
   "example": {
    "q": "Zapisz w notacji wykładniczej: 150 000 000 km (odległość Ziemi od Słońca) i 0,000002 m (długość bakterii).",
    "steps": [
     "150 000 000: przecinek przesuwamy o 8 miejsc w lewo, żeby zostało 1,5. Więc 1,5 · 10⁸.",
     "0,000002: przecinek przesuwamy o 6 miejsc w prawo, żeby zostało 2. Więc 2 · 10⁻⁶."
    ],
    "result": "1,5 · 10⁸ km i 2 · 10⁻⁶ m.",
    "tip": "Sprawdzenie: 10⁸ to jedynka i 8 zer. 1,5 · 100 000 000 = 150 000 000.",
    "check": [
     "F('1.5') * 10**8 == 150000000",
     "2 * F(1, 10**6) == F('0.000002')"
    ]
   },
   "you": [
    {
     "id": "y4",
     "type": "fields",
     "q": "Podaj wykładnik k.",
     "fields": [
      {
       "label": "4 700 000 = 4,7 · 10^k",
       "ans": 6,
       "show": "6"
      },
      {
       "label": "0,003 = 3 · 10^k",
       "ans": -3,
       "show": "−3"
      }
     ],
     "sol": [
      "<b>4 700 000:</b> przecinek o 6 miejsc: [[4,7 · 10⁶]].",
      "<b>0,003:</b> przecinek o 3 miejsca w prawo: [[3 · 10⁻³]]."
     ],
     "answer": "6 i −3.",
     "tip": "Liczba mniejsza od 1 zawsze ma ujemny wykładnik.",
     "check": [
      "F('4.7') * 10**6 == 4700000",
      "3 * F(1, 1000) == F('0.003')"
     ]
    },
    {
     "id": "y4b",
     "type": "abcd",
     "q": "Która liczba jest zapisana w notacji wykładniczej?",
     "opts": [
      "12 · 10³",
      "0,5 · 10⁴",
      "3,2 · 10⁵",
      "3,2 · 5⁴"
     ],
     "ok": 2,
     "why": {
      "A": "12 jest większe od 10, a w notacji wykładniczej a < 10. Poprawnie: 1,2 · 10⁴.",
      "B": "0,5 jest mniejsze od 1. Poprawnie: 5 · 10³.",
      "D": "W notacji wykładniczej mnożymy przez potęgę liczby 10, a nie 5."
     },
     "sol": [
      "Warunki: 1 ≤ a < 10 i potęga dziesiątki. Spełnia je tylko [[3,2 · 10⁵]]."
     ],
     "answer": "C, 3,2 · 10⁵.",
     "tip": "Sprawdź oba warunki: liczba przed kropką mnożenia od 1 do 10 i podstawa 10.",
     "check": [
      "1 <= 3.2 < 10"
     ]
    }
   ]
  },
  {
   "title": "Obliczanie pierwiastków",
   "skills": [
    "W5"
   ],
   "intro": "Pierwiastek to działanie odwrotne do potęgowania. √49 = 7, bo 7² = 49. Na egzaminie w 2026 roku trzeba było obliczyć kilka wyrażeń z pierwiastkami z sum, np. √(64 + 36).",
   "rule": {
    "t": "√a = b, gdy b² = a i b ≥ 0. ∛a = b, gdy b³ = a.",
    "f": [
     "√49 = 7, √(9/16) = 3/4, √0,04 = 0,2",
     "∛64 = 4, ∛(−8) = −2, ∛0,001 = 0,1"
    ],
    "e": "Pierwiastek z sumy to NIE suma pierwiastków: √(64 + 36) = √100 = 10, a nie 8 + 6. Pierwiastka kwadratowego z liczby ujemnej nie ma, sześcienny jest."
   },
   "example": {
    "q": "Oblicz √(9/25) + ∛(−27) oraz √0,16 · √100.",
    "steps": [
     "√(9/25) = 3/5, bo (3/5)² = 9/25. ∛(−27) = −3, bo (−3)³ = −27.",
     "3/5 + (−3) = −2 2/5.",
     "√0,16 = 0,4, bo 0,4² = 0,16. √100 = 10. Iloczyn: 0,4 · 10 = 4."
    ],
    "result": "−2 2/5 oraz 4.",
    "tip": "Pierwiastek z ułamka: osobno z licznika i z mianownika. √0,16: zamień na 16/100.",
    "check": [
     "F(3, 5) + (-3) == -2 - F(2, 5)",
     "F('0.4')**2 == F('0.16')"
    ]
   },
   "you": [
    {
     "id": "y5",
     "type": "fields",
     "q": "Oblicz.",
     "fields": [
      {
       "label": "√(1 9/16)",
       "ans": 1.25,
       "show": "1 1/4"
      },
      {
       "label": "∛0,008",
       "ans": 0.2,
       "show": "0,2"
      }
     ],
     "sol": [
      "<b>√(1 9/16)</b> = √(25/16) = [[5/4 = 1 1/4]]. Nie 1 3/4!",
      "<b>∛0,008</b> = [[0,2]], bo 0,2³ = 0,008."
     ],
     "answer": "1 1/4 i 0,2.",
     "tip": "Liczbę mieszaną pod pierwiastkiem zawsze zamień na ułamek niewłaściwy.",
     "check": [
      "F(5, 4)**2 == 1 + F(9, 16)",
      "F('0.2')**3 == F('0.008')"
     ]
    },
    {
     "id": "y5b",
     "type": "pf",
     "q": "Oceń prawdziwość zdań.",
     "items": [
      {
       "t": "√(64 + 36) = 8 + 6",
       "ok": "F"
      },
      {
       "t": "√25 − √16 = 1",
       "ok": "P"
      }
     ],
     "sol": [
      "<b>Zdanie 1.</b> [[√(64 + 36) = √100 = 10]], a 8 + 6 = 14. Fałsz.",
      "<b>Zdanie 2.</b> [[5 − 4 = 1]]. Prawda."
     ],
     "answer": "F, P.",
     "tip": "Najpierw policz to, co jest pod pierwiastkiem.",
     "check": [
      "math.isqrt(64 + 36) == 10",
      "math.isqrt(25) - math.isqrt(16) == 1"
     ]
    }
   ]
  },
  {
   "title": "Szacowanie i porównywanie pierwiastków",
   "skills": [
    "W6"
   ],
   "intro": "√137 nie jest liczbą całkowitą, ale łatwo sprawdzić, między jakimi liczbami leży. To umiejętność z wymagań egzaminacyjnych i bardzo przydatna do sprawdzania wyników.",
   "rule": {
    "t": "Znajdź kwadraty liczb całkowitych, między którymi leży liczba pod pierwiastkiem.",
    "f": [
     "121 < 137 < 144, więc 11 < √137 < 12"
    ],
    "e": "Porównując a√b z inną liczbą, porównaj kwadraty: 3√5 = √45, a 7 = √49, więc 3√5 < 7."
   },
   "example": {
    "q": "Między jakimi kolejnymi liczbami całkowitymi leży √75? A 2√15?",
    "steps": [
     "64 < 75 < 81, więc 8 < √75 < 9.",
     "2√15 = √(4 · 15) = √60. 49 < 60 < 64, więc 7 < 2√15 < 8."
    ],
    "result": "√75 leży między 8 a 9, a 2√15 między 7 a 8.",
    "tip": "Czynnik przed pierwiastkiem włączasz do środka jako kwadrat: 2√15 = √(2² · 15).",
    "check": [
     "8**2 < 75 < 9**2",
     "7**2 < 4*15 < 8**2"
    ]
   },
   "you": [
    {
     "id": "y6",
     "type": "fields",
     "q": "Odpowiedz.",
     "fields": [
      {
       "label": "Najmniejsza liczba całkowita większa od √50",
       "ans": 8,
       "show": "8"
      },
      {
       "label": "Największa liczba całkowita mniejsza od ∛100",
       "ans": 4,
       "show": "4"
      }
     ],
     "sol": [
      "49 < 50 < 64, więc 7 < √50 < 8. Szukana liczba to [[8]].",
      "64 < 100 < 125, czyli 4³ < 100 < 5³. Więc 4 < ∛100 < 5. Szukana liczba to [[4]]."
     ],
     "answer": "8 i 4.",
     "tip": "Przy pierwiastku sześciennym szukasz sześcianów: 1, 8, 27, 64, 125.",
     "check": [
      "7**2 < 50 < 8**2",
      "4**3 < 100 < 5**3"
     ]
    },
    {
     "id": "y6b",
     "type": "abcd",
     "q": "Która liczba jest największa?",
     "opts": [
      "3√3",
      "2√7",
      "5",
      "√26"
     ],
     "ok": 1,
     "why": {
      "A": "3√3 = √27, a 2√7 = √28.",
      "C": "5 = √25, to najmniejsza z nich.",
      "D": "√26 < √28."
     },
     "sol": [
      "Zapisujemy wszystko pod jednym pierwiastkiem: [[3√3 = √27]], [[2√7 = √28]], [[5 = √25]], √26.",
      "Największa jest √28, czyli 2√7."
     ],
     "answer": "B, 2√7.",
     "tip": "Wszystko pod pierwiastek, potem porównaj liczby pod pierwiastkami.",
     "check": [
      "9*3 == 27",
      "4*7 == 28",
      "max(27, 28, 25, 26) == 28"
     ]
    }
   ]
  },
  {
   "title": "Wyłączanie czynnika przed pierwiastek",
   "skills": [
    "W7"
   ],
   "intro": "√50 można zapisać prościej: 5√2. Takie przekształcenie pozwala dodawać pierwiastki i porównywać wyniki. W informatorze CKE jest zadanie, które bez tego się nie uda.",
   "rule": {
    "t": "Rozłóż liczbę pod pierwiastkiem na kwadrat i resztę. Z kwadratu wyciągnij pierwiastek.",
    "f": [
     "√50 = √(25 · 2) = 5√2",
     "3√2 = √(9 · 2) = √18"
    ],
    "e": "Szukaj największego kwadratu: 4, 9, 16, 25, 36, 49, 64, 81, 100. √72 = √(36 · 2) = 6√2. Podobnie z sześcianem: ∛16 = ∛(8 · 2) = 2∛2."
   },
   "example": {
    "q": "Wyłącz czynnik przed znak pierwiastka: √48 i √200.",
    "steps": [
     "48 = 16 · 3, więc √48 = √16 · √3 = 4√3.",
     "200 = 100 · 2, więc √200 = 10√2."
    ],
    "result": "√48 = 4√3, a √200 = 10√2.",
    "tip": "Gdy wyłączysz za mały kwadrat (√48 = 2√12), wyłączaj dalej: 2√12 = 2 · 2√3 = 4√3.",
    "check": [
     "16*3 == 48",
     "100*2 == 200"
    ]
   },
   "you": [
    {
     "id": "y7",
     "type": "fields",
     "q": "Uzupełnij.",
     "fields": [
      {
       "label": "√98 = a√2, a = ?",
       "ans": 7,
       "show": "7"
      },
      {
       "label": "√75 = a√3, a = ?",
       "ans": 5,
       "show": "5"
      }
     ],
     "sol": [
      "[[98 = 49 · 2]], więc √98 = 7√2.",
      "[[75 = 25 · 3]], więc √75 = 5√3."
     ],
     "answer": "7 i 5.",
     "tip": "Podziel liczbę spod pierwiastka przez to, co ma zostać (2 lub 3), i sprawdź, czy wyszedł kwadrat.",
     "check": [
      "49*2 == 98",
      "25*3 == 75"
     ]
    },
    {
     "id": "y7b",
     "type": "fields",
     "q": "Włącz czynnik pod pierwiastek.",
     "fields": [
      {
       "label": "2√5 = √?",
       "ans": 20,
       "show": "20"
      },
      {
       "label": "3√3 = √?",
       "ans": 27,
       "show": "27"
      }
     ],
     "sol": [
      "[[2√5 = √(4 · 5) = √20]].",
      "[[3√3 = √(9 · 3) = √27]]."
     ],
     "answer": "√20 i √27.",
     "tip": "Czynnik włączasz jako jego kwadrat.",
     "check": [
      "2**2*5 == 20",
      "3**2*3 == 27"
     ]
    }
   ]
  },
  {
   "title": "Działania na pierwiastkach",
   "skills": [
    "W8"
   ],
   "intro": "Pierwiastki można mnożyć i dzielić „pod jednym dachem”. Dodawać można tylko pierwiastki z tej samej liczby, tak jak dodaje się jabłka do jabłek.",
   "rule": {
    "t": "√a · √b = √(a · b), √a : √b = √(a : b). Dodajesz tylko pierwiastki z tej samej liczby.",
    "f": [
     "√2 · √8 = √16 = 4",
     "3√2 + 5√2 = 8√2",
     "√8 + √2 = 2√2 + √2 = 3√2"
    ],
    "e": "√2 + √3 to NIE jest √5. Zanim dodasz pierwiastki, wyłącz czynniki. Wtedy często okazuje się, że są „z tej samej liczby”."
   },
   "example": {
    "q": "Dane są liczby √2, √8, −√10, −√18. Suma trzech z nich jest równa 0. Którą liczbę trzeba odrzucić?",
    "steps": [
     "Wyłączamy czynniki: √8 = 2√2, √18 = 3√2. √10 nie da się uprościć.",
     "√2 + 2√2 − 3√2 = 0. Te trzy liczby dają zero.",
     "Odrzucamy −√10."
    ],
    "result": "Trzeba odrzucić −√10.",
    "tip": "To zadanie 16 z informatora CKE. Bez wyłączania czynnika nie da się go rozwiązać.",
    "check": [
     "1 + 2 - 3 == 0",
     "4*2 == 8",
     "9*2 == 18"
    ]
   },
   "you": [
    {
     "id": "y8",
     "type": "fields",
     "q": "Oblicz.",
     "fields": [
      {
       "label": "√3 · √12",
       "ans": 6,
       "show": "6"
      },
      {
       "label": "√50 : √2",
       "ans": 5,
       "show": "5"
      },
      {
       "label": "√12 + √27 = a√3, a = ?",
       "ans": 5,
       "show": "5"
      }
     ],
     "sol": [
      "<b>√3 · √12</b> = √36 = [[6]].",
      "<b>√50 : √2</b> = √25 = [[5]].",
      "<b>√12 + √27</b> = 2√3 + 3√3 = [[5√3]]."
     ],
     "answer": "6, 5 i 5√3.",
     "tip": "Mnożąc i dzieląc, łącz pod jednym pierwiastkiem. Dodając, najpierw upraszczaj.",
     "check": [
      "math.isqrt(3*12) == 6",
      "math.isqrt(50//2) == 5",
      "2 + 3 == 5"
     ]
    }
   ]
  },
  {
   "title": "Sprytne rachunki na potęgach",
   "skills": [
    "W9"
   ],
   "intro": "Niektóre zadania z potęgami wyglądają groźnie (2⁷ · 2⁷ : (2⁷ + 2⁷)), a da się je rozwiązać w pamięci. Wystarczy zauważyć, że suma jednakowych potęg to mnożenie.",
   "rule": {
    "t": "Suma jednakowych potęg: aⁿ + aⁿ = 2 · aⁿ. Dla podstawy 2: 2ⁿ + 2ⁿ = 2ⁿ⁺¹.",
    "f": [
     "2⁷ + 2⁷ = 2⁸",
     "3⁵ + 3⁵ + 3⁵ = 3⁶",
     "2 + 2 + … + 2 (16 razy) = 16 · 2 = 2⁵"
    ],
    "e": "Wyłączaj wspólny czynnik: 5³ − 5² = 5² · (5 − 1) = 25 · 4 = 100."
   },
   "example": {
    "q": "Czy wartość wyrażenia 2⁷ · 2⁷ : (2⁷ + 2⁷) jest liczbą podzielną przez 8?",
    "steps": [
     "Licznik: 2⁷ · 2⁷ = 2¹⁴.",
     "Mianownik: 2⁷ + 2⁷ = 2 · 2⁷ = 2⁸.",
     "2¹⁴ : 2⁸ = 2⁶ = 64 = 8 · 8. Dzieli się przez 8."
    ],
    "result": "Tak, wartość to 64 = 8 · 8.",
    "tip": "To zadanie 9 z informatora CKE. W wersji z uzasadnieniem poprawne było „wartość wyrażenia można zapisać w postaci 8 · 2³”.",
    "check": [
     "2**7 * 2**7 // (2**7 + 2**7) == 64 == 8 * 2**3"
    ]
   },
   "you": [
    {
     "id": "y9",
     "type": "abcd",
     "q": "Suma dwudziestu siedmiu jednakowych składników 3 + 3 + … + 3 jest równa:",
     "opts": [
      "3²⁷",
      "3⁴",
      "27³",
      "3³"
     ],
     "ok": 1,
     "why": {
      "A": "3²⁷ to ILOCZYN 27 trójek, a tu jest suma.",
      "C": "27³ = 19 683, o wiele za dużo.",
      "D": "3³ = 27 to tylko liczba składników."
     },
     "sol": [
      "Suma 27 trójek to [[27 · 3 = 81]].",
      "81 = 3 · 3 · 3 · 3 = [[3⁴]]. Albo: 27 · 3 = 3³ · 3 = 3⁴."
     ],
     "answer": "B, 3⁴.",
     "tip": "Suma jednakowych składników to mnożenie, a nie potęga.",
     "check": [
      "27 * 3 == 3**4"
     ]
    }
   ]
  }
 ],
 "traps": [
  {
   "name": "Łączenie różnych podstaw",
   "bad": "2³ · 2⁴ = 4⁷",
   "good": "podstawa zostaje: 2³ · 2⁴ = 2⁷"
  },
  {
   "name": "Dodawanie potęg jak mnożenie",
   "bad": "2⁵ + 2⁵ = 2¹⁰",
   "good": "2⁵ + 2⁵ = 2 · 2⁵ = 2⁶"
  },
  {
   "name": "Pierwiastek z sumy",
   "bad": "√(16 + 9) = 4 + 3 = 7",
   "good": "√(16 + 9) = √25 = 5"
  }
 ],
 "cheat": {
  "title": "Potęgi i pierwiastki w 9 zasadach",
  "rules": [
   {
    "t": "Potęga: mnożenie jednakowych czynników.",
    "f": [
     "2⁵ = 32",
     "(−2)³ = −8",
     "a⁰ = 1"
    ],
    "e": "(2/3)² = 4/9, 0,3² = 0,09"
   },
   {
    "t": "Ta sama podstawa: · dodajesz, : odejmujesz wykładniki.",
    "f": [
     "aᵐ · aⁿ = aᵐ⁺ⁿ",
     "aᵐ : aⁿ = aᵐ⁻ⁿ"
    ],
    "e": "3⁴ · 3⁵ : 3⁶ = 3³"
   },
   {
    "t": "Potęga potęgi: mnożysz wykładniki.",
    "f": [
     "(aᵐ)ⁿ = aᵐⁿ",
     "aⁿ · bⁿ = (ab)ⁿ"
    ],
    "e": "8⁶ : 4³ = 2¹⁸ : 2⁶ = 2¹²"
   },
   {
    "t": "Notacja wykładnicza: a · 10ᵏ, 1 ≤ a < 10.",
    "f": [
     "340 000 = 3,4 · 10⁵",
     "0,00052 = 5,2 · 10⁻⁴"
    ],
    "e": "k = o ile miejsc przesuwasz przecinek"
   },
   {
    "t": "Pierwiastek: działanie odwrotne do potęgi.",
    "f": [
     "√(9/16) = 3/4",
     "∛(−8) = −2"
    ],
    "e": "√(64 + 36) = 10, a nie 14"
   },
   {
    "t": "Szacowanie: kwadraty dookoła.",
    "f": [
     "121 < 137 < 144 → 11 < √137 < 12"
    ],
    "e": "3√5 = √45 < √49 = 7"
   },
   {
    "t": "Wyłączanie czynnika: szukaj kwadratu.",
    "f": [
     "√50 = 5√2",
     "3√2 = √18"
    ],
    "e": "√72 = 6√2"
   },
   {
    "t": "Działania: · i : pod jednym pierwiastkiem, + tylko podobne.",
    "f": [
     "√2 · √8 = 4",
     "√8 + √2 = 3√2"
    ],
    "e": "√2 + √3 ≠ √5"
   },
   {
    "t": "Suma jednakowych potęg to mnożenie.",
    "f": [
     "2ⁿ + 2ⁿ = 2ⁿ⁺¹"
    ],
    "e": "2⁷ · 2⁷ : (2⁷ + 2⁷) = 2⁶"
   }
  ]
 },
 "memo": {
  "title": "Kwadraty i sześciany: warto znać na pamięć",
  "rows": [
   [
    "11²",
    "12²",
    "13²",
    "14²",
    "15²",
    "2³",
    "3³",
    "4³",
    "5³"
   ],
   [
    "121",
    "144",
    "169",
    "196",
    "225",
    "8",
    "27",
    "64",
    "125"
   ]
  ],
  "note": "Potęgi dwójki: 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024. Kwadraty do 10² znasz z tabliczki mnożenia."
 },
 "warmup": {
  "id": "w0",
  "type": "fields",
  "q": "Rozgrzewka: tabliczka mnożenia i ułamki.",
  "fields": [
   {
    "label": "12 · 12",
    "ans": 144,
    "show": "144"
   },
   {
    "label": "0,2 · 0,2",
    "ans": 0.04,
    "show": "0,04"
   },
   {
    "label": "3/4 · 3/4",
    "ans": 0.5625,
    "show": "9/16"
   }
  ],
  "sol": [
   "<b>12 · 12</b> = [[144]].",
   "<b>0,2 · 0,2</b> = [[0,04]], dwie cyfry po przecinku.",
   "<b>3/4 · 3/4</b> = [[9/16]]."
  ],
  "answer": "144; 0,04 i 9/16.",
  "tip": "Kwadrat ułamka dziesiętnego ma dwa razy więcej cyfr po przecinku.",
  "check": [
   "12*12 == 144",
   "F('0.2')**2 == F('0.04')",
   "F(3, 4)**2 == F(9, 16)"
  ]
 },
 "levels": [
  {
   "n": 1,
   "name": "Podstawy",
   "desc": "Każda umiejętność osobno. Gdy pytamy o wykładnik, wpisz samą liczbę, np. 12 albo −3."
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
   "id": "a2",
   "level": 1,
   "skills": [
    "W1"
   ],
   "type": "pair",
   "q": "Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "Wartość wyrażenia 2³ · 3² jest równa",
     "opts": {
      "A": "36",
      "B": "72"
     },
     "ok": "B"
    },
    {
     "label": "Wartość wyrażenia 5³ − 5² jest równa",
     "opts": {
      "C": "5",
      "D": "100"
     },
     "ok": "D"
    }
   ],
   "sol": [
    "[[2³ · 3² = 8 · 9 = 72]]. 36 to 6², czyli błędne połączenie podstaw.",
    "[[5³ − 5² = 125 − 25 = 100]]. 5 to 5¹, czyli odjęte wykładniki, a tak się nie odejmuje potęg."
   ],
   "answer": "B i D.",
   "tip": "To zadanie 6 z informatora CKE.",
   "check": [
    "2**3 * 3**2 == 72",
    "5**3 - 5**2 == 100"
   ],
   "twin": {
    "type": "pair",
    "q": "Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Wartość wyrażenia 3³ · 2² jest równa",
      "opts": {
       "A": "108",
       "B": "36"
      },
      "ok": "A"
     },
     {
      "label": "Wartość wyrażenia 4³ − 4² jest równa",
      "opts": {
       "C": "4",
       "D": "48"
      },
      "ok": "D"
     }
    ],
    "sol": [
     "[[27 · 4 = 108]].",
     "[[64 − 16 = 48]]."
    ],
    "answer": "A i D.",
    "tip": "Policz każdą potęgę osobno.",
    "check": [
     "3**3 * 2**2 == 108",
     "4**3 - 4**2 == 48"
    ]
   },
   "twin2": {
    "type": "pair",
    "q": "Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Wartość wyrażenia 2⁴ · 5² jest równa",
      "opts": {
       "A": "400",
       "B": "100"
      },
      "ok": "A"
     },
     {
      "label": "Wartość wyrażenia 3³ − 3² jest równa",
      "opts": {
       "C": "18",
       "D": "3"
      },
      "ok": "C"
     }
    ],
    "sol": [
     "[[16 · 25 = 400]].",
     "[[27 − 9 = 18]]. 3 to 3¹, czyli odjęte wykładniki, a tak nie wolno."
    ],
    "answer": "A i C.",
    "tip": "Policz każdą potęgę osobno.",
    "check": [
     "2**4 * 5**2 == 400",
     "3**3 - 3**2 == 18"
    ]
   }
  },
  {
   "id": "a4",
   "level": 1,
   "skills": [
    "W3"
   ],
   "type": "fields",
   "q": "Podaj wykładniki.",
   "fields": [
    {
     "label": "(2⁴)³ = 2^?",
     "ans": 12,
     "show": "12",
     "why": [
      [
       7,
       "W potędze potęgi wykładniki mnożysz: 4 · 3 = 12."
      ]
     ]
    },
    {
     "label": "(3²)⁵ = 3^?",
     "ans": 10,
     "show": "10",
     "why": [
      [
       7,
       "Mnożysz: 2 · 5 = 10."
      ]
     ]
    }
   ],
   "sol": [
    "[[4 · 3 = 12]].",
    "[[2 · 5 = 10]]."
   ],
   "answer": "12 i 10.",
   "tip": "Potęga potęgi: mnożysz wykładniki.",
   "check": [
    "(2**4)**3 == 2**12",
    "(3**2)**5 == 3**10"
   ],
   "twin": {
    "type": "fields",
    "q": "Podaj wykładniki.",
    "fields": [
     {
      "label": "(5³)² = 5^?",
      "ans": 6,
      "show": "6"
     },
     {
      "label": "(7⁴)³ = 7^?",
      "ans": 12,
      "show": "12"
     }
    ],
    "sol": [
     "[[3 · 2 = 6]].",
     "[[4 · 3 = 12]]."
    ],
    "answer": "6 i 12.",
    "tip": "Nie dodawaj, tylko mnóż.",
    "check": [
     "(5**3)**2 == 5**6",
     "(7**4)**3 == 7**12"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Podaj wykładniki.",
    "fields": [
     {
      "label": "(4²)⁵ = 4^?",
      "ans": 10,
      "show": "10",
      "why": [
       [
        7,
        "Mnożysz wykładniki: 2 · 5."
       ]
      ]
     },
     {
      "label": "(2⁶)³ = 2^?",
      "ans": 18,
      "show": "18",
      "why": [
       [
        9,
        "Mnożysz wykładniki: 6 · 3."
       ]
      ]
     }
    ],
    "sol": [
     "[[2 · 5 = 10]].",
     "[[6 · 3 = 18]]."
    ],
    "answer": "10 i 18.",
    "tip": "(aᵐ)ⁿ = aᵐⁿ.",
    "check": [
     "(4**2)**5 == 4**10",
     "(2**6)**3 == 2**18"
    ]
   }
  },
  {
   "id": "a5",
   "level": 1,
   "skills": [
    "W4"
   ],
   "type": "fields",
   "q": "Podaj wykładnik k.",
   "fields": [
    {
     "label": "3 400 000 = 3,4 · 10^k",
     "ans": 6,
     "show": "6",
     "why": [
      [
       5,
       "Policz miejsca: z 3 400 000 do 3,4 przesuwasz przecinek o 6 miejsc."
      ]
     ]
    },
    {
     "label": "0,00072 = 7,2 · 10^k",
     "ans": -4,
     "show": "−4",
     "why": [
      [
       4,
       "Liczba mniejsza od 1 ma wykładnik ujemny: −4."
      ],
      [
       -5,
       "Z 0,00072 do 7,2 przesuwasz przecinek o 4 miejsca."
      ]
     ]
    }
   ],
   "sol": [
    "<b>3 400 000:</b> przecinek o 6 miejsc w lewo: [[3,4 · 10⁶]].",
    "<b>0,00072:</b> przecinek o 4 miejsca w prawo: [[7,2 · 10⁻⁴]]."
   ],
   "answer": "6 i −4.",
   "tip": "Policz, o ile miejsc przesuwasz przecinek.",
   "check": [
    "F('3.4') * 10**6 == 3400000",
    "F('7.2') / 10**4 == F('0.00072')"
   ],
   "twin": {
    "type": "fields",
    "q": "Podaj wykładnik k.",
    "fields": [
     {
      "label": "58 000 = 5,8 · 10^k",
      "ans": 4,
      "show": "4"
     },
     {
      "label": "0,009 = 9 · 10^k",
      "ans": -3,
      "show": "−3"
     }
    ],
    "sol": [
     "[[5,8 · 10⁴]].",
     "[[9 · 10⁻³]]."
    ],
    "answer": "4 i −3.",
    "tip": "0,009 = 9/1000.",
    "check": [
     "F('5.8') * 10**4 == 58000",
     "F(9, 1000) == F('0.009')"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Podaj wykładnik k.",
    "fields": [
     {
      "label": "610 000 = 6,1 · 10^k",
      "ans": 5,
      "show": "5"
     },
     {
      "label": "0,0048 = 4,8 · 10^k",
      "ans": -3,
      "show": "−3",
      "why": [
       [
        3,
        "Liczba mniejsza od 1: wykładnik ujemny."
       ]
      ]
     }
    ],
    "sol": [
     "[[6,1 · 10⁵]].",
     "[[4,8 · 10⁻³]]."
    ],
    "answer": "5 i −3.",
    "tip": "Policz, o ile miejsc przesuwasz przecinek.",
    "check": [
     "F('6.1') * 10**5 == 610000",
     "F('4.8') / 1000 == F('0.0048')"
    ]
   }
  },
  {
   "id": "a7",
   "level": 1,
   "skills": [
    "W5"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "√(100 − 64) − 2 = 4",
     "ok": "P"
    },
    {
     "t": "12 − √(64 + 36) = 4",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[√36 − 2 = 6 − 2 = 4]]. Prawda.",
    "<b>Zdanie 2.</b> [[12 − √100 = 12 − 10 = 2]]. Fałsz. (4 wyszłoby, gdyby policzyć √64 + √36 = 14, a to błąd.)"
   ],
   "answer": "P, F.",
   "tip": "Podobne wyrażenia były w zadaniu 3 na egzaminie w 2026 roku.",
   "check": [
    "math.isqrt(100 - 64) - 2 == 4",
    "12 - math.isqrt(64 + 36) == 2"
   ],
   "twin": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "7 − √(9 + 16) = 2",
      "ok": "P"
     },
     {
      "t": "√(25 − 16) − 3 = 2",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[7 − √25 = 7 − 5 = 2]]. Prawda.",
     "<b>Zdanie 2.</b> [[√9 − 3 = 3 − 3 = 0]]. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Najpierw działanie pod pierwiastkiem.",
    "check": [
     "7 - math.isqrt(9 + 16) == 2",
     "math.isqrt(25 - 16) - 3 == 0"
    ]
   },
   "twin2": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "√(36 + 64) − 5 = 5",
      "ok": "P"
     },
     {
      "t": "15 − √(81 − 45) = 12",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[√100 − 5 = 5]]. Prawda.",
     "<b>Zdanie 2.</b> [[15 − √36 = 15 − 6 = 9]]. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Najpierw pod pierwiastkiem.",
    "check": [
     "math.isqrt(36 + 64) - 5 == 5",
     "15 - math.isqrt(81 - 45) == 9"
    ]
   }
  },
  {
   "id": "a10",
   "level": 1,
   "skills": [
    "W8"
   ],
   "type": "fields",
   "q": "Oblicz.",
   "fields": [
    {
     "label": "√2 · √18",
     "ans": 6,
     "show": "6",
     "why": [
      [
       36,
       "√36 = 6. Nie zapomnij spierwiastkować."
      ]
     ]
    },
    {
     "label": "√75 : √3",
     "ans": 5,
     "show": "5"
    }
   ],
   "sol": [
    "[[√2 · √18 = √36 = 6]].",
    "[[√75 : √3 = √25 = 5]]."
   ],
   "answer": "6 i 5.",
   "tip": "Najpierw połącz pod jednym pierwiastkiem, potem oblicz.",
   "check": [
    "math.isqrt(2*18) == 6",
    "math.isqrt(75//3) == 5"
   ],
   "twin": {
    "type": "fields",
    "q": "Oblicz.",
    "fields": [
     {
      "label": "√5 · √20",
      "ans": 10,
      "show": "10"
     },
     {
      "label": "√98 : √2",
      "ans": 7,
      "show": "7"
     }
    ],
    "sol": [
     "[[√100 = 10]].",
     "[[√49 = 7]]."
    ],
    "answer": "10 i 7.",
    "tip": "√a · √b = √(ab).",
    "check": [
     "math.isqrt(5*20) == 10",
     "math.isqrt(98//2) == 7"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Oblicz.",
    "fields": [
     {
      "label": "√3 · √27",
      "ans": 9,
      "show": "9",
      "why": [
       [
        81,
        "√81 = 9."
       ]
      ]
     },
     {
      "label": "√72 : √2",
      "ans": 6,
      "show": "6"
     }
    ],
    "sol": [
     "[[√81 = 9]].",
     "[[√36 = 6]]."
    ],
    "answer": "9 i 6.",
    "tip": "Połącz pod jednym pierwiastkiem.",
    "check": [
     "math.isqrt(3*27) == 9",
     "math.isqrt(72//2) == 6"
    ]
   }
  },
  {
   "id": "a11",
   "level": 1,
   "skills": [
    "W9"
   ],
   "type": "abcd",
   "q": "Suma szesnastu jednakowych składników 4 + 4 + … + 4 jest równa:",
   "opts": [
    "4¹⁶",
    "16⁴",
    "4³",
    "4²"
   ],
   "ok": 2,
   "why": {
    "A": "4¹⁶ to iloczyn szesnastu czwórek, a nie suma.",
    "B": "16⁴ = 65 536, o wiele za dużo.",
    "D": "4² = 16 to tylko liczba składników."
   },
   "sol": [
    "Suma 16 czwórek: [[16 · 4 = 64]].",
    "[[64 = 4³]]."
   ],
   "answer": "C, 4³.",
   "tip": "Podobne zadanie jest w informatorze CKE (zadanie 13).",
   "check": [
    "16 * 4 == 4**3"
   ],
   "twin": {
    "type": "abcd",
    "q": "Suma ośmiu jednakowych składników 2³ + 2³ + … + 2³ jest równa:",
    "opts": [
     "2⁶",
     "2²⁴",
     "16³",
     "2¹¹"
    ],
    "ok": 0,
    "why": {
     "B": "2²⁴ to iloczyn ośmiu czynników 2³, a nie suma.",
     "C": "16³ = 4 096, za dużo.",
     "D": "2¹¹ wychodzi z dodania 3 + 8. Tak się nie liczy."
    },
    "sol": [
     "[[8 · 2³ = 2³ · 2³ = 2⁶]] = 64."
    ],
    "answer": "A, 2⁶.",
    "tip": "8 = 2³.",
    "check": [
     "8 * 2**3 == 2**6"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Suma dziewięciu jednakowych składników 3² + 3² + … + 3² jest równa:",
    "opts": [
     "3¹⁸",
     "9⁹",
     "3¹¹",
     "3⁴"
    ],
    "ok": 3,
    "why": {
     "A": "3¹⁸ to iloczyn dziewięciu czynników 3², a nie suma.",
     "B": "9⁹ to o wiele za dużo.",
     "C": "3¹¹ wychodzi z dodania 2 + 9. Tak się nie liczy."
    },
    "sol": [
     "[[9 · 3² = 3² · 3² = 3⁴]] = 81."
    ],
    "answer": "D, 3⁴.",
    "tip": "9 = 3².",
    "check": [
     "9 * 3**2 == 3**4"
    ]
   }
  },
  {
   "id": "b1",
   "level": 2,
   "skills": [
    "W3",
    "W2"
   ],
   "type": "abcd",
   "q": "Wartość wyrażenia 9⁵ : 27² zapisana w postaci potęgi liczby 3 jest równa:",
   "opts": [
    "3³",
    "3⁴",
    "3¹⁶",
    "3¹"
   ],
   "ok": 1,
   "why": {
    "A": "3³ wychodzi z odjęcia wykładników 5 − 2 bez zamiany podstaw. Podstawy 9 i 27 są różne.",
    "C": "3¹⁶ to 3¹⁰ · 3⁶. Przy dzieleniu wykładniki się odejmuje.",
    "D": "3¹ wychodzi, gdy (3²)⁵ policzysz jako 3⁷, dodając wykładniki. Potęgę potęgi liczy się mnożąc."
   },
   "sol": [
    "9⁵ = (3²)⁵ = [[3¹⁰]]. 27² = (3³)² = [[3⁶]].",
    "[[3¹⁰ : 3⁶ = 3⁴]]."
   ],
   "answer": "B, 3⁴.",
   "tip": "Tak wyglądało zadanie 8 na egzaminie w 2025 roku (z podstawą 2).",
   "check": [
    "9**5 // 27**2 == 3**4"
   ],
   "twin": {
    "type": "abcd",
    "q": "Wartość wyrażenia 4⁵ · 8 zapisana w postaci potęgi liczby 2 jest równa:",
    "opts": [
     "2⁸",
     "2¹³",
     "2³⁰",
     "2¹²"
    ],
    "ok": 1,
    "why": {
     "A": "4⁵ potraktowano jak 2⁵. Ale 4 = 2², więc 4⁵ = 2¹⁰.",
     "C": "Wykładniki pomnożono (10 · 3), a przy mnożeniu potęg się je dodaje.",
     "D": "8 zapisano jako 2², a 8 = 2³."
    },
    "sol": [
     "4⁵ = (2²)⁵ = [[2¹⁰]], 8 = [[2³]].",
     "[[2¹⁰ · 2³ = 2¹³]]."
    ],
    "answer": "B, 2¹³.",
    "tip": "4 = 2², 8 = 2³, 16 = 2⁴.",
    "check": [
     "4**5 * 8 == 2**13"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Wartość wyrażenia 25³ : 5⁴ zapisana w postaci potęgi liczby 5 jest równa:",
    "opts": [
     "5¹⁰",
     "5¹",
     "5²⁴",
     "5²"
    ],
    "ok": 3,
    "why": {
     "A": "5¹⁰ to 5⁶ · 5⁴. Przy dzieleniu odejmujesz.",
     "B": "5¹ wychodzi, gdy (5²)³ policzysz jako 5⁵ (dodając wykładniki).",
     "C": "5²⁴ to pomnożone wykładniki 6 · 4."
    },
    "sol": [
     "25³ = (5²)³ = [[5⁶]]. [[5⁶ : 5⁴ = 5²]]."
    ],
    "answer": "D, 5².",
    "tip": "25 = 5².",
    "check": [
     "25**3 // 5**4 == 5**2"
    ]
   }
  },
  {
   "id": "b2",
   "level": 2,
   "skills": [
    "W8",
    "W7"
   ],
   "type": "abcd",
   "q": "Dane są cztery liczby: √3, √12, −√27, √5. Suma trzech spośród nich jest równa 0. Którą liczbę należy odrzucić, aby suma pozostałych była równa 0?",
   "opts": [
    "√5",
    "√3",
    "√12",
    "−√27"
   ],
   "ok": 0,
   "why": {
    "B": "Bez √3 suma to √12 − √27 + √5 = 2√3 − 3√3 + √5 ≠ 0.",
    "C": "Bez √12 suma to √3 − 3√3 + √5 ≠ 0.",
    "D": "Bez −√27 suma to √3 + 2√3 + √5 ≠ 0."
   },
   "sol": [
    "Upraszczamy: [[√12 = 2√3]], [[√27 = 3√3]].",
    "[[√3 + 2√3 − 3√3 = 0]]. Odrzucamy √5."
   ],
   "answer": "A, √5.",
   "tip": "To zadanie wzorowane na zadaniu 16 z informatora CKE.",
   "check": [
    "1 + 2 - 3 == 0",
    "4*3 == 12",
    "9*3 == 27"
   ],
   "twin": {
    "type": "abcd",
    "q": "Dane są cztery liczby: √5, √20, −√45, −√7. Suma trzech spośród nich jest równa 0. Którą liczbę należy odrzucić?",
    "opts": [
     "√5",
     "√20",
     "−√7",
     "−√45"
    ],
    "ok": 2,
    "why": {
     "A": "Bez √5 zostaje 2√5 − 3√5 − √7 ≠ 0.",
     "B": "Bez √20 zostaje √5 − 3√5 − √7 ≠ 0.",
     "D": "Bez −√45 zostaje √5 + 2√5 − √7 ≠ 0."
    },
    "sol": [
     "[[√20 = 2√5]], [[√45 = 3√5]].",
     "[[√5 + 2√5 − 3√5 = 0]]. Odrzucamy −√7."
    ],
    "answer": "C, −√7.",
    "tip": "Uprość wszystkie pierwiastki, które się da.",
    "check": [
     "4*5 == 20",
     "9*5 == 45"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Dane są cztery liczby: √2, √18, −√32, −√3. Suma trzech spośród nich jest równa 0. Którą liczbę należy odrzucić?",
    "opts": [
     "√2",
     "√18",
     "−√3",
     "−√32"
    ],
    "ok": 2,
    "why": {
     "A": "Bez √2: 3√2 − 4√2 − √3 ≠ 0.",
     "B": "Bez √18: √2 − 4√2 − √3 ≠ 0.",
     "D": "Bez −√32: √2 + 3√2 − √3 ≠ 0."
    },
    "sol": [
     "[[√18 = 3√2]], [[√32 = 4√2]].",
     "[[√2 + 3√2 − 4√2 = 0]]. Odrzucamy −√3."
    ],
    "answer": "C, −√3.",
    "tip": "Uprość wszystkie pierwiastki.",
    "check": [
     "1 + 3 - 4 == 0",
     "9*2 == 18",
     "16*2 == 32"
    ]
   }
  },
  {
   "id": "b3",
   "level": 2,
   "skills": [
    "W9",
    "W2"
   ],
   "type": "tn",
   "q": "Czy wartość wyrażenia 3⁵ · 3⁵ : (3⁵ + 3⁵ + 3⁵) jest liczbą podzielną przez 9? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "T",
   "reasons": {
    "1": "wartość wyrażenia to 3⁴ = 9 · 9",
    "2": "każdy wykładnik jest równy 5",
    "3": "3⁵ + 3⁵ + 3⁵ = 3¹⁵"
   },
   "okReason": "1",
   "sol": [
    "Licznik: [[3⁵ · 3⁵ = 3¹⁰]]. Mianownik: [[3⁵ + 3⁵ + 3⁵ = 3 · 3⁵ = 3⁶]].",
    "[[3¹⁰ : 3⁶ = 3⁴ = 81 = 9 · 9]]. Tak.",
    "Uzasadnienie 3 jest fałszywe: trzy jednakowe składniki to mnożenie przez 3."
   ],
   "answer": "T, uzasadnienie 1.",
   "tip": "Wzór: informator CKE, zadanie 9.",
   "check": [
    "3**5 * 3**5 // (3 * 3**5) == 3**4 == 81"
   ],
   "twin": {
    "type": "tn",
    "q": "Czy wartość wyrażenia 2⁶ · 2⁶ : (2⁶ + 2⁶) jest liczbą podzielną przez 64? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "N",
    "reasons": {
     "1": "wartość wyrażenia to 2⁵ = 32, a 32 nie dzieli się przez 64",
     "2": "2⁶ + 2⁶ = 2¹²",
     "3": "64 = 2⁶, a w wyrażeniu są tylko potęgi 2⁶"
    },
    "okReason": "1",
    "sol": [
     "[[2¹² : (2 · 2⁶) = 2¹² : 2⁷ = 2⁵ = 32]]. 32 nie dzieli się przez 64. Nie."
    ],
    "answer": "N, uzasadnienie 1.",
    "tip": "2⁶ + 2⁶ = 2⁷, a nie 2¹².",
    "check": [
     "2**6 * 2**6 // (2**6 + 2**6) == 32"
    ]
   },
   "twin2": {
    "type": "tn",
    "q": "Czy wartość wyrażenia 5⁴ · 5⁴ : (5⁴ + 5⁴ + 5⁴ + 5⁴ + 5⁴) jest liczbą podzielną przez 25? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "T",
    "reasons": {
     "1": "wartość wyrażenia to 5³ = 125 = 25 · 5",
     "2": "5⁴ + 5⁴ + 5⁴ + 5⁴ + 5⁴ = 5²⁰",
     "3": "każdy wykładnik jest parzysty"
    },
    "okReason": "1",
    "sol": [
     "[[5⁸ : (5 · 5⁴) = 5⁸ : 5⁵ = 5³ = 125]] = 25 · 5. Tak."
    ],
    "answer": "T, uzasadnienie 1.",
    "tip": "Pięć jednakowych składników to mnożenie przez 5.",
    "check": [
     "5**4 * 5**4 // (5 * 5**4) == 125"
    ]
   }
  },
  {
   "id": "b5",
   "level": 2,
   "skills": [
    "W6",
    "W7"
   ],
   "type": "abcd",
   "q": "Która liczba jest największa?",
   "opts": [
    "4√2",
    "3√3",
    "2√7",
    "√30"
   ],
   "ok": 0,
   "why": {
    "B": "3√3 = √27.",
    "C": "2√7 = √28.",
    "D": "√30 < √32."
   },
   "sol": [
    "Włączamy pod pierwiastek: [[4√2 = √32]], [[3√3 = √27]], [[2√7 = √28]].",
    "Największa jest √32, czyli 4√2."
   ],
   "answer": "A, 4√2.",
   "tip": "Wszystko zapisz jako √liczba.",
   "check": [
    "16*2 == 32",
    "max(32, 27, 28, 30) == 32"
   ],
   "twin": {
    "type": "abcd",
    "q": "Która liczba jest najmniejsza?",
    "opts": [
     "2√5",
     "3√2",
     "√19",
     "4"
    ],
    "ok": 3,
    "why": {
     "A": "2√5 = √20.",
     "B": "3√2 = √18.",
     "C": "√19 > √16."
    },
    "sol": [
     "[[2√5 = √20]], [[3√2 = √18]], √19, [[4 = √16]]. Najmniejsza: 4."
    ],
    "answer": "D, 4.",
    "tip": "Liczbę całkowitą też możesz zapisać jako pierwiastek: 4 = √16.",
    "check": [
     "min(20, 18, 19, 16) == 16"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Która liczba jest największa?",
    "opts": [
     "4√3",
     "5√2",
     "7",
     "3√5"
    ],
    "ok": 1,
    "why": {
     "A": "4√3 = √48.",
     "C": "7 = √49.",
     "D": "3√5 = √45."
    },
    "sol": [
     "[[5√2 = √50]], 4√3 = √48, 7 = √49, 3√5 = √45. Największa: √50."
    ],
    "answer": "B, 5√2.",
    "tip": "Wszystko pod jeden pierwiastek.",
    "check": [
     "max(50, 48, 49, 45) == 50"
    ]
   }
  },
  {
   "id": "b7",
   "level": 2,
   "skills": [
    "W9",
    "W1"
   ],
   "type": "fields",
   "q": "Oblicz sprytnie, wyłączając wspólny czynnik.",
   "fields": [
    {
     "label": "3⁴ − 3³",
     "ans": 54,
     "show": "54",
     "why": [
      [
       3,
       "Potęg nie odejmuje się przez odjęcie wykładników. 81 − 27 = 54."
      ]
     ]
    },
    {
     "label": "2¹⁰ − 2⁹",
     "ans": 512,
     "show": "512",
     "why": [
      [
       2,
       "2¹⁰ − 2⁹ = 2⁹ · (2 − 1) = 2⁹ = 512."
      ]
     ]
    }
   ],
   "sol": [
    "<b>3⁴ − 3³</b> = 3³ · (3 − 1) = [[27 · 2 = 54]].",
    "<b>2¹⁰ − 2⁹</b> = 2⁹ · (2 − 1) = [[2⁹ = 512]]."
   ],
   "answer": "54 i 512.",
   "tip": "Z dwóch potęg tej samej liczby wyłączasz mniejszą.",
   "check": [
    "3**4 - 3**3 == 54",
    "2**10 - 2**9 == 512"
   ],
   "twin": {
    "type": "fields",
    "q": "Oblicz sprytnie, wyłączając wspólny czynnik.",
    "fields": [
     {
      "label": "4³ − 4²",
      "ans": 48,
      "show": "48"
     },
     {
      "label": "3⁵ − 3⁴",
      "ans": 162,
      "show": "162"
     }
    ],
    "sol": [
     "<b>4³ − 4²</b> = [[16 · 3 = 48]].",
     "<b>3⁵ − 3⁴</b> = [[81 · 2 = 162]]."
    ],
    "answer": "48 i 162.",
    "tip": "aⁿ⁺¹ − aⁿ = aⁿ · (a − 1).",
    "check": [
     "4**3 - 4**2 == 48",
     "3**5 - 3**4 == 162"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Oblicz sprytnie, wyłączając wspólny czynnik.",
    "fields": [
     {
      "label": "2⁸ − 2⁷",
      "ans": 128,
      "show": "128",
      "why": [
       [
        2,
        "2⁸ − 2⁷ = 2⁷ · (2 − 1) = 128."
       ]
      ]
     },
     {
      "label": "3³ − 3²",
      "ans": 18,
      "show": "18"
     }
    ],
    "sol": [
     "[[2⁷ · 1 = 128]].",
     "[[3² · 2 = 18]]."
    ],
    "answer": "128 i 18.",
    "tip": "Wyłącz mniejszą potęgę.",
    "check": [
     "2**8 - 2**7 == 128",
     "3**3 - 3**2 == 18"
    ]
   }
  },
  {
   "id": "b9",
   "level": 2,
   "skills": [
    "W4"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "0,00045 = 4,5 · 10⁻⁴",
     "ok": "P"
    },
    {
     "t": "72 · 10⁵ to zapis w notacji wykładniczej.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> Przecinek o 4 miejsca w prawo: 4,5. Prawda.",
    "<b>Zdanie 2.</b> 72 > 10. Poprawnie: 7,2 · 10⁶. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Przed 10ᵏ musi stać liczba od 1 do 10 (bez 10).",
   "check": [
    "F('4.5') / 10**4 == F('0.00045')",
    "72 * 10**5 == F('7.2') * 10**6"
   ],
   "twin": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "3 · 10⁻² = 0,03",
      "ok": "P"
     },
     {
      "t": "0,8 · 10³ to zapis w notacji wykładniczej.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> 3 : 100 = 0,03. Prawda.",
     "<b>Zdanie 2.</b> 0,8 < 1. Poprawnie: 8 · 10². Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Liczba przed 10ᵏ nie może być mniejsza od 1.",
    "check": [
     "F(3, 100) == F('0.03')"
    ]
   },
   "twin2": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "0,0071 = 7,1 · 10⁻³",
      "ok": "P"
     },
     {
      "t": "25 · 10⁻² to zapis w notacji wykładniczej.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> Przecinek o 3 miejsca w prawo. Prawda.",
     "<b>Zdanie 2.</b> 25 > 10. Poprawnie: 2,5 · 10⁻¹. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "1 ≤ a < 10.",
    "check": [
     "F('7.1') / 1000 == F('0.0071')"
    ]
   }
  },
  {
   "id": "c1",
   "level": 3,
   "skills": [
    "W9",
    "W2"
   ],
   "type": "self",
   "q": "Uzasadnij, że 2¹⁰ + 2¹⁰ + 2¹¹ = 2¹².",
   "criteria": [
    {
     "t": "Zapisano, że 2¹⁰ + 2¹⁰ = 2 · 2¹⁰ = 2¹¹.",
     "pts": 1
    },
    {
     "t": "Zapisano, że 2¹¹ + 2¹¹ = 2 · 2¹¹ = 2¹², i wniosek.",
     "pts": 1
    }
   ],
   "sol": [
    "[[2¹⁰ + 2¹⁰ = 2 · 2¹⁰ = 2¹¹]].",
    "Wtedy lewa strona to [[2¹¹ + 2¹¹ = 2 · 2¹¹ = 2¹²]]. Co należało uzasadnić."
   ],
   "answer": "2¹⁰ + 2¹⁰ + 2¹¹ = 2¹¹ + 2¹¹ = 2¹².",
   "tip": "Nie licz 2¹⁰ = 1 024. Pokaż rachunek na potęgach.",
   "check": [
    "2**10 + 2**10 + 2**11 == 2**12"
   ]
  },
  {
   "id": "c2",
   "level": 3,
   "skills": [
    "W6",
    "W7"
   ],
   "type": "self",
   "q": "Uzasadnij, że liczba √50 − √2 jest większa od 5, ale mniejsza od 6.",
   "criteria": [
    {
     "t": "Uproszczono: √50 − √2 = 5√2 − √2 = 4√2.",
     "pts": 1
    },
    {
     "t": "Porównano: 4√2 = √32, a 25 < 32 < 36, więc 5 < 4√2 < 6, i zapisano wniosek.",
     "pts": 1
    }
   ],
   "sol": [
    "[[√50 = 5√2]], więc [[√50 − √2 = 4√2]].",
    "[[4√2 = √32]]. Ponieważ [[25 < 32 < 36]], to √25 < √32 < √36, czyli 5 < √50 − √2 < 6."
   ],
   "answer": "√50 − √2 = √32, a 5 < √32 < 6.",
   "tip": "Liczby z pierwiastkami porównuj, zapisując wszystko pod jednym pierwiastkiem.",
   "check": [
    "25 < 32 < 36",
    "(5 - 1) == 4",
    "16*2 == 32"
   ]
  },
  {
   "id": "c7",
   "level": 3,
   "skills": [
    "W1",
    "W5"
   ],
   "type": "pair",
   "q": "Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "Wartość wyrażenia (−2)² · √(1/4) jest równa",
     "opts": {
      "A": "2",
      "B": "−2"
     },
     "ok": "A"
    },
    {
     "label": "Wartość wyrażenia ∛(−27) + (−1)³ jest równa",
     "opts": {
      "C": "−4",
      "D": "−2"
     },
     "ok": "C"
    }
   ],
   "sol": [
    "[[(−2)² = 4]], [[√(1/4) = 1/2]], [[4 · 1/2 = 2]].",
    "[[∛(−27) = −3]], [[(−1)³ = −1]], [[−3 + (−1) = −4]]."
   ],
   "answer": "A i C.",
   "tip": "Parzysta potęga daje wynik dodatni, a pierwiastek sześcienny z liczby ujemnej jest ujemny.",
   "check": [
    "(-2)**2 * F(1, 2) == 2",
    "-3 + (-1)**3 == -4"
   ],
   "twin": {
    "type": "pair",
    "q": "Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Wartość wyrażenia (−3)² · √(1/9) jest równa",
      "opts": {
       "A": "−3",
       "B": "3"
      },
      "ok": "B"
     },
     {
      "label": "Wartość wyrażenia ∛(−8) − (−1)⁴ jest równa",
      "opts": {
       "C": "−1",
       "D": "−3"
      },
      "ok": "D"
     }
    ],
    "sol": [
     "[[9 · 1/3 = 3]].",
     "[[−2 − 1 = −3]], bo (−1)⁴ = 1."
    ],
    "answer": "B i D.",
    "tip": "(−1) do potęgi parzystej to 1.",
    "check": [
     "(-3)**2 * F(1, 3) == 3",
     "-2 - (-1)**4 == -3"
    ]
   },
   "twin2": {
    "type": "pair",
    "q": "Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Wartość wyrażenia (−4)² · √(1/16) jest równa",
      "opts": {
       "A": "4",
       "B": "−4"
      },
      "ok": "A"
     },
     {
      "label": "Wartość wyrażenia ∛(−125) + (−1)² jest równa",
      "opts": {
       "C": "−4",
       "D": "−6"
      },
      "ok": "C"
     }
    ],
    "sol": [
     "[[16 · 1/4 = 4]].",
     "[[−5 + 1 = −4]], bo (−1)² = 1."
    ],
    "answer": "A i C.",
    "tip": "Parzysta potęga: plus.",
    "check": [
     "(-4)**2 * F(1, 4) == 4",
     "-5 + (-1)**2 == -4"
    ]
   }
  },
  {
   "id": "c10",
   "level": 3,
   "skills": [
    "W7",
    "W8"
   ],
   "type": "self",
   "q": "Trójkąt ma boki długości √12, √27 i √48. Uzasadnij, że jego obwód jest równy 9√3.",
   "criteria": [
    {
     "t": "Wyłączono czynniki: √12 = 2√3, √27 = 3√3, √48 = 4√3.",
     "pts": 1
    },
    {
     "t": "Dodano: 2√3 + 3√3 + 4√3 = 9√3 i zapisano wniosek.",
     "pts": 1
    }
   ],
   "sol": [
    "[[√12 = 2√3]], [[√27 = 3√3]], [[√48 = 4√3]].",
    "Obwód: [[2√3 + 3√3 + 4√3 = 9√3]]."
   ],
   "answer": "Obwód = 9√3.",
   "tip": "Najpierw uprość, potem dodawaj.",
   "check": [
    "4*3 == 12",
    "9*3 == 27",
    "16*3 == 48",
    "2 + 3 + 4 == 9"
   ]
  }
 ],
 "test": [
  {
   "id": "t1",
   "skills": [
    "W1"
   ],
   "type": "fields",
   "q": "Oblicz: (−1/3)² · 3³",
   "fields": [
    {
     "label": "Wynik",
     "ans": 3,
     "show": "3"
    }
   ],
   "sol": [
    "[[(−1/3)² = 1/9]], [[3³ = 27]], [[1/9 · 27 = 3]]."
   ],
   "answer": "3.",
   "tip": "Parzysta potęga: wynik dodatni.",
   "check": [
    "F(-1, 3)**2 * 3**3 == 3"
   ],
   "pts": 1
  },
  {
   "id": "t2",
   "skills": [
    "W2"
   ],
   "type": "abcd",
   "q": "Wyrażenie 7⁴ · 7⁶ : 7³ jest równe:",
   "opts": [
    "7¹³",
    "7⁷",
    "7⁸",
    "49⁷"
   ],
   "ok": 1,
   "why": {
    "A": "7¹³ to 4 + 6 + 3. Przy dzieleniu wykładnik się odejmuje.",
    "C": "7⁸ to 4 · 6 : 3. Wykładniki się dodaje i odejmuje, a nie mnoży i dzieli.",
    "D": "Podstawa się nie zmienia, zostaje 7."
   },
   "sol": [
    "[[4 + 6 − 3 = 7]]. Wynik 7⁷."
   ],
   "answer": "B, 7⁷.",
   "tip": "Podstawa zostaje, zmienia się wykładnik.",
   "check": [
    "7**4 * 7**6 // 7**3 == 7**7"
   ],
   "pts": 1
  },
  {
   "id": "t3",
   "skills": [
    "W3"
   ],
   "type": "abcd",
   "q": "Wartość wyrażenia 27⁴ : 9³ zapisana w postaci potęgi liczby 3 jest równa:",
   "opts": [
    "3¹",
    "3¹⁸",
    "3²",
    "3⁶"
   ],
   "ok": 3,
   "why": {
    "A": "3¹ to 4 − 3 bez zamiany podstaw.",
    "B": "3¹⁸ to 3¹² · 3⁶. Przy dzieleniu odejmujesz.",
    "C": "3² wychodzi, gdy potęgę potęgi policzysz przez dodawanie: (3³)⁴ = 3⁷ i (3²)³ = 3⁵."
   },
   "sol": [
    "27⁴ = (3³)⁴ = [[3¹²]], 9³ = (3²)³ = [[3⁶]].",
    "[[3¹² : 3⁶ = 3⁶]]."
   ],
   "answer": "D, 3⁶.",
   "tip": "27 = 3³, 9 = 3².",
   "check": [
    "27**4 // 9**3 == 3**6"
   ],
   "pts": 1
  },
  {
   "id": "t4",
   "skills": [
    "W4"
   ],
   "type": "fields",
   "pts": 2,
   "perField": true,
   "q": "Podaj wykładnik k.",
   "note": "Każdy dobry wynik to 1 punkt.",
   "fields": [
    {
     "label": "0,00036 = 3,6 · 10^k",
     "ans": -4,
     "show": "−4"
    },
    {
     "label": "520 000 = 5,2 · 10^k",
     "ans": 5,
     "show": "5"
    }
   ],
   "sol": [
    "[[0,00036 = 3,6 · 10⁻⁴]].",
    "[[520 000 = 5,2 · 10⁵]]."
   ],
   "answer": "−4 i 5.",
   "tip": "Liczba mniejsza od 1: k ujemne.",
   "check": [
    "F('3.6') / 10**4 == F('0.00036')",
    "F('5.2') * 10**5 == 520000"
   ]
  },
  {
   "id": "t5",
   "skills": [
    "W5"
   ],
   "type": "fields",
   "q": "Oblicz: √0,49 + ∛(−64)",
   "fields": [
    {
     "label": "Wynik",
     "ans": -3.3,
     "show": "−3,3"
    }
   ],
   "sol": [
    "[[√0,49 = 0,7]], [[∛(−64) = −4]].",
    "[[0,7 + (−4) = −3,3]]."
   ],
   "answer": "−3,3.",
   "tip": "0,7² = 0,49.",
   "check": [
    "F('0.7') - 4 == F('-3.3')"
   ],
   "pts": 1
  },
  {
   "id": "t6",
   "skills": [
    "W6"
   ],
   "type": "fields",
   "q": "Jaka jest najmniejsza liczba całkowita większa od √110?",
   "fields": [
    {
     "label": "Liczba",
     "ans": 11,
     "show": "11"
    }
   ],
   "sol": [
    "[[100 < 110 < 121]], więc 10 < √110 < 11. Szukana liczba to [[11]]."
   ],
   "answer": "11.",
   "tip": "Kwadraty: 100 i 121.",
   "check": [
    "10**2 < 110 < 11**2"
   ],
   "pts": 1
  },
  {
   "id": "t7",
   "skills": [
    "W7"
   ],
   "type": "fields",
   "q": "Wyłącz czynnik przed znak pierwiastka: √72 = a√2. Podaj a.",
   "fields": [
    {
     "label": "a",
     "ans": 6,
     "show": "6"
    }
   ],
   "sol": [
    "[[72 = 36 · 2]], więc √72 = 6√2."
   ],
   "answer": "6.",
   "tip": "Wyłącz największy kwadrat (36), a nie 4 czy 9.",
   "check": [
    "36*2 == 72"
   ],
   "pts": 1
  },
  {
   "id": "t8",
   "skills": [
    "W8",
    "W7"
   ],
   "type": "abcd",
   "q": "Dane są cztery liczby: √12, √27, −√75, −√3. Suma trzech spośród nich jest równa 0. Którą liczbę należy odrzucić?",
   "opts": [
    "−√3",
    "√12",
    "√27",
    "−√75"
   ],
   "ok": 0,
   "why": {
    "B": "Bez √12: 3√3 − 5√3 − √3 = −3√3 ≠ 0.",
    "C": "Bez √27: 2√3 − 5√3 − √3 = −4√3 ≠ 0.",
    "D": "Bez −√75: 2√3 + 3√3 − √3 = 4√3 ≠ 0."
   },
   "sol": [
    "[[√12 = 2√3]], [[√27 = 3√3]], [[√75 = 5√3]].",
    "[[2√3 + 3√3 − 5√3 = 0]]. Odrzucamy −√3."
   ],
   "answer": "A, −√3.",
   "tip": "Uprość wszystkie pierwiastki do postaci a√3.",
   "check": [
    "2 + 3 - 5 == 0",
    "3 - 5 - 1 != 0",
    "2 - 5 - 1 != 0",
    "2 + 3 - 1 != 0"
   ],
   "pts": 1
  },
  {
   "id": "t9",
   "skills": [
    "W9"
   ],
   "type": "abcd",
   "q": "Suma dwudziestu pięciu jednakowych składników 5 + 5 + … + 5 jest równa:",
   "opts": [
    "5²⁵",
    "25⁵",
    "5³",
    "5²"
   ],
   "ok": 2,
   "why": {
    "A": "5²⁵ to iloczyn, a nie suma.",
    "B": "25⁵ to o wiele za dużo.",
    "D": "5² = 25 to tylko liczba składników."
   },
   "sol": [
    "[[25 · 5 = 125 = 5³]]."
   ],
   "answer": "C, 5³.",
   "tip": "Suma jednakowych składników to mnożenie.",
   "check": [
    "25 * 5 == 5**3"
   ],
   "pts": 1
  },
  {
   "id": "t10",
   "skills": [
    "W8"
   ],
   "type": "fields",
   "q": "Oblicz: (√2 + √8)²",
   "fields": [
    {
     "label": "Wynik",
     "ans": 18,
     "show": "18"
    }
   ],
   "sol": [
    "[[√2 + √8 = √2 + 2√2 = 3√2]].",
    "[[(3√2)² = 9 · 2 = 18]]."
   ],
   "answer": "18.",
   "tip": "Najpierw uprość to, co w nawiasie.",
   "check": [
    "3**2 * 2 == 18"
   ],
   "pts": 1
  },
  {
   "id": "t11",
   "skills": [
    "W9",
    "W2"
   ],
   "type": "self",
   "q": "Uzasadnij, że 2²⁰ + 2²⁰ + 2²⁰ + 2²⁰ = 2²².",
   "criteria": [
    {
     "t": "Zapisano sumę czterech składników jako 4 · 2²⁰.",
     "pts": 1
    },
    {
     "t": "Zapisano 4 · 2²⁰ = 2² · 2²⁰ = 2²² i wniosek.",
     "pts": 1
    }
   ],
   "sol": [
    "[[2²⁰ + 2²⁰ + 2²⁰ + 2²⁰ = 4 · 2²⁰]].",
    "[[4 = 2²]], więc [[2² · 2²⁰ = 2²²]]."
   ],
   "answer": "4 · 2²⁰ = 2² · 2²⁰ = 2²².",
   "tip": "Cztery jednakowe składniki to mnożenie przez 4.",
   "check": [
    "4 * 2**20 == 2**22"
   ],
   "pts": 2
  },
  {
   "id": "t12",
   "skills": [
    "W3"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "5⁴ · 2⁴ = 10⁴",
     "ok": "P"
    },
    {
     "t": "(3²)³ = 3⁵",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[(5 · 2)⁴ = 10⁴]]. Prawda.",
    "<b>Zdanie 2.</b> [[(3²)³ = 3⁶]], wykładniki się mnoży. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Potęga potęgi: mnożenie wykładników.",
   "check": [
    "5**4 * 2**4 == 10**4",
    "(3**2)**3 == 3**6"
   ],
   "pts": 1
  }
 ],
 "test_minutes": 35,
 "pass": 12,
 "dzial": "Dział 1: Liczby i działania"
};
