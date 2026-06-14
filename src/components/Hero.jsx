import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { fadeUp, fadeLeft, staggerContainer, viewportSettings } from '../hooks/useScrollReveal.js'

export default function Hero() {
  const statsRef = useRef(null)
  const isInView = useInView(statsRef, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReduced) return

      const targets = gsap.utils.toArray('.stat-num')
      targets.forEach(target => {
        const endValue = parseFloat(target.getAttribute('data-val'))
        const suffix = target.getAttribute('data-suffix') || ''
        
        gsap.fromTo(target, 
          { textContent: 0 },
          {
            textContent: endValue,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: endValue % 1 === 0 ? 1 : 0.1 },
            stagger: 0.2,
            onUpdate: function() {
              target.innerHTML = this.targets()[0].textContent + suffix
            }
          }
        )
      })
    }
  }, [isInView])

  const titleWords = ["CHING", "KONG"]

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <motion.div 
          className="hero-text"
          variants={staggerContainer(0.15, 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <motion.span className="hero-tag" variants={fadeLeft}>
            <span className="dot"></span> Now serving in Panchkula
          </motion.span>
          
          <h1 style={{ overflow: 'hidden' }}>
            <motion.span 
              className="word-red"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            >
              CHING
            </motion.span>{' '}
            <motion.span
              style={{ display: 'inline-block' }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
            >
              KONG
            </motion.span>
            <motion.span 
              className="word-script"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              our wok talks
            </motion.span>
          </h1>
          
          <motion.p variants={fadeUp}>
            Bold Indo-Chinese street food, fired up in our own signature sauces.
            Crispy, saucy, smoky — every bite is a story from the wok.
          </motion.p>
          
          <motion.div className="hero-actions" variants={staggerContainer(0.1, 0)}>
            <motion.a 
              href="#menu" 
              className="btn btn-primary"
              variants={fadeUp}
            >
              Explore Menu →
            </motion.a>
            
          </motion.div>
          
          <motion.div className="hero-stats" ref={statsRef} variants={fadeUp}>
            <div className="hero-stat">
              <strong className="stat-num" data-val="100" data-suffix="%">100%</strong>
              <span>Made in own sauces</span>
            </div>
            <div className="hero-stat">
              <strong className="stat-num" data-val="4.8" data-suffix="★">4.8★</strong>
              <span>Loved by foodies</span>
            </div>
            <div className="hero-stat">
              <strong className="stat-num" data-val="20" data-suffix="+">20+</strong>
              <span>Wok-fired dishes</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="hero-chip chip-1">
            <div className="chip-inner">
              <span className="emoji">🌶️</span> Schezwan Special
            </div>
          </div>
          <div className="hero-disc">
            <img src="/logo.png" alt="Ching Kong logo" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo.svg' }} />
          </div>
          <div className="hero-chip chip-2">
            <div className="chip-inner">
              <span className="emoji">🥟</span> Fresh Momos Daily
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
