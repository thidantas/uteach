'use client'

import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

export type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'color' | 'bold' | 'semiBold' | 'minimal' | 'position'
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
      font-weight: ${theme.font.bold};
      border: 0.2rem solid ${theme.colors.darkBlue};
    }
  `,

  secondary: (theme: DefaultTheme) => css`
    border: 0;
    color: ${theme.colors.white};
    border-radius: ${theme.border.borderRadiusSmall};
    background-color: ${theme.colors.darkBlue};

    &:hover {
      font-weight: ${theme.font.bold};
      border: 2px solid ${theme.colors.white};
    }
  `,

  thirdy: (theme: DefaultTheme) => css`
    color: ${theme.colors.blue};

    &:hover {
      color: ${theme.colors.darkBlue};
    }
  `,

  outlined: (theme: DefaultTheme) => css`
    color: ${theme.colors.secondary};
    padding: ${theme.spacings.xsmall} ${theme.spacings.xsmall};
    background-color: ${theme.colors.white};
    border: 0.2rem solid ${theme.colors.secondary};
    border-radius: ${theme.border.borderRadiusSmall};
    width: 15.3rem;
    height: 4.8rem;

    span {
      width: 12.9rem;
    }

    &:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.darkBlue};
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
    background-color: transparent;
    border: 0;
    padding: calc(${theme.spacings.xxsmall} * 2) 0;
    width: fit-content;

    span {
      width: fit-content;
    }

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
    justify-content: flex-end;
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, color, bold, semiBold, hasIcon, minimal, position }) => css`
    cursor: pointer;
    display: inline-flex;
    padding: 2rem 2.4rem;
    align-items: center;
    justify-content: center;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes[size!]};
    line-height: ${theme.font.sizes.xxlarge};
    text-decoration: none;
    width: 23.9rem;
    height: 6.4rem;

    span {
      width: 19.1rem;
    }

    ${!!bold &&
    css`
      font-weight: ${theme.font.semiBold};
    `}

    ${!!semiBold &&
    css`
      font-weight: ${theme.font.medium};
    `}

    ${!!color && wrapperModifiers[color](theme)}
    ${!!hasIcon && wrapperModifiers.withIcon(theme, size)}
    ${!!minimal && wrapperModifiers.minimal(theme)}
    ${!!position && wrapperModifiers[position]()}
  `}
`
