export default function AboutSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden" id="sobre">
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-[0_0_20px_rgba(0,212,255,0.5)]">
            <span className="text-3xl">🚗</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre Nós
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Somos uma <strong>plataforma inovadora</strong> criada para <strong>valorizar e ampliar a vida financeira de mecânicos e profissionais da mobilidade moderna</strong>. Nosso propósito é impulsionar carreiras e transformar conhecimento técnico em lucro real.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4 shadow-[0_0_10px_rgba(0,212,255,0.5)]"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                <span className="text-3xl">💡</span>
                Nossa Proposta de Valor
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Conectamos a tradição da reparação automotiva com o futuro dos <strong className="text-blue-300">veículos híbridos e elétricos</strong>, um dos segmentos que mais crescem no mundo. Com uma metodologia exclusiva e resultados comprovados, oferecemos <strong className="text-2xl text-cyan-300">até 7 vezes mais retorno financeiro</strong> em relação ao modelo tradicional de atuação.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Como Funcionamos</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong>Módulos de estudo online</strong> com estrutura completa de aprendizado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong>Mentorias ao vivo</strong> com tutores especializados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong>Eventos presenciais</strong> para networking e prática</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong>Suporte totalmente humanizado</strong> com Tutor Exclusivo para cada aluno</span>
                </li>
              </ul>
            </div>
          </div>
                
          <div className="relative">
            <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Tutor Exclusivo</h3>
              <p className="text-white/90 mb-6 text-center">
                Cada aluno conta com o acompanhamento de um <strong>Tutor Exclusivo</strong>, preparado para orientar de forma integral:
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl p-6 border border-blue-400/30 text-center">
                  <div className="text-4xl mb-3">🔧</div>
                  <h4 className="text-white font-semibold mb-2">Dúvidas Técnicas</h4>
                  <p className="text-white/80 text-sm">Apoio pedagógico completo</p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-cyan-400/30 text-center">
                  <div className="text-4xl mb-3">💰</div>
                  <h4 className="text-white font-semibold mb-2">Orientação Financeira</h4>
                  <p className="text-white/80 text-sm">Gestão de lucros e precificação</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl p-6 border border-green-400/30 text-center col-span-2">
                  <div className="text-4xl mb-3">📈</div>
                  <h4 className="text-white font-semibold mb-2">Direcionamento Comercial</h4>
                  <p className="text-white/80 text-sm">Estratégias para crescimento do negócio</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-8 mt-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Nossos Públicos</h3>
          <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6 border border-cyan-400/30">
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                <span>🚗</span> Usuários de VHE
              </h4>
              <p className="text-white/90 text-sm">
                Usuários de veículos híbridos e elétricos que buscam suporte, segurança e serviços especializados para seus veículos.
              </p>
            </div>
                <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl p-6 border border-cyan-400/30">
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                <span>🔧</span> Futuros PRO Reparadores
              </h4>
              <p className="text-white/90 text-sm">
                Profissionais que desejam empreender e se destacar no mercado de reparação de veículos híbridos e elétricos, desde iniciantes até experientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
