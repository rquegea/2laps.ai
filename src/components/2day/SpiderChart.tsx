'use client';

import { useState } from 'react';

interface CompanyData {
  name: string;
  logo: string;
  color: string;
  metrics: {
    sov: number;
    sentiment: number;
    visibility: number;
    mentions: number;
    engagement: number;
  };
}

const companies: CompanyData[] = [
  { 
    name: 'GreenEnergy', 
    logo: '🟢', 
    color: '#22c55e',
    metrics: { sov: 24, sentiment: 48, visibility: 85, mentions: 92, engagement: 78 }
  },
  { 
    name: 'SolarTech', 
    logo: '🔴', 
    color: '#ef4444',
    metrics: { sov: 22, sentiment: 36, visibility: 78, mentions: 85, engagement: 65 }
  },
  { 
    name: 'HydroFuel', 
    logo: '🔵', 
    color: '#3b82f6',
    metrics: { sov: 20, sentiment: 26, visibility: 72, mentions: 80, engagement: 58 }
  },
  { 
    name: 'WindPower', 
    logo: '🟡', 
    color: '#f59e0b',
    metrics: { sov: 17, sentiment: 42, visibility: 68, mentions: 75, engagement: 70 }
  },
  { 
    name: 'EcoGrid', 
    logo: '🟣', 
    color: '#8b5cf6',
    metrics: { sov: 11, sentiment: 8, visibility: 45, mentions: 52, engagement: 38 }
  },
  { 
    name: 'CarbonZero', 
    logo: '🟠', 
    color: '#ec4899',
    metrics: { sov: 4, sentiment: 32, visibility: 35, mentions: 42, engagement: 48 }
  },
  { 
    name: 'CleanEnergy', 
    logo: '⚫', 
    color: '#6b7280',
    metrics: { sov: 2, sentiment: 6, visibility: 28, mentions: 30, engagement: 25 }
  },
];

const metrics = [
  { key: 'sov', label: 'SOV', max: 30 },
  { key: 'sentiment', label: 'Sentimiento', max: 100 },
  { key: 'visibility', label: 'Visibilidad', max: 100 },
  { key: 'mentions', label: 'Menciones', max: 100 },
  { key: 'engagement', label: 'Engagement', max: 100 },
];

export function SpiderChart() {
  const [hoveredCompany, setHoveredCompany] = useState<string | null>(null);

  const getPolygonPoints = (company: CompanyData) => {
    const centerX = 300;
    const centerY = 200;
    const maxRadius = 150;
    
    return metrics.map((metric, index) => {
      const angle = (Math.PI * 2 * index) / metrics.length - Math.PI / 2;
      const value = company.metrics[metric.key as keyof typeof company.metrics];
      const normalizedValue = value / metric.max;
      const radius = normalizedValue * maxRadius;
      
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      
      return `${x},${y}`;
    }).join(' ');
  };

  const getAxisPoints = () => {
    const centerX = 300;
    const centerY = 200;
    const maxRadius = 150;
    
    return metrics.map((metric, index) => {
      const angle = (Math.PI * 2 * index) / metrics.length - Math.PI / 2;
      const x = centerX + maxRadius * Math.cos(angle);
      const y = centerY + maxRadius * Math.sin(angle);
      const labelX = centerX + (maxRadius + 35) * Math.cos(angle);
      const labelY = centerY + (maxRadius + 35) * Math.sin(angle);
      
      return { x, y, labelX, labelY, label: metric.label };
    });
  };

  const axisPoints = getAxisPoints();

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
            </svg>
            <h3 className="text-sm font-semibold text-gray-900">Share of Voice - Diagrama de Araña</h3>
          </div>
          <p className="text-xs text-gray-500">Comparación visual de la participación de mercado por entidad</p>
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

      {/* Spider Chart */}
      <div className="relative" style={{ height: '400px' }}>
        <svg viewBox="0 0 600 400" className="w-full h-full">
          <defs>
            {companies.map((company, idx) => (
              <linearGradient key={idx} id={`spider-gradient-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={company.color} stopOpacity="0.2" />
                <stop offset="100%" stopColor={company.color} stopOpacity="0.05" />
              </linearGradient>
            ))}
          </defs>

          {/* Grid circles */}
          {[0.2, 0.4, 0.6, 0.8, 1].map((scale) => (
            <g key={scale}>
              <polygon
                points={metrics.map((_, index) => {
                  const angle = (Math.PI * 2 * index) / metrics.length - Math.PI / 2;
                  const x = 300 + 150 * scale * Math.cos(angle);
                  const y = 200 + 150 * scale * Math.sin(angle);
                  return `${x},${y}`;
                }).join(' ')}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="1"
                strokeDasharray={scale === 1 ? "0" : "2 2"}
              />
            </g>
          ))}

          {/* Axis lines */}
          {axisPoints.map((point, index) => (
            <g key={index}>
              <line
                x1="300"
                y1="200"
                x2={point.x}
                y2={point.y}
                stroke="#d1d5db"
                strokeWidth="1"
              />
              <text
                x={point.labelX}
                y={point.labelY}
                fontSize="11"
                fill="#4b5563"
                fontWeight="600"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {point.label}
              </text>
            </g>
          ))}

          {/* Company polygons */}
          {companies.map((company, idx) => {
            const isHovered = hoveredCompany === company.name;
            const opacity = hoveredCompany === null || isHovered ? 1 : 0.2;
            
            return (
              <g 
                key={idx}
                onMouseEnter={() => setHoveredCompany(company.name)}
                onMouseLeave={() => setHoveredCompany(null)}
                style={{ cursor: 'pointer' }}
              >
                <polygon
                  points={getPolygonPoints(company)}
                  fill={`url(#spider-gradient-${idx})`}
                  stroke={company.color}
                  strokeWidth={isHovered ? "3" : "2"}
                  opacity={opacity}
                  className="transition-all duration-200"
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-4 pt-4 border-t border-gray-100">
        {companies.map((company, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-1.5 cursor-pointer"
            onMouseEnter={() => setHoveredCompany(company.name)}
            onMouseLeave={() => setHoveredCompany(null)}
          >
            <span className="text-sm">{company.logo}</span>
            <span className="text-xs text-gray-700 font-medium">{company.name}</span>
            <div
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: company.color }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
