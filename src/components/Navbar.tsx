import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = ['Home', 'Projects', 'Contact']

export default function Navbar() {
  const [dark, setDark] = useState(true)

  return (
    <nav style={styles.nav}>
      <span style={styles.logo}>HB</span>
      <ul style={styles.links}>
        {links.map(link => (
          <li key={link}>
            <NavLink
              to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
              style={({ isActive }) => ({
                ...styles.link,
                color: isActive ? '#c084fc' : '#e8e8f0',
                borderBottom: isActive ? '2px solid #c084fc' : '2px solid transparent',
              })}
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
      <button onClick={() => setDark(d => !d)} style={styles.toggle}>
        {dark ? '☀️' : '🌙'}
      </button>
    </nav>
  )
}

const styles: Record<string, React.CSSProperties> = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1.2rem 3rem',
    background: 'rgba(10,10,15,0.85)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid #1e1e2e',
  },
  logo: {
    fontWeight: 700,
    fontSize: '1.4rem',
    color: '#c084fc',
    letterSpacing: '0.05em',
  },
  links: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
  },
  link: {
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: 500,
    paddingBottom: '2px',
    transition: 'color 0.2s',
  },
  toggle: {
    background: 'none',
    border: 'none',
    fontSize: '1.2rem',
    cursor: 'pointer',
  },
}