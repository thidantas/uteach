'use client'

import styled, { css } from 'styled-components'

import * as ButtonStyles from 'components/Button/styles'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${ButtonStyles.Wrapper} {
    ${({ theme }) => css`
      padding: 0;

      &:hover {
        color: ${theme.colors.white};
        text-decoration: underline;
      }
    `}
  }

  ${({ theme }) => css`
    display: flex;
    padding-top: ${theme.spacings.xlarge};
    padding-bottom: ${theme.spacings.xsmall};
    flex-direction: column;

    ${media.lessThan('medium')`
      padding-bottom: ${theme.spacings.xmedium};
    `}
  `}
`

export const FooterLinksArea = styled.div`
  display: flex;
  gap: 48px;
`

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;

    width: 16.6%;
    height: ${theme.icon.sizes.xxxlarge};

    svg {
      height: ${theme.icon.sizes.xxxlarge};
    }

    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`

export const NavContent = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: ${theme.spacings.xlarge};
    width: 83.4%;

    ${media.lessThan('medium')`
      grid-template-columns: none;
      grid-template-rows: 3.2rem repeat(5, 1fr);
      gap: ${theme.spacings.medium};
      width: 100%;
      `}
  `}
`

export const AccessibilityLink = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xxsmall};
  `}
`

export const Column = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} 0;
    flex-direction: row;
    gap: ${theme.spacings.xmedium};
  `}
`

export const Header = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
  `}
`

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.spacings.xmedium};
    gap: ${theme.spacings.xmedium};
    flex-direction: column;

    a {
      width: fit-content;
      height: fit-content;
      text-decoration: none;
      color: ${theme.colors.blueGray};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.normal};
      line-height: 140%;
    }

    a:hover {
      text-decoration: underline;
    }
  `}
`

export const Divider = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.spacings.xlarge};
    margin-bottom: ${theme.spacings.xsmall};
    height: 1px;
    background-color: ${theme.colors.darkGray};
  `}
`

export const WrapperCopyright = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  ${media.lessThan('medium')`
    align-items: flex-start;
    flex-direction: column;
    gap: 2.5rem;
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.blueGray};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    line-height: 140%;
  `}
`

export const SupportSection = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacings.xsmall} 0;
    gap: ${theme.spacings.medium};

    a {
      width: fit-content;
      height: fit-content;
      text-decoration: none;
      color: ${theme.colors.blueGray};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.normal};
      line-height: 1.4;
      gap: ${theme.spacings.xxsmall};
    }

    a:hover {
      text-decoration: underline;
    }

    ${media.lessThan('medium')`
     flex-wrap: wrap;
    `}
  `}
`

export const WrapperIcon = styled.div`
  height: 2rem;

  svg {
    width: 2rem;
    height: 2rem;
  }
`

export const MediaWrapperLogo = styled.div`
  svg {
    height: 3.5rem;
  }
`
