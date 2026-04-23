import { Search, Bot, BarChart3, FileText, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  const steps = [
    {
      icon: Search,
      title: 'Definimos prompts',
      description: 'Creamos preguntas reales que los usuarios hacen a las IAs en cada mercado. Multiples variaciones y perspectivas.',
    },
    {
      icon: Bot,
      title: 'Consultamos 6 IAs',
      description: 'ChatGPT, Gemini, Claude, Perplexity, Grok y DeepSeek. Cada modelo responde de forma independiente.',
    },
    {
      icon: BarChart3,
      title: 'Analizamos resultados',
      description: 'Extraemos marcas mencionadas, posiciones, sentimiento, fuentes citadas y share of voice.',
    },
    {
      icon: FileText,
      title: 'Generamos rankings',
      description: 'Calculamos el Consensus Score, tendencias y desglose por modelo. Datos actualizados periodicamente.',
    },
  ]

  return (
    <div>
      {/* Hero */}
      <div className="border-b border-[#c0c0c0]">
        <div className="px-4 lg:px-8 py-12 max-w-2xl">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4">
            El Bloomberg de la visibilidad IA
          </h1>
          <p className="text-sm text-[#666] leading-relaxed mb-4">
            2laps monitoriza lo que los principales modelos de inteligencia artificial recomiendan en cada mercado.
            Como un terminal financiero, pero para entender quien gana y quien pierde en el nuevo canal de descubrimiento: la IA.
          </p>
          <p className="text-sm text-[#666] leading-relaxed">
            Creado por <span className="text-[#1a1a1a] font-medium">T&T (Truco y Trufa)</span>, consultora de marketing intelligence con sede en Madrid.
          </p>
        </div>
      </div>

      {/* Methodology */}
      <div className="border-b border-[#c0c0c0]">
        <div className="px-4 lg:px-8 py-12">
          <h2 className="text-lg font-semibold text-[#1a1a1a] mb-8">
            Como funciona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="border border-[#c0c0c0] rounded-lg p-5 relative">
                <div className="absolute -top-3 -left-1 bg-[#c23b4c] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                  {i + 1}
                </div>
                <step.icon className="w-5 h-5 text-accent-blue mb-3" />
                <h3 className="text-sm font-semibold text-[#1a1a1a] mb-2">{step.title}</h3>
                <p className="text-xs text-[#666] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Models */}
      <div className="border-b border-[#c0c0c0]">
        <div className="px-4 lg:px-8 py-12">
          <h2 className="text-lg font-semibold text-[#1a1a1a] mb-4">
            Modelos monitorizados
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {['ChatGPT', 'Gemini', 'Claude', 'Perplexity', 'Grok', 'DeepSeek'].map(model => (
              <div key={model} className="border border-[#c0c0c0] rounded-lg p-4 text-center">
                <span className="text-sm text-[#1a1a1a]">{model}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="border-b border-[#c0c0c0]">
        <div className="px-4 lg:px-8 py-12">
          <h2 className="text-lg font-semibold text-[#1a1a1a] mb-4">
            El equipo
          </h2>
          <div className="border border-[#c0c0c0] rounded-lg p-6 max-w-md">
            <h3 className="text-base font-semibold text-[#1a1a1a] mb-1">
              T&T (Truco y Trufa)
            </h3>
            <p className="text-xs text-[#888] mb-3">Madrid, Espana</p>
            <p className="text-sm text-[#666] leading-relaxed">
              Consultora de marketing intelligence especializada en GEO (Generative Engine Optimization)
              y analisis de visibilidad en modelos de IA.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 lg:px-8 py-12">
        <div className="border border-[#c23b4c]/30 rounded-lg p-8 max-w-xl">
          <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
            Quieres saber mas?
          </h3>
          <p className="text-sm text-[#666] mb-4">
            Reserva una demo y te mostramos como 2laps puede transformar tu estrategia de visibilidad IA.
          </p>
          <a
            href="https://calendly.com/rodrigo-quesada-trucoytrufa/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#c23b4c] text-white text-sm rounded hover:bg-[#a83242] transition-colors"
          >
            Reservar demo
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
