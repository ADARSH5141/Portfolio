import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import styles from './Home.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
})

const projects = [
  {
    num: '01',
    name: 'Innov Genius',
    url: 'innov-genius.vercel.app',
    desc: 'AI-powered web app built to assist with innovation and problem-solving.',
  },
  {
    num: '02',
    name: 'Zite Project',
    url: '1c6u97xhes.zite.so',
    desc: 'Creative frontend exploration — testing layouts and interactive ideas.',
  },
  {
    num: '03',
    name: 'Netlify Experiment',
    url: 'comforting-douhua-1f0e69.netlify.app',
    displayUrl: 'netlify.app',
    desc: 'Deployed UI experiment testing components and frontend concepts.',
  },
]

const skills = [
  {
    cat: 'AI & Tools',
    tags: ['AI-Assisted Dev', 'Vibe Coding', 'Prompt Engineering', 'ChatGPT', 'Claude'],
  },
  {
    cat: 'Frontend',
    tags: ['HTML', 'CSS', 'JavaScript', 'Web Deployment'],
  },
  {
    cat: 'Exploring',
    tags: ['Machine Learning', 'Python', 'Core CS'],
  },
  {
    cat: 'Soft Skills',
    tags: ['Critical Thinking', 'Curiosity', 'Learning Mindset', 'Storytelling'],
  },
]

export default function Home() {
  const navigate = useNavigate()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.p className={styles.greeting} {...fadeUp(0.05)}>Hey, I'm Muzafer 👋</motion.p>
          <motion.h1 className={styles.title} {...fadeUp(0.15)}>
            Computer<br />Applications<br /><span>Student.</span>
          </motion.h1>
          <motion.p className={styles.subtitle} {...fadeUp(0.25)}>
            I'm a student from Mumbai building with AI, exploring machine learning, and thinking about what it means to build things that matter.
          </motion.p>
          <motion.div className={styles.ctas} {...fadeUp(0.35)}>
            <button className={styles.btnPrimary} onClick={() => navigate('/contact')}>Get In Touch →</button>
            <button className={styles.btnGhost} onClick={() => navigate('/projects')}>Browse Projects →</button>
          </motion.div>
        </div>
        <motion.div className={styles.avatar} {...fadeUp(0.45)}>MS</motion.div>
      </section>

      <div className={styles.divider} />

      {/* Projects Preview */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Selected Work</p>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <p className={styles.sectionSub}>Building real things with AI — deployed, live, and always evolving.</p>
        <div className={styles.grid}>
          {projects.map(p => (
            <ProjectCard key={p.num} {...p} />
          ))}
        </div>
      </section>

      <div className={styles.divider} />

      {/* Skills */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Capabilities</p>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.skillsGrid}>
          {skills.map(s => (
            <div className={styles.skillCat} key={s.cat}>
              <p className={styles.catName}>{s.cat}</p>
              <div className={styles.tags}>
                {s.tags.map(t => <span className={styles.tag} key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.divider} />

      {/* Story */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>My Story</p>
        <h2 className={styles.sectionTitle}>Who I Am</h2>
        <div className={styles.storyBlock}>
          <p>
            My journey started with <em>curiosity</em> — not a career plan. I'm a SYBCA student in Mumbai figuring out who I want to become as a developer. I've built real projects using AI as a collaborator, touched on machine learning, and deployed things to the web that actually work.
          </p>
          <p>
            I believe the best developers <em>think deeply, not just code quickly</em>. That belief comes from the films that shaped me — Dead Poets Society, The Imitation Game, The Green Mile. And the games I play — story-driven, choice-based, like Detroit: Become Human — where every decision has weight.
          </p>
          <p>
            I'm not a specialist yet. I'm a <em>learner with direction</em>. And I'm building my way there — one project at a time.
          </p>
        </div>
      </section>

      <Footer />
    </motion.div>
  )
}
