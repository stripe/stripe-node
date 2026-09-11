---
title: Update generated code for private-preview
pr_link: https://github.com/stripe/stripe-node/pull/2699
is_breaking: true
is_stripe_api_change: true
released_in_version: 22.2.0-alpha.4
---

* Add support for new resource `PaymentLocation`
* Add support for `create`, `del`, `retrieve`, and `update` methods on resource `PaymentLocation`
* Add support for `protections` on `AccountCreateParams.capabilities.card_payments`, `AccountUpdateParams.capabilities.card_payments`, and `Capability`
* Add support for `gift_card` on `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentMethodCreateParams`, `PaymentMethod`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, `SetupIntentUpdateParams.payment_method_data`, and `SharedPayment.GrantedToken.payment_method_details`
* Add support for new value `gift_card` on enums `ConfirmationTokenCreateParams.testHelpers.payment_method_data.type`, `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
* ⚠️ Add support for new value `gift_card` on enums `ConfirmationToken.payment_method_preview.type`, `PaymentMethod.type`, and `SharedPayment.GrantedToken.payment_method_details.type`
* Add support for new value `gift_card` on enums `CustomerListPaymentMethodsParams.type`, `PaymentMethodCreateParams.type`, and `PaymentMethodListParams.type`
* Add support for `metadata` on `DelegatedCheckout.RequestedSessionConfirmParams`
* Add support for `credited_items` on `InvoiceItem.proration_details`
* Add support for `network_lifecycle` on `Issuing.Dispute`
* Add support for new value `gift_card` on enums `PaymentIntentConfirmParams.excluded_payment_method_types`, `PaymentIntentCreateParams.excluded_payment_method_types`, `PaymentIntentUpdateParams.excluded_payment_method_types`, `SetupIntentCreateParams.excluded_payment_method_types`, and `SetupIntentUpdateParams.excluded_payment_method_types`
* ⚠️ Add support for new value `gift_card` on enums `PaymentIntent.excluded_payment_method_types` and `SetupIntent.excluded_payment_method_types`
* Add support for `status_details` on `Subscription`
