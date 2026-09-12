---
title: "Generated changes from [#2611](https://github.com/stripe/stripe-node/pull/2611), [#2620](https://github.com/stripe/stripe-node/pull/2620), [#2618](https://github.com/stripe/stripe-node/pull/2618)"
is_breaking: true
is_stripe_api_change: true
section: ⚠️ Breaking changes due to changes in the Stripe API
released_in_version: 21.0.0
---

* Add support for `upi_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
* Add support for `upi` on `Charge.payment_method_details`, `Checkout.Session.payment_method_options`, `Checkout.SessionCreateParams.payment_method_options`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `Mandate.payment_method_details`, `PaymentAttemptRecord.payment_method_details`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, `PaymentMethodConfiguration`, `PaymentMethodCreateParams`, `PaymentMethod`, `PaymentRecord.payment_method_details`, `SetupAttempt.payment_method_details`, `SetupIntent.payment_method_options`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentConfirmParams.payment_method_options`, `SetupIntentCreateParams.payment_method_data`, `SetupIntentCreateParams.payment_method_options`, `SetupIntentUpdateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_options`
* Add support for new value `tempo` on enums `Charge.payment_method_details.crypto.network`, `PaymentAttemptRecord.payment_method_details.crypto.network`, and `PaymentRecord.payment_method_details.crypto.network`
* Add support for `integration_identifier` on `Checkout.SessionCreateParams` and `Checkout.Session`
* Add support for new value `upi` on enums `Checkout.SessionCreateParams.excluded_payment_method_types`, `PaymentIntent.excluded_payment_method_types`, `PaymentIntentConfirmParams.excluded_payment_method_types`, `PaymentIntentCreateParams.excluded_payment_method_types`, `PaymentIntentUpdateParams.excluded_payment_method_types`, `SetupIntent.excluded_payment_method_types`, `SetupIntentCreateParams.excluded_payment_method_types`, and `SetupIntentUpdateParams.excluded_payment_method_types`
* Add support for `crypto` on `Checkout.SessionCreateParams.payment_method_options`
* Add support for new value `upi` on enum `Checkout.SessionCreateParams.payment_method_types`
* Add support for `pending_invoice_item_interval` on `Checkout.SessionCreateParams.subscription_data`
* Add support for new values `elements`, `embedded_page`, `form`, and `hosted_page` on enums `Checkout.Session.ui_mode` and `Checkout.SessionCreateParams.ui_mode`
* Add support for new value `marine_carbon_removal` on enum `Climate.Supplier.removal_pathway`
* Add support for new value `upi` on enums `ConfirmationTokenCreateParams.testHelpers.payment_method_data.type`, `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
* Add support for new value `upi` on enums `ConfirmationToken.payment_method_preview.type` and `PaymentMethod.type`
* Add support for `metadata` on `CreditNoteCreateParams.lines[]`, `CreditNoteLineItem`, `CreditNotePreviewLinesParams.lines[]`, and `CreditNotePreviewParams.lines[]`
* Add support for new value `upi` on enums `CustomerListPaymentMethodsParams.type`, `PaymentMethodCreateParams.type`, and `PaymentMethodListParams.type`
* Add support for `quantity_decimal` on `InvoiceAddLinesParams.lines[]`, `InvoiceCreatePreviewParams.invoice_items[]`, `InvoiceItemCreateParams`, `InvoiceItemUpdateParams`, `InvoiceItem`, `InvoiceLineItemUpdateParams`, `InvoiceLineItem`, and `InvoiceUpdateLinesParams.lines[]`
* ⚠️ Add support for `level` on `Issuing.AuthorizationCreateParams.testHelpers.risk_assessment.card_testing_risk` and `Issuing.AuthorizationCreateParams.testHelpers.risk_assessment.merchant_dispute_risk`
* ⚠️ Remove support for `risk_level` on `Issuing.AuthorizationCreateParams.testHelpers.risk_assessment.card_testing_risk` and `Issuing.AuthorizationCreateParams.testHelpers.risk_assessment.merchant_dispute_risk`
* Add support for `lifecycle_controls` on `Issuing.CardCreateParams` and `Issuing.Card`
* ⚠️ Change type of `Issuing.Token.network_data.visa.card_reference_id` from `string` to `string | null`
* ⚠️ Change type of `PaymentAttemptRecord.payment_method_details.card.brand` and `PaymentRecord.payment_method_details.card.brand` from `enum` to `enum | null`
* ⚠️ Change type of `PaymentAttemptRecord.payment_method_details.card.exp_month` and `PaymentRecord.payment_method_details.card.exp_month` from `longInteger` to `longInteger | null`
* ⚠️ Change type of `PaymentAttemptRecord.payment_method_details.card.exp_year` and `PaymentRecord.payment_method_details.card.exp_year` from `longInteger` to `longInteger | null`
* ⚠️ Change type of `PaymentAttemptRecord.payment_method_details.card.funding` and `PaymentRecord.payment_method_details.card.funding` from `enum('credit'|'debit'|'prepaid'|'unknown')` to `enum('credit'|'debit'|'prepaid'|'unknown') | null`
* ⚠️ Change type of `PaymentAttemptRecord.payment_method_details.card.last4` and `PaymentRecord.payment_method_details.card.last4` from `string` to `string | null`
* ⚠️ Change type of `PaymentAttemptRecord.payment_method_details.card.moto` and `PaymentRecord.payment_method_details.card.moto` from `boolean` to `boolean | null`
* Add support for `cryptogram`, `electronic_commerce_indicator`, `exemption_indicator_applied`, and `exemption_indicator` on `PaymentAttemptRecord.payment_method_details.card.three_d_secure` and `PaymentRecord.payment_method_details.card.three_d_secure`
* Add support for `upi_handle_redirect_or_display_qr_code` on `PaymentIntent.next_action` and `SetupIntent.next_action`
* Add support for new value `upi` on enums `PaymentLink.payment_method_types`, `PaymentLinkCreateParams.payment_method_types`, and `PaymentLinkUpdateParams.payment_method_types`
* Add support for `recommended_action` and `signals` on `Radar.PaymentEvaluation`
* ⚠️ Remove support for `insights` on `Radar.PaymentEvaluation`
* Add support for new value `crypto_fingerprint` on enums `Radar.ValueList.item_type` and `Radar.ValueListCreateParams.item_type`
* Add support for new value `canceled_by_retention_policy` on enum `Subscription.cancellation_details.reason`
* Add support for new value `2026-03-25.dahlia` on enum `WebhookEndpointCreateParams.api_version`
* ⚠️ Change type of `V2.Core.EventDestination.events_from` and `V2.Core.EventDestinationCreateParams.events_from` from `enum('other_accounts'|'self')` to `string`
* Add support for error code `service_period_coupon_with_metered_tiered_item_unsupported` on `Invoice.last_finalization_error`, `PaymentIntent.last_payment_error`, `SetupAttempt.setup_error`, `SetupIntent.last_setup_error`, and `StripeError`
