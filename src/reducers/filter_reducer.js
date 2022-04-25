const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            const maxPrice = Math.max(0, ...action.payload.map((item) => item.price));
            return {
                ...state,
                all_products: action.payload,
                filtered_products: action.payload,
                filters: { ...state.filters, maxPrice, price: maxPrice },
            };
        case 'TOGGLE_PRODUCTS_VIEW':
            return { ...state, gridView: !state.gridView };
        case 'SET_SORT':
            return { ...state, sort: action.payload };
        case 'SORT_PRODUCTS': {
            const tempProducts = [...state.filtered_products];
            if (state.sort === 'price-lowest') {
                tempProducts.sort((a, b) => a.price - b.price);
            }
            if (state.sort === 'price-highest') {
                tempProducts.sort((a, b) => b.price - a.price);
            }
            if (state.sort === 'name-lowest') {
                tempProducts.sort((a, b) => a.title.localeCompare(b.title, 'en-US'));
            }
            if (state.sort === 'name-highest') {
                tempProducts.sort((a, b) => b.title.localeCompare(a.title, 'en-US'));
            }
            return { ...state, filtered_products: tempProducts };
        }
        case 'SET_FILTERS':
            const { name, value } = action.payload;
            return { ...state, filters: { ...state.filters, [name]: value } };
        case 'FILTER_PRODUCTS': {
            const {
                all_products,
                filters: { text, brand, design, color, caseIncluded, inStock, price },
            } = state;
            let tempProducts = [...all_products];
            if (text) {
                tempProducts = tempProducts.filter((product) => {
                    return product.title.toLowerCase().startsWith(text.trim().toLowerCase());
                });
            }
            if (brand !== 'all') {
                tempProducts = tempProducts.filter((product) => product.brand === brand);
            }
            if (design !== 'all') {
                tempProducts = tempProducts.filter((product) => product.design === design);
            }
            if (color !== 'all') {
                tempProducts = tempProducts.filter((product) => product.color === color);
            }
            if (caseIncluded) {
                tempProducts = tempProducts.filter((product) => product.caseIncluded);
            }
            if (inStock) {
                tempProducts = tempProducts.filter((product) => product.stock);
            }
            tempProducts = tempProducts.filter((product) => product.price <= price);
            return { ...state, filtered_products: tempProducts };
        }
        case 'CLEAR_FILTERS':
            return {
                ...state,
                filters: {
                    text: '',
                    brand: 'all',
                    design: 'all',
                    color: 'all',
                    minPrice: 0,
                    price: state.filters.maxPrice,
                    maxPrice: state.filters.maxPrice,
                    caseIncluded: false,
                    inStock: false,
                },
            };
        default:
            throw new Error(`No such action - ${action.type}`);
    }
};

export default reducer;
