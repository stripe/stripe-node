---
title: Update generated code for private-preview
pr_link: https://github.com/stripe/stripe-node/pull/2559
is_stripe_api_change: true
released_in_version: 20.3.0-alpha.1
---

* Remove support for `pause` method on resource `Subscription`
* Change type of `Quote.subscription_data.phase_effective_at` and `Quote.subscription_data_overrides[].phase_effective_at` from `enum('billing_period_start'|'phase_start')` to `enum('billing_period_start'|'phase_start') | null`
