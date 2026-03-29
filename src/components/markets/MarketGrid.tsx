'use client'

import { useState } from 'react'
import { Market, Sector } from '@/lib/types'
import { MarketCard } from './MarketCard'

interface MarketGridProps {
  markets: Market[]
  sectors: Sector[]
  showFilters?: boolean
}

export function MarketGrid({ markets, sectors, showFilters = true }: MarketGridProps) {
  const [activeSector, setActiveSector] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = markets.filter(m => {
    const matchesSector = activeSector === 'all' || m.sector === activeSector
    const matchesSearch = searchQuery === '' ||
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.rankings.some(r => r.brand.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesSector && matchesSearch
  })

  return (
    <div>
      {showFilters && (
        <div className="mb-6 space-y-3">
          <input
            type="text"
            placeholder="Buscar mercado o marca..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-80 bg-white border border-[#d0d0d0] rounded px-3 py-2 text-sm text-[#1a1a1a] placeholder:text-[#aaa] focus:outline-none focus:border-[#c23b4c]/50 transition-colors"
          />

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveSector('all')}
              className={`px-3 py-1 text-xs rounded transition-colors ${
                activeSector === 'all'
                  ? 'bg-[#c23b4c] text-white'
                  : 'bg-white text-[#666] hover:text-[#1a1a1a] border border-[#d0d0d0]'
              }`}
            >
              Todos
            </button>
            {sectors.map(sector => (
              <button
                key={sector}
                onClick={() => setActiveSector(sector)}
                className={`px-3 py-1 text-xs rounded transition-colors ${
                  activeSector === sector
                    ? 'bg-[#c23b4c] text-white'
                    : 'bg-white text-[#666] hover:text-[#1a1a1a] border border-[#d0d0d0]'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((market, i) => (
          <MarketCard key={market.id} market={market} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[#888] text-sm">No se encontraron mercados</p>
        </div>
      )}
    </div>
  )
}
