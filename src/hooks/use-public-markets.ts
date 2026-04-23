import { useState, useEffect, useCallback } from 'react'
import { publicApi, type PublicMercadoWithCategories, type PublicCategoryListItem } from '@/lib/api-client'
import { bundleToMarket } from '@/lib/market-mapper'
import type { Market, Sector } from '@/lib/types'

function mapTipoToSector(tipo: string): Sector {
  const map: Record<string, Sector> = {
    FMCG: 'FMCG',
    Health_Digital: 'Salud',
    Digital_SaaS: 'Tecnologia',
    Services: 'Legal',
  }
  return map[tipo] || 'Tecnologia'
}

/** Deduped sectors present in public queries. Drives the top nav. */
export function usePublicSectors() {
  const { categories, isLoading, error } = usePublicCategories()

  const sectors = Array.from(
    new Set(categories.map((c) => mapTipoToSector(c.tipo_mercado)))
  ).map((sector) => ({ sector, label: sector }))

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
          sector: mapTipoToSector(c.tipo_mercado),
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
