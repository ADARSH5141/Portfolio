import React from 'react'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import styles from './About.module.css'

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <section className={styles.section}>
        <motion.p className={styles.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
          About
        </motion.p>
        <motion.h1 className={styles.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.12 }}>
          About Me
        </motion.h1>
        <motion.p className={styles.sub} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.18 }}>
          Student. Builder. Thinker.
        </motion.p>

        <motion.div
          className={styles.grid}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
        >
          <div className={styles.bio}>
            <p>I'm <strong>Muzafer Shaikh</strong>, a Computer Applications student from Sakinaka, Mumbai. I'm navigating the space between curiosity and craft — learning by building, and building by thinking.</p>
            <p>I use <strong>AI as a creative and technical partner</strong>. I've shipped real projects, explored machine learning fundamentals, and I'm comfortable with web deployment across Vercel, Netlify, and Zite.</p>
            <p>Outside of code, I play story-driven, choice-based games like <strong>Detroit: Become Human</strong> — games that make you think about identity, morality, and consequence. I watch films that rewire how you see the world: Dead Poets Society, The Imitation Game, The Green Mile.</p>
            <p>My goal is to become a <strong>proper developer and thinker</strong> — not just someone who writes code, but someone who understands why it matters.</p>
          </div>

          <div className={styles.card}>
            {[
              { label: 'Education', value: 'SYBCA — Second Year Bachelor of Computer Applications, Mumbai' },
              { label: 'Based in', value: 'Sakinaka, Mumbai, India' },
              { label: 'Interests', value: 'AI development, ML, story-driven games, cinema, deep thinking' },
              { label: 'Films', value: 'Dead Poets Society · The Imitation Game · The Green Mile' },
              { label: 'Games', value: 'Detroit: Become Human' },
            ].map(row => (
              <div className={styles.row} key={row.label}>
                <span className={styles.rowLabel}>{row.label}</span>
                <span className={styles.rowVal}>{row.value}</span>
              </div>
            ))}
            <div className={styles.row}>
              <span className={styles.rowLabel}>GitHub</span>
              <span className={styles.rowVal}>
                <a href="https://github.com/muzafer26" target="_blank" rel="noopener noreferrer">github.com/muzafer26</a>
              </span>
            </div>
            <div className={styles.row} style={{ borderBottom: 'none', paddingBottom: 0 }}>
              <span className={styles.rowLabel}>LinkedIn</span>
              <span className={styles.rowVal}>
                <a href="https://www.linkedin.com/in/muzafer-shaikh-726a40338/" target="_blank" rel="noopener noreferrer">linkedin.com/in/muzafer-shaikh</a>
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </motion.div>
  )
}
