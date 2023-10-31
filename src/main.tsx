import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './page/index.tsx';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from './styles/colors.ts';
import { GlobalStyle } from './styles/global.ts';
import { TransactionsProvider } from './context/context.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={ DefaultTheme }>
      <TransactionsProvider>
        <Home/>
        <GlobalStyle/>
      </TransactionsProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
