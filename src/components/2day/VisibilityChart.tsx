'use client';

import { useState } from 'react';

interface ChartData {
  name: string;
  value: number;
  change: string;
  changePercent: number;
  isPositive: boolean;
  points: string;
  gradient: string;
  gradientId: string;
  color: string;
}

const chartData: ChartData[] = [
  {
    name: 'GreenEnergy Corp',
    value: 15.5,
    change: '+6.1%',
    changePercent: 6.1,
    isPositive: true,
    points: '0,45 15,40 30,35 45,38 60,30 75,25 90,20 100,15',
    gradient: 'greenGradient1',
    gradientId: 'greenGradient1',
    color: '#22c55e',
  },
  {
    name: 'SolarTech Inc',
    value: 19.7,
    change: '-18.7%',
    changePercent: -18.7,
    isPositive: false,
    points: '0,15 15,18 30,20 45,25 60,28 75,32 90,35 100,40',
    gradient: 'redGradient1',
    gradientId: 'redGradient1',
    color: '#ef4444',
  },
  {
    name: 'HydroFuel Ltd',
    value: 11.0,
    change: '+7.9%',
    changePercent: 7.9,
    isPositive: true,
    points: '0,40 15,38 30,35 45,30 60,28 75,25 90,22 100,18',
    gradient: 'greenGradient2',
    gradientId: 'greenGradient2',
    color: '#22c55e',
  },
  {
    name: 'WindPower SA',
    value: 8.1,
    change: '+25.2%',
    changePercent: 25.2,
    isPositive: true,
    points: '0,30 15,32 30,35 45,33 60,34 75,32 90,28 100,25',
    gradient: 'greenGradient3',
    gradientId: 'greenGradient3',
    color: '#22c55e',
  },
];

type Period = '1' | '3' | '7';

export function VisibilityChart() {
  const [hoveredChart, setHoveredChart] = useState<number | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<Period>('1');

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-sm font-['Switzer']">Visibilidad Movers</h3>
        <div className="flex items-center gap-2">
          {/* Selector de periodo */}
          <div className="flex items-center gap-1 text-[10px] bg-gray-50 rounded-lg p-1">
            {(['1', '3', '7'] as Period[]).map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-2 py-1 rounded transition-all duration-300 font-['Switzer'] ${
                  selectedPeriod === period
                    ? 'bg-white text-gray-800 font-semibold shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {period}d
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1 text-[10px] text-gray-500 bg-gray-50 px-2 py-1 rounded">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span className="font-['Switzer']">Real</span>
          </div>
        </div>
      </div>

      {/* Grid de 2x2 para los movers */}
      <div className="grid grid-cols-2 gap-4">
        {chartData.map((chart, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredChart(index)}
            onMouseLeave={() => setHoveredChart(null)}
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-[11px] font-semibold text-gray-800 font-['Switzer']">
                {chart.name.length > 11 ? chart.name.slice(0, 11) + '...' : chart.name}
              </span>
              <span className="text-[11px] font-bold text-gray-800 font-['Switzer']">
                {chart.value}
              </span>
            </div>
            <div
              className={`h-16 ${
                chart.isPositive ? 'bg-green-50' : 'bg-red-50'
              } rounded-lg p-2 relative overflow-hidden transition-all duration-300 ${
                hoveredChart === index ? 'ring-2 ring-gray-300 shadow-md' : ''
              }`}
            >
              <svg
                viewBox="0 0 100 50"
                className="w-full h-full transition-opacity duration-300"
                preserveAspectRatio="none"
                style={{ opacity: selectedPeriod === '1' ? 1 : 0.8 }}
              >
                <defs>
                  <linearGradient
                    id={chart.gradientId}
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor={chart.color}
                      stopOpacity="0.3"
                    />
                    <stop
                      offset="100%"
                      stopColor={chart.color}
                      stopOpacity="0.05"
                    />
                  </linearGradient>
                </defs>
                <path
                  d={`M${chart.points} L100,50 L0,50 Z`}
                  fill={`url(#${chart.gradientId})`}
                  className="transition-all duration-300"
                />
                <polyline
                  points={chart.points}
                  fill="none"
                  stroke={chart.color}
                  strokeWidth="2"
                  className="transition-all duration-300"
                />
              </svg>

              {/* Tooltip flotante al hacer hover */}
              {hoveredChart === index && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-[10px] font-semibold shadow-lg animate-in fade-in zoom-in duration-200">
                  <div className="text-center font-['Switzer']">
                    <div className="text-xs font-bold">{chart.value}</div>
                    <div className="text-[9px] opacity-90">{selectedPeriod} día{selectedPeriod !== '1' ? 's' : ''}</div>
                    <div className={`text-[9px] font-semibold ${chart.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                      {chart.change}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center gap-1 mt-1">
              <span
                className={`text-[11px] font-semibold font-['Switzer'] ${
                  chart.isPositive ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {chart.change}
              </span>
              <svg
                className={`w-3 h-3 ${
                  chart.isPositive ? 'text-green-600' : 'text-red-600'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                {chart.isPositive ? (
                  <path
                    fillRule="evenodd"
                    d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
