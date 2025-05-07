'use client'

import { RefObject } from 'react'
import SliderR from 'react-slick'

import Slider, { SliderSettings } from 'components/Slider'
import ReviewHighlight, {
  ReviewHighlightProps
} from 'components/ReviewHighlight'

export type ReviewHighlightSliderProps = {
  items: ReviewHighlightProps[]
  ref?: RefObject<SliderR | null>
}

const settings: SliderSettings = {
  infinite: false,
  arrows: false,

  speed: 500,
  slidesToShow: 3.2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1.2 }
    }
  ]
}

const ReviewHighlightSlider = ({ items, ref }: ReviewHighlightSliderProps) => (
  <Slider settings={settings} ref={ref}>
    {items.map((item) => (
      <ReviewHighlight key={item.userName} {...item} />
    ))}
  </Slider>
)

export default ReviewHighlightSlider
