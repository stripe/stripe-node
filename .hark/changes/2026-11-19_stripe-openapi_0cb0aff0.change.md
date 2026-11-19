---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2932
semver_level: major
is_stripe_api_change: true
released_in_version: 23.3.0-alpha.1
---

* Add support for new resources `V2.Billing.GroupInvoice`, `V2.Billing.GroupSpendModifier`, and `V2.Billing.Group`
* ⚠️ Remove support for resources `V2.Billing.CadenceSpendModifier` and `V2.Billing.ContractPricingLineQuantityChange`
* Add support for `create` and `update` methods on resource `InvoiceRenderingTemplate`
* Add support for `cancel`, `create`, `list`, `retrieve`, and `update` methods on resource `V2.Billing.Group`
* Add support for `retrieve` method on resource `V2.Billing.GroupSpendModifier`
* Add support for `create` method on resource `V2.Billing.GroupInvoice`
* ⚠️ Remove support for `retrieve` method on resource `V2.Billing.CadenceSpendModifier`
* ⚠️ Remove support for `billing_cadence` on `Billing.Alert.spend_threshold.filters`, `Billing.AlertCreateParams.spend_threshold.filters`, `Billing.AlertTriggered.group_by`, `InvoiceCreatePreviewParams`, `InvoiceListParams`, `SubscriptionCreateParams`, `SubscriptionListParams`, `SubscriptionUpdateParams`, `Subscription`, `V2.Billing.PricingPlanSubscriptionListParams`, `V2.Billing.PricingPlanSubscription`, `V2.Billing.RateCardSubscriptionCreateParams`, `V2.Billing.RateCardSubscriptionListParams`, and `V2.Billing.RateCardSubscription`
* ⚠️ Add support for new value `billing_group` on enum `Billing.AlertTriggered.group_by.type`
* ⚠️ Remove support for value `billing_cadence` from enum `Billing.AlertTriggered.group_by.type`
* Add support for `scheduled_fee` on `V2.Billing.ContractCreateParams.terms[]`, `V2.Billing.ContractTerm`, `V2.Billing.ContractUpdateParams.actions[].add_term`, and `V2.Billing.ContractUpdateParams.actions[].update_term`
* ⚠️ Remove support for `ad_hoc_product` on `V2.Billing.ContractCreateParams.terms[]`, `V2.Billing.ContractTerm`, `V2.Billing.ContractUpdateParams.actions[].add_term`, and `V2.Billing.ContractUpdateParams.actions[].update_term`
* ⚠️ Add support for new value `scheduled_fee` on enums `V2.Billing.ContractCreateParams.terms[].type`, `V2.Billing.ContractTerm.type`, `V2.Billing.ContractTermListContractTermsParams.type`, and `V2.Billing.ContractUpdateParams.actions[].add_term.type`
* ⚠️ Remove support for value `ad_hoc_product` from enums `V2.Billing.ContractCreateParams.terms[].type`, `V2.Billing.ContractTerm.type`, `V2.Billing.ContractTermListContractTermsParams.type`, and `V2.Billing.ContractUpdateParams.actions[].add_term.type`
* ⚠️ Add support for new value `billing_group` on enums `Billing.Alert.spend_threshold.group_by` and `Billing.AlertCreateParams.spend_threshold.group_by`
* ⚠️ Remove support for value `billing_cadence` from enums `Billing.Alert.spend_threshold.group_by` and `Billing.AlertCreateParams.spend_threshold.group_by`
* ⚠️ Remove support for `cadence` on `Billing.AlertListAlertNotificationsParams`, `Billing.AlertNotification`, `V2.Billing.IntentCreateParams`, and `V2.Billing.Intent`
* ⚠️ Remove support for `pricing_token` on `Checkout.SessionCreateParams`
* Add support for `pass_through_fee_cost` on `Checkout.Session`
* Add support for new value `dealerfx` on enums `Checkout.Session.automatic_surcharge.provider` and `PaymentLink.automatic_surcharge.provider`
* Add support for `amount_pass_through_fee` on `Checkout.Session.total_details`
* ⚠️ Change `GiftCardOperation.activation.balance` and `GiftCardOperation.reload.balance` to be optional
* Add support for `link_shared_data` on `Identity.VerificationSessionCreateParams`
* Add support for `line_item_policy`, `rendering_settings`, and `summary_item_policies` on `InvoiceRenderingTemplate`
* Add support for `billing_group` on `InvoiceCreatePreviewParams`, `InvoiceListParams`, `V2.Billing.IntentCreateParams`, `V2.Billing.Intent`, `V2.Billing.PricingPlanSubscriptionListParams`, `V2.Billing.PricingPlanSubscription`, `V2.Billing.RateCardSubscriptionListParams`, and `V2.Billing.RateCardSubscription`
* Add support for `applied_credit_memos` on `Invoice` and `QuotePreviewInvoice`
* Add support for `billing_group_details` on `Invoice.parent` and `QuotePreviewInvoice.parent`
* ⚠️ Remove support for `billing_cadence_details` on `Invoice.parent` and `QuotePreviewInvoice.parent`
* ⚠️ Add support for new value `billing_group_details` on enums `Invoice.parent.type` and `QuotePreviewInvoice.parent.type`
* ⚠️ Remove support for value `billing_cadence_details` from enums `Invoice.parent.type` and `QuotePreviewInvoice.parent.type`
* Add support for `token_service_provider_id` on `Issuing.Authorization.token_details.network_data.visa` and `Issuing.Token.network_data.visa`
* Add support for `amount_type`, `amount`, `currency`, `description`, `end_date`, `interval_count`, `interval`, `reference`, and `start_date` on `Mandate.payment_method_details.card.india`
* Add support for `three_d_secure` on `PaymentAttemptRecordReportFailedParams.payment_method_details.card` and `PaymentRecordReportPaymentAttemptFailedParams.payment_method_details.card`
* Add support for `provider_signature_data` and `provider_signature` on `PaymentIntent.payment_method_options.card_present.aade_data`, `PaymentIntentConfirmParams.payment_method_options.card_present.aade_data`, `PaymentIntentCreateParams.payment_method_options.card_present.aade_data`, and `PaymentIntentUpdateParams.payment_method_options.card_present.aade_data`
* ⚠️ Remove support for `mark_data` and `signed_mark` on `PaymentIntent.payment_method_options.card_present.aade_data`, `PaymentIntentConfirmParams.payment_method_options.card_present.aade_data`, `PaymentIntentCreateParams.payment_method_options.card_present.aade_data`, and `PaymentIntentUpdateParams.payment_method_options.card_present.aade_data`
* Add support for `request_multicapture` on `PaymentIntent.payment_method_options.vipps`, `PaymentIntentConfirmParams.payment_method_options.vipps`, `PaymentIntentCreateParams.payment_method_options.vipps`, and `PaymentIntentUpdateParams.payment_method_options.vipps`
* Add support for `is_free_trial_transaction` on `PaymentIntentConfirmParams.radar_options` and `PaymentIntentCreateParams.radar_options`
* Add support for new value `tron` on enum `PaymentIntentUpdateCryptoRefundAddressParams.network`
* Add support for `radar_options` on `PaymentIntent`
* Add support for `aeon_pay`, `au_pay`, `dbarai`, and `merpay` on `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, and `PaymentMethodConfiguration`
* Add support for `requested_signals` on `Radar.PaymentEvaluationCreateParams` and `Radar.PaymentEvaluation`
* Add support for `gift_card` on `Refund.destination_details`
* Add support for `days_after_fulfillment` on `Reserve.Plan.rolling_release`
* Add support for `rendering` on `SubscriptionScheduleCreateParams.default_settings.invoice_settings` and `SubscriptionScheduleUpdateParams.default_settings.invoice_settings`
* Add support for `debit_behavior` on `Subscription.payment_settings.payment_method_options.card`, `Subscription.payment_settings.payment_method_options.pix`, `Subscription.payment_settings.payment_method_options.upi`, `SubscriptionCreateParams.payment_settings.payment_method_options.card`, `SubscriptionCreateParams.payment_settings.payment_method_options.pix`, `SubscriptionCreateParams.payment_settings.payment_method_options.upi`, `SubscriptionUpdateParams.payment_settings.payment_method_options.card`, `SubscriptionUpdateParams.payment_settings.payment_method_options.pix`, and `SubscriptionUpdateParams.payment_settings.payment_method_options.upi`
* Add support for `presentment_details` on `Subscription.pending_update`
* ⚠️ Remove support for `device_health_details` and `device_health` on `Terminal.Reader`
* Add support for `billing_group_data` on `V2.Billing.IntentCreateParams` and `V2.Billing.Intent`
* ⚠️ Remove support for `cadence_data` on `V2.Billing.IntentCreateParams` and `V2.Billing.Intent`
* Add support for new value `group` on enums `V2.Billing.IntentAction.apply.invoice_discount_rule.applies_to` and `V2.Billing.IntentCreateParams.actions[].apply.invoice_discount_rule.applies_to`
* Add support for new value `account_dashboard` on enums `V2.Core.AccountLink.use_case.type` and `V2.Core.AccountLinkCreateParams.use_case.type`
* Add support for `touch_n_go_payments`, `truemoney_payments`, `wechat_pay_mobile_web_payments`, `wechat_pay_payments`, and `wero_payments` on `V2.Core.Account.configuration.merchant.capabilities`, `V2.Core.AccountCreateParams.configuration.merchant.capabilities`, and `V2.Core.AccountUpdateParams.configuration.merchant.capabilities`
* Add support for `business_demand_deposit_account_fifth_third_storage` on `V2.Core.Account.configuration.money_manager.capabilities`, `V2.Core.AccountCreateParams.configuration.money_manager.capabilities`, and `V2.Core.AccountUpdateParams.configuration.money_manager.capabilities`
* Add support for `tips` on `V2.Core.Account.configuration.recipient.capabilities.bank_accounts`, `V2.Core.AccountCreateParams.configuration.recipient.capabilities.bank_accounts`, and `V2.Core.AccountUpdateParams.configuration.recipient.capabilities.bank_accounts`
* Add support for `business_demand_deposit_account_fifth_third` on `V2.Core.Account.identity.attestations.terms_of_service`, `V2.Core.AccountCreateParams.identity.attestations.terms_of_service`, and `V2.Core.AccountUpdateParams.identity.attestations.terms_of_service`
* Add support for `channel` on `V2.Core.ClaimableSandboxCreateParams` and `V2.Core.ClaimableSandbox`
* ⚠️ Remove support for `app_channel` on `V2.Core.ClaimableSandboxCreateParams` and `V2.Core.ClaimableSandbox`
* Add support for `return_url` on `V2.Core.ClaimableSandbox.onboarding_link_details`, `V2.Core.ClaimableSandboxCreateParams.onboarding_link_details`, and `V2.Core.ClaimableSandboxRenewOnboardingLinkParams.onboarding_link_details`
* ⚠️ Change type of `V2.Core.ClaimableSandbox.sandbox_details.api_keys.mcp` from `string` to `an object`
* ⚠️ Change type of `V2.Core.ClaimableSandbox.sandbox_details.api_keys.publishable` from `string` to `an object`
* ⚠️ Change type of `V2.Core.ClaimableSandbox.sandbox_details.api_keys.secret` from `string` to `an object`
* ⚠️ Change `V2.Core.ClaimableSandbox.onboarding_link_details` to be optional
* ⚠️ Change `V2.Core.ClaimableSandbox.owner_details.app_install_status` to be optional
* Add support for `custom_payment_method_adapter_degraded` on `V2.Core.Health.AlertHistoryEntry` and `V2.Core.Health.Alert`
* Add support for new value `custom_payment_method_adapter_degraded` on enums `V2.Core.Health.Alert.type` and `V2.Core.Health.AlertHistoryEntry.type`
* Add support for `funds_holding_structure` on `V2.MoneyManagement.FinancialAccount.storage` and `V2.MoneyManagement.FinancialAccountCreateParams.storage`
* Add support for `au_becs_debit` on `V2.MoneyManagement.InboundTransfer.from.payment_method`
* Add support for new value `tips` on enums `V2.MoneyManagement.OutboundPaymentQuote.estimated_fees[].network_fee_details.network` and `V2.MoneyManagement.PayoutIntent.estimated_fees[].network_fee_details.network`
* Add support for new value `tips` on enums `V2.MoneyManagement.OutboundPayment.to.payout_method_options.bank_account.preferred_networks`, `V2.MoneyManagement.OutboundPaymentCreateParams.to.payout_method_options.bank_account.preferred_networks`, `V2.MoneyManagement.OutboundPaymentQuote.to.payout_method_options.bank_account.preferred_networks`, `V2.MoneyManagement.OutboundPaymentQuoteCreateParams.to.payout_method_options.bank_account.preferred_networks`, `V2.MoneyManagement.OutboundTransfer.to.payout_method_options.bank_account.preferred_networks`, `V2.MoneyManagement.OutboundTransferCreateParams.to.payout_method_options.bank_account.preferred_networks`, `V2.MoneyManagement.PayoutIntent.to.payout_method_options.bank_account.preferred_networks`, `V2.MoneyManagement.PayoutIntentCreateParams.to.payout_method_options.bank_account.preferred_networks`, and `V2.MoneyManagement.PayoutIntentUpdateParams.to.payout_method_options.bank_account.preferred_networks`
* Add support for `network` on `V2.MoneyManagement.ReceivedDebit.bank_transfer`
* Add support for new values `inbound_funding_reversal` and `inbound_funding` on enums `V2.MoneyManagement.Transaction.category` and `V2.MoneyManagement.TransactionEntry.transaction_details.category`
* Add support for new value `inbound_funding` on enums `V2.MoneyManagement.Transaction.flow.type` and `V2.MoneyManagement.TransactionEntry.transaction_details.flow.type`
* Add support for `settlement_timing` on `V2.MoneyManagement.FundingIntentUpdateParams`
* Add support for new value `custom_payment_method_adapter_degraded` on enum `V2.Core.Health.AlertListParams.types`
* Add support for `include` on `V2.Core.ClaimableSandboxRetrieveParams`
* Change `V2.Core.ClaimableSandboxRenewOnboardingLinkParams.onboarding_link_details.refresh_url` to be optional
* ⚠️ Add support for `billing_group` on `V2.Billing.RateCardSubscriptionCreateParams`
* ⚠️ Remove support for `one_time_fees`, `pricing_lines`, and `pricing_overrides` on `V2.Billing.ContractCreateParams`
* Add support for new value `now` on enums `V2.Billing.ContractCreateParams.terms[].pricing_override.ends_at.type`, `V2.Billing.ContractCreateParams.terms[].recurring_price.ends_at.type`, `V2.Billing.ContractUpdateParams.actions[].add_term.pricing_override.ends_at.type`, `V2.Billing.ContractUpdateParams.actions[].add_term.recurring_price.ends_at.type`, `V2.Billing.ContractUpdateParams.actions[].update_term.pricing_override.ends_at.type`, and `V2.Billing.ContractUpdateParams.actions[].update_term.recurring_price.ends_at.type`
* Add support for new value `now` on enums `V2.Billing.ContractCreateParams.terms[].pricing_override.starts_at.type`, `V2.Billing.ContractCreateParams.terms[].recurring_price.starts_at.type`, `V2.Billing.ContractUpdateParams.actions[].add_term.pricing_override.starts_at.type`, `V2.Billing.ContractUpdateParams.actions[].add_term.recurring_price.starts_at.type`, `V2.Billing.ContractUpdateParams.actions[].update_term.pricing_override.starts_at.type`, and `V2.Billing.ContractUpdateParams.actions[].update_term.recurring_price.starts_at.type`
* Add support for `contract_number` on `V2.Billing.ContractUpdateParams`
* ⚠️ Remove support for `one_time_fee_actions`, `pricing_line_actions`, and `pricing_override_actions` on `V2.Billing.ContractUpdateParams`
* ⚠️ Remove support for `cancel_pricing_lines` on `V2.Billing.ContractCancelParams`
* Add support for new values `business_demand_deposit_account_fifth_third_storage.inbound.usd` and `business_demand_deposit_account_fifth_third_storage.outbound.usd` on enum `EventsV2CoreAccountIncludingConfigurationMoneyManagerCapabilityStatusUpdatedEvent.updated_capability`
* Add support for new value `bank_accounts.tips` on enum `EventsV2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent.updated_capability`
* Add support for `charge` on `EventsV2PaymentsOffSessionPaymentAttemptFailedEvent`, `EventsV2PaymentsOffSessionPaymentFailedEvent`, and `EventsV2PaymentsOffSessionPaymentSucceededEvent`
* Add support for `last_attempt_error` on `EventsV2PaymentsOffSessionPaymentAttemptFailedEvent` and `EventsV2PaymentsOffSessionPaymentFailedEvent`
* Add support for `payment_attempt_record` on `EventsV2PaymentsOffSessionPaymentSucceededEvent`
* Add support for event notifications `V2BillingContractTermPricingOverrideEndedEvent`, `V2BillingContractTermPricingOverrideStartedEvent`, `V2BillingContractTermRecurringPriceEndedEvent`, `V2BillingContractTermRecurringPriceStartedEvent`, `V2BillingContractTermScheduledFeeServicePeriodEndedEvent`, and `V2BillingContractTermScheduledFeeServicePeriodStartedEvent` with related object `V2.Billing.ContractTerm`
* Add support for event notifications `V2CoreHealthCustomPaymentMethodAdapterDegradedFiringEvent` and `V2CoreHealthCustomPaymentMethodAdapterDegradedResolvedEvent`
* Add support for event notifications `V2SignalsPaymentRetryEvaluationCanceledEvent`, `V2SignalsPaymentRetryEvaluationCompletedEvent`, `V2SignalsPaymentRetryEvaluationCreatedEvent`, `V2SignalsPaymentRetryEvaluationExpiredEvent`, and `V2SignalsPaymentRetryEvaluationUpdatedEvent` with related object `V2.Signals.PaymentRetryEvaluation`
* ⚠️ Remove support for event notifications `V2BillingCadenceBilledEvent`, `V2BillingCadenceCanceledEvent`, and `V2BillingCadenceCreatedEvent` with related object `V2.Billing.Cadence`
* ⚠️ Add error type `RateLimitError` on `V2.Core.ClaimableSandbox#create`
* Add support for error code `scheduled_cancellation_conflicts_with_updated_terms` on `CannotProceedError`
