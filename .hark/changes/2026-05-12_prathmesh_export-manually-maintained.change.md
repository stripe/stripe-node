---
title: Export manually maintained types for OAuthToken and OAuth param classes
pr_link: https://github.com/stripe/stripe-node/pull/2711
released_in_version: 22.2.0
---

```ts
// ❌ Before (v22.0.0-v22.1.1)
const oAuthToken: Stripe.OAuthToken = {};

// ✅ After (works on v22.1.2+)
const oAuthToken: Stripe.OAuthToken = {};
```
