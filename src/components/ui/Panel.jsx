import styles from './Panel.module.css'

export default function Panel({ children, className = '', glow = false, style }) {
  return (
    <div
      className={`${styles.panel} ${glow ? styles.glow : ''} ${className}`}
      style={style}
    >
      <div className={styles.inner}>{children}</div>
    </div>
  )
}
