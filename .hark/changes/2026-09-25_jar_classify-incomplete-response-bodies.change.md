---
title: Classify incomplete response bodies as connection errors
pr_url: https://github.com/stripe/stripe-node/pull/2868
semver_level: major
---

- Responses that stall or are severed before the body is complete now throw `StripeConnectionError` instead of `StripeAPIError`.

If your integration handles `StripeAPIError` specifically for a connection that closes while the response body is being read, update it to handle `StripeConnectionError` instead.

Before:

```ts
try {
  await stripe.balance.retrieve();
} catch (error) {
  if (error instanceof Stripe.errors.StripeAPIError) {
    handleResponseFailure(error);
  } else {
    throw error;
  }
}
```

After:

```ts
try {
  await stripe.balance.retrieve();
} catch (error) {
  if (error instanceof Stripe.errors.StripeConnectionError) {
    handleResponseFailure(error);
  } else {
    throw error;
  }
}
```

Handling for fully received API error responses and malformed JSON responses does not need to change; these continue to throw `StripeAPIError`.
