---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2917
semver_level: major
is_stripe_api_change: true
---

* Add support for new resources `Tax.Certificate`, `Tax.FormCorrection`, `V2.Extend.ObjectDefinitionVersion`, and `V2.Extend.ObjectDefinition`
* Add support for `create`, `del`, `list`, and `retrieve` methods on resource `Tax.Certificate`
* Add support for `create` method on resource `Tax.Form`
* Add support for `list` and `retrieve` methods on resources `V2.Extend.ObjectDefinitionVersion` and `V2.Extend.ObjectDefinition`
* Add support for `bills`, `financial_account_rewards`, `financial_accounts_transactions`, `financial_accounts`, `network_cost_passthrough_report`, and `recipients_list` on `AccountSessionCreateParams.components`
* Add support for `business_profile_management` on `AccountSessionCreateParams.components`, `V2.Core.AccountSession.components`, and `V2.Core.AccountSessionCreateParams.components`
* Add support for `export_tax_transactions`, `product_tax_code_selector`, and `tax_threshold_monitoring` on `AccountSession.components`
* Add support for `aeon_pay`, `au_pay`, `dbarai`, and `merpay` on `Charge.payment_method_details`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `PaymentAttemptRecord.payment_method_details`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentMethodCreateParams`, `PaymentMethod`, `PaymentRecord.payment_method_details`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
* Add support for `funding_sources` on `Charge.payment_method_details.card.wallet.link` and `Charge.payment_method_details.link`
* Add support for `fleet` on `Charge.payment_method_details.card_present`, `ConfirmationToken.payment_method_preview.card.generated_from.payment_method_details.card_present`, `PaymentAttemptRecord.payment_method_details.card_present`, `PaymentMethod.card.generated_from.payment_method_details.card_present`, and `PaymentRecord.payment_method_details.card_present`
* Add support for `fingerprint` on `Charge.payment_method_details.paypay`, `PaymentAttemptRecord.payment_method_details.paypay`, `PaymentRecord.payment_method_details.paypay`, and `SetupAttempt.payment_method_details.paypay`
* Add support for `custom_payment_method_options` on `Checkout.SessionCreateParams`
* Add support for new value `tamara` on enum `Checkout.SessionCreateParams.allowed_payment_method_types`
* Add support for new value `tamara` on enum `Checkout.SessionCreateParams.excluded_payment_method_types`
* Add support for `stripe_balance` on `Checkout.Session.payment_method_options` and `Checkout.SessionCreateParams.payment_method_options`
* Add support for new value `buyer_choice` on enums `Checkout.Session.payment_method_options.acss_debit.mandate_options.transaction_type` and `Checkout.SessionCreateParams.payment_method_options.acss_debit.mandate_options.transaction_type`
* Add support for new value `instant` on enums `Checkout.Session.payment_method_options.bacs_debit.verification_method`, `Checkout.SessionCreateParams.payment_method_options.bacs_debit.verification_method`, `Invoice.payment_settings.payment_method_options.bacs_debit.verification_method`, `InvoiceCreateParams.payment_settings.payment_method_options.bacs_debit.verification_method`, `InvoiceUpdateParams.payment_settings.payment_method_options.bacs_debit.verification_method`, `PaymentIntent.payment_method_options.bacs_debit.verification_method`, `PaymentIntentConfirmParams.payment_method_options.bacs_debit.verification_method`, `PaymentIntentCreateParams.payment_method_options.bacs_debit.verification_method`, `PaymentIntentUpdateParams.payment_method_options.bacs_debit.verification_method`, `QuotePreviewInvoice.payment_settings.payment_method_options.bacs_debit.verification_method`, `SetupIntent.payment_method_options.bacs_debit.verification_method`, `SetupIntentConfirmParams.payment_method_options.bacs_debit.verification_method`, `SetupIntentCreateParams.payment_method_options.bacs_debit.verification_method`, `SetupIntentUpdateParams.payment_method_options.bacs_debit.verification_method`, `Subscription.payment_settings.payment_method_options.bacs_debit.verification_method`, `SubscriptionCreateParams.payment_settings.payment_method_options.bacs_debit.verification_method`, and `SubscriptionUpdateParams.payment_settings.payment_method_options.bacs_debit.verification_method`
* Add support for `setup_future_usage` on `Checkout.Session.payment_method_options.paypay` and `Checkout.SessionCreateParams.payment_method_options.paypay`
* Add support for new values `aeon_pay`, `au_pay`, `dbarai`, and `merpay` on enums `ConfirmationTokenCreateParams.testHelpers.payment_method_data.type`, `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
* Add support for new values `aeon_pay`, `au_pay`, `dbarai`, and `merpay` on enums `ConfirmationToken.payment_method_preview.type` and `PaymentMethod.type`
* Add support for new values `aeon_pay`, `au_pay`, `dbarai`, and `merpay` on enums `CustomerListPaymentMethodsParams.type`, `PaymentMethodCreateParams.type`, and `PaymentMethodListParams.type`
* Add support for `reason_details` and `reason` on `CustomerCreateCustomerTaxExemptionParams` and `CustomerTaxExemption`
* Add support for `tax_code_group` on `CustomerCreateCustomerTaxExemptionParams.us` and `CustomerTaxExemption.us`
* Change `Dispute.evidence.appeal` to be required
* Add support for `target_date` on `Invoice.payment_settings.payment_method_options.sepa_debit`, `InvoiceCreateParams.payment_settings.payment_method_options.sepa_debit`, and `InvoiceUpdateParams.payment_settings.payment_method_options.sepa_debit`
* Change `Issuing.Card.shipping.delivered_at` to be required
* Change `Issuing.Card.shipping.shipped_at` to be required
* Add support for `payment_method_details` on `PaymentAttemptRecordReportAuthenticatedParams`
* Change type of `PaymentAttemptRecordReportGuaranteedParams.payment_method_details.type` and `PaymentRecordReportPaymentAttemptGuaranteedParams.payment_method_details.type` from `literal('card')` to `enum('card'|'us_bank_account')`
* Add support for `dispute_details` on `PaymentAttemptRecord` and `PaymentRecord`
* Add support for new values `aeon_pay`, `au_pay`, `dbarai`, and `merpay` on enums `PaymentIntent.allowed_payment_method_types`, `PaymentIntentConfirmParams.allowed_payment_method_types`, `PaymentIntentCreateParams.allowed_payment_method_types`, `PaymentIntentUpdateParams.allowed_payment_method_types`, `SetupIntent.allowed_payment_method_types`, `SetupIntentConfirmParams.allowed_payment_method_types`, `SetupIntentCreateParams.allowed_payment_method_types`, and `SetupIntentUpdateParams.allowed_payment_method_types`
* Add support for `ev_charging` and `fleet_data` on `PaymentIntentAmountDetailsLineItem.payment_method_options.card_present`, `PaymentIntentCaptureParams.amount_details.line_items[].payment_method_options.card_present`, `PaymentIntentConfirmParams.amount_details.line_items[].payment_method_options.card_present`, `PaymentIntentCreateParams.amount_details.line_items[].payment_method_options.card_present`, `PaymentIntentDecrementAuthorizationParams.amount_details.line_items[].payment_method_options.card_present`, `PaymentIntentIncrementAuthorizationParams.amount_details.line_items[].payment_method_options.card_present`, and `PaymentIntentUpdateParams.amount_details.line_items[].payment_method_options.card_present`
* Add support for new values `aeon_pay`, `au_pay`, `dbarai`, and `merpay` on enums `PaymentIntent.excluded_payment_method_types`, `PaymentIntentConfirmParams.excluded_payment_method_types`, `PaymentIntentCreateParams.excluded_payment_method_types`, `PaymentIntentUpdateParams.excluded_payment_method_types`, `SetupIntent.excluded_payment_method_types`, `SetupIntentCreateParams.excluded_payment_method_types`, and `SetupIntentUpdateParams.excluded_payment_method_types`
* Add support for `financial_connections` on `PaymentIntent.payment_method_options.bacs_debit`, `PaymentIntentConfirmParams.payment_method_options.bacs_debit`, `PaymentIntentCreateParams.payment_method_options.bacs_debit`, and `PaymentIntentUpdateParams.payment_method_options.bacs_debit`
* ⚠️ Remove support for value `on_session` from enums `PaymentIntent.payment_method_options.paypay.setup_future_usage`, `PaymentIntentConfirmParams.payment_method_options.paypay.setup_future_usage`, `PaymentIntentCreateParams.payment_method_options.paypay.setup_future_usage`, and `PaymentIntentUpdateParams.payment_method_options.paypay.setup_future_usage`
* Add support for `payment_details` on `PaymentIntent.payment_method_options.card_present` and `PaymentIntent.payment_method_options.card`
* Add support for new value `tamara` on enums `PaymentLink.payment_method_types`, `PaymentLinkCreateParams.payment_method_types`, and `PaymentLinkUpdateParams.payment_method_types`
* Add support for `rakuten_pay` on `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, and `PaymentMethodConfiguration`
* Add support for `sepa_debit` on `Radar.PaymentEvaluation.payment_details.money_movement_details` and `Radar.PaymentEvaluationCreateParams.payment_details.money_movement_details`
* Add support for new value `sepa_debit` on enums `Radar.PaymentEvaluation.payment_details.money_movement_details.money_movement_type` and `Radar.PaymentEvaluationCreateParams.payment_details.money_movement_details.money_movement_type`
* Add support for new value `continue_with_manual_review` on enum `Radar.PaymentEvaluation.recommended_action`
* Add support for `card_testing` on `Radar.PaymentEvaluation.signals`
* Add support for `payment_method` on `RefundCreateParams`
* Add support for new values `aeon_pay`, `au_pay`, `dbarai`, and `merpay` on enum `RefundCreateParams.payment_method_data.type`
* Add support for `payment_record` on `Refund`
* Add support for `bizum` and `upi` on `Refund.destination_details`
* Add support for `tax_invoice_month` on `Reporting.ReportRun.parameters`
* Add support for `radar_options` on `SetupIntentConfirmParams`, `SetupIntentCreateParams`, and `SetupIntent`
* Add support for `billing_group` on `SubscriptionCreateParams`, `SubscriptionListParams`, `SubscriptionUpdateParams`, and `Subscription`
* Add support for `network_details` on `Treasury.InboundTransfer.failure_details`, `Treasury.OutboundPayment.returned_details`, and `Treasury.OutboundTransfer.returned_details`
* Add support for event notification `V2ExtendObjectDefinitionCreatedEvent` with related object `V2.Extend.ObjectDefinition`
* Add support for event notification `V2ExtendObjectDefinitionVersionCreatedEvent` with related object `V2.Extend.ObjectDefinitionVersion`
