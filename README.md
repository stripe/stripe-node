# Stripe node.js bindings [![Build Status](https://travis-ci.org/stripe/stripe-node.png?branch=master)](https://travis-ci.org/stripe/stripe-node)

## These are serverside bindings only

If you're looking to install stripe.js, our clientside tokenization library - this is not it. These are serverside node.js bindings only.

These stripe-node bindings are intended to deal with secret keys, and to take actions that should not occur in the browser without compromising security. Additionally, stripe.js is not offered as an npm package, primarily for compliance reasons. We work very hard to have extremely high availability around the world and constant backwards compatibility when stripe.js is updated. You should include stripe.js (in most cases asyncronous script injection is a great choice) with the following url: https://js.stripe.com/v2/

## Version 2 Update Notice

**[Read about Version 2 here](https://github.com/stripe/stripe-node/wiki/Version-2)** (Released October 18th, 2013)

## Installation

`npm install stripe --save`

## Documentation

Documentation is available at https://stripe.com/docs/api/node.

## Configuration

Set your secret API key. This is available in [your dashboard](https://dashboard.stripe.com/account/apikeys).

```js
var stripe = require('stripe')(' your stripe API key ');
```

## API Overview

Every resource is accessed via your `stripe` instance:

```js
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
}).then(function(customer){
  return stripe.customers.createSource(customer.id, {
    object: 'card',
    exp_month: 10,
    exp_year: 2018,
    number: '4242 4242 4242 4242',
    cvc: 100
  });
}).then(function(source) {
  return stripe.charges.create({
    amount: 1600,
    currency: 'usd',
    customer: source.customer
  });
}).then(function(charge) {
  // New charge created on a new customer
}).catch(function(err) {
  // Deal with an error
});
```

To use the `Stripe-Account` header, simply pass an extra options hash:

```js
// Retrieve the balance for a connected account:
stripe.balance.retrieve({
  stripe_account: "acct_foo"
}).then(function(balance) {
  // The balance object for the connected account
}).catch(function(err) {
  // Error
});
```

### Available resources & methods

*Where you see `params` it is a plain JavaScript object, e.g. `{ email: 'foo@example.com' }`*

 * accounts
  * [`retrieve(accountId)`](https://stripe.com/docs/api/node#retrieve_account)
  * [`create([params])`](https://stripe.com/docs/api/node#create_account)
  * [`list([params])`](https://stripe.com/docs/api/node#list_accounts)
  * [`update([params])`](https://stripe.com/docs/api/node#update_account)
 * applePayDomains
  * [`create(params)`](https://stripe.com/docs/api/node#create_apple_pay_domain)
  * [`list([params])`](https://stripe.com/docs/api/node#list_apple_pay_domains)
  * [`retrieve(applePayDomainId)`](https://stripe.com/docs/api/node#retrieve_apple_pay_domain)
  * [`del(applePayDomainId)`](https://stripe.com/docs/api/node#delete_apple_pay_domain)
 * balance
  * [`retrieve()`](https://stripe.com/docs/api/node#retrieve_balance)
  * [`listTransactions([params])`](https://stripe.com/docs/api/node#balance_history)
  * [`retrieveTransaction(transactionId)`](https://stripe.com/docs/api/node#retrieve_balance_transaction)
 * charges
  * [`create(params)`](https://stripe.com/docs/api/node#create_charge)
  * [`list([params])`](https://stripe.com/docs/api/node#list_charges)
  * [`retrieve(chargeId)`](https://stripe.com/docs/api/node#retrieve_charge)
  * [`capture(chargeId[, params])`](https://stripe.com/docs/api/node#charge_capture)
  * [`update(chargeId[, params])`](https://stripe.com/docs/api/node#update_charge)
  * [`updateDispute(chargeId[, params])`](https://stripe.com/docs/api/node#update_dispute)
  * [`closeDispute(chargeId[, params])`](https://stripe.com/docs/api/node#close_dispute)
  * `setMetadata(chargeId, metadataObject)` ([metadata info](https://stripe.com/docs/api/node#metadata))
  * `setMetadata(chargeId, key, value)`
  * `getMetadata(chargeId)`
  * `markAsSafe(chargeId)`
  * `markAsFraudulent(chargeId)`
 * coupons
  * [`create(params)`](https://stripe.com/docs/api/node#create_coupon)
  * [`list([params])`](https://stripe.com/docs/api/node#list_coupons)
  * [`update(couponId[, params])`](https://stripe.com/docs/api/node#update_coupon)
  * [`retrieve(couponId)`](https://stripe.com/docs/api/node#retrieve_coupon)
  * [`del(couponId)`](https://stripe.com/docs/api/node#delete_coupon)
 * customers
  * [`create(params)`](https://stripe.com/docs/api/node#create_customer)
  * [`list([params])`](https://stripe.com/docs/api/node#list_customers)
  * [`update(customerId[, params])`](https://stripe.com/docs/api/node#update_customer)
  * [`retrieve(customerId)`](https://stripe.com/docs/api/node#retrieve_customer)
  * [`del(customerId)`](https://stripe.com/docs/api/node#delete_customer)
  * `listSources(customerId)`
  * `deleteSource(customerId, {source: 'source_token'})`
  * `setMetadata(customerId, metadataObject)` ([metadata info](https://stripe.com/docs/api/node#metadata))
  * `setMetadata(customerId, key, value)`
  * `getMetadata(customerId)`
  * [`createSubscription(customerId, params)`](https://stripe.com/docs/api/node#create_subscription)
  * [`updateSubscription(customerId, subscriptionId, [, params])`](https://stripe.com/docs/api/node#update_subscription)
  * [`cancelSubscription(customerId, subscriptionId, [, params])`](https://stripe.com/docs/api/node#cancel_subscription)
  * [`listSubscriptions(params)`](https://stripe.com/docs/api/node#list_subscriptions)
  * [`retrieveSubscription(customerId, subscriptionId)`](https://stripe.com/docs/api/node#retrieve_subscription)
  * [`createSource(customerId[, params])`](https://stripe.com/docs/api/node#create_card)
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
  * [`retrieveUpcoming(customerId[, params])`](https://stripe.com/docs/api/node#retrieve_customer_invoice)
  * [`pay(invoiceId)`](https://stripe.com/docs/api/node#pay_invoice)
 * orders
  * [`create(params)`](https://stripe.com/docs/api/node#create_order)
  * [`list([params])`](https://stripe.com/docs/api/node#list_order)
  * [`update(orderId[, params])`](https://stripe.com/docs/api/node#update_order)
  * [`retrieve(orderId)`](https://stripe.com/docs/api/node#retrieve_order)
  * [`pay(orderId)`](https://stripe.com/docs/api/node#pay_order)
 * orderReturns
  * [`list([params])`](https://stripe.com/docs/api/node#list_order_returns)
  * [`retrieve(orderId)`](https://stripe.com/docs/api/node#retrieve_order_return)
 * plans
  * [`create(params)`](https://stripe.com/docs/api/node#create_plan)
  * [`list([params])`](https://stripe.com/docs/api/node#list_plans)
  * [`update(planId[, params])`](https://stripe.com/docs/api/node#update_plan)
  * [`retrieve(planId)`](https://stripe.com/docs/api/node#retrieve_plan)
  * [`del(planId)`](https://stripe.com/docs/api/node#delete_plan)
 * products
  * [`create(params)`](https://stripe.com/docs/api/node#create_product)
  * [`list([params])`](https://stripe.com/docs/api/node#list_products)
  * [`update(productId[, params])`](https://stripe.com/docs/api/node#update_product)
  * [`retrieve(productId)`](https://stripe.com/docs/api/node#retrieve_product)
  * [`del(productId)`](https://stripe.com/docs/api/node#delete_product)
 * recipients
  * [`create(params)`](https://stripe.com/docs/api/node#create_recipient)
  * [`list([params])`](https://stripe.com/docs/api/node#list_recipients)
  * [`update(recipientId[, params])`](https://stripe.com/docs/api/node#update_recipient)
  * [`retrieve(recipientId)`](https://stripe.com/docs/api/node#retrieve_recipient)
  * [`del(recipientId)`](https://stripe.com/docs/api/node#delete_recipient)
  * `setMetadata(recipientId, metadataObject)` ([metadata info](https://stripe.com/docs/api/node#metadata))
  * `setMetadata(recipientId, key, value)`
 * refunds
  * [`create(params)`](https://stripe.com/docs/api/node#create_refund)
  * [`list([params])`](https://stripe.com/docs/api/node#list_refunds)
  * [`update(refundId[, params])`](https://stripe.com/docs/api/node#update_refund)
  * [`retrieve(refundId)`](https://stripe.com/docs/api/node#retrieve_refund)
 * skus
  * [`create(params)`](https://stripe.com/docs/api/node#create_sku)
  * [`list([params])`](https://stripe.com/docs/api/node#list_skus)
  * [`update(skuId[, params])`](https://stripe.com/docs/api/node#update_sku)
  * [`retrieve(skuId)`](https://stripe.com/docs/api/node#retrieve_sku)
  * [`del(skuId)`](https://stripe.com/docs/api/node#delete_sku)
 * subscriptions
  * [`create(params)`](https://stripe.com/docs/api/node#create_subscription)
  * [`list([params])`](https://stripe.com/docs/api/node#list_subscription)
  * [`update(subscriptionID[, params])`](https://stripe.com/docs/api/node#update_subscription)
  * [`retrieve(subscriptionId)`](https://stripe.com/docs/api/node#retrieve_subscription)
  * [`del(subscriptionId)`](https://stripe.com/docs/api/node#delete_subscription)
 * tokens
  * [`create(params)`](https://stripe.com/docs/api/node#create_card_token)
  * [`retrieve(tokenId)`](https://stripe.com/docs/api/node#retrieve_token)
 * threeDSecure
  * [`create(params)`](https://stripe.com/docs/api/node#create_three_d_secure)
 * transfers
  * [`create(params)`](https://stripe.com/docs/api/node#create_transfer)
  * [`list([params])`](https://stripe.com/docs/api/node#list_transfers)
  * [`retrieve(transferId)`](https://stripe.com/docs/api/node#retrieve_transfer)
  * [`update(transferId[, params])`](https://stripe.com/docs/api/node#update_transfer)
  * [`reverse(transferId[, params])`](https://stripe.com/docs/api/node#create_transfer_reversal)
  * `cancel(transferId)` (Deprecated -- use `reverse`)
  * [`listTransactions(transferId[, params])`](https://stripe.com/docs/api/curl#list_transfers)
  * `setMetadata(transferId, metadataObject)` ([metadata info](https://stripe.com/docs/api/node#metadata))
  * `setMetadata(transferId, key, value)`
  * `getMetadata(transferId)`
 * bitcoinReceivers
  * [`create(params)`](https://stripe.com/docs/api/node#create_bitcoin_receiver)
  * [`retrieve(receiverId)`](https://stripe.com/docs/api/node#retrieve_bitcoin_receiver)
  * [`list([params])`](https://stripe.com/docs/api/node#list_bitcoin_receivers)
  * `getMetadata(receiverId)`

## Configuration

 * `stripe.setApiKey(' your secret api key ');`
 * `stripe.setTimeout(20000); // in ms` (default is node's default: `120000ms`)

## More information / wikis

 * **[In-depth Documentation](https://stripe.com/docs/api/node)**
 * [Version 2 Overview](https://github.com/stripe/stripe-node/wiki/Version-2)
 * [REST API Version](https://github.com/stripe/stripe-node/wiki/REST-API-Version)
 * [Error Handling](https://github.com/stripe/stripe-node/wiki/Error-Handling)
 * [Passing Options](https://github.com/stripe/stripe-node/wiki/Passing-Options)
 * [Using Stripe Connect](https://github.com/stripe/stripe-node/wiki/Using-Stripe-Connect-with-node.js)

## Development

Run all tests:

```bash
$ npm install
$ npm test
```

Run a single test suite:

```bash
$ npm run mocha -- test/Error.spec.js
```

Run a single test (case sensitive):

```bash
$ npm run mocha -- test/Error.spec.js --grep 'Populates with type'
```

If you wish, you may run tests using your Stripe *Test* API key by setting the environment variable `STRIPE_TEST_API_KEY` before running tests:

```bash
$ export STRIPE_TEST_API_KEY='sk_test....'
$ npm test
```

*Note: On Windows use `SET` instead of `export` for setting the `STRIPE_TEST_API_KEY` environment variable.*

If you don't have a prefixed key (in the form `sk_test_...`) you can get one by rolling your "Test Secret Key". This can be done under your dashboard (*Account Setting -> API Keys -> Click the roll icon next to the "test secret key"*). This should give you a new prefixed key ('sk_test_..'), which will then be usable by the node mocha tests.

## Author

Originally by [Ask Bjørn Hansen](https://github.com/abh) (ask@develooper.com). Development was sponsored by YellowBot. Now officially maintained by Stripe.
