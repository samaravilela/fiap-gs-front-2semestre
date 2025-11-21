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
    <section className={`hero ${className}`} id="home">
      <div className="container grid gap-10 items-center grid-cols-1 md:grid-cols-2">
        <div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a 
              href="#cursos" 
              className="btn btn-primary px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity text-center"
            >
              Começar Agora
            </a>
            <a 
              href="#sobre" 
              className="btn btn-secondary px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity text-center"
            >
              Saiba Mais
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end order-first md:order-last">
          <img 
            src="/imagens/LOGO ZHE.png" 
            className="h-64 md:h-80 lg:h-96 w-auto object-contain drop-shadow-[0_0_30px_rgba(0,212,255,0.6)]" 
            alt="Logo Zyntra HE" 
          />
        </div>
      </div>
    </section>
  )
}
