---
title: Update generated code for private-preview
pr_url: https://github.com/stripe/stripe-node/pull/2825
is_breaking: true
is_stripe_api_change: true
released_in_version: 22.7.0-alpha.2
---

* Add support for new resources `Radar.BillingEvaluation`, `V2.Signals.PaymentRetryEvaluation`, `V2.Signals.PaymentRetrySignal`, and `V2.Tax.IntegrationConfiguration`
* Add support for `create` method on resource `Radar.BillingEvaluation`
* Add support for `create`, `deactivate`, `list`, `retrieve`, and `update` methods on resource `Billing.FeedbackOption`
* Add support for `retrieve` and `update` methods on resource `V2.Tax.IntegrationConfiguration`
* Add support for `retrieve` method on resource `V2.Signals.PaymentRetrySignal`
* Add support for `cancel`, `create`, `retrieve`, and `update` methods on resource `V2.Signals.PaymentRetryEvaluation`
* Add support for `disable` method on resource `V2.MoneyManagement.PayoutMethod`
* Add support for `update` method on resource `V2.Core.ApprovalRequest`
* ⚠️ Remove support for `execute` and `submit` methods on resource `V2.Core.ApprovalRequest`
* Add support for `sequra_payments` on `Account.capabilities`
* Add support for `disable_stripe_user_authentication` on `AccountSessionCreateParams.components.payment_method_settings.features`
* Add support for `capital_financing_manual_payment` on `AccountSession.components`
* Add support for `feedback_options` on `BillingPortal.ConfigurationCreateParams.features.subscription_cancel.cancellation_reason` and `BillingPortal.ConfigurationUpdateParams.features.subscription_cancel.cancellation_reason`
* Add support for new value `fundbox_ca_financing` on enum `Capital.FinancingSummary.details.disclaimer_variant`
* Add support for `sequra` on `Charge.payment_method_details`, `Checkout.Session.payment_method_options`, `ConfirmationToken.payment_method_preview`, `PaymentAttemptRecord.payment_method_details`, `PaymentIntent.payment_method_options`, and `PaymentRecord.payment_method_details`
* ⚠️ Remove support for value `data_share_only` from enums `Charge.payment_method_details.card.three_d_secure.result`, `PaymentAttemptRecord.payment_method_details.card.three_d_secure.result`, `PaymentRecord.payment_method_details.card.three_d_secure.result`, and `SetupAttempt.payment_method_details.card.three_d_secure.result`
* Add support for `funding_types_blocked` on `Checkout.SessionCreateParams.payment_method_options.card.restrictions`
* Add support for `payment_intent_data` on `Checkout.SessionUpdateParams`
* ⚠️ Change type of `Checkout.Session.payment_method_options.bancontact.setup_future_usage` from `literal('none')` to `enum('none'|'off_session')`
* Add support for new value `sequra` on enums `ConfirmationTokenCreateParams.testHelpers.payment_method_data.type`, `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
* Add support for `metadata` on `ConfirmationToken`, `V2.Signals.AccountActivityCreateParams`, and `V2.Signals.AccountActivity`
* Add support for new value `sequra` on enums `ConfirmationToken.payment_method_preview.type` and `PaymentMethod.type`
* Add support for `active_entitlements` and `customer_portal` on `CustomerSessionCreateParams.components`
* Add support for new value `sequra` on enums `CustomerListPaymentMethodsParams.type`, `PaymentMethodCreateParams.type`, and `PaymentMethodListParams.type`
* Add support for `address_match_confidence` and `name_match_confidence` on `Identity.VerificationReport.email` and `Identity.VerificationReport.phone`
* Add support for `domain_country`, `email_exists_confidence`, `observed_domain_tenure_days`, `observed_email_tenure_days`, and `phone_match_confidence` on `Identity.VerificationReport.email`
* Add support for new values `email_address_mismatch`, `email_name_mismatch`, `email_ownership_unverified`, `email_phone_mismatch`, and `email_short_tenure` on enum `Identity.VerificationReport.email.error.code`
* Add support for `carrier`, `line_type`, and `observed_phone_tenure_days` on `Identity.VerificationReport.phone`
* Add support for new values `phone_address_mismatch`, `phone_invalid_line_type`, `phone_invalid`, `phone_name_mismatch`, `phone_ownership_unverified`, `phone_short_tenure`, and `phone_unsupported_country` on enum `Identity.VerificationReport.phone.error.code`
* Add support for new values `email_address_mismatch`, `email_name_mismatch`, `email_ownership_unverified`, `email_phone_mismatch`, `email_short_tenure`, `phone_address_mismatch`, `phone_invalid_line_type`, `phone_invalid`, `phone_name_mismatch`, `phone_ownership_unverified`, `phone_short_tenure`, and `phone_unsupported_country` on enum `Identity.VerificationSession.last_error.code`
* Add support for new value `truemoney` on enums `Invoice.payment_settings.payment_method_types`, `InvoiceCreateParams.payment_settings.payment_method_types`, `InvoiceUpdateParams.payment_settings.payment_method_types`, `QuotePreviewInvoice.payment_settings.payment_method_types`, `Subscription.payment_settings.payment_method_types`, `SubscriptionCreateParams.payment_settings.payment_method_types`, and `SubscriptionUpdateParams.payment_settings.payment_method_types`
* Add support for new value `merchant_canceled` on enums `PaymentAttemptRecordReportCanceledParams.reason` and `PaymentRecordReportPaymentAttemptCanceledParams.reason`
* ⚠️ Remove support for `payment_method_types` on `PaymentIntentConfirmParams`, `PaymentIntentCreateParams`, `PaymentIntentUpdateParams`, `SetupIntentCreateParams`, and `SetupIntentUpdateParams`
* Add support for new value `touch_n_go` on enums `PaymentIntent.allowed_payment_method_types`, `PaymentIntentConfirmParams.allowed_payment_method_types`, `PaymentIntentCreateParams.allowed_payment_method_types`, `PaymentIntentUpdateParams.allowed_payment_method_types`, `SetupIntent.allowed_payment_method_types`, `SetupIntentConfirmParams.allowed_payment_method_types`, `SetupIntentCreateParams.allowed_payment_method_types`, and `SetupIntentUpdateParams.allowed_payment_method_types`
* Add support for new value `sequra` on enums `PaymentIntent.excluded_payment_method_types`, `PaymentIntentConfirmParams.excluded_payment_method_types`, `PaymentIntentCreateParams.excluded_payment_method_types`, `PaymentIntentUpdateParams.excluded_payment_method_types`, `SetupIntent.excluded_payment_method_types`, `SetupIntentCreateParams.excluded_payment_method_types`, and `SetupIntentUpdateParams.excluded_payment_method_types`
* Add support for `verification_method` on `PaymentIntent.payment_method_options.bacs_debit`, `PaymentIntentConfirmParams.payment_method_options.bacs_debit`, `PaymentIntentCreateParams.payment_method_options.bacs_debit`, `PaymentIntentUpdateParams.payment_method_options.bacs_debit`, `SetupIntent.payment_method_options.bacs_debit`, `SetupIntentConfirmParams.payment_method_options.bacs_debit`, `SetupIntentCreateParams.payment_method_options.bacs_debit`, and `SetupIntentUpdateParams.payment_method_options.bacs_debit`
* Change `PaymentIntent.allowed_payment_method_types` and `SetupIntent.allowed_payment_method_types` to be required
* Add support for `application_fee_amount`, `application_fee_percent`, `on_behalf_of`, and `transfer_data` on `PaymentLinkUpdateParams`
* Add support for `canceled` on `PaymentRecordReportPaymentAttemptParams` and `PaymentRecordReportPaymentParams`
* ⚠️ Change type of `ProductCatalog.TrialOffer.price` from `Price` to `deletable($Price)`
* ⚠️ Change `ProductCatalog.TrialOffer.name` to be optional
* Add support for `recurring` on `SharedPayment.GrantedToken.usage_limits`, `SharedPayment.GrantedTokenCreateParams.testHelpers.usage_limits`, `SharedPayment.IssuedToken.usage_limits`, and `SharedPayment.IssuedTokenCreateParams.usage_limits`
* Add support for `feedback_option` on `SubscriptionCancelParams.cancellation_details` and `SubscriptionUpdateParams.cancellation_details`
* Add support for `pricing_token` on `SubscriptionUpdateParams`
* Add support for `igic` on `Tax.RegistrationCreateParams.country_options.at`, `Tax.RegistrationCreateParams.country_options.be`, `Tax.RegistrationCreateParams.country_options.bg`, `Tax.RegistrationCreateParams.country_options.cy`, `Tax.RegistrationCreateParams.country_options.cz`, `Tax.RegistrationCreateParams.country_options.de`, `Tax.RegistrationCreateParams.country_options.dk`, `Tax.RegistrationCreateParams.country_options.ee`, `Tax.RegistrationCreateParams.country_options.es`, `Tax.RegistrationCreateParams.country_options.fi`, `Tax.RegistrationCreateParams.country_options.fr`, `Tax.RegistrationCreateParams.country_options.gr`, `Tax.RegistrationCreateParams.country_options.hr`, `Tax.RegistrationCreateParams.country_options.hu`, `Tax.RegistrationCreateParams.country_options.ie`, `Tax.RegistrationCreateParams.country_options.it`, `Tax.RegistrationCreateParams.country_options.lt`, `Tax.RegistrationCreateParams.country_options.lu`, `Tax.RegistrationCreateParams.country_options.lv`, `Tax.RegistrationCreateParams.country_options.mt`, `Tax.RegistrationCreateParams.country_options.nl`, `Tax.RegistrationCreateParams.country_options.pl`, `Tax.RegistrationCreateParams.country_options.pt`, `Tax.RegistrationCreateParams.country_options.ro`, `Tax.RegistrationCreateParams.country_options.se`, `Tax.RegistrationCreateParams.country_options.si`, and `Tax.RegistrationCreateParams.country_options.sk`
* Add support for new value `2026-08-26.dahlia` on enum `WebhookEndpointCreateParams.api_version`
* Add support for `one_time_fees` on `V2.Billing.ContractCreateParams` and `V2.Billing.Contract`
* ⚠️ Remove support for `payment_method_collection` on `V2.Core.Account.configuration.merchant.gross_settlement`, `V2.Core.AccountCreateParams.configuration.merchant.gross_settlement`, and `V2.Core.AccountUpdateParams.configuration.merchant.gross_settlement`
* Add support for `payout_methods` on `V2.Core.Account.defaults` and `V2.Core.AccountUpdateParams.defaults`
* Add support for `reason` on `V2.Core.ApprovalRequest`
* ⚠️ Remove support for `description` on `V2.Core.ApprovalRequest`
* Add support for `api_key`, `type`, and `user` on `V2.Core.ApprovalRequest.requested_by` and `V2.Core.ApprovalRequest.review.reviewed_by`
* ⚠️ Remove support for `id` and `name` on `V2.Core.ApprovalRequest.requested_by` and `V2.Core.ApprovalRequest.review.reviewed_by`
* Add support for `approved_at` on `V2.Core.ApprovalRequest.status_transitions`
* ⚠️ Remove support for `requires_execution_at` on `V2.Core.ApprovalRequest.status_transitions`
* Add support for `crypto_transaction` on `V2.Core.FeeBatch.collection_records[]`
* Add support for new value `crypto_transaction` on enum `V2.Core.FeeBatch.collection_records[].type`
* Add support for `restricted` on `V2.Core.Vault.GbBankAccount` and `V2.Core.Vault.UsBankAccount`
* Add support for `savings` on `V2.MoneyManagement.FinancialAccountCreateParams` and `V2.MoneyManagement.FinancialAccount`
* ⚠️ Add support for new value `savings` on enum `V2.MoneyManagement.FinancialAccount.type`
* Add support for `enabled_delivery_schemes` on `V2.MoneyManagement.PayoutMethod.bank_account`
* ⚠️ Remove support for `enabled_delivery_options` on `V2.MoneyManagement.PayoutMethod.bank_account`
* ⚠️ Add support for new value `disabled` on enum `V2.MoneyManagement.PayoutMethod.usage_status.payments`
* ⚠️ Add support for new value `disabled` on enum `V2.MoneyManagement.PayoutMethod.usage_status.transfers`
* Add support for `to_account` on `V2.MoneyManagement.ReceivedDebit.balance_transfer`
* Add support for `account_restricted` and `account_suspended` on `V2.Signals.AccountActivityCreateParams` and `V2.Signals.AccountActivity`
* Add support for new values `account_restricted` and `account_suspended` on enums `V2.Signals.AccountActivity.type`, `V2.Signals.AccountActivityCreateParams.type`, and `V2.Signals.AccountEvaluationCreateParams.account_activity_details.data.type`
* ⚠️ Remove support for value `not_assessed` from enums `V2.Signals.AccountEvaluation.evaluated_signals.fraudulent_website.risk_level`, `V2.Signals.AccountEvaluation.evaluated_signals.user_account_sharing.risk_level`, `V2.Signals.AccountEvaluation.evaluated_signals.user_multi_accounting.risk_level`, `V2.Signals.AccountSignal.fraudulent_merchant.risk_level`, `V2.Signals.AccountSignal.fraudulent_website.risk_level`, `V2.Signals.AccountSignal.merchant_delinquency.risk_level`, `V2.Signals.AccountSignal.user_account_sharing.risk_level`, and `V2.Signals.AccountSignal.user_multi_accounting.risk_level`
* Add support for `additional_details` on `V2.Signals.AccountSignal.fraudulent_merchant` and `V2.Signals.AccountSignal.merchant_delinquency`
* ⚠️ Remove support for `indicators` on `V2.Signals.AccountSignal.fraudulent_merchant` and `V2.Signals.AccountSignal.merchant_delinquency`
* Add support for new value `disabled` on enum `V2.MoneyManagement.PayoutMethodListParams.usage_status.payments`
* Add support for new value `disabled` on enum `V2.MoneyManagement.PayoutMethodListParams.usage_status.transfers`
* Add support for new value `savings` on enum `V2.MoneyManagement.FinancialAccountListParams.types`
* Add support for new value `savings` on enum `V2.MoneyManagement.FinancialAccountCreateParams.type`
* Add support for `action`, `created`, and `status` on `V2.Core.ApprovalRequestListParams`
* Add support for `one_time_fee_actions` on `V2.Billing.ContractUpdateParams`
* Add support for event notifications `V2CoreHealthMetronomeNotificationLatencyFiringEvent`, `V2CoreHealthMetronomeNotificationLatencyResolvedEvent`, and `V2SignalsPaymentRetryEvaluationsRetryRecommendedEvent`
* Add support for event notifications `V2MoneyManagementPayoutIntentCanceledEvent`, `V2MoneyManagementPayoutIntentCreatedEvent`, `V2MoneyManagementPayoutIntentPostedEvent`, `V2MoneyManagementPayoutIntentProcessingEvent`, and `V2MoneyManagementPayoutIntentRequiresActionEvent` with related object `V2.MoneyManagement.PayoutIntent`
* Add support for error codes `authentication_failure`, `capability_not_active`, `expired_payment_method`, `incorrect_postal_code`, `invalid_canceled_subscription_fields`, and `payment_method_restricted` on `Invoice.last_finalization_error`, `PaymentIntent.last_payment_error`, `QuotePreviewInvoice.last_finalization_error`, `SetupAttempt.setup_error`, `SetupIntent.last_setup_error`, `StripeError`, and `Terminal.Reader.action.api_error`
* Add support for error code `contract_number_already_exists` on `AlreadyExistsError`
* Add support for error codes `default_payout_method_cannot_be_disabled`, `evaluation_not_monitoring`, `missing_payment_data_for_evaluation`, `one_time_fee_already_billed`, `payment_not_eligible`, and `webhook_endpoint_not_configured` on `CannotProceedError`
