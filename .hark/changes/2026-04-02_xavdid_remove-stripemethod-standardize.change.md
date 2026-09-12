---
title: Remove `stripeMethod` and standardize how function args are handled (including removing callback support)
pr_url: https://github.com/stripe/stripe-node/pull/2645
is_breaking: true
released_in_version: 22.0.0
---

- ⚠️ Refactor how incoming method arguments are parsed. Type signatures for API methods should be _much_ more accurate and reliable now
  - ⚠️ Remove support for providing callbacks to API methods. Use `async / await` instead
  - ⚠️ Remove support for passing a plain API key as a function arg. If supplied on a per-request basis, it should be in the `RequestOptions` under the `apiKey` property
  - ⚠️ Keys from `params` and `options` objects are no longer mixed. If present on a method, `RequestParams` must always come first and `RequestOptions` must always come second. To supply options without params, pass `undefined` as the first argument explicitly
  - ⚠️ Removed methods from `StripeResource`: `createFullPath`, `createResourcePathWithSymbols`, `extend`, `method` and `_joinUrlParts`. These were mostly intended for internal use and we no longer need them

As a result, the following call patterns are no longer supported:

```ts
stripe.customers.retrieve('cus_123', 'sk_test_123')
stripe.customers.create({name: 'david', host: 'example.com'}, 'sk_test_123')
stripe.customers.create({apiKey: 'sk_test_123'})
stripe.customers.list(customers => {
  // do something with customers
})
```

If those look familiar, head over to the [migration guide](https://github.com/stripe/stripe-node/wiki/Migration-guide-for-v22) to update your code.
