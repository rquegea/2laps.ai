'use client'

import { Ranking } from '@/lib/types'
import { trendArrow } from '@/lib/utils'
import { motion } from 'framer-motion'

interface RankingTableProps {
  rankings: Ranking[]
  totalModels: number
}

export function RankingTable({ rankings, totalModels }: RankingTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#c0c0c0] text-[#888] text-xs uppercase tracking-wider">
            <th className="text-left py-3 px-2 w-12">#</th>
            <th className="text-left py-3 px-2">Marca</th>
            <th className="text-left py-3 px-2 hidden sm:table-cell">Consensus Score</th>
            <th className="text-center py-3 px-2">IAs</th>
            <th className="text-right py-3 px-2">Tendencia</th>
          </tr>
        </thead>
        <tbody>
          {rankings.map((r, i) => (
            <motion.tr
              key={r.brand}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`border-b border-[#eee] hover:bg-[#fafafa] transition-colors ${
                r.position === 1 ? 'bg-[#fffbeb]' : ''
              }`}
            >
              <td className="py-3 px-2">
                <span className={`font-mono ${r.position === 1 ? 'text-[#c23b4c] font-bold' : 'text-[#888]'}`}>
                  {r.position}
                </span>
              </td>
              <td className="py-3 px-2">
                <span className="text-[#1a1a1a] font-medium">{r.brand}</span>
              </td>
              <td className="py-3 px-2 hidden sm:table-cell">
                <div className="flex items-center gap-2">
                  <div className="w-24 h-1.5 bg-[#eee] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-accent-blue"
                      style={{ width: `${r.consensusScore}%` }}
                    />
                  </div>
                  <span className="text-[#444] font-mono tabular-nums text-xs">{r.consensusScore}</span>
                </div>
              </td>
              <td className="py-3 px-2 text-center">
                <span className="text-[#666] font-mono tabular-nums">
                  {r.mentionedByModels}/{totalModels}
                </span>
              </td>
              <td className="py-3 px-2 text-right">
                <span className={`font-mono tabular-nums ${
                  r.trend === 'up' ? 'text-emerald-600' : r.trend === 'down' ? 'text-red-600' : 'text-[#888]'
                }`}>
                  {trendArrow(r.trend)} {r.trendDelta > 0 ? `${r.trendDelta}%` : '0%'}
                </span>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
