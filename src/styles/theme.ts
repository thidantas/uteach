export default {
  grid: {
    container: '144rem',
    columnGutter: '3.2rem',
    containerGutter: '8.0rem'
  },
  border: {
    borderRadiusSmall: '0.8rem',
    borderRadiusMedium: '1.0rem',
    borderRadiusLarge: '2.0rem',
    borderRadiusXLarge: '5.0rem'
  },
  font: {
    family:
      "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    small: 300,
    normal: 400,
    medium: 500,
    semiBold: 700,
    bold: 800,
    sizes: {
      xxsmall: '0.8rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.4rem',
      xxxlarge: '3.2rem',
      huge: '5.6rem',
      xhuge: '7.2rem'
    }
  },
  icon: {
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.4rem',
      xxxlarge: '3.2rem',
      huge: '5.6rem'
    }
  },
  colors: {
    primary: '#FFFFFF',
    secondary: '#0F172A',
    orange: '#EA580C',
    darkBlue: '#0F172A',
    yellow: '#FACC15',
    white: '#FFFFFF',
    black: '#000000',
    blue: '#2563EB',
    blueGray: '#E2E8F0',
    blueGray600: '#475569',
    lightOrange: '#FB923C',
    lightGray: '#A6A6A6',
    darkGray: '#2E2F42'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.2rem',
    small: '2.0rem',
    xmedium: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
    huge: '8.0rem',
    xhuge: '9.0rem'
  }
} as const
