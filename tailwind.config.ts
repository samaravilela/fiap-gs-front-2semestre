import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class', // Habilita dark mode via classe
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066ff',
        'primary-dark': '#003d99',
        'primary-light': '#00aaff',
        secondary: '#00d4ff',
        accent: '#0099ff',
        danger: '#ff3366',
        success: '#00ff88',
        light: '#f8f9fa',
        dark: '#000000',
        'dark-secondary': '#0a0a0a',
        'dark-tertiary': '#001122',
        gray: '#6c757d',
        'neon-blue': '#00d4ff',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0066ff, #00aaff)',
        'gradient-secondary': 'linear-gradient(135deg, #00d4ff, #0066ff)',
        'gradient-dark': 'linear-gradient(135deg, #000000, #001122, #003366)',
        'gradient-danger': 'linear-gradient(135deg, #ff3366, #cc0033)'
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 212, 255, 0.5)',
        'neon-blue-lg': '0 0 30px rgba(0, 212, 255, 0.6)',
        'blue-glow': '0 0 15px rgba(0, 102, 255, 0.4)',
      }
    }
  },
  plugins: []
} satisfies Config
