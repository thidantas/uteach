import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render all 5 column headers', () => {
    renderWithTheme(<Footer />)

    expect(
      screen.getByRole('heading', { name: /product/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /soluctions/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /resources/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /support/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /company/i })
    ).toBeInTheDocument()
  })

  it('should render links inside each section', () => {
    renderWithTheme(<Footer />)

    expect(screen.getByRole('link', { name: /pricing/i })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /brainstorming/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /help center/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /developers/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
  })

  it('should render the request demo button', () => {
    renderWithTheme(<Footer />)

    expect(
      screen.getByRole('link', { name: /request demo/i })
    ).toBeInTheDocument()
  })

  it('should render copyright and support buttons', () => {
    renderWithTheme(<Footer />)

    expect(screen.getByText(/uteach @ 2025/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /terms/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /privacy/i })).toBeInTheDocument()

    const links = screen.getAllByRole('link', { name: /contact/i })
    expect(links[0]).toHaveAttribute('href', '#')
    expect(links[1]).toHaveAttribute('href', '#')

    const enButtons = screen.getAllByRole('link', { name: /EN/i })
    expect(enButtons[0]).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /EUR/i })).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = renderWithTheme(<Footer />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
