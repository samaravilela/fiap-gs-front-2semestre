import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { oficinasService } from '../services/oficinasService'
import type { Oficina } from '../services/oficinasService'
import FormField from '../components/FormField'
import Button from '../components/Button'

interface OficinaFormProps {
  oficina?: Oficina | null
  onClose: () => void
  onSuccess: () => void
}

type FormValues = {
  nomeEmpreendimento: string
  cnpj: string
  nomeEmpresa: string
  localizacao: string
  servicos: string
  cidade: string
  estado: string
  especialidade: string
}

export default function OficinaForm({ oficina, onClose, onSuccess }: OficinaFormProps) {
  const [error, setError] = useState<string | null>(null)
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>()

  useEffect(() => {
    if (oficina) {
      reset({
        nomeEmpreendimento: oficina.nomeEmpreendimento || '',
        cnpj: oficina.cnpj || '',
        nomeEmpresa: oficina.nomeEmpresa || '',
        localizacao: oficina.localizacao || '',
        servicos: oficina.servicos || '',
        cidade: oficina.cidade || '',
        estado: oficina.estado || '',
        especialidade: oficina.especialidade || '',
      })
    }
  }, [oficina, reset])

  const onSubmit = async (data: FormValues) => {
    setError(null)
    try {
      const oficinaData: Oficina = {
        nomeEmpreendimento: data.nomeEmpreendimento,
        cnpj: data.cnpj.replace(/\D/g, ''),
        nomeEmpresa: data.nomeEmpresa,
        localizacao: data.localizacao,
        servicos: data.servicos,
        cidade: data.cidade,
        estado: data.estado,
        especialidade: data.especialidade,
      }

      let response
      if (oficina?.id) {
        response = await oficinasService.atualizar(oficina.id, oficinaData)
      } else {
        response = await oficinasService.criar(oficinaData)
      }

      if (response.data) {
        onSuccess()
      } else {
        setError(response.message || 'Erro ao salvar oficina')
      }
    } catch (err) {
      setError('Erro ao conectar com o servidor')
    }
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black/90 border border-cyan-500/30 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            {oficina ? 'Editar Oficina' : 'Cadastrar Oficina'}
          </h2>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormField label="Nome do Empreendimento" error={errors.nomeEmpreendimento} required>
            <input
              type="text"
              {...register('nomeEmpreendimento', { required: 'Nome é obrigatório' })}
              className="w-full p-3 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-cyan-400 focus:outline-none"
              placeholder="Nome da oficina"
            />
          </FormField>

          <FormField label="CNPJ" error={errors.cnpj} required>
            <input
              type="text"
              {...register('cnpj', { 
                required: 'CNPJ é obrigatório',
                pattern: { value: /^\d{14}$/, message: 'CNPJ deve conter 14 dígitos' }
              })}
              className="w-full p-3 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-cyan-400 focus:outline-none"
              placeholder="00000000000000"
            />
          </FormField>

          <FormField label="Nome da Empresa" error={errors.nomeEmpresa} required>
            <input
              type="text"
              {...register('nomeEmpresa', { required: 'Nome da empresa é obrigatório' })}
              className="w-full p-3 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-cyan-400 focus:outline-none"
              placeholder="Razão social"
            />
          </FormField>

          <FormField label="Localização" error={errors.localizacao} required>
            <textarea
              {...register('localizacao', { required: 'Localização é obrigatória' })}
              className="w-full p-3 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-cyan-400 focus:outline-none"
              placeholder="Endereço completo"
              rows={3}
            />
          </FormField>

          <FormField label="Serviços" error={errors.servicos} required>
            <textarea
              {...register('servicos', { required: 'Serviços são obrigatórios' })}
              className="w-full p-3 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-cyan-400 focus:outline-none"
              placeholder="Descrição dos serviços oferecidos"
              rows={4}
            />
          </FormField>

          <div className="grid grid-cols-2 gap-4">
            <FormField label="Cidade" error={errors.cidade}>
              <input
                type="text"
                {...register('cidade')}
                className="w-full p-3 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-cyan-400 focus:outline-none"
                placeholder="Cidade"
              />
            </FormField>

            <FormField label="Estado" error={errors.estado}>
              <input
                type="text"
                {...register('estado', { maxLength: 2 })}
                className="w-full p-3 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-cyan-400 focus:outline-none"
                placeholder="UF"
                maxLength={2}
              />
            </FormField>
          </div>

          <FormField label="Especialidade" error={errors.especialidade}>
            <input
              type="text"
              {...register('especialidade')}
              className="w-full p-3 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-cyan-400 focus:outline-none"
              placeholder="Ex: VHE Completo, Baterias, etc"
            />
          </FormField>

          {error && (
            <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200">
              {error}
            </div>
          )}

          <div className="flex gap-4 mt-6">
            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? 'Salvando...' : oficina ? 'Atualizar' : 'Cadastrar'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

