import { useEffect, useRef } from 'react'

export default function BackgroundEffects() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let animId
    let particles = []
    const PARTICLE_COUNT = 35

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }

    const createParticles = () => {
      particles = []
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedY: -(Math.random() * 0.3 + 0.1),
          speedX: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.03 + 0.01,
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(230, 48, 39, ${p.opacity})`
        ctx.fill()

        p.y += p.speedY
        p.x += p.speedX

        if (p.y < -10) {
          p.y = canvas.height + 10
          p.x = Math.random() * canvas.width
        }
        if (p.x < -10) p.x = canvas.width + 10
        if (p.x > canvas.width + 10) p.x = -10
      })
      animId = requestAnimationFrame(draw)
    }

    resize()
    createParticles()
    draw()

    const resizeObserver = new ResizeObserver(() => {
      resize()
      createParticles()
    })
    resizeObserver.observe(document.body)

    return () => {
      cancelAnimationFrame(animId)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="bg-particles"
        aria-hidden="true"
      />
      <div className="bg-grain" aria-hidden="true" />
    </>
  )
}
