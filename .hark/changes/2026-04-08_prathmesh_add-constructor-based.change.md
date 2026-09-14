---
title: Add constructor based initialization for CJS based TypeScript imports
pr_url: https://github.com/stripe/stripe-node/pull/2669
released_in_version: 22.0.1
---

* Initialization of Stripe class with `new` keyword is now possible for CJS based TypeScript project. Resolves: [2660](https://github.com/stripe/stripe-node/issues/2660)
```ts
import Stripe = require('stripe');
// ✅ Both statements work
const stripeNew: Stripe.Stripe = new Stripe('sk_test_...');
const stripeCalled: Stripe.Stripe = Stripe('sk_test_...');
```
