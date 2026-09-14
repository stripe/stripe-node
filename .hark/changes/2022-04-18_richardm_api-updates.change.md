---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1396
is_stripe_api_change: true
released_in_version: 8.218.0
---

* Add support for new resources `FundingInstructions` and `Terminal.Configuration`
* Add support for `create_funding_instructions` method on resource `Customer`
* Add support for new value `customer_balance` as a payment method `type`.
* Add support for `customer_balance` on `Charge.payment_method_details`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, and `PaymentMethod`
* Add support for `cash_balance` on `CustomerCreateParams` and `CustomerUpdateParams`
* Add support for `amount_details` on `PaymentIntent`
* Add support for `display_bank_transfer_instructions` on `PaymentIntent.next_action`
* Add support for `configuration_overrides` on `Terminal.Location`, `Terminal.LocationCreateParams`, and `Terminal.LocationUpdateParams`
