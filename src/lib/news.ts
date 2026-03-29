export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'quote'; text: string; source?: string }

export interface Article {
  slug: string
  headline: string
  summary: string
  author: string
  date: string
  timeAgo: string
  category: string
  categoryColor: string
  isBreaking?: boolean
  gradient: string
  emoji: string
  body: ArticleBlock[]
}

export const articles: Article[] = [
  {
    slug: 'google-ai-overviews-47-percent',
    headline: 'Google Reorganizes Search Results: AI Overviews Now Appear in 47% of Commercial Queries',
    summary: 'The shift marks a fundamental change in how brands gain visibility. Companies not optimized for AI-generated answers are seeing organic traffic drops of up to 30% in key verticals like insurance, travel, and consumer electronics.',
    author: '2laps Research',
    date: 'March 29, 2026',
    timeAgo: 'hace 2 horas',
    category: 'GEO',
    categoryColor: '#3B82F6',
    isBreaking: true,
    gradient: 'from-[#dbeafe] to-[#3b82f6]',
    emoji: '🔍',
    body: [
      { type: 'paragraph', text: 'Google has quietly crossed a threshold that search marketers have been dreading for two years: AI Overviews — the large language model-generated answer blocks that appear at the top of search results — now dominate nearly half of all commercial queries in the platform\'s major markets.' },
      { type: 'paragraph', text: 'According to data tracked by 2laps across 12 Spanish markets, the percentage of queries where a brand recommendation appears before the first organic blue link has jumped from 31% in Q4 2025 to 47% in March 2026. The trend is accelerating.' },
      { type: 'heading', text: 'Traffic drops hitting hardest in high-intent categories' },
      { type: 'paragraph', text: 'The verticals seeing the steepest organic traffic declines are precisely those where purchase intent is highest: insurance, banking, consumer electronics, and travel. In insurance alone, brands that haven\'t adapted their content strategy for AI visibility are reporting organic click-through drops of 28–34% year-over-year.' },
      { type: 'paragraph', text: 'The pattern is consistent across sectors: when an AI Overview appears, users click through to organic results 37% less often than when no AI block is present, according to an internal Google study cited by Search Engine Land last month.' },
      { type: 'quote', text: 'We\'re not seeing a slowdown in AI Overview rollout. We\'re seeing an acceleration. Every quarter, more queries get AI answers. The brands that appear in those answers are winning. The ones that don\'t are becoming invisible.', source: '2laps Research Director' },
      { type: 'heading', text: 'What this means for brand strategy' },
      { type: 'paragraph', text: 'The implication for marketing teams is stark: optimizing for the blue link is no longer sufficient. Brands need to think about how AI models perceive and describe them — a fundamentally different challenge than traditional SEO.' },
      { type: 'paragraph', text: 'Traditional SEO focuses on keyword relevance and technical signals. GEO (Generative Engine Optimization) requires authoritative, structured content that gives AI models clear signals about what a brand does, who it serves, and why it\'s recommended by trusted sources.' },
      { type: 'paragraph', text: 'The brands tracking best in 2laps data share three characteristics: they have strong editorial coverage in industry publications, their own content is structured and factual rather than promotional, and they\'re consistently mentioned in the same context by multiple independent sources.' },
      { type: 'heading', text: 'The window for action is narrowing' },
      { type: 'paragraph', text: 'Marketing teams that start working on AI visibility now have a meaningful head start. The patterns that LLMs have learned take time to update — meaning brands that build authority in AI today will benefit from that positioning for months or years.' },
      { type: 'paragraph', text: 'Conversely, brands that wait until AI visibility becomes an obvious crisis will find it significantly harder to recover. The feedback loops in language model training are slow, and reversing a pattern of non-mention requires sustained effort over time.' },
    ],
  },
  {
    slug: 'claude-45-financial-services-visibility',
    headline: 'Claude 4.5 Changes Recommendation Patterns: Financial Services See 18% Shift in Brand Visibility',
    summary: 'Anthropic\'s latest model update has reshuffled AI brand recommendations across European financial services markets, with some established players losing ground to digital-first challengers.',
    author: '2laps Research',
    date: 'March 29, 2026',
    timeAgo: 'hace 4 horas',
    category: 'AI Models',
    categoryColor: '#D97757',
    isBreaking: false,
    gradient: 'from-[#fed7aa] to-[#d97706]',
    emoji: '🤖',
    body: [
      { type: 'paragraph', text: 'Every time a major AI model releases a significant update, brand visibility scores shift. With Claude 4.5, released last week by Anthropic, the shifts have been unusually pronounced in the financial services sector — particularly in online banking and insurance recommendations for European markets.' },
      { type: 'paragraph', text: 'Tracking across 2laps\'s monitored Spanish markets, the consensus score changes between Claude 4.0 and 4.5 show an average 18% redistribution of share of voice in financial categories, with digital-first banks like Revolut and N26 gaining ground against traditional players.' },
      { type: 'heading', text: 'Why model updates matter for brand rankings' },
      { type: 'paragraph', text: 'Unlike Google algorithm updates, which are incremental and targeted, large language model updates involve retraining on new data with potentially different weightings. A model trained on data from late 2025 — when Revolut expanded aggressively into Spanish media — will naturally reflect that increased presence more than a model trained primarily on 2024 data.' },
      { type: 'paragraph', text: 'This creates a dynamic that brand managers are only beginning to grasp: their AI visibility score is not a single number but a distribution across models, and that distribution shifts with each major release.' },
      { type: 'heading', text: 'Winners and losers in Claude 4.5' },
      { type: 'paragraph', text: 'In online banking, Revolut\'s consensus score increased by 7 points in Claude 4.5 compared to its predecessor, reflecting the brand\'s expanded Spanish-language content output over the past two quarters. EVO Banco, which had been maintaining a stable position, dropped 4 points.' },
      { type: 'paragraph', text: 'The insurance category shows the most dramatic shift: Pelayo, which had been gaining ground in recent months, saw a reversal in Claude 4.5, with its recommendations dropping in favor of Línea Directa.' },
      { type: 'paragraph', text: 'These shifts underscore the importance of monitoring AI visibility not just as a single consensus score but as a model-by-model breakdown — understanding which models favor your brand and which don\'t is essential for a targeted improvement strategy.' },
    ],
  },
  {
    slug: 'gullon-tops-ai-rankings-spain',
    headline: 'Gullón Tops AI Rankings in Spanish FMCG for Third Consecutive Month',
    summary: 'The Burgos-based biscuit brand continues to dominate AI recommendations across all six major models, widening its lead over Fontaneda and Lotus.',
    author: '2laps Research',
    date: 'March 29, 2026',
    timeAgo: 'hace 6 horas',
    category: 'Markets',
    categoryColor: '#10B981',
    isBreaking: false,
    gradient: 'from-[#d1fae5] to-[#10b981]',
    emoji: '🏆',
    body: [
      { type: 'paragraph', text: 'For the third consecutive month, Gullón has maintained the top position in 2laps\'s tracking of AI recommendations for cookies and biscuits in Spain. With a consensus score of 87 and mentions across all six major AI models — ChatGPT, Gemini, Perplexity, Claude, Grok, and DeepSeek — the Burgos brand has established a commanding lead in its category.' },
      { type: 'paragraph', text: 'The consistency of Gullón\'s top ranking is notable in a category that has seen significant volatility over the past year. Several brands have entered and exited the top positions as AI models have updated, but Gullón has remained stable.' },
      { type: 'heading', text: 'What\'s driving Gullón\'s AI visibility' },
      { type: 'paragraph', text: 'Analysis of the sources cited by AI models when recommending Gullón points to three key factors: strong editorial coverage in nutrition and consumer health publications (particularly OCU and El Comidista), a clear brand narrative around health-conscious ingredients that maps well to AI query patterns, and consistent mentions across both Spanish and English-language content.' },
      { type: 'paragraph', text: 'The brand\'s positioning as "healthy biscuits" — a segment they pioneered in Spain — gives AI models a clear and distinctive reason to recommend them over competitors when queries include health-related qualifiers, which represent a significant portion of category searches.' },
      { type: 'heading', text: 'Challengers and the gap' },
      { type: 'paragraph', text: 'Fontaneda (score: 71) and Lotus (64) occupy second and third positions, but the gap to the leader is meaningful. Fontaneda\'s stable score suggests it has reached a ceiling with its current digital presence strategy. Lotus, despite its premium positioning and strong social media following, continues to underperform in AI compared to its market share.' },
      { type: 'paragraph', text: 'The Lotus case is instructive: brand salience in social media does not directly translate to AI visibility. The models are drawing on editorial content, independent reviews, and structured data — not Instagram followers.' },
    ],
  },
  {
    slug: 'deepseek-r2-tech-brand-visibility',
    headline: 'DeepSeek R2 Launch Reshuffles Tech Brand Visibility in Asian Markets',
    summary: 'The Chinese AI model\'s new release has introduced significant divergence in tech brand recommendations compared to Western models, highlighting the geographic fragmentation of AI visibility.',
    author: '2laps Research',
    date: 'March 29, 2026',
    timeAgo: 'hace 8 horas',
    category: 'AI Models',
    categoryColor: '#6366F1',
    isBreaking: false,
    gradient: 'from-[#e0e7ff] to-[#6366f1]',
    emoji: '🌏',
    body: [
      { type: 'paragraph', text: 'The release of DeepSeek R2 last week has introduced the most significant divergence yet between Eastern and Western AI model recommendations. In categories like consumer electronics, software platforms, and e-commerce tools, the new model\'s recommendations differ substantially from those of GPT-4o and Gemini Ultra.' },
      { type: 'paragraph', text: 'For brands operating across markets, this creates a new layer of complexity: a brand\'s AI visibility is no longer a single global number but a patchwork of scores that varies by model, geography, and language — and those variations are growing.' },
      { type: 'heading', text: 'The DeepSeek divergence in ecommerce' },
      { type: 'paragraph', text: 'In ecommerce platform recommendations — a category 2laps tracks in Spain — DeepSeek R2 shows notably different preferences from its peers. While Shopify leads in GPT-4o, Gemini, and Claude recommendations with clear margin, DeepSeek R2 shows a more fragmented recommendation pattern, with WooCommerce and PrestaShop receiving higher relative scores.' },
      { type: 'paragraph', text: 'The likely explanation is training data composition: DeepSeek models are trained on a different corpus with higher representation of Chinese and Asian tech media, where Shopify\'s dominance narrative is less established and open-source alternatives are more prominently covered.' },
      { type: 'heading', text: 'Implications for global brands' },
      { type: 'paragraph', text: 'For brands with global ambitions, the DeepSeek R2 launch underscores the need to track AI visibility across models, not just aggregate consensus scores. A brand scoring 85 on GPT-4o might score 60 on DeepSeek — a gap that matters if a meaningful portion of target customers use the Chinese model.' },
      { type: 'paragraph', text: 'The fragmentation trend is likely to accelerate as more sovereign AI models emerge — EU-developed models, potential Japanese or Korean alternatives, and specialized vertical models. Managing AI visibility across this landscape will require systematic tracking, not occasional audits.' },
    ],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug)
}

export function getAllArticleSlugs(): string[] {
  return articles.map(a => a.slug)
}
