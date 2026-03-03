import styles from './SectionTitle.module.css'

export default function SectionTitle({ children, subtitle }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rule}>
        <span className={styles.ornament}>&#10022;</span>
        <h2 className={styles.title}>{children}</h2>
        <span className={styles.ornament}>&#10022;</span>
      </div>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}
