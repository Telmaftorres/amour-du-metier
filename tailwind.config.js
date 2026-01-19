/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kontfeel': {
          navy: '#1f2732',
          pink: '#ff497c',
          white: '#ffffff',
          light: '#eeeff2',
          dark: '#323232',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 39, 50, 0.15)',
        'card': '0 20px 60px -15px rgba(0, 0, 0, 0.3)',
        'glow-pink': '0 0 40px rgba(255, 73, 124, 0.3)',
      },
    },
  },
  plugins: [],
}