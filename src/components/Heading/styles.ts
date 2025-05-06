import styled, { css, DefaultTheme } from 'styled-components'

import { HeadingProps } from '.'

export const wrapperModifiers = {
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `,

  xhuge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xhuge};
  `
}

type WrapperProps = Pick<HeadingProps, 'size' | 'color'>

export const Wrapper = styled.h1<WrapperProps>`
  ${({ theme, size, color }) => css`
    color: ${theme.colors[color!]};
    font-weight: ${theme.font.bold};
    line-height: 1.2;
    ${!!size && wrapperModifiers[size](theme)};
  `}
`

export const Highlight = styled.span`
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 2.4rem;
    background: url("data:image/svg+xml,%3Csvg width='196' height='23' viewBox='0 0 196 23' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.5 9C25.5 6.5 116.5 1.63771 191 9C152.328 9 101.942 9.74446 69.5 17.5' stroke='%23FB923C' stroke-width='10' stroke-linejoin='round'/%3E%3C/svg%3E")
      no-repeat center;
    background-size: contain;
    pointer-events: none;
    z-index: -1;
  }
`

export const StyledSpan = styled.span`
  display: inline-block;
  position: relative;
`

export const IconAbove = styled.span`
  position: relative;
  display: inline-block;

  &::before {
    content: '';
    position: absolute;
    top: -4.3rem;
    left: 85%;
    transform: translateX(-50%);
    width: 6.4rem;
    height: 6.4rem;
    background: url("data:image/svg+xml,%3Csvg width='64' height='65' viewBox='0 0 64 65' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1_11897)'%3E%3Cpath d='M39.0372 27.8536L51.9162 24.4027C53.2825 24.0366 54.7382 24.2283 55.9632 24.9355C57.1882 25.6428 58.0821 26.8077 58.4482 28.1739C58.8143 29.5402 58.6226 30.996 57.9154 32.221C57.2081 33.446 56.0432 34.3398 54.6769 34.7059L16.0399 45.0587L4.17138 31.6744L11.8988 29.6039L18.4308 33.3751L26.1582 31.3046L16.1753 14.6543L23.9027 12.5838L39.0372 27.8536Z' stroke='%23FACC15' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8 56.5H56' stroke='%23FACC15' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1_11897'%3E%3Crect width='64' height='64' fill='white' transform='translate(0 0.5)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")
      no-repeat center;
    background-size: contain;
    pointer-events: none;
    z-index: -1;
  }
`
