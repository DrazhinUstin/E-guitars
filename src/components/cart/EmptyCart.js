import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
    return (
        <section className='section section-center text-center'>
            <h2 style={{ marginBottom: '2rem' }}>your cart is empty!</h2>
            <Link to={'/products'} className='btn'>
                fill it now
            </Link>
        </section>
    );
};

export default EmptyCart;
