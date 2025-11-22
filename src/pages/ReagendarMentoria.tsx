import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { mentoriasService } from '../services/mentoriasService'
import type { Mentoria } from '../services/mentoriasService'
import Button from '../components/Button'
import FormField from '../components/FormField'
import { useForm } from 'react-hook-form'

type ReagendarFormValues = {
  data: string
}

export default function ReagendarMentoria() {
  const { user, isAuthenticated } = useAuth()
  const [mentorias, setMentorias] = useState<Mentoria[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [mentoriaSelecionada, setMentoriaSelecionada] = useState<Mentoria | null>(null)
  const [reagendando, setReagendando] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<ReagendarFormValues>()

  useEffect(() => {
    if (isAuthenticated && user?.email) {
      carregarMentorias()
    }
  }, [isAuthenticated, user])

  const carregarMentorias = async () => {
    if (!user?.email) return
    
    setLoading(true)
    setError(null)
    try {
      const response = await mentoriasService.buscarPorEmail(user.email)
      if (response.data) {
        // Filtrar apenas mentorias agendadas ou confirmadas
        const mentoriasAtivas = response.data.filter(
          m => m.status === 'AGENDADA' || m.status === 'CONFIRMADA'
        )
        setMentorias(mentoriasAtivas)
      } else {
        setError(response.message || 'Erro ao carregar mentorias')
      }
    } catch (err) {
      setError('Erro ao conectar com o servidor')
    } finally {
      setLoading(false)
    }
  }

  const onSubmitReagendar = async (data: ReagendarFormValues) => {
    if (!mentoriaSelecionada?.id) return
    
    setReagendando(true)
    try {
      const response = await mentoriasService.reagendar(mentoriaSelecionada.id, data.data)
      if (response.data) {
        alert('Mentoria reagendada com sucesso!')
        setMentoriaSelecionada(null)
        await carregarMentorias()
      } else {
        alert(response.message || 'Erro ao reagendar mentoria')
      }
    } catch (err) {
      alert('Erro ao reagendar mentoria')
    } finally {
      setReagendando(false)
    }
  }

  const formatarData = (data: string) => {
    if (!data) return 'Data não informada'
    const date = new Date(data)
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  const formatarStatus = (status?: string) => {
    const statusMap: Record<string, string> = {
      'AGENDADA': 'Agendada',
      'CONFIRMADA': 'Confirmada',
      'CANCELADA': 'Cancelada',
      'REALIZADA': 'Realizada'
    }
    return statusMap[status || ''] || status || 'Não informado'
  }

  if (!isAuthenticated) {
    return (
      <section className="py-20 px-4 relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
        <div className="container max-w-2xl mx-auto relative z-10 text-center">
          <div className="bg-black/40 backdrop-blur-md border border-red-500/30 rounded-2xl p-12">
            <div className="text-6xl mb-6">🔒</div>
            <h2 className="text-3xl font-bold text-white mb-4">Acesso Restrito</h2>
            <p className="text-white/90 text-lg mb-6">
              Você precisa estar logado para reagendar uma mentoria.
            </p>
            <Button variant="primary" onClick={() => window.location.href = '/login'}>
              Fazer Login
            </Button>
          </div>
        </div>
      </section>
    )
  }

  if (mentoriaSelecionada) {
    return (
      <section className="py-20 px-4 relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
        
        <div className="container max-w-2xl mx-auto relative z-10">
          <div className="mb-6">
            <button
              onClick={() => setMentoriaSelecionada(null)}
              className="text-cyan-400 hover:text-cyan-300 hover:underline inline-flex items-center gap-2"
            >
              ← Voltar para lista
            </button>
          </div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-[0_0_20px_rgba(0,212,255,0.5)]">
              <span className="text-3xl">🔄</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Reagendar Mentoria
            </h1>
            <p className="text-white/80">
              Escolha uma nova data para sua mentoria
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 mb-6">
            <h3 className="text-xl font-bold text-white mb-4">Mentoria Atual</h3>
            <div className="space-y-2 text-white/90">
              <p><strong>Nome:</strong> {mentoriaSelecionada.nomeCompleto}</p>
              <p><strong>Data Atual:</strong> {formatarData(mentoriaSelecionada.data)}</p>
              <p><strong>Status:</strong> {formatarStatus(mentoriaSelecionada.status)}</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmitReagendar)}
            className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8"
          >
            <FormField label="Nova Data" error={errors.data} required>
              <input
                type="date"
                {...register('data', { 
                  required: 'Data é obrigatória',
                  validate: (value) => {
                    const selectedDate = new Date(value)
                    const today = new Date()
                    today.setHours(0, 0, 0, 0)
                    if (selectedDate < today) {
                      return 'A data deve ser hoje ou no futuro'
                    }
                    return true
                  }
                })}
                className="w-full p-4 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all"
                min={new Date().toISOString().split('T')[0]}
              />
            </FormField>

            <div className="flex gap-4 mt-6">
              <Button
                type="button"
                variant="secondary"
                onClick={() => setMentoriaSelecionada(null)}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="primary"
                disabled={reagendando}
                className="flex-1"
              >
                {reagendando ? 'Reagendando...' : 'Reagendar'}
              </Button>
            </div>
          </form>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-[0_0_20px_rgba(0,212,255,0.5)]">
            <span className="text-3xl">🔄</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Reagendar Mentoria
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
            Selecione uma mentoria da lista abaixo para reagendar para uma nova data
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-white/80 text-lg">Carregando suas mentorias...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-400 text-lg mb-4">{error}</p>
            <Button onClick={carregarMentorias} variant="primary">
              Tentar Novamente
            </Button>
          </div>
        ) : mentorias.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-12">
              <div className="text-6xl mb-6">📅</div>
              <h2 className="text-2xl font-bold text-white mb-4">Nenhuma mentoria encontrada</h2>
              <p className="text-white/90 text-lg mb-6">
                Você não possui mentorias agendadas ou confirmadas para reagendar.
              </p>
              <Button variant="primary" onClick={() => window.location.href = '/agendar-mentoria'}>
                Agendar Nova Mentoria
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {mentorias.map((mentoria) => (
              <div
                key={mentoria.id}
                className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6 hover:bg-black/60 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{mentoria.nomeCompleto}</h3>
                  <div className="space-y-1 text-white/80 text-sm">
                    <p><strong>Email:</strong> {mentoria.email}</p>
                    <p><strong>Telefone:</strong> {mentoria.telefone}</p>
                    <p><strong>Data:</strong> {formatarData(mentoria.data)}</p>
                    <p>
                      <strong>Status:</strong>{' '}
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        mentoria.status === 'AGENDADA' 
                          ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-400/30'
                          : mentoria.status === 'CONFIRMADA'
                          ? 'bg-green-500/20 text-green-300 border border-green-400/30'
                          : 'bg-gray-500/20 text-gray-300 border border-gray-400/30'
                      }`}>
                        {formatarStatus(mentoria.status)}
                      </span>
                    </p>
                  </div>
                </div>
                
                <Button
                  onClick={() => setMentoriaSelecionada(mentoria)}
                  variant="primary"
                  className="w-full"
                >
                  Reagendar
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
