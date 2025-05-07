'use client'

import { RefObject } from 'react'
import SlickSlider, { Settings } from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import * as S from './styles'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
  ref?: RefObject<SlickSlider | null>
}

const Slider = ({ children, settings, ref }: SliderProps) => {
  return (
    <S.SliderContainer>
      <SlickSlider {...settings} ref={ref}>
        {children}
      </SlickSlider>
    </S.SliderContainer>
  )
}

export default Slider
