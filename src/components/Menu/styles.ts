'use client'

import styled, { css } from 'styled-components'
import Button from '../Button'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xmedium} 0;
    width: 100%;

    ${media.lessThan('medium')`
      padding: calc(${theme.spacings.xxsmall} * 2 );
      `}
  `}
`

export const LogoWrapper = styled.div`
  svg {
  }
`

export const MenuNav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    margin-left: ${theme.spacings.xlarge};
    gap: ${theme.spacings.xlarge};
    flex-direction: row;
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.darkBlue};
    font-size: ${theme.font.sizes.medium};
    text-decoration: none;
    text-align: center;
    margin: ${theme.spacings.xsmall} ${theme.spacings.xxsmall};

    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.darkBlue};
        animation: hoverAnimation 0.2s forwards;

        @keyframes hoverAnimation {
          from {
            width: 0;
            left: 50%;
          }
          to {
            width: 100%;
            left: 0;
          }
        }
      }
    }
  `}
`

export const MenuGroup = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
`

export const MenuGroupButtons = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: calc(${theme.spacings.xxsmall} * 2);
  `}
`

export const NavDrawerWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.darkBlue};

    svg {
      color: inherit;
    }
  `}
`

export const CustomDrawerButton = styled(Button)`
  ${({ theme }) => css`
    width: fit-content;
    color: ${theme.colors.darkBlue};
  `}
`
