import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate, useLocation } from 'react-router-dom'
import FormField from './FormField'
import Button from './Button'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = (location.state as any)?.from?.pathname || '/'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const success = await login(email, password)
      if (success) {
        navigate(from, { replace: true })
      } else {
        setError('Email ou senha inválidos')
      }
    } catch (err: any) {
      // Exibe mensagem de erro específica se disponível
      setError(err.message || 'Erro ao fazer login. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
      
      <div className="container max-w-md mx-auto relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-[0_0_20px_rgba(0,212,255,0.5)]">
            <span className="text-3xl">🔐</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Login
          </h1>
          <p className="text-white/80">
            Acesse sua conta para continuar
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8"
        >
          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200">
              {error}
            </div>
          )}

          <FormField label="Email" required>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all"
              placeholder="seu@email.com"
              required
            />
          </FormField>

          <FormField label="Senha" required>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/60 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all"
              placeholder="••••••••"
              required
            />
          </FormField>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={loading}
            className="w-full mt-6"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </Button>

          <p className="text-white/60 text-sm text-center mt-6">
            Não tem uma conta? <a href="/cursos" className="text-cyan-400 hover:underline">Cadastre-se nos cursos</a>
          </p>
        </form>
      </div>
    </section>
  )
}

