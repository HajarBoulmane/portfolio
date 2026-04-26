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

type Category = 'All' | 'AI/ML' | 'Full Stack' | 'Tools'

interface Project {
  title: string
  desc: string
  tags: string[]
  category: Omit<Category, 'All'>
  github: string
  demo?: string
  featured?: boolean
  icon: string
  year: string
}

const projects: Project[] = [
  {
    title: 'Honeypot AI',
    desc: 'AI-powered honeypot system that detects, logs, and analyzes malicious activity using machine learning to identify attack patterns in real time.',
    tags: ['Python', 'AI', 'Cybersecurity', 'ML'],
    category: 'AI/ML',
    github: 'https://github.com/HajarBoulmane/honeypot-ai',
    featured: true,
    icon: '🍯',
    year: '2025',
  },
  {
    title: 'Churn Prediction',
    desc: 'End-to-end Telco Churn prediction app with Gradient Boosting, FastAPI backend, Streamlit frontend, and real-time inference pipeline.',
    tags: ['Python', 'FastAPI', 'Streamlit', 'Gradient Boosting'],
    category: 'AI/ML',
    github: 'https://github.com/HajarBoulmane/churn-prediction',
    featured: true,
    icon: '📊',
    year: '2025',
  },
  {
    title: 'Phishing Email Detection',
    desc: 'Machine learning pipeline for detecting phishing emails — from data preprocessing to model training and evaluation.',
    tags: ['Python', 'NLP', 'ML', 'Pipeline'],
    category: 'AI/ML',
    github: 'https://github.com/HajarBoulmane/phishing-email-detection-pipeline',
    featured: true,
    icon: '🎣',
    year: '2025',
  },
  {
  title: 'SmartEdu Academic Management System',
  desc: 'Designed and built a full-stack web application to streamline academic operations, featuring real-time tracking of student performance, absence management, and interactive QCM-based evaluation workflows.',
  tags: ['React', 'Node.js', 'Express', 'MySQL', 'REST API'],
  category: 'Fullstack',
  github: 'https://github.com/SmartEdu-Org/SmartEdu',
  featured: true,
  icon: '🎓',
  year: '2025',
},
{
  title: 'SyndicApp Property Management System',
  desc: 'Built a web-based property management system to handle residences, charges, payments, and automated report generation for efficient condominium administration.',
  tags: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript'],
  category: 'Fullstack',
  github: 'https://github.com/MouadBourquouquou/syndicAPP',
  featured: true,
  icon: '🏢',
  year: '2025',
},
  {
    title: 'HK E-Commerce',
    desc: 'E-commerce web app for managing products, users, and shopping cart. Built with PHP, CSS, and JavaScript.',
    tags: ['PHP', 'JavaScript', 'CSS', 'E-Commerce'],
    category: 'Full Stack',
    github: 'https://github.com/HajarBoulmane/HK',
    icon: '🛍️',
    year: '2024',
  },
  {
    title: 'HK E-Commerce',
    desc: 'E-commerce web app for managing products, users, and shopping cart. Built with PHP, CSS, and JavaScript.',
    tags: ['PHP', 'JavaScript', 'CSS', 'E-Commerce'],
    category: 'Full Stack',
    github: 'https://github.com/HajarBoulmane/HK',
    icon: '🛍️',
    year: '2024',
  },
 
]


const tagColors: Record<string, string> = {
  Python: '#3776ab',
  Java: '#b07219',
  'Spring Boot': '#6db33f',
  FastAPI: '#009688',
  Docker: '#2496ed',
  PostgreSQL: '#336791',
  Flutter: '#54c5f8',
  Dart: '#00b4ab',
  PHP: '#777bb4',
  JavaScript: '#f0db4f',
  NLP: '#c084fc',
  ML: '#818cf8',
  AI: '#c084fc',
  Cybersecurity: '#ef4444',
  IoT: '#10b981',
  'Gradient Boosting': '#f59e0b',
  'CI/CD': '#ec4899',
}

