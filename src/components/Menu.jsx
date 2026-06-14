import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { menuData } from '../data/menu.js'
import { fadeUp, staggerContainer, viewportSettings } from '../hooks/useScrollReveal.js'

const categories = Object.keys(menuData)

export default function Menu() {
  const [active, setActive] = useState(categories[0])

  return (
    <section id="menu" className="menu">
      <div className="container">
        <motion.div 
          className="section-head"
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <motion.p className="section-eyebrow" variants={fadeUp}>Our Menu</motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            STRAIGHT FROM <span className="accent">THE WOK</span>
          </motion.h2>
          <motion.p className="section-sub" variants={fadeUp}>
            Every dish is fired with our own house sauces. Pick a category and dig in.
          </motion.p>
        </motion.div>

        <motion.div 
          className="menu-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`menu-tab ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
              style={{ position: 'relative' }}
            >
              {active === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="active-tab-bg"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'var(--black)',
                    borderRadius: '999px',
                    zIndex: -1
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span style={{ position: 'relative', zIndex: 1 }}>{cat}</span>
            </button>
          ))}
        </motion.div>

        <motion.div 
          className="menu-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {menuData[active].map((item, i) => (
              <motion.article 
                key={item.name} 
                className="menu-card"
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true, margin: '-50px' }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
              >
                <div className="menu-card-head">
                  <h3>{item.name}</h3>
                  <div className="menu-price">₹{item.price}</div>
                </div>
                <p>{item.desc}</p>
                <div className="menu-tags">
                  {item.tags.map((tag, tagIndex) => (
                    <motion.span 
                      key={tag} 
                      className={`tag ${tag.toLowerCase()}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: (i * 0.08) + 0.2 + (tagIndex * 0.05) }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
