'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xmedium} 0;
    width: 100%;
  `}
`

export const LogoWrapper = styled.div``

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
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    gap: calc(${theme.spacings.xxsmall});
  `}
`
