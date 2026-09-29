/* Wygenerowane przez zbuduj.py z tresc/egzamin-probny-1.py. Nie edytuj ręcznie. */
window.TEMAT = {
 "slug": "egzamin-probny-1",
 "title": "Egzamin próbny nr 1",
 "sign": "1",
 "kind": "exam",
 "lead": "Pełny arkusz w formie egzaminu ósmoklasisty, ułożony na wzór arkusza CKE z 2025 roku: 21 zadań, 30 punktów, 125 minut. Wynik pokaże, z których tematów tracisz punkty.",
 "start_note": "125 minut, jak na prawdziwym egzaminie. Zarezerwuj czas bez przerw, przygotuj kartkę, długopis i linijkę. Zadania otwarte rozwiązuj na kartce, a po zakończeniu ocenisz je według kryteriów.",
 "rules": [
  "Zadania 1–15 są zamknięte, każde za 1 punkt. W każdym jest dokładnie jedna poprawna odpowiedź.",
  "Zadania 16–21 są otwarte, za 2 albo 3 punkty. Rozwiąż je na kartce i zapisuj obliczenia, tak jak na karcie rozwiązań.",
  "Po zakończeniu zobaczysz rozwiązania i kryteria jak w zasadach oceniania CKE. Punkty za zadania otwarte przyznajesz sobie sam: uczciwie, tak jak egzaminator.",
  "Kalkulator jest niedozwolony, tak jak na egzaminie. Rysunki nie zawsze są w skali: licz z danych, a nie z linijki.",
  "Wynik pokaże się w punktach i procentach, razem z wynikiem według działów i listą tematów do powtórki."
 ],
 "test": [
  {
   "id": "e1",
   "topics": [
    "procenty",
    "dane"
   ],
   "type": "pair",
   "chart": {
    "kind": "cols",
    "min": 0,
    "max": 140,
    "step": 20,
    "ylabel": "zł",
    "rows": [
     [
      "marzec",
      60
     ],
     [
      "kwiecień",
      80
     ],
     [
      "maj",
      100
     ],
     [
      "czerwiec",
      120
     ]
    ],
    "alt": "Diagram słupkowy: marzec 60 zł, kwiecień 80 zł, maj 100 zł, czerwiec 120 zł"
   },
   "q": "Kuba zbiera na hulajnogę, która kosztuje 400 zł. Na diagramie przedstawiono kwoty, które odłożył w kolejnych miesiącach. Uzupełnij zdania. Wybierz odpowiedź spośród oznaczonych literami A i B oraz odpowiedź spośród oznaczonych literami C i D.",
   "parts": [
    {
     "label": "W marcu i w kwietniu łącznie Kuba odłożył taką część ceny hulajnogi:",
     "opts": {
      "A": "35%",
      "B": "40%"
     },
     "ok": "A"
    },
    {
     "label": "W czerwcu Kuba odłożył kwotę większą od kwoty odłożonej w kwietniu o",
     "opts": {
      "C": "40%",
      "D": "50%"
     },
     "ok": "D"
    }
   ],
   "sol": [
    "Marzec i kwiecień: [[60 + 80 = 140]] zł, [[140 : 400 = 0,35 = 35%]].",
    "Czerwiec i kwiecień: różnica [[120 − 80 = 40]] zł. Porównujemy z kwietniem: [[40 : 80 = 0,5 = 50%]]. 40% to różnica w złotych pomylona z procentem."
   ],
   "answer": "A i D.",
   "tip": "Procent liczysz od tego, z czym porównujesz.",
   "check": [
    "F(60 + 80, 400) == F(35, 100)",
    "F(120 - 80, 80) == F(1, 2)"
   ],
   "pts": 1
  },
  {
   "id": "e2",
   "topics": [
    "ulamki",
    "liczby-i-dzialania"
   ],
   "type": "abcd",
   "q": "Wartość wyrażenia (1,5 − 3⅔) · (−3) jest równa",
   "opts": [
    "−6½",
    "−2⅙",
    "6½",
    "4½"
   ],
   "ok": 2,
   "why": {
    "A": "Iloczyn dwóch liczb ujemnych jest dodatni: (−2⅙) · (−3) > 0.",
    "B": "−2⅙ to tylko wartość nawiasu. Trzeba ją jeszcze pomnożyć przez −3.",
    "D": "Nie pomijaj 2/3: 3⅔ to więcej niż 3."
   },
   "sol": [
    "[[1,5 − 3⅔ = 3/2 − 11/3 = 9/6 − 22/6 = −13/6]].",
    "[[(−13/6) · (−3) = 13/2 = 6½]]."
   ],
   "answer": "C, 6½.",
   "tip": "Ułamek dziesiętny zamień na zwykły.",
   "check": [
    "F(3, 2) - F(11, 3) == F(-13, 6)",
    "F(-13, 6)*(-3) == F(13, 2)",
    "(F(3, 2) - 3)*(-3) == F(9, 2)"
   ],
   "pts": 1
  },
  {
   "id": "e3",
   "topics": [
    "podzielnosc"
   ],
   "type": "abcd",
   "q": "Która z podanych liczb przy dzieleniu przez 8 daje resztę 3? Wybierz właściwą odpowiedź spośród podanych.",
   "opts": [
    "43",
    "46",
    "50",
    "53"
   ],
   "ok": 0,
   "why": {
    "B": "46 = 5 · 8 + 6, reszta to 6.",
    "C": "50 = 6 · 8 + 2, reszta to 2.",
    "D": "53 = 6 · 8 + 5, reszta to 5."
   },
   "sol": [
    "[[43 = 5 · 8 + 3]]: reszta 3."
   ],
   "answer": "A, 43.",
   "tip": "Odejmij największą wielokrotność 8.",
   "check": [
    "43 % 8 == 3",
    "46 % 8 != 3",
    "50 % 8 != 3",
    "53 % 8 != 3"
   ],
   "pts": 1
  },
  {
   "id": "e4",
   "topics": [
    "dane"
   ],
   "type": "pair",
   "q": "Średnia arytmetyczna pięciu liczb jest równa 12, a średnia arytmetyczna trzech innych liczb jest równa 4. Uzupełnij zdania. Wybierz odpowiedź spośród oznaczonych literami A i B oraz odpowiedź spośród oznaczonych literami C i D.",
   "parts": [
    {
     "label": "Suma pięciu liczb jest większa od sumy trzech liczb o",
     "opts": {
      "A": "48",
      "B": "8"
     },
     "ok": "A"
    },
    {
     "label": "Średnia arytmetyczna wszystkich ośmiu liczb jest równa",
     "opts": {
      "C": "9",
      "D": "8"
     },
     "ok": "C"
    }
   ],
   "sol": [
    "Sumy: [[5 · 12 = 60]] i [[3 · 4 = 12]], różnica [[48]]. 8 to różnica średnich.",
    "Wszystkie liczby: [[(60 + 12) : 8 = 9]]. 8 to średnia ze średnich (12 + 4) : 2."
   ],
   "answer": "A i C.",
   "tip": "Suma = średnia · liczba danych.",
   "check": [
    "5*12 - 3*4 == 48",
    "(60 + 12)/8 == 9"
   ],
   "pts": 1
  },
  {
   "id": "e5",
   "topics": [
    "rownania"
   ],
   "type": "abcd",
   "q": "Pole trapezu wyraża się wzorem P = (a + b) · h : 2. Wielkość b wyznaczona poprawnie z tego wzoru to",
   "opts": [
    "b = 2P − a : h",
    "b = P : (2h) − a",
    "b = 2P · h − a",
    "b = 2P : h − a"
   ],
   "ok": 3,
   "why": {
    "A": "Po pomnożeniu przez 2 dzielisz przez h całą lewą stronę: a + b = 2P : h.",
    "B": "Obie strony mnożysz przez 2, a nie dzielisz: 2P = (a + b) · h.",
    "C": "Przez h trzeba podzielić, a nie pomnożyć."
   },
   "sol": [
    "[[2P = (a + b) · h]].",
    "[[a + b = 2P : h]], [[b = 2P : h − a]]."
   ],
   "answer": "D, b = 2P : h − a.",
   "tip": "Sprawdź na liczbach: a = 3, b = 5, h = 4 daje P = 16, a 2 · 16 : 4 − 3 = 5.",
   "check": [
    "2*16/4 - 3 == 5",
    "(3 + 5)*4/2 == 16"
   ],
   "pts": 1
  },
  {
   "id": "e6",
   "topics": [
    "wyrazenia-algebraiczne"
   ],
   "type": "abcd",
   "q": "Na półce stoją tylko książki, komiksy i albumy. Komiksów jest 3 razy więcej niż albumów i o 5 mniej niż książek. Liczbę albumów oznaczamy przez x. Łączną liczbę wszystkich pozycji na półce opisuje wyrażenie",
   "opts": [
    "7x − 5",
    "7x + 5",
    "5x + 5",
    "4x + 5"
   ],
   "ok": 1,
   "why": {
    "A": "Komiksów jest o 5 mniej niż książek, więc książek jest o 5 więcej niż komiksów: 3x + 5.",
    "C": "Książek jest 3x + 5, a nie x + 5.",
    "D": "Pominąłeś komiksy (3x)."
   },
   "sol": [
    "Albumy: [[x]], komiksy: [[3x]], książki: [[3x + 5]].",
    "Razem: [[x + 3x + 3x + 5 = 7x + 5]]."
   ],
   "answer": "B, 7x + 5.",
   "tip": "Sprawdź dla x = 2: 2 + 6 + 11 = 19 = 7 · 2 + 5.",
   "check": [
    "all(x + 3*x + (3*x + 5) == 7*x + 5 for x in range(1, 6))"
   ],
   "pts": 1
  },
  {
   "id": "e7",
   "topics": [
    "potegi-i-pierwiastki"
   ],
   "type": "pf",
   "q": "Dane są liczby K = √(1/4) − √(1/9) oraz L = √49 − √64. Oceń prawdziwość podanych zdań. Wybierz P, jeśli zdanie jest prawdziwe, albo F, jeśli jest fałszywe.",
   "items": [
    {
     "t": "Liczba K jest dodatnia.",
     "ok": "P"
    },
    {
     "t": "Liczba L jest większa od liczby K.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[K = 1/2 − 1/3 = 1/6]], czyli liczba dodatnia. Prawda.",
    "<b>Zdanie 2.</b> [[L = 7 − 8 = −1]], a −1 < 1/6. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "√(1/4) = 1/2, bo (1/2)² = 1/4.",
   "check": [
    "F(1, 2) - F(1, 3) == F(1, 6)",
    "7 - 8 == -1"
   ],
   "pts": 1
  },
  {
   "id": "e8",
   "topics": [
    "potegi-i-pierwiastki"
   ],
   "type": "abcd",
   "q": "Wartość wyrażenia 9⁴ · 3⁵ zapisana w postaci potęgi liczby 3 jest równa",
   "opts": [
    "3²⁰",
    "3¹³",
    "3⁹",
    "27⁹"
   ],
   "ok": 1,
   "why": {
    "A": "Przy mnożeniu potęg o tej samej podstawie wykładniki dodajesz, a nie mnożysz.",
    "C": "9⁴ to nie 3⁴: 9⁴ = (3²)⁴ = 3⁸.",
    "D": "Podstaw się nie mnoży, a wykładniki dotyczą różnych podstaw."
   },
   "sol": [
    "[[9⁴ = (3²)⁴ = 3⁸]].",
    "[[3⁸ · 3⁵ = 3¹³]]."
   ],
   "answer": "B, 3¹³.",
   "tip": "Najpierw ta sama podstawa.",
   "check": [
    "9**4 * 3**5 == 3**13"
   ],
   "pts": 1
  },
  {
   "id": "e9",
   "topics": [
    "zadania-tekstowe"
   ],
   "type": "abcd",
   "q": "Pociąg jechał przez 2 godziny i 15 minut ze średnią prędkością 80 km/h. Jaką drogę pokonał w tym czasie?",
   "opts": [
    "172 km",
    "160 km",
    "200 km",
    "180 km"
   ],
   "ok": 3,
   "why": {
    "A": "15 minut to 0,25 h, a nie 0,15 h.",
    "B": "Pominąłeś 15 minut jazdy.",
    "C": "2 h 15 min to 2,25 h, a nie 2,5 h."
   },
   "sol": [
    "[[2 h 15 min = 2,25 h]].",
    "[[s = 80 · 2,25 = 180]] km."
   ],
   "answer": "D, 180 km.",
   "tip": "Kwadrans to ćwierć godziny: w 15 min pociąg jedzie 20 km.",
   "check": [
    "80*F('2.25') == 180"
   ],
   "pts": 1
  },
  {
   "id": "e10",
   "topics": [
    "prawdopodobienstwo"
   ],
   "type": "abcd",
   "q": "Losujemy jedną liczbę spośród wszystkich liczb dwucyfrowych. Prawdopodobieństwo, że wylosujemy liczbę większą od 75, jest równe",
   "opts": [
    "4/15",
    "23/90",
    "24/99",
    "25/90"
   ],
   "ok": 0,
   "why": {
    "B": "Od 76 do 99 jest 99 − 76 + 1 = 24 liczb, a nie 23.",
    "C": "Liczb dwucyfrowych jest 90, a nie 99.",
    "D": "Liczba 75 nie jest większa od 75."
   },
   "sol": [
    "Wszystkich liczb dwucyfrowych: [[90]]. Większe od 75: od 76 do 99, czyli [[24]].",
    "[[P = 24/90 = 4/15]]."
   ],
   "answer": "A, 4/15.",
   "tip": "b − a + 1.",
   "check": [
    "99 - 76 + 1 == 24",
    "F(24, 90) == F(4, 15)"
   ],
   "pts": 1
  },
  {
   "id": "e11",
   "topics": [
    "pitagoras",
    "pola-i-okrag"
   ],
   "type": "pf",
   "vis": {
    "type": "shape",
    "pts": {
     "C": [
      0,
      0
     ],
     "B": [
      16,
      0
     ],
     "A": [
      0,
      12
     ],
     "D": [
      8,
      6
     ]
    },
    "polys": [
     [
      "A",
      "B",
      "C"
     ]
    ],
    "segs": [
     [
      "C",
      "D"
     ]
    ],
    "angles": [
     {
      "at": "C",
      "from": "B",
      "to": "A",
      "right": true
     }
    ],
    "sides": [
     [
      "A",
      "C",
      "12 cm",
      1
     ],
     [
      "C",
      "B",
      "16 cm",
      1
     ]
    ],
    "alt": "Trójkąt prostokątny ABC z kątem prostym przy C, AC = 12 cm, BC = 16 cm. Punkt D to środek AB, odcinek CD."
   },
   "q": "Trójkąt ABC jest prostokątny, kąt prosty jest przy wierzchołku C. |AC| = 12 cm, |BC| = 16 cm. Punkt D jest środkiem boku AB (zobacz rysunek). Oceń prawdziwość podanych zdań. Wybierz P, jeśli zdanie jest prawdziwe, albo F, jeśli jest fałszywe.",
   "items": [
    {
     "t": "Bok AB ma długość 20 cm.",
     "ok": "P"
    },
    {
     "t": "Pole trójkąta ADC jest równe 96 cm².",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[|AB|² = 12² + 16² = 144 + 256 = 400]], [[|AB| = 20]] cm. Prawda.",
    "<b>Zdanie 2.</b> Pole trójkąta ABC: [[12 · 16 : 2 = 96]] cm². Trójkąty ADC i DBC mają równe podstawy AD i DB oraz tę samą wysokość z wierzchołka C, więc każdy ma połowę pola: [[48]] cm². Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Odcinek z wierzchołka do środka boku dzieli trójkąt na dwie części o równych polach.",
   "check": [
    "12**2 + 16**2 == 20**2",
    "12*16/2/2 == 48"
   ],
   "pts": 1
  },
  {
   "id": "e12",
   "topics": [
    "liczby-i-dzialania"
   ],
   "type": "pf",
   "chart": {
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
    "alt": "Oś liczbowa: odcinek AC od −4 do 14 podzielony na 6 części, punkt B na czwartej kresce"
   },
   "q": "Na osi liczbowej zaznaczono punkty A, B i C. Odcinek AC podzielono na 6 równych części. Oceń prawdziwość podanych zdań. Wybierz P, jeśli zdanie jest prawdziwe, albo F, jeśli jest fałszywe.",
   "items": [
    {
     "t": "Współrzędna punktu B jest liczbą parzystą.",
     "ok": "P"
    },
    {
     "t": "Odległość między punktami A i B jest równa 10.",
     "ok": "F"
    }
   ],
   "sol": [
    "Długość AC: [[14 − (−4) = 18]], jedna część: [[18 : 6 = 3]].",
    "<b>Zdanie 1.</b> B: [[−4 + 4 · 3 = 8]], liczba parzysta. Prawda.",
    "<b>Zdanie 2.</b> [[8 − (−4) = 12]]. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Najpierw długość jednej części.",
   "check": [
    "(14 + 4)/6 == 3",
    "-4 + 4*3 == 8"
   ],
   "pts": 1
  },
  {
   "id": "e13",
   "topics": [
    "pola-i-okrag",
    "pitagoras"
   ],
   "type": "abcd",
   "vis": {
    "type": "shape",
    "pts": {
     "A": [
      0,
      0
     ],
     "B": [
      8,
      0
     ],
     "E": [
      14,
      0
     ],
     "C": [
      8,
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
     ],
     [
      "B",
      "E",
      "C"
     ]
    ],
    "angles": [
     {
      "at": "B",
      "from": "E",
      "to": "C",
      "right": true
     }
    ],
    "sides": [
     [
      "A",
      "B",
      "8"
     ],
     [
      "B",
      "E",
      "6"
     ],
     [
      "D",
      "A",
      "8"
     ]
    ],
    "alt": "Kwadrat ABCD o boku 8 i dostawiony do boku BC trójkąt prostokątny BEC z przyprostokątną BE = 6."
   },
   "q": "Figurę AECD ułożono z kwadratu ABCD o boku 8 i trójkąta prostokątnego BEC o przyprostokątnych |BE| = 6 i |BC| = 8 (zobacz rysunek). Obwód figury AECD jest równy",
   "opts": [
    "48",
    "56",
    "40",
    "30"
   ],
   "ok": 2,
   "why": {
    "A": "Bok BC leży wewnątrz figury, więc nie należy do jej obwodu.",
    "B": "Dodałeś obwody kwadratu i trójkąta. Wspólny bok BC trzeba pominąć, i to dwa razy.",
    "D": "Brakuje boku EC. Z twierdzenia Pitagorasa |EC| = 10."
   },
   "sol": [
    "[[|EC|² = 6² + 8² = 100]], [[|EC| = 10]].",
    "Obwód: [[|AE| + |EC| + |CD| + |DA| = 14 + 10 + 8 + 8 = 40]]."
   ],
   "answer": "C, 40.",
   "tip": "Obwód to tylko zewnętrzna krawędź figury.",
   "check": [
    "6**2 + 8**2 == 10**2",
    "14 + 10 + 8 + 8 == 40"
   ],
   "pts": 1
  },
  {
   "id": "e14",
   "topics": [
    "uklad-wspolrzednych"
   ],
   "type": "abcd",
   "vis": {
    "type": "shape",
    "axes": true,
    "grid": true,
    "pts": {
     "A": [
      -4,
      -1
     ],
     "B": [
      2,
      -1
     ],
     "C": [
      5,
      3
     ]
    },
    "segs": [
     [
      "A",
      "B"
     ],
     [
      "B",
      "C"
     ]
    ],
    "names": {
     "A": "A(−4, −1)",
     "B": "B(2, −1)",
     "C": "C(5, 3)"
    },
    "alt": "Układ współrzędnych z punktami A(−4, −1), B(2, −1) i C(5, 3)."
   },
   "q": "Punkty A = (−4, −1), B = (2, −1) i C = (5, 3) są kolejnymi wierzchołkami równoległoboku ABCD (zobacz rysunek). Wierzchołek D tego równoległoboku ma współrzędne",
   "opts": [
    "(−7, 3)",
    "(−4, 3)",
    "(−1, 3)",
    "(2, 3)"
   ],
   "ok": 2,
   "why": {
    "A": "Przesunąłeś w złą stronę. Z B do C jest 3 w prawo i 4 w górę, więc z A do D też.",
    "B": "Punkt (−4, 3) leży dokładnie nad A, a z B do C jest też 3 w prawo.",
    "D": "Punkt (2, 3) leży nad B. Wierzchołek D ma być naprzeciwko B."
   },
   "sol": [
    "Z B do C: [[3 w prawo i 4 w górę]].",
    "Tak samo z A do D: [[D = (−4 + 3, −1 + 4) = (−1, 3)]]."
   ],
   "answer": "C, (−1, 3).",
   "tip": "W równoległoboku z A do D jest tak samo jak z B do C.",
   "check": [
    "-4 + (5 - 2) == -1",
    "-1 + (3 + 1) == 3"
   ],
   "pts": 1
  },
  {
   "id": "e15",
   "topics": [
    "bryly"
   ],
   "type": "abcd",
   "q": "Sześcian ma objętość 64 cm³. Pole powierzchni całkowitej tego sześcianu jest równe",
   "opts": [
    "96 cm²",
    "64 cm²",
    "16 cm²",
    "24 cm²"
   ],
   "ok": 0,
   "why": {
    "B": "64 cm³ to objętość, a pytanie dotyczy pola powierzchni.",
    "C": "16 cm² to pole jednej ściany. Sześcian ma 6 ścian.",
    "D": "Pomnożyłeś krawędź przez 6, a trzeba pole ściany."
   },
   "sol": [
    "Krawędź: [[4]] cm, bo [[4³ = 64]].",
    "Pole: [[6 · 4² = 96]] cm²."
   ],
   "answer": "A, 96 cm².",
   "tip": "Najpierw krawędź.",
   "check": [
    "4**3 == 64",
    "6*4**2 == 96"
   ],
   "pts": 1
  },
  {
   "id": "e16",
   "topics": [
    "ulamki"
   ],
   "type": "self",
   "q": "Suma trzech ułamków jest równa 11/12. Dwa z tych ułamków to 1/4 i 1/3. Uzasadnij, że trzeci ułamek można zapisać w postaci ułamka o liczniku 1. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Zapisałeś poprawne wyrażenie albo równanie prowadzące do trzeciego ułamka, np. 11/12 − (1/4 + 1/3) albo 1/4 + 1/3 + x = 11/12.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś trzeci ułamek (4/12 = 1/3) i zapisałeś wniosek, że ma licznik 1.",
     "pts": 1
    }
   ],
   "sol": [
    "[[1/4 + 1/3 = 3/12 + 4/12 = 7/12]].",
    "[[11/12 − 7/12 = 4/12 = 1/3]].",
    "Trzeci ułamek to 1/3, czyli ułamek o liczniku 1."
   ],
   "answer": "Trzeci ułamek to 1/3.",
   "tip": "Zapisuj obliczenia: przy zadaniach otwartych sam wynik to za mało.",
   "check": [
    "F(11, 12) - F(1, 4) - F(1, 3) == F(1, 3)"
   ],
   "pts": 2
  },
  {
   "id": "e17",
   "topics": [
    "rownania"
   ],
   "type": "self",
   "q": "Adam, Bartek i Czarek zbierają znaczki. Adam ma dwa razy więcej znaczków niż Czarek, a Bartek o 15 znaczków mniej niż Adam. Razem mają 165 znaczków. Ile znaczków ma każdy z chłopców? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Zapisałeś liczby znaczków za pomocą jednej niewiadomej, np. Czarek: c, Adam: 2c, Bartek: 2c − 15.",
     "pts": 1
    },
    {
     "t": "Ułożyłeś poprawne równanie, np. c + 2c + (2c − 15) = 165.",
     "pts": 1
    },
    {
     "t": "Rozwiązałeś równanie i podałeś wszystkie wyniki: Adam 72, Bartek 57, Czarek 36.",
     "pts": 1
    }
   ],
   "sol": [
    "Czarek: [[c]], Adam: [[2c]], Bartek: [[2c − 15]].",
    "[[c + 2c + 2c − 15 = 165]], [[5c = 180]], [[c = 36]].",
    "Adam: [[72]], Bartek: [[57]]. Sprawdzenie: [[36 + 72 + 57 = 165]]."
   ],
   "answer": "Adam 72, Bartek 57, Czarek 36 znaczków.",
   "tip": "Najłatwiej oznaczyć przez x tego, od kogo zależą pozostali: tu Czarka.",
   "check": [
    "5*36 == 180",
    "36 + 72 + 57 == 165",
    "72 - 15 == 57"
   ],
   "pts": 3
  },
  {
   "id": "e18",
   "topics": [
    "katy-i-trojkaty"
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
      7.121,
      4.111
     ],
     "D": [
      1.496,
      4.111
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
     ]
    ],
    "angles": [
     {
      "at": "A",
      "from": "B",
      "to": "D",
      "t": "70°",
      "r": 22
     },
     {
      "at": "A",
      "from": "B",
      "to": "C",
      "t": "30°",
      "r": 62
     },
     {
      "at": "B",
      "from": "C",
      "to": "A",
      "t": "55°"
     }
    ],
    "alt": "Trapez ABCD z podstawami AB i CD oraz przekątną AC. Kąt DAB ma 70°, kąt CAB ma 30°, kąt ABC ma 55°."
   },
   "q": "W trapezie ABCD podstawy AB i CD są równoległe. Kąt DAB ma miarę 70°, kąt ABC ma miarę 55°, a przekątna AC tworzy z podstawą AB kąt 30° (zobacz rysunek). Oblicz miary kątów ADC, BCD i ACD.",
   "criteria": [
    {
     "t": "Obliczyłeś poprawnie miary dwóch z trzech kątów.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś poprawnie wszystkie trzy kąty: ADC = 110°, BCD = 125°, ACD = 30°.",
     "pts": 1
    }
   ],
   "sol": [
    "Kąty przy ramieniu AD dają razem 180°: [[ADC = 180° − 70° = 110°]].",
    "Kąty przy ramieniu BC: [[BCD = 180° − 55° = 125°]].",
    "Kąty ACD i CAB to kąty naprzemianległe przy prostych równoległych AB i CD: [[ACD = 30°]]."
   ],
   "answer": "ADC = 110°, BCD = 125°, ACD = 30°.",
   "tip": "Takie zadanie (kąty w trapezie) było na egzaminie w 2025 roku.",
   "check": [
    "180 - 70 == 110",
    "180 - 55 == 125"
   ],
   "pts": 2
  },
  {
   "id": "e19",
   "topics": [
    "zadania-tekstowe",
    "pola-i-okrag"
   ],
   "type": "self",
   "q": "Na planie w skali 1 : 1000 działka ma kształt prostokąta o wymiarach 5 cm na 3 cm. Oblicz pole tej działki w rzeczywistości. Wynik podaj w arach. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczyłeś rzeczywiste wymiary działki: 5 · 1 000 = 5 000 cm = 50 m i 3 · 1 000 = 3 000 cm = 30 m.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś pole i zamieniłeś jednostki: 50 · 30 = 1 500 m² = 15 arów.",
     "pts": 1
    }
   ],
   "sol": [
    "Wymiary: [[5 cm · 1 000 = 5 000 cm = 50 m]], [[3 cm · 1 000 = 3 000 cm = 30 m]].",
    "Pole: [[50 · 30 = 1 500 m²]]. 1 ar to 100 m², więc [[15 arów]]."
   ],
   "answer": "15 arów.",
   "tip": "Skalę stosujesz do długości, a pole liczysz dopiero z rzeczywistych wymiarów.",
   "check": [
    "5*1000 == 5000",
    "50*30 == 1500",
    "1500/100 == 15"
   ],
   "pts": 2
  },
  {
   "id": "e20",
   "topics": [
    "pola-i-okrag"
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
      12,
      0
     ],
     "C": [
      12,
      8
     ],
     "D": [
      0,
      8
     ],
     "E": [
      12,
      3
     ],
     "F": [
      4,
      8
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
      "E",
      "F"
     ]
    ],
    "shade": [
     1
    ],
    "sides": [
     [
      "A",
      "B",
      "12 cm"
     ],
     [
      "B",
      "E",
      "3 cm"
     ],
     [
      "D",
      "F",
      "4 cm",
      1
     ],
     [
      "D",
      "A",
      "8 cm"
     ]
    ],
    "alt": "Prostokąt ABCD 12 cm na 8 cm. Punkt E na boku BC, BE = 3 cm, punkt F na boku CD, DF = 4 cm. Trójkąt AEF jest zamalowany."
   },
   "q": "Prostokąt ABCD ma boki |AB| = 12 cm i |AD| = 8 cm. Punkt E leży na boku BC, a punkt F na boku CD, przy czym |BE| = 3 cm i |DF| = 4 cm (zobacz rysunek). Oblicz pole trójkąta AEF. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczyłeś pole jednego z trójkątów ABE (18 cm²), ECF (20 cm²) albo ADF (16 cm²).",
     "pts": 1
    },
    {
     "t": "Zapisałeś poprawny sposób: pole prostokąta minus pola trzech trójkątów, np. 96 − 18 − 20 − 16.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś pole trójkąta AEF: 42 cm².",
     "pts": 1
    }
   ],
   "sol": [
    "Pole prostokąta: [[12 · 8 = 96]] cm².",
    "[[ABE: 12 · 3 : 2 = 18]], [[ECF: 5 · 8 : 2 = 20]] (bo |EC| = 8 − 3 = 5, |CF| = 12 − 4 = 8), [[ADF: 8 · 4 : 2 = 16]].",
    "[[P = 96 − 18 − 20 − 16 = 42]] cm²."
   ],
   "answer": "42 cm².",
   "tip": "Gdy trójkąt jest „przekrzywiony”, licz pole prostokąta i odejmij to, co zbędne.",
   "check": [
    "12*8 - 12*3/2 - 5*8/2 - 8*4/2 == 42"
   ],
   "pts": 3
  },
  {
   "id": "e21",
   "topics": [
    "bryly",
    "pitagoras"
   ],
   "type": "self",
   "vis": {
    "type": "solid",
    "names": {
     "A": "",
     "B": "",
     "C": "",
     "D": "",
     "S": "S",
     "M": ""
    },
    "pts3": {
     "A": [
      0,
      0,
      0
     ],
     "B": [
      10,
      0,
      0
     ],
     "C": [
      10,
      10,
      0
     ],
     "D": [
      0,
      10,
      0
     ],
     "S": [
      5,
      5,
      11
     ],
     "M": [
      5,
      0,
      0
     ]
    },
    "polys": [
     [
      "A",
      "B",
      "S"
     ],
     [
      "B",
      "C",
      "S"
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
      "S"
     ],
     [
      "S",
      "M"
     ]
    ],
    "sides": [
     [
      "A",
      "B",
      "10 cm"
     ],
     [
      "B",
      "S",
      "13 cm",
      1
     ]
    ],
    "alt": "Ostrosłup prawidłowy czworokątny: krawędź podstawy 10 cm, krawędź boczna 13 cm, wysokość ściany bocznej SM."
   },
   "q": "Ostrosłup prawidłowy czworokątny ma krawędź podstawy długości 10 cm i krawędź boczną długości 13 cm (zobacz rysunek). Oblicz pole powierzchni całkowitej tego ostrosłupa. Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczyłeś wysokość ściany bocznej z twierdzenia Pitagorasa: √(13² − 5²) = 12 cm.",
     "pts": 1
    },
    {
     "t": "Obliczyłeś pole powierzchni bocznej: 4 · 10 · 12 : 2 = 240 cm².",
     "pts": 1
    },
    {
     "t": "Obliczyłeś pole powierzchni całkowitej: 100 + 240 = 340 cm².",
     "pts": 1
    }
   ],
   "sol": [
    "Wysokość ściany bocznej SM dzieli krawędź podstawy na połowy: [[|SM|² = 13² − 5² = 144]], [[|SM| = 12]] cm.",
    "Pole jednej ściany: [[10 · 12 : 2 = 60]] cm², czterech: [[240]] cm².",
    "Pole podstawy: [[10² = 100]] cm². Całkowite: [[100 + 240 = 340]] cm²."
   ],
   "answer": "340 cm².",
   "tip": "Krawędź boczna to nie wysokość ściany. Wysokość ściany liczysz z Pitagorasa.",
   "check": [
    "13**2 - 5**2 == 12**2",
    "4*10*12/2 == 240",
    "100 + 240 == 340"
   ],
   "pts": 3
  }
 ],
 "test_minutes": 125,
 "max": 30,
 "dzial": "Na koniec: Egzaminy próbne"
};
