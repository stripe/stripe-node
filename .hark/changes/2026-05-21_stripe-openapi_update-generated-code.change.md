---
title: Update generated code for private-preview
pr_url: https://github.com/stripe/stripe-node/pull/2719
is_breaking: true
is_stripe_api_change: true
released_in_version: 22.2.0-alpha.6
---

* Add support for new resource `PaymentLocationCapability`
* Add support for `list`, `retrieve`, and `update` methods on resource `PaymentLocationCapability`
* Add support for `close` and `simulate_network_lifecycle_dispute_response` test helper methods on resource `Issuing.Dispute`
* Change type of `DelegatedCheckout.RequestedSessionUpdateParams.discounts.codes` from `array(string)` to `emptyable(array(string))`
* ⚠️ Remove support for `credited_items` on `InvoiceItem.proration_details`
* Add support for `balance_response` on `Issuing.Authorization`
* Add support for `payment_evaluations` on `PaymentAttemptRecordReportCanceledParams`, `PaymentAttemptRecordReportFailedParams`, `PaymentRecordReportPaymentAttemptCanceledParams`, `PaymentRecordReportPaymentAttemptFailedParams`, `PaymentRecordReportPaymentAttemptParams.failed`, and `PaymentRecordReportPaymentParams.failed`
* Add support for `enabled` on `PaymentIntentConfirmParams.payment_details.benefit.fr_meal_voucher`, `PaymentIntentCreateParams.payment_details.benefit.fr_meal_voucher`, `PaymentIntentUpdateParams.payment_details.benefit.fr_meal_voucher`, `SetupIntentConfirmParams.setup_details.benefit.fr_meal_voucher`, `SetupIntentCreateParams.setup_details.benefit.fr_meal_voucher`, and `SetupIntentUpdateParams.setup_details.benefit.fr_meal_voucher`
* Add support for `advanced_feature_details` and `allowed_payment_method_types` on `PaymentIntent`
* Change type of `PaymentLocationUpdateParams.address.city` from `string` to `emptyable(string)`
* Change type of `PaymentLocationUpdateParams.address.line1` from `string` to `emptyable(string)`
* Change type of `PaymentLocationUpdateParams.address.line2` from `string` to `emptyable(string)`
* Change type of `PaymentLocationUpdateParams.address.postal_code` from `string` to `emptyable(string)`
* Change type of `PaymentLocationUpdateParams.address.state` from `string` to `emptyable(string)`
* Change `SubscriptionPauseParams.type` to be optional
* ⚠️ Remove support for `payment_behavior` on `SubscriptionResumeParams`
* ⚠️ Remove support for `status_details` on `Subscription`
