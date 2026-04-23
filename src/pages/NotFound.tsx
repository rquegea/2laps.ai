import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="px-4 lg:px-8 py-32 text-center">
      <h1 className="font-mono text-6xl font-bold text-[#c23b4c] mb-4">404</h1>
      <p className="text-lg text-[#1a1a1a] mb-2">Pagina no encontrada</p>
      <p className="text-sm text-[#888] mb-8">
        El mercado que buscas no existe o ha sido eliminado.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-2.5 bg-[#c23b4c] text-white text-sm rounded hover:bg-[#a83242] transition-colors"
      >
        Volver al terminal
      </Link>
    </div>
  )
}
