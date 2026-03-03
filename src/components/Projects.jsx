import { projects } from '../data/resume'
import SectionTitle from './ui/SectionTitle'
import Panel from './ui/Panel'
import styles from './Projects.module.css'

const typeColors = {
  'Professional': 'var(--gold-dim)',
  'Personal / Commercial': 'var(--accent-green)',
  'Personal': 'var(--accent-blue)',
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <SectionTitle subtitle="Notable Quests & Campaigns">Projects</SectionTitle>

        <div className={styles.grid}>
          {projects.map((proj) => (
            <Panel key={proj.id} className={styles.card}>
              <div className={styles.badge} style={{ borderColor: typeColors[proj.type] || 'var(--gold-dim)' }}>
                {proj.type}
              </div>
              <h3 className={styles.title}>{proj.title}</h3>
              <p className={styles.desc}>{proj.description}</p>
              <div className={styles.stack}>
                {proj.stack.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </Panel>
          ))}
        </div>
      </div>
    </section>
  )
}
