/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: '#C1440E',
          dark: '#9E3509',
          light: '#E8856A',
          50: '#FDF2EF',
        },
        gold: {
          DEFAULT: '#C9A84C',
          dark: '#A88A3A',
          light: '#E8D5A0',
          50: '#FDF9EE',
        },
        sand: {
          50: '#FDFAF6',
          100: '#F5EDD8',
          200: '#EDD9C0',
        },
        olive: {
          DEFAULT: '#4A6741',
          dark: '#2D4A1E',
          light: '#7A9970',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        arabic: ['"Noto Naskh Arabic"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
