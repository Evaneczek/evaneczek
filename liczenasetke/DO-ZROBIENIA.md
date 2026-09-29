# Do zrobienia później

- [ ] **Piksel Meta:** założyć Piksel w Events Manager (business.facebook.com), numer wpisać w Railway jako `META_PIXEL_ID`. Kod na stronie jest gotowy (zgoda na cookies, zdarzenia: rozpoczęcie płatności, logowanie, zakup).
- [x] **Poczta:** przekierowanie `kontakt@` → `liczenasetke@gmail.com` w Cloudflare ustawione.
- [ ] **Dane sprzedawcy** (imię i nazwisko albo nazwa firmy, adres, ewentualnie NIP) dopisać w regulaminie (pkt 1) i polityce prywatności (pkt 1), gdy będą gotowe. Przy sprzedaży przez internet klient musi wiedzieć, kto sprzedaje.
- [ ] **Dzień startu:** zdjąć blokadę wyszukiwarek. Gotowe do przełączenia jednym poleceniem: `PUBLICZNA=1 python3 pakuj.py` (strony bez noindex, robots.txt z mapą strony `sitemap.xml`; panel rodzica, logowanie i 404 zawsze poza wyszukiwarką). Potem dodać stronę w Google Search Console.
- [ ] **Stripe:** w Public details ustawić nazwę, stronę i opis na wyciągu; w Customer emails włączyć „Successful payments”.
- [ ] **Resend:** przy większej liczbie rodziców przejść na płatny plan (darmowy: 100 maili dziennie).
- [ ] **Opinie:** przychodzą mailem na liczenasetke@gmail.com (temat „Nowa opinia”). Po zebraniu co najmniej 10 z zgodą na publikację dopisać je na stronie opinii.
- [x] **DMARC** ustawiony w Cloudflare.
- [x] **Serwer w Europie** (Railway, EU West).
- [x] **Kopie bazy:** serwer codziennie po 4:00 wysyła spakowaną kopię bazy na `liczenasetke@gmail.com` (temat „Kopia bazy …”). Warto w Gmailu ustawić filtr, który przenosi je do osobnego folderu.
- [ ] **Powiadomienie o awarii:** darmowe UptimeRobot (uptimerobot.com) → monitor HTTPS na `https://liczenasetke.pl/` z powiadomieniem na e-mail.
