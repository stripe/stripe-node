---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2469
is_stripe_api_change: true
released_in_version: 19.2.0
---

* Add support for new resources `PaymentAttemptRecord`, `PaymentIntentAmountDetailsLineItem`, and `PaymentRecord`
* Add support for `list` and `retrieve` methods on resource `PaymentAttemptRecord`
* Add support for `report_payment_attempt_canceled`, `report_payment_attempt_failed`, `report_payment_attempt_guaranteed`, `report_payment_attempt_informational`, `report_payment_attempt`, `report_payment`, `report_refund`, and `retrieve` methods on resource `PaymentRecord`
* Add support for `list` method on resource `PaymentIntentAmountDetailsLineItem`
* Add support for `representative_declaration` on `Account.company`, `AccountCreateParams.company`, `AccountUpdateParams.company`, and `TokenCreateParams.account.company`
* Change `Billing.CreditGrantCreateParams.category` to be optional
* Add support for `payment_method_configuration` on `BillingPortal.ConfigurationCreateParams.features.payment_method_update` and `BillingPortal.ConfigurationUpdateParams.features.payment_method_update`
* Add support for new value `solana` on enum `Charge.payment_method_details.crypto.network`
* Add support for new value `mb_way` on enum `Checkout.SessionCreateParams.excluded_payment_method_types`
* Add support for `twint` on `Checkout.Session.payment_method_options` and `Checkout.SessionCreateParams.payment_method_options`
* Add support for new value `mb_way` on enum `Checkout.SessionCreateParams.payment_method_types`
* Add support for new value `custom` on enums `ConfirmationToken.payment_method_preview.type` and `PaymentMethod.type`
* Add support for `payment_record_refund` and `type` on `CreditNote.refunds[]`, `CreditNoteCreateParams.refunds[]`, `CreditNotePreviewLinesParams.refunds[]`, and `CreditNotePreviewParams.refunds[]`
* Add support for `customer_sheet` and `mobile_payment_element` on `CustomerSession.components` and `CustomerSessionCreateParams.components`
* Add support for new value `custom` on enums `CustomerListPaymentMethodsParams.type`, `PaymentMethodCreateParams.type`, and `PaymentMethodListParams.type`
* Add support for `provider` on `Customer.tax`
* Add support for new values `balance_settings.updated` and `invoice.payment_attempt_required` on enum `Event.type`
* Add support for new value `platform_terms_of_service` on enums `File.purpose` and `FileListParams.purpose`
* Add support for new value `platform_terms_of_service` on enum `FileCreateParams.purpose`
* Add support for `payment_record` on `InvoiceAttachPaymentParams`, `InvoicePayment.payment`, and `InvoicePaymentListParams.payment`
* Change type of `InvoicePaymentListParams.payment.type` from `literal('payment_intent')` to `enum('payment_intent'|'payment_record')`
* Add support for new value `custom` on enums `Invoice.payment_settings.payment_method_types`, `InvoiceCreateParams.payment_settings.payment_method_types`, `InvoiceUpdateParams.payment_settings.payment_method_types`, `Subscription.payment_settings.payment_method_types`, `SubscriptionCreateParams.payment_settings.payment_method_types`, and `SubscriptionUpdateParams.payment_settings.payment_method_types`
* Add support for `amount_details` on `PaymentIntentCaptureParams`, `PaymentIntentConfirmParams`, `PaymentIntentCreateParams`, `PaymentIntentIncrementAuthorizationParams`, and `PaymentIntentUpdateParams`
* Add support for `payment_details` on `PaymentIntentCaptureParams`, `PaymentIntentConfirmParams`, `PaymentIntentCreateParams`, `PaymentIntentIncrementAuthorizationParams`, `PaymentIntentUpdateParams`, and `PaymentIntent`
* Add support for `discount_amount`, `line_items`, `shipping`, and `tax` on `PaymentIntent.amount_details`
* Add support for `name_collection` on `PaymentLinkCreateParams`, `PaymentLinkUpdateParams`, and `PaymentLink`
* Add support for new value `mb_way` on enums `PaymentLink.payment_method_types`, `PaymentLinkCreateParams.payment_method_types`, and `PaymentLinkUpdateParams.payment_method_types`
* Add support for `crypto` on `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, `PaymentMethodConfiguration`, and `Refund.destination_details`
* Add support for `mb_way` on `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, and `PaymentMethodConfiguration`
* Add support for `custom` on `PaymentMethodCreateParams` and `PaymentMethod`
* Add support for `excluded_payment_method_types` on `SetupIntentCreateParams`, `SetupIntentUpdateParams`, and `SetupIntent`
* Add support for `tw` on `Tax.Registration.country_options` and `Tax.RegistrationCreateParams.country_options`
* Add support for `gip` on `Terminal.Configuration.tipping`, `Terminal.ConfigurationCreateParams.tipping`, and `Terminal.ConfigurationUpdateParams.tipping`
* Add support for `last_seen_at` on `Terminal.Reader`
* Add support for new values `balance_settings.updated` and `invoice.payment_attempt_required` on enums `WebhookEndpointCreateParams.enabled_events` and `WebhookEndpointUpdateParams.enabled_events`
* Add support for new value `2025-10-29.clover` on enum `WebhookEndpointCreateParams.api_version`
* Add support for `gt`, `gte`, `lt`, `lte`, and `types` on `V2.Core.EventListParams`
* Change `V2.Core.EventListParams.object_id` to be optional
* Add support for snapshot event `BalanceSettingsUpdatedEvent` with resource `BalanceSettings`
* Add support for snapshot event `InvoicePaymentAttemptRequiredEvent` with resource `Invoice`
* Add support for error code `payment_intent_rate_limit_exceeded` on `Invoice.last_finalization_error`, `PaymentIntent.last_payment_error`, `SetupAttempt.setup_error`, `SetupIntent.last_setup_error`, and `StripeError`
