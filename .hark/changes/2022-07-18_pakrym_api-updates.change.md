---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1477
is_stripe_api_change: true
released_in_version: 9.14.0
---

* Add support for `blik_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
* Add support for `blik` on `Charge.payment_method_details`, `Mandate.payment_method_details`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, `PaymentMethodUpdateParams`, `PaymentMethod`, `SetupAttempt.payment_method_details`, `SetupIntent.payment_method_options`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentConfirmParams.payment_method_options`, `SetupIntentCreateParams.payment_method_data`, `SetupIntentCreateParams.payment_method_options`, `SetupIntentUpdateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_options`
* Change type of `Checkout.Session.consent_collection.promotions`, `Checkout.SessionCreateParams.consent_collection.promotions`, `PaymentLink.consent_collection.promotions`, and `PaymentLinkCreateParams.consent_collection.promotions` from `literal('auto')` to `enum('auto'|'none')`
* Add support for new value `blik` on enum `Checkout.SessionCreateParams.payment_method_types[]`
* Add support for new value `blik` on enums `CustomerListPaymentMethodsParams.type` and `PaymentMethodListParams.type`
* Add support for new value `blik` on enums `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
* Add support for new value `blik` on enums `PaymentLink.payment_method_types[]`, `PaymentLinkCreateParams.payment_method_types[]`, and `PaymentLinkUpdateParams.payment_method_types[]`
* Add support for new value `blik` on enum `PaymentMethodCreateParams.type`
* Add support for new value `blik` on enum `PaymentMethod.type`
* Add support for `cancel` method on `Subscriptions` resource. This has the same functionality as the `del` method - if you are on a version less than 9.14.0, please use `del`.
