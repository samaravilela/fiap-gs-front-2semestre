import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './pages/Home'
import About from './pages/About'
import Features from './pages/Features'
import Cursos from './pages/Cursos'
import CursoDetalhes from './pages/CursoDetalhes'
import MapaRecarga from './pages/MapaRecarga'
import Oficinas from './pages/Oficinas'
import OficinaDetalhes from './pages/OficinaDetalhes'
import ChatFAQ from './components/ChatFAQ'
import Suporte from './pages/Suporte'
import AgendarMentoria from './pages/AgendarMentoria'
import ReagendarMentoria from './pages/ReagendarMentoria'
import EmpreendedorRecarga from './pages/EmpreendedorRecarga'
import EventoImersao from './pages/EventoImersao'
import ContatoTutores from './pages/ContatoTutores'
import SetorFinanceiro from './pages/SetorFinanceiro'
import SuportePedagogico from './pages/SuportePedagogico'
import EventosPresenciais from './pages/EventosPresenciais'
import CadastroOficina from './pages/CadastroOficina'
import VendasNovaTurma from './pages/VendasNovaTurma'
import Equipe from './pages/Equipe'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Zyntra HE — Início',
      '/about': 'Sobre Nós — Zyntra HE',
      '/features': 'Serviços — Zyntra HE',
      '/cursos': 'Cursos — Zyntra HE',
      '/mapa-recarga': 'Mapa de Recarga — Zyntra HE',
      '/oficinas': 'Oficinas — Zyntra HE',
      '/faq': 'FAQ — Zyntra HE',
      '/login': 'Login — Zyntra HE',
      '/suporte': 'Suporte — Zyntra HE',
      '/agendar-mentoria': 'Agendar Mentoria — Zyntra HE',
      '/reagendar-mentoria': 'Reagendar Mentoria — Zyntra HE',
      '/empreendedor-recarga': 'Empreendedor — Zyntra HE',
      '/evento-imersao': 'Evento Imersão — Zyntra HE',
      '/contato-tutores': 'Contato Tutores — Zyntra HE',
      '/setor-financeiro': 'Setor Financeiro — Zyntra HE',
      '/suporte-pedagogico': 'Suporte Pedagógico — Zyntra HE',
      '/eventos-presenciais': 'Eventos Presenciais — Zyntra HE',
      '/cadastro-oficina': 'Cadastro Oficina — Zyntra HE',
      '/vendas-nova-turma': 'Nova Turma — Zyntra HE',
      '/equipe': 'Nossa Equipe — Zyntra HE'
    }
    document.title = titles[location.pathname] ?? 'Zyntra HE'
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cursos" element={<ProtectedRoute><Cursos /></ProtectedRoute>} />
          <Route path="/cursos/:id" element={<ProtectedRoute><CursoDetalhes /></ProtectedRoute>} />
          <Route path="/mapa-recarga" element={<MapaRecarga />} />
          <Route path="/oficinas" element={<Oficinas />} />
          <Route path="/oficinas/:id" element={<OficinaDetalhes />} />
          <Route path="/faq" element={<ChatFAQ />} />
          <Route path="/suporte" element={<Suporte />} />
          <Route path="/agendar-mentoria" element={<AgendarMentoria />} />
          <Route path="/reagendar-mentoria" element={<ReagendarMentoria />} />
          <Route path="/empreendedor-recarga" element={<EmpreendedorRecarga />} />
          <Route path="/evento-imersao" element={<EventoImersao />} />
          <Route path="/contato-tutores" element={<ContatoTutores />} />
          <Route path="/setor-financeiro" element={<SetorFinanceiro />} />
          <Route path="/suporte-pedagogico" element={<SuportePedagogico />} />
          <Route path="/eventos-presenciais" element={<EventosPresenciais />} />
          <Route path="/cadastro-oficina" element={<ProtectedRoute><CadastroOficina /></ProtectedRoute>} />
          <Route path="/vendas-nova-turma" element={<VendasNovaTurma />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="*" element={<div className="container py-16 text-white text-center">Página não encontrada.</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
