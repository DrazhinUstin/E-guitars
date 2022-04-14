import React from 'react';
import { Link } from 'react-router-dom';
import emptyBasket from '../../assets/empty_basket.png';

const EmptyCart = () => {
    return (
        <section className='section-center page-100-crumb grid-center'>
            <article className='text-center'>
                <h2>your cart is empty!</h2>
                <img
                    src={emptyBasket}
                    alt='empty basket'
                    style={{ width: '256px', height: '256px', margin: '2rem auto' }}
                />
                <Link to={'/products'} className='btn'>
                    fill it now
                </Link>
            </article>
        </section>
    );
};

export default EmptyCart;
