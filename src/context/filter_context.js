import React, { useContext, useReducer, useEffect } from 'react';
import reducer from '../reducers/filter_reducer';
import { useGlobalContext } from './global_context';

const FilterContext = React.createContext();
const useFilterContext = () => useContext(FilterContext);

const initState = {
    all_products: [],
    filtered_products: [],
    sort: 'price-lowest',
    gridView: true,
    filters: {
        text: '',
        brand: 'all',
        design: 'all',
        color: 'all',
        minPrice: 0,
        price: 0,
        maxPrice: 0,
        caseIncluded: false,
    },
};

const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState);
    const { products } = useGlobalContext();

    useEffect(() => {
        dispatch({ type: 'GET_PRODUCTS', payload: products || [] });
    }, [products]);

    useEffect(() => {
        dispatch({ type: 'FILTER_PRODUCTS' });
        dispatch({ type: 'SORT_PRODUCTS' });
    }, [products, state.filters, state.sort]);

    const toggleProductsView = () => {
        dispatch({ type: 'TOGGLE_PRODUCTS_VIEW' });
    };

    const setSort = (e) => {
        dispatch({ type: 'SET_SORT', payload: e.target.value });
    };

    const setFilters = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === 'brand') value = e.target.dataset.brand;
        if (name === 'color') value = e.target.dataset.color;
        if (name === 'price') value = +value;
        if (name === 'caseIncluded') value = e.target.checked;
        dispatch({ type: 'SET_FILTERS', payload: { name, value } });
    };

    const clearFilters = () => {
        dispatch({ type: 'CLEAR_FILTERS' });
    };

    return (
        <FilterContext.Provider
            value={{ ...state, toggleProductsView, setSort, setFilters, clearFilters }}
        >
            {children}
        </FilterContext.Provider>
    );
};

export { FilterProvider, useFilterContext };
