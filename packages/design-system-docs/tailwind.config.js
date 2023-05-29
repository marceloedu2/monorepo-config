/** @type {import('tailwindcss').Config} */
import {
  colors,
  fontFamily,
  screens,
  spaces as spacing,
  borderRadius,
  fontSizes as fontSize,
  lineHeights as lineHeight,
} from '@ton/style-guide'

module.exports = {
  content: [
    './src/stories/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx,mdx}',
  ],
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
