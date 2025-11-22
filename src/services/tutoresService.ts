import { API_CONFIG } from '../config/api'
import type { ApiResponse } from '../types'

export interface Tutor {
  id?: number
  nome: string
  especialidade: string
  email: string
  telefone: string
  ativo?: string
  dataCriacao?: string
  dataAtualizacao?: string
}

class TutoresService {
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

  // CREATE - Criar tutor
  async criar(tutor: Tutor): Promise<ApiResponse<Tutor>> {
    return this.request<Tutor>('/tutores', {
      method: 'POST',
      body: JSON.stringify(tutor),
    })
  }

  // READ - Listar todos
  async listarTodos(ativos?: boolean): Promise<ApiResponse<Tutor[]>> {
    const endpoint = ativos !== undefined ? `/tutores?ativos=${ativos}` : '/tutores'
    return this.request<Tutor[]>(endpoint)
  }

  // READ - Buscar por ID
  async buscarPorId(id: number): Promise<ApiResponse<Tutor>> {
    return this.request<Tutor>(`/tutores/${id}`)
  }

  // UPDATE - Atualizar tutor
  async atualizar(id: number, tutor: Tutor): Promise<ApiResponse<Tutor>> {
    return this.request<Tutor>(`/tutores/${id}`, {
      method: 'PUT',
      body: JSON.stringify(tutor),
    })
  }

  // DELETE - Deletar tutor
  async deletar(id: number): Promise<ApiResponse<void>> {
    return this.request<void>(`/tutores/${id}`, {
      method: 'DELETE',
    })
  }
}

export const tutoresService = new TutoresService()

