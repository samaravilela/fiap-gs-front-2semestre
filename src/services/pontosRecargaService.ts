import { API_CONFIG } from '../config/api'
import type { ApiResponse } from '../types'

export type TipoRecarga = 'AC' | 'DC' | 'AC_DC'

export interface PontoRecarga {
  id?: number
  nome: string
  endereco: string
  tipoRecarga?: TipoRecarga
  dataCriacao?: string
  dataAtualizacao?: string
}

class PontosRecargaService {
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

  // CREATE - Criar ponto de recarga
  async criar(ponto: PontoRecarga): Promise<ApiResponse<PontoRecarga>> {
    return this.request<PontoRecarga>('/pontos-recarga', {
      method: 'POST',
      body: JSON.stringify(ponto),
    })
  }

  // READ - Listar todos
  async listarTodos(tipo?: TipoRecarga, busca?: string): Promise<ApiResponse<PontoRecarga[]>> {
    const params = new URLSearchParams()
    if (tipo) params.append('tipo', tipo)
    if (busca) params.append('busca', busca)
    
    const queryString = params.toString()
    const endpoint = queryString ? `/pontos-recarga?${queryString}` : '/pontos-recarga'
    return this.request<PontoRecarga[]>(endpoint)
  }

  // READ - Buscar por ID
  async buscarPorId(id: number): Promise<ApiResponse<PontoRecarga>> {
    return this.request<PontoRecarga>(`/pontos-recarga/${id}`)
  }

  // UPDATE - Atualizar ponto de recarga
  async atualizar(id: number, ponto: PontoRecarga): Promise<ApiResponse<PontoRecarga>> {
    return this.request<PontoRecarga>(`/pontos-recarga/${id}`, {
      method: 'PUT',
      body: JSON.stringify(ponto),
    })
  }

  // DELETE - Deletar ponto de recarga
  async deletar(id: number): Promise<ApiResponse<void>> {
    return this.request<void>(`/pontos-recarga/${id}`, {
      method: 'DELETE',
    })
  }
}

export const pontosRecargaService = new PontosRecargaService()

