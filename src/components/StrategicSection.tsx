import { memo } from 'react';
import { InteractiveWindow } from './InteractiveWindow';

interface StrategicSectionProps {
  reverse?: boolean;
}

export const StrategicSection = memo(function StrategicSection({ reverse = false }: StrategicSectionProps) {
  const containerClass = reverse 
    ? 'flex flex-col md:flex-row-reverse gap-6 lg:gap-4 w-full items-stretch flex-1'
    : 'flex flex-col md:flex-row gap-12 lg:gap-24 w-full items-stretch flex-1';
    
  const textClass = reverse
    ? 'w-full md:w-[25%] lg:w-[20%] space-y-2 flex flex-col justify-center text-left'
    : 'w-full md:w-[25%] lg:w-[20%] space-y-2 flex flex-col justify-center';
    
  const headingClass = reverse
    ? 'text-base md:text-lg lg:text-xl font-bold text-foreground leading-tight'
    : 'text-base md:text-lg lg:text-xl font-bold text-foreground leading-none whitespace-nowrap';
    
  const linkClass = reverse
    ? 'inline-flex items-center gap-2 text-foreground font-medium text-base hover:gap-3 transition-all group self-start'
    : 'inline-flex items-center gap-2 text-foreground font-medium text-base hover:gap-3 transition-all group';

  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
      <div className="bg-red-100 rounded-xl p-6 md:p-8 lg:p-10 lg:min-h-[80vh] flex items-center box-border">
        <div className={containerClass}>
          {/* Columna de Texto */}
          <div className={textClass}>
            <h2
              className={headingClass}
              style={{ fontFamily: "'Switzer', sans-serif" }}
            >
              Strategic Reasoning on Autopilot
            </h2>

            <p
              className="text-sm md:text-base text-gray-600 leading-relaxed"
              style={{ fontFamily: "'Switzer', sans-serif" }}
            >
              Our engine processes millions of data points to solve the <span className="font-semibold text-foreground">Now What?</span> of your business strategy
            </p>

            <a
              href="#"
              className={linkClass}
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

          {/* Columna de Ventana */}
          <div className="w-full md:w-[75%] lg:w-[80%] flex flex-col">
            <InteractiveWindow
              url="analytics.2laps.ai"
              containerClassName="w-full h-full min-h-[600px] md:min-h-[700px] relative overflow-hidden rounded-2xl bg-white py-6"
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
  );
});
