'use client';

import { useState } from 'react';
import { TickerBar } from './2day/TickerBar';
import { VisibilityChart } from './2day/VisibilityChart';
import { NewsGrid } from './2day/NewsGrid';
import { DataSection } from './2day/DataSection';

type ActiveTab = '2day' | 'data';

export function TwoDayContent() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('2day');

  return (
    <div className="bg-white h-full flex" style={{ fontFamily: "'Switzer', sans-serif" }}>
      {/* Sidebar Izquierdo - Navegación Principal */}
      <div className="w-12 bg-[#F7F7F7] border-r border-gray-200 flex-shrink-0 flex flex-col">
        {/* Logo */}
        <div className="px-1.5 py-3 border-b border-gray-200">
          <h1 className="text-xs font-normal tracking-tight text-center">2laps</h1>
        </div>
        
        {/* Navegación */}
        <div className="flex-1 py-2">
          <nav className="space-y-1 px-1">
            {/* 2day */}
            <button
              onClick={() => setActiveTab('2day')}
              className={`w-full flex flex-col items-center py-2 rounded-lg cursor-pointer transition-colors ${
                activeTab === '2day'
                  ? 'bg-white border border-gray-200'
                  : 'hover:bg-gray-100'
              }`}
            >
              <svg className={`w-3 h-3 mb-0.5 ${activeTab === '2day' ? 'text-gray-800' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className={`text-[8px] ${activeTab === '2day' ? 'font-medium text-gray-800' : 'text-gray-500'}`}>2day</span>
            </button>

            {/* Workspaces */}
            <div className="flex flex-col items-center py-2 rounded-lg hover:bg-gray-100 cursor-pointer opacity-50">
              <svg className="w-3 h-3 text-gray-400 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span className="text-[8px] text-gray-500">Work</span>
            </div>

            {/* Data */}
            <button
              onClick={() => setActiveTab('data')}
              className={`w-full flex flex-col items-center py-2 rounded-lg cursor-pointer transition-colors ${
                activeTab === 'data'
                  ? 'bg-white border border-gray-200'
                  : 'hover:bg-gray-100'
              }`}
            >
              <svg className={`w-3 h-3 mb-0.5 ${activeTab === 'data' ? 'text-gray-800' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
              <span className={`text-[8px] ${activeTab === 'data' ? 'font-medium text-gray-800' : 'text-gray-500'}`}>Data</span>
            </button>
          </nav>
        </div>

        {/* Footer con iniciales */}
        <div className="px-1 py-2 border-t border-gray-200">
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-white text-[8px] font-semibold">TL</span>
            </div>
            <button className="p-0.5 hover:bg-gray-200 rounded">
              <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Vista 2day */}
        {activeTab === '2day' && (
          <>
            {/* Header con ticker */}
            <TickerBar />

            {/* Content wrapper con scroll */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 md:p-6">
                {/* Título principal */}
                <h1 className="text-2xl md:text-4xl font-normal mb-6" style={{ fontFamily: "'Georgia', serif" }}>
                  Discover 2day
                </h1>

                {/* Grid principal - noticia destacada + sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                  {/* Noticia principal */}
                  <div className="lg:col-span-2">
                    <div className="mb-4">
                      <img 
                        src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop"
                        alt="Green Hydrogen Plant"
                        className="w-full h-48 md:h-64 object-cover rounded-lg"
                      />
                    </div>
                    <h2 className="text-xl md:text-2xl font-normal mb-3 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
                      The Green Hydrogen Breakthrough: How offshore plants are redefining Europe's energy grid
                    </h2>
                    <div className="border-l-4 border-gray-300 pl-4 mb-3">
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        GreenEnergy Corp has registered unprecedented growth in offshore green hydrogen production, 
                        with a 47% increase in visibility as European governments accelerate their renewable energy 
                        mandates. This breakthrough positions the company as a critical player in the continent's 
                        energy transition, though market volatility remains a concern for long-term investors.
                      </p>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed mt-3">
                        The company's offshore hydrogen facilities have demonstrated a production capacity increase 
                        of 200% year-over-year, driven by substantial investments in electrolyzer technology and 
                        strategic partnerships with major European utilities. Industry analysts project that this 
                        expansion will significantly impact the region's decarbonization goals, potentially reducing 
                        carbon emissions by up to 15 million tons annually by 2028.
                      </p>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed mt-3">
                        Despite the optimistic outlook, market experts caution that regulatory uncertainties and 
                        infrastructure challenges could temper growth expectations. The company's stock has experienced 
                        notable fluctuations, reflecting broader market sentiment around the renewable energy sector's 
                        near-term profitability and the timeline for widespread hydrogen adoption across industrial applications.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-500">
                      <span className="font-semibold">GreenEnergy Corp</span>
                      <span>📈 +5.4%</span>
                      <span>·</span>
                      <span>18 fuentes detectadas</span>
                      <span className="text-gray-400">· Financial Times, Bloomberg Green, Reuters</span>
                    </div>
                  </div>

                  {/* Sidebar - Visibility Movers y Sentimiento */}
                  <div className="space-y-6">
                    {/* Visibility Movers - Componente mejorado con interacción */}
                    <VisibilityChart />

                    {/* Sentimiento del Mercado */}
                    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                      <h3 className="font-semibold text-sm mb-4">Sentimiento del Mercado</h3>
                      
                      <div className="space-y-4">
                        {/* GreenEnergy Corp */}
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[11px] font-medium text-gray-800">GreenEnergy Corp</span>
                            <span className="text-[11px] font-bold text-green-600">+58.2</span>
                          </div>
                          <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="absolute left-1/2 w-px h-full bg-gray-300"></div>
                            <div 
                              className="absolute h-full bg-green-500 rounded-full transition-all"
                              style={{ left: '50%', width: '29.1%' }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-[9px] text-gray-400 mt-1">
                            <span>-100</span>
                            <span>0</span>
                            <span>+100</span>
                          </div>
                        </div>

                        {/* HydroFuel Ltd */}
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[11px] font-medium text-gray-800">HydroFuel Ltd</span>
                            <span className="text-[11px] font-bold text-green-600">+41.8</span>
                          </div>
                          <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="absolute left-1/2 w-px h-full bg-gray-300"></div>
                            <div 
                              className="absolute h-full bg-green-500 rounded-full transition-all"
                              style={{ left: '50%', width: '20.9%' }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-[9px] text-gray-400 mt-1">
                            <span>-100</span>
                            <span>0</span>
                            <span>+100</span>
                          </div>
                        </div>

                        {/* WindPower SA */}
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[11px] font-medium text-gray-800">WindPower SA</span>
                            <span className="text-[11px] font-bold text-green-600">+63.8</span>
                          </div>
                          <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="absolute left-1/2 w-px h-full bg-gray-300"></div>
                            <div 
                              className="absolute h-full bg-green-500 rounded-full transition-all"
                              style={{ left: '50%', width: '31.9%' }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-[9px] text-gray-400 mt-1">
                            <span>-100</span>
                            <span>0</span>
                            <span>+100</span>
                          </div>
                        </div>

                        {/* EcoGrid Systems */}
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[11px] font-medium text-gray-800">EcoGrid Systems</span>
                            <span className="text-[11px] font-bold text-green-600">+28.5</span>
                          </div>
                          <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="absolute left-1/2 w-px h-full bg-gray-300"></div>
                            <div 
                              className="absolute h-full bg-green-500 rounded-full transition-all"
                              style={{ left: '50%', width: '14.25%' }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-[9px] text-gray-400 mt-1">
                            <span>-100</span>
                            <span>0</span>
                            <span>+100</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cards de noticias secundarias - Componente NewsGrid con fuente Switzer */}
                <NewsGrid />
              </div>
            </div>
          </>
        )}

        {/* Vista Data */}
        {activeTab === 'data' && <DataSection />}
      </div>
    </div>
  );
}
