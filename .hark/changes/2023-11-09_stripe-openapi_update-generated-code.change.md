---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/1947
is_stripe_api_change: true
released_in_version: 14.4.0
---

* Add support for new value `terminal_reader_hardware_fault` on enums `Invoice.last_finalization_error.code`, `PaymentIntent.last_payment_error.code`, `SetupAttempt.setup_error.code`, `SetupIntent.last_setup_error.code`, and `StripeError.code`
* Change `Charge.payment_method_details.card.amount_authorized`, `Checkout.Session.payment_method_configuration_details`, `PaymentIntent.latest_charge`, `PaymentIntent.payment_method_configuration_details`, and `SetupIntent.payment_method_configuration_details` to be required
* Change `Product.features[].name` to be optional
* Add support for `metadata` on `Quote.subscription_data`, `QuoteCreateParams.subscription_data`, and `QuoteUpdateParams.subscription_data`
