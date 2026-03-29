import Link from 'next/link'

const footerColumns: { title: string | null; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    title: null,
    links: [
      { label: 'Home', href: '/' },
      { label: 'Markets', href: '/markets' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'About', href: '/about' },
    ],
  },
  {
    title: 'Markets',
    links: [
      { label: 'FMCG', href: '/markets' },
      { label: 'Education', href: '/markets' },
      { label: 'Insurance', href: '/markets' },
      { label: 'Legal', href: '/markets' },
      { label: 'Sports', href: '/markets' },
      { label: 'Travel', href: '/markets' },
    ],
  },
  {
    title: 'AI Models',
    links: [
      { label: 'ChatGPT', href: '/markets' },
      { label: 'Gemini', href: '/markets' },
      { label: 'Perplexity', href: '/markets' },
      { label: 'Claude', href: '/markets' },
      { label: 'Grok', href: '/markets' },
      { label: 'DeepSeek', href: '/markets' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'GEO Strategy', href: '/about' },
      { label: 'Methodology', href: '/about' },
      { label: 'API Access', href: '/pricing' },
      { label: 'Book a Demo', href: 'https://calendly.com/rodrigo-quesada-trucoytrufa/30min', external: true },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About 2laps', href: '/about' },
      { label: 'T&T (Truco y Trufa)', href: '/about' },
      { label: 'Contact', href: 'mailto:rodrigo.quesada@trucoytrufa.es', external: true },
      { label: 'Careers', href: '/about' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Logo */}
      <div className="px-4 lg:px-8 pt-10 pb-6">
        <span className="text-3xl font-bold tracking-tight">2laps</span>
      </div>

      {/* Columns */}
      <div className="px-4 lg:px-8 pb-10">
        <div className="border border-[#333] rounded">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#333]">
            {footerColumns.map((col, idx) => (
              <div key={idx} className="px-5 py-5">
                {col.title && (
                  <h4 className="text-sm font-semibold text-[#999] mb-3">{col.title}</h4>
                )}
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#ccc] hover:text-white transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-[#ccc] hover:text-white transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#333] px-4 lg:px-8 py-5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/about" className="text-xs text-[#888] hover:text-white transition-colors">Terms of Service</Link>
            <span className="text-xs text-[#888] hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="text-xs text-[#888] hover:text-white transition-colors cursor-pointer">Manage Cookies</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="mailto:rodrigo.quesada@trucoytrufa.es" className="text-xs text-[#888] hover:text-white transition-colors">Contact</a>
            <span className="text-xs text-[#888]">&copy; 2026 T&T (Truco y Trufa). All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
