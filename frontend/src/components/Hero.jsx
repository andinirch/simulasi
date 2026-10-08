export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-inner">
        <div>
          <span className="hero-badge">🌱 Platform Organisasi Pelajar</span>
          <h1>
            Satu Rumah untuk <br />
            <span className="accent">Seluruh Organisasi Pelajar</span>
          </h1>
          <p className="hero-lead">
            Ormaverse mempertemukan kader, karya, dan agenda organisasi dalam satu
            platform. Temukan event, kenali BEM, dan terhubung dengan komunitasmu.
          </p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="#event">
              Jelajahi Event
            </a>
            <a className="btn btn-ghost" href="#organisasi">
              Kenali BEM
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <b>6+</b>
              <span>Event Terdekat</span>
            </div>
            <div className="stat">
              <b>12</b>
              <span>Organisasi Terdaftar</span>
            </div>
            <div className="stat">
              <b>1.5K+</b>
              <span>Pelajar Terhubung</span>
            </div>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="art-card c1">
            <div className="art-dot purple">📅</div>
            <b>Agenda Event</b>
            <small>Semua kegiatan organisasi terjadwal rapi dalam satu daftar.</small>
          </div>
          <div className="art-card c2">
            <div className="art-dot mint">🤝</div>
            <b>Jaringan Kader</b>
            <small>Temukan dan terhubung dengan kader dari organisasi lain.</small>
          </div>
          <div className="art-card c3">
            <div className="art-dot amber">🏫</div>
            <b>Profil BEM</b>
            <small>Kenali visi, misi, dan peran BEM tanpa ribet.</small>
          </div>
        </div>
      </div>
    </section>
  )
}
