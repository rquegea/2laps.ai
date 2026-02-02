import { Header } from '@/components/Header';
import { SocialProof } from '@/components/SocialProof';
import { InteractiveWindow } from '@/components/InteractiveWindow';
import { StrategicSection } from '@/components/StrategicSection';
import { LanguageSelector } from '@/components/LanguageSelector';
import { ThemeSelector } from '@/components/ThemeSelector';
import { TwoDayContent } from '@/components/TwoDayContent';

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-background">
        {/* Contenido principal con padding top para el header fijo */}
        <div className="pt-16">
          {/* Sección de texto debajo del header */}
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
            <div
              className="text-left text-foreground leading-relaxed text-3xl font-normal"
              style={{ fontFamily: "'Switzer', sans-serif" }}
            >
              <p>Understand the <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#BC4E55] after:transition-all after:duration-300 hover:after:w-full">market</span></p>
              <p>before anyone else.</p>
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
              bgImage="/resources/s-l1200.jpg"
              url="platform.2laps.ai"
              containerClassName="w-full relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden rounded-2xl"
            >
              <TwoDayContent />
            </InteractiveWindow>
          </div>

          {/* Sección Social Proof */}
          <SocialProof />

          {/* Secciones Strategic Reasoning */}
          <StrategicSection bgImage="/resources/s-l12001.jpg" />
          <StrategicSection reverse={true} bgImage="/resources/RS15935_P201611_HopperE-copy_web-1.jpg" />
          <StrategicSection bgImage="/resources/large_RS18750_Addison_Manhattan-Bridge-Loop_ART500872_We.jpg" />

          {/* Sección Nuestra Misión */}
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
            <div className="text-left">
              <p className="text-xl md:text-2xl font-normal text-gray-500 mb-2 leading-tight" style={{ fontFamily: "'Switzer', sans-serif" }}>
                Our mission
              </p>
              <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-6 leading-tight" style={{ fontFamily: "'Switzer', sans-serif" }}>
                We believe that in a world drowning in data, the most valuable asset is clarity.
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl" style={{ fontFamily: "'Switzer', sans-serif" }}>
                Our mission is to organize the world's business information and make it actionable.
              </p>

              <button className="mt-6 px-6 py-3 text-sm bg-foreground text-background rounded-full hover:scale-105 transition-transform">
                Contact Us
              </button>
            </div>
          </div>

          {/* Sección de Características - Configuración Flexible */}
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
            <div className="text-left mb-16">
              <p className="text-xl md:text-2xl font-normal text-gray-500 mb-2 leading-tight" style={{ fontFamily: "'Switzer', sans-serif" }}>
                Powerful & Flexible
              </p>
              <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-6 leading-tight" style={{ fontFamily: "'Switzer', sans-serif" }}>
                Configure 2laps so you can do your best work.
              </h2>
            </div>

            {/* Grid de características */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {/* Feature 1 */}
              <div className="bg-[#F9F9F9] rounded-2xl p-8 hover:bg-gray-100 transition-colors h-96 flex flex-col">
                <div className="flex-grow-0">
                  <h3 className="text-xl font-medium text-foreground mb-2" style={{ fontFamily: "'Switzer', sans-serif" }}>
                    Specialized Modules
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'Switzer', sans-serif" }}>
                    Tailored to client needs: Marketing, R&D, Digital, Market Intelligence. Ad-hoc for every customer.
                  </p>
                </div>
                <div className="bg-[#F9F9F9] rounded-xl p-6 mt-6 flex-grow flex items-center justify-center">
                  <div className="text-4xl">🧩</div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#F9F9F9] rounded-2xl p-8 hover:bg-gray-100 transition-colors h-96 flex flex-col">
                <div className="flex-grow-0">
                  <h3 className="text-xl font-medium text-foreground mb-2" style={{ fontFamily: "'Switzer', sans-serif" }}>
                    Custom Configuration
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'Switzer', sans-serif" }}>
                    Custom configuration of competitors, queries and AI personality for your specific brand.
                  </p>
                </div>
                <div className="bg-[#F9F9F9] rounded-xl p-6 mt-6 flex-grow flex items-center justify-center">
                  <div className="text-4xl">⚙️</div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-[#F9F9F9] rounded-2xl p-8 hover:bg-gray-100 transition-colors h-96 flex flex-col">
                <div className="flex-grow-0">
                  <h3 className="text-xl font-medium text-foreground mb-2" style={{ fontFamily: "'Switzer', sans-serif" }}>
                    Real-time Alerts
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'Switzer', sans-serif" }}>
                    Automatic alerts for spikes, crashes and competitive shifts using advanced algorithms.
                  </p>
                </div>
                <div className="bg-[#F9F9F9] rounded-xl p-6 mt-6 flex-grow flex items-center justify-center">
                  <div className="text-4xl">🚨</div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-[#F9F9F9] rounded-2xl p-8 hover:bg-gray-100 transition-colors h-96 flex flex-col">
                <div className="flex-grow-0">
                  <h3 className="text-xl font-medium text-foreground mb-2" style={{ fontFamily: "'Switzer', sans-serif" }}>
                    AI-Powered Insights
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'Switzer', sans-serif" }}>
                    AI that processes millions of data points to uncover hidden patterns and emerging trends.
                  </p>
                </div>
                <div className="bg-[#F9F9F9] rounded-xl p-6 mt-6 flex-grow flex items-center justify-center">
                  <div className="text-4xl">🤖</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sección Get 2laps now */}
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
            <div className="text-center">
              <p className="text-xl md:text-2xl font-normal text-gray-500 mb-2 leading-tight" style={{ fontFamily: "'Switzer', sans-serif" }}>
                Get 2laps now
              </p>
              <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-6 leading-tight" style={{ fontFamily: "'Switzer', sans-serif" }}>
                Ready to transform your business intelligence?
              </h2>

              <button className="px-8 py-4 text-base bg-foreground text-background rounded-full hover:scale-105 transition-transform">
                Contact for Demo
              </button>
            </div>
          </div>

          {/* Aquí irá el resto del contenido */}
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              {/* Columna 1 - Product */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4" style={{ fontFamily: "'Switzer', sans-serif" }}>
                  Product
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-foreground transition-colors" style={{ fontFamily: "'Switzer', sans-serif" }}>
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-foreground transition-colors" style={{ fontFamily: "'Switzer', sans-serif" }}>
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-foreground transition-colors" style={{ fontFamily: "'Switzer', sans-serif" }}>
                      Use Cases
                    </a>
                  </li>
                </ul>
              </div>

              {/* Columna 2 - Company */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4" style={{ fontFamily: "'Switzer', sans-serif" }}>
                  Company
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-foreground transition-colors" style={{ fontFamily: "'Switzer', sans-serif" }}>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-foreground transition-colors" style={{ fontFamily: "'Switzer', sans-serif" }}>
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-foreground transition-colors" style={{ fontFamily: "'Switzer', sans-serif" }}>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Columna 3 - Legal */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4" style={{ fontFamily: "'Switzer', sans-serif" }}>
                  Legal
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-foreground transition-colors" style={{ fontFamily: "'Switzer', sans-serif" }}>
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-foreground transition-colors" style={{ fontFamily: "'Switzer', sans-serif" }}>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-foreground transition-colors" style={{ fontFamily: "'Switzer', sans-serif" }}>
                      Security
                    </a>
                  </li>
                </ul>
              </div>

              {/* Columna 4 - Connect */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4" style={{ fontFamily: "'Switzer', sans-serif" }}>
                  Connect
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-foreground transition-colors" style={{ fontFamily: "'Switzer', sans-serif" }}>
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-foreground transition-colors" style={{ fontFamily: "'Switzer', sans-serif" }}>
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-foreground transition-colors" style={{ fontFamily: "'Switzer', sans-serif" }}>
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Línea divisoria */}
            <div className="border-t border-gray-200 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Copyright */}
                <p className="text-sm text-gray-600" style={{ fontFamily: "'Switzer', sans-serif" }}>
                  © 2026 2laps.ai
                </p>

                {/* Controles - Idioma y Modo Oscuro */}
                <div className="flex items-center gap-4">
                  {/* Selector de Tema */}
                  <ThemeSelector />
                  
                  {/* Selector de Idioma */}
                  <LanguageSelector />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
