import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.lessThan('medium')`
    width: 100%;
    max-width: 36.1rem;
  `}
`

export const Form = styled.form`
  display: flex;

  flex-direction: column;
  align-items: center;
`

export const Label = styled.label`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.medium};
    line-height: 1;
    color: ${theme.colors.white};
    gap: ${theme.spacings.small};
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    display: flex;
    width: 55rem;
    height: 5rem;
    border: none;
    padding-top: 1.688rem;
    padding-bottom: 1.712rem;
    font: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.medium};
    line-height: 1;
    margin-bottom: ${theme.spacings.small};
    color: ${theme.colors.darkBlue};
    border-radius: ${theme.border.borderRadiusMedium};
    background-color: ${theme.colors.white};
    padding-left: 2.438rem;

    &:focus {
      outline: 2px solid ${theme.colors.darkGray};
      outline-offset: -2px;
    }

    &::placeholder {
      font-family: ${theme.font.family};
      color: ${theme.colors.lightGray};
    }
  `}

  ${media.lessThan('medium')`
    width: 36.1rem;
  `}
`

export const TextArea = styled.textarea`
  ${({ theme }) => css`
    display: flex;
    resize: none;
    border: none;
    border-radius: ${theme.border.borderRadiusMedium};
    width: 55rem;
    height: 8rem;
    font: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.medium};
    line-height: 1;
    color: ${theme.colors.darkBlue};
    padding-left: 2.438rem;
    padding-top: 1.988rem;
    margin-bottom: ${theme.spacings.medium};

    &:focus {
      outline: 2px solid ${theme.colors.darkGray};
      outline-offset: -2px;
    }

    &::placeholder {
      font-family: ${theme.font.family};
      color: ${theme.colors.lightGray};
    }

    ${media.lessThan('medium')`
    width: 36.1rem;
  `}
  `}
`
