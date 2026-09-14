---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1139
is_stripe_api_change: true
released_in_version: 8.143.0
---

* Add support for `acss_debit_payments` on `Account.capabilities`
* Add support for `payment_method_options` on `Checkout.Session`
* Add support for `acss_debit` on `SetupIntent.payment_method_options`, `SetupAttempt.payment_method_details`, `PaymentMethod`, `PaymentIntent.payment_method_options`,  `PaymentIntentUpdateParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_data`, `Mandate.payment_method_details` and `SetupIntent.payment_method_options`
* Add support for `verify_with_microdeposits` on `PaymentIntent.next_action` and `SetupIntent.next_action`
* Add support for `acss_debit` as member of the `type` enum on `PaymentMethod` and `PaymentIntent`, and inside `Checkout.SessionCreateParams.payment_method_types[]`.
