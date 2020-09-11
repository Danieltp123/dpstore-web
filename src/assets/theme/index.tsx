import { ptBR } from '@material-ui/core/locale';
import createMuiTheme, { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

import { ThemesTypes } from './context';
import overrides from './overrides';
import pallete from './pallete';
import props from './props';
import typography from './typography';

const theme: ThemeOptions = {
  overrides,
  props,
  typography
}

const themes: { [key in ThemesTypes]: ReturnType<typeof createMuiTheme> } = {
  light: createMuiTheme(
    {
      ...theme,
      palette: pallete.light
    },
    ptBR
  ),
  dark: createMuiTheme(
    {
      ...theme,
      palette: pallete.dark
    },
    ptBR
  )
};

export default themes;
