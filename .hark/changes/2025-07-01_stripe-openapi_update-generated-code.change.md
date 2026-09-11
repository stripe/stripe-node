---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/2348
is_stripe_api_change: true
released_in_version: 18.3.0
---

* Add support for `migrate` method on resource `Subscription`
* Add support for `collect_payment_method` and `confirm_payment_intent` methods on resource `Terminal.Reader`
* Add support for `crypto_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
* Add support for `proof_of_address` on `AccountCreateParams.documents` and `AccountUpdateParams.documents`
* Add support for `monthly_payout_days` and `weekly_payout_days` on `Account.settings.payouts.schedule`, `AccountCreateParams.settings.payouts.schedule`, and `AccountUpdateParams.settings.payouts.schedule`
* Change `Account.settings.invoices.hosted_payment_method_save` to be required
* Add support for `crypto` on `Charge.payment_method_details`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, `PaymentMethod`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
* Change type of `Charge.payment_method_details.card.installments.plan.type`, `ConfirmationToken.payment_method_options.card.installments.plan.type`, `ConfirmationTokenCreateParams.testHelpers.payment_method_options.card.installments.plan.type`, `InvoiceCreateParams.payment_settings.payment_method_options.card.installments.plan.type`, `InvoiceUpdateParams.payment_settings.payment_method_options.card.installments.plan.type`, `PaymentIntent.payment_method_options.card.installments.available_plans[].type`, `PaymentIntent.payment_method_options.card.installments.plan.type`, `PaymentIntentConfirmParams.payment_method_options.card.installments.plan.type`, `PaymentIntentCreateParams.payment_method_options.card.installments.plan.type`, and `PaymentIntentUpdateParams.payment_method_options.card.installments.plan.type` from `literal('fixed_count')` to `enum('bonus'|'fixed_count'|'revolving')`
* Add support for new value `buut` on enums `Charge.payment_method_details.ideal.bank`, `ConfirmationToken.payment_method_preview.ideal.bank`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data.ideal.bank`, `PaymentIntentConfirmParams.payment_method_data.ideal.bank`, `PaymentIntentCreateParams.payment_method_data.ideal.bank`, `PaymentIntentUpdateParams.payment_method_data.ideal.bank`, `PaymentMethod.ideal.bank`, `PaymentMethodCreateParams.ideal.bank`, `SetupAttempt.payment_method_details.ideal.bank`, `SetupIntentConfirmParams.payment_method_data.ideal.bank`, `SetupIntentCreateParams.payment_method_data.ideal.bank`, and `SetupIntentUpdateParams.payment_method_data.ideal.bank`
* Add support for new value `BUUTNL2A` on enums `Charge.payment_method_details.ideal.bic`, `ConfirmationToken.payment_method_preview.ideal.bic`, `PaymentMethod.ideal.bic`, and `SetupAttempt.payment_method_details.ideal.bic`
* Add support for `subscriptions` on `Checkout.SessionCreateParams.payment_method_options.klarna`, `PaymentIntentConfirmParams.payment_method_options.klarna`, `PaymentIntentCreateParams.payment_method_options.klarna`, and `PaymentIntentUpdateParams.payment_method_options.klarna`
* Add support for new value `crypto` on enum `Checkout.SessionCreateParams.payment_method_types`
* Add support for `billing_mode` on `Checkout.SessionCreateParams.subscription_data`, `InvoiceCreatePreviewParams.schedule_details`, `InvoiceCreatePreviewParams.subscription_details`, `Quote.subscription_data`, `QuoteCreateParams.subscription_data`, `SubscriptionCreateParams`, `SubscriptionScheduleCreateParams`, `SubscriptionSchedule`, and `Subscription`
* Add support for new value `crypto` on enums `ConfirmationTokenCreateParams.testHelpers.payment_method_data.type`, `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
* Add support for new value `crypto` on enums `ConfirmationToken.payment_method_preview.type` and `PaymentMethod.type`
* Add support for new value `crypto` on enums `CustomerListPaymentMethodsParams.type`, `PaymentMethodCreateParams.type`, and `PaymentMethodListParams.type`
* Change type of `Dispute.enhanced_eligibility_types` from `literal('visa_compelling_evidence_3')` to `enum('visa_compelling_evidence_3'|'visa_compliance')`
* Add support for new value `compliance` on enum `Dispute.payment_method_details.card.case_type`
* Add support for new value `terminal.reader.action_updated` on enum `Event.type`
* Add support for `related_person` on `Identity.VerificationSessionCreateParams` and `Identity.VerificationSession`
* Add support for `matching` on `Identity.VerificationSession.options`
* Add support for new value `crypto` on enums `Invoice.payment_settings.payment_method_types`, `InvoiceCreateParams.payment_settings.payment_method_types`, `InvoiceUpdateParams.payment_settings.payment_method_types`, `Subscription.payment_settings.payment_method_types`, `SubscriptionCreateParams.payment_settings.payment_method_types`, and `SubscriptionUpdateParams.payment_settings.payment_method_types`
* Add support for `klarna` on `Mandate.payment_method_details`, `SetupIntent.payment_method_options`, `SetupIntentConfirmParams.payment_method_options`, `SetupIntentCreateParams.payment_method_options`, and `SetupIntentUpdateParams.payment_method_options`
* Add support for `on_demand` on `PaymentIntentConfirmParams.payment_method_options.klarna`, `PaymentIntentCreateParams.payment_method_options.klarna`, and `PaymentIntentUpdateParams.payment_method_options.klarna`
* Change type of `PaymentIntent.payment_method_options.klarna.setup_future_usage`, `PaymentIntentConfirmParams.payment_method_options.klarna.setup_future_usage`, `PaymentIntentCreateParams.payment_method_options.klarna.setup_future_usage`, and `PaymentIntentUpdateParams.payment_method_options.klarna.setup_future_usage` from `literal('none')` to `enum('none'|'off_session'|'on_session')`
* Add support for `ua` on `Tax.Registration.country_options` and `Tax.RegistrationCreateParams.country_options`
* Change type of `Terminal.LocationUpdateParams.display_name` from `string` to `emptyable(string)`
* Add support for `collect_payment_method` and `confirm_payment_intent` on `Terminal.Reader.action`
* Add support for new values `collect_payment_method` and `confirm_payment_intent` on enum `Terminal.Reader.action.type`
* Add support for `status` on `Treasury.FinancialAccountListParams`
* Add support for new value `terminal.reader.action_updated` on enums `WebhookEndpointCreateParams.enabled_events` and `WebhookEndpointUpdateParams.enabled_events`
* Add support for new value `2025-06-30.basil` on enum `WebhookEndpointCreateParams.api_version`
* Add support for snapshot event `TerminalReaderActionUpdatedEvent` with resource `Terminal.Reader`