function tagColor(tag: string) {
  return tagColors[tag] || '#888899'
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      style={s.featuredCard}
      whileHover={{ borderColor: '#c084fc', translateY: -6 }}
    >
      {/* Top bar */}
      <div style={s.featuredTop}>
        <span style={s.featuredIcon}>{project.icon}</span>
        <span style={s.featuredBadge}>Featured</span>
      </div>

      <h3 style={s.featuredTitle}>{project.title}</h3>
      <p style={s.featuredDesc}>{project.desc}</p>

      <div style={s.tagRow}>
        {project.tags.map(tag => (
          <span key={tag} style={{ ...s.tag, borderColor: tagColor(tag) + '55', color: tagColor(tag) }}>
            {tag}
          </span>
        ))}
      </div>

      <div style={s.cardLinks}>
        <a href={project.github} target="_blank" rel="noreferrer" style={s.linkBtn}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 5 }}>
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" style={s.linkBtnPrimary}>
            Live Demo ↗
          </a>
        )}
      </div>
    </motion.div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.97 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      style={s.projectCard}
      whileHover={{ borderColor: '#c084fc44', translateY: -4 }}
    >
      <div style={s.cardTop}>
        <span style={s.projectIcon}>{project.icon}</span>
        <span style={s.yearBadge}>{project.year}</span>
      </div>
      <h3 style={s.projectTitle}>{project.title}</h3>
      <p style={s.projectDesc}>{project.desc}</p>
      <div style={s.tagRow}>
        {project.tags.slice(0, 3).map(tag => (
          <span key={tag} style={{ ...s.tag, borderColor: tagColor(tag) + '44', color: tagColor(tag) }}>
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && (
          <span style={s.tagMore}>+{project.tags.length - 3}</span>
        )}
      </div>
      <div style={s.cardLinks}>
        <a href={project.github} target="_blank" rel="noreferrer" style={s.linkBtn}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 4 }}>
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')

  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)
  const filtered = activeCategory === 'All' ? rest : rest.filter(p => p.category === activeCategory)

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
          My Work
        </motion.p>
        <motion.h1
          style={s.heroTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Things I've<br />
          <span style={s.accent}>built</span>
        </motion.h1>
        <motion.p
          style={s.heroSub}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          From AI pipelines to full-stack apps — a collection of projects
          I've shipped, learned from, and am proud of.
        </motion.p>

        {/* Stats */}
        <motion.div
          style={s.stats}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { value: `4+`, label: 'Projects' },
            { value: '4+', label: 'Languages' },
            { value: '3', label: 'AI/ML Projects' },
            { value: '2025', label: 'Active' },
          ].map(stat => (
            <div key={stat.label} style={s.statItem}>
              <span style={s.statValue}>{stat.value}</span>
              <span style={s.statLabel}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── FEATURED ── */}
      <section style={s.section}>
        <FadeUp>
          <p style={s.label}>Highlights</p>
          <h2 style={s.sectionTitle}>Featured <span style={s.accent}>Projects</span></h2>
        </FadeUp>
        <div style={s.featuredGrid}>
          {featured.map((p, i) => (
            <FeaturedCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section style={s.section}>
        <FadeUp>
          <p style={s.label}>Explore</p>
          <h2 style={s.sectionTitle}>All <span style={s.accent}>Projects</span></h2>
        </FadeUp>
        
        <div style={s.filterRow}>
          {(['All', 'AI/ML', 'Full Stack', 'Tools'] as Category[]).map(cat => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                ...s.filterBtn,
                ...(activeCategory === cat ? s.filterBtnActive : {}),
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <div style={s.projectGrid}>
          {filtered.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <FadeUp>
        <section style={s.cta}>
          <h2 style={s.ctaTitle}>Get in touch</h2>
          <p style={s.ctaDesc}>Connect with me on LinkedIn or email me at hajarboulmane03@gmail.com</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" style={s.btnPrimary}>Get in touch →</a>
            <a href="https://github.com/HajarBoulmane" target="_blank" rel="noreferrer" style={s.btnSecondary}>
              View GitHub ↗
            </a>
          </div>
        </section>
      </FadeUp>
      <Footer />
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
  heroSub: { fontSize: '1.1rem', color: '#aaaabc', lineHeight: 1.7, maxWidth: '540px', marginBottom: '2.5rem' },
  accent: { color: '#c084fc' },

  stats: { display: 'flex', gap: '2.5rem', flexWrap: 'wrap' as const },
  statItem: { display: 'flex', flexDirection: 'column' as const, gap: '2px' },
  statValue: { fontSize: '1.8rem', fontWeight: 700, color: '#e8e8f0' },
  statLabel: { fontSize: '0.8rem', color: '#888899', textTransform: 'uppercase' as const, letterSpacing: '0.08em' },

  // Section
  section: { padding: '3rem 5rem' },
  sectionTitle: { fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#e8e8f0', marginBottom: '2rem' },

  // Featured grid
  featuredGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' },
  featuredCard: {
    background: '#111118',
    border: '1px solid #1e1e2e',
    borderRadius: '16px',
    padding: '2rem',
    cursor: 'default',
    transition: 'border-color 0.2s, transform 0.2s',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.75rem',
  },
  featuredTop: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  featuredIcon: { fontSize: '2rem' },
  featuredBadge: { fontSize: '0.72rem', fontWeight: 600, color: '#c084fc', background: '#c084fc15', border: '1px solid #c084fc33', borderRadius: '20px', padding: '0.25rem 0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase' as const },
  featuredTitle: { fontSize: '1.2rem', fontWeight: 700, color: '#e8e8f0', margin: 0 },
  featuredDesc: { fontSize: '0.9rem', color: '#888899', lineHeight: 1.65, flex: 1, margin: 0 },

  // Tags
  tagRow: { display: 'flex', flexWrap: 'wrap' as const, gap: '0.4rem' },
  tag: { fontSize: '0.75rem', fontWeight: 500, border: '1px solid', borderRadius: '4px', padding: '0.2rem 0.6rem' },
  tagMore: { fontSize: '0.75rem', color: '#888899', border: '1px solid #1e1e2e', borderRadius: '4px', padding: '0.2rem 0.6rem' },

  // Links
  cardLinks: { display: 'flex', gap: '0.6rem', marginTop: '0.5rem' },
  linkBtn: { display: 'flex', alignItems: 'center', padding: '0.4rem 1rem', border: '1px solid #1e1e2e', borderRadius: '6px', color: '#aaaabc', textDecoration: 'none', fontSize: '0.82rem', transition: 'all 0.2s' },
  linkBtnPrimary: { display: 'flex', alignItems: 'center', padding: '0.4rem 1rem', background: '#c084fc', borderRadius: '6px', color: '#0a0a0f', textDecoration: 'none', fontSize: '0.82rem', fontWeight: 600 },

  // Filter
  filterRow: { display: 'flex', gap: '0.6rem', marginBottom: '2rem', flexWrap: 'wrap' as const },
  filterBtn: { padding: '0.5rem 1.2rem', border: '1px solid #1e1e2e', borderRadius: '8px', background: 'transparent', color: '#888899', fontSize: '0.88rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'all 0.2s' },
  filterBtnActive: { background: '#c084fc15', border: '1px solid #c084fc44', color: '#e8e8f0' },
  filterCount: { background: '#1e1e2e', color: '#888899', borderRadius: '10px', fontSize: '0.72rem', padding: '0.1rem 0.45rem', fontWeight: 600 },
  filterCountActive: { background: '#c084fc33', color: '#c084fc' },

  // Project grid
  projectGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.2rem' },
  projectCard: {
    background: '#111118',
    border: '1px solid #1e1e2e',
    borderRadius: '14px',
    padding: '1.5rem',
    cursor: 'default',
    transition: 'border-color 0.2s, transform 0.2s',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.6rem',
  },
  cardTop: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  projectIcon: { fontSize: '1.6rem' },
  yearBadge: { fontSize: '0.72rem', color: '#888899', border: '1px solid #1e1e2e', borderRadius: '4px', padding: '0.15rem 0.5rem' },
  projectTitle: { fontSize: '1rem', fontWeight: 700, color: '#e8e8f0', margin: 0 },
  projectDesc: { fontSize: '0.85rem', color: '#888899', lineHeight: 1.6, flex: 1, margin: 0 },

  // CTA
  cta: { margin: '2rem 5rem 5rem', background: 'linear-gradient(135deg, #1a0a2e, #111118)', border: '1px solid #2a1a4e', borderRadius: '20px', padding: '4rem', textAlign: 'center' as const },
  ctaTitle: { fontSize: '2rem', fontWeight: 700, color: '#e8e8f0', marginBottom: '0.75rem' },
  ctaDesc: { color: '#aaaabc', fontSize: '1rem', marginBottom: '2rem' },
  btnPrimary: { padding: '0.85rem 2.5rem', background: '#c084fc', color: '#0a0a0f', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem' },
  btnSecondary: { padding: '0.85rem 2.5rem', border: '1px solid #c084fc44', color: '#c084fc', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem' },
}