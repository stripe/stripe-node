---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1196
is_stripe_api_change: true
released_in_version: 8.164.0
---

* Remove support for values `api_connection_error`, `authentication_error`, and `rate_limit_error` from enums `StripeError.type`, `StripeErrorResponse.error.type`, `Invoice.last_finalization_error.type`, `PaymentIntent.last_payment_error.type`, `SetupAttempt.setup_error.type`, and `SetupIntent.last_setup_error.type`
* Add support for `wallet` on `Issuing.Transaction`
* Add support for `ideal` on `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentIntentConfirmParams.payment_method_options`, and `PaymentIntent.payment_method_options`
