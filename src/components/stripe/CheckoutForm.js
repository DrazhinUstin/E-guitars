import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useCartContext } from '../../context/cart_context';
import { formatPrice } from '../../utils/helpers';
import CopyBtn from '../CopyBtn';

const CheckoutForm = () => {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const { totalPrice, clearCart } = useCartContext();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        window
            .fetch('/.netlify/functions/create-payment-intent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ totalPrice }),
            })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [totalPrice]);

    const cardStyle = {
        style: {
            base: {
                color: '#262626',
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#acacac',
                },
            },
            invalid: {
                fontFamily: 'Arial, sans-serif',
                color: '#eb5252',
                iconColor: '#eb5252',
            },
        },
    };

    const handleChange = async (e) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {
            setError(null);
            setProcessing(false);
            setSucceeded(true);
            setTimeout(() => {
                navigate('/');
                clearCart();
            }, 5000);
        }
    };

    return (
        <>
            {succeeded ? (
                <p id='payment-form-message'>
                    Payment succeeded, see the result in your{' '}
                    <a
                        href='https://dashboard.stripe.com/test/payments'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Stripe dashboard
                    </a>
                    . Redirecting to home page shortly.
                </p>
            ) : (
                <p id='payment-form-message'>
                    Your total is <span>{formatPrice(totalPrice)}</span>
                    <br />
                    Test Card Number: 4242 4242 4242 4242
                    <CopyBtn clipText='4242 4242 4242 4242' />
                </p>
            )}
            <form id='payment-form' onSubmit={handleSubmit}>
                <CardElement id='card-element' options={cardStyle} onChange={handleChange} />
                <button disabled={processing || disabled || succeeded} id='submit' className='btn'>
                    {processing ? 'please wait...' : 'pay now'}
                </button>
            </form>
            {error && (
                <div id='payment-form-error' role='alert'>
                    {error}
                </div>
            )}
        </>
    );
};

export default CheckoutForm;
