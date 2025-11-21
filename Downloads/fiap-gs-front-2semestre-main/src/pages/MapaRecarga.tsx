import { useState } from 'react'

export default function MapaRecarga() {
  const [searchTerm, setSearchTerm] = useState('')
  
  // Exemplo de pontos de recarga (em produção viria de uma API)
  const pontosRecarga = [
    { id: 1, nome: 'Posto Elétrico Centro', cidade: 'São Paulo', estado: 'SP', tipo: 'Rápida', disponivel: true },
    { id: 2, nome: 'Carregador Shopping', cidade: 'Rio de Janeiro', estado: 'RJ', tipo: 'Rápida', disponivel: true },
    { id: 3, nome: 'Eletroposto Norte', cidade: 'Belo Horizonte', estado: 'MG', tipo: 'Normal', disponivel: true },
    { id: 4, nome: 'Recarga Express', cidade: 'Curitiba', estado: 'PR', tipo: 'Rápida', disponivel: false },
    { id: 5, nome: 'EcoCarregador', cidade: 'Porto Alegre', estado: 'RS', tipo: 'Normal', disponivel: true }
  ]

  const filteredPontos = pontosRecarga.filter(ponto => 
    ponto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ponto.cidade.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ponto.estado.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
          <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6">
            <input
              type="text"
              placeholder="Buscar por cidade, estado ou nome do ponto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredPontos.map((ponto) => (
            <div 
              key={ponto.id}
              className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6 hover:bg-black/60 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{ponto.nome}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  ponto.disponivel 
                    ? 'bg-green-500/20 text-green-300 border border-green-400/30' 
                    : 'bg-red-500/20 text-red-300 border border-red-400/30'
                }`}>
                  {ponto.disponivel ? 'Disponível' : 'Indisponível'}
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-white/80">
                  <span>📍</span>
                  <span>{ponto.cidade}, {ponto.estado}</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <span>⚡</span>
                  <span>Tipo: {ponto.tipo}</span>
                </div>
              </div>

              <button className="w-full btn btn-primary py-2 hover:opacity-90 transition-opacity">
                Ver Detalhes
              </button>
            </div>
          ))}
        </div>

        {filteredPontos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/80 text-lg">Nenhum ponto de recarga encontrado com os critérios de busca.</p>
          </div>
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

