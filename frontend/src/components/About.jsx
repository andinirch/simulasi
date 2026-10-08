const features = [
  {
    icon: '🗂️',
    title: 'Database Organisasi',
    desc: 'Satu sumber informasi resmi untuk seluruh organisasi pelajar yang terdaftar di Ormaverse.',
  },
  {
    icon: '🎪',
    title: 'Zona Event',
    desc: 'Ikuti agenda talkshow, lomba, bakti sosial, hingga rapat kerja tanpa takut ketinggalan.',
  },
  {
    icon: '🌟',
    title: 'Jaringan Kader',
    desc: 'Wadah kolaborasi antar kader untuk bertukar ide, pengalaman, dan peluang baru.',
  },
]

export default function About() {
  return (
    <section id="tentang" className="section" style={{ background: 'var(--surface-2)' }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Tentang Ormaverse</span>
          <h2>Organisasi jadi lebih mudah dijalankan</h2>
          <p>
            Ormaverse adalah platform digital yang menyatukan informasi organisasi,
            agenda event, dan kolaborasi antar pelajar dalam satu tempat yang sederhana
            dan menyenangkan.
          </p>
        </div>

        <div className="about-grid">
          {features.map((f) => (
            <article className="feature-card" key={f.title}>
              <div className="feature-icon" aria-hidden="true">
                {f.icon}
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
