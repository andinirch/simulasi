const values = [
  {
    label: 'Visi',
    text: 'Menjadi wadah aspirasi pelajar yang inklusif, kolaboratif, dan berdampak nyata bagi lingkungan sekitar.',
  },
  {
    label: 'Misi',
    text: 'Menggerakkan program kerja yang edukatif, memperkuat solidaritas antar pelajar, serta menjembatani komunikasi dengan sekolah dan masyarakat.',
  },
]

export default function Organization() {
  return (
    <section
      id="organisasi"
      className="section"
      style={{ background: 'var(--surface-2)' }}
    >
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Organisasi</span>
          <h2>Mengenal BEM secara umum</h2>
          <p>
            Informasi umum seputar Badan Eksekutif Mahasiswa sebagai representasi
            suara dan gerakan pelajar di lingkungan pendidikan.
          </p>
        </div>

        <div className="org-layout">
          <div className="org-panel">
            <h3>Apa itu BEM?</h3>
            <p>
              BEM (Badan Eksekutif Mahasiswa) adalah organisasi kemahasiswaan yang
              menjadi perpanjangan tangan aspirasi mahasiswa. BEM menyelenggarakan
              program kerja, mewadahi kegiatan minat-bakat, serta menjadi jembatan
              komunikasi antara mahasiswa dan pihak institusi.
            </p>
            <p>
              Setiap periode kepengurusan dipilih melalui mekanisme pemilihan yang
              demokratik, dengan tetap mengedepankan transparansi dan akuntabilitas.
            </p>
          </div>

          <div className="org-panel">
            <h3>Visi & Misi</h3>
            <ul className="org-points">
              {values.map((v) => (
                <li key={v.label}>
                  <span className="check" aria-hidden="true">
                    ✓
                  </span>
                  <span>
                    <b>{v.label}:</b> {v.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
