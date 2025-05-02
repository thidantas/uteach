import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the logo with aria-label', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/site logo/i)).toBeInTheDocument()
  })

  it('should render menu links with aria-labels', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/go to products/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/go to solutions/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/go to pricing/i)).toBeInTheDocument()
  })

  it('should render auth buttons with aria-labels', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/log in/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/sign up now/i)).toBeInTheDocument()
  })
})
