const { heroui } = require('@heroui/react');
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{page.tsx,page.ts}',  // Tambahkan .page.tsx
    './src/pages/**/*.{js,ts,jsx,tsx}',     // Keep yang lama juga
    './src/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', ...fontFamily.sans],
        secondary: ['Roboto', ...fontFamily.sans],
      },
      colors: {
        // gray: {
        //   100: '#fffefd',
        //   200: 'rgba(255, 255, 255, 0.32)',
        // },
        neutral: {
          100: '#121212',
        },
        black: {
          100: '#1c1c1c',
          200: '#000',
        },
        navajowhite: '#ffd8a5',
        secondary: '#fb991a',
        grey: '#a6a6a6',
        white: '#fff',
        lightblue: '#92c9da',
        darkslategray: '#272d4e',
        pink: '#ffc1b8',
        red: '#cd3c3c',
        wheat: '#ffe0b8',
        primary: {
          blue: '#1b7691',
          typo: '#333333',
          light: '#f5f5f5',
          bluegreen: '#1b7691',
          white: '#fff',
          yellow: '#ffd600',
          orange: '#fb991a',
        },
      },
      boxShadow: {
        20: '0px 0.5px 2px rgba(65, 78, 98, 0.12), 0px 0px 1px rgba(65, 78, 98, 0.05)',
        40: '0px 2px 4px rgba(65, 78, 98, 0.12), 0px 0px 1px rgba(65, 78, 98, 0.05)',
        60: '0px 4px 8px rgba(65, 78, 98, 0.12), 0px 0px 1px rgba(65, 78, 98, 0.05);',
        80: '0px 8px 16px rgba(65, 78, 98, 0.12), 0px 0px 1px rgba(65, 78, 98, 0.05);',
        100: '0px 16px 24px rgba(65, 78, 98, 0.12), 0px 0px 1px rgba(65, 78, 98, 0.05);',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms'), heroui()],
};
