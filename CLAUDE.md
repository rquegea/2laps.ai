# 2LAPS — AI Market Intelligence Platform (Bloomberg-style)

## Project Overview
2laps is a public-facing market intelligence platform that shows what AI systems (ChatGPT, Gemini, Perplexity, Claude, Grok, DeepSeek) recommend across industries and categories — like a Bloomberg terminal for AI visibility data. The site is the commercial hub for 2laps by T&T (Truco y Trufa), a Madrid-based marketing intelligence company.

## Core Concept
Think Bloomberg meets Similarweb for AI recommendations. Users land on the site, browse markets/categories, see which brands AI recommends, and get hooked by the data. Free layer shows rankings and basic metrics. Premium unlocks trends, sentiment, model breakdown, and strategic analysis.

## Tech Stack
- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Data**: Static JSON files initially (no backend for v1 — data is pre-generated from 2laps engine and committed as JSON)
- **Analytics**: Vercel Analytics + Google Analytics 4

## Design Direction
- **NOT** generic SaaS / typical startup landing page
- **YES** data-dense, Bloomberg-terminal inspired, with a premium editorial feel
- Dark theme primary: near-black #0A0A0B backgrounds
- Accent: crimson #C23B4C (T&T brand color)
- Data accent: electric blue #3B82F6 for positive metrics, amber #F59E0B for neutral, crimson for negative
- Typography: monospace for data (JetBrains Mono or similar), clean sans-serif for copy (Instrument Sans or similar)
- Dense information layout — cards, tables, tickers — NOT big hero sections with stock photos
- The feel should be: "I just found the terminal that shows me what AI thinks about every market"

## Brand
- Product name: **2laps**
- Company: **T&T** (Truco y Trufa)
- Tagline candidates: "What AI recommends" / "El Bloomberg de la visibilidad IA" / "Every market. Every AI. One source of truth."
- Logo: use only "2laps" in the header, "by T&T" subtle
- CTA for leads: Calendly link → https://calendly.com/rodrigo-quesada-trucoytrufa/30min
- Contact: rodrigo.quesada@trucoytrufa.es

## Site Structure

### Public Pages (no auth)

#### 1. `/` — Home (The Terminal)
The homepage IS the product. No hero banner. The user lands directly on a Bloomberg-style market overview:
- **Top ticker bar**: scrolling horizontal bar showing trending data points ("Galletas España: Gullón #1 en 4/6 IAs ↑12%" / "Universidades ADE Madrid: EAE #2 ↓3%")
- **Market grid**: cards organized by sector (FMCG, Education, Sports, Legal, Finance, Travel, Tech...). Each card shows:
  - Category name + country flag
  - Top 3 recommended brands with small logos
  - AI Consensus Score (0-100)
  - Trend arrow (↑↓→) vs last period
  - Number of AI models tracked
  - Click → goes to `/market/[slug]`
- **Sidebar or top filters**: filter by sector, country, trending, new
- **"Check your brand" CTA**: prominent search bar — "¿Qué dice la IA de tu marca?" leads to gated mini-report or Calendly
- **Minimal footer**: 2laps by T&T, Madrid | Contact | Privacy | Login

#### 2. `/market/[slug]` — Market Detail Page
Example: `/market/galletas-espana`
- **Header**: Category name, country, last updated date, number of prompts tracked
- **FREE tier (visible to all)**:
  - Brand ranking table: Position, Brand, AI Consensus Score, # of AIs that mention it, trend
  - Simple bar chart: share of voice distribution across brands
  - "Pregunta tipo" section: shows the actual prompts used ("¿Cuáles son las mejores galletas en España?")
- **BLURRED/gated tier (teaser → CTA)**:
  - Trend over time chart (blurred with overlay "Desbloquea tendencias →")
  - Sentiment analysis by brand (blurred)
  - Breakdown by AI model (blurred)
  - Sources cited by AIs (blurred)
  - Strategic recommendations (blurred)
- **CTA at bottom**: "¿Quieres el análisis completo de tu mercado? Reserva 20 minutos" → Calendly

#### 3. `/markets` — All Markets Directory
- Searchable/filterable tracked markets
- Group by sector, country, or alphabetical
- Show total markets tracked, total brands monitored, total AI models

#### 4. `/about` — About 2laps
- What is 2laps, how it works (brief, visual)
- The team (T&T)
- Methodology: which AIs, how often, what prompts
- Trust signals: client logos (Planeta, KPMG, Dentons, Gullón — check with team)

#### 5. `/pricing` — Plans
- **Free**: Browse all markets, see rankings and basic SOV
- **Pro (€299/month)**: Unlock trends, sentiment, model breakdown, sources, alerts
- **Business (€999/month)**: Everything in Pro + custom markets, API access, reports, analyst support
- **Enterprise**: Custom — includes strategy, content (2see), managed service
- CTA: "Empieza gratis" / "Habla con nosotros"

#### 6. `/blog` — Insights (future, not v1)
- Market reports, GEO trends, methodology articles
- SEO play to become the cited source

### Protected Pages (future, not v1)
- `/dashboard` — Logged-in user's custom markets and alerts
- `/report/[id]` — Full report view

## Data Model (JSON files for v1)

