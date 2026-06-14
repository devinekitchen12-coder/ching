import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container nav-inner">
        <a href="#home" className="nav-logo" onClick={close}>
          <img src="/logo.png" alt="Ching Kong" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo.svg' }} />
          CHING<span>KONG</span>
        </a>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {['Home', 'Our Story', 'Menu', 'Gallery', 'Reviews', 'Contact'].map((label, i) => {
            const href = ['#home', '#about', '#menu', '#gallery', '#reviews', '#contact'][i]
            return (
              <motion.li
                key={label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <a href={href} onClick={close}>{label}</a>
              </motion.li>
            )
          })}
        </ul>

        <div className="nav-cta">
          <motion.a
            className="btn btn-primary"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 50px rgba(230, 48, 39, 0.35), 0 0 20px rgba(230, 48, 39, 0.15)',
              transition: { duration: 0.3 }
            }}
          >
            Order Now
          </motion.a>
          <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
