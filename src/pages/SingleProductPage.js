import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import useContentful from '../hooks/useContentful';
import { ReactComponent as Loading } from '../assets/loading.svg';
import { SingleProductImages, AddToCart } from '../components';
import { formatPrice } from '../utils/helpers';

const SingleProductPage = () => {
    const { id } = useParams();
    const { isLoading, isError, data: product } = useContentful(id);

    if (isLoading) {
        return <Loading className='loading' />;
    }

    if (isError) {
        return <h2 className='section text-center'>Product not found!</h2>;
    }

    const { brand, title, price, description, features, stock, images } = product;
    return (
        <section className='section section-center'>
            <div className='section-title'>
                <h2>{title}</h2>
                <div></div>
            </div>
            <div className='single-product'>
                <SingleProductImages images={images} title={title} />
                <article className='single-product-info'>
                    <h2>{formatPrice(price)}</h2>
                    <p>{description}</p>
                    <h4>
                        brand: <span>{brand}</span>
                    </h4>
                    <h4>
                        avalaible: <span>{stock ? 'in stock' : 'out of stock'}</span>
                    </h4>
                    <h4>
                        SKU: <span>{product.id}</span>
                    </h4>
                    {stock && <AddToCart product={product} />}
                </article>
            </div>
            <article className='single-product-features'>
                <h4>features:</h4>
                <ul>
                    {features.map((feature, index) => {
                        return (
                            <li key={index}>
                                <FaCheck />
                                {feature}
                            </li>
                        );
                    })}
                </ul>
            </article>
            <Link to={'/products'} className='btn'>
                back to products
            </Link>
        </section>
    );
};

export default SingleProductPage;
