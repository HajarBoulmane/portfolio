import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
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

const timeline = [
  {
    year: '2022',
    title: 'Started Software Engineering',
    desc: 'Enrolled in Software Engineering at university. Wrote my first real programs and fell in love with building things.',
    icon: '🎓',
  },
  {
    year: '2023',
    title: 'Discovered AI & ML',
    desc: 'Built my first neural network. Started exploring machine learning, deep learning, and data science seriously.',
    icon: '🧠',
  },
  {
    year: '2024',
    title: 'First Real Projects',
    desc: 'Shipped multiple full-stack and AI projects. Started contributing to open source and building in public.',
    icon: '🚀',
  },
  {
    year: '2025',
    title: 'Going Deeper',
    desc: 'Focusing on AI systems, LLMs, and production-grade software. Building things that actually matter.',
    icon: '⚡',
  },
]

const values = [
  { icon: '🎯', title: 'Problem First', desc: 'I start with the problem, not the technology. The best solution is always the simplest one that works.' },
  { icon: '📚', title: 'Always Learning', desc: 'The field moves fast. I read papers, build side projects, and stay curious every single day.' },
  { icon: '🛠️', title: 'Ship It', desc: 'A working prototype beats a perfect plan. I bias toward action and iterate fast.' },
  { icon: '🤝', title: 'Collaborate', desc: 'The best ideas come from great teams. I love working with people smarter than me.' },
]

