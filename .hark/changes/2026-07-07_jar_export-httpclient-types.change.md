---
title: Export HttpClient types as interfaces instead of classes
pr_link: https://github.com/stripe/stripe-node/pull/2779
released_in_version: 22.3.1
---

- `Stripe.HttpClient` and `Stripe.HttpClientResponse` types now reflect the minimal interface contract rather than the concrete class, making custom HTTP client implementations easier to type correctly.
