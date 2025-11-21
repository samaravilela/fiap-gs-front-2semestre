import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-[0_0_20px_rgba(0,212,255,0.5)]">
            <span className="text-3xl">🚗</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Sobre Nós
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full shadow-[0_0_10px_rgba(0,212,255,0.5)]"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text content */}
          <div className="space-y-6">
            <p className="text-lg text-white/90 leading-relaxed">
              Somos uma <strong>plataforma inovadora</strong> criada para <strong>valorizar e ampliar a vida financeira de mecânicos e profissionais da mobilidade moderna</strong>. 
              Nosso propósito é impulsionar carreiras e transformar conhecimento técnico em lucro real, conectando a tradição da reparação automotiva com o futuro dos 
              <strong> veículos híbridos e elétricos</strong>, um dos segmentos que mais crescem no mundo.
            </p>
            
            <p className="text-lg text-white/90 leading-relaxed">
              Com uma metodologia exclusiva e resultados comprovados, oferecemos <strong className="text-green-300 text-xl">até 7 vezes mais retorno financeiro</strong> em relação ao modelo tradicional de atuação. 
              Tudo isso através de <strong>módulos de estudo online</strong>, com estrutura completa de aprendizado, <strong>mentorias ao vivo</strong>, 
              <strong> eventos presenciais</strong> e um suporte totalmente <strong>humanizado</strong>.
            </p>
            
            <p className="text-lg text-white/90 leading-relaxed">
              Cada aluno conta com o acompanhamento de um <strong>Tutor Exclusivo</strong>, preparado para orientar de forma integral, seja em dúvidas técnicas, 
              apoio pedagógico, orientação financeira ou direcionamento comercial. Nosso compromisso vai muito além do ensino: é um suporte de ponta a ponta, 
              garantindo evolução, segurança e crescimento real.
            </p>
          </div>

          {/* Visual elements */}
          <div className="relative">
            <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl p-6 border border-blue-400/30">
                  <div className="text-3xl mb-3">📚</div>
                  <h3 className="text-white font-semibold mb-2">Educação</h3>
                  <p className="text-white/80 text-sm">Cursos completos e certificações</p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-cyan-400/30">
                  <div className="text-3xl mb-3">🤝</div>
                  <h3 className="text-white font-semibold mb-2">Mentoria</h3>
                  <p className="text-white/80 text-sm">Tutores exclusivos</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl p-6 border border-green-400/30">
                  <div className="text-3xl mb-3">💰</div>
                  <h3 className="text-white font-semibold mb-2">7x Mais Retorno</h3>
                  <p className="text-white/80 text-sm">Resultados comprovados</p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl p-6 border border-orange-400/30">
                  <div className="text-3xl mb-3">🚀</div>
                  <h3 className="text-white font-semibold mb-2">Crescimento</h3>
                  <p className="text-white/80 text-sm">Mercado em expansão</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Públicos Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Nossos Públicos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold text-white mb-4">Usuários de VHE</h3>
              <p className="text-white/90 leading-relaxed">
                Usuários de veículos híbridos e elétricos que buscam suporte, segurança e serviços especializados para seus veículos. 
                Oferecemos mapa de recarga, localização de oficinas, conteúdos exclusivos e suporte humanizado.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-white mb-4">Futuros PRO Reparadores</h3>
              <p className="text-white/90 leading-relaxed">
                Profissionais que desejam empreender e se destacar no mercado de reparação de veículos híbridos e elétricos. 
                Capacitamos desde quem nunca trocou uma roda até quem já atua no ramo, com aprendizado progressivo e prático.
              </p>
            </div>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold text-white mb-4">Nossa Missão</h2>
            <p className="text-white/90 leading-relaxed">
              Valorizar e ampliar a vida financeira de mecânicos e profissionais da mobilidade moderna, transformando conhecimento técnico em lucro real. 
              Oferecemos capacitação completa para empreender no setor automobilístico do futuro, conectando a tradição da reparação automotiva com o futuro dos veículos híbridos e elétricos.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8">
            <div className="text-4xl mb-4">👁️</div>
            <h2 className="text-2xl font-bold text-white mb-4">Nossa Visão</h2>
            <p className="text-white/90 leading-relaxed">
              Ser a plataforma de referência em educação e serviços para mobilidade moderna, construindo a ponte entre o mecânico tradicional e o profissional do amanhã. 
              Queremos ser reconhecidos como a principal referência em capacitação e suporte para o setor de veículos híbridos e elétricos no Brasil.
            </p>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8">
            <div className="text-5xl font-bold text-white mb-2">7x</div>
            <div className="text-white/80 text-lg">Mais Retorno Financeiro</div>
          </div>
          <div className="text-center bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8">
            <div className="text-5xl font-bold text-white mb-2">8</div>
            <div className="text-white/80 text-lg">Mentorias por Ciclo</div>
          </div>
          <div className="text-center bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8">
            <div className="text-5xl font-bold text-white mb-2">100%</div>
            <div className="text-white/80 text-lg">Suporte Humanizado</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600/30 to-cyan-500/30 rounded-3xl p-12 border border-cyan-500/30 shadow-[0_0_30px_rgba(0,102,255,0.3)]">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para transformar sua carreira?
          </h2>
          <p className="text-white/90 mb-6 text-lg">
            Comece agora sua jornada no futuro da mobilidade moderna
          </p>
          <Link 
            to="/cursos" 
            className="btn btn-primary px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity inline-block"
          >
            Ver Cursos Disponíveis
          </Link>
        </div>
      </div>
    </section>
  )
}
