/* Wygenerowane przez zbuduj.py z tresc/egzamin-probny-2.py. Nie edytuj ręcznie. */
window.TEMAT = {
 "slug": "egzamin-probny-2",
 "title": "Egzamin próbny nr 2",
 "sign": "2",
 "kind": "exam",
 "lead": "Drugi pełny arkusz w formie egzaminu ósmoklasisty, ułożony na wzór arkusza CKE z 2026 roku: 20 zadań, 30 punktów, 125 minut. Najlepiej rozwiązać go kilka tygodni po pierwszym i porównać wyniki.",
 "start_note": "125 minut, jak na prawdziwym egzaminie. Zarezerwuj czas bez przerw, przygotuj kartkę, długopis i linijkę. Zadania otwarte rozwiązuj na kartce, a po zakończeniu ocenisz je według kryteriów.",
 "rules": [
  "Zadania 1–14 są zamknięte, każde za 1 punkt. W każdym jest dokładnie jedna poprawna odpowiedź.",
  "Zadania 15–20 są otwarte, za 2 albo 3 punkty. Rozwiąż je na kartce i zapisuj obliczenia, tak jak na karcie rozwiązań.",
  "Po zakończeniu zobaczysz rozwiązania i kryteria jak w zasadach oceniania CKE. Punkty za zadania otwarte przyznajesz sobie samodzielnie: uczciwie, tak jak egzaminator.",
  "Kalkulator jest niedozwolony, tak jak na egzaminie. Rysunki nie zawsze są w skali: licz z danych, a nie z linijki.",
  "Wynik pokaże się w punktach i procentach, razem z wynikiem według działów i listą tematów do powtórki."
 ],
 "test": [
  {
   "id": "f1",
   "topics": [
    "procenty",
    "dane"
   ],
   "type": "abcd",
   "chart": {
    "kind": "pie",
    "rows": [
     [
      "wiosna",
      24
     ],
     [
      "lato",
      40
     ],
     [
      "jesień",
      20,
      false
     ],
     [
      "zima",
      16
     ]
    ],
    "alt": "Diagram kołowy: wiosna 24%, lato 40%, jesień nieznane, zima 16%"
   },
   "q": "W ankiecie wzięło udział 250 uczniów. Na diagramie przedstawiono, jaki procent ankietowanych wybrał każdą porę roku jako ulubioną. Liczba uczniów, którzy wybrali jesień, jest równa",
   "opts": [
    "20",
    "60",
    "50",
    "40"
   ],
   "ok": 2,
   "why": {
    "A": "20 to procent (20%), a nie liczba uczniów.",
    "B": "60 to 24% z 250, czyli wiosna.",
    "D": "40 to 16% z 250, czyli zima."
   },
   "sol": [
    "Jesień: [[100% − 24% − 40% − 16% = 20%]].",
    "[[20% z 250 = 50]] uczniów."
   ],
   "answer": "C, 50.",
   "tip": "Brakujący wycinek: 100% minus reszta.",
   "check": [
    "100 - 24 - 40 - 16 == 20",
    "F(20, 100)*250 == 50",
    "F(24, 100)*250 == 60"
   ],
   "pts": 1
  },
  {
   "id": "f2",
   "topics": [
    "podzielnosc"
   ],
   "type": "abcd",
   "q": "Liczba x jest najmniejszą wspólną wielokrotnością liczb 6 i 8, a liczba y jest największym wspólnym dzielnikiem liczb 24 i 36. Suma x + y jest równa",
   "opts": [
    "36",
    "60",
    "30",
    "26"
   ],
   "ok": 0,
   "why": {
    "B": "6 · 8 = 48 to wspólna wielokrotność, ale nie najmniejsza. NWW(6, 8) = 24.",
    "C": "6 dzieli 24 i 36, ale nie jest to największy wspólny dzielnik. NWD(24, 36) = 12.",
    "D": "2 to NWD liczb 6 i 8, a trzeba NWD liczb 24 i 36."
   },
   "sol": [
    "[[NWW(6, 8) = 24]], [[NWD(24, 36) = 12]].",
    "[[24 + 12 = 36]]."
   ],
   "answer": "A, 36.",
   "tip": "NWW: najmniejsza liczba, którą dzielą obie. NWD: największa, która dzieli obie.",
   "check": [
    "math.lcm(6, 8) == 24",
    "math.gcd(24, 36) == 12"
   ],
   "pts": 1
  },
  {
   "id": "f3",
   "topics": [
    "potegi-i-pierwiastki"
   ],
   "type": "abcd",
   "q": "Która z podanych liczb jest równa 5? Wybierz właściwą odpowiedź spośród podanych.",
   "opts": [
    "√9 + √16",
    "√(169 − 25)",
    "√36 − √4",
    "√(9 + 16)"
   ],
   "ok": 3,
   "why": {
    "A": "√9 + √16 = 3 + 4 = 7. Pierwiastek sumy to nie suma pierwiastków.",
    "B": "√(169 − 25) = √144 = 12.",
    "C": "√36 − √4 = 6 − 2 = 4."
   },
   "sol": [
    "[[√(9 + 16) = √25 = 5]]."
   ],
   "answer": "D, √(9 + 16).",
   "tip": "Najpierw działanie pod pierwiastkiem.",
   "check": [
    "9 + 16 == 5**2",
    "3 + 4 == 7",
    "169 - 25 == 12**2"
   ],
   "pts": 1
  },
  {
   "id": "f4",
   "topics": [
    "potegi-i-pierwiastki"
   ],
   "type": "abcd",
   "q": "Wartość wyrażenia (2⁵ · 2³) : 4² jest równa",
   "opts": [
    "2⁶",
    "2⁴",
    "2¹¹",
    "4⁴"
   ],
   "ok": 1,
   "why": {
    "A": "4² = (2²)² = 2⁴, a nie 2².",
    "C": "Przy mnożeniu potęg wykładniki dodajesz: 2⁵ · 2³ = 2⁸, a nie 2¹⁵.",
    "D": "4⁴ = 256, a wartość wyrażenia to 16."
   },
   "sol": [
    "[[2⁵ · 2³ = 2⁸]], [[4² = 2⁴]].",
    "[[2⁸ : 2⁴ = 2⁴]]."
   ],
   "answer": "B, 2⁴.",
   "tip": "Zamień 4 na 2².",
   "check": [
    "(2**5 * 2**3) // 4**2 == 2**4"
   ],
   "pts": 1
  },
  {
   "id": "f5",
   "topics": [
    "procenty",
    "wyrazenia-algebraiczne"
   ],
   "type": "abcd",
   "q": "Bilet do kina kosztuje x zł, a popcorn kosztuje y zł. W środy bilet jest tańszy o 30%, a popcorn o 10%. Które wyrażenie opisuje, ile złotych Ola zapłaci w środę za bilet i popcorn?",
   "opts": [
    "0,3x + 0,1y",
    "0,7x + 0,9y",
    "0,9x + 0,7y",
    "x + y − 0,4"
   ],
   "ok": 1,
   "why": {
    "A": "0,3x i 0,1y to kwoty obniżek, a nie ceny po obniżce.",
    "C": "Zamieniono obniżki: bilet jest tańszy o 30%, więc kosztuje 70% ceny.",
    "D": "Procent liczysz od każdej ceny osobno, a nie odejmujesz liczby 0,4."
   },
   "sol": [
    "Bilet po obniżce o 30%: [[0,7x]]. Popcorn po obniżce o 10%: [[0,9y]].",
    "Razem: [[0,7x + 0,9y]]."
   ],
   "answer": "B, 0,7x + 0,9y.",
   "tip": "Obniżka o p%: płacisz (100 − p)%.",
   "check": [
    "1 - F(30, 100) == F('0.7')"
   ],
   "pts": 1
  },
  {
   "id": "f6",
   "topics": [
    "prawdopodobienstwo"
   ],
   "type": "pair",
   "q": "W pudełku jest 12 kul białych i czarnych. Prawdopodobieństwo wylosowania kuli białej jest równe 1/3. Uzupełnij zdania. Wybierz odpowiedź spośród oznaczonych literami A i B oraz odpowiedź spośród oznaczonych literami C i D.",
   "parts": [
    {
     "label": "Kul czarnych w pudełku jest",
     "opts": {
      "A": "8",
      "B": "4"
     },
     "ok": "A"
    },
    {
     "label": "Po dołożeniu do pudełka 4 kul białych prawdopodobieństwo wylosowania kuli białej będzie równe",
     "opts": {
      "C": "1/2",
      "D": "1/4"
     },
     "ok": "C"
    }
   ],
   "sol": [
    "Białe: [[1/3 · 12 = 4]], czarne: [[12 − 4 = 8]]. 4 to liczba kul białych.",
    "Po dołożeniu: [[8]] białych z [[16]], [[P = 8/16 = 1/2]]."
   ],
   "answer": "A i C.",
   "tip": "Po dołożeniu kul zmienia się też liczba wszystkich kul.",
   "check": [
    "F(1, 3)*12 == 4",
    "F(4 + 4, 12 + 4) == F(1, 2)"
   ],
   "pts": 1
  },
  {
   "id": "f7",
   "topics": [
    "zadania-tekstowe",
    "ulamki"
   ],
   "type": "abcd",
   "q": "Pan Nowak kupił 3,5 kg jabłek po 4,20 zł za kilogram i 2 kg gruszek po 6,50 zł za kilogram. Zapłacił banknotem 50 zł. Ile reszty otrzymał?",
   "opts": [
    "27,70 zł",
    "24,40 zł",
    "35,30 zł",
    "22,30 zł"
   ],
   "ok": 3,
   "why": {
    "A": "27,70 zł to koszt zakupów, a pytanie dotyczy reszty.",
    "B": "Policzono 3 kg jabłek zamiast 3,5 kg.",
    "C": "Odjęto tylko cenę jabłek, bez gruszek."
   },
   "sol": [
    "Jabłka: [[3,5 · 4,20 = 14,70]] zł. Gruszki: [[2 · 6,50 = 13]] zł.",
    "Razem: [[27,70]] zł. Reszta: [[50 − 27,70 = 22,30]] zł."
   ],
   "answer": "D, 22,30 zł.",
   "tip": "3,5 · 4,20 = 3 · 4,20 + 0,5 · 4,20.",
   "check": [
    "F('3.5')*F('4.2') == F('14.7')",
    "50 - F('14.7') - 13 == F('22.3')"
   ],
   "pts": 1
  },
  {
   "id": "f8",
   "topics": [
    "wyrazenia-algebraiczne"
   ],
   "type": "abcd",
   "q": "Wyrażenie 3(2x − 5) − 2(x − 4) po uproszczeniu jest równe",
   "opts": [
    "4x − 7",
    "4x − 23",
    "4x − 11",
    "8x − 7"
   ],
   "ok": 0,
   "why": {
    "B": "−2 · (−4) = +8, a nie −8.",
    "C": "Przez −2 mnożysz oba wyrazy w nawiasie: −2 · (−4) = +8, a nie +4.",
    "D": "−2(x − 4) daje −2x, więc 6x − 2x = 4x, a nie 8x."
   },
   "sol": [
    "[[3(2x − 5) = 6x − 15]], [[−2(x − 4) = −2x + 8]].",
    "[[6x − 15 − 2x + 8 = 4x − 7]]."
   ],
   "answer": "A, 4x − 7.",
   "tip": "Sprawdź dla x = 1: 3 · (−3) − 2 · (−3) = −3 i 4 − 7 = −3.",
   "check": [
    "all(3*(2*x - 5) - 2*(x - 4) == 4*x - 7 for x in range(-3, 4))",
    "all(3*(2*x - 5) - 2*x + 4 == 4*x - 11 for x in range(-3, 4))"
   ],
   "pts": 1
  },
  {
   "id": "f9",
   "topics": [
    "dane"
   ],
   "type": "abcd",
   "q": "Średnia arytmetyczna liczb 7, 9, x, 12 jest równa 10. Liczba x jest równa",
   "opts": [
    "10",
    "28",
    "12",
    "40"
   ],
   "ok": 2,
   "why": {
    "A": "Liczba x nie musi być równa średniej.",
    "B": "28 to suma liczb 7, 9 i 12, a nie x.",
    "D": "40 to suma wszystkich czterech liczb, a nie x."
   },
   "sol": [
    "Suma czterech liczb: [[4 · 10 = 40]].",
    "[[x = 40 − (7 + 9 + 12) = 12]]."
   ],
   "answer": "C, 12.",
   "tip": "Suma = średnia · liczba danych.",
   "check": [
    "4*10 - (7 + 9 + 12) == 12"
   ],
   "pts": 1
  },
  {
   "id": "f10",
   "topics": [
    "pitagoras"
   ],
   "type": "pf",
   "q": "Dany jest trójkąt równoboczny o boku długości 6 cm. Oceń prawdziwość podanych zdań. Wybierz P, jeśli zdanie jest prawdziwe, albo F, jeśli jest fałszywe.",
   "items": [
    {
     "t": "Wysokość tego trójkąta ma długość 3√3 cm.",
     "ok": "P"
    },
    {
     "t": "Pole tego trójkąta jest równe 18√3 cm².",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> Wysokość dzieli podstawę na połowy: [[h² = 6² − 3² = 27]], [[h = √27 = 3√3]] cm. Prawda.",
    "<b>Zdanie 2.</b> [[P = 6 · 3√3 : 2 = 9√3]] cm². Fałsz: 18√3 to pole bez dzielenia przez 2."
   ],
   "answer": "P, F.",
   "tip": "Wysokość trójkąta równobocznego: a√3/2.",
   "check": [
    "6**2 - 3**2 == 27 == 9*3"
   ],
   "pts": 1
  },
  {
   "id": "f11",
   "topics": [
    "katy-i-trojkaty"
   ],
   "type": "abcd",
   "q": "W trójkącie równoramiennym kąt między ramionami jest o 30° większy od kąta przy podstawie. Kąt przy podstawie tego trójkąta ma miarę",
   "opts": [
    "75°",
    "80°",
    "50°",
    "60°"
   ],
   "ok": 2,
   "why": {
    "A": "Kąty przy podstawie są dwa, a kąt między ramionami to x + 30°: x + x + (x + 30°) = 180°.",
    "B": "80° to kąt między ramionami, a pytanie dotyczy kąta przy podstawie.",
    "D": "60° mają kąty trójkąta równobocznego, a tu kąty nie są równe."
   },
   "sol": [
    "Kąt przy podstawie: [[x]], między ramionami: [[x + 30°]].",
    "[[x + x + x + 30° = 180°]], [[3x = 150°]], [[x = 50°]]. Sprawdzenie: 50° + 50° + 80° = 180°."
   ],
   "answer": "C, 50°.",
   "tip": "Zapisz wszystkie kąty przez jedną niewiadomą.",
   "check": [
    "50 + 50 + 80 == 180"
   ],
   "pts": 1
  },
  {
   "id": "f12",
   "topics": [
    "zadania-tekstowe"
   ],
   "type": "abcd",
   "q": "Film rozpoczął się o godzinie 18:45 i trwał 2 godziny 35 minut. O której godzinie się skończył?",
   "opts": [
    "21:20",
    "20:20",
    "21:30",
    "22:20"
   ],
   "ok": 0,
   "why": {
    "B": "Dodano tylko 1 godzinę i 35 minut.",
    "C": "45 + 35 = 80 minut, czyli 1 godzina i 20 minut, a nie 30 minut.",
    "D": "Za dużo o godzinę: 18 + 2 + 1 = 21, a nie 22."
   },
   "sol": [
    "[[45 min + 35 min = 80 min = 1 h 20 min]].",
    "[[18 h + 2 h + 1 h 20 min = 21:20]]."
   ],
   "answer": "A, 21:20.",
   "tip": "Minuty powyżej 60 zamień na godzinę.",
   "check": [
    "18*60 + 45 + 2*60 + 35 == 21*60 + 20"
   ],
   "pts": 1
  },
  {
   "id": "f13",
   "topics": [
    "pitagoras",
    "pola-i-okrag"
   ],
   "type": "abcd",
   "vis": {
    "type": "shape",
    "pts": {
     "A": [
      -12,
      0
     ],
     "B": [
      0,
      -5
     ],
     "C": [
      12,
      0
     ],
     "D": [
      0,
      5
     ],
     "O": [
      0,
      0
     ]
    },
    "polys": [
     [
      "A",
      "B",
      "C",
      "D"
     ]
    ],
    "segs": [
     [
      "A",
      "C"
     ],
     [
      "B",
      "D"
     ]
    ],
    "names": {
     "O": ""
    },
    "angles": [
     {
      "at": "O",
      "from": "C",
      "to": "D",
      "right": true
     }
    ],
    "alt": "Romb ABCD z przekątnymi AC i BD przecinającymi się pod kątem prostym."
   },
   "q": "Przekątne rombu mają długości 10 cm i 24 cm (zobacz rysunek). Obwód tego rombu jest równy",
   "opts": [
    "120 cm",
    "68 cm",
    "34 cm",
    "52 cm"
   ],
   "ok": 3,
   "why": {
    "A": "120 to pole rombu (w cm²), a nie obwód.",
    "B": "68 = 2 · (10 + 24): przekątne to nie boki rombu.",
    "C": "34 to suma przekątnych, a nie obwód."
   },
   "sol": [
    "Przekątne rombu przecinają się pod kątem prostym i dzielą na połowy: [[5 cm]] i [[12 cm]].",
    "Bok: [[√(5² + 12²) = √169 = 13]] cm. Obwód: [[4 · 13 = 52]] cm."
   ],
   "answer": "D, 52 cm.",
   "tip": "Połówki przekątnych to przyprostokątne.",
   "check": [
    "5**2 + 12**2 == 13**2",
    "4*13 == 52"
   ],
   "pts": 1
  },
  {
   "id": "f14",
   "topics": [
    "bryly"
   ],
   "type": "abcd",
   "vis": {
    "type": "solid",
    "names": {
     "A": "",
     "B": "",
     "C": "",
     "D": "",
     "E": "",
     "F": "",
     "G": "",
     "H": ""
    },
    "pts3": {
     "A": [
      0,
      0,
      0
     ],
     "B": [
      5,
      0,
      0
     ],
     "C": [
      5,
      5,
      0
     ],
     "D": [
      0,
      5,
      0
     ],
     "E": [
      0,
      0,
      8
     ],
     "F": [
      5,
      0,
      8
     ],
     "G": [
      5,
      5,
      8
     ],
     "H": [
      0,
      5,
      8
     ]
    },
    "polys": [
     [
      "A",
      "B",
      "F",
      "E"
     ],
     [
      "B",
      "C",
      "G",
      "F"
     ],
     [
      "E",
      "F",
      "G",
      "H"
     ]
    ],
    "segs": [
     [
      "A",
      "D"
     ],
     [
      "D",
      "C"
     ],
     [
      "D",
      "H"
     ]
    ],
    "sides": [
     [
      "A",
      "B",
      "5 cm"
     ],
     [
      "B",
      "F",
      "8 cm",
      1
     ]
    ],
    "alt": "Graniastosłup prawidłowy czworokątny: krawędź podstawy 5 cm, wysokość 8 cm."
   },
   "q": "Graniastosłup prawidłowy czworokątny ma krawędź podstawy długości 5 cm i wysokość 8 cm (zobacz rysunek). Pole powierzchni całkowitej tego graniastosłupa jest równe",
   "opts": [
    "185 cm²",
    "210 cm²",
    "200 cm²",
    "160 cm²"
   ],
   "ok": 1,
   "why": {
    "A": "Graniastosłup ma dwie podstawy, a nie jedną.",
    "C": "200 cm³ to objętość, a nie pole powierzchni.",
    "D": "160 cm² to tylko pole powierzchni bocznej."
   },
   "sol": [
    "Podstawy: [[2 · 5² = 50]] cm². Ściany boczne: [[4 · 5 · 8 = 160]] cm².",
    "Razem: [[210]] cm²."
   ],
   "answer": "B, 210 cm².",
   "tip": "Dwie podstawy i cztery ściany boczne.",
   "check": [
    "2*5**2 + 4*5*8 == 210",
    "5*5*8 == 200"
   ],
   "pts": 1
  },
  {
   "id": "f15",
   "topics": [
    "rownania"
   ],
   "type": "self",
   "q": "W trzech klasach ósmych jest razem 76 uczniów. W klasie 8b jest o 3 uczniów więcej niż w klasie 8a, a w klasie 8c o 2 uczniów mniej niż w klasie 8a. Ilu uczniów jest w klasie 8b? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Zapisano poprawne równanie, np. x + (x + 3) + (x − 2) = 76, gdzie x to liczba uczniów klasy 8a.",
     "pts": 1
    },
    {
     "t": "Rozwiązano równanie i podano liczbę uczniów klasy 8b: 28.",
     "pts": 1
    }
   ],
   "sol": [
    "8a: [[x]], 8b: [[x + 3]], 8c: [[x − 2]].",
    "[[3x + 1 = 76]], [[x = 25]].",
    "8b: [[25 + 3 = 28]]. Sprawdzenie: [[25 + 28 + 23 = 76]]."
   ],
   "answer": "W klasie 8b jest 28 uczniów.",
   "tip": "Zapisz, co oznacza x, i na końcu odpowiedz na pytanie z treści.",
   "check": [
    "25 + 28 + 23 == 76"
   ],
   "pts": 2
  },
  {
   "id": "f16",
   "topics": [
    "zadania-tekstowe"
   ],
   "type": "self",
   "q": "Pani Anna przejechała rowerem 18 km w ciągu 45 minut. Czy jadąc dalej z tą samą średnią prędkością, przejedzie następne 40 km w czasie krótszym niż półtorej godziny? Zapisz obliczenia i odpowiedź.",
   "criteria": [
    {
     "t": "Obliczono prędkość: 18 km w 45 min, czyli 24 km/h (albo 0,4 km/min).",
     "pts": 1
    },
    {
     "t": "Obliczono drogę przejechaną w 1,5 h (36 km) albo czas potrzebny na 40 km (1 h 40 min, czyli 100 min).",
     "pts": 1
    },
    {
     "t": "Zapisano poprawny wniosek: nie, bo 36 km < 40 km (albo 100 min > 90 min).",
     "pts": 1
    }
   ],
   "sol": [
    "[[45 min = 0,75 h]], prędkość: [[18 : 0,75 = 24]] km/h.",
    "W półtorej godziny: [[24 · 1,5 = 36]] km.",
    "36 km to mniej niż 40 km, więc [[nie zdąży]]. (Albo: 40 km zajmie [[40 : 24 h = 1 h 40 min]], a to więcej niż 1 h 30 min.)"
   ],
   "answer": "Nie. W półtorej godziny przejedzie 36 km, a to mniej niż 40 km.",
   "tip": "Na końcu odpowiedz wprost na pytanie z treści: tak albo nie i dlaczego.",
   "check": [
    "18/F('0.75') == 24",
    "24*F('1.5') == 36",
    "F(40, 24)*60 == 100"
   ],
   "pts": 3
  },
  {
   "id": "f17",
   "topics": [
    "procenty",
    "dane"
   ],
   "type": "self",
   "data": {
    "head": [
     "konkurencja",
     "chłopcy",
     "dziewczęta"
    ],
    "rows": [
     [
      "bieg",
      30,
      25
     ],
     [
      "skok w dal",
      20,
      "?"
     ],
     [
      "pływanie",
      30,
      20
     ]
    ]
   },
   "q": "W szkolnych zawodach wzięło udział 150 uczniów. Każdy startował w jednej konkurencji. Dziewcząt było o 10 mniej niż chłopców. W tabeli podano, ilu chłopców i ile dziewcząt startowało w każdej konkurencji, ale jedna liczba jest zakryta. Jaki procent wszystkich uczestników zawodów stanowili uczestnicy skoku w dal? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono liczbę wszystkich chłopców (80) albo wszystkich dziewcząt (70).",
     "pts": 1
    },
    {
     "t": "Obliczono, ile dziewcząt skakało w dal (25), a więc łącznie 45 uczestników skoku w dal.",
     "pts": 1
    },
    {
     "t": "Obliczono procent: 45 : 150 = 30%.",
     "pts": 1
    }
   ],
   "sol": [
    "Chłopcy: [[30 + 20 + 30 = 80]]. Dziewczęta: [[80 − 10 = 70]] (sprawdzenie: 80 + 70 = 150).",
    "Dziewczęta w skoku w dal: [[70 − 25 − 20 = 25]]. Skok w dal razem: [[20 + 25 = 45]].",
    "[[45 : 150 = 0,3 = 30%]]."
   ],
   "answer": "30%.",
   "tip": "Takie zadanie z tabelą i procentem było na egzaminie w 2026 roku.",
   "check": [
    "30 + 20 + 30 == 80",
    "80 + 70 == 150",
    "70 - 25 - 20 == 25",
    "F(45, 150) == F(3, 10)"
   ],
   "pts": 3
  },
  {
   "id": "f18",
   "topics": [
    "bryly",
    "wyrazenia-algebraiczne"
   ],
   "type": "self",
   "q": "Graniastosłup prawidłowy czworokątny ma krawędź podstawy a i wysokość 3a. Ostrosłup prawidłowy czworokątny ma taką samą podstawę i wysokość a. Ile razy objętość graniastosłupa jest większa od objętości ostrosłupa? Uzasadnij odpowiedź, zapisując objętości obu brył za pomocą a.",
   "criteria": [
    {
     "t": "Zapisano objętości obu brył za pomocą a: graniastosłup a² · 3a = 3a³, ostrosłup a² · a : 3 = a³/3.",
     "pts": 1
    },
    {
     "t": "Podano odpowiedź z uzasadnieniem: 3a³ : (a³/3) = 9, czyli 9 razy.",
     "pts": 1
    }
   ],
   "sol": [
    "Graniastosłup: [[V = a² · 3a = 3a³]].",
    "Ostrosłup: [[V = a² · a : 3 = a³/3]].",
    "[[3a³ : (a³/3) = 9]]. Objętość graniastosłupa jest 9 razy większa."
   ],
   "answer": "9 razy.",
   "tip": "Uwaga, jak na egzaminie: obliczenia tylko na jednym przykładzie (np. a = 1) to za mało, trzeba liczyć na literze a.",
   "check": [
    "all(F(3*a**3) / (F(a**3, 3)) == 9 for a in range(1, 5))"
   ],
   "pts": 2
  },
  {
   "id": "f19",
   "topics": [
    "pola-i-okrag",
    "zadania-tekstowe"
   ],
   "type": "self",
   "vis": {
    "type": "shape",
    "pts": {
     "A": [
      0,
      0
     ],
     "B": [
      16,
      0
     ],
     "C": [
      10,
      8
     ],
     "D": [
      0,
      8
     ]
    },
    "polys": [
     [
      "A",
      "B",
      "C",
      "D"
     ]
    ],
    "shade": [
     0
    ],
    "angles": [
     {
      "at": "A",
      "from": "B",
      "to": "D",
      "right": true
     },
     {
      "at": "D",
      "from": "A",
      "to": "C",
      "right": true
     }
    ],
    "sides": [
     [
      "A",
      "B",
      "16 m"
     ],
     [
      "D",
      "C",
      "10 m"
     ],
     [
      "A",
      "D",
      "8 m"
     ]
    ],
    "alt": "Trawnik w kształcie trapezu prostokątnego: podstawy 16 m i 10 m, ramię prostopadłe do podstaw 8 m."
   },
   "q": "Trawnik ma kształt trapezu prostokątnego o podstawach 16 m i 10 m. Ramię prostopadłe do podstaw ma długość 8 m (zobacz rysunek). Jedno opakowanie nasion trawy wystarcza na obsianie 30 m² i kosztuje 18,90 zł. Ile trzeba zapłacić za najmniejszą liczbę opakowań potrzebnych do obsiania całego trawnika? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono pole trawnika: (16 + 10) · 8 : 2 = 104 m².",
     "pts": 1
    },
    {
     "t": "Ustalono, że potrzeba 4 opakowań (3 opakowania wystarczą tylko na 90 m²).",
     "pts": 1
    },
    {
     "t": "Obliczono koszt: 4 · 18,90 = 75,60 zł.",
     "pts": 1
    }
   ],
   "sol": [
    "Pole: [[(16 + 10) · 8 : 2 = 104]] m².",
    "[[104 : 30 ≈ 3,47]], więc 3 opakowania nie wystarczą (90 m²). Potrzeba [[4]] opakowań.",
    "Koszt: [[4 · 18,90 = 75,60]] zł."
   ],
   "answer": "75,60 zł.",
   "tip": "Liczbę opakowań zawsze zaokrąglasz w górę.",
   "check": [
    "(16 + 10)*8/2 == 104",
    "3*30 < 104 <= 4*30",
    "4*F('18.9') == F('75.6')"
   ],
   "pts": 3
  },
  {
   "id": "f20",
   "topics": [
    "pitagoras"
   ],
   "type": "self",
   "vis": {
    "type": "shape",
    "pts": {
     "A": [
      0,
      0
     ],
     "B": [
      10,
      0
     ],
     "C": [
      10,
      5
     ],
     "D": [
      0,
      5
     ],
     "E": [
      5,
      5
     ]
    },
    "polys": [
     [
      "A",
      "B",
      "C",
      "D"
     ],
     [
      "A",
      "B",
      "E"
     ]
    ],
    "shade": [
     1
    ],
    "sides": [
     [
      "A",
      "B",
      "10 cm"
     ],
     [
      "B",
      "C",
      "5 cm"
     ]
    ],
    "alt": "Prostokąt ABCD 10 cm na 5 cm. Punkt E jest środkiem boku CD. Trójkąt ABE jest zamalowany."
   },
   "q": "Prostokąt ABCD ma boki |AB| = 10 cm i |BC| = 5 cm. Punkt E jest środkiem boku CD (zobacz rysunek). Oblicz obwód trójkąta ABE. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Zapisano twierdzenie Pitagorasa dla trójkąta ADE albo BCE: |AE|² = 5² + 5².",
     "pts": 1
    },
    {
     "t": "Obliczono |AE| = |BE| = √50 = 5√2 cm.",
     "pts": 1
    },
    {
     "t": "Obliczono obwód: 10 + 10√2 cm.",
     "pts": 1
    }
   ],
   "sol": [
    "|DE| = 5 cm, bo E jest środkiem boku CD długości 10 cm. Trójkąt ADE jest prostokątny: [[|AE|² = 5² + 5² = 50]].",
    "[[|AE| = √50 = 5√2]] cm. Tak samo [[|BE| = 5√2]] cm.",
    "Obwód: [[10 + 5√2 + 5√2 = 10 + 10√2]] cm."
   ],
   "answer": "10 + 10√2 cm.",
   "tip": "√50 = √(25 · 2) = 5√2. Wynik zostaw z pierwiastkiem, nie musisz go przybliżać.",
   "check": [
    "5**2 + 5**2 == 50 == 25*2"
   ],
   "pts": 3
  }
 ],
 "test_minutes": 125,
 "max": 30,
 "dzial": "Na koniec: Egzaminy próbne"
};
