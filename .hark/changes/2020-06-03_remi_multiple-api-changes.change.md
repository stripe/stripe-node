---
title: Multiple API changes
pr_link: https://github.com/stripe/stripe-node/pull/909
is_stripe_api_change: true
released_in_version: 8.58.0
---

* Add `bacs_debit_payments` as a `Capability`
* Add support for BACS Debit on Checkout `Session`
* Add support for `checkout.session.async_payment_failed` and `checkout.session.async_payment_succeeded` as `type` on `Event`
