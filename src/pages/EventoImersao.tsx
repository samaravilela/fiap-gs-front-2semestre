import { Link } from 'react-router-dom'

export default function EventoImersao() {
  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-[0_0_20px_rgba(0,212,255,0.5)]">
            <span className="text-3xl">🎯</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Imersão Profissional
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
            Evento presencial exclusivo para transformar sua carreira no mercado de veículos híbridos e elétricos
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">📅 Data e Local</h2>
            <p className="text-white/90 mb-4">
              <strong>Data:</strong> A ser divulgada<br />
              <strong>Local:</strong> A ser divulgado<br />
              <strong>Duração:</strong> 2 dias intensivos
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">🎓 O Que Você Vai Aprender</h2>
            <ul className="space-y-2 text-white/90">
              <li>✓ Práticas avançadas de diagnóstico</li>
              <li>✓ Técnicas de reparo em sistemas VHE</li>
              <li>✓ Segurança em alta tensão</li>
              <li>✓ Gestão financeira e precificação</li>
              <li>✓ Networking com profissionais</li>
            </ul>
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">💡 Por Que Participar?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-white font-semibold mb-2">Networking</h3>
              <p className="text-white/80 text-sm">
                Conecte-se com profissionais do setor
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="text-white font-semibold mb-2">Prática Real</h3>
              <p className="text-white/80 text-sm">
                Hands-on com veículos reais
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📜</div>
              <h3 className="text-white font-semibold mb-2">Certificação</h3>
              <p className="text-white/80 text-sm">
                Certificado de participação
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600/30 to-cyan-500/30 rounded-3xl p-12 border border-cyan-500/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Garanta Sua Vaga Agora!
          </h2>
          <p className="text-white/90 mb-6 text-lg">
            Vagas limitadas. Não perca esta oportunidade única de transformar sua carreira.
          </p>
          <a
            href="/vendas-nova-turma"
            className="btn btn-primary px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity inline-block"
          >
            Adquirir Ingresso
          </a>
        </div>
      </div>
    </section>
  )
}

