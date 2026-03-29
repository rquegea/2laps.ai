import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-[#c0c0c0] bg-white">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="text-sm text-[#1a1a1a] font-semibold" style={{ letterSpacing: '-0.03em' }}>2laps</span>
            <span className="text-xs text-[#888]">
              by T&T &middot; Madrid
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:rodrigo.quesada@trucoytrufa.es"
              className="text-xs text-[#888] hover:text-[#1a1a1a] transition-colors"
            >
              Contacto
            </a>
            <Link
              href="/about"
              className="text-xs text-[#888] hover:text-[#1a1a1a] transition-colors"
            >
              Sobre nosotros
            </Link>
            <span className="text-xs text-[#888]">
              Privacidad
            </span>
          </div>

          <span className="text-xs text-[#aaa]">
            &copy; 2026 2laps.ai
          </span>
        </div>
      </div>
    </footer>
  )
}
