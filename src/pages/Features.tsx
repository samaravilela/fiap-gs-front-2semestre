import { Link } from 'react-router-dom'
import FeaturesSection from '../components/FeaturesSection'

export default function Features() {
  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-[0_0_20px_rgba(0,212,255,0.5)]">
            <span className="text-3xl">✨</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nossos Serviços
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
            Soluções completas para transformar conhecimento técnico em lucro real no mercado de veículos híbridos e elétricos
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full shadow-[0_0_10px_rgba(0,212,255,0.5)]"></div>
        </div>

        <FeaturesSection />

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Link 
            to="/cursos"
            className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 hover:bg-black/60 hover:border-cyan-400/50 transition-all duration-300 group"
          >
            <div className="text-4xl mb-4">📚</div>
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
              Educação e Formação
            </h2>
            <p className="text-white/90 mb-4">
              Cursos completos, certificações, mentorias e imersão profissional para capacitar você no mercado VHE.
            </p>
            <span className="text-cyan-300 font-semibold">Saiba mais →</span>
          </Link>

          <Link 
            to="/mapa-recarga"
            className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 hover:bg-black/60 hover:border-cyan-400/50 transition-all duration-300 group"
          >
            <div className="text-4xl mb-4">🗺️</div>
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
              Serviços para Usuários
            </h2>
            <p className="text-white/90 mb-4">
              Mapa de recarga, localização de oficinas, conteúdos exclusivos e suporte especializado para usuários de VHE.
            </p>
            <span className="text-cyan-300 font-semibold">Saiba mais →</span>
          </Link>

          <Link 
            to="/oficinas"
            className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 hover:bg-black/60 hover:border-cyan-400/50 transition-all duration-300 group"
          >
            <div className="text-4xl mb-4">🏢</div>
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
              Soluções para Oficinas
            </h2>
            <p className="text-white/90 mb-4">
              Cadastro de oficinas, geolocalização, programa de franquias e divulgação estratégica.
            </p>
            <span className="text-cyan-300 font-semibold">Saiba mais →</span>
          </Link>

        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-blue-600/30 to-cyan-500/30 rounded-3xl p-12 border border-cyan-500/30 shadow-[0_0_30px_rgba(0,102,255,0.3)]">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para começar?
          </h2>
          <p className="text-white/90 mb-6 text-lg">
            Escolha o serviço que melhor se adequa às suas necessidades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/cursos" 
              className="btn btn-primary px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Ver Cursos
            </Link>
            <Link 
              to="/faq" 
              className="btn btn-secondary px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Fazer Perguntas
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
