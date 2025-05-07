'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.white};
    border-radius: ${theme.border.borderRadiusLarge};
    padding: ${theme.spacings.medium};
    gap: calc(${theme.spacings.xxsmall} * 2);
    margin: 2rem 0;

    box-shadow:
      0 0 6px rgba(0, 0, 0, 0.07),
      0 10px 15px -3px rgba(0, 0, 0, 0.1);
  `}
`

export const UserReview = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    line-height: 1.6;
    color: ${theme.colors.darkBlue};
  `}
`
export const User = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: calc(${theme.spacings.xxsmall} * 2);
  `}
`

export const UserImage = styled.img``

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const UserName = styled.span``

export const UserProfession = styled.span``
