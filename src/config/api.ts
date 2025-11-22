/**
 * Configuração da API
 * Define a URL base do backend Java
 */
export const API_CONFIG = {
  // URL base da API Java
  BASE_URL:
    import.meta.env.VITE_API_BASE_URL || 'https://fiap-gs-java-2semestre.onrender.com/api',
  
  // Timeout para requisições (em milissegundos)
  TIMEOUT: 60000, // Aumentado para 60s devido à latência
  
  // Headers padrão
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
}

