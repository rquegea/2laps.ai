import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(' ')
}

export function countryFlag(code: string): string {
  const flags: Record<string, string> = {
    ES: '\u{1F1EA}\u{1F1F8}',
    MX: '\u{1F1F2}\u{1F1FD}',
    AR: '\u{1F1E6}\u{1F1F7}',
    US: '\u{1F1FA}\u{1F1F8}',
    GB: '\u{1F1EC}\u{1F1E7}',
  }
  return flags[code] || code
}

export function trendArrow(trend: 'up' | 'down' | 'stable'): string {
  const arrows: Record<string, string> = { up: '\u2191', down: '\u2193', stable: '\u2192' }
  return arrows[trend]
}

export function trendColor(trend: 'up' | 'down' | 'stable'): string {
  const colors: Record<string, string> = {
    up: 'text-emerald-400',
    down: 'text-red-400',
    stable: 'text-amber-400',
  }
  return colors[trend]
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })
}
