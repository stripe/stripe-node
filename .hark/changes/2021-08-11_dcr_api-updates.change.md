---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1215
is_stripe_api_change: true
released_in_version: 8.169.0
---

* Add support for `locale` on `BillingPortal.SessionCreateParams` and `BillingPortal.Session`
* Change type of `Invoice.collection_method` and `Subscription.collection_method` from `nullable(enum('charge_automatically'|'send_invoice'))` to `enum('charge_automatically'|'send_invoice')`
