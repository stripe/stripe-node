---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2710
is_breaking: true
is_stripe_api_change: true
released_in_version: 22.2.0
---

* Add support for new resource `V2.Commerce.ProductCatalogImport`
* Add support for `create` and `retrieve` methods on resource `V2.Commerce.ProductCatalogImport`
* Add support for `bizum_payments` and `scalapay_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
* Add support for `automatic_transfer_rules_by_currency` on `BalanceSettingUpdateParams.payments.payouts` and `BalanceSettings.payments.payouts`
* Add support for `start_of_day` on `BalanceSettingUpdateParams.payments.settlement_timing` and `BalanceSettings.payments.settlement_timing`
* Add support for `description` on `ChargeCreateParams.transfer_data`, `PaymentIntent.transfer_data`, `PaymentIntentCreateParams.transfer_data`, and `PaymentIntentUpdateParams.transfer_data`
* Add support for `bizum` on `Charge.payment_method_details`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `PaymentAttemptRecord.payment_method_details`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, `PaymentMethodConfiguration`, `PaymentMethodCreateParams`, `PaymentMethod`, `PaymentRecord.payment_method_details`, `SetupIntent.payment_method_options`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentConfirmParams.payment_method_options`, `SetupIntentCreateParams.payment_method_data`, `SetupIntentCreateParams.payment_method_options`, `SetupIntentUpdateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_options`
* Add support for `scalapay` on `Charge.payment_method_details`, `Checkout.Session.payment_method_options`, `Checkout.SessionCreateParams.payment_method_options`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `PaymentAttemptRecord.payment_method_details`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, `PaymentMethodConfiguration`, `PaymentMethodCreateParams`, `PaymentMethod`, `PaymentRecord.payment_method_details`, `Refund.destination_details`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
* Add support for `mandate` on `Charge.payment_method_details.twint`, `PaymentAttemptRecord.payment_method_details.twint`, and `PaymentRecord.payment_method_details.twint`
* Add support for new values `bizum` and `scalapay` on enums `Checkout.SessionCreateParams.excluded_payment_method_types`, `PaymentIntentConfirmParams.excluded_payment_method_types`, `PaymentIntentCreateParams.excluded_payment_method_types`, `PaymentIntentUpdateParams.excluded_payment_method_types`, `SetupIntentCreateParams.excluded_payment_method_types`, and `SetupIntentUpdateParams.excluded_payment_method_types`
* Change type of `Checkout.SessionCreateParams.payment_method_options.twint.setup_future_usage`, `PaymentIntentConfirmParams.payment_method_options.twint.setup_future_usage`, `PaymentIntentCreateParams.payment_method_options.twint.setup_future_usage`, and `PaymentIntentUpdateParams.payment_method_options.twint.setup_future_usage` from `literal('none')` to `enum('none'|'off_session')`
* Add support for new values `bizum` and `scalapay` on enum `Checkout.SessionCreateParams.payment_method_types`
* ⚠️ Change type of `Checkout.Session.payment_method_options.twint.setup_future_usage` and `PaymentIntent.payment_method_options.twint.setup_future_usage` from `literal('none')` to `enum('none'|'off_session')`
* Add support for new values `bizum` and `scalapay` on enums `ConfirmationTokenCreateParams.testHelpers.payment_method_data.type`, `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
* ⚠️ Add support for new values `bizum` and `scalapay` on enums `ConfirmationToken.payment_method_preview.type` and `PaymentMethod.type`
* Add support for new values `bizum` and `scalapay` on enums `CustomerListPaymentMethodsParams.type`, `PaymentMethodCreateParams.type`, and `PaymentMethodListParams.type`
* Add support for `credited_items` on `InvoiceItem.proration_details`
* Add support for new value `twint` on enums `InvoiceCreateParams.payment_settings.payment_method_types`, `InvoiceUpdateParams.payment_settings.payment_method_types`, `SubscriptionCreateParams.payment_settings.payment_method_types`, and `SubscriptionUpdateParams.payment_settings.payment_method_types`
* Add support for `discountable` on `InvoiceCreatePreviewParams.schedule_details.phases[].add_invoice_items[]`, `SubscriptionCreateParams.add_invoice_items[]`, `SubscriptionSchedule.phases[].add_invoice_items[]`, `SubscriptionScheduleCreateParams.phases[].add_invoice_items[]`, `SubscriptionScheduleUpdateParams.phases[].add_invoice_items[]`, and `SubscriptionUpdateParams.add_invoice_items[]`
* Add support for `billing_schedules` on `InvoiceCreatePreviewParams.subscription_details`, `SubscriptionCreateParams`, `SubscriptionUpdateParams`, and `Subscription`
* Add support for new value `max_billed_until` on enums `InvoiceCreatePreviewParams.subscription_details.cancel_at`, `SubscriptionCreateParams.cancel_at`, and `SubscriptionUpdateParams.cancel_at`
* Add support for `amount_paid_off_stripe` on `Invoice`
* ⚠️ Add support for new value `twint` on enums `Invoice.payment_settings.payment_method_types` and `Subscription.payment_settings.payment_method_types`
* Add support for `twint` on `Mandate.payment_method_details` and `SetupAttempt.payment_method_details`
* Add support for `metadata` on `PaymentIntent.transfer_data`, `PaymentIntentCreateParams.transfer_data`, `PaymentIntentUpdateParams.transfer_data`, and `Subscription.pending_update`
* Add support for `payment_data` on `PaymentIntent.transfer_data`, `PaymentIntentCreateParams.transfer_data`, and `PaymentIntentUpdateParams.transfer_data`
* ⚠️ Add support for new values `bizum` and `scalapay` on enums `PaymentIntent.excluded_payment_method_types` and `SetupIntent.excluded_payment_method_types`
* Add support for `blik_authorize` on `PaymentIntent.next_action` and `SetupIntent.next_action`
* Add support for `payment_method_options` on `PaymentLinkCreateParams`, `PaymentLinkUpdateParams`, and `PaymentLink`
* Add support for new value `bizum` on enums `PaymentLinkCreateParams.payment_method_types` and `PaymentLinkUpdateParams.payment_method_types`
* ⚠️ Add support for new value `bizum` on enum `PaymentLink.payment_method_types`
* Add support for `active` on `PaymentMethodConfigurationListParams`
* Add support for `billed_until` on `SubscriptionItem`
* Add support for `discount` and `discounts` on `Subscription.pending_update`
* Add support for `verifone_m425`, `verifone_p630`, `verifone_ux700`, and `verifone_v660p` on `Terminal.ConfigurationCreateParams`, `Terminal.ConfigurationUpdateParams`, and `Terminal.Configuration`
* Add support for new values `simulated_verifone_m425`, `simulated_verifone_p630`, `simulated_verifone_ux700`, `simulated_verifone_v660p`, `verifone_m425`, `verifone_p630`, `verifone_ux700`, and `verifone_v660p` on enum `Terminal.ReaderListParams.device_type`
* Add support for `api_error` and `print_content` on `Terminal.Reader.action`
* ⚠️ Add support for new value `print_content` on enum `Terminal.Reader.action.type`
* ⚠️ Add support for new values `simulated_verifone_m425`, `simulated_verifone_p630`, `simulated_verifone_ux700`, `simulated_verifone_v660p`, `verifone_m425`, `verifone_p630`, `verifone_ux700`, and `verifone_v660p` on enum `Terminal.Reader.device_type`
* Add support for `customer` on `TestHelpers.TestClockCreateParams`
* Add support for new value `2026-05-27.dahlia` on enum `WebhookEndpointCreateParams.api_version`
* Add support for `signer` on `V2.Core.Account.identity.business_details.documents.proof_of_registration`, `V2.Core.Account.identity.business_details.documents.proof_of_ultimate_beneficial_ownership`, `V2.Core.AccountCreateParams.identity.business_details.documents.proof_of_registration`, `V2.Core.AccountCreateParams.identity.business_details.documents.proof_of_ultimate_beneficial_ownership`, `V2.Core.AccountTokenCreateParams.identity.business_details.documents.proof_of_registration`, `V2.Core.AccountTokenCreateParams.identity.business_details.documents.proof_of_ultimate_beneficial_ownership`, `V2.Core.AccountUpdateParams.identity.business_details.documents.proof_of_registration`, and `V2.Core.AccountUpdateParams.identity.business_details.documents.proof_of_ultimate_beneficial_ownership`
* Add support for `azure_event_grid` on `V2.Core.EventDestinationCreateParams` and `V2.Core.EventDestination`
* ⚠️ Add support for new value `no_azure_partner_topic_exists` on enum `V2.Core.EventDestination.status_details.disabled.reason`
* ⚠️ Add support for new value `azure_event_grid` on enum `V2.Core.EventDestination.type`
* Add support for new value `azure_event_grid` on enum `V2.Core.EventDestinationCreateParams.type`
* ⚠️ Add support for new value `meter_event_value_too_many_digits` on enums `EventsV1BillingMeterErrorReportTriggeredEvent.reason.error_types[].code` and `EventsV1BillingMeterNoMeterFoundEvent.reason.error_types[].code`
* Add support for event notifications `V2CommerceProductCatalogImportsFailedEvent`, `V2CommerceProductCatalogImportsProcessingEvent`, `V2CommerceProductCatalogImportsSucceededEvent`, and `V2CommerceProductCatalogImportsSucceededWithErrorsEvent` with related object `V2.Commerce.ProductCatalogImport`
* Add support for error codes `payment_method_microdeposit_processing_error` and `siret_invalid` on `Invoice.last_finalization_error`, `PaymentIntent.last_payment_error`, `SetupAttempt.setup_error`, `SetupIntent.last_setup_error`, and `StripeError`
