import {
  css,
  DefaultTheme,
  createGlobalStyle,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
} & { theme?: DefaultTheme }

const GlobalStyles: GlobalStyleComponent<GlobalStylesProps, DefaultTheme> =
  createGlobalStyle`
@font-face {
  font-display: swap;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/roboto-v47-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}

@font-face {
  font-display: swap;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  src: url('../fonts/roboto-v47-latin-500.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}

@font-face {
  font-display: swap;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  src: url('../fonts/roboto-v47-latin-700.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}

@font-face {
  font-display: swap;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 800;
  src: url('../fonts/roboto-v47-latin-800.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &::before,
  &::after {
    box-sizing: inherit;
  }
}

${({ theme, removeBg }) => css`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};

    ${!removeBg &&
    css`
      background-color: ${theme.colors.white};
    `}
  }
`}
`

export default GlobalStyles
