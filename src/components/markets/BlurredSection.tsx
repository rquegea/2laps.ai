import { Lock } from 'lucide-react'
import Link from 'next/link'

interface BlurredSectionProps {
  title: string
  children: React.ReactNode
}

export function BlurredSection({ title, children }: BlurredSectionProps) {
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
        <Link
          href="/pricing"
          className="px-4 py-2 bg-[#c23b4c] text-white text-xs rounded hover:bg-[#a83242] transition-colors"
        >
          Ver planes
        </Link>
      </div>
    </div>
  )
}
