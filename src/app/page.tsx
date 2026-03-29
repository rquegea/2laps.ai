import { getAllMarkets, getSectors, getAllBrands } from '@/lib/data'
import { MarketGrid } from '@/components/markets/MarketGrid'
import { BrandChecker } from '@/components/brand/BrandChecker'
import { NewsSection } from '@/components/2day/NewsSection'
import { Activity, BarChart3, Bot, RefreshCw } from 'lucide-react'

export default function Home() {
  const markets = getAllMarkets()
  const sectors = getSectors()
  const allBrands = getAllBrands().map(b => ({
    brand: b.brand,
    marketId: b.market.id,
    marketName: b.market.name,
    position: b.market.rankings.find(r => r.brand === b.brand)?.position ?? 0,
    score: b.market.rankings.find(r => r.brand === b.brand)?.consensusScore ?? 0,
  }))

  const totalBrands = new Set(allBrands.map(b => b.brand)).size

  return (
    <div>
      {/* AI Visibility News */}
      <section className="border-b border-[#c0c0c0]">
        <NewsSection />
      </section>

      {/* Brand Checker */}
      <section className="border-b border-[#c0c0c0] py-10 text-center px-4 lg:px-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-2">
          What AI Recommends
        </h1>
        <p className="text-sm text-[#666] mb-6">
          Cada mercado. Cada IA. Una fuente de verdad.
        </p>
        <BrandChecker brands={allBrands} />
      </section>

      {/* Stats Bar */}
      <section className="border-b border-[#c0c0c0]">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#c0c0c0]">
          {[
            { icon: BarChart3, label: 'Mercados', value: markets.length, color: 'text-accent-blue' },
            { icon: Activity, label: 'Marcas', value: totalBrands, color: 'text-[#c23b4c]' },
            { icon: Bot, label: 'Modelos IA', value: 6, color: 'text-emerald-600' },
            { icon: RefreshCw, label: 'Actualizado', value: 'Diario', color: 'text-[#666]' },
          ].map(stat => (
            <div key={stat.label} className="py-5 px-6 text-center">
              <stat.icon className={`w-4 h-4 ${stat.color} mx-auto mb-1.5`} />
              <div className="font-mono text-xl font-bold text-[#1a1a1a]">{stat.value}</div>
              <div className="text-[10px] text-[#888] uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Market Grid */}
      <section className="border-b border-[#c0c0c0] px-4 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-[#1a1a1a]">
            Mercados Monitorizados
          </h2>
          <span className="text-xs text-[#888]">
            {markets.length} mercados activos
          </span>
        </div>
        <MarketGrid markets={markets} sectors={sectors} />
      </section>

      {/* CTA */}
      <section className="py-16 px-4 lg:px-8 text-center">
        <div className="border border-[#c0c0c0] rounded-lg p-8 max-w-xl mx-auto">
          <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
            Tu mercado no aparece?
          </h3>
          <p className="text-sm text-[#666] mb-4">
            Analizamos cualquier mercado bajo demanda. Reserva 20 minutos y te mostramos los datos.
          </p>
          <a
            href="https://calendly.com/rodrigo-quesada-trucoytrufa/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2.5 bg-[#c23b4c] text-white text-sm rounded hover:bg-[#a83242] transition-colors"
          >
            Reservar demo gratuita
          </a>
        </div>
      </section>
    </div>
  )
}
