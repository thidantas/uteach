import type { Metadata } from 'next'

import StyledComponentsRegistry from 'lib/registry'
import { GlobalStylesProvider } from 'providers/GlobalStyleProvider'

export const metadata: Metadata = {
  title: 'Uteach',
  description: 'Uteach next application'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStylesProvider>{children}</GlobalStylesProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
