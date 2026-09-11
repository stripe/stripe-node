---
title: Removed per-request host override. To use a custom host, set it in the client configuration. All requests from that client will use that host.
pr_link: https://github.com/stripe/stripe-node/pull/2643
is_breaking: true
released_in_version: 22.0.0
---

Before:
```ts
import Stripe from 'stripe';
const stripe = new Stripe('sk_test_...');

const customer = await stripe.customers.create({
  email: 'customer@example.com',
}, {host: 'example.com'});
```

After:
```ts
import Stripe from 'stripe';
const stripe = new Stripe('sk_test_...', {host: 'example.com'});

// goes to example.com
const customer = await stripe.customers.create({
  email: 'customer@example.com',
});
```
