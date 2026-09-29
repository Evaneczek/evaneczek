/* Wygenerowane przez zbuduj.py z tresc/test-startowy.py. Nie edytuj ręcznie. */
window.TEMAT = {
 "slug": "test-startowy",
 "title": "Test startowy",
 "sign": "?",
 "kind": "diag",
 "lead": "20 krótkich zadań z całego zakresu egzaminu. Wynik pokazuje, co dziecko już umie i od którego tematu zacząć naukę.",
 "start_note": "Około 40 minut. Przygotuj kartkę i długopis. Jeśli nie wiesz, jak rozwiązać zadanie, zostaw je bez odpowiedzi: zgadywanie zafałszuje wynik.",
 "rules": [
  "20 zadań zamkniętych, każde za 1 punkt. W każdym zadaniu jest dokładnie jedna poprawna odpowiedź.",
  "Masz 40 minut. Nie musisz zdążyć ze wszystkim: jeśli czegoś nie umiesz, przejdź dalej.",
  "Bez kalkulatora i bez podpowiedzi, jak na egzaminie. Obliczenia zapisuj na kartce.",
  "Nie zgaduj. Zadanie bez odpowiedzi też jest informacją: pokazuje temat, który trzeba przerobić.",
  "Po teście zobaczysz, od którego tematu zacząć, a przy każdym zadaniu poprawną odpowiedź i rozwiązanie."
 ],
 "test": [
  {
   "id": "d1",
   "topics": [
    "liczby-i-dzialania"
   ],
   "type": "abcd",
   "q": "Wartość wyrażenia −3 + 4 · (−2) − (−5) jest równa",
   "opts": [
    "3",
    "−16",
    "−6",
    "10"
   ],
   "ok": 2,
   "why": {
    "A": "Najpierw mnożenie: 4 · (−2) = −8. Nie dodawaj najpierw −3 + 4.",
    "B": "Odejmowanie liczby ujemnej to dodawanie: −(−5) = +5.",
    "D": "4 · (−2) = −8, a nie 8."
   },
   "sol": [
    "Najpierw mnożenie: [[4 · (−2) = −8]].",
    "[[−3 − 8 + 5 = −6]]."
   ],
   "answer": "C, −6.",
   "tip": "Kolejność działań: mnożenie przed dodawaniem.",
   "check": [
    "-3 + 4*(-2) - (-5) == -6",
    "(-3 + 4)*(-2) - (-5) == 3",
    "-3 + 4*(-2) - 5 == -16"
   ],
   "pts": 1
  },
  {
   "id": "d2",
   "topics": [
    "podzielnosc"
   ],
   "type": "abcd",
   "q": "Która z liczb jest podzielna przez 9?",
   "opts": [
    "5 436",
    "4 263",
    "9 103",
    "6 402"
   ],
   "ok": 0,
   "why": {
    "B": "Suma cyfr to 15: liczba dzieli się przez 3, ale nie przez 9.",
    "C": "Pierwsza cyfra 9 nie wystarcza. Liczy się suma cyfr, a tu wynosi 13.",
    "D": "Suma cyfr to 12: liczba dzieli się przez 3, ale nie przez 9."
   },
   "sol": [
    "Liczba dzieli się przez 9, gdy suma jej cyfr dzieli się przez 9.",
    "[[5 + 4 + 3 + 6 = 18]], a 18 dzieli się przez 9."
   ],
   "answer": "A, 5 436.",
   "tip": "Cecha podzielności przez 9: suma cyfr.",
   "check": [
    "5436 % 9 == 0",
    "4263 % 9 != 0",
    "9103 % 9 != 0",
    "6402 % 9 != 0"
   ],
   "pts": 1
  },
  {
   "id": "d3",
   "topics": [
    "ulamki"
   ],
   "type": "abcd",
   "q": "Wartość wyrażenia 2/3 + 3/4 jest równa",
   "opts": [
    "5/7",
    "6/12",
    "1 1/2",
    "1 5/12"
   ],
   "ok": 3,
   "why": {
    "A": "Nie dodaje się osobno liczników i mianowników. Wspólny mianownik to 12.",
    "B": "6/12 to iloczyn 2/3 · 3/4, a trzeba dodać.",
    "C": "8/12 + 9/12 = 17/12, a nie 18/12."
   },
   "sol": [
    "Wspólny mianownik: [[2/3 = 8/12]], [[3/4 = 9/12]].",
    "[[8/12 + 9/12 = 17/12 = 1 5/12]]."
   ],
   "answer": "D, 1 5/12.",
   "tip": "Najpierw wspólny mianownik.",
   "check": [
    "F(2, 3) + F(3, 4) == F(17, 12)",
    "1 + F(5, 12) == F(17, 12)"
   ],
   "pts": 1
  },
  {
   "id": "d4",
   "topics": [
    "ulamki"
   ],
   "type": "abcd",
   "q": "Iloczyn 0,25 · 1,2 jest równy",
   "opts": [
    "3",
    "0,3",
    "0,03",
    "1,45"
   ],
   "ok": 1,
   "why": {
    "A": "Iloczyn ma trzy miejsca po przecinku: 0,300. Nie można pominąć przecinka.",
    "C": "Za dużo miejsc po przecinku. 25 · 12 = 300, a przecinek przesuwasz o 3 miejsca.",
    "D": "1,45 to suma, a trzeba pomnożyć."
   },
   "sol": [
    "[[25 · 12 = 300]]. Czynniki mają razem 3 miejsca po przecinku: [[0,300 = 0,3]]."
   ],
   "answer": "B, 0,3.",
   "tip": "Ćwierć z 1,2 to 0,3.",
   "check": [
    "F('0.25')*F('1.2') == F('0.3')"
   ],
   "pts": 1
  },
  {
   "id": "d5",
   "topics": [
    "potegi-i-pierwiastki"
   ],
   "type": "abcd",
   "q": "Wartość wyrażenia √49 + 2³ jest równa",
   "opts": [
    "13",
    "15",
    "57",
    "11"
   ],
   "ok": 1,
   "why": {
    "A": "2³ = 2 · 2 · 2 = 8, a nie 2 · 3 = 6.",
    "C": "√49 = 7, a nie 49.",
    "D": "2³ = 8, a nie 2² = 4."
   },
   "sol": [
    "[[√49 = 7]], [[2³ = 8]].",
    "[[7 + 8 = 15]]."
   ],
   "answer": "B, 15.",
   "tip": "Potęga to mnożenie tej samej liczby.",
   "check": [
    "7**2 == 49",
    "7 + 2**3 == 15"
   ],
   "pts": 1
  },
  {
   "id": "d6",
   "topics": [
    "procenty"
   ],
   "type": "abcd",
   "q": "Kurtka kosztowała 200 zł. Jej cenę obniżono o 15%. Nowa cena kurtki jest równa",
   "opts": [
    "185 zł",
    "30 zł",
    "230 zł",
    "170 zł"
   ],
   "ok": 3,
   "why": {
    "A": "Obniżka o 15% to 15% z 200 zł, czyli 30 zł, a nie 15 zł.",
    "B": "30 zł to kwota obniżki, a nie nowa cena.",
    "C": "To byłaby cena po podwyżce, a cenę obniżono."
   },
   "sol": [
    "[[15% z 200 zł = 30 zł]].",
    "[[200 − 30 = 170]] zł."
   ],
   "answer": "D, 170 zł.",
   "tip": "Albo od razu: 85% z 200 zł.",
   "check": [
    "200*F(85, 100) == 170"
   ],
   "pts": 1
  },
  {
   "id": "d7",
   "topics": [
    "procenty"
   ],
   "type": "abcd",
   "q": "Liczba 12 stanowi jaki procent liczby 48?",
   "opts": [
    "25%",
    "400%",
    "36%",
    "12%"
   ],
   "ok": 0,
   "why": {
    "B": "400% wychodzi z dzielenia 48 : 12. Część dzielisz przez całość: 12 : 48.",
    "C": "36 to różnica 48 − 12, a nie procent.",
    "D": "12% z 48 to 5,76, a nie 12."
   },
   "sol": [
    "[[12 : 48 = 1/4 = 25%]]."
   ],
   "answer": "A, 25%.",
   "tip": "Część przez całość.",
   "check": [
    "F(12, 48) == F(1, 4)"
   ],
   "pts": 1
  },
  {
   "id": "d8",
   "topics": [
    "wyrazenia-algebraiczne"
   ],
   "type": "abcd",
   "q": "Wyrażenie 2(3x − 1) − x jest równe",
   "opts": [
    "5x − 1",
    "7x − 2",
    "5x − 2",
    "6x − 3"
   ],
   "ok": 2,
   "why": {
    "A": "2 mnożysz przez oba wyrazy nawiasu: 2 · (−1) = −2.",
    "B": "x się odejmuje: 6x − x = 5x, a nie 7x.",
    "D": "Wyrazów z x i liczb nie łączy się ze sobą: 6x − 2 − x = 5x − 2."
   },
   "sol": [
    "[[2(3x − 1) = 6x − 2]].",
    "[[6x − 2 − x = 5x − 2]]."
   ],
   "answer": "C, 5x − 2.",
   "tip": "Sprawdź dla x = 1: 2 · 2 − 1 = 3 i 5 − 2 = 3.",
   "check": [
    "all(2*(3*x - 1) - x == 5*x - 2 for x in range(-3, 4))"
   ],
   "pts": 1
  },
  {
   "id": "d9",
   "topics": [
    "rownania"
   ],
   "type": "abcd",
   "q": "Rozwiązaniem równania 3x − 7 = 2x + 5 jest liczba",
   "opts": [
    "−2",
    "2",
    "12",
    "−12"
   ],
   "ok": 2,
   "why": {
    "A": "Przenosząc −7 na drugą stronę, zmieniasz znak: x = 5 + 7.",
    "B": "2 = 7 − 5. Trzeba dodać: x = 5 + 7.",
    "D": "Po odjęciu 2x zostaje x, a nie −x."
   },
   "sol": [
    "[[3x − 2x = 5 + 7]], [[x = 12]].",
    "Sprawdzenie: [[3 · 12 − 7 = 29]] i [[2 · 12 + 5 = 29]]."
   ],
   "answer": "C, 12.",
   "tip": "Zawsze sprawdź rozwiązanie w równaniu.",
   "check": [
    "3*12 - 7 == 2*12 + 5"
   ],
   "pts": 1
  },
  {
   "id": "d10",
   "topics": [
    "rownania"
   ],
   "type": "abcd",
   "q": "Kasia ma x zł, a Tomek ma 4 razy więcej. Razem mają 75 zł. Które równanie opisuje tę sytuację?",
   "opts": [
    "x + 4x = 75",
    "4x = 75",
    "x + x + 4 = 75",
    "x + 4 = 75"
   ],
   "ok": 0,
   "why": {
    "B": "4x to same pieniądze Tomka. Razem to pieniądze Kasi i Tomka: x + 4x.",
    "C": "x + 4 oznacza „o 4 zł więcej”, a Tomek ma 4 razy więcej.",
    "D": "Brakuje pieniędzy Kasi albo Tomka. Tomek ma 4x zł."
   },
   "sol": [
    "Tomek: [[4x]]. Razem: [[x + 4x = 75]].",
    "Stąd [[x = 15]]: Kasia ma 15 zł, Tomek 60 zł."
   ],
   "answer": "A, x + 4x = 75.",
   "tip": "„4 razy więcej” to mnożenie.",
   "check": [
    "15 + 4*15 == 75"
   ],
   "pts": 1
  },
  {
   "id": "d11",
   "topics": [
    "proporcjonalnosc"
   ],
   "type": "abcd",
   "q": "4 kg gruszek kosztują 22 zł. Ile kosztują 3 kg tych gruszek?",
   "opts": [
    "21 zł",
    "5,50 zł",
    "66 zł",
    "16,50 zł"
   ],
   "ok": 3,
   "why": {
    "A": "O 1 kg mniej to nie o 1 zł mniej. Najpierw policz cenę 1 kg.",
    "B": "5,50 zł to cena 1 kg, a trzeba 3 kg.",
    "C": "Pomnożono cenę 4 kg przez 3."
   },
   "sol": [
    "1 kg: [[22 : 4 = 5,50]] zł.",
    "3 kg: [[3 · 5,50 = 16,50]] zł."
   ],
   "answer": "D, 16,50 zł.",
   "tip": "Przez jedność: najpierw 1 kg.",
   "check": [
    "F(22)/4*3 == F('16.5')"
   ],
   "pts": 1
  },
  {
   "id": "d12",
   "topics": [
    "zadania-tekstowe"
   ],
   "type": "abcd",
   "q": "Samochód jechał przez 1,5 godziny ze stałą prędkością 60 km/h. Jaką drogę przejechał?",
   "opts": [
    "40 km",
    "90 km",
    "61,5 km",
    "75 km"
   ],
   "ok": 1,
   "why": {
    "A": "Droga to prędkość · czas, a nie prędkość : czas.",
    "C": "Prędkość i czas się mnoży, a nie dodaje.",
    "D": "75 km to droga w 1 h 15 min. 1,5 h to 1 h 30 min."
   },
   "sol": [
    "[[s = v · t = 60 · 1,5 = 90]] km."
   ],
   "answer": "B, 90 km.",
   "tip": "W godzinę 60 km, w pół godziny 30 km.",
   "check": [
    "60*F('1.5') == 90"
   ],
   "pts": 1
  },
  {
   "id": "d13",
   "topics": [
    "katy-i-trojkaty"
   ],
   "type": "abcd",
   "q": "Dwa kąty trójkąta mają miary 38° i 75°. Trzeci kąt tego trójkąta ma miarę",
   "opts": [
    "113°",
    "67°",
    "247°",
    "77°"
   ],
   "ok": 1,
   "why": {
    "A": "113° to suma dwóch danych kątów. Trzeci: 180° − 113°.",
    "C": "Suma kątów trójkąta to 180°, a nie 360°.",
    "D": "Błąd w odejmowaniu: 180° − 113° = 67°."
   },
   "sol": [
    "[[180° − 38° − 75° = 67°]]."
   ],
   "answer": "B, 67°.",
   "tip": "Suma kątów trójkąta: 180°.",
   "check": [
    "180 - 38 - 75 == 67",
    "360 - 113 == 247"
   ],
   "pts": 1
  },
  {
   "id": "d14",
   "topics": [
    "pola-i-okrag"
   ],
   "type": "abcd",
   "q": "Trapez ma podstawy długości 7 cm i 5 cm oraz wysokość 4 cm. Pole tego trapezu jest równe",
   "opts": [
    "48 cm²",
    "140 cm²",
    "16 cm²",
    "24 cm²"
   ],
   "ok": 3,
   "why": {
    "A": "Zapomniano podzielić przez 2.",
    "B": "Nie mnoży się wszystkich liczb. Pole trapezu to (a + b) · h : 2.",
    "C": "16 to suma 7 + 5 + 4, a nie pole."
   },
   "sol": [
    "[[P = (7 + 5) · 4 : 2 = 24]] cm²."
   ],
   "answer": "D, 24 cm².",
   "tip": "(a + b) · h : 2.",
   "check": [
    "(7 + 5)*4/2 == 24"
   ],
   "pts": 1
  },
  {
   "id": "d15",
   "topics": [
    "pola-i-okrag"
   ],
   "type": "abcd",
   "q": "Promień koła ma długość 6 cm. Pole tego koła jest równe",
   "opts": [
    "36π cm²",
    "12π cm²",
    "144π cm²",
    "6π cm²"
   ],
   "ok": 0,
   "why": {
    "B": "12π cm to długość okręgu (2πr), a nie pole.",
    "C": "Do wzoru wstawiasz promień 6, a nie średnicę 12.",
    "D": "Promień trzeba podnieść do kwadratu: 6² = 36."
   },
   "sol": [
    "[[P = πr² = π · 6² = 36π]] cm²."
   ],
   "answer": "A, 36π cm².",
   "tip": "Pole: πr². Obwód: 2πr.",
   "check": [
    "6**2 == 36",
    "12**2 == 144"
   ],
   "pts": 1
  },
  {
   "id": "d16",
   "topics": [
    "pitagoras"
   ],
   "type": "abcd",
   "q": "Przyprostokątne trójkąta prostokątnego mają długości 9 cm i 12 cm. Przeciwprostokątna tego trójkąta ma długość",
   "opts": [
    "21 cm",
    "225 cm",
    "15 cm",
    "√63 cm"
   ],
   "ok": 2,
   "why": {
    "A": "Boków się nie dodaje. Dodaje się ich kwadraty: c² = 81 + 144.",
    "B": "225 to c². Trzeba jeszcze wyciągnąć pierwiastek.",
    "D": "√63 = √(144 − 81) to odejmowanie. Przeciwprostokątna jest najdłuższa, więc kwadraty dodajesz."
   },
   "sol": [
    "[[c² = 9² + 12² = 81 + 144 = 225]].",
    "[[c = 15]] cm."
   ],
   "answer": "C, 15 cm.",
   "tip": "9, 12, 15 to 3, 4, 5 razy 3.",
   "check": [
    "9**2 + 12**2 == 15**2"
   ],
   "pts": 1
  },
  {
   "id": "d17",
   "topics": [
    "uklad-wspolrzednych"
   ],
   "type": "abcd",
   "q": "Środkiem odcinka o końcach A = (−2, 5) i B = (6, 1) jest punkt",
   "opts": [
    "(4, −2)",
    "(4, 6)",
    "(2, 3)",
    "(−4, 2)"
   ],
   "ok": 2,
   "why": {
    "A": "To połowy różnic współrzędnych. Środek to średnie: (−2 + 6) : 2 i (5 + 1) : 2.",
    "B": "Nie podzielono sum przez 2.",
    "D": "(−2 − 6) : 2 i (5 − 1) : 2 to połowy różnic, a współrzędne trzeba dodać."
   },
   "sol": [
    "[[x = (−2 + 6) : 2 = 2]], [[y = (5 + 1) : 2 = 3]]."
   ],
   "answer": "C, (2, 3).",
   "tip": "Środek odcinka: średnie współrzędnych.",
   "check": [
    "(-2 + 6)/2 == 2",
    "(5 + 1)/2 == 3"
   ],
   "pts": 1
  },
  {
   "id": "d18",
   "topics": [
    "bryly"
   ],
   "type": "abcd",
   "q": "Prostopadłościan ma wymiary 2 cm × 3 cm × 5 cm. Objętość tego prostopadłościanu jest równa",
   "opts": [
    "30 cm³",
    "10 cm³",
    "62 cm³",
    "15 cm³"
   ],
   "ok": 0,
   "why": {
    "B": "10 to suma wymiarów, a objętość to ich iloczyn.",
    "C": "62 to pole powierzchni (w cm²), a nie objętość.",
    "D": "Pomnożono tylko dwa wymiary. Objętość: 2 · 3 · 5."
   },
   "sol": [
    "[[V = 2 · 3 · 5 = 30]] cm³."
   ],
   "answer": "A, 30 cm³.",
   "tip": "Objętość: długość · szerokość · wysokość.",
   "check": [
    "2*3*5 == 30",
    "2*(2*3 + 2*5 + 3*5) == 62"
   ],
   "pts": 1
  },
  {
   "id": "d19",
   "topics": [
    "dane"
   ],
   "type": "abcd",
   "q": "Średnia arytmetyczna liczb 4, 8, 0, 12 jest równa",
   "opts": [
    "8",
    "24",
    "12",
    "6"
   ],
   "ok": 3,
   "why": {
    "A": "Zero też jest daną: sumę 24 dzielisz przez 4, a nie przez 3.",
    "B": "24 to suma liczb, a nie średnia.",
    "C": "12 to największa z liczb, a nie średnia."
   },
   "sol": [
    "Suma: [[4 + 8 + 0 + 12 = 24]].",
    "Średnia: [[24 : 4 = 6]]."
   ],
   "answer": "D, 6.",
   "tip": "Średnia: suma podzielona przez liczbę danych.",
   "check": [
    "(4 + 8 + 0 + 12)/4 == 6"
   ],
   "pts": 1
  },
  {
   "id": "d20",
   "topics": [
    "prawdopodobienstwo"
   ],
   "type": "abcd",
   "q": "W pudełku są 3 kule białe i 5 czarnych. Losujemy jedną kulę. Prawdopodobieństwo wylosowania kuli białej jest równe",
   "opts": [
    "3/5",
    "3/8",
    "1/2",
    "5/8"
   ],
   "ok": 1,
   "why": {
    "A": "3/5 to stosunek kul białych do czarnych. Wszystkich kul jest 8.",
    "C": "Kolory są dwa, ale kul każdego koloru nie jest po tyle samo.",
    "D": "5/8 to prawdopodobieństwo wylosowania kuli czarnej."
   },
   "sol": [
    "Wszystkich kul: [[3 + 5 = 8]].",
    "[[P = 3/8]]."
   ],
   "answer": "B, 3/8.",
   "tip": "Kule danego koloru przez wszystkie kule.",
   "check": [
    "3 + 5 == 8"
   ],
   "pts": 1
  }
 ],
 "test_minutes": 40,
 "max": 20,
 "dzial": "Na start: Diagnoza"
};
