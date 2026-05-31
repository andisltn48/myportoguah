export default function About() {
  const info = [
    { label: 'location', value: 'Balikpapan, Indonesia' },
    { label: 'experience', value: '5+ years' },
    { label: 'focus', value: 'Full-Stack & Backend Development' },
    { label: 'education', value: 'B.Eng. Informatics Engineering' },
    { label: 'status', value: 'Open for projects & collaborations' },
    { label: 'tech', value: 'PHP, Java, Python, Docker, Git, Etc.' },
  ]

  const stats = [
    { number: '10+', label: 'Projects Delivered' },
    { number: '5+', label: 'Years Experience' },
    { number: '5+', label: 'Clients Served' },
  ]

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-[1100px] mx-auto px-4 lg:px-16">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16">
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <h2 className="font-display text-sm font-bold text-secondary-container tracking-[0.2em] uppercase mb-4">
                &lt;about&gt;
              </h2>
              <div className="space-y-2">
                {info.map((item) => (
                  <div key={item.label} className="flex items-center gap-2 font-code text-xs">
                    <span className="text-secondary-container">$</span>
                    <span className="text-on-surface-variant/60">{item.label}:</span>
                    <span className="text-on-surface">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <p className="font-display text-2xl lg:text-3xl font-bold leading-tight text-on-surface">
              Results-driven Software Engineer with
              <span className="text-secondary-container"> 5+ years</span>
              of professional experience.
            </p>

            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                Specializing in web and backend development, I have a proven track record of
                transforming complex technical requirements into scalable, high-performance
                backend architectures. I build reliable web applications using Laravel and
                Java Spring Boot, backed by solid data management with MySQL, PostgreSQL and MongoDB.
              </p>
              <p>
                Experienced in containerized deployments, managing cloud environments, and
                developing multi-tenant SaaS systems — I focus on delivering software that's
                both technically robust and a pleasure to use.
              </p>
            </div>

            <div className="border-t border-outline-variant/20 pt-6">
              <h3 className="font-code text-xs font-bold text-secondary-container tracking-wider uppercase mb-4">
                &gt; education
              </h3>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-secondary-container mt-2 shrink-0" />
                <div>
                  <span className="font-display text-base font-bold text-on-surface">Informatics</span>
                  <span className="block font-body text-sm text-on-surface-variant mt-1">Institut Teknologi Kalimantan — 2018 – 2022 | GPA: 3.58/4.0</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="border border-outline-variant/30 p-4 text-center">
                  <div className="font-display text-2xl font-bold text-secondary-container">{stat.number}</div>
                  <div className="font-code text-[10px] text-on-surface-variant/60 tracking-wider uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
