import Image from 'next/image'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: ${theme.grid.containerGutter} 0;
    gap: ${theme.grid.containerGutter};
    width: 1280px;
  `}
`

export const QuoteBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: 4.5rem 0;
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.normal};
    line-height: 1.6;
    width: 52.8rem;
    gap: calc(${theme.spacings.xxsmall} * 2);
  `}
`

export const AuthorQuote = styled.p`
  margin: 0;
`

export const AuthorInfo = styled.div`
  ${({ theme }) => css`
    span {
      font-weight: ${theme.font.semiBold};
    }
  `}
`

export const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  z-index: 1;
  width: 52.8rem;
  height: 57.311rem;
`

export const ImageContainer = styled.div`
  position: relative;
  width: 98.8%;
  height: 41.5rem;
`

export const StyledImage = styled(Image)`
  object-fit: fill;
`

export const GridMatrixWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 5.5%;
  margin-left: 23px;
`

export const DarkRectangle = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: absolute;
    width: 49.563rem;
    height: 57.311rem;
    top: 24.5px;
    left: -4px;
    border-radius: ${theme.border.borderRadiusXLarge};
    background: ${theme.colors.darkBlue};
    transform: rotate(-29deg);
    z-index: -1;
  `}
`

export const ChatQuoteIcon = styled.div`
  display: flex;
  position: absolute;
  margin-left: 40rem;
  left: 10px;
  bottom: 0px;
  top: 20px;
`
