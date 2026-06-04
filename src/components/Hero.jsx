import { useEffect, useRef } from 'react'

export default function Hero() {
  const sectionRef = useRef(null)

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
    return () => observer.disconnect()
  }, [])

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-16" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface to-surface/90" />

      <div className="absolute right-0 top-0 h-full w-full lg:w-[55%]">
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10" />
        <img
          src="/DSC08770.JPG"
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
    </section>
  )
}
