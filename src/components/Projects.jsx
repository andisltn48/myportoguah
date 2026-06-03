import { GitHubCalendar } from 'react-github-calendar'

const contributionTheme = {
  light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
  dark: ['#0b141c', '#0c2e2a', '#0d4d3f', '#0e7558', '#00eefc'],
}

const projects = [
  {
    title: 'Capturah',
    desc: 'Photobooth website with real-time photo capture and editing capabilities.',
    tags: ['Laravel', 'Blade', 'MySQL', 'Midtrans'],
    stars: '',
    url: 'https://capturah.my.id/',
  },
  {
    title: 'AdminWorpress',
    desc: 'Custom WordPress admin panel to manage posts and media.',
    tags: ['Laravel', 'Wordpress', 'API', 'MySQL'],
    stars: '',
    url: 'https://github.com/andisltn48/adminwordpress',
  },
  {
    title: 'PropertyU',
    desc: 'A modern real estate platform for property listings and management.',
    tags: ['Laravel', 'Blade', 'MySQL', '3D Visualization'],
    stars: '',
    url: 'https://propertyu.beraksigo.com/',
  },
  {
    title: 'Tanyakontrak.AI',
    desc: 'Web application for summarizing and answering contract-related questions.',
    tags: ['Python (FastAPI)', 'React 19', 'PostgreSQL', 'Gemini API', 'Redis'],
    stars: '',
    url: 'https://drive.google.com/drive/folders/1a99m9UQopVRJdU5uGJSE2FGQR43G5gyF?usp=sharing',
  },
  {
    title: 'CariKopi',
    desc: 'Web application for finding and reviewing local coffee shops.',
    tags: ['Spring Boot', 'Next.js', 'PostgreSQL', 'Xendit'],
    stars: '',
    url: 'https://drive.google.com/drive/folders/1wZOdF1auRnzqwehOyMGWjdFj4CKOKyPB?usp=sharing',
  },
  {
    title: 'Kamaracam',
    desc: 'Web application to showcase camera equipment and rental services.',
    tags: ['Spring Boot', 'Next.js', 'PostgreSQL'],
    stars: '',
    url: 'https://drive.google.com/drive/folders/1t4MIHOlBlaeDw2yOowEm8FXBZD87yAoM?usp=sharing',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-surface-container-low/50 border-y border-outline-variant/10">
      <div className="max-w-[1100px] mx-auto px-4 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="font-display text-sm font-bold text-secondary-container tracking-[0.2em] uppercase mb-4">
            &lt;projects /&gt;
          </h2>
          <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
            Selected works that showcase engineering depth and design sensibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-outline-variant/20 bg-surface-container hover:border-secondary-container/40 transition-all duration-300 flex flex-col cursor-pointer"
            >
              <div className="h-10 bg-surface-container-high border-b border-outline-variant/20 flex items-center px-4 gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                <span className="ml-auto font-code text-[10px] text-on-surface-variant/40 tracking-wider">~/projects</span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-base font-bold text-on-surface group-hover:text-secondary-container transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-on-surface-variant/60">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span className="font-code text-[11px]">{project.stars}</span>
                  </div>
                </div>

                <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-4 flex-1">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-1 font-code text-[10px] font-bold uppercase tracking-wider bg-surface-container-high text-on-surface-variant/80 border border-outline-variant/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-24 pt-24 border-t border-outline-variant/10">
          <div className="text-center mb-12">
            <h2 className="font-display text-sm font-bold text-secondary-container tracking-[0.2em] uppercase mb-4">
              &lt;contributions /&gt;
            </h2>
            <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
              Open source contributions across the year.
            </p>
          </div>

          <div className="flex justify-center px-4">
            <GitHubCalendar
              username="andisltn48"
              theme={contributionTheme}
              blockSize={13}
              blockMargin={4}
              fontSize={14}
              hideColorLegend={false}
              hideMonthLabels={false}
              hideTotalCount={false}
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/andisltn48?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-outline-variant text-on-surface-variant font-display text-sm font-bold hover:border-secondary-container hover:text-secondary-container transition-all duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View All on GitHub
          </a>
        </div>

        
      </div>
    </section>
  )
}
