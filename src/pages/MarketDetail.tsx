import { Link, Navigate, useParams } from 'react-router-dom'
import { RankingTable } from '@/components/markets/RankingTable'
import { SOVChart } from '@/components/markets/SOVChart'
import { BlurredSection } from '@/components/markets/BlurredSection'
import { TrendChart } from '@/components/markets/TrendChart'
import { MarketTabs } from '@/components/markets/MarketTabs'
import { MarketCardsSection } from '@/components/markets/MarketCardsSection'
import { ChevronRight, AlertCircle } from 'lucide-react'
import { usePublicMarketDetail } from '@/hooks/use-public-markets'

export default function MarketDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const categoriaId = slug ? parseInt(slug, 10) : NaN
  const { market, calendlyUrl, mercadoName, isLoading, error } =
    usePublicMarketDetail(Number.isFinite(categoriaId) ? categoriaId : null)

  if (!Number.isFinite(categoriaId)) return <Navigate to="/markets" replace />

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#c23b4c]" />
      </div>
    )
  }

  if (error || !market) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <AlertCircle className="w-8 h-8 text-[#c23b4c] mb-3" />
        <p className="text-sm text-[#1a1a1a] mb-1">No se pudo cargar este mercado</p>
        <p className="text-xs text-[#888] mb-4">{error || 'Mercado no encontrado'}</p>
        <Link to="/markets" className="text-xs text-[#c23b4c] underline">
          Volver al directorio
        </Link>
      </div>
    )
  }

  const topBrands = market.rankings.slice(0, 4).map((r) => r.brand)
  const avgScore = market.rankings.length
    ? Math.round(market.rankings.reduce((sum, r) => sum + r.consensusScore, 0) / market.rankings.length)
    : 0

  return (
    <div>
      {/* Breadcrumb */}
      <div className="border-b border-[#c0c0c0]">
        <div className="px-4 lg:px-8 py-2">
          <nav className="flex items-center gap-1 text-xs text-[#888]">
            <Link to="/" className="hover:text-[#1a1a1a] transition-colors">Inicio</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/markets" className="hover:text-[#1a1a1a] transition-colors">Mercados</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#1a1a1a]">{market.name}</span>
          </nav>
        </div>
      </div>

      {/* Bloomberg-style Header */}
      <div className="border-b border-[#1a1a1a]">
        <div className="px-4 lg:px-8 pt-6 pb-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1a1a1a] tracking-tight font-sans">
            {market.name}
          </h1>
        </div>
        {/* Sub-tabs + content */}
        <MarketTabs
          marketName={market.name}
          cardContent={<MarketCardsSection rankings={market.rankings} />}
        >

      {/* Summary stats bar */}
      <div className="border-b border-[#c0c0c0] bg-[#f8f8f8]">
        <div className="px-4 lg:px-8 py-3 flex flex-wrap gap-6 text-xs">
          <div>
            <span className="text-[#888] uppercase tracking-wider">Marcas rastreadas</span>
            <span className="ml-2 font-mono font-bold text-[#1a1a1a]">{market.rankings.length}</span>
          </div>
          <div>
            <span className="text-[#888] uppercase tracking-wider">Score medio</span>
            <span className="ml-2 font-mono font-bold text-[#1a1a1a]">{avgScore}</span>
          </div>
          <div>
            <span className="text-[#888] uppercase tracking-wider">Modelos IA</span>
            <span className="ml-2 font-mono font-bold text-[#1a1a1a]">{market.aiModels.length}</span>
          </div>
          <div>
            <span className="text-[#888] uppercase tracking-wider">Prompts</span>
            <span className="ml-2 font-mono font-bold text-[#1a1a1a]">{market.promptsTracked}</span>
          </div>
          <div>
            <span className="text-[#888] uppercase tracking-wider">SOV Lider</span>
            <span className="ml-2 font-mono font-bold text-[#3B82F6]">{market.sovDistribution[0]?.sov}%</span>
          </div>
        </div>
      </div>

      {/* Two-column: Prompts + Ranking Table */}
      <div className="border-b border-[#c0c0c0]">
        <div className="px-4 lg:px-8 py-5">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
            {/* Left: Prompts analyzed */}
            <div>
              <h2 className="text-xs font-semibold text-[#888] uppercase tracking-widest mb-3">
                Prompts analizados
              </h2>
              <div className="space-y-2">
                {market.prompts.map((prompt, i) => (
                  <div key={i} className="border border-[#ddd] rounded p-2.5 bg-white hover:border-[#999] transition-colors">
                    <div className="flex items-start gap-2">
                      <span className="text-[10px] font-mono text-[#3B82F6] bg-[#3B82F6]/10 px-1.5 py-0.5 rounded shrink-0">
                        P{i + 1}
                      </span>
                      <span className="text-xs text-[#444] leading-relaxed">&quot;{prompt}&quot;</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Models tracked */}
              <div className="mt-5">
                <h3 className="text-xs font-semibold text-[#888] uppercase tracking-widest mb-3">
                  Modelos rastreados
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {market.aiModels.map(model => (
                    <span
                      key={model}
                      className="text-[10px] font-mono px-2 py-1 bg-[#1a1a1a] text-white rounded capitalize"
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Rankings Table */}
            <div>
              <h2 className="text-xs font-semibold text-[#888] uppercase tracking-widest mb-3">
                Ranking de marcas
              </h2>
              <RankingTable rankings={market.rankings} totalModels={market.aiModels.length} />
            </div>
          </div>
        </div>
      </div>

      {/* Share of Voice */}
      <div className="border-b border-[#c0c0c0]">
        <div className="px-4 lg:px-8 py-5">
          <h2 className="text-xs font-semibold text-[#888] uppercase tracking-widest mb-3">
            Share of Voice
          </h2>
          <SOVChart data={market.sovDistribution} />
        </div>
      </div>

      {/* PREMIUM: Trend Over Time (blurred) */}
      <div className="border-b border-[#c0c0c0]">
        <div className="px-4 lg:px-8 py-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-semibold text-[#888] uppercase tracking-widest">
              Tendencia mensual
            </h2>
            <span className="text-[10px] font-mono text-[#c23b4c] bg-[#c23b4c]/10 px-2 py-0.5 rounded uppercase tracking-wider">
              Premium
            </span>
          </div>
          <BlurredSection title="Desbloquea tendencias">
            <TrendChart data={market.trendOverTime} brands={topBrands} />
          </BlurredSection>
        </div>
      </div>

      {/* PREMIUM: Sentiment + SOV by Model — side by side on desktop */}
      <div className="border-b border-[#c0c0c0]">
        <div className="px-4 lg:px-8 py-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sentiment */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xs font-semibold text-[#888] uppercase tracking-widest">
                  Analisis de sentimiento
                </h2>
                <span className="text-[10px] font-mono text-[#c23b4c] bg-[#c23b4c]/10 px-2 py-0.5 rounded uppercase tracking-wider">
                  Premium
                </span>
              </div>
              <BlurredSection title="Desbloquea sentimiento">
                <div className="space-y-3 py-4">
                  {market.sentimentByBrand.slice(0, 4).map(s => (
                    <div key={s.brand} className="flex items-center gap-3">
                      <span className="w-24 text-xs text-[#1a1a1a] truncate font-medium">{s.brand}</span>
                      <div className="flex-1 flex h-5 rounded overflow-hidden">
                        <div className="bg-emerald-500 flex items-center justify-center" style={{ width: `${s.positive}%` }}>
                          <span className="text-[9px] text-white font-mono">{s.positive}%</span>
                        </div>
                        <div className="bg-amber-400 flex items-center justify-center" style={{ width: `${s.neutral}%` }}>
                          <span className="text-[9px] text-white font-mono">{s.neutral}%</span>
                        </div>
                        <div className="bg-red-500 flex items-center justify-center" style={{ width: `${s.negative}%` }}>
                          <span className="text-[9px] text-white font-mono">{s.negative}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center gap-4 mt-2 text-[10px] text-[#888]">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 bg-emerald-500 rounded-full inline-block" /> Positivo</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 bg-amber-400 rounded-full inline-block" /> Neutro</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 bg-red-500 rounded-full inline-block" /> Negativo</span>
                  </div>
                </div>
              </BlurredSection>
            </div>

            {/* SOV by Model */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xs font-semibold text-[#888] uppercase tracking-widest">
                  Desglose por modelo IA
                </h2>
                <span className="text-[10px] font-mono text-[#c23b4c] bg-[#c23b4c]/10 px-2 py-0.5 rounded uppercase tracking-wider">
                  Premium
                </span>
              </div>
              <BlurredSection title="Desbloquea desglose por IA">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-[#1a1a1a]">
                        <th className="text-left py-2 px-2 text-[#888] uppercase tracking-wider text-[10px]">Modelo</th>
                        {topBrands.map(b => (
                          <th key={b} className="text-center py-2 px-2 text-[#888] uppercase tracking-wider text-[10px]">{b}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {market.sovByModel.map((row, i) => (
                        <tr key={row.model} className={`border-b ${i % 2 === 0 ? 'bg-[#fafafa]' : 'bg-white'} border-[#eee]`}>
                          <td className="py-2 px-2 text-[#1a1a1a] capitalize font-medium">{row.model}</td>
                          {topBrands.map(b => {
                            const val = (row as Record<string, number | string>)[b]
                            return (
                              <td key={b} className="text-center py-2 px-2 font-mono text-[#444]">
                                {val != null ? `${val}%` : '-'}
                              </td>
                            )
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </BlurredSection>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 lg:px-8 py-10">
        <div className="border-2 border-[#1a1a1a] rounded-lg p-8 max-w-2xl mx-auto text-center bg-[#fafafa]">
          <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
            Quieres el analisis completo de {market.name}?
          </h3>
          <p className="text-sm text-[#666] mb-5 max-w-md mx-auto">
            Desbloquea tendencias, sentimiento, desglose por modelo y recomendaciones estrategicas para tu mercado.
          </p>
          <a
            href="https://calendly.com/rodrigo-quesada-trucoytrufa/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#c23b4c] text-white text-sm font-semibold rounded hover:bg-[#a83242] transition-colors"
          >
            Reservar 20 minutos
          </a>
          <p className="text-[10px] text-[#888] mt-3">
            Sin compromiso. Te mostramos tu mercado completo en la llamada.
          </p>
        </div>
      </div>

        </MarketTabs>
      </div>
    </div>
  )
}
