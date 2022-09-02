import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { theme } from './constants';
import { store } from 'store';
import AppRoutes from './routes';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
