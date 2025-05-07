'use client'

import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 37.33rem;
    align-items: center;
    flex-direction: column;
    gap: calc(${theme.spacings.xxsmall} * 2);
    color: ${theme.colors.yellow};

    ${media.lessThan('medium')`
      width: 36.1rem;
      `}
  `}
`

export const Value = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xhuge};
    font-weight: ${theme.font.bold};
    line-height: 1.1;

    ${media.lessThan('medium')`
      font-size: calc(${theme.font.sizes.xxlarge} * 2);
    `}
  `}
`

export const Label = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.normal};
    line-height: 1.6;

    ${media.lessThan('medium')`
      font-size: calc(${theme.font.sizes.medium});
      `}
  `}
`
