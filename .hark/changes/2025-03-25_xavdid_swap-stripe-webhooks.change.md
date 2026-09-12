---
title: Swap Stripe.webhooks from a factory function to a static property
pr_url: https://github.com/stripe/stripe-node/pull/2277
is_breaking: true
section: ⚠️ Other Breaking changes in the SDK
released_in_version: 18.0.0
---

- `Stripe.webhooks` and `Stripe().webhooks` are no longer functions (just plain objects)
    - if you were already treating those properties as plain objects (per the types), then you can ignore this change
    - if you were calling `Stripe.webhooks().someMethod()`, you should use `Stripe.webhooks.someMethod()` instead
    - there shouldn't be user-facing functionality changing, just a slight breaking change in our internal organization
