

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Search, ChevronDown } from 'lucide-react'
import { usePublicSectors } from '@/hooks/use-public-markets'

const marketsDropdownData = {
  columns: [
    {
      title: 'Sectors',
      links: [
        { label: 'FMCG', href: '/markets?sector=FMCG' },
        { label: 'Educacion', href: '/markets?sector=Educacion' },
        { label: 'Legal', href: '/markets?sector=Legal' },
        { label: 'Finanzas', href: '/markets?sector=Finanzas' },
        { label: 'Belleza', href: '/markets?sector=Belleza' },
        { label: 'Tecnologia', href: '/markets?sector=Tecnologia' },
        { label: 'Turismo', href: '/markets?sector=Turismo' },
        { label: 'Restauracion', href: '/markets?sector=Restauracion' },
        { label: 'Deporte', href: '/markets?sector=Deporte' },
      ],
    },
    {
      title: 'Trending Markets',
      links: [
        { label: 'Galletas España', href: '/market/galletas-espana' },
        { label: 'Seguros Coche', href: '/market/seguros-coche-espana' },
        { label: 'Unis ADE Madrid', href: '/market/universidades-ade-madrid' },
        { label: 'Hoteles Barcelona', href: '/market/mejores-hoteles-barcelona' },
        { label: 'Bancos Online', href: '/market/bancos-online-espana' },
        { label: 'Zapatillas Running', href: '/market/zapatillas-running-espana' },
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
  ],
  featured: [
    { label: 'Gullón #1', detail: 'Galletas ES · Score 87', trend: '↑12%', trendColor: 'text-emerald-500' },
    { label: 'Mapfre #1', detail: 'Seguros Coche · Score 91', trend: '→0%', trendColor: 'text-[#888]' },
    { label: 'EAE #2', detail: 'Unis ADE · Score 74', trend: '↓3%', trendColor: 'text-red-500' },
    { label: 'Booking #1', detail: 'Hoteles BCN · Score 83', trend: '↑8%', trendColor: 'text-emerald-500' },
  ],
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [marketsOpen, setMarketsOpen] = useState(false)
  const { sectors: publicSectors } = usePublicSectors()
  const sectorColumn = publicSectors.length
    ? publicSectors.map((s) => ({ label: s.label, href: `/markets?sector=${s.sector}` }))
    : marketsDropdownData.columns[0].links

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      {/* Logo row */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-baseline gap-2">
            <span
              className="text-3xl md:text-4xl font-semibold text-foreground"
              style={{ letterSpacing: '-0.03em' }}
            >
              2laps
            </span>
          </Link>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-xs text-muted">by T&T</span>
            <a
              href="https://calendly.com/rodrigo-quesada-trucoytrufa/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 text-xs border border-foreground text-foreground rounded-sm hover:bg-foreground hover:text-background transition-colors"
            >
              Reservar demo
            </a>
            <Search className="w-4 h-4 text-muted hover:text-foreground cursor-pointer transition-colors" />
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Navigation bar */}
      <div
        className="hidden md:block border-t border-border relative"
        onMouseLeave={() => setMarketsOpen(false)}
      >
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <nav className="flex items-center gap-0 h-10 overflow-x-auto scrollbar-terminal">
            {/* Live indicator */}
            <span className="flex items-center gap-1.5 text-sm text-accent-red font-medium pr-4 shrink-0">
              <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
              Live
            </span>

            <span className="text-border pr-3 shrink-0">|</span>

            {/* Mercados dropdown trigger */}
            <div
              className="shrink-0"
              onMouseEnter={() => setMarketsOpen(true)}
            >
              <button className="flex items-center gap-1 text-sm text-foreground hover:text-accent-red transition-colors font-medium pr-4 h-10">
                Mercados
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>

            <span className="text-border pr-3 shrink-0">|</span>

            {/* Sector links — driven by queries flagged `es_publico` in admin */}
            {publicSectors.map((item) => (
              <Link
                key={item.sector}
                to={`/markets?sector=${item.sector}`}
                className="text-sm text-foreground hover:text-accent-red transition-colors pr-4 shrink-0"
              >
                {item.label}
              </Link>
            ))}

            <span className="text-border pr-3 shrink-0">|</span>

            {/* More dropdown */}
            <Link to="/markets" className="text-sm text-foreground hover:text-accent-red transition-colors shrink-0">
              Mas <span className="text-[10px] text-muted">&#9662;</span>
            </Link>
          </nav>
        </div>

        {/* Mega dropdown — rendered outside nav to avoid overflow clip */}
        {marketsOpen && (
          <div className="absolute top-full left-0 right-0 z-[100] bg-[#1a1a1a] border-b border-[#333] shadow-2xl">
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
              <div className="flex py-1">
                {/* Columns */}
                {marketsDropdownData.columns.map((col, colIdx) => {
                  const links = col.title === 'Sectors' ? sectorColumn : col.links
                  return (
                  <div key={colIdx} className={`flex-1 px-5 py-5 ${colIdx < marketsDropdownData.columns.length - 1 ? 'border-r border-[#333]' : ''}`}>
                    <h4 className="text-xs font-semibold text-[#888] uppercase tracking-wider mb-3">{col.title}</h4>
                    <ul className="space-y-2">
                      {links.map((link) => (
                        <li key={link.label}>
                          <Link
                            to={link.href}
                            className="text-sm text-[#ccc] hover:text-white transition-colors"
                            onClick={() => setMarketsOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  )
                })}

                {/* Featured / Top Rankings */}
                <div className="w-[220px] flex-shrink-0 px-5 py-5 border-l border-[#333] bg-[#141414]">
                  <h4 className="text-xs font-semibold text-[#888] uppercase tracking-wider mb-3">Top Rankings</h4>
                  <div className="space-y-3">
                    {marketsDropdownData.featured.map((item, i) => (
                      <div key={i} className="cursor-pointer hover:bg-[#222] rounded px-2 py-1.5 -mx-2 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-white">{item.label}</span>
                          <span className={`text-xs font-mono font-medium ${item.trendColor}`}>{item.trend}</span>
                        </div>
                        <span className="text-[11px] text-[#888]">{item.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="border-t border-[#333] px-5 py-3 flex items-center justify-between">
                <Link
                  to="/markets"
                  className="text-xs text-[#ccc] hover:text-white transition-colors font-medium"
                  onClick={() => setMarketsOpen(false)}
                >
                  Ver todos los mercados →
                </Link>
                <span className="text-[10px] text-[#666]">12 mercados · 72 marcas · 6 IAs</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-4 py-4 gap-1">
            <span className="flex items-center gap-1.5 text-sm text-accent-red font-medium py-2.5">
              <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
              Live
            </span>
            <Link to="/markets" className="text-sm text-foreground hover:text-accent-red py-2.5 font-medium" onClick={() => setMenuOpen(false)}>
              Mercados
            </Link>
            <div className="pl-3 flex flex-col gap-1 border-l border-border ml-1">
              {publicSectors.map(({ sector, label }) => (
                <Link key={sector} to={`/markets?sector=${sector}`} className="text-xs text-muted hover:text-foreground py-1.5" onClick={() => setMenuOpen(false)}>
                  {label}
                </Link>
              ))}
            </div>
            <Link to="/pricing" className="text-sm text-foreground hover:text-accent-red py-2.5 font-medium" onClick={() => setMenuOpen(false)}>
              Precios
            </Link>
            <Link to="/about" className="text-sm text-foreground hover:text-accent-red py-2.5 font-medium" onClick={() => setMenuOpen(false)}>
              Sobre 2laps
            </Link>
            <div className="pt-2 mt-2 border-t border-border">
              <a
                href="https://calendly.com/rodrigo-quesada-trucoytrufa/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-xs border border-foreground text-foreground rounded-sm text-center hover:bg-foreground hover:text-background transition-colors"
              >
                Reservar demo
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
