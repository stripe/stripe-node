---
title: correctly throw connection errors if the server drops while sending the HTTP response body
pr_link: https://github.com/stripe/stripe-node/pull/2815
released_in_version: 22.6.0
---

- This change results in new exceptions being thrown instead of hanging indefinitely
- in an effort to make this change backwards compatible, it doesn't affect a case that was already throwing an error: if the stripe API sends invalid JSON, we were treating it as an API error instead of a connection error.
    - In the next major version, we'll change the exception thrown from `StripeAPIError` to `StripeConnectionError` and document it accordingly.
