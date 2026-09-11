---
title: Update generated code for private-preview
pr_link: https://github.com/stripe/stripe-node/pull/2810
is_breaking: true
is_stripe_api_change: true
released_in_version: 22.6.0-alpha.2
---

* Add support for new resources `Billing.FeedbackOption` and `PaymentPlan`
* ⚠️ Remove support for resource `Billing.FeedbackOptions`
* Add support for `create`, `list`, `retrieve`, and `update` methods on resource `PaymentPlan`
* Add support for `update` method on resource `V2.MoneyManagement.Transaction`
* Add support for `wechat_pay_payments` on `Account.settings`, `AccountCreateParams.settings`, and `AccountUpdateParams.settings`
* ⚠️ Change type of `BillingPortal.Configuration.features.subscription_cancel.cancellation_reason.feedback_options` from `Billing.FeedbackOptions` to `Billing.FeedbackOption`
* Change `BillingPortal.Configuration.features.subscription_cancel.cancellation_reason.feedback_options` to be required
* Add support for `subscription_pause` on `BillingPortal.Session.flow`
* Add support for new value `subscription_pause` on enum `BillingPortal.Session.flow.type`
* Add support for new value `usdt` on enums `Crypto.OnrampSession.transaction_details.destination_currency`, `Crypto.OnrampSessionCreateParams.destination_currency`, and `Crypto.OnrampSessionListParams.destination_currency`
* Add support for new value `usdt` on enums `Crypto.OnrampSession.transaction_details.destination_currencies` and `Crypto.OnrampSessionCreateParams.destination_currencies`
* Add support for `active_entitlements` on `CustomerSession.components`
* Add support for `shared_payment_issued_token` on `DelegatedCheckout.RequestedSessionConfirmParams`
* Add support for new values `payment_plan.created`, `payment_plan.installment_due`, `payment_plan.installment_paid`, `payment_plan.installment_will_be_due`, and `payment_plan.updated` on enum `Event.type`
* Add support for `managed_payments` on `InvoiceCreateParams`, `InvoiceItemCreateParams`, `InvoiceItem`, `Invoice`, and `QuotePreviewInvoice`
* Add support for `payment_plan` on `Invoice`
* Add support for `estimated_fee_details` and `estimated_fee` on `Issuing.Authorization.pending_request.hold_amount_details` and `Issuing.Authorization.request_history[].hold_amount_details`
* ⚠️ Remove support for `cryptogram` on `PaymentAttemptRecord.payment_method_details.card.three_d_secure` and `PaymentRecord.payment_method_details.card.three_d_secure`
* ⚠️ Change type of `ProductCatalog.TrialOffer.end_behavior.transition.price` from `Price` to `deletable($Price)`
* ⚠️ Change type of `Subscription.cancellation_details.feedback_option` from `Billing.FeedbackOptions` to `Billing.FeedbackOption`
* Add support for `cancel_at_period_end` on `Subscription.pending_update`
* Change `Subscription.cancellation_details.feedback_option` to be required
* Add support for `igic` on `Tax.Registration.country_options.at`, `Tax.Registration.country_options.be`, `Tax.Registration.country_options.bg`, `Tax.Registration.country_options.cy`, `Tax.Registration.country_options.cz`, `Tax.Registration.country_options.de`, `Tax.Registration.country_options.dk`, `Tax.Registration.country_options.ee`, `Tax.Registration.country_options.es`, `Tax.Registration.country_options.fi`, `Tax.Registration.country_options.fr`, `Tax.Registration.country_options.gr`, `Tax.Registration.country_options.hr`, `Tax.Registration.country_options.hu`, `Tax.Registration.country_options.ie`, `Tax.Registration.country_options.it`, `Tax.Registration.country_options.lt`, `Tax.Registration.country_options.lu`, `Tax.Registration.country_options.lv`, `Tax.Registration.country_options.mt`, `Tax.Registration.country_options.nl`, `Tax.Registration.country_options.pl`, `Tax.Registration.country_options.pt`, `Tax.Registration.country_options.ro`, `Tax.Registration.country_options.se`, `Tax.Registration.country_options.si`, and `Tax.Registration.country_options.sk`
* Add support for `metadata` on `V2.Billing.Contract.pricing_lines.data[].pricing.price_details.pricing_overrides.data[]`, `V2.Billing.Contract.pricing_overrides.data[]`, `V2.Billing.ContractCreateParams.pricing_overrides[]`, `V2.Billing.ContractUpdateParams.pricing_line_actions[].update`, `V2.Billing.ContractUpdateParams.pricing_override_actions[].add`, `V2.Billing.ContractUpdateParams.pricing_override_actions[].update`, `V2.Billing.ContractUpdateParams`, and `V2.MoneyManagement.Transaction`
* Add support for `tax_amount` on `V2.MoneyManagement.OutboundPaymentQuote.estimated_fees[]`
* Add support for `payout_method_options` on `V2.MoneyManagement.OutboundPaymentQuote.to` and `V2.MoneyManagement.OutboundPaymentQuoteCreateParams.to`
* Change type of `V2.Billing.ContractUpdateParams.pricing_line_actions[].update.pricing.price_details.pricing_override_actions[].update.metadata` from `string` to `emptyable(string)`
* Add support for snapshot events `PaymentPlanCreatedEvent`, `PaymentPlanInstallmentDueEvent`, `PaymentPlanInstallmentPaidEvent`, `PaymentPlanInstallmentWillBeDueEvent`, and `PaymentPlanUpdatedEvent` with resource `PaymentPlan`
