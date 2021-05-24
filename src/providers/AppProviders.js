import { AuthProvider } from 'hooks/UseAuth';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

function AppProviders({ children }) {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <GlobalStyle />
          {children}
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default AppProviders;
