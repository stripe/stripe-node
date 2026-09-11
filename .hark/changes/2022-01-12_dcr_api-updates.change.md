---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1328
is_stripe_api_change: true
released_in_version: 8.196.0
---

* Add support for `customer_creation` on `Checkout.SessionCreateParams` and `Checkout.Session`
* Add support for `fpx` and `grabpay` on `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentIntentConfirmParams.payment_method_options`, and `PaymentIntent.payment_method_options`
