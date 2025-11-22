import { API_CONFIG } from '../config/api'

/**
 * Utilitário para testar a conexão com a API
 */
export async function testarConexaoAPI(): Promise<{
  sucesso: boolean
  mensagem: string
  url: string
}> {
  const url = `${API_CONFIG.BASE_URL}/usuarios`
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: API_CONFIG.DEFAULT_HEADERS,
      mode: 'cors',
    })
    
    return {
      sucesso: true,
      mensagem: `API acessível - Status: ${response.status}`,
      url
    }
  } catch (error: any) {
    return {
      sucesso: false,
      mensagem: `Erro ao conectar: ${error.message}`,
      url
    }
  }
}

