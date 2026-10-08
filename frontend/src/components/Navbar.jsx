import { useState } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#event', label: 'Event' },
  { href: '#organisasi', label: 'Organisasi' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a className="brand" href="#home" onClick={close}>
          <span className="brand-mark">O</span>
          Ormaverse
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Buka menu navigasi"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>

        <div className={`nav-menu${open ? ' open' : ''}`}>
          <nav className="nav-links" aria-label="Navigasi utama">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={close}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav-auth">
            <button
              type="button"
              className="btn btn-soon"
              disabled
              title="Fitur login segera hadir"
            >
              Login <span className="soon-tag">Segera Hadir</span>
            </button>
            <button
              type="button"
              className="btn btn-primary btn-soon"
              disabled
              title="Fitur register segera hadir"
            >
              Register <span className="soon-tag">Segera Hadir</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
