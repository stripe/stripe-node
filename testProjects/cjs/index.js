const stripe = require('stripe')(process.argv[2]);

stripe.customers.create({
  email: 'customer@example.com',
});
