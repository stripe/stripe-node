---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1344
is_stripe_api_change: true
released_in_version: 8.202.0
---

* Add support for new value `au_becs_debit` on enum `Checkout.SessionCreateParams.payment_method_types[]`
* Change type of `Refund.reason` from `string` to `enum('duplicate'|'expired_uncaptured_charge'|'fraudulent'|'requested_by_customer')`
