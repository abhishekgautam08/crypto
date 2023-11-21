import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ScopedCssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import theme from "./theme.js";
import "react-alice-carousel/lib/alice-carousel.css";
import CryptoContext from "./CryptoContext.js";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline />
      <CryptoContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CryptoContext>
    </ThemeProvider>
  </React.StrictMode>
);

