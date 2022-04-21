import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { MdEmail } from 'react-icons/md';

const SubscribeForm = () => {
    const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_HASHID);
    return (
        <section className='subscribe-section'>
            <div className='section-center'>
                <div className='section-title'>
                    <h2>stay with us</h2>
                </div>
                <p>
                    {!state.succeeded
                        ? 'Subscribe to our newsletter and receive the latest news from us'
                        : 'Thanks for subscribing, an email has been sent for confirmation!'}
                </p>
                <form className='subscribe-form' onSubmit={handleSubmit}>
                    <div className='subscribe-form-field'>
                        <input type='email' name='email' placeholder='Email address' required />
                        <ValidationError
                            prefix='Email'
                            field='email'
                            errors={state.errors}
                            className='error'
                        />
                        <MdEmail />
                    </div>
                    <button
                        type='submit'
                        className='btn'
                        disabled={state.submitting || state.succeeded}
                    >
                        {state.submitting ? 'please wait' : 'subscribe'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default SubscribeForm;
