---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/2216
is_stripe_api_change: true
released_in_version: 17.4.0-beta.1
---

* Add support for `trigger_action` method on resource `PaymentIntent`
* Add support for `id_bank_transfer_payments_bca` and `id_bank_transfer_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
* Add support for `bank_bca_onboarding` on `Account.settings`, `AccountCreateParams.settings`, and `AccountUpdateParams.settings`
* Add support for `send_money` on `AccountSessionCreateParams.components.recipients.features`
* Remove support for value `payout_statement_descriptor_profanity` from enums `Invoice.last_finalization_error.code`, `PaymentIntent.last_payment_error.code`, `SetupAttempt.setup_error.code`, `SetupIntent.last_setup_error.code`, and `StripeError.code`
* Add support for `id_bank_transfer` on `Charge.payment_method_details`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `Invoice.payment_settings.payment_method_options`, `InvoiceCreateParams.payment_settings.payment_method_options`, `InvoiceUpdateParams.payment_settings.payment_method_options`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, `PaymentMethodConfiguration`, `PaymentMethodCreateParams`, `PaymentMethod`, `Refund.destination_details`, `SetupAttempt.payment_method_details`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, `SetupIntentUpdateParams.payment_method_data`, `Subscription.payment_settings.payment_method_options`, `SubscriptionCreateParams.payment_settings.payment_method_options`, and `SubscriptionUpdateParams.payment_settings.payment_method_options`
* Change `Dispute.enhanced_eligibility_types`, `Dispute.evidence.enhanced_evidence`, and `Dispute.evidence_details.enhanced_eligibility` to be required
* Add support for `gopay`, `qris`, and `shopeepay` on `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, and `PaymentMethodConfiguration`
