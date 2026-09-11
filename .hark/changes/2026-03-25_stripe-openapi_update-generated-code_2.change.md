---
title: Update generated code for private-preview
pr_link: https://github.com/stripe/stripe-node/pull/2607
is_breaking: true
is_stripe_api_change: true
released_in_version: 21.1.0-alpha.1
---

* Add support for new resource `V2.Core.AccountEvaluation`
* ⚠️ Remove support for resources `V2.Billing.LicenseFeeSubscription` and `V2.Billing.PricingPlanSubscriptionComponents`
* Add support for `create` method on resource `V2.Core.AccountEvaluation`
* ⚠️ Remove support for `retrieve` method on resources `V2.Billing.LicenseFeeSubscription` and `V2.Billing.PricingPlanSubscriptionComponents`
* Add support for `modify_rates` method on resource `V2.Billing.RateCard`
* Add support for `remove_discounts` method on resource `V2.Billing.PricingPlanSubscription`
* ⚠️ Add support for new value `eg_bank_account` on enum `V2.Account.configuration.recipient_data.default_outbound_destination.type`
* Add support for `invoice_resources` on `V2.Billing.Intent`
* Add support for `amount_due` and `customer_balance_applied` on `V2.Billing.Intent.amount_details`
* Add support for `expires_at` on `V2.Billing.Intent.status_transitions`
* Add support for `discount` on `V2.Billing.IntentAction.apply` and `V2.Billing.IntentCreateParams.actions[].apply`
* Add support for `timestamp` on `V2.Billing.IntentAction.apply.effective_at` and `V2.Billing.IntentCreateParams.actions[].apply.effective_at`
* ⚠️ Add support for new values `current_billing_period_start` and `timestamp` on enums `V2.Billing.IntentAction.apply.effective_at.type` and `V2.Billing.IntentCreateParams.actions[].apply.effective_at.type`
* ⚠️ Add support for new value `discount` on enums `V2.Billing.IntentAction.apply.type` and `V2.Billing.IntentCreateParams.actions[].apply.type`
* ⚠️ Change type of `V2.Billing.IntentAction.deactivate.pricing_plan_subscription_details.overrides.partial_period_behaviors[].type`, `V2.Billing.IntentAction.modify.pricing_plan_subscription_details.overrides.partial_period_behaviors[].type`, `V2.Billing.IntentAction.subscribe.pricing_plan_subscription_details.overrides.partial_period_behaviors[].type`, `V2.Billing.IntentCreateParams.actions[].deactivate.pricing_plan_subscription_details.overrides.partial_period_behaviors[].type`, `V2.Billing.IntentCreateParams.actions[].modify.pricing_plan_subscription_details.overrides.partial_period_behaviors[].type`, and `V2.Billing.IntentCreateParams.actions[].subscribe.pricing_plan_subscription_details.overrides.partial_period_behaviors[].type` from `literal('license_fee')` to `enum('license_fee'|'recurring_credit_grant')`
* Add support for `service_cycle` on `V2.Billing.LicenseFee` and `V2.Billing.RateCard`
* ⚠️ Remove support for `latest_version` on `V2.Billing.LicenseFee`, `V2.Billing.PricingPlan`, and `V2.Billing.RateCard`
* ⚠️ Remove support for `service_interval_count` and `service_interval` on `V2.Billing.LicenseFee` and `V2.Billing.RateCard`
* ⚠️ Change type of `V2.Billing.LicenseFee.transform_quantity.divide_by`, `V2.Billing.LicenseFeeCreateParams.transform_quantity.divide_by`, `V2.Billing.LicenseFeeUpdateParams.transform_quantity.divide_by`, `V2.Billing.LicenseFeeVersion.transform_quantity.divide_by`, `V2.Billing.RateCardRate.transform_quantity.divide_by`, and `V2.Billing.RateCardRateCreateParams.transform_quantity.divide_by` from `longInteger` to `int64_string`
* Add support for `discount_details` and `pricing_plan_component_details` on `V2.Billing.PricingPlanSubscription`
* ⚠️ Add support for new value `crypto_wallets` on enums `V2.Core.Account.future_requirements.entries[].impact.restricts_capabilities[].capability` and `V2.Core.Account.requirements.entries[].impact.restricts_capabilities[].capability`
* ⚠️ Remove support for value `crypto` from enums `V2.Core.Account.future_requirements.entries[].impact.restricts_capabilities[].capability` and `V2.Core.Account.requirements.entries[].impact.restricts_capabilities[].capability`
* Add support for `balance_by_funds_type` on `V2.MoneyManagement.FinancialAccount.payments`
* ⚠️ Add support for new value `next_day_payout_fee` on enum `V2.MoneyManagement.OutboundPaymentQuote.estimated_fees[].type`
* Add support for `treasury_transaction_entry` on `V2.MoneyManagement.TransactionEntry`
* Add support for `treasury_credit_reversal`, `treasury_debit_reversal`, `treasury_inbound_transfer`, `treasury_issuing_authorization`, `treasury_outbound_payment`, `treasury_outbound_transfer`, `treasury_received_credit`, and `treasury_received_debit` on `V2.MoneyManagement.Transaction.flow` and `V2.MoneyManagement.TransactionEntry.transaction_details.flow`
* ⚠️ Add support for new values `treasury_credit_reversal`, `treasury_debit_reversal`, `treasury_inbound_transfer`, `treasury_issuing_authorization`, `treasury_other`, `treasury_outbound_payment`, `treasury_outbound_transfer`, `treasury_received_credit`, and `treasury_received_debit` on enums `V2.MoneyManagement.Transaction.flow.type` and `V2.MoneyManagement.TransactionEntry.transaction_details.flow.type`
* Add support for `treasury_transaction` on `V2.MoneyManagement.Transaction`
* ⚠️ Add support for new value `no_valid_payment_method` on enum `V2.Payments.OffSessionPayment.failure_reason`
* Add support for `metadata` on `V2.Payments.SettlementAllocationIntentSplit`
* ⚠️ Change type of `V2.Reporting.ReportRun.result.file.size` from `longInteger` to `int64_string`
* Add support for `statement_descriptor` on `V2.MoneyManagement.OutboundPaymentCreateParams` and `V2.MoneyManagement.OutboundTransferCreateParams`
* Add support for `include` on `V2.Billing.IntentCreateParams`, `V2.Billing.IntentReserveParams`, `V2.Billing.PricingPlanSubscriptionListParams`, `V2.Billing.PricingPlanSubscriptionRetrieveParams`, `V2.MoneyManagement.FinancialAccountListParams`, and `V2.MoneyManagement.FinancialAccountRetrieveParams`
* Add support for event notifications `V1AccountSignalsIncludingDelinquencyCreatedEvent`, `V2CoreAccountSignalsFraudulentWebsiteReadyEvent`, and `V2SignalsAccountSignalFraudulentMerchantReadyEvent`
