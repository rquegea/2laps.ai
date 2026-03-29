'use client'

import { useState } from 'react'

interface Props {
  headline: string
}

export function ShareButtons({ headline }: Props) {
  const [copied, setCopied] = useState(false)

  const url = typeof window !== 'undefined' ? window.location.href : ''
  const encoded = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(headline)

  const copyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-full border border-[#333] flex items-center justify-center text-xs text-[#aaa] hover:border-white hover:text-white transition-colors font-bold"
      >
        X
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-full border border-[#333] flex items-center justify-center text-xs text-[#aaa] hover:border-white hover:text-white transition-colors font-bold"
      >
        in
      </a>
      <a
        href={`mailto:?subject=${encodedTitle}&body=${encoded}`}
        className="w-9 h-9 rounded-full border border-[#333] flex items-center justify-center text-sm text-[#aaa] hover:border-white hover:text-white transition-colors"
      >
        ✉
      </a>
      <button
        onClick={copyLink}
        className="h-9 px-4 rounded-full border border-[#333] text-xs text-[#aaa] hover:border-white hover:text-white transition-colors"
      >
        {copied ? '✓ Copiado' : 'Copy link'}
      </button>
    </div>
  )
}
