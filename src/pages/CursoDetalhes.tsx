import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { cursosService } from '../services/cursosService'
import type { Curso } from '../services/cursosService'
import Button from '../components/Button'

export default function CursoDetalhes() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [curso, setCurso] = useState<Curso | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (id) {
      carregarCurso(Number(id))
    }
  }, [id])

  const carregarCurso = async (cursoId: number) => {
    setLoading(true)
    setError(null)
    try {
      const response = await cursosService.buscarPorId(cursoId)
      if (response.data) {
        setCurso(response.data)
      } else {
        setError(response.message || 'Curso não encontrado')
      }
    } catch (err) {
      setError('Erro ao carregar curso')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section className="py-20 px-4 relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
        <div className="container max-w-4xl mx-auto relative z-10 text-center">
          <p className="text-white/80 text-lg">Carregando curso...</p>
        </div>
      </section>
    )
  }

  if (error || !curso) {
    return (
      <section className="py-20 px-4 relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
        <div className="container max-w-4xl mx-auto relative z-10 text-center">
          <p className="text-red-400 text-lg mb-4">{error || 'Curso não encontrado'}</p>
          <Button onClick={() => navigate('/cursos')} variant="primary">
            Voltar para Cursos
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
            to="/cursos" 
            className="text-cyan-400 hover:text-cyan-300 hover:underline inline-flex items-center gap-2"
          >
            ← Voltar para Cursos
          </Link>
        </div>

        <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {curso.nome}
          </h1>
          
          {curso.descricao && (
            <p className="text-white/80 text-lg mb-6">
              {curso.descricao}
            </p>
          )}

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {curso.cargaHoraria && (
              <div className="bg-black/60 rounded-xl p-4 border border-cyan-500/20">
                <p className="text-cyan-400 font-semibold mb-1">Carga Horária</p>
                <p className="text-white">{curso.cargaHoraria} horas</p>
              </div>
            )}
            
            {curso.nivel && (
              <div className="bg-black/60 rounded-xl p-4 border border-cyan-500/20">
                <p className="text-cyan-400 font-semibold mb-1">Nível</p>
                <p className="text-white">{curso.nivel}</p>
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <Button 
              onClick={() => navigate('/cursos')} 
              variant="secondary"
            >
              Voltar
            </Button>
            <Button 
              onClick={() => navigate('/agendar-mentoria')} 
              variant="primary"
            >
              Agendar Mentoria
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

