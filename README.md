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

These settings are also available:

 * `stripe.setApiKey(' your secret api key ');`
 * `stripe.setTimeout(20000); // in ms` (default is node's default: `120000ms`)

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
    source: {
       object: 'card',
       exp_month: 10,
       exp_year: 2018,
       number: '4242 4242 4242 4242',
       cvc: 100
    }
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

## Documentation

See the [Node API docs](https://stripe.com/docs/api/node#intro).

## More Information

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
