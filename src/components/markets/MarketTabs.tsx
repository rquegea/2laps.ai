'use client'

import { useState, useRef, useEffect, type ReactNode } from 'react'
import { Lock, ChevronUp, ChevronDown } from 'lucide-react'

const tabs = [
  { id: 'visibility', label: 'Visibility' },
  { id: 'prompts', label: 'Prompts' },
  { id: 'platforms', label: 'Platforms' },
  { id: 'regions', label: 'Regions' },
  { id: 'personas', label: 'Personas' },
  { id: 'sentiment', label: 'Sentiment' },
  { id: 'citations', label: 'Citations' },
]

interface Props {
  children: ReactNode
  marketName: string
  cardContent: ReactNode
}

export function MarketTabs({ children, marketName, cardContent }: Props) {
  const [activeTab, setActiveTab] = useState('visibility')
  const [collapsed, setCollapsed] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [cardHeight, setCardHeight] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (cardRef.current) {
      setCardHeight(cardRef.current.scrollHeight)
    }
  }, [cardContent])

  return (
    <>
      <div className="px-4 lg:px-8 flex gap-6 border-t border-[#e0e0e0] overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2.5 text-sm whitespace-nowrap flex items-center gap-1.5 transition-colors ${
              activeTab === tab.id
                ? 'text-[#1a1a1a] font-medium border-b-2 border-[#c23b4c]'
                : 'text-[#666] hover:text-[#1a1a1a]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="border-t border-[#e0e0e0]" />

      {activeTab === 'visibility' ? (
        <>
          {/* Collapsible cards section */}
          <div className="border-b border-[#c0c0c0] bg-[#f2f2f2]">
            <div className="px-4 lg:px-8 pt-5 pb-3 flex items-center justify-between">
              <h2 className="text-3xl font-semibold text-[#1a1a1a]">
                2day in the {marketName} market
              </h2>
              <button
                onClick={() => setCollapsed(c => !c)}
                className="text-[#888] hover:text-[#1a1a1a] transition-colors p-1"
              >
                {collapsed ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
              </button>
            </div>
            <div
              ref={cardRef}
              style={{
                maxHeight: collapsed ? 0 : (cardHeight ? cardHeight + 16 : 9999),
                overflow: collapsed ? 'hidden' : 'visible',
                transition: 'max-height 0.22s ease',
              }}
            >
              <div style={{
                opacity: collapsed ? 0 : 1,
                transition: 'opacity 0.18s ease',
              }}>
                {cardContent}
              </div>
            </div>
          </div>

          {/* Always-visible content below */}
          {children}
        </>
      ) : (
        <div className="px-4 lg:px-8 py-20 flex flex-col items-center justify-center text-center">
          <div className="w-14 h-14 rounded-full bg-[#f5f5f5] border border-[#ddd] flex items-center justify-center mb-5">
            <Lock className="w-6 h-6 text-[#999]" />
          </div>
          <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">
            {tabs.find(t => t.id === activeTab)?.label}
          </h3>
          <p className="text-sm text-[#888] mb-6 max-w-md">
            Esta vista esta disponible en nuestros planes de pago. Agenda una demo y te lo ensenamos en directo.
          </p>
          <a
            href="https://calendly.com/rodrigo-quesada-trucoytrufa/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2.5 bg-[#c23b4c] text-white text-sm font-semibold rounded hover:bg-[#a83242] transition-colors"
          >
            Contactar para una demo
          </a>
        </div>
      )}
    </>
  )
}
