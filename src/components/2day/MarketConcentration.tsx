'use client';

export function MarketConcentration() {
  const value = 1860.62;
  const max = 10000;
  const percentage = (value / max) * 100;
  
  // Calcular el ángulo para el gauge (180 grados = semicírculo)
  const angle = (percentage / 100) * 180 - 90;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
            <h3 className="text-sm font-semibold text-gray-900">Concentración del Mercado</h3>
          </div>
          <p className="text-xs text-gray-500">Índice Herfindahl-Hirschman (HHI)</p>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </button>
          <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Gauge */}
      <div className="flex flex-col items-center justify-center py-2 flex-1">
        <svg viewBox="0 0 200 120" className="w-full max-w-[180px]">
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="50%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>

          {/* Background arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="12"
            strokeLinecap="round"
          />

          {/* Colored arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth="12"
            strokeLinecap="round"
          />

          {/* Needle */}
          <g transform={`rotate(${angle} 100 100)`}>
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="30"
              stroke="#1f2937"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="100" cy="100" r="6" fill="#1f2937" />
          </g>

          {/* Labels */}
          <text x="20" y="115" fontSize="8" fill="#6b7280" textAnchor="start">0</text>
          <text x="100" y="20" fontSize="8" fill="#6b7280" textAnchor="middle">5000</text>
          <text x="180" y="115" fontSize="8" fill="#6b7280" textAnchor="end">10000</text>
        </svg>

        {/* Value display */}
        <div className="text-center mt-1">
          <div className="text-2xl font-bold text-orange-500">{value.toLocaleString('es-ES')}</div>
          <div className="text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full inline-block mt-1">
            Moderado
          </div>
        </div>

        {/* Description */}
        <div className="text-center mt-3">
          <p className="text-xs text-gray-600">Concentración moderada</p>
          <p className="text-xs text-gray-500">10 marcas analizadas</p>
        </div>
      </div>
    </div>
  );
}
