// Tipo genérico para respostas da API
export type ApiResponse<T> = {
  data: T | null
  status: number
  message?: string
}
