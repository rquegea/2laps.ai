import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import { getArticleBySlug, getAllArticleSlugs } from '@/lib/news'
import { ChevronRight } from 'lucide-react'
import { ShareButtons } from '@/components/news/ShareButtons'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllArticleSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  if (!article) return { title: 'Artículo no encontrado' }
  return {
    title: `${article.headline} | 2laps`,
    description: article.summary,
  }
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-[#c0c0c0] px-4 lg:px-8 py-2">
        <nav className="flex items-center gap-1 text-xs text-[#888]">
          <Link href="/" className="hover:text-[#1a1a1a] transition-colors">Inicio</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#1a1a1a]">News</span>
        </nav>
      </div>

      {/* Hero — dark Bloomberg-style header */}
      <div className="bg-[#0a0a0b] text-white">
        <div className="max-w-[720px] mx-auto px-6 pt-14 pb-12 text-center">
          {/* Category */}
          <div className="mb-5">
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ color: article.categoryColor, backgroundColor: `${article.categoryColor}20` }}
            >
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
            {article.headline}
          </h1>

          {/* Author + Date */}
          <div className="text-[#aaa] text-sm mb-6">
            <span>By {article.author}</span>
            <span className="mx-2">·</span>
            <span>{article.date}</span>
            <span className="mx-2">·</span>
            <span>{article.timeAgo}</span>
          </div>

          {/* Share buttons */}
          <ShareButtons headline={article.headline} />
        </div>

        {/* Summary / lead */}
        {article.summary && (
          <div className="border-t border-[#222] bg-[#111]">
            <p className="max-w-[720px] mx-auto px-6 py-6 text-[#ccc] text-lg leading-relaxed text-center">
              {article.summary}
            </p>
          </div>
        )}
      </div>

      {/* Article body */}
      <div className="max-w-[720px] mx-auto px-6 py-12">
        {article.body.map((block, i) => {
          if (block.type === 'paragraph') {
            return (
              <p key={i} className="text-[#1a1a1a] text-lg leading-[1.8] mb-6 font-serif">
                {block.text}
              </p>
            )
          }
          if (block.type === 'heading') {
            return (
              <h2 key={i} className="text-xl md:text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 leading-snug">
                {block.text}
              </h2>
            )
          }
          if (block.type === 'quote') {
            return (
              <blockquote key={i} className="border-l-4 border-[#c23b4c] pl-6 my-8">
                <p className="text-xl text-[#1a1a1a] italic leading-relaxed mb-2">
                  &ldquo;{block.text}&rdquo;
                </p>
                {block.source && (
                  <cite className="text-sm text-[#888] not-italic">— {block.source}</cite>
                )}
              </blockquote>
            )
          }
          return null
        })}
      </div>

      {/* CTA */}
      <div className="border-t border-[#c0c0c0] bg-[#f8f8f8]">
        <div className="max-w-[720px] mx-auto px-6 py-10 text-center">
          <p className="text-sm text-[#888] uppercase tracking-widest mb-2">2laps Intelligence</p>
          <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
            ¿Cómo está tu marca en la IA?
          </h3>
          <p className="text-sm text-[#666] mb-5 max-w-sm mx-auto">
            Descubre tu posición en los 6 modelos principales. Demo gratuita de 20 minutos.
          </p>
          <a
            href="https://calendly.com/rodrigo-quesada-trucoytrufa/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#c23b4c] text-white text-sm font-semibold rounded hover:bg-[#a83242] transition-colors"
          >
            Reservar demo
          </a>
        </div>
      </div>
    </div>
  )
}
