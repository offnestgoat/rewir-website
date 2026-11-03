
import { useEffect, useState } from 'react'
import './App.css'

// Uzupełnij ID użytkownika Discord, aby włączyć odczyt obecności przez Lanyard.
const ownerDiscordUserId = '518435705282887721'
const ownerDiscordUrl = `https://discord.com/users/${ownerDiscordUserId}`

function OwnerProfile() {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    if (!ownerDiscordUserId) return undefined

    let active = true
    let controller
    const readPresence = async () => {
      controller?.abort()
      const requestController = new AbortController()
      controller = requestController
      try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${ownerDiscordUserId}`, {
          signal: requestController.signal,
        })
        if (!response.ok) throw new Error('Presence request failed')
        const result = await response.json()
        if (!result?.success || !result?.data?.discord_user) throw new Error('Profile unavailable')
        if (active) setProfile(result.data)
      } catch {
        if (active && !requestController.signal.aborted) {
          setProfile((current) => current
            ? { ...current, discord_status: 'unavailable' }
            : { discord_user: { username: 'offnest' }, discord_status: 'unavailable', activities: [] })
        }
      }
    }

    readPresence()
    const interval = window.setInterval(readPresence, 60_000)
    return () => {
      active = false
      controller?.abort()
      window.clearInterval(interval)
    }
  }, [])

  const status = ['online', 'idle', 'dnd', 'offline'].includes(profile?.discord_status)
    ? profile.discord_status
    : 'unavailable'
  const labels = {
    online: 'ONLINE',
    idle: 'ZARAZ WRACAM',
    dnd: 'NIE PRZESZKADZAĆ',
    offline: 'OFFLINE',
    unavailable: 'STATUS NIEDOSTĘPNY',
  }

  const user = profile?.discord_user
  const avatarHash = user?.avatar
  const avatarUrl = avatarHash
    ? `https://cdn.discordapp.com/avatars/${ownerDiscordUserId}/${avatarHash}.${avatarHash.startsWith('a_') ? 'gif' : 'png'}?size=256`
    : null
  const activities = profile?.activities || []
  const customStatus = activities.find((activity) => activity.type === 4 && activity.state)
  const currentActivity = activities.find((activity) => activity.type === 0 || activity.type === 2)
  const activityText = currentActivity?.type === 2 && profile?.spotify
    ? `Słucha: ${profile.spotify.song} — ${profile.spotify.artist}`
    : currentActivity
      ? [currentActivity.name, currentActivity.details].filter(Boolean).join(' · ')
      : null

  return (
    <>
      <div className="owner-card">
        <div className="owner-avatar-wrap">
          <div className="owner-avatar-fallback" aria-hidden="true">O</div>
          {avatarUrl && <img className="owner-avatar" src={avatarUrl} alt="Avatar Discord OFFNEST" />}
          <span className={`owner-avatar-status presence-${status}`} aria-label={labels[status]} />
        </div>
        <div className="owner-details">
          <span className="owner-label">PROFIL DISCORD</span>
          <strong>{user?.global_name || user?.display_name || user?.username || 'OFFNEST'}</strong>
          <span className="owner-username">@{user?.username || 'offnest'}</span>
          <span className={`owner-presence presence-${status}`} aria-live="polite"><i /> {labels[status]}</span>
          {customStatus && <span className="owner-custom-status">{customStatus.emoji?.name ? `${customStatus.emoji.name} ` : ''}{customStatus.state}</span>}
          {activityText && <span className="owner-activity">{activityText}</span>}
        </div>
        <a className="owner-link" href={ownerDiscordUrl} target="_blank" rel="noopener noreferrer">
          OTWÓRZ PROFIL <span>↗</span>
        </a>
      </div>
      {!profile && <p className="owner-profile-note">Ładowanie danych profilu Discord…</p>}
    </>
  )
}

function App() {
  return (
    <div className="site">
      <nav className="navbar">
        <a href="#" className="brand">REWIR</a>

        <div className="nav-links">
          <a href="#serwery">SERWERY</a>
          <a href="#tryby">TRYBY GRY</a>
          <a href="#ranking">RANKING</a>
          <a href="#sklep">SKLEP</a>
          <a href="#pomoc">POMOC</a>
          <a href="#owner">OWNER</a>
          <a href="#czat">CZAT</a>
        </div>

        <a className="discord" href="https://discord.gg/7qH4gbWED" target="_blank" rel="noopener noreferrer">
          DISCORD <span>↗</span>
        </a>
      </nav>

      <main className="hero">
        <div className="hero-texture" />
        <div className="hero-content">
          <div className="hero-tag">
            <span className="live-dot" />
            POLSKA SIEĆ SERWERÓW CS2
          </div>

                  <h1 className="hero-title">
            WEJDŹ DO
            <span>REWIRU</span>
          </h1>

          <p className="description">
            Wskocz do gry. Rozwijaj swoją postać.
            <br />
            Zbuduj swoją pozycję i zapisz się w historii REWIRU.
          </p>

          <div className="buttons">
            <a href="#serwery" className="primary">
              POZNAJ NASZE SERWERY <span>→</span>
            </a>
            <a href="#czat" className="secondary">
              DOŁĄCZ DO SPOŁECZNOŚCI
            </a>
          </div>
        </div>

        <div className="hero-side">
          <span>01</span>
          <div />
          <span>REWIR / CS2</span>
        </div>

        <div className="hero-bottom">
          <span>EST. 2026</span>
          <span>COMMUNITY • COMPETITION • PROGRESSION</span>
        </div>
      </main>

      <main className="content-grid">
        <section id="serwery" className="section servers-section">
          <div className="servers-heading">
            <div>
              <p className="eyebrow">PIERWSZY SERWER REWIR</p>
              <h2>NASZE SERWERY</h2>
            </div>
            <span className="network-status"><i /> SIEĆ REWIR</span>
          </div>

          <div className="launch-banner">
            <span className="launch-kicker"><i /> PIERWSZA EDYCJA REWIR</span>
            <h3>RPG NA <span>ZIMOWYM MIRAGE</span></h3>
            <p>Tu zacznie się pierwsza odsłona REWIR. Walcz, zdobywaj doświadczenie i rozwijaj swoją postać.</p>
            <span className="launch-map">MAPA <b>DE_MIRAGE_CHRISTMAS</b></span>
          </div>

          <article className="server-card server-featured">
            <div className="server-card-topline">
              <span className="server-index">SERWER 01 <b>/</b> CS2</span>
              <span className="status"><i /> W PRZYGOTOWANIU</span>
            </div>
            <div className="server-main">
              <div>
                <h3>MIRAGE <span>RPG</span></h3>
                <p>Znana mapa w zimowej odsłonie. Rozwijaj postać i ulepszaj statystyki, w tym szybkostrzelność.</p>
              </div>
              <span className="server-number">01</span>
            </div>
            <div className="server-details">
              <div><span>TRYB</span><strong>MIRAGE • RPG • PROGRESJA</strong></div>
              <div><span>MAPA STARTOWA</span><strong>DE_MIRAGE_CHRISTMAS</strong></div>
              <div><span>ADRES SERWERA</span><strong>OGŁOSIMY PRZED STARTEM</strong></div>
            </div>
            <div className="server-card-footer">
              <span><i /> SERWER NIE JEST JESZCZE URUCHOMIONY</span>
              <a href="https://discord.gg/7qH4gbWED" target="_blank" rel="noopener noreferrer">POWIADOMIENIA NA DISCORD <b>↗</b></a>
            </div>
          </article>
          <p className="servers-note">Adres IP i dokładny termin startu podamy przed uruchomieniem serwera.</p>
        </section>

        <section id="tryby" className="section">
          <p className="eyebrow">POZNAJ MOŻLIWOŚCI REWIRU</p>
          <h2>TRYBY ROZGRYWKI</h2>

          <div className="modes-grid">
            {[
              {
                number: '01',
                title: 'MIRAGE RPG',
                description: 'Pierwsza edycja REWIR. Walcz na zimowym Mirage, zdobywaj doświadczenie i rozwijaj statystyki.',
                status: 'PIERWSZA EDYCJA • W PRZYGOTOWANIU',
                featured: true,
              },
              {
                number: '02',
                title: 'SURF RPG COMBAT',
                description: 'Tryb surf z walką i rozwojem postaci — planowany na kolejną odsłonę.',
                status: 'W PLANACH',
              },
              {
                number: '03',
                title: 'ONLY AWP • BUNNYHOP • NO RECOIL',
                description: 'Osobny serwer z AWP, bunnyhopem i rozgrywką bez odrzutu.',
                status: 'W PLANACH',
              },
              {
                number: '04',
                title: 'ONLY MIRAGE / JAILBREAK',
                description: 'Kolejne tryby, które rozważymy po uruchomieniu pierwszej edycji.',
                status: 'W PLANACH',
              },
            ].map((mode) => (
              <article className={`mode-card${mode.number === '03' ? ' mode-card-long' : ''}${mode.featured ? ' mode-card-featured' : ''}`} key={mode.number}>
                <span className="mode-number">{mode.number} / {mode.featured ? 'PIERWSZY SERWER' : 'KOLEJNE EDYCJE'}</span>
                <h3>{mode.title}</h3>
                <p>{mode.description}</p>
                <span className="mode-status">{mode.status}</span>
              </article>
            ))}
          </div>

          <div className="xp-panel" aria-label="Planowana punktacja doświadczenia">
            <div className="xp-panel-heading">
              <div>
                <span>PIERWSZA EDYCJA • MIRAGE RPG</span>
                <h3>JAK ZDOBYWASZ XP</h3>
              </div>
              <strong>MAX LEVEL <b>100</b></strong>
            </div>
            <div className="xp-rewards">
              <div><span>ZABICIE</span><strong>+20 XP</strong></div>
              <div><span>ASYSTA</span><strong>+5 XP</strong></div>
              <div><span>PLANT BOMBY</span><strong>+15 XP</strong></div>
              <div><span>ROZBROJENIE</span><strong>+30 XP</strong></div>
              <div><span>WYGRANA RUNDA</span><strong>+10 XP</strong></div>
              <div><span>MVP RUNDY</span><strong>+10 XP</strong></div>
              <div className="xp-penalty"><span>ŚMIERĆ</span><strong>−3 XP</strong></div>
            </div>
            <p>
              Koszt poziomu rośnie stopniowo: od 100 XP na początku do 1 464 XP przy awansie na level 100.
              Śmierć nie odbiera zdobytego poziomu, a friendly fire jest wyłączony. Planowany przelicznik: 100 kredytów = 1 XP.
            </p>
            <div className="skill-panel-heading">
              <span>ROZWIJAJ POSTAĆ PUNKTAMI ULEPSZEŃ</span>
              <b>WSZYSTKIE SKILLE MAX NA 100 LVL</b>
            </div>
            <div className="skill-grid">
              <div><span>SZYBKOSTRZELNOŚĆ <i>MAX 16</i></span><strong>+6,25% / PUNKT <b>MAX 2×</b></strong></div>
              <div><span>SZYBKOŚĆ POSTACI <i>MAX 16</i></span><strong>+0,5% / PUNKT <b>MAX +8%</b></strong></div>
              <div><span>SZYBKOŚĆ PRZEŁADOWANIA <i>MAX 17</i></span><strong>+0,03× SZYBKOŚCI / PKT <b>MAX 1,5×</b></strong></div>
              <div><span>GRAWITACJA <i>MAX 16</i></span><strong>−3,125% / PUNKT <b>MAX 2× SKOK</b></strong></div>
              <div><span>OBRAŻENIA <i>MAX 17</i></span><strong>+5,88% / PUNKT <b>MAX 2×</b></strong></div>
              <div><span>ZDROWIE <i>MAX 17</i></span><strong>+8–9 HP / PUNKT <b>MAX 250 HP</b></strong></div>
            </div>
            <p className="skill-panel-note">99 punktów zdobywanych za awanse wystarczy, by wymaksować wszystkie sześć statystyk. Wartości są planem do testów balansu przed startem.</p>
          </div>
        </section>

        <section id="ranking" className="section">
          <p className="eyebrow">WALCZ O SWOJĄ POZYCJĘ</p>
          <h2>RANKING GRACZY</h2>

          <div className="ranking-preview">
            <div className="ranking-preview-mark" aria-hidden="true">#</div>
            <div className="ranking-preview-copy">
              <span className="ranking-preview-status"><i /> RANKING WKRÓTCE</span>
              <h3>ZGARNIJ SWOJE MIEJSCE</h3>
              <p>Wyniki i statystyki pojawią się po starcie serwera REWIR.</p>
            </div>
            <a className="ranking-preview-link" href="#czat">ŚLEDŹ AKTUALNOŚCI <span>↗</span></a>
          </div>
        </section>

        <section id="sklep" className="section">
          <p className="eyebrow">TWOJA ROZGRYWKA, TWOJE MOŻLIWOŚCI</p>
          <h2>SKLEP REWIR</h2>
          <p className="section-description">
            Planowany cennik dodatków do serwerów REWIR. Sprzedaż nie jest jeszcze aktywna.
          </p>

          <div className="shop-grid">
            <div className="shop-card">
              <span className="shop-label">PRZYWILEJE</span>
              <h3>VIP</h3>
              <p>Strzykawka lecząca +50 HP oraz podwójny skok.</p>
              <div className="shop-prices">
                {[
                  ['7 DNI', '5 zł'],
                  ['30 DNI', '20 zł'],
                  ['NA ZAWSZE', '50 zł'],
                ].map(([term, price]) => (
                  <div className="shop-price-row" key={term}><span>{term}</span><strong>{price}</strong></div>
                ))}
              </div>
            </div>

            <div className="shop-card">
              <span className="shop-label">PREMIUM</span>
              <h3>SVIP</h3>
              <p>
                Zawiera korzyści VIP: strzykawkę +50 HP i podwójny skok. Dodatkowo
                spadochron i podwójne kredyty.
              </p>
              <div className="shop-prices">
                {[
                  ['7 DNI', '10 zł'],
                  ['30 DNI', '30 zł'],
                  ['NA ZAWSZE', '100 zł'],
                ].map(([term, price]) => (
                  <div className="shop-price-row" key={term}><span>{term}</span><strong>{price}</strong></div>
                ))}
              </div>
            </div>

            <div className="shop-card">
              <span className="shop-label">WALUTA GRY</span>
              <h3>KREDYTY</h3>
              <p>
                Wymieniaj kredyty na punkty doświadczenia, zdobywaj poziomy i rozwijaj postać.
                100 kredytów daje 1 punkt doświadczenia. Kredyty nie wygasają.
              </p>
              <div className="shop-prices">
                {[
                  ['1 000 KREDYTÓW', '20 zł'],
                  ['2 000 KREDYTÓW', '30 zł'],
                  ['5 000 KREDYTÓW', '60 zł'],
                ].map(([amount, price]) => (
                  <div className="shop-price-row" key={amount}><span>{amount}</span><strong>{price}</strong></div>
                ))}
              </div>
            </div>
          </div>

          <div className="info-panel">
            <h3>INFORMACJE O ZAKUPACH</h3>
            <p>
              Sprzedaż nie została jeszcze uruchomiona. Powyższy cennik jest planowany
              i może zostać doprecyzowany przed startem sklepu.
            </p>
            <p>
              Planowany operator płatności: PayU, z możliwością płatności BLIK.
              Metody płatności będą dostępne po uruchomieniu integracji.
            </p>
            <p>
              VIP i SVIP będą oferowane jako zakupy jednorazowe na wybrany
              okres i przypisywane do podanego SteamID, a następnie nadawane
              bezpośrednio na serwerze CS2. Bez automatycznego odnawiania.
            </p>
            <p>
              Planowane pakiety VIP i SVIP „NA ZAWSZE” mają działać bezterminowo, dopóki
              serwer REWIR będzie dostępny. Warunki na wypadek zakończenia działania serwera
              lub projektu zostaną jasno określone przed sprzedażą. Kredyty mają nie wygasać,
              a 100 kredytów będzie można wymienić na 1 punkt doświadczenia.
            </p>
          </div>
        </section>
      </main>

      <section id="owner" className="owner-section">
        <div className="owner-copy">
          <p className="eyebrow">POZNAJ OSOBĘ ZA PROJEKTEM</p>
          <h2>OWNER <span>REWIRU</span></h2>
          <p className="section-description">
            Profil OFFNEST pobierany bezpośrednio z Discorda.
          </p>
        </div>
        <OwnerProfile />
      </section>

      <section id="czat" className="discord-section chat-section">
        <p className="eyebrow">ROZMOWY ZE SPOŁECZNOŚCIĄ</p>
        <h2>CZAT OGÓLNY REWIR</h2>
        <p className="section-description">
          Dołącz do rozmowy, poznaj graczy i śledź aktualności. Czat społeczności znajdziesz na naszym Discordzie.
        </p>
        <a className="primary" href="https://discord.gg/7qH4gbWED" target="_blank" rel="noopener noreferrer">
          DOŁĄCZ DO CZATU NA DISCORDZIE <span>↗</span>
        </a>
      </section>

      <section id="pomoc" className="section help-section">
        <p className="eyebrow">POTRZEBUJESZ POMOCY?</p>
        <h2>INFORMACJE I POMOC</h2>

        <div className="help-grid">
          <article className="help-card">
            <h3>REKLAMACJE</h3>
            <p>
              Jeśli zakup nie został zrealizowany, produkt nie działa
              prawidłowo lub wystąpił problem z płatnością, skontaktuj się
              z nami. Opisz problem i podaj numer zamówienia, jeśli go posiadasz.
            </p>
            <a href="mailto:rewircs2kontakt@gmail.com?subject=Reklamacja%20REWIR">
              ZGŁOŚ REKLAMACJĘ →
            </a>
          </article>

          <article className="help-card">
            <h3>ZWROTY I ODSTĄPIENIE</h3>
            <p>
              Konsumentom przysługują prawa wynikające z obowiązujących
              przepisów. Możliwość odstąpienia od umowy dotyczącej treści
              lub usług cyfrowych zależy od rodzaju świadczenia i spełnienia
              ustawowych warunków.
            </p>
            <a href="mailto:rewircs2kontakt@gmail.com?subject=Odstapienie%20od%20umowy%20REWIR">
              SKONTAKTUJ SIĘ →
            </a>
          </article>

          <article className="help-card">
            <h3>PŁATNOŚCI</h3>
            <p>
              Płatności nie są jeszcze aktywne. Po uruchomieniu sklepu
              informacje o operatorze, dostępnych metodach i statusie
              zamówienia będą dostępne w tej sekcji.
            </p>
            <a href="mailto:rewircs2kontakt@gmail.com?subject=Platnosc%20REWIR">
              PROBLEM Z PŁATNOŚCIĄ →
            </a>
          </article>

          <article className="help-card">
            <h3>KONTAKT</h3>
            <p>
              Masz pytanie dotyczące serwerów, konta lub sklepu?
              Napisz do nas na oficjalny adres kontaktowy.
            </p>
            <a href="mailto:rewircs2kontakt@gmail.com">
              REWIRCS2KONTAKT@GMAIL.COM →
            </a>
          </article>
        </div>

        <div className="info-panel">
          <h3>JAK ZGŁOSIĆ PROBLEM?</h3>
          <p>
            W wiadomości opisz, czego dotyczy sprawa. W przypadku zamówienia
            podaj jego numer, nazwę produktu, datę zakupu i SteamID lub nazwę
            konta REWIR. Możesz dołączyć potwierdzenie płatności po usunięciu
            danych wrażliwych.
          </p>
          <p>
            Nigdy nie wysyłaj nam hasła, kodu Steam Guard, danych logowania
            do banku ani pełnego numeru karty płatniczej.
          </p>
        </div>

        <div id="faq" className="faq-block">
          <p className="eyebrow">NAJCZĘSTSZE PYTANIA</p>
          <h2>FAQ</h2>
          <div className="faq-list">
            <details className="faq-item">
              <summary>Czy można już kupić VIP, SVIP lub kredyty?</summary>
              <p>Nie. Sklep i płatności nie są jeszcze aktywne. Podane ceny i oferta są planowane.</p>
            </details>
            <details className="faq-item">
              <summary>Czy VIP lub SVIP odnowi się automatycznie?</summary>
              <p>Nie. Pakiet trzeba odnowić samodzielnie, kupując go ponownie. Automatyczne odnawianie i cykliczne pobieranie płatności nie będą włączone.</p>
            </details>
            <details className="faq-item">
              <summary>Co jeśli kupię ten sam pakiet, gdy jest jeszcze aktywny?</summary>
              <p>Plan zakłada, że nowy okres tego samego pakietu zostanie dodany do pozostałego czasu.</p>
            </details>
            <details className="faq-item">
              <summary>Jak będą przypisane zakupy do gracza?</summary>
              <p>Planowane zakupy będą przypisywane do podanego SteamID i nadawane na serwerze CS2. Nie podawaj hasła do Steam ani kodu Steam Guard.</p>
            </details>
            <details className="faq-item">
              <summary>Kiedy otrzymam zakupiony produkt?</summary>
              <p>Docelowo po potwierdzeniu płatności produkt ma być nadawany automatycznie. Dokładny czas realizacji i sposób pomocy przy opóźnieniu zostaną podane przed uruchomieniem sklepu.</p>
            </details>
            <details className="faq-item">
              <summary>Czy kredyty wygasają i na co można je wydać?</summary>
              <p>Plan zakłada, że kredyty nie wygasają. Będzie można wymieniać je na punkty doświadczenia: 100 kredytów za 1 punkt. Doświadczenie pozwoli zdobywać poziomy i rozwijać postać.</p>
            </details>
            <details className="faq-item">
              <summary>Co oznacza pakiet VIP lub SVIP „NA ZAWSZE”?</summary>
              <p>Oferta jest planowana jako bezterminowa podczas działania serwera REWIR. Zasady na wypadek zamknięcia serwera lub projektu zostaną określone przed sprzedażą.</p>
            </details>
          </div>
        </div>
      </section>

      <section id="dokumenty" className="section documents-section">
        <p className="eyebrow">WAŻNE INFORMACJE</p>
        <h2>DOKUMENTY</h2>

        <div className="documents-grid">
          <a href="#regulamin">REGULAMIN SKLEPU <span>↗</span></a>
          <a href="#prywatnosc">POLITYKA PRYWATNOŚCI <span>↗</span></a>
          <a href="#reklamacje">REKLAMACJE <span>↗</span></a>
          <a href="#zwroty">ZWROTY I ODSTĄPIENIE <span>↗</span></a>
        </div>

        <article id="regulamin" className="document-panel">
          <h3>REGULAMIN SKLEPU — INFORMACJA</h3>
          <p>
            Regulamin określi zasady korzystania ze sklepu REWIR, składania
            zamówień, płatności, realizacji produktów cyfrowych, reklamacji
            oraz praw konsumentów.
          </p>
          <p>
            Sprzedaż pozostaje nieaktywna do czasu opublikowania kompletnego
            regulaminu i danych sprzedawcy. Niniejsza informacja nie zastępuje
            pełnego regulaminu.
          </p>
        </article>

        <article id="reklamacje" className="document-panel">
          <h3>REKLAMACJE</h3>
          <p>
            Reklamację można zgłosić na adres rewircs2kontakt@gmail.com.
            W zgłoszeniu warto podać numer zamówienia, opis problemu i
            oczekiwany sposób rozwiązania sprawy.
          </p>
          <p>
            Reklamacje będą rozpatrywane zgodnie z właściwymi przepisami.
            Postanowienia sklepu nie ograniczają ustawowych praw klientów.
          </p>
        </article>

        <article id="zwroty" className="document-panel">
          <h3>ZWROTY I ODSTĄPIENIE OD UMOWY</h3>
          <p>
            Zasady odstąpienia od umowy będą określone zgodnie z przepisami
            dotyczącymi umów zawieranych na odległość i treści lub usług
            cyfrowych. Nie wyłączamy praw konsumenta w sposób sprzeczny z prawem.
          </p>
          <p>
            W sprawie odstąpienia od umowy napisz na
            rewircs2kontakt@gmail.com.
          </p>
        </article>

        <article id="prywatnosc" className="document-panel">
          <h3>POLITYKA PRYWATNOŚCI</h3>
          <p>
            Obecnie karta Owner pobiera publiczne dane profilu OFFNEST przez Lanyard API,
            a avatar z Discord CDN. Strona pobiera także fonty z Google Fonts. Gdy te
            elementy są ładowane, przeglądarka odwiedzającego łączy się z tymi usługami
            i przekazuje im standardowe dane połączenia, w tym adres IP.
          </p>
          <p>
            To jest informacja wstępna, a nie kompletna polityka prywatności. Przed
            uruchomieniem kont lub sprzedaży trzeba opisać administratora danych, cele
            i podstawy przetwarzania, odbiorców, okresy przechowywania, prawa użytkowników
            oraz ewentualne przekazywanie danych poza EOG.
          </p>
        </article>

        <div className="info-panel">
          <h3>INFORMACJA O SPRZEDAWCY</h3>
          <p>
            Dane sprzedawcy, adres do doręczeń i pozostałe wymagane informacje
            zostaną uzupełnione przed uruchomieniem sprzedaży.
          </p>
          <p>
            Kontakt: rewircs2kontakt@gmail.com
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <span className="footer-brand">REWIR</span>
          <p>POLSKA SIEĆ SERWERÓW COUNTER-STRIKE 2</p>
          <p className="legal-attribution">
            Counter-Strike 2 i Counter-Strike są znakami towarowymi Valve Corporation.
            REWIR jest niezależnym projektem i nie jest powiązany z Valve ani przez Valve wspierany.
          </p>
          <a href="mailto:rewircs2kontakt@gmail.com">rewircs2kontakt@gmail.com</a>
        </div>

        <div className="footer-links">
          <a href="#owner">OWNER</a>
          <a href="#regulamin">REGULAMIN</a>
          <a href="#reklamacje">REKLAMACJE</a>
          <a href="#zwroty">ZWROTY</a>
          <a href="#prywatnosc">PRYWATNOŚĆ</a>
          <a href="#pomoc">KONTAKT</a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 REWIR — WSZELKIE PRAWA ZASTRZEŻONE</span>
          <span>COMMUNITY • COMPETITION • PROGRESSION</span>
        </div>
      </footer>
    </div>
  )
}

export default App
