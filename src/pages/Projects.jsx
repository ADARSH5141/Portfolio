import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import styles from './Projects.module.css'

const projects = [
  {
    num: '01',
    name: 'Innov Genius',
    url: 'innov-genius.vercel.app',
    desc: 'An AI-powered web application built to assist with innovation and creative problem-solving. Deployed on Vercel.',
  },
  {
    num: '02',
    name: 'Zite Project',
    url: '1c6u97xhes.zite.so',
    desc: 'A creative frontend exploration project. Testing layouts, interactivity, and UI concepts as part of my early web development learning.',
  },
  {
    num: '03',
    name: 'Netlify Experiment',
    url: 'comforting-douhua-1f0e69.netlify.app',
    displayUrl: 'netlify.app',
    desc: 'A deployed experiment on Netlify exploring UI components, layouts, and frontend concepts. Part of my ongoing learning journey.',
  },
]

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.header}>
        <motion.p
          className={styles.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          All Projects
        </motion.p>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          My Best Creations
        </motion.h1>
        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Building real things with AI — deployed, live, and always evolving.
        </motion.p>
      </div>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
          >
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </div>

      <Footer />
    </motion.div>
  )
}
