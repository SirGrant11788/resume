import { skills } from '../data/resume'
import SectionTitle from './ui/SectionTitle'
import Panel from './ui/Panel'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <SectionTitle subtitle="Character Stats & Abilities">Skills</SectionTitle>

        <div className={styles.grid}>
          <Panel className={styles.category}>
            <h3 className={styles.catTitle}>Languages</h3>
            <div className={styles.softChips}>
              {skills.languages.map((s) => (
                <span key={s} className={styles.softChip}>{s}</span>
              ))}
            </div>
          </Panel>

          <Panel className={styles.category}>
            <h3 className={styles.catTitle}>Frontend</h3>
            <div className={styles.softChips}>
              {skills.frontend.map((s) => (
                <span key={s} className={styles.softChip}>{s}</span>
              ))}
            </div>
          </Panel>

          <Panel className={styles.category}>
            <h3 className={styles.catTitle}>Backend & DevOps</h3>
            <div className={styles.softChips}>
              {skills.backendDevOps.map((s) => (
                <span key={s} className={styles.softChip}>{s}</span>
              ))}
            </div>
          </Panel>

          <Panel className={styles.softSkills}>
            <h3 className={styles.catTitle}>Soft Skills &amp; Methodologies</h3>
            <div className={styles.softChips}>
              {skills.softSkills.map((s) => (
                <span key={s} className={styles.softChip}>{s}</span>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </section>
  )
}
