# REWIR — plan pierwszego serwera CS2

Wersja robocza. To plan przygotowania i testów; serwer nie jest jeszcze instalowany ani uruchomiony.

## Pierwszy cel

Pierwszą edycję REWIR uruchomić jako **Mirage RPG** z limitem **20 graczy**, na zimowej mapie Mirage. Gracze zdobywają XP i rozwijają statystyki, w tym szybkostrzelność. Surf RPG Combat zostaje odłożony na później; pozostałe tryby również są planami kolejnych edycji.

## Mapa pierwszej edycji — zimowy Mirage

Kandydat: **`de_mirage_christmas`** — zimowy wariant Mirage dostępny w Workshop dla CS2. [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3620635379). Wyszukiwany i używany też pod nazwami „Winter Mirage”/„Mirage Christmas”; nie mylić z dawną kartą `Mirage Winter`, która ma starsze oznaczenia niezgodności.

Pierwsza edycja ma zachować rozpoznawalną rozgrywkę Mirage i dodać progresję RPG. Limit pozostaje **20 graczy**. Przed wyborem mapy na start sprawdzić w Workshop/serwerze testowym: czy pobieranie i ładowanie działa na aktualnym CS2, czy wszystkie punkty startowe i obszary mapy są poprawne oraz jak zachowuje się wydajność przy większej liczbie graczy.

### Założenia progresji do ustalenia

- XP za grę i poziomy postaci.
- Punkty ulepszeń rozwijają szybkostrzelność, szybkość postaci, szybkość przeładowania, grawitację, obrażenia i HP; limity rang są rozpisane w [LEVELING_SYSTEM.md](LEVELING_SYSTEM.md).
- Friendly fire wyłączony.
- Przed startem przetestować balans wszystkich statystyk, by progresja nie dawała niekontrolowanej przewagi na Mirage.
- Surf oraz specjalne tryby odłożyć do osobnego etapu; zapisane wcześniej obserwacje dotyczące broni na mapach Surf zostają materiałem na później.


## Co można zrobić bez kupowania hostingu

1. Ustalić zasady pierwszej edycji: mapę zimowy Mirage, limit 20 graczy, rundy, balans broni i progresję RPG.
2. Przygotować listę plików konfiguracyjnych oraz szkic mechanik RPG i progresji.
3. Uruchomić prywatny serwer testowy na dostępnej maszynie, jeśli jej zasoby i sieć na to pozwolą. To nadaje się do nauki i testów; stabilny publiczny serwer wymaga stałej dostępności, łącza i utrzymania.
4. Dopiero po uzyskaniu działającego serwera dobrać framework pluginów i tworzyć mechaniki etapami.

## Proponowana kolejność prac

### Etap 1 — specyfikacja rozgrywki

- [ ] Potwierdzić działanie mapy `de_mirage_christmas` na aktualnym CS2.
- [x] Ustalić limit graczy na 20.
- [ ] Ustalić długość rund, respawn i zasady walki na Mirage RPG.
- [x] Przygotować roboczy system XP do poziomu 100, nagrody za akcje, kary za śmierć i krzywą poziomów: [LEVELING_SYSTEM.md](LEVELING_SYSTEM.md).
- [x] Rozpisać sześć statystyk tak, by 99 punktów zdobywanych za levelowanie wystarczało na wymaksowanie wszystkich do poziomu 100.
- [ ] Przetestować tempo levelowania, progi XP i limity statystyk na serwerze testowym.
- [ ] Przetestować balans ulepszeń RPG, progi zabicia, HP, skoki i przeładowania.
- [ ] Ustalić, które elementy są dostępne dla wszystkich, VIP i SVIP.

### Etap 2 — lokalny serwer testowy

- [ ] Ustalić, na jakim systemie operacyjnym będzie działał serwer testowy.
- [ ] Sprawdzić wolne miejsce, pamięć, procesor, stabilność łącza i możliwość połączeń przychodzących.
- [ ] Zainstalować serwer narzędziem SteamCMD według aktualnej dokumentacji Valve i uruchomić go prywatnie.
- [ ] Sprawdzić połączenie z gry, zmianę mapy, restart i zachowanie po aktualizacji CS2.

### Etap 3 — framework i pierwsze mechaniki

- [ ] Zweryfikować aktualną zgodność wersji Metamod:Source 2.x i CounterStrikeSharp z aktualnym buildem serwera.
- [ ] Wdrożyć najpierw mały, testowy plugin oraz sprawdzić logi po restarcie i aktualizacji gry.
- [ ] Dodać progresję XP i poziomów, następnie kredyty i zapis danych.
- [ ] Później dodać korzyści VIP/SVIP oraz bezpieczne nadawanie ich po potwierdzeniu zamówienia.

## Zakres aktualnej oferty

Modele postaci są wyłączone z pierwszej edycji oraz z benefitów SVIP i sklepu za kredyty. Nie wdrażać ich na serwerze. Powrót do tematu wymaga osobnej decyzji i wcześniejszego potwierdzenia zgodności z zasadami Valve oraz ryzyka dla tokena serwera.

## Ustalenia REWIR do uwzględnienia

- Każdy poziom daje 1 punkt ulepszenia.
- Każdy poziom daje 1 punkt ulepszenia; 100 kredytów można wymienić na 1 punkt doświadczenia.
- Kredyty mają nie wygasać.
- VIP: strzykawka lecząca +50 HP i podwójny skok.
- SVIP: korzyści VIP, spadochron i podwójne kredyty.
- Zakupy VIP/SVIP/kredytów będą przypisane do SteamID.

## Decyzje otwarte

- System operacyjny i maszyna do testów; czy serwer ma być dostępny tylko lokalnie, dla znajomych czy publicznie.
- Pierwsza mapa Surf, tryb rund i balans (limit 20 graczy ustalony).
- Wzór naliczania XP, progi leveli, dostępne statystyki, limity i reset sezonu.
- Czy dane testowe będą w SQLite czy innym magazynie oraz jak robić ich kopie zapasowe.
- Skąd legalnie pozyskać mapy, modele i pozostałe zasoby.
- Dokładne warunki zakończenia serwera i działania pakietów bezterminowych.

## Uwaga techniczna

Dokumentacja CounterStrikeSharp wskazuje, że wymaga on Metamod:Source jako warstwy komunikacji z serwerem. Kompatybilność trzeba sprawdzać ponownie po aktualizacjach CS2, bo aktualizacje mogą wymagać nowych wersji frameworka lub pluginów.

Referencje: [CounterStrikeSharp — Getting Started](https://docs.cssharp.dev/docs/guides/getting-started.html), [Valve Developer Community — Counter-Strike 2 Dedicated Servers](https://developer.valvesoftware.com/wiki/Counter-Strike_2/Dedicated_Servers).
