import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';

const ProductsGrid = ({ products = [] }) => {
    return (
        <div className='products-grid'>
            {products.map((product) => {
                const { id, title, price, images } = product;
                return (
                    <article key={id}>
                        <div>
                            <img src={images[0]} alt={title} />
                            <Link to={`/products/${id}`} className='btn'>
                                details
                            </Link>
                        </div>
                        <footer>
                            <h4>{title}</h4>
                            <p>{formatPrice(price)}</p>
                        </footer>
                    </article>
                );
            })}
        </div>
    );
};

export default ProductsGrid;
