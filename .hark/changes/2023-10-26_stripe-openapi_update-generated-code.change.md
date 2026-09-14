---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/1939
is_stripe_api_change: true
released_in_version: 14.2.0
---

* Add support for new value `balance_invalid_parameter` on enums `Invoice.last_finalization_error.code`, `PaymentIntent.last_payment_error.code`, `SetupAttempt.setup_error.code`, `SetupIntent.last_setup_error.code`, and `StripeError.code`
* Change `Issuing.Cardholder.individual.card_issuing` to be optional
