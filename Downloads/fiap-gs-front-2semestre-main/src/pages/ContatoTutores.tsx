export default function ContatoTutores() {
  const tutores = [
    {
      id: 1,
      nome: 'Carlos Silva',
      especialidade: 'Sistemas Elétricos e Baterias',
      email: 'carlos.silva@zyntrahe.com',
      telefone: '(11) 98765-4321',
      avatar: '👨‍🔧'
    },
    {
      id: 2,
      nome: 'Ana Paula Santos',
      especialidade: 'Diagnóstico e Reparação VHE',
      email: 'ana.santos@zyntrahe.com',
      telefone: '(11) 98765-4322',
      avatar: '👩‍🔧'
    },
    {
      id: 3,
      nome: 'Roberto Oliveira',
      especialidade: 'Segurança NR10 e Alta Tensão',
      email: 'roberto.oliveira@zyntrahe.com',
      telefone: '(11) 98765-4323',
      avatar: '👨‍💼'
    },
    {
      id: 4,
      nome: 'Mariana Costa',
      especialidade: 'Gestão Financeira e Precificação',
      email: 'mariana.costa@zyntrahe.com',
      telefone: '(11) 98765-4324',
      avatar: '👩‍💼'
    }
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-[0_0_20px_rgba(0,212,255,0.5)]">
            <span className="text-3xl">👥</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contato Direto com Tutores
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
            Entre em contato diretamente com nossos tutores especializados. Cada tutor está preparado para orientar você de forma integral.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tutores.map((tutor) => (
            <div
              key={tutor.id}
              className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 hover:bg-black/60 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="text-6xl">{tutor.avatar}</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-2">{tutor.nome}</h2>
                  <p className="text-cyan-400 mb-4">{tutor.especialidade}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-white/90">
                  <span className="text-xl">📧</span>
                  <a 
                    href={`mailto:${tutor.email}`}
                    className="hover:text-cyan-400 hover:underline transition-colors"
                  >
                    {tutor.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <span className="text-xl">📞</span>
                  <a 
                    href={`tel:${tutor.telefone}`}
                    className="hover:text-cyan-400 hover:underline transition-colors"
                  >
                    {tutor.telefone}
                  </a>
                </div>
              </div>

              <a
                href={`mailto:${tutor.email}?subject=Contato via Zyntra HE`}
                className="block w-full btn btn-primary py-3 text-center hover:opacity-90 transition-opacity"
              >
                Enviar E-mail
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 text-center">
          <p className="text-white/90 text-lg mb-4">
            Cada aluno conta com o acompanhamento de um <strong>Tutor Exclusivo</strong>, preparado para orientar de forma integral.
          </p>
          <p className="text-white/80">
            Seja em dúvidas técnicas, apoio pedagógico, orientação financeira ou direcionamento comercial.
          </p>
        </div>
      </div>
    </section>
  )
}

