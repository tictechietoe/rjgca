/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'custom-primary': '#282d3a',
        'custom-secondary': '#e0a965',
        'custom-tertiary': '#13161d',
        'custom-nav-color': '#fcfcfc',
        'custom-mark-color': '#e23e4e'
      },
      flexGrow: {
        '1': 1,
        '2': 2,
        '3': 3,
        // Add more values as needed
      },
      gridTemplateColumns: {
        'responsive': 'repeat(auto-fit, minmax(280px, 1fr))',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
