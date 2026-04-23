

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { SOVEntry } from '@/lib/types'

interface SOVChartProps {
  data: SOVEntry[]
}

const COLORS = ['#3B82F6', '#6366F1', '#8B5CF6', '#A855F7', '#C084FC', '#D8B4FE', '#E9D5FF']

export function SOVChart({ data }: SOVChartProps) {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 0, right: 20, bottom: 0, left: 0 }}>
          <XAxis
            type="number"
            domain={[0, 100]}
            tick={{ fill: '#888', fontSize: 10, fontFamily: 'JetBrains Mono, monospace' }}
            axisLine={{ stroke: '#c0c0c0' }}
            tickLine={false}
            tickFormatter={(v) => `${v}%`}
          />
          <YAxis
            type="category"
            dataKey="brand"
            width={120}
            tick={{ fill: '#1a1a1a', fontSize: 11 }}
            axisLine={false}
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
            formatter={(value) => [`${value}%`, 'Share of Voice']}
            cursor={{ fill: 'rgba(0,0,0,0.03)' }}
          />
          <Bar dataKey="sov" radius={[0, 4, 4, 0]}>
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
