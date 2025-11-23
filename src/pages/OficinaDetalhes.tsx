import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { oficinasService } from '../services/oficinasService'
import type { Oficina } from '../services/oficinasService'
import { oficinaServicosService } from '../services/oficinaServicosService'
import type { OficinaServico } from '../services/oficinaServicosService'
import Button from '../components/Button'

export default function OficinaDetalhes() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [oficina, setOficina] = useState<Oficina | null>(null)
  const [servicos, setServicos] = useState<OficinaServico[]>([])
  const [loading, setLoading] = useState(true)
  const [loadingServicos, setLoadingServicos] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (id) {
      carregarOficina(Number(id))
      carregarServicos(Number(id))
    }
  }, [id])

  const carregarOficina = async (oficinaId: number) => {
    setLoading(true)
    setError(null)
    try {
      const response = await oficinasService.buscarPorId(oficinaId)
      if (response.data) {
        setOficina(response.data)
      } else {
        setError(response.message || 'Oficina não encontrada')
      }
    } catch (err) {
      setError('Erro ao carregar oficina')
    } finally {
      setLoading(false)
    }
  }

  const carregarServicos = async (oficinaId: number) => {
    setLoadingServicos(true)
    try {
      const response = await oficinaServicosService.listarTodos(oficinaId, true)
      if (response.data) {
        setServicos(response.data)
      }
    } catch (err) {
      console.error('Erro ao carregar serviços:', err)
    } finally {
      setLoadingServicos(false)
    }
  }

  if (loading) {
    return (
      <section className="py-20 px-4 relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
        <div className="container max-w-4xl mx-auto relative z-10 text-center">
          <p className="text-white/80 text-lg">Carregando oficina...</p>
        </div>
      </section>
    )
  }

  if (error || !oficina) {
    return (
      <section className="py-20 px-4 relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
        <div className="container max-w-4xl mx-auto relative z-10 text-center">
          <p className="text-red-400 text-lg mb-4">{error || 'Oficina não encontrada'}</p>
          <Button onClick={() => navigate('/oficinas')} variant="primary">
            Voltar para Oficinas
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
      
      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="mb-6">
          <Link 
            to="/oficinas" 
            className="text-cyan-400 hover:text-cyan-300 hover:underline inline-flex items-center gap-2"
          >
            ← Voltar para Oficinas
          </Link>
        </div>

        <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {oficina.nomeEmpreendimento || 'Oficina'}
          </h1>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {oficina.cidade && oficina.estado && (
              <div className="bg-black/60 rounded-xl p-4 border border-cyan-500/20">
                <p className="text-cyan-400 font-semibold mb-1">Localização</p>
                <p className="text-white">{oficina.cidade}, {oficina.estado}</p>
              </div>
            )}
            
            {oficina.especialidade && (
              <div className="bg-black/60 rounded-xl p-4 border border-cyan-500/20">
                <p className="text-cyan-400 font-semibold mb-1">Especialidade</p>
                <p className="text-white">{oficina.especialidade}</p>
              </div>
            )}

            {oficina.nomeEmpresa && (
              <div className="bg-black/60 rounded-xl p-4 border border-cyan-500/20">
                <p className="text-cyan-400 font-semibold mb-1">Nome da Empresa</p>
                <p className="text-white">{oficina.nomeEmpresa}</p>
              </div>
            )}

            {oficina.status && (
              <div className="bg-black/60 rounded-xl p-4 border border-cyan-500/20">
                <p className="text-cyan-400 font-semibold mb-1">Status</p>
                <p className="text-white capitalize">{oficina.status.toLowerCase()}</p>
              </div>
            )}
          </div>

          {oficina.localizacao && (
            <div className="mb-6">
              <div className="bg-black/60 rounded-xl p-4 border border-cyan-500/20">
                <p className="text-cyan-400 font-semibold mb-1">Endereço Completo</p>
                <p className="text-white">{oficina.localizacao}</p>
              </div>
            </div>
          )}

          {oficina.avaliacao !== undefined && oficina.avaliacao > 0 && (
            <div className="mb-6">
              <div className="bg-black/60 rounded-xl p-4 border border-cyan-500/20">
                <p className="text-cyan-400 font-semibold mb-1">Avaliação</p>
                <div className="flex items-center gap-2">
                  <span className="text-white text-xl font-bold">{oficina.avaliacao.toFixed(1)}</span>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i < Math.floor(oficina.avaliacao || 0) ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">Serviços Oferecidos</h2>
            {loadingServicos ? (
              <p className="text-white/60">Carregando serviços...</p>
            ) : servicos.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-4">
                {servicos.map((servico) => (
                  <div 
                    key={servico.id}
                    className="bg-black/60 rounded-xl p-4 border border-cyan-500/20 hover:border-cyan-400/40 transition-all"
                  >
                    <h3 className="text-white font-semibold text-lg mb-2">{servico.nome}</h3>
                    {servico.descricao && (
                      <p className="text-white/80 text-sm">{servico.descricao}</p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white/60">Nenhum serviço cadastrado para esta oficina.</p>
            )}
          </div>

          <div className="flex gap-4">
            <Button 
              onClick={() => navigate('/oficinas')} 
              variant="secondary"
            >
              Voltar
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

