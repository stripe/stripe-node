---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/2807
is_breaking: true
is_stripe_api_change: true
released_in_version: 22.7.0-beta.1
---

* Add support for new resources `V2.Core.ApprovalRequest`, `V2.Signals.AccountActivity`, `V2.Signals.AccountEvaluation`, and `V2.Signals.AccountSignal`
* Add support for `list` and `retrieve` methods on resource `V2.Signals.AccountSignal`
* Add support for `create` and `retrieve` methods on resource `V2.Signals.AccountEvaluation`
* Add support for `create`, `del`, and `retrieve` methods on resource `V2.Signals.AccountActivity`
* Add support for `cancel`, `list`, `retrieve`, and `update` methods on resource `V2.Core.ApprovalRequest`
* Add support for `disable` method on resource `V2.MoneyManagement.PayoutMethod`
* Add support for `disable_stripe_user_authentication` on `AccountSessionCreateParams.components.payment_method_settings.features`
* ⚠️ Remove support for `payment_method_types` on `PaymentIntentConfirmParams`, `PaymentIntentCreateParams`, `PaymentIntentUpdateParams`, `SetupIntentCreateParams`, and `SetupIntentUpdateParams`
* ⚠️ Change type of `ProductCatalog.TrialOffer.end_behavior.transition.price` and `ProductCatalog.TrialOffer.price` from `Price` to `deletable($Price)`
* Add support for `billie` on `QuotePreviewInvoice.payment_settings.payment_method_options`
* Add support for new value `billie` on enum `QuotePreviewInvoice.payment_settings.payment_method_types`
* Add support for `payout_methods` on `V2.Core.Account.defaults` and `V2.Core.AccountUpdateParams.defaults`
* Add support for `restricted` on `V2.Core.Vault.GbBankAccount` and `V2.Core.Vault.UsBankAccount`
* Add support for `enabled_delivery_schemes` on `V2.MoneyManagement.PayoutMethod.bank_account`
* ⚠️ Remove support for `enabled_delivery_options` on `V2.MoneyManagement.PayoutMethod.bank_account`
* ⚠️ Add support for new value `disabled` on enum `V2.MoneyManagement.PayoutMethod.usage_status.payments`
* ⚠️ Add support for new value `disabled` on enum `V2.MoneyManagement.PayoutMethod.usage_status.transfers`
* Add support for new value `disabled` on enum `V2.MoneyManagement.PayoutMethodListParams.usage_status.payments`
* Add support for new value `disabled` on enum `V2.MoneyManagement.PayoutMethodListParams.usage_status.transfers`
* Add support for event notifications `V2CoreApprovalRequestApprovedEvent`, `V2CoreApprovalRequestCanceledEvent`, `V2CoreApprovalRequestCreatedEvent`, `V2CoreApprovalRequestExpiredEvent`, `V2CoreApprovalRequestFailedEvent`, `V2CoreApprovalRequestRejectedEvent`, and `V2CoreApprovalRequestSucceededEvent` with related object `V2.Core.ApprovalRequest`
* Add support for event notification `V2SignalsAccountEvaluationCompleteEvent` with related object `V2.Signals.AccountEvaluation`
* Add support for error codes `authentication_failure`, `capability_not_active`, `expired_payment_method`, `incorrect_postal_code`, `invalid_canceled_subscription_fields`, and `payment_method_restricted` on `QuotePreviewInvoice.last_finalization_error`
* Add support for error code `default_payout_method_cannot_be_disabled` on `CannotProceedError`
