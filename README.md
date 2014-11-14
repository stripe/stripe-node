# Stripe node.js bindings [![Build Status](https://travis-ci.org/stripe/stripe-node.png?branch=master)](https://travis-ci.org/stripe/stripe-node)

## Version 2 Update Notice

**[Read about Version 2 here](https://github.com/stripe/stripe-node/wiki/Version-2)** (Released October 18th, 2013)

## Installation

`npm install stripe`

## Documentation

Documentation is available at https://stripe.com/docs/api/node.

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
  * [`retrieve()`](https://stripe.com/docs/api/node#retrieve_account)
 * balance
  * [`retrieve()`](https://stripe.com/docs/api/node#retrieve_balance)
  * [`listTransactions([params])`](https://stripe.com/docs/api/node#balance_history)
  * [`retrieveTransaction(transactionId)`](https://stripe.com/docs/api/node#retrieve_balance_transaction)
 * charges
  * [`create(params)`](https://stripe.com/docs/api/node#create_charge)
  * [`list([params])`](https://stripe.com/docs/api/node#list_charges)
  * [`retrieve(chargeId)`](https://stripe.com/docs/api/node#retrieve_charge)
  * [`capture(chargeId[, params])`](https://stripe.com/docs/api/node#charge_capture)
  * [`refund(chargeId[, params])`](https://stripe.com/docs/api/node#refund_charge)
  * [`update(chargeId[, params])`](https://stripe.com/docs/api/node#update_charge)
  * [`updateDispute(chargeId[, params])`](https://stripe.com/docs/api/node#update_dispute)
  * [`closeDispute(chargeId[, params])`](https://stripe.com/docs/api/node#close_dispute)
  * `setMetadata(chargeId, metadataObject)` ([metadata info](https://stripe.com/docs/api/node#metadata))
  * `setMetadata(chargeId, key, value)`
  * `getMetadata(chargeId)`
 * coupons
  * [`create(params)`](https://stripe.com/docs/api/node#create_coupon)
  * [`list([params])`](https://stripe.com/docs/api/node#list_coupons)
  * [`retrieve(chargeId)`](https://stripe.com/docs/api/node#retrieve_coupon)
  * [`del(chargeId)`](https://stripe.com/docs/api/node#delete_coupon)
 * customers
  * [`create(params)`](https://stripe.com/docs/api/node#create_customer)
  * [`list([params])`](https://stripe.com/docs/api/node#list_customers)
  * [`update(customerId[, params])`](https://stripe.com/docs/api/node#update_customer)
  * [`retrieve(customerId)`](https://stripe.com/docs/api/node#retrieve_customer)
  * [`del(customerId)`](https://stripe.com/docs/api/node#delete_customer)
  * `setMetadata(customerId, metadataObject)` ([metadata info](https://stripe.com/docs/api/node#metadata))
  * `setMetadata(customerId, key, value)`
  * `getMetadata(customerId)`
  * [`createSubscription(customerId, params)`](https://stripe.com/docs/api/node#create_subscription)
  * [`updateSubscription(customerId, subscriptionId, [, params])`](https://stripe.com/docs/api/node#update_subscription)
  * [`cancelSubscription(customerId, subscriptionId, [, params])`](https://stripe.com/docs/api/node#cancel_subscription)
  * [`listSubscriptions(params)`](https://stripe.com/docs/api/node#list_subscriptions)
  * [`createCard(customerId[, params])`](https://stripe.com/docs/api/node#create_card)
  * [`listCards(customerId)`](https://stripe.com/docs/api/node#list_cards)
  * [`retrieveCard(customerId, cardId)`](https://stripe.com/docs/api/node#retrieve_card)
  * [`updateCard(customerId, cardId[, params])`](https://stripe.com/docs/api/node#update_card)
  * [`deleteCard(customerId, cardId)`](https://stripe.com/docs/api/node#delete_card)
  * [`deleteDiscount(customerId)`](https://stripe.com/docs/api/node#delete_discount)
 * events (*[types of events](https://stripe.com/docs/api/node#event_types)*)
  * [`list([params])`](https://stripe.com/docs/api/node#list_events)
  * [`retrieve(eventId)`](https://stripe.com/docs/api/node#retrieve_event)
 * invoiceItems
  * [`create(params)`](https://stripe.com/docs/api/node#create_invoiceitem)
  * [`list([params])`](https://stripe.com/docs/api/node#list_invoiceitems)
  * [`update(invoiceItemId[, params])`](https://stripe.com/docs/api/node#update_invoiceitem)
  * [`retrieve(invoiceItemId)`](https://stripe.com/docs/api/node#retrieve_invoiceitem)
  * [`del(invoiceItemId)`](https://stripe.com/docs/api/node#delete_invoiceitem)
 * invoices
  * [`create(params)`](https://stripe.com/docs/api/node#create_invoice)
  * [`list([params])`](https://stripe.com/docs/api/node#list_customer_invoices)
  * [`update(invoiceId[, params])`](https://stripe.com/docs/api/node#update_invoice)
  * [`retrieve(invoiceId)`](https://stripe.com/docs/api/node#retrieve_invoice)
  * [`retrieveLines(invoiceId)`](https://stripe.com/docs/api/node#invoice_lines)
  * [`retrieveUpcoming(customerId[, subscriptionId])`](https://stripe.com/docs/api/node#retrieve_customer_invoice)
  * [`pay(invoiceId)`](https://stripe.com/docs/api/node#pay_invoice)
 * plans
  * [`create(params)`](https://stripe.com/docs/api/node#create_plan)
  * [`list([params])`](https://stripe.com/docs/api/node#list_plans)
  * [`update(planId[, params])`](https://stripe.com/docs/api/node#update_plan)
  * [`retrieve(planId)`](https://stripe.com/docs/api/node#retrieve_plan)
  * [`del(planId)`](https://stripe.com/docs/api/node#delete_plan)
 * recipients
  * [`create(params)`](https://stripe.com/docs/api/node#create_recipient)
  * [`list([params])`](https://stripe.com/docs/api/node#list_recipients)
  * [`update(recipientId[, params])`](https://stripe.com/docs/api/node#update_recipient)
  * [`retrieve(recipientId)`](https://stripe.com/docs/api/node#retrieve_recipient)
  * [`del(recipientId)`](https://stripe.com/docs/api/node#delete_recipient)
  * `setMetadata(recipientId, metadataObject)` ([metadata info](https://stripe.com/docs/api/node#metadata))
  * `setMetadata(recipientId, key, value)`
  * `getMetadata(recipientId)`
 * tokens
  * [`create(params)`](https://stripe.com/docs/api/node#create_card_token)
  * [`retrieve(tokenId)`](https://stripe.com/docs/api/node#retrieve_token)
 * transfers
  * [`create(params)`](https://stripe.com/docs/api/node#create_transfer)
  * [`list([params])`](https://stripe.com/docs/api/node#list_transfers)
  * [`retrieve(transferId)`](https://stripe.com/docs/api/node#retrieve_transfer)
  * [`update(transferId[, params])`](https://stripe.com/docs/api/node#update_transfer)
  * [`cancel(transferId)`](https://stripe.com/docs/api/node#cancel_transfer)
  * [`listTransactions(transferId[, params])`](https://stripe.com/docs/api/curl#list_transfers)
  * `setMetadata(transferId, metadataObject)` ([metadata info](https://stripe.com/docs/api/node#metadata))
  * `setMetadata(transferId, key, value)`
  * `getMetadata(transferId)`

## Configuration

 * `stripe.setApiKey(' your secret api key ');`
 * `stripe.setTimeout(20000); // in ms` (default is node's default: `120000ms`)

## More information / wikis

 * **[In-depth Documentation](https://stripe.com/docs/api/node)**
 * [Version 2 Overview](https://github.com/stripe/stripe-node/wiki/Version-2)
 * [REST API Version](https://github.com/stripe/stripe-node/wiki/REST-API-Version)
 * [Error Handling](https://github.com/stripe/stripe-node/wiki/Error-Handling)
 * [Using Stripe Connect](https://github.com/stripe/stripe-node/wiki/Using-Stripe-Connect-with-node.js)

## Development

To run the tests you'll need a Stripe *Test* API key (from your [Stripe Dashboard](https://manage.stripe.com)):

```bash
$ npm install -g mocha
$ npm test
```

*Note: On Windows use `SET` instead of `export` for setting the `STRIPE_TEST_API_KEY` environment variable.*

If you don't have a prefixed key (in the form `sk_test_...`) you can get one by rolling your "Test Secret Key". This can be done under your dashboard (*Account Setting -> API Keys -> Click the roll icon next to the "test secret key"*). This should give you a new prefixed key ('sk_test_..'), which will then be usable by the node mocha tests.

## Author

Originally by [Ask Bjørn Hansen](https://github.com/abh) (ask@develooper.com). Development was sponsored by YellowBot. Now officially maintained by Stripe.
