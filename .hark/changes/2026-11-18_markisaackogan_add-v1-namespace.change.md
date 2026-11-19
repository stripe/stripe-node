---
title: Add a v1 namespace for API services
semver_level: minor
---

All top-level, non-[v2 API services](https://docs.stripe.com/api-v2-overview) on `Stripe` are made available under the new `v1` namespace. The existing top-level services remain supported but will be marked as deprecated in the next major release. Eg.

```diff
const stripe = new Stripe('sk_test_...');

// Access V1 API services through the V1 namespace
- stripe.customers.list();
+ stripe.v1.customers.list(); // preferred way to access services
```