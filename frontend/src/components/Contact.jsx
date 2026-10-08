const contacts = [
  {
    icon: '📧',
    title: 'Email',
    value: 'halo@ormaverse.id',
  },
  {
    icon: '📍',
    title: 'Alamat Sekretariat',
    value: 'Jl. Pendidikan No. 1, Kota Pelajar',
  },
  {
    icon: '🕐',
    title: 'Jam Aktif',
    value: 'Senin – Jumat, 08.00 – 16.00 WIB',
  },
]

const socials = [
  { icon: '📸', label: 'Instagram' },
  { icon: '🎵', label: 'TikTok' },
  { icon: '🐦', label: 'X / Twitter' },
  { icon: '▶️', label: 'YouTube' },
]

export default function Contact() {
  return (
    <section id="kontak" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Kontak</span>
          <h2>Terhubung dengan kami</h2>
          <p>
            Punya pertanyaan soal event atau organisasi? Hubungi kami lewat kanal
            berikut atau ikuti kabar terbaru di media sosial.
          </p>
        </div>

        <div className="contact-layout">
          {contacts.map((c) => (
            <article className="contact-card" key={c.title}>
              <div className="feature-icon" aria-hidden="true">
                {c.icon}
              </div>
              <h3>{c.title}</h3>
              <p>{c.value}</p>
            </article>
          ))}
        </div>

        <div className="socials">
          {socials.map((s) => (
            <a className="social-chip" key={s.label} href="#kontak">
              <span aria-hidden="true">{s.icon}</span> {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
