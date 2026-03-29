'use client';

import Link from 'next/link';

interface NewsItem {
  id: string;
  slug: string;
  headline: string;
  summary: string;
  timeAgo: string;
  category: string;
  categoryColor: string;
  isBreaking?: boolean;
}

const mainNews: NewsItem = {
  id: '1',
  slug: 'google-ai-overviews-47-percent',
  headline: 'Google Reorganizes Search Results: AI Overviews Now Appear in 47% of Commercial Queries',
  summary: 'The shift marks a fundamental change in how brands gain visibility. Companies not optimized for AI-generated answers are seeing organic traffic drops of up to 30% in key verticals like insurance, travel, and consumer electronics.',
  timeAgo: 'hace 2 horas',
  category: 'GEO',
  categoryColor: '#3B82F6',
  isBreaking: true,
};

const latestUpdates: { time: string; text: string }[] = [
  {
    time: 'hace 1 hora',
    text: 'OpenAI expands ChatGPT shopping features — product recommendations now include affiliate links and brand cards in 12 new markets...',
  },
  {
    time: 'hace 3 horas',
    text: 'Perplexity AI announces "Brand Profiles" allowing companies to claim and manage their presence across AI-generated answers...',
  },
  {
    time: 'hace 5 horas',
    text: 'EU regulators propose transparency requirements for AI recommendation engines, mandating disclosure of ranking criteria...',
  },
];

const bottomHeadlines: NewsItem[] = [
  {
    id: '2',
    slug: 'claude-45-financial-services-visibility',
    headline: 'Claude 4.5 Changes Recommendation Patterns: Financial Services See 18% Shift in Brand Visibility',
    summary: '',
    timeAgo: 'hace 4 horas',
    category: 'AI Models',
    categoryColor: '#D97757',
  },
  {
    id: '3',
    slug: 'gullon-tops-ai-rankings-spain',
    headline: 'Gullón Tops AI Rankings in Spanish FMCG for Third Consecutive Month',
    summary: '',
    timeAgo: 'hace 6 horas',
    category: 'Markets',
    categoryColor: '#10B981',
  },
  {
    id: '4',
    slug: 'deepseek-r2-tech-brand-visibility',
    headline: 'DeepSeek R2 Launch Reshuffles Tech Brand Visibility in Asian Markets',
    summary: '',
    timeAgo: 'hace 8 horas',
    category: 'AI Models',
    categoryColor: '#6366F1',
  },
];

const latestFeed: { time: string; headline: string }[] = [
  { time: '12 min', headline: 'Gemini 2.5 Pro Introduces Structured Brand Comparisons in Travel Queries' },
  { time: '28 min', headline: 'SEO Leaders Warn: Traditional Keyword Strategy Becoming Obsolete for AI Visibility' },
  { time: '1 hr', headline: 'Mapfre Maintains #1 Position Across 5/6 AI Models in Insurance Spain' },
  { time: '2 hr', headline: 'Amazon Product Recommendations by AI Assistants Growing 340% YoY' },
  { time: '3 hr', headline: 'New Study: 62% of Gen Z Trusts AI Recommendations Over Traditional Search' },
  { time: '4 hr', headline: 'Perplexity Pages Now Directly Impact Brand Share of Voice Metrics' },
];


