---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/2363
is_stripe_api_change: true
released_in_version: 18.5.0-beta.1
---

* Add support for new resources `Billing.MeterUsageRow`, `Billing.MeterUsage`, and `Terminal.OnboardingLink`
* Add support for `retrieve` method on resource `Billing.MeterUsage`
* Add support for `create` method on resource `Terminal.OnboardingLink`
* Add support for `monthly_payout_days` and `weekly_payout_days` on `BalanceSettingUpdateParams.payouts.schedule` and `BalanceSettings.payouts.schedule`
* Remove support for `monthly_anchor` and `weekly_anchor` on `BalanceSettingUpdateParams.payouts.schedule` and `BalanceSettings.payouts.schedule`
* Add support for `delay_days_override` on `BalanceSettingUpdateParams.settlement_timing`
* Remove support for `delay_days` on `BalanceSettingUpdateParams.settlement_timing`
* Add support for `update_discounts` on `Checkout.SessionCreateParams.permissions`
* Add support for `discounts` and `subscription_data` on `Checkout.SessionUpdateParams`
* Add support for `smart_disputes` on `Dispute`
* Add support for `upi` on `Invoice.payment_settings.payment_method_options`, `InvoiceCreateParams.payment_settings.payment_method_options`, `InvoiceUpdateParams.payment_settings.payment_method_options`, `QuotePreviewInvoice.payment_settings.payment_method_options`, `Subscription.payment_settings.payment_method_options`, `SubscriptionCreateParams.payment_settings.payment_method_options`, and `SubscriptionUpdateParams.payment_settings.payment_method_options`
* Add support for new value `upi` on enums `Invoice.payment_settings.payment_method_types`, `InvoiceCreateParams.payment_settings.payment_method_types`, `InvoiceUpdateParams.payment_settings.payment_method_types`, `QuotePreviewInvoice.payment_settings.payment_method_types`, `Subscription.payment_settings.payment_method_types`, `SubscriptionCreateParams.payment_settings.payment_method_types`, and `SubscriptionUpdateParams.payment_settings.payment_method_types`
* Add support for `transaction_id` on `PaymentAttemptRecord.payment_method_details.cashapp` and `PaymentRecord.payment_method_details.cashapp`
* Add support for `amount_details` on `PaymentIntentCaptureParams`, `PaymentIntentConfirmParams`, `PaymentIntentCreateParams`, `PaymentIntentIncrementAuthorizationParams`, and `PaymentIntentUpdateParams`
* Add support for `payment_details` on `PaymentIntentIncrementAuthorizationParams`
* Add support for `storer` on `V2.Core.Account.identity.attestations.terms_of_service`, `V2.Core.AccountCreateParams.identity.attestations.terms_of_service`, and `V2.Core.AccountUpdateParams.identity.attestations.terms_of_service`
* Add support for `collection_options` on `V2.Core.AccountLink.use_case.account_onboarding`, `V2.Core.AccountLink.use_case.account_update`, `V2.Core.AccountLinkCreateParams.use_case.account_onboarding`, and `V2.Core.AccountLinkCreateParams.use_case.account_update`
* Change type of `V2.Core.AccountLink.use_case.account_onboarding.configurations`, `V2.Core.AccountLink.use_case.account_update.configurations`, `V2.Core.AccountLinkCreateParams.use_case.account_onboarding.configurations`, and `V2.Core.AccountLinkCreateParams.use_case.account_update.configurations` from `literal('recipient')` to `enum('customer'|'merchant'|'recipient'|'storer')`
* Add support for `bank_account_type` on `V2.MoneyManagement.PayoutMethod.bank_account`
* Add support for thin event `V2CoreAccountLinkReturnedEvent`
* Add support for thin event `V2MoneyManagementPayoutMethodUpdatedEvent` with related object `V2.MoneyManagement.PayoutMethod`
* Remove support for thin event `V2CoreAccountLinkCompletedEvent`
* Remove support for thin event `V2OffSessionPaymentRequiresCaptureEvent` with related object `V2.Payments.OffSessionPayment`
