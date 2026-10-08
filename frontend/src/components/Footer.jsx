export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="brand" href="#home">
          <span className="brand-mark">O</span>
          Ormaverse
        </a>

        <nav className="footer-links" aria-label="Navigasi footer">
          <a href="#home">Home</a>
          <a href="#event">Event</a>
          <a href="#organisasi">Organisasi</a>
          <a href="#kontak">Kontak</a>
        </nav>

        <p className="footer-copy">© 2026 Ormaverse. Semua hak dilindungi.</p>
      </div>
    </footer>
  )
}
