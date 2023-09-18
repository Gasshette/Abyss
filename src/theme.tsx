import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  // Only for custom new properties
}

const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: '#0B2447',
        },
        secondary: {
          main: '#19376D',
        },
        info: {
          main: '#A5D7E8', // à tester: '#576CBC' more blueish
        },
      },
    },
  },
  typography: {
    fontFamily: 'Century Gothic, Roboto',
  },
});

export default theme;
