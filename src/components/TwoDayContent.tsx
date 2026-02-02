'use client';

export function TwoDayContent() {
  return (
    <div className="bg-white h-full overflow-y-auto" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      {/* Header con scroll de instituciones */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="flex items-center gap-3 px-4 py-2.5 overflow-x-auto whitespace-nowrap text-[11px]">
          <span className="text-green-600">+47%</span>
          <span className="font-medium">Universidad 45.0</span>
          <span className="text-red-600">-41%</span>
          <span className="font-medium ml-1">Universidad 58.0</span>
          <span className="text-red-600">-69%</span>
          <span className="font-medium ml-1">University 69.0</span>
          <span className="text-red-600">-59%</span>
          <span className="font-medium ml-1">CEU San Pablo 68.0</span>
          <span className="text-red-600">-66%</span>
          <span className="font-medium ml-1">Universidad 52.0</span>
          <span className="text-red-600">-62%</span>
        </div>
      </div>

      {/* Main Content */}
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
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=400&fit=crop"
                alt="Universidad"
                className="w-full h-48 md:h-64 object-cover rounded-lg"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-normal mb-3 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
              IE University lanza cuatro nuevos programas mientras su visibilidad se estanca
            </h2>
            <div className="border-l-4 border-gray-300 pl-4 mb-3">
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                IE University ha registrado un pico de actividad institucional con el lanzamiento de cuatro nuevos 
                grados y másteres, pero este movimiento expansivo no se ha traducido en un aumento proporcional de 
                su visibilidad en el mercado. Aunque su presencia es imitada, esta disonancia entre acción y 
                percepción marca una curiosidad estadística que los ejecutivos deben observar.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-500">
              <span className="font-semibold">ie</span>
              <span>🔥 +5</span>
              <span>·</span>
              <span>15 fuentes detectadas</span>
            </div>
          </div>

          {/* Sidebar - Visibility Movers y Sentimiento */}
          <div className="space-y-6">
            {/* Visibility Movers */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-xs md:text-sm">Visibilidad Movers</h3>
                <span className="text-[10px] text-gray-500">📊 Real</span>
              </div>
              
              <div className="space-y-3">
                {/* Universidad 1 */}
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[10px] md:text-xs font-medium">Universidad...</span>
                    <span className="text-[10px] md:text-xs">15.5</span>
                  </div>
                  <div className="h-10 md:h-12">
                    <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                      <polyline
                        points="0,35 20,30 40,25 60,28 80,20 100,15"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <span className="text-[10px] md:text-xs text-green-600 font-medium">+8.1%</span>
                </div>

                {/* Universidad 2 */}
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[10px] md:text-xs font-medium">Univers...</span>
                    <span className="text-[10px] md:text-xs">19.7</span>
                  </div>
                  <div className="h-10 md:h-12">
                    <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                      <polyline
                        points="0,15 20,18 40,20 60,25 80,28 100,35"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <span className="text-[10px] md:text-xs text-red-600 font-medium">-18.7%</span>
                </div>

                {/* CEU San Pablo */}
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[10px] md:text-xs font-medium">CEU San...</span>
                    <span className="text-[10px] md:text-xs">11.0</span>
                  </div>
                  <div className="h-10 md:h-12">
                    <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                      <polyline
                        points="0,30 20,28 40,25 60,20 80,18 100,15"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <span className="text-[10px] md:text-xs text-green-600 font-medium">+7.3%</span>
                </div>

                {/* IE University */}
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[10px] md:text-xs font-medium">IE Unive...</span>
                    <span className="text-[10px] md:text-xs">8.1</span>
                  </div>
                  <div className="h-10 md:h-12">
                    <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                      <polyline
                        points="0,20 20,22 40,25 60,23 80,24 100,25"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <span className="text-[10px] md:text-xs text-green-600 font-medium">+35.2%</span>
                </div>
              </div>
            </div>

            {/* Sentimiento del Mercado */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-xs md:text-sm mb-3">Sentimiento del Mercado</h3>
              
              <div className="space-y-3">
                {/* Universidad Pontificia de Comillas */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[10px] md:text-xs truncate pr-2">Universidad Pontificia de Comil...</span>
                    <span className="text-[10px] md:text-xs text-green-600 font-semibold">+58.2</span>
                  </div>
                  <div className="relative h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="absolute left-1/2 w-px h-full bg-gray-400"></div>
                    <div 
                      className="absolute h-full bg-green-500 rounded-full"
                      style={{ left: '50%', width: '29%' }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-[9px] text-gray-400 mt-0.5">
                    <span>-100</span>
                    <span>0</span>
                    <span>+100</span>
                  </div>
                </div>

                {/* CEU San Pablo */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[10px] md:text-xs">CEU San Pablo</span>
                    <span className="text-[10px] md:text-xs text-green-600 font-semibold">+41.8</span>
                  </div>
                  <div className="relative h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="absolute left-1/2 w-px h-full bg-gray-400"></div>
                    <div 
                      className="absolute h-full bg-green-500 rounded-full"
                      style={{ left: '50%', width: '21%' }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-[9px] text-gray-400 mt-0.5">
                    <span>-100</span>
                    <span>0</span>
                    <span>+100</span>
                  </div>
                </div>

                {/* IE University */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[10px] md:text-xs">IE University</span>
                    <span className="text-[10px] md:text-xs text-green-600 font-semibold">+61.8</span>
                  </div>
                  <div className="relative h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="absolute left-1/2 w-px h-full bg-gray-400"></div>
                    <div 
                      className="absolute h-full bg-green-500 rounded-full"
                      style={{ left: '50%', width: '31%' }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-[9px] text-gray-400 mt-0.5">
                    <span>-100</span>
                    <span>0</span>
                    <span>+100</span>
                  </div>
                </div>

                {/* Universidad Europea */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[10px] md:text-xs">Universidad Europea</span>
                    <span className="text-[10px] md:text-xs text-green-600 font-semibold">+28.5</span>
                  </div>
                  <div className="relative h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="absolute left-1/2 w-px h-full bg-gray-400"></div>
                    <div 
                      className="absolute h-full bg-green-500 rounded-full"
                      style={{ left: '50%', width: '14%' }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-[9px] text-gray-400 mt-0.5">
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
              src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=200&fit=crop"
              alt="Universidad"
              className="w-full h-32 md:h-40 object-cover"
            />
            <div className="p-3 md:p-4">
              <h3 className="font-normal text-sm md:text-base mb-2 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
                Universidad Pontificia de Comillas apuesta por una expansión agresiva...
              </h3>
              <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-500">
                <span>🟢</span>
                <span>7 fuentes detectadas</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=200&fit=crop"
              alt="Universidad"
              className="w-full h-32 md:h-40 object-cover"
            />
            <div className="p-3 md:p-4">
              <h3 className="font-normal text-sm md:text-base mb-2 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
                CEU San Pablo, ¿Por qué crece un 45% en alumnos pero su posición de...
              </h3>
              <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-500">
                <span>🔴</span>
                <span>5 fuentes detectadas</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=200&fit=crop"
              alt="Universidad"
              className="w-full h-32 md:h-40 object-cover"
            />
            <div className="p-3 md:p-4">
              <h3 className="font-normal text-sm md:text-base mb-2 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
                La Universidad Europea se consolida mientras el sector privado...
              </h3>
              <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-500">
                <span>🟡</span>
                <span>8 fuentes detectadas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Noticia adicional */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="w-full md:w-64 flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=300&h=300&fit=crop"
                alt="Universidad"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-normal mb-3 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
                Universidad Antonio de Nebrija apuesta por becas internacionales en un mercado presencial estancado
              </h2>
              <div className="border-l-4 border-gray-300 pl-4">
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  La Universidad Antonio de Nebrija ha registrado un movimiento de mercado excepcional, avanzando 
                  42.6 puntos porcentuales de cuota mientras el sector de universidades presenciales retrocede un 
                  33%. Este comportamiento, que rompe con todos...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
