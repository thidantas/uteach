import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 1280px;
  height: 41.5rem;

  .slick-slider {
    position: relative;
  }

  .slick-current {
    height: 744.14px;
  }

  .slick-prev,
  .slick-next {
    background: none;
    box-shadow: none;
  }

  .slick-prev:hover,
  .slick-next:hover {
    background: none;
  }
`

export const Content = styled.div`
  display: flex;
`

export const QuoteBlock = styled.div`
  margin: 4.5rem 0;
`

type ArrowProps = {
  color: 'white' | 'darkBlue'
  position?: 'left' | 'right'
}

export const ArrowWrapper = styled.div<ArrowProps>`
  ${({ theme, color, position }) => css`
    position: absolute;
    right: 0;
    left: ${position === 'left' ? `0.3rem` : '126rem'};
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    cursor: pointer;
    width: fit-content;

    svg {
      color: ${theme.colors[color]};
    }

    &:hover {
      svg {
        color: ${color === 'white'
          ? `${theme.colors.darkBlue}`
          : `${theme.colors.white}`};
      }
    }
  `}
`
