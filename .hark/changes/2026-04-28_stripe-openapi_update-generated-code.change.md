---
title: Update generated code for private-preview
pr_link: https://github.com/stripe/stripe-node/pull/2695
is_breaking: true
is_stripe_api_change: true
released_in_version: 22.2.0-alpha.2
---

* Add support for new resource `V2.Data.Analytics.MetricQueryResult`
* Add support for `create`, `retrieve`, and `revoke` methods on resource `SharedPayment.IssuedToken`
* Add support for `create` method on resource `V2.Data.Analytics.MetricQueryResult`
* Add support for `app_distribution` and `sunbit_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
* Add support for `balance_report` and `payout_reconciliation_report` on `AccountSession.components` and `AccountSessionCreateParams.components`
* ⚠️ Add support for new values `fee_credit_funding`, `inbound_transfer_reversal`, and `inbound_transfer` on enum `BalanceTransaction.type`
* Add support for `sunbit` on `Charge.payment_method_details`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `PaymentAttemptRecord.payment_method_details`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, `PaymentMethodConfiguration`, `PaymentMethodCreateParams`, `PaymentMethod`, `PaymentRecord.payment_method_details`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
* ⚠️ Add support for new values `phantom_cash` and `usdt` on enums `Charge.payment_method_details.crypto.token_currency`, `PaymentAttemptRecord.payment_method_details.crypto.token_currency`, and `PaymentRecord.payment_method_details.crypto.token_currency`
* Add support for `last4` on `Charge.payment_method_details.gift_card`, `PaymentAttemptRecord.payment_method_details.gift_card`, and `PaymentRecord.payment_method_details.gift_card`
* Add support for `location` and `reader` on `Charge.payment_method_details.klarna`, `PaymentAttemptRecord.payment_method_details.klarna`, and `PaymentRecord.payment_method_details.klarna`
* Add support for new value `sunbit` on enum `Checkout.SessionCreateParams.excluded_payment_method_types`
* Add support for `blik` on `Checkout.SessionCreateParams.payment_method_options`, `Invoice.payment_settings.payment_method_options`, `InvoiceCreateParams.payment_settings.payment_method_options`, `InvoiceUpdateParams.payment_settings.payment_method_options`, `QuotePreviewInvoice.payment_settings.payment_method_options`, `Subscription.payment_settings.payment_method_options`, `SubscriptionCreateParams.payment_settings.payment_method_options`, and `SubscriptionUpdateParams.payment_settings.payment_method_options`
* Add support for new value `sunbit` on enum `Checkout.SessionCreateParams.payment_method_types`
* ⚠️ Add support for new values `fo_vat`, `gi_tin`, `it_cf`, and `py_ruc` on enums `Checkout.Session.collected_information.tax_ids[].type`, `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, `Order.tax_details.tax_ids[].type`, `QuotePreviewInvoice.customer_tax_ids[].type`, `Tax.Calculation.customer_details.tax_ids[].type`, `Tax.Transaction.customer_details.tax_ids[].type`, and `TaxId.type`
* Change `Checkout.Session.managed_payments`, `PaymentIntent.managed_payments`, `PaymentLink.managed_payments`, and `Subscription.managed_payments` to be required
* Add support for `shared_payment_granted_token` on `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentMethod`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
* Add support for new value `sunbit` on enums `ConfirmationTokenCreateParams.testHelpers.payment_method_data.type`, `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
* ⚠️ Add support for new value `sunbit` on enums `ConfirmationToken.payment_method_preview.type` and `PaymentMethod.type`
* ⚠️ Change type of `CreditNote.total_taxes[].tax_rate_details.tax_rate`, `CreditNoteLineItem.taxes[].tax_rate_details.tax_rate`, `Invoice.total_taxes[].tax_rate_details.tax_rate`, `InvoiceLineItem.taxes[].tax_rate_details.tax_rate`, and `QuotePreviewInvoice.total_taxes[].tax_rate_details.tax_rate` from `string` to `expandable(TaxRate)`
* Add support for new values `fo_vat`, `gi_tin`, `it_cf`, and `py_ruc` on enums `CustomerCreateParams.tax_id_data[].type`, `CustomerCreateTaxIdParams.type`, `InvoiceCreatePreviewParams.customer_details.tax_ids[].type`, `OrderCreateParams.tax_details.tax_ids[].type`, `OrderUpdateParams.tax_details.tax_ids[].type`, `Tax.CalculationCreateParams.customer_details.tax_ids[].type`, and `TaxIdCreateParams.type`
* Add support for new value `sunbit` on enums `CustomerListPaymentMethodsParams.type`, `PaymentMethodCreateParams.type`, and `PaymentMethodListParams.type`
* Add support for `buyer_consents` on `DelegatedCheckout.RequestedSessionConfirmParams`
* Add support for `consents` on `DelegatedCheckout.RequestedSession.buyer_consents.marketing`
* Add support for new value `blik` on enums `InvoiceCreateParams.payment_settings.payment_method_types`, `InvoiceUpdateParams.payment_settings.payment_method_types`, `SubscriptionCreateParams.payment_settings.payment_method_types`, and `SubscriptionUpdateParams.payment_settings.payment_method_types`
* ⚠️ Add support for new value `blik` on enums `Invoice.payment_settings.payment_method_types`, `QuotePreviewInvoice.payment_settings.payment_method_types`, and `Subscription.payment_settings.payment_method_types`
* Change `Invoice.payment_settings.payment_method_options.pix`, `QuotePreviewInvoice.payment_settings.payment_method_options.pix`, and `Subscription.payment_settings.payment_method_options.pix` to be required
* Change `Invoice.payment_settings.payment_method_options.upi`, `QuotePreviewInvoice.payment_settings.payment_method_options.upi`, and `Subscription.payment_settings.payment_method_options.upi` to be required
* Add support for `payment_facilitator_id` and `sub_merchant_id` on `Issuing.AuthorizationCreateParams.testHelpers.merchant_data`, `Issuing.TransactionCreateForceCaptureParams.testHelpers.merchant_data`, and `Issuing.TransactionCreateUnlinkedRefundParams.testHelpers.merchant_data`
* Add support for `card_presence` on `Issuing.Authorization`
* Add support for `allowed_card_presences` and `blocked_card_presences` on `Issuing.Card.spending_controls`, `Issuing.CardCreateParams.spending_controls`, `Issuing.CardUpdateParams.spending_controls`, `Issuing.Cardholder.spending_controls`, `Issuing.CardholderCreateParams.spending_controls`, and `Issuing.CardholderUpdateParams.spending_controls`
* ⚠️ Add support for new value `fulfillment_error` on enum `Issuing.Card.cancellation_reason`
* ⚠️ Add support for new value `fulfillment_error` on enum `Issuing.Card.replacement_reason`
* ⚠️ Change type of `PaymentAttemptRecord.payment_method_details.gift_card.balance` and `PaymentRecord.payment_method_details.gift_card.balance` from `PaymentFlowsPrivatePaymentMethodsGiftCardDeprecatedDetailsResourceBalanceAmount` to `PaymentsPrimitivesPaymentRecordsResourcePaymentMethodGiftCardDetailsResourceBalance | null`
* ⚠️ Change type of `PaymentAttemptRecord.payment_method_details.gift_card.brand` and `PaymentRecord.payment_method_details.gift_card.brand` from `enum('fiserv_valuelink'|'givex'|'svs')` to `enum('fiserv_valuelink'|'givex'|'svs') | null`
* ⚠️ Change type of `PaymentAttemptRecord.payment_method_details.gift_card.first6` and `PaymentRecord.payment_method_details.gift_card.first6` from `string` to `string | null`
* ⚠️ Change type of `PaymentAttemptRecord.payment_method_details.gift_card.transaction_id` and `PaymentRecord.payment_method_details.gift_card.transaction_id` from `string` to `string | null`
* Add support for new value `sunbit` on enums `PaymentIntentConfirmParams.excluded_payment_method_types`, `PaymentIntentCreateParams.excluded_payment_method_types`, `PaymentIntentUpdateParams.excluded_payment_method_types`, `SetupIntentCreateParams.excluded_payment_method_types`, and `SetupIntentUpdateParams.excluded_payment_method_types`
* Add support for `amount_to_confirm` on `PaymentIntentConfirmParams`
* ⚠️ Add support for new value `sunbit` on enums `PaymentIntent.excluded_payment_method_types` and `SetupIntent.excluded_payment_method_types`
* Add support for `klarna_display_qr_code` on `PaymentIntent.next_action`
* Add support for new value `sunbit` on enums `PaymentLinkCreateParams.payment_method_types` and `PaymentLinkUpdateParams.payment_method_types`
* ⚠️ Add support for new value `sunbit` on enum `PaymentLink.payment_method_types`
* Add support for `validation_errors` on `Privacy.RedactionJob`
* Add support for `tax_details` on `Product`
* ⚠️ Change type of `Radar.PaymentEvaluation.client_device_metadata_details.radar_session` from `string` to `string | null`
* ⚠️ Add support for new values `low`, `not_assessed`, and `unknown` on enum `Radar.PaymentEvaluation.signals.fraudulent_payment.risk_level`
* Add support for new value `account` on enum `Radar.ValueListCreateParams.item_type`
* ⚠️ Add support for new value `account` on enum `Radar.ValueList.item_type`
* Add support for `moto` on `SetupAttempt.payment_method_details.card`
* Change `SetupIntent.next_action.pix_display_qr_code.data` to be required
* Change `SetupIntent.next_action.pix_display_qr_code.expires_at` to be required
* Change `SetupIntent.next_action.pix_display_qr_code.hosted_instructions_url` to be required
* Change `SetupIntent.next_action.pix_display_qr_code.image_url_png` to be required
* Change `SetupIntent.next_action.pix_display_qr_code.image_url_svg` to be required
* Add support for `admissions_tax`, `attendance_tax`, `entertainment_tax`, `gross_receipts_tax`, `hospitality_tax`, `luxury_tax`, `resort_tax`, and `tourism_tax` on `Tax.RegistrationCreateParams.country_options.us`
* Add support for `purpose` on `Treasury.OutboundPaymentCreateParams` and `Treasury.OutboundPayment`
* Add support for new value `2026-04-22.dahlia` on enum `WebhookEndpointCreateParams.api_version`
* Add support for `crypto_wallet` on `V2.MoneyManagement.FinancialAddress.credentials`
* Add support for `mx_bank_account` on `V2.MoneyManagement.FinancialAddress.credentials` and `V2.MoneyManagement.ReceivedCredit.bank_transfer`
* ⚠️ Add support for new values `crypto_wallet` and `mx_bank_account` on enum `V2.MoneyManagement.FinancialAddress.credentials.type`
* Add support for `crypto_wallet_transfer` on `V2.MoneyManagement.ReceivedCredit`
* Add support for `eu_bank_account` on `V2.MoneyManagement.ReceivedCredit.bank_transfer`
* ⚠️ Add support for new values `crypto_wallet`, `eu_bank_account`, and `mx_bank_account` on enum `V2.MoneyManagement.ReceivedCredit.bank_transfer.origin_type`
* ⚠️ Add support for new value `crypto_wallet_transfer` on enum `V2.MoneyManagement.ReceivedCredit.type`
* Change `V2.Payments.OffSessionPaymentCaptureParams.metadata` and `V2.Payments.OffSessionPaymentCreateParams.metadata` to be optional
* Add support for `crypto_properties` and `settlement_currency` on `V2.MoneyManagement.FinancialAddressCreateParams`
* Add support for new values `crypto_wallet` and `mx_bank_account` on enum `V2.MoneyManagement.FinancialAddressCreateParams.type`
* Add support for event notifications `V2CoreApprovalRequestCreatedEvent` and `V2CoreApprovalRequestExpiredEvent` with related object `V2.Core.ApprovalRequest`
* Add support for event notification `V2ExtendExtensionRunFailedEvent`
* Add support for error codes `action_blocked` and `approval_required` on `Invoice.last_finalization_error`, `PaymentIntent.last_payment_error`, `QuotePreviewInvoice.last_finalization_error`, `SetupAttempt.setup_error`, `SetupIntent.last_setup_error`, and `StripeError`
