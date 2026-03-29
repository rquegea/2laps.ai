import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import { getMarketBySlug, getMarketSlugs } from '@/lib/data'
import { countryFlag, formatDate } from '@/lib/utils'
import { RankingTable } from '@/components/markets/RankingTable'
import { SOVChart } from '@/components/markets/SOVChart'
import { BlurredSection } from '@/components/markets/BlurredSection'
import { TrendChart } from '@/components/markets/TrendChart'
import { ChevronRight, Calendar, MessageSquare, Bot } from 'lucide-react'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getMarketSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const market = getMarketBySlug(params.slug)
  if (!market) return { title: 'Mercado no encontrado' }

  return {
    title: `${market.name} - Rankings IA | 2laps`,
    description: `Descubre que marcas recomiendan las IAs en ${market.name}. Rankings, share of voice y tendencias.`,
  }
}

export default function MarketPage({ params }: Props) {
  const market = getMarketBySlug(params.slug)
  if (!market) notFound()

  const topBrands = market.rankings.slice(0, 4).map(r => r.brand)

  return (
    <div>
      {/* Breadcrumb */}
      <div className="border-b border-[#c0c0c0]">
        <div className="px-4 lg:px-8 py-3">
          <nav className="flex items-center gap-1 text-xs text-[#888]">
            <Link href="/" className="hover:text-[#1a1a1a] transition-colors">Inicio</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/markets" className="hover:text-[#1a1a1a] transition-colors">Mercados</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#1a1a1a]">{market.name}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="border-b border-[#c0c0c0]">
        <div className="px-4 lg:px-8 py-6">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-2">
            {countryFlag(market.country)} {market.name}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-[#888]">
            <span className="bg-[#f5f5f5] border border-[#c0c0c0] px-2 py-1 rounded uppercase tracking-wider">
              {market.sector}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formatDate(market.lastUpdated)}
            </span>
            <span className="flex items-center gap-1">
              <MessageSquare className="w-3 h-3" />
              {market.promptsTracked} prompts
            </span>
            <span className="flex items-center gap-1">
              <Bot className="w-3 h-3" />
              {market.aiModels.length} modelos IA
            </span>
          </div>
        </div>
      </div>

      {/* Prompts Section */}
      <div className="border-b border-[#c0c0c0]">
        <div className="px-4 lg:px-8 py-6">
          <h2 className="text-sm font-semibold text-[#888] uppercase tracking-wider mb-3">
            Prompts analizados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {market.prompts.map((prompt, i) => (
              <div key={i} className="border border-[#c0c0c0] rounded-lg p-3 bg-[#fafafa]">
                <span className="text-xs font-mono text-accent-blue mr-2">P{i + 1}</span>
                <span className="text-sm text-[#444]">&quot;{prompt}&quot;</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FREE: Ranking Table */}
      <div className="border-b border-[#c0c0c0]">
        <div className="px-4 lg:px-8 py-6">
          <h2 className="text-sm font-semibold text-[#888] uppercase tracking-wider mb-3">
            Ranking de marcas
          </h2>
          <RankingTable rankings={market.rankings} totalModels={market.aiModels.length} />
        </div>
      </div>

      {/* FREE: Share of Voice */}
      <div className="border-b border-[#c0c0c0]">
        <div className="px-4 lg:px-8 py-6">
          <h2 className="text-sm font-semibold text-[#888] uppercase tracking-wider mb-3">
            Share of Voice
          </h2>
          <SOVChart data={market.sovDistribution} />
        </div>
      </div>

      {/* PREMIUM: Trend Over Time (blurred) */}
      <div className="border-b border-[#c0c0c0]">
        <div className="px-4 lg:px-8 py-6">
          <h2 className="text-sm font-semibold text-[#888] uppercase tracking-wider mb-3">
            Tendencia mensual
          </h2>
          <BlurredSection title="Desbloquea tendencias">
            <TrendChart data={market.trendOverTime} brands={topBrands} />
          </BlurredSection>
        </div>
      </div>

      {/* PREMIUM: Sentiment (blurred) */}
      <div className="border-b border-[#c0c0c0]">
        <div className="px-4 lg:px-8 py-6">
          <h2 className="text-sm font-semibold text-[#888] uppercase tracking-wider mb-3">
            Analisis de sentimiento
          </h2>
          <BlurredSection title="Desbloquea sentimiento">
            <div className="space-y-3 py-4">
              {market.sentimentByBrand.slice(0, 4).map(s => (
                <div key={s.brand} className="flex items-center gap-3">
                  <span className="w-28 text-sm text-[#1a1a1a] truncate">{s.brand}</span>
                  <div className="flex-1 flex h-4 rounded overflow-hidden">
                    <div className="bg-emerald-500" style={{ width: `${s.positive}%` }} />
                    <div className="bg-amber-400" style={{ width: `${s.neutral}%` }} />
                    <div className="bg-red-500" style={{ width: `${s.negative}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </BlurredSection>
        </div>
      </div>

      {/* PREMIUM: SOV by Model (blurred) */}
      <div className="border-b border-[#c0c0c0]">
        <div className="px-4 lg:px-8 py-6">
          <h2 className="text-sm font-semibold text-[#888] uppercase tracking-wider mb-3">
            Desglose por modelo IA
          </h2>
          <BlurredSection title="Desbloquea desglose por IA">
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-[#c0c0c0]">
                    <th className="text-left py-2 px-2 text-[#888]">Modelo</th>
                    {topBrands.map(b => (
                      <th key={b} className="text-center py-2 px-2 text-[#888]">{b}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {market.sovByModel.map(row => (
                    <tr key={row.model} className="border-b border-[#eee]">
                      <td className="py-2 px-2 text-[#1a1a1a] capitalize">{row.model}</td>
                      {topBrands.map(b => (
                        <td key={b} className="text-center py-2 px-2 font-mono text-[#666]">
                          {(row as Record<string, number | string>)[b] ?? '-'}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </BlurredSection>
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 lg:px-8 py-12 text-center">
        <div className="border border-[#c0c0c0] rounded-lg p-8 max-w-xl mx-auto">
          <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
            Quieres el analisis completo?
          </h3>
          <p className="text-sm text-[#666] mb-4">
            Desbloquea tendencias, sentimiento, desglose por modelo y recomendaciones estrategicas.
          </p>
          <a
            href="https://calendly.com/rodrigo-quesada-trucoytrufa/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2.5 bg-[#c23b4c] text-white text-sm rounded hover:bg-[#a83242] transition-colors"
          >
            Reservar 20 minutos
          </a>
        </div>
      </div>
    </div>
  )
}
