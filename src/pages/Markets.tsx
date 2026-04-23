import { MarketGrid } from '@/components/markets/MarketGrid'
import { BarChart3, Activity, Bot, AlertCircle } from 'lucide-react'
import { usePublicCategories } from '@/hooks/use-public-markets'
import type { Sector } from '@/lib/types'

export default function MarketsPage() {
  const { categories, marketStubs, isLoading, error } = usePublicCategories()

  const totalQueries = categories.reduce((sum, c) => sum + c.query_count, 0)
  const sectors = [...new Set(marketStubs.map((m) => m.sector))] as Sector[]

  return (
    <div>
      <div className="border-b border-[#c0c0c0]">
        <div className="px-4 lg:px-8 py-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-2">
            Directorio de Mercados
          </h1>
          <p className="text-sm text-[#666]">
            Todos los mercados que monitorizamos con datos de modelos de IA.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="border-b border-[#c0c0c0]">
        <div className="px-4 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-[#c0c0c0]">
            <div className="py-5 px-6 text-center">
              <BarChart3 className="w-4 h-4 text-accent-blue mx-auto mb-1" />
              <div className="font-mono text-xl font-bold text-[#1a1a1a]">
                {isLoading ? '...' : categories.length}
              </div>
              <div className="text-[10px] text-[#888] uppercase">Mercados</div>
            </div>
            <div className="py-5 px-6 text-center">
              <Activity className="w-4 h-4 text-[#c23b4c] mx-auto mb-1" />
              <div className="font-mono text-xl font-bold text-[#1a1a1a]">
                {isLoading ? '...' : totalQueries}
              </div>
              <div className="text-[10px] text-[#888] uppercase">Queries</div>
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
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#c23b4c]" />
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <AlertCircle className="w-8 h-8 text-[#c23b4c] mb-3" />
            <p className="text-sm text-[#1a1a1a] mb-1">No se pudieron cargar los mercados</p>
            <p className="text-xs text-[#888]">{error}</p>
          </div>
        ) : marketStubs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-sm text-[#1a1a1a] mb-1">Aún no hay mercados públicos</p>
            <p className="text-xs text-[#888]">
              Los administradores pueden marcar queries como públicas desde el panel.
            </p>
          </div>
        ) : (
          <MarketGrid markets={marketStubs} sectors={sectors} />
        )}
      </div>
    </div>
  )
}
