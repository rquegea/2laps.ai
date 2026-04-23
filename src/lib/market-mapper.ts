import type { Market, Ranking, SOVEntry, TrendPoint, SentimentEntry, SOVByModelEntry, AIModel, Sector } from './types'

// API response shapes
export interface ApiCategoryBundle {
  category: {
    id: number
    nombre: string
    descripcion: string | null
    mercado_id: number
    mercado_nombre: string | null
    tipo_mercado: string | null
    calendly_url: string | null
  }
  overview: {
    total_mentions: number
    avg_sentiment: number | null
    top_brand: string | null
    total_brands: number
    models_count: number
  }
  visibility: {
    sov_distribution: Array<{ marca: string; menciones: number; sov: number }>
    sov_trend: Array<{ fecha: string; marca: string; menciones: number }>
  }
  sentiment: {
    sentiment_distribution: Array<{
      marca: string
      avg_sentiment: number
      positive: number
      neutral: number
      negative: number
      mentions: number
    }>
  }
  sov_by_model: {
    sov_by_model: Array<Record<string, string | number>>
  }
  prompts: {
    prompts: Array<{ id: number; pregunta: string; proveedores: string[] }>
    ai_models: string[]
  }
}

export interface ApiMarketListItem {
  id: number
  nombre: string
  tipo_mercado: string
  descripcion: string | null
  teaser_description: string | null
  hero_image_url: string | null
  category_count: number
  query_count: number
}

const KNOWN_AI_MODELS: AIModel[] = ['chatgpt', 'gemini', 'perplexity', 'claude', 'grok', 'deepseek']

function normalizeModelName(model: string): AIModel {
  const lower = model.toLowerCase()
  if (lower.includes('gpt') || lower.includes('openai')) return 'chatgpt'
  if (lower.includes('gemini') || lower.includes('google')) return 'gemini'
  if (lower.includes('claude') || lower.includes('anthropic')) return 'claude'
  if (lower.includes('perplexity') || lower.includes('pplx')) return 'perplexity'
  if (lower.includes('grok') || lower.includes('xai')) return 'grok'
  if (lower.includes('deepseek')) return 'deepseek'
  // Fallback: find best match
  const found = KNOWN_AI_MODELS.find((m) => lower.includes(m))
  return found || 'chatgpt'
}

function mapTipoToSector(tipo: string | null | undefined): Sector {
  if (!tipo) return 'Tecnologia'
  const map: Record<string, Sector> = {
    FMCG: 'FMCG',
    Health_Digital: 'Salud',
    Digital_SaaS: 'Tecnologia',
    Services: 'Legal',
  }
  return map[tipo] || 'Tecnologia'
}

/** Convert API visibility.sov_trend to the website's TrendPoint[] format. */
function buildTrendOverTime(
  trend: Array<{ fecha: string; marca: string; menciones: number }>
): TrendPoint[] {
  // Group by YYYY-MM
  const grouped = new Map<string, Map<string, number>>()
  for (const row of trend) {
    if (!row.fecha) continue
    const month = row.fecha.slice(0, 7) // YYYY-MM
    if (!grouped.has(month)) grouped.set(month, new Map())
    const brands = grouped.get(month)!
    brands.set(row.marca, (brands.get(row.marca) || 0) + row.menciones)
  }

  const months = [...grouped.keys()].sort()
  return months.map((month) => {
    const brands = grouped.get(month)!
    const total = [...brands.values()].reduce((a, b) => a + b, 0) || 1
    const point: TrendPoint = { month }
    for (const [brand, mentions] of brands) {
      point[brand] = Math.round((mentions / total) * 1000) / 10 // SOV %
    }
    return point
  })
}

/** Compute trend direction + delta by comparing last two SOV values for each brand. */
function computeTrend(
  brand: string,
  trend: TrendPoint[]
): { direction: 'up' | 'down' | 'stable'; delta: number } {
  if (trend.length < 2) return { direction: 'stable', delta: 0 }
  const prev = trend[trend.length - 2]?.[brand]
  const curr = trend[trend.length - 1]?.[brand]
  if (typeof prev !== 'number' || typeof curr !== 'number') {
    return { direction: 'stable', delta: 0 }
  }
  const delta = Math.round((curr - prev) * 10) / 10
  if (Math.abs(delta) < 0.5) return { direction: 'stable', delta: 0 }
  return { direction: delta > 0 ? 'up' : 'down', delta: Math.abs(delta) }
}

