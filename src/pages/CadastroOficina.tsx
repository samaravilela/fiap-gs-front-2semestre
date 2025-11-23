import { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormField from '../components/FormField'
import Button from '../components/Button'

type FormValues = {
  nomeEmpreendimento: string
  cnpj: string
  nomeEmpresa: string
  localizacao: string
}

export default function CadastroOficina() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>()

  const onSubmit = async (data: FormValues) => {
    console.log('Cadastro de oficina:', data)
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
            <h2 className="text-3xl font-bold text-white mb-4">Oficina Cadastrada!</h2>
            <p className="text-white/90 text-lg mb-6">
              Seu cadastro foi realizado com sucesso. Nossa equipe entrará em contato para validar as informações.
            </p>
            <Button variant="primary" onClick={() => setSubmitted(false)}>
              Cadastrar Outra Oficina
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
            <span className="text-3xl">🔧</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cadastro de Oficina
          </h1>
          <p className="text-white/80">
            Cadastre sua oficina na plataforma e ganhe visibilidade nacional
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8"
        >
          <FormField label="Nome do Empreendimento" error={errors.nomeEmpreendimento} required>
            <input
              type="text"
              {...register('nomeEmpreendimento', { required: 'Nome do empreendimento é obrigatório' })}
              className="w-full p-4 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all"
              placeholder="Ex: Oficina VHE Premium"
            />
          </FormField>

          <FormField label="CNPJ da Empresa" error={errors.cnpj} required>
            <input
              type="text"
              {...register('cnpj', { 
                required: 'CNPJ é obrigatório',
                pattern: { value: /^\d{14}$/, message: 'CNPJ deve conter 14 dígitos' }
              })}
              className="w-full p-4 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all"
              placeholder="00000000000000"
            />
          </FormField>

          <FormField label="Nome da Empresa" error={errors.nomeEmpresa} required>
            <input
              type="text"
              {...register('nomeEmpresa', { required: 'Nome da empresa é obrigatório' })}
              className="w-full p-4 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all"
              placeholder="Razão social da empresa"
            />
          </FormField>

          <FormField label="Localização da Empresa" error={errors.localizacao} required>
            <textarea
              {...register('localizacao', { required: 'Localização é obrigatória' })}
              className="w-full p-4 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all min-h-[100px] resize-vertical"
              placeholder="Endereço completo: Rua, número, bairro, cidade, estado, CEP"
            />
          </FormField>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="w-full mt-6"
          >
            {isSubmitting ? 'Cadastrando...' : 'Cadastrar Oficina'}
          </Button>
        </form>
      </div>
    </section>
  )
}

