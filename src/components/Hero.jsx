import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const sectionRef = useRef(null)
  const [showVideo, setShowVideo] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    if (!showVideo) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setShowVideo(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [showVideo])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-animate]').forEach((el, i) => {
              el.style.animation = `fade-up 0.6s ease-out ${i * 0.12}s forwards`
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    const handleScroll = () => {
      const heroHeight = sectionRef.current?.offsetHeight || 0
      setShowScrollTop(window.scrollY > heroHeight * 0.8)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-16" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface to-surface/90" />

      <div className="absolute right-0 top-0 h-full w-full lg:w-[55%]">
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10" />
        <img
          src="/foto.jpeg"
          alt=""
          className="h-full w-full object-cover object-center opacity-90"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-surface to-transparent z-10" />

      <div className="relative z-20 max-w-[1100px] mx-auto px-4 lg:px-16 min-h-screen flex items-center">
        <div className="max-w-xl space-y-6 pt-16">
          <div className="flex items-center gap-2 text-xs text-primary tracking-widest uppercase font-semibold" data-animate>
            <span className="w-8 h-[2px] bg-primary" />
            <span>Software Engineer</span>
          </div>

          <h1 className="font-display text-[clamp(2.2rem,6vw,4rem)] leading-[1.05] font-bold text-white" data-animate>
            Hi, I'm
            <span className="text-primary block mt-2">Andi Sultan Asharil Raphi</span>
          </h1>

          <p className="font-body text-lg text-[#b3b3b3] leading-relaxed max-w-md" data-animate>
            I build applications with great performance, engaging interfaces that simplify
            the user experience, and solutions that solve real user problems.
          </p>

          <div className="flex items-center gap-4 pt-2" data-animate>
            <a href="mailto:andi@example.com" className="text-[#b3b3b3] hover:text-primary transition-colors" aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13 2 4" />
              </svg>
            </a>
            <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" className="text-[#b3b3b3] hover:text-primary transition-colors" aria-label="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a href="https://instagram.com/andiashraf" target="_blank" rel="noopener noreferrer" className="text-[#b3b3b3] hover:text-primary transition-colors" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://github.com/andiashraf" target="_blank" rel="noopener noreferrer" className="text-[#b3b3b3] hover:text-primary transition-colors" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/andiashraf" target="_blank" rel="noopener noreferrer" className="text-[#b3b3b3] hover:text-primary transition-colors" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          <div className="flex flex-wrap gap-4" data-animate>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold text-sm rounded hover:bg-[#f40612] transition-all duration-300"
            >
              View Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </a>
            <button
              onClick={() => setShowVideo(true)}
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-semibold text-sm rounded hover:bg-primary hover:text-white transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              Play Introduction
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#b3b3b3] text-[#b3b3b3] font-semibold text-sm rounded hover:border-white hover:text-white transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <a href="#about" className="text-[#b3b3b3]/50 hover:text-primary transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </a>
      </div>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-[#f40612] transition-all duration-300"
          style={{ bottom: 'calc(var(--spacing) * 14)' }}
          aria-label="Scroll to top"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      )}

      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative w-full max-w-4xl mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white/70 hover:text-white text-sm transition-colors"
            >
              Close (Esc)
            </button>
            <video
              className="w-full rounded-lg shadow-2xl"
              src="/introduction.mp4"
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  )
}
