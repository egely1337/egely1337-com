import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter' : 'Inter, sans-serif',
        'script' : 'Style Script, sans-serif',
        'poppins' : 'Poppins, sans-serif'
      },
      animation: {
        opacity: 'opacity 0.4s linear'
      },
      keyframes: {
        opacity: {
          '0%' : {opacity: '0%'},
          '100%' : {opacity: '100%'}
        }
      }
    }
  },
  plugins: [],
}
export default config
