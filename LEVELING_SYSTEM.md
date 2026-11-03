# REWIR RPG — system doświadczenia i levelowania

Wersja robocza do pierwszej edycji Mirage RPG. Wartości można dostroić po testach, ale wzór zapewnia jasny limit 100 poziomów i umiarkowanie rosnące wymagania.

## Nagrody i kary XP

| Zdarzenie | XP | Warunek |
| --- | ---: | --- |
| Zabicie przeciwnika | +20 | Tylko prawdziwy gracz z drużyny przeciwnej; bez botów i samobójstw. |
| Asysta | +5 | Gracz zadał przeciwnikowi co najmniej 20 obrażeń w ciągu 10 sekund przed śmiercią. |
| Podłożenie bomby | +15 | Bomba została skutecznie podłożona; nagrodę dostaje podkładający. |
| Rozbrojenie bomby | +30 | Rozbrojenie zakończone powodzeniem; nagrodę dostaje rozbrajający. |
| Wygrana runda | +10 | Każdy gracz drużyny, który uczestniczył w rundzie. |
| MVP rundy | +10 | Gracz wskazany jako MVP przez serwer; raz za rundę. |
| Śmierć | −3 | Jedna kara za śmierć, niezależnie od źródła. |
| Samobójstwo | −10 łącznie | Zastępuje zwykłą karę za śmierć; nie sumuje się z −3 XP. |

Friendly fire jest wyłączony, więc gracze nie zadają obrażeń członkom własnej drużyny i nie ma nagrody ani kary XP za teamkill. Nagrody za akcje w jednej rundzie sumują się. XP nie jest przyznawane za obrażenia, samą obecność na serwerze ani eliminacje botów. Kary zmniejszają wyłącznie postęp w aktualnym poziomie: XP nie spada poniżej progu tego poziomu, a gracz nigdy nie traci już zdobytego levela.

## Wymagany XP na kolejny poziom

Dla obecnego poziomu `L`, gdzie `1 ≤ L < 100`, XP potrzebne do awansu wynosi:

```text
XP(L → L+1) = zaokrąglij(100 + 10 × (L−1) + 0,04 × (L−1)²)
```

Wymagania rosną płynnie: początkowe poziomy wpadają szybko, a późniejsze wymagają coraz większej liczby meczów, bez skoku trudności w jednym konkretnym miejscu. Poziom 100 jest maksymalny; dalsze XP nie podnosi poziomu.

| Poziom | XP do następnego | Łączny XP potrzebny do osiągnięcia poziomu |
| ---: | ---: | ---: |
| 1 | 100 | 0 |
| 10 | 193 | 1 268 |
| 25 | 363 | 5 333 |
| 50 | 686 | 18 181 |
| 75 | 1 059 | 39 704 |
| 90 | 1 307 | 57 302 |
| 99 | 1 464 | 69 688 |
| 100 | — | 71 152 |

## Punkty ulepszeń i kredyty

- Start: poziom 1 i 0 XP.
- Każdy awans o poziom daje 1 punkt ulepszenia. Awans z poziomu 1 na 100 daje łącznie 99 punktów.
- Planowany przelicznik sklepu: 100 kredytów = 1 punkt doświadczenia. XP kupione za kredyty zwiększa postęp do poziomu; sam kredyt nie daje bezpośrednio punktu ulepszenia.
- Jeden punkt ulepszenia podnosi rangę jednej wybranej statystyki o 1. Maksymalne rangi wszystkich sześciu statystyk sumują się do 99, więc gracz może wymaksować je wszystkie dokładnie po dojściu do poziomu 100.

## Statystyki postaci

Rangi można rozwijać w dowolnej kolejności. Każda statystyka ma własny limit rangi i równomiernie rośnie do limitu końcowego.

| Statystyka | Limit rangi | Bonus za rangę | Maksymalny efekt |
| --- | ---: | ---: | ---: |
| Szybkostrzelność | 16 | +1/16 bazowej szybkostrzelności | Maksymalnie 2× bazowa szybkostrzelność. |
| Szybkość postaci | 16 | +0,5% bazowej prędkości | Maksymalna prędkość ruchu większa o 8% (bez zmiany w tej aktualizacji). |
| Szybkość przeładowania | 17 | +0,5/17 mnożnika szybkości | Maksymalnie 1,5× bazowa szybkość przeładowania (czas przeładowania = czas bazowy ÷ mnożnik). |
| Grawitacja | 16 | −1/32 bazowej grawitacji | Grawitacja spada do 0,5×; cel to około 2× wysokości skoku przy niezmienionej sile wybicia. |
| Obrażenia | 17 | +1/17 bazowych obrażeń | Maksymalnie 2× bazowe obrażenia od pocisków. Nie zwiększa obrażeń od granatów ani środowiska. |
| Zdrowie | 17 | równy przyrost do limitu | Maksymalnie 250 HP zamiast bazowych 100. Przyrost na rangę wynosi około 8–9 HP. |

