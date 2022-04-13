const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CART_ITEM':
            return { ...state, cart: [...state.cart, action.payload] };
        case 'REMOVE_CART_ITEM': {
            const tempCart = state.cart.filter((cartItem) => cartItem.id !== action.payload);
            return { ...state, cart: tempCart };
        }
        case 'TOGGLE_CART_ITEM_AMOUNT': {
            const { id, keyWord } = action.payload;
            const tempCart = state.cart.map((cartItem) => {
                if (cartItem.id === id) {
                    let amount = cartItem.amount;
                    keyWord === 'increase' ? amount++ : amount--;
                    if (amount > cartItem.stock) amount = cartItem.stock;
                    if (amount < 1) amount = 1;
                    return { ...cartItem, amount };
                }
                return cartItem;
            });
            return { ...state, cart: tempCart };
        }
        case 'CLEAR_CART':
            return { ...state, cart: [] };
        case 'CALCULATE_TOTALS':
            const { totalAmount, totalPrice } = state.cart.reduce(
                (totals, cartItem) => {
                    const { amount, price } = cartItem;
                    totals.totalAmount += amount;
                    totals.totalPrice += amount * price;
                    return totals;
                },
                { totalAmount: 0, totalPrice: 0 }
            );
            return { ...state, totalAmount, totalPrice };
        default:
            throw new Error(`No such action - ${action.type}`);
    }
};

export default reducer;
