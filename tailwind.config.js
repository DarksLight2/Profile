/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.html", "./src/**/*.vue"],
  theme: {
    extend: {
      rotate: {
        150: '150deg'
      },
      fontFamily: {
        montserrat: ['Montserrat']
      },
      fontSize: {
        title: ['20px', {
          fontWeight: '500',
        }],
        content: ['14px', {
          fontWeight: '400',
        }],
        'title-lg': ['24px', {
          fontWeight: '500',
        }],
        'content-lg': ['16px', {
          fontWeight: '400',
        }],
      },
      colors: {
        'primary': {
          DEFAULT: "#091228",
          800: "#2a324a",
          700: "#494f6a",
          600: "#5c627e",
          500: "#848aa7",
          400: "#a4aac9",
          300: "#c9cfee",
          200: "#dbe1ff",
          100: "#e7edff",
          50: "#f0f6ff",
        },
        'secondary': {
          DEFAULT: "#979eb0",
          900: "#292d39",
          800: "#3c4150",
          700: "#4c5366",
          600: "#5d677c",
          500: "#6b758d",
          400: "#81899e",
          200: "#b4b9c8",
          100: "#d1d5df",
          50: "#edeef4",
        },
      }
    },
  },
  plugins: [
      require('@tailwindcss/forms')
  ],
}