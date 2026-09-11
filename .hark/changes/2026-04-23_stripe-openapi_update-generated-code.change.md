---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/2639
is_breaking: true
is_stripe_api_change: true
released_in_version: 22.1.0
---

* Add support for `app_distribution` and `sunbit_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
* Add support for `balance_report` and `payout_reconciliation_report` on `AccountSession.components` and `AccountSessionCreateParams.components`
* ⚠️ Add support for new values `fee_credit_funding`, `inbound_transfer_reversal`, and `inbound_transfer` on enum `BalanceTransaction.type`
* Add support for `sunbit` on `Charge.payment_method_details`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `PaymentAttemptRecord.payment_method_details`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, `PaymentMethodConfiguration`, `PaymentMethodCreateParams`, `PaymentMethod`, `PaymentRecord.payment_method_details`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
* ⚠️ Add support for new values `phantom_cash` and `usdt` on enums `Charge.payment_method_details.crypto.token_currency`, `PaymentAttemptRecord.payment_method_details.crypto.token_currency`, and `PaymentRecord.payment_method_details.crypto.token_currency`
* Add support for `location` and `reader` on `Charge.payment_method_details.klarna`, `PaymentAttemptRecord.payment_method_details.klarna`, and `PaymentRecord.payment_method_details.klarna`
* Add support for `mandate` on `Charge.payment_method_details.pix`, `PaymentAttemptRecord.payment_method_details.pix`, and `PaymentRecord.payment_method_details.pix`
* Add support for `managed_payments` on `Checkout.SessionCreateParams`, `Checkout.Session`, `PaymentIntent`, `PaymentLinkCreateParams`, `PaymentLink`, `SetupIntent`, and `Subscription`
* Add support for new value `sunbit` on enums `Checkout.SessionCreateParams.excluded_payment_method_types`, `PaymentIntentConfirmParams.excluded_payment_method_types`, `PaymentIntentCreateParams.excluded_payment_method_types`, `PaymentIntentUpdateParams.excluded_payment_method_types`, `SetupIntentCreateParams.excluded_payment_method_types`, and `SetupIntentUpdateParams.excluded_payment_method_types`
* Add support for `mandate_options` on `Checkout.Session.payment_method_options.pix`, `Checkout.SessionCreateParams.payment_method_options.pix`, `PaymentIntent.payment_method_options.pix`, `PaymentIntentConfirmParams.payment_method_options.pix`, `PaymentIntentCreateParams.payment_method_options.pix`, and `PaymentIntentUpdateParams.payment_method_options.pix`
* Change type of `Checkout.SessionCreateParams.payment_method_options.pix.setup_future_usage`, `PaymentIntentConfirmParams.payment_method_options.pix.setup_future_usage`, `PaymentIntentCreateParams.payment_method_options.pix.setup_future_usage`, and `PaymentIntentUpdateParams.payment_method_options.pix.setup_future_usage` from `literal('none')` to `enum('none'|'off_session')`
* Add support for new value `sunbit` on enum `Checkout.SessionCreateParams.payment_method_types`
* ⚠️ Add support for new values `fo_vat`, `gi_tin`, `it_cf`, and `py_ruc` on enums `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, `Tax.Calculation.customer_details.tax_ids[].type`, `Tax.Transaction.customer_details.tax_ids[].type`, and `TaxId.type`
* ⚠️ Change type of `Checkout.Session.payment_method_options.pix.setup_future_usage` and `PaymentIntent.payment_method_options.pix.setup_future_usage` from `literal('none')` to `enum('none'|'off_session')`
* Add support for new value `sunbit` on enums `ConfirmationTokenCreateParams.testHelpers.payment_method_data.type`, `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
* ⚠️ Add support for new value `sunbit` on enums `ConfirmationToken.payment_method_preview.type` and `PaymentMethod.type`
* Add support for new values `fo_vat`, `gi_tin`, `it_cf`, and `py_ruc` on enums `CustomerCreateParams.tax_id_data[].type`, `CustomerCreateTaxIdParams.type`, `InvoiceCreatePreviewParams.customer_details.tax_ids[].type`, `Tax.CalculationCreateParams.customer_details.tax_ids[].type`, and `TaxIdCreateParams.type`
* Add support for new value `sunbit` on enums `CustomerListPaymentMethodsParams.type`, `PaymentMethodCreateParams.type`, and `PaymentMethodListParams.type`
* Add support for `pix` on `Invoice.payment_settings.payment_method_options`, `InvoiceCreateParams.payment_settings.payment_method_options`, `InvoiceUpdateParams.payment_settings.payment_method_options`, `Mandate.payment_method_details`, `SetupAttempt.payment_method_details`, `SetupIntent.payment_method_options`, `SetupIntentConfirmParams.payment_method_options`, `SetupIntentCreateParams.payment_method_options`, `SetupIntentUpdateParams.payment_method_options`, `Subscription.payment_settings.payment_method_options`, `SubscriptionCreateParams.payment_settings.payment_method_options`, and `SubscriptionUpdateParams.payment_settings.payment_method_options`
* Add support for `upi` on `Invoice.payment_settings.payment_method_options`, `InvoiceCreateParams.payment_settings.payment_method_options`, `InvoiceUpdateParams.payment_settings.payment_method_options`, `Subscription.payment_settings.payment_method_options`, `SubscriptionCreateParams.payment_settings.payment_method_options`, and `SubscriptionUpdateParams.payment_settings.payment_method_options`
* Add support for new values `pix` and `upi` on enums `InvoiceCreateParams.payment_settings.payment_method_types`, `InvoiceUpdateParams.payment_settings.payment_method_types`, `SubscriptionCreateParams.payment_settings.payment_method_types`, and `SubscriptionUpdateParams.payment_settings.payment_method_types`
* ⚠️ Add support for new values `pix` and `upi` on enums `Invoice.payment_settings.payment_method_types` and `Subscription.payment_settings.payment_method_types`
* Add support for `card_presence` on `Issuing.Authorization`
* Add support for `allowed_card_presences` and `blocked_card_presences` on `Issuing.Card.spending_controls`, `Issuing.CardCreateParams.spending_controls`, `Issuing.CardUpdateParams.spending_controls`, `Issuing.Cardholder.spending_controls`, `Issuing.CardholderCreateParams.spending_controls`, and `Issuing.CardholderUpdateParams.spending_controls`
* ⚠️ Add support for new value `fulfillment_error` on enum `Issuing.Card.cancellation_reason`
* ⚠️ Add support for new value `fulfillment_error` on enum `Issuing.Card.replacement_reason`
* Add support for `amount` and `currency` on `Mandate.multi_use`
* Add support for `amount_to_confirm` on `PaymentIntentConfirmParams`
* ⚠️ Add support for new value `sunbit` on enums `PaymentIntent.excluded_payment_method_types` and `SetupIntent.excluded_payment_method_types`
* Add support for `klarna_display_qr_code` on `PaymentIntent.next_action`
* Add support for new value `sunbit` on enums `PaymentLinkCreateParams.payment_method_types` and `PaymentLinkUpdateParams.payment_method_types`
* ⚠️ Add support for new value `sunbit` on enum `PaymentLink.payment_method_types`
* ⚠️ Add support for new values `low`, `not_assessed`, and `unknown` on enum `Radar.PaymentEvaluation.signals.fraudulent_payment.risk_level`
* Add support for new value `account` on enum `Radar.ValueListCreateParams.item_type`
* ⚠️ Add support for new value `account` on enum `Radar.ValueList.item_type`
* Add support for `moto` on `SetupAttempt.payment_method_details.card`
* Add support for `pix_display_qr_code` on `SetupIntent.next_action`
* Add support for new value `2026-04-22.dahlia` on enum `WebhookEndpointCreateParams.api_version`
* Add support for error codes `action_blocked` and `approval_required` on `Invoice.last_finalization_error`, `PaymentIntent.last_payment_error`, `SetupAttempt.setup_error`, `SetupIntent.last_setup_error`, and `StripeError`
