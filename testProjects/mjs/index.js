import Stripe from 'stripe';

const stripe = new Stripe(process.argv[2]);

stripe.customers.create({
  email: 'customer@example.com',
});
