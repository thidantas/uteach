'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 37.33rem;
    align-items: center;
    flex-direction: column;
    gap: calc(${theme.spacings.xxsmall} * 2);
    color: ${theme.colors.yellow};
  `}
`

export const Value = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xhuge};
    font-weight: ${theme.font.bold};
    line-height: 1.1;
  `}
`

export const Label = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.normal};
    line-height: 1.6;
  `}
`
