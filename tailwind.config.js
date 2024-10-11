/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-custom': 'linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)',
      },
      colors: {
        customGray: 'rgba(233, 239, 244, 1)',  // Add custom gray color
      },
    },
  },
  plugins: [],
}
