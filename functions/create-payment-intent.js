const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async function (event, context) {
    try {
        const { totalPrice } = JSON.parse(event.body);
        const paymentIntent = await stripe.paymentIntents.create({
            amount: totalPrice,
            currency: 'usd',
        });
        return {
            statusCode: 200,
            body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
