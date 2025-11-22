import { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormField from '../components/FormField'
import Button from '../components/Button'
import { mentoriasService } from '../services/mentoriasService'
import type { Mentoria } from '../services/mentoriasService'

type FormValues = {
  nomeCompleto: string
  cpf: string
  email: string
  telefone: string
  data: string
}

export default function AgendarMentoria() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>()

  const onSubmit = async (data: FormValues) => {
    setError(null)
    try {
      const mentoria: Mentoria = {
        nomeCompleto: data.nomeCompleto,
        cpf: data.cpf.replace(/\D/g, ''), // Remove caracteres não numéricos
        email: data.email,
        telefone: data.telefone,
        data: data.data,
      }

      const response = await mentoriasService.criar(mentoria)
      
      if (response.data) {
        setSubmitted(true)
      } else {
        setError(response.message || 'Erro ao agendar mentoria. Tente novamente.')
      }
    } catch (err) {
      setError('Erro ao conectar com o servidor. Verifique sua conexão.')
    }
  }

  if (submitted) {
    return (
      <section className="py-20 px-4 relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
        <div className="container max-w-2xl mx-auto relative z-10 text-center">
          <div className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-2xl p-12">
            <div className="text-6xl mb-6">✅</div>
            <h2 className="text-3xl font-bold text-white mb-4">Mentoria Agendada!</h2>
            <p className="text-white/90 text-lg mb-6">
              Seu agendamento foi realizado com sucesso. Você receberá um e-mail de confirmação em breve.
            </p>
            <Button variant="primary" onClick={() => setSubmitted(false)}>
              Agendar Outra Mentoria
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
      
      <div className="container max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-[0_0_20px_rgba(0,212,255,0.5)]">
            <span className="text-3xl">📅</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Agendar Mentoria
          </h1>
          <p className="text-white/80">
            Preencha os dados abaixo para agendar sua mentoria
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8"
        >
          <FormField label="Nome Completo" error={errors.nomeCompleto} required>
            <input
              type="text"
              {...register('nomeCompleto', { required: 'Nome completo é obrigatório' })}
              className="w-full p-4 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all"
              placeholder="Seu nome completo"
            />
          </FormField>

          <FormField label="CPF" error={errors.cpf} required>
            <input
              type="text"
              {...register('cpf', { 
                required: 'CPF é obrigatório',
                pattern: { value: /^\d{11}$/, message: 'CPF deve conter 11 dígitos' }
              })}
              className="w-full p-4 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all"
              placeholder="00000000000"
            />
          </FormField>

          <FormField label="E-mail" error={errors.email} required>
            <input
              type="email"
              {...register('email', { 
                required: 'E-mail é obrigatório',
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'E-mail inválido' }
              })}
              className="w-full p-4 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all"
              placeholder="seu@email.com"
            />
          </FormField>

          <FormField label="Telefone para Contato" error={errors.telefone} required>
            <input
              type="tel"
              {...register('telefone', { required: 'Telefone é obrigatório' })}
              className="w-full p-4 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all"
              placeholder="(11) 90000-0000"
            />
          </FormField>

          <FormField label="Data para Agendar" error={errors.data} required>
            <input
              type="date"
              {...register('data', { required: 'Data é obrigatória' })}
              className="w-full p-4 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all"
              min={new Date().toISOString().split('T')[0]}
            />
          </FormField>

          {error && (
            <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200">
              {error}
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="w-full mt-6"
          >
            {isSubmitting ? 'Agendando...' : 'Agendar Mentoria'}
          </Button>
        </form>
      </div>
    </section>
  )
}

