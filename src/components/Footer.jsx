import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  const navigate = useNavigate()
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <span className={styles.logo}>Muzafer.</span>
        <span className={styles.sub}>Mumbai, India · SYBCA Student</span>
      </div>
      <div className={styles.links}>
        {[['/', 'Home'], ['/projects', 'Projects'], ['/about', 'About'], ['/contact', 'Contact']].map(([path, label]) => (
          <span key={path} className={styles.link} onClick={() => navigate(path)}>{label}</span>
        ))}
      </div>
      <div className={styles.social}>
        <a className={styles.socialBtn} href="https://github.com/muzafer26" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GH</a>
        <a className={styles.socialBtn} href="https://www.linkedin.com/in/muzafer-shaikh-726a40338/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
      </div>
    </footer>
  )
}
