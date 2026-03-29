interface Props {
  brand: string
  domain?: string
  size?: number
}

export function BrandLogo({ brand, domain, size = 28 }: Props) {
  const initials = brand
    .split(' ')
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase()

  if (!domain) {
    return (
      <div
        style={{ width: size, height: size, fontSize: size * 0.38 }}
        className="rounded-full bg-[#e5e7eb] flex items-center justify-center font-bold text-[#555] shrink-0"
      >
        {initials}
      </div>
    )
  }

  return (
    <img
      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
      alt={brand}
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className="rounded object-contain shrink-0"
    />
  )
}
