import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { fadeUp, fadeLeft, staggerContainer, viewportSettings } from '../hooks/useScrollReveal.js'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const visualRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    // Parallax background scale effect
    gsap.fromTo(visualRef.current,
      { scale: 1.1 },
      {
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    )
  }, [])

  return (
    <section id="about" className="about" ref={wrapperRef}>
      <div className="container about-grid">
        <div style={{ overflow: 'hidden', borderRadius: 'var(--radius)' }}>
          <div className="about-visual" ref={visualRef} style={{ width: '100%', height: '100%' }}>
            <div className="about-badge" style={{ transform: 'scale(0.909)' }}>Since Day 1</div>
          </div>
        </div>

        <motion.div 
          className="about-content"
          variants={staggerContainer(0.12, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <motion.p className="section-eyebrow" variants={fadeUp}>Our Story</motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            FROM DREAMS <br/><span className="accent">TO WOKS</span>
          </motion.h2>
          <motion.p className="about-quote" variants={fadeUp}>
            "Cooking is my way of bringing people together."
          </motion.p>
          <motion.p variants={fadeUp}>
            My journey started with <strong>YouTube</strong> — where I learned creativity,
            storytelling, and the power of connecting with people. From there, I stepped
            into <strong>event management</strong>, working on concerts, festivals, and
            curated trips, picking up leadership, operations, and what truly makes a guest
            smile.
          </motion.p>
          <motion.p variants={fadeUp}>
            Through every project, one passion stayed constant — <strong>food</strong>.
            Ching Kong is the result of years of dreaming, learning, and stirring the wok.
            It's a brand built on passion, hard work, and a promise to create
            <em> memorable experiences through great food</em>.
          </motion.p>

          <motion.div className="about-pillars" variants={staggerContainer(0.15, 0.4)}>
            <motion.div 
              className="pillar" 
              variants={fadeUp}
            >
              <div className="icon">🔥</div>
              <strong>Wok-Fired</strong>
              <span>Smoky street style</span>
            </motion.div>
            <motion.div 
              className="pillar" 
              variants={fadeUp}
            >
              <div className="icon">🌶️</div>
              <strong>Own Sauces</strong>
              <span>House-made daily</span>
            </motion.div>
            <motion.div 
              className="pillar" 
              variants={fadeUp}
            >
              <div className="icon">❤️</div>
              <strong>Made With Love</strong>
              <span>From my kitchen to yours</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
