import Alert from 'components/Alert';
import Toast from 'components/Toast';
import Routes from 'components/Routes';
import React, { memo, useState, useMemo } from 'react';
import { Router } from 'react-router-dom';
import history from 'services/history';
import ThemeContext, { IThemeContext, ThemesTypes } from 'assets/theme/context';
import { MuiThemeProvider } from '@material-ui/core/styles';
import themes from 'assets/theme';


export default function App(): JSX.Element {
  const [currentTheme, setCurrentTheme] = useState<ThemesTypes>(
    (localStorage.getItem('app-theme') ?? 'light') as ThemesTypes
  );
  const AlertGlobal = memo(Alert.Global);
  const ToastGlobal = memo(Toast.Global);

  const themeContext = useMemo<IThemeContext>(() => {
    return {
      currentTheme,
      toogleTheme: () => {
        const newTheme: ThemesTypes = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('app-theme', newTheme);
        setCurrentTheme(newTheme);
      }
    };
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={themeContext}>
      <MuiThemeProvider theme={themes[themeContext.currentTheme]}>
        <Router history={history}>
          <AlertGlobal />
          <ToastGlobal />
          <Routes />
        </Router>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
