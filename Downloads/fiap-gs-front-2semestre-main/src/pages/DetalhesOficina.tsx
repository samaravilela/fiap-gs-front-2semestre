import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

type Oficina = {
  id: number
  nome: string
  cidade: string
  estado: string
  especialidade: string
  avaliacao: number
  distancia: string
  endereco?: string
  telefone?: string
  email?: string
  horario?: string
  descricao?: string
}

const oficinas: Oficina[] = [
  { 
    id: 1, 
    nome: 'Oficina VHE Premium', 
    cidade: 'São Paulo', 
    estado: 'SP', 
    especialidade: 'VHE Completo', 
    avaliacao: 4.8, 
    distancia: '2.5 km',
    endereco: 'Av. Paulista, 1000 - Bela Vista',
    telefone: '(11) 3456-7890',
    email: 'contato@vhepremium.com.br',
    horario: 'Seg-Sex: 8h-18h | Sáb: 8h-12h',
    descricao: 'Especializada em veículos híbridos e elétricos, com equipamentos de última geração e técnicos certificados.'
  },
  { 
    id: 2, 
    nome: 'Auto Elétrica Moderna', 
    cidade: 'Rio de Janeiro', 
    estado: 'RJ', 
    especialidade: 'Baterias', 
    avaliacao: 4.6, 
    distancia: '5.1 km',
    endereco: 'Rua das Laranjeiras, 500 - Laranjeiras',
    telefone: '(21) 2345-6789',
    email: 'contato@autoletrica.com.br',
    horario: 'Seg-Sex: 7h-17h | Sáb: 8h-13h',
    descricao: 'Focada em sistemas de baterias para veículos elétricos, com diagnóstico preciso e reparo especializado.'
  },
  { 
    id: 3, 
    nome: 'Reparação Híbrida', 
    cidade: 'Belo Horizonte', 
    estado: 'MG', 
    especialidade: 'Híbridos', 
    avaliacao: 4.9, 
    distancia: '1.8 km',
    endereco: 'Av. Afonso Pena, 2000 - Centro',
    telefone: '(31) 3234-5678',
    email: 'contato@reparacaohibrida.com.br',
    horario: 'Seg-Sex: 8h-18h',
    descricao: 'Especialista em veículos híbridos, oferecendo serviços completos de manutenção e reparo.'
  },
  { 
    id: 4, 
    nome: 'EletroMecânica', 
    cidade: 'Curitiba', 
    estado: 'PR', 
    especialidade: 'Elétricos', 
    avaliacao: 4.7, 
    distancia: '3.2 km',
    endereco: 'Rua XV de Novembro, 800 - Centro',
    telefone: '(41) 3123-4567',
    email: 'contato@eletromecanica.com.br',
    horario: 'Seg-Sex: 8h-17h | Sáb: 8h-12h',
    descricao: 'Oficina moderna especializada em veículos 100% elétricos, com tecnologia de ponta.'
  },
  { 
    id: 5, 
    nome: 'Oficina do Futuro', 
    cidade: 'Porto Alegre', 
    estado: 'RS', 
    especialidade: 'VHE Completo', 
    avaliacao: 5.0, 
    distancia: '4.5 km',
    endereco: 'Av. Borges de Medeiros, 1500 - Centro Histórico',
    telefone: '(51) 3012-3456',
    email: 'contato@oficinadofuturo.com.br',
    horario: 'Seg-Sex: 8h-18h | Sáb: 8h-13h',
    descricao: 'Referência em veículos híbridos e elétricos no sul do país, com equipe altamente qualificada.'
  }
]

export default function DetalhesOficina() {
  const { oficinaId } = useParams<{ oficinaId: string }>()
  const navigate = useNavigate()
  const [oficina, setOficina] = useState<Oficina | null>(null)

  useEffect(() => {
    if (oficinaId) {
      const id = parseInt(oficinaId, 10)
      const oficinaEncontrada = oficinas.find(o => o.id === id)
      if (oficinaEncontrada) {
        setOficina(oficinaEncontrada)
      } else {
        // Redireciona se oficina não encontrada
        navigate('/oficinas', { replace: true })
      }
    }
  }, [oficinaId, navigate])

  if (!oficina) {
    return (
      <section className="py-20 px-4 relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
        <div className="container max-w-6xl mx-auto relative z-10 text-center">
          <p className="text-white text-xl">Carregando...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
      
      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="mb-8">
          <button
            onClick={() => navigate('/oficinas')}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
          >
            <span className="text-2xl">←</span>
            <span className="font-semibold">Voltar para Oficinas</span>
          </button>
        </div>

        <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="mb-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {oficina.nome}
                </h1>
                <div className="flex items-center gap-4 text-white/80 mb-4">
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    <span>{oficina.cidade}, {oficina.estado}</span>
                    <span className="text-blue-300">•</span>
                    <span>{oficina.distancia}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-white font-semibold">{oficina.avaliacao}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="px-4 py-2 bg-blue-500/20 text-cyan-300 rounded-full text-sm border border-cyan-400/30">
                    {oficina.especialidade}
                  </span>
                </div>
              </div>
            </div>

            {oficina.descricao && (
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                {oficina.descricao}
              </p>
            )}

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {oficina.endereco && (
                <div className="bg-black/60 backdrop-blur-md border border-cyan-500/20 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <span>📍</span>
                    Endereço
                  </h3>
                  <p className="text-white/80">{oficina.endereco}</p>
                </div>
              )}

              {oficina.telefone && (
                <div className="bg-black/60 backdrop-blur-md border border-cyan-500/20 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <span>📞</span>
                    Telefone
                  </h3>
                  <p className="text-white/80">{oficina.telefone}</p>
                </div>
              )}

              {oficina.email && (
                <div className="bg-black/60 backdrop-blur-md border border-cyan-500/20 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <span>✉️</span>
                    E-mail
                  </h3>
                  <p className="text-white/80">{oficina.email}</p>
                </div>
              )}

              {oficina.horario && (
                <div className="bg-black/60 backdrop-blur-md border border-cyan-500/20 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <span>🕐</span>
                    Horário de Funcionamento
                  </h3>
                  <p className="text-white/80">{oficina.horario}</p>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 btn btn-primary py-3 hover:opacity-90 transition-opacity">
                Contatar Oficina
              </button>
              <button className="flex-1 btn btn-secondary py-3 hover:opacity-90 transition-opacity">
                Ver no Mapa
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

