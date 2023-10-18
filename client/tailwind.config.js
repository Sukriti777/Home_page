/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom: '10px 10px 0px 0px rgba(0, 0, 0, 0.5)', // Define your custom shadow here
        'inner-thick': 'inset 8px 8px 4px 2px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};
