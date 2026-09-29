/* Wygenerowane przez zbuduj.py z tresc/procenty.py. Nie edytuj ręcznie. */
window.TEMAT = {
 "slug": "procenty",
 "title": "Procenty",
 "sign": "%",
 "lead": "Promocje, podwyżki, lokaty, ankiety. Procenty pojawiają się na egzaminie praktycznie co roku, często w kilku zadaniach naraz. Po tym temacie będą dla Ciebie pewnymi punktami.",
 "goals": {
  "learn": "Wszystkie 10 umiejętności z procentów, których wymaga egzamin: od zamiany procentu na ułamek, przez dwie zmiany ceny po kolei, po procenty na diagramach i w równaniach.",
  "prereq": "Mnożyć i dzielić ułamki dziesiętne. Rozgrzewka na początku to sprawdzi.",
  "goal": "Minimum 12 z 14 punktów w teście na koniec tematu."
 },
 "skills": {
  "S1": "Procent, ułamek i ułamek dziesiętny",
  "S2": "Procent danej liczby",
  "S3": "Jakim procentem jednej liczby jest druga",
  "S4": "Liczba, gdy znamy jej procent",
  "S5": "Cena po podwyżce lub obniżce",
  "S6": "Cena przed podwyżką lub obniżką",
  "S7": "O ile procent więcej lub mniej",
  "S8": "Dwie zmiany procentowe po kolei",
  "S9": "Procenty na diagramach i w tabelach",
  "S10": "Procenty w wyrażeniach i równaniach"
 },
 "lessons": [
  {
   "title": "Czym jest procent",
   "skills": [
    "S1"
   ],
   "intro": "Procent to po prostu setna część. Słowo pochodzi z łaciny: „pro centum” znaczy „na sto”. Jeśli podzielisz coś na 100 równych kawałków, to 1% jest jednym takim kawałkiem, a 100% to całość.",
   "rule": {
    "t": "Procent zamieniasz na ułamek, dzieląc przez 100.",
    "f": [
     "p% = p/100",
     "1% = 0,01",
     "100% = całość"
    ],
    "e": "Ułamek dziesiętny zamieniasz na procent, mnożąc przez 100 (przecinek o dwa miejsca w prawo): 0,35 = 35%."
   },
   "visual": {
    "type": "grid",
    "n": 25,
    "alt": "Kratka 10 na 10, zamalowane 25 pól",
    "caption": "25 kratek ze 100 to 25% = 25/100 = 1/4 = 0,25"
   },
   "example": {
    "q": "Zapisz 35% jako ułamek dziesiętny i jako ułamek zwykły nieskracalny.",
    "steps": [
     "35% to 35 części ze 100, czyli 35/100.",
     "Ułamek dziesiętny: dzielimy przez 100, czyli przesuwamy przecinek o dwa miejsca w lewo: 0,35.",
     "Ułamek zwykły: 35/100 skracamy przez 5, bo 35 i 100 dzielą się przez 5: 7/20."
    ],
    "result": "35% = 0,35 = 7/20.",
    "check": [
     "35/100 == 0.35",
     "7/20 == 0.35"
    ]
   },
   "you": [
    {
     "id": "y1",
     "type": "fields",
     "q": "Zamień.",
     "fields": [
      {
       "label": "0,4 w procentach",
       "ans": 40,
       "unit": "%",
       "show": "40%"
      },
      {
       "label": "3/4 w procentach",
       "ans": 75,
       "unit": "%",
       "show": "75%"
      },
      {
       "label": "125% jako ułamek dziesiętny",
       "ans": 1.25,
       "show": "1,25"
      }
     ],
     "sol": [
      "<b>0,4</b> mnożymy przez 100, czyli przesuwamy przecinek o dwa miejsca w prawo: [[0,4 = 0,40 = 40%]].",
      "<b>3/4</b> najłatwiej rozszerzyć do mianownika 100: [[3/4 = 75/100 = 75%]].",
      "<b>125%</b> dzielimy przez 100: [[125 : 100 = 1,25]]. To więcej niż 1, bo 125% to więcej niż całość."
     ],
     "answer": "40%, 75% i 1,25.",
     "tip": "Liczba większa od 1 to zawsze więcej niż 100%.",
     "check": [
      "0.4*100 == 40",
      "3/4*100 == 75",
      "125/100 == 1.25"
     ]
    }
   ]
  },
  {
   "title": "Procent danej liczby",
   "skills": [
    "S2"
   ],
   "intro": "Napis „30% taniej”, podatek VAT, odsetki w banku: wszędzie tam liczysz procent jakiejś liczby. To najczęstsze obliczenie procentowe na egzaminie.",
   "rule": {
    "t": "Zamień procent na ułamek i pomnóż przez liczbę.",
    "f": [
     "p% z a = (p/100) · a"
    ],
    "e": "W pamięci: 10% to przecinek o jedno miejsce w lewo, 1% o dwa miejsca, 5% to połowa z 10%, 50% to połowa, 25% to ćwierć."
   },
   "visual": {
    "type": "bar",
    "p": 20,
    "partLabel": "20% = 16 zł",
    "restLabel": "80%",
    "wholeLabel": "80 zł = 100%",
    "alt": "Pasek: 20% z 80 zł to 16 zł"
   },
   "example": {
    "q": "Oblicz 15% z 240.",
    "steps": [
     "15% to 0,15, więc liczymy 0,15 · 240.",
     "0,15 · 240 = 36.",
     "Sprawdzenie w pamięci: 10% z 240 to 24, 5% to połowa, czyli 12. Razem 24 + 12 = 36. Zgadza się."
    ],
    "result": "15% z 240 to 36.",
    "tip": "Prawie każdy procent złożysz z 10%, 5% i 1%. Na egzaminie nie ma kalkulatora, więc te sztuczki bardzo pomagają.",
    "check": [
     "abs(0.15*240 - 36) < 1e-9"
    ]
   },
   "you": [
    {
     "id": "y2",
     "type": "fields",
     "q": "Oblicz 35% z 60.",
     "fields": [
      {
       "label": "Wynik",
       "ans": 21,
       "show": "21"
      }
     ],
     "sol": [
      "35% to 0,35, więc [[0,35 · 60 = 21]].",
      "W pamięci: 10% z 60 to 6, więc 30% to 18. 5% to połowa z 6, czyli 3. Razem [[18 + 3 = 21]]."
     ],
     "answer": "21.",
     "tip": "35% = 3 · 10% + 5%.",
     "check": [
      "abs(0.35*60 - 21) < 1e-9"
     ]
    },
    {
     "id": "y2b",
     "type": "fields",
     "q": "Oblicz w pamięci 5% z 300.",
     "fields": [
      {
       "label": "Wynik",
       "ans": 15,
       "show": "15"
      }
     ],
     "sol": [
      "10% z 300 to 30. 5% to połowa z tego: [[30 : 2 = 15]]."
     ],
     "answer": "15.",
     "tip": "5% to zawsze połowa z 10%.",
     "check": [
      "0.05*300 == 15"
     ]
    }
   ]
  },
  {
   "title": "Jakim procentem jest…",
   "skills": [
    "S3"
   ],
   "intro": "„Jaki procent klasy to dziewczęta?”, „Jaki procent zadań jest rozwiązany dobrze?”. Porównujesz tu część z całością i wynik podajesz w procentach.",
   "rule": {
    "t": "Podziel część przez całość i zamień wynik na procent.",
    "f": [
     "(część : całość) · 100%"
    ],
    "e": "Całość to liczba, z którą porównujesz. Stoi po słowie „liczby” („jakim procentem liczby 40 jest 14”) albo po „z” („21 z 25”)."
   },
   "visual": {
    "type": "bar",
    "p": 84,
    "partLabel": "21 z 25 = 84%",
    "wholeLabel": "25 pytań = 100%",
    "alt": "Pasek: 21 z 25 to 84%"
   },
   "example": {
    "q": "Ola odpowiedziała dobrze na 21 z 25 pytań. Jaki to procent?",
    "steps": [
     "Część to 21, całość to 25. Dzielimy: 21 : 25.",
     "Łatwiej jest rozszerzyć ułamek do mianownika 100: 21/25 = 84/100 (mnożymy licznik i mianownik przez 4).",
     "84/100 to 84%."
    ],
    "result": "Ola odpowiedziała dobrze na 84% pytań.",
    "tip": "Gdy całość to 20, 25 albo 50, rozszerz ułamek do setnych. To szybsze niż dzielenie.",
    "check": [
     "21/25 == 0.84"
    ]
   },
   "you": [
    {
     "id": "y3",
     "type": "fields",
     "q": "Jakim procentem liczby 40 jest liczba 14?",
     "fields": [
      {
       "label": "Wynik",
       "ans": 35,
       "unit": "%",
       "show": "35%"
      }
     ],
     "sol": [
      "Całość to 40, część to 14. Dzielimy: [[14 : 40 = 0,35]].",
      "0,35 to 35%. Można też rozszerzyć: 14/40 = 35/100."
     ],
     "answer": "35%.",
     "tip": "Dzielisz zawsze przez liczbę stojącą po słowie „liczby”.",
     "check": [
      "14/40 == 0.35"
     ]
    }
   ]
  },
  {
   "title": "Liczba, gdy znamy jej procent",
   "skills": [
    "S4"
   ],
   "intro": "Czasem znamy tylko kawałek i wiemy, jakim procentem całości jest. Na przykład: „27 uczniów to 75% klasy. Ilu uczniów jest w klasie?”. Szukamy całości.",
   "rule": {
    "t": "Podziel część przez procent zapisany jako ułamek.",
    "f": [
     "całość = część : (p/100)"
    ],
    "e": "Sposób bez dzielenia przez ułamek: policz najpierw 10% albo 1%, a potem pomnóż do 100%."
   },
   "visual": {
    "type": "bar",
    "p": 30,
    "partLabel": "30% = 45 zł",
    "restLabel": "?",
    "wholeLabel": "? zł = 100%",
    "alt": "Pasek: 30% to 45 zł, szukamy całości"
   },
   "example": {
    "q": "30% pewnej kwoty to 45 zł. Jaka to kwota?",
    "steps": [
     "Zapisujemy: 0,3 · x = 45. Szukamy x.",
     "Dzielimy: 45 : 0,3 = 450 : 3 = 150.",
     "Sposób bez dzielenia przez ułamek: 30% to 45 zł, więc 10% to trzy razy mniej, czyli 15 zł. 100% to dziesięć razy więcej: 150 zł.",
     "Sprawdzenie: 30% ze 150 zł to 45 zł. Zgadza się."
    ],
    "result": "Kwota wynosi 150 zł.",
    "tip": "Zawsze sprawdź wynik mnożeniem. Jeśli część wychodzi większa od całości, coś jest nie tak.",
    "check": [
     "abs(45/0.3 - 150) < 1e-9",
     "abs(0.3*150 - 45) < 1e-9"
    ]
   },
   "you": [
    {
     "id": "y4",
     "type": "fields",
     "q": "12% pewnej liczby to 18. Jaka to liczba?",
     "fields": [
      {
       "label": "Liczba",
       "ans": 150,
       "show": "150"
      }
     ],
     "sol": [
      "Zapisujemy: [[0,12 · x = 18]].",
      "Dzielimy: [[18 : 0,12 = 1 800 : 12 = 150]].",
      "Inaczej: 12% to 18, więc 1% to 18 : 12 = 1,5. 100% to 100 razy więcej: 150. Sprawdzenie: 12% ze 150 to 18."
     ],
     "answer": "150.",
     "tip": "Jeśli procent jest „nieokrągły”, najpierw policz 1%.",
     "check": [
      "abs(18/0.12 - 150) < 1e-9"
     ]
    }
   ]
  },
  {
   "title": "Cena po podwyżce lub obniżce",
   "skills": [
    "S5"
   ],
   "intro": "Po obniżce płacisz mniej niż 100% ceny, po podwyżce więcej. Zamiast liczyć osobno obniżkę i odejmować, możesz od razu pomnożyć cenę przez jedną liczbę.",
   "rule": {
    "t": "Podwyżka i obniżka to mnożenie przez jedną liczbę.",
    "f": [
     "podwyżka o p%: · (1 + p/100)",
     "obniżka o p%: · (1 − p/100)"
    ],
    "e": "+20% to razy 1,2 · +5% to razy 1,05 · −15% to razy 0,85 · −30% to razy 0,7"
   },
   "visual": {
    "type": "change",
    "after": 85,
    "l1": "Przed",
    "l2": "Po obniżce",
    "alt": "Pasek 100% i pasek 85% po obniżce o 15%"
   },
   "example": {
    "q": "Kurtka kosztowała 240 zł. Jej cenę obniżono o 15%. Ile kosztuje teraz?",
    "steps": [
     "Obniżka o 15% oznacza, że płacisz 100% − 15% = 85% ceny.",
     "85% to 0,85, więc: 240 · 0,85 = 204.",
     "Sprawdzenie innym sposobem: 15% z 240 to 36, a 240 − 36 = 204."
    ],
    "result": "Kurtka kosztuje teraz 204 zł.",
    "check": [
     "abs(240*0.85 - 204) < 1e-9"
    ]
   },
   "you": [
    {
     "id": "y5",
     "type": "fields",
     "q": "Bilet kosztował 80 zł i podrożał o 15%. Ile kosztuje teraz?",
     "fields": [
      {
       "label": "Nowa cena",
       "ans": 92,
       "unit": "zł",
       "show": "92 zł"
      }
     ],
     "sol": [
      "Podwyżka o 15%, więc płacisz 115% starej ceny, czyli mnożysz przez 1,15.",
      "[[80 · 1,15 = 92]]. Sprawdzenie: 15% z 80 to 12, a 80 + 12 = 92."
     ],
     "answer": "92 zł.",
     "tip": "Podwyżka: mnożysz przez liczbę większą od 1. Obniżka: przez liczbę mniejszą od 1.",
     "check": [
      "abs(80*1.15 - 92) < 1e-9"
     ]
    },
    {
     "id": "y5b",
     "type": "fields",
     "q": "Rower kosztował 1 200 zł i potaniał o 25%. Ile kosztuje teraz?",
     "fields": [
      {
       "label": "Nowa cena",
       "ans": 900,
       "unit": "zł",
       "show": "900 zł"
      }
     ],
     "sol": [
      "Obniżka o 25%, więc płacisz 75% ceny.",
      "[[1 200 · 0,75 = 900]]. Szybciej: 25% to ćwierć, ćwierć z 1 200 to 300, a 1 200 − 300 = 900."
     ],
     "answer": "900 zł.",
     "tip": "25% to zawsze ćwierć, 50% to połowa.",
     "check": [
      "1200*0.75 == 900"
     ]
    }
   ]
  },
  {
   "title": "Cena przed zmianą",
   "skills": [
    "S6"
   ],
   "intro": "To ulubione zadanie egzaminatorów i miejsce, gdzie najwięcej osób się myli. Znasz cenę PO zmianie, a pytają o cenę PRZED. Procent liczono od starej ceny, której nie znasz.",
   "rule": {
    "t": "Zapisz, ile procent starej ceny stanowi nowa cena, i podziel.",
    "f": [
     "stara cena = nowa cena : (1 ± p/100)"
    ],
    "e": "Po obniżce o 20% nowa cena to 80% starej, więc dzielisz przez 0,8. Po podwyżce o 20% dzielisz przez 1,2."
   },
   "visual": {
    "type": "change",
    "after": 120,
    "l1": "Stara cena",
    "l2": "Po podwyżce",
    "alt": "Pasek 100% i pasek 120% po podwyżce"
   },
   "example": {
    "q": "Po podwyżce o 20% rower kosztuje 1 080 zł. Ile kosztował przed podwyżką?",
    "steps": [
     "Starą cenę oznaczamy jako x. Po podwyżce o 20% to 120% starej ceny: x · 1,2 = 1 080.",
     "Dzielimy: x = 1 080 : 1,2 = 10 800 : 12 = 900.",
     "Sprawdzenie: 20% z 900 to 180, a 900 + 180 = 1 080. Zgadza się."
    ],
    "result": "Przed podwyżką rower kosztował 900 zł.",
    "tip": "<b>Częsty błąd:</b> „20% z 1 080 = 216, więc 1 080 − 216 = 864”. To źle, bo podwyżkę liczono od starej ceny, a nie od 1 080 zł.",
    "check": [
     "abs(1080/1.2 - 900) < 1e-9"
    ]
   },
   "you": [
    {
     "id": "y6",
     "type": "fields",
     "q": "Po podwyżce o 25% bilet kosztuje 50 zł. Ile kosztował przed podwyżką?",
     "fields": [
      {
       "label": "Stara cena",
       "ans": 40,
       "unit": "zł",
       "show": "40 zł"
      }
     ],
     "sol": [
      "Nowa cena to 125% starej: [[1,25 · x = 50]].",
      "Dzielimy: [[50 : 1,25 = 5 000 : 125 = 40]]. Sprawdzenie: 25% z 40 to 10, a 40 + 10 = 50."
     ],
     "answer": "40 zł.",
     "tip": "Znasz cenę PO zmianie i szukasz ceny PRZED? Zawsze dzielisz.",
     "check": [
      "abs(50/1.25 - 40) < 1e-9"
     ]
    }
   ]
  },
  {
   "title": "O ile procent więcej lub mniej",
   "skills": [
    "S7"
   ],
   "intro": "„Cena wzrosła o ile procent?”, „O ile procent Bartek ma więcej niż Ania?”. Porównujesz zmianę z tym, co było na początku albo z czym porównujesz.",
   "rule": {
    "t": "Różnicę dziel przez wartość, od której zaczynasz albo z którą porównujesz.",
    "f": [
     "(nowa − stara) : stara · 100%"
    ],
    "e": "„O ile procent A jest większe od B”: dzielisz przez B. „O ile procent B jest mniejsze od A”: dzielisz przez A."
   },
   "visual": {
    "type": "change",
    "after": 115,
    "l1": "Było 400",
    "l2": "Jest 460",
    "alt": "Pasek 100% i pasek 115%"
   },
   "example": {
    "q": "Liczba uczniów w szkole wzrosła z 400 do 460. O ile procent wzrosła?",
    "steps": [
     "Najpierw różnica: 460 − 400 = 60.",
     "Dzielimy przez to, co było na początku: 60 : 400 = 0,15.",
     "0,15 to 15%."
    ],
    "result": "Liczba uczniów wzrosła o 15%.",
    "tip": "Nie dziel przez nową wartość! 60 : 460 dałoby około 13%, a to zła odpowiedź.",
    "check": [
     "60/400 == 0.15"
    ]
   },
   "you": [
    {
     "id": "y7",
     "type": "fields",
     "q": "Liczba mieszkańców wsi wzrosła z 250 do 300. O ile procent wzrosła?",
     "fields": [
      {
       "label": "Wzrost o",
       "ans": 20,
       "unit": "%",
       "show": "20%"
      }
     ],
     "sol": [
      "Różnica: [[300 − 250 = 50]].",
      "Dzielimy przez początkową liczbę: [[50 : 250 = 0,2 = 20%]]."
     ],
     "answer": "20%.",
     "tip": "Najpierw różnica, potem dzielenie przez wartość początkową.",
     "check": [
      "50/250 == 0.2"
     ]
    },
    {
     "id": "y7b",
     "type": "fields",
     "q": "Cena spadła z 80 zł do 68 zł. O ile procent spadła?",
     "fields": [
      {
       "label": "Spadek o",
       "ans": 15,
       "unit": "%",
       "show": "15%"
      }
     ],
     "sol": [
      "Różnica: [[80 − 68 = 12 zł]].",
      "Dzielimy przez starą cenę: [[12 : 80 = 0,15 = 15%]]."
     ],
     "answer": "15%.",
     "tip": "Przy spadku liczysz tak samo jak przy wzroście.",
     "check": [
      "12/80 == 0.15"
     ]
    }
   ]
  },
  {
   "title": "Dwie zmiany po kolei",
   "skills": [
    "S8"
   ],
   "intro": "Cena najpierw rośnie, potem spada. Albo spada dwa razy. Najważniejsza zasada: druga zmiana liczy się już od NOWEJ ceny, więc procentów nie wolno po prostu dodawać ani odejmować.",
   "rule": {
    "t": "Pomnóż cenę po kolei przez oba mnożniki.",
    "f": [
     "cena · (1 ± p/100) · (1 ± q/100)"
    ],
    "e": "+10% i −10% to 1,1 · 0,9 = 0,99, czyli cena spada o 1%. Dwa razy +10% to 1,1 · 1,1 = 1,21, czyli +21%."
   },
   "example": {
    "tag": "Przykład",
    "q": "Cenę gry podniesiono o 10%, a potem obniżono o 10%. Czy gra kosztuje tyle samo co na początku?",
    "steps": [
     "W zadaniu nie ma ceny, więc bierzemy wygodną: 100 zł.",
     "Po podwyżce: 100 · 1,1 = 110 zł.",
     "Po obniżce, liczonej już od 110 zł: 110 · 0,9 = 99 zł."
    ],
    "result": "Nie. Gra jest o 1% tańsza niż na początku.",
    "tip": "Gdy w zadaniu nie ma ceny, weź 100 zł. Wtedy złote od razu są procentami.",
    "check": [
     "abs(100*1.1*0.9 - 99) < 1e-9"
    ]
   },
   "you": [
    {
     "id": "y8",
     "type": "fields",
     "q": "Cenę podniesiono o 20%, a potem obniżono o 20%. O ile procent cena jest teraz niższa niż na początku?",
     "fields": [
      {
       "label": "Niższa o",
       "ans": 4,
       "unit": "%",
       "show": "4%"
      }
     ],
     "sol": [
      "Bierzemy 100 zł. Po podwyżce: [[100 · 1,2 = 120 zł]].",
      "Obniżka o 20% liczy się od 120 zł: [[120 · 0,8 = 96 zł]].",
      "Było 100 zł, jest 96 zł, czyli o 4 zł mniej. Przy 100 zł to 4%."
     ],
     "answer": "4%.",
     "tip": "Podwyżka i obniżka o ten sam procent nigdy nie wracają do ceny początkowej.",
     "check": [
      "abs(100*1.2*0.8 - 96) < 1e-9"
     ]
    }
   ]
  },
  {
   "title": "Diagramy i tabele",
   "skills": [
    "S9"
   ],
   "intro": "Na egzaminie procenty bardzo często łączą się z diagramem albo tabelą. W 2025 i w 2026 roku pierwsze zadanie arkusza było właśnie takie. Najpierw odczytujesz liczby, a potem liczysz procenty tak jak w poprzednich lekcjach.",
   "rule": {
    "t": "Najpierw odczytaj liczby, potem licz procenty.",
    "f": [
     "diagram kołowy: wszystkie części = 100%",
     "słupki: wartość odczytujesz z osi"
    ],
    "e": "Sprawdź, od jakiej liczby zaczyna się oś. Jeśli nie od zera, słupek dwa razy wyższy NIE oznacza dwa razy większej wartości."
   },
   "visual": {
    "type": "chart",
    "kind": "cols",
    "min": 0,
    "max": 120,
    "step": 20,
    "ylabel": "zł",
    "rows": [
     [
      "styczeń",
      60
     ],
     [
      "luty",
      80
     ],
     [
      "marzec",
      100
     ]
    ],
    "alt": "Diagram słupkowy: styczeń 60 zł, luty 80 zł, marzec 100 zł"
   },
   "example": {
    "q": "Kasia zbiera na rower za 400 zł. Diagram pokazuje, ile odłożyła w kolejnych miesiącach. Jaki procent ceny roweru odłożyła w styczniu i lutym razem? O ile procent więcej odłożyła w marcu niż w lutym?",
    "steps": [
     "Odczytujemy z osi: styczeń 60 zł, luty 80 zł, marzec 100 zł. Linie siatki są co 20 zł.",
     "Styczeń i luty razem: 60 + 80 = 140 zł. Część dzielimy przez całość: 140 : 400 = 0,35, czyli 35%.",
     "Marzec i luty: różnica 100 − 80 = 20 zł. Porównujemy z lutym, więc dzielimy przez 80: 20 : 80 = 0,25, czyli 25%."
    ],
    "result": "Razem 35% ceny roweru. W marcu odłożyła o 25% więcej niż w lutym.",
    "tip": "Zanim zaczniesz liczyć, zapisz przy każdym słupku jego wartość. Wtedy nie pomylisz miesięcy.",
    "check": [
     "140/400 == 0.35",
     "20/80 == 0.25"
    ]
   },
   "you": [
    {
     "id": "y9",
     "type": "fields",
     "chart": {
      "kind": "pie",
      "rows": [
       [
        "algebra",
        30
       ],
       [
        "geometria",
        35
       ],
       [
        "statystyka",
        15
       ],
       [
        "arytmetyka",
        20,
        false
       ]
      ],
      "alt": "Diagram kołowy: algebra 30%, geometria 35%, statystyka 15%, arytmetyka nieznane"
     },
     "q": "Test ma 60 zadań. Diagram pokazuje, jaki procent zadań pochodzi z każdego działu. Ile zadań jest z arytmetyki?",
     "fields": [
      {
       "label": "Liczba zadań z arytmetyki",
       "ans": 12,
       "show": "12"
      }
     ],
     "sol": [
      "Cały diagram to 100%. Arytmetyka to reszta: [[100% − 30% − 35% − 15% = 20%]].",
      "20% z 60 zadań: 10% to 6, więc 20% to [[2 · 6 = 12]]."
     ],
     "answer": "12 zadań.",
     "tip": "Na diagramie kołowym brakujący wycinek zawsze znajdziesz, odejmując pozostałe od 100%.",
     "check": [
      "100-30-35-15 == 20",
      "abs(0.2*60 - 12) < 1e-9"
     ]
    },
    {
     "id": "y9b",
     "type": "tn",
     "chart": {
      "kind": "cols",
      "min": 200,
      "max": 360,
      "step": 20,
      "rows": [
       [
        "2024 r.",
        250
       ],
       [
        "2025 r.",
        350
       ]
      ],
      "alt": "Diagram słupkowy z osią od 200: 2024 r. 250, 2025 r. 350"
     },
     "q": "Diagram pokazuje, ile rowerów wyprodukowała fabryka. Czy w 2025 roku wyprodukowała o 100% więcej rowerów niż w 2024 roku? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
     "ok": "N",
     "reasons": {
      "1": "słupek z 2025 roku jest ponad dwa razy wyższy",
      "2": "350 − 250 = 100, a 100 : 250 = 0,4",
      "3": "w 2025 roku wyprodukowano o 100 rowerów więcej"
     },
     "okReason": "2",
     "sol": [
      "Oś zaczyna się od 200, a nie od zera, więc wysokość słupków myli. Odczytujemy liczby: 250 i 350.",
      "Różnica: [[350 − 250 = 100]]. Porównujemy z 2024 rokiem: [[100 : 250 = 0,4 = 40%]]. Wzrost o 40%, a nie o 100%.",
      "Uzasadnienie 3 jest prawdziwe, ale mówi o sztukach, a nie o procentach."
     ],
     "answer": "N, uzasadnienie 2.",
     "tip": "Zawsze sprawdź, od jakiej liczby zaczyna się oś diagramu.",
     "check": [
      "(350-250)/250 == 0.4"
     ]
    }
   ]
  },
  {
   "title": "Procenty z literami i w równaniach",
   "skills": [
    "S10"
   ],
   "intro": "Czasem nie znasz ceny i zapisujesz ją literą. Na egzaminie w 2026 roku było takie zadanie: kot kosztuje x zł, kotka y zł, a zniżki wynoszą 40% i 20%. Liczysz dokładnie tak samo jak na liczbach.",
   "rule": {
    "t": "Cenę po zmianie zapisujesz jako cenę razy liczbę, także gdy cena jest literą.",
    "f": [
     "x po obniżce o 40% = 0,6x",
     "x po podwyżce o 15% = 1,15x",
     "o 50% tańszy niż x = 0,5x"
    ],
    "e": "Gdy znasz łączną kwotę, ułóż równanie z jedną niewiadomą i je rozwiąż."
   },
   "example": {
    "q": "Bilet ulgowy jest o 50% tańszy od normalnego. Dwa bilety normalne i cztery ulgowe kosztują razem 100 zł. Ile kosztuje bilet normalny, a ile ulgowy?",
    "steps": [
     "Cenę biletu normalnego oznaczamy x. Ulgowy jest o 50% tańszy, więc kosztuje 0,5x.",
     "Zapisujemy równanie: 2 · x + 4 · 0,5x = 100, czyli 2x + 2x = 100, więc 4x = 100.",
     "x = 100 : 4 = 25. Bilet ulgowy: 0,5 · 25 = 12,50 zł.",
     "Sprawdzenie: 2 · 25 + 4 · 12,50 = 50 + 50 = 100. Zgadza się."
    ],
    "result": "Bilet normalny kosztuje 25 zł, a ulgowy 12,50 zł.",
    "tip": "Na egzaminie wolno też szukać wyniku metodą prób i błędów, ale trzeba wtedy sprawdzić wszystkie warunki zadania i to zapisać.",
    "check": [
     "2*25 + 4*12.5 == 100"
    ]
   },
   "you": [
    {
     "id": "y10",
     "type": "abcd",
     "q": "Bluza kosztuje a zł, a czapka b zł. Bluzę kupiono 30% taniej, a czapkę 10% taniej. Które wyrażenie opisuje, ile zapłacono za obie rzeczy?",
     "opts": [
      "0,3a + 0,1b",
      "0,7a + 0,9b",
      "0,9a + 0,7b",
      "a + b − 40"
     ],
     "ok": 1,
     "why": {
      "A": "0,3a i 0,1b to same obniżki, a pytanie jest o to, ile zapłacono.",
      "C": "Zamieniono mnożniki: bluza jest tańsza o 30%, więc płacisz 70% jej ceny, czyli 0,7a.",
      "D": "Odjęto 40 zł, a obniżki są w procentach i każda liczy się od innej ceny."
     },
     "sol": [
      "Bluza 30% taniej: płacisz 70% ceny, czyli [[0,7a]].",
      "Czapka 10% taniej: płacisz 90% ceny, czyli [[0,9b]].",
      "Razem: [[0,7a + 0,9b]]."
     ],
     "answer": "B, 0,7a + 0,9b.",
     "tip": "Obniżka o p%: mnożysz przez (100 − p)%. To działa tak samo dla liczb i dla liter.",
     "check": [
      "abs(1-0.3 - 0.7) < 1e-9",
      "abs(1-0.1 - 0.9) < 1e-9"
     ]
    },
    {
     "id": "y10b",
     "type": "fields",
     "q": "W torebce jest 20 cukierków, w tym 4 truskawkowe. Ile cukierków truskawkowych trzeba dołożyć, żeby truskawkowe stanowiły połowę wszystkich cukierków w torebce?",
     "fields": [
      {
       "label": "Trzeba dołożyć",
       "ans": 12,
       "show": "12"
      }
     ],
     "sol": [
      "Dokładamy x truskawkowych. Truskawkowych będzie 4 + x, a wszystkich 20 + x, bo dokładamy też do całości.",
      "Truskawkowe mają być połową: [[4 + x = 0,5 · (20 + x)]], czyli 4 + x = 10 + 0,5x, więc 0,5x = 6 i [[x = 12]].",
      "Sprawdzenie: truskawkowych jest 16, wszystkich 32, a 16 to połowa z 32."
     ],
     "answer": "12 cukierków.",
     "tip": "Gdy coś dokładasz albo wyjmujesz, zmienia się też całość. O tym najłatwiej zapomnieć.",
     "check": [
      "(4+12) == 0.5*(20+12)"
     ]
    }
   ]
  }
 ],
 "traps": [
  {
   "name": "Dzielenie przez złą liczbę przy „o ile procent”",
   "bad": "cena z 40 zł na 50 zł, więc 10 : 50 = 20%",
   "good": "dzielisz przez STARĄ cenę: 10 : 40 = 25%"
  },
  {
   "name": "Cofanie podwyżki przez odjęcie procentu",
   "bad": "po podwyżce o 25% jest 500 zł, więc 500 − 25% = 375 zł",
   "good": "x · 1,25 = 500, więc x = 500 : 1,25 = 400 zł"
  },
  {
   "name": "Dodawanie procentów przy dwóch zmianach",
   "bad": "+10%, a potem +10%, to razem +20%",
   "good": "1,1 · 1,1 = 1,21, czyli razem +21%"
  }
 ],
 "cheat": {
  "title": "Procenty w 8 zasadach",
  "rules": [
   {
    "t": "Procent to setna część.",
    "f": [
     "1% = 1/100 = 0,01",
     "p% = p/100"
    ],
    "e": "7% = 0,07 · 45% = 0,45 · 120% = 1,2 · 100% to cała liczba"
   },
   {
    "t": "Procent liczby: zamień procent na ułamek i pomnóż.",
    "f": [
     "p% z a = (p/100) · a"
    ],
    "e": "20% z 80 = 0,2 · 80 = 16"
   },
   {
    "t": "Jakim procentem liczby a jest liczba b? Podziel b przez a.",
    "f": [
     "(b : a) · 100%"
    ],
    "e": "12 z 48: 12 : 48 = 0,25 = 25%"
   },
   {
    "t": "Znasz procent, szukasz całości? Podziel.",
    "f": [
     "całość = część : (p/100)"
    ],
    "e": "30% liczby to 18: 18 : 0,3 = 60"
   },
   {
    "t": "Podwyżka i obniżka to mnożenie. Cenę przed zmianą znajdziesz dzieleniem.",
    "f": [
     "podwyżka: · (1 + p/100)",
     "obniżka: · (1 − p/100)"
    ],
    "e": "Po obniżce o 20% jest 96 zł, więc przed: 96 : 0,8 = 120 zł"
   },
   {
    "t": "O ile procent? Różnicę dziel przez wartość początkową.",
    "f": [
     "(nowa − stara) : stara · 100%"
    ],
    "e": "Z 50 zł na 60 zł: 10 : 50 = 20%. Dwie zmiany po kolei mnożysz: +10% i −10% to 1,1 · 0,9 = 0,99"
   },
   {
    "t": "Diagram lub tabela: najpierw odczytaj liczby, potem licz.",
    "f": [
     "diagram kołowy: razem 100%"
    ],
    "e": "Sprawdź, od jakiej liczby zaczyna się oś słupków."
   },
   {
    "t": "Cena literą: ta sama zasada.",
    "f": [
     "obniżka o 40%: 0,6x",
     "o 50% tańszy: 0,5x"
    ],
    "e": "Znasz łączną kwotę? Ułóż równanie: 2x + 4 · 0,5x = 100."
   }
  ]
 },
 "memo": {
  "title": "Warto znać na pamięć",
  "rows": [
   [
    "1%",
    "5%",
    "10%",
    "20%",
    "25%",
    "50%",
    "75%",
    "100%",
    "150%"
   ],
   [
    "1/100",
    "1/20",
    "1/10",
    "1/5",
    "1/4",
    "1/2",
    "3/4",
    "1",
    "1,5"
   ]
  ],
  "note": "10% liczby to przecinek o jedno miejsce w lewo (10% z 370 = 37). 5% to połowa z 10%. 1% to przecinek o dwa miejsca w lewo."
 },
 "warmup": {
  "id": "w0",
  "type": "fields",
  "q": "Trzy rachunki z ułamków dziesiętnych. Bez kalkulatora.",
  "fields": [
   {
    "label": "0,25 · 80",
    "ans": 20,
    "show": "20"
   },
   {
    "label": "36 : 0,4",
    "ans": 90,
    "show": "90"
   },
   {
    "label": "1 − 0,15",
    "ans": 0.85,
    "show": "0,85"
   }
  ],
  "sol": [
   "<b>0,25 · 80.</b> 0,25 to jedna czwarta, więc dzielimy na 4: [[80 : 4 = 20]].",
   "<b>36 : 0,4.</b> Mnożymy obie liczby przez 10, żeby pozbyć się przecinka: [[360 : 4 = 90]].",
   "<b>1 − 0,15.</b> Zapisujemy jedynkę jako 1,00: [[1,00 − 0,15 = 0,85]]."
  ],
  "answer": "20, 90 i 0,85.",
  "tip": "Dzieląc przez ułamek dziesiętny, mnóż obie liczby przez 10, aż dzielnik będzie liczbą całkowitą.",
  "check": [
   "0.25*80 == 20",
   "abs(36/0.4 - 90) < 1e-9",
   "abs(1 - 0.15 - 0.85) < 1e-9"
  ]
 },
 "levels": [
  {
   "n": 1,
   "name": "Podstawy",
   "desc": "Każda umiejętność osobno, łatwiejsze liczby. Tu masz się poczuć pewnie."
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
    "S1"
   ],
   "type": "table",
   "q": "Uzupełnij tabelę. W każdym wierszu ta sama liczba jest zapisana na trzy sposoby.",
   "note": "Ułamek zwykły wpisz z kreską, np. 3/4.",
   "head": [
    "ułamek zwykły",
    "ułamek dziesiętny",
    "procent"
   ],
   "rows": [
    [
     {
      "given": "1/4"
     },
     {
      "ans": 0.25,
      "show": "0,25"
     },
     {
      "ans": 25,
      "unit": "%",
      "show": "25%"
     }
    ],
    [
     {
      "ans": 0.6,
      "frac": true,
      "show": "3/5"
     },
     {
      "given": "0,6"
     },
     {
      "ans": 60,
      "unit": "%",
      "show": "60%"
     }
    ],
    [
     {
      "ans": 0.07,
      "frac": true,
      "show": "7/100"
     },
     {
      "ans": 0.07,
      "show": "0,07"
     },
     {
      "given": "7%"
     }
    ],
    [
     {
      "given": "3/2"
     },
     {
      "ans": 1.5,
      "show": "1,5"
     },
     {
      "ans": 150,
      "unit": "%",
      "show": "150%"
     }
    ],
    [
     {
      "ans": 0.125,
      "frac": true,
      "show": "1/8"
     },
     {
      "ans": 0.125,
      "show": "0,125"
     },
     {
      "given": "12,5%"
     }
    ]
   ],
   "sol": [
    "Te trzy zapisy to ta sama liczba w trzech „językach”.",
    "<b>Ułamek zwykły na dziesiętny:</b> dzielimy licznik przez mianownik, np. [[1 : 4 = 0,25]]. <b>Dziesiętny na procent:</b> mnożymy przez 100, np. 0,25 to 25%.",
    "<b>Procent na ułamek:</b> dzielimy przez 100. 7% to 7/100, czyli 0,07. 0,6 to 6/10, a po skróceniu przez 2 [[3/5]]. 3/2 to 1,5, czyli 150%, bo to więcej niż całość.",
    "Najtrudniejsze jest 12,5%: to 0,125, czyli 125/1000. Skracamy przez 125 i wychodzi [[1/8]]."
   ],
   "answer": "0,25 i 25% · 3/5 i 60% · 7/100 i 0,07 · 1,5 i 150% · 1/8 i 0,125.",
   "tip": "Warto znać na pamięć: 1/2 = 50%, 1/4 = 25%, 3/4 = 75%, 1/5 = 20%, 1/8 = 12,5%.",
   "check": [
    "1/4 == 0.25",
    "3/5 == 0.6",
    "3/2 == 1.5",
    "1/8 == 0.125"
   ],
   "twin": {
    "type": "table",
    "q": "Uzupełnij tabelę. W każdym wierszu ta sama liczba jest zapisana na trzy sposoby.",
    "note": "Ułamek zwykły wpisz z kreską, np. 3/4.",
    "head": [
     "ułamek zwykły",
     "ułamek dziesiętny",
     "procent"
    ],
    "rows": [
     [
      {
       "given": "1/2"
      },
      {
       "ans": 0.5,
       "show": "0,5"
      },
      {
       "ans": 50,
       "unit": "%",
       "show": "50%"
      }
     ],
     [
      {
       "ans": 0.3,
       "frac": true,
       "show": "3/10"
      },
      {
       "given": "0,3"
      },
      {
       "ans": 30,
       "unit": "%",
       "show": "30%"
      }
     ],
     [
      {
       "ans": 0.09,
       "frac": true,
       "show": "9/100"
      },
      {
       "ans": 0.09,
       "show": "0,09"
      },
      {
       "given": "9%"
      }
     ],
     [
      {
       "given": "5/4"
      },
      {
       "ans": 1.25,
       "show": "1,25"
      },
      {
       "ans": 125,
       "unit": "%",
       "show": "125%"
      }
     ],
     [
      {
       "ans": 0.375,
       "frac": true,
       "show": "3/8"
      },
      {
       "ans": 0.375,
       "show": "0,375"
      },
      {
       "given": "37,5%"
      }
     ]
    ],
    "sol": [
     "<b>1/2</b> to [[1 : 2 = 0,5 = 50%]]. <b>0,3</b> to 3/10, czyli 30%.",
     "<b>9%</b> to 9/100, czyli 0,09. <b>5/4</b> to [[5 : 4 = 1,25 = 125%]].",
     "<b>37,5%</b> to 0,375, czyli 375/1000. Skracamy przez 125: [[3/8]]. Pomaga to, że 1/8 = 12,5%, a 37,5% to trzy razy tyle."
    ],
    "answer": "0,5 i 50% · 3/10 i 30% · 9/100 i 0,09 · 1,25 i 125% · 3/8 i 0,375.",
    "tip": "Jeśli znasz 1/8 = 12,5%, policzysz też 3/8, 5/8 i 7/8.",
    "check": [
     "1/2 == 0.5",
     "5/4 == 1.25",
     "3/8 == 0.375"
    ]
   },
   "twin2": {
    "type": "table",
    "q": "Uzupełnij tabelę. W każdym wierszu ta sama liczba jest zapisana na trzy sposoby.",
    "note": "Ułamek zwykły wpisz z kreską, np. 3/4.",
    "head": [
     "ułamek zwykły",
     "ułamek dziesiętny",
     "procent"
    ],
    "rows": [
     [
      {
       "given": "1/5"
      },
      {
       "ans": 0.2,
       "show": "0,2"
      },
      {
       "ans": 20,
       "unit": "%",
       "show": "20%"
      }
     ],
     [
      {
       "ans": 0.9,
       "frac": true,
       "show": "9/10"
      },
      {
       "given": "0,9"
      },
      {
       "ans": 90,
       "unit": "%",
       "show": "90%"
      }
     ],
     [
      {
       "ans": 0.03,
       "frac": true,
       "show": "3/100"
      },
      {
       "ans": 0.03,
       "show": "0,03"
      },
      {
       "given": "3%"
      }
     ],
     [
      {
       "given": "7/4"
      },
      {
       "ans": 1.75,
       "show": "1,75"
      },
      {
       "ans": 175,
       "unit": "%",
       "show": "175%"
      }
     ],
     [
      {
       "ans": 0.625,
       "frac": true,
       "show": "5/8"
      },
      {
       "ans": 0.625,
       "show": "0,625"
      },
      {
       "given": "62,5%"
      }
     ]
    ],
    "sol": [
     "<b>1/5</b> = [[0,2 = 20%]]. <b>0,9</b> = [[9/10 = 90%]]. <b>3%</b> = [[3/100 = 0,03]].",
     "<b>7/4</b> = [[1,75 = 175%]]. <b>62,5%</b> = 0,625 = [[5/8]] (5 · 12,5%)."
    ],
    "answer": "0,2 i 20% · 9/10 i 90% · 3/100 i 0,03 · 1,75 i 175% · 5/8 i 0,625.",
    "tip": "1/8 = 12,5%, więc 5/8 = 62,5%.",
    "check": [
     "F(1, 5) == F('0.2')",
     "F(7, 4) == F('1.75')",
     "F(5, 8) == F('0.625')"
    ]
   }
  },
  {
   "id": "a2",
   "level": 1,
   "skills": [
    "S1",
    "S2"
   ],
   "type": "abcd",
   "q": "30% liczby 150 to:",
   "opts": [
    "4,5",
    "50",
    "45",
    "120"
   ],
   "ok": 2,
   "why": {
    "A": "4,5 to 3% ze 150. Przecinek poszedł o jedno miejsce za daleko.",
    "B": "50 to jedna trzecia ze 150. 30% to trochę mniej niż jedna trzecia.",
    "D": "120 to 150 − 30. Odjęto 30 zamiast policzyć 30%."
   },
   "sol": [
    "Procent to setna część, więc 30% to 0,3.",
    "Mnożymy: [[0,3 · 150 = 45]].",
    "W pamięci: 10% ze 150 to 15, a 30% to trzy razy tyle: [[3 · 15 = 45]]."
   ],
   "answer": "C, 45.",
   "tip": "10% dowolnej liczby policzysz w sekundę: przesuń przecinek o jedno miejsce w lewo.",
   "check": [
    "abs(0.3*150 - 45) < 1e-9",
    "abs(0.03*150 - 4.5) < 1e-9",
    "150 - 30 == 120"
   ],
   "twin": {
    "type": "abcd",
    "q": "40% liczby 120 to:",
    "opts": [
     "48",
     "4,8",
     "30",
     "80"
    ],
    "ok": 0,
    "why": {
     "B": "4,8 to 4% ze 120. Przecinek poszedł o jedno miejsce za daleko.",
     "C": "30 to ćwierć ze 120, czyli 25%.",
     "D": "80 to 120 − 40. Odjęto 40 zamiast policzyć 40%."
    },
    "sol": [
     "40% to 0,4, więc [[0,4 · 120 = 48]].",
     "W pamięci: 10% ze 120 to 12, a 40% to cztery razy tyle: [[4 · 12 = 48]]."
    ],
    "answer": "A, 48.",
    "tip": "Liczysz 10% i mnożysz przez tyle, ile dziesiątek jest w procencie.",
    "check": [
     "abs(0.4*120 - 48) < 1e-9",
     "abs(0.04*120 - 4.8) < 1e-9",
     "120/4 == 30"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "60% liczby 90 to:",
    "opts": [
     "5,4",
     "30",
     "60",
     "54"
    ],
    "ok": 3,
    "why": {
     "A": "5,4 to 6% z 90. Przecinek poszedł o jedno miejsce za daleko.",
     "B": "30 to 90 − 60. Odjęto 60 zamiast policzyć 60%.",
     "C": "60 to sama liczba procentów."
    },
    "sol": [
     "10% z 90 to 9, a 60% to [[6 · 9 = 54]]."
    ],
    "answer": "D, 54.",
    "tip": "Najpierw 10%.",
    "check": [
     "F('0.6') * 90 == 54"
    ]
   }
  },
  {
   "id": "a3",
   "level": 1,
   "skills": [
    "S2"
   ],
   "type": "fields",
   "q": "Oblicz w pamięci. Skorzystaj ze sztuczek z lekcji.",
   "fields": [
    {
     "label": "10% z 370",
     "ans": 37,
     "show": "37"
    },
    {
     "label": "5% z 360",
     "ans": 18,
     "show": "18",
     "why": [
      [
       36,
       "36 to 10% z 360. 5% to połowa z tego: 18."
      ]
     ]
    },
    {
     "label": "25% z 64",
     "ans": 16,
     "show": "16"
    },
    {
     "label": "1% z 2 500",
     "ans": 25,
     "show": "25",
     "why": [
      [
       250,
       "250 to 10%. 1% to przecinek o dwa miejsca: 25."
      ]
     ]
    },
    {
     "label": "75% z 40",
     "ans": 30,
     "show": "30",
     "why": [
      [
       10,
       "10 to 25%. 75% to trzy razy tyle: 30."
      ]
     ]
    },
    {
     "label": "200% z 13",
     "ans": 26,
     "show": "26"
    }
   ],
   "sol": [
    "<b>10%</b>: przecinek o jedno miejsce w lewo: 370 → 37. <b>1%</b>: o dwa miejsca: 2 500 → 25.",
    "<b>5%</b> to połowa z 10%: 10% z 360 to 36, połowa to 18. <b>25%</b> to ćwierć: [[64 : 4 = 16]].",
    "<b>75%</b> to trzy ćwierci: ćwierć z 40 to 10, więc 30. <b>200%</b> to dwa razy tyle: [[2 · 13 = 26]]."
   ],
   "answer": "37, 18, 16, 25, 30 i 26.",
   "tip": "Z 10% i 5% złożysz prawie każdy procent: 15% = 10% + 5%, a 35% = 3 · 10% + 5%.",
   "check": [
    "abs(0.1*370 - 37) < 1e-9",
    "abs(0.05*360 - 18) < 1e-9",
    "0.25*64 == 16",
    "abs(0.01*2500 - 25) < 1e-9",
    "0.75*40 == 30",
    "2*13 == 26"
   ],
   "twin": {
    "type": "fields",
    "q": "Oblicz w pamięci.",
    "fields": [
     {
      "label": "10% z 450",
      "ans": 45,
      "show": "45"
     },
     {
      "label": "5% z 240",
      "ans": 12,
      "show": "12"
     },
     {
      "label": "25% z 36",
      "ans": 9,
      "show": "9"
     },
     {
      "label": "1% z 3 200",
      "ans": 32,
      "show": "32"
     },
     {
      "label": "75% z 80",
      "ans": 60,
      "show": "60"
     },
     {
      "label": "150% z 20",
      "ans": 30,
      "show": "30"
     }
    ],
    "sol": [
     "<b>10% z 450</b> to 45. <b>1% z 3 200</b> to 32.",
     "<b>5% z 240</b>: 10% to 24, połowa to 12. <b>25% z 36</b>: [[36 : 4 = 9]].",
     "<b>75% z 80</b>: ćwierć to 20, trzy ćwierci to 60. <b>150% z 20</b>: całość (20) i jeszcze połowa (10), razem 30."
    ],
    "answer": "45, 12, 9, 32, 60 i 30.",
    "tip": "150% to całość i jeszcze połowa.",
    "check": [
     "abs(0.1*450 - 45) < 1e-9",
     "abs(0.05*240 - 12) < 1e-9",
     "0.25*36 == 9",
     "abs(0.01*3200 - 32) < 1e-9",
     "0.75*80 == 60",
     "1.5*20 == 30"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Oblicz w pamięci.",
    "fields": [
     {
      "label": "10% z 580",
      "ans": 58,
      "show": "58"
     },
     {
      "label": "5% z 440",
      "ans": 22,
      "show": "22",
      "why": [
       [
        44,
        "44 to 10%. 5% to połowa: 22."
       ]
      ]
     },
     {
      "label": "25% z 48",
      "ans": 12,
      "show": "12"
     },
     {
      "label": "1% z 1 800",
      "ans": 18,
      "show": "18",
      "why": [
       [
        180,
        "180 to 10%. 1% to 18."
       ]
      ]
     },
     {
      "label": "75% z 60",
      "ans": 45,
      "show": "45"
     },
     {
      "label": "300% z 7",
      "ans": 21,
      "show": "21",
      "why": [
       [
        2.1,
        "300% to trzy razy tyle: 21."
       ]
      ]
     }
    ],
    "sol": [
     "[[58]], [[22]], [[12]], [[18]].",
     "75% z 60: ćwierć to 15, trzy ćwierci [[45]]. 300% z 7: [[3 · 7 = 21]]."
    ],
    "answer": "58, 22, 12, 18, 45 i 21.",
    "tip": "100% to całość, 300% to trzy razy tyle.",
    "check": [
     "F('0.05') * 440 == 22",
     "F('0.75') * 60 == 45",
     "3 * 7 == 21"
    ]
   }
  },
  {
   "id": "a4",
   "level": 1,
   "skills": [
    "S3"
   ],
   "type": "abcd",
   "q": "Jakim procentem liczby 80 jest liczba 20?",
   "opts": [
    "4%",
    "25%",
    "16%",
    "40%"
   ],
   "ok": 1,
   "why": {
    "A": "4 to wynik dzielenia 80 : 20. Dzielenie jest odwrócone.",
    "C": "16 to 20% z 80. To odpowiedź na inne pytanie.",
    "D": "40% z 80 to 32, a nie 20."
   },
   "sol": [
    "Pytanie znaczy: jaką częścią liczby 80 jest 20?",
    "Dzielimy część przez całość: [[20 : 80 = 0,25]], a 0,25 to 25%.",
    "Można też tak: 20 mieści się w 80 cztery razy, więc to ćwierć, czyli 25%."
   ],
   "answer": "B, 25%.",
   "tip": "Liczba, która stoi po słowie „liczby”, to całość. Przez nią dzielisz.",
   "check": [
    "20/80 == 0.25",
    "80/20 == 4",
    "0.2*80 == 16",
    "0.4*80 == 32"
   ],
   "twin": {
    "type": "abcd",
    "q": "Jakim procentem liczby 50 jest liczba 10?",
    "opts": [
     "5%",
     "20%",
     "10%",
     "50%"
    ],
    "ok": 1,
    "why": {
     "A": "5 to wynik dzielenia 50 : 10. Dzielenie jest odwrócone.",
     "C": "10 to sama liczba, a nie procent. Trzeba ją porównać z 50.",
     "D": "50% z 50 to 25, a nie 10."
    },
    "sol": [
     "Dzielimy część przez całość: [[10 : 50 = 0,2]], czyli 20%.",
     "Albo rozszerzamy: 10/50 = 20/100 = 20%."
    ],
    "answer": "B, 20%.",
    "tip": "Gdy całość to 50, pomnóż licznik i mianownik przez 2, żeby dostać setne.",
    "check": [
     "10/50 == 0.2",
     "50/10 == 5"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Jakim procentem liczby 60 jest liczba 15?",
    "opts": [
     "4%",
     "15%",
     "9%",
     "25%"
    ],
    "ok": 3,
    "why": {
     "A": "4 to 60 : 15. Dzielenie jest odwrócone.",
     "B": "15 to sama liczba, a nie procent.",
     "C": "9 to 15% z 60. To odpowiedź na inne pytanie."
    },
    "sol": [
     "[[15 : 60 = 0,25 = 25%]]."
    ],
    "answer": "D, 25%.",
    "tip": "Część przez całość.",
    "check": [
     "F(15, 60) == F(1, 4)"
    ]
   }
  },
  {
   "id": "a5",
   "level": 1,
   "skills": [
    "S4"
   ],
   "type": "abcd",
   "q": "40% pewnej liczby jest równe 36. Jaka to liczba?",
   "opts": [
    "90",
    "14,4",
    "76",
    "144"
   ],
   "ok": 0,
   "why": {
    "B": "14,4 to 40% z 36. Szukasz całej liczby, więc trzeba dzielić, a nie mnożyć.",
    "C": "76 to 36 + 40. Procentów nie dodaje się do liczb.",
    "D": "144 to 36 : 0,25. Podzielono przez 25% zamiast przez 40%."
   },
   "sol": [
    "Znamy kawałek (36) i wiemy, że to 40% całości. Zapisujemy: [[0,4 · x = 36]].",
    "Dzielimy: [[36 : 0,4 = 360 : 4 = 90]].",
    "Sprawdzenie: 40% z 90 to 36. Zgadza się."
   ],
   "answer": "A, 90.",
   "tip": "Zawsze sprawdź wynik mnożeniem.",
   "check": [
    "abs(36/0.4 - 90) < 1e-9",
    "abs(0.4*36 - 14.4) < 1e-9",
    "abs(36/0.25 - 144) < 1e-9"
   ],
   "twin": {
    "type": "abcd",
    "q": "25% pewnej liczby jest równe 14. Jaka to liczba?",
    "opts": [
     "3,5",
     "39",
     "56",
     "42"
    ],
    "ok": 2,
    "why": {
     "A": "3,5 to 25% z 14. Pomnożono zamiast podzielić.",
     "B": "39 to 14 + 25. Procentów nie dodaje się do liczb.",
     "D": "42 to 3 · 14. Ale 25% to ćwierć, więc całość to 4 razy więcej."
    },
    "sol": [
     "25% to ćwierć. Jeśli ćwierć liczby to 14, cała liczba jest 4 razy większa: [[4 · 14 = 56]].",
     "Sprawdzenie: 25% z 56 to 14."
    ],
    "answer": "C, 56.",
    "tip": "25% to ćwierć, 50% to połowa, 20% to jedna piąta. Wtedy całość znajdziesz mnożeniem.",
    "check": [
     "14/0.25 == 56",
     "0.25*14 == 3.5"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "60% pewnej liczby jest równe 42. Jaka to liczba?",
    "opts": [
     "25,2",
     "102",
     "70",
     "84"
    ],
    "ok": 2,
    "why": {
     "A": "25,2 to 60% z 42. Szukasz całości, więc dzielisz.",
     "B": "102 to 42 + 60. Procentów nie dodaje się do liczb.",
     "D": "84 to 42 : 0,5. Podzielono przez 50% zamiast przez 60%."
    },
    "sol": [
     "[[42 : 0,6 = 420 : 6 = 70]]. Sprawdzenie: 60% z 70 = 42."
    ],
    "answer": "C, 70.",
    "tip": "10% to 7, więc 100% to 70.",
    "check": [
     "42 / F('0.6') == 70"
    ]
   }
  },
  {
   "id": "a7",
   "level": 1,
   "skills": [
    "S6"
   ],
   "type": "fields",
   "q": "Po obniżce o 20% spodnie kosztują 96 zł. Ile kosztowały przed obniżką?",
   "fields": [
    {
     "label": "Cena przed obniżką",
     "ans": 120,
     "unit": "zł",
     "show": "120 zł",
     "why": [
      [
       115.2,
       "20% liczono od starej ceny, a nie od 96 zł. Dzielisz: 96 : 0,8 = 120."
      ],
      [
       76.8,
       "Szukasz ceny WYŻSZEJ niż 96 zł, więc nie mnożysz przez 0,8, tylko dzielisz."
      ]
     ]
    }
   ],
   "sol": [
    "96 zł to cena PO obniżce. Po obniżce o 20% zostało 80% starej ceny: [[0,8 · x = 96]].",
    "Dzielimy: [[96 : 0,8 = 960 : 8 = 120]].",
    "Sprawdzenie: 20% ze 120 to 24, a 120 − 24 = 96."
   ],
   "answer": "120 zł.",
   "tip": "Znasz cenę PO zmianie i szukasz ceny PRZED? Zawsze dzielisz.",
   "check": [
    "abs(96/0.8 - 120) < 1e-9"
   ],
   "twin": {
    "type": "fields",
    "q": "Po podwyżce o 10% bilet kosztuje 44 zł. Ile kosztował przed podwyżką?",
    "fields": [
     {
      "label": "Cena przed podwyżką",
      "ans": 40,
      "unit": "zł",
      "show": "40 zł"
     }
    ],
    "sol": [
     "Po podwyżce o 10% cena to 110% starej: [[1,1 · x = 44]].",
     "Dzielimy: [[44 : 1,1 = 440 : 11 = 40]].",
     "Sprawdzenie: 10% z 40 to 4, a 40 + 4 = 44."
    ],
    "answer": "40 zł.",
    "tip": "Podwyżka: dzielisz przez liczbę większą od 1. Obniżka: przez liczbę mniejszą od 1.",
    "check": [
     "abs(44/1.1 - 40) < 1e-9"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Po obniżce o 30% buty kosztują 126 zł. Ile kosztowały przed obniżką?",
    "fields": [
     {
      "label": "Cena przed obniżką",
      "ans": 180,
      "unit": "zł",
      "show": "180 zł",
      "why": [
       [
        163.8,
        "30% liczono od starej ceny. Dzielisz: 126 : 0,7 = 180."
       ],
       [
        88.2,
        "Szukasz ceny wyższej niż 126 zł, więc dzielisz przez 0,7."
       ]
      ]
     }
    ],
    "sol": [
     "[[0,7 · x = 126]], więc [[x = 1 260 : 7 = 180]]. Sprawdzenie: 30% ze 180 = 54, a 180 − 54 = 126."
    ],
    "answer": "180 zł.",
    "tip": "Cena PRZED: dzielisz.",
    "check": [
     "126 / F('0.7') == 180"
    ]
   }
  },
  {
   "id": "a10",
   "level": 1,
   "skills": [
    "S9",
    "S7"
   ],
   "type": "pf",
   "chart": {
    "kind": "cols",
    "min": 0,
    "max": 70,
    "step": 10,
    "ylabel": "książki",
    "rows": [
     [
      "styczeń",
      40
     ],
     [
      "luty",
      60
     ],
     [
      "marzec",
      50
     ]
    ],
    "alt": "Diagram słupkowy: styczeń 40, luty 60, marzec 50 książek"
   },
   "q": "Diagram pokazuje, ile książek wypożyczono w bibliotece w kolejnych miesiącach. Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "W lutym wypożyczono o 50% więcej książek niż w styczniu.",
     "ok": "P"
    },
    {
     "t": "W marcu wypożyczono o 10% mniej książek niż w lutym.",
     "ok": "F"
    }
   ],
   "sol": [
    "Odczytujemy z osi: styczeń 40, luty 60, marzec 50.",
    "<b>Zdanie 1.</b> Różnica [[60 − 40 = 20]]. Porównujemy ze styczniem: [[20 : 40 = 0,5 = 50%]]. Prawda.",
    "<b>Zdanie 2.</b> Różnica [[60 − 50 = 10]] książek, ale to nie jest 10%. Porównujemy z lutym: [[10 : 60 ≈ 0,17]], czyli około 17%. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Różnica w sztukach to jeszcze nie procent. Zawsze podziel ją przez wartość, z którą porównujesz.",
   "check": [
    "20/40 == 0.5",
    "abs(10/60 - 0.1667) < 0.001"
   ],
   "twin": {
    "type": "pf",
    "chart": {
     "kind": "cols",
     "min": 0,
     "max": 50,
     "step": 10,
     "vals": true,
     "rows": [
      [
       "pon.",
       30
      ],
      [
       "wt.",
       45
      ],
      [
       "śr.",
       36
      ]
     ],
     "alt": "Diagram słupkowy: poniedziałek 30, wtorek 45, środa 36 biletów"
    },
    "q": "Diagram pokazuje, ile biletów do kina sprzedano w kolejnych dniach. Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "We wtorek sprzedano o 50% więcej biletów niż w poniedziałek.",
      "ok": "P"
     },
     {
      "t": "W środę sprzedano o 9% mniej biletów niż we wtorek.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[45 − 30 = 15]], a [[15 : 30 = 0,5 = 50%]]. Prawda.",
     "<b>Zdanie 2.</b> [[45 − 36 = 9]] biletów, a [[9 : 45 = 0,2 = 20%]]. Mniej o 20%, a nie o 9%. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "9 biletów to nie 9%. Procent liczysz dopiero po podzieleniu.",
    "check": [
     "15/30 == 0.5",
     "9/45 == 0.2"
    ]
   },
   "twin2": {
    "type": "pf",
    "chart": {
     "kind": "cols",
     "min": 0,
     "max": 35,
     "step": 5,
     "rows": [
      [
       "pon.",
       20
      ],
      [
       "wt.",
       25
      ],
      [
       "śr.",
       30
      ]
     ],
     "alt": "Diagram słupkowy: poniedziałek 20, wtorek 25, środa 30"
    },
    "q": "Diagram pokazuje, ile osób odwiedziło muzeum w kolejnych dniach. Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "We wtorek muzeum odwiedziło o 25% więcej osób niż w poniedziałek.",
      "ok": "P"
     },
     {
      "t": "W środę muzeum odwiedziło o 5% więcej osób niż we wtorek.",
      "ok": "F"
     }
    ],
    "sol": [
     "Odczytujemy: 20, 25, 30.",
     "<b>Zdanie 1.</b> [[5 : 20 = 25%]]. Prawda.",
     "<b>Zdanie 2.</b> [[5 : 25 = 20%]], a nie 5%. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "5 osób to nie 5%.",
    "check": [
     "F(5, 20) == F('0.25')",
     "F(5, 25) == F('0.2')"
    ]
   }
  },
  {
   "id": "a11",
   "level": 1,
   "skills": [
    "S10"
   ],
   "type": "abcd",
   "q": "Książka kosztuje k zł. Po obniżce o 25% kosztuje:",
   "opts": [
    "0,75k zł",
    "0,25k zł",
    "(k − 25) zł",
    "1,25k zł"
   ],
   "ok": 0,
   "why": {
    "B": "0,25k to sama obniżka, a nie nowa cena.",
    "C": "Odjęto 25 zł zamiast 25%.",
    "D": "1,25k to cena po podwyżce o 25%."
   },
   "sol": [
    "Po obniżce o 25% płacisz 75% ceny.",
    "75% to 0,75, więc nowa cena to [[0,75k]]."
   ],
   "answer": "A, 0,75k zł.",
   "tip": "Zapis z literą sprawdzisz na przykładzie: dla k = 100 wychodzi 75 zł. Zgadza się.",
   "check": [
    "1-0.25 == 0.75"
   ],
   "twin": {
    "type": "abcd",
    "q": "Kurtka kosztuje x zł. Po podwyżce o 20% kosztuje:",
    "opts": [
     "0,2x zł",
     "(x + 20) zł",
     "0,8x zł",
     "1,2x zł"
    ],
    "ok": 3,
    "why": {
     "A": "0,2x to sama podwyżka, a nie nowa cena.",
     "B": "Dodano 20 zł zamiast 20%.",
     "C": "0,8x to cena po obniżce o 20%."
    },
    "sol": [
     "Po podwyżce o 20% płacisz 120% ceny, czyli [[1,2x]]."
    ],
    "answer": "D, 1,2x zł.",
    "tip": "Podwyżka: liczba większa od 1. Obniżka: mniejsza od 1.",
    "check": [
     "1+0.2 == 1.2"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Bluza kosztuje b zł. Po podwyżce o 5% kosztuje:",
    "opts": [
     "0,05b zł",
     "1,05b zł",
     "(b + 5) zł",
     "1,5b zł"
    ],
    "ok": 1,
    "why": {
     "A": "0,05b to sama podwyżka.",
     "C": "Dodano 5 zł zamiast 5%.",
     "D": "1,5b to podwyżka o 50%."
    },
    "sol": [
     "Po podwyżce o 5% płacisz 105% ceny: [[1,05b]]."
    ],
    "answer": "B, 1,05b zł.",
    "tip": "5% = 0,05, a nie 0,5.",
    "check": [
     "1 + F('0.05') == F('1.05')"
    ]
   }
  },
  {
   "id": "b1",
   "level": 2,
   "skills": [
    "S3",
    "S7"
   ],
   "type": "pf",
   "q": "W klasie jest 25 uczniów, w tym 10 dziewcząt. Oceń prawdziwość zdań.",
   "items": [
    {
     "t": "Dziewczęta stanowią 40% uczniów tej klasy.",
     "ok": "P"
    },
    {
     "t": "Chłopców jest w tej klasie o 20% więcej niż dziewcząt.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> [[10 : 25 = 0,4 = 40%]]. Prawda.",
    "<b>Zdanie 2.</b> Chłopców jest [[25 − 10 = 15]], czyli o 5 więcej niż dziewcząt. Porównujemy z dziewczętami, więc dzielimy przez 10: [[5 : 10 = 0,5 = 50%]]. Chłopców jest o 50% więcej, a nie o 20%. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "„O ile procent więcej niż X”: zawsze dziel przez X.",
   "check": [
    "10/25 == 0.4",
    "(15-10)/10 == 0.5"
   ],
   "twin": {
    "type": "pf",
    "q": "W drużynie jest 20 osób, w tym 8 dziewcząt. Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Dziewczęta stanowią 40% drużyny.",
      "ok": "P"
     },
     {
      "t": "Chłopców jest o 40% więcej niż dziewcząt.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[8 : 20 = 0,4 = 40%]]. Prawda.",
     "<b>Zdanie 2.</b> Chłopców jest 12, czyli o 4 więcej. [[4 : 8 = 0,5 = 50%]]. Chłopców jest o 50% więcej. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Porównując z dziewczętami, dzielisz przez liczbę dziewcząt.",
    "check": [
     "8/20 == 0.4",
     "4/8 == 0.5"
    ]
   },
   "twin2": {
    "type": "pf",
    "q": "W klasie jest 30 uczniów, w tym 12 dziewcząt. Oceń prawdziwość zdań.",
    "items": [
     {
      "t": "Dziewczęta stanowią 40% uczniów tej klasy.",
      "ok": "P"
     },
     {
      "t": "Chłopców jest o 30% więcej niż dziewcząt.",
      "ok": "F"
     }
    ],
    "sol": [
     "<b>Zdanie 1.</b> [[12 : 30 = 0,4 = 40%]]. Prawda.",
     "<b>Zdanie 2.</b> Chłopców 18, o 6 więcej. [[6 : 12 = 50%]]. Fałsz."
    ],
    "answer": "P, F.",
    "tip": "Porównujesz z dziewczętami: dzielisz przez 12.",
    "check": [
     "F(12, 30) == F('0.4')",
     "F(6, 12) == F('0.5')"
    ]
   }
  },
  {
   "id": "b2",
   "level": 2,
   "skills": [
    "S6"
   ],
   "type": "abcd",
   "q": "Po obniżce o 25% telefon kosztuje 600 zł. Ile kosztował przed obniżką?",
   "opts": [
    "450 zł",
    "800 zł",
    "750 zł",
    "2 400 zł"
   ],
   "ok": 1,
   "why": {
    "A": "450 zł to 600 · 0,75. Pomnożono zamiast podzielić.",
    "C": "750 zł to 600 zł + 25% z 600 zł. Ale 25% liczono od starej ceny, a nie od 600 zł.",
    "D": "2 400 zł to 600 : 0,25. Po obniżce o 25% zostaje 75% ceny, więc dzieli się przez 0,75."
   },
   "sol": [
    "600 zł to cena PO obniżce. Po obniżce o 25% zostało 75% starej ceny: [[0,75 · x = 600]].",
    "Dzielimy: [[600 : 0,75 = 60 000 : 75 = 800]].",
    "Sprawdzenie: 25% z 800 zł to 200 zł, a 800 − 200 = 600. Zgadza się!"
   ],
   "answer": "B, 800 zł.",
   "tip": "Znasz cenę PO zmianie i szukasz ceny PRZED? Zawsze dzielisz.",
   "check": [
    "abs(600/0.75 - 800) < 1e-9",
    "600*0.75 == 450",
    "600*1.25 == 750",
    "600/0.25 == 2400"
   ],
   "twin": {
    "type": "abcd",
    "q": "Po obniżce o 40% kurtka kosztuje 180 zł. Ile kosztowała przed obniżką?",
    "opts": [
     "108 zł",
     "252 zł",
     "450 zł",
     "300 zł"
    ],
    "ok": 3,
    "why": {
     "A": "108 zł to 180 · 0,6. Pomnożono zamiast podzielić.",
     "B": "252 zł to 180 zł + 40% z 180 zł. Ale 40% liczono od starej ceny.",
     "C": "450 zł to 180 : 0,4. Po obniżce o 40% zostaje 60% ceny, więc dzieli się przez 0,6."
    },
    "sol": [
     "Po obniżce zostało 60% starej ceny: [[0,6 · x = 180]].",
     "Dzielimy: [[180 : 0,6 = 1 800 : 6 = 300]]. Sprawdzenie: 40% z 300 to 120, a 300 − 120 = 180."
    ],
    "answer": "D, 300 zł.",
    "tip": "Po obniżce o p% dzielisz przez (100 − p)%, a nie przez p%.",
    "check": [
     "abs(180/0.6 - 300) < 1e-9",
     "abs(180*1.4 - 252) < 1e-9",
     "abs(180/0.4 - 450) < 1e-9"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Po obniżce o 20% rower kosztuje 960 zł. Ile kosztował przed obniżką?",
    "opts": [
     "1 200 zł",
     "768 zł",
     "1 152 zł",
     "4 800 zł"
    ],
    "ok": 0,
    "why": {
     "B": "768 zł to 960 · 0,8. Pomnożono zamiast podzielić.",
     "C": "1 152 zł to 960 + 20% z 960. Ale 20% liczono od starej ceny.",
     "D": "4 800 zł to 960 : 0,2. Dzielisz przez 0,8, bo zostało 80%."
    },
    "sol": [
     "[[960 : 0,8 = 9 600 : 8 = 1 200 zł]]."
    ],
    "answer": "A, 1 200 zł.",
    "tip": "Zostało 80% ceny.",
    "check": [
     "960 / F('0.8') == 1200",
     "960 * F('1.2') == F('1152')"
    ]
   }
  },
  {
   "id": "b4",
   "level": 2,
   "skills": [
    "S9",
    "S2"
   ],
   "type": "fields",
   "chart": {
    "kind": "pie",
    "rows": [
     [
      "piłka nożna",
      35
     ],
     [
      "siatkówka",
      25
     ],
     [
      "koszykówka",
      15
     ],
     [
      "pływanie",
      25,
      false
     ]
    ],
    "alt": "Diagram kołowy: piłka nożna 35%, siatkówka 25%, koszykówka 15%, pływanie nieznane"
   },
   "q": "Ankietę o ulubionym sporcie wypełniło 240 uczniów. Każdy wybrał dokładnie jeden sport. Wyniki przedstawia diagram.",
   "fields": [
    {
     "label": "a) Jaki procent uczniów wybrał pływanie?",
     "ans": 25,
     "unit": "%",
     "show": "25%",
     "why": [
      [
       75,
       "75% to suma pozostałych części. Pływanie to 100% − 75% = 25%."
      ]
     ]
    },
    {
     "label": "b) Ilu uczniów wybrało pływanie?",
     "ans": 60,
     "unit": "uczniów",
     "show": "60"
    },
    {
     "label": "c) O ilu uczniów więcej wybrało piłkę nożną niż koszykówkę?",
     "ans": 48,
     "unit": "uczniów",
     "show": "48",
     "why": [
      [
       20,
       "20 to różnica w procentach. W liczbie uczniów to 20% z 240 = 48."
      ]
     ]
    }
   ],
   "sol": [
    "<b>a)</b> Wszystkie części razem to 100%: [[100% − 35% − 25% − 15% = 25%]].",
    "<b>b)</b> 25% to ćwierć: [[240 : 4 = 60]] uczniów.",
    "<b>c)</b> Piłka nożna ma 35%, koszykówka 15%. Różnica to 20% wszystkich uczniów: [[0,2 · 240 = 48]]. Można też policzyć osobno: 84 − 36 = 48."
   ],
   "answer": "a) 25%, b) 60 uczniów, c) 48 uczniów.",
   "tip": "Różnicę między częściami diagramu możesz policzyć od razu w procentach, a dopiero potem zamienić na liczbę osób.",
   "check": [
    "100-35-25-15 == 25",
    "240/4 == 60",
    "abs(0.2*240 - 48) < 1e-9"
   ],
   "twin": {
    "type": "fields",
    "chart": {
     "kind": "pie",
     "rows": [
      [
       "autobus",
       45
      ],
      [
       "rower",
       20
      ],
      [
       "pieszo",
       25
      ],
      [
       "samochód",
       10,
       false
      ]
     ],
     "alt": "Diagram kołowy: autobus 45%, rower 20%, pieszo 25%, samochód nieznane"
    },
    "q": "Zapytano 300 uczniów, jak dojeżdżają do szkoły. Każdy wybrał jeden sposób. Wyniki przedstawia diagram.",
    "fields": [
     {
      "label": "a) Jaki procent uczniów dojeżdża samochodem?",
      "ans": 10,
      "unit": "%",
      "show": "10%"
     },
     {
      "label": "b) Ilu uczniów dojeżdża samochodem?",
      "ans": 30,
      "unit": "uczniów",
      "show": "30"
     },
     {
      "label": "c) O ilu uczniów więcej dojeżdża autobusem niż chodzi pieszo?",
      "ans": 60,
      "unit": "uczniów",
      "show": "60"
     }
    ],
    "sol": [
     "<b>a)</b> [[100% − 45% − 20% − 25% = 10%]].",
     "<b>b)</b> 10% z 300 to [[30]] uczniów.",
     "<b>c)</b> Różnica: 45% − 25% = 20% wszystkich uczniów, a [[0,2 · 300 = 60]]."
    ],
    "answer": "a) 10%, b) 30 uczniów, c) 60 uczniów.",
    "tip": "Wszystkie części diagramu procentowego razem to zawsze 100%.",
    "check": [
     "100-45-20-25 == 10",
     "abs(0.1*300 - 30) < 1e-9",
     "abs(0.2*300 - 60) < 1e-9"
    ]
   },
   "twin2": {
    "type": "fields",
    "chart": {
     "kind": "pie",
     "rows": [
      [
       "tramwaj",
       40
      ],
      [
       "autobus",
       30
      ],
      [
       "rower",
       10
      ],
      [
       "pieszo",
       20,
       false
      ]
     ],
     "alt": "Diagram kołowy: tramwaj 40%, autobus 30%, rower 10%, pieszo nieznane"
    },
    "q": "Zapytano 400 osób, jak dojeżdżają do pracy. Każda wybrała jeden sposób. Wyniki przedstawia diagram.",
    "fields": [
     {
      "label": "a) Jaki procent osób chodzi pieszo?",
      "ans": 20,
      "unit": "%",
      "show": "20%"
     },
     {
      "label": "b) Ile osób chodzi pieszo?",
      "ans": 80,
      "show": "80"
     },
     {
      "label": "c) O ile osób więcej jeździ tramwajem niż autobusem?",
      "ans": 40,
      "show": "40",
      "why": [
       [
        10,
        "10 to różnica w procentach. 10% z 400 = 40 osób."
       ]
      ]
     }
    ],
    "sol": [
     "<b>a)</b> [[100% − 40% − 30% − 10% = 20%]].",
     "<b>b)</b> [[20% z 400 = 80]].",
     "<b>c)</b> [[10% z 400 = 40]]."
    ],
    "answer": "a) 20%, b) 80, c) 40.",
    "tip": "Diagram kołowy: razem 100%.",
    "check": [
     "100-40-30-10 == 20",
     "F('0.2') * 400 == 80",
     "F('0.1') * 400 == 40"
    ]
   }
  },
  {
   "id": "b6",
   "level": 2,
   "skills": [
    "S2",
    "S5"
   ],
   "type": "pair",
   "q": "Cena netto laptopa to 2 000 zł. Do ceny doliczamy podatek VAT 23%. Dokończ zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "Kwota podatku VAT wynosi",
     "opts": {
      "A": "230 zł",
      "B": "460 zł"
     },
     "ok": "B"
    },
    {
     "label": "Cena laptopa z VAT wynosi",
     "opts": {
      "C": "2 460 zł",
      "D": "2 023 zł"
     },
     "ok": "C"
    }
   ],
   "sol": [
    "<b>Podatek:</b> 23% z 2 000 zł. 1% z 2 000 to 20 zł, więc 23% to [[23 · 20 = 460 zł]]. Odpowiedź A (230 zł) to 23% z 1 000 zł.",
    "<b>Cena z VAT:</b> [[2 000 + 460 = 2 460 zł]]. Odpowiedź D powstaje, gdy do ceny doda się samo 23 zamiast 23%."
   ],
   "answer": "B i C.",
   "tip": "Cenę z VAT policzysz też od razu: 2 000 · 1,23 = 2 460.",
   "check": [
    "abs(0.23*2000 - 460) < 1e-9",
    "abs(2000*1.23 - 2460) < 1e-9"
   ],
   "twin": {
    "type": "pair",
    "q": "Cena netto telewizora to 1 500 zł, a VAT wynosi 23%. Dokończ zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Kwota podatku VAT wynosi",
      "opts": {
       "A": "345 zł",
       "B": "230 zł"
      },
      "ok": "A"
     },
     {
      "label": "Cena telewizora z VAT wynosi",
      "opts": {
       "C": "1 723 zł",
       "D": "1 845 zł"
      },
      "ok": "D"
     }
    ],
    "sol": [
     "<b>Podatek:</b> 1% z 1 500 to 15 zł, więc 23% to [[23 · 15 = 345 zł]].",
     "<b>Cena z VAT:</b> [[1 500 + 345 = 1 845 zł]]."
    ],
    "answer": "A i D.",
    "tip": "Przy nieokrągłym procencie policz najpierw 1%.",
    "check": [
     "abs(0.23*1500 - 345) < 1e-9",
     "abs(1500*1.23 - 1845) < 1e-9"
    ]
   },
   "twin2": {
    "type": "pair",
    "q": "Cena netto roweru to 800 zł, a VAT wynosi 23%. Dokończ zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Kwota podatku VAT wynosi",
      "opts": {
       "A": "184 zł",
       "B": "230 zł"
      },
      "ok": "A"
     },
     {
      "label": "Cena roweru z VAT wynosi",
      "opts": {
       "C": "984 zł",
       "D": "823 zł"
      },
      "ok": "C"
     }
    ],
    "sol": [
     "1% z 800 to 8 zł, więc 23% to [[184 zł]].",
     "[[800 + 184 = 984 zł]]. 823 zł to doliczone 23 zł zamiast 23%."
    ],
    "answer": "A i C.",
    "tip": "Nieokrągły procent: najpierw 1%.",
    "check": [
     "F('0.23') * 800 == 184",
     "800 * F('1.23') == 984"
    ]
   }
  },
  {
   "id": "b8",
   "level": 2,
   "skills": [
    "S7"
   ],
   "type": "tn",
   "q": "Cena roweru spadła z 250 zł do 190 zł. Czy spadła o więcej niż 20%? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "T",
   "reasons": {
    "1": "cena spadła o 60 zł, a 60 : 250 = 0,24",
    "2": "cena spadła o 60 zł, a 60 : 190 ≈ 0,32",
    "3": "cena spadła o 60 zł, czyli o 60%"
   },
   "okReason": "1",
   "sol": [
    "Różnica: [[250 − 190 = 60 zł]]. Dzielimy przez STARĄ cenę: [[60 : 250 = 0,24 = 24%]].",
    "24% to więcej niż 20%, więc tak. Uzasadnienie 2 dzieli przez nową cenę, a 3 myli złote z procentami."
   ],
   "answer": "T, uzasadnienie 1.",
   "tip": "Uzasadnienie musi być prawdziwe od początku do końca, a nie tylko dawać dobry wniosek.",
   "check": [
    "250 - 190 == 60",
    "60/250 == 0.24"
   ],
   "twin": {
    "type": "tn",
    "q": "Cena biletu wzrosła z 60 zł do 75 zł. Czy wzrosła o więcej niż 30%? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "N",
    "reasons": {
     "1": "cena wzrosła o 15 zł, a 15 : 60 = 0,25",
     "2": "cena wzrosła o 15 zł, a 15 : 75 = 0,2",
     "3": "75 : 60 = 1,25, czyli wzrost o 125%"
    },
    "okReason": "1",
    "sol": [
     "Różnica: [[75 − 60 = 15 zł]]. Dzielimy przez starą cenę: [[15 : 60 = 0,25 = 25%]].",
     "25% to mniej niż 30%, więc nie. Uzasadnienie 2 dzieli przez nową cenę, a 3 myli „ile to procent” z „o ile procent”."
    ],
    "answer": "N, uzasadnienie 1.",
    "tip": "75 zł to 125% ceny 60 zł, ale wzrost to tylko 25%.",
    "check": [
     "15/60 == 0.25"
    ]
   },
   "twin2": {
    "type": "tn",
    "q": "Cena spadła z 400 zł do 340 zł. Czy spadła o więcej niż 15%? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "N",
    "reasons": {
     "1": "cena spadła o 60 zł, a 60 : 400 = 0,15",
     "2": "cena spadła o 60 zł, a 60 : 340 ≈ 0,18",
     "3": "cena spadła o 60 zł, czyli o 60%"
    },
    "okReason": "1",
    "sol": [
     "[[60 : 400 = 0,15 = 15%]]. Dokładnie 15%, a nie więcej. Nie."
    ],
    "answer": "N, uzasadnienie 1.",
    "tip": "„Więcej niż 15%” to nie „równo 15%”.",
    "check": [
     "F(60, 400) == F('0.15')"
    ]
   }
  },
  {
   "id": "b11",
   "level": 2,
   "skills": [
    "S1",
    "S3"
   ],
   "type": "abcd",
   "q": "Z 800 zł oszczędności Tomek wydał 136 zł. Jaki procent oszczędności wydał?",
   "opts": [
    "13,6%",
    "136%",
    "17%",
    "1,7%"
   ],
   "ok": 2,
   "why": {
    "A": "13,6 to 136 : 10. Trzeba podzielić przez całość, czyli przez 800.",
    "B": "136 to kwota w złotych, a nie procent.",
    "D": "0,17 to 17%, a nie 1,7%. Przecinek przesuwamy o dwa miejsca w prawo."
   },
   "sol": [
    "Dzielimy część przez całość: [[136 : 800 = 0,17]].",
    "Zamieniamy na procent, przesuwając przecinek o dwa miejsca w prawo: [[0,17 = 17%]]."
   ],
   "answer": "C, 17%.",
   "tip": "136 : 800 łatwiej policzyć, skracając: 136/800 = 17/100.",
   "check": [
    "136/800 == 0.17"
   ],
   "twin": {
    "type": "abcd",
    "q": "Z 250 zł kieszonkowego Julka wydała 45 zł. Jaki procent kieszonkowego wydała?",
    "opts": [
     "45%",
     "5,5%",
     "18%",
     "1,8%"
    ],
    "ok": 2,
    "why": {
     "A": "45 to kwota w złotych, a nie procent.",
     "B": "Około 5,5 wychodzi z 250 : 45. Dzielenie jest odwrócone.",
     "D": "0,18 to 18%, a nie 1,8%."
    },
    "sol": [
     "[[45 : 250 = 0,18]], a 0,18 to 18%.",
     "Albo tak: mnożymy licznik i mianownik przez 2, czyli 45/250 = 90/500, a potem dzielimy przez 5: 18/100 = 18%."
    ],
    "answer": "C, 18%.",
    "tip": "Część dzielisz przez całość, nigdy odwrotnie.",
    "check": [
     "45/250 == 0.18"
    ]
   },
   "twin2": {
    "type": "abcd",
    "q": "Z 600 zł oszczędności Marta wydała 78 zł. Jaki procent oszczędności wydała?",
    "opts": [
     "13%",
     "7,8%",
     "78%",
     "1,3%"
    ],
    "ok": 0,
    "why": {
     "B": "7,8 to 78 : 10. Dzielisz przez całość, 600.",
     "C": "78 to kwota w złotych.",
     "D": "0,13 to 13%, a nie 1,3%."
    },
    "sol": [
     "[[78 : 600 = 0,13 = 13%]]."
    ],
    "answer": "A, 13%.",
    "tip": "1% z 600 to 6 zł, a 78 : 6 = 13.",
    "check": [
     "F(78, 600) == F('0.13')"
    ]
   }
  },
  {
   "id": "b12",
   "level": 2,
   "skills": [
    "S8",
    "S4"
   ],
   "type": "fields",
   "q": "Kasia wydała 20% swoich oszczędności na książki, a potem 25% pozostałej kwoty na bilet na koncert. Zostało jej 180 zł. Ile pieniędzy miała na początku?",
   "note": "Obliczenia zapisz na kartce, a tutaj wpisz wynik.",
   "fields": [
    {
     "label": "Kasia miała na początku",
     "ans": 300,
     "unit": "zł",
     "show": "300 zł",
     "why": [
      [
       327.27272727272725,
       "Nie dodawaj 20% i 25%. 25% liczono od reszty: zostaje 0,8 · 0,75 = 0,6 kwoty, więc 180 : 0,6 = 300."
      ]
     ]
    }
   ],
   "sol": [
    "Pułapka: 25% liczy się od tego, co zostało po książkach, a nie od wszystkich oszczędności. Nie wolno dodać 20% + 25%.",
    "Po książkach zostało 80%, czyli [[0,8x]]. Z tego wydała 25%, więc zostało 75% reszty: [[0,75 · 0,8x = 0,6x]].",
    "Zostało 180 zł: [[0,6x = 180]], więc [[x = 180 : 0,6 = 300]].",
    "Sprawdzenie: 20% z 300 to 60, zostaje 240. 25% z 240 to 60, zostaje 180. Zgadza się!"
   ],
   "answer": "300 zł.",
   "tip": "Gdy procent liczy się od „pozostałej kwoty”, licz po kolei, ile zostaje.",
   "check": [
    "abs(300*0.8*0.75 - 180) < 1e-9"
   ],
   "twin": {
    "type": "fields",
    "q": "Tomek wydał 25% oszczędności na grę, a potem 40% pozostałej kwoty na słuchawki. Zostało mu 90 zł. Ile miał na początku?",
    "note": "Obliczenia zapisz na kartce, a tutaj wpisz wynik.",
    "fields": [
     {
      "label": "Tomek miał na początku",
      "ans": 200,
      "unit": "zł",
      "show": "200 zł"
     }
    ],
    "sol": [
     "Po grze zostało 75%: [[0,75x]]. Na słuchawki poszło 40% reszty, więc zostało 60% reszty: [[0,6 · 0,75x = 0,45x]].",
     "[[0,45x = 90]], więc [[x = 90 : 0,45 = 200]].",
     "Sprawdzenie: 25% z 200 to 50, zostaje 150. 40% ze 150 to 60, zostaje 90."
    ],
    "answer": "200 zł.",
    "tip": "Zapisuj, jaki procent ZOSTAJE po każdym wydatku, i mnóż te procenty.",
    "check": [
     "abs(200*0.75*0.6 - 90) < 1e-9"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Ola wydała 25% oszczędności na grę, a potem 20% pozostałej kwoty na książkę. Zostało jej 240 zł. Ile pieniędzy miała na początku?",
    "note": "Obliczenia zapisz na kartce, a tutaj wpisz wynik.",
    "fields": [
     {
      "label": "Na początku",
      "ans": 400,
      "unit": "zł",
      "show": "400 zł",
      "why": [
       [
        436.3636363636363,
        "Nie dodawaj procentów. Zostaje 0,75 · 0,8 = 0,6 kwoty."
       ]
      ]
     }
    ],
    "sol": [
     "Zostaje [[0,75 · 0,8 = 0,6]] kwoty.",
     "[[240 : 0,6 = 400 zł]]. Sprawdzenie: 400 → 300 → 240."
    ],
    "answer": "400 zł.",
    "tip": "Mnóż części, które zostają.",
    "check": [
     "400 * F('0.75') * F('0.8') == 240"
    ]
   }
  },
  {
   "id": "b13",
   "level": 2,
   "skills": [
    "S10"
   ],
   "type": "fields",
   "q": "Bilet ulgowy jest o 40% tańszy od normalnego. Za 2 bilety normalne i 5 ulgowych zapłacono 150 zł. Ile kosztuje bilet normalny, a ile ulgowy?",
   "note": "Obliczenia zapisz na kartce, a tutaj wpisz wyniki.",
   "fields": [
    {
     "label": "Bilet normalny",
     "ans": 30,
     "unit": "zł",
     "show": "30 zł",
     "why": [
      [
       37.5,
       "Tańszy o 40% to 0,6x, a nie 0,4x: 2x + 5 · 0,6x = 5x = 150."
      ]
     ]
    },
    {
     "label": "Bilet ulgowy",
     "ans": 18,
     "unit": "zł",
     "show": "18 zł"
    }
   ],
   "sol": [
    "Bilet normalny: x. Ulgowy jest o 40% tańszy, więc kosztuje [[0,6x]].",
    "Równanie: [[2x + 5 · 0,6x = 150]], czyli 2x + 3x = 150, więc [[5x = 150]] i x = 30.",
    "Bilet ulgowy: [[0,6 · 30 = 18 zł]]. Sprawdzenie: 2 · 30 + 5 · 18 = 60 + 90 = 150."
   ],
   "answer": "Normalny 30 zł, ulgowy 18 zł.",
   "tip": "Tańszy o 40% to 0,6x, a nie 0,4x.",
   "check": [
    "2*30 + 5*18 == 150",
    "abs(0.6*30 - 18) < 1e-9"
   ],
   "twin": {
    "type": "fields",
    "q": "Bilet ulgowy jest o 25% tańszy od normalnego. Za 3 bilety normalne i 4 ulgowe zapłacono 120 zł. Ile kosztuje bilet normalny, a ile ulgowy?",
    "note": "Obliczenia zapisz na kartce, a tutaj wpisz wyniki.",
    "fields": [
     {
      "label": "Bilet normalny",
      "ans": 20,
      "unit": "zł",
      "show": "20 zł"
     },
     {
      "label": "Bilet ulgowy",
      "ans": 15,
      "unit": "zł",
      "show": "15 zł"
     }
    ],
    "sol": [
     "Normalny: x, ulgowy: [[0,75x]].",
     "[[3x + 4 · 0,75x = 120]], czyli 3x + 3x = 6x = 120, więc x = 20.",
     "Ulgowy: [[0,75 · 20 = 15 zł]]. Sprawdzenie: 60 + 60 = 120."
    ],
    "answer": "Normalny 20 zł, ulgowy 15 zł.",
    "tip": "Sprawdź wynik, podstawiając go do treści zadania.",
    "check": [
     "3*20 + 4*15 == 120"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Bilet ulgowy jest o 50% tańszy od normalnego. Za 3 bilety normalne i 2 ulgowe zapłacono 80 zł. Ile kosztuje bilet normalny, a ile ulgowy?",
    "note": "Obliczenia zapisz na kartce, a tutaj wpisz wyniki.",
    "fields": [
     {
      "label": "Bilet normalny",
      "ans": 20,
      "unit": "zł",
      "show": "20 zł"
     },
     {
      "label": "Bilet ulgowy",
      "ans": 10,
      "unit": "zł",
      "show": "10 zł"
     }
    ],
    "sol": [
     "Normalny: x, ulgowy: 0,5x. [[3x + 2 · 0,5x = 4x = 80]], więc x = 20.",
     "Ulgowy: [[10 zł]]. Sprawdzenie: 60 + 20 = 80."
    ],
    "answer": "Normalny 20 zł, ulgowy 10 zł.",
    "tip": "Tak wyglądało zadanie 18 w informatorze CKE.",
    "check": [
     "3*20 + 2*10 == 80"
    ]
   }
  },
  {
   "id": "c2",
   "level": 3,
   "skills": [
    "S5",
    "S6"
   ],
   "type": "self",
   "q": "Sklep kupił rower za 1 200 zł i ustalił cenę sprzedaży o 25% wyższą. Później obniżył cenę sprzedaży o 10%. Ile złotych sklep zarobi na sprzedaży tego roweru po obniżce? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono cenę sprzedaży przed obniżką: 1 200 · 1,25 = 1 500 zł.",
     "pts": 1
    },
    {
     "t": "Obliczono cenę po obniżce: 1 500 · 0,9 = 1 350 zł.",
     "pts": 1
    },
    {
     "t": "Obliczono zarobek: 1 350 − 1 200 = 150 zł.",
     "pts": 1
    }
   ],
   "sol": [
    "<b>Cena sprzedaży:</b> o 25% wyższa niż 1 200 zł: [[1 200 · 1,25 = 1 500 zł]].",
    "<b>Po obniżce o 10%</b> od 1 500 zł: [[1 500 · 0,9 = 1 350 zł]].",
    "<b>Zarobek</b> to różnica między ceną sprzedaży a ceną zakupu: [[1 350 − 1 200 = 150 zł]]."
   ],
   "answer": "Sklep zarobi 150 zł.",
   "tip": "Podpisuj każdy krok (cena sprzedaży, cena po obniżce, zarobek). Egzaminator przyznaje punkt za każdy dobry krok.",
   "check": [
    "1200*1.25 == 1500",
    "abs(1500*0.9 - 1350) < 1e-9",
    "1350 - 1200 == 150"
   ]
  },
  {
   "id": "c10",
   "level": 3,
   "skills": [
    "S10"
   ],
   "type": "pair",
   "q": "W pudełku jest 30 kulek: 12 czerwonych, a reszta niebieskie. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "Aby czerwone kulki stanowiły 50% wszystkich kulek w pudełku, trzeba dołożyć … czerwonych kulek.",
     "opts": {
      "A": "6",
      "B": "3"
     },
     "ok": "A"
    },
    {
     "label": "Aby czerwone kulki stanowiły 25% wszystkich kulek, trzeba wyjąć czerwonych kulek…",
     "opts": {
      "C": "mniej niż 5",
      "D": "więcej niż 5"
     },
     "ok": "D"
    }
   ],
   "sol": [
    "<b>Dokładanie.</b> Dokładamy x czerwonych: czerwonych jest 12 + x, a wszystkich 30 + x. [[12 + x = 0,5 · (30 + x)]], czyli 12 + x = 15 + 0,5x, więc 0,5x = 3 i [[x = 6]]. Sprawdzenie: 18 z 36 to połowa.",
    "<b>Wyjmowanie.</b> Wyjmujemy x czerwonych: czerwonych jest 12 − x, a wszystkich 30 − x. [[12 − x = 0,25 · (30 − x)]], czyli 12 − x = 7,5 − 0,25x, więc 4,5 = 0,75x i [[x = 6]]. To więcej niż 5. Sprawdzenie: 6 z 24 to ćwierć."
   ],
   "answer": "A i D.",
   "tip": "Zamiast równania możesz sprawdzać kolejne liczby: wyjmij 5, potem 6 i licz, jaki to procent. Ważne, żeby sprawdzić wszystkie warunki.",
   "check": [
    "(12+6) == 0.5*(30+6)",
    "(12-6) == 0.25*(30-6)"
   ],
   "twin": {
    "type": "pair",
    "q": "W pudełku jest 40 kulek: 16 czerwonych, a reszta niebieskie. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Aby czerwone kulki stanowiły 50% wszystkich kulek, trzeba dołożyć … czerwonych kulek.",
      "opts": {
       "A": "4",
       "B": "8"
      },
      "ok": "B"
     },
     {
      "label": "Aby czerwone kulki stanowiły 25% wszystkich kulek, trzeba wyjąć czerwonych kulek…",
      "opts": {
       "C": "mniej niż 10",
       "D": "więcej niż 10"
      },
      "ok": "C"
     }
    ],
    "sol": [
     "<b>Dokładanie:</b> [[16 + x = 0,5 · (40 + x)]], więc 16 + x = 20 + 0,5x i [[x = 8]]. Sprawdzenie: 24 z 48 to połowa.",
     "<b>Wyjmowanie:</b> [[16 − x = 0,25 · (40 − x)]], więc 16 − x = 10 − 0,25x, 6 = 0,75x i [[x = 8]], czyli mniej niż 10. Sprawdzenie: 8 z 32 to ćwierć."
    ],
    "answer": "B i C.",
    "tip": "Pamiętaj, że wyjmując kulki, zmniejszasz też liczbę wszystkich kulek.",
    "check": [
     "(16+8) == 0.5*(40+8)",
     "(16-8) == 0.25*(40-8)"
    ]
   },
   "twin2": {
    "type": "pair",
    "q": "W pudełku jest 36 kulek: 12 czerwonych, a reszta niebieskie. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
    "parts": [
     {
      "label": "Aby czerwone kulki stanowiły 50% wszystkich kulek, trzeba dołożyć … czerwonych kulek.",
      "opts": {
       "A": "12",
       "B": "6"
      },
      "ok": "A"
     },
     {
      "label": "Aby czerwone kulki stanowiły 20% wszystkich kulek, trzeba wyjąć czerwonych kulek…",
      "opts": {
       "C": "mniej niż 5",
       "D": "więcej niż 5"
      },
      "ok": "D"
     }
    ],
    "sol": [
     "[[12 + x = 0,5 · (36 + x)]] → x = 12. Sprawdzenie: 24 z 48.",
     "[[12 − x = 0,2 · (36 − x)]] → 4,8 = 0,8x → x = 6. Sprawdzenie: 6 z 30 = 20%."
    ],
    "answer": "A i D.",
    "tip": "Zmienia się też liczba wszystkich kulek.",
    "check": [
     "(12+12) == F(1, 2)*(36+12)",
     "(12-6) == F(1, 5)*(36-6)"
    ]
   }
  },
  {
   "id": "c7",
   "level": 3,
   "skills": [
    "S7"
   ],
   "type": "tn",
   "q": "Czy liczba 60 jest o 50% większa od liczby 40? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
   "ok": "T",
   "reasons": {
    "1": "60 − 40 = 20, a 20 : 40 = 0,5",
    "2": "60 − 40 = 20, a 20 : 60 ≈ 0,33",
    "3": "60 : 40 = 1,5, czyli 150%"
   },
   "okReason": "1",
   "sol": [
    "Różnica: [[60 − 40 = 20]]. Porównujemy z liczbą 40 (stoi po słowie „od”), więc dzielimy przez 40: [[20 : 40 = 0,5 = 50%]].",
    "Tak, 60 jest o 50% większe od 40. Uzasadnienie 3 mówi, ile procent liczby 40 stanowi 60, a to inne pytanie."
   ],
   "answer": "T, uzasadnienie 1.",
   "tip": "„O ile procent większa od X”: dziel różnicę przez X.",
   "check": [
    "(60-40)/40 == 0.5"
   ],
   "twin": {
    "type": "tn",
    "q": "Czy liczba 30 jest o 25% mniejsza od liczby 40? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "T",
    "reasons": {
     "1": "40 − 30 = 10, a 10 : 30 ≈ 0,33",
     "2": "40 − 30 = 10, a 10 : 40 = 0,25",
     "3": "30 : 40 = 0,75, czyli 75%"
    },
    "okReason": "2",
    "sol": [
     "Różnica: [[40 − 30 = 10]]. Porównujemy z 40, więc [[10 : 40 = 0,25 = 25%]]. Tak."
    ],
    "answer": "T, uzasadnienie 2.",
    "tip": "Uzasadnienie 3 jest prawdziwe, ale odpowiada na inne pytanie.",
    "check": [
     "10/40 == 0.25"
    ]
   },
   "twin2": {
    "type": "tn",
    "q": "Czy liczba 45 jest o 25% mniejsza od liczby 60? Wybierz T albo N i uzasadnienie spośród 1, 2 albo 3.",
    "ok": "T",
    "reasons": {
     "1": "60 − 45 = 15, a 15 : 60 = 0,25",
     "2": "60 − 45 = 15, a 15 : 45 ≈ 0,33",
     "3": "45 : 60 = 0,75, czyli 75%"
    },
    "okReason": "1",
    "sol": [
     "[[15 : 60 = 0,25 = 25%]]. Tak."
    ],
    "answer": "T, uzasadnienie 1.",
    "tip": "Uzasadnienie 3 jest prawdziwe, ale odpowiada na inne pytanie.",
    "check": [
     "F(15, 60) == F('0.25')"
    ]
   }
  },
  {
   "id": "c9",
   "level": 3,
   "skills": [
    "S2",
    "S4"
   ],
   "type": "fields",
   "q": "Solanka (woda z solą) waży 300 g i zawiera 6% soli. a) Ile gramów soli jest w solance? b) Ile gramów czystej wody trzeba dolać, żeby sól stanowiła 4% solanki?",
   "note": "Obliczenia zapisz na kartce, a tutaj wpisz wyniki.",
   "fields": [
    {
     "label": "a) Masa soli",
     "ans": 18,
     "unit": "g",
     "show": "18 g"
    },
    {
     "label": "b) Trzeba dolać wody",
     "ans": 150,
     "unit": "g",
     "show": "150 g",
     "why": [
      [
       100,
       "Soli jest wciąż 18 g. 18 g to 4% nowej masy: 18 : 0,04 = 450 g, więc dolewasz 150 g."
      ],
      [
       450,
       "450 g to masa całej nowej solanki. Dolewasz 450 − 300 = 150 g."
      ]
     ]
    }
   ],
   "sol": [
    "<b>a)</b> 6% z 300 g: 1% to 3 g, więc [[6 · 3 = 18 g]] soli.",
    "<b>b)</b> Soli nadal jest 18 g, ale ma to być tylko 4% nowej solanki. Szukamy całości: [[18 : 0,04 = 1 800 : 4 = 450 g]].",
    "Solanka ma ważyć 450 g, a waży 300 g, więc dolewamy [[450 − 300 = 150 g]] wody. Sprawdzenie: 4% z 450 g to 18 g."
   ],
   "answer": "a) 18 g, b) 150 g wody.",
   "tip": "W zadaniach z mieszaninami najpierw policz, czego jest tyle samo przed i po (tu: soli).",
   "check": [
    "abs(0.06*300 - 18) < 1e-9",
    "abs(18/0.04 - 450) < 1e-9",
    "abs(0.04*450 - 18) < 1e-9"
   ],
   "twin": {
    "type": "fields",
    "q": "Syrop waży 200 g i zawiera 5% cukru. a) Ile gramów cukru jest w syropie? b) Ile gramów wody trzeba dolać, żeby cukier stanowił 2% syropu?",
    "note": "Obliczenia zapisz na kartce, a tutaj wpisz wyniki.",
    "fields": [
     {
      "label": "a) Masa cukru",
      "ans": 10,
      "unit": "g",
      "show": "10 g"
     },
     {
      "label": "b) Trzeba dolać wody",
      "ans": 300,
      "unit": "g",
      "show": "300 g"
     }
    ],
    "sol": [
     "<b>a)</b> 5% z 200 g to [[0,05 · 200 = 10 g]] cukru.",
     "<b>b)</b> 10 g ma być 2% całości: [[10 : 0,02 = 500 g]]. Dolewamy [[500 − 200 = 300 g]] wody. Sprawdzenie: 2% z 500 g to 10 g."
    ],
    "answer": "a) 10 g, b) 300 g wody.",
    "tip": "Dolanie wody nie zmienia ilości cukru, tylko masę całości.",
    "check": [
     "abs(0.05*200 - 10) < 1e-9",
     "abs(10/0.02 - 500) < 1e-9"
    ]
   },
   "twin2": {
    "type": "fields",
    "q": "Sok waży 400 g i zawiera 5% cukru. a) Ile gramów cukru jest w soku? b) Ile gramów wody trzeba dolać, żeby cukier stanowił 4% napoju?",
    "note": "Obliczenia zapisz na kartce, a tutaj wpisz wyniki.",
    "fields": [
     {
      "label": "a) Masa cukru",
      "ans": 20,
      "unit": "g",
      "show": "20 g"
     },
     {
      "label": "b) Trzeba dolać wody",
      "ans": 100,
      "unit": "g",
      "show": "100 g",
      "why": [
       [
        500,
        "500 g to masa całego napoju. Dolewasz 500 − 400 = 100 g."
       ]
      ]
     }
    ],
    "sol": [
     "<b>a)</b> [[5% z 400 = 20 g]].",
     "<b>b)</b> [[20 : 0,04 = 500 g]], dolewamy [[100 g]]."
    ],
    "answer": "a) 20 g, b) 100 g.",
    "tip": "Cukru jest tyle samo przed i po.",
    "check": [
     "F('0.05') * 400 == 20",
     "20 / F('0.04') == 500"
    ]
   }
  },
  {
   "id": "c11",
   "level": 3,
   "skills": [
    "S5",
    "S8"
   ],
   "type": "self",
   "q": "Telewizor kosztował 2 400 zł. W listopadzie jego cenę podniesiono o 15%, a w grudniu nową cenę obniżono o 15%. Czy w grudniu telewizor kosztował mniej niż 2 400 zł? Jeśli tak, to o ile złotych? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono cenę w listopadzie: 2 400 · 1,15 = 2 760 zł.",
     "pts": 1
    },
    {
     "t": "Obliczono cenę w grudniu: 2 760 · 0,85 = 2 346 zł.",
     "pts": 1
    },
    {
     "t": "Zapisano wniosek: taniej o 54 zł.",
     "pts": 1
    }
   ],
   "sol": [
    "Listopad: [[2 400 · 1,15 = 2 760 zł]].",
    "Grudzień: obniżka od 2 760 zł, [[2 760 · 0,85 = 2 346 zł]].",
    "[[2 400 − 2 346 = 54 zł]]. Tak, telewizor kosztował o 54 zł mniej."
   ],
   "answer": "Tak, o 54 zł mniej (2 346 zł).",
   "tip": "Podwyżka i obniżka o ten sam procent zawsze kończą się niższą ceną.",
   "check": [
    "2400 * F('1.15') == 2760",
    "2760 * F('0.85') == 2346"
   ]
  },
  {
   "id": "c12",
   "level": 3,
   "skills": [
    "S3",
    "S2"
   ],
   "type": "self",
   "q": "W bibliotece było 800 książek, z czego 20% stanowiły komiksy. Dokupiono 200 komiksów. Jaki procent wszystkich książek stanowią teraz komiksy? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono liczbę komiksów przed (160) i po (360) oraz liczbę wszystkich książek po zakupie (1 000).",
     "pts": 1
    },
    {
     "t": "Obliczono procent: 360 : 1 000 = 36%.",
     "pts": 1
    }
   ],
   "sol": [
    "Komiksy przed: [[20% z 800 = 160]]. Po zakupie: [[160 + 200 = 360]]. Wszystkich: [[800 + 200 = 1 000]].",
    "[[360 : 1 000 = 0,36 = 36%]]."
   ],
   "answer": "36%.",
   "tip": "Dokupione komiksy zwiększają też liczbę wszystkich książek.",
   "check": [
    "F('0.2') * 800 == 160",
    "F(360, 1000) == F('0.36')"
   ]
  }
 ],
 "test": [
  {
   "id": "t1",
   "skills": [
    "S1"
   ],
   "type": "abcd",
   "q": "Liczba 0,08 zapisana w procentach to:",
   "opts": [
    "0,08%",
    "80%",
    "800%",
    "8%"
   ],
   "ok": 3,
   "why": {
    "A": "Nie pomnożono przez 100. 0,08 to 8 setnych, czyli 8%.",
    "B": "80% to 0,8. Przecinek przesunięto o jedno miejsce za mało.",
    "C": "800% to 8. Przecinek przesunięto za daleko."
   },
   "sol": [
    "Mnożymy przez 100, czyli przesuwamy przecinek o dwa miejsca w prawo: [[0,08 = 8%]]."
   ],
   "answer": "D, 8%.",
   "tip": "0,08 to 8 setnych, a setna część to 1%.",
   "check": [
    "0.08*100 == 8"
   ],
   "pts": 1
  },
  {
   "id": "t2",
   "skills": [
    "S2"
   ],
   "type": "abcd",
   "q": "15% liczby 60 to:",
   "opts": [
    "4",
    "9",
    "6",
    "15"
   ],
   "ok": 1,
   "why": {
    "A": "4 to 60 : 15. Zamiast procentu wykonano dzielenie.",
    "C": "6 to tylko 10% z 60. Brakuje jeszcze 5%.",
    "D": "15 to sama liczba procentów."
   },
   "sol": [
    "10% z 60 to 6, a 5% to połowa, czyli 3. Razem [[6 + 3 = 9]]."
   ],
   "answer": "B, 9.",
   "tip": "15% = 10% + 5%.",
   "check": [
    "abs(0.15*60 - 9) < 1e-9",
    "60/15 == 4"
   ],
   "pts": 1
  },
  {
   "id": "t3",
   "skills": [
    "S3"
   ],
   "type": "abcd",
   "q": "Kuba odpowiedział dobrze na 34 z 40 pytań. Jaki procent pytań rozwiązał dobrze?",
   "opts": [
    "34%",
    "85%",
    "6%",
    "15%"
   ],
   "ok": 1,
   "why": {
    "A": "34 to liczba dobrych odpowiedzi, a nie procent.",
    "C": "6 to liczba złych odpowiedzi.",
    "D": "15% to procent złych odpowiedzi, a pytanie jest o dobre."
   },
   "sol": [
    "[[34 : 40 = 0,85 = 85%]]. Albo rozszerzamy: 34/40 = 85/100."
   ],
   "answer": "B, 85%.",
   "tip": "Sprawdź, czy pytają o dobre, czy o złe odpowiedzi.",
   "check": [
    "34/40 == 0.85"
   ],
   "pts": 1
  },
  {
   "id": "t4",
   "skills": [
    "S7"
   ],
   "type": "abcd",
   "q": "Cena biletu wzrosła z 40 zł do 46 zł. O ile procent wzrosła cena?",
   "opts": [
    "6%",
    "13%",
    "115%",
    "15%"
   ],
   "ok": 3,
   "why": {
    "A": "Różnica 6 zł to jeszcze nie 6%.",
    "B": "13% to 6 : 46. Podzielono przez nową cenę.",
    "C": "46 to 115% liczby 40, ale wzrost wynosi 15%."
   },
   "sol": [
    "Różnica: [[46 − 40 = 6 zł]]. Dzielimy przez starą cenę: [[6 : 40 = 0,15 = 15%]]."
   ],
   "answer": "D, 15%.",
   "tip": "Wzrost liczymy zawsze od tego, co było na początku.",
   "check": [
    "6/40 == 0.15"
   ],
   "pts": 1
  },
  {
   "id": "t5",
   "skills": [
    "S4"
   ],
   "type": "abcd",
   "q": "Liczba 120 to 80% liczby:",
   "opts": [
    "150",
    "96",
    "144",
    "160"
   ],
   "ok": 0,
   "why": {
    "B": "96 to 80% ze 120. Szukasz całości, więc trzeba dzielić.",
    "C": "144 to 120 + 20%. Tak nie cofa się procentu.",
    "D": "160 to 120 : 0,75. Podzielono przez 75% zamiast przez 80%."
   },
   "sol": [
    "[[0,8 · x = 120]], więc [[x = 120 : 0,8 = 1 200 : 8 = 150]]. Sprawdzenie: 80% ze 150 to 120."
   ],
   "answer": "A, 150.",
   "tip": "Znasz część i procent? Dziel.",
   "check": [
    "abs(120/0.8 - 150) < 1e-9",
    "0.8*120 == 96",
    "abs(120/0.75 - 160) < 1e-9"
   ],
   "pts": 1
  },
  {
   "id": "t6",
   "skills": [
    "S2",
    "S8"
   ],
   "type": "pf",
   "q": "Oceń prawdziwość zdań. Wybierz P, jeśli zdanie jest prawdziwe, albo F, jeśli jest fałszywe.",
   "items": [
    {
     "t": "50% liczby 30 to 15.",
     "ok": "P"
    },
    {
     "t": "Jeśli cenę obniżymy o 50%, a potem podniesiemy o 50%, wróci ona do początkowej wartości.",
     "ok": "F"
    }
   ],
   "sol": [
    "<b>Zdanie 1.</b> Połowa z 30 to 15. Prawda.",
    "<b>Zdanie 2.</b> 100 zł → 50 zł → 75 zł. Podwyżka liczy się od 50 zł, więc cena nie wraca. Fałsz."
   ],
   "answer": "P, F.",
   "tip": "Dwie zmiany zawsze sprawdzaj na 100 zł.",
   "check": [
    "100*0.5*1.5 == 75"
   ],
   "pts": 1
  },
  {
   "id": "t7",
   "skills": [
    "S6"
   ],
   "type": "fields",
   "q": "Po obniżce o 30% kurtka kosztuje 147 zł. Ile kosztowała przed obniżką?",
   "fields": [
    {
     "label": "Cena przed obniżką",
     "ans": 210,
     "unit": "zł",
     "show": "210 zł"
    }
   ],
   "sol": [
    "Po obniżce zostało 70% starej ceny: [[0,7 · x = 147]].",
    "[[x = 147 : 0,7 = 1 470 : 7 = 210]]. Sprawdzenie: 30% z 210 to 63, a 210 − 63 = 147."
   ],
   "answer": "210 zł.",
   "tip": "Nie licz 30% ze 147! Procent liczono od starej ceny.",
   "check": [
    "abs(147/0.7 - 210) < 1e-9"
   ],
   "pts": 1
  },
  {
   "id": "t8",
   "skills": [
    "S9",
    "S3",
    "S7"
   ],
   "type": "pair",
   "chart": {
    "kind": "cols",
    "min": 0,
    "max": 100,
    "step": 10,
    "ylabel": "zł",
    "rows": [
     [
      "styczeń",
      40
     ],
     [
      "luty",
      50
     ],
     [
      "marzec",
      60
     ],
     [
      "kwiecień",
      90
     ]
    ],
    "alt": "Diagram słupkowy: styczeń 40 zł, luty 50 zł, marzec 60 zł, kwiecień 90 zł"
   },
   "q": "Hulajnoga kosztuje 240 zł. Diagram pokazuje, ile Olek odkładał na nią w kolejnych miesiącach. Uzupełnij zdania. Wybierz odpowiedź spośród A i B oraz odpowiedź spośród C i D.",
   "parts": [
    {
     "label": "W styczniu i lutym łącznie Olek odłożył … ceny hulajnogi.",
     "opts": {
      "A": "37,5%",
      "B": "40%"
     },
     "ok": "A"
    },
    {
     "label": "W marcu Olek odłożył kwotę o … większą niż w styczniu.",
     "opts": {
      "C": "20%",
      "D": "50%"
     },
     "ok": "D"
    }
   ],
   "sol": [
    "Odczytujemy: styczeń 40 zł, luty 50 zł, marzec 60 zł.",
    "Styczeń i luty: [[40 + 50 = 90 zł]], a [[90 : 240 = 0,375 = 37,5%]].",
    "Marzec a styczeń: różnica [[60 − 40 = 20 zł]], a [[20 : 40 = 0,5 = 50%]]. Odpowiedź C myli 20 zł z 20%."
   ],
   "answer": "A i D.",
   "tip": "Różnicę w złotych zamień na procent, dzieląc przez kwotę, z którą porównujesz.",
   "check": [
    "90/240 == 0.375",
    "20/40 == 0.5"
   ],
   "pts": 1
  },
  {
   "id": "t9",
   "skills": [
    "S5",
    "S8",
    "S7"
   ],
   "type": "fields",
   "pts": 3,
   "perField": true,
   "q": "Rower kosztował 1 500 zł. W marcu jego cena wzrosła o 10%, a w maju nową cenę obniżono o 20%.",
   "note": "Każdy dobry wynik to 1 punkt.",
   "fields": [
    {
     "label": "Cena w marcu",
     "ans": 1650,
     "unit": "zł",
     "show": "1 650 zł"
    },
    {
     "label": "Cena w maju",
     "ans": 1320,
     "unit": "zł",
     "show": "1 320 zł"
    },
    {
     "label": "O ile procent rower jest w maju tańszy niż na początku?",
     "ans": 12,
     "unit": "%",
     "show": "12%"
    }
   ],
   "sol": [
    "<b>Marzec:</b> 10% z 1 500 to 150, więc [[1 500 + 150 = 1 650 zł]].",
    "<b>Maj:</b> 20% z 1 650 to 330, więc [[1 650 − 330 = 1 320 zł]].",
    "<b>Porównanie z początkiem:</b> taniej o [[1 500 − 1 320 = 180 zł]], a [[180 : 1 500 = 0,12 = 12%]]."
   ],
   "answer": "1 650 zł, 1 320 zł, tańszy o 12%.",
   "tip": "Jeśli wyszło Ci 10%, to znaczy, że odjęto procenty (20% − 10%). Tak nie wolno: dwie zmiany liczy się po kolei.",
   "check": [
    "abs(1500*1.1 - 1650) < 1e-9",
    "abs(1650*0.8 - 1320) < 1e-9",
    "abs(180/1500 - 0.12) < 1e-9"
   ]
  },
  {
   "id": "t11",
   "skills": [
    "S10"
   ],
   "type": "abcd",
   "q": "Spodnie kosztują s zł, a koszula k zł. Spodnie przeceniono o 30%, a koszulę o 15%. Które wyrażenie opisuje, ile kosztują razem po przecenie?",
   "opts": [
    "0,3s + 0,15k",
    "0,85s + 0,7k",
    "0,7s + 0,85k",
    "s + k − 45"
   ],
   "ok": 2,
   "why": {
    "A": "To same kwoty przeceny, a nie ceny po przecenie.",
    "B": "Zamieniono mnożniki. Spodnie są tańsze o 30%, więc płacisz 0,7s.",
    "D": "Odjęto 45 zł zamiast policzyć procenty od każdej ceny."
   },
   "sol": [
    "Spodnie: zostaje 70% ceny, czyli [[0,7s]]. Koszula: zostaje 85%, czyli [[0,85k]].",
    "Razem: [[0,7s + 0,85k]]."
   ],
   "answer": "C, 0,7s + 0,85k.",
   "tip": "Sprawdź na liczbach: s = 100 i k = 100 dają 70 + 85 = 155 zł.",
   "check": [
    "abs(0.7*100 + 0.85*100 - 155) < 1e-9"
   ],
   "pts": 1
  },
  {
   "id": "t10",
   "skills": [
    "S5"
   ],
   "type": "self",
   "q": "W sklepie A laptop kosztuje 2 500 zł, a w sklepie B 2 400 zł. Sklep A daje rabat 8%, a sklep B rabat 3%. W którym sklepie laptop będzie tańszy i o ile złotych? Zapisz obliczenia.",
   "criteria": [
    {
     "t": "Obliczono obie ceny po rabacie: w sklepie A 2 300 zł, w sklepie B 2 328 zł.",
     "pts": 1
    },
    {
     "t": "Zapisano wniosek: taniej w sklepie A, o 28 zł.",
     "pts": 1
    }
   ],
   "sol": [
    "<b>Sklep A:</b> 8% z 2 500 zł to 200 zł, więc [[2 500 − 200 = 2 300 zł]].",
    "<b>Sklep B:</b> 3% z 2 400 zł to 72 zł, więc [[2 400 − 72 = 2 328 zł]].",
    "Taniej jest w sklepie A, o [[2 328 − 2 300 = 28 zł]]."
   ],
   "answer": "Taniej w sklepie A, o 28 zł.",
   "tip": "W zadaniu otwartym zawsze napisz wniosek, który odpowiada na pytanie z zadania.",
   "check": [
    "abs(2500*0.92 - 2300) < 1e-9",
    "abs(2400*0.97 - 2328) < 1e-9"
   ],
   "pts": 2
  }
 ],
 "test_minutes": 35,
 "pass": 12,
 "dzial": "Dział 1: Liczby i działania"
};
