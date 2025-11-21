export default function FeaturesSection() {
  const services = [
    {
      category: '🧠 Educação e Formação Profissional',
      items: [
        {
          icon: '📚',
          title: 'Cursos Online e Presenciais',
          description: 'Cursos completos sobre veículos híbridos e elétricos (VHE) com certificações reconhecidas no setor automotivo'
        },
        {
          icon: '🎓',
          title: 'Mentorias ao Vivo',
          description: '8 mentorias por ciclo com tutores humanizados e suporte especializado'
        },
        {
          icon: '🏆',
          title: 'Imersão Profissional',
          description: 'Imersão profissional gratuita ao final do curso para prática real'
        },
        {
          icon: '💰',
          title: 'Educação Financeira',
          description: 'Palestras sobre precificação, comportamento profissional e gestão de lucros'
        },
        {
          icon: '⚡',
          title: 'Curso NR10',
          description: 'Curso de segurança NR10 com foco em práticas seguras em alta tensão'
        }
      ]
    },
    {
      category: '🚗 Serviços para Usuários de VHE',
      items: [
        {
          icon: '🗺️',
          title: 'Mapa de Recarga',
          description: 'Mapa nacional de pontos de recarga atualizado em tempo real'
        },
        {
          icon: '🔍',
          title: 'Localização de Oficinas',
          description: 'Localização inteligente de oficinas especializadas em qualquer região do Brasil'
        },
        {
          icon: '📖',
          title: 'Conteúdos Exclusivos',
          description: 'Tutoriais sobre manutenção, performance e economia de veículos VHE'
        },
        {
          icon: '🤝',
          title: 'Suporte Humanizado',
          description: 'Atendimento humanizado e suporte especializado para usuários'
        },
        {
          icon: '🎪',
          title: 'Eventos e Workshops',
          description: 'Eventos e workshops com marcas e profissionais do setor'
        }
      ]
    },
    {
      category: '💼 Soluções para Oficinas',
      items: [
        {
          icon: '🏢',
          title: 'Cadastro de Oficinas',
          description: 'Cadastramento na plataforma com visibilidade nacional'
        },
        {
          icon: '📍',
          title: 'Geolocalização',
          description: 'Geolocalização em tempo real conectando clientes à oficina mais próxima'
        },
        {
          icon: '🔌',
          title: 'Franquias de Recarga',
          description: 'Programa de franquias de pontos de recarga para empreendedores'
        },
        {
          icon: '📢',
          title: 'Divulgação Estratégica',
          description: 'Parcerias comerciais e divulgação via tráfego digital e eventos'
        }
      ]
    },
    {
      category: '🤖 Tecnologia e Inovação',
      items: [
        {
          icon: '💻',
          title: 'Plataforma Integrada',
          description: 'Plataforma digital integrada com ambiente de estudos, suporte e acesso centralizado'
        }
      ]
    }
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden" id="servicos">
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-[0_0_20px_rgba(0,212,255,0.5)]">
            <span className="text-3xl">✨</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Serviços Oferecidos
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Soluções completas para transformar conhecimento técnico em lucro real
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4 shadow-[0_0_10px_rgba(0,212,255,0.5)]"></div>
        </div>

        <div className="space-y-12">
          {services.map((service, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                {service.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6 hover:bg-black/60 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                    <p className="text-white/90 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Nosso Objetivo Principal</h3>
          <p className="text-white/90 text-lg text-center max-w-3xl mx-auto leading-relaxed">
            Oferecer o conhecimento necessário para <strong className="text-blue-300">empreender no setor automobilístico do futuro</strong>, 
            capacitando desde quem nunca trocou uma roda até quem já atua no ramo. O aprendizado é progressivo, prático e direcionado às 
            <strong className="text-cyan-300"> oportunidades reais do mercado</strong>, um campo ainda pouco explorado, mas com 
            <strong className="text-cyan-300"> alto potencial de faturamento e empregabilidade</strong>.
          </p>
          <p className="text-white/80 text-center mt-6 text-xl font-semibold">
            Estamos construindo <strong className="text-cyan-300">a ponte entre o mecânico tradicional e o profissional do amanhã</strong> e o futuro já começou.
          </p>
        </div>
      </div>
    </section>
  )
}
