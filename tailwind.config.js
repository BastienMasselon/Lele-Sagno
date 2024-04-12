/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        current: 'currentColor',
        'UT-orange': '#FB8500',
        'lele-orange': '#FB9119',
        'selective-yellow': '#FFB703',
        'lighter-yellow': '#FFCC4E',
        'lele-blue': '#02547C',
        'prussian-blue': '#023047',
        'blue-green': '#219EBC',
        'sky-blue': '#8ECAE6',
      },
      fontFamily: {
        'brandon': ["BRANDON-LIGHT", "cursive"],
        'brandon-med': ["BRANDON-MED", "cursive"],
        'brandon-fat': ["BRANDON-BLD", "cursive"],
      },
      backgroundImage: {
        'foret-sacre': "url(/src/assets/img/foret-sacre.png)"
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
