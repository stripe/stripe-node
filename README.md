# stripe-search-beta

This is a branch of [stripe-node](https://github.com/stripe/stripe-node) specialized for the use of the [Search API beta](https://stripe.com/docs/search-api).

It is experimental, and support for this package will end on 2022-01-31.

It is branched off of the 8.174.0 release of `stripe-node`, and acts as a complete replacement for the library.

We publish a separate [npm package](https://www.npmjs.com/package/stripe-search-beta), `stripe-search-beta`, with the contents of this branch.

To use it

```shell
$ npm uninstall stripe
$ npm install stripe-search-beta
```

And then inside your application code

```diff
-const stripe = require('stripe')("<your-api-key>")
+const stripe = require('stripe-search-beta')("<your-api-key>")
```

## Version Header

Note, unlike the standard stripe client, which passes no `stripe-version` header by default, causing the requests to be subject to your account's global API version which is configured in [the dashboard](https://dashboard.stripe.com/developers), the stripe-search-beta client passes `2020-08-27;search_api_beta=v1` as the default header on all requests, so these requests will not be subject to your account's global API version.

## Contents

This branch adds support for the `search` method on the `Charge`, `Customer`, `Invoice`, `PaymentIntent`, and `Subscription` resources.

## Example Usage (typescript):

```typescript
const stripe = new Stripe(
  process.env.STRIPE_API_KEY,
  {
    apiVersion: "2020-08-27;search_api_beta=v1",
  }
);

await stripe.charges
  .search({
    query: 'metadata["foo"]:"bar"',
  })
  .autoPagingEach((matchingCharge: Stripe.Charge) => {
    console.log(matchingCharge.id);
  });
```

## More

For more detailed usage instructions, see the [README.md](https://github.com/stripe/stripe-node/blob/master/README.md) from the [master branch of stripe-node](https://github.com/stripe/stripe-node).

<!--
# vim: set tw=79:
-->
