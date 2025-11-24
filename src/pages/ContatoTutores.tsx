import { useState, useEffect } from 'react'
import { tutoresService } from '../services/tutoresService'
import type { Tutor } from '../services/tutoresService'
import Button from '../components/Button'

export default function ContatoTutores() {
  const [tutores, setTutores] = useState<Tutor[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    carregarTutores()
  }, [])

  const carregarTutores = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await tutoresService.listarTodos(true) // Apenas ativos
      if (response.data) {
        setTutores(response.data)
      } else {
        setError(response.message || 'Erro ao carregar tutores')
      }
    } catch (err) {
      setError('Erro ao conectar com o servidor')
    } finally {
      setLoading(false)
    }
  }

  const getAvatar = (index: number) => {
    const avatares = ['👨‍🔧', '👩‍🔧', '👨‍💼', '👩‍💼']
    return avatares[index % avatares.length]
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-[0_0_20px_rgba(0,212,255,0.5)]">
            <span className="text-3xl">👥</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contato Direto com Tutores
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
            Entre em contato diretamente com nossos tutores especializados. Cada tutor está preparado para orientar você de forma integral.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-white/80 text-lg">Carregando tutores...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-400 text-lg mb-4">{error}</p>
            <Button onClick={carregarTutores} variant="primary">
              Tentar Novamente
            </Button>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 gap-8">
              {tutores.map((tutor, index) => (
                <div
                  key={tutor.id}
                  className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 hover:bg-black/60 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-6xl">{getAvatar(index)}</div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-2">{tutor.nome}</h2>
                      <p className="text-cyan-400 mb-4">{tutor.especialidade}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-white/90">
                      <span className="text-xl">📧</span>
                      <a 
                        href={`mailto:${tutor.email}`}
                        className="hover:text-cyan-400 hover:underline transition-colors"
                      >
                        {tutor.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-white/90">
                      <span className="text-xl">📞</span>
                      <a 
                        href={`tel:${tutor.telefone}`}
                        className="hover:text-cyan-400 hover:underline transition-colors"
                      >
                        {tutor.telefone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {tutores.length === 0 && (
              <div className="text-center py-12">
                <p className="text-white/80 text-lg">Nenhum tutor encontrado.</p>
              </div>
            )}
          </>
        )}

        <div className="mt-12 bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 text-center">
          <p className="text-white/90 text-lg mb-4">
            Cada aluno conta com o acompanhamento de um <strong>Tutor Exclusivo</strong>, preparado para orientar de forma integral.
          </p>
          <p className="text-white/80">
            Seja em dúvidas técnicas, apoio pedagógico, orientação financeira ou direcionamento comercial.
          </p>
        </div>

      </div>
    </section>
  )
}

