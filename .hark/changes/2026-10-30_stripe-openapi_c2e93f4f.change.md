---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2910
semver_level: major
is_stripe_api_change: true
released_in_version: 23.2.0-alpha.1
---

* Add support for new resources `V2.Billing.ContractTermQuantityChange`, `V2.Billing.ContractTerm`, `V2.Core.AccountSession`, `V2.MoneyManagement.FundingIntent`, `V2.MoneyManagement.InboundFunding`, `V2.MoneyManagement.RewardProgramEnrollment`, `V2.MoneyManagement.RewardProgramRule`, `V2.MoneyManagement.RewardProgram`, and `V2.Risk.Form`
* ⚠️ Remove support for resource `V2.Risk.Inquiry`
* Add support for `retrieve` and `update` methods on resource `V2.Risk.Form`
* Add support for `activate`, `create`, `deactivate`, `list`, and `retrieve` methods on resource `V2.MoneyManagement.RewardProgramEnrollment`
* Add support for `activate`, `create`, `deactivate`, `list`, `retrieve`, and `update` methods on resources `V2.MoneyManagement.RewardProgramRule` and `V2.MoneyManagement.RewardProgram`
* Add support for `list` and `retrieve` methods on resource `V2.MoneyManagement.InboundFunding`
* Add support for `cancel`, `confirm`, `create`, `list`, `retrieve`, and `update` methods on resource `V2.MoneyManagement.FundingIntent`
* Add support for `create` method on resource `V2.Core.AccountSession`
* Add support for `list_contract_terms` and `retrieve_contract_term` methods on resource `V2.Billing.ContractTerm`
* ⚠️ Remove support for `list`, `retrieve`, and `update` methods on resource `V2.Risk.Inquiry`
* ⚠️ Remove support for `fx_quote` method on resource `V2.MoneyManagement.PayoutIntent`
* Add support for `reject` and `unreject` methods on resource `V2.Core.Account`
* Add support for `billing_group` on `Billing.Alert.spend_threshold.filters`, `Billing.AlertCreateParams.spend_threshold.filters`, `Billing.AlertListAlertNotificationsParams`, `Billing.AlertNotification`, and `Billing.AlertTriggered.group_by`
* Add support for `toss_pay` on `Charge.payment_method_details`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `PaymentAttemptRecord.payment_method_details`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, `PaymentMethod`, `PaymentRecord.payment_method_details`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
* Add support for `mandate` on `Charge.payment_method_details.paypay`, `PaymentAttemptRecord.payment_method_details.paypay`, `PaymentRecord.payment_method_details.paypay`, `Subscription.payment_settings`, `SubscriptionCreateParams.payment_settings`, and `SubscriptionUpdateParams.payment_settings`
* Add support for `automatic_pass_through_fee` on `Checkout.SessionCreateParams` and `Checkout.Session`
* Add support for `paypay` on `Checkout.Session.payment_method_options` and `Checkout.SessionCreateParams.payment_method_options`
* Change `Checkout.SessionCreateParams.marketing_attributions[].ad_conversion` to be optional
* Add support for `adjustable_quantity` on `Checkout.Session.items[].subscription.items[]`
* ⚠️ Change `Checkout.Session.marketing_attributions[].ad_conversion` to be optional
* Add support for `marketing_attributions` on `CustomerCreateParams` and `Customer`
* Add support for `merchant_of_record` on `PaymentIntent.payment_details.money_services.account_funding`, `PaymentIntentConfirmParams.payment_details.money_services.account_funding`, `PaymentIntentCreateParams.payment_details.money_services.account_funding`, and `PaymentIntentUpdateParams.payment_details.money_services.account_funding`
* ⚠️ Change type of `Radar.PaymentEvaluation.signals.early_fraud_warning` from `Payment Evaluation Signal` to `Payment Evaluation Signal | null`
* Change `Radar.PaymentEvaluation.signals.early_fraud_warning` to be required
* Add support for `payment_method_data` and `payment_method_options` on `RefundCreateParams`
* Add support for new value `toss_pay` on enum `SetupIntentConfirmParams.allowed_payment_method_types`
* Add support for `debit_behavior` on `Subscription.payment_settings.payment_method_options.sepa_debit`, `SubscriptionCreateParams.payment_settings.payment_method_options.sepa_debit`, and `SubscriptionUpdateParams.payment_settings.payment_method_options.sepa_debit`
* Add support for `terms` on `V2.Billing.ContractCancelParams`, `V2.Billing.ContractCreateParams`, and `V2.Billing.Contract`
* ⚠️ Add support for new value `user_affinity` on enum `V2.Core.AccountEvaluation.evaluations_triggered`
* ⚠️ Remove support for value `user_merchant_fit` from enum `V2.Core.AccountEvaluation.evaluations_triggered`
* Add support for `rejection` on `V2.Core.Account`
* Add support for `alipay_payments`, `scalapay_payments`, and `upi_payments` on `V2.Core.Account.configuration.merchant.capabilities`, `V2.Core.AccountCreateParams.configuration.merchant.capabilities`, and `V2.Core.AccountUpdateParams.configuration.merchant.capabilities`
* Add support for `inbound_fundings` on `V2.Core.Account.configuration.money_manager.capabilities`, `V2.Core.AccountCreateParams.configuration.money_manager.capabilities`, and `V2.Core.AccountUpdateParams.configuration.money_manager.capabilities`
* ⚠️ Remove support for `instant` and `sepa_credit` on `V2.Core.Account.configuration.recipient.capabilities.bank_accounts`, `V2.Core.AccountCreateParams.configuration.recipient.capabilities.bank_accounts`, and `V2.Core.AccountUpdateParams.configuration.recipient.capabilities.bank_accounts`
* Add support for `compression` on `V2.Data.QueryRun.result_options`, `V2.Data.QueryRunCreateParams.result_options`, `V2.Data.ReportRun.result_options`, and `V2.Data.ReportRunCreateParams.result_options`
* ⚠️ Remove support for `compress_file` on `V2.Data.QueryRun.result_options`, `V2.Data.QueryRunCreateParams.result_options`, `V2.Data.ReportRun.result_options`, and `V2.Data.ReportRunCreateParams.result_options`
* Add support for `query_errors` on `V2.Data.QueryRun.status_details` and `V2.Data.ReportRun.status_details`
* Add support for new values `execution_failed` and `resource_limit_exceeded` on enums `V2.Data.QueryRun.status_details.code` and `V2.Data.ReportRun.status_details.code`
* Add support for `format` on `V2.Data.ReportRun`
* Add support for `refreshed_at` on `V2.Data.Report`
* Add support for `schema_name` on `V2.Data.Schema.columns[].foreign_keys_from[]` and `V2.Data.Schema.columns[].foreign_keys_to[]`
* ⚠️ Remove support for `authentication` and `session_fingerprint` on `V2.Iam.ActivityLog.details.user_access`
* Add support for `user_agent` on `V2.Iam.ActivityLog.details.user_access.dashboard_client`
* ⚠️ Remove support for `browser_version`, `browser`, `device_type`, and `os` on `V2.Iam.ActivityLog.details.user_access.dashboard_client`
* ⚠️ Remove support for `level` on `V2.Iam.ActivityLog.details.user_access.risk`
* Add support for `reference` on `V2.MoneyManagement.FinancialAddress.bank_account.iban`
* Add support for new value `sepa` on enums `V2.MoneyManagement.OutboundPayment.to.payout_method_options.bank_account.preferred_networks`, `V2.MoneyManagement.OutboundPaymentCreateParams.to.payout_method_options.bank_account.preferred_networks`, `V2.MoneyManagement.OutboundPaymentQuote.to.payout_method_options.bank_account.preferred_networks`, `V2.MoneyManagement.OutboundPaymentQuoteCreateParams.to.payout_method_options.bank_account.preferred_networks`, `V2.MoneyManagement.OutboundTransfer.to.payout_method_options.bank_account.preferred_networks`, `V2.MoneyManagement.OutboundTransferCreateParams.to.payout_method_options.bank_account.preferred_networks`, `V2.MoneyManagement.PayoutIntent.to.payout_method_options.bank_account.preferred_networks`, `V2.MoneyManagement.PayoutIntentCreateParams.to.payout_method_options.bank_account.preferred_networks`, and `V2.MoneyManagement.PayoutIntentUpdateParams.to.payout_method_options.bank_account.preferred_networks`
* ⚠️ Change `V2.MoneyManagement.OutboundPayment.to.payout_method_options.bank_account.preferred_networks`, `V2.MoneyManagement.OutboundPaymentQuote.to.payout_method_options.bank_account.preferred_networks`, and `V2.MoneyManagement.PayoutIntent.to.payout_method_options.bank_account.preferred_networks` to be optional
* Add support for `bank_account`, `card`, `crypto_wallet`, `status`, and `type` on `V2.MoneyManagement.OutboundPayment.tracking_details`
* Add support for `recipient_verification` on `V2.MoneyManagement.PayoutIntent`
* Add support for `fields_to_review` on `V2.MoneyManagement.PayoutIntent.next_action.confirm`
* ⚠️ Add support for new values `payout_method_invalid` and `recipient_capability_not_active` on enum `V2.MoneyManagement.PayoutIntent.next_action.handle_failure.failure_reason`
* ⚠️ Remove support for value `currency_required` from enum `V2.MoneyManagement.PayoutIntent.next_action.handle_failure.failure_reason`
* ⚠️ Change `V2.MoneyManagement.PayoutIntent.latest_payout` to be optional
* ⚠️ Remove support for `ca_bank_account`, `eu_bank_account`, and `mx_bank_account` on `V2.MoneyManagement.ReceivedCredit.bank_transfer`
* ⚠️ Remove support for `network` on `V2.MoneyManagement.ReceivedCredit.bank_transfer.originating_bank_account.aba`, `V2.MoneyManagement.ReceivedCredit.bank_transfer.originating_bank_account.bre_b`, `V2.MoneyManagement.ReceivedCredit.bank_transfer.originating_bank_account.clabe`, `V2.MoneyManagement.ReceivedCredit.bank_transfer.originating_bank_account.cpa`, `V2.MoneyManagement.ReceivedCredit.bank_transfer.originating_bank_account.iban`, `V2.MoneyManagement.ReceivedCredit.bank_transfer.originating_bank_account.nip`, `V2.MoneyManagement.ReceivedCredit.bank_transfer.originating_bank_account.pix`, and `V2.MoneyManagement.ReceivedCredit.bank_transfer.originating_bank_account.sort_code`
* Add support for `payout_method`, `recipient`, and `verification_type` on `V2.MoneyManagement.RecipientVerification`
* ⚠️ Change type of `V2.MoneyManagement.RecipientVerification.consumed_by` from `string` to `an object`
* Add support for `matched_business_type` and `provided_business_type` on `V2.MoneyManagement.RecipientVerification.match_result_details`
* ⚠️ Change `V2.MoneyManagement.RecipientVerification.expires_at` to be optional
* ⚠️ Remove support for value `requires_capture` from enum `V2.Payments.OffSessionPayment.status`
* Add support for `configuration` on `V2.Provisioning.Resource`
* Add support for `custom_marketing_action` and `triggering_signal` on `V2.Signals.AccountActivityCreateParams` and `V2.Signals.AccountActivity`
* Add support for `mfa_challenges` on `V2.Signals.AccountActivity.login_decision` and `V2.Signals.AccountActivityCreateParams.login_decision`
* Add support for new value `custom_marketing_action` on enums `V2.Signals.AccountActivity.type`, `V2.Signals.AccountActivityCreateParams.type`, and `V2.Signals.AccountEvaluationCreateParams.account_activity_details.data.type`
* Add support for `user_affinity` on `V2.Signals.AccountEvaluation.evaluated_signals` and `V2.Signals.AccountSignal`
* ⚠️ Remove support for `user_merchant_fit` on `V2.Signals.AccountEvaluation.evaluated_signals` and `V2.Signals.AccountSignal`
* ⚠️ Add support for new value `user_affinity` on enum `V2.Signals.AccountEvaluation.pending_signals`
* ⚠️ Remove support for value `user_merchant_fit` from enum `V2.Signals.AccountEvaluation.pending_signals`
* ⚠️ Add support for new value `user_affinity` on enums `V2.Signals.AccountEvaluation.requested_signals` and `V2.Signals.AccountEvaluationCreateParams.requested_signals`
* ⚠️ Remove support for value `user_merchant_fit` from enums `V2.Signals.AccountEvaluation.requested_signals` and `V2.Signals.AccountEvaluationCreateParams.requested_signals`
* Add support for `additional_details` on `V2.Signals.AccountSignal.customer_risk`
* ⚠️ Add support for new value `user_affinity` on enums `V2.Signals.AccountSignal.type` and `V2.Signals.AccountSignalListParams.type`
* ⚠️ Remove support for value `user_merchant_fit` from enums `V2.Signals.AccountSignal.type` and `V2.Signals.AccountSignalListParams.type`
* Add support for `subscriptions` on `V2.Tax.IntegrationConfigurationUpdateParams` and `V2.Tax.IntegrationConfiguration`
* Add support for `include` on `V2.Provisioning.ResourceRetrieveParams`
* Change `V2.MoneyManagement.OutboundPaymentCreateParams.to.payout_method_options.bank_account.preferred_networks`, `V2.MoneyManagement.OutboundPaymentQuoteCreateParams.to.payout_method_options.bank_account.preferred_networks`, `V2.MoneyManagement.PayoutIntentCreateParams.to.payout_method_options.bank_account.preferred_networks`, and `V2.MoneyManagement.PayoutIntentUpdateParams.to.payout_method_options.bank_account.preferred_networks` to be optional
* ⚠️ Remove support for `amount` and `from` on `V2.MoneyManagement.PayoutIntentUpdateParams`
* Add support for new value `pln` on enum `V2.MoneyManagement.FinancialAddressCreateParams.bank_account.currency`
* Add support for `parameters` on `V2.Data.QueryRunCreateParams`
* Add support for new value `dynamic_cvc` on enum `V2.Core.Vault.NetworkTokenGenerateCryptogramParams.type`
* ⚠️ Add support for new value `user_affinity` on enum `V2.Core.AccountEvaluationCreateParams.signals`
* ⚠️ Remove support for value `user_merchant_fit` from enum `V2.Core.AccountEvaluationCreateParams.signals`
* Add support for new value `terms` on enums `V2.Billing.ContractActivateParams.include`, `V2.Billing.ContractCancelParams.include`, `V2.Billing.ContractCreateParams.include`, `V2.Billing.ContractListParams.include`, `V2.Billing.ContractRetrieveParams.include`, and `V2.Billing.ContractUpdateParams.include`
* Add support for `actions` on `V2.Billing.ContractUpdateParams`
* Add support for new values `alipay_payments`, `scalapay_payments`, and `upi_payments` on enum `EventsV2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent.updated_capability`
* Add support for new value `inbound_fundings.paper_checks` on enum `EventsV2CoreAccountIncludingConfigurationMoneyManagerCapabilityStatusUpdatedEvent.updated_capability`
* Add support for `severity` on `EventsV2CoreHealthApiErrorFiringEvent`, `EventsV2CoreHealthApiErrorResolvedEvent`, `EventsV2CoreHealthApiLatencyFiringEvent`, `EventsV2CoreHealthApiLatencyResolvedEvent`, `EventsV2CoreHealthAuthorizationRateDropFiringEvent`, `EventsV2CoreHealthAuthorizationRateDropResolvedEvent`, `EventsV2CoreHealthElementsErrorFiringEvent`, `EventsV2CoreHealthElementsErrorResolvedEvent`, `EventsV2CoreHealthFraudRateIncreasedEvent`, `EventsV2CoreHealthInvoiceCountDroppedFiringEvent`, `EventsV2CoreHealthInvoiceCountDroppedResolvedEvent`, `EventsV2CoreHealthIssuingAuthorizationRequestErrorsFiringEvent`, `EventsV2CoreHealthIssuingAuthorizationRequestErrorsResolvedEvent`, `EventsV2CoreHealthIssuingAuthorizationRequestTimeoutFiringEvent`, `EventsV2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEvent`, `EventsV2CoreHealthMeterEventSummariesDelayedFiringEvent`, `EventsV2CoreHealthMeterEventSummariesDelayedResolvedEvent`, `EventsV2CoreHealthMetronomeNotificationLatencyFiringEvent`, `EventsV2CoreHealthMetronomeNotificationLatencyResolvedEvent`, `EventsV2CoreHealthPaymentMethodErrorFiringEvent`, `EventsV2CoreHealthPaymentMethodErrorResolvedEvent`, `EventsV2CoreHealthSepaDebitDelayedFiringEvent`, `EventsV2CoreHealthSepaDebitDelayedResolvedEvent`, `EventsV2CoreHealthTrafficVolumeDropFiringEvent`, `EventsV2CoreHealthTrafficVolumeDropResolvedEvent`, `EventsV2CoreHealthWebhookLatencyFiringEvent`, and `EventsV2CoreHealthWebhookLatencyResolvedEvent`
* Add support for event notifications `V2BillingContractTermCreatedEvent`, `V2BillingContractTermDeletedEvent`, and `V2BillingContractTermUpdatedEvent` with related object `V2.Billing.ContractTerm`
* Add support for event notifications `V2MoneyManagementFundingIntentCanceledEvent`, `V2MoneyManagementFundingIntentCreatedEvent`, `V2MoneyManagementFundingIntentProcessingEvent`, `V2MoneyManagementFundingIntentRequiresActionEvent`, `V2MoneyManagementFundingIntentRequiresConfirmationEvent`, `V2MoneyManagementFundingIntentSucceededEvent`, `V2MoneyManagementFundingIntentUpdatedEvent`, and `V2MoneyManagementFundingIntentValidatingEvent` with related object `V2.MoneyManagement.FundingIntent`
* Add support for event notifications `V2MoneyManagementInboundFundingAvailableEvent`, `V2MoneyManagementInboundFundingCheckFailedEvent`, `V2MoneyManagementInboundFundingCheckProcessingEvent`, `V2MoneyManagementInboundFundingCheckQueuedEvent`, `V2MoneyManagementInboundFundingCheckReturnedEvent`, `V2MoneyManagementInboundFundingCheckSucceededEvent`, `V2MoneyManagementInboundFundingCreatedEvent`, and `V2MoneyManagementInboundFundingUpdatedEvent` with related object `V2.MoneyManagement.InboundFunding`
* Add support for event notifications `V2MoneyManagementRewardProgramRewardEarnedEvent` and `V2MoneyManagementRewardProgramRewardReversedEvent` with related object `V2.MoneyManagement.RewardProgram`
* ⚠️ Remove support for event notifications `V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEvent` and `V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEvent` with related object `V2.Payments.OffSessionPayment`
* Add support for error codes `check_funding_intent_confirmation_method_cannot_be_updated`, `check_funding_intent_details_cannot_be_updated`, `check_funding_intent_too_large`, `funding_intent_cannot_be_canceled`, and `funding_intent_cannot_be_confirmed` on `CannotProceedError`
* Add support for error code `funding_intent_settlement_timing_not_available_for_account_type` on `FeatureNotEnabledError`
