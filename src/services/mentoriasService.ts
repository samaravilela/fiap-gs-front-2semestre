import { API_CONFIG } from '../config/api'
import type { ApiResponse } from '../types'

export interface Mentoria {
  id?: number
  nomeCompleto: string
  cpf: string
  email: string
  telefone: string
  data: string
  status?: 'AGENDADA' | 'CONFIRMADA' | 'CANCELADA' | 'REALIZADA'
  dataCriacao?: string
  tutorId?: number
  usuarioId?: number
}

class MentoriasService {
  private baseUrl: string

  constructor() {
    this.baseUrl = API_CONFIG.BASE_URL
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`
    
    const config: RequestInit = {
      ...options,
      headers: {
        ...API_CONFIG.DEFAULT_HEADERS,
        ...options.headers,
      },
    }

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT)

      const response = await fetch(url, {
        ...config,
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      const contentType = response.headers.get('content-type') || ''
      const responseText = await response.text()
      let data: T | null = null

      if (responseText) {
        if (contentType.includes('application/json')) {
          try {
            data = JSON.parse(responseText) as T
          } catch {
            data = responseText as T
          }
        } else {
          data = responseText as T
        }
      }

      if (!response.ok) {
        return {
          data: null,
          status: response.status,
          message: responseText || `Erro ${response.status}: ${response.statusText}`,
        }
      }

      return {
        data,
        status: response.status,
      }
    } catch (error: any) {
      if (error.name === 'AbortError') {
        return {
          data: null,
          status: 408,
          message: 'Timeout: A requisição demorou muito para responder',
        }
      }

      return {
        data: null,
        status: 500,
        message: error.message || 'Erro ao conectar com o servidor',
      }
    }
  }

  // CREATE - Criar mentoria
  async criar(mentoria: Mentoria): Promise<ApiResponse<Mentoria>> {
    return this.request<Mentoria>('/mentorias', {
      method: 'POST',
      body: JSON.stringify(mentoria),
    })
  }

  // READ - Listar todas
  async listarTodos(): Promise<ApiResponse<Mentoria[]>> {
    return this.request<Mentoria[]>('/mentorias')
  }

  // READ - Buscar por ID
  async buscarPorId(id: number): Promise<ApiResponse<Mentoria>> {
    return this.request<Mentoria>(`/mentorias/${id}`)
  }

  // UPDATE - Atualizar mentoria
  async atualizar(id: number, mentoria: Mentoria): Promise<ApiResponse<Mentoria>> {
    return this.request<Mentoria>(`/mentorias/${id}`, {
      method: 'PUT',
      body: JSON.stringify(mentoria),
    })
  }

  // DELETE - Deletar mentoria
  async deletar(id: number): Promise<ApiResponse<void>> {
    return this.request<void>(`/mentorias/${id}`, {
      method: 'DELETE',
    })
  }

  // CANCELAR - Cancelar mentoria
  async cancelar(id: number): Promise<ApiResponse<void>> {
    return this.request<void>(`/mentorias/${id}/cancelar`, {
      method: 'POST',
    })
  }
}

export const mentoriasService = new MentoriasService()

