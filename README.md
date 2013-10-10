# Stripe node.js bindings

## Installation

`npm install stripe`

## Documentation

**Documentation is forthcoming** and will eventually be available at https://stripe.com/docs/api/node.

## API Overview

Every resource is accessed via your `stripe` instance:

```js
var stripe = require('stripe')(' your stripe API key ');
// stripe.{ RESOURCE_NAME }.{ METHOD_NAME }
```

Every resource method accepts an optional callback as the last argument:

```js
stripe.customers.create(
  { email: 'customer@example.com' },
  function(err, customer) {
    err; // null if no error occurred
    customer; // the created customer object
  }
);
```

Additionally, every resource method returns a promise, so you don't have to use the regular callback. E.g.

```js
// Create a new customer and then a new charge for that customer:
stripe.customers.create({
  email: 'foo-customer@example.com'
}).then(function(customer) {
  return stripe.charges.create({
    amount: 1600,
    currency: 'usd',
    customer: customer.id
  });
}).then(function(charge) {
  // New charge created on a new customer
}, function(err) {
  // Deal with an error
});
```

### Available resources & methods

*Where you see `params` it is a plain JavaScript object, e.g. `{ email: 'foo@example.com' }`*

 * account
  * `retrieve()`
 * balance
  * `retrieve()`
  * `listTransactions()`
  * `retrieveTransaction(transactionId)`
 * charges
  * `create(params)`
  * `list()`
  * `retrieve(chargeId)`
  * `capture(chargeId)`
  * `refund(chargeId)`
  * `updateDispute(chargeId[, params])`
  * `closeDispute(chargeId[, params])`
  * `setMetadata(chargeId[, params])`
  * `getMetadata(chargeId[, params])`
 * coupons
  * `create(params)`
  * `list()`
  * `retrieve(chargeId)`
  * `del(chargeId)`
 * customers
  * `create(params)`
  * `list()`
  * `update(customerId[, params])`
  * `retrieve(customerId)`
  * `del(customerId)`
  * `setMetadata(customerId[, params])`
  * `getMetadata(customerId[, params])`
  * `updateSubscription(customerId[, params])`
  * `cancelSubscription(customerId)`
  * `createCard(customerId[, params])`
  * `listCards(customerId)`
  * `retrieveCard(customerId, cardId)`
  * `updateCard(customerId, cardId[, params])`
  * `deleteCard(customerId, cardId)`
  * `deleteDiscount(customerId, discountId)`
 * events
  * `list()`
  * `retrieve(eventId)`
 * invoiceItems
  * `create(params)`
  * `list()`
  * `update(invoiceItemId[, params])`
  * `retrieve(invoiceItemId)`
  * `del(invoiceItemId)`
 * invoices
  * `create(params)`
  * `list()`
  * `update(invoiceId[, params])`
  * `retrieve(invoiceId)`
  * `retrieveLines(invoiceId)`
  * `retrieveUpcoming()`
  * `pay(invoiceId)`
 * plans
  * `create(params)`
  * `list()`
  * `update(planId[, params])`
  * `retrieve(planId)`
  * `del(planId)`
 * recipient
  * `create(params)`
  * `list()`
  * `update(recipientId[, params])`
  * `retrieve(recipientId)`
  * `del(recipientId)`
  * `setMetadata(recipientId[, params])`
  * `getMetadata(recipientId[, params])`
 * tokens
  * `create(params)`
  * `retrieve(tokenId)`
 * transfers
  * `create(params)`
  * `list()`
  * `retrieve(transferId)`
  * `cancel(transferId)`
  * `setMetadata(transferId[, params])`
  * `getMetadata(transferId[, params])`

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
