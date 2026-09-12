---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2092
is_stripe_api_change: true
released_in_version: 15.8.0
---

* Add support for `external_account_collection` on `AccountSession.components.balances.features`, `AccountSession.components.payouts.features`, `AccountSessionCreateParams.components.balances.features`, and `AccountSessionCreateParams.components.payouts.features`
* Add support for new value `terminal_reader_invalid_location_for_payment` on enums `Invoice.last_finalization_error.code`, `PaymentIntent.last_payment_error.code`, `SetupAttempt.setup_error.code`, `SetupIntent.last_setup_error.code`, and `StripeError.code`
* Add support for `payment_method_remove` on `Checkout.Session.saved_payment_method_options`
