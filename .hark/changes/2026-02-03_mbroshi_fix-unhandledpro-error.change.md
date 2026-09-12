---
title: Fix `UnhandledPromiseRejection` error on failed V2 List operations
pr_url: https://github.com/stripe/stripe-node/pull/2571
released_in_version: 20.4.0-beta.2
---

- Fixes a bug where any error returned from the Stripe API on a V2 List call (e.g. a 4xx or 5xx) would crash Node due to an `UnhandledPromiseRejection`
