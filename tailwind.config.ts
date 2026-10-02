import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#1E5EFF',
        'accent-dim': 'rgba(30,94,255,0.12)',
        surface: '#0D1018',
        'surface-card': '#111520',
        'border-subtle': 'rgba(255,255,255,0.07)',
        'border-accent': 'rgba(30,94,255,0.35)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'grid-subtle': "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}
export default config
