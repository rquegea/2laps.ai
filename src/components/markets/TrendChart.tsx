

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { TrendPoint } from '@/lib/types'

interface TrendChartProps {
  data: TrendPoint[]
  brands: string[]
}

const LINE_COLORS = ['#3B82F6', '#C23B4C', '#F59E0B', '#10B981', '#8B5CF6', '#EC4899']

export function TrendChart({ data, brands }: TrendChartProps) {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
          <XAxis
            dataKey="month"
            tick={{ fill: '#888', fontSize: 10, fontFamily: 'JetBrains Mono, monospace' }}
            axisLine={{ stroke: '#c0c0c0' }}
            tickLine={false}
          />
          <YAxis
            domain={[0, 100]}
            tick={{ fill: '#888', fontSize: 10, fontFamily: 'JetBrains Mono, monospace' }}
            axisLine={{ stroke: '#c0c0c0' }}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              background: '#fff',
              border: '1px solid #c0c0c0',
              borderRadius: '6px',
              fontSize: '12px',
              color: '#1a1a1a',
            }}
          />
          <Legend
            wrapperStyle={{
              fontSize: '10px',
            }}
          />
          {brands.map((brand, i) => (
            <Line
              key={brand}
              type="monotone"
              dataKey={brand}
              stroke={LINE_COLORS[i % LINE_COLORS.length]}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
