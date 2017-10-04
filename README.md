# Stripe Node.js Library

[![Version](https://img.shields.io/npm/v/stripe.svg)](https://www.npmjs.org/package/stripe)
[![Build Status](https://travis-ci.org/stripe/stripe-node.svg?branch=master)](https://travis-ci.org/stripe/stripe-node)
[![Downloads](https://img.shields.io/npm/dm/stripe.svg)](https://www.npmjs.com/package/stripe)
[![Try on RunKit](https://badge.runkitcdn.com/stripe.svg)](https://runkit.com/npm/stripe)

The Stripe Node library provides convenient access to the Stripe API from
applications written in server-side JavaScript.

Please keep in mind that this package is for use with server-side Node that
uses Stripe secret keys. To maintain PCI compliance, tokenization of credit
card information should always be done with [Stripe.js][stripe-js] on the
client side. This package should not be used for that purpose.

## Documentation

See the [Node API docs](https://stripe.com/docs/api/node#intro).

## Installation

Install the package with:

    npm install stripe --save

## Usage

The package needs to be configured with your account's secret key which is
available in your [Stripe Dashboard][api-keys]. Require it with the key's
value:

``` js
var stripe = require('stripe')('sk_test_...');

stripe.customers.create(
  { email: 'customer@example.com' },
  function(err, customer) {
    err; // null if no error occurred
    customer; // the created customer object
  }
);
```

On ES6, this looks more like:

``` js
import stripePackage from 'stripe';
const stripe = stripePackage('sk_test_...');
```

### Using Promises

Every method returns a chainable promise which can be used instead of a regular
callback:

``` js
// Create a new customer and then a new charge for that customer:
stripe.customers.create({
  email: 'foo-customer@example.com'
}).then(function(customer){
  return stripe.customers.createSource(customer.id, {
    source: 'tok_visa'
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

### Configuring Timeout

Request timeout is configurable (the default is Node's default of 120 seconds):

``` js
stripe.setTimeout(20000); // in ms (this is 20 seconds)
```

### Configuring For Connect

A per-request `Stripe-Account` header for use with [Stripe Connect][connect]
can be added to any method:

``` js
// Retrieve the balance for a connected account:
stripe.balance.retrieve({
  stripe_account: 'acct_foo'
}).then(function(balance) {
  // The balance object for the connected account
}).catch(function(err) {
  // Error
});
```

### Configuring a Proxy

An [https-proxy-agent][https-proxy-agent] can be configured with
`setHttpAgent`.

To use stripe behind a proxy you can pass  to sdk:

```js
if (process.env.http_proxy) {
  const ProxyAgent = require('https-proxy-agent');
  stripe.setHttpAgent(new ProxyAgent(process.env.http_proxy));
}
```

### Examining Responses

Some information about the response which generated a resource is available
with the `lastResponse` property:

```js
charge.lastResponse.requestId // see: https://stripe.com/docs/api/node#request_ids
charge.lastResponse.statusCode
```

### `request` and `response` events

The Stripe object emits `request` and `response` events.  You can use them like this:

```js
var stripe = require('stripe')('sk_test_...');

function onRequest(request) {
  // Do something.
}

// Add the event handler function:
stripe.on('request', onRequest);

// Remove the event handler function:
stripe.off('request', onRequest);
```

#### `request` object
```js
{
  api_version: 'latest',
  account: 'acct_TEST',       // Only present if provided
  idempotency_key: 'abc123',  // Only present if provided
  method: 'POST',
  path: '/v1/charges'
}
```

#### `response` object
```js
{
  api_version: 'latest',
  account: 'acct_TEST',       // Only present if provided
  idempotency_key: 'abc123',  // Only present if provided
  method: 'POST',
  path: '/v1/charges',
  status: 402,
  request_id: 'req_Ghc9r26ts73DRf',
  elapsed: 445                // Elapsed time in milliseconds
}
```

### Webhook signing

Stripe can optionally sign the webhook events it sends to your endpoint, allowing you to validate that they were not sent by a third-party.  You can read more about it [here](https://stripe.com/docs/webhooks#signatures).

Please note that you must pass the _raw_ request body, exactly as received from Stripe, to the `constructEvent()` function; this will not work with a parsed (i.e., JSON) request body.

You can find an example of how to use this with [Express](https://expressjs.com/) in the [`examples/webhook-signing`](examples/webhook-signing) folder, but here's what it looks like:

```js
event = stripe.webhooks.constructEvent(
  webhookRawBody,
  webhookStripeSignatureHeader,
  webhookSecret
);
```

### Writing a Plugin

If you're writing a plugin that uses the library, we'd appreciate it if you identified using `stripe.setAppInfo()`:

```js
stripe.setAppInfo({
  name: 'MyAwesomePlugin',
  version: '1.2.34', // Optional
  url: 'https://myawesomeplugin.info', // Optional
});
```

This information is passed along when the library makes calls to the Stripe API.

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

If you wish, you may run tests using your Stripe *Test* API key by setting the
environment variable `STRIPE_TEST_API_KEY` before running the tests:

```bash
$ export STRIPE_TEST_API_KEY='sk_test....'
$ npm test
```

[api-keys]: https://dashboard.stripe.com/account/apikeys
[connect]: https://stripe.com/connect
[https-proxy-agent]: https://github.com/TooTallNate/node-https-proxy-agent
[stripe-js]: https://stripe.com/docs/stripe.js

<!--
# vim: set tw=79:
-->
