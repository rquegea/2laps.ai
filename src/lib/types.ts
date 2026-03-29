export type AIModel = 'chatgpt' | 'gemini' | 'perplexity' | 'claude' | 'grok' | 'deepseek'

export type TrendDirection = 'up' | 'down' | 'stable'

export type Sector =
  | 'FMCG'
  | 'Educacion'
  | 'Seguros'
  | 'Turismo'
  | 'Restauracion'
  | 'Belleza'
  | 'Finanzas'
  | 'Deporte'
  | 'Salud'
  | 'Legal'
  | 'Tecnologia'
  | 'Marketing'

export interface Ranking {
  position: number
  brand: string
  logo?: string
  domain?: string
  consensusScore: number
  mentionedByModels: number
  trend: TrendDirection
  trendDelta: number
}

export interface SOVEntry {
  brand: string
  sov: number
}

export interface TrendPoint {
  month: string
  [brand: string]: number | string
}

export interface SentimentEntry {
  brand: string
  positive: number
  neutral: number
  negative: number
}

export interface SOVByModelEntry {
  model: AIModel
  [brand: string]: number | string
}

export interface SourceCited {
  brand: string
  sources: string[]
}

export interface Market {
  id: string
  name: string
  country: string
  sector: Sector
  lastUpdated: string
  promptsTracked: number
  aiModels: AIModel[]
  prompts: string[]
  rankings: Ranking[]
  sovDistribution: SOVEntry[]
  trendOverTime: TrendPoint[]
  sentimentByBrand: SentimentEntry[]
  sovByModel: SOVByModelEntry[]
  sourcesCited: SourceCited[]
}
