/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: [
        './src/**/*.{js,jsx,ts,tsx}'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            flexGrow: {
                '1': 1,
                '2': 2,
                '3': 3,
                // Add more values as needed
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
  