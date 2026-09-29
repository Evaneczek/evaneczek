/* Wygenerowane przez zbuduj.py z tresc/ulamki.py. Nie edytuj ręcznie. */
window.TEMAT = {
 "slug": "ulamki",
 "title": "Ułamki zwykłe i dziesiętne",
 "sign": "½",
 "lead": "Ułamki są w prawie każdym zadaniu egzaminu: w wyrażeniach, w geometrii, w zadaniach tekstowych. Na egzaminie w 2025 roku były aż dwa zadania wprost o ułamkach, w tym otwarte za 2 punkty.",
 "goals": {
  "learn": "9 umiejętności: skracanie, liczby mieszane, porównywanie, cztery działania, zamiana na ułamki dziesiętne, wyrażenia mieszane i obliczanie całości z części.",
  "prereq": "NWD i NWW (temat „Podzielność”). Rozgrzewka na początku to sprawdzi.",
  "goal": "Minimum 12 z 14 punktów w teście na koniec tematu."
 },
 "skills": {
  "U1": "Ułamek jako część całości, skracanie i rozszerzanie",
  "U2": "Liczby mieszane i ułamki niewłaściwe",
  "U3": "Porównywanie ułamków",
  "U4": "Dodawanie i odejmowanie ułamków zwykłych",
  "U5": "Mnożenie i dzielenie ułamków, ułamek liczby",
  "U6": "Zamiana ułamków zwykłych i dziesiętnych",
  "U7": "Działania na ułamkach dziesiętnych",
  "U8": "Wyrażenia z ułamkami zwykłymi i dziesiętnymi",
  "U9": "Całość z części, powiększanie i pomniejszanie o część"
 },
 "lessons": [
  {
   "title": "Ułamek jako część całości",
   "skills": [
    "U1"
   ],
   "intro": "Ułamek opisuje część całości: pizzy, klasy, godziny, pola figury. Mianownik mówi, na ile równych części podzielono całość, a licznik, ile tych części wzięto.",
   "rule": {
    "t": "Skracasz i rozszerzasz ułamek, dzieląc albo mnożąc licznik i mianownik przez tę samą liczbę.",
    "f": [
     "3/4 = 6/8 = 75/100",
     "36/48 = 3/4 (skracamy przez 12)"
    ],
    "e": "Ułamek jest nieskracalny, gdy licznik i mianownik nie mają wspólnego dzielnika poza 1. Najszybciej skrócisz go od razu przez NWD."
   },
   "visual": {
    "type": "grid",
    "n": 75,
    "alt": "Kratka 10 na 10, zamalowane 75 pól",
    "caption": "75 kratek ze 100 to 75/100 = 3/4"
   },
   "example": {
    "q": "Skróć ułamek 36/48. Jaką częścią godziny jest 40 minut?",
    "steps": [
     "NWD(36, 48) = 12. Dzielimy licznik i mianownik przez 12: 36/48 = 3/4.",
     "Godzina ma 60 minut, więc 40 minut to 40/60 godziny.",
     "Skracamy przez 20: 40/60 = 2/3."
    ],
    "result": "36/48 = 3/4, a 40 minut to 2/3 godziny.",
    "tip": "Uważaj na jednostki: godzina ma 60 minut, a nie 100. Metr ma 100 cm, a kilogram 1 000 g.",
    "check": [
     "F(36, 48) == F(3, 4)",
     "F(40, 60) == F(2, 3)"
    ]
   },
   "you": [
    {
     "id": "y1",
     "type": "fields",
     "q": "Skróć ułamek 45/60 do postaci nieskracalnej.",
     "fields": [
      {
       "label": "Licznik",
       "ans": 3,
       "show": "3"
      },
      {
       "label": "Mianownik",
       "ans": 4,
       "show": "4"
      }
     ],
     "sol": [
      "NWD(45, 60) = 15.",
      "[[45 : 15 = 3]], [[60 : 15 = 4]]. Wynik: 3/4."
     ],
     "answer": "3/4.",
     "tip": "Jeśli nie widzisz od razu NWD, skracaj kilka razy: najpierw przez 5 (9/12), potem przez 3 (3/4).",
     "check": [
      "F(45, 60) == F(3, 4)"
     ]
    },
    {
     "id": "y1b",
     "type": "fields",
     "q": "Jaką częścią metra jest 25 cm? Podaj ułamek nieskracalny.",
     "fields": [
      {
       "label": "Licznik",
       "ans": 1,
       "show": "1"
      },
      {
       "label": "Mianownik",
       "ans": 4,
       "show": "4"
      }
     ],
     "sol": [
      "Metr ma 100 cm, więc 25 cm to 25/100 metra.",
      "Skracamy przez 25: [[25/100 = 1/4]]."
     ],
     "answer": "1/4.",
     "tip": "Najpierw zapisz obie wielkości w tej samej jednostce.",
     "check": [
      "F(25, 100) == F(1, 4)"
     ]
    }
   ]
  },
  {
   "title": "Liczby mieszane",
   "skills": [
    "U2"
   ],
   "intro": "Ułamek niewłaściwy, np. 17/5, ma licznik większy od mianownika, czyli jest większy od 1. Często wygodniej zapisać go jako liczbę mieszaną: całości i ułamek.",
   "rule": {
    "t": "Licznik dzielisz przez mianownik z resztą. Iloraz to całości, reszta to nowy licznik.",
    "f": [
     "17/5 = 3 2/5, bo 17 = 5 · 3 + 2",
     "2 3/4 = (2 · 4 + 3)/4 = 11/4"
    ],
    "e": "Liczbę mieszaną wpisuj w polu odpowiedzi ze spacją, np. 3 2/5. Do mnożenia i dzielenia zawsze zamieniaj ją na ułamek niewłaściwy."
   },
   "example": {
    "q": "Zamień 23/6 na liczbę mieszaną, a 4 2/7 na ułamek niewłaściwy.",
    "steps": [
     "23 : 6 = 3 reszty 5, bo 6 · 3 = 18 i 23 − 18 = 5. Więc 23/6 = 3 5/6.",
     "4 2/7: całości zamieniamy na siódme części: 4 · 7 = 28, dodajemy 2: 30. Więc 4 2/7 = 30/7."
    ],
    "result": "23/6 = 3 5/6, a 4 2/7 = 30/7.",
    "tip": "Sprawdzenie: 3 5/6 = (3 · 6 + 5)/6 = 23/6. Zgadza się.",
    "check": [
     "F(23, 6) == 3 + F(5, 6)",
     "4 + F(2, 7) == F(30, 7)"
    ]
   },
   "you": [
    {
     "id": "y2",
     "type": "fields",
     "q": "Zamień.",
     "fields": [
      {
       "label": "29/4 na liczbę mieszaną",
       "ans": 7.25,
       "show": "7 1/4"
      },
      {
       "label": "3 5/8 na ułamek niewłaściwy (podaj licznik, mianownik to 8)",
       "ans": 29,
       "show": "29"
      }
     ],
     "sol": [
      "<b>29/4:</b> [[29 : 4 = 7]] reszty 1, więc 7 1/4.",
      "<b>3 5/8:</b> [[3 · 8 + 5 = 29]], więc 29/8."
     ],
     "answer": "7 1/4 oraz 29/8.",
     "tip": "Obie zamiany to to samo działanie „w dwie strony”: dzielenie z resztą i mnożenie z dodawaniem.",
     "check": [
      "F(29, 4) == 7 + F(1, 4)",
      "3*8 + 5 == 29"
     ]
    }
   ]
  },
  {
   "title": "Porównywanie ułamków",
   "skills": [
    "U3"
   ],
   "intro": "Który ułamek jest większy: 5/7 czy 3/4? Takie pytanie było w informatorze CKE, w zadaniu o wodzie w naczyniach. Nie da się tego odgadnąć „na oko”, trzeba sprowadzić ułamki do wspólnego mianownika.",
   "rule": {
    "t": "Sprowadź ułamki do wspólnego mianownika i porównaj liczniki. Albo zamień je na ułamki dziesiętne.",
    "f": [
     "2/3 = 8/12, 3/4 = 9/12, więc 2/3 < 3/4"
    ],
    "e": "Przy tym samym liczniku większy jest ułamek z mniejszym mianownikiem: 3/7 > 3/8. Możesz też porównywać przez różnicę: gdy a − b > 0, to a > b."
   },
   "visual": {
    "type": "chart",
    "kind": "axis",
    "ticks": 12,
    "labels": {
     "0": "0",
     "6": "1/2",
     "12": "1"
    },
    "points": {
     "8": "A",
     "9": "B"
    },
    "alt": "Odcinek od 0 do 1 podzielony na 12 części, A na ósmej, B na dziewiątej kresce",
    "caption": "A = 2/3 = 8/12, B = 3/4 = 9/12. B leży dalej w prawo, więc 3/4 > 2/3."
   },
   "example": {
    "q": "Który ułamek jest większy: 5/7 czy 3/4? O ile?",
    "steps": [
     "Wspólny mianownik to 28 (NWW(7, 4) = 28).",
     "5/7 = 20/28, a 3/4 = 21/28.",
     "21/28 > 20/28, więc 3/4 > 5/7. Różnica: 21/28 − 20/28 = 1/28."
    ],
    "result": "3/4 jest większe od 5/7 o 1/28.",
    "tip": "Wspólny mianownik zawsze możesz dostać, mnożąc mianowniki (7 · 4 = 28).",
    "check": [
     "F(3, 4) - F(5, 7) == F(1, 28)"
    ]
   },
   "you": [
    {
     "id": "y3",
     "type": "abcd",
     "q": "Który ułamek jest największy?",
     "opts": [
      "3/5",
      "5/8",
      "7/12",
      "2/3"
     ],
     "ok": 3,
     "why": {
      "A": "3/5 = 72/120, a 2/3 = 80/120.",
      "B": "5/8 = 75/120, a 2/3 = 80/120.",
      "C": "7/12 = 70/120, to najmniejszy z nich."
     },
     "sol": [
      "Wspólny mianownik 120: [[3/5 = 72/120]], [[5/8 = 75/120]], [[7/12 = 70/120]], [[2/3 = 80/120]].",
      "Największy licznik ma 2/3."
     ],
     "answer": "D, 2/3.",
     "tip": "Zamiast wspólnego mianownika możesz porównać ułamki dziesiętne: 0,6; 0,625; 0,58…; 0,66…",
     "check": [
      "max(F(3, 5), F(5, 8), F(7, 12), F(2, 3)) == F(2, 3)"
     ]
    }
   ]
  },
  {
   "title": "Dodawanie i odejmowanie ułamków",
   "skills": [
    "U4"
   ],
   "intro": "Dodawać i odejmować można tylko „takie same kawałki”, czyli ułamki o tym samym mianowniku. Dlatego najpierw sprowadzasz je do wspólnego mianownika.",
   "rule": {
    "t": "Sprowadź do wspólnego mianownika (najlepiej NWW mianowników), potem dodaj lub odejmij liczniki.",
    "f": [
     "1/4 + 1/6 = 3/12 + 2/12 = 5/12"
    ],
    "e": "Nigdy nie dodawaj mianowników: 1/2 + 1/3 to NIE jest 2/5. Liczby mieszane zamień na ułamki niewłaściwe albo licz osobno całości i ułamki."
   },
   "example": {
    "q": "Oblicz 2 1/3 − 3/4.",
    "steps": [
     "Zamieniamy na ułamek niewłaściwy: 2 1/3 = 7/3.",
     "Wspólny mianownik 12: 7/3 = 28/12, a 3/4 = 9/12.",
     "28/12 − 9/12 = 19/12 = 1 7/12."
    ],
    "result": "2 1/3 − 3/4 = 1 7/12.",
    "tip": "Na końcu zawsze sprawdź, czy wynik da się skrócić.",
    "check": [
     "2 + F(1, 3) - F(3, 4) == 1 + F(7, 12)"
    ]
   },
   "you": [
    {
     "id": "y4",
     "type": "fields",
     "q": "Oblicz. Wynik większy od 1 zapisz jako liczbę mieszaną.",
     "fields": [
      {
       "label": "5/6 + 3/8",
       "ans": 1.2083333333333333,
       "show": "1 5/24"
      },
      {
       "label": "3 1/2 − 1 2/3",
       "ans": 1.8333333333333333,
       "show": "1 5/6"
      }
     ],
     "sol": [
      "<b>5/6 + 3/8:</b> NWW(6, 8) = 24. [[20/24 + 9/24 = 29/24 = 1 5/24]].",
      "<b>3 1/2 − 1 2/3:</b> [[7/2 − 5/3 = 21/6 − 10/6 = 11/6 = 1 5/6]]."
     ],
     "answer": "1 5/24 i 1 5/6.",
     "tip": "Przy odejmowaniu liczb mieszanych zamiana na ułamki niewłaściwe chroni przed „pożyczaniem” całości.",
     "check": [
      "F(5, 6) + F(3, 8) == 1 + F(5, 24)",
      "F(7, 2) - F(5, 3) == 1 + F(5, 6)"
     ]
    }
   ]
  },
  {
   "title": "Mnożenie i dzielenie ułamków",
   "skills": [
    "U5"
   ],
   "intro": "Mnożenie ułamków jest prostsze niż dodawanie, bo nie trzeba wspólnego mianownika. Dzielenie to mnożenie przez odwrotność. Ułamek liczby, np. 3/5 z 40, to też mnożenie.",
   "rule": {
    "t": "Licznik razy licznik, mianownik razy mianownik. Dzielisz, mnożąc przez odwrotność.",
    "f": [
     "2/3 · 9/10 = 18/30 = 3/5",
     "3/4 : 5/8 = 3/4 · 8/5 = 6/5",
     "3/5 z 40 = 3/5 · 40 = 24"
    ],
    "e": "Skracaj „na krzyż” przed mnożeniem, będzie łatwiej. Liczby mieszane zamień najpierw na ułamki niewłaściwe."
   },
   "example": {
    "q": "Oblicz 1 1/2 · 2 2/3 oraz 3/5 z 45.",
    "steps": [
     "1 1/2 = 3/2, 2 2/3 = 8/3.",
     "3/2 · 8/3: skracamy 3 z 3 i 2 z 8, zostaje 1/1 · 4/1 = 4.",
     "3/5 z 45: 45 : 5 = 9, a 9 · 3 = 27."
    ],
    "result": "1 1/2 · 2 2/3 = 4, a 3/5 z 45 to 27.",
    "tip": "<b>Częsty błąd:</b> 1 1/2 · 2 2/3 = 2 2/6, czyli osobno całości i osobno ułamki. Tak mnożyć nie wolno.",
    "check": [
     "F(3, 2) * F(8, 3) == 4",
     "F(3, 5) * 45 == 27"
    ]
   },
   "you": [
    {
     "id": "y5",
     "type": "fields",
     "q": "Oblicz.",
     "fields": [
      {
       "label": "4/9 · 3/8",
       "ans": 0.16666666666666666,
       "show": "1/6"
      },
      {
       "label": "2 1/4 : 3/8",
       "ans": 6,
       "show": "6"
      }
     ],
     "sol": [
      "<b>4/9 · 3/8:</b> skracamy 4 z 8 i 3 z 9: [[1/3 · 1/2 = 1/6]].",
      "<b>2 1/4 : 3/8</b> = 9/4 : 3/8 = [[9/4 · 8/3 = 72/12 = 6]]."
     ],
     "answer": "1/6 i 6.",
     "tip": "Przy dzieleniu odwracasz tylko DRUGI ułamek.",
     "check": [
      "F(4, 9) * F(3, 8) == F(1, 6)",
      "F(9, 4) / F(3, 8) == 6"
     ]
    }
   ]
  },
  {
   "title": "Ułamki zwykłe i dziesiętne",
   "skills": [
    "U6"
   ],
   "intro": "Ta sama liczba może mieć dwa zapisy: 3/4 i 0,75. Trzeba umieć przechodzić z jednego na drugi, także przy jednostkach: 3 m 5 cm to 3,05 m.",
   "rule": {
    "t": "Ułamek zwykły zamieniasz na dziesiętny, rozszerzając do mianownika 10, 100, 1000 albo dzieląc licznik przez mianownik.",
    "f": [
     "3/8 = 375/1000 = 0,375",
     "0,35 = 35/100 = 7/20",
     "1/3 = 0,333… = 0,(3)"
    ],
    "e": "Gdy mianownik (po skróceniu) ma inny dzielnik pierwszy niż 2 i 5, wychodzi ułamek okresowy, np. 5/6 = 0,8(3). Zapis 0,66 to tylko przybliżenie 2/3."
   },
   "example": {
    "q": "Zamień 7/25 i 5/6 na ułamki dziesiętne, a 0,125 na ułamek zwykły nieskracalny.",
    "steps": [
     "7/25: rozszerzamy przez 4, 7/25 = 28/100 = 0,28.",
     "5/6: 6 = 2 · 3, jest trójka, więc wyjdzie okres. 5 : 6 = 0,8333… = 0,8(3).",
     "0,125 = 125/1000. Skracamy przez 125: 1/8."
    ],
    "result": "7/25 = 0,28, 5/6 = 0,8(3), 0,125 = 1/8.",
    "tip": "Warto znać na pamięć: 1/2, 1/4, 3/4, 1/5, 1/8 i ich postaci dziesiętne.",
    "check": [
     "F(7, 25) == F('0.28')",
     "F('0.125') == F(1, 8)"
    ]
   },
   "you": [
    {
     "id": "y6",
     "type": "fields",
     "q": "Zamień.",
     "fields": [
      {
       "label": "3/40 na ułamek dziesiętny",
       "ans": 0.075,
       "show": "0,075"
      },
      {
       "label": "2 zł 5 gr zapisz w złotych",
       "ans": 2.05,
       "unit": "zł",
       "show": "2,05 zł"
      }
     ],
     "sol": [
      "<b>3/40:</b> rozszerzamy przez 25: [[3/40 = 75/1000 = 0,075]].",
      "<b>2 zł 5 gr:</b> 1 gr = 0,01 zł, więc 5 gr = 0,05 zł. Razem [[2,05 zł]]. Nie 2,5 zł, bo to 2 zł 50 gr!"
     ],
     "answer": "0,075 i 2,05 zł.",
     "tip": "Grosze to setne części złotego, centymetry to setne części metra.",
     "check": [
      "F(3, 40) == F('0.075')"
     ]
    },
    {
     "id": "y6b",
     "type": "abcd",
     "q": "Ułamek 2/3 zapisany w postaci dziesiętnej to:",
     "opts": [
      "0,23",
      "0,(6)",
      "0,66",
      "1,5"
     ],
     "ok": 1,
     "why": {
      "A": "0,23 to cyfry licznika i mianownika zapisane obok siebie. Tak nie zamienia się ułamków.",
      "C": "0,66 to tylko przybliżenie. 2 : 3 = 0,666… i szóstki powtarzają się bez końca.",
      "D": "1,5 to 3/2, czyli ułamek odwrócony."
     },
     "sol": [
      "[[2 : 3 = 0,666…]]. Szóstka powtarza się w nieskończoność, więc zapisujemy 0,(6)."
     ],
     "answer": "B, 0,(6).",
     "tip": "Nawias oznacza okres, czyli cyfry, które się powtarzają.",
     "check": [
      "abs(2/3 - 0.6666666) < 1e-6"
     ]
    }
   ]
  },
  {
   "title": "Działania na ułamkach dziesiętnych",
   "skills": [
    "U7"
   ],
   "intro": "Na egzaminie nie ma kalkulatora, więc działania na ułamkach dziesiętnych trzeba umieć pisemnie i w pamięci. Najwięcej błędów robi się przy przecinku.",
   "rule": {
    "t": "Dodawanie i odejmowanie: przecinek pod przecinkiem. Mnożenie: tyle cyfr po przecinku, ile razem w czynnikach. Dzielenie: przesuń przecinek w obu liczbach, aż dzielnik będzie całkowity.",
    "f": [
     "0,3 · 0,2 = 0,06",
     "4,8 : 0,06 = 480 : 6 = 80"
    ],
    "e": "Zawsze oszacuj wynik: 0,3 · 0,2 to mniej niż 0,3, więc 0,6 nie może być dobrze."
   },
   "example": {
    "q": "Oblicz 2,4 · 0,15 oraz 7,2 : 0,08.",
    "steps": [
     "2,4 · 0,15: mnożymy 24 · 15 = 360. Czynniki mają razem 1 + 2 = 3 cyfry po przecinku: 0,360 = 0,36.",
     "7,2 : 0,08: przesuwamy przecinek o 2 miejsca w obu liczbach: 720 : 8 = 90."
    ],
    "result": "2,4 · 0,15 = 0,36, a 7,2 : 0,08 = 90.",
    "tip": "Dzieląc przez liczbę mniejszą od 1, dostajesz wynik WIĘKSZY od dzielnej.",
    "check": [
     "F('2.4') * F('0.15') == F('0.36')",
     "F('7.2') / F('0.08') == 90"
    ]
   },
   "you": [
    {
     "id": "y7",
     "type": "fields",
     "q": "Oblicz.",
     "fields": [
      {
       "label": "5 − 1,75",
       "ans": 3.25,
       "show": "3,25"
      },
      {
       "label": "0,04 · 2,5",
       "ans": 0.1,
       "show": "0,1"
      },
      {
       "label": "3,6 : 0,4",
       "ans": 9,
       "show": "9"
      }
     ],
     "sol": [
      "<b>5 − 1,75</b> = 5,00 − 1,75 = [[3,25]].",
      "<b>0,04 · 2,5:</b> 4 · 25 = 100, 3 cyfry po przecinku: [[0,100 = 0,1]].",
      "<b>3,6 : 0,4</b> = 36 : 4 = [[9]]."
     ],
     "answer": "3,25; 0,1 i 9.",
     "tip": "Liczbę całkowitą zapisz z przecinkiem i zerami: 5 = 5,00.",
     "check": [
      "F(5) - F('1.75') == F('3.25')",
      "F('0.04') * F('2.5') == F('0.1')",
      "F('3.6') / F('0.4') == 9"
     ]
    }
   ]
  },
  {
   "title": "Wyrażenia z ułamkami",
   "skills": [
    "U8"
   ],
   "intro": "Na egzaminie w 2025 roku było zadanie: oblicz (2,4 − 5 1/3) : (−2). Mieszają się tu ułamki dziesiętne, zwykłe i liczby ujemne. Da się to zrobić spokojnie w kilku krokach.",
   "rule": {
    "t": "Zamień wszystkie liczby na jedną postać. Zwykle łatwiej na ułamki zwykłe, bo nie każdy ułamek zwykły ma skończony zapis dziesiętny.",
    "f": [
     "2,4 = 12/5",
     "0,25 = 1/4, 0,5 = 1/2, 0,75 = 3/4"
    ],
    "e": "Kolejność działań i zasady znaków są takie same jak dla liczb całkowitych."
   },
   "example": {
    "q": "Oblicz (2,4 − 5 1/3) : (−2).",
    "steps": [
     "Zamieniamy: 2,4 = 12/5, 5 1/3 = 16/3.",
     "Nawias: 12/5 − 16/3 = 36/15 − 80/15 = −44/15.",
     "Dzielenie przez −2: dwa minusy dają plus, −44/15 : (−2) = 44/30 = 22/15 = 1 7/15."
    ],
    "result": "(2,4 − 5 1/3) : (−2) = 1 7/15.",
    "tip": "Dzielenie przez 2 to mnożenie przez 1/2, czyli po prostu „połowa”.",
    "check": [
     "(F('2.4') - (5 + F(1, 3))) / (-2) == 1 + F(7, 15)"
    ]
   },
   "you": [
    {
     "id": "y8",
     "type": "fields",
     "q": "Oblicz.",
     "fields": [
      {
       "label": "(1,5 − 2 3/4) · 4",
       "ans": -5,
       "show": "−5"
      },
      {
       "label": "0,75 + 1/6 − 1/2",
       "ans": 0.4166666666666667,
       "show": "5/12"
      }
     ],
     "sol": [
      "<b>(1,5 − 2 3/4) · 4:</b> 1,5 = 6/4, 2 3/4 = 11/4. [[6/4 − 11/4 = −5/4]], a [[−5/4 · 4 = −5]].",
      "<b>0,75 + 1/6 − 1/2:</b> 0,75 = 3/4. Wspólny mianownik 12: [[9/12 + 2/12 − 6/12 = 5/12]]."
     ],
     "answer": "−5 i 5/12.",
     "tip": "Gdy w nawiasie wychodzi liczba ujemna, zapisz ją od razu z minusem i w nawiasie.",
     "check": [
      "(F('1.5') - (2 + F(3, 4))) * 4 == -5",
      "F('0.75') + F(1, 6) - F(1, 2) == F(5, 12)"
     ]
    }
   ]
  },
  {
   "title": "Całość z części",
   "skills": [
    "U9"
   ],
   "intro": "„Ola przeczytała 3/8 książki, czyli 96 stron. Ile stron ma książka?” Znasz część i wiesz, jaką częścią całości jest. To ta sama idea co przy procentach, tylko z ułamkami.",
   "rule": {
    "t": "Znasz część? Oblicz najpierw jeden „kawałek”, a potem całość. Powiększenie o 1/4 to pomnożenie przez 5/4.",
    "f": [
     "2/5 całości = 12 → 1/5 = 6 → całość = 30",
     "80 powiększone o 1/4 = 80 · 5/4 = 100",
     "80 pomniejszone o 1/4 = 80 · 3/4 = 60"
    ],
    "e": "Rozróżniaj: „1/3 liczby 60” to 20, a „60 zmniejszone o 1/3” to 40."
   },
   "example": {
    "q": "Ola przeczytała 3/8 książki, czyli 96 stron. Ile stron ma książka? Ile stron zostało jej do przeczytania?",
    "steps": [
     "3/8 książki to 96 stron, więc 1/8 to 96 : 3 = 32 strony.",
     "Cała książka to 8/8: 8 · 32 = 256 stron.",
     "Zostało 5/8 książki: 5 · 32 = 160 stron (albo 256 − 96 = 160)."
    ],
    "result": "Książka ma 256 stron, zostało 160.",
    "tip": "Sprawdzenie: 3/8 z 256 = 96. Zgadza się.",
    "check": [
     "96 / F(3, 8) == 256",
     "256 - 96 == 160"
    ]
   },
   "you": [
    {
     "id": "y9",
     "type": "fields",
     "q": "Oblicz.",
     "fields": [
      {
       "label": "60 zmniejszone o 1/3",
       "ans": 40,
       "show": "40"
      },
      {
       "label": "60 zwiększone o 3/4",
       "ans": 105,
       "show": "105"
      }
     ],
     "sol": [
      "<b>Zmniejszenie o 1/3:</b> zostają 2/3: [[2/3 · 60 = 40]].",
      "<b>Zwiększenie o 3/4:</b> 60 + 3/4 · 60 = 60 + 45 = [[105]] (albo 7/4 · 60)."
     ],
     "answer": "40 i 105.",
     "tip": "Zmniejszenie o 1/3 to NIE jest 1/3 liczby. 1/3 z 60 to 20, a 60 zmniejszone o 1/3 to 40.",
     "check": [
      "F(2, 3) * 60 == 40",
      "F(7, 4) * 60 == 105"
     ]
    }
   ]
  }
 ],
 "traps": [
  {
   "name": "Dodawanie mianowników",
   "bad": "1/2 + 1/3 = 2/5",
   "good": "1/2 + 1/3 = 3/6 + 2/6 = 5/6"
  },
  {
   "name": "Dzielenie bez odwrotności",
   "bad": "3/4 : 1/2 = 3/8",
   "good": "3/4 : 1/2 = 3/4 · 2/1 = 6/4 = 1 1/2"
  },
  {
   "name": "„Część liczby” i „o część”",
   "bad": "60 zmniejszone o 1/3 to 20",
   "good": "1/3 z 60 to 20, a 60 zmniejszone o 1/3 to 40"
  }
 ],
 "cheat": {
  "title": "Ułamki w 9 zasadach",
  "rules": [
   {
    "t": "Skracanie i rozszerzanie: licznik i mianownik przez tę samą liczbę.",
    "f": [
     "36/48 = 3/4"
    ],
    "e": "Najszybciej przez NWD."
   },
   {
    "t": "Liczba mieszana: dzielenie z resztą.",
    "f": [
     "17/5 = 3 2/5",
     "2 3/4 = 11/4"
    ],
    "e": "Do · i : zamieniaj na ułamek niewłaściwy."
   },
   {
    "t": "Porównywanie: wspólny mianownik.",
    "f": [
     "2/3 = 8/12 < 9/12 = 3/4"
    ],
    "e": "Albo ułamki dziesiętne."
   },
   {
    "t": "Dodawanie i odejmowanie: wspólny mianownik.",
    "f": [
     "1/4 + 1/6 = 3/12 + 2/12 = 5/12"
    ],
    "e": "Mianowników nie dodajesz."
   },
   {
    "t": "Mnożenie: licznik · licznik, mianownik · mianownik. Dzielenie: przez odwrotność.",
    "f": [
     "3/4 : 5/8 = 3/4 · 8/5"
    ],
    "e": "3/5 z 40 = 24"
   },
   {
    "t": "Zwykły ↔ dziesiętny.",
    "f": [
     "3/8 = 0,375",
     "0,35 = 7/20"
    ],
    "e": "Okres, gdy w mianowniku jest dzielnik inny niż 2 i 5: 5/6 = 0,8(3)."
   },
   {
    "t": "Przecinek.",
    "f": [
     "0,3 · 0,2 = 0,06",
     "4,8 : 0,06 = 480 : 6"
    ],
    "e": "Szacuj wynik."
   },
   {
    "t": "Wyrażenia: wszystko na jedną postać.",
    "f": [
     "2,4 = 12/5"
    ],
    "e": "(2,4 − 5 1/3) : (−2) = 1 7/15"
   },
   {
    "t": "Całość z części: najpierw jeden kawałek.",
    "f": [
     "3/8 = 96 → 1/8 = 32 → całość 256"
    ],
    "e": "o 1/4 więcej: · 5/4, o 1/4 mniej: · 3/4"
   }
  ]
 },
 "memo": {
  "title": "Warto znać na pamięć",
  "rows": [
   [
    "1/2",
    "1/4",
    "3/4",
    "1/5",
    "1/8",
    "1/3",
    "2/3"
   ],
   [
    "0,5",
    "0,25",
    "0,75",
    "0,2",
    "0,125",
    "0,(3)",
    "0,(6)"
   ]
  ],
  "note": "Godzina ma 60 minut, metr 100 cm, kilogram 1 000 g, złoty 100 groszy. 3 m 5 cm = 3,05 m, a 2 zł 5 gr = 2,05 zł."
 },
 "warmup": {
  "id": "w0",
  "type": "fields",
  "q": "Rozgrzewka: NWD i NWW przydadzą się przy skracaniu i wspólnym mianowniku.",
  "fields": [
   {
    "label": "NWD(12, 18)",
    "ans": 6,
    "show": "6"
   },
   {
    "label": "NWW(4, 6)",
    "ans": 12,
    "show": "12"
   },
   {
    "label": "7 · 8",
    "ans": 56,
    "show": "56"
   }
  ],
  "sol": [
   "<b>NWD(12, 18)</b> = [[6]], bo 12 = 2 · 2 · 3, 18 = 2 · 3 · 3, wspólne 2 · 3.",
   "<b>NWW(4, 6)</b> = [[12]].",
   "<b>7 · 8</b> = [[56]]."
  ],
  "answer": "6, 12 i 56.",
  "tip": "Jeśli NWD i NWW sprawiają kłopot, zajrzyj najpierw do tematu „Podzielność, NWD i NWW”.",
  "check": [
   "math.gcd(12, 18) == 6",
   "math.lcm(4, 6) == 12"
  ]
 },
 "levels": [
  {
   "n": 1,
   "name": "Podstawy",
   "desc": "Każda umiejętność osobno. Liczbę mieszaną wpisuj ze spacją, np. 3 2/5."
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
    "U1"
   ],
   "type": "fields",
   "q": "Skróć ułamki do postaci nieskracalnej: a) 24/36, b) 35/60.",
   "fields": [
    {
     "label": "a) licznik",
     "ans": 2,
     "show": "2",
     "why": [
      [
       4,
       "4/6 da się jeszcze skrócić przez 2. Skracaj od razu przez NWD(24, 36) = 12."
      ]
     ]
    },
    {
     "label": "a) mianownik",
     "ans": 3,
     "show": "3"
    },
    {
     "label": "b) licznik",
     "ans": 7,
     "show": "7",
     "why": [
      [
       35,
       "Ułamek trzeba skrócić: NWD(35, 60) = 5."
      ]
     ]
    },
    {
     "label": "b) mianownik",
     "ans": 12,
     "show": "12"
    }
   ],
   "sol": [
    "<b>a)</b> NWD(24, 36) = 12: [[24/36 = 2/3]].",
    "<b>b)</b> NWD(35, 60) = 5: [[35/60 = 7/12]]."
   ],
   "answer": "a) 2/3, b) 7/12.",
   "tip": "Sprawdź na końcu: czy licznik i mianownik mają jeszcze wspólny dzielnik?",
   "check": [
    "F(24, 36) == F(2, 3)",
    "F(35, 60) == F(7, 12)"
   ],
   "twin": {
    "type": "fields",
    "q": "Skróć ułamki do postaci nieskracalnej: a) 18/45, b) 42/56.",
    "fields": [
     {
      "label": "a) licznik",
      "ans": 2,
      "show": "2"
     },
     {
      "label": "a) mianownik",
      "ans": 5,
      "show": "5"
     },
     {
      "label": "b) licznik",
      "ans": 3,
      "show": "3"
     },
     {
      "label": "b) mianownik",
      "ans": 4,
      "show": "4"
     }
    ],
    "sol": [
     "<b>a)</b> NWD(18, 45) = 9: [[2/5]].",
     "<b>b)</b> NWD(42, 56) = 14: [[3/4]]."
    ],
    "answer": "a) 2/5, b) 3/4.",
    "tip": "Możesz skracać kilka razy po trochu.",
    "check": [
     "F(18, 45) == F(2, 5)",
     "F(42, 56) == F(3, 4)"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Skróć ułamki do postaci nieskracalnej: a) 16/40, b) 54/72.",
    "fields": [
     {
      "label": "a) licznik",
      "ans": 2,
      "show": "2",
      "why": [
       [
        4,
        "4/10 da się jeszcze skrócić przez 2."
       ]
      ]
     },
     {
      "label": "a) mianownik",
      "ans": 5,
      "show": "5"
     },
     {
      "label": "b) licznik",
      "ans": 3,
      "show": "3",
      "why": [
       [
        9,
        "9/12 da się jeszcze skrócić przez 3."
       ]
      ]
     },
     {
      "label": "b) mianownik",
      "ans": 4,
      "show": "4"
     }
    ],
    "sol": [
     "<b>a)</b> NWD(16, 40) = 8: [[2/5]].",
     "<b>b)</b> NWD(54, 72) = 18: [[3/4]]."
    ],
    "answer": "a) 2/5, b) 3/4.",
    "tip": "Skracaj, aż licznik i mianownik nie mają wspólnego dzielnika.",
    "check": [
     "F(16, 40) == F(2, 5)",
     "F(54, 72) == F(3, 4)"
    ]
   }
  },
  {
   "id": "a2",
   "level": 1,
   "skills": [
    "U1"
   ],
   "type": "abcd",
   "q": "Jaką częścią godziny jest 45 minut?",
   "opts": [
    "9/20",
    "4/5",
    "3/4",
    "2/3"
   ],
   "ok": 2,
   "why": {
    "A": "9/20 = 45/100. Ale godzina ma 60 minut, a nie 100.",
    "B": "4/5 godziny to 48 minut.",
    "D": "2/3 godziny to 40 minut."
   },
   "sol": [
    "Godzina ma 60 minut: [[45/60]]. Skracamy przez 15: [[3/4]]."
   ],
   "answer": "C, 3/4.",
   "tip": "Zawsze sprawdź, ile małych jednostek ma duża: godzina 60 min, doba 24 h.",
   "check": [
    "F(45, 60) == F(3, 4)"
   ],
   "twin": {
    "type": "abcd",
    "q": "Jaką częścią metra jest 35 cm?",
    "opts": [
     "7/20",
     "7/10",
     "7/12",
     "1/3"
    ],
    "ok": 0,
    "why": {
     "B": "7/10 metra to 70 cm.",
     "C": "7/12 = 35/60. Ale metr ma 100 cm, a nie 60.",
     "D": "1/3 metra to około 33 cm."
    },
    "sol": [
     "[[35/100]], skracamy przez 5: [[7/20]]."
    ],
    "answer": "A, 7/20.",
    "tip": "Metr ma 100 cm.",
    "check": [
     "F(35, 100) == F(7, 20)"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Jaką częścią doby jest 18 godzin?",
    "opts": [
     "9/50",
     "3/10",
     "2/3",
     "3/4"
    ],
    "ok": 3,
    "why": {
     "A": "9/50 = 18/100. Ale doba ma 24 godziny, a nie 100.",
     "B": "3/10 = 18/60. Ale doba ma 24 godziny, a nie 60.",
     "C": "2/3 doby to 16 godzin."
    },
    "sol": [
     "[[18/24]], skracamy przez 6: [[3/4]]."
    ],
    "answer": "D, 3/4.",
    "tip": "Doba ma 24 godziny.",
    "check": [
     "F(18, 24) == F(3, 4)"
    ]
   }
  },
  {
   "id": "a3",
   "level": 1,
   "skills": [
    "U2"
   ],
   "type": "fields",
   "q": "Zamień na liczby mieszane.",
   "fields": [
    {
     "label": "17/5",
     "ans": 3.4,
     "show": "3 2/5",
     "why": [
      [
       2.6,
       "Iloraz to całości, a reszta to licznik: 17 = 5 · 3 + 2, więc 3 2/5."
      ]
     ]
    },
    {
     "label": "38/7",
     "ans": 5.428571428571429,
     "show": "5 3/7",
     "why": [
      [
       3.7142857142857144,
       "Iloraz (5) to całości, reszta (3) to licznik: 5 3/7."
      ]
     ]
    }
   ],
   "sol": [
    "<b>17/5:</b> [[17 = 5 · 3 + 2]], więc 3 2/5.",
    "<b>38/7:</b> [[38 = 7 · 5 + 3]], więc 5 3/7."
   ],
   "answer": "3 2/5 i 5 3/7.",
   "tip": "Wpisz ze spacją: 3 2/5.",
   "check": [
    "F(17, 5) == 3 + F(2, 5)",
    "F(38, 7) == 5 + F(3, 7)"
   ],
   "twin": {
    "type": "fields",
    "q": "Zamień na liczby mieszane.",
    "fields": [
     {
      "label": "22/3",
      "ans": 7.333333333333333,
      "show": "7 1/3"
     },
     {
      "label": "45/8",
      "ans": 5.625,
      "show": "5 5/8"
     }
    ],
    "sol": [
     "<b>22/3:</b> [[22 = 3 · 7 + 1]], więc 7 1/3.",
     "<b>45/8:</b> [[45 = 8 · 5 + 5]], więc 5 5/8."
    ],
    "answer": "7 1/3 i 5 5/8.",
    "tip": "Reszta z dzielenia to nowy licznik.",
    "check": [
     "F(22, 3) == 7 + F(1, 3)",
     "F(45, 8) == 5 + F(5, 8)"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Zamień na liczby mieszane.",
    "fields": [
     {
      "label": "31/6",
      "ans": 5.166666666666667,
      "show": "5 1/6",
      "why": [
       [
        1.8333333333333335,
        "Całości to iloraz (5), a licznik to reszta (1)."
       ]
      ]
     },
     {
      "label": "50/9",
      "ans": 5.555555555555555,
      "show": "5 5/9"
     }
    ],
    "sol": [
     "<b>31/6:</b> [[31 = 6 · 5 + 1]], więc 5 1/6.",
     "<b>50/9:</b> [[50 = 9 · 5 + 5]], więc 5 5/9."
    ],
    "answer": "5 1/6 i 5 5/9.",
    "tip": "Dzielenie z resztą.",
    "check": [
     "F(31, 6) == 5 + F(1, 6)",
     "F(50, 9) == 5 + F(5, 9)"
    ]
   }
  },
  {
   "id": "a4",
   "level": 1,
   "skills": [
    "U3"
   ],
   "type": "abcd",
   "q": "Który ułamek jest najmniejszy?",
   "opts": [
    "5/6",
    "2/3",
    "7/9",
    "3/4"
   ],
   "ok": 1,
   "why": {
    "A": "5/6 = 30/36, to największy z nich.",
    "C": "7/9 = 28/36.",
    "D": "3/4 = 27/36."
   },
   "sol": [
    "Wspólny mianownik 36: [[5/6 = 30/36]], [[7/9 = 28/36]], [[3/4 = 27/36]], [[2/3 = 24/36]].",
    "Najmniejszy licznik ma 2/3."
   ],
   "answer": "B, 2/3.",
   "tip": "Każdemu z tych ułamków brakuje do 1 jednego kawałka. Najmniejszy jest ten, któremu brakuje największego kawałka: 1/3.",
   "check": [
    "min(F(5, 6), F(7, 9), F(3, 4), F(2, 3)) == F(2, 3)"
   ],
   "twin": {
    "type": "abcd",
    "q": "Który ułamek jest największy?",
    "opts": [
     "5/7",
     "4/5",
     "7/10",
     "3/4"
    ],
    "ok": 1,
    "why": {
     "A": "5/7 ≈ 0,71.",
     "C": "7/10 = 0,7.",
     "D": "3/4 = 0,75."
    },
    "sol": [
     "W postaci dziesiętnej: 5/7 ≈ 0,714; 7/10 = 0,7; 3/4 = 0,75; [[4/5 = 0,8]]."
    ],
    "answer": "B, 4/5.",
    "tip": "Porównanie przez ułamki dziesiętne bywa szybsze.",
    "check": [
     "max(F(5, 7), F(7, 10), F(3, 4), F(4, 5)) == F(4, 5)"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Który ułamek jest największy?",
    "opts": [
     "5/8",
     "3/5",
     "7/11",
     "2/3"
    ],
    "ok": 3,
    "why": {
     "A": "5/8 = 0,625.",
     "B": "3/5 = 0,6.",
     "C": "7/11 ≈ 0,64."
    },
    "sol": [
     "5/8 = 0,625; 3/5 = 0,6; 7/11 ≈ 0,636; [[2/3 ≈ 0,667]]."
    ],
    "answer": "D, 2/3.",
    "tip": "Przy bliskich ułamkach licz dokładnie.",
    "check": [
     "max(F(5, 8), F(3, 5), F(7, 11), F(2, 3)) == F(2, 3)"
    ]
   }
  },
  {
   "id": "a8",
   "level": 1,
   "skills": [
    "U6"
   ],
   "type": "table",
   "q": "Uzupełnij tabelę. W każdym wierszu ta sama liczba zapisana na dwa sposoby.",
   "note": "Ułamek zwykły wpisz z kreską, np. 3/4.",
   "head": [
    "ułamek zwykły",
    "ułamek dziesiętny"
   ],
   "rows": [
    [
     {
      "given": "3/5"
     },
     {
      "ans": 0.6,
      "show": "0,6"
     }
    ],
    [
     {
      "given": "7/20"
     },
     {
      "ans": 0.35,
      "show": "0,35"
     }
    ],
    [
     {
      "ans": 0.125,
      "frac": true,
      "show": "1/8"
     },
     {
      "given": "0,125"
     }
    ],
    [
     {
      "ans": 0.04,
      "frac": true,
      "show": "1/25"
     },
     {
      "given": "0,04"
     }
    ]
   ],
   "sol": [
    "<b>3/5</b> = 6/10 = [[0,6]]. <b>7/20</b> = 35/100 = [[0,35]].",
    "<b>0,125</b> = 125/1000 = [[1/8]]. <b>0,04</b> = 4/100 = [[1/25]]."
   ],
   "answer": "0,6; 0,35; 1/8; 1/25.",
   "tip": "Rozszerzaj mianownik do 10, 100 albo 1 000.",
   "check": [
    "F(3, 5) == F('0.6')",
    "F(7, 20) == F('0.35')",
    "F('0.125') == F(1, 8)",
    "F('0.04') == F(1, 25)"
   ],
   "twin": {
    "type": "table",
    "q": "Uzupełnij tabelę. W każdym wierszu ta sama liczba zapisana na dwa sposoby.",
    "note": "Ułamek zwykły wpisz z kreską, np. 3/4.",
    "head": [
     "ułamek zwykły",
     "ułamek dziesiętny"
    ],
    "rows": [
     [
      {
       "given": "4/5"
      },
      {
       "ans": 0.8,
       "show": "0,8"
      }
     ],
     [
      {
       "given": "9/25"
      },
      {
       "ans": 0.36,
       "show": "0,36"
      }
     ],
     [
      {
       "ans": 0.375,
       "frac": true,
       "show": "3/8"
      },
      {
       "given": "0,375"
      }
     ],
     [
      {
       "ans": 0.06,
       "frac": true,
       "show": "3/50"
      },
      {
       "given": "0,06"
      }
     ]
    ],
    "sol": [
     "<b>4/5</b> = [[0,8]]. <b>9/25</b> = 36/100 = [[0,36]].",
     "<b>0,375</b> = 375/1000 = [[3/8]]. <b>0,06</b> = 6/100 = [[3/50]]."
    ],
    "answer": "0,8; 0,36; 3/8; 3/50.",
    "tip": "1/8 = 0,125, więc 3/8 = 0,375.",
    "check": [
     "F(9, 25) == F('0.36')",
     "F('0.375') == F(3, 8)",
     "F('0.06') == F(3, 50)"
    ]
   },
   "twin2": {
    "type": "table",
    "q": "Uzupełnij tabelę. W każdym wierszu ta sama liczba zapisana na dwa sposoby.",
    "note": "Ułamek zwykły wpisz z kreską, np. 3/4.",
    "head": [
     "ułamek zwykły",
     "ułamek dziesiętny"
    ],
    "rows": [
     [
      {
       "given": "2/5"
      },
      {
       "ans": 0.4,
       "show": "0,4"
      }
     ],
     [
      {
       "given": "11/20"
      },
      {
       "ans": 0.55,
       "show": "0,55"
      }
     ],
     [
      {
       "ans": 0.625,
       "frac": true,
       "show": "5/8"
      },
      {
       "given": "0,625"
      }
     ],
     [
      {
       "ans": 0.08,
       "frac": true,
       "show": "2/25"
      },
      {
       "given": "0,08"
      }
     ]
    ],
    "sol": [
     "<b>2/5</b> = [[0,4]]. <b>11/20</b> = 55/100 = [[0,55]].",
     "<b>0,625</b> = 625/1000 = [[5/8]]. <b>0,08</b> = 8/100 = [[2/25]]."
    ],
    "answer": "0,4; 0,55; 5/8; 2/25.",
    "tip": "5/8 = 5 · 0,125.",
    "check": [
     "F(11, 20) == F('0.55')",
     "F('0.625') == F(5, 8)",
     "F('0.08') == F(2, 25)"
    ]
   }
  },
  {
   "id": "a9",
   "level": 1,
   "skills": [
    "U7"
   ],
   "type": "fields",
   "q": "Oblicz.",
   "fields": [
    {
     "label": "3,2 + 0,85",
     "ans": 4.05,
     "show": "4,05"
    },
    {
     "label": "0,3 · 0,4",
     "ans": 0.12,
     "show": "0,12",
     "why": [
      [
       1.2,
       "0,3 · 0,4: 3 · 4 = 12, a po przecinku mają być dwie cyfry: 0,12."
      ]
     ]
    },
    {
     "label": "6,3 : 0,9",
     "ans": 7,
     "show": "7",
     "why": [
      [
       0.7,
       "Przesuń przecinek w obu liczbach: 63 : 9 = 7."
      ]
     ]
    }
   ],
   "sol": [
    "<b>3,2 + 0,85</b> = 3,20 + 0,85 = [[4,05]].",
    "<b>0,3 · 0,4:</b> 3 · 4 = 12, dwie cyfry po przecinku: [[0,12]].",
    "<b>6,3 : 0,9</b> = 63 : 9 = [[7]]."
   ],
   "answer": "4,05; 0,12 i 7.",
   "tip": "Przy dodawaniu dopisz zero, żeby liczby miały tyle samo cyfr po przecinku.",
   "check": [
    "F('3.2') + F('0.85') == F('4.05')",
    "F('0.3') * F('0.4') == F('0.12')",
    "F('6.3') / F('0.9') == 7"
   ],
   "twin": {
    "type": "fields",
    "q": "Oblicz.",
    "fields": [
     {
      "label": "5,1 − 2,35",
      "ans": 2.75,
      "show": "2,75"
     },
     {
      "label": "0,05 · 0,6",
      "ans": 0.03,
      "show": "0,03"
     },
     {
      "label": "4,8 : 0,12",
      "ans": 40,
      "show": "40"
     }
    ],
    "sol": [
     "<b>5,1 − 2,35</b> = 5,10 − 2,35 = [[2,75]].",
     "<b>0,05 · 0,6:</b> 5 · 6 = 30, trzy cyfry po przecinku: [[0,030 = 0,03]].",
     "<b>4,8 : 0,12</b> = 480 : 12 = [[40]]."
    ],
    "answer": "2,75; 0,03 i 40.",
    "tip": "Przesuwasz przecinek w obu liczbach o tyle samo miejsc.",
    "check": [
     "F('5.1') - F('2.35') == F('2.75')",
     "F('0.05') * F('0.6') == F('0.03')",
     "F('4.8') / F('0.12') == 40"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Oblicz.",
    "fields": [
     {
      "label": "4,5 + 0,75",
      "ans": 5.25,
      "show": "5,25",
      "why": [
       [
        4.575,
        "Przecinek pod przecinkiem: 4,50 + 0,75."
       ]
      ]
     },
     {
      "label": "0,2 · 0,6",
      "ans": 0.12,
      "show": "0,12",
      "why": [
       [
        1.2,
        "Dwie cyfry po przecinku: 0,12."
       ]
      ]
     },
     {
      "label": "2,4 : 0,3",
      "ans": 8,
      "show": "8",
      "why": [
       [
        0.8,
        "24 : 3 = 8. Przesuwasz przecinek w obu liczbach."
       ]
      ]
     }
    ],
    "sol": [
     "[[4,50 + 0,75 = 5,25]].",
     "[[0,2 · 0,6 = 0,12]].",
     "[[24 : 3 = 8]]."
    ],
    "answer": "5,25; 0,12 i 8.",
    "tip": "Szacuj: 0,2 · 0,6 to mniej niż 0,6.",
    "check": [
     "F('4.5') + F('0.75') == F('5.25')",
     "F('0.2') * F('0.6') == F('0.12')",
     "F('2.4') / F('0.3') == 8"
    ]
   }
  },
  {
   "id": "a10",
   "level": 1,
   "skills": [
    "U9"
   ],
   "type": "fields",
   "q": "2/5 pewnej liczby to 14. Jaka to liczba?",
   "fields": [
    {
     "label": "Liczba",
     "ans": 35,
     "show": "35",
     "why": [
      [
       5.6,
       "5,6 to 2/5 z 14. Szukasz całości: 1/5 to 7, a całość 5 · 7 = 35."
      ]
     ]
    }
   ],
   "sol": [
    "2/5 to 14, więc 1/5 to [[14 : 2 = 7]].",
    "Cała liczba to 5/5: [[5 · 7 = 35]]. Sprawdzenie: 2/5 z 35 = 14."
   ],
   "answer": "35.",
   "tip": "Najpierw jeden kawałek, potem całość.",
   "check": [
    "14 / F(2, 5) == 35"
   ],
   "twin": {
    "type": "fields",
    "q": "3/4 pewnej liczby to 27. Jaka to liczba?",
    "fields": [
     {
      "label": "Liczba",
      "ans": 36,
      "show": "36"
     }
    ],
    "sol": [
     "1/4 to [[27 : 3 = 9]], całość [[4 · 9 = 36]]."
    ],
    "answer": "36.",
    "tip": "Sprawdź: 3/4 z 36 = 27.",
    "check": [
     "27 / F(3, 4) == 36"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "5/6 pewnej liczby to 40. Jaka to liczba?",
    "fields": [
     {
      "label": "Liczba",
      "ans": 48,
      "show": "48",
      "why": [
       [
        33.333333333333336,
        "To 5/6 z 40. Szukasz całości: 1/6 to 8, a całość 6 · 8 = 48."
       ]
      ]
     }
    ],
    "sol": [
     "1/6 to [[40 : 5 = 8]], całość [[6 · 8 = 48]]."
    ],
    "answer": "48.",
    "tip": "Sprawdź: 5/6 z 48 = 40.",
    "check": [
     "40 / F(5, 6) == 48"
    ]
   }
  },
  {
   "id": "b2",
   "level": 2,
   "skills": [
    "U4",
    "U2"
   ],
   "type": "fields",
   "q": "Oblicz. Wynik zapisz jako liczbę mieszaną.",
   "fields": [
    {
     "label": "3 1/4 − 1 5/6",
     "ans": 1.4166666666666667,
     "show": "1 5/12",
     "why": [
      [
       2.5833333333333335,
       "Nie odejmuj ułamków „odwrotnie” (5/6 − 1/4). Zamień na ułamki niewłaściwe: 39/12 − 22/12 = 17/12."
      ]
     ]
    },
    {
     "label": "1 2/5 + 2 3/4",
     "ans": 4.15,
     "show": "4 3/20"
    }
   ],
   "sol": [
    "<b>3 1/4 − 1 5/6</b> = 13/4 − 11/6 = [[39/12 − 22/12 = 17/12 = 1 5/12]].",
    "<b>1 2/5 + 2 3/4</b> = 7/5 + 11/4 = [[28/20 + 55/20 = 83/20 = 4 3/20]]."
   ],
   "answer": "1 5/12 i 4 3/20.",
   "tip": "Przy dodawaniu możesz też osobno dodać całości (1 + 2 = 3) i ułamki (2/5 + 3/4 = 1 3/20).",
   "check": [
    "F(13, 4) - F(11, 6) == 1 + F(5, 12)",
    "F(7, 5) + F(11, 4) == 4 + F(3, 20)"
   ],
   "twin": {
    "type": "fields",
    "q": "Oblicz. Wynik zapisz jako liczbę mieszaną.",
    "fields": [
     {
      "label": "4 1/3 − 2 3/4",
      "ans": 1.5833333333333333,
      "show": "1 7/12"
     },
     {
      "label": "2 1/6 + 1 3/4",
      "ans": 3.9166666666666665,
      "show": "3 11/12"
     }
    ],
    "sol": [
     "<b>4 1/3 − 2 3/4</b> = 13/3 − 11/4 = [[52/12 − 33/12 = 19/12 = 1 7/12]].",
     "<b>2 1/6 + 1 3/4</b> = 13/6 + 7/4 = [[26/12 + 21/12 = 47/12 = 3 11/12]]."
    ],
    "answer": "1 7/12 i 3 11/12.",
    "tip": "NWW(3, 4) = 12, NWW(6, 4) = 12.",
    "check": [
     "F(13, 3) - F(11, 4) == 1 + F(7, 12)",
     "F(13, 6) + F(7, 4) == 3 + F(11, 12)"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Oblicz. Wynik zapisz jako liczbę mieszaną.",
    "fields": [
     {
      "label": "5 1/6 − 2 3/4",
      "ans": 2.4166666666666665,
      "show": "2 5/12",
      "why": [
       [
        3.5833333333333335,
        "3/4 > 1/6, więc „pożycz” całość albo zamień na ułamki niewłaściwe: 62/12 − 33/12."
       ]
      ]
     },
     {
      "label": "1 5/8 + 2 1/2",
      "ans": 4.125,
      "show": "4 1/8"
     }
    ],
    "sol": [
     "[[31/6 − 11/4 = 62/12 − 33/12 = 29/12 = 2 5/12]].",
     "[[13/8 + 20/8 = 33/8 = 4 1/8]]."
    ],
    "answer": "2 5/12 i 4 1/8.",
    "tip": "Ułamki niewłaściwe chronią przed błędem przy „pożyczaniu”.",
    "check": [
     "F(31, 6) - F(11, 4) == 2 + F(5, 12)",
     "F(13, 8) + F(5, 2) == 4 + F(1, 8)"
    ]
   }
  },
  {
   "id": "b3",
   "level": 2,
   "skills": [
    "U5"
   ],
   "type": "abcd",
   "q": "Wartość iloczynu 2 1/2 · 1 1/5 jest równa:",
   "opts": [
    "3",
    "2 1/10",
    "2 1/12",
    "3 7/10"
   ],
   "ok": 0,
   "why": {
    "B": "2 1/10 wychodzi, gdy osobno pomnożysz całości (2 · 1) i ułamki (1/2 · 1/5). Tak nie wolno.",
    "C": "2 1/12 to 25/12, czyli wynik dzielenia 5/2 : 6/5, a nie mnożenia.",
    "D": "3 7/10 to suma 2 1/2 + 1 1/5, a nie iloczyn."
   },
   "sol": [
    "Zamieniamy: 2 1/2 = 5/2, 1 1/5 = 6/5.",
    "[[5/2 · 6/5 = 30/10 = 3]]. Można skrócić na krzyż: 5 z 5 i 2 z 6."
   ],
   "answer": "A, 3.",
   "tip": "Liczby mieszane przed mnożeniem zawsze zamieniaj na ułamki niewłaściwe.",
   "check": [
    "F(5, 2) * F(6, 5) == 3",
    "2 + F(1, 10) == 2*1 + F(1, 2)*F(1, 5)",
    "F(5, 2) / F(6, 5) == 2 + F(1, 12)",
    "F(5, 2) + F(6, 5) == 3 + F(7, 10)"
   ],
   "twin": {
    "type": "abcd",
    "q": "Wartość iloczynu 3 1/3 · 1 1/5 jest równa:",
    "opts": [
     "3 1/15",
     "2 7/9",
     "4",
     "4 8/15"
    ],
    "ok": 2,
    "why": {
     "A": "3 1/15 to osobno 3 · 1 i 1/3 · 1/5. Tak nie wolno.",
     "B": "2 7/9 to 25/9, czyli wynik dzielenia 10/3 : 6/5.",
     "D": "4 8/15 to suma, a nie iloczyn."
    },
    "sol": [
     "3 1/3 = 10/3, 1 1/5 = 6/5.",
     "[[10/3 · 6/5 = 60/15 = 4]]."
    ],
    "answer": "C, 4.",
    "tip": "Skracaj na krzyż: 10 z 5, 6 z 3.",
    "check": [
     "F(10, 3) * F(6, 5) == 4",
     "F(10, 3) / F(6, 5) == 2 + F(7, 9)",
     "F(10, 3) + F(6, 5) == 4 + F(8, 15)"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Wartość iloczynu 1 3/4 · 2 2/7 jest równa:",
    "opts": [
     "2 3/14",
     "49/64",
     "4",
     "4 1/28"
    ],
    "ok": 2,
    "why": {
     "A": "2 3/14 to osobno 1 · 2 i 3/4 · 2/7. Tak nie wolno.",
     "B": "49/64 to wynik dzielenia 7/4 : 16/7.",
     "D": "4 1/28 to suma, a nie iloczyn."
    },
    "sol": [
     "1 3/4 = 7/4, 2 2/7 = 16/7.",
     "[[7/4 · 16/7 = 16/4 = 4]]."
    ],
    "answer": "C, 4.",
    "tip": "Skracaj 7 z 7 i 4 z 16.",
    "check": [
     "F(7, 4) * F(16, 7) == 4",
     "F(7, 4) / F(16, 7) == F(49, 64)",
     "F(7, 4) + F(16, 7) == 4 + F(1, 28)"
    ]
   }
  },
  {
   "id": "b7",
   "level": 2,
   "skills": [
    "U9"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Liczba 48 zwiększona o 1/4 to 60.",
     "ok": "P"
    },
    {
     "t": "Liczba 48 zmniejszona o 1/3 to 16.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> 1/4 z 48 to 12, a [[48 + 12 = 60]]. Prawda.",
    "<b>Zdanie 2.</b> 1/3 z 48 to 16, więc 48 zmniejszone o 1/3 to [[48 − 16 = 32]], a nie 16. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "„Zmniejszona o 1/3” to 2/3 liczby.",
   "check": [
    "48 * F(5, 4) == 60",
    "48 * F(2, 3) == 32"
   ],
   "twin": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Liczba 90 zmniejszona o 2/5 to 54.",
      "ok": "P"
     },
     {
      "t": "Liczba 90 zwiększona o 1/3 to 30.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> 2/5 z 90 to 36, a [[90 − 36 = 54]]. Prawda.",
     "<b>Zdanie 2.</b> 90 + 30 = [[120]]. 30 to tylko 1/3 liczby. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Zwiększenie zawsze daje liczbę większą od wyjściowej.",
    "check": [
     "90 * F(3, 5) == 54",
     "90 * F(4, 3) == 120"
    ]
   },
   "twin2": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Liczba 72 zwiększona o 1/3 to 96.",
      "ok": "P"
     },
     {
      "t": "Liczba 72 zmniejszona o 3/4 to 54.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[72 + 24 = 96]]. Prawda.",
     "<b>Zdanie 2.</b> 3/4 z 72 to 54, więc 72 zmniejszone o 3/4 to [[72 − 54 = 18]]. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Zmniejszona o 3/4: zostaje 1/4.",
    "check": [
     "72 * F(4, 3) == 96",
     "72 * F(1, 4) == 18"
    ]
   }
  },
  {
   "id": "b9",
   "level": 2,
   "skills": [
    "U1",
    "U4"
   ],
   "type": "fields",
   "q": "Uczniowie klasy chodzą na jedno kółko: 1/3 na piłkę, 1/4 na taniec, a reszta na plastykę. W klasie jest 24 uczniów.",
   "fields": [
    {
     "label": "Jaka część klasy chodzi na plastykę?",
     "ans": 0.4166666666666667,
     "show": "5/12",
     "why": [
      [
       0.5833333333333334,
       "7/12 to piłka i taniec razem. Plastyka to reszta: 1 − 7/12 = 5/12."
      ]
     ]
    },
    {
     "label": "Ilu uczniów chodzi na plastykę?",
     "ans": 10,
     "show": "10"
    }
   ],
   "sol": [
    "Piłka i taniec: [[1/3 + 1/4 = 4/12 + 3/12 = 7/12]]. Plastyka: [[1 − 7/12 = 5/12]].",
    "Uczniów: [[5/12 z 24 = 10]]."
   ],
   "answer": "5/12 klasy, czyli 10 uczniów.",
   "tip": "„Reszta” to 1 minus pozostałe części.",
   "check": [
    "1 - F(1, 3) - F(1, 4) == F(5, 12)",
    "F(5, 12) * 24 == 10"
   ],
   "twin": {
    "type": "fields",
    "q": "Uczniowie klasy chodzą na jedno kółko: 2/5 na piłkę, 1/3 na chór, a reszta na szachy. W klasie jest 30 uczniów.",
    "fields": [
     {
      "label": "Jaka część klasy chodzi na szachy?",
      "ans": 0.26666666666666666,
      "show": "4/15"
     },
     {
      "label": "Ilu uczniów chodzi na szachy?",
      "ans": 8,
      "show": "8"
     }
    ],
    "sol": [
     "[[2/5 + 1/3 = 6/15 + 5/15 = 11/15]], szachy: [[4/15]].",
     "[[4/15 z 30 = 8]]."
    ],
    "answer": "4/15 klasy, czyli 8 uczniów.",
    "tip": "Sprawdź: 12 + 10 + 8 = 30.",
    "check": [
     "1 - F(2, 5) - F(1, 3) == F(4, 15)",
     "F(4, 15) * 30 == 8"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Uczniowie klasy chodzą na jedno kółko: 1/4 na piłkę, 1/6 na taniec, a reszta na szachy. W klasie jest 36 uczniów.",
    "fields": [
     {
      "label": "Jaka część klasy chodzi na szachy?",
      "ans": 0.5833333333333334,
      "show": "7/12",
      "why": [
       [
        0.4166666666666667,
        "5/12 to piłka i taniec. Szachy to reszta."
       ]
      ]
     },
     {
      "label": "Ilu uczniów chodzi na szachy?",
      "ans": 21,
      "show": "21"
     }
    ],
    "sol": [
     "[[1/4 + 1/6 = 3/12 + 2/12 = 5/12]], szachy: [[7/12]].",
     "[[7/12 z 36 = 21]]."
    ],
    "answer": "7/12 klasy, czyli 21 uczniów.",
    "tip": "Sprawdź: 9 + 6 + 21 = 36.",
    "check": [
     "1 - F(1, 4) - F(1, 6) == F(7, 12)",
     "F(7, 12) * 36 == 21"
    ]
   }
  },
  {
   "id": "b10",
   "level": 2,
   "skills": [
    "U8",
    "U7"
   ],
   "type": "fields",
   "q": "Oblicz: 1/2 : 0,25 + 5,25 : 0,05",
   "fields": [
    {
     "label": "Wynik",
     "ans": 107,
     "show": "107",
     "why": [
      [
       105.125,
       "1/2 : 0,25 to dzielenie, a nie mnożenie: 0,5 : 0,25 = 2."
      ]
     ]
    }
   ],
   "sol": [
    "Najpierw dzielenia. [[1/2 : 0,25 = 0,5 : 0,25 = 2]].",
    "[[5,25 : 0,05 = 525 : 5 = 105]].",
    "[[2 + 105 = 107]]."
   ],
   "answer": "107.",
   "tip": "To fragment przykładu z podstawy programowej. Kolejność działań obowiązuje także przy ułamkach.",
   "check": [
    "F(1, 2) / F('0.25') + F('5.25') / F('0.05') == 107"
   ],
   "twin": {
    "type": "fields",
    "q": "Oblicz: 3/4 : 0,5 + 2,4 : 0,06",
    "fields": [
     {
      "label": "Wynik",
      "ans": 41.5,
      "show": "41,5"
     }
    ],
    "sol": [
     "[[3/4 : 0,5 = 0,75 : 0,5 = 1,5]].",
     "[[2,4 : 0,06 = 240 : 6 = 40]].",
     "[[1,5 + 40 = 41,5]]."
    ],
    "answer": "41,5.",
    "tip": "Dzielenie przez 0,5 to mnożenie przez 2.",
    "check": [
     "F(3, 4) / F('0.5') + F('2.4') / F('0.06') == F('41.5')"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Oblicz: 1/4 : 0,5 + 3,6 : 0,04",
    "fields": [
     {
      "label": "Wynik",
      "ans": 90.5,
      "show": "90,5",
      "why": [
       [
        9.5,
        "3,6 : 0,04 = 360 : 4 = 90, a nie 9."
       ]
      ]
     }
    ],
    "sol": [
     "[[0,25 : 0,5 = 0,5]].",
     "[[3,6 : 0,04 = 360 : 4 = 90]].",
     "[[0,5 + 90 = 90,5]]."
    ],
    "answer": "90,5.",
    "tip": "Dzieląc przez 0,04, przesuwasz przecinek o 2 miejsca.",
    "check": [
     "F(1, 4) / F('0.5') + F('3.6') / F('0.04') == F('90.5')"
    ]
   }
  },
  {
   "id": "b11",
   "level": 2,
   "skills": [
    "U3",
    "U6"
   ],
   "type": "tn",
   "q": "Czy 7/9 > 0,78? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "N",
   "reasons": {
    "1": "7/9 = 0,777…, a to mniej niż 0,78",
    "2": "7/9 = 0,79",
    "3": "9 jest większe od 8"
   },
   "okReason": "1",
   "sol": [
    "[[7 : 9 = 0,777…]]. Porównujemy cyfra po cyfrze: 0,77… i 0,78. Na drugim miejscu po przecinku 7 < 8, więc 7/9 < 0,78. Nie."
   ],
   "answer": "N, uzasadnienie 1.",
   "tip": "Ułamek okresowy porównuj po wypisaniu kilku cyfr.",
   "check": [
    "F(7, 9) < F('0.78')"
   ],
   "twin": {
    "type": "tn",
    "q": "Czy 5/6 > 0,83? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "T",
    "reasons": {
     "1": "5/6 = 0,8333…, a to więcej niż 0,83",
     "2": "5/6 = 0,56",
     "3": "6 jest mniejsze od 83"
    },
    "okReason": "1",
    "sol": [
     "[[5 : 6 = 0,8333…]]. 0,833… > 0,830. Tak."
    ],
    "answer": "T, uzasadnienie 1.",
    "tip": "Dopisz zero: 0,83 = 0,830.",
    "check": [
     "F(5, 6) > F('0.83')"
    ]
   },
   "twin2": {
    "type": "tn",
    "q": "Czy 5/7 < 0,71? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "N",
    "reasons": {
     "1": "5/7 = 0,714…, a to więcej niż 0,71",
     "2": "5/7 = 0,57",
     "3": "7 jest mniejsze od 71"
    },
    "okReason": "1",
    "sol": [
     "[[5 : 7 = 0,714…]], a 0,714… > 0,710. Nie."
    ],
    "answer": "N, uzasadnienie 1.",
    "tip": "Wypisz trzy cyfry po przecinku.",
    "check": [
     "F(5, 7) > F('0.71')"
    ]
   }
  },
  {
   "id": "c3",
   "level": 3,
   "skills": [
    "U9",
    "U5"
   ],
   "type": "self",
   "q": "Na wycieczkę pojechało 3/5 uczniów klasy. Spośród pozostałych uczniów 1/4 była chora, a reszta, czyli 6 uczniów, przyszła do szkoły. Ilu uczniów liczy ta klasa? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczyłeś, jaką częścią klasy są uczniowie, którzy nie pojechali: 2/5.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś, jaką częścią klasy są uczniowie w szkole: 3/4 z 2/5 = 3/10.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś liczbę uczniów: 3/10 klasy to 6, więc klasa liczy 20 uczniów.",
     "pts": 1
    }
   ],
   "sol": [
    "Nie pojechało [[1 − 3/5 = 2/5]] klasy.",
    "Z nich do szkoły przyszły 3/4 (bo 1/4 chorowała): [[3/4 · 2/5 = 6/20 = 3/10]] klasy.",
    "3/10 klasy to 6 uczniów, więc 1/10 to 2 uczniów, a cała klasa [[10 · 2 = 20]].",
    "Sprawdzenie: pojechało 12, nie pojechało 8, chorych 2, w szkole 6. Zgadza się."
   ],
   "answer": "Klasa liczy 20 uczniów.",
   "tip": "„1/4 pozostałych” liczysz z pozostałych, a nie z całej klasy.",
   "check": [
    "F(3, 4) * (1 - F(3, 5)) == F(3, 10)",
    "6 / F(3, 10) == 20"
   ]
  },
  {
   "id": "c7",
   "level": 3,
   "skills": [
    "U2",
    "U6"
   ],
   "type": "pair",
   "q": "Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "Liczba 2 3/8 zapisana w postaci ułamka dziesiętnego to",
     "opts": {
      "A": "2,375",
      "B": "2,38"
     },
     "ok": "A"
    },
    {
     "label": "Liczba 0,45 zapisana w postaci ułamka nieskracalnego to",
     "opts": {
      "C": "9/20",
      "D": "45/100"
     },
     "ok": "C"
    }
   ],
   "sol": [
    "3/8 = 375/1000 = 0,375, więc [[2 3/8 = 2,375]]. 2,38 to tylko zaokrąglenie.",
    "0,45 = 45/100. Skracamy przez 5: [[9/20]]. 45/100 to ta sama liczba, ale ułamek da się skrócić."
   ],
   "answer": "A i C.",
   "tip": "„Nieskracalny” to ważne słowo w poleceniu.",
   "check": [
    "2 + F(3, 8) == F('2.375')",
    "F('0.45') == F(9, 20)"
   ],
   "twin": {
    "type": "pair",
    "q": "Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Liczba 3 5/16 zapisana w postaci ułamka dziesiętnego to",
      "opts": {
       "A": "3,516",
       "B": "3,3125"
      },
      "ok": "B"
     },
     {
      "label": "Liczba 0,64 zapisana w postaci ułamka nieskracalnego to",
      "opts": {
       "C": "64/100",
       "D": "16/25"
      },
      "ok": "D"
     }
    ],
    "sol": [
     "5/16 = 3125/10000 = 0,3125, więc [[3 5/16 = 3,3125]]. 3,516 to cyfry „5” i „16” zapisane po przecinku.",
     "0,64 = 64/100 = [[16/25]] (skracamy przez 4)."
    ],
    "answer": "B i D.",
    "tip": "1/16 = 0,0625.",
    "check": [
     "3 + F(5, 16) == F('3.3125')",
     "F('0.64') == F(16, 25)"
    ]
   },
   "twin2": {
    "type": "pair",
    "q": "Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Liczba 1 5/8 zapisana w postaci ułamka dziesiętnego to",
      "opts": {
       "A": "1,625",
       "B": "1,58"
      },
      "ok": "A"
     },
     {
      "label": "Liczba 0,35 zapisana w postaci ułamka nieskracalnego to",
      "opts": {
       "C": "35/100",
       "D": "7/20"
      },
      "ok": "D"
     }
    ],
    "sol": [
     "5/8 = 0,625, więc [[1 5/8 = 1,625]]. 1,58 to cyfry 5 i 8 dopisane po przecinku.",
     "0,35 = 35/100 = [[7/20]]."
    ],
    "answer": "A i D.",
    "tip": "„Nieskracalny” to ważne słowo.",
    "check": [
     "1 + F(5, 8) == F('1.625')",
     "F('0.35') == F(7, 20)"
    ]
   }
  },
  {
   "id": "c8",
   "level": 3,
   "skills": [
    "U8",
    "U3"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Wartość wyrażenia 1/3 + 0,5 jest większa od 5/6.",
     "ok": "F"
    },
    {
     "t": "Wartość wyrażenia 0,2 · 2/3 jest mniejsza od 1/5.",
     "ok": "P"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[1/3 + 1/2 = 2/6 + 3/6 = 5/6]]. Wartość jest RÓWNA 5/6, a nie większa. Fałsz.",
    "<b>Zdanie 2.</b> [[1/5 · 2/3 = 2/15]], a 1/5 = 3/15. 2/15 < 3/15. Prawda."
   ],
   "answer": "F, P.",
   "tip": "Mnożenie przez liczbę mniejszą od 1 zmniejsza wynik: 0,2 · 2/3 < 0,2.",
   "check": [
    "F(1, 3) + F('0.5') == F(5, 6)",
    "F('0.2') * F(2, 3) < F(1, 5)"
   ],
   "twin": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "0,25 + 1/3 = 7/12",
      "ok": "P"
     },
     {
      "t": "Wartość wyrażenia 1,5 : 3/4 jest mniejsza od 2.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[1/4 + 1/3 = 3/12 + 4/12 = 7/12]]. Prawda.",
     "<b>Zdanie 2.</b> [[3/2 : 3/4 = 3/2 · 4/3 = 2]]. Równe 2, a nie mniejsze. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Uważaj na słowa „większa”, „mniejsza”, „równa”.",
    "check": [
     "F('0.25') + F(1, 3) == F(7, 12)",
     "F('1.5') / F(3, 4) == 2"
    ]
   },
   "twin2": {
    "type": "pf",
    "q": "Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "0,5 + 1/4 = 3/4",
      "ok": "P"
     },
     {
      "t": "Wartość wyrażenia 0,3 · 1/3 jest większa od 0,1.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[1/2 + 1/4 = 3/4]]. Prawda.",
     "<b>Zdanie 2.</b> [[3/10 · 1/3 = 1/10 = 0,1]]. Równe, a nie większe. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Równe to nie większe.",
    "check": [
     "F('0.5') + F(1, 4) == F(3, 4)",
     "F('0.3') * F(1, 3) == F('0.1')"
    ]
   }
  },
  {
   "id": "c10",
   "level": 3,
   "skills": [
    "U9",
    "U5"
   ],
   "type": "self",
   "q": "W klasie jest 28 uczniów, a 3/7 z nich to dziewczęta. Okulary nosi 1/4 dziewcząt i połowa chłopców. Ilu uczniów tej klasy nosi okulary? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczyłeś liczbę dziewcząt (12) i chłopców (16).",
     "pts": 1
    },
    {
     "t": "Obliczyłeś, ile dziewcząt (3) i ilu chłopców (8) nosi okulary.",
     "pts": 1
    },
    {
     "t": "Podałeś wynik: 11 uczniów.",
     "pts": 1
    }
   ],
   "sol": [
    "Dziewczęta: [[3/7 z 28 = 12]], chłopcy: [[28 − 12 = 16]].",
    "Okulary: dziewczęta [[1/4 z 12 = 3]], chłopcy [[1/2 z 16 = 8]].",
    "Razem [[3 + 8 = 11]]."
   ],
   "answer": "11 uczniów.",
   "tip": "Ułamek liczysz zawsze z tej grupy, o której mówi zadanie (1/4 dziewcząt, a nie 1/4 klasy).",
   "check": [
    "F(3, 7) * 28 == 12",
    "F(1, 4) * 12 + F(1, 2) * 16 == 11"
   ]
  },
  {
   "id": "c11",
   "level": 3,
   "skills": [
    "U3",
    "U6"
   ],
   "type": "self",
   "q": "Uzasadnij, że 3/7 < 0,43 < 4/9.",
   "criteria": [
    {
     "t": "Zamieniłeś ułamki na dziesiętne: 3/7 = 0,428…, 4/9 = 0,444… (albo porównałeś inaczej poprawnie).",
     "pts": 1
    },
    {
     "t": "Porównałeś z 0,43 i zapisałeś wniosek.",
     "pts": 1
    }
   ],
   "sol": [
    "[[3 : 7 = 0,428…]] < 0,430.",
    "[[4 : 9 = 0,444…]] > 0,430.",
    "Więc 3/7 < 0,43 < 4/9."
   ],
   "answer": "0,428… < 0,43 < 0,444…",
   "tip": "Przy porównaniu wypisz tyle cyfr, żeby było widać różnicę.",
   "check": [
    "F(3, 7) < F('0.43') < F(4, 9)"
   ]
  }
 ],
 "test": [
  {
   "id": "t1",
   "skills": [
    "U1"
   ],
   "type": "fields",
   "q": "Skróć ułamek 28/42 do postaci nieskracalnej.",
   "fields": [
    {
     "label": "Licznik",
     "ans": 2,
     "show": "2"
    },
    {
     "label": "Mianownik",
     "ans": 3,
     "show": "3"
    }
   ],
   "sol": [
    "NWD(28, 42) = 14: [[28/42 = 2/3]]."
   ],
   "answer": "2/3.",
   "tip": "28 = 2² · 7, 42 = 2 · 3 · 7.",
   "check": [
    "F(28, 42) == F(2, 3)"
   ],
   "pts": 1
  },
  {
   "id": "t2",
   "skills": [
    "U3"
   ],
   "type": "abcd",
   "q": "Który ułamek jest największy?",
   "opts": [
    "3/5",
    "5/9",
    "4/7",
    "7/12"
   ],
   "ok": 0,
   "why": {
    "B": "5/9 ≈ 0,56.",
    "C": "4/7 ≈ 0,57.",
    "D": "7/12 ≈ 0,58."
   },
   "sol": [
    "W przybliżeniu: 5/9 ≈ 0,556; 4/7 ≈ 0,571; [[3/5 = 0,6]]; 7/12 ≈ 0,583."
   ],
   "answer": "A, 3/5.",
   "tip": "Ułamki bliskie sobie porównuj dokładnie.",
   "check": [
    "max(F(5, 9), F(4, 7), F(3, 5), F(7, 12)) == F(3, 5)"
   ],
   "pts": 1
  },
  {
   "id": "t3",
   "skills": [
    "U4"
   ],
   "type": "fields",
   "q": "Oblicz: 2 1/2 − 1 3/4",
   "fields": [
    {
     "label": "Wynik",
     "ans": 0.75,
     "show": "3/4"
    }
   ],
   "sol": [
    "[[5/2 − 7/4 = 10/4 − 7/4 = 3/4]]."
   ],
   "answer": "3/4.",
   "tip": "Zamień liczby mieszane na ułamki niewłaściwe.",
   "check": [
    "F(5, 2) - F(7, 4) == F(3, 4)"
   ],
   "pts": 1
  },
  {
   "id": "t4",
   "skills": [
    "U5"
   ],
   "type": "fields",
   "q": "Oblicz: 1 1/3 : 2/9",
   "fields": [
    {
     "label": "Wynik",
     "ans": 6,
     "show": "6"
    }
   ],
   "sol": [
    "[[4/3 : 2/9 = 4/3 · 9/2 = 36/6 = 6]]."
   ],
   "answer": "6.",
   "tip": "Dzielenie: mnożysz przez odwrotność.",
   "check": [
    "F(4, 3) / F(2, 9) == 6"
   ],
   "pts": 1
  },
  {
   "id": "t5",
   "skills": [
    "U6"
   ],
   "type": "abcd",
   "q": "Liczba 0,85 zapisana w postaci ułamka nieskracalnego to:",
   "opts": [
    "85/10",
    "8/5",
    "17/2",
    "17/20"
   ],
   "ok": 3,
   "why": {
    "A": "85/10 = 8,5, a nie 0,85.",
    "B": "8/5 = 1,6.",
    "C": "17/2 = 8,5."
   },
   "sol": [
    "[[0,85 = 85/100]]. Skracamy przez 5: [[17/20]]."
   ],
   "answer": "D, 17/20.",
   "tip": "Dwie cyfry po przecinku to setne części.",
   "check": [
    "F('0.85') == F(17, 20)"
   ],
   "pts": 1
  },
  {
   "id": "t6",
   "skills": [
    "U7"
   ],
   "type": "fields",
   "pts": 2,
   "perField": true,
   "q": "Oblicz.",
   "note": "Każdy dobry wynik to 1 punkt.",
   "fields": [
    {
     "label": "0,6 · 0,05",
     "ans": 0.03,
     "show": "0,03"
    },
    {
     "label": "1,44 : 0,12",
     "ans": 12,
     "show": "12"
    }
   ],
   "sol": [
    "<b>0,6 · 0,05:</b> 6 · 5 = 30, trzy cyfry po przecinku: [[0,030 = 0,03]].",
    "<b>1,44 : 0,12</b> = 144 : 12 = [[12]]."
   ],
   "answer": "0,03 i 12.",
   "tip": "Liczysz cyfry po przecinku w obu czynnikach.",
   "check": [
    "F('0.6') * F('0.05') == F('0.03')",
    "F('1.44') / F('0.12') == 12"
   ]
  },
  {
   "id": "t7",
   "skills": [
    "U8"
   ],
   "type": "abcd",
   "q": "Wartość wyrażenia (3,6 − 4 1/2) : (−3) jest równa:",
   "opts": [
    "−3/10",
    "3/10",
    "2 7/10",
    "−9/10"
   ],
   "ok": 1,
   "why": {
    "A": "Zły znak: liczba ujemna podzielona przez ujemną daje dodatnią.",
    "C": "2 7/10 wychodzi, gdy pomnożysz przez −3 zamiast podzielić.",
    "D": "−9/10 to wartość nawiasu, jeszcze niepodzielona przez −3."
   },
   "sol": [
    "3,6 = 36/10, 4 1/2 = 45/10. Nawias: [[−9/10]].",
    "[[−9/10 : (−3) = 3/10]]."
   ],
   "answer": "B, 3/10.",
   "tip": "Jak na egzaminie 2025: najpierw nawias, potem znak.",
   "check": [
    "(F('3.6') - F(9, 2)) / (-3) == F(3, 10)",
    "(F('3.6') - F(9, 2)) * (-3) == 2 + F(7, 10)"
   ],
   "pts": 1
  },
  {
   "id": "t8",
   "skills": [
    "U9"
   ],
   "type": "fields",
   "q": "3/7 pewnej liczby to 27. Jaka to liczba?",
   "fields": [
    {
     "label": "Liczba",
     "ans": 63,
     "show": "63"
    }
   ],
   "sol": [
    "1/7 to [[27 : 3 = 9]], całość [[7 · 9 = 63]]."
   ],
   "answer": "63.",
   "tip": "Sprawdź: 3/7 z 63 = 27.",
   "check": [
    "27 / F(3, 7) == 63"
   ],
   "pts": 1
  },
  {
   "id": "t9",
   "skills": [
    "U2"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "23/4 = 5 3/4",
     "ok": "P"
    },
    {
     "t": "2 3/7 = 13/7",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[23 = 4 · 5 + 3]]. Prawda.",
    "<b>Zdanie 2.</b> [[2 · 7 + 3 = 17]], więc 2 3/7 = 17/7. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Całości mnożysz przez mianownik i dodajesz licznik.",
   "check": [
    "F(23, 4) == 5 + F(3, 4)",
    "2 + F(3, 7) == F(17, 7)"
   ],
   "pts": 1
  },
  {
   "id": "t10",
   "skills": [
    "U3",
    "U6"
   ],
   "type": "tn",
   "q": "Czy 4/9 < 0,45? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "T",
   "reasons": {
    "1": "4/9 = 0,444…, a to mniej niż 0,45",
    "2": "4/9 = 0,49",
    "3": "9 jest mniejsze od 45"
   },
   "okReason": "1",
   "sol": [
    "[[4 : 9 = 0,444…]]. 0,444… < 0,450. Tak."
   ],
   "answer": "T, uzasadnienie 1.",
   "tip": "Wypisz kilka cyfr ułamka okresowego.",
   "check": [
    "F(4, 9) < F('0.45')"
   ],
   "pts": 1
  },
  {
   "id": "t11",
   "skills": [
    "U4"
   ],
   "type": "self",
   "q": "Liczbę 7/10 zapisano w postaci sumy trzech ułamków zwykłych. Dwa z nich to 1/5 i 1/4. Uzasadnij, że trzeci składnik można zapisać jako ułamek o liczniku 1 i mianowniku będącym liczbą całkowitą dodatnią. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczyłeś trzeci składnik: 7/10 − 1/5 − 1/4 = 14/20 − 4/20 − 5/20 = 5/20.",
     "pts": 1
    },
    {
     "t": "Skróciłeś do 1/4 i zapisałeś wniosek.",
     "pts": 1
    }
   ],
   "sol": [
    "[[7/10 − 1/5 − 1/4 = 14/20 − 4/20 − 5/20 = 5/20 = 1/4]].",
    "Licznik 1, mianownik 4, liczba całkowita dodatnia."
   ],
   "answer": "Trzeci składnik to 1/4.",
   "tip": "Na egzaminie punkt za wniosek dostaniesz tylko, jeśli go zapiszesz.",
   "check": [
    "F(7, 10) - F(1, 5) - F(1, 4) == F(1, 4)"
   ],
   "pts": 2
  },
  {
   "id": "t12",
   "skills": [
    "U9",
    "U1"
   ],
   "type": "fields",
   "q": "W klasie 2/5 uczniów to chłopcy. Dziewcząt jest 18. Ilu uczniów jest w klasie?",
   "fields": [
    {
     "label": "Liczba uczniów",
     "ans": 30,
     "show": "30"
    }
   ],
   "sol": [
    "Dziewczęta to [[1 − 2/5 = 3/5]] klasy.",
    "3/5 to 18, więc 1/5 to 6, a klasa [[5 · 6 = 30]]."
   ],
   "answer": "30.",
   "tip": "18 to dziewczęta, a nie chłopcy. Najpierw ustal, jaką częścią są.",
   "check": [
    "18 / (1 - F(2, 5)) == 30"
   ],
   "pts": 1
  }
 ],
 "test_minutes": 40,
 "pass": 12,
 "dzial": "Dział 1: Liczby i działania"
};
