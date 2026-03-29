'use client'

import { useState } from 'react'
import { BrandLogo } from './BrandLogo'

interface Ranking {
  brand: string
  domain?: string
  consensusScore: number
  trend: string
  trendDelta: number
}

interface Props {
  rankings: Ranking[]
}

export function MarketCardsSection({ rankings }: Props) {
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null)

  return (
    <div className="px-4 lg:px-8 pb-5">
      <div className="flex gap-4 items-start">
        {/* Left: Brand cards grid — 5 cols × 2 rows */}
        <div className="flex-1 min-w-0 overflow-visible px-1 py-1">
          <div className="grid grid-cols-5 gap-2 overflow-visible" style={{ gridAutoRows: '140px' }}>
            {rankings.slice(0, 10).map((r) => {
              const isUp = r.trend === 'up'
              const isDown = r.trend === 'down'
              const lineColor = isUp ? '#16a34a' : isDown ? '#dc2626' : '#aaa'
              const fillColor = isUp ? 'rgba(22,163,74,0.15)' : isDown ? 'rgba(220,38,38,0.15)' : 'rgba(170,170,170,0.08)'
              const trendTextColor = isUp ? '#16a34a' : isDown ? '#dc2626' : '#888'
              const vals = [55, 52, 58, 50, 60, 57, 63, 59, 66, r.consensusScore]
              const w = 100, h = 40
              const min = Math.min(...vals) - 5
              const max = Math.max(...vals) + 5
              const toY = (v: number) => h - ((v - min) / (max - min)) * h
              const linePoints = vals.map((v, j) => `${(j / (vals.length - 1)) * w},${toY(v)}`).join(' ')
              const areaPoints = `0,${h} ${linePoints} ${w},${h}`
              const isHovered = hoveredBrand === r.brand

              return (
                <div
                  key={r.brand}
                  className={`bg-white rounded-lg p-3 border transition-all duration-150 cursor-pointer flex flex-col ${
                    isHovered ? 'border-[#1a1a1a] scale-[1.04]' : 'border-transparent hover:border-[#1a1a1a] hover:scale-[1.04]'
                  }`}
                  onMouseEnter={() => setHoveredBrand(r.brand)}
                  onMouseLeave={() => setHoveredBrand(null)}
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <BrandLogo brand={r.brand} domain={r.domain} size={22} />
                    <div className="text-sm font-bold text-[#1a1a1a] truncate">{r.brand}</div>
                  </div>
                  <div className="text-xs text-[#666]">{r.consensusScore} pts</div>
                  <div className="text-xs font-semibold mt-0.5" style={{ color: trendTextColor }}>
                    {isDown ? '▼' : isUp ? '▲' : ''}{r.trendDelta !== 0 ? Math.abs(r.trendDelta) + '%' : '0%'}
                  </div>
                  <svg viewBox={`0 0 ${w} ${h}`} className="w-full flex-1 mt-1.5" preserveAspectRatio="none">
                    <polygon points={areaPoints} fill={fillColor} />
                    <polyline points={linePoints} fill="none" stroke={lineColor} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                  </svg>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right: Treemap */}
        <div className="hidden lg:block flex-shrink-0" style={{ width: 294, height: 294 }}>
          <div className="w-full h-full grid gap-px rounded overflow-hidden" style={{
            gridTemplateColumns: '2fr 1fr 1fr',
            gridTemplateRows: '2fr 1fr 1fr',
          }}>
            {rankings.slice(0, 7).map((r, i) => {
              const isUp = r.trend === 'up'
              const isDown = r.trend === 'down'
              const bg = isUp ? '#86efac' : isDown ? '#fca5a5' : '#d1d5db'
              const textColor = isUp ? '#14532d' : isDown ? '#7f1d1d' : '#444'
              const isHovered = hoveredBrand === r.brand

              const gridStyle: React.CSSProperties = i === 0
                ? { gridColumn: '1', gridRow: '1 / 3' }
                : i === 1
                ? { gridColumn: '2', gridRow: '1' }
                : i === 2
                ? { gridColumn: '3', gridRow: '1' }
                : i === 3
                ? { gridColumn: '2', gridRow: '2' }
                : i === 4
                ? { gridColumn: '3', gridRow: '2' }
                : i === 5
                ? { gridColumn: '1 / 3', gridRow: '3' }
                : { gridColumn: '3', gridRow: '3' }

              return (
                <div
                  key={r.brand}
                  style={{
                    ...gridStyle,
                    backgroundColor: bg,
                    filter: isHovered ? 'brightness(0.82)' : undefined,
                  }}
                  className="flex flex-col items-center justify-center p-1.5 transition-all duration-150 cursor-pointer relative"
                  onMouseEnter={() => setHoveredBrand(r.brand)}
                  onMouseLeave={() => setHoveredBrand(null)}
                >
                  <span className="text-xs font-semibold truncate max-w-full text-center" style={{ color: textColor }}>{r.brand}</span>
                  <span className="text-[10px] font-mono" style={{ color: textColor }}>
                    {isDown ? '▼' : isUp ? '▲' : ''}{Math.abs(r.trendDelta)}%
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
