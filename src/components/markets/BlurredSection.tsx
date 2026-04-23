import { Lock, Calendar } from 'lucide-react'

const DEFAULT_CALENDLY_URL = 'https://calendly.com/rodrigo-quesada-trucoytrufa/30min'

interface BlurredSectionProps {
  title: string
  children: React.ReactNode
  calendlyUrl?: string
}

export function BlurredSection({ title, children, calendlyUrl }: BlurredSectionProps) {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <div className="blur-[8px] pointer-events-none select-none opacity-60">
        {children}
      </div>

      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center gap-3 rounded-lg">
        <div className="flex items-center gap-2 text-[#888]">
          <Lock className="w-4 h-4" />
          <span className="text-sm">{title}</span>
        </div>
        <a
          href={calendlyUrl || DEFAULT_CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#c23b4c] text-white text-xs rounded hover:bg-[#a83242] transition-colors"
        >
          <Calendar className="w-3.5 h-3.5" />
          Reservar demo
        </a>
      </div>
    </div>
  )
}
