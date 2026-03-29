'use client'

import Link from 'next/link'
import { Market } from '@/lib/types'
import { countryFlag, trendArrow, formatDate } from '@/lib/utils'
import { motion } from 'framer-motion'

interface MarketCardProps {
  market: Market
  index?: number
}

export function MarketCard({ market, index = 0 }: MarketCardProps) {
  const top3 = market.rankings.slice(0, 3)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
    >
      <Link
        href={`/market/${market.id}`}
        className="block border border-[#c0c0c0] rounded-lg p-4 hover:border-[#c23b4c]/40 hover:shadow-sm transition-all duration-200 group bg-white"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-sm font-semibold text-[#1a1a1a] group-hover:text-[#c23b4c] transition-colors">
              {countryFlag(market.country)} {market.name}
            </h3>
            <span className="text-[10px] text-[#888] uppercase tracking-wider">
              {market.sector}
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#888] bg-[#f5f5f5] px-1.5 py-0.5 rounded">
            {market.aiModels.length} IAs
          </span>
        </div>

        {/* Rankings */}
        <div className="space-y-1.5 mb-3">
          {top3.map((r) => (
            <div key={r.brand} className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className={`w-4 text-right font-mono ${r.position === 1 ? 'text-[#c23b4c] font-bold' : 'text-[#888]'}`}>
                  {r.position}.
                </span>
                <span className="text-[#1a1a1a] truncate max-w-[120px]">{r.brand}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#444] font-mono tabular-nums">{r.consensusScore}</span>
                <span className={`font-mono text-[10px] tabular-nums ${
                  r.trend === 'up' ? 'text-emerald-600' : r.trend === 'down' ? 'text-red-600' : 'text-[#888]'
                }`}>
                  {trendArrow(r.trend)}{r.trendDelta > 0 ? `${r.trendDelta}%` : ''}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-[#c0c0c0]">
          <span className="text-[10px] text-[#888]">
            {market.promptsTracked} prompts
          </span>
          <span className="text-[10px] text-[#aaa]">
            {formatDate(market.lastUpdated)}
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
