'use client';

import { useState } from 'react';

interface Source {
  name: string;
  icon: string;
  percentage: number;
  color: string;
}

const sources: Source[] = [
  { name: 'www.ejeprime.com', icon: '📰', percentage: 10.7, color: '#3b82f6' },
  { name: 'www.empresaactual...', icon: '💼', percentage: 10.7, color: '#06b6d4' },
  { name: 'www.europapress.es', icon: 'ep', percentage: 10.7, color: '#f97316' },
  { name: 'spainskaFastigheter...', icon: '🏢', percentage: 10.7, color: '#a855f7' },
  { name: 'creditoygestion.es', icon: '💳', percentage: 10.7, color: '#ec4899' },
  { name: 'www.inmoley.com', icon: '🏘️', percentage: 10.7, color: '#22c55e' },
  { name: 'www.democrata.es', icon: '📊', percentage: 7.1, color: '#eab308' },
  { name: 'www.pressdigital.es', icon: '📱', percentage: 7.1, color: '#14b8a6' },
  { name: 'www.galiciapress.es', icon: '📡', percentage: 7.1, color: '#f87171' },
  { name: 'www.bolsamania.co...', icon: '💹', percentage: 3.6, color: '#64748b' },
];

export function SourcesChart() {
  const [hoveredSource, setHoveredSource] = useState<string | null>(null);

  // Calculate donut segments
  const total = sources.reduce((sum, source) => sum + source.percentage, 0);
  let cumulativePercentage = 0;

  const getArcPath = (startAngle: number, endAngle: number, innerRadius: number, outerRadius: number) => {
    const startX = 150 + outerRadius * Math.cos(startAngle);
    const startY = 150 + outerRadius * Math.sin(startAngle);
    const endX = 150 + outerRadius * Math.cos(endAngle);
    const endY = 150 + outerRadius * Math.sin(endAngle);
    const innerStartX = 150 + innerRadius * Math.cos(endAngle);
    const innerStartY = 150 + innerRadius * Math.sin(endAngle);
    const innerEndX = 150 + innerRadius * Math.cos(startAngle);
    const innerEndY = 150 + innerRadius * Math.sin(startAngle);

    const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;

    return `
      M ${startX} ${startY}
      A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${endX} ${endY}
      L ${innerStartX} ${innerStartY}
      A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerEndX} ${innerEndY}
      Z
    `;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-sm font-semibold text-gray-900">Sources</h3>
          </div>
          <p className="text-xs text-gray-500">Fuentes citadas en las respuestas</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Donut Chart */}
        <div className="flex items-center justify-center">
          <svg viewBox="0 0 300 300" className="w-full max-w-sm">
            {sources.map((source, idx) => {
              const startAngle = (cumulativePercentage / 100) * 2 * Math.PI - Math.PI / 2;
              cumulativePercentage += source.percentage;
              const endAngle = (cumulativePercentage / 100) * 2 * Math.PI - Math.PI / 2;
              
              const isHovered = hoveredSource === source.name;
              const outerRadius = isHovered ? 125 : 120;
              const innerRadius = 70;

              return (
                <g
                  key={idx}
                  onMouseEnter={() => setHoveredSource(source.name)}
                  onMouseLeave={() => setHoveredSource(null)}
                  style={{ cursor: 'pointer' }}
                >
                  <path
                    d={getArcPath(startAngle, endAngle, innerRadius, outerRadius)}
                    fill={source.color}
                    opacity={hoveredSource === null || isHovered ? 1 : 0.3}
                    className="transition-all duration-200"
                  />
                </g>
              );
            })}
            
            {/* Center circle */}
            <circle cx="150" cy="150" r="70" fill="white" />
            
            {/* Center text */}
            <text
              x="150"
              y="145"
              textAnchor="middle"
              fontSize="24"
              fontWeight="bold"
              fill="#1f2937"
            >
              {total}%
            </text>
            <text
              x="150"
              y="165"
              textAnchor="middle"
              fontSize="12"
              fill="#6b7280"
            >
              Total Sources
            </text>
          </svg>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-1 gap-2">
          {sources.map((source, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-gray-50 transition-colors cursor-pointer"
              onMouseEnter={() => setHoveredSource(source.name)}
              onMouseLeave={() => setHoveredSource(null)}
            >
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <div
                  className="w-3 h-3 rounded-sm flex-shrink-0"
                  style={{ backgroundColor: source.color }}
                />
                <span className="text-sm">{source.icon}</span>
                <span className="text-xs text-gray-700 truncate">{source.name}</span>
              </div>
              <span className="text-xs font-semibold text-gray-900 ml-2">{source.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
