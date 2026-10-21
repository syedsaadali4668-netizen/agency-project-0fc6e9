/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#1A1A2E',
        neon_purple: '#A700FF',
        neon_cyan: '#00E0FF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-purple': '0 0 15px rgba(167, 0, 255, 0.7)',
        'neon-cyan': '0 0 15px rgba(0, 224, 255, 0.7)',
        'neon-glow': '0 0 20px rgba(167, 0, 255, 0.7), 0 0 30px rgba(0, 224, 255, 0.5)',
      },
      keyframes: {
        blob: {
          '0%, 100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
        }
      },
      animation: {
        blob: 'blob 7s infinite ease-in-out',
      }
    },
  },
  plugins: [],
}