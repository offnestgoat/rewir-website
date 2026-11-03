# REWIR — checklista przed startem

Lista zbiera ustalenia i rzeczy do domknięcia przed uruchomieniem sklepu oraz serwerów. Pozycje oznaczone jako „do ustalenia” nie są jeszcze obietnicą ani gotową konfiguracją.

## Ustalone

- Oficjalny kontakt: `rewircs2kontakt@gmail.com`.
- Planowane płatności: PayU i BLIK.
- Domena: jeszcze nie wybrana.
- Sprzedawcą planujesz być Ty w ramach działalności nierejestrowanej.
- Potwierdziłeś, że nie prowadziłeś działalności gospodarczej w ostatnich 60 miesiącach; pozostałe warunki trzeba zweryfikować przed startem.
- Limit działalności nierejestrowanej w 2026 r. wynosi 10 813,50 zł przychodu należnego na kwartał; trzeba go monitorować.
- Sprzedaż pozostaje wyłączona do czasu przygotowania sklepu i uruchomienia serwerów.

### Planowana oferta sklepu

| Produkt | Warianty |
| --- | --- |
| VIP | 7 dni — 5 zł; 30 dni — 20 zł; na zawsze — 50 zł |
| SVIP | 7 dni — 10 zł; 30 dni — 30 zł; na zawsze — 100 zł |
| Kredyty | 1 000 — 20 zł; 2 000 — 30 zł; 5 000 — 60 zł |

- Kredyty nie wygasają.
- Każdy zdobyty poziom daje 1 punkt ulepszenia.
- 100 kredytów można wymienić na 1 dodatkowy punkt ulepszenia (500 kredytów = 5 punktów).
- Wybrane modele postaci będzie można kupować za kredyty.
- Modele postaci będą dostępne wyłącznie za kredyty; ich ceny nie są jeszcze ustalone.
- VIP, SVIP i kredyty mają być przypisywane do SteamID i nadawane bezpośrednio na serwerze CS2.
- VIP: strzykawka lecząca +50 HP i podwójny skok.
- SVIP: korzyści VIP, spadochron, podwójne kredyty i ekskluzywny model postaci dostępny tylko podczas aktywnego SVIP.
- VIP i SVIP trzeba odnawiać samodzielnie przez kolejny zakup; nie będzie automatycznego odnawiania ani cyklicznych płatności.

## Do przygotowania przed sprzedażą

- [ ] Potwierdzić pozostałe warunki działalności nierejestrowanej i uzupełnić formalne dane sprzedawcy.
- [ ] Przygotować i sprawdzić regulamin, politykę prywatności, zasady reklamacji i informacje o odstąpieniu.
- [ ] Przed sprzedażą pokazać pełne dane sprzedawcy i kontakt wymagany dla wybranej formy sprzedaży (w tym adres przedsiębiorstwa, e-mail i telefon, jeśli mają zastosowanie).
- [ ] Opisać w polityce prywatności aktywne połączenia z Lanyard API, Discord CDN i Google Fonts albo usunąć/zastąpić te integracje; ustalić administratora, podstawy i cele, odbiorców, retencję, prawa osób oraz transfery danych.
- [ ] Dla cyfrowych usług/treści ustalić osobno zasady dostawy, zgodności świadczenia, reklamacji i odstąpienia; nie wyłączać odstąpienia bez spełnienia wymaganych warunków i zgód.
- [ ] Przed zakupem pokazać łączną cenę, zakres i czas działania świadczenia oraz jasny przycisk potwierdzający obowiązek zapłaty.
- [ ] Określić, jak pakiety „na zawsze” będą działać, dopóki serwer jest dostępny, oraz uczciwie uregulować sytuację zakończenia usługi/projektu.
- [ ] Potwierdzić, że ponowny zakup tego samego pakietu dodaje czas do pozostałego okresu; ustalić, jak traktować zakup SVIP podczas VIP i odwrotnie.
- [ ] Ustalić ceny poszczególnych modeli postaci za kredyty.
- [ ] Zaprojektować bezpieczne przypisywanie VIP/SVIP/kredytów do SteamID i procedurę nadawania ich na serwerze CS2.
- [ ] Potwierdzić prawa/licencje do wszystkich grafik, fontów i modeli postaci oraz sposób dozwolonego użycia oznaczeń Counter-Strike/Valve.
- [ ] Potwierdzić PayU/BLIK i przygotować konfigurację płatności bez ujawniania sekretów w kodzie strony.
- [ ] Uzgodnić cenę końcową i treści sklepu przed włączeniem przycisków zakupu.

## Do przygotowania przed uruchomieniem strony produkcyjnej

- [ ] Wybrać domenę i podłączyć ją do Vercel.
- [ ] Uzupełnić adresy serwerów, statusy i informacje o mapach.
- [ ] Sprawdzić działanie odnośników, profilu Discord i czatu społeczności.
- [ ] Opublikować zatwierdzone zmiany strony na GitHubie i potwierdzić wdrożenie Vercel.

## Do przygotowania przy starcie serwerów

- [ ] Wybrać hosting, lokalizację i pojemność serwerów.
- [ ] Skonfigurować planowane tryby: Surf RPG Combat, Only AWP/Bunnyhop/No Recoil, Only Mirage i Jailbreak.
- [ ] Przygotować mapy, ustawienia rozgrywki, model SVIP i sposób naliczania kredytów.
- [ ] Wdrożyć przyznawanie 1 punktu ulepszenia za poziom oraz wymianę 100 kredytów na 1 punkt.
- [ ] Podłączyć status serwerów i ranking do rzeczywistych danych.
- [ ] Przygotować kopie zapasowe, monitoring i procedurę restartu/awarii.
- [ ] Przejść cały zakup w trybie testowym, sprawdzić nadanie produktu i obsługę reklamacji.
- [ ] Włączyć sprzedaż i ogłosić start dopiero po przejściu punktów powyżej.

## Aktualny stan repozytorium

- Produkty, ceny i planowane tryby są przygotowane lokalnie.
- Ostatni push do GitHuba nie zawiera jeszcze najnowszych zmian w cenniku i opisach VIP/SVIP. Opublikować je po wspólnym przeglądzie.
- Formularz zakupowy i integracja płatności nie są aktywne.
