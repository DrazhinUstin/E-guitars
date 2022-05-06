import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import {
    HomePage,
    ProductsPage,
    SingleProductPage,
    CartPage,
    CheckoutPage,
    AboutPage,
    Page404,
} from './pages';
import { Loading, Navbar, ScrollUpBtn, Footer } from './components';

const App = () => {
    const { isLoading } = useAuth0();
    if (isLoading) {
        return <Loading section className='min-100 grid-center' />;
    }
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='products' element={<ProductsPage />} />
                <Route path='products/:id' element={<SingleProductPage />} />
                <Route path='cart' element={<CartPage />} />
                <Route path='checkout' element={<CheckoutPage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
            <ScrollUpBtn />
            <Footer />
        </>
    );
};

export default App;
