import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/helpers';

const CartTotal = ({ totalPrice }) => {
    return (
        <div className='cart-total'>
            <h4>
                total: <span>{formatPrice(totalPrice)}</span>
            </h4>
            <Link to={'/checkout'} className='btn'>
                to checkout
            </Link>
            <div className='cart-total-line'>
                <span></span>
            </div>
            <Link to={'/products'} className='btn'>
                shopping more
            </Link>
        </div>
    );
};

export default CartTotal;
