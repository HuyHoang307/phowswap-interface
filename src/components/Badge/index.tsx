import React from 'react'

export type BadgeColor = 'default' | 'yellow' | 'pink' | 'gradient'
export type BadgeSize = 'default' | 'medium' | 'large'

export interface BadgeProps {
  children?: React.ReactChild | React.ReactChild[]
  color?: BadgeColor
  size?: BadgeSize
}

export const COLOR = {
  default: '',
  pink: 'bg-pink bg-opacity-20 outline-pink rounded text-xs text-pink px-2 py-1',
  yellow: 'bg-yellow bg-opacity-20 outline-yellow rounded text-xs text-yellow px-2 py-1',
  gradient:
    'bg-gradient-to-r from-pink to-yellow opacity-80 hover:opacity-100 bg-pink bg-opacity-20 outline-pink rounded text-base text-white px-2 py-1',
}

export const SIZE = {
  default: 'text-xs',
  medium: 'text-sm',
  large: 'text-lg',
}

function Badge({
  color = 'default',
  size = 'default',
  children,
  className = '',
}: BadgeProps & React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return <div className={`${COLOR[color]} ${SIZE[size]} ${className}`}>{children}</div>
}

export default Badge
