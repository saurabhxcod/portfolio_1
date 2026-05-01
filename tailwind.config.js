/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#050508',
        bg2: '#0a0a12',
        card: '#0d0d1a',
        cyan: '#00f5ff',
        'cyan-dim': '#00c8d4',
        amber: '#ff6b00',
        gray: '#8892a4',
        border: 'rgba(0,245,255,0.12)'
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      }
    },
  },
  plugins: [],
}
