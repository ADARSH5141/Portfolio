import React from 'react'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={styles.wrapper}
    >
      <div className={styles.center}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          Let's<br /><span>Connect.</span>
        </motion.h1>

        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          Student, builder, thinker — always open to conversations, collaborations, and new ideas.
        </motion.p>

        <motion.div
          className={styles.btns}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
        >
          <a
            className={styles.btnPrimary}
            href="https://github.com/muzafer26"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub →
          </a>
          <a
            className={styles.btnGhost}
            href="https://www.linkedin.com/in/muzafer-shaikh-726a40338/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn →
          </a>
        </motion.div>

        <motion.p
          className={styles.cta}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <strong>Interested in working together?</strong><br />
          Reach out through any of the links above.
        </motion.p>
      </div>

      <Footer />
    </motion.div>
  )
}
