import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ton/design-system'

export default {
  title: 'Forms/Button',
  component: Button,
  argTypes: {
    color: {
      options: ['primary', 'primary-reverse', 'secondary', 'stone-primary'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'regular', 'large'],
      control: { type: 'select' },
    },
  },
  args: {
    children: "don't click me",
    color: 'primary',
    size: 'regular',
    disabled: false,
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    color: 'primary',
  },
}

export const PrimaryReverse: StoryObj<ButtonProps> = {
  args: {
    color: 'primary-reverse',
  },
}

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
