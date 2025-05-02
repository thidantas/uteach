import { screen } from '@testing-library/react'

import ArrowRightIcon from 'assets/icons/ArrowRight'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render the default primary color style', () => {
    renderWithTheme(<Button>Sign Up Now</Button>)

    expect(screen.getByRole('button', { name: /Sign Up Now/i })).toHaveStyle({
      backgroundColor: '#EA580C',
      color: '#FFFFFF'
    })
  })

  it('should render the secondary color style', () => {
    renderWithTheme(<Button color="secondary">Sign Up Now</Button>)

    expect(screen.getByRole('button', { name: /Sign Up Now/i })).toHaveStyle({
      backgroundColor: '#0F172A',
      color: '#FFFFFF'
    })
  })

  it('should render the outlined color style', () => {
    renderWithTheme(<Button color="outlined">Sign Up Now</Button>)

    expect(screen.getByRole('button', { name: /Sign Up Now/i })).toHaveStyle({
      backgroundColor: '#FFFFFF',
      color: '#0F172A',
      border: '0.2rem solid #0F172A'
    })
  })

  it('should render with bold font weight', () => {
    renderWithTheme(<Button bold>Sign Up Now</Button>)

    expect(screen.getByRole('button', { name: /Sign Up Now/i })).toHaveStyle({
      fontWeight: 700
    })
  })

  it('should render with icon on the left', () => {
    renderWithTheme(
      <Button icon={<ArrowRightIcon data-testid="icon" />} position="left">
        Sign Up Now
      </Button>
    )

    const button = screen.getByRole('button', { name: /Sign Up Now/i })
    expect(button.firstChild).toContainElement(screen.getByTestId('icon'))
  })

  it('should render with icon on the right', () => {
    const { container } = renderWithTheme(
      <Button icon={<ArrowRightIcon data-testid="icon" />} position="right">
        Sign Up Now
      </Button>
    )

    expect(container.firstChild).toHaveStyleRule(
      'flex-direction',
      'row-reverse'
    )
  })
})
