import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/global_context';
import { ReactComponent as Loading } from '../assets/loading.svg';
import { ProductsGrid } from './';

const Featured = () => {
    const { isLoading, isError, products } = useGlobalContext();
    if (isLoading) {
        return <Loading className='loading' />;
    }
    if (isError) {
        return <h2 className='section text-center'>products not found!</h2>;
    }
    return (
        <section className='section section-center'>
            <div className='section-title'>
                <h2>featured</h2>
                <div></div>
            </div>
            <ProductsGrid products={products.filter((product) => product.inFeatured)} />
            <div className='text-center' style={{ marginTop: '4rem' }}>
                <Link to='products' className='btn'>
                    see all products
                </Link>
            </div>
        </section>
    );
};

export default Featured;
