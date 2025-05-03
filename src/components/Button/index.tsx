import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  icon?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  bold?: boolean
  color?: 'primary' | 'secondary' | 'outlined'
  minimal?: boolean
  position?: 'left' | 'right'
  children?: React.ReactNode
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  icon,
  size = 'medium',
  bold = false,
  color = 'primary',
  minimal = false,
  position = 'right',
  children,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    size={size}
    color={color}
    bold={bold}
    hasIcon={!!icon}
    minimal={minimal}
    position={position}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
