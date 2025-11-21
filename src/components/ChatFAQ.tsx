import { useState } from 'react'

const faqs = [
  {
    q: 'Como diagnosticar problemas em baterias de VHE?',
    a: (
      <div>
        <p>O diagnóstico de baterias em veículos híbridos e elétricos requer procedimentos específicos:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Verificação de tensão:</strong> Use multímetro apropriado para medir a tensão de cada módulo e célula da bateria</li>
          <li><strong>Análise de capacidade:</strong> Realize testes de carga e descarga para verificar a capacidade real vs. nominal</li>
          <li><strong>Inspeção térmica:</strong> Utilize termografia para identificar células com sobreaquecimento ou falhas</li>
          <li><strong>Diagnóstico por scanner:</strong> Conecte equipamento de diagnóstico OBD para ler códigos de erro do BMS (Battery Management System)</li>
          <li><strong>Verificação de isolamento:</strong> Teste a resistência de isolamento entre os terminais e a carcaça</li>
          <li><strong>Análise de histórico:</strong> Consulte o histórico de carregamento e ciclos da bateria através do sistema do veículo</li>
        </ul>
        <p className="mt-3"><strong>Importante:</strong> Sempre trabalhe com EPIs adequados e siga os protocolos de segurança para alta tensão.</p>
      </div>
    )
  },
  {
    q: 'Quais são os protocolos de segurança para trabalhar com alta tensão?',
    a: (
      <div>
        <p>O trabalho com sistemas de alta tensão em VHE exige rigorosos protocolos de segurança:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>EPIs obrigatórios:</strong> Luvas isolantes classe 00 (até 500V) ou classe 0 (até 1000V), óculos de proteção, calçados isolantes e uniforme não condutor</li>
          <li><strong>Desenergização:</strong> Sempre desconecte o sistema de alta tensão antes de qualquer intervenção, seguindo o procedimento do fabricante</li>
          <li><strong>Verificação de ausência de tensão:</strong> Use equipamento de teste adequado para confirmar que não há tensão presente</li>
          <li><strong>Bloqueio e etiquetagem:</strong> Implemente sistema de bloqueio (lockout/tagout) para prevenir religamento acidental</li>
          <li><strong>Zona de trabalho:</strong> Delimite área de trabalho e mantenha distância segura de outros profissionais</li>
          <li><strong>Capacitação:</strong> Apenas técnicos certificados e treinados devem trabalhar com sistemas de alta tensão</li>
          <li><strong>Equipamentos certificados:</strong> Utilize apenas ferramentas isoladas e certificadas para alta tensão</li>
          <li><strong>Primeiros socorros:</strong> Tenha plano de emergência e equipe treinada em primeiros socorros para choque elétrico</li>
        </ul>
      </div>
    )
  },
  {
    q: 'Como fazer manutenção preventiva em veículos elétricos?',
    a: (
      <div>
        <p>A manutenção preventiva em veículos elétricos difere significativamente dos veículos convencionais:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Bateria:</strong> Verifique estado de saúde (SOH), calibração do BMS, limpeza de conexões e inspeção visual de módulos</li>
          <li><strong>Sistema de recarga:</strong> Inspeção periódica do conector de carregamento, cabo e porta de carregamento do veículo</li>
          <li><strong>Fluido de refrigeração:</strong> Verifique nível e qualidade do fluido do sistema de refrigeração da bateria e do inversor</li>
          <li><strong>Filtros de ar:</strong> Substitua filtros do sistema de climatização e refrigeração da bateria conforme recomendação</li>
          <li><strong>Freios:</strong> Inspeção de pastilhas e discos (desgaste reduzido devido à frenagem regenerativa)</li>
          <li><strong>Suspensão e pneus:</strong> Alinhamento, balanceamento e verificação de pressão dos pneus (veículos elétricos são mais pesados)</li>
          <li><strong>Diagnóstico eletrônico:</strong> Leitura periódica de códigos de erro e atualização de software quando disponível</li>
          <li><strong>Inspeção visual:</strong> Verificação de cabos de alta tensão, conexões e sinais de corrosão ou danos</li>
        </ul>
        <p className="mt-3"><strong>Frequência:</strong> Siga o cronograma recomendado pelo fabricante, geralmente a cada 10.000-15.000 km ou 12 meses.</p>
      </div>
    )
  },
  {
    q: 'Quais ferramentas são necessárias para reparar VHE?',
    a: (
      <div>
        <p>O reparo de veículos híbridos e elétricos requer ferramentas especializadas:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Scanner de diagnóstico:</strong> Equipamento compatível com protocolos OBD específicos para VHE (ex: Launch, Autel, Snap-on)</li>
          <li><strong>Multímetro de alta tensão:</strong> Capaz de medir até 1000V DC com categoria de segurança CAT III ou IV</li>
          <li><strong>Ferramentas isoladas:</strong> Chaves, alicates e ferramentas certificadas para trabalho em alta tensão</li>
          <li><strong>Equipamento de desenergização:</strong> Dispositivos para desconectar e isolar o sistema de alta tensão com segurança</li>
          <li><strong>Luvas isolantes:</strong> Classe apropriada para a tensão de trabalho (geralmente classe 00 ou 0)</li>
          <li><strong>Equipamento de teste de isolamento:</strong> Megôhmetro para verificar resistência de isolamento</li>
          <li><strong>Câmera térmica:</strong> Para identificar pontos de sobreaquecimento em baterias e componentes</li>
          <li><strong>Equipamento de elevação:</strong> Macacos e elevadores apropriados para o peso adicional dos VHE</li>
          <li><strong>Ferramentas de software:</strong> Acesso a sistemas de diagnóstico do fabricante e atualizações de firmware</li>
          <li><strong>Equipamento de carregamento:</strong> Carregador compatível para testes e calibração do sistema de bateria</li>
        </ul>
        <p className="mt-3"><strong>Investimento:</strong> O conjunto básico de ferramentas especializadas pode custar entre R$ 15.000 e R$ 50.000.</p>
      </div>
    )
  },
  {
    q: 'Como identificar problemas no sistema de recarga?',
    a: (
      <div>
        <p>Problemas no sistema de recarga podem ter várias origens. Siga este processo de diagnóstico:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Verificação do carregador:</strong> Teste o carregador em outro veículo para isolar se o problema é no equipamento ou no veículo</li>
          <li><strong>Inspeção do conector:</strong> Verifique danos físicos, corrosão, queimaduras ou contatos soltos no conector de carregamento</li>
          <li><strong>Teste de comunicação:</strong> Use scanner para verificar códigos de erro relacionados ao sistema de carregamento (CCS, CHAdeMO, Type 2)</li>
          <li><strong>Medição de tensão:</strong> Verifique se a tensão de entrada está correta e estável na estação de carregamento</li>
          <li><strong>Verificação do OBC:</strong> Teste o On-Board Charger (carregador interno) para garantir que está convertendo corretamente AC para DC</li>
          <li><strong>Análise térmica:</strong> Durante o carregamento, verifique se há sobreaquecimento em componentes do sistema</li>
          <li><strong>Teste de isolamento:</strong> Verifique se não há falha de isolamento que esteja impedindo o carregamento por segurança</li>
          <li><strong>Verificação do BMS:</strong> O Battery Management System pode interromper o carregamento por questões de segurança ou balanceamento</li>
          <li><strong>Atualização de software:</strong> Alguns problemas são resolvidos com atualização do firmware do sistema de carregamento</li>
        </ul>
        <p className="mt-3"><strong>Dica:</strong> Muitos problemas de recarga são causados por incompatibilidade entre o carregador e o protocolo do veículo. Verifique sempre a compatibilidade.</p>
      </div>
    )
  },
  {
    q: 'Como funciona a capacitação em veículos híbridos e elétricos?',
    a: (
      <div>
        <p>Nossa metodologia exclusiva oferece:</p>
        <ol className="list-decimal ml-6">
          <li>Módulos de estudo online com estrutura completa</li>
          <li>8 mentorias ao vivo por ciclo com tutores especializados</li>
          <li>Imersão profissional gratuita ao final do curso</li>
          <li>Acompanhamento de Tutor Exclusivo para cada aluno</li>
          <li>Certificações reconhecidas no setor automotivo</li>
        </ol>
      </div>
    )
  },
  {
    q: 'Qual o retorno financeiro esperado após a capacitação?',
    a: (
      <div>
        <p>Com nossa metodologia comprovada, oferecemos:</p>
        <ul className="list-disc ml-6">
          <li><strong>Até 7 vezes mais retorno financeiro</strong> em relação ao modelo tradicional</li>
          <li>Oportunidades reais em um mercado em expansão</li>
          <li>Alto potencial de faturamento e empregabilidade</li>
          <li>Suporte para precificação e gestão de lucros</li>
        </ul>
      </div>
    )
  },
  {
    q: 'Preciso ter experiência prévia para fazer os cursos?',
    a: (
      <div>
        <p>Não! Nossos cursos são para todos os perfis:</p>
        <ul className="list-disc ml-6">
          <li><strong>Iniciantes:</strong> Desde quem nunca trocou uma roda</li>
          <li><strong>Profissionais:</strong> Quem já atua no ramo e quer se especializar</li>
          <li><strong>Aprendizado progressivo:</strong> Conteúdo prático e direcionado</li>
          <li><strong>Suporte completo:</strong> Tutor exclusivo para orientação integral</li>
        </ul>
      </div>
    )
  },
  {
    q: 'Como encontro pontos de recarga para meu veículo elétrico?',
    a: (
      <div>
        <p>Utilize nosso mapa nacional de pontos de recarga:</p>
        <ul className="list-disc ml-6">
          <li>Mapa atualizado em tempo real</li>
          <li>Informações de disponibilidade</li>
          <li>Tipos de carregadores disponíveis</li>
          <li>Localização em todo o Brasil</li>
        </ul>
      </div>
    )
  },
  {
    q: 'Como posso cadastrar minha oficina na plataforma?',
    a: (
      <div>
        <p>Cadastre sua oficina e ganhe visibilidade:</p>
        <ul className="list-disc ml-6">
          <li>Visibilidade nacional na plataforma</li>
          <li>Geolocalização em tempo real</li>
          <li>Conecte-se com clientes que precisam de serviços especializados</li>
          <li>Parcerias comerciais e divulgação estratégica</li>
        </ul>
      </div>
    )
  }
]

export default function ChatFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Perguntas Frequentes</h2>
          <p className="text-white/80 text-lg">Tire suas dúvidas sobre veículos híbridos e elétricos</p>
        </div>

        <div className="mt-8 space-y-3 max-w-4xl mx-auto">
          {faqs.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6 cursor-pointer hover:bg-white/15 transition-all duration-300" 
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              <div className="font-semibold text-white text-lg flex items-center justify-between">
                <span>{item.q}</span>
                <span className="text-cyan-400 text-2xl transform transition-transform duration-300">
                  {open === idx ? '−' : '+'}
                </span>
              </div>
              {open === idx && (
                <div className="mt-4 text-white/90 animate-fadeIn">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6 mt-6 max-w-4xl mx-auto">
          <p className="text-white">Não encontrou sua dúvida? <a className="text-white/100 underline font-bold hover:text-white/80" href="/cursos"> Entre em contato conosco</a>!</p>
        </div>
      </div>
    </section>
  )
}
