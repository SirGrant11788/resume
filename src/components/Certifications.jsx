import { certifications } from '../data/resume'
import SectionTitle from './ui/SectionTitle'
import Panel from './ui/Panel'
import styles from './Certifications.module.css'

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <SectionTitle subtitle="Achievements & Qualifications">Certifications</SectionTitle>

        <div className={styles.list}>
          {certifications.map((cert) => (
            <Panel key={cert.id} className={styles.cert}>
              {/* Medal icon */}
              <div className={styles.medal} aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>
              <div className={styles.info}>
                <h3 className={styles.title}>{cert.title}</h3>
                <p className={styles.issuer}>{cert.issuer}</p>
              </div>
              <span className={styles.year}>{cert.year}</span>
            </Panel>
          ))}
        </div>
      </div>
    </section>
  )
}
