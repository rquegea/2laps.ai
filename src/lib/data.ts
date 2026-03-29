import { Market, Sector } from './types'
import fs from 'fs'
import path from 'path'

const marketsDir = path.join(process.cwd(), 'src/data/markets')

export function getAllMarkets(): Market[] {
  const files = fs.readdirSync(marketsDir).filter(f => f.endsWith('.json'))
  return files.map(file => {
    const content = fs.readFileSync(path.join(marketsDir, file), 'utf-8')
    return JSON.parse(content) as Market
  }).sort((a, b) => b.rankings[0]?.consensusScore - a.rankings[0]?.consensusScore)
}

export function getMarketBySlug(slug: string): Market | null {
  const filePath = path.join(marketsDir, `${slug}.json`)
  if (!fs.existsSync(filePath)) return null
  const content = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(content) as Market
}

export function getMarketsBySector(sector: Sector): Market[] {
  return getAllMarkets().filter(m => m.sector === sector)
}

export function getTrendingMarkets(): Market[] {
  return getAllMarkets()
    .filter(m => m.rankings.some(r => r.trend === 'up' && r.trendDelta >= 5))
    .slice(0, 6)
}

export function getSectors(): Sector[] {
  const markets = getAllMarkets()
  return [...new Set(markets.map(m => m.sector))] as Sector[]
}

export function getAllBrands(): { brand: string; market: Market }[] {
  const markets = getAllMarkets()
  const brands: { brand: string; market: Market }[] = []
  for (const market of markets) {
    for (const ranking of market.rankings) {
      brands.push({ brand: ranking.brand, market })
    }
  }
  return brands
}

export function getMarketSlugs(): string[] {
  return fs.readdirSync(marketsDir)
    .filter(f => f.endsWith('.json'))
    .map(f => f.replace('.json', ''))
}
