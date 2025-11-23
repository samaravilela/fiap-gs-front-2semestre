import { API_CONFIG } from '../config/api'
import type { ApiResponse } from '../types'

export interface OficinaServico {
  id?: number
  oficinaId?: number
  oficina?: {
    id: number
    nomeEmpreendimento: string
  }
  nome: string
  descricao?: string
  ativo?: string
  dataCriacao?: string
  dataAtualizacao?: string
}

class OficinaServicosService {
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

  // CREATE - Criar serviço
  async criar(servico: OficinaServico): Promise<ApiResponse<OficinaServico>> {
    return this.request<OficinaServico>('/oficina-servicos', {
      method: 'POST',
      body: JSON.stringify(servico),
    })
  }

  // READ - Listar todos
  async listarTodos(oficinaId?: number, ativos?: boolean): Promise<ApiResponse<OficinaServico[]>> {
    const params = new URLSearchParams()
    if (oficinaId !== undefined) params.append('oficinaId', oficinaId.toString())
    if (ativos !== undefined) params.append('ativos', ativos.toString())
    
    const queryString = params.toString()
    const endpoint = queryString ? `/oficina-servicos?${queryString}` : '/oficina-servicos'
    return this.request<OficinaServico[]>(endpoint)
  }

  // READ - Buscar por ID
  async buscarPorId(id: number): Promise<ApiResponse<OficinaServico>> {
    return this.request<OficinaServico>(`/oficina-servicos/${id}`)
  }

  // UPDATE - Atualizar serviço
  async atualizar(id: number, servico: OficinaServico): Promise<ApiResponse<OficinaServico>> {
    return this.request<OficinaServico>(`/oficina-servicos/${id}`, {
      method: 'PUT',
      body: JSON.stringify(servico),
    })
  }

  // DELETE - Deletar serviço
  async deletar(id: number): Promise<ApiResponse<void>> {
    return this.request<void>(`/oficina-servicos/${id}`, {
      method: 'DELETE',
    })
  }
}

export const oficinaServicosService = new OficinaServicosService()

