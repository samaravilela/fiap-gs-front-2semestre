import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { tutoresService } from '../services/tutoresService'
import type { Tutor } from '../services/tutoresService'
import FormField from '../components/FormField'
import Button from '../components/Button'

interface TutorFormProps {
  tutor?: Tutor | null
  onClose: () => void
  onSuccess: () => void
}

type FormValues = {
  nome: string
  especialidade: string
  email: string
  telefone: string
}

export default function TutorForm({ tutor, onClose, onSuccess }: TutorFormProps) {
  const [error, setError] = useState<string | null>(null)
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>()

  useEffect(() => {
    if (tutor) {
      reset({
        nome: tutor.nome || '',
        especialidade: tutor.especialidade || '',
        email: tutor.email || '',
        telefone: tutor.telefone || '',
      })
    }
  }, [tutor, reset])

  const onSubmit = async (data: FormValues) => {
    setError(null)
    try {
      const tutorData: Tutor = {
        nome: data.nome,
        especialidade: data.especialidade,
        email: data.email,
        telefone: data.telefone,
        ativo: 'S',
      }

      let response
      if (tutor?.id) {
        response = await tutoresService.atualizar(tutor.id, tutorData)
      } else {
        response = await tutoresService.criar(tutorData)
      }

      if (response.data) {
        onSuccess()
      } else {
        setError(response.message || 'Erro ao salvar tutor')
      }
    } catch (err) {
      setError('Erro ao conectar com o servidor')
    }
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black/90 border border-cyan-500/30 rounded-2xl p-8 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            {tutor ? 'Editar Tutor' : 'Adicionar Tutor'}
          </h2>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormField label="Nome" error={errors.nome} required>
            <input
              type="text"
              {...register('nome', { required: 'Nome é obrigatório' })}
              className="w-full p-3 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-cyan-400 focus:outline-none"
              placeholder="Nome completo"
            />
          </FormField>

          <FormField label="Especialidade" error={errors.especialidade} required>
            <input
              type="text"
              {...register('especialidade', { required: 'Especialidade é obrigatória' })}
              className="w-full p-3 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-cyan-400 focus:outline-none"
              placeholder="Ex: Sistemas Elétricos e Baterias"
            />
          </FormField>

          <FormField label="Email" error={errors.email} required>
            <input
              type="email"
              {...register('email', { 
                required: 'Email é obrigatório',
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Email inválido' }
              })}
              className="w-full p-3 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-cyan-400 focus:outline-none"
              placeholder="tutor@zyntrahe.com"
            />
          </FormField>

          <FormField label="Telefone" error={errors.telefone} required>
            <input
              type="tel"
              {...register('telefone', { required: 'Telefone é obrigatório' })}
              className="w-full p-3 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-cyan-400 focus:outline-none"
              placeholder="(11) 98765-4321"
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
              {isSubmitting ? 'Salvando...' : tutor ? 'Atualizar' : 'Adicionar'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

