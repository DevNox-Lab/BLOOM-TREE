/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#eef3f1',
          100: '#d6e0db',
          200: '#a9bdb4',
          300: '#7a988b',
          400: '#4e7466',
          500: '#2f5448',
          600: '#264438',
          700: '#1f372d',
          800: '#1a2d29',
          900: '#11201c',
          950: '#0a1614',
        },
        gold: {
          50: '#fbf7f0',
          100: '#f4ead6',
          200: '#ead3ad',
          300: '#dbb17f',
          400: '#cf9a5e',
          500: '#c08446',
          600: '#a86b39',
          700: '#865231',
          800: '#6c422b',
          900: '#583725',
        },
        cream: {
          50: '#fdfaf4',
          100: '#f9f2e3',
          200: '#f1e6cd',
        },
        blush: {
          50: '#fbf2ee',
          100: '#f4ddd2',
          200: '#e7bbab',
        },
        charcoal: {
          DEFAULT: '#1f1f1d',
          soft: '#2a2a27',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(26,45,41,0.25)',
        glow: '0 0 0 1px rgba(219,177,127,0.35), 0 20px 50px -20px rgba(26,45,41,0.6)',
      },
      backgroundImage: {
        'leaf-pattern':
          "radial-gradient(circle at 20% 20%, rgba(219,177,127,0.18), transparent 40%), radial-gradient(circle at 80% 0%, rgba(219,177,127,0.10), transparent 40%), radial-gradient(circle at 50% 100%, rgba(219,177,127,0.10), transparent 40%)",
        'gold-fade': 'linear-gradient(135deg, #dbb17f 0%, #cf9a5e 100%)',
        'forest-fade': 'linear-gradient(135deg, #1a2d29 0%, #11201c 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
