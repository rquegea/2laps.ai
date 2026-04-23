import { Market, Sector } from './types'

import abogados from '@/data/markets/abogados-mercantil-madrid.json'
import agencias from '@/data/markets/agencias-marketing-espana.json'
import bancos from '@/data/markets/bancos-online-espana.json'
import clinicas from '@/data/markets/clinicas-dentales-madrid.json'
import comida from '@/data/markets/comida-rapida-espana.json'
import cremas from '@/data/markets/cremas-faciales-espana.json'
import galletas from '@/data/markets/galletas-espana.json'
import hoteles from '@/data/markets/mejores-hoteles-barcelona.json'
import ecommerce from '@/data/markets/plataformas-ecommerce.json'
import seguros from '@/data/markets/seguros-coche-espana.json'
import universidades from '@/data/markets/universidades-ade-madrid.json'
import zapatillas from '@/data/markets/zapatillas-running-espana.json'

const allMarkets: Market[] = [
  abogados, agencias, bancos, clinicas, comida, cremas,
  galletas, hoteles, ecommerce, seguros, universidades, zapatillas,
] as unknown as Market[]

export function getAllMarkets(): Market[] {
  return [...allMarkets].sort(
    (a, b) => (b.rankings[0]?.consensusScore ?? 0) - (a.rankings[0]?.consensusScore ?? 0)
  )
}

export function getMarketBySlug(slug: string): Market | null {
  return allMarkets.find((m) => m.id === slug) ?? null
}

export function getMarketsBySector(sector: Sector): Market[] {
  return getAllMarkets().filter((m) => m.sector === sector)
}

export function getTrendingMarkets(): Market[] {
  return getAllMarkets()
    .filter((m) => m.rankings.some((r) => r.trend === 'up' && r.trendDelta >= 5))
    .slice(0, 6)
}

export function getSectors(): Sector[] {
  const markets = getAllMarkets()
  return [...new Set(markets.map((m) => m.sector))] as Sector[]
}

export function getAllBrands(): { brand: string; market: Market }[] {
  const brands: { brand: string; market: Market }[] = []
  for (const market of allMarkets) {
    for (const ranking of market.rankings) {
      brands.push({ brand: ranking.brand, market })
    }
  }
  return brands
}

export function getMarketSlugs(): string[] {
  return allMarkets.map((m) => m.id)
}
