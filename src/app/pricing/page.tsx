import { Metadata } from 'next'
import { Check, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Precios',
  description: 'Planes y precios de 2laps. Desde gratis hasta Enterprise. Descubre la visibilidad IA de tu mercado.',
}

const plans = [
  {
    name: 'Gratis',
    price: '0',
    description: 'Explora todos los mercados y rankings basicos.',
    features: [
      'Acceso a todos los mercados',
      'Rankings de marcas',
      'Share of voice basico',
      'Prompts analizados',
    ],
    cta: 'Empieza gratis',
    href: '/',
    popular: false,
  },
  {
    name: 'Pro',
    price: '299',
    description: 'Tendencias, sentimiento y desglose por modelo de IA.',
    features: [
      'Todo en Gratis',
      'Tendencias mensuales',
      'Analisis de sentimiento',
      'Desglose por modelo IA',
      'Fuentes citadas por IAs',
      'Alertas de cambios',
      'Exportar datos CSV',
    ],
    cta: 'Empezar con Pro',
    href: 'https://calendly.com/rodrigo-quesada-trucoytrufa/30min',
    popular: true,
  },
  {
    name: 'Business',
    price: '999',
    description: 'Para equipos que necesitan inteligencia completa.',
    features: [
      'Todo en Pro',
      'Mercados a medida',
      'Acceso API',
      'Informes mensuales',
      'Soporte analista dedicado',
      'Integracion con herramientas',
      'Usuarios ilimitados',
    ],
    cta: 'Contactar ventas',
    href: 'https://calendly.com/rodrigo-quesada-trucoytrufa/30min',
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <div>
      <div className="border-b border-[#c0c0c0]">
        <div className="px-4 lg:px-8 text-center py-12">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-2">
            Planes y Precios
          </h1>
          <p className="text-sm text-[#666] max-w-md mx-auto">
            Empieza gratis. Desbloquea insights premium cuando los necesites.
          </p>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-lg p-6 flex flex-col ${
                plan.popular
                  ? 'border-2 border-[#c23b4c] relative'
                  : 'border border-[#c0c0c0]'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c23b4c] text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                  Popular
                </span>
              )}
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-mono text-3xl font-bold text-[#1a1a1a]">&euro;{plan.price}</span>
                {plan.price !== '0' && <span className="text-xs text-[#888]">/mes</span>}
              </div>
              <p className="text-xs text-[#888] mb-6">{plan.description}</p>

              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-xs text-[#444]">
                    <Check className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                target={plan.href.startsWith('http') ? '_blank' : undefined}
                rel={plan.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`block text-center px-4 py-2.5 text-sm rounded transition-colors ${
                  plan.popular
                    ? 'bg-[#c23b4c] text-white hover:bg-[#a83242]'
                    : 'bg-[#f5f5f5] text-[#1a1a1a] border border-[#c0c0c0] hover:border-[#c23b4c]/40'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Enterprise */}
        <div className="border border-[#c0c0c0] rounded-lg p-8 max-w-2xl mx-auto text-center">
          <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">Enterprise</h3>
          <p className="text-sm text-[#666] mb-4">
            Incluye estrategia, contenido optimizado para IA (2see), servicio gestionado y analisis a medida.
          </p>
          <a
            href="https://calendly.com/rodrigo-quesada-trucoytrufa/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1a1a1a] text-white text-sm rounded hover:opacity-90 transition-opacity"
          >
            Habla con nosotros
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
