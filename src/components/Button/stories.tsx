import { Meta, StoryObj } from '@storybook/react'

import ArrowRightIcon from '@/assets/icons/ArrowRight'

import Button from '.'

export default {
  title: 'components/Button',
  component: Button,
  argsTypes: {
    children: {
      type: 'string'
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'inline-radio' }
    },
    color: {
      options: ['primary', 'secondary', 'outlined'],
      control: { type: 'inline-radio' }
    },
    bold: {
      control: { type: 'boolean' }
    },
    position: {
      options: ['right', 'left'],
      control: { type: 'inline-radio' }
    }
  }
} as Meta

export const Default: StoryObj = {
  args: {
    children: 'Sign Up Now'
  }
}

export const WithIcon: StoryObj = {
  args: {
    children: 'Sign Up Now',
    icon: <ArrowRightIcon />,
    position: 'right'
  }
}

export const AsLink: StoryObj = {
  args: {
    children: 'Find more about the app',
    icon: <ArrowRightIcon />,
    as: 'a',
    href: '#',
    minimal: true
  }
}
