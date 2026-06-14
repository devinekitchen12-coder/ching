import { motion } from 'framer-motion'
import { fadeUp, viewportSettings } from '../hooks/useScrollReveal.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.6, delay: 0 * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="footer-brand">
              <div className="logo">
                <img src="/logo.png" alt="" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo.svg' }} />
                CHING<span>KONG</span>
              </div>
              <p>
                Indo-Chinese street food, fired in our own signature sauces.
                From dreams to woks — built with passion in Panchkula.
              </p>
              <div className="footer-social">
                {['📸', '💬', 'f', '▶'].map((icon, i) => (
                  <motion.a 
                    key={i}
                    href={
                      i === 0 ? "https://instagram.com" :
                      i === 1 ? "https://wa.me/919915635585" :
                      i === 2 ? "https://facebook.com" : "https://youtube.com"
                    }
                    aria-label={
                      i === 0 ? "Instagram" :
                      i === 1 ? "WhatsApp" :
                      i === 2 ? "Facebook" : "YouTube"
                    }
                    target="_blank" 
                    rel="noreferrer"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: 0.3 + (i * 0.1), type: 'spring' }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.6, delay: 1 * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h4>EXPLORE</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#reviews">Reviews</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.6, delay: 2 * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h4>ACTIONS</h4>
            <ul>
              <li><a href="#reserve">Reserve Table</a></li>
              <li><a href="#reserve">Order Online</a></li>
              <li><a href="#reserve">Business Queries</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.6, delay: 3 * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h4>VISIT US</h4>
            <ul>
              <li>📍 Panchkula, Haryana</li>
              <li>📞 +91 99156 35585</li>
              <li>🕒 11:00 AM – 11:00 PM</li>
              <li>✉️ hello@chingkong.in</li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span>© {year} Ching Kong • Our Wok Talks. All rights reserved.</span>
          <span>Made with <span className="heart">❤</span> in Panchkula</span>
        </motion.div>
      </div>
    </footer>
  )
}
