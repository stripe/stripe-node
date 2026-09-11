---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/2069
is_stripe_api_change: true
released_in_version: 15.3.0
---

* Add support for `create_preview` method on resource `Invoice`
* Add support for `payment_method_data` on `Checkout.SessionCreateParams`
* Add support for `saved_payment_method_options` on `Checkout.SessionCreateParams` and `Checkout.Session`
* Add support for `mobilepay` on `Checkout.Session.payment_method_options` and `Checkout.SessionCreateParams.payment_method_options`
* Add support for new value `mobilepay` on enum `Checkout.SessionCreateParams.payment_method_types[]`
* Add support for `allow_redisplay` on `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `CustomerListPaymentMethodsParams`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentMethodCreateParams`, `PaymentMethodUpdateParams`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
* Add support for `schedule_details` and `subscription_details` on `InvoiceUpcomingLinesParams` and `InvoiceUpcomingParams`
* Add support for new value `other` on enums `Issuing.AuthorizationCaptureParams.testHelpers.purchase_details.fuel.unit`, `Issuing.TransactionCreateForceCaptureParams.testHelpers.purchase_details.fuel.unit`, and `Issuing.TransactionCreateUnlinkedRefundParams.testHelpers.purchase_details.fuel.unit`
