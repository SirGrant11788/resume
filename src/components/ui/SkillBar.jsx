import { useEffect, useRef, useState } from 'react'
import styles from './SkillBar.module.css'

export default function SkillBar({ name, level }) {
  const [filled, setFilled] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(level)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [level])

  return (
    <div className={styles.wrapper} ref={ref}>
      <div className={styles.header}>
        <span className={styles.name}>{name}</span>
        <span className={styles.level}>{level}%</span>
      </div>
      <div className={styles.track}>
        <div
          className={styles.fill}
          style={{ width: `${filled}%` }}
        />
        <div className={styles.segments} />
      </div>
    </div>
  )
}
