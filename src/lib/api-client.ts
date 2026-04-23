import type { ApiMarketListItem, ApiCategoryBundle } from './market-mapper'

const API_BASE = import.meta.env.VITE_API_URL || ''

async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  // Only set Content-Type when there's a body — GETs without it count as CORS
  // "simple requests" so the browser skips preflight against the public API.
  const method = (options?.method || 'GET').toUpperCase()
  const headers: Record<string, string> = {
    ...(method !== 'GET' && method !== 'HEAD' ? { 'Content-Type': 'application/json' } : {}),
    ...((options?.headers as Record<string, string>) || {}),
  }

  const res = await fetch(`${API_BASE}${endpoint}`, { ...options, headers })

  if (!res.ok) {
    throw new Error(`API ${res.status}: ${res.statusText}`)
  }

  return res.json()
}

export interface PublicMercadoWithCategories {
  id: number
  nombre: string
  tipo_mercado: string
  descripcion: string | null
  teaser_description: string | null
  hero_image_url: string | null
  calendly_url: string | null
  categories: Array<{
    id: number
    nombre: string
    descripcion: string | null
    query_count: number
  }>
}

export interface PublicCategoryListItem {
  categoria_id: number
  categoria_nombre: string
  categoria_descripcion: string | null
  mercado_id: number
  mercado_nombre: string
  tipo_mercado: string
  teaser_description: string | null
  hero_image_url: string | null
  query_count: number
}

export const publicApi = {
  listMarkets: () => apiFetch<ApiMarketListItem[]>('/api/public/markets'),

  listCategories: () => apiFetch<PublicCategoryListItem[]>('/api/public/categories'),

  getMarket: (mercadoId: number) =>
    apiFetch<PublicMercadoWithCategories>(`/api/public/markets/${mercadoId}`),

  getCategoryBundle: (categoriaId: number, periodo = '90d') =>
    apiFetch<ApiCategoryBundle>(`/api/public/categories/${categoriaId}/bundle?periodo=${periodo}`),
}
