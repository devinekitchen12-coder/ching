import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { fadeUp, staggerContainer, viewportSettings } from '../hooks/useScrollReveal.js'

gsap.registerPlugin(ScrollTrigger)

const images = [
  { src: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=80', alt: 'Crispy spring rolls', cls: 'tall' },
  { src: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80', alt: 'Honey chilli', cls: '' },
  { src: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80', alt: 'Momos', cls: '' },
  { src: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&q=80', alt: 'Schezwan noodles', cls: 'wide' },
  { src: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&q=80', alt: 'Bao buns', cls: '' },
  { src: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80', alt: 'Wok cooking', cls: '' },
  { src: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80', alt: 'Fried rice', cls: 'tall' }
]

export default function Gallery() {
  const gridRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const items = gsap.utils.toArray('.gallery-item-anim')
    
    items.forEach((item, index) => {
      // Create a slight parallax effect - some items move up slightly faster/slower based on index
      const speed = index % 2 === 0 ? -15 : -30;
      
      gsap.to(item, {
        y: speed,
        ease: 'none',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    })
  }, [])

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <motion.div 
          className="section-head"
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <motion.p className="section-eyebrow" variants={fadeUp}>Gallery</motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            A FEAST FOR <span className="accent">THE EYES</span>
          </motion.h2>
          <motion.p className="section-sub" variants={fadeUp}>Snapshots from our wok — flames, sauces and happy plates.</motion.p>
        </motion.div>

        <div className="gallery-grid" ref={gridRef}>
          {images.map((img, i) => (
            <motion.div 
              key={i} 
              className={`gallery-item gallery-item-anim ${img.cls}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-overlay-text">{img.alt}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
