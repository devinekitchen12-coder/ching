import { motion } from 'framer-motion'
import { fadeUp, fadeRight, staggerContainer, viewportSettings } from '../hooks/useScrollReveal.js'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div 
          className="section-head"
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <motion.p className="section-eyebrow" variants={fadeUp}>Visit Us</motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            COME SAY <span className="accent">HELLO</span>
          </motion.h2>
          <motion.p className="section-sub" variants={fadeUp}>Drop in, call ahead, or message us — we're always cooking.</motion.p>
        </motion.div>

        <div className="c-grid">
          <div className="c-info">
            <motion.a 
              href="tel:+919915635585" 
              className="c-card"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="ico">📞</div>
              <div>
                <strong>Call / WhatsApp</strong>
                <span>+91 99156 35585</span>
              </div>
            </motion.a>
            <motion.a 
              href="https://maps.google.com/?q=Panchkula" 
              target="_blank" 
              rel="noreferrer" 
              className="c-card"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="ico">📍</div>
              <div>
                <strong>Find Us</strong>
                <span>Panchkula, Haryana, India</span>
              </div>
            </motion.a>
            <motion.div 
              className="c-card"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="ico">🕒</div>
              <div>
                <strong>Open Hours</strong>
                <span>Mon – Sun · 11:00 AM – 11:00 PM</span>
              </div>
            </motion.div>
            <motion.a 
              href="mailto:hello@chingkong.in" 
              className="c-card"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="ico">✉️</div>
              <div>
                <strong>Email</strong>
                <span>hello@chingkong.in</span>
              </div>
            </motion.a>
          </div>

          <motion.div 
            className="c-map"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <iframe
              title="Ching Kong Location - Panchkula"
              src="https://www.google.com/maps?q=Panchkula,Haryana&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
