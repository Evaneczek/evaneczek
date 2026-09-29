# Do zrobienia później

- [ ] **Piksel Meta:** założyć Piksel w Events Manager (business.facebook.com), numer wpisać w Railway jako `META_PIXEL_ID`. Kod na stronie jest gotowy (zgoda na cookies, zdarzenia: rozpoczęcie płatności, logowanie, zakup).
- [ ] **Poczta:** w Cloudflare (Email → Email Routing) przekierować `kontakt@liczenasetke.pl` na `liczenasetke@gmail.com` i sprawdzić, czy dochodzi.
- [ ] **Dane sprzedawcy** (imię i nazwisko albo nazwa firmy, adres, ewentualnie NIP) dopisać w regulaminie (pkt 1) i polityce prywatności (pkt 1), gdy będą gotowe. Przy sprzedaży przez internet klient musi wiedzieć, kto sprzedaje.
- [ ] **Dzień startu:** zdjąć blokadę wyszukiwarek. Gotowe do przełączenia jednym poleceniem: `PUBLICZNA=1 python3 pakuj.py` (strony bez noindex, robots.txt z mapą strony `sitemap.xml`; panel rodzica, logowanie i 404 zawsze poza wyszukiwarką). Potem dodać stronę w Google Search Console.
- [ ] **Stripe:** w Public details ustawić nazwę, stronę i opis na wyciągu; w Customer emails włączyć „Successful payments”.
- [ ] **Resend:** przy większej liczbie rodziców przejść na płatny plan (darmowy: 100 maili dziennie).
- [ ] **Opinie:** przychodzą mailem na liczenasetke@gmail.com (temat „Nowa opinia”). Po zebraniu co najmniej 10 z zgodą na publikację dopisać je na stronie opinii.
