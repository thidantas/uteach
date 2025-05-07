import Image from 'next/image'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: ${theme.grid.containerGutter} 0;
    gap: ${theme.grid.containerGutter};
    max-width: 1280px;

    ${media.lessThan('medium')`
      flex-direction: column;
      position: relative;
      gap: ${theme.spacings.medium};
      padding-top: 4.8rem;
      padding-bottom: 4.8rem;
      `}
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

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.large};
      width: 36.1rem;
      margin: 5.5rem 0;
      `}
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
  height: 57.31rem;

  ${media.lessThan('medium')`
   width: 36.1rem;
   height: 39.4rem;
    `}
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 41.15rem;

  ${media.lessThan('medium')`
    height: 41.15rem;
    left: 0%;
    top: -10%;
  `}
`

export const StyledImage = styled(Image)`
  object-fit: fill;
`

export const GridMatrixWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 5.5%;
  margin-left: 23px;

  ${media.lessThan('medium')`
    bottom: -5%;
  `}
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

    ${media.lessThan('medium')`
    top: 2%;
    left: 8%;
    width: 32.57rem;
    height: 35.56rem;
    transform: rotate(-29deg);
      `}
  `}
`

export const ChatQuoteIcon = styled.div`
  display: flex;
  position: absolute;
  margin-left: 40rem;
  left: 10px;
  bottom: 0px;
  top: 20px;

  ${media.lessThan('medium')`
    left: -28%;
    top: -10.5%;
  `}
`
