import { useEffect, useRef } from 'react'

export default function Hero() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-animate]').forEach((el, i) => {
              el.style.animation = `pixel-fade-in 0.5s ease-out ${i * 0.1}s forwards`
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
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-16" ref={sectionRef}>
      <div className="pixel-grid absolute inset-0 opacity-30" />

      <div className="max-w-[1100px] mx-auto px-4 lg:px-16 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="hidden lg:flex justify-center" data-animate>
            <div className="relative">
              <div className="w-72 border-2 border-outline-variant overflow-hidden relative bg-surface-container">
                <img src="/DSC08770.JPG" alt="Andi Sultan Asharil Raphi" className="w-full h-auto object-contain" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-secondary-container/30 -z-10" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2 font-code text-xs text-secondary-container tracking-widest uppercase" data-animate>
              <span className="w-8 h-[2px] bg-secondary-container" />
              <span>Software Engineer</span>
            </div>

            <h1 className="font-display text-[clamp(2rem,5vw,3rem)] leading-[1.1] font-bold text-on-surface" data-animate>
              Hi, I'm
              <span className="text-secondary-container block mt-2">Andi Sultan Asharil Raphi</span>
            </h1>

            <p className="font-body text-lg text-on-surface-variant leading-relaxed max-w-md" data-animate>
              I build applications with great performance, engaging interfaces that simplify
              the user experience, and solutions that solve real user problems.
            </p>

            <div className="flex flex-wrap gap-4" data-animate>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary-container text-on-secondary-container font-display text-sm font-bold border-2 border-secondary-container hover:bg-transparent hover:text-secondary-container transition-all duration-300 step-shadow-cyan hover:step-shadow-sm"
              >
                View Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-outline-variant text-on-surface-variant font-display text-sm font-bold hover:border-secondary-container hover:text-secondary-container transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-on-surface-variant/50 hover:text-secondary-container transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
