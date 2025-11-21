# 🚗 Zyntra HE - Plataforma de Educação e Serviços para Mobilidade Moderna

## 📊 Status do Projeto

✅ **Em Desenvolvimento** - Projeto em fase de implementação e testes

## 📋 Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura](#-arquitetura)
- [Instalação](#-como-executar)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Endpoints ou Rotas Principais](#-endpoints-ou-rotas-principais)
- [Autores e Créditos](#-autores-e-créditos)
- [Screenshots / Demonstração](#-screenshots--demonstração)
- [Contato](#-contato)

## 📋 Sobre o Projeto

O **Zyntra HE** é uma plataforma inovadora criada para **valorizar e ampliar a vida financeira de mecânicos e profissionais da mobilidade moderna**. Nosso propósito é impulsionar carreiras e transformar conhecimento técnico em lucro real, conectando a tradição da reparação automotiva com o futuro dos **veículos híbridos e elétricos**, um dos segmentos que mais crescem no mundo.

Com uma metodologia exclusiva e resultados comprovados, oferecemos **até 7 vezes mais retorno financeiro** em relação ao modelo tradicional de atuação. Tudo isso através de **módulos de estudo online**, com estrutura completa de aprendizado, **mentorias ao vivo**, **eventos presenciais** e um suporte totalmente **humanizado**.

## 🎯 Nossos Públicos

Nossa plataforma foi criada para atender **dois perfis fundamentais** do novo ecossistema automotivo:

1. **Usuários de veículos híbridos e elétricos**, que buscam suporte, segurança e serviços especializados.
2. **Futuros PRO Reparadores**, que desejam empreender e se destacar nesse mercado em expansão.

## 🚀 Tecnologias Utilizadas

- **React 18.3.1** - Biblioteca para construção da interface
- **TypeScript 5.5.4** - Tipagem estática para JavaScript
- **Vite 5.4.1** - Build tool e servidor de desenvolvimento
- **TailwindCSS 3.4.17** - Framework CSS para estilização
- **React Router DOM 6.26.1** - Roteamento para SPA
- **React Hook Form 7.52.0** - Gerenciamento de formulários

## 🏗️ Arquitetura

O projeto segue uma arquitetura **Single Page Application (SPA)** com:

- **Componentização modular** para reutilização de código
- **Roteamento dinâmico** com React Router
- **Tipagem TypeScript** em todos os componentes
- **Design responsivo** com TailwindCSS
- **Hooks do React** para gerenciamento de estado

## 📱 Serviços Oferecidos

### 🧠 Educação e Formação Profissional
- **Cursos online e presenciais** sobre veículos híbridos e elétricos (VHE)
- **Certificações reconhecidas** no setor automotivo
- **Mentorias ao vivo (8 por ciclo)** com tutores humanizados
- **Imersão profissional gratuita** ao final do curso
- **Palestras de educação financeira**: precificação, comportamento profissional e gestão de lucros
- **Curso de segurança NR10**, com foco em práticas seguras em alta tensão

### 🚗 Serviços para Usuários de Veículos Híbridos e Elétricos
- **Mapa nacional de pontos de recarga**, atualizado em tempo real
- **Localização inteligente de oficinas** em qualquer região do Brasil
- **Conteúdos e tutoriais exclusivos** sobre manutenção, performance e economia
- **Atendimento humanizado e suporte especializado**
- **Eventos e workshops** com marcas e profissionais do setor

### 💼 Soluções para Oficinas e Empreendedores
- **Cadastramento de oficinas** na plataforma com visibilidade nacional
- **Geolocalização em tempo real**, conectando clientes à oficina mais próxima
- **Programa de franquias de pontos de recarga** para empreendedores
- **Parcerias comerciais e divulgação estratégica** via tráfego digital e eventos

### 🤖 Tecnologia e Inovação
- **Biblioteca digital exclusiva**, com materiais técnicos, vídeos e guias especializados
- **Plataforma digital integrada**, com ambiente de estudos, suporte e acesso centralizado

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm

### Instalação
```bash
# Instale as dependências
npm install

# Execute o projeto em modo de desenvolvimento
npm run dev
```


### Scripts Disponíveis
```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview do build
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.tsx      # Cabeçalho com navegação e toggle de tema
│   ├── Footer.tsx      # Rodapé
│   ├── ChatFAQ.tsx     # FAQ interativo
│   ├── Hero.tsx        # Seção hero
│   ├── AboutSection.tsx # Seção sobre nós
│   ├── FeaturesSection.tsx # Seção de serviços
│   ├── Button.tsx      # Componente de botão
│   ├── FormField.tsx   # Campo de formulário
│   ├── Login.tsx       # Página de login
│   └── ProtectedRoute.tsx # Rota protegida
├── pages/              # Páginas da aplicação
│   ├── Home.tsx        # Página inicial
│   ├── About.tsx       # Sobre nós
│   ├── Features.tsx    # Serviços
│   ├── Cursos.tsx      # Cursos e formação
│   ├── DetalhesCurso.tsx # Detalhes do curso (rota dinâmica)
│   ├── MapaRecarga.tsx # Mapa de pontos de recarga
│   ├── Oficinas.tsx    # Localização de oficinas
│   ├── DetalhesOficina.tsx # Detalhes da oficina (rota dinâmica)
│   ├── Equipe.tsx      # Página de integrantes
│   ├── AgendarMentoria.tsx # Agendamento de mentoria
│   ├── ReagendarMentoria.tsx # Reagendamento de mentoria
│   ├── CadastroOficina.tsx # Cadastro de oficina
│   └── ...             # Outras páginas
├── contexts/            # Contextos React
│   ├── AuthContext.tsx # Contexto de autenticação
│   └── ThemeContext.tsx # Contexto de tema (dark/light)
├── services/            # Serviços
│   └── api.ts          # Serviço de API
├── config/              # Configurações
│   └── api.ts          # Configuração da API
├── types.ts            # Definições de tipos TypeScript
├── styles.css          # Estilos globais
└── tailwind.css        # Estilos TailwindCSS
```

## 🛣️ Endpoints ou Rotas Principais

### Rotas Estáticas
- `/` - Página inicial (Home)
- `/about` - Sobre nós
- `/features` - Serviços oferecidos
- `/cursos` - Lista de cursos (protegida)
- `/mapa-recarga` - Mapa de pontos de recarga
- `/oficinas` - Lista de oficinas
- `/faq` - Perguntas frequentes
- `/equipe` - Página de integrantes
- `/login` - Página de login

### Rotas Dinâmicas
- `/cursos/:moduloId` - Detalhes de um módulo específico do curso
  - Exemplo: `/cursos/modulo-01`
- `/oficinas/:oficinaId` - Detalhes de uma oficina específica
  - Exemplo: `/oficinas/1`

### Rotas Protegidas
- `/cursos` - Requer autenticação
- `/cadastro-oficina` - Requer autenticação

### Outras Rotas
- `/agendar-mentoria` - Agendamento de mentoria
- `/reagendar-mentoria` - Reagendamento de mentoria
- `/suporte` - Suporte ao cliente
- `/suporte-pedagogico` - Suporte pedagógico
- `/setor-financeiro` - Setor financeiro
- `/contato-tutores` - Contato com tutores
- `/eventos-presenciais` - Eventos presenciais
- `/evento-imersao` - Evento de imersão
- `/empreendedor-recarga` - Empreendedor de recarga
- `/vendas-nova-turma` - Vendas de nova turma

## 🎯 Objetivo Principal

Oferecer o conhecimento necessário para **empreender no setor automobilístico do futuro**, capacitando desde quem nunca trocou uma roda até quem já atua no ramo. O aprendizado é progressivo, prático e direcionado às **oportunidades reais** do mercado, um campo ainda pouco explorado, mas com **alto potencial de faturamento e empregabilidade**.

Estamos construindo **a ponte entre o mecânico tradicional e o profissional do amanhã** e o futuro já começou.

## 📸 Screenshots / Demonstração

### Funcionalidades Principais
- ✅ Sistema de rotas estáticas e dinâmicas com React Router
- ✅ Tema escuro/claro com toggle
- ✅ Autenticação de usuários
- ✅ Páginas responsivas com TailwindCSS
- ✅ Integração com API (estrutura preparada)
- ✅ Componentização modular
- ✅ TypeScript com tipagem completa

### Como Usar

1. **Acesse a aplicação**: [URL do Deploy na Vercel será adicionada aqui]
2. **Navegue pelas páginas**: Use o menu de navegação para explorar todas as funcionalidades
3. **Altere o tema**: Clique no ícone de sol/lua no header para alternar entre tema claro e escuro
4. **Acesse cursos**: Faça login para acessar os cursos disponíveis
5. **Explore rotas dinâmicas**: Clique em "Ver Detalhes" nos módulos de curso ou oficinas para ver rotas dinâmicas em ação

## 👥 Autores e Créditos

### Equipe de Desenvolvimento

| Nome | RM | Turma | GitHub | LinkedIn |
|------|----|----|--------|----------|
| Altamir Lima | 562906 | ITDSR | [@AltamirLima](https://github.com/AltamirLima) | [Altamir Lima](https://www.linkedin.com/in/altamir-lima) |
| Felipe Conte | 562248 | ITDSR | [@FelipeConteFerreira](https://github.com/FelipeConteFerreira) | [Felipe Conte](https://www.linkedin.com/in/felipe-conte-ferreira-b85747354) |
| Samara Vilela | 566133 | ITDSR | [@samaravilela](https://github.com/samaravilela) | [Samara Vilela](https://www.linkedin.com/in/samara-vilela/) |

## 📞 Contato

### Informações dos Integrantes

#### Altamir Lima
- **RM**: 562906
- **Turma**: ITDSR
- **GitHub**: [https://github.com/AltamirLima](https://github.com/AltamirLima)
- **LinkedIn**: [https://www.linkedin.com/in/altamir-lima](https://www.linkedin.com/in/altamir-lima)

#### Felipe Conte
- **RM**: 562248
- **Turma**: ITDSR
- **GitHub**: [https://github.com/FelipeConteFerreira](https://github.com/FelipeConteFerreira)
- **LinkedIn**: [https://www.linkedin.com/in/felipe-conte-ferreira-b85747354](https://www.linkedin.com/in/felipe-conte-ferreira-b85747354)

#### Samara Vilela
- **RM**: 566133
- **Turma**: ITDSR
- **GitHub**: [https://github.com/samaravilela](https://github.com/samaravilela)
- **LinkedIn**: [https://www.linkedin.com/in/samara-vilela/](https://www.linkedin.com/in/samara-vilela/)

## 🔗 Links Importantes

### GitHub
- **Repositório**: [Link do repositório GitHub será adicionado aqui]

### Vídeo do YouTube
- **Demonstração**: [Link do vídeo do YouTube será adicionado aqui]

### Deploy
- **URL da Aplicação**: [URL do deploy na Vercel será adicionada aqui]

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais e comerciais.

---

**Desenvolvido para transformar o futuro da mobilidade moderna**
