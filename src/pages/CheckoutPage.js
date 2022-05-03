import React from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { useCartContext } from '../context/cart_context';
import { CrumbTrail, EmptyCart, StripeElements, Loading } from '../components';

const CheckoutPage = () => {
    const { cart } = useCartContext();
    const { user } = useAuth0();

    return (
        <>
            <CrumbTrail title='checkout' />
            {!cart.length ? (
                <EmptyCart />
            ) : (
                <section className='section-center page-100-crumb'>
                    <div className='section-title'>
                        <h2>hello, {user.name}!</h2>
                        <div></div>
                    </div>
                    <StripeElements />
                </section>
            )}
        </>
    );
};

export default withAuthenticationRequired(CheckoutPage, {
    onRedirecting: () => <Loading section />,
});
