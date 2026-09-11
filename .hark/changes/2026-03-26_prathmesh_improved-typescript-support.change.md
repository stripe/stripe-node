---
title: Improved TypeScript support in the Node SDK
pr_link: https://github.com/stripe/stripe-node/pull/2619
is_breaking: true
released_in_version: 22.0.0
---

  * Moved the types from the partially manually maintained and partially generated types folder to be inline with the implementation in TypeScript files.
  * Removed top-level “stripe” ambient module. This allows import aliasing for the stripe package.
  * ⚠️ `Stripe.StripeContext` is no longer exported as a type. Use `Stripe.StripeContextType` instead.
  * ⚠️ `Stripe.errors.StripeError` is no longer a type. Use `typeof Stripe.errors.StripeError` or `Stripe.ErrorType` instead.
  * ⚠️ CJS entry point no longer exports .default or .Stripe as separate properties.
  * ⚠️ Stripe import is now a true ES6 class. Use `new Stripe()` to create a StripeClient instead of calling it:
```javascript
// Before
const stripeClient = Stripe("sk_test_...");

// After
const stripeClient = new Stripe("sk_test_...");
```
