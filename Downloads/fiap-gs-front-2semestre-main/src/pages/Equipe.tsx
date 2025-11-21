import { useState } from 'react'

type Integrante = {
  id: number
  nome: string
  rm: string
  curso: string
  foto: string
  linkedin?: string
  github?: string
}

const integrantes: Integrante[] = [
  {
    id: 1,
    nome: 'Altamir Lima',
    rm: '562906',
    curso: 'ITDSR',
    foto: '/imagens/Altamir.jpeg',
    linkedin: 'https://www.linkedin.com/in/altamir-lima',
    github: 'https://github.com/AltamirLima'
  },
  {
    id: 2,
    nome: 'Felipe Conte',
    rm: '562248',
    curso: 'ITDSR',
    foto: '/imagens/Felipe.jpeg',
    linkedin: 'https://www.linkedin.com/in/felipe-conte-ferreira-b85747354',
    github: 'https://github.com/FelipeConteFerreira'
  },
  {
    id: 3,
    nome: 'Samara Vilela',
    rm: '566133',
    curso: 'ITDSR',
    foto: '/imagens/samara.jpeg',
    linkedin: 'https://www.linkedin.com/in/samara-vilela/',
    github: 'https://github.com/samaravilela'
  }
]

export default function Equipe() {
  const [selectedIntegrante, setSelectedIntegrante] = useState<Integrante | null>(null)

  if (selectedIntegrante) {
    return (
      <section className="py-20 px-4 relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
        
        <div className="container max-w-4xl mx-auto relative z-10">
          <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <img
                  src={selectedIntegrante.foto}
                  alt={selectedIntegrante.nome}
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-cyan-500/50 shadow-[0_0_30px_rgba(0,212,255,0.5)]"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {selectedIntegrante.nome}
                </h1>
                <p className="text-xl text-white/80 mb-8">
                  RM {selectedIntegrante.rm} • {selectedIntegrante.curso}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  {selectedIntegrante.linkedin && (
                    <a
                      href={selectedIntegrante.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)]"
                    >
                      <img src="/imagens/Linkedin.png" alt="LinkedIn" className="w-5 h-5" />
                      LinkedIn
                    </a>
                  )}
                  
                  {selectedIntegrante.github && (
                    <a
                      href={selectedIntegrante.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)]"
                    >
                      <img src="/imagens/Github.png" alt="GitHub" className="w-5 h-5" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-cyan-500/30">
              <button
                onClick={() => setSelectedIntegrante(null)}
                className="w-full sm:w-auto px-8 py-3 bg-black/60 backdrop-blur-md border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-black/80 hover:border-cyan-400/50 transition-all duration-300"
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-[0_0_20px_rgba(0,212,255,0.5)]">
            <span className="text-3xl">👥</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nossa Equipe
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Conheça os integrantes que fazem parte do projeto Zyntra HE
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full shadow-[0_0_10px_rgba(0,212,255,0.5)]"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrantes.map((integrante) => (
            <div
              key={integrante.id}
              className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-8 hover:bg-black/60 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={integrante.foto}
                  alt={integrante.nome}
                  className="w-32 h-32 rounded-full object-cover border-4 border-cyan-500/50 shadow-[0_0_20px_rgba(0,212,255,0.4)] mb-6"
                />
                
                <h2 className="text-2xl font-bold text-white mb-2">
                  {integrante.nome}
                </h2>
                
                <p className="text-white/80 mb-6">
                  RM {integrante.rm} • {integrante.curso}
                </p>
                
                <button
                  onClick={() => setSelectedIntegrante(integrante)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)]"
                >
                  Ver Perfil
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

