import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';
import AmountButtons from './AmountButtons';

const AddToCart = ({ product }) => {
    const { cart, addCartItem } = useCartContext();
    const [amount, setAmount] = useState(1);
    const inCart = cart.find((cartItem) => cartItem.id === product.id) ? true : false;

    const toggleAmount = (keyWord) => {
        setAmount((amount) => {
            keyWord === 'increase' ? amount++ : amount--;
            if (amount > product.stock) amount = product.stock;
            if (amount < 1) amount = 1;
            return amount;
        });
    };

    if (inCart) {
        return (
            <Link to={'/cart'} className='btn' style={{ marginTop: '0.25rem' }}>
                product in cart
            </Link>
        );
    }
    return (
        <>
            <AmountButtons amount={amount} toggleAmount={toggleAmount} />
            <Link to={'/cart'} className='btn' onClick={() => addCartItem(product, amount)}>
                add to cart
            </Link>
        </>
    );
};

export default AddToCart;