```
/data/markets/
  galletas-espana.json
  universidades-ade-madrid.json
  seguros-coche-espana.json
  ...

Each market JSON:
{
  "id": "galletas-espana",
  "name": "Galletas",
  "country": "ES",
  "sector": "FMCG",
  "lastUpdated": "2026-03-25",
  "promptsTracked": 12,
  "aiModels": ["chatgpt", "gemini", "perplexity", "claude", "grok", "deepseek"],
  "prompts": [
    "¿Cuáles son las mejores galletas en España?",
    "Best cookie brands in Spain",
    "Mejores galletas para niños"
  ],
  "rankings": [
    {
      "position": 1,
      "brand": "Gullón",
      "logo": "/brands/gullon.png",
      "consensusScore": 87,
      "mentionedByModels": 5,
      "trend": "up",
      "trendDelta": 12
    },
    ...
  ],
  "sovDistribution": [
    { "brand": "Gullón", "sov": 34 },
    { "brand": "Fontaneda", "sov": 22 },
    ...
  ],
  // PREMIUM (not rendered in free, but data exists for future)
  "trendOverTime": [...],
  "sentimentByBrand": [...],
  "sovByModel": [...],
  "sourcesCited": [...]
}
```

## File Structure

```
/
├── CLAUDE.md                    # This file
├── next.config.ts
├── tailwind.config.ts
├── package.json
├── tsconfig.json
├── public/
│   ├── brands/                  # Brand logos (small PNGs)
│   ├── ai-models/               # AI model icons
│   └── og-image.png             # Social sharing image
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout (dark theme, fonts)
│   │   ├── page.tsx             # Home — The Terminal
│   │   ├── market/
│   │   │   └── [slug]/
│   │   │       └── page.tsx     # Market detail
│   │   ├── markets/
│   │   │   └── page.tsx         # All markets directory
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── pricing/
│   │   │   └── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── TickerBar.tsx
│   │   ├── market/
│   │   │   ├── MarketCard.tsx   # Card for market grid
│   │   │   ├── MarketGrid.tsx   # Grid layout
│   │   │   ├── RankingTable.tsx # Brand ranking table
│   │   │   ├── SOVChart.tsx     # Share of voice bar chart
│   │   │   ├── TrendChart.tsx   # Time series (premium/blurred)
│   │   │   └── BlurredSection.tsx # Premium gating overlay
│   │   ├── brand/
│   │   │   └── BrandChecker.tsx # "Check your brand" search
│   │   └── ui/                  # shadcn components
│   ├── lib/
│   │   ├── data.ts              # Load JSON market data
│   │   ├── types.ts             # TypeScript types
│   │   └── utils.ts             # Helpers
│   └── data/
│       └── markets/             # JSON files per market
│           ├── galletas-espana.json
│           ├── universidades-ade-madrid.json
│           └── ...
```

## Implementation Order

### Phase 1 — Foundation (do first)
1. Set up project structure and install dependencies
2. Configure Tailwind with custom colors and fonts
3. Set up globals.css with CSS variables
4. Build Header component (logo, nav links, search)
5. Build Footer component

### Phase 2 — The Terminal (home page)
6. Create TickerBar component (horizontal scrolling data)
7. Create MarketCard component
8. Create MarketGrid with sector filtering
9. Create BrandChecker search bar
10. Wire home page together

### Phase 3 — Market Detail
11. Create RankingTable component
12. Create SOVChart with Recharts
13. Create BlurredSection overlay for premium content
14. Create TrendChart (blurred/premium preview)
15. Wire market detail page with dynamic routing

### Phase 4 — Supporting Pages
16. Markets directory page (all markets grid with search)
17. Pricing page with tier comparison
18. About page

### Phase 5 — Data & Polish
19. Create 10-15 sample market JSON files with realistic data
20. Add Framer Motion animations (card hover, page transitions, ticker)
21. SEO: meta tags, OG images, structured data
22. Mobile responsive pass
23. Performance optimization

## Key Design Patterns

### Ticker Bar
```
[Galletas ES: Gullón #1 ↑12%] [Unis ADE Madrid: EAE #2 ↓3%] [Seguros Coche: Mapfre #1 →0%] ...
```
Scrolls continuously left. Monospace font. Each item clickable → market page.

### Market Card
```
┌─────────────────────────┐
│ 🇪🇸 Galletas             │
│ FMCG · España            │
│                           │
│ 1. Gullón      87 ↑12%  │
│ 2. Fontaneda   71 →      │
│ 3. Lotus       58 ↓3%   │
│                           │
│ 6 IAs · 12 prompts       │
│ Actualizado: 25 Mar 2026  │
└─────────────────────────┘
```

### Blurred Premium Section
Actual chart renders underneath but with CSS blur(8px) + overlay:
```
┌─────────────────────────────┐
│  ░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░░░ TENDENCIA MENSUAL ░░░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░  │
│                               │
│  🔒 Desbloquea tendencias    │
│  [Ver planes →]               │
└─────────────────────────────┘
```

## Important Rules
- Language: Spanish for UI copy, English for code/comments
- Currency in EUR
- Country codes use flag emojis
- The site should feel ALIVE with data, not like a marketing brochure
- Prioritize information density over whitespace
- Every data point should feel clickable/explorable
- The free tier should give enough value that people share it and come back
- The premium blur should create FOMO, not frustration — show enough that they know what they're missing
- Performance matters: static JSON + ISR means fast loads
- Mobile: the ticker and cards should work well on phone — this is a "check it on the train" product
- DO NOT add authentication, user accounts, or any backend in v1. Everything is static/pre-rendered.
- DO NOT delete or modify any existing files in the repo that are not part of this new project. Start fresh in a new directory or alongside existing code.
