---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/2147
is_stripe_api_change: true
released_in_version: 16.7.0
---

* Add support for `activate`, `archive`, `create`, `deactivate`, `list`, and `retrieve` methods on resource `Billing.Alert`
* Add support for `retrieve` method on resource `Tax.Calculation`
* Add support for new value `invalid_mandate_reference_prefix_format` on enums `Invoice.last_finalization_error.code`, `PaymentIntent.last_payment_error.code`, `SetupAttempt.setup_error.code`, `SetupIntent.last_setup_error.code`, and `StripeError.code`
* Add support for `type` on `Charge.payment_method_details.card_present.offline`, `ConfirmationToken.payment_method_preview.card.generated_from.payment_method_details.card_present.offline`, `PaymentMethod.card.generated_from.payment_method_details.card_present.offline`, and `SetupAttempt.payment_method_details.card_present.offline`
* Add support for `offline` on `ConfirmationToken.payment_method_preview.card_present` and `PaymentMethod.card_present`
* Add support for `related_customer` on `Identity.VerificationSessionCreateParams`, `Identity.VerificationSessionListParams`, and `Identity.VerificationSession`
* Change `InvoiceCreateParams.payment_settings.payment_method_options.card.installments.plan.count`, `InvoiceCreateParams.payment_settings.payment_method_options.card.installments.plan.interval`, `InvoiceUpdateParams.payment_settings.payment_method_options.card.installments.plan.count`, `InvoiceUpdateParams.payment_settings.payment_method_options.card.installments.plan.interval`, `PaymentIntentConfirmParams.payment_method_options.card.installments.plan.count`, `PaymentIntentConfirmParams.payment_method_options.card.installments.plan.interval`, `PaymentIntentCreateParams.payment_method_options.card.installments.plan.count`, `PaymentIntentCreateParams.payment_method_options.card.installments.plan.interval`, `PaymentIntentUpdateParams.payment_method_options.card.installments.plan.count`, and `PaymentIntentUpdateParams.payment_method_options.card.installments.plan.interval` to be optional
* Add support for new value `girocard` on enums `PaymentIntent.payment_method_options.card.network`, `PaymentIntentConfirmParams.payment_method_options.card.network`, `PaymentIntentCreateParams.payment_method_options.card.network`, `PaymentIntentUpdateParams.payment_method_options.card.network`, `SetupIntent.payment_method_options.card.network`, `SetupIntentConfirmParams.payment_method_options.card.network`, `SetupIntentCreateParams.payment_method_options.card.network`, `SetupIntentUpdateParams.payment_method_options.card.network`, `Subscription.payment_settings.payment_method_options.card.network`, `SubscriptionCreateParams.payment_settings.payment_method_options.card.network`, and `SubscriptionUpdateParams.payment_settings.payment_method_options.card.network`
* Add support for new value `financial_addresses.aba.forwarding` on enums `Treasury.FinancialAccount.active_features[]`, `Treasury.FinancialAccount.pending_features[]`, and `Treasury.FinancialAccount.restricted_features[]`
