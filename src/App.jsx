
import './App.css'

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
            <span>REWIRU<span className="title-period">.</span></span>
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
            <a href="#discord" className="secondary">
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
        <section id="serwery" className="section">
          <p className="eyebrow">GRAJ NA SWOICH ZASADACH</p>
          <h2>NASZE SERWERY</h2>

          <div className="server-card">
            <div>
              <span className="status"><i /> WKRÓTCE</span>
              <h3>SURF RPG COMBAT</h3>
              <p>Surfuj, walcz i rozwijaj swoją postać.</p>
            </div>
            <span className="server-number">01</span>
          </div>
        </section>

        <section id="tryby" className="section">
          <p className="eyebrow">POZNAJ MOŻLIWOŚCI REWIRU</p>
          <h2>TRYBY ROZGRYWKI</h2>

          <div className="modes-grid">
            <div className="mode-card">
              <span className="mode-number">01 / SERWER CS2</span>
              <h3>SURF RPG COMBAT</h3>
              <p>
                Pokonuj kolejne trasy, zdobywaj broń i walcz z innymi
                graczami. Rozwijaj umiejętności i zdobywaj poziomy.
              </p>
              <span className="mode-status">WKRÓTCE</span>
            </div>

            <div className="mode-card">
              <span className="mode-number">02 / PROGRESJA</span>
              <h3>SYSTEM RPG</h3>
              <p>
                Zdobywaj doświadczenie i punkty umiejętności.
                Ulepszaj zdrowie, szybkość i przeładowanie.
              </p>
              <span className="mode-status">ELEMENT SURF RPG COMBAT</span>
            </div>
          </div>
        </section>

        <section id="ranking" className="section">
          <p className="eyebrow">WALCZ O SWOJĄ POZYCJĘ</p>
          <h2>RANKING GRACZY</h2>

          <div className="ranking-table">
            <div className="ranking-row ranking-header">
              <span>MIEJSCE</span>
              <span>GRACZ</span>
              <span>POZIOM</span>
              <span>ZABÓJSTWA</span>
              <span>K/D</span>
            </div>

            {[
              ['01', 'Gracz_One', '100', '2450', '2.45'],
              ['02', 'SurfMaster', '87', '1980', '2.12'],
              ['03', 'RewirPlayer', '74', '1640', '1.89'],
              ['04', 'Shadow', '62', '1210', '1.67']
            ].map((player, index) => (
              <div className="ranking-row" key={player[0]}>
                <span className={index === 0 ? 'rank-gold' : index === 1 ? 'rank-silver' : index === 2 ? 'rank-bronze' : ''}>
                  {player[0]}
                </span>
                <strong>{player[1]}</strong>
                <span>{player[2]}</span>
                <span>{player[3]}</span>
                <span>{player[4]}</span>
              </div>
            ))}
          </div>

          <p className="ranking-note">
            Przykładowe dane — ranking zostanie podłączony do serwera.
          </p>
        </section>

        <section id="sklep" className="section">
          <p className="eyebrow">TWOJA ROZGRYWKA, TWOJE MOŻLIWOŚCI</p>
          <h2>SKLEP REWIR</h2>
          <p className="section-description">
            Wybierz dodatki i rozwijaj swoją postać. Sklep nie prowadzi jeszcze sprzedaży.
          </p>

          <div className="shop-grid">
            <div className="shop-card">
              <span className="shop-label">PRZYWILEJE</span>
              <h3>VIP</h3>
              <p>Strzykawka lecząca +50 HP oraz podwójny skok.</p>
              <span className="shop-price">CENA WKRÓTCE</span>
            </div>

            <div className="shop-card">
              <span className="shop-label">PREMIUM</span>
              <h3>SVIP</h3>
              <p>Korzyści VIP, spadochron oraz podwójne kredyty.</p>
              <span className="shop-price">CENA WKRÓTCE</span>
            </div>

            <div className="shop-card">
              <span className="shop-label">WALUTA GRY</span>
              <h3>KREDYTY</h3>
              <p>Waluta wykorzystywana do zakupów wewnątrz serwerów REWIR.</p>
              <span className="shop-price">OFERTA WKRÓTCE</span>
            </div>
          </div>

          <div className="info-panel">
            <h3>INFORMACJE O ZAKUPACH</h3>
            <p>
              Sprzedaż nie została jeszcze uruchomiona. Ceny, dostępne
              okresy VIP i SVIP oraz pakiety kredytów zostaną opublikowane
              przed rozpoczęciem sprzedaży.
            </p>
            <p>
              Planowany operator płatności: PayU, z możliwością płatności BLIK.
              Metody płatności będą dostępne po uruchomieniu integracji.
            </p>
            <p>
              VIP i SVIP będą oferowane jako zakupy jednorazowe na wybrany
              okres. Bez automatycznego odnawiania.
            </p>
          </div>
        </section>
      </main>

      <section id="discord" className="discord-section">
        <p className="eyebrow">DOŁĄCZ DO NASZEJ SPOŁECZNOŚCI</p>
        <h2>WCHODZISZ DO REWIRU?</h2>
        <p className="section-description">
          Poznaj graczy, śledź aktualności i przygotuj się na start naszych serwerów.
        </p>
        <a className="primary" href="https://discord.gg/7qH4gbWED" target="_blank" rel="noopener noreferrer">
          DOŁĄCZ NA DISCORD <span>→</span>
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
            Szczegółowa polityka prywatności zostanie opublikowana przed
            uruchomieniem kont użytkowników i sprzedaży. Będzie opisywać
            administratora danych, cele i podstawy przetwarzania, odbiorców,
            okresy przechowywania danych oraz prawa użytkowników.
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
          <a href="mailto:rewircs2kontakt@gmail.com">rewircs2kontakt@gmail.com</a>
        </div>

        <div className="footer-links">
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
