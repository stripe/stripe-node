---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/2073
is_stripe_api_change: true
released_in_version: 15.6.0-beta.1
---

* Add support for `rechnung_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
* Add support for `rechnung` on `Charge.payment_method_details`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, `PaymentMethodUpdateParams`, `PaymentMethod`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
* Add support for `multibanco` on `Checkout.Session.payment_method_options` and `Checkout.SessionCreateParams.payment_method_options`
* Add support for new value `multibanco` on enum `Checkout.SessionCreateParams.payment_method_types[]`
* Add support for new value `rechnung` on enums `ConfirmationTokenCreateParams.testHelpers.payment_method_data.type`, `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
* Add support for new value `rechnung` on enums `ConfirmationToken.payment_method_preview.type` and `PaymentMethod.type`
* Add support for new value `rechnung` on enums `CustomerListPaymentMethodsParams.type`, `PaymentMethodCreateParams.type`, and `PaymentMethodListParams.type`
* Change `GiftCards.Card.code` and `GiftCards.Card.transactions` to be optional
* Change `Tax.Calculation.ship_from_details` and `Tax.Transaction.ship_from_details` to be required
