# Liczę na Setkę: uruchomienie płatności i logowania

Ta paczka to cała strona razem z serwerem. Serwer nie potrzebuje żadnych dodatkowych bibliotek (tylko Node 22), a dane trzyma w pliku bazy na wolumenie Railway.

Kolejność: **1. Stripe → 2. Google → 3. Resend (e-maile) → 4. Railway → 5. próba na trybie testowym → 6. włączenie prawdziwych płatności.**

---

## 1. Stripe

**Zalecenie:** w tym samym logowaniu do Stripe utwórz **nowe konto** (menu z nazwą konta w lewym górnym rogu → „New account”) o nazwie „Liczę na Setkę”. Wtedy nazwa na stronie płatności, opis na wyciągu bankowym klienta i wypłaty są osobne od drugiej strony. Jedno konto dla dwóch stron też zadziała, ale klient zobaczy nazwę tamtej firmy.

Wszystko najpierw w **trybie testowym** (przełącznik „Test mode”).

1. **Produkty** (Product catalog → Add product):
   - „Kurs do dnia egzaminu”: cena **199 PLN, One-off (jednorazowo)**. Skopiuj **ID ceny** (zaczyna się od `price_…`) → to będzie `STRIPE_PRICE_EXAM`.
   - „Kurs miesięcznie”: cena **49 PLN, Recurring, Monthly**. ID ceny → `STRIPE_PRICE_MONTHLY`.
2. **Metody płatności** (Settings → Payment methods): włącz **BLIK**, **Przelewy24**, karty, Apple Pay i Google Pay. (BLIK i Przelewy24 działają przy planie jednorazowym; subskrypcję opłaca się kartą, Apple Pay lub Google Pay).
3. **Portal klienta** (Settings → Billing → Customer portal): włącz „Cancel subscriptions” (anulowanie na koniec okresu) i zapisz. Z portalu rodzic sam wyłącza subskrypcję.
4. **Dane publiczne** (Settings → Business → Public details): nazwa „Liczę na Setkę”, e-mail kontaktowy, adres strony, a w polu **Terms of service** adres `https://liczenasetke.pl/regulamin.html`. Po uzupełnieniu możesz ustawić zmienną `STRIPE_TOS=1`, wtedy w płatności pojawi się pole „akceptuję regulamin”.
5. **Potwierdzenia e-mail** (Settings → Customer emails): włącz „Successful payments”, żeby klient dostawał paragon od Stripe.
6. **Webhook** (Developers → Webhooks → Add endpoint):
   - adres: `https://liczenasetke.pl/api/stripe/webhook`
   - zdarzenia: `checkout.session.completed`, `checkout.session.async_payment_succeeded`, `customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted`, `charge.refunded`
   - skopiuj **Signing secret** (`whsec_…`) → `STRIPE_WEBHOOK_SECRET`.
7. **Klucz API** (Developers → API keys): **Secret key** (`sk_test_…`, później `sk_live_…`) → `STRIPE_SECRET_KEY`. Nikomu go nie wysyłaj; wpisuje się go tylko w Railway.

**Zwrot pieniędzy (gwarancja 14 dni):** w Stripe → Payments → wybierz płatność → „Refund”. Serwer sam wyłączy dostęp. Przy planie miesięcznym dodatkowo anuluj subskrypcję (Customers → klient → subskrypcja → Cancel).

## 2. Logowanie przez Google

1. <https://console.cloud.google.com> → utwórz projekt „Liczę na Setkę”.
2. „APIs & Services” → „OAuth consent screen”: typ **External**, nazwa aplikacji „Liczę na Setkę”, e-mail kontaktowy, domena `liczenasetke.pl`, linki do polityki prywatności i regulaminu. Zakresy: tylko podstawowe (email, profile, openid). Na koniec „Publish app”.
3. „Credentials” → „Create credentials” → „OAuth client ID” → typ **Web application**.
   - Authorized JavaScript origins: `https://liczenasetke.pl` (oraz `https://www.liczenasetke.pl`, jeśli strona działa też z www).
   - Skopiuj **Client ID** (kończy się na `.apps.googleusercontent.com`) → `GOOGLE_CLIENT_ID`. (Client secret nie jest potrzebny).

