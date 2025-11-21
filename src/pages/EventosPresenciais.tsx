import { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormField from '../components/FormField'
import Button from '../components/Button'

type FormValues = {
  nomeCompleto: string
  email: string
  telefone: string
  tipoEvento: string
  mensagem: string
}

export default function EventosPresenciais() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>()

  const onSubmit = async (data: FormValues) => {
    console.log('Interesse em eventos:', data)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="py-20 px-4 relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
        <div className="container max-w-2xl mx-auto relative z-10 text-center">
          <div className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-2xl p-12">
            <div className="text-6xl mb-6">✅</div>
            <h2 className="text-3xl font-bold text-white mb-4">Interesse Registrado!</h2>
            <p className="text-white/90 text-lg mb-6">
              Seu interesse foi registrado. Você receberá informações sobre nossos eventos presenciais e palestras semestrais.
            </p>
            <Button variant="primary" onClick={() => setSubmitted(false)}>
              Registrar Novo Interesse
            </Button>
          </div>
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
            <span className="text-3xl">🎤</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Eventos Presenciais e Palestras Semestrais
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
            Participe de nossos eventos presenciais e palestras semestrais. Mantenha-se atualizado e conectado com a comunidade de profissionais VHE.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">📅 Eventos Presenciais</h2>
            <ul className="space-y-3 text-white/90">
              <li>✓ Imersão Profissional (2 dias)</li>
              <li>✓ Workshops práticos</li>
              <li>✓ Networking exclusivo</li>
              <li>✓ Certificados de participação</li>
            </ul>
          </div>

          <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">🎓 Palestras Semestrais</h2>
            <ul className="space-y-3 text-white/90">
              <li>✓ Atualizações tecnológicas</li>
              <li>✓ Tendências do mercado</li>
              <li>✓ Cases de sucesso</li>
              <li>✓ Especialistas convidados</li>
            </ul>
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Registre Seu Interesse</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
            <FormField label="Nome Completo" error={errors.nomeCompleto} required>
              <input
                type="text"
                {...register('nomeCompleto', { required: 'Nome completo é obrigatório' })}
                className="w-full p-4 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all"
                placeholder="Seu nome completo"
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

            <FormField label="Telefone" error={errors.telefone} required>
              <input
                type="tel"
                {...register('telefone', { required: 'Telefone é obrigatório' })}
                className="w-full p-4 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all"
                placeholder="(11) 90000-0000"
              />
            </FormField>

            <FormField label="Tipo de Evento de Interesse" error={errors.tipoEvento} required>
              <select
                {...register('tipoEvento', { required: 'Selecione um tipo' })}
                className="w-full p-4 border border-white/30 rounded-xl bg-white/10 text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all"
              >
                <option value="" className="bg-gray-800">Selecione...</option>
                <option value="imersao" className="bg-gray-800">Imersão Profissional</option>
                <option value="workshop" className="bg-gray-800">Workshops Práticos</option>
                <option value="palestra" className="bg-gray-800">Palestras Semestrais</option>
                <option value="todos" className="bg-gray-800">Todos os Eventos</option>
              </select>
            </FormField>

            <FormField label="Mensagem (opcional)">
              <textarea
                {...register('mensagem')}
                className="w-full p-4 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all min-h-[100px] resize-vertical"
                placeholder="Alguma observação ou interesse específico..."
              />
            </FormField>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="w-full mt-6"
            >
              {isSubmitting ? 'Registrando...' : 'Registrar Interesse'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