Łączny limit rang to **99 punktów** (16 + 16 + 17 + 16 + 17 + 17). Tym samym każdy awans dostarcza dokładnie tyle punktów, ile potrzeba do wymaksowania wszystkich sześciu statystyk na levelu 100.

Wartość zdrowia wyliczać równomiernie między 100 a 250 HP (np. `100 + zaokrąglenie(150 × ranga / 17)`); po awansie maksymalne HP wzrasta, ale bieżące HP nie jest leczone. Bonusy do szybkostrzelności, przeładowania i obrażeń liczyć od nieulepszonej wartości danej broni, tak by końcowy mnożnik zawsze osiągał dokładnie wskazany cap. Szybkostrzelność nie skraca przeładowania, szybkość ruchu nie zmienia grawitacji, a bonus do obrażeń nie obejmuje granatów. Efekty należy testować na każdej klasie broni i w sytuacjach skrajnych, zwłaszcza progach zabicia, skokach na Mirage i reloadzie strzelb ładowanych pojedynczymi nabojami.

### Uwaga techniczna przed implementacją

Dokumentacja CounterStrikeSharp pokazuje pola związane z maksymalną prędkością ruchu, skalą grawitacji, cyklem strzału i stanem/prędkością animacji broni ([ruch](https://docs.cssharp.dev/api/CounterStrikeSharp.API.Core.CPlayer_MovementServices.html), [grawitacja](https://docs.cssharp.dev/api/CounterStrikeSharp.API.Core.CBaseEntity.html), [cykl strzału](https://docs.cssharp.dev/api/CounterStrikeSharp.API.Core.CCSWeaponBaseVData.html), [stan broni i animacji](https://docs.cssharp.dev/api/CounterStrikeSharp.API.Core.CCSWeaponBase.html)). Sama obecność tych pól w API nie potwierdza, że modyfikacja będzie bezpieczna i per-player. Szczególnie przeładowanie musi zostać zmierzone w grze — przyspieszenie animacji nie może być uznane za krótszy czas przeładowania, jeśli broń nadal nie może strzelać. Przed produkcyjnym wdrożeniem zrobić prototyp każdej statystyki na prywatnym serwerze i sprawdzić efekt dla obu drużyn oraz po śmierci, respawnie, zmianie broni i rundy.
- Przy zwykłej grze zakładamy orientacyjnie około 200–300 XP na 20-minutową sesję. Osiągnięcie 100 poziomu powinno zająć około 80–120 godzin aktywnej gry bez kupowania XP. Rzeczywisty czas zależy od wyników, trybu i długości sesji.

## Zasady naliczania

1. XP przyznawać po stronie serwera na podstawie zdarzeń gry; klient strony nie może sam ustalać ani wysyłać sobie nagród.
2. Każde zdarzenie nagradzać tylko raz. Asysty przypisywać do maksymalnie jednego kill-eventu i nie wypłacać za samą obecność przy eliminacji.
3. Śmierć i samobójstwo rozpoznawać osobno, żeby kara nie naliczyła się podwójnie; friendly fire pozostaje wyłączony.
4. Zachować całkowity XP gracza w bazie, a przy wyliczaniu poziomu używać progów z tego dokumentu. Zmiana mapy lub restart nie może usuwać postępu.
5. Zapisywać historię zdarzeń XP z typem zdarzenia, graczem, rundą i wartością, aby dało się wykryć błędy i skorygować saldo.
6. Limit poziomu wynosi 100; na poziomie 100 nie przyznawać kolejnych punktów ulepszeń z levelowania.

## Test balansu przed startem

- Sprawdzić średnie XP na rundę i 20-minutową sesję przy słabym, przeciętnym i bardzo dobrym wyniku.
- Sprawdzić, czy śmierć nie sprawia, że gracz po słabym meczu czuje, że stracił postęp; kara jest ograniczona do bieżącego poziomu.
- Sprawdzić kolejno nagrody za kill, asystę, plant, defuse, round win, MVP, śmierć i samobójstwo; potwierdzić, że friendly fire jest wyłączony.
- Sprawdzić limity wszystkich sześciu statystyk i ich łączny wpływ w pojedynkach przed startem.
