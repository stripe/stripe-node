---
title: Classify incomplete response bodies as connection errors
pr_url: https://github.com/stripe/stripe-node/pull/2868
semver_level: major
---

- Responses that stall or are severed before the body is complete now throw `StripeConnectionError` instead of `StripeAPIError`.
