import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

export type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'color' | 'bold' | 'minimal' | 'position'
>

export const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,

  primary: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.orange};
    border: 0;
    border-radius: ${theme.border.borderRadiusSmall};

    &:hover {
      border: 0.2rem solid ${theme.colors.darkBlue};
    }
  `,

  secondary: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    border: 0;
    border-radius: ${theme.border.borderRadiusSmall};
    background-color: ${theme.colors.darkBlue};

    &:hover {
      border: 2px solid ${theme.colors.white};
    }
  `,

  outlined: (theme: DefaultTheme) => css`
    color: ${theme.colors.secondary};
    padding: ${theme.spacings.xsmall} ${theme.spacings.xmedium};
    background-color: ${theme.colors.white};
    border: 0.2rem solid ${theme.colors.secondary};
    border-radius: ${theme.border.borderRadiusSmall};

    &:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.darkGray};
    }
  `,

  withIcon: (theme: DefaultTheme, size: WrapperProps['size']) => css`
    gap: calc(${theme.spacings.xxsmall} * 2);

    svg {
      width: ${theme.icon.sizes[size!]};
      color: inherit;
    }
  `,

  minimal: (theme: DefaultTheme) => css`
    color: ${theme.colors.blue};
    background-color: transparent;
    border: 0;
    padding: calc(${theme.spacings.xxsmall} * 2) 0;

    &:hover {
      color: ${theme.colors.darkGray};
      background: none;
      border: 0;
    }
  `,

  left: () => css`
    flex-direction: row;
  `,

  right: () => css`
    flex-direction: row-reverse;
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, color, bold, hasIcon, minimal, position }) => css`
    cursor: pointer;
    display: inline-flex;
    padding: 2rem 4.8rem;
    align-items: center;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes[size!]};
    line-height: ${theme.font.sizes.xxlarge};
    text-decoration: none;

    ${!!bold &&
    css`
      font-weight: ${theme.font.semiBold};
    `}

    ${!!color && wrapperModifiers[color](theme)}
    ${!!hasIcon && wrapperModifiers.withIcon(theme, size)}
    ${!!minimal && wrapperModifiers.minimal(theme)}
    ${!!position && wrapperModifiers[position]()}
  `}
`
