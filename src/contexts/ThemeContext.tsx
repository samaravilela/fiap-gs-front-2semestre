import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  actualTheme: 'light' | 'dark'
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const getInitialTheme = (): Theme => {
    const saved = localStorage.getItem('zyntra_theme') as Theme
    return saved || 'system'
  }

  const getInitialActualTheme = (themeValue: Theme): 'light' | 'dark' => {
    if (themeValue === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return themeValue
  }

  const [theme, setThemeState] = useState<Theme>(getInitialTheme)
  const [actualTheme, setActualTheme] = useState<'light' | 'dark'>(() => {
    return getInitialActualTheme(getInitialTheme())
  })

  // Aplica o tema na inicialização
  useEffect(() => {
    const initialTheme = getInitialTheme()
    const initialActualTheme = getInitialActualTheme(initialTheme)
    document.documentElement.classList.add(initialActualTheme)
    document.body.classList.add(initialActualTheme)
  }, [])

  useEffect(() => {
    const updateTheme = () => {
      let newActualTheme: 'light' | 'dark'
      
      if (theme === 'system') {
        newActualTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      } else {
        newActualTheme = theme
      }
      
      setActualTheme(newActualTheme)
      
      // Remove classes anteriores
      document.documentElement.classList.remove('light', 'dark')
      document.body.classList.remove('light', 'dark')
      
      // Adiciona a classe correta no html e body
      document.documentElement.classList.add(newActualTheme)
      document.body.classList.add(newActualTheme)
    }

    updateTheme()

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (theme === 'system') {
        updateTheme()
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem('zyntra_theme', newTheme)
    
    // Atualiza imediatamente
    let newActualTheme: 'light' | 'dark'
    if (newTheme === 'system') {
      newActualTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    } else {
      newActualTheme = newTheme
    }
    
    setActualTheme(newActualTheme)
    document.documentElement.classList.remove('light', 'dark')
    document.body.classList.remove('light', 'dark')
    document.documentElement.classList.add(newActualTheme)
    document.body.classList.add(newActualTheme)
  }

  const toggleTheme = () => {
    const newTheme = actualTheme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, actualTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

