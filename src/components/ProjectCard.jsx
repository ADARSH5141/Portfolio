import React from 'react'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ num, name, desc, url, displayUrl }) {
  return (
    <a
      className={styles.card}
      href={`https://${url}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.mockup}>
        <div className={styles.browser}>
          <div className={styles.bar}>
            <div className={styles.dots}>
              <div className={`${styles.dot} ${styles.red}`} />
              <div className={`${styles.dot} ${styles.yellow}`} />
              <div className={`${styles.dot} ${styles.green}`} />
            </div>
            <div className={styles.urlBar} />
          </div>
          <div className={styles.body}>
            <div className={`${styles.line} ${styles.purple}`} style={{ width: '60%' }} />
            <div className={styles.line} style={{ width: '90%' }} />
            <div className={styles.line} style={{ width: '75%' }} />
            <div className={`${styles.line} ${styles.purpleLight}`} style={{ width: '45%' }} />
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <p className={styles.num}>{num}</p>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.desc}>{desc}</p>
        <span className={styles.link}>{displayUrl || url} →</span>
      </div>
    </a>
  )
}
