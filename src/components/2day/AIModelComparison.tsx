'use client';

interface Company {
  name: string;
  color: string;
}

interface ModelScore {
  model: string;
  scores: {
    [key: string]: number;
  };
}

const companies: Company[] = [
  { name: 'Aedas Homes', color: '#f59e0b' },
  { name: 'Metrovacesa', color: '#047857' },
  { name: 'Neinor Homes', color: '#dc2626' },
  { name: 'Vía Célere', color: '#6b7280' },
];

const modelScores: ModelScore[] = [
  {
    model: 'claude',
    scores: {
      'Aedas Homes': 20,
      'Metrovacesa': 40,
      'Neinor Homes': 22,
      'Vía Célere': 20,
    },
  },
  {
    model: 'deepseek',
    scores: {
      'Aedas Homes': 40,
      'Metrovacesa': 20,
      'Neinor Homes': 40,
      'Vía Célere': 18,
    },
  },
  {
    model: 'gemini',
    scores: {
      'Aedas Homes': 32,
      'Metrovacesa': 6,
      'Neinor Homes': 30,
      'Vía Célere': 32,
    },
  },
  {
    model: 'grok',
    scores: {
      'Aedas Homes': 60,
      'Metrovacesa': 20,
      'Neinor Homes': 20,
      'Vía Célere': 20,
    },
  },
  {
    model: 'sonar',
    scores: {
      'Aedas Homes': 52,
      'Metrovacesa': 32,
      'Neinor Homes': 32,
      'Vía Célere': 15,
    },
  },
];

export function AIModelComparison() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-1">Comparativa SOV por Modelo IA</h3>
          <p className="text-xs text-gray-500">Cómo cada modelo de IA percibe las marcas</p>
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

      {/* Bar chart */}
      <div className="relative" style={{ height: '300px' }}>
        <svg viewBox="0 0 900 300" className="w-full h-full">
          {/* Y-axis grid lines */}
          {[0, 15, 30, 45, 60].map((value) => {
            const y = 280 - (value / 60) * 240;
            return (
              <g key={value}>
                <line
                  x1="60"
                  y1={y}
                  x2="870"
                  y2={y}
                  stroke="#e5e7eb"
                  strokeWidth="1"
                  strokeDasharray={value === 0 ? "0" : "2 2"}
                />
                <text x="45" y={y + 4} fontSize="10" fill="#9ca3af" textAnchor="end">
                  {value}%
                </text>
              </g>
            );
          })}

          {/* Bars grouped by model */}
          {modelScores.map((modelData, modelIdx) => {
            const groupX = 80 + modelIdx * 160;
            const barWidth = 28;
            const spacing = 4;

            return (
              <g key={modelIdx}>
                {companies.map((company, companyIdx) => {
                  const score = modelData.scores[company.name];
                  const barHeight = (score / 60) * 240;
                  const barX = groupX + companyIdx * (barWidth + spacing);
                  const barY = 280 - barHeight;

                  return (
                    <g key={companyIdx}>
                      <rect
                        x={barX}
                        y={barY}
                        width={barWidth}
                        height={barHeight}
                        fill={company.color}
                        rx="2"
                        className="hover:opacity-80 transition-opacity cursor-pointer"
                      />
                      {score > 5 && (
                        <text
                          x={barX + barWidth / 2}
                          y={barY - 4}
                          fontSize="9"
                          fill="#374151"
                          fontWeight="600"
                          textAnchor="middle"
                        >
                          {score}%
                        </text>
                      )}
                    </g>
                  );
                })}

                {/* Model label */}
                <text
                  x={groupX + (barWidth * 4 + spacing * 3) / 2}
                  y="295"
                  fontSize="11"
                  fill="#4b5563"
                  fontWeight="500"
                  textAnchor="middle"
                >
                  {modelData.model}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4 pt-4 border-t border-gray-100">
        {companies.map((company, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className="w-3 h-1 rounded" style={{ backgroundColor: company.color }} />
            <span className="text-xs text-gray-700">{company.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
