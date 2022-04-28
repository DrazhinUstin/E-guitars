import React from 'react';
import ReactDOM from 'react-dom';
import './scss/styles.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0Wrapper from './Auth0Wrapper';
import { GlobalProvider } from './context/global_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Auth0Wrapper>
                <GlobalProvider>
                    <FilterProvider>
                        <CartProvider>
                            <App />
                        </CartProvider>
                    </FilterProvider>
                </GlobalProvider>
            </Auth0Wrapper>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
