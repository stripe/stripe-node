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
  * `retrieve()`
 * balance
  * `retrieve()`
  * `listTransactions()`
  * `retrieveTransaction(transactionId)`
 * charges
  * `create({...})`
  * `list()`
  * `retrieve(chargeId)`
  * `capture(chargeId)`
  * `refund(chargeId)`
  * `updateDispute(chargeId, {...})`
  * `closeDispute(chargeId, {...})`
  * `setMetadata(chargeId, {...})`
  * `getMetadata(chargeId, {...})`
 * coupons
  * `create({...})`
  * `list()`
  * `retrieve(chargeId)`
  * `del(chargeId)`
 * customers
  * `create({...})`
  * `list()`
  * `update(customerId, {...})`
  * `retrieve(customerId)`
  * `del(customerId)`
  * `setMetadata(customerId, {...})`
  * `getMetadata(customerId, {...})`
  * `updateSubscription(customerId, {...})`
  * `cancelSubscription(customerId)`
  * `createCard(customerId, {...})`
  * `listCards(customerId)`
  * `retrieveCard(customerId, cardId)`
  * `updateCard(customerId, cardId, {...})`
  * `deleteCard(customerId, cardId)`
  * `deleteDiscount(customerId, discountId)`
 * events
  * `list()`
  * `retrieve(eventId)`
 * invoiceItems
  * `create({...})`
  * `list()`
  * `update(invoiceItemId, {...})`
  * `retrieve(invoiceItemId)`
  * `del(invoiceItemId)`
 * invoices
  * `create({...})`
  * `list()`
  * `update(invoiceId, {...})`
  * `retrieve(invoiceId)`
  * `retrieveLines(invoiceId)`
  * `retrieveUpcoming()`
  * `pay(invoiceId)`
 * plans
  * `create({...})`
  * `list()`
  * `update(planId, {...})`
  * `retrieve(planId)`
  * `del(planId)`
 * recipient
  * `create({...})`
  * `list()`
  * `update(recipientId, {...})`
  * `retrieve(recipientId)`
  * `del(recipientId)`
  * `setMetadata(recipientId, {...})`
  * `getMetadata(recipientId, {...})`
 * tokens
  * `create({...})`
  * `retrieve(tokenId)`
 * transfers
  * `create({...})`
  * `list()`
  * `retrieve(transferId)`
  * `cancel(transferId)`
  * `setMetadata(transferId, {...})`
  * `getMetadata(transferId, {...})`

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
