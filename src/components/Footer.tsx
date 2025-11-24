import { Link } from 'react-router-dom'

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
              <li><Link to="/cursos" className="text-white/80 hover:text-white hover:underline">Cursos</Link></li>
              <li><Link to="/features" className="text-white/80 hover:text-white hover:underline">Serviços</Link></li>
              <li><Link to="/mapa-recarga" className="text-white/80 hover:text-white hover:underline">Mapa de Recarga</Link></li>
              <li><Link to="/oficinas" className="text-white/80 hover:text-white hover:underline">Oficinas</Link></li>
              <li><Link to="/faq" className="text-white/80 hover:text-white hover:underline">FAQ</Link></li>
              <li><Link to="/equipe" className="text-white/80 hover:text-white hover:underline">Equipe</Link></li>
            </ul>
            <h3 className="font-semibold text-white mt-6">Suporte e Contato</h3>
            <ul className="mt-2 space-y-1">
              <li><Link to="/suporte" className="text-white/80 hover:text-white hover:underline">Suporte</Link></li>
              <li><Link to="/agendar-mentoria" className="text-white/80 hover:text-white hover:underline">Agendar Mentoria</Link></li>
              <li><Link to="/reagendar-mentoria" className="text-white/80 hover:text-white hover:underline">Reagendar Mentoria</Link></li>
              <li><Link to="/contato-tutores" className="text-white/80 hover:text-white hover:underline">Contato Tutores</Link></li>
              <li><Link to="/setor-financeiro" className="text-white/80 hover:text-white hover:underline">Setor Financeiro</Link></li>
              <li><Link to="/suporte-pedagogico" className="text-white/80 hover:text-white hover:underline">Suporte Pedagógico</Link></li>
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
                <li><Link to="/evento-imersao" className="text-white/80 hover:text-white hover:underline">Imersão Profissional</Link></li>
                <li><Link to="/eventos-presenciais" className="text-white/80 hover:text-white hover:underline">Eventos Presenciais</Link></li>
                <li><Link to="/vendas-nova-turma" className="text-white/80 hover:text-white hover:underline">Nova Turma</Link></li>
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
