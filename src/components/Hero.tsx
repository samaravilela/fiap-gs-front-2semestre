type HeroProps = {
  title?: string
  subtitle?: string
  className?: string
}

export default function Hero({ 
  title = "Zyntra HE", 
  subtitle = "Transforme seu conhecimento técnico em lucro real. Capacitação completa em veículos híbridos e elétricos com até 7x mais retorno financeiro. O futuro da mobilidade moderna começa aqui.",
  className = ''
}: HeroProps) {
  return (
    <section className={`py-20 px-4 relative overflow-hidden min-h-screen flex items-center ${className}`} id="home">
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo centralizado no topo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/imagens/LOGO ZHE.png" 
              className="h-48 md:h-64 lg:h-80 w-auto object-contain drop-shadow-[0_0_40px_rgba(0,212,255,0.8)] transition-transform duration-300 hover:scale-105" 
              alt="Logo Zyntra HE" 
            />
          </div>

          {/* Título e subtítulo centralizados */}
          <div className="max-w-4xl mx-auto mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-center leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 text-center leading-relaxed max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Botões centralizados */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a 
              href="#cursos" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold text-lg hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)] text-center"
            >
              Começar Agora
            </a>
            <a 
              href="#sobre" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] text-center"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
