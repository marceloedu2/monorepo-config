/** @type {import('tailwindcss').Config} */
import {
  colors,
  fontFamily,
  screens,
  spaces as spacing,
  borderRadius,
  fontSizes as fontSize,
  lineHeights as lineHeight,
} from '@ton/tokens'

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors,
      fontFamily,
      screens,
      spacing,
      borderRadius,
      fontSize,
      lineHeight,
    },
  },
  plugins: [],
}
