import { API_CONFIG } from '../config/api'
import type { ApiResponse } from '../types'

/**
 * Classe para fazer requisições HTTP para APIs
 * Mantida para uso futuro caso seja necessário integrar com backend
 */
class ApiService {
  private baseUrl: string

  constructor() {
    this.baseUrl = API_CONFIG.BASE_URL
  }

  /**
   * Método genérico para fazer requisições HTTP
   */
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const baseUrl = this.baseUrl.endsWith('/') ? this.baseUrl.slice(0, -1) : this.baseUrl
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`
    const url = `${baseUrl}${cleanEndpoint}`
    
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

  // Métodos podem ser adicionados aqui conforme necessário para integração com backend
}

// Exporta uma instância singleton
export const apiService = new ApiService()
