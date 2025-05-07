'use client'

import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding-left: ${theme.grid.containerGutter};
    padding-right: ${theme.grid.containerGutter};

    ${media.lessThan('medium')`
      max-width: 39.3rem;
      padding-left: calc(${theme.spacings.xxsmall} * 2);
      padding-right: calc(${theme.spacings.xxsmall} * 2);
    `}
  `}
`
