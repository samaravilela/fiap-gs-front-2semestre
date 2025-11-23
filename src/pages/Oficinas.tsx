import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { oficinasService } from '../services/oficinasService'
import type { Oficina } from '../services/oficinasService'
import Button from '../components/Button'
import OficinaForm from './OficinaForm'

export default function Oficinas() {
  const [searchTerm, setSearchTerm] = useState('')
  const [oficinas, setOficinas] = useState<Oficina[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    carregarOficinas()
  }, [])

  const carregarOficinas = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await oficinasService.listarTodos()
      if (response.data) {
        setOficinas(response.data)
      } else {
        setError(response.message || 'Erro ao carregar oficinas')
      }
    } catch (err) {
      setError('Erro ao conectar com o servidor')
    } finally {
      setLoading(false)
    }
  }

  const filteredOficinas = oficinas.filter(oficina => 
    oficina.nomeEmpreendimento?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    oficina.cidade?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    oficina.estado?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    oficina.especialidade?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-[0_0_20px_rgba(0,212,255,0.5)]">
            <span className="text-3xl">🔧</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Localização de Oficinas Especializadas
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
            Encontre oficinas especializadas em veículos híbridos e elétricos em qualquer região do Brasil. 
            Geolocalização em tempo real conectando você à oficina mais próxima.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="mb-8">
          <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6">
            <input
              type="text"
              placeholder="Buscar por cidade, estado, nome da oficina ou especialidade..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-white/80 text-lg">Carregando oficinas...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-400 text-lg mb-4">{error}</p>
            <Button onClick={carregarOficinas} variant="primary">
              Tentar Novamente
            </Button>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {filteredOficinas.map((oficina) => (
                <div 
                  key={oficina.id}
                  className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6 hover:bg-black/60 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{oficina.nomeEmpreendimento}</h3>
                      <div className="flex items-center gap-2 text-white/80 mb-2">
                        <span>📍</span>
                        <span>{oficina.cidade || 'N/A'}, {oficina.estado || 'N/A'}</span>
                      </div>
                      {oficina.avaliacao && (
                        <div className="flex items-center gap-1 mb-2">
                          <span className="text-yellow-400">⭐</span>
                          <span className="text-white font-semibold">{oficina.avaliacao}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    {oficina.especialidade && (
                      <span className="px-3 py-1 bg-blue-500/20 text-cyan-300 rounded-full text-sm border border-cyan-400/30">
                        {oficina.especialidade}
                      </span>
                    )}
                    {oficina.status && (
                      <span className={`ml-2 px-3 py-1 rounded-full text-sm border ${
                        oficina.status === 'APROVADA' 
                          ? 'bg-green-500/20 text-green-300 border-green-400/30'
                          : oficina.status === 'PENDENTE'
                          ? 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30'
                          : 'bg-red-500/20 text-red-300 border-red-400/30'
                      }`}>
                        {oficina.status}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    {oficina.id && (
                      <Link
                        to={`/oficinas/${oficina.id}`}
                        className="w-full btn btn-primary py-2 hover:opacity-90 transition-opacity text-center"
                      >
                        Ver Detalhes
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filteredOficinas.length === 0 && (
              <div className="text-center py-12">
                <p className="text-white/80 text-lg">Nenhuma oficina encontrada com os critérios de busca.</p>
              </div>
            )}
          </>
        )}

        <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-8 mt-12 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Sua Oficina na Plataforma</h2>
          <p className="text-white/90 text-center mb-6">
            Cadastre sua oficina na plataforma e ganhe visibilidade nacional. Conecte-se com clientes que precisam de serviços especializados em VHE.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-4xl mb-3">👁️</div>
              <h3 className="text-white font-semibold mb-2">Visibilidade Nacional</h3>
              <p className="text-white/80 text-sm">
                Apareça para clientes em todo o Brasil
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📍</div>
              <h3 className="text-white font-semibold mb-2">Geolocalização</h3>
              <p className="text-white/80 text-sm">
                Clientes encontram você facilmente
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📢</div>
              <h3 className="text-white font-semibold mb-2">Divulgação</h3>
              <p className="text-white/80 text-sm">
                Parcerias comerciais e eventos
              </p>
            </div>
          </div>
          <div className="text-center">
            <button 
              onClick={() => setShowForm(true)}
              className="btn btn-primary px-8 py-3 hover:opacity-90 transition-opacity"
            >
              Cadastrar Minha Oficina
            </button>
          </div>
        </div>

        {showForm && (
          <OficinaForm 
            oficina={null}
            onClose={() => setShowForm(false)}
            onSuccess={() => {
              setShowForm(false)
              carregarOficinas()
            }}
          />
        )}
      </div>
    </section>
  )
}

