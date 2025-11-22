type FooterProps = {
  showContactInfo?: boolean
  showPlatformLinks?: boolean
  className?: string
  companyName?: string
  tagline?: string
}

export default function Footer({ 
  showContactInfo = true, 
  showPlatformLinks = true, 
  className = '',
  companyName = "Zyntra HE",
  tagline = "\"Transformando conhecimento técnico em lucro real\""
}: FooterProps) {
  return (
    <footer className={`mt-16 flex flex-col gap-8 bg-black/60 backdrop-blur-md border-t border-cyan-500/30 pt-8 ${className}`}>
      <div className="container grid gap-8 grid-cols-1 md:grid-cols-3">
        <div>
          <h3 className="font-semibold text-lg text-white">{companyName}</h3>
          <p className="text-white/80 mt-2">{tagline}</p>
        </div>
        {showPlatformLinks && (
          <div>
            <h3 className="font-semibold text-white">Plataforma</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="/cursos" className="text-white/80 hover:text-white hover:underline">Cursos</a></li>
              <li><a href="/features" className="text-white/80 hover:text-white hover:underline">Serviços</a></li>
              <li><a href="/mapa-recarga" className="text-white/80 hover:text-white hover:underline">Mapa de Recarga</a></li>
              <li><a href="/oficinas" className="text-white/80 hover:text-white hover:underline">Oficinas</a></li>
              <li><a href="/faq" className="text-white/80 hover:text-white hover:underline">FAQ</a></li>
              <li><a href="/equipe" className="text-white/80 hover:text-white hover:underline">Equipe</a></li>
            </ul>
            <h3 className="font-semibold text-white mt-6">Suporte e Contato</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="/suporte" className="text-white/80 hover:text-white hover:underline">Suporte</a></li>
              <li><a href="/agendar-mentoria" className="text-white/80 hover:text-white hover:underline">Agendar Mentoria</a></li>
              <li><a href="/reagendar-mentoria" className="text-white/80 hover:text-white hover:underline">Reagendar Mentoria</a></li>
              <li><a href="/contato-tutores" className="text-white/80 hover:text-white hover:underline">Contato Tutores</a></li>
              <li><a href="/setor-financeiro" className="text-white/80 hover:text-white hover:underline">Setor Financeiro</a></li>
              <li><a href="/suporte-pedagogico" className="text-white/80 hover:text-white hover:underline">Suporte Pedagógico</a></li>
            </ul>
          </div>
        )}
        {showContactInfo && (
          <div>
            <h3 className="font-semibold text-white">Contato</h3>
            <ul className="mt-2 space-y-1 text-white/80">
              <li>📞 (11) 1234-5678</li>
              <li>✉️ contato@zyntrahe.com</li>
              <li>🏢 Brasil</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-cyan-500/30">
              <h3 className="font-semibold text-white mb-2">Parceiros</h3>
              <a 
                href="https://www.protecaocenter.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 hover:underline inline-flex items-center gap-2"
              >
                🛡️ Proteção Center - EPIs
              </a>
            </div>
            <div className="mt-4 pt-4 border-t border-cyan-500/30">
              <h3 className="font-semibold text-white mb-2">Eventos</h3>
              <ul className="space-y-1">
                <li><a href="/evento-imersao" className="text-white/80 hover:text-white hover:underline">Imersão Profissional</a></li>
                <li><a href="/eventos-presenciais" className="text-white/80 hover:text-white hover:underline">Eventos Presenciais</a></li>
                <li><a href="/vendas-nova-turma" className="text-white/80 hover:text-white hover:underline">Nova Turma</a></li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="border-t border-cyan-500/30">
        <div className="container text-sm text-white/60 flex flex-col md:flex-row items-center justify-between !mt-4 gap-4">
          <p>© 2025 Zyntra HE. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white hover:underline">Política de Privacidade</a>
            <a href="#" className="hover:text-white hover:underline">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
