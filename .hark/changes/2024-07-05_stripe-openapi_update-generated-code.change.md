---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/2125
is_stripe_api_change: true
released_in_version: 16.2.0
---

* Add support for `add_lines`, `remove_lines`, and `update_lines` methods on resource `Invoice`
* Add support for new value `payment_intent_fx_quote_invalid` on enums `Invoice.last_finalization_error.code`, `PaymentIntent.last_payment_error.code`, `SetupAttempt.setup_error.code`, `SetupIntent.last_setup_error.code`, and `StripeError.code`
* Add support for `posted_at` on `Tax.TransactionCreateFromCalculationParams` and `Tax.Transaction`
