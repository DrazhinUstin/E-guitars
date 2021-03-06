import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const StripeElements = () => {
    return (
        <Elements stripe={promise}>
            <CheckoutForm />
        </Elements>
    );
};

export default StripeElements;
