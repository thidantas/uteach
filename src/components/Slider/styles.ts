import styled from 'styled-components'
import media from 'styled-media-query'

export const SliderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem 0;

  .slick-slider {
    position: relative;
  }

  .slick-list {
    overflow: hidden;
    border-radius: 8px;
  }

  .slick-slide > div {
    padding: 0 8px;
  }

  .slick-prev,
  .slick-next {
    z-index: 10;
    width: 32px;
    height: 32px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;

    &:hover {
      background: #f0f0f0;
    }
  }

  .slick-prev {
    left: -64px;
  }

  .slick-next {
    right: -64px;
  }

  .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }

  .slick-dots {
    position: absolute;
    top: 520px;
    left: 82px;
    display: block;
    width: fit-content;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;

    li {
      position: relative;
      display: inline-block;
      width: 8px;
      height: 8px;
      margin: 0 8px 0 0;
      cursor: pointer;
      transition: width 0.3s ease-in-out;

      button {
        font-size: 0;
        line-height: 0;
        display: block;
        width: 10px;
        height: 10px;
        padding: 5px;
        cursor: pointer;
        color: transparent;
        border: 0;
        outline: none;
        background: transparent;

        &:hover,
        &:focus {
          outline: none;
        }

        &:hover:before,
        &:focus:before {
          opacity: 1;
        }

        &:before {
          font-family: 'slick';
          font-size: 6px;
          line-height: 20px;
          position: absolute;
          top: 0;
          left: 0;
          width: 10px;
          height: 10px;
          content: '•';
          text-align: center;
          opacity: 0.25;
          color: black;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      }

      &.slick-active {
        width: 32px;

        button:before {
          opacity: 0.75;
          color: black;
        }

        .ft-slick__dots--custom {
          width: 32px;
          top: 0px;
          overflow: hidden;

          .loading {
            height: 8px;
            animation: loading 5s ease-in;
            background-image: linear-gradient(270deg, #141f38, #0f172a);
            display: inline-block;
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 10px;
          }
        }
      }
    }
  }

  .ft-slick__dots--custom {
    height: 8px;
    width: 8px;
    background-color: #ffffff;
    border-radius: 10px;
    position: relative;
  }

  @keyframes loading {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }

  ${media.lessThan('medium')`
    width: 45rem;

  .slick-prev,
  .slick-next {
    display: none;
  }

  .slick-dots {
    top: 438px;
    left: 45px;
  }
    `}
`
