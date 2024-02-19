module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  screens: {
    'sm': '640px',
    'md': '768px',
    'xl': '1280px',
    '2xl': '1536px',
  },
  theme: {
    extend: {
      screens: {
        'xs':'350px',
        'lg': '1004px',
        'mb':'400px',
      },
    },
  },
  plugins: [],
};