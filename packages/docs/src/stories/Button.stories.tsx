import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ton/components'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
