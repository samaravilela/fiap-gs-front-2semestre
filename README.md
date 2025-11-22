# 🚗 Zyntra HE - Plataforma de Educação e Serviços para Mobilidade Moderna

## 📋 Sumário

- [1. Título e Descrição](#1-título-e-descrição)
- [2. Status do Projeto](#2-status-do-projeto)
- [3. Sobre o Projeto](#3-sobre-o-projeto)
- [4. Tecnologias Utilizadas](#4-tecnologias-utilizadas)
- [5. Instalação](#5-instalação)
- [6. Como Usar](#6-como-usar)
- [7. Estrutura de Pastas](#7-estrutura-de-pastas)
- [8. Endpoints ou Rotas Principais](#8-endpoints-ou-rotas-principais)
- [9. Autores e Créditos](#9-autores-e-créditos)
- [10. Screenshots / Demonstração](#10-screenshots--demonstração)
- [11. Contato](#11-contato)
- [12. Links](#12-links)

---

## 1. Título e Descrição

**Zyntra HE** é uma plataforma inovadora criada para **valorizar e ampliar a vida financeira de mecânicos e profissionais da mobilidade moderna**. Nosso propósito é impulsionar carreiras e transformar conhecimento técnico em lucro real, conectando a tradição da reparação automotiva com o futuro dos **veículos híbridos e elétricos**, um dos segmentos que mais crescem no mundo.

Com uma metodologia exclusiva e resultados comprovados, oferecemos **até 7 vezes mais retorno financeiro** em relação ao modelo tradicional de atuação. Tudo isso através de **módulos de estudo online**, com estrutura completa de aprendizado, **mentorias ao vivo**, **eventos presenciais** e um suporte totalmente **humanizado**.

---

## 2. Status do Projeto

✅ **Status:** Em Desenvolvimento Ativo

- ✅ Frontend React + TypeScript + Vite implementado
- ✅ Integração com API Java (Backend) completa
- ✅ Sistema de autenticação funcional
- ✅ CRUD completo para Cursos, Oficinas, Tutores e Mentorias
- ✅ Rotas dinâmicas implementadas
- ✅ Tema escuro/claro com Context API
- ✅ Design responsivo com TailwindCSS
- ✅ Páginas obrigatórias (Home, About, Equipe, FAQ) implementadas

---

## 3. Sobre o Projeto

### 🎯 Nossos Públicos

Nossa plataforma foi criada para atender **dois perfis fundamentais** do novo ecossistema automotivo:

1. **Usuários de veículos híbridos e elétricos**, que buscam suporte, segurança e serviços especializados.
2. **Futuros PRO Reparadores**, que desejam empreender e se destacar nesse mercado em expansão.

### 📱 Serviços Oferecidos

#### 🧠 Educação e Formação Profissional
- **Cursos online e presenciais** sobre veículos híbridos e elétricos (VHE)
- **Certificações reconhecidas** no setor automotivo
- **Mentorias ao vivo (8 por ciclo)** com tutores humanizados
- **Imersão profissional gratuita** ao final do curso
- **Palestras de educação financeira**: precificação, comportamento profissional e gestão de lucros
- **Curso de segurança NR10**, com foco em práticas seguras em alta tensão

#### 🚗 Serviços para Usuários de Veículos Híbridos e Elétricos
- **Mapa nacional de pontos de recarga**, atualizado em tempo real
- **Localização inteligente de oficinas** em qualquer região do Brasil
- **Conteúdos e tutoriais exclusivos** sobre manutenção, performance e economia
- **Atendimento humanizado e suporte especializado**
- **Eventos e workshops** com marcas e profissionais do setor

#### 💼 Soluções para Oficinas e Empreendedores
- **Cadastramento de oficinas** na plataforma com visibilidade nacional
- **Geolocalização em tempo real**, conectando clientes à oficina mais próxima
- **Programa de franquias de pontos de recarga** para empreendedores
- **Parcerias comerciais e divulgação estratégica** via tráfego digital e eventos

#### 🤖 Tecnologia e Inovação
- **Biblioteca digital exclusiva**, com materiais técnicos, vídeos e guias especializados
- **Plataforma digital integrada**, com ambiente de estudos, suporte e acesso centralizado

### 🏗️ Arquitetura

O projeto segue uma arquitetura **Single Page Application (SPA)** com:

- **Componentização modular** para reutilização de código
- **Roteamento dinâmico** com React Router (rotas estáticas e dinâmicas com parâmetros)
- **Tipagem TypeScript** em todos os componentes (incluindo Union Types e Intersection Types)
- **Design responsivo** com TailwindCSS (sem CSS puro)
- **Hooks do React** para gerenciamento de estado
- **Context API** para tema escuro/claro e autenticação
- **Integração completa** com API REST Java

---

## 4. Tecnologias Utilizadas

- **React 18.3.1** - Biblioteca para construção da interface
- **TypeScript 5.5.4** - Tipagem estática para JavaScript (com Union Types e Intersection Types)
- **Vite 5.4.1** - Build tool e servidor de desenvolvimento
- **TailwindCSS 3.4.17** - Framework CSS para estilização (única ferramenta de estilização)
- **React Router DOM 6.26.1** - Roteamento para SPA (rotas estáticas e dinâmicas)
- **React Hook Form 7.52.0** - Gerenciamento de formulários

---

## 5. Instalação

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd "Zyntra HE"
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente (opcional):
```bash
# Crie um arquivo .env na raiz do projeto
VITE_API_BASE_URL=https://fiap-gs-java-2semestre.onrender.com/api
```

4. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

### Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento (http://localhost:5173)
npm run build    # Build para produção
npm run preview  # Preview do build de produção
```

---

## 6. Como Usar

### Acessando a Aplicação

A aplicação está disponível em: **https://zyntra-he.vercel.app** (ou URL de produção)

### Funcionalidades Principais

1. **Navegação**: Use o menu superior para acessar as diferentes páginas
2. **Autenticação**: Faça login para acessar áreas protegidas (como Cursos)
3. **Cursos**: Visualize cursos disponíveis e acesse detalhes através de rotas dinâmicas (`/cursos/:id`)
4. **Oficinas**: Explore oficinas cadastradas e veja detalhes (`/oficinas/:id`)
5. **Tema**: Use o botão de tema (☀️/🌙) no header para alternar entre tema claro e escuro
6. **FAQ**: Acesse perguntas frequentes na página FAQ
7. **Equipe**: Conheça os integrantes do projeto na página Equipe

### Rotas Dinâmicas

- `/cursos/:id` - Detalhes de um curso específico
- `/oficinas/:id` - Detalhes de uma oficina específica

---

## 7. Estrutura de Pastas

```
Zyntra HE/
├── public/
│   └── imagens/          # Imagens estáticas (logos, fotos da equipe)
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Header.tsx    # Cabeçalho com navegação e toggle de tema
│   │   ├── Footer.tsx    # Rodapé
│   │   ├── Button.tsx    # Botão reutilizável
│   │   ├── FormField.tsx # Campo de formulário
│   │   ├── Login.tsx     # Componente de login
│   │   ├── ProtectedRoute.tsx # Rota protegida
│   │   └── ChatFAQ.tsx   # FAQ interativo
│   ├── pages/            # Páginas da aplicação
│   │   ├── Home.tsx      # Página inicial
│   │   ├── About.tsx     # Sobre nós
│   │   ├── Features.tsx  # Serviços
│   │   ├── Cursos.tsx    # Lista de cursos
│   │   ├── CursoDetalhes.tsx # Detalhes do curso (rota dinâmica)
│   │   ├── Oficinas.tsx  # Lista de oficinas
│   │   ├── OficinaDetalhes.tsx # Detalhes da oficina (rota dinâmica)
│   │   ├── MapaRecarga.tsx # Mapa de pontos de recarga
│   │   ├── Equipe.tsx    # Página da equipe
│   │   └── ...           # Outras páginas
│   ├── contexts/         # Contexts do React
│   │   ├── AuthContext.tsx # Context de autenticação
│   │   └── ThemeContext.tsx # Context de tema (escuro/claro)
│   ├── services/         # Serviços de API
│   │   ├── api.ts        # Configuração base da API
│   │   ├── usuariosService.ts
│   │   ├── cursosService.ts
│   │   ├── oficinasService.ts
│   │   ├── tutoresService.ts
│   │   └── mentoriasService.ts
│   ├── config/           # Configurações
│   │   └── api.ts        # Configuração da API
│   ├── utils/            # Utilitários
│   │   ├── crypto.ts     # Funções de criptografia
│   │   └── apiTest.ts    # Teste de conexão com API
│   ├── types.ts          # Definições de tipos TypeScript
│   ├── App.tsx           # Componente principal com rotas
│   ├── main.tsx          # Ponto de entrada da aplicação
│   └── tailwind.css      # Estilos TailwindCSS
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

---

## 8. Endpoints ou Rotas Principais

### Rotas Frontend (React Router)

#### Rotas Públicas
- `/` - Página inicial (Home)
- `/about` - Sobre nós
- `/features` - Serviços oferecidos
- `/faq` - Perguntas frequentes
- `/equipe` - Integrantes do projeto
- `/login` - Página de login
- `/mapa-recarga` - Mapa de pontos de recarga
- `/oficinas` - Lista de oficinas
- `/oficinas/:id` - Detalhes de uma oficina (rota dinâmica)
- `/suporte` - Página de suporte
- `/agendar-mentoria` - Agendar mentoria
- `/reagendar-mentoria` - Reagendar mentoria
- `/contato-tutores` - Contato com tutores
- `/setor-financeiro` - Setor financeiro
- `/suporte-pedagogico` - Suporte pedagógico
- `/eventos-presenciais` - Eventos presenciais
- `/evento-imersao` - Evento de imersão
- `/empreendedor-recarga` - Empreendedor de recarga
- `/vendas-nova-turma` - Vendas nova turma

#### Rotas Protegidas (requerem autenticação)
- `/cursos` - Lista de cursos
- `/cursos/:id` - Detalhes de um curso (rota dinâmica)
- `/cadastro-oficina` - Cadastro de oficina

### Endpoints da API (Backend Java)

A aplicação consome a API Java disponível em: `https://fiap-gs-java-2semestre.onrender.com/api`

#### Usuários
- `GET /api/usuarios` - Listar todos os usuários
- `GET /api/usuarios/{id}` - Buscar usuário por ID
- `POST /api/usuarios` - Criar usuário
- `POST /api/usuarios/login` - Autenticar usuário
- `PUT /api/usuarios/{id}` - Atualizar usuário
- `DELETE /api/usuarios/{id}` - Deletar usuário

#### Cursos
- `GET /api/cursos` - Listar todos os cursos
- `GET /api/cursos/{id}` - Buscar curso por ID
- `POST /api/cursos` - Criar curso
- `PUT /api/cursos/{id}` - Atualizar curso
- `DELETE /api/cursos/{id}` - Deletar curso

#### Oficinas
- `GET /api/oficinas` - Listar todas as oficinas
- `GET /api/oficinas/{id}` - Buscar oficina por ID
- `POST /api/oficinas` - Criar oficina
- `PUT /api/oficinas/{id}` - Atualizar oficina
- `DELETE /api/oficinas/{id}` - Deletar oficina

#### Tutores
- `GET /api/tutores` - Listar todos os tutores
- `GET /api/tutores/{id}` - Buscar tutor por ID
- `POST /api/tutores` - Criar tutor
- `PUT /api/tutores/{id}` - Atualizar tutor
- `DELETE /api/tutores/{id}` - Deletar tutor

#### Mentorias
- `GET /api/mentorias` - Listar todas as mentorias
- `GET /api/mentorias/{id}` - Buscar mentoria por ID
- `POST /api/mentorias` - Criar mentoria
- `PUT /api/mentorias/{id}` - Atualizar mentoria
- `DELETE /api/mentorias/{id}` - Deletar mentoria

---

## 9. Autores e Créditos

### Equipe de Desenvolvimento

#### Altamir Lima
- **RM:** 562906
- **Turma:** ITDSR
- **Foto:** ![Altamir Lima](/imagens/Altamir.jpeg)
- **LinkedIn:** [linkedin.com/in/altamir-lima](https://www.linkedin.com/in/altamir-lima)
- **GitHub:** [github.com/AltamirLima](https://github.com/AltamirLima)

#### Felipe Conte
- **RM:** 562248
- **Turma:** ITDSR
- **Foto:** ![Felipe Conte](/imagens/Felipe.jpeg)
- **LinkedIn:** [linkedin.com/in/felipe-conte-ferreira-b85747354](https://www.linkedin.com/in/felipe-conte-ferreira-b85747354)
- **GitHub:** [github.com/FelipeConteFerreira](https://github.com/FelipeConteFerreira)

#### Samara Vilela
- **RM:** 566133
- **Turma:** ITDSR
- **Foto:** ![Samara Vilela](/imagens/samara.jpeg)
- **LinkedIn:** [linkedin.com/in/samara-vilela](https://www.linkedin.com/in/samara-vilela/)
- **GitHub:** [github.com/samaravilela](https://github.com/samaravilela)

---

## 10. Screenshots / Demonstração

### Página Inicial
A página inicial apresenta o hero section com informações sobre a plataforma e os principais serviços oferecidos.

### Página de Cursos
Interface completa de cursos com listagem e acesso a detalhes através de rotas dinâmicas.

### Página de Oficinas
Listagem de oficinas cadastradas com busca e filtros, permitindo visualizar detalhes de cada uma.

### Sistema de Tema
Toggle de tema escuro/claro implementado com Context API, permitindo alternância entre modos.

### Rotas Dinâmicas
Exemplo de rota dinâmica: `/cursos/:id` e `/oficinas/:id` para visualização de detalhes específicos.

> **Nota:** Para visualizar screenshots completos e demonstração em vídeo, consulte a seção [Links](#12-links).

---

## 11. Contato

### Informações de Contato

- **Email:** contato@zyntrahe.com
- **Telefone:** (11) 1234-5678
- **Localização:** Brasil

### Integrantes do Projeto

Para entrar em contato com os desenvolvedores, acesse a página [Equipe](/equipe) ou utilize os links de LinkedIn e GitHub disponíveis na seção [Autores e Créditos](#9-autores-e-créditos).

---

## 12. Links

### 🔗 GitHub
**Repositório do Projeto:** [github.com/[usuario]/zyntra-he](https://github.com/[usuario]/zyntra-he)

> **Nota:** Substitua `[usuario]` pelo usuário do GitHub do repositório real.

### 🎥 YouTube
**Vídeo de Demonstração:** [youtube.com/watch?v=[video-id]](https://www.youtube.com/watch?v=[video-id])

> **Nota:** Adicione o link do vídeo de demonstração do projeto no YouTube.

### 🌐 Aplicação Online
**URL da Aplicação:** [zyntra-he.vercel.app](https://zyntra-he.vercel.app)

> **Nota:** Atualize com a URL real de produção da aplicação.

---

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais e comerciais.

---

**Desenvolvido para transformar o futuro da mobilidade moderna** 🚗⚡
