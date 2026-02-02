'use client';

interface RankingItem {
  rank: number;
  brand: string;
  logo: string;
  sov: string;
  sovDelta: string;
  sovDeltaValue: number;
  sent: string;
  sentDelta: string;
  sentDeltaValue: number;
}

const rankingData: RankingItem[] = [
  { rank: 1, brand: 'GreenEnergy', logo: '🟢', sov: '24%', sovDelta: '-4.8', sovDeltaValue: -4.8, sent: '+32', sentDelta: '-16', sentDeltaValue: -16 },
  { rank: 2, brand: 'SolarTech', logo: '🔴', sov: '22%', sovDelta: '-0.6', sovDeltaValue: -0.6, sent: '+27', sentDelta: '-14', sentDeltaValue: -14 },
  { rank: 3, brand: 'HydroFuel', logo: '🔵', sov: '20%', sovDelta: '-0.6', sovDeltaValue: -0.6, sent: '+32', sentDelta: '-6', sentDeltaValue: -6 },
  { rank: 4, brand: 'WindPower', logo: '🟡', sov: '17%', sovDelta: '-5.4', sovDeltaValue: -5.4, sent: '+39', sentDelta: '-17', sentDeltaValue: -17 },
  { rank: 5, brand: 'EcoGrid', logo: '🟣', sov: '11%', sovDelta: '+6.2', sovDeltaValue: 6.2, sent: '+48', sentDelta: '+3', sentDeltaValue: 3 },
  { rank: 6, brand: 'CarbonZero', logo: '🟠', sov: '2%', sovDelta: '+2.5', sovDeltaValue: 2.5, sent: '+38', sentDelta: '0', sentDeltaValue: 0 },
  { rank: 7, brand: 'CleanEnergy', logo: '⚫', sov: '2%', sovDelta: '+2.1', sovDeltaValue: 2.1, sent: '+10', sentDelta: '+2', sentDeltaValue: 2 },
];

export function IndustryRanking() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900">Industry Ranking</h3>
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

      {/* Table compacta */}
      <div className="overflow-x-auto flex-1">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-1.5 px-1 font-medium text-gray-500 w-6">#</th>
              <th className="text-left py-1.5 px-1 font-medium text-gray-500 min-w-[80px]">Brand</th>
              <th className="text-right py-1.5 px-1 font-medium text-gray-500 w-12">
                <div className="flex items-center justify-end gap-0.5">
                  <span>SOV</span>
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </th>
              <th className="text-right py-1.5 px-1 font-medium text-gray-500 w-10">Δ</th>
              <th className="text-right py-1.5 px-1 font-medium text-gray-500 w-10">SENT</th>
              <th className="text-right py-1.5 px-1 font-medium text-gray-500 w-10">Δ</th>
            </tr>
          </thead>
          <tbody>
            {rankingData.map((item) => (
              <tr key={item.rank} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="py-1.5 px-1 text-gray-600 text-[10px]">{item.rank}</td>
                <td className="py-1.5 px-1">
                  <div className="flex items-center gap-1">
                    <span className="text-sm">{item.logo}</span>
                    <span className="font-medium text-gray-900 text-[10px] truncate">{item.brand}</span>
                  </div>
                </td>
                <td className="py-1.5 px-1 text-right font-semibold text-blue-600 text-[10px]">{item.sov}</td>
                <td className="py-1.5 px-1 text-right text-[10px]">
                  <span className={item.sovDeltaValue >= 0 ? 'text-green-600' : 'text-red-600'}>
                    {item.sovDelta}
                  </span>
                </td>
                <td className="py-1.5 px-1 text-right font-medium text-green-600 text-[10px]">{item.sent}</td>
                <td className="py-1.5 px-1 text-right text-[10px]">
                  <span className={item.sentDeltaValue >= 0 ? 'text-green-600' : 'text-red-600'}>
                    {item.sentDelta}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
