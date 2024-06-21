/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: [
        './src/**/*.{js,jsx,ts,tsx}'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            transitionDelay: ['hover', 'focus'],
            transitionTimingFunction: ['hover', 'focus'],
            transitionDuration: ['hover', 'focus'],
            
        },
    },
    plugins: [],
}
  