import { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormField from '../components/FormField'
import Button from '../components/Button'

type FormValues = {
  nomeCompleto: string
  email: string
  telefone: string
  metodoPagamento: string
}

export default function VendasNovaTurma() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>()

  const valorPromocional = 'R$ 2.997,00'
  const valorOriginal = 'R$ 4.997,00'

  const onSubmit = async (data: FormValues) => {
    console.log('Inscrição nova turma:', data)
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
            <h2 className="text-3xl font-bold text-white mb-4">Inscrição Realizada!</h2>
            <p className="text-white/90 text-lg mb-6">
              Sua inscrição foi realizada com sucesso! Você receberá um e-mail com as instruções de pagamento.
            </p>
            <Button variant="primary" onClick={() => setSubmitted(false)}>
              Nova Inscrição
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
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-[0_0_20px_rgba(0,212,255,0.5)]">
            <span className="text-3xl">🎓</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nova Turma - Inscrições Abertas
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
            Garanta sua vaga na próxima turma do Pacote Completo de Cursos. Valor promocional por tempo limitado!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">📦 Pacote Completo Inclui:</h2>
            <ul className="space-y-3 text-white/90">
              <li>✓ Curso Completo de VHE (120 horas)</li>
              <li>✓ Curso de Segurança NR10 (40 horas)</li>
              <li>✓ Educação Financeira para Mecânicos (20 horas)</li>
              <li>✓ Especialização em Baterias VHE (60 horas)</li>
              <li>✓ 8 Mentorias ao vivo</li>
              <li>✓ Imersão profissional gratuita</li>
              <li>✓ Tutor exclusivo</li>
              <li>✓ Certificados reconhecidos</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-600/30 to-green-500/30 border border-green-400/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">💰 Valor Promocional</h2>
            <div className="mb-6">
              <div className="text-4xl font-bold text-green-300 mb-2">{valorPromocional}</div>
              <div className="text-white/60 line-through text-lg">{valorOriginal}</div>
              <div className="text-green-300 font-semibold mt-2">Economia de R$ 2.000,00</div>
            </div>
            <div className="bg-black/40 rounded-xl p-4 mb-4">
              <p className="text-white/90 text-sm">
                ⚠️ Oferta válida apenas para esta turma. Vagas limitadas!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">💳 Métodos de Pagamento</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-black/30 rounded-xl p-4 border border-cyan-500/20">
              <div className="text-2xl mb-2">💳</div>
              <h3 className="text-white font-semibold mb-1">Cartão de Crédito</h3>
              <p className="text-white/80 text-sm">Até 12x sem juros</p>
            </div>
            <div className="bg-black/30 rounded-xl p-4 border border-cyan-500/20">
              <div className="text-2xl mb-2">💳</div>
              <h3 className="text-white font-semibold mb-1">Cartão de Débito</h3>
              <p className="text-white/80 text-sm">Desconto de 5%</p>
            </div>
            <div className="bg-black/30 rounded-xl p-4 border border-cyan-500/20">
              <div className="text-2xl mb-2">📄</div>
              <h3 className="text-white font-semibold mb-1">Boleto Bancário</h3>
              <p className="text-white/80 text-sm">Vencimento em 3 dias</p>
            </div>
            <div className="bg-black/30 rounded-xl p-4 border border-cyan-500/20">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="text-white font-semibold mb-1">PIX</h3>
              <p className="text-white/80 text-sm">Desconto de 10%</p>
            </div>
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Inscreva-se Agora</h2>
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

            <FormField label="Método de Pagamento Preferido" error={errors.metodoPagamento} required>
              <select
                {...register('metodoPagamento', { required: 'Selecione um método de pagamento' })}
                className="w-full p-4 border border-white/30 rounded-xl bg-white/10 text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all"
              >
                <option value="" className="bg-gray-800">Selecione...</option>
                <option value="credito" className="bg-gray-800">Cartão de Crédito (até 12x)</option>
                <option value="debito" className="bg-gray-800">Cartão de Débito (5% desconto)</option>
                <option value="boleto" className="bg-gray-800">Boleto Bancário</option>
                <option value="pix" className="bg-gray-800">PIX (10% desconto)</option>
              </select>
            </FormField>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="w-full mt-6"
            >
              {isSubmitting ? 'Processando...' : 'Confirmar Inscrição'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

