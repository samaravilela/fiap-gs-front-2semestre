import { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormField from '../components/FormField'
import Button from '../components/Button'

type FormValues = {
  email: string
}

export default function EmpreendedorRecarga() {
  const [submitted, setSubmitted] = useState(false)
  const [showFormulario, setShowFormulario] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>()

  const onSubmit = async (data: FormValues) => {
    console.log('Email do empreendedor:', data)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSubmitted(true)
    // Após enviar o email, mostrar o formulário de inscrição
    setTimeout(() => {
      setShowFormulario(true)
    }, 2000)
  }

  if (showFormulario) {
    return (
      <section className="py-20 px-4 relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
        <div className="container max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-[0_0_20px_rgba(0,212,255,0.5)]">
              <span className="text-3xl">📋</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Formulário de Inscrição
            </h1>
            <p className="text-white/80">
              Preencha o formulário completo para se tornar um empreendedor
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8">
            <p className="text-white/90 text-center mb-6">
              O formulário completo foi enviado para seu e-mail. Verifique sua caixa de entrada.
            </p>
            <Button variant="primary" onClick={() => window.location.href = '/'} className="w-full">
              Voltar ao Início
            </Button>
          </div>
        </div>
      </section>
    )
  }

  if (submitted) {
    return (
      <section className="py-20 px-4 relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
        <div className="container max-w-2xl mx-auto relative z-10 text-center">
          <div className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-2xl p-12">
            <div className="text-6xl mb-6">📧</div>
            <h2 className="text-3xl font-bold text-white mb-4">E-mail Enviado!</h2>
            <p className="text-white/90 text-lg mb-6">
              O formulário de inscrição será enviado para seu e-mail em instantes...
            </p>
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
            <span className="text-3xl">🚀</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Seja um Empreendedor
          </h1>
          <p className="text-white/80 mb-2">
            Torne-se um empreendedor no ramo de Pontos de Recarga
          </p>
          <p className="text-white/60 text-sm">
            Envie seu e-mail e receberá automaticamente o formulário de inscrição
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8"
        >
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

          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="w-full mt-6"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar E-mail e Receber Formulário'}
          </Button>
        </form>
      </div>
    </section>
  )
}

