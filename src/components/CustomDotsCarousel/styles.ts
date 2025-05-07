import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 1280px;
  height: 41.5rem;

  ${media.lessThan('medium')`
  padding: 4.8rem 0;
  width: 100%;
    `}

  .slick-slider {
    position: relative;
  }

  .slick-current {
    height: 744.14px;

    ${media.lessThan('medium')`
      height: auto;
      `}
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

    ${media.lessThan('medium')`
      display: none;
      `}
  `}
`
