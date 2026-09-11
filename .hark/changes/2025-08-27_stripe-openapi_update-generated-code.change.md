---
title: Update generated code for private-preview
pr_link: https://github.com/stripe/stripe-node/pull/2390
is_stripe_api_change: true
released_in_version: 18.6.0-alpha.1
---

* Add support for `attach_cadence` method on resource `Subscription`
* Add support for `currency` and `external_customer_id` on `Billing.AlertTriggered`
* Add support for `custom_pricing_unit` on `Billing.AlertTriggered`, `Billing.CreditBalanceSummary.balances[].available_balance`, `Billing.CreditBalanceSummary.balances[].ledger_balance`, `Billing.CreditBalanceTransaction.credit.amount`, `Billing.CreditBalanceTransaction.debit.amount`, `Billing.CreditGrant.amount`, and `Billing.CreditGrantCreateParams.amount`
* Add support for `customer` on `Billing.AlertListParams`
* Change type of `Billing.Alert.alert_type`, `Billing.AlertCreateParams.alert_type`, and `Billing.AlertListParams.alert_type` from `literal('usage_threshold')` to `enum('credit_balance_threshold'|'usage_threshold')`
* Add support for `credit_balance_threshold` on `Billing.AlertCreateParams` and `Billing.Alert`
* Add support for `billable_items` on `Billing.CreditBalanceSummaryRetrieveParams.filter.applicability_scope`, `Billing.CreditGrant.applicability_config.scope`, and `Billing.CreditGrantCreateParams.applicability_config.scope`
* Change type of `Billing.CreditBalanceSummary.balances[].available_balance.type`, `Billing.CreditBalanceSummary.balances[].ledger_balance.type`, `Billing.CreditBalanceTransaction.credit.amount.type`, `Billing.CreditBalanceTransaction.debit.amount.type`, `Billing.CreditGrant.amount.type`, and `Billing.CreditGrantCreateParams.amount.type` from `literal('monetary')` to `enum('custom_pricing_unit'|'monetary')`
* Add support for `license_fee_subscription_details` and `rate_card_subscription_details` on `InvoiceItem.parent` and `InvoiceLineItem.parent`
* Change type of `InvoiceItem.parent.type` from `literal('subscription_details')` to `enum('license_fee_subscription_details'|'rate_card_subscription_details'|'subscription_details')`
* Add support for `license_fee_details` and `rate_card_rate_details` on `InvoiceItem.pricing` and `InvoiceLineItem.pricing`
* Change type of `InvoiceItem.pricing.type` and `InvoiceLineItem.pricing.type` from `literal('price_details')` to `enum('license_fee_details'|'price_details'|'rate_card_rate_details')`
* Add support for `billing_cadence` on `InvoiceCreatePreviewParams`, `SubscriptionCreateParams`, and `Subscription`
* Add support for `billing_cadence_details` on `Invoice.parent` and `QuotePreviewInvoice.parent`
* Add support for new value `billing_cadence_details` on enums `Invoice.parent.type` and `QuotePreviewInvoice.parent.type`
* Add support for new values `license_fee_subscription_details` and `rate_card_subscription_details` on enum `InvoiceLineItem.parent.type`
* Add support for new resources `V2.Billing.BillSettingVersion`, `V2.Billing.BillSetting`, `V2.Billing.Cadence`, `V2.Billing.CollectionSettingVersion`, `V2.Billing.CollectionSetting`, `V2.Billing.CustomPricingUnit`, `V2.Billing.IntentAction`, `V2.Billing.Intent`, `V2.Billing.LicenseFeeSubscription`, `V2.Billing.LicenseFeeVersion`, `V2.Billing.LicenseFee`, `V2.Billing.LicensedItem`, `V2.Billing.MeteredItem`, `V2.Billing.PricingPlanComponent`, `V2.Billing.PricingPlanSubscription`, `V2.Billing.PricingPlanVersion`, `V2.Billing.PricingPlan`, `V2.Billing.Profile`, `V2.Billing.RateCardRate`, `V2.Billing.RateCardSubscription`, `V2.Billing.RateCardVersion`, `V2.Billing.RateCard`, `V2.Billing.ServiceAction`, `V2.Core.ClaimableSandbox`, `V2.Reporting.ReportRun`, `V2.Reporting.Report`, and `V2.Tax.AutomaticRule`
* Add support for `create`, `deactivate`, `find`, `retrieve`, and `update` methods on resource `V2.Tax.AutomaticRule`
* Add support for `create` and `retrieve` methods on resources `V2.Billing.ServiceAction` and `V2.Reporting.ReportRun`
* Add support for `retrieve` method on resources `V2.Billing.LicenseFeeSubscription` and `V2.Reporting.Report`
* Add support for `create` method on resources `V2.Core.ClaimableSandbox`
* Add support for `cancel`, `create`, `list`, `retrieve`, and `update` methods on resources `V2.Billing.Cadence` and `V2.Billing.RateCardSubscription`
* Add support for `create`, `list`, `retrieve`, and `update` methods on resources `V2.Billing.BillSetting`, `V2.Billing.CollectionSetting`, `V2.Billing.CustomPricingUnit`, `V2.Billing.LicenseFee`, `V2.Billing.LicensedItem`, `V2.Billing.MeteredItem`, `V2.Billing.PricingPlan`, `V2.Billing.Profile`, and `V2.Billing.RateCard`
* Add support for `list` and `retrieve` methods on resources `V2.Billing.BillSettingVersion`, `V2.Billing.CollectionSettingVersion`, `V2.Billing.IntentAction`, `V2.Billing.LicenseFeeVersion`, `V2.Billing.PricingPlanSubscription`, `V2.Billing.PricingPlanVersion`, and `V2.Billing.RateCardVersion`
* Add support for `create`, `del`, `list`, and `retrieve` methods on resource `V2.Billing.RateCardRate`
* Add support for `create`, `del`, `list`, `retrieve`, and `update` methods on resource `V2.Billing.PricingPlanComponent`
* Add support for `cancel`, `commit`, `create`, `list`, `release_reservation`, `reserve`, and `retrieve` methods on resource `V2.Billing.Intent`
* Add support for `changes` on `V2.Event`
* Add support for thin events `V2BillingCadenceBilledEvent`, `V2BillingCadenceCanceledEvent`, `V2BillingCadenceCreatedEvent`, and `V2BillingCadenceErroredEvent` with related object `V2.Billing.Cadence`
* Add support for thin events `V2BillingLicenseFeeCreatedEvent` and `V2BillingLicenseFeeUpdatedEvent` with related object `V2.Billing.LicenseFee`
* Add support for thin event `V2BillingLicenseFeeVersionCreatedEvent` with related object `V2.Billing.LicenseFeeVersion`
* Add support for thin events `V2BillingLicensedItemCreatedEvent` and `V2BillingLicensedItemUpdatedEvent` with related object `V2.Billing.LicensedItem`
* Add support for thin events `V2BillingMeteredItemCreatedEvent` and `V2BillingMeteredItemUpdatedEvent` with related object `V2.Billing.MeteredItem`
* Add support for thin events `V2BillingPricingPlanCreatedEvent` and `V2BillingPricingPlanUpdatedEvent` with related object `V2.Billing.PricingPlan`
* Add support for thin events `V2BillingPricingPlanComponentCreatedEvent` and `V2BillingPricingPlanComponentUpdatedEvent` with related object `V2.Billing.PricingPlanComponent`
* Add support for thin events `V2BillingPricingPlanSubscriptionCollectionAwaitingCustomerActionEvent`, `V2BillingPricingPlanSubscriptionCollectionCurrentEvent`, `V2BillingPricingPlanSubscriptionCollectionPastDueEvent`, `V2BillingPricingPlanSubscriptionCollectionPausedEvent`, `V2BillingPricingPlanSubscriptionCollectionUnpaidEvent`, `V2BillingPricingPlanSubscriptionServicingActivatedEvent`, `V2BillingPricingPlanSubscriptionServicingCanceledEvent`, and `V2BillingPricingPlanSubscriptionServicingPausedEvent` with related object `V2.Billing.PricingPlanSubscription`
* Add support for thin event `V2BillingPricingPlanVersionCreatedEvent` with related object `V2.Billing.PricingPlanVersion`
* Add support for thin events `V2BillingRateCardCreatedEvent` and `V2BillingRateCardUpdatedEvent` with related object `V2.Billing.RateCard`
* Add support for thin event `V2BillingRateCardRateCreatedEvent` with related object `V2.Billing.RateCardRate`
* Add support for thin events `V2BillingRateCardSubscriptionActivatedEvent`, `V2BillingRateCardSubscriptionCanceledEvent`, `V2BillingRateCardSubscriptionCollectionAwaitingCustomerActionEvent`, `V2BillingRateCardSubscriptionCollectionCurrentEvent`, `V2BillingRateCardSubscriptionCollectionPastDueEvent`, `V2BillingRateCardSubscriptionCollectionPausedEvent`, `V2BillingRateCardSubscriptionCollectionUnpaidEvent`, `V2BillingRateCardSubscriptionServicingActivatedEvent`, `V2BillingRateCardSubscriptionServicingCanceledEvent`, and `V2BillingRateCardSubscriptionServicingPausedEvent` with related object `V2.Billing.RateCardSubscription`
* Add support for thin event `V2BillingRateCardVersionCreatedEvent` with related object `V2.Billing.RateCardVersion`
* Add support for thin events `V2CoreHealthApiErrorFiringEvent`, `V2CoreHealthApiErrorResolvedEvent`, `V2CoreHealthApiLatencyFiringEvent`, `V2CoreHealthApiLatencyResolvedEvent`, `V2CoreHealthAuthorizationRateDropFiringEvent`, `V2CoreHealthAuthorizationRateDropResolvedEvent`, `V2CoreHealthEventGenerationFailureResolvedEvent`, `V2CoreHealthFraudRateIncreasedEvent`, `V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEvent`, `V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEvent`, `V2CoreHealthPaymentMethodErrorFiringEvent`, `V2CoreHealthPaymentMethodErrorResolvedEvent`, `V2CoreHealthTrafficVolumeDropFiringEvent`, `V2CoreHealthTrafficVolumeDropResolvedEvent`, `V2CoreHealthWebhookLatencyFiringEvent`, and `V2CoreHealthWebhookLatencyResolvedEvent`
* Add support for thin events `V2ReportingReportRunCreatedEvent`, `V2ReportingReportRunFailedEvent`, `V2ReportingReportRunSucceededEvent`, and `V2ReportingReportRunUpdatedEvent` with related object `V2.Reporting.ReportRun`
* Add support for error type `RateLimitError`
