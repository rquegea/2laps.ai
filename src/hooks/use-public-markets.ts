import { useState, useEffect, useCallback } from 'react'
import { publicApi, type PublicMercadoWithCategories, type PublicCategoryListItem } from '@/lib/api-client'
import { bundleToMarket } from '@/lib/market-mapper'
import type { Market, Sector } from '@/lib/types'

/**
 * Deduped mercados present in public queries — drives the top nav.
 *
 * We use `mercado_nombre` (the exact label from the admin panel) as the
 * grouping key instead of collapsing tipo_mercado into a hardcoded enum.
 * This way any mercado the admin creates — "FMCG", "Education Corporate
 * Training", etc. — appears verbatim as soon as one of its queries is
 * flagged `es_publico=true`.
 */
export function usePublicSectors() {
  const { categories, isLoading, error } = usePublicCategories()

  const seen = new Map<number, string>()
  for (const c of categories) {
    if (!seen.has(c.mercado_id)) seen.set(c.mercado_id, c.mercado_nombre)
  }
  const sectors = Array.from(seen.entries()).map(([mercadoId, nombre]) => ({
    mercadoId,
    sector: nombre,
    label: nombre,
  }))

  return { sectors, isLoading, error }
}

/** List all public categorias (flat) — what the /markets page renders. */
export function usePublicCategories() {
  const [categories, setCategories] = useState<PublicCategoryListItem[]>([])
  const [marketStubs, setMarketStubs] = useState<Market[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const refetch = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const data = await publicApi.listCategories()
      setCategories(data)
      setMarketStubs(
        data.map((c) => ({
          id: String(c.categoria_id),
          name: c.categoria_nombre,
          country: 'España',
          // Use mercado_nombre as the filter/group key so the landing matches admin labels 1:1
          sector: c.mercado_nombre as unknown as Sector,
          lastUpdated: new Date().toISOString(),
          promptsTracked: c.query_count,
          aiModels: [],
          prompts: [],
          rankings: [],
          sovDistribution: [],
          trendOverTime: [],
          sentimentByBrand: [],
          sovByModel: [],
          sourcesCited: [],
        }))
      )
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load categories')
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    refetch()
  }, [refetch])

  return { categories, marketStubs, isLoading, error, refetch }
}

/** Fetch a single mercado with its list of categorias. */
export function usePublicMarket(mercadoId: number | null) {
  const [mercado, setMercado] = useState<PublicMercadoWithCategories | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!mercadoId) return
    setIsLoading(true)
    setError(null)
    publicApi
      .getMarket(mercadoId)
      .then(setMercado)
      .catch((err) => setError(err instanceof Error ? err.message : 'Failed'))
      .finally(() => setIsLoading(false))
  }, [mercadoId])

  return { mercado, isLoading, error }
}

/** Fetch all data for a market detail page (keyed by categoria_id). */
export function usePublicMarketDetail(categoriaId: number | null) {
  const [market, setMarket] = useState<Market | null>(null)
  const [calendlyUrl, setCalendlyUrl] = useState<string | null>(null)
  const [mercadoName, setMercadoName] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!categoriaId) return
    setIsLoading(true)
    setError(null)
    publicApi
      .getCategoryBundle(categoriaId)
      .then((bundle) => {
        setMarket(bundleToMarket(bundle))
        setCalendlyUrl(bundle.category.calendly_url)
        setMercadoName(bundle.category.mercado_nombre)
      })
      .catch((err) => setError(err instanceof Error ? err.message : 'Failed'))
      .finally(() => setIsLoading(false))
  }, [categoriaId])

  return { market, calendlyUrl, mercadoName, isLoading, error }
}
