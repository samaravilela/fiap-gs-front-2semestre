import { API_CONFIG } from '../config/api'
import type { ApiResponse } from '../types'

export interface Usuario {
  id?: number
  nome: string
  email: string
  senha?: string
  dataCriacao?: string
  dataAtualizacao?: string
}

export interface LoginRequest {
  email: string
  senha: string
}

export interface LoginResponse {
  usuario: Usuario
  token: string
}

class UsuariosService {
  private baseUrl: string

  constructor() {
    this.baseUrl = API_CONFIG.BASE_URL
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`
    
    console.log('Fazendo requisição:', {
      url,
      method: options.method || 'GET',
      baseUrl: this.baseUrl
    })
    
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
        mode: 'cors', // Garante que CORS está habilitado
        credentials: 'omit', // Não envia cookies automaticamente
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
      console.error('Erro na requisição:', {
        url,
        error: error.message,
        name: error.name,
        stack: error.stack
      })

      if (error.name === 'AbortError') {
        return {
          data: null,
          status: 408,
          message: 'Timeout: A requisição demorou muito para responder',
        }
      }

      // Erro de rede (Failed to fetch)
      if (error.message?.includes('Failed to fetch') || error.name === 'TypeError') {
        return {
          data: null,
          status: 0,
          message: `Erro de conexão: Não foi possível conectar com o servidor. Verifique se a API está rodando em ${this.baseUrl}`,
        }
      }

      return {
        data: null,
        status: 500,
        message: error.message || 'Erro ao conectar com o servidor',
      }
    }
  }

  // CREATE - Criar usuário
  async criar(usuario: Usuario): Promise<ApiResponse<Usuario>> {
    // Valida formato da senha
    if (usuario.senha && usuario.senha.length < 6) {
      return {
        data: null,
        status: 400,
        message: 'Senha deve ter no mínimo 6 caracteres'
      }
    }
    
    // O backend criptografa a senha automaticamente
    return this.request<Usuario>('/usuarios', {
      method: 'POST',
      body: JSON.stringify(usuario),
    })
  }

  // READ - Listar todos
  async listarTodos(): Promise<ApiResponse<Usuario[]>> {
    return this.request<Usuario[]>('/usuarios')
  }

  // READ - Buscar por ID
  async buscarPorId(id: number): Promise<ApiResponse<Usuario>> {
    return this.request<Usuario>(`/usuarios/${id}`)
  }

  // UPDATE - Atualizar usuário
  async atualizar(id: number, usuario: Usuario): Promise<ApiResponse<Usuario>> {
    // Valida formato da senha se fornecida
    if (usuario.senha && usuario.senha.length < 6) {
      return {
        data: null,
        status: 400,
        message: 'Senha deve ter no mínimo 6 caracteres'
      }
    }
    
    // O backend criptografa a senha automaticamente se fornecida
    return this.request<Usuario>(`/usuarios/${id}`, {
      method: 'PUT',
      body: JSON.stringify(usuario),
    })
  }

  // DELETE - Deletar usuário
  async deletar(id: number): Promise<ApiResponse<void>> {
    return this.request<void>(`/usuarios/${id}`, {
      method: 'DELETE',
    })
  }

  // LOGIN - Autenticar usuário
  async login(credenciais: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    // Valida formato da senha antes de enviar
    if (!credenciais.senha || credenciais.senha.length < 6) {
      return {
        data: null,
        status: 400,
        message: 'Senha deve ter no mínimo 6 caracteres'
      }
    }
    
    // Valida email
    if (!credenciais.email || !credenciais.email.trim()) {
      return {
        data: null,
        status: 400,
        message: 'Email é obrigatório'
      }
    }
    
    // O backend espera a senha em texto plano e criptografa internamente
    return this.request<LoginResponse>('/usuarios/login', {
      method: 'POST',
      body: JSON.stringify({
        email: credenciais.email.trim(),
        senha: credenciais.senha // Envia em texto plano - backend criptografa
      }),
    })
  }
}

export const usuariosService = new UsuariosService()