/** Count how many AI models mentioned each brand (from sov_by_model pivot). */
function countModelsPerBrand(
  sovByModel: Array<Record<string, string | number>>
): Map<string, number> {
  const counts = new Map<string, number>()
  for (const row of sovByModel) {
    for (const [key, value] of Object.entries(row)) {
      if (key === 'model') continue
      if (typeof value === 'number' && value > 0) {
        counts.set(key, (counts.get(key) || 0) + 1)
      }
    }
  }
  return counts
}

export function bundleToMarket(bundle: ApiCategoryBundle): Market {
  const trendOverTime = buildTrendOverTime(bundle.visibility.sov_trend)
  const modelsPerBrand = countModelsPerBrand(bundle.sov_by_model.sov_by_model)

  const rankings: Ranking[] = bundle.visibility.sov_distribution.slice(0, 20).map((row, i) => {
    const { direction, delta } = computeTrend(row.marca, trendOverTime)
    return {
      position: i + 1,
      brand: row.marca,
      consensusScore: Math.round(row.sov),
      mentionedByModels: modelsPerBrand.get(row.marca) || 0,
      trend: direction,
      trendDelta: delta,
    }
  })

  const sovDistribution: SOVEntry[] = bundle.visibility.sov_distribution.map((row) => ({
    brand: row.marca,
    sov: row.sov,
  }))

  const sentimentByBrand: SentimentEntry[] = bundle.sentiment.sentiment_distribution.map((row) => ({
    brand: row.marca,
    positive: row.positive,
    neutral: row.neutral,
    negative: row.negative,
  }))

  // Aggregate raw model rows by normalized name (e.g. claude-3-7-sonnet + claude-4-5 → 'claude')
  const aggregated: Record<string, { counts: Record<string, number[]> }> = {}
  for (const row of bundle.sov_by_model.sov_by_model) {
    const canonical = normalizeModelName(String(row.model || 'unknown'))
    if (!aggregated[canonical]) aggregated[canonical] = { counts: {} }
    for (const [k, v] of Object.entries(row)) {
      if (k === 'model') continue
      if (typeof v !== 'number') continue
      if (!aggregated[canonical].counts[k]) aggregated[canonical].counts[k] = []
      aggregated[canonical].counts[k].push(v)
    }
  }
  const sovByModel: SOVByModelEntry[] = Object.entries(aggregated).map(([model, { counts }]) => {
    const entry: SOVByModelEntry = { model: model as AIModel }
    for (const [brand, values] of Object.entries(counts)) {
      // Average SOV% across raw model variants
      const avg = values.reduce((a, b) => a + b, 0) / values.length
      entry[brand] = Math.round(avg * 10) / 10
    }
    return entry
  })

  const aiModels: AIModel[] = [
    ...new Set([
      ...bundle.prompts.ai_models.map(normalizeModelName),
      ...sovByModel.map((r) => r.model),
    ]),
  ] as AIModel[]

  return {
    id: String(bundle.category.id),
    name: bundle.category.nombre,
    country: 'España',
    sector: mapTipoToSector(bundle.category.tipo_mercado),
    lastUpdated: new Date().toISOString(),
    promptsTracked: bundle.prompts.prompts.length,
    aiModels,
    prompts: bundle.prompts.prompts.map((p) => p.pregunta),
    rankings,
    sovDistribution,
    trendOverTime,
    sentimentByBrand,
    sovByModel,
    sourcesCited: [],
  }
}

/** Build a lightweight Market stub from the list endpoint (no detail data yet). */
export function listItemToMarketStub(item: ApiMarketListItem): Market {
  return {
    id: String(item.id),
    name: item.nombre,
    country: 'España',
    sector: mapTipoToSector(item.tipo_mercado),
    lastUpdated: new Date().toISOString(),
    promptsTracked: item.query_count,
    aiModels: [],
    prompts: [],
    rankings: [],
    sovDistribution: [],
    trendOverTime: [],
    sentimentByBrand: [],
    sovByModel: [],
    sourcesCited: [],
  }
}
