import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './pages/App.tsx';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from './styles/colors.ts';
import { GlobalStyle } from './styles/global.ts';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={ DefaultTheme }>
      <App />
      <GlobalStyle/>
    </ThemeProvider>
  </React.StrictMode>,
)
