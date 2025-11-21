import Hero from '../components/Hero'
import FeaturesSection from '../components/FeaturesSection'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      
      {/* Call to Action Section */}
      <section className="py-20 px-4 relative overflow-hidden" id="cursos">
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-blue-900/40 to-black/50"></div>
        <div className="container max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para transformar sua carreira?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Comece agora sua jornada no futuro da mobilidade moderna. Capacitação completa em veículos híbridos e elétricos com até 7x mais retorno financeiro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/cursos" 
              className="btn btn-primary px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Ver Cursos Disponíveis
            </Link>
            <Link 
              to="/features" 
              className="btn btn-secondary px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Conhecer Todos os Serviços
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
