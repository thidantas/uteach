'use client'

import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import GlobalStyles from 'styles/globals'

export function GlobalStylesProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
