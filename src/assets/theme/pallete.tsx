import { blueGrey, green, lightGreen } from '@material-ui/core/colors';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

import { ThemesTypes } from './context';

const Pallete: { [key in ThemesTypes]: PaletteOptions } = {
  light: {
    grey: blueGrey,
    type: 'light',
    primary: {
      light: lightGreen[500],
      main: blueGrey[700],
      dark: blueGrey[900],
      contrastText: '#fff'
    },
    secondary: {
      light: blueGrey[100],
      main: lightGreen[500],
      dark: lightGreen[300],
      contrastText: '#fff'
    }
  },
  dark: {
    type: 'dark',
    primary: {
      light: green[100],
      main: green[400],
      dark: green[800],
      contrastText: '#fff'
    },
    secondary: {
      light: green[100],
      main: green[400],
      dark: green[800],
      contrastText: '#fff'
    }
  }
};

export default Pallete;
