import { useState } from 'react'

const links = [
  { label: 'about', href: '#about' },
  { label: 'work', href: '#work' },
  { label: 'projects', href: '#projects' },
  { label: 'contact', href: '#contact' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-surface/90 backdrop-blur border-b border-outline-variant/30">
      <div className="max-w-[1100px] mx-auto px-4 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="font-display text-lg font-bold text-on-surface hover:text-secondary-container transition-colors">
            &lt;ANDISLHR/&gt;
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-code text-xs tracking-wider uppercase text-on-surface-variant hover:text-secondary-container transition-colors relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-secondary-container transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="/CV_Andi_Sultan_Asharil_Raphi.pdf"
              download
              className="font-code text-xs tracking-wider uppercase px-3 py-1.5 border border-secondary-container text-secondary-container hover:bg-secondary-container hover:text-on-secondary-container transition-all duration-300"
            >
              Resume
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-on-surface hover:text-secondary-container transition-colors"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-surface-container border-t border-outline-variant/30">
          <div className="px-4 py-4 flex flex-col gap-4">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="font-code text-xs tracking-wider uppercase text-on-surface-variant hover:text-secondary-container transition-colors py-2"
              >
                {label}
              </a>
            ))}
            <a
              href="/CV_Andi_Sultan_Asharil_Raphi.pdf"
              download
              className="font-code text-xs tracking-wider uppercase text-secondary-container hover:text-on-secondary-container hover:bg-secondary-container transition-all duration-300 py-2 px-3 border border-secondary-container self-start"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
