import { experience } from '../data/resume'
import SectionTitle from './ui/SectionTitle'
import Panel from './ui/Panel'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <SectionTitle subtitle="Full-Stack Developer · Lead · DevOps">
          Experience
        </SectionTitle>

        <div className={styles.timeline}>
          {experience.map((job, idx) => (
            <div className={styles.entry} key={job.id}>
              {/* Timeline spine dot */}
              <div className={styles.dot} />
              {/* Connector line (hidden on last item) */}
              {idx < experience.length - 1 && <div className={styles.line} />}

              <Panel className={styles.card}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.role}>{job.role}</h3>
                    <p className={styles.company}>
                      {job.company}
                      {job.client && <span className={styles.client}> — {job.client}</span>}
                    </p>
                  </div>
                  <span className={styles.period}>{job.period}</span>
                </div>

                {job.summary && (
                  <p className={styles.summary}>{job.summary}</p>
                )}

                {job.bullets.length > 0 && (
                  <ul className={styles.bullets}>
                    {job.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}

                {job.stack.length > 0 && (
                  <div className={styles.stack}>
                    {job.stack.map((s) => (
                      <span key={s} className="chip">{s}</span>
                    ))}
                  </div>
                )}
              </Panel>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
