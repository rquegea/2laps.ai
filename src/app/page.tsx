'use client';

import { Header } from '@/components/Header';
import { SocialProof } from '@/components/SocialProof';
import { useState, useRef, useEffect } from 'react';

export default function Home() {
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0, initialX: 0, initialY: 0 });
  const windowRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Resetear posición cuando cambie el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setPosition({ x: 0, y: 0 });
      // Resetear tamaño también
      if (windowRef.current) {
        setSize({ width: 0, height: 0 });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains('resize-handle')) {
      return; // No arrastrar si está en el handle de resize
    }
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleResizeMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsResizing(true);
    const rect = windowRef.current?.getBoundingClientRect();
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: rect?.width || 0,
      height: rect?.height || 0,
      initialX: position.x,
      initialY: position.y
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && windowRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const windowRect = windowRef.current.getBoundingClientRect();

      let newX = e.clientX - dragStart.x;
      let newY = e.clientY - dragStart.y;

      // La ventana puede moverse libremente hasta los bordes exactos del contenedor
      // La sombra se cortará visualmente con overflow-hidden en el contenedor
      const SHADOW_MARGIN = 0;

      // Calcular límites sin margen - la ventana puede tocar los bordes del contenedor
      const maxX = (containerRect.width / 2) - (windowRect.width / 2) - SHADOW_MARGIN;
      const minX = -(containerRect.width / 2) + (windowRect.width / 2) + SHADOW_MARGIN;
      const maxY = (containerRect.height / 2) - (windowRect.height / 2) - SHADOW_MARGIN;
      const minY = -(containerRect.height / 2) + (windowRect.height / 2) + SHADOW_MARGIN;

      newX = Math.max(minX, Math.min(maxX, newX));
      newY = Math.max(minY, Math.min(maxY, newY));

      setPosition({ x: newX, y: newY });
    }

    if (isResizing && windowRef.current && containerRef.current) {
      const deltaX = e.clientX - resizeStart.x;
      const deltaY = e.clientY - resizeStart.y;

      let newWidth = Math.max(300, resizeStart.width + deltaX);
      let newHeight = Math.max(200, resizeStart.height + deltaY);

      // Calcular la nueva posición compensada
      const deltaWidth = newWidth - resizeStart.width;
      const deltaHeight = newHeight - resizeStart.height;
      const newX = resizeStart.initialX + (deltaWidth / 2);
      const newY = resizeStart.initialY + (deltaHeight / 2);

      // Calcular las coordenadas futuras de los bordes de la ventana
      const containerRect = containerRef.current.getBoundingClientRect();
      const futureLeft = (containerRect.width / 2) + newX - (newWidth / 2);
      const futureRight = (containerRect.width / 2) + newX + (newWidth / 2);
      const futureTop = (containerRect.height / 2) + newY - (newHeight / 2);
      const futureBottom = (containerRect.height / 2) + newY + (newHeight / 2);

      // Aplicar límites estrictos sin margen de la sombra - la ventana puede llegar a todos los bordes
      const containerLeft = 0;
      const containerRight = containerRect.width;
      const containerTop = 0;
      const containerBottom = containerRect.height;

      // Si el borde derecho se sale del límite, limitar el ancho
      if (futureRight > containerRight) {
        const maxWidthFromRight = containerRight - futureLeft;
        newWidth = Math.max(300, maxWidthFromRight);
      }

      // Si el borde inferior se sale del límite, limitar el alto
      if (futureBottom > containerBottom) {
        const maxHeightFromBottom = containerBottom - futureTop;
        newHeight = Math.max(200, maxHeightFromBottom);
      }

      // Recalcular la posición compensada con el nuevo tamaño limitado
      const finalDeltaWidth = newWidth - resizeStart.width;
      const finalDeltaHeight = newHeight - resizeStart.height;
      const finalX = resizeStart.initialX + (finalDeltaWidth / 2);
      const finalY = resizeStart.initialY + (finalDeltaHeight / 2);

      setPosition({ x: finalX, y: finalY });
      setSize({
        width: newWidth,
        height: newHeight
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  useEffect(() => {
    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, dragStart, position, resizeStart]);

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
            <div
              ref={containerRef}
              className="w-full relative aspect-[9/16] md:aspect-video overflow-hidden rounded-2xl"
            >
              <img
                src="/resources/oceano-abstracto-3059.webp"
                alt="Abstract ocean visualization representing data flow and strategic intelligence"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Ventana flotante estilo macOS - arrastrable y redimensionable en desktop */}
              <div 
                ref={windowRef}
                className="absolute top-1/2 left-1/2 w-[90%] md:w-[85%] max-w-[700px] bg-white rounded-xl md:rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] z-10 overflow-hidden select-none
                           transition-shadow hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)]"
                style={{
                  transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
                  width: size.width > 0 ? `${size.width}px` : undefined,
                  height: size.height > 0 ? `${size.height}px` : undefined,
                  maxWidth: size.width > 0 ? 'none' : undefined
                }}
              >
                {/* Barra de título con botones de Mac */}
                <div
                  className="flex justify-center items-center relative px-3 md:px-4 py-2.5 md:py-3 bg-gradient-to-b from-gray-100 to-gray-50 border-b border-gray-200 cursor-default"
                  onMouseDown={handleMouseDown}
                >
                  {/* Botones de semáforo a la izquierda */}
                  <div className="absolute left-3 md:left-4 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57] hover:bg-[#FF4136] transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-[#FFB300] transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-[#28CA42] hover:bg-[#00D924] transition-colors cursor-pointer"></div>
                  </div>

                  {/* Controles izquierdos (flechas atrás/adelante y vista) */}
                  <div className="absolute left-16 md:left-20 flex items-center gap-3">
                    {/* Flechas atrás/adelante */}
                    <div className="flex items-center">
                      <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-200/50 rounded transition-colors">
                        <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-200/50 rounded transition-colors">
                        <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                    
                    {/* Botón de vista de pestañas/sidebar */}
                    <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-200/50 rounded transition-colors">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="3" width="7" height="7" strokeWidth={2} rx="1" />
                        <rect x="14" y="3" width="7" height="7" strokeWidth={2} rx="1" />
                        <rect x="3" y="14" width="7" height="7" strokeWidth={2} rx="1" />
                        <rect x="14" y="14" width="7" height="7" strokeWidth={2} rx="1" />
                      </svg>
                    </button>
                  </div>

                  {/* Barra de direcciones central estilo Safari */}
                  <div className="w-full max-w-[500px] h-7 mx-32 md:mx-40 bg-white/60 backdrop-blur-md rounded-md border border-gray-300/40 shadow-sm flex items-center px-3 space-x-2">
                    {/* Icono de candado */}
                    <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    {/* URL */}
                    <span className="text-[13px] text-gray-700 font-normal">platform.2laps.ai</span>
                  </div>

                  {/* Controles derechos (compartir, nueva pestaña, copiar) */}
                  <div className="absolute right-3 md:right-4 flex items-center gap-2">
                    {/* Botón exportar/compartir */}
                    <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-200/50 rounded transition-colors">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                    {/* Botón más/nueva pestaña */}
                    <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-200/50 rounded transition-colors">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                    {/* Botón copiar/duplicar */}
                    <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-200/50 rounded transition-colors">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Contenido de la ventana - responsive al tamaño */}
                <div 
                  className="p-3 md:p-6 font-mono bg-white overflow-y-auto"
                  style={{
                    fontSize: size.width > 0 ? `${Math.max(9, Math.min(14, size.width / 50))}px` : undefined,
                    height: size.height > 0 ? `${size.height - 40}px` : undefined,
                    maxHeight: size.height > 0 ? 'none' : '60vh'
                  }}
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
                </div>

                {/* Handle de redimensionamiento esquina inferior derecha - solo desktop */}
                <div
                  className="hidden md:block resize-handle absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize z-20"
                  onMouseDown={handleResizeMouseDown}
                ></div>
              </div>
            </div>
          </div>

          {/* Sección Social Proof */}
          <SocialProof />

          {/* Aquí irá el resto del contenido */}
        </div>
      </main>
    </>
  );
}
