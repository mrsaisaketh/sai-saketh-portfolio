/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.jsx",
    "./main.jsx",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgDark: '#F8FAFC',     // Light background
        bgCard: '#FFFFFF',     // White card surface
        primaryAccent: '#6366F1', // Indigo Accent
        secondaryAccent: '#8B5CF6', // Violet Accent
        mutedText: '#64748B',  // Slate muted text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glow-primary': '0 10px 30px -5px rgba(99, 102, 241, 0.25)',
        'glow-purple': '0 10px 30px -5px rgba(139, 92, 246, 0.25)',
        'card-soft': '0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 0 1px 1px rgba(0, 0, 0, 0.05)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'aurora-glow': 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.08), rgba(139, 92, 246, 0.08) 50%, transparent 80%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
