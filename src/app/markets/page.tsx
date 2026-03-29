import { Metadata } from 'next'
import { getAllMarkets, getSectors } from '@/lib/data'
import { MarketGrid } from '@/components/markets/MarketGrid'
import { BarChart3, Activity, Bot } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Todos los Mercados',
  description: 'Explora todos los mercados monitorizados por 2laps. Rankings de marcas recomendadas por IA en cada sector.',
}

export default function MarketsPage() {
  const markets = getAllMarkets()
  const sectors = getSectors()
  const totalBrands = new Set(markets.flatMap(m => m.rankings.map(r => r.brand))).size

  return (
    <div>
      <div className="border-b border-[#c0c0c0]">
        <div className="px-4 lg:px-8 py-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-2">
            Directorio de Mercados
          </h1>
          <p className="text-sm text-[#666]">
            Todos los mercados que monitorizamos con datos de 6 modelos de IA.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="border-b border-[#c0c0c0]">
        <div className="px-4 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-[#c0c0c0]">
            <div className="py-5 px-6 text-center">
              <BarChart3 className="w-4 h-4 text-accent-blue mx-auto mb-1" />
              <div className="font-mono text-xl font-bold text-[#1a1a1a]">{markets.length}</div>
              <div className="text-[10px] text-[#888] uppercase">Mercados</div>
            </div>
            <div className="py-5 px-6 text-center">
              <Activity className="w-4 h-4 text-[#c23b4c] mx-auto mb-1" />
              <div className="font-mono text-xl font-bold text-[#1a1a1a]">{totalBrands}</div>
              <div className="text-[10px] text-[#888] uppercase">Marcas</div>
            </div>
            <div className="py-5 px-6 text-center">
              <Bot className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
              <div className="font-mono text-xl font-bold text-[#1a1a1a]">6</div>
              <div className="text-[10px] text-[#888] uppercase">Modelos IA</div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-8 py-8">
        <MarketGrid markets={markets} sectors={sectors} />
      </div>
    </div>
  )
}
