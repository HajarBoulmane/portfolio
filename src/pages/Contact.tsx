import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Footer from '../components/Footer'

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

const links = [
  {
    icon: '📧',
    label: 'Email',
    value: 'hajarboulmane03@gmail.com',
    href: 'mailto:hajarboulmane03@gmail.com',
    desc: 'Best way to reach me',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/hajar-boulmane',
    href: 'https://www.linkedin.com/in/hajar-boulmane-015218234/',
    desc: "Let's connect professionally",
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/HajarBoulmane',
    href: 'https://github.com/HajarBoulmane',
    desc: 'See my code',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const mailto = `mailto:hajarboulmane03@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`
    window.location.href = mailto
    setSent(true)
  }

  return (
    <>
      {/* Inject responsive styles */}
      <style>{`
        .contact-hero {
          padding: 5rem 5rem 2rem;
        }
        .contact-section {
          padding: 3rem 5rem 5rem;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        .link-value {
          color: #e8e8f0;
          font-size: 0.9rem;
          font-weight: 500;
          word-break: break-all;
        }

        @media (max-width: 900px) {
          .contact-hero {
            padding: 4rem 2rem 1.5rem;
          }
          .contact-section {
            padding: 2rem 2rem 4rem;
          }
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 480px) {
          .contact-hero {
            padding: 3rem 1.25rem 1rem;
          }
          .contact-section {
            padding: 1.5rem 1.25rem 3rem;
          }
          .contact-grid {
            gap: 1.5rem;
          }
          .contact-form-card {
            padding: 1.5rem !important;
          }
          .contact-link-card {
            padding: 1rem 1.1rem !important;
          }
        }
      `}</style>

      <div style={s.page}>
        <div style={s.blob1} />
        <div style={s.blob2} />

        {/* HERO */}
        <section className="contact-hero">
          <motion.p
            style={s.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in touch
          </motion.p>
          <motion.h1
            style={s.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's <span style={s.accent}>work</span>
            <br />
            together
          </motion.h1>
          <motion.p
            style={s.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Open to internships, freelance projects, and collaborations. If you
            have something interesting, let's talk.
          </motion.p>
        </section>

        {/* MAIN CONTENT */}
        <section className="contact-section">
          <div className="contact-grid">

            {/* LEFT — links */}
            <div style={s.leftCol}>
              <FadeUp>
                <p style={s.label}>Find me on</p>
                <h2 style={s.colTitle}>
                  Direct <span style={s.accent}>links</span>
                </h2>
              </FadeUp>

              <div style={s.linkCards}>
                {links.map((link, i) => (
                  <FadeUp key={link.label} delay={i * 0.1}>
                    <motion.a
                      href={link.href}
                      target={link.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noreferrer"
                      style={s.linkCard}
                      className="contact-link-card"
                      whileHover={{ borderColor: '#c084fc', translateY: -3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span style={s.linkIcon}>{link.icon}</span>
                      <div style={s.linkInfo}>
                        <span style={s.linkLabel}>{link.label}</span>
                        <span className="link-value">{link.value}</span>
                        <span style={s.linkDesc}>{link.desc}</span>
                      </div>
                      <span style={s.arrow}>↗</span>
                    </motion.a>
                  </FadeUp>
                ))}
              </div>

              <FadeUp delay={0.3}>
                <div style={s.statusCard}>
                  <span style={s.statusDot} />
                  <div>
                    <p style={s.statusTitle}>Available for opportunities</p>
                    <p style={s.statusDesc}>
                      Currently open to internships and freelance work
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* RIGHT — form */}
            <FadeUp delay={0.15}>
              <div style={s.formCard} className="contact-form-card">
                <p style={s.label}>Send a message</p>
                <h2 style={s.colTitle}>
                  Drop me a <span style={s.accent}>line</span>
                </h2>

                {sent ? (
                  <motion.div
                    style={s.successBox}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <span style={{ fontSize: '2rem' }}>✅</span>
                    <p style={{ color: '#e8e8f0', fontWeight: 600 }}>
                      Message sent!
                    </p>
                    <p style={{ color: '#888899', fontSize: '0.9rem' }}>
                      I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} style={s.form}>
                    <div style={s.fieldGroup}>
                      <label style={s.fieldLabel}>Name</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        style={s.input}
                      />
                    </div>
                    <div style={s.fieldGroup}>
                      <label style={s.fieldLabel}>Email</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        style={s.input}
                      />
                    </div>
                    <div style={s.fieldGroup}>
                      <label style={s.fieldLabel}>Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="What's on your mind?"
                        required
                        rows={5}
                        style={{
                          ...s.input,
                          resize: 'vertical' as const,
                          fontFamily: 'inherit',
                        }}
                      />
                    </div>
                    <motion.button
                      type="submit"
                      style={s.submitBtn}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send message →
                    </motion.button>
                  </form>
                )}
              </div>
            </FadeUp>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

const s: Record<string, React.CSSProperties> = {
  page: {
    background: '#0a0a0f',
    minHeight: '100vh',
    paddingTop: '80px',
    position: 'relative',
    overflow: 'hidden',
  },
  blob1: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: '#c084fc',
    filter: 'blur(100px)',
    opacity: 0.08,
    top: '-100px',
    right: '-100px',
    pointerEvents: 'none',
  },
  blob2: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: '#818cf8',
    filter: 'blur(100px)',
    opacity: 0.07,
    bottom: '20%',
    left: '-100px',
    pointerEvents: 'none',
  },
  label: {
    color: '#c084fc',
    fontSize: '0.85rem',
    fontWeight: 500,
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    marginBottom: '0.75rem',
  },
  heroTitle: {
    fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
    fontWeight: 700,
    color: '#e8e8f0',
    lineHeight: 1.15,
    marginBottom: '1.2rem',
  },
  heroSub: {
    fontSize: '1.1rem',
    color: '#aaaabc',
    lineHeight: 1.7,
    maxWidth: '540px',
  },
  accent: { color: '#c084fc' },
  leftCol: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
  },
  colTitle: {
    fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
    fontWeight: 700,
    color: '#e8e8f0',
    marginBottom: '1.5rem',
  },
  linkCards: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.75rem',
    marginBottom: '1.5rem',
  },
  linkCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    background: '#111118',
    border: '1px solid #1e1e2e',
    borderRadius: '12px',
    padding: '1.2rem 1.4rem',
    textDecoration: 'none',
    transition: 'all 0.2s',
    cursor: 'pointer',
  },
  linkIcon: { fontSize: '1.5rem', flexShrink: 0 },
  linkInfo: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1px',
    flex: 1,
    minWidth: 0, // allows text truncation / wrap inside flex
  },
  linkLabel: {
    color: '#888899',
    fontSize: '0.75rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
  },
  linkDesc: { color: '#888899', fontSize: '0.78rem' },
  arrow: { color: '#c084fc', fontSize: '1rem', flexShrink: 0 },
  statusCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    background: '#0d1f14',
    border: '1px solid #1a3a24',
    borderRadius: '12px',
    padding: '1.2rem 1.4rem',
  },
  statusDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: '#22c55e',
    flexShrink: 0,
    boxShadow: '0 0 8px #22c55e88',
  },
  statusTitle: {
    color: '#e8e8f0',
    fontSize: '0.9rem',
    fontWeight: 600,
    margin: 0,
  },
  statusDesc: { color: '#888899', fontSize: '0.8rem', margin: 0 },
  formCard: {
    background: '#111118',
    border: '1px solid #1e1e2e',
    borderRadius: '20px',
    padding: '2.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.25rem',
    marginTop: '1.5rem',
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.4rem',
  },
  fieldLabel: {
    color: '#888899',
    fontSize: '0.8rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
  },
  input: {
    background: '#0a0a0f',
    border: '1px solid #1e1e2e',
    borderRadius: '8px',
    padding: '0.75rem 1rem',
    color: '#e8e8f0',
    fontSize: '0.95rem',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box' as const,
  },
  submitBtn: {
    padding: '0.9rem',
    background: '#c084fc',
    color: '#0a0a0f',
    borderRadius: '8px',
    border: 'none',
    fontWeight: 700,
    fontSize: '1rem',
    cursor: 'pointer',
    width: '100%',
  },
  successBox: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '0.5rem',
    padding: '3rem',
    textAlign: 'center' as const,
  },
}