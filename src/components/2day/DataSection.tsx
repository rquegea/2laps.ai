
import { VisibilityEvolution } from './VisibilityEvolution';
import { IndustryRanking } from './IndustryRanking';
import { SOVSentimentMatrix } from './SOVSentimentMatrix';
import { MarketConcentration } from './MarketConcentration';
import { SpiderChart } from './SpiderChart';
import { AIModelComparison } from './AIModelComparison';
import { SourcesChart } from './SourcesChart';

export function DataSection() {
  return (
    <div className="bg-white h-full flex flex-col" style={{ fontFamily: "'Switzer', sans-serif" }}>
      {/* Header con breadcrumb más pequeño */}
      <div className="border-b border-gray-200 px-4 py-2">
        <div className="text-xs text-gray-500">
          Energy & Sustainability - Clean Energy Companies
        </div>
      </div>

      {/* Barra de filtros superior compacta */}
      <div className="border-b border-gray-200 px-4 py-2">
        <div className="flex items-center gap-2">
          {/* Selector de fecha */}
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs border border-gray-300 rounded-md bg-white hover:bg-gray-50">
            <svg className="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Últimos 7 días</span>
            <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Companies */}
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs border border-gray-300 rounded-md bg-white hover:bg-gray-50">
            <span>Companies (7/7)</span>
            <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Sources */}
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs border border-gray-300 rounded-md bg-white hover:bg-gray-50">
            <span>Sources</span>
            <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Sentiment */}
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs border border-gray-300 rounded-md bg-white hover:bg-gray-50">
            <span>All Sentiment</span>
            <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Contenido principal con gráficos */}
      <div className="flex-1 overflow-auto p-4">
        <div className="space-y-32">
          {/* Primera fila: Visibility + Industry Ranking */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4" style={{ minHeight: '350px', maxHeight: '400px' }}>
            <div className="lg:col-span-2">
              <VisibilityEvolution />
            </div>
            <div className="lg:col-span-1">
              <IndustryRanking />
            </div>
          </div>

          {/* Segunda fila: Matriz SOV + Concentración */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4" style={{ minHeight: '350px', maxHeight: '400px' }}>
            <div className="lg:col-span-2">
              <SOVSentimentMatrix />
            </div>
            <div className="lg:col-span-1">
              <MarketConcentration />
            </div>
          </div>

          {/* Tercera fila: Spider Chart (ancho completo) */}
          <div className="w-full pt-4">
            <SpiderChart />
          </div>

          {/* Cuarta fila: Comparativa IA (ancho completo) */}
          <div className="w-full">
            <AIModelComparison />
          </div>

          {/* Quinta fila: Sources (ancho completo) */}
          <div className="w-full">
            <SourcesChart />
          </div>
        </div>
      </div>
    </div>
  );
}
