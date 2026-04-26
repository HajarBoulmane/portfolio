import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/', isRouter: true },
  { label: 'Projects', path: '/projects', isRouter: true },
  { label: 'Contact', path: '/contact', isRouter: true },
]

export default function Footer() {
  return (
    <footer style={s.footer}>
      <div style={s.grid}>

        {/* Brand */}
        <div>
          <p style={s.brandName}>Hajar Boulmane</p>
          <p style={s.brandDesc}>
            Software engineering student building at the intersection
            of AI and full-stack development.
          </p>
          <div style={s.socials}>
            <a href="https://github.com/HajarBoulmane" target="_blank" rel="noreferrer" style={s.socialBtn} aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/hajar-boulmane-015218234/" target="_blank" rel="noreferrer" style={s.socialBtn} aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
          </div>
        </div>

        {/* Nav */}
        <div>
          <p style={s.colTitle}>Navigate</p>
          <div style={s.colLinks}>
            {navLinks.map(link =>
              link.isRouter ? (
                <Link key={link.label} to={link.path} style={s.link}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.path} style={s.link}>
                  {link.label}
                </a>
              )
            )}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p style={s.colTitle}>Contact</p>
          <div style={s.colLinks}>
            <a href="mailto:hajarboulmane03@gmail.com" style={s.link}>hajarboulmane03@gmail.com</a>
            <span style={s.link}>Open to internships</span>
            <span style={s.link}>Based in Morocco 🇲🇦</span>
          </div>
        </div>

      </div>

      <hr style={s.divider} />

      <div style={s.bottom}>
        <span style={s.copy}>© 2025 Hajar Boulmane. All rights reserved.</span>
        <span style={s.copy}>Built with ♥ using React & Vite</span>
      </div>
    </footer>
  )
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#aaaabc">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#aaaabc">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}



const s: Record<string, React.CSSProperties> = {
  footer: { background: '#0a0a0f', borderTop: '1px solid #1e1e2e', padding: '3rem 5rem 2rem' },
  grid: { display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '3rem', marginBottom: '2.5rem' },
  brandName: { fontSize: '1.3rem', fontWeight: 700, color: '#c084fc', marginBottom: '0.5rem' },
  brandDesc: { fontSize: '0.85rem', color: '#888899', lineHeight: 1.7, maxWidth: '260px' },
  socials: { display: 'flex', gap: '0.75rem', marginTop: '1.2rem' },
  socialBtn: { width: '36px', height: '36px', borderRadius: '8px', border: '1px solid #1e1e2e', background: '#111118', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' },
  colTitle: { fontSize: '0.75rem', fontWeight: 600, color: '#c084fc', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: '1rem' },
  colLinks: { display: 'flex', flexDirection: 'column' as const, gap: '0.55rem' },
  link: { fontSize: '0.87rem', color: '#aaaabc', textDecoration: 'none' },
  divider: { border: 'none', borderTop: '1px solid #1e1e2e', marginBottom: '1.5rem' },
  bottom: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  copy: { fontSize: '0.8rem', color: '#555566' },
} 