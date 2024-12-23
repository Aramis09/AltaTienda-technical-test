import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#010316',
        noteBackground: '#FEEBCB',
        cardBackground: '#13132D',
        iconSelected: '#3540E8',
        iconNoSelected: '#FFFFFF',
        link: '#E41AD6',
        danger: '#ff0000',
        priorityHigh: '#ff00008a',
        priorityMedium: '#EB5B00',
        priorityLow: '#FFB200',
        inputBackground: '#1f093d',
        inputBorder: '#2b124d'
      },
      animation: {
        shake: 'shake 0.5s ease-in-out infinite'
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-1px)' },
          '50%': { transform: 'translateX(1px)' },
          '75%': { transform: 'translateX(-1px)' }
        }
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}

export default config
