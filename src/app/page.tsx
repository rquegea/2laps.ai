'use client';

import { Header } from '@/components/Header';
import { SocialProof } from '@/components/SocialProof';
import { InteractiveWindow } from '@/components/InteractiveWindow';

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-background">
        {/* Contenido principal con padding top para el header fijo */}
        <div className="pt-16">
          {/* Sección de texto debajo del header */}
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 border-2 border-red-500">
            <div 
              className="text-left text-foreground leading-relaxed border-2 border-blue-500 text-2xl font-normal"
              style={{ fontFamily: "'Switzer', sans-serif" }}
            >
              <p className="border border-green-500">Understand the market,</p>
              <p className="border border-green-500">Before anyone else.</p>
            </div>
            
            <button className="mt-6 px-6 py-3 text-sm bg-foreground text-background rounded-full hover:scale-105 transition-transform">
              Contact Us
            </button>

            <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-4xl" style={{ fontFamily: "'Switzer', sans-serif" }}>
              2laps monitors massive quantities of global data points through an orchestration of the world's best AI models, turning market noise into the precise strategic reasoning you need to decide what to do next
            </p>
          </div>
          
          {/* Segundo contenedor - imagen destacada con ventana flotante */}
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
            <InteractiveWindow
              bgImage="/resources/oceano-abstracto-3059.webp"
              url="platform.2laps.ai"
            >
              <div className="space-y-1 md:space-y-2 text-gray-800">
                <div className="flex flex-wrap break-all">
                  <span className="text-purple-600">const</span>
                  <span className="ml-1 md:ml-2">intelligence</span>
                  <span className="ml-1 md:ml-2">=</span>
                  <span className="ml-1 md:ml-2 text-green-600">"2laps.ai"</span>
                  <span>;</span>
                </div>
                <div className="flex flex-wrap break-all">
                  <span className="text-purple-600">const</span>
                  <span className="ml-1 md:ml-2">data</span>
                  <span className="ml-1 md:ml-2">=</span>
                  <span className="ml-1 md:ml-2 text-blue-600">await</span>
                  <span className="ml-1 md:ml-2">monitor</span>
                  <span className="text-yellow-600">(</span>
                  <span className="text-green-600">"global_markets"</span>
                  <span className="text-yellow-600">)</span>
                  <span>;</span>
                </div>
                <div className="h-px bg-gray-200 my-2 md:my-3"></div>
                <div className="flex">
                  <span className="text-gray-500">// Análisis tiempo real</span>
                </div>
                <div className="flex flex-wrap break-all">
                  <span className="text-purple-600">function</span>
                  <span className="ml-1 md:ml-2 text-blue-600">analyzeMarket</span>
                  <span className="text-yellow-600">(</span>
                  <span>data</span>
                  <span className="text-yellow-600">)</span>
                  <span className="ml-1 md:ml-2 text-yellow-600">{"{"}</span>
                </div>
                <div className="flex flex-wrap break-all ml-2 md:ml-4">
                  <span className="text-purple-600">return</span>
                  <span className="ml-1 md:ml-2">AI</span>
                  <span className="text-yellow-600">.</span>
                  <span>orchestrate</span>
                  <span className="text-yellow-600">(</span>
                  <span>data</span>
                  <span className="text-yellow-600">)</span>
                  <span>;</span>
                </div>
                <div className="flex">
                  <span className="text-yellow-600">{"}"}</span>
                </div>
                <div className="h-px bg-gray-200 my-2 md:my-3"></div>
                <div className="flex items-center gap-1 md:gap-2 flex-wrap">
                  <span className="text-green-600 text-xs md:text-base flex-shrink-0">✓</span>
                  <span className="text-gray-600 text-[8px] md:text-sm">Procesando 1M+ datos</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2 flex-wrap">
                  <span className="text-green-600 text-xs md:text-base flex-shrink-0">✓</span>
                  <span className="text-gray-600 text-[8px] md:text-sm">Orquestando modelos IA</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2 flex-wrap">
                  <span className="text-blue-500 animate-pulse text-xs md:text-base flex-shrink-0">●</span>
                  <span className="text-gray-600 text-[8px] md:text-sm">Generando insights...</span>
                </div>
              </div>
            </InteractiveWindow>
          </div>

          {/* Sección Social Proof */}
          <SocialProof />

          {/* Nueva Sección - Strategic Reasoning Split Layout */}
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
            {/* Contenedor gris más oscuro */}
            <div className="bg-gray-100 rounded-3xl p-12 md:p-16 lg:p-24">
              <div className="flex flex-col md:flex-row gap-16 md:gap-20 items-center">
                {/* Columna Izquierda - Texto */}
                <div className="w-full md:w-1/2 space-y-8">
                  <h2 
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
                    style={{ fontFamily: "'Switzer', sans-serif" }}
                  >
                    Strategic Reasoning on Autopilot
                  </h2>
                  
                  <p 
                    className="text-lg md:text-xl text-gray-600 leading-relaxed"
                    style={{ fontFamily: "'Switzer', sans-serif" }}
                  >
                    Our engine processes millions of data points to solve the <span className="font-semibold text-foreground">Now What?</span> of your business strategy
                  </p>

                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all group"
                  >
                    Learn more
                    <svg 
                      className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Columna Derecha - Ventana Interactiva */}
                <div className="w-full md:w-1/2">
                  <InteractiveWindow
                    url="analytics.2laps.ai"
                    containerClassName="w-full relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50"
                  >
                    <div className="space-y-3 md:space-y-4 text-gray-800">
                      {/* Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-gray-300">
                        <span className="text-sm md:text-base font-semibold text-gray-700">Real-Time Analysis Dashboard</span>
                        <span className="text-xs md:text-sm text-green-600 flex items-center gap-1">
                          <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                          Live
                        </span>
                      </div>

                      {/* Métricas de análisis */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs md:text-sm">
                          <span className="text-gray-600">Data Sources Monitored</span>
                          <span className="font-mono font-bold text-blue-600">1,247,392</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full w-[87%] bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs md:text-sm">
                          <span className="text-gray-600">AI Models Orchestrated</span>
                          <span className="font-mono font-bold text-purple-600">12 / 15</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full w-[80%] bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs md:text-sm">
                          <span className="text-gray-600">Strategic Insights Generated</span>
                          <span className="font-mono font-bold text-green-600">3,482</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full w-[93%] bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                        </div>
                      </div>

                      {/* Separador */}
                      <div className="h-px bg-gray-300 my-3 md:my-4"></div>

                      {/* Insights recientes */}
                      <div className="space-y-2">
                        <span className="text-xs md:text-sm font-semibold text-gray-700">Latest Insights</span>
                        <div className="space-y-1.5">
                          <div className="flex items-start gap-2 text-xs md:text-sm">
                            <span className="text-green-600 flex-shrink-0 mt-0.5">✓</span>
                            <span className="text-gray-700">Market trend shift detected in EMEA region</span>
                          </div>
                          <div className="flex items-start gap-2 text-xs md:text-sm">
                            <span className="text-green-600 flex-shrink-0 mt-0.5">✓</span>
                            <span className="text-gray-700">Competitor pricing strategy updated</span>
                          </div>
                          <div className="flex items-start gap-2 text-xs md:text-sm">
                            <span className="text-blue-500 animate-pulse flex-shrink-0 mt-0.5">●</span>
                            <span className="text-gray-700">Processing sentiment analysis...</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </InteractiveWindow>
                </div>
              </div>
            </div>
          </div>

          {/* Aquí irá el resto del contenido */}
        </div>
      </main>
    </>
  );
}
