import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, ProductsPage, SingleProductPage, CartPage, Page404 } from './pages';
import { Navbar } from './components';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='products' element={<ProductsPage />} />
                <Route path='products/:id' element={<SingleProductPage />} />
                <Route path='cart' element={<CartPage />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
        </Router>
    );
};

export default App;
