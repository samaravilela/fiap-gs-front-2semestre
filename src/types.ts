// Tipo genérico para respostas da API
export type ApiResponse<T> = {
  data: T | null
  status: number
  message?: string
}

// Union Types - Status de operação
export type Status = 'pending' | 'loading' | 'success' | 'error'

// Union Types - Tipo de usuário
export type UserRole = 'admin' | 'student' | 'tutor' | 'guest'

// Union Types - Estado de formulário
export type FormState = 'idle' | 'submitting' | 'success' | 'error'

// Intersection Types - Usuário com permissões
export interface BaseUser {
  id: number
  nome: string
  email: string
}

export interface UserPermissions {
  canEdit: boolean
  canDelete: boolean
  canCreate: boolean
}

export type UserWithPermissions = BaseUser & UserPermissions

// Intersection Types - Entidade com metadados
export interface Timestamps {
  dataCriacao: string
  dataAtualizacao: string
}

export interface EntityMetadata {
  id: number
  ativo: boolean
}

export type EntityWithTimestamps<T> = T & Timestamps & EntityMetadata

// Union Types combinado com Intersection - Resposta de API com status
export type ApiResult<T> = 
  | ({ success: true } & { data: T })
  | ({ success: false } & { error: string; status: number })

// Exemplo de uso de Union Types para estados de componente
export type ComponentState = 
  | { type: 'idle' }
  | { type: 'loading' }
  | { type: 'success'; data: unknown }
  | { type: 'error'; message: string }