export function NewsSection() {
  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="border-b border-[#c0c0c0] px-4 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-base font-semibold text-[#1a1a1a]">AI Visibility News</h2>
          <span className="flex items-center gap-1.5 text-[11px] font-medium text-[#c23b4c] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#c23b4c] animate-pulse" />
            Live
          </span>
        </div>
        <span className="text-xs text-[#888]">Powered by 2laps Intelligence</span>
      </div>

      {/* BLOCK 1: Main story + sidebar */}
      <div className="flex flex-col lg:flex-row items-stretch border-b border-[#c0c0c0]">
        {/* Left — Main content */}
        <div className="flex-1 min-w-0 border-r-0 lg:border-r border-[#c0c0c0] flex flex-col">
          {/* Breaking / Main Story */}
          <div className="px-4 lg:px-8 py-6 border-b border-[#c0c0c0]">
            {mainNews.isBreaking && (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c23b4c] uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-[#c23b4c]" />
                Breaking
              </span>
            )}
            <Link href={`/news/${mainNews.slug}`}>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] leading-tight mb-4 hover:text-[#c23b4c] cursor-pointer transition-colors">
                {mainNews.headline}
              </h3>
            </Link>

            <div className="flex flex-col md:flex-row gap-6">
              <p className="text-base text-[#555] leading-relaxed flex-1">
                {mainNews.summary}
              </p>

              <div className="md:w-[300px] border border-[#c0c0c0] flex-shrink-0">
                <div className="px-4 py-2.5 border-b border-[#c0c0c0] bg-[#f8f8f8]">
                  <span className="text-sm font-semibold text-[#1a1a1a]">Latest Updates</span>
                </div>
                <div className="divide-y divide-[#e8e8e8]">
                  {latestUpdates.map((update, i) => (
                    <div key={i} className="px-4 py-3">
                      <span className="text-xs text-[#888] block mb-1">{update.time}</span>
                      <p className="text-sm text-[#444] leading-snug line-clamp-3">{update.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Headlines — 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 flex-1">
            {bottomHeadlines.map((item, idx) => (
              <Link
                key={item.id}
                href={`/news/${item.slug}`}
                className={`px-4 lg:px-8 py-5 hover:bg-[#fafafa] transition-colors group ${idx < bottomHeadlines.length - 1 ? 'border-b md:border-b-0 md:border-r border-[#c0c0c0]' : ''}`}
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                    style={{ color: item.categoryColor, backgroundColor: `${item.categoryColor}10` }}
                  >
                    {item.category}
                  </span>
                  <span className="text-xs text-[#888]">{item.timeAgo}</span>
                </div>
                <h4 className="text-base font-semibold text-[#1a1a1a] leading-snug group-hover:text-[#c23b4c] transition-colors">
                  {item.headline}
                </h4>
              </Link>
            ))}
          </div>
        </div>

        {/* Right — Sidebar */}
        <div className="w-full lg:w-[320px] flex-shrink-0 border-t lg:border-t-0 border-[#c0c0c0] flex flex-col">
          {/* Latest header */}
          <div className="px-4 lg:px-6 py-4 border-b border-[#c0c0c0] flex items-center justify-between">
            <h3 className="text-base font-semibold text-[#c23b4c]">Latest</h3>
            <button className="text-xs text-[#888] border border-[#c0c0c0] rounded-full px-3 py-1 hover:bg-[#fafafa] transition-colors">
              All categories
            </button>
          </div>

          {/* Feed items */}
          <div className="divide-y divide-[#e8e8e8] flex-1">
            {latestFeed.map((item, i) => (
              <div key={i} className="px-4 lg:px-6 py-3.5 hover:bg-[#fafafa] cursor-pointer transition-colors group">
                <div className="flex gap-3">
                  <span className="text-xs font-medium text-[#c23b4c] w-12 flex-shrink-0 pt-0.5">{item.time}</span>
                  <p className="text-sm font-medium text-[#1a1a1a] leading-snug group-hover:text-[#c23b4c] transition-colors">
                    {item.headline}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* In Focus Tags */}
          <div className="px-4 lg:px-6 py-5 border-t border-[#c0c0c0]">
            <h4 className="text-sm font-semibold text-[#1a1a1a] mb-3">In Focus</h4>
            <div className="flex flex-wrap gap-2">
              {['AI Overviews', 'GEO Strategy', 'Brand Visibility', 'ChatGPT Shopping', 'Perplexity', 'AI Search'].map(tag => (
                <span
                  key={tag}
                  className="text-xs font-medium text-[#555] border border-[#c0c0c0] rounded-full px-3 py-1.5 hover:bg-[#fafafa] cursor-pointer transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BLOCKS 2-6: All wrapped in one flex so the right column is continuous */}
      <div className="flex flex-col lg:flex-row items-stretch">
        {/* Left — all content blocks */}
        <div className="flex-1 min-w-0 border-r-0 lg:border-r border-[#c0c0c0]">

          {/* BLOCK 2: Row of 3 with thumbnails */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#c0c0c0]">
            {[
              { img: '📊', gradient: 'from-[#dbeafe] to-[#93c5fd]', category: 'Feature', headline: 'ChatGPT Shopping Expands to 40 Countries — Brands Without AI Optimization Losing Ground' },
              { img: '⚖️', gradient: 'from-[#fce7f3] to-[#f9a8d4]', category: 'Review', headline: 'EU Digital Markets Act May Require AI Models to Disclose Brand Recommendation Criteria' },
              { img: '🎯', gradient: 'from-[#fef3c7] to-[#fcd34d]', category: 'Opinion', headline: 'Perplexity Launches "Brand Profiles" — Companies Can Now Claim Their AI Presence' },
            ].map((item, idx) => (
              <div key={idx} className={`px-4 lg:px-6 py-5 hover:bg-[#fafafa] cursor-pointer transition-colors group ${idx < 2 ? 'border-b md:border-b-0 md:border-r border-[#c0c0c0]' : ''}`}>
                <div className={`w-full aspect-[16/10] bg-gradient-to-br ${item.gradient} rounded mb-3 flex items-center justify-center`}>
                  <span className="text-3xl">{item.img}</span>
                </div>
                <p className="text-sm font-medium text-[#1a1a1a] mb-1">{item.category}</p>
                <h4 className="text-base font-semibold text-[#1a1a1a] leading-snug group-hover:text-[#c23b4c] transition-colors">
                  {item.headline}
                </h4>
              </div>
            ))}
          </div>

          {/* Row of 3 with summaries */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#c0c0c0]">
            {[
              { category: 'Feature', headline: 'Finishing a GEO Strategy Is Hard. Measuring It Is Harder.', summary: 'The global race to optimize for AI-generated answers turns traditional SEO into a new discipline — and most brands are still catching up.' },
              { category: 'Essay', headline: 'The End of Search as We Know It', summary: 'AI didn\'t just change how we find information. It fundamentally altered how brands gain visibility — and moving on from SEO may take time.' },
              { category: 'Essay', headline: 'The AI Boom Is Missing the Secret Sauce of Structured Data', summary: 'Massive AI investment is fueling hopes of better recommendations. But today\'s models lack the structured signals that make rankings reliable.' },
            ].map((item, idx) => (
              <div key={idx} className={`px-4 lg:px-6 py-5 hover:bg-[#fafafa] cursor-pointer transition-colors group ${idx < 2 ? 'border-b md:border-b-0 md:border-r border-[#c0c0c0]' : ''}`}>
                <p className="text-sm font-medium text-[#1a1a1a] mb-1">{item.category}</p>
                <h4 className="text-base font-bold text-[#1a1a1a] leading-snug mb-2 group-hover:text-[#c23b4c] transition-colors">
                  {item.headline}
                </h4>
                <p className="text-sm text-[#555] leading-relaxed line-clamp-3">{item.summary}</p>
              </div>
            ))}
          </div>

          {/* BLOCK 3: Two editorial articles with thumbnails */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#c0c0c0]">
            <div className="px-4 lg:px-6 py-6 border-b md:border-b-0 md:border-r border-[#c0c0c0] cursor-pointer group">
              <div className="w-full aspect-[16/10] bg-gradient-to-br from-[#fde68a] via-[#f59e0b] to-[#d97706] rounded mb-2 flex items-center justify-center">
                <span className="text-3xl">🚀</span>
              </div>
              <p className="text-right text-xs text-[#999] mb-3">2laps Research</p>
              <p className="text-sm font-medium text-[#1a1a1a] mb-1">The Big Take</p>
              <h3 className="text-lg md:text-xl font-bold text-[#1a1a1a] leading-snug mb-2 group-hover:text-[#c23b4c] transition-colors">
                Mapfre Dominates Insurance AI Rankings: How One Brand Captured 5 of 6 AI Models
              </h3>
              <p className="text-sm text-[#555] leading-relaxed mb-2">
                The Spanish insurer&apos;s systematic approach to AI optimization has made it the most recommended brand in its category.
              </p>
              <span className="text-xs text-[#888]">By 2laps Research</span>
            </div>

            <div className="px-4 lg:px-6 py-6 cursor-pointer group">
              <div className="w-full aspect-[16/10] bg-gradient-to-br from-[#bfdbfe] via-[#3b82f6] to-[#1e40af] rounded mb-2 flex items-center justify-center">
                <span className="text-3xl">🎯</span>
              </div>
              <p className="text-right text-xs text-[#999] mb-3">Illustration for 2laps</p>
              <p className="text-sm font-medium text-[#1a1a1a] mb-1">Dispatch</p>
              <h3 className="text-lg md:text-xl font-bold text-[#1a1a1a] leading-snug mb-2 group-hover:text-[#c23b4c] transition-colors">
                Why Share of Voice in AI Is the New SEO: A Framework for CMOs in 2026
              </h3>
              <p className="text-sm text-[#555] leading-relaxed mb-2">
                As AI-generated answers replace traditional search results, brands need a new playbook for visibility.
              </p>
              <span className="text-xs text-[#888]">By 2laps Research</span>

              <div className="mt-4 border border-[#c0c0c0] rounded px-4 py-3 hover:bg-[#fafafa] transition-colors">
                <p className="text-sm font-medium text-[#1a1a1a]">
                  The GEO Playbook: How Top Brands Are Optimizing for Generative Engine Answers
                </p>
              </div>
            </div>
          </div>

          {/* BLOCK 4: 2laps Analysis */}
          <div className="border-b border-[#c0c0c0]">
            <div className="px-4 lg:px-6 py-3 border-b border-[#c0c0c0] bg-[#f8f8f8]">
              <h3 className="text-sm font-semibold text-[#1a1a1a] uppercase tracking-wider">2laps Analysis</h3>
            </div>
            <div className="flex flex-col md:flex-row cursor-pointer group">
              <div className="md:w-2/5 flex-shrink-0 px-4 lg:px-6 py-6">
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#f0fdf4] via-[#86efac] to-[#16a34a] rounded flex items-center justify-center">
                  <span className="text-3xl">🏆</span>
                </div>
              </div>
              <div className="flex-1 px-4 lg:px-6 py-6">
                <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] leading-tight mb-3 group-hover:text-[#c23b4c] transition-colors">
                  Gullón, Mapfre, Dentons: What Spain&apos;s AI-Visible Brands Have in Common
                </h3>
                <p className="text-sm text-[#555] leading-relaxed mb-3">
                  We analyzed the top-ranked brands across 12 Spanish markets in all 6 major AI models. The brands that consistently appear in AI recommendations share three traits: authoritative content, structured data, and recently updated digital presence.
                </p>
                <span className="text-xs text-[#888]">By 2laps Research · hace 10 horas</span>
              </div>
            </div>
          </div>

          {/* BLOCK 5: 3 headlines */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#c0c0c0]">
            {[
              { category: 'Legal', categoryColor: '#64748B', headline: 'Dentons Leads AI Visibility Rankings for Law Firms in Spain — First Mover Advantage in Legal GEO', timeAgo: 'hace 11 horas' },
              { category: 'Education', categoryColor: '#A855F7', headline: 'Planeta Group Universities Dominate MBA Recommendations Across ChatGPT and Gemini', timeAgo: 'hace 12 horas' },
              { category: 'Sports', categoryColor: '#F97316', headline: 'Nike vs Adidas: AI Models Split on Running Shoe Recommendations in European Markets', timeAgo: 'hace 13 horas' },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`px-4 lg:px-6 py-5 hover:bg-[#fafafa] cursor-pointer transition-colors group ${idx < 2 ? 'border-b md:border-b-0 md:border-r border-[#c0c0c0]' : ''}`}
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                    style={{ color: item.categoryColor, backgroundColor: `${item.categoryColor}10` }}
                  >
                    {item.category}
                  </span>
                  <span className="text-xs text-[#888]">{item.timeAgo}</span>
                </div>
                <h4 className="text-base font-semibold text-[#1a1a1a] leading-snug group-hover:text-[#c23b4c] transition-colors">
                  {item.headline}
                </h4>
              </div>
            ))}
          </div>

          {/* BLOCK 6: Two more articles with thumbnails */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="px-4 lg:px-6 py-6 border-b md:border-b-0 md:border-r border-[#c0c0c0] cursor-pointer group">
              <div className="w-full aspect-[16/10] bg-gradient-to-br from-[#fecaca] via-[#ef4444] to-[#991b1b] rounded mb-2 flex items-center justify-center">
                <span className="text-3xl">⚡</span>
              </div>
              <p className="text-sm font-medium text-[#1a1a1a] mb-1">Rankings</p>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug mb-2 group-hover:text-[#c23b4c] transition-colors">
                This Month&apos;s Biggest Movers: Which Brands Gained and Lost AI Visibility in March
              </h3>
              <p className="text-sm text-[#555] leading-relaxed">
                Our monthly rankings update reveals surprising shifts. Three brands entered the top 5 for the first time.
              </p>
            </div>

            <div className="px-4 lg:px-6 py-6 cursor-pointer group">
              <div className="w-full aspect-[16/10] bg-gradient-to-br from-[#e0e7ff] via-[#6366f1] to-[#3730a3] rounded mb-2 flex items-center justify-center">
                <span className="text-3xl">🔬</span>
              </div>
              <p className="text-sm font-medium text-[#1a1a1a] mb-1">Methodology</p>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug mb-2 group-hover:text-[#c23b4c] transition-colors">
                How We Track AI Recommendations: Inside the 2laps Engine and Scoring Methodology
              </h3>
              <p className="text-sm text-[#555] leading-relaxed">
                We explain how we query 6 AI models across 12+ markets and calculate consensus scores.
              </p>
            </div>
          </div>

        </div>

        {/* Right — single continuous empty sidebar column, no horizontal borders */}
        <div className="hidden lg:block w-[320px] flex-shrink-0" />
      </div>

      {/* CTA Bar */}
      <div className="border-t border-[#c0c0c0] px-4 lg:px-8 py-10 text-center bg-[#fafafa]">
        <p className="text-lg font-semibold text-[#1a1a1a] mb-2">
          Get AI visibility intelligence for your brand
        </p>
        <p className="text-sm text-[#666] mb-5">
          Book a free 20-minute demo and see your market data
        </p>
        <a
          href="https://calendly.com/rodrigo-quesada-trucoytrufa/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-[#c23b4c] text-white text-sm font-medium rounded hover:bg-[#a83242] transition-colors"
        >
          Book a free demo
        </a>
      </div>
    </div>
  );
}
