import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { useCartContext } from '../../context/cart_context';
import { formatPrice } from '../../utils/helpers';
import AmountButtons from '../AmountButtons';

const CartItem = ({ id, title, price, amount, images }) => {
    const { removeCartItem, toggleCartItemAmount } = useCartContext();

    const toggleAmount = (keyWord) => {
        toggleCartItemAmount(id, keyWord);
    };

    return (
        <article className='cart-item'>
            <Link to={`/products/${id}`}>
                <img src={images[0]} alt={title} />
            </Link>
            <div>
                <div className='cart-item-title'>
                    <div>
                        <h4>{title}</h4>
                        <p>{formatPrice(price)}</p>
                    </div>
                    <AmountButtons amount={amount} toggleAmount={toggleAmount} />
                </div>
                <div className='cart-item-total'>
                    <button onClick={() => removeCartItem(id)}>
                        <FaTrashAlt />
                    </button>
                    <p>{formatPrice(price * amount)}</p>
                </div>
            </div>
        </article>
    );
};

export default CartItem;
