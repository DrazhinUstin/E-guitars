import React from 'react';
import { useFilterContext } from '../context/filter_context';
import { Filters, Sort, ProductsGrid, ProductsList } from '../components';

const ProductsPage = () => {
    const { filtered_products, gridView } = useFilterContext();
    return (
        <section className='section section-center'>
            <div className='section-title'>
                <h2>products</h2>
                <div></div>
            </div>
            <div className='products-filters-container'>
                <Filters />
                <div>
                    <Sort />
                    {!filtered_products.length ? (
                        <h4>No such products...</h4>
                    ) : gridView ? (
                        <ProductsGrid products={filtered_products} />
                    ) : (
                        <ProductsList products={filtered_products} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProductsPage;
