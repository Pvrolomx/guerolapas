import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0A1628',
        gold: '#C5A55A',
        pearl: '#FAFAF5',
        cream: '#F5F0E8',
        cruzazul: '#003DA5',
        muted: '#6B7280',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
