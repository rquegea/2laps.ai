'use client';

export function TwoDayContent() {
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
            {/* 2day - Activo */}
            <div className="flex flex-col items-center py-2 rounded-lg bg-white border border-gray-200 cursor-pointer">
              <svg className="w-3 h-3 text-gray-800 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-[8px] font-medium text-gray-800">2day</span>
            </div>

            {/* Workspaces */}
            <div className="flex flex-col items-center py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <svg className="w-3 h-3 text-gray-400 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span className="text-[8px] text-gray-500">Work</span>
            </div>

            {/* Data */}
            <div className="flex flex-col items-center py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <svg className="w-3 h-3 text-gray-400 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
              <span className="text-[8px] text-gray-500">Data</span>
            </div>
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
        {/* Header con ticker de instituciones - Alineado con el logo */}
        <div className="border-b border-gray-200 bg-white overflow-hidden flex items-center" style={{ height: '45px' }}>
          <div className="flex items-center gap-3 px-4 overflow-x-auto whitespace-nowrap text-[11px]">
            <span className="text-green-600 font-medium">+47%</span>
            <span className="font-medium text-gray-700">GreenEnergy Corp 45.0</span>
            <span className="text-red-600 font-medium">-41%</span>
            <span className="font-medium text-gray-700">SolarTech Inc 58.0</span>
            <span className="text-green-600 font-medium">+32%</span>
            <span className="font-medium text-gray-700">HydroFuel Ltd 69.0</span>
            <span className="text-green-600 font-medium">+28%</span>
            <span className="font-medium text-gray-700">WindPower SA 68.0</span>
            <span className="text-red-600 font-medium">-15%</span>
            <span className="font-medium text-gray-700">EcoGrid Systems 52.0</span>
            <span className="text-green-600 font-medium">+54%</span>
            <span className="font-medium text-gray-700">CarbonZero 45.0</span>
            <span className="text-red-600 font-medium">-22%</span>
            <span className="font-medium text-gray-700">CleanEnergy Inc 68.0</span>
            <span className="text-green-600 font-medium">+47%</span>
            <span className="font-medium text-gray-700">GreenEnergy Corp 45.0</span>
            <span className="text-red-600 font-medium">-41%</span>
            <span className="font-medium text-gray-700">SolarTech Inc 58.0</span>
          </div>
        </div>

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
                {/* Visibility Movers */}
                <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-sm">Visibilidad Movers</h3>
                    <div className="flex items-center gap-1 text-[10px] text-gray-500 bg-gray-50 px-2 py-1 rounded">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <span>Real</span>
                    </div>
                  </div>
                  
                  {/* Grid de 2x2 para los movers */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* GreenEnergy Corp */}
                    <div className="relative">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[11px] font-semibold text-gray-800">GreenEner...</span>
                        <span className="text-[11px] font-bold text-gray-800">15.5</span>
                      </div>
                      <div className="h-16 bg-green-50 rounded-lg p-2 relative overflow-hidden">
                        <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3"/>
                              <stop offset="100%" stopColor="#22c55e" stopOpacity="0.05"/>
                            </linearGradient>
                          </defs>
                          <path
                            d="M0,45 L15,40 L30,35 L45,38 L60,30 L75,25 L90,20 L100,15 L100,50 L0,50 Z"
                            fill="url(#greenGradient)"
                          />
                          <polyline
                            points="0,45 15,40 30,35 45,38 60,30 75,25 90,20 100,15"
                            fill="none"
                            stroke="#22c55e"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-[11px] font-semibold text-green-600">+6.1%</span>
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* SolarTech Inc */}
                    <div className="relative">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[11px] font-semibold text-gray-800">SolarTech...</span>
                        <span className="text-[11px] font-bold text-gray-800">19.7</span>
                      </div>
                      <div className="h-16 bg-red-50 rounded-lg p-2 relative overflow-hidden">
                        <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3"/>
                              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.05"/>
                            </linearGradient>
                          </defs>
                          <path
                            d="M0,15 L15,18 L30,20 L45,25 L60,28 L75,32 L90,35 L100,40 L100,50 L0,50 Z"
                            fill="url(#redGradient)"
                          />
                          <polyline
                            points="0,15 15,18 30,20 45,25 60,28 75,32 90,35 100,40"
                            fill="none"
                            stroke="#ef4444"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-[11px] font-semibold text-red-600">-18.7%</span>
                        <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* HydroFuel Ltd */}
                    <div className="relative">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[11px] font-semibold text-gray-800">HydroFuel...</span>
                        <span className="text-[11px] font-bold text-gray-800">11.0</span>
                      </div>
                      <div className="h-16 bg-green-50 rounded-lg p-2 relative overflow-hidden">
                        <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="greenGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3"/>
                              <stop offset="100%" stopColor="#22c55e" stopOpacity="0.05"/>
                            </linearGradient>
                          </defs>
                          <path
                            d="M0,40 L15,38 L30,35 L45,30 L60,28 L75,25 L90,22 L100,18 L100,50 L0,50 Z"
                            fill="url(#greenGradient2)"
                          />
                          <polyline
                            points="0,40 15,38 30,35 45,30 60,28 75,25 90,22 100,18"
                            fill="none"
                            stroke="#22c55e"
                            strokeWidth="2"
                          />
                        </svg>
                        {/* Tooltip flotante */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-[10px] font-semibold shadow-lg">
                          10.6
                        </div>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-[11px] font-semibold text-green-600">+7.9%</span>
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* WindPower SA */}
                    <div className="relative">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[11px] font-semibold text-gray-800">WindPower...</span>
                        <span className="text-[11px] font-bold text-gray-800">8.1</span>
                      </div>
                      <div className="h-16 bg-green-50 rounded-lg p-2 relative overflow-hidden">
                        <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="greenGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3"/>
                              <stop offset="100%" stopColor="#22c55e" stopOpacity="0.05"/>
                            </linearGradient>
                          </defs>
                          <path
                            d="M0,30 L15,32 L30,35 L45,33 L60,34 L75,32 L90,28 L100,25 L100,50 L0,50 Z"
                            fill="url(#greenGradient3)"
                          />
                          <polyline
                            points="0,30 15,32 30,35 45,33 60,34 75,32 90,28 100,25"
                            fill="none"
                            stroke="#22c55e"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-[11px] font-semibold text-green-600">+25.2%</span>
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

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

            {/* Cards de noticias secundarias */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {/* Card 1 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=200&fit=crop"
                  alt="Solar Panels"
                  className="w-full h-32 md:h-40 object-cover"
                />
                <div className="p-3 md:p-4">
                  <h3 className="font-normal text-sm md:text-base mb-2 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
                    Solar Panel efficiency hits 30%: A new standard for residential installations
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-500">
                    <span>🟢</span>
                    <span>12 fuentes</span>
                    <span className="text-gray-400">· BBC News, The Guardian</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=200&fit=crop"
                  alt="Carbon Markets"
                  className="w-full h-32 md:h-40 object-cover"
                />
                <div className="p-3 md:p-4">
                  <h3 className="font-normal text-sm md:text-base mb-2 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
                    Carbon Credit Markets: The new volatility index for heavy industry
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-500">
                    <span>🔴</span>
                    <span>9 fuentes</span>
                    <span className="text-gray-400">· Bloomberg, WSJ</span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=200&fit=crop"
                  alt="Circular Economy"
                  className="w-full h-32 md:h-40 object-cover"
                />
                <div className="p-3 md:p-4">
                  <h3 className="font-normal text-sm md:text-base mb-2 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
                    Circular Economy in Tech: Why big players are pivoting to recycled materials
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-500">
                    <span>🟡</span>
                    <span>15 fuentes</span>
                    <span className="text-gray-400">· TechCrunch, Wired</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
