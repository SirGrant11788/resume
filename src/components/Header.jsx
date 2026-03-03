import { useState, useEffect } from 'react'
import styles from './Header.module.css'

const NAV_ITEMS = [
  { label: 'About',          href: '#hero' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Education',      href: '#education' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeHref, setActiveHref] = useState('#hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      // Highlight active section
      const sections = NAV_ITEMS.map((n) => document.querySelector(n.href))
      let current = '#hero'
      sections.forEach((el) => {
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = `#${el.id}`
        }
      })
      setActiveHref(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo / Wordmark */}
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoInitials}>GV</span>
          <span className={styles.logoName}>Grant Verheul</span>
        </a>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Site navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${styles.navItem} ${activeHref === item.href ? styles.active : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Hamburger for mobile */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav className={styles.mobileMenu} aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${styles.mobileItem} ${activeHref === item.href ? styles.active : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
