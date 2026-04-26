import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const roles = [
  'Software Engineering Student',
  'AI Enthusiast',
]

const tags = [
  { label: 'Backend Development', color: '#f59e0b', icon: '<>' },
  { label: 'Machine Learning', color: '#c084fc', icon: '⚡' },
  { label: 'Deep Learning', color: '#818cf8', icon: '🧠' },
  { label: 'AI Systems', color: '#34d399', icon: '🤖' },
]

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const current = roles[roleIndex]
    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => { setDisplayed(current.slice(0, charIndex + 1)); setCharIndex(i => i + 1) }, 60)
      return () => clearTimeout(t)
    }
    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), 1800)
      return () => clearTimeout(t)
    }
    if (deleting && charIndex > 0) {
      const t = setTimeout(() => { setDisplayed(current.slice(0, charIndex - 1)); setCharIndex(i => i - 1) }, 35)
      return () => clearTimeout(t)
    }
    if (deleting && charIndex === 0) {
      setDeleting(false)
      setRoleIndex(i => (i + 1) % roles.length)
    }
  }, [charIndex, deleting, roleIndex])

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <main style={s.main}>
        <div style={s.blob1} />
        <div style={s.blob2} />
        <div style={s.blob3} />

        <div style={s.hero}>
          <motion.p
            style={s.greeting}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            style={s.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span style={s.accent}>Hajar Boulmane</span>
          </motion.h1>

          <motion.h2
            style={s.role}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            {displayed}<span style={s.cursor}>|</span>
          </motion.h2>

          <motion.p
            style={s.desc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Turning complex problems into elegant digital experiences.
          </motion.p>

          <motion.div
            style={s.tags}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
          >
            {tags.map((tag, i) => (
              <motion.span
                key={tag.label}
                style={{ ...s.tag, borderColor: tag.color, color: tag.color }}
                whileHover={{ scale: 1.08, backgroundColor: tag.color + '22' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.08 }}
              >
                <span style={{ marginRight: '6px' }}>{tag.icon}</span>
                {tag.label}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            style={s.buttons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <a href="/projects" style={s.btnPrimary}>View Projects</a>
            <a href="/contact" style={s.btnOutline}>Contact Me</a>
          </motion.div>
        </div>

        <motion.div
          style={s.scrollHint}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <span style={s.scrollText}>Scroll</span>
          <div style={s.scrollArrow}>↓</div>
        </motion.div>
      </main>

      {/* ── ABOUT ME ── */}
      <section style={s.about}>
        <div style={s.blob4} />

        <FadeUp>
          <p style={s.sectionLabel}>Get to know me</p>
          <h2 style={s.sectionTitle}>About <span style={s.accent}>Me</span></h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div style={s.aboutCard}>
            <div style={s.aboutAvatar}>HB</div>
            <div style={s.aboutBio}>
              <p style={s.bioText}>
                Hajar Boulmane, software engineering student passionate about building
                things that sit at the intersection of AI and real-world impact.
                I love turning complex problems into clean, intuitive solutions.
              </p>
              <div style={s.aboutStats}>
                <div style={s.stat}>
                  <span style={s.statNum}>3+</span>
                  <span style={s.statLabel}>Years coding</span>
                </div>
                <div style={s.stat}>
                  <span style={s.statNum}>4+</span>
                  <span style={s.statLabel}>Projects shipped</span>
                </div>
                <div style={s.stat}>
                  <span style={s.statNum}>4+</span>
                  <span style={s.statLabel}>Technologies</span>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      <Footer />
    </>
  )
}

const s: Record<string, React.CSSProperties> = {
  main: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '5rem',
    position: 'relative',
    overflow: 'hidden',
    background: '#0a0a0f',
  },
  blob1: { position: 'absolute', width: '520px', height: '520px', borderRadius: '50%', background: '#c084fc', filter: 'blur(90px)', opacity: 0.12, top: '-100px', left: '-100px', pointerEvents: 'none' },
  blob2: { position: 'absolute', width: '400px', height: '400px', borderRadius: '50%', background: '#818cf8', filter: 'blur(90px)', opacity: 0.12, bottom: '-80px', right: '10%', pointerEvents: 'none' },
  blob3: { position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', background: '#d4a017', filter: 'blur(80px)', opacity: 0.1, top: '40%', right: '25%', pointerEvents: 'none' },
  hero: { maxWidth: '680px', position: 'relative', zIndex: 1 },
  greeting: { color: '#c084fc', fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase' as const },
  name: { fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '0.75rem', color: '#e8e8f0' },
  accent: { color: '#c084fc' },
  role: { fontSize: '1.3rem', fontWeight: 400, color: '#c084fc', marginBottom: '1.2rem', minHeight: '2rem' },
  cursor: { display: 'inline-block', marginLeft: '2px', color: '#c084fc' },
  desc: { fontSize: '1rem', color: '#aaaabc', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '480px' },
  tags: { display: 'flex', flexWrap: 'wrap' as const, gap: '0.6rem', marginBottom: '2rem' },
  tag: { padding: '0.35rem 0.9rem', borderRadius: '999px', border: '1px solid', fontSize: '0.82rem', fontWeight: 500, cursor: 'default', transition: 'all 0.2s', display: 'flex', alignItems: 'center' },
  buttons: { display: 'flex', gap: '1rem', flexWrap: 'wrap' as const },
  btnPrimary: { padding: '0.75rem 2rem', background: '#c084fc', color: '#0a0a0f', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' },
  btnOutline: { padding: '0.75rem 2rem', border: '1px solid #c084fc', color: '#c084fc', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' },
  scrollHint: { position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '4px', zIndex: 1 },
  scrollText: { color: '#888899', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' as const },
  scrollArrow: { color: '#c084fc', fontSize: '1.1rem' },
  about: { padding: '6rem 5rem', background: '#0a0a0f', position: 'relative', overflow: 'hidden' },
  blob4: { position: 'absolute', width: '400px', height: '400px', borderRadius: '50%', background: '#c084fc', filter: 'blur(100px)', opacity: 0.07, top: '0', right: '0', pointerEvents: 'none' },
  sectionLabel: { color: '#c084fc', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '0.5rem' },
  sectionTitle: { fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#e8e8f0', marginBottom: '3rem' },
  aboutCard: { background: '#111118', border: '1px solid #1e1e2e', borderRadius: '16px', padding: '2.5rem', display: 'flex', gap: '2rem', alignItems: 'flex-start' },
  aboutAvatar: { width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #c084fc, #818cf8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', fontWeight: 700, color: '#0a0a0f', flexShrink: 0 },
  aboutBio: { flex: 1 },
  bioText: { color: '#aaaabc', lineHeight: 1.8, fontSize: '1rem', marginBottom: '1rem' },
  aboutStats: { display: 'flex', gap: '2rem', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #1e1e2e' },
  stat: { display: 'flex', flexDirection: 'column' as const, alignItems: 'center' },
  statNum: { fontSize: '1.6rem', fontWeight: 700, color: '#c084fc' },
  statLabel: { fontSize: '0.8rem', color: '#888899', marginTop: '2px' },
}