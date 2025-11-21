import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useTheme } from '../contexts/ThemeContext'

type HeaderProps = {
    className?: string
}

export default function Header({ className = '' }: HeaderProps) {
    const [open, setOpen] = useState(false)
    const { isAuthenticated, user, logout } = useAuth()
    const { theme, toggleTheme } = useTheme()

    useEffect(() => {
        const onResize = () => { if (window.innerWidth > 1024) setOpen(false) }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    return (
        <header className={`bg-black/90 backdrop-blur-md border-b border-cyan-500/30 shadow-[0_2px_20px_rgba(0,102,255,0.3)] ${className}`}>
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
                <Link to="/" className="flex items-center h-full">
                    <img src="/imagens/LOGO ZHE.png" className="h-12 md:h-14 w-auto object-contain" alt="Logo Zyntra HE" />
                </Link>

                <button
                    className="lg:hidden p-2 text-cyan-400 hover:bg-cyan-400/20 rounded-lg"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>

                <nav className={`absolute lg:static top-16 lg:top-0 left-0 right-0 bg-black/95 backdrop-blur-md lg:bg-transparent border-b border-cyan-500/30 lg:border-0 shadow-lg lg:shadow-none transition-all duration-300 ${open ? 'block' : 'hidden lg:block'}`}>
                    <ul className="flex flex-col lg:flex-row lg:items-center gap-1 p-4 lg:p-0">
                        <li><NavLink to="/" className="block px-4 py-2 text-cyan-400 hover:bg-cyan-400/20 rounded-lg transition-all">Início</NavLink></li>
                        <li><NavLink to="/about" className="block px-4 py-2 text-cyan-400 hover:bg-cyan-400/20 rounded-lg transition-all">Sobre Nós</NavLink></li>
                        <li><NavLink to="/features" className="block px-4 py-2 text-cyan-400 hover:bg-cyan-400/20 rounded-lg transition-all">Serviços</NavLink></li>
                        <li><NavLink to="/cursos" className="block px-4 py-2 text-cyan-400 hover:bg-cyan-400/20 rounded-lg transition-all">Cursos</NavLink></li>
                        <li><NavLink to="/mapa-recarga" className="block px-4 py-2 text-cyan-400 hover:bg-cyan-400/20 rounded-lg transition-all">Mapa de Recarga</NavLink></li>
                        <li><NavLink to="/oficinas" className="block px-4 py-2 text-cyan-400 hover:bg-cyan-400/20 rounded-lg transition-all">Oficinas</NavLink></li>
                        <li><NavLink to="/faq" className="block px-4 py-2 text-cyan-400 hover:bg-cyan-400/20 rounded-lg transition-all">FAQ</NavLink></li>
                        <li><NavLink to="/equipe" className="block px-4 py-2 text-cyan-400 hover:bg-cyan-400/20 rounded-lg transition-all">Equipe</NavLink></li>
                        <li>
                            <button
                                onClick={toggleTheme}
                                className="block px-4 py-2 text-cyan-400 hover:bg-cyan-400/20 rounded-lg transition-all"
                                title={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
                            >
                                {theme === 'dark' ? '☀️' : '🌙'}
                            </button>
                        </li>
                        {isAuthenticated ? (
                            <>
                                <li className="lg:ml-4 flex items-center gap-2 px-4 py-2 text-cyan-400">
                                    <span className="text-sm">Olá, {user?.name}</span>
                                </li>
                                <li>
                                    <button 
                                        onClick={logout}
                                        className="block px-4 py-2 text-cyan-400 hover:bg-cyan-400/20 rounded-lg transition-all"
                                    >
                                        Sair
                                    </button>
                                </li>
                            </>
                        ) : (
                            <li className="lg:ml-4">
                                <NavLink to="/login" className="block px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-500 hover:to-cyan-400 rounded-lg font-medium shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all">
                                    Login
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
