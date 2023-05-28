import { ButtonHTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'
import classNames from 'classnames'
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  color?: 'primary' | 'secondary' | 'stone-primary'
  size?: 'small' | 'regular' | 'large'
}

export function Button({
  color = 'primary',
  size = 'regular',
  asChild,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : 'button'
  return (
    <Component
      className={classNames('font-default btn', {
        'btn-primary': color === 'primary',
        'btn-secondary': color === 'secondary',
        'btn-stone-primary': color === 'stone-primary',
        'btn-small': size === 'small',
        'btn-regular': size === 'regular',
        'btn-large': size === 'large',
      })}
      {...props}
    />
  )
}
