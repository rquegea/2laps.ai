import Link from 'next/link'
import { getAllMarkets } from '@/lib/data'

export function TickerBar() {
  const markets = getAllMarkets()

  // Build ticker items from top brands across all markets
  const items = markets.flatMap(market =>
    market.rankings.slice(0, 2).map(r => ({
      slug: market.id,
      brand: r.brand,
      score: r.consensusScore,
      trend: r.trend,
      delta: r.trendDelta,
    }))
  )

  const doubled = [...items, ...items]

  return (
    <div className="w-full bg-background border-b border-border overflow-hidden">
      <div className="flex items-center h-9 overflow-hidden px-4">
        <div className="animate-marquee-slow flex items-center gap-2 whitespace-nowrap">
          {doubled.map((item, i) => {
            const isUp = item.trend === 'up'
            const isDown = item.trend === 'down'

            return (
              <Link
                key={`${item.brand}-${i}`}
                href={`/market/${item.slug}`}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-xs shrink-0 transition-opacity hover:opacity-80 ${
                  isUp
                    ? 'bg-emerald-600 text-white'
                    : isDown
                    ? 'bg-red-600 text-white'
                    : 'bg-[#1a1a1d] text-[#ccc] border border-[#333]'
                }`}
              >
                <span className="font-medium">{item.brand}</span>
                <span className="font-mono opacity-80">{item.score}</span>
                <span className="font-mono font-semibold">
                  {isUp ? '\u25B2' : isDown ? '\u25BC' : ''}{item.delta > 0 ? `${item.delta}%` : ''}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
