import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';

import App from './App';
import { CategoriesProvider } from './contexts/categories.context';
import { UserContextProvider } from './contexts/user.context';
import { CartProvider } from './contexts/cart.context';
// import { store } from './store/store';

import './index.scss';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
