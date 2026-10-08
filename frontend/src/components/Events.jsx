import { events } from '../data/events'

export default function Events() {
  return (
    <section id="event" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Event</span>
          <h2>Agenda kegiatan terdekat</h2>
          <p>
            Deretan kegiatan dari organisasi pelajar yang bisa kamu ikuti. Catat
            tanggalnya dan hadir untuk bertemu kader dari berbagai komunitas.
          </p>
        </div>

        <div className="events-grid">
          {events.map((e) => (
            <article className="event-card" key={e.id}>
              <div className="event-banner" style={{ background: e.color }}>
                <span className="emoji" aria-hidden="true">
                  {e.emoji}
                </span>
                <span className="event-status">{e.status}</span>
              </div>
              <div className="event-body">
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
                <div className="event-meta">
                  <span aria-hidden="true">🗓️ {e.date}</span>
                  <span aria-hidden="true">📍 {e.place}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="events-note">
          📌 Jadwal bersifat sementara dan dapat berubah sewaktu-waktu.
        </p>
      </div>
    </section>
  )
}
