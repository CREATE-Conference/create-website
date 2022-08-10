/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
    },
    boxShadow: {
      sm: '0px 4px 20px 3px rgba(82, 121, 111, 0.15);',
      md: '0px 4px 20px 3px rgba(82, 121, 111, 0.3)',
      lg: '0px 4px 20px 3px rgba(82, 121, 111, 0.5)',
    },
    colors: {
      transparent: 'transparent',
      'green-1': '#081C15',
      'green-2': '#52796F',
      'green-3': '#67776E',
      'green-4': '#96A49B',
      'green-5': '#F5FFF4',
      red: '#EF8D8D',
    },
    extend: {},
    screens: {
      '2xs': '360px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