## 3. E-maile z linkiem do logowania (Resend)

1. Załóż konto na <https://resend.com> (darmowe do 3000 e-maili miesięcznie).
2. Domains → Add domain → `liczenasetke.pl` → dodaj u operatora domeny rekordy DNS, które pokaże Resend (zwykle 3 rekordy: SPF, DKIM, MX). Poczekaj, aż status zmieni się na „Verified”.
3. API Keys → Create → skopiuj klucz (`re_…`) → `RESEND_API_KEY`.
4. `MAIL_FROM`, np. `Liczę na Setkę <kontakt@liczenasetke.pl>`. Odpowiedzi na te maile trafią na ten adres, więc powinna tam działać skrzynka (np. przekierowanie u operatora domeny).

## 4. Railway

1. W projekcie Railway z obecną stroną zamień zawartość usługi na tę paczkę (katalog z `server.js`, `Dockerfile` i `public/`), np. poleceniem `railway up` w rozpakowanym katalogu albo tak, jak wgrywana była dotychczasowa strona.
2. **Wolumen** (prawy przycisk na usłudze → Attach volume): ścieżka montowania **`/data`**. Tam jest baza z kontami i postępami. Bez wolumenu dane znikną przy każdym wdrożeniu.
3. **Zmienne** (Variables):

| Zmienna | Wartość |
|---|---|
| `BASE_URL` | `https://liczenasetke.pl` |
| `STRIPE_SECRET_KEY` | `sk_test_…` (potem `sk_live_…`) |
| `STRIPE_WEBHOOK_SECRET` | `whsec_…` |
| `STRIPE_PRICE_EXAM` | `price_…` (199 zł jednorazowo) |
| `STRIPE_PRICE_MONTHLY` | `price_…` (49 zł miesięcznie) |
| `STRIPE_TOS` | `1` (po wpisaniu regulaminu w Stripe, pkt 1.4) |
| `GOOGLE_CLIENT_ID` | `….apps.googleusercontent.com` |
| `RESEND_API_KEY` | `re_…` |
| `MAIL_FROM` | `Liczę na Setkę <kontakt@liczenasetke.pl>` |

`DB_PATH=/data/dane.db` i port są już ustawione w Dockerfile. **Nie ustawiaj `DEV=1` na produkcji** (to tryb testowy, który pokazuje link logujący na stronie).

## 5. Próba w trybie testowym

1. Wejdź na stronę → Cennik → „Wybieram do egzaminu” → zaloguj się (Google albo link na e-mail).
2. Na stronie płatności Stripe użyj testowej karty `4242 4242 4242 4242`, dowolna przyszła data, dowolny CVC.
3. Po płatności wrócisz do panelu rodzica, a dostęp włączy się w kilka sekund. Sprawdź płatny temat i test startowy.
4. W panelu kliknij „Ustaw nowy PIN” i zaloguj się jako uczeń w innej przeglądarce.
5. W Stripe zrób zwrot tej płatności i sprawdź, że dostęp się wyłączył.
6. To samo dla planu miesięcznego i „Zarządzaj subskrypcją” → anuluj.

## 6. Włączenie prawdziwych płatności

1. W Stripe wyłącz „Test mode”, uzupełnij dane firmy i konto do wypłat (Stripe o to poprosi).
2. Utwórz te same 2 ceny w trybie live oraz nowy webhook (pkt 1.6) i podmień w Railway: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_EXAM`, `STRIPE_PRICE_MONTHLY`.
3. Uzupełnij pola na żółtym tle w regulaminie i polityce prywatności.
4. W dniu startu zdejmij blokadę wyszukiwarek (napisz, a przygotuję paczkę bez niej).

## Kopia zapasowa

Wszystkie konta i postępy są w jednym pliku `/data/dane.db`. Railway pozwala robić kopie wolumenu (Volume → Backups). Warto włączyć automatyczne kopie.
