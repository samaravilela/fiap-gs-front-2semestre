import { useState, useEffect } from 'react'
import { pontosRecargaService, type PontoRecarga } from '../services/pontosRecargaService'

export default function MapaRecarga() {
  const [searchTerm, setSearchTerm] = useState('')
  const [pontosRecarga, setPontosRecarga] = useState<PontoRecarga[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [tipoFiltro, setTipoFiltro] = useState<string>('')

  useEffect(() => {
    const carregarPontosRecarga = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await pontosRecargaService.listarTodos(
          tipoFiltro ? (tipoFiltro as 'AC' | 'DC' | 'AC_DC') : undefined,
          searchTerm || undefined
        )
        if (response.data) {
          setPontosRecarga(response.data)
        } else {
          setError(response.message || 'Erro ao carregar pontos de recarga')
        }
      } catch (err) {
        setError('Erro ao conectar com o servidor')
      } finally {
        setLoading(false)
      }
    }

    // Debounce para buscar quando o termo de busca mudar
    const timer = setTimeout(() => {
      carregarPontosRecarga()
    }, 500)

    return () => clearTimeout(timer)
  }, [searchTerm, tipoFiltro])

  const getTipoLabel = (tipo?: string) => {
    switch (tipo) {
      case 'AC':
        return 'AC (Corrente Alternada)'
      case 'DC':
        return 'DC (Corrente Contínua)'
      case 'AC_DC':
        return 'AC/DC (Híbrido)'
      default:
        return 'Não especificado'
    }
  }

  const filteredPontos = pontosRecarga.filter(ponto => {
    if (searchTerm) {
      const termo = searchTerm.toLowerCase()
      return (
        ponto.nome?.toLowerCase().includes(termo) ||
        ponto.endereco?.toLowerCase().includes(termo)
      )
    }
    return true
  })

  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-[0_0_20px_rgba(0,212,255,0.5)]">
            <span className="text-3xl">🗺️</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Mapa Nacional de Pontos de Recarga
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
            Encontre pontos de recarga para veículos híbridos e elétricos em todo o Brasil. 
            Mapa atualizado em tempo real com informações de disponibilidade e tipos de carregadores.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="mb-8">
          <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6 space-y-4">
            <input
              type="text"
              placeholder="Buscar por nome ou endereço..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <div className="flex gap-4">
              <select
                value={tipoFiltro}
                onChange={(e) => setTipoFiltro(e.target.value)}
                className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Todos os tipos</option>
                <option value="AC">AC (Corrente Alternada)</option>
                <option value="DC">DC (Corrente Contínua)</option>
                <option value="AC_DC">AC/DC (Híbrido)</option>
              </select>
            </div>
          </div>
        </div>

        {loading && (
          <div className="text-center py-12">
            <p className="text-white/80 text-lg">Carregando pontos de recarga...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-6 mb-8 text-center">
            <p className="text-red-200">{error}</p>
            <button
              onClick={carregarPontosRecarga}
              className="mt-4 btn btn-primary"
            >
              Tentar Novamente
            </button>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {filteredPontos.map((ponto) => (
                <div 
                  key={ponto.id}
                  className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6 hover:bg-black/60 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{ponto.nome}</h3>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                      {getTipoLabel(ponto.tipoRecarga)}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2 text-white/80">
                      <span>📍</span>
                      <span className="flex-1">{ponto.endereco}</span>
                    </div>
                    {ponto.tipoRecarga && (
                      <div className="flex items-center gap-2 text-white/80">
                        <span>⚡</span>
                        <span>Tipo: {getTipoLabel(ponto.tipoRecarga)}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filteredPontos.length === 0 && !loading && (
              <div className="text-center py-12">
                <p className="text-white/80 text-lg">Nenhum ponto de recarga encontrado com os critérios de busca.</p>
              </div>
            )}
          </>
        )}

        <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Como Funciona</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-white font-semibold mb-2">Busque</h3>
              <p className="text-white/80 text-sm">
                Encontre pontos de recarga próximos a você
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📍</div>
              <h3 className="text-white font-semibold mb-2">Localize</h3>
              <p className="text-white/80 text-sm">
                Veja a localização exata e informações do ponto
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔌</div>
              <h3 className="text-white font-semibold mb-2">Recarregue</h3>
              <p className="text-white/80 text-sm">
                Recarregue seu veículo com segurança
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

