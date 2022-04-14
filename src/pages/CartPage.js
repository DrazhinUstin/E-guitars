import React from 'react';
import { useCartContext } from '../context/cart_context';
import { CrumbTrail, EmptyCart, CartItem, CartTotal } from '../components';

const CartPage = () => {
    const { cart, clearCart, totalPrice } = useCartContext();

    if (!cart.length) {
        return (
            <>
                <CrumbTrail title='cart' />
                <EmptyCart />
            </>
        );
    }
    return (
        <>
            <CrumbTrail title='cart' />
            <section className='section section-center'>
                <div className='section-title'>
                    <h2>your cart</h2>
                </div>
                <div className='cart'>
                    <div>
                        {cart.map((item) => (
                            <CartItem key={item.id} {...item} />
                        ))}
                    </div>
                    <CartTotal totalPrice={totalPrice} />
                </div>
                <button className='btn' onClick={clearCart}>
                    clear cart
                </button>
            </section>
        </>
    );
};

export default CartPage;
