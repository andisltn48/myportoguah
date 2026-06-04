const links = [
  { label: 'home', href: '#hero', icon: 'home' },
  { label: 'about', href: '#about', icon: 'about' },
  { label: 'projects', href: '#projects', icon: 'projects' },
  { label: 'contact', href: '#contact', icon: 'contact' },
]

const icons = {
  home: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  about: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  projects: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
    </svg>
  ),
  contact: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
}

export default function Navigation() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-surface/80 backdrop-blur-sm">
        <div className="max-w-[1100px] mx-auto px-4 lg:px-16">
          <div className="flex items-center justify-between h-14 lg:h-16">
            <a href="#hero" className="font-display text-xl font-bold text-white tracking-tight">
              &lt;ANDISLHR/&gt;
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {links.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm text-on-surface-variant hover:text-white transition-colors relative group"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <a
                href="/CV_Andi_Sultan_Asharil_Raphi.pdf"
                download
                className="text-sm font-semibold px-4 py-1.5 bg-primary text-white hover:bg-[#f40612] transition-colors rounded"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/90 backdrop-blur-sm border-t border-outline-variant/30 pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex items-center justify-evenly max-w-lg mx-auto">
          {links.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              className="flex flex-col items-center gap-0.5 py-2 px-1 text-on-surface-variant hover:text-white active:text-primary transition-colors flex-1"
            >
              <span className="w-[18px] h-[18px] flex items-center justify-center">{icons[icon]}</span>
              <span className="text-[9px] font-medium leading-none uppercase tracking-wider">{label}</span>
            </a>
          ))}
          <a
            href="/CV_Andi_Sultan_Asharil_Raphi.pdf"
            download
            className="flex flex-col items-center gap-0.5 py-2 px-1 text-on-surface-variant hover:text-white active:text-primary transition-colors flex-1"
            aria-label="Download Resume"
          >
            <span className="w-[18px] h-[18px] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </span>
            <span className="text-[9px] font-medium leading-none uppercase tracking-wider">Resume</span>
          </a>
        </div>
      </nav>
    </>
  )
}
