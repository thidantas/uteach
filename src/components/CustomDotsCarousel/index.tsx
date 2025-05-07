'use client'

import { RefObject } from 'react'
import SliderR from 'react-slick'

import Slider, { SliderSettings } from 'components/Slider'

import CarouselArrowLeftIcon from 'assets/icons/CarouselArrowLeft'
import CarouselArrowRightIcon from 'assets/icons/CarouselArrowRight'
import QuoteCard, { QuoteCardProps } from 'components/QuoteCard'

import * as S from './styles'

export type CustomDotsCarouselProps = {
  items: QuoteCardProps[]
  ref?: RefObject<SliderR | null>
}

interface ArrowProps {
  onClick?: () => void
  currentSlide?: number
  slideCount?: number
}

export const PrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <S.ArrowWrapper color="white" position="left" onClick={onClick}>
      <CarouselArrowLeftIcon />
    </S.ArrowWrapper>
  )
}

export const NextArrow = ({ onClick }: ArrowProps) => {
  return (
    <S.ArrowWrapper color="darkBlue" onClick={onClick}>
      <CarouselArrowRightIcon />
    </S.ArrowWrapper>
  )
}

const settings: SliderSettings = {
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  appendDots: (dots) => <ul>{dots}</ul>,
  customPaging: () => (
    <div className="ft-slick__dots--custom">
      <div className="loading" />
    </div>
  )
}

const CustomDotsCarousel = ({ items, ref }: CustomDotsCarouselProps) => (
  <S.Wrapper>
    <Slider settings={settings} ref={ref}>
      {items.map((item) => (
        <QuoteCard key={item.authorName} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default CustomDotsCarousel
