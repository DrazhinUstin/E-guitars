import React from 'react';
import { Link } from 'react-router-dom';

const CrumbTrail = ({ title, products }) => {
    return (
        <section className='section-center crumb-trail'>
            <Link to='/' className='crumb-trail-item'>
                home
            </Link>
            {products && (
                <Link to={`/products`} className='crumb-trail-item'>
                    products
                </Link>
            )}
            <span className='crumb-trail-item'>{title}</span>
        </section>
    );
};

export default CrumbTrail;
