
interface TickerItem {
  change: string;
  name: string;
  value: number;
  isPositive: boolean;
}

const tickerData: TickerItem[] = [
  { change: '+47%', name: 'GreenEnergy Corp', value: 45.0, isPositive: true },
  { change: '-41%', name: 'SolarTech Inc', value: 58.0, isPositive: false },
  { change: '+32%', name: 'HydroFuel Ltd', value: 69.0, isPositive: true },
  { change: '+28%', name: 'WindPower SA', value: 68.0, isPositive: true },
  { change: '-15%', name: 'EcoGrid Systems', value: 52.0, isPositive: false },
  { change: '+54%', name: 'CarbonZero', value: 45.0, isPositive: true },
  { change: '-22%', name: 'CleanEnergy Inc', value: 68.0, isPositive: false },
];

export function TickerBar() {
  return (
    <div className="border-b border-gray-200 bg-white overflow-hidden flex items-center" style={{ height: '45px' }}>
      <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
        {/* Duplicamos el contenido para crear el efecto de loop infinito */}
        {[...tickerData, ...tickerData].map((item, index) => (
          <div key={index} className="inline-flex items-center gap-3 px-4 text-[11px]">
            <span className={`font-medium ${item.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {item.change}
            </span>
            <span className="font-medium text-gray-700">
              {item.name} {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
