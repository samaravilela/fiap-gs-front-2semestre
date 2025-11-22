/**
 * Utilitário para criptografia de senhas
 * Usa SHA-256 para criptografar senhas antes de enviar para a API
 */

/**
 * Criptografa uma string usando SHA-256
 * @param text - Texto a ser criptografado
 * @returns Hash SHA-256 em hexadecimal
 */
export async function sha256(text: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(text)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  return hashHex
}

/**
 * Criptografa uma senha para envio à API
 * @param senha - Senha em texto plano
 * @returns Senha criptografada em SHA-256
 */
export async function criptografarSenha(senha: string): Promise<string> {
  if (!senha) {
    throw new Error('Senha não pode ser vazia')
  }
  return sha256(senha)
}

