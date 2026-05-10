import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <span className={styles.logo} onClick={() => { navigate('/'); close() }}>
        Muzafer.
      </span>

      <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        <NavLink to="/" end className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`} onClick={close}>Home</NavLink>
        <NavLink to="/projects" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`} onClick={close}>Projects</NavLink>
        <NavLink to="/about" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`} onClick={close}>About</NavLink>
        <NavLink to="/contact" className={styles.contactBtn} onClick={close}>./contact</NavLink>
      </div>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className={menuOpen ? styles.barOpen : ''} />
        <span className={menuOpen ? styles.barOpen : ''} />
        <span className={menuOpen ? styles.barOpen : ''} />
      </button>
    </nav>
  )
}
