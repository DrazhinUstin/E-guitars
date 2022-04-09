import React from 'react';
import { FaTh, FaThList } from 'react-icons/fa';
import { useFilterContext } from '../context/filter_context';

const Sort = () => {
    const { gridView, toggleProductsView, filtered_products, sort, setSort } = useFilterContext();
    return (
        <div className='sort'>
            <button type='button' onClick={toggleProductsView}>
                {gridView ? <FaThList /> : <FaTh />}
            </button>
            <p>{filtered_products.length} items found</p>
            <select name='sort' value={sort} onChange={setSort}>
                <option value='price-lowest'>price: low - high</option>
                <option value='price-highest'>price: high - low</option>
                <option value='name-lowest'>name: a - z</option>
                <option value='name-highest'>name: z - a</option>
            </select>
        </div>
    );
};

export default Sort;
