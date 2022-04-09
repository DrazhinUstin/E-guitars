import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';

const ProductsList = ({ products = [] }) => {
    return (
        <div className='products-list'>
            {products.map((product) => {
                const { id, title, price, description, images } = product;
                return (
                    <article key={id}>
                        <img src={images[0]} alt={title} />
                        <div>
                            <h4>{title}</h4>
                            <p>{formatPrice(price)}</p>
                            <p>{description.substring(0, 150)}...</p>
                            <Link to={`/products/${id}`} className='btn'>
                                details
                            </Link>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default ProductsList;
