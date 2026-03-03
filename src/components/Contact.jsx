import { useState } from 'react'
import { personal } from '../data/resume'
import { downloadCv } from '../utils/downloadCv'
import SectionTitle from './ui/SectionTitle'
import Panel from './ui/Panel'
import styles from './Contact.module.css'

function IconMail() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
}
function IconPhone() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 5.35 5.35l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
}
function IconLinkedIn() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
}
function IconDownload() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
}

export default function Contact() {
  const [generating, setGenerating] = useState(false)

  async function handleDownload() {
    setGenerating(true)
    try { await downloadCv() } finally { setGenerating(false) }
  }
  return (
    <section id="contact">
      <div className="container">
        <SectionTitle subtitle="Reach Out & Connect">Contact</SectionTitle>

        <Panel className={styles.panel} glow>
          <p className={styles.intro}>
            Looking for a driven, versatile full-stack developer? Let's connect.
          </p>

          <div className={styles.links}>
            <a href={`mailto:${personal.email}`} className={styles.link}>
              <IconMail />
              <span>{personal.email}</span>
            </a>
            <a href={`tel:${personal.phone}`} className={styles.link}>
              <IconPhone />
              <span>{personal.phone}</span>
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <IconLinkedIn />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className={styles.download}>
            <button
              className={styles.downloadBtn}
              onClick={handleDownload}
              disabled={generating}
            >
              {!generating && <IconDownload />}
              {generating ? 'Generating PDF…' : 'Download Full CV'}
            </button>
          </div>
        </Panel>

        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} Grant Verheul · Johannesburg, South Africa</p>
        </footer>
      </div>
    </section>
  )
}
