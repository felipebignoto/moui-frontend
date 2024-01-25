import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          light: '#494144',
          main: '#2b2628',
          dark: '#251e21',
        },
        secondary: {
          main: '#98b00e',
        },
        white: '#f7fafc',
        gray: {
          50: '#F0F6F9',
          100: '#D6D6D6',
          200: '#CCCCCC',
          300: '#727275',
          400: '#56565a',
          500: '#2c2c31',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: ' #121215',
          950: '#09090B',
        },
      },
    },
  },
  plugins: [],
}
export default config
