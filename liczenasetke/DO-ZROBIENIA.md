# Do zrobienia później

- [ ] **Piksel Meta:** założyć Piksel w Events Manager (business.facebook.com), numer wpisać w Railway jako `META_PIXEL_ID`. Kod na stronie jest gotowy (zgoda na cookies, zdarzenia: rozpoczęcie płatności, logowanie, zakup).
- [ ] **Poczta:** przekierowanie w Cloudflare wygląda na ustawione (rekordy MX Cloudflare są w DNS). Wyślij z innej skrzynki mail na `kontakt@liczenasetke.pl` i sprawdź, czy dochodzi na `liczenasetke@gmail.com`.
- [ ] **Dane sprzedawcy** (imię i nazwisko albo nazwa firmy, adres, ewentualnie NIP) dopisać w regulaminie (pkt 1) i polityce prywatności (pkt 1), gdy będą gotowe. Przy sprzedaży przez internet klient musi wiedzieć, kto sprzedaje.
- [ ] **Dzień startu:** zdjąć blokadę wyszukiwarek. Gotowe do przełączenia jednym poleceniem: `PUBLICZNA=1 python3 pakuj.py` (strony bez noindex, robots.txt z mapą strony `sitemap.xml`; panel rodzica, logowanie i 404 zawsze poza wyszukiwarką). Potem dodać stronę w Google Search Console.
- [ ] **Stripe:** w Public details ustawić nazwę, stronę i opis na wyciągu; w Customer emails włączyć „Successful payments”.
- [ ] **Resend:** przy większej liczbie rodziców przejść na płatny plan (darmowy: 100 maili dziennie).
- [ ] **Opinie:** przychodzą mailem na liczenasetke@gmail.com (temat „Nowa opinia”). Po zebraniu co najmniej 10 z zgodą na publikację dopisać je na stronie opinii.
- [ ] **DMARC (maile nie do spamu):** w Cloudflare → DNS → Add record: typ `TXT`, nazwa `_dmarc`, treść `v=DMARC1; p=none; rua=mailto:liczenasetke@gmail.com`.
- [ ] **Serwer w Europie:** Railway → usługa → Settings → Region → „EU West (Amsterdam)”. Teraz serwer stoi w USA (Wirginia), więc każda strona jedzie przez ocean. Przed zmianą zrobić kopię wolumenu.
- [ ] **Kopie bazy:** Railway → wolumen → Backups → włączyć automatyczne kopie (konta i postępy są w jednym pliku).
- [ ] **Powiadomienie o awarii:** darmowe UptimeRobot (uptimerobot.com) → monitor HTTPS na `https://liczenasetke.pl/` z powiadomieniem na e-mail.
