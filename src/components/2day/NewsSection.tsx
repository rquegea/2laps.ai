'use client';

interface NewsItem {
  id: string;
  headline: string;
  summary: string;
  timeAgo: string;
  category: string;
  categoryColor: string;
  isBreaking?: boolean;
}

const mainNews: NewsItem = {
  id: '1',
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
    headline: 'Claude 4.5 Changes Recommendation Patterns: Financial Services See 18% Shift in Brand Visibility',
    summary: '',
    timeAgo: 'hace 4 horas',
    category: 'AI Models',
    categoryColor: '#D97757',
  },
  {
    id: '3',
    headline: 'Gullón Tops AI Rankings in Spanish FMCG for Third Consecutive Month',
    summary: '',
    timeAgo: 'hace 6 horas',
    category: 'Markets',
    categoryColor: '#10B981',
  },
  {
    id: '4',
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

      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row items-stretch">
        {/* Left — Main content */}
        <div className="flex-1 min-w-0 border-r-0 lg:border-r border-[#c0c0c0]">
          {/* Breaking / Main Story */}
          <div className="px-4 lg:px-8 py-6 border-b border-[#c0c0c0]">
            {mainNews.isBreaking && (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c23b4c] uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-[#c23b4c]" />
                Breaking
              </span>
            )}
            <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] leading-tight mb-4 hover:text-[#c23b4c] cursor-pointer transition-colors">
              {mainNews.headline}
            </h3>

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
          <div className="flex flex-col md:flex-row">
            {bottomHeadlines.map((item, idx) => (
              <div
                key={item.id}
                className={`flex-1 px-4 lg:px-8 py-5 hover:bg-[#fafafa] cursor-pointer transition-colors group
                  ${idx < bottomHeadlines.length - 1 ? 'border-b md:border-b-0 md:border-r border-[#c0c0c0]' : ''}`}
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
    </div>
  );
}
