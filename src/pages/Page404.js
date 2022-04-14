import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <section className='section-center page-404'>
            <article className='page-404-content'>
                <h1>404</h1>
                <div>
                    <h2>page not found</h2>
                    <p>
                        Sorry, but we can't find such page... Please go back to the home page and
                        start searching again
                    </p>
                    <Link to='/' className='btn'>
                        back home
                    </Link>
                </div>
            </article>
        </section>
    );
};

export default Page404;
