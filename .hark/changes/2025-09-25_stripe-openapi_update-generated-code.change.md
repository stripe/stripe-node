---
title: Update generated code for private-preview
pr_link: https://github.com/stripe/stripe-node/pull/2419
is_stripe_api_change: true
released_in_version: 19.1.0-alpha.1
---

* Add support for `paypay_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
* Remove support for values `saturday` and `sunday` from enums `Account.settings.payouts.schedule.weekly_payout_days`, `AccountCreateParams.settings.payouts.schedule.weekly_payout_days`, `AccountUpdateParams.settings.payouts.schedule.weekly_payout_days`
* Add support for `credit_grants` on `Billing.AlertCreateParams.credit_balance_threshold.filters[]`
* Add support for `paypay` on `Charge.payment_method_details`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, `PaymentMethodConfiguration`, `PaymentMethodCreateParams`, `PaymentMethod`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
* Add support for `location` and `reader` on `Charge.payment_method_details.paynow`
* Add support for new value `paypay` on enum `Checkout.SessionCreateParams.payment_method_types`
* Add support for new value `paypay` on enums `ConfirmationTokenCreateParams.testHelpers.payment_method_data.type`, `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
* Add support for new value `paypay` on enums `ConfirmationToken.payment_method_preview.type` and `PaymentMethod.type`
* Add support for new value `paypay` on enums `CustomerListPaymentMethodsParams.type`, `PaymentMethodCreateParams.type`, and `PaymentMethodListParams.type`
* Add support for new value `paypay` on enums `PaymentIntent.excluded_payment_method_types` and `PaymentIntentCreateParams.excluded_payment_method_types`
* Add support for new value `paypay` on enums `PaymentLink.payment_method_types`, `PaymentLinkCreateParams.payment_method_types`, and `PaymentLinkUpdateParams.payment_method_types`
* Add support for `billing_cadence` on `InvoiceListParams`
* Add support for `payment_record_refund` and `type` on `CreditNote.refunds[]`, `CreditNoteCreateParams.refunds[]`, `CreditNotePreviewLinesParams.refunds[]`, and `CreditNotePreviewParams.refunds[]`
