/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FAF7F2',
          light: '#FFFFFF',
          dark: '#F3EDE2',
        },
        beige: {
          DEFAULT: '#EDE3D3',
          light: '#F8F4EE',
          dark: '#DECDB5',
        },
        walnut: {
          DEFAULT: '#5C4033',
          light: '#725243',
          dark: '#3E2A21',
        },
        charcoal: {
          DEFAULT: '#2B2B2B',
          light: '#3D3D3D',
          dark: '#1A1918',
        },
        gold: {
          DEFAULT: '#B8892B',
          light: '#D4AF37',
          dark: '#966E1F',
          muted: '#C8A355',
          soft: '#F4E8D1',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [],
}
