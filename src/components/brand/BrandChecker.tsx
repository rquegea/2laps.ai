'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, ArrowRight } from 'lucide-react'

interface BrandResult {
  brand: string
  marketId: string
  marketName: string
  position: number
  score: number
}

interface BrandCheckerProps {
  brands: BrandResult[]
}

export function BrandChecker({ brands }: BrandCheckerProps) {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const results = useMemo(() => {
    if (query.length < 2) return []
    return brands
      .filter(b => b.brand.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 5)
  }, [query, brands])

  const showResults = isFocused && query.length >= 2

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#aaa] w-4 h-4" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder="Que dice la IA de tu marca?"
          className="w-full bg-white border border-[#d0d0d0] rounded-lg pl-10 pr-4 py-3 text-sm text-[#1a1a1a] placeholder:text-[#aaa] focus:outline-none focus:border-[#c23b4c]/50 focus:ring-1 focus:ring-[#c23b4c]/20 transition-all"
        />
      </div>

      {showResults && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#d0d0d0] rounded-lg overflow-hidden z-50 shadow-lg">
          {results.length > 0 ? (
            results.map((r) => (
              <Link
                key={`${r.brand}-${r.marketId}`}
                href={`/market/${r.marketId}`}
                className="flex items-center justify-between px-4 py-3 hover:bg-[#f5f5f5] transition-colors border-b border-[#eee] last:border-0"
              >
                <div>
                  <span className="text-sm text-[#1a1a1a] font-medium">{r.brand}</span>
                  <span className="text-xs text-[#888] ml-2">en {r.marketName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-accent-blue">#{r.position}</span>
                  <span className="text-xs font-mono text-[#888]">{r.score}pts</span>
                  <ArrowRight className="w-3 h-3 text-[#aaa]" />
                </div>
              </Link>
            ))
          ) : (
            <div className="px-4 py-6 text-center">
              <p className="text-sm text-[#888] mb-3">
                &quot;{query}&quot; no encontrado en nuestros datos
              </p>
              <a
                href="https://calendly.com/rodrigo-quesada-trucoytrufa/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#c23b4c] text-white text-xs rounded hover:bg-[#a83242] transition-colors"
              >
                Solicita un analisis
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
