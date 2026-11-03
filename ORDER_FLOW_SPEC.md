# REWIR — specyfikacja realizacji zamówień (wersja robocza)

Dokument opisuje docelowy przepływ zakupów. To plan, nie działająca integracja. Sklep, płatności i serwery nie są jeszcze połączone.

## Przepływ zakupu

1. Kupujący wybiera produkt i podaje SteamID. Przed startem trzeba zdecydować, jak sprawdzimy, że SteamID należy do kupującego i jak ograniczymy literówki.
2. Backend sklepu pobiera cenę i szczegóły produktu z własnego katalogu. Przeglądarka nie może sama ustalać kwoty ani rodzaju nadawanego produktu.
3. Backend tworzy zamówienie ze statusem `pending`, trwałym ID zamówienia, SteamID, pozycjami i zapisaną kopią ceny/warunków z chwili zakupu.
4. Backend tworzy płatność u operatora. Powrót kupującego na stronę „sukces” nie jest potwierdzeniem zapłaty.
5. Backend weryfikuje powiadomienie operatora (podpis/uwierzytelnienie i status płatności; w razie potrzeby odpytuje API operatora). Dopiero potwierdzona płatność może uruchomić realizację.
6. Realizacja trafia do kolejki z unikalnym kluczem zamówienia. System nadaje produkt przez kontrolowany interfejs serwera CS2, czeka na potwierdzenie i zapisuje wynik.
7. Jeśli serwer jest niedostępny lub nadanie nie powiedzie się, zamówienie pozostaje do ponowienia. Ponowienie nie może podwoić kredytów ani czasu VIP/SVIP.
8. Kupujący widzi status zamówienia i ma kontakt do obsługi. Zdarzenia płatności, nadania, ponowień i zwrotów są rejestrowane.

## Zasady produktów do wdrożenia

- **VIP/SVIP czasowe:** aktywacja po potwierdzeniu płatności; okres w UTC, początek i koniec zapisane jawnie. Pakiety nie odnawiają się automatycznie — gracz kupuje kolejny okres samodzielnie. Robocza decyzja: ponowny zakup tego samego pakietu dodaje okres do pozostałego czasu.
- **VIP/SVIP bezterminowe:** osobne uprawnienie bez daty wygaśnięcia, z warunkami działania usługi opisanymi przed sprzedażą.
- **Kredyty:** dopisanie dokładnie raz do salda SteamID. Saldo powinno wynikać z niezmiennego rejestru operacji (zakup, wydanie, korekta), a nie z polecenia z przeglądarki.
- **Korzyści:** korzyści VIP/SVIP wynikają z aktywnego uprawnienia. SVIP obejmuje korzyści VIP, spadochron i podwójne kredyty; nie obejmuje modeli postaci.
- **Doświadczenie za kredyty:** sklep i serwer muszą wspólnie sprawdzić saldo oraz wykonać wymianę atomowo, aby nie można było wydać tych samych kredytów dwa razy. Roboczy przelicznik: 100 kredytów za 1 punkt doświadczenia.

## Minimalne statusy zamówienia

`pending` → `paid` → `fulfillment_pending` → `fulfilled`

Dodatkowe stany: `payment_failed`, `fulfillment_retry`, `refunded`, `disputed`, `cancelled`. Zmiany statusu muszą być idempotentne — ponowne powiadomienie operatora nie może tworzyć kolejnej nagrody.

## Bezpieczeństwo i obsługa

- Klucze PayU/BLIK i sekret integracji serwerowej przechowywać tylko po stronie backendu jako sekrety środowiskowe; nigdy w kodzie strony ani repozytorium.
- Ograniczyć endpoint nadawania do backendu sklepu (uwierzytelnienie, podpis/sekret rotowalny, ograniczenie ruchu, walidacja produktu i SteamID).
- Nie udostępniać endpointu, który przyjmuje od klienta dowolną kwotę, komendę serwera lub liczbę kredytów.
- Przechowywać tylko dane niezbędne do realizacji i obsługi zamówień; określić okresy przechowywania oraz dostęp administracyjny.
- Przy zwrocie, sporze płatniczym lub korekcie mieć procedurę zgodną z prawami kupującego. Nie usuwać automatycznie należnych praw przez samą techniczną możliwość odebrania produktu.
- Wykonać testy operatora i serwera na środowisku testowym: duplikat webhooka, błędny podpis, opóźnione potwierdzenie, wyłączony serwer, ponowienie nadania, zły SteamID, zwrot/spór.

## Decyzje otwarte przed implementacją

- Hosting/backend i baza zamówień oraz sposób komunikacji backendu z serwerem CS2.
- Sposób potwierdzenia SteamID kupującego i procedura zmiany błędnie podanego ID.
- Jak traktować zakup SVIP w trakcie aktywnego VIP (i odwrotnie), oraz regułę aktywacji po zakupie offline.
- Polityka przy zamknięciu projektu/serwera oraz sposób obsługi niewykorzystanych kredytów i aktywnych pakietów.
- Progi poziomów, zasady zdobywania doświadczenia i limity statystyk rozwijanych punktami ulepszeń.
- Operator, konfiguracja produkcyjna i treść dokumentów przed przyjmowaniem prawdziwych płatności.
