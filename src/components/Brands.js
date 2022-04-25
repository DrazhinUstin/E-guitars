import React from 'react';
import { Link } from 'react-router-dom';
import { useFilterContext } from '../context/filter_context';
import { brandsData } from '../utils/data';

const Brands = () => {
    const { all_products, clearFilters, setFilters } = useFilterContext();

    const brands = brandsData.filter((item) => {
        return all_products.find((product) => product.brand === item.title);
    });

    const handleClick = (e) => {
        clearFilters();
        setFilters(e);
    };

    if (!brands.length) return null;
    return (
        <section className='section section-center'>
            <div className='brands'>
                {brands.map(({ id, title, image }) => {
                    return (
                        <Link
                            to='/products'
                            key={id}
                            name='brand'
                            data-value={title}
                            onClick={handleClick}
                        >
                            <img src={image} alt={title} />
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default Brands;
