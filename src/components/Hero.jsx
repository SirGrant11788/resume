import { useState } from 'react'
import { personal, industryExposure } from '../data/resume'
import { downloadCv } from '../utils/downloadCv'
import styles from './Hero.module.css'

function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
}
function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 5.35 5.35l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}
function IconPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}
function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

export default function Hero() {
  const [generating, setGenerating] = useState(false)

  async function handleDownload() {
    setGenerating(true)
    try { await downloadCv() } finally { setGenerating(false) }
  }
  return (
    <section className={styles.hero} id="hero">
      {/* Decorative background glow orbs */}
      <div className={styles.glowOrb} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* Avatar / Crest */}
        <div className={styles.crest}>
          <div className={styles.avatarRing}>
            <div className={styles.avatarInner}>
              <span className={styles.initials}>GV</span>
            </div>
          </div>
        </div>

        {/* Text block */}
        <div className={styles.text}>
          <p className={styles.subtitle}>~ Senior Software Developer ~</p>
          <h1 className={styles.name}>{personal.name}</h1>

          <div className={styles.divider} aria-hidden="true">
            <span>&#10022;</span>
            <span className={styles.dividerLine} />
            <span>&#10022;</span>
          </div>

          <p className={styles.tagline}>{personal.tagline}</p>

          {/* Industry exposure chips */}
          <div className={styles.industries}>
            {industryExposure.map((ind) => (
              <span key={ind} className="chip">{ind}</span>
            ))}
          </div>

          {/* Contact row */}
          <ul className={styles.contacts}>
            <li>
              <span className={styles.contactIcon}><IconPin /></span>
              {personal.location}
            </li>
            <li>
              <a href={`mailto:${personal.email}`}>
                <span className={styles.contactIcon}><IconMail /></span>
                {personal.email}
              </a>
            </li>
            <li>
              <a href={`tel:${personal.phone}`}>
                <span className={styles.contactIcon}><IconPhone /></span>
                {personal.phone}
              </a>
            </li>
            <li>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
                <span className={styles.contactIcon}><IconLinkedIn /></span>
                LinkedIn
              </a>
            </li>
          </ul>

          {/* CTA */}
          <div className={styles.cta}>
            <button
              className={styles.btnPrimary}
              onClick={handleDownload}
              disabled={generating}
            >
              {generating ? 'Generating PDF…' : 'Download CV'}
            </button>
            <a href="#experience" className={styles.btnSecondary}>
              View Experience
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className={styles.bottomFade} aria-hidden="true" />
    </section>
  )
}
