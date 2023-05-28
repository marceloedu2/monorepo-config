import { themes } from '@storybook/theming'
import './fonts/tonCondensed.css'
import './fonts/inter.css'
import '@ton/design-system/src/styles.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
}
