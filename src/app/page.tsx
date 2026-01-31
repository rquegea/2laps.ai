'use client';

import { Header } from '@/components/Header';
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

      // Calcular límites sin margen de la sombra - la ventana puede llegar a todos los bordes
      const maxX = (containerRect.width / 2) - (windowRect.width / 2);
      const minX = -(containerRect.width / 2) + (windowRect.width / 2);
      const maxY = (containerRect.height / 2) - (windowRect.height / 2);
      const minY = -(containerRect.height / 2) + (windowRect.height / 2);

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
              className="w-full relative aspect-[9/16] md:aspect-video overflow-visible"
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
                  className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 bg-gradient-to-b from-gray-100 to-gray-50 border-b border-gray-200 cursor-default"
                  onMouseDown={handleMouseDown}
                >
                  <div className="flex gap-1.5 md:gap-2">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FF5F57] hover:bg-[#FF4136] transition-colors cursor-pointer"></div>
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FFBD2E] hover:bg-[#FFB300] transition-colors cursor-pointer"></div>
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#28CA42] hover:bg-[#00D924] transition-colors cursor-pointer"></div>
                  </div>
                  <div className="flex-1 text-center text-[10px] md:text-xs text-gray-600 font-medium truncate">
                    2laps.ai - Strategic Intelligence
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
          
          {/* Aquí irá el resto del contenido */}
        </div>
      </main>
    </>
  );
}
