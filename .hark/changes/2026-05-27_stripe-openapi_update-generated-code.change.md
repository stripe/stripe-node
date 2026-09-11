---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/2720
is_breaking: true
is_stripe_api_change: true
released_in_version: 22.3.0-beta.1
---

* Add support for `pause` method on resource `Subscription`
* Add support for `retrieve` method on resource `V2.Iam.ActivityLog`
* ⚠️ Add support for new value `mastercard` on enum `Issuing.Settlement.network`
* ⚠️ Change type of `ProductCatalog.TrialOffer.end_behavior.transition.price` from `string` to `expandable(Price)`
* Add support for `amount_paid_off_stripe` on `QuotePreviewInvoice`
* ⚠️ Add support for new value `twint` on enum `QuotePreviewInvoice.payment_settings.payment_method_types`
* Add support for `discountable` on `QuotePreviewSubscriptionSchedule.phases[].add_invoice_items[]`
* Add support for `bizum` and `scalapay` on `SharedPayment.GrantedToken.payment_method_details`
* ⚠️ Add support for new values `bizum` and `scalapay` on enum `SharedPayment.GrantedToken.payment_method_details.type`
* Change `SharedPayment.GrantedToken.agent_details` to be required
* Change type of `SubscriptionItem.billed_until` from `DateTime | null` to `DateTime`
* Add support for `payment_behavior` on `SubscriptionResumeParams`
* Add support for `status_details` on `Subscription`
* Change `Subscription.billing_schedules` to be required
* ⚠️ Add support for new values `ao_bank_account`, `az_bank_account`, `bd_bank_account`, `bo_bank_account`, `br_bank_account`, `cl_bank_account`, `ga_bank_account`, `gh_bank_account`, `gi_bank_account`, `hn_bank_account`, `kr_bank_account`, `kz_bank_account`, `la_bank_account`, `ne_bank_account`, `ng_bank_account`, `ni_bank_account`, `py_bank_account`, `sa_bank_account`, `sm_bank_account`, and `uy_bank_account` on enum `V2.Core.Account.configuration.recipient.default_outbound_destination.type`
* ⚠️ Change type of `V2.MoneyManagement.ReceivedCredit.bank_transfer.gb_bank_account.network` from `literal('fps')` to `enum('chaps'|'fps')`
* Add support for new value `chaps` on enum `V2.FinancialAddressCreditSimulationCreditParams.network`
* Add support for error codes `payment_method_microdeposit_processing_error` and `siret_invalid` on `QuotePreviewInvoice.last_finalization_error`