export default function About() {
  return (
    <div style={s.page}>
      {/* Blobs */}
      <div style={s.blob1} />
      <div style={s.blob2} />

      {/* ── HERO ── */}
      <section style={s.hero}>
        <motion.p
          style={s.label}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.p>
        <motion.h1
          style={s.heroTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          The person behind<br />
          <span style={s.accent}>the code</span>
        </motion.h1>
        <motion.p
          style={s.heroSub}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Software engineering student from Morocco 🇲🇦 — obsessed with AI,
          clean code, and building things that make a difference.
        </motion.p>
      </section>

      {/* ── PROFILE CARD ── */}
      <section style={s.section}>
        <FadeUp>
          <div style={s.profileCard}>
            {/* Avatar */}
            <div style={s.avatarWrap}>
              <div style={s.avatar}>HB</div>
              <div style={s.avatarGlow} />
            </div>

            {/* Info */}
            <div style={s.profileInfo}>
              <h2 style={s.profileName}>Hajar Boulmane</h2>
              <p style={s.profileRole}>Software Engineering Student & AI Enthusiast</p>

              <div style={s.infoGrid}>
                {[
                  { label: 'Location', value: 'Morocco 🇲🇦' },
                  { label: 'Focus', value: 'AI & Full Stack' },
                  { label: 'Status', value: '🟢 Open to opportunities' },
                  { label: 'Languages', value: 'Arabic, French, English' },
                ].map(item => (
                  <div key={item.label} style={s.infoItem}>
                    <span style={s.infoLabel}>{item.label}</span>
                    <span style={s.infoValue}>{item.value}</span>
                  </div>
                ))}
              </div>

              <div style={s.socialRow}>
                {[
                  { label: 'GitHub', href: 'https://github.com/' },
                  { label: 'LinkedIn', href: 'https://linkedin.com/' },
                  { label: 'Email', href: 'mailto:you@email.com' },
                ].map(link => (
                  <a key={link.label} href={link.href} style={s.socialBtn} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── TIMELINE ── */}
      <section style={s.section}>
        <FadeUp>
          <p style={s.label}>My Journey</p>
          <h2 style={s.sectionTitle}>How I got <span style={s.accent}>here</span></h2>
        </FadeUp>

        <div style={s.timeline}>
          {timeline.map((item, i) => (
            <FadeUp key={item.year} delay={i * 0.1}>
              <div style={s.timelineItem}>
                <div style={s.timelineLeft}>
                  <span style={s.timelineIcon}>{item.icon}</span>
                  <span style={s.timelineYear}>{item.year}</span>
                </div>
                <div style={s.timelineLine} />
                <div style={s.timelineContent}>
                  <h3 style={s.timelineTitle}>{item.title}</h3>
                  <p style={s.timelineDesc}>{item.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={s.section}>
        <FadeUp>
          <p style={s.label}>What drives me</p>
          <h2 style={s.sectionTitle}>My <span style={s.accent}>values</span></h2>
        </FadeUp>

        <div style={s.valuesGrid}>
          {values.map((v, i) => (
            <FadeUp key={v.title} delay={i * 0.1}>
              <motion.div
                style={s.valueCard}
                whileHover={{ borderColor: '#c084fc', translateY: -4 }}
                transition={{ duration: 0.2 }}
              >
                <span style={s.valueIcon}>{v.icon}</span>
                <h3 style={s.valueTitle}>{v.title}</h3>
                <p style={s.valueDesc}>{v.desc}</p>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <FadeUp>
        <section style={s.cta}>
          <h2 style={s.ctaTitle}>Want to work together?</h2>
          <p style={s.ctaDesc}>I'm always open to interesting projects and opportunities.</p>
          <a href="/contact" style={s.btnPrimary}>Get in touch →</a>
        </section>
      </FadeUp>
    </div>
  )
}

const s: Record<string, React.CSSProperties> = {
  page: { background: '#0a0a0f', minHeight: '100vh', paddingTop: '80px', position: 'relative', overflow: 'hidden' },
  blob1: { position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: '#c084fc', filter: 'blur(100px)', opacity: 0.08, top: '-100px', right: '-100px', pointerEvents: 'none' },
  blob2: { position: 'absolute', width: '400px', height: '400px', borderRadius: '50%', background: '#818cf8', filter: 'blur(100px)', opacity: 0.07, bottom: '20%', left: '-100px', pointerEvents: 'none' },

  // Hero
  hero: { padding: '5rem 5rem 2rem' },
  label: { color: '#c084fc', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '0.75rem' },
  heroTitle: { fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 700, color: '#e8e8f0', lineHeight: 1.15, marginBottom: '1.2rem' },
  heroSub: { fontSize: '1.1rem', color: '#aaaabc', lineHeight: 1.7, maxWidth: '540px' },
  accent: { color: '#c084fc' },

  // Profile card
  section: { padding: '3rem 5rem' },
  profileCard: { display: 'flex', gap: '3rem', alignItems: 'flex-start', background: '#111118', border: '1px solid #1e1e2e', borderRadius: '20px', padding: '3rem' },
  avatarWrap: { position: 'relative', flexShrink: 0 },
  avatar: { width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, #c084fc, #818cf8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 700, color: '#0a0a0f', position: 'relative', zIndex: 1 },
  avatarGlow: { position: 'absolute', inset: '-8px', borderRadius: '50%', background: 'linear-gradient(135deg, #c084fc, #818cf8)', filter: 'blur(16px)', opacity: 0.35, zIndex: 0 },
  profileInfo: { flex: 1 },
  profileName: { fontSize: '1.8rem', fontWeight: 700, color: '#e8e8f0', marginBottom: '0.3rem' },
  profileRole: { color: '#c084fc', fontSize: '1rem', marginBottom: '1.5rem' },
  infoGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' },
  infoItem: { display: 'flex', flexDirection: 'column' as const, gap: '2px' },
  infoLabel: { color: '#888899', fontSize: '0.78rem', textTransform: 'uppercase' as const, letterSpacing: '0.08em' },
  infoValue: { color: '#e8e8f0', fontSize: '0.95rem', fontWeight: 500 },
  socialRow: { display: 'flex', gap: '0.75rem' },
  socialBtn: { padding: '0.45rem 1.2rem', border: '1px solid #1e1e2e', borderRadius: '6px', color: '#aaaabc', textDecoration: 'none', fontSize: '0.85rem', transition: 'all 0.2s' },

  // Timeline
  sectionTitle: { fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#e8e8f0', marginBottom: '2.5rem' },
  timeline: { display: 'flex', flexDirection: 'column' as const, gap: '0' },
  timelineItem: { display: 'flex', alignItems: 'flex-start', gap: '1.5rem', paddingBottom: '2.5rem', position: 'relative' },
  timelineLeft: { display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '4px', minWidth: '60px' },
  timelineIcon: { fontSize: '1.5rem' },
  timelineYear: { color: '#c084fc', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em' },
  timelineLine: { width: '1px', background: 'linear-gradient(to bottom, #c084fc44, transparent)', position: 'absolute', left: '29px', top: '50px', bottom: '0' },
  timelineContent: { background: '#111118', border: '1px solid #1e1e2e', borderRadius: '12px', padding: '1.25rem 1.5rem', flex: 1 },
  timelineTitle: { color: '#e8e8f0', fontSize: '1rem', fontWeight: 600, marginBottom: '0.4rem' },
  timelineDesc: { color: '#888899', fontSize: '0.9rem', lineHeight: 1.6 },

  // Values
  valuesGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem' },
  valueCard: { background: '#111118', border: '1px solid #1e1e2e', borderRadius: '14px', padding: '1.75rem', cursor: 'default' },
  valueIcon: { fontSize: '1.8rem', display: 'block', marginBottom: '0.75rem' },
  valueTitle: { color: '#e8e8f0', fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' },
  valueDesc: { color: '#888899', fontSize: '0.88rem', lineHeight: 1.6 },

  // CTA
  cta: { margin: '2rem 5rem 5rem', background: 'linear-gradient(135deg, #1a0a2e, #111118)', border: '1px solid #2a1a4e', borderRadius: '20px', padding: '4rem', textAlign: 'center' as const },
  ctaTitle: { fontSize: '2rem', fontWeight: 700, color: '#e8e8f0', marginBottom: '0.75rem' },
  ctaDesc: { color: '#aaaabc', fontSize: '1rem', marginBottom: '2rem' },
  btnPrimary: { padding: '0.85rem 2.5rem', background: '#c084fc', color: '#0a0a0f', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem' },
}