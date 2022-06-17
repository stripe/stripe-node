# Stripe Node.js Library

[![Version](https://img.shields.io/npm/v/stripe.svg)](https://www.npmjs.org/package/stripe)
[![Build Status](https://github.com/stripe/stripe-node/actions/workflows/main.yml/badge.svg?branch=master)](https://github.com/stripe/stripe-node/actions?query=branch%3Amaster)
[![Downloads](https://img.shields.io/npm/dm/stripe.svg)](https://www.npmjs.com/package/stripe)
[![Try on RunKit](https://badge.runkitcdn.com/stripe.svg)](https://runkit.com/npm/stripe)

The Stripe Node library provides convenient access to the Stripe API from
applications written in server-side JavaScript.

For collecting customer and payment information in the browser, use [Stripe.js][stripe-js].

## Documentation

See the [`stripe-node` API docs](https://stripe.com/docs/api?lang=node) for Node.js.

See [video demonstrations][youtube-playlist] covering how to use the library.

## Requirements

Node 8, 10 or higher.

## Installation

Install the package with:

```sh
npm install stripe --save
# or
yarn add stripe
```

## Usage

The package needs to be configured with your account's secret key, which is
available in the [Stripe Dashboard][api-keys]. Require it with the key's
value:

<!-- prettier-ignore -->
```js
const stripe = require('stripe')('sk_test_...');

stripe.customers.create({
  email: 'customer@example.com',
})
  .then(customer => console.log(customer.id))
  .catch(error => console.error(error));
```

Or using ES modules and `async`/`await`:

```js
import Stripe from 'stripe';
const stripe = new Stripe('sk_test_...');

(async () => {
  const customer = await stripe.customers.create({
    email: 'customer@example.com',
  });

  console.log(customer.id);
})();
```

### Usage with TypeScript

As of 8.0.1, Stripe maintains types for the latest [API version][api-versions].

Import Stripe as a default import (not `* as Stripe`, unlike the DefinitelyTyped version)
and instantiate it as `new Stripe()` with the latest API version.

```ts
import Stripe from 'stripe';
const stripe = new Stripe('sk_test_...', {
  apiVersion: '2020-08-27',
});

const createCustomer = async () => {
  const params: Stripe.CustomerCreateParams = {
    description: 'test customer',
  };

  const customer: Stripe.Customer = await stripe.customers.create(params);

  console.log(customer.id);
};
createCustomer();
```

You can find a full TS server example in [stripe-samples](https://github.com/stripe-samples/accept-a-payment/tree/main/custom-payment-flow/server/node-typescript).

#### Using old API versions with TypeScript

Types can change between API versions (e.g., Stripe may have changed a field from a string to a hash),
so our types only reflect the latest API version.

We therefore encourage [upgrading your API version][api-version-upgrading]
if you would like to take advantage of Stripe's TypeScript definitions.

If you are on an older API version (e.g., `2019-10-17`) and not able to upgrade,
you may pass another version or `apiVersion: null` to use your account's default API version,
and use a comment like `// @ts-ignore stripe-version-2019-10-17` to silence type errors here
and anywhere the types differ between your API version and the latest.
When you upgrade, you should remove these comments.

We also recommend using `// @ts-ignore` if you have access to a beta feature and need to send parameters beyond the type definitions.

#### Using `expand` with TypeScript

[Expandable][expanding_objects] fields are typed as `string | Foo`,
so you must cast them appropriately, e.g.,

```ts
const paymentIntent: Stripe.PaymentIntent = await stripe.paymentIntents.retrieve(
  'pi_123456789',
  {
    expand: ['customer'],
  }
);
const customerEmail: string = (paymentIntent.customer as Stripe.Customer).email;
```

### Using Promises

Every method returns a chainable promise which can be used instead of a regular
callback:

```js
// Create a new customer and then create an invoice item then invoice it:
stripe.customers
  .create({
    email: 'customer@example.com',
  })
  .then((customer) => {
    // have access to the customer object
    return stripe.invoiceItems
      .create({
        customer: customer.id, // set the customer id
        amount: 2500, // 25
        currency: 'usd',
        description: 'One-time setup fee',
      })
      .then((invoiceItem) => {
        return stripe.invoices.create({
          collection_method: 'send_invoice',
          customer: invoiceItem.customer,
        });
      })
      .then((invoice) => {
        // New invoice created on a new customer
      })
      .catch((err) => {
        // Deal with an error
      });
  });
```

## Configuration

### Initialize with config object

The package can be initialized with several options:

```js
import ProxyAgent from 'https-proxy-agent';

const stripe = Stripe('sk_test_...', {
  apiVersion: '2019-08-08',
  maxNetworkRetries: 1,
  httpAgent: new ProxyAgent(process.env.http_proxy),
  timeout: 1000,
  host: 'api.example.com',
  port: 123,
  telemetry: true,
});
```

| Option              | Default            | Description                                                                                                                                                                                                                                       |
| ------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `apiVersion`        | `null`             | Stripe API version to be used. If not set the account's default version will be used.                                                                                                                                                             |
| `maxNetworkRetries` | 0                  | The amount of times a request should be [retried](#network-retries).                                                                                                                                                                              |
| `httpAgent`         | `null`             | [Proxy](#configuring-a-proxy) agent to be used by the library.                                                                                                                                                                                    |
| `timeout`           | 80000              | [Maximum time each request can take in ms.](#configuring-timeout)                                                                                                                                                                                 |
| `host`              | `'api.stripe.com'` | Host that requests are made to.                                                                                                                                                                                                                   |
| `port`              | 443                | Port that requests are made to.                                                                                                                                                                                                                   |
| `protocol`          | `'https'`          | `'https'` or `'http'`. `http` is never appropriate for sending requests to Stripe servers, and we strongly discourage `http`, even in local testing scenarios, as this can result in your credentials being transmitted over an insecure channel. |
| `telemetry`         | `true`             | Allow Stripe to send latency [telemetry](#request-latency-telemetry).                                                                                                                                                                             |

Note: Both `maxNetworkRetries` and `timeout` can be overridden on a per-request basis.

### Configuring Timeout

Timeout can be set globally via the config object:

```js
const stripe = Stripe('sk_test_...', {
  timeout: 20 * 1000, // 20 seconds
});
```

And overridden on a per-request basis:

```js
stripe.customers.create(
  {
    email: 'customer@example.com',
  },
  {
    timeout: 1000, // 1 second
  }
);
```

### Configuring For Connect

A per-request `Stripe-Account` header for use with [Stripe Connect][connect]
can be added to any method:

```js
// List the balance transactions for a connected account:
stripe.balanceTransactions.list(
  {
    limit: 10,
  },
  {
    stripeAccount: 'acct_foo',
  }
);
```

### Configuring a Proxy

To use stripe behind a proxy you can pass an [https-proxy-agent][https-proxy-agent] on initialization:

```js
if (process.env.http_proxy) {
  const ProxyAgent = require('https-proxy-agent');

  const stripe = Stripe('sk_test_...', {
    httpProxy: new ProxyAgent(process.env.http_proxy),
  });
}
```

### Network retries

Automatic network retries can be enabled with the `maxNetworkRetries` config option.
This will retry requests `n` times with exponential backoff if they fail due to an intermittent network problem.
[Idempotency keys](https://stripe.com/docs/api/idempotent_requests) are added where appropriate to prevent duplication.

```js
const stripe = Stripe('sk_test_...', {
  maxNetworkRetries: 2, // Retry a request twice before giving up
});
```

Network retries can also be set on a per-request basis:

```js
stripe.customers.create(
  {
    email: 'customer@example.com',
  },
  {
    maxNetworkRetries: 2, // Retry this specific request twice before giving up
  }
);
```

### Examining Responses

Some information about the response which generated a resource is available
with the `lastResponse` property:

```js
customer.lastResponse.requestId; // see: https://stripe.com/docs/api/request_ids?lang=node
customer.lastResponse.statusCode;
```

### `request` and `response` events

The Stripe object emits `request` and `response` events. You can use them like this:

```js
const stripe = require('stripe')('sk_test_...');

const onRequest = (request) => {
  // Do something.
};

// Add the event handler function:
stripe.on('request', onRequest);

// Remove the event handler function:
stripe.off('request', onRequest);
```

#### `request` object

```js
{
  api_version: 'latest',
  account: 'acct_TEST',              // Only present if provided
  idempotency_key: 'abc123',         // Only present if provided
  method: 'POST',
  path: '/v1/customers',
  request_start_time: 1565125303932  // Unix timestamp in milliseconds
}
```

#### `response` object

```js
{
  api_version: 'latest',
  account: 'acct_TEST',              // Only present if provided
  idempotency_key: 'abc123',         // Only present if provided
  method: 'POST',
  path: '/v1/customers',
  status: 402,
  request_id: 'req_Ghc9r26ts73DRf',
  elapsed: 445,                      // Elapsed time in milliseconds
  request_start_time: 1565125303932, // Unix timestamp in milliseconds
  request_end_time: 1565125304377    // Unix timestamp in milliseconds
}
```

### Webhook signing

Stripe can optionally sign the webhook events it sends to your endpoint, allowing you to validate that they were not sent by a third-party. You can read more about it [here](https://stripe.com/docs/webhooks/signatures).

Please note that you must pass the _raw_ request body, exactly as received from Stripe, to the `constructEvent()` function; this will not work with a parsed (i.e., JSON) request body.

You can find an example of how to use this with [Express](https://expressjs.com/) in the [`examples/webhook-signing`](examples/webhook-signing) folder, but here's what it looks like:

```js
const event = stripe.webhooks.constructEvent(
  webhookRawBody,
  webhookStripeSignatureHeader,
  webhookSecret
);
```

#### Testing Webhook signing

You can use `stripe.webhooks.generateTestHeaderString` to mock webhook events that come from Stripe:

```js
const payload = {
  id: 'evt_test_webhook',
  object: 'event',
};

const payloadString = JSON.stringify(payload, null, 2);
const secret = 'whsec_test_secret';

const header = stripe.webhooks.generateTestHeaderString({
  payload: payloadString,
  secret,
});

const event = stripe.webhooks.constructEvent(payloadString, header, secret);

// Do something with mocked signed event
expect(event.id).to.equal(payload.id);
```

### Writing a Plugin

If you're writing a plugin that uses the library, we'd appreciate it if you instantiated your stripe client with `appInfo`, eg;

```js
const stripe = require('stripe')('sk_test_...', {
  appInfo: {
    name: 'MyAwesomePlugin',
    version: '1.2.34', // Optional
    url: 'https://myawesomeplugin.info', // Optional
  }
});
```

Or using ES modules or TypeScript:

```js
const stripe = new Stripe(apiKey, {
  appInfo: {
    name: 'MyAwesomePlugin',
    version: '1.2.34', // Optional
    url: 'https://myawesomeplugin.info', // Optional
  }
});
```

This information is passed along when the library makes calls to the Stripe API.

### Auto-pagination

We provide a few different APIs for this to aid with a variety of node versions and styles.

#### Async iterators (`for-await-of`)

If you are in a Node environment that has support for [async iteration](https://github.com/tc39/proposal-async-iteration#the-async-iteration-statement-for-await-of),
such as Node 10+ or [babel](https://babeljs.io/docs/en/babel-plugin-transform-async-generator-functions),
the following will auto-paginate:

```js
for await (const customer of stripe.customers.list()) {
  doSomething(customer);
  if (shouldStop()) {
    break;
  }
}
```

#### `autoPagingEach`

If you are in a Node environment that has support for `await`, such as Node 7.9 and greater,
you may pass an async function to `.autoPagingEach`:

```js
await stripe.customers.list().autoPagingEach(async (customer) => {
  await doSomething(customer);
  if (shouldBreak()) {
    return false;
  }
});
console.log('Done iterating.');
```

Equivalently, without `await`, you may return a Promise, which can resolve to `false` to break:

```js
stripe.customers
  .list()
  .autoPagingEach((customer) => {
    return doSomething(customer).then(() => {
      if (shouldBreak()) {
        return false;
      }
    });
  })
  .then(() => {
    console.log('Done iterating.');
  })
  .catch(handleError);
```

#### `autoPagingToArray`

This is a convenience for cases where you expect the number of items
to be relatively small; accordingly, you must pass a `limit` option
to prevent runaway list growth from consuming too much memory.

Returns a promise of an array of all items across pages for a list request.

```js
const allNewCustomers = await stripe.customers
  .list({created: {gt: lastMonth}})
  .autoPagingToArray({limit: 10000});
```

### Request latency telemetry

By default, the library sends request latency telemetry to Stripe. These
numbers help Stripe improve the overall latency of its API for all users.

You can disable this behavior if you prefer:

```js
const stripe = new Stripe('sk_test_...', {
  telemetry: false,
});
```

## More Information

- [REST API Version](https://github.com/stripe/stripe-node/wiki/REST-API-Version)
- [Error Handling](https://github.com/stripe/stripe-node/wiki/Error-Handling)
- [Passing Options](https://github.com/stripe/stripe-node/wiki/Passing-Options)
- [Using Stripe Connect](https://github.com/stripe/stripe-node/wiki/Using-Stripe-Connect-with-node.js)

## Development

Run all tests:

```bash
$ yarn install
$ yarn test
```

If you do not have `yarn` installed, you can get it with `npm install --global yarn`.

The tests also depends on [stripe-mock][stripe-mock], so make sure to fetch and
run it from a background terminal ([stripe-mock's README][stripe-mock-usage]
also contains instructions for installing via Homebrew and other methods):

```bash
go get -u github.com/stripe/stripe-mock
stripe-mock
```

Run a single test suite without a coverage report:

```bash
$ yarn mocha-only test/Error.spec.js
```

Run a single test (case sensitive) in watch mode:

```bash
$ yarn mocha-only test/Error.spec.js --grep 'Populates with type' --watch
```

If you wish, you may run tests using your Stripe _Test_ API key by setting the
environment variable `STRIPE_TEST_API_KEY` before running the tests:

```bash
$ export STRIPE_TEST_API_KEY='sk_test....'
$ yarn test
```

Run prettier:

Add an [editor integration](https://prettier.io/docs/en/editors.html) or:

```bash
$ yarn fix
```

[api-keys]: https://dashboard.stripe.com/account/apikeys
[api-versions]: https://stripe.com/docs/api/versioning
[api-version-upgrading]: https://stripe.com/docs/upgrades#how-can-i-upgrade-my-api
[connect]: https://stripe.com/connect
[expanding_objects]: https://stripe.com/docs/api/expanding_objects
[https-proxy-agent]: https://github.com/TooTallNate/node-https-proxy-agent
[stripe-js]: https://stripe.com/docs/js
[stripe-mock]: https://github.com/stripe/stripe-mock
[stripe-mock-usage]: https://github.com/stripe/stripe-mock#usage
[youtube-playlist]: https://www.youtube.com/playlist?list=PLy1nL-pvL2M5xNIuNapwmABwEy2uifAlY

<!--
# vim: set tw=79:
-->
