'use client'

import styled, { css } from 'styled-components'

import Button from 'components/Button'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    flex-direction: column;
    padding: calc(${theme.spacings.xxsmall} * 2);
    border-radius: ${theme.border.borderRadiusMedium};
    width: 20rem;
    height: 23.2rem;
    gap: calc(${theme.spacings.xxsmall} * 2);
    background-color: ${theme.colors.white};
    box-shadow:
      0 0 10px rgba(0, 0, 0, 0.07),
      0 20px 25px -5px rgba(0, 0, 0, 0.1);

    ${media.lessThan('medium')`
        width: 16rem;
        height: 23.2rem;
      `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
  `}
`

export const CustomButton = styled(Button)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.blue};
    font-weight: ${theme.font.medium};
    border: 0.2rem solid ${theme.colors.blue};
    padding: ${theme.spacings.xxsmall} 4.217rem;
    width: 16.833rem;
    height: ${theme.spacings.large};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.small};
      padding: ${theme.spacings.xxsmall} 2.2rem;
      width: 12.8rem;
      height: ${theme.spacings.large};
    `}

    &:hover {
      color: ${theme.colors.white};
      background: ${theme.colors.blue};
    }
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    display: inline-flex;
    margin: 0;
    color: ${theme.colors.blueGray600};
    font-size: ${theme.font.sizes.small};
    line-height: 1.4;
    font-weight: ${theme.font.normal};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.xsmall};
    `}
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.medium};
    line-height: 1.1;

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`
