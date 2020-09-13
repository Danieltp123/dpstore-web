import { deepOrange, green, grey } from '@material-ui/core/colors';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

import { ThemesTypes } from './context';

const Pallete: { [key in ThemesTypes]: PaletteOptions } = {
  light: {
    // grey: deepOrange,
    type: 'light',
    primary: {
      light: grey[500],
      main: deepOrange[700],
      dark: deepOrange[900],
      contrastText: '#fff'
    },
    secondary: {
      light: deepOrange[100],
      main: grey[900],
      dark: grey[300],
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
