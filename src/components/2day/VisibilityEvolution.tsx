'use client';

const companies = [
  { 
    name: 'GreenEnergy', 
    color: '#22c55e',
    data: [
      { date: '27/1', value: 24 },
      { date: '28/1', value: 25 },
      { date: '29/1', value: 26 },
      { date: '30/1', value: 25 },
      { date: '31/1', value: 24 },
      { date: '1/2', value: 26 },
      { date: '2/2', value: 27 },
    ]
  },
  { 
    name: 'SolarTech', 
    color: '#ef4444',
    data: [
      { date: '27/1', value: 21 },
      { date: '28/1', value: 22 },
      { date: '29/1', value: 20 },
      { date: '30/1', value: 21 },
      { date: '31/1', value: 22 },
      { date: '1/2', value: 23 },
      { date: '2/2', value: 21 },
    ]
  },
  { 
    name: 'HydroFuel', 
    color: '#3b82f6',
    data: [
      { date: '27/1', value: 18 },
      { date: '28/1', value: 19 },
      { date: '29/1', value: 20 },
      { date: '30/1', value: 19 },
      { date: '31/1', value: 20 },
      { date: '1/2', value: 19 },
      { date: '2/2', value: 20 },
    ]
  },
  { 
    name: 'WindPower', 
    color: '#f59e0b',
    data: [
      { date: '27/1', value: 16 },
      { date: '28/1', value: 15 },
      { date: '29/1', value: 16 },
      { date: '30/1', value: 17 },
      { date: '31/1', value: 16 },
      { date: '1/2', value: 17 },
      { date: '2/2', value: 16 },
    ]
  },
  { 
    name: 'EcoGrid', 
    color: '#8b5cf6',
    data: [
      { date: '27/1', value: 11 },
      { date: '28/1', value: 10 },
      { date: '29/1', value: 11 },
      { date: '30/1', value: 12 },
      { date: '31/1', value: 11 },
      { date: '1/2', value: 10 },
      { date: '2/2', value: 11 },
    ]
  },
  { 
    name: 'CarbonZero', 
    color: '#ec4899',
    data: [
      { date: '27/1', value: 8 },
      { date: '28/1', value: 7 },
      { date: '29/1', value: 6 },
      { date: '30/1', value: 5 },
      { date: '31/1', value: 6 },
      { date: '1/2', value: 4 },
      { date: '2/2', value: 3 },
    ]
  },
];

export function VisibilityEvolution() {
  const maxValue = 30;
  const dates = companies[0].data.map(d => d.date);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-1">Visibility</h3>
          <p className="text-xs text-gray-500">
            Evolución diaria del porcentaje de menciones por marca{' '}
            <span className="text-blue-600">(2026-01-27 → 2026-02-02)</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-2 py-1 text-xs text-gray-600 hover:bg-gray-50 rounded">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            Real
          </button>
          <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </button>
          <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Gráfico estilo área */}
      <div className="relative flex-1">
        <svg viewBox="0 0 700 240" className="w-full h-full">
          <defs>
            {companies.map((company, idx) => (
              <linearGradient key={idx} id={`area-gradient-${idx}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={company.color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={company.color} stopOpacity={0.05} />
              </linearGradient>
            ))}
          </defs>

          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((percent) => {
            const y = 200 - (percent * 2);
            return (
              <g key={percent}>
                <line
                  x1="50"
                  y1={y}
                  x2="680"
                  y2={y}
                  stroke="#e5e7eb"
                  strokeWidth="1"
                  strokeDasharray={percent === 0 ? "0" : "4 4"}
                />
                <text x="35" y={y + 4} fontSize="10" fill="#9ca3af" textAnchor="end">
                  {percent === 0 ? '0%' : percent === 25 ? '8%' : percent === 50 ? '16%' : percent === 75 ? '24%' : '30%'}
                </text>
              </g>
            );
          })}

          {/* X-axis labels */}
          {dates.map((date, idx) => {
            const x = 50 + (idx * 105);
            return (
              <text key={date} x={x} y="220" fontSize="10" fill="#9ca3af" textAnchor="middle">
                {date}
              </text>
            );
          })}

          {/* Areas y líneas */}
          {companies.map((company, companyIdx) => {
            const points = company.data.map((d, idx) => {
              const x = 50 + (idx * 105);
              const y = 200 - ((d.value / maxValue) * 200);
              return `${x},${y}`;
            }).join(' ');

            const areaPoints = `50,200 ${points} ${50 + (company.data.length - 1) * 105},200`;

            return (
              <g key={companyIdx}>
                {/* Área rellena */}
                <polygon
                  points={areaPoints}
                  fill={`url(#area-gradient-${companyIdx})`}
                  opacity="0.8"
                />
                {/* Línea */}
                <polyline
                  points={points}
                  fill="none"
                  stroke={company.color}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Puntos */}
                {company.data.map((d, idx) => {
                  const x = 50 + (idx * 105);
                  const y = 200 - ((d.value / maxValue) * 200);
                  return (
                    <circle
                      key={idx}
                      cx={x}
                      cy={y}
                      r="3"
                      fill={company.color}
                      stroke="white"
                      strokeWidth="2"
                    />
                  );
                })}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 pt-4 border-t border-gray-100">
        {companies.map((company, idx) => (
          <div key={idx} className="flex items-center gap-1.5">
            <div
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: company.color }}
            />
            <span className="text-xs text-gray-700">{company.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
