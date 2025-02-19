/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom: '10px 10px 0px 0px rgba(0, 0, 0, 0.5)', // Define your custom shadow here
      },
    },
  },
  plugins: [],
};
