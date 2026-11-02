import './App.css'

function App() {
  return (
    <div className="site">
      <nav className="navbar">
        <div className="logo">REWIR<span>.</span></div>
        <div className="nav-links">
          <a href="#serwery">SERWERY</a>
          <a href="#tryby">TRYBY GRY</a>
          <a href="#ranking">RANKING</a>
          <a href="#sklep">SKLEP</a>
        </div>
        <a
  className="discord"
  href="https://discord.gg/7qH4gbWED"
  target="_blank"
  rel="noopener noreferrer"
>
  DISCORD
</a>
      </nav>

      <main className="hero">
        <div className="hero-content">
          <p className="eyebrow">POLSKA SIEĆ SERWERÓW CS2</p>
          <h1>WEJDŹ<br />DO <span>REWIRU</span></h1>
          <p className="description">
            Wskocz do gry. Rozwijaj swoją postać. Zbuduj swoją pozycję.
          </p>
          <div className="buttons">
            <a href="#serwery" className="primary">ZOBACZ SERWERY</a>
            <a href="#discord" className="secondary">DOŁĄCZ NA DISCORD</a>
          </div>
        </div>
        <div className="hero-label">REWIR COMMUNITY / CS2</div>
      </main>

      <section id="serwery" className="section">
        <p className="eyebrow">GRAJ NA SWOICH ZASADACH</p>
        <h2>NASZE SERWERY</h2>
        <div className="server-card">
          <div>
            <span className="status">● WKRÓTCE</span>
            <h3>SURF RPG COMBAT</h3>
            <p>Surfuj, walcz i rozwijaj swoją postać.</p>
          </div>
          <span className="server-number">01</span>
        </div>
      </section>
<section id="tryby" className="section modes-section">
  <p className="eyebrow">POZNAJ MOŻLIWOŚCI REWIRU</p>
  <h2>TRYBY ROZGRYWKI</h2>
  <p className="section-description">
    Wybierz swój styl gry i walcz o swoją pozycję.
  </p>

  <div className="modes-grid">
    <div className="mode-card">
      <span className="mode-number">01 / SERWER CS2</span>
      <h3>SURF RPG COMBAT</h3>
      <p>
        Pokonuj kolejne trasy, zdobywaj broń i walcz z innymi graczami.
        Rozwijaj umiejętności, zdobywaj poziomy i pnij się w rankingu.
      </p>
      <span className="mode-status">WKRÓTCE</span>
    </div>

    <div className="mode-card">
      <span className="mode-number">02 / PROGRESJA</span>
      <h3>SYSTEM RPG</h3>
      <p>
        Zdobywaj doświadczenie i punkty umiejętności.
        Ulepszaj zdrowie, szybkość, przeładowanie i inne statystyki.
      </p>
      <span className="mode-status">ELEMENT SURF RPG COMBAT</span>
    </div>
  </div>
</section>
<section id="ranking" className="section ranking-section">
  <p className="eyebrow">WALCZ O SWOJĄ POZYCJĘ</p>
  <h2>RANKING GRACZY</h2>
  <p className="section-description">
    Zdobywaj doświadczenie, rozwijaj postać i pnij się na szczyt.
  </p>

  <div className="ranking-table">
    <div className="ranking-row ranking-header">
      <span>MIEJSCE</span>
      <span>GRACZ</span>
      <span>POZIOM</span>
      <span>ZABÓJSTWA</span>
      <span>K/D</span>
    </div>

    <div className="ranking-row">
      <span className="rank-gold">01</span>
      <strong>Gracz_One</strong>
      <span>100</span>
      <span>2450</span>
      <span>2.45</span>
    </div>

    <div className="ranking-row">
      <span className="rank-silver">02</span>
      <strong>SurfMaster</strong>
      <span>87</span>
      <span>1980</span>
      <span>2.12</span>
    </div>

    <div className="ranking-row">
      <span className="rank-bronze">03</span>
      <strong>RewirPlayer</strong>
      <span>74</span>
      <span>1640</span>
      <span>1.89</span>
    </div>

    <div className="ranking-row">
      <span>04</span>
      <strong>Shadow</strong>
      <span>62</span>
      <span>1210</span>
      <span>1.67</span>
    </div>
  </div>

  <p className="ranking-note">
    Przykładowe dane — ranking zostanie podłączony do serwera.
  </p>
</section>
<section id="sklep" className="section shop-section">
  <p className="eyebrow">TWOJA ROZGRYWKA, TWOJE MOŻLIWOŚCI</p>
  <h2>SKLEP REWIR</h2>
  <p className="section-description">
    Dodatki, które pozwolą Ci wyróżnić się na serwerze.
  </p>

  <div className="shop-grid">
    <div className="shop-card">
      <span className="shop-label">PRZYWILEJE</span>
      <h3>VIP</h3>
      <p>
        Dodatkowe możliwości podczas rozgrywki:
        strzykawka lecząca, podwójny skok i spadochron.
      </p>
      <span className="shop-price">SZCZEGÓŁY WKRÓTCE</span>
    </div>

    <div className="shop-card">
      <span className="shop-label">PERSONALIZACJA</span>
      <h3>MODELE POSTACI</h3>
      <p>
        Odblokowuj nowe modele i wyróżnij swoją postać
        na serwerze REWIR.
      </p>
      <span className="shop-price">OD 600 KREDYTÓW</span>
    </div>

    <div className="shop-card">
      <span className="shop-label">WALUTA GRY</span>
      <h3>KREDYTY</h3>
      <p>
        Zdobywaj kredyty za aktywność i eliminacje.
        Wydawaj je na dostępne dodatki.
      </p>
      <span className="shop-price">ZDOBYWAJ W GRZE</span>
    </div>
  </div>
</section>
<section id="discord" className="section discord-section">
  <p className="eyebrow">DOŁĄCZ DO NASZEJ SPOŁECZNOŚCI</p>
  <h2>WCHODZISZ DO REWIRU?</h2>
  <p className="section-description">
    Poznaj graczy, śledź aktualności i przygotuj się na start naszych serwerów.
  </p>

  <a
    className="primary"
    href="https://discord.gg/7qH4gbWED"
    target="_blank"
    rel="noopener noreferrer"
  >
    DOŁĄCZ NA DISCORD
  </a>
</section>
      <footer>REWIR © 2026 — SIEĆ SERWERÓW CS2</footer>
    </div>
  )
}

export default App