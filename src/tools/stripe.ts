require("dotenv").config();

const Subscription = async (customer, price) => {
    const stripe = require('stripe')(process.env.SK_STRIPE);

    const subscription = await stripe.subscriptions.create({
        customer: customer,
        items: [
            {price: price},
        ],
    });
}
