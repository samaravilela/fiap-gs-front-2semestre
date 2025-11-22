import { API_CONFIG } from '../config/api'
import type { ApiResponse } from '../types'

export interface Curso {
  id?: number
  titulo: string
  descricao?: string
  duracao?: string
  formato?: string
  preco?: string
  url?: string
  ativo?: string
  dataCriacao?: string
  dataAtualizacao?: string
}

class CursosService {
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

  // CREATE - Criar curso
  async criar(curso: Curso): Promise<ApiResponse<Curso>> {
    return this.request<Curso>('/cursos', {
      method: 'POST',
      body: JSON.stringify(curso),
    })
  }

  // READ - Listar todos
  async listarTodos(ativos?: boolean): Promise<ApiResponse<Curso[]>> {
    const endpoint = ativos !== undefined ? `/cursos?ativos=${ativos}` : '/cursos'
    return this.request<Curso[]>(endpoint)
  }

  // READ - Buscar por ID
  async buscarPorId(id: number): Promise<ApiResponse<Curso>> {
    return this.request<Curso>(`/cursos/${id}`)
  }

  // UPDATE - Atualizar curso
  async atualizar(id: number, curso: Curso): Promise<ApiResponse<Curso>> {
    return this.request<Curso>(`/cursos/${id}`, {
      method: 'PUT',
      body: JSON.stringify(curso),
    })
  }

  // DELETE - Deletar curso
  async deletar(id: number): Promise<ApiResponse<void>> {
    return this.request<void>(`/cursos/${id}`, {
      method: 'DELETE',
    })
  }
}

export const cursosService = new CursosService()

