---
title: Multiple API changes
pr_link: https://github.com/stripe/stripe-node/pull/1063
is_stripe_api_change: true
released_in_version: 8.121.0
---

* Add support for `last_finalization_error` on `Invoice`
* Add support for deserializing Issuing `Dispute` as a `source` on `BalanceTransaction`
* Add support for `payment_method_type` on `StripeError` used by other API resources
