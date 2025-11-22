import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  id: string
  email: string
  name: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  isAuthenticated: boolean
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Verificar se há usuário salvo no localStorage
    const savedUser = localStorage.getItem('zyntra_user')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (e) {
        localStorage.removeItem('zyntra_user')
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Validação básica no frontend
      if (!email || !email.trim()) {
        throw new Error('Email é obrigatório')
      }
      
      if (!password || password.length < 6) {
        throw new Error('Senha deve ter no mínimo 6 caracteres')
      }

      const { usuariosService } = await import('../services/usuariosService')
      const response = await usuariosService.login({ 
        email: email.trim(), 
        senha: password 
      })
      
      if (response.data && response.data.usuario) {
        const userData: User = {
          id: response.data.usuario.id?.toString() || Date.now().toString(),
          email: response.data.usuario.email,
          name: response.data.usuario.nome || email.split('@')[0]
        }
        setUser(userData)
        localStorage.setItem('zyntra_user', JSON.stringify(userData))
        if (response.data.token) {
          localStorage.setItem('zyntra_token', response.data.token)
        }
        return true
      }
      
      // Se não retornou dados, verifica se há mensagem de erro
      if (response.message) {
        throw new Error(response.message)
      }
      
      return false
    } catch (err: any) {
      console.error('Erro no login:', {
        error: err,
        message: err.message,
        stack: err.stack
      })
      
      // Se for erro de conexão, fornece mensagem mais clara
      if (err.message?.includes('Failed to fetch') || err.message?.includes('conectar')) {
        throw new Error('Não foi possível conectar com o servidor. Verifique sua conexão e se a API está rodando.')
      }
      
      throw err // Propaga o erro para o componente tratar
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('zyntra_user')
  }

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isAuthenticated: !!user,
      isLoading
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

