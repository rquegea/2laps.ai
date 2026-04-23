
import { useState } from 'react';

interface CompanyData {
  name: string;
  logo: string;
  sov: number;
  sentiment: number;
  color: string;
}

const companies: CompanyData[] = [
  { name: 'GreenEnergy', logo: '🟢', sov: 24, sentiment: 48, color: '#22c55e' },
  { name: 'SolarTech', logo: '🔴', sov: 22, sentiment: 36, color: '#ef4444' },
  { name: 'HydroFuel', logo: '🔵', sov: 20, sentiment: 26, color: '#3b82f6' },
  { name: 'WindPower', logo: '🟡', sov: 17, sentiment: 42, color: '#f59e0b' },
  { name: 'EcoGrid', logo: '🟣', sov: 11, sentiment: 8, color: '#8b5cf6' },
  { name: 'CarbonZero', logo: '🟠', sov: 4, sentiment: 32, color: '#ec4899' },
  { name: 'CleanEnergy', logo: '⚫', sov: 2, sentiment: 6, color: '#6b7280' },
];

export function SOVSentimentMatrix() {
  const [hoveredCompany, setHoveredCompany] = useState<CompanyData | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<SVGCircleElement>, company: CompanyData) => {
    const svg = e.currentTarget.ownerSVGElement;
    if (svg) {
      const rect = svg.getBoundingClientRect();
      setTooltipPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
    setHoveredCompany(company);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 relative h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
            </svg>
            <h3 className="text-sm font-semibold text-gray-900">Matriz SOV vs Sentimiento</h3>
          </div>
          <p className="text-xs text-gray-500">Posicionamiento de marcas por visibilidad y percepción</p>
        </div>
        <div className="flex items-center gap-1">
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

      {/* Scatter plot */}
      <div className="relative flex-1" style={{ minHeight: '250px' }}>
        <svg viewBox="0 0 600 350" className="w-full h-full">
          <defs>
            <linearGradient id="bg-gradient-red" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#fef2f2" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
            <linearGradient id="bg-gradient-green" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f0fdf4" />
            </linearGradient>
          </defs>

          {/* Background quadrants */}
          <rect x="50" y="30" width="275" height="140" fill="url(#bg-gradient-red)" opacity="0.3" />
          <rect x="325" y="30" width="275" height="140" fill="url(#bg-gradient-green)" opacity="0.3" />
          <rect x="50" y="170" width="275" height="140" fill="#fef2f2" opacity="0.2" />
          <rect x="325" y="170" width="275" height="140" fill="#f0fdf4" opacity="0.5" />

          {/* Labels de cuadrantes */}
          <text x="100" y="55" fontSize="10" fill="#9ca3af" fontWeight="600">
            🔵 Bajo Perfil
          </text>
          <text x="500" y="55" fontSize="10" fill="#9ca3af" fontWeight="600" textAnchor="end">
            👑 Líderes
          </text>
          <text x="520" y="295" fontSize="10" fill="#9ca3af" fontWeight="600" textAnchor="end">
            ⚠️ Riesgo
          </text>
          <text x="100" y="195" fontSize="10" fill="#9ca3af" fontWeight="600">
            ⭐ Potencial
          </text>

          {/* Grid lines */}
          <line x1="50" y1="170" x2="600" y2="170" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="325" y1="30" x2="325" y2="310" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="4 4" />

          {/* Axes */}
          <line x1="50" y1="310" x2="600" y2="310" stroke="#6b7280" strokeWidth="2" />
          <line x1="50" y1="30" x2="50" y2="310" stroke="#6b7280" strokeWidth="2" />

          {/* X-axis labels */}
          <text x="50" y="325" fontSize="10" fill="#6b7280">0%</text>
          <text x="188" y="325" fontSize="10" fill="#6b7280">8%</text>
          <text x="325" y="325" fontSize="10" fill="#6b7280">16%</text>
          <text x="462" y="325" fontSize="10" fill="#6b7280">24%</text>
          <text x="600" y="325" fontSize="10" fill="#6b7280" textAnchor="end">28%</text>

          {/* Y-axis labels */}
          <text x="40" y="315" fontSize="10" fill="#6b7280" textAnchor="end">-100</text>
          <text x="40" y="240" fontSize="10" fill="#6b7280" textAnchor="end">+16</text>
          <text x="40" y="170" fontSize="10" fill="#6b7280" textAnchor="end">+26</text>
          <text x="40" y="100" fontSize="10" fill="#6b7280" textAnchor="end">+36</text>
          <text x="40" y="35" fontSize="10" fill="#6b7280" textAnchor="end">+52</text>

          {/* Axis labels */}
          <text x="325" y="25" fontSize="11" fill="#4b5563" fontWeight="600" textAnchor="middle">
            ← Menor Visibilidad | Mayor Visibilidad →
          </text>
          <text x="25" y="170" fontSize="11" fill="#4b5563" fontWeight="600" textAnchor="middle" transform="rotate(-90 25 170)">
            Sentimiento (Score promedio SOV a +100)
          </text>

          {/* Companies as dots */}
          {companies.map((company, idx) => {
            const x = 50 + (company.sov / 28) * 550;
            const y = 310 - ((company.sentiment + 100) / 200) * 280;
            
            return (
              <g key={idx}>
                <circle
                  cx={x}
                  cy={y}
                  r="18"
                  fill={company.color}
                  opacity="0.8"
                  className="hover:opacity-100 transition-opacity cursor-pointer"
                  onMouseMove={(e) => handleMouseMove(e, company)}
                  onMouseLeave={() => setHoveredCompany(null)}
                />
                <text
                  x={x}
                  y={y + 3}
                  fontSize="12"
                  textAnchor="middle"
                >
                  {company.logo}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Tooltip */}
      {hoveredCompany && (
        <div
          className="absolute bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg pointer-events-none z-50 text-xs whitespace-nowrap"
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`,
            transform: 'translate(10px, -100%)'
          }}
        >
          <div className="font-semibold text-sm mb-1">{hoveredCompany.name}</div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>SOV: {hoveredCompany.sov}%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              <span>Sentimiento: {hoveredCompany.sentiment}</span>
            </div>
          </div>
        </div>
      )}

      {/* Footer con medias */}
      <div className="mt-4 pt-3 border-t border-gray-100">
        <div className="flex items-center justify-center gap-4 text-xs">
          <span className="text-gray-500">Medias:</span>
          <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded font-semibold">SOV 10.0%</span>
          <span className="px-2 py-1 bg-green-50 text-green-700 rounded font-semibold">Sent +31.5</span>
        </div>
      </div>
    </div>
  );
}
