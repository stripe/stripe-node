# Stripe node.js bindings

## Installation

`npm install stripe`

## Documentation

**Documentation is forthcoming** and will eventually be available at https://stripe.com/docs/api/node.

## Overview

### Example

```js
var stripe = require('stripe')(' your stripe API key ');

// Callback pattern
stripe.customers.create({
  email: 'foo-customer@foo-website.com'
}, function(err, customer) {
  if (err) {
    // Deal with error
  } else {
    customer; // => The created customer data object
  }
});

// Promise pattern
stripe.customers.create({
  email: 'foo-customer@foo-website.com'
}).then(function(customer) {
  customer; // => The created customer data object
}, function(err) {
  // Deal with error
});
```

### Available resources:

 * account
 * balance
 * charges
 * coupons
 * customers
 * events
 * invoiceItems
 * invoices
 * plans
 * recipient
 * tokens
 * transfers

## Development

To run the tests you'll need a Stripe *Test* API key (from your [Stripe Dashboard](https://manage.stripe.com)):

```bash
$ npm install -g mocha
$ npm install
$ export STRIPE_TEST_API_KEY="sk_test_..."
$ mocha
```

## Author

Originally by [Ask Bjørn Hansen](https://github.com/abh) (ask@develooper.com). Development was sponsored by YellowBot. Now officially maintained by Stripe.
