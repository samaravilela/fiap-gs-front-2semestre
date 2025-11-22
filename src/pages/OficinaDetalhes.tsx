import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { oficinasService } from '../services/oficinasService'
import type { Oficina } from '../services/oficinasService'
import Button from '../components/Button'

export default function OficinaDetalhes() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [oficina, setOficina] = useState<Oficina | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (id) {
      carregarOficina(Number(id))
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

            {oficina.telefone && (
              <div className="bg-black/60 rounded-xl p-4 border border-cyan-500/20">
                <p className="text-cyan-400 font-semibold mb-1">Telefone</p>
                <a 
                  href={`tel:${oficina.telefone}`}
                  className="text-white hover:text-cyan-400 hover:underline"
                >
                  {oficina.telefone}
                </a>
              </div>
            )}

            {oficina.email && (
              <div className="bg-black/60 rounded-xl p-4 border border-cyan-500/20">
                <p className="text-cyan-400 font-semibold mb-1">Email</p>
                <a 
                  href={`mailto:${oficina.email}`}
                  className="text-white hover:text-cyan-400 hover:underline"
                >
                  {oficina.email}
                </a>
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <Button 
              onClick={() => navigate('/oficinas')} 
              variant="secondary"
            >
              Voltar
            </Button>
            {oficina.telefone && (
              <a 
                href={`tel:${oficina.telefone}`}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:from-blue-500 hover:to-cyan-400 transition-all"
              >
                Ligar
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

