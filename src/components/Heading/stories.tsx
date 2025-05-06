import { Meta, StoryObj } from '@storybook/react'

import Heading from '.'

export default {
  title: 'components/Heading',
  component: Heading
} as Meta

export const Default: StoryObj = {}

Default.args = {
  children: 'Most Populars',
  color: 'black'
}
