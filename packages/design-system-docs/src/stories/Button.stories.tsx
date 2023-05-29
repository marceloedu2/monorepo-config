import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ton/design-system'

export default {
  title: 'Forms/Button',
  component: Button,
  args: {
    children: 'Escolha sua maquininha',
    color: 'primary',
    size: 'regular',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    color: 'secondary',
  },
}

export const StonePrimary: StoryObj<ButtonProps> = {
  args: {
    color: 'stone-primary',
  },
}
export const Disable: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
}

export const Regular: StoryObj<ButtonProps> = {
  args: {
    size: 'regular',
  },
}

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
  },
}
