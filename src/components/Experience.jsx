import { useState, useEffect, useRef } from 'react'

const experiences = [
  {
    role: 'Back End Developer',
    company: 'PT. INOSOFT TRANS SISTEM',
    period: 'December 2022 – Present',
    highlights: [
      'Architect, develop, and maintain high-throughput RESTful APIs ensuring seamless frontend integration and optimized system performance.',
      'Manage end-to-end server deployment and environment configuration across multiple production environments.',
    ],
  },
  {
    role: 'Full Stack & Web Developer',
    company: 'Freelance Technical Projects',
    period: 'March 2026 – Mei 2026',
    highlights: [
      'Cari Kopi (SaaS Project): Designed a multi-tenant coffee shop SaaS architecture integrating Xendit and Midtrans payment gateways with a secure Bring Your Own Key (BYOK) model.',
      'Kamara Platform: Engineered the core backend logic and database design for a specialized digital camera rental marketplace application.',
      'Company & Public Dashboards: Formulated responsive administration dashboards and landing pages, including a Waste Bank platform, an elementary school portal, and a professional practice licensing management system.',
    ],
  },
  {
    role: 'Web Programmer',
    company: 'Inotive Technology',
    period: 'August 2022 – November 2022',
    highlights: [
      'Built and deployed scalable web applications and engineered robust APIs supporting dedicated mobile application services.',
      'Executed routine server maintenance, security patching, and code optimization tasks.',
    ],
  },
  {
    role: 'Back End Developer',
    company: 'PT. Bantubantuin',
    period: 'June 2022 – September 2022',
    highlights: [
      'Designed and structured foundational RESTful APIs for the Bantubantuin ecosystem leveraging the Laravel framework.',
    ],
  },
  {
    role: 'Back End Developer',
    company: 'PT. MEDIA KREASI ABADI',
    period: 'February 2022 – July 2022',
    highlights: [
      'Developed comprehensive backend APIs for core web and mobile deployments while overseeing operational server rollouts.',
    ],
  },
  {
    role: 'Full Stack & Back End Developer',
    company: 'Institut Teknologi Kalimantan',
    period: 'June 2021 – June 2022',
    highlights: [
      'H2H Mandiri Management Information System: Spearheaded the development of a secure Host-to-Host (H2H) integration system connecting institutional services with Bank Mandiri using Laravel.',
      'Inventory Management System: Developed an internal web application to streamline digital asset and inventory tracking for the institution.',
    ],
  },
  {
    role: 'Assistant Lecturer',
    company: 'Institut Teknologi Kalimantan',
    period: 'February 2020 – January 2021',
    highlights: [
      'Conducted hands-on practicum instructions for the Algorithm & Programming 1 courses utilizing the Python programming language.',
    ],
  },
]

const visibleCount = 3

export default function Experience() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [containerHeight, setContainerHeight] = useState(0)
  const itemsRef = useRef([])

  const totalSlides = Math.ceil(experiences.length / visibleCount)

  useEffect(() => {
    calculateHeight()
    window.addEventListener('resize', calculateHeight)
    return () => window.removeEventListener('resize', calculateHeight)
  }, [currentSlide])

  function calculateHeight() {
    let h = 0
    const start = currentSlide * visibleCount
    const end = Math.min(start + visibleCount, experiences.length)
    for (let i = start; i < end; i++) {
      const el = itemsRef.current[i]
      if (el) h += el.offsetHeight
      if (i < end - 1) h += 48
    }
    setContainerHeight(h || 0)
  }

  function next() {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0))
  }

  function prev() {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1))
  }

  const start = currentSlide * visibleCount + 1
  const end = Math.min((currentSlide + 1) * visibleCount, experiences.length)

  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="max-w-[1100px] mx-auto px-4 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="font-display text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4">
            &lt;experience /&gt;
          </h2>
          <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
            A timeline of professional milestones and engineering adventures.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-outline/30 z-10" />

          <div
            className="relative overflow-hidden"
            style={{ height: containerHeight }}
          >
            <div
              className="space-y-12"
              style={{
                transform: `translateY(-${experiences.slice(0, currentSlide * visibleCount).reduce((acc, _, i) => {
                  const el = itemsRef.current[i]
                  return acc + (el ? el.offsetHeight : 200) + 48
                }, 0)}px)`,
                transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  ref={(el) => (itemsRef.current[index] = el)}
                  className="relative pl-12 group"
                >
                  <div className="absolute left-2 top-1 w-5 h-5 bg-surface border-2 border-primary rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300 z-10">
                    <span className="w-2 h-2 bg-white rounded-full" />
                  </div>

                  <div className="bg-surface-container border border-outline-variant/20 rounded-md p-6 group-hover:border-primary/50 group-hover:scale-[1.02] transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-display text-lg font-bold text-white">{exp.role}</h3>
                        <span className="font-body text-sm text-primary">{exp.company}</span>
                      </div>
                      <span className="font-code text-[11px] text-on-surface-variant/60 tracking-wider">{exp.period}</span>
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3 font-body text-sm text-on-surface-variant leading-relaxed">
                          <span className="w-1.5 h-1.5 bg-primary mt-2 shrink-0 rounded-full" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="px-4 py-2 border border-outline text-on-surface-variant font-code text-xs rounded hover:border-primary hover:text-primary transition-colors"
            >
              &larr; Prev
            </button>
            <span className="px-4 py-2 font-code text-xs text-on-surface-variant/60">
              {start}–{end} of {experiences.length}
            </span>
            <button
              onClick={next}
              className="px-4 py-2 border border-outline text-on-surface-variant font-code text-xs rounded hover:border-primary hover:text-primary transition-colors"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
