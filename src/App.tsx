import { MuiThemeProvider } from '@material-ui/core/styles';
import themes from 'assets/theme';
import ThemeContext, { IThemeContext, ThemesTypes } from 'assets/theme/context';
import Alert from 'components/Alert';
import Routes from 'components/Routes';
import { ShoppingCartProvider } from 'components/ShoppingCart/Context';
import Toast from 'components/Toast';
import React, { memo, useMemo, useState } from 'react';
import { ApolloProvider } from 'react-apollo';
import { Router } from 'react-router-dom';
import client from 'services/apollo';
import history from 'services/history';

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
        <ApolloProvider client={client}>
          <ShoppingCartProvider>
            <Router history={history}>
              <AlertGlobal />
              <ToastGlobal />
              <Routes />
            </Router>
          </ShoppingCartProvider>
        </ApolloProvider>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
