---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1314
is_stripe_api_change: true
released_in_version: 8.195.0
---

* Add support for `au_becs_debit` on `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentIntentConfirmParams.payment_method_options`, and `PaymentIntent.payment_method_options`
* Change type of `PaymentIntent.processing.type` from `string` to `literal('card')`. This is not considered a breaking change as the field was added in the same release.
