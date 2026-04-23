
import { memo, useState, useEffect, useRef } from 'react';
import { InteractiveWindow } from './InteractiveWindow';

export interface StrategicSectionProps {
  reverse?: boolean;
  bgImage?: string;
  children?: React.ReactNode;
}

export const StrategicSection = memo(function StrategicSection({ reverse = false, bgImage, children }: StrategicSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            // Esperar un momento antes de empezar a "pensar"
            setTimeout(() => {
              setIsThinking(true);
              // Después de 2 segundos de "thinking", mostrar el contenido
              setTimeout(() => {
                setIsThinking(false);
                setShowContent(true);
              }, 2000);
            }, 500);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

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
    <div ref={sectionRef} className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
      <div className="bg-[#F1F1F1] border border-gray-200 rounded-xl p-6 md:p-8 lg:p-10 lg:min-h-[80vh] flex items-center box-border">
        <div className={containerClass}>
          {/* Columna de Texto */}
          <div className={textClass}>
            <h2
              className={headingClass}
              style={{ fontFamily: "'Switzer', sans-serif" }}
            >
              Market Intelligence Engine
            </h2>

            <p
              className="text-sm md:text-base text-gray-600 leading-relaxed"
              style={{ fontFamily: "'Switzer', sans-serif" }}
            >
              We connect the dots to make your market intelligence easy to read, all unified in one platform.
            </p>

            <p
              className="text-sm md:text-base text-gray-700 font-medium"
              style={{ fontFamily: "'Switzer', sans-serif" }}
            >
              From Data to Action
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
              bgImage={bgImage}
              containerClassName="w-full h-full min-h-[600px] md:min-h-[700px] relative overflow-hidden rounded-2xl py-6"
            >
              <div className="flex h-full">
                {/* Sidebar izquierdo estilo Cursor */}
                <div className="w-[280px] bg-[#F8F8F8] border-r border-gray-200 flex flex-col text-sm">
                  {/* Sección IN PROGRESS */}
                  <div className="px-4 py-3">
                    <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      IN PROGRESS 2
                    </div>

                    {/* Tarea 1 */}
                    <div className="mb-3 flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-gray-400 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="text-gray-800 font-medium text-[13px] leading-snug">
                          Market Sentiment Analysis
                        </div>
                        <div className="text-gray-500 text-[11px] mt-0.5">
                          Processing...
                        </div>
                      </div>
                    </div>

                    {/* Tarea 2 */}
                    <div className="mb-3 flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-gray-400 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="text-gray-800 font-medium text-[13px] leading-snug">
                          Competitor Strategy Mapping
                        </div>
                        <div className="text-gray-500 text-[11px] mt-0.5">
                          Analyzing...
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sección AI MODELS */}
                  <div className="px-4 py-3 border-t border-gray-200">
                    <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      AI MODELS 6
                    </div>

                    {/* ChatGPT */}
                    <div className="mb-3 flex items-start gap-2 cursor-pointer hover:bg-gray-100 -mx-2 px-2 py-1.5 rounded">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-4 h-4 rounded-full border-2 border-green-600 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-gray-800 font-medium text-[13px] leading-snug">
                          ChatGPT
                        </div>
                        <div className="text-gray-600 text-[11px] mt-0.5 flex items-center gap-2">
                          <div className="relative w-12 h-5 flex items-center">
                            <div className="absolute w-5 h-5 rounded-full border border-gray-700 bg-gray-300 flex items-center justify-center left-0 z-20">
                              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                              </svg>
                            </div>
                            <div className="absolute w-5 h-5 rounded-full border border-gray-700 bg-gray-300 flex items-center justify-center left-3 z-10">
                              <svg className="w-3 h-3 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">+2 sources</span>
                        </div>
                      </div>
                    </div>

                    {/* Perplexity */}
                    <div className="mb-3 flex items-start gap-2 cursor-pointer hover:bg-gray-100 -mx-2 px-2 py-1.5 rounded">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-4 h-4 rounded-full border-2 border-green-600 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-gray-800 font-medium text-[13px] leading-snug">
                          Perplexity
                        </div>
                        <div className="text-gray-600 text-[11px] mt-0.5 flex items-center gap-2">
                          <div className="relative w-10 h-5 flex items-center">
                            <div className="absolute w-5 h-5 rounded-full border border-gray-700 bg-gray-300 flex items-center justify-center left-0 z-20">
                              <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                              </svg>
                            </div>
                            <div className="absolute w-5 h-5 rounded-full border border-gray-700 bg-gray-300 flex items-center justify-center left-3 z-10">
                              <svg className="w-3 h-3 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">+1 sources</span>
                        </div>
                      </div>
                    </div>

                    {/* Gemini */}
                    <div className="mb-3 flex items-start gap-2 cursor-pointer hover:bg-gray-100 -mx-2 px-2 py-1.5 rounded">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-4 h-4 rounded-full border-2 border-green-600 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-gray-800 font-medium text-[13px] leading-snug">
                          Gemini
                        </div>
                        <div className="text-gray-600 text-[11px] mt-0.5 flex items-center gap-2">
                          <div className="relative w-14 h-5 flex items-center">
                            <div className="absolute w-5 h-5 rounded-full border border-gray-700 bg-gray-300 flex items-center justify-center left-0 z-30">
                              <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            </div>
                            <div className="absolute w-5 h-5 rounded-full border border-gray-700 bg-gray-300 flex items-center justify-center left-3 z-20">
                              <svg className="w-3 h-3 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <div className="absolute w-5 h-5 rounded-full border border-gray-700 bg-gray-300 flex items-center justify-center left-6 z-10">
                              <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                              </svg>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">+3 sources</span>
                        </div>
                      </div>
                    </div>

                    {/* Claude */}
                    <div className="mb-3 flex items-start gap-2 cursor-pointer hover:bg-gray-100 -mx-2 px-2 py-1.5 rounded">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-4 h-4 rounded-full border-2 border-green-600 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-gray-800 font-medium text-[13px] leading-snug">
                          Claude
                        </div>
                        <div className="text-gray-600 text-[11px] mt-0.5 flex items-center gap-2">
                          <div className="relative w-12 h-5 flex items-center">
                            <div className="absolute w-5 h-5 rounded-full border border-gray-700 bg-gray-300 flex items-center justify-center left-0 z-20">
                              <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            </div>
                            <div className="absolute w-5 h-5 rounded-full border border-gray-700 bg-gray-300 flex items-center justify-center left-3 z-10">
                              <svg className="w-3 h-3 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">+2 sources</span>
                        </div>
                      </div>
                    </div>

                    {/* Grok */}
                    <div className="mb-3 flex items-start gap-2 cursor-pointer hover:bg-gray-100 -mx-2 px-2 py-1.5 rounded">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-4 h-4 rounded-full border-2 border-green-600 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-gray-800 font-medium text-[13px] leading-snug">
                          Grok
                        </div>
                        <div className="text-gray-600 text-[11px] mt-0.5 flex items-center gap-2">
                          <div className="relative w-10 h-5 flex items-center">
                            <div className="absolute w-5 h-5 rounded-full border border-gray-700 bg-gray-300 flex items-center justify-center left-0 z-20">
                              <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                              </svg>
                            </div>
                            <div className="absolute w-5 h-5 rounded-full border border-gray-700 bg-gray-300 flex items-center justify-center left-3 z-10">
                              <svg className="w-3 h-3 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">+1 sources</span>
                        </div>
                      </div>
                    </div>

                    {/* DeepSeek */}
                    <div className="mb-3 flex items-start gap-2 cursor-pointer hover:bg-gray-100 -mx-2 px-2 py-1.5 rounded">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-4 h-4 rounded-full border-2 border-green-600 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-gray-800 font-medium text-[13px] leading-snug">
                          DeepSeek
                        </div>
                        <div className="text-gray-600 text-[11px] mt-0.5 flex items-center gap-2">
                          <div className="relative w-16 h-5 flex items-center">
                            <div className="absolute w-5 h-5 rounded-full border border-gray-700 bg-gray-300 flex items-center justify-center left-0 z-40">
                              <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            </div>
                            <div className="absolute w-5 h-5 rounded-full border border-gray-700 bg-gray-300 flex items-center justify-center left-3 z-30">
                              <svg className="w-3 h-3 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <div className="absolute w-5 h-5 rounded-full border border-gray-700 bg-gray-300 flex items-center justify-center left-6 z-20">
                              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            </div>
                            <div className="absolute w-5 h-5 rounded-full border border-gray-700 bg-gray-300 flex items-center justify-center left-9 z-10">
                              <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">+4 sources</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sección READY FOR REVIEW */}
                  <div className="px-4 py-3 border-t border-gray-200">
                    <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      READY FOR REVIEW 4
                    </div>

                    {/* Tarea completa 1 */}
                    <div className="mb-3 flex items-start gap-2 cursor-pointer hover:bg-gray-100 -mx-2 px-2 py-1.5 rounded">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-4 h-4 rounded-full border-2 border-green-600 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-gray-800 font-medium text-[13px] leading-snug">
                          Brand Visibility Report
                        </div>
                        <div className="text-gray-600 text-[11px] mt-0.5 flex items-center gap-2">
                          <div className="relative w-14 h-5 flex items-center">
                            <div className="absolute w-5 h-5 rounded-full border border-gray-700 bg-gray-300 flex items-center justify-center left-0 z-30">
                              <svg className="w-3 h-3 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <div className="absolute w-5 h-5 rounded-full border border-gray-700 bg-gray-300 flex items-center justify-center left-3 z-20">
                              <svg className="w-3 h-3 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <div className="absolute w-5 h-5 rounded-full border border-gray-700 bg-gray-300 flex items-center justify-center left-6 z-10">
                              <svg className="w-3 h-3 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">+3 sources</span>
                        </div>
                      </div>
                    </div>

                    {/* Tarea completa 2 */}
                    <div className="mb-3 flex items-start gap-2 cursor-pointer hover:bg-gray-100 -mx-2 px-2 py-1.5 rounded">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-4 h-4 rounded-full border-2 border-green-600 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-gray-800 font-medium text-[13px] leading-snug">
                          SOV Analysis Dashboard
                        </div>
                        <div className="text-gray-600 text-[11px] mt-0.5 flex items-center gap-2">
                          <div className="relative w-10 h-5 flex items-center">
                            <div className="absolute w-5 h-5 rounded-full border border-gray-700 bg-gray-300 flex items-center justify-center left-0 z-20">
                              <svg className="w-3 h-3 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <div className="absolute w-5 h-5 rounded-full border border-gray-700 bg-gray-300 flex items-center justify-center left-3 z-10">
                              <svg className="w-3 h-3 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">+2 sources</span>
                        </div>
                      </div>
                    </div>

                    {/* Tarea completa 3 */}
                    <div className="mb-3 flex items-start gap-2 cursor-pointer hover:bg-gray-100 -mx-2 px-2 py-1.5 rounded">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-4 h-4 rounded-full border-2 border-green-600 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-gray-800 font-medium text-[13px] leading-snug">
                          Media Sources Integration
                        </div>
                        <div className="text-gray-600 text-[11px] mt-0.5 flex items-center gap-2">
                          <div className="relative w-14 h-5 flex items-center">
                            <div className="absolute w-5 h-5 rounded-full border border-gray-700 bg-gray-300 flex items-center justify-center left-0 z-30">
                              <svg className="w-3 h-3 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <div className="absolute w-5 h-5 rounded-full border border-gray-700 bg-gray-300 flex items-center justify-center left-3 z-20">
                              <svg className="w-3 h-3 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <div className="absolute w-5 h-5 rounded-full border border-gray-700 bg-gray-300 flex items-center justify-center left-6 z-10">
                              <svg className="w-3 h-3 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">+3 sources</span>
                        </div>
                      </div>
                    </div>

                    {/* Tarea completa 4 */}
                    <div className="mb-3 flex items-start gap-2 cursor-pointer hover:bg-gray-100 -mx-2 px-2 py-1.5 rounded">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-4 h-4 rounded-full border-2 border-green-600 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-gray-800 font-medium text-[13px] leading-snug">
                          Estudio de Ventas 2025
                        </div>
                        <div className="text-gray-600 text-[11px] mt-0.5 flex items-center gap-2">
                          <div className="relative w-14 h-5 flex items-center">
                            <div className="absolute w-5 h-5 rounded-full border border-gray-700 bg-gray-300 flex items-center justify-center left-0 z-30">
                              <svg className="w-3 h-3 text-pink-700" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                              </svg>
                            </div>
                            <div className="absolute w-5 h-5 rounded-full border border-gray-700 bg-gray-300 flex items-center justify-center left-3 z-20">
                              <svg className="w-3 h-3 text-red-700" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                              </svg>
                            </div>
                            <div className="absolute w-5 h-5 rounded-full border border-gray-700 bg-gray-300 flex items-center justify-center left-6 z-10">
                              <svg className="w-3 h-3 text-purple-700" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.8-.01 1.73.13 2.47.44 1.68.38 2.92 1.43 3.79 3.1.7 1.34.98 2.95.98 4.57v7.83c0 3.81-.5 6.88-2.47 8.98-1.82 1.94-4.94 2.96-8.31 2.96-3.37 0-6.49-1.02-8.31-2.96C.5 19.28 0 16.21 0 12.4V8.08c0-1.62.28-3.23.98-4.57C2.82 1.78 4.06.73 5.74.35 6.48.04 7.41-.01 8.21 0c1.3.01 2.6.01 3.9.02zm-.51 1.99c-1.29.01-2.59.01-3.88.01-.71 0-1.37-.01-1.86.23-.66.31-1.24.88-1.68 1.7-.37.7-.59 1.55-.59 2.47v7.82c0 3.65.48 6.34 2.05 7.78 1.46 1.35 4.05 2.05 7.03 2.05 2.98 0 5.57-.7 7.03-2.05 1.57-1.44 2.05-4.13 2.05-7.78V6.41c0-.92-.22-1.77-.59-2.47-.44-.82-1.02-1.39-1.68-1.7-.49-.24-1.15-.23-1.86-.23-1.29 0-2.59 0-3.88-.01zm3.89 6.74c.38 0 .73.12 1.03.35.3.23.48.55.48.91v4.26c0 .36-.18.68-.48.91-.3.23-.65.35-1.03.35-.38 0-.73-.12-1.03-.35-.3-.23-.48-.55-.48-.91V9.1c0-.36.18-.68.48-.91.3-.23.65-.35 1.03-.35z" />
                              </svg>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">+3 sources</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 bg-white flex flex-col">
                  {children ? (
                    children
                  ) : (
                    <>
                      <div className="flex-1 overflow-y-auto px-8 py-6">
                        {/* Pregunta del usuario */}
                        <div className="mb-6 pb-4 border-b border-gray-200">
                          <p className="text-gray-900 text-[15px] font-medium">
                            Why has EcoGrid's visibility increased by 18% this week?
                          </p>
                        </div>

                        {/* Estado de "Thinking" */}
                        {isThinking && (
                          <div className="flex items-center gap-2 mb-6">
                            <div className="flex gap-1">
                              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                            </div>
                            <span className="text-gray-600 text-sm animate-pulse">Thinking...</span>
                          </div>
                        )}

                        {/* Contenido que aparece después del thinking */}
                        {showContent && (
                          <>
                            {/* Título del análisis */}
                            <h1 className="text-xl font-bold text-gray-900 mb-4 animate-fadeIn">
                              Impact Analysis: Energy Sector
                            </h1>

                            {/* Badge de fuentes */}
                            <div className="flex items-center gap-2 mb-6 animate-fadeIn" style={{ animationDelay: '200ms' }}>
                              <div className="relative w-16 h-6 flex items-center">
                                <div className="absolute w-6 h-6 rounded-full border border-gray-400 bg-white flex items-center justify-center left-0 z-30">
                                  <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                  </svg>
                                </div>
                                <div className="absolute w-6 h-6 rounded-full border border-gray-400 bg-white flex items-center justify-center left-4 z-20">
                                  <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                  </svg>
                                </div>
                                <div className="absolute w-6 h-6 rounded-full border border-gray-400 bg-white flex items-center justify-center left-8 z-10">
                                  <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                  </svg>
                                </div>
                              </div>
                              <span className="text-sm text-gray-600">5 sources</span>
                            </div>

                            {/* Respuesta de la IA */}
                            <div className="mb-6 animate-fadeIn" style={{ animationDelay: '400ms' }}>
                              <div className="space-y-4 text-[15px] text-gray-800 leading-relaxed">
                                <p>
                                  The 18% visibility spike for EcoGrid is primarily driven by two interconnected macroeconomic factors affecting the energy sector:
                                </p>

                                <div className="space-y-3 pl-4 border-l-2 border-gray-200">
                                  <div>
                                    <span className="font-semibold text-gray-900">1. New export tariffs on construction materials</span>
                                    <sup className="text-gray-500 ml-1">[1,2]</sup>
                                    <p className="mt-1 text-gray-700">
                                      Recent policy changes have imposed significant tariffs on key construction materials, triggering extensive media coverage and analyst commentary about infrastructure development costs.
                                    </p>
                                  </div>

                                  <div>
                                    <span className="font-semibold text-gray-900">2. Anticipated ECB interest rate adjustment</span>
                                    <sup className="text-gray-500 ml-1">[3,4,5]</sup>
                                    <p className="mt-1 text-gray-700">
                                      Market speculation around the European Central Bank's upcoming rate decision has amplified discussions about energy sector valuations and infrastructure financing.
                                    </p>
                                  </div>
                                </div>

                                <p className="text-gray-700">
                                  These factors have created heightened media attention, with coverage spanning business news, sector analysis, and macroeconomic policy discussions.
                                </p>
                              </div>

                              {/* Referencias */}
                              <div className="mt-6 pt-4 border-t border-gray-200">
                                <div className="text-xs text-gray-500 space-y-1">
                                  <p><span className="font-semibold text-gray-700">[1]</span> Bloomberg Intelligence — Construction Tariffs Impact Analysis</p>
                                  <p><span className="font-semibold text-gray-700">[2]</span> Expansión — Aranceles afectan sector inmobiliario</p>
                                  <p><span className="font-semibold text-gray-700">[3]</span> Reuters — ECB Rate Decision Implications</p>
                                  <p><span className="font-semibold text-gray-700">[4]</span> Financial Times — Energy Sector Outlook</p>
                                  <p><span className="font-semibold text-gray-700">[5]</span> The Wall Street Journal — European Markets React</p>
                                </div>
                              </div>
                            </div>

                            {/* Estrategia Recomendada */}
                            <div className="border border-gray-300 rounded-lg p-5 bg-gray-50 animate-fadeIn" style={{ animationDelay: '600ms' }}>
                              <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                                </div>
                                <div>
                                  <h3 className="text-base font-semibold text-gray-900 mb-2">Recommended Strategy</h3>
                                  <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Increase media coverage in DACH markets to mitigate sectoral noise and strengthen positioning ahead of regulatory shifts.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Input de chat estilo Cursor - fijo en la parte inferior */}
                      <div className="border-t border-gray-200 bg-white px-4 pt-4 pb-6">
                        <div className="bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center gap-3 px-4 py-3">
                            <input
                              type="text"
                              placeholder="Ask about market trends, competitors, or strategy..."
                              className="flex-1 text-[15px] text-gray-700 placeholder-gray-400 bg-transparent outline-none"
                            />

                            {/* Botones de la derecha */}
                            <div className="flex items-center gap-2">
                              {/* Selector de modelo */}
                              <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <span className="font-medium">Deep Dive</span>
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>

                              {/* Botón de enviar */}
                              <button className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </InteractiveWindow>
          </div>
        </div>
      </div>
    </div>
  );
});
