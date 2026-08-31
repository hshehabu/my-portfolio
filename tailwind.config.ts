import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'odoo-plum': '#714B67',
        'slate-text': '#374151',
        'warm-taupe': '#9D968E',
        'odoo-yellow': '#FBBF24',
        'odoo-teal': '#0D9488',
        'odoo-blue': '#0EA5E9',
        'odoo-pink': '#F43F5E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        accent: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
}
export default config
