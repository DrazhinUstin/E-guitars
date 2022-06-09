import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { useFilterContext } from '../context/filter_context';
import { getUniqueValues, formatPrice } from '../utils/helpers';

const Filters = () => {
    const { all_products, filters, setFilters, clearFilters } = useFilterContext();
    const brands = getUniqueValues(all_products, 'brand');
    const designs = getUniqueValues(all_products, 'design');
    const colors = getUniqueValues(all_products, 'color');
    return (
        <form className='filters' onSubmit={(e) => e.preventDefault()}>
            <div className='filters-field'>
                <h4>search:</h4>
                <input
                    type='text'
                    placeholder='Enter product name'
                    autoComplete='off'
                    name='text'
                    value={filters.text}
                    onChange={setFilters}
                />
            </div>
            <div className='filters-field brand'>
                <h4>brand:</h4>
                {brands.map((brand, index) => {
                    return (
                        <button
                            type='button'
                            key={index}
                            name='brand'
                            data-value={brand}
                            onClick={setFilters}
                            className={`border-btn ${brand === filters.brand && 'active'}`}
                        >
                            {brand}
                        </button>
                    );
                })}
            </div>
            <div className='filters-field'>
                <h4>design:</h4>
                <select name='design' value={filters.design} onChange={setFilters}>
                    {designs.map((design, index) => (
                        <option key={index} value={design}>
                            {design}
                        </option>
                    ))}
                </select>
            </div>
            <div className='filters-field color'>
                <h4>color:</h4>
                <div>
                    {colors.map((color, index) => {
                        return (
                            <button
                                type='button'
                                key={index}
                                name='color'
                                data-value={color}
                                onClick={setFilters}
                                style={{ background: color !== 'all' ? color : '' }}
                                className={color === filters.color ? 'active' : ''}
                            >
                                {color !== 'all' ? color === filters.color && <FaCheck /> : 'all'}
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className='filters-field'>
                <h4>price:</h4>
                <p>{formatPrice(filters.price)}</p>
                <input
                    type='range'
                    name='price'
                    min={filters.minPrice}
                    max={filters.maxPrice}
                    value={filters.price}
                    onChange={setFilters}
                />
            </div>
            <div className='filters-field checkbox'>
                <input
                    type='checkbox'
                    name='caseIncluded'
                    id='case'
                    checked={filters.caseIncluded}
                    onChange={setFilters}
                />
                <label htmlFor='case'>case included</label>
            </div>
            <div className='filters-field checkbox'>
                <input
                    type='checkbox'
                    name='inStock'
                    id='stock'
                    checked={filters.inStock}
                    onChange={setFilters}
                />
                <label htmlFor='stock'>in stock</label>
            </div>
            <button type='button' className='btn' onClick={clearFilters}>
                clear filters
            </button>
        </form>
    );
};

export default Filters;
