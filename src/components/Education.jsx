import { education } from '../data/resume'
import SectionTitle from './ui/SectionTitle'
import Panel from './ui/Panel'
import styles from './Education.module.css'

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <SectionTitle subtitle="Academic Background">Education</SectionTitle>

        <div className={styles.grid}>
          {education.map((edu) => (
            <Panel key={edu.id} className={styles.card}>
              <div className={styles.year}>{edu.year}</div>
              <h3 className={styles.qual}>{edu.qualification}</h3>
              <p className={styles.institution}>{edu.institution}</p>
            </Panel>
          ))}
        </div>
      </div>
    </section>
  )
}
