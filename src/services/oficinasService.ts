import { API_CONFIG } from '../config/api'
import type { ApiResponse } from '../types'

export interface Oficina {
  id?: number
  nomeEmpreendimento: string
  cnpj: string
  nomeEmpresa: string
  localizacao: string
  servicos: string
  cidade?: string
  estado?: string
  especialidade?: string
  avaliacao?: number
  status?: 'PENDENTE' | 'APROVADA' | 'REJEITADA'
  dataCriacao?: string
  dataAtualizacao?: string
}

class OficinasService {
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

  // CREATE - Criar oficina
  async criar(oficina: Oficina): Promise<ApiResponse<Oficina>> {
    return this.request<Oficina>('/oficinas', {
      method: 'POST',
      body: JSON.stringify(oficina),
    })
  }

  // READ - Listar todas
  async listarTodos(): Promise<ApiResponse<Oficina[]>> {
    return this.request<Oficina[]>('/oficinas')
  }

  // READ - Buscar por ID
  async buscarPorId(id: number): Promise<ApiResponse<Oficina>> {
    return this.request<Oficina>(`/oficinas/${id}`)
  }

  // READ - Buscar por cidade
  async buscarPorCidade(cidade: string): Promise<ApiResponse<Oficina[]>> {
    return this.request<Oficina[]>(`/oficinas/cidade/${encodeURIComponent(cidade)}`)
  }

  // READ - Buscar por estado
  async buscarPorEstado(estado: string): Promise<ApiResponse<Oficina[]>> {
    return this.request<Oficina[]>(`/oficinas/estado/${encodeURIComponent(estado)}`)
  }

  // UPDATE - Atualizar oficina
  async atualizar(id: number, oficina: Oficina): Promise<ApiResponse<Oficina>> {
    return this.request<Oficina>(`/oficinas/${id}`, {
      method: 'PUT',
      body: JSON.stringify(oficina),
    })
  }

  // DELETE - Deletar oficina
  async deletar(id: number): Promise<ApiResponse<void>> {
    return this.request<void>(`/oficinas/${id}`, {
      method: 'DELETE',
    })
  }

  // APROVAR - Aprovar oficina
  async aprovar(id: number): Promise<ApiResponse<Oficina>> {
    return this.request<Oficina>(`/oficinas/${id}/aprovar`, {
      method: 'POST',
    })
  }
}

export const oficinasService = new OficinasService()

