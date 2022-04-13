import React, { useContext, useReducer, useEffect } from 'react';
import reducer from '../reducers/cart_reducer';
import { getStorageItem, setStorageItem } from '../utils/helpers';

const CartContext = React.createContext();
const useCartContext = () => useContext(CartContext);

const initState = {
    cart: getStorageItem('cart'),
    totalAmount: 0,
    totalPrice: 0,
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState);

    useEffect(() => {
        calculateTotals();
        setStorageItem('cart', state.cart);
    }, [state.cart]);

    const addCartItem = (product, amount) => {
        dispatch({ type: 'ADD_CART_ITEM', payload: { ...product, amount } });
    };

    const removeCartItem = (id) => {
        dispatch({ type: 'REMOVE_CART_ITEM', payload: id });
    };

    const toggleCartItemAmount = (id, keyWord) => {
        dispatch({ type: 'TOGGLE_CART_ITEM_AMOUNT', payload: { id, keyWord } });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const calculateTotals = () => {
        dispatch({ type: 'CALCULATE_TOTALS' });
    };

    return (
        <CartContext.Provider
            value={{ ...state, addCartItem, removeCartItem, toggleCartItemAmount, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, useCartContext };
