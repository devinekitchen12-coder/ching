import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flame, Clock, Heart } from 'lucide-react';
import { staggerContainer, fadeUp, viewportSettings } from '../hooks/useScrollReveal';
import './SignatureProcess.css';

gsap.registerPlugin(ScrollTrigger);

export default function SignatureProcess() {
  const sectionRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Row 1 moves left
      gsap.to(row1Ref.current, {
        x: -250,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Row 2 moves right
      gsap.to(row2Ref.current, {
        x: 250,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Row 3 moves left
      gsap.to(row3Ref.current, {
        x: -250,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: <Flame />,
      title: 'Wok-Fired Daily',
      desc: 'Every dish is cooked to order over an open flame, ensuring that unmistakable breath of the wok in every bite.'
    },
    {
      icon: <Clock />,
      title: 'Made In-House Sauces',
      desc: 'Our secret sauces are fermented, blended, and perfected in-house daily. No shortcuts, no compromises.'
    },
    {
      icon: <Heart />,
      title: 'Crafted With Love',
      desc: 'Every plate that leaves our kitchen carries the passion of our chefs who treat each dish as their masterpiece.'
    }
  ];

  return (
    <section className="signature-process" ref={sectionRef}>
      <div className="sp-bg-typography" aria-hidden="true">
        <div className="sp-text-row sp-row-1" ref={row1Ref}>← FIRED DAILY</div>
        <div className="sp-text-row sp-row-2" ref={row2Ref}>MADE IN</div>
        <div className="sp-text-row sp-row-3" ref={row3Ref}>HOUSE SAUCES</div>
      </div>

      <div className="sp-content">
        <motion.div 
          className="sp-grid"
          variants={staggerContainer(0.2, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              className="sp-card"
              variants={fadeUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="sp-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="sp-title">{feature.title}</h3>
              <p className="sp-desc">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
