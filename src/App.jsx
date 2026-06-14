import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Menu from './components/Menu.jsx'
import SignatureProcess from './components/SignatureProcess.jsx'
import Gallery from './components/Gallery.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackgroundEffects from './components/BackgroundEffects.jsx'
import useLenis from './hooks/useLenis.js'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  // Initialize Lenis smooth scrolling + GSAP ScrollTrigger sync
  useLenis()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <BackgroundEffects />
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Menu />
        <SignatureProcess />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
