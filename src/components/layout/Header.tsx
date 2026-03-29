'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search } from 'lucide-react'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      {/* Logo row */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-baseline gap-2">
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
      <div className="hidden md:block border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <nav className="flex items-center gap-0 h-10 overflow-x-auto scrollbar-terminal">
            {/* Live indicator */}
            <span className="flex items-center gap-1.5 text-sm text-accent-red font-medium pr-4 shrink-0">
              <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
              Live
            </span>

            <span className="text-border pr-3 shrink-0">|</span>

            {/* Mercados dropdown */}
            <Link href="/markets" className="text-sm text-foreground hover:text-accent-red transition-colors font-medium pr-4 shrink-0">
              Mercados <span className="text-[10px] text-muted">&#9662;</span>
            </Link>

            <span className="text-border pr-3 shrink-0">|</span>

            {/* Sector links */}
            {[
              { label: 'FMCG', sector: 'FMCG' },
              { label: 'Educacion', sector: 'Educacion' },
              { label: 'Legal', sector: 'Legal' },
              { label: 'Finanzas', sector: 'Finanzas' },
              { label: 'Belleza', sector: 'Belleza' },
              { label: 'Tech', sector: 'Tecnologia' },
              { label: 'Turismo', sector: 'Turismo' },
              { label: 'Restauracion', sector: 'Restauracion' },
              { label: 'Deporte', sector: 'Deporte' },
            ].map((item) => (
              <Link
                key={item.sector}
                href={`/markets?sector=${item.sector}`}
                className="text-sm text-foreground hover:text-accent-red transition-colors pr-4 shrink-0"
              >
                {item.label}
              </Link>
            ))}

            <span className="text-border pr-3 shrink-0">|</span>

            {/* More dropdown */}
            <Link href="/markets" className="text-sm text-foreground hover:text-accent-red transition-colors shrink-0">
              Mas <span className="text-[10px] text-muted">&#9662;</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-4 py-4 gap-1">
            <span className="flex items-center gap-1.5 text-sm text-accent-red font-medium py-2.5">
              <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
              Live
            </span>
            <Link href="/markets" className="text-sm text-foreground hover:text-accent-red py-2.5 font-medium" onClick={() => setMenuOpen(false)}>
              Mercados
            </Link>
            <div className="pl-3 flex flex-col gap-1 border-l border-border ml-1">
              {['FMCG', 'Educacion', 'Legal', 'Finanzas', 'Belleza', 'Tech', 'Turismo', 'Restauracion', 'Deporte'].map(s => (
                <Link key={s} href={`/markets?sector=${s}`} className="text-xs text-muted hover:text-foreground py-1.5" onClick={() => setMenuOpen(false)}>
                  {s}
                </Link>
              ))}
            </div>
            <Link href="/pricing" className="text-sm text-foreground hover:text-accent-red py-2.5 font-medium" onClick={() => setMenuOpen(false)}>
              Precios
            </Link>
            <Link href="/about" className="text-sm text-foreground hover:text-accent-red py-2.5 font-medium" onClick={() => setMenuOpen(false)}>
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
