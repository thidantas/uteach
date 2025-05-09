'use client'

import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type WrapperProps = {
  color: string
  background: string
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, background, color }) => css`
    display: inline-flex;
    width: fit-content;
    padding: calc(${theme.spacings.xxsmall} / 4) ${theme.spacings.xxsmall};
    border-radius: calc(${theme.border.borderRadiusSmall} / 2);
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    background-color: ${background};
    color: ${color};
    font-weight: ${theme.font.normal};

    ${media.lessThan('medium')`
      width: 7.1rem;
      height: ${theme.spacings.xmedium}
      `}
  `}
`
