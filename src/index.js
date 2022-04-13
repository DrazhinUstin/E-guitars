import React from 'react';
import ReactDOM from 'react-dom';
import './scss/styles.scss';
import App from './App';
import { GlobalProvider } from './context/global_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';

ReactDOM.render(
    <React.StrictMode>
        <GlobalProvider>
            <FilterProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </FilterProvider>
        </GlobalProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
