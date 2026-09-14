---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2581
is_stripe_api_change: true
released_in_version: 20.4.0
---

* Add support for new resources `Reserve.Hold`, `Reserve.Plan`, and `Reserve.Release`
* Add support for `location` and `reader` on `Charge.payment_method_details.card_present`, `Charge.payment_method_details.interac_present`, `ConfirmationToken.payment_method_preview.card.generated_from.payment_method_details.card_present`, `PaymentAttemptRecord.payment_method_details.card_present`, `PaymentAttemptRecord.payment_method_details.interac_present`, `PaymentMethod.card.generated_from.payment_method_details.card_present`, `PaymentRecord.payment_method_details.card_present`, and `PaymentRecord.payment_method_details.interac_present`
* Add support for new value `lk_vat` on enums `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, `Tax.Calculation.customer_details.tax_ids[].type`, `Tax.Transaction.customer_details.tax_ids[].type`, and `TaxId.type`
* Add support for new value `lk_vat` on enums `CustomerCreateParams.tax_id_data[].type`, `CustomerCreateTaxIdParams.type`, `InvoiceCreatePreviewParams.customer_details.tax_ids[].type`, `Tax.CalculationCreateParams.customer_details.tax_ids[].type`, and `TaxIdCreateParams.type`
* Add support for new values `reserve.hold.created`, `reserve.hold.updated`, `reserve.plan.created`, `reserve.plan.disabled`, `reserve.plan.expired`, `reserve.plan.updated`, and `reserve.release.created` on enum `Event.type`
* Add support for new values `terminal_wifi_certificate` and `terminal_wifi_private_key` on enums `File.purpose` and `FileListParams.purpose`
* Add support for new values `terminal_wifi_certificate` and `terminal_wifi_private_key` on enum `FileCreateParams.purpose`
* Add support for new value `pay_by_bank` on enums `Invoice.payment_settings.payment_method_types`, `InvoiceCreateParams.payment_settings.payment_method_types`, `InvoiceUpdateParams.payment_settings.payment_method_types`, `Subscription.payment_settings.payment_method_types`, `SubscriptionCreateParams.payment_settings.payment_method_types`, and `SubscriptionUpdateParams.payment_settings.payment_method_types`
* Add support for `display_name` and `service_user_number` on `Mandate.payment_method_details.bacs_debit`
* Change type of `PaymentAttemptRecord.payment_method_details.boleto.tax_id` and `PaymentRecord.payment_method_details.boleto.tax_id` from `string` to `string | null`
* Change type of `PaymentAttemptRecord.payment_method_details.us_bank_account.expected_debit_date` and `PaymentRecord.payment_method_details.us_bank_account.expected_debit_date` from `string | null` to `string`
* Add support for `transaction_purpose` on `PaymentIntent.payment_method_options.us_bank_account`, `PaymentIntentConfirmParams.payment_method_options.us_bank_account`, `PaymentIntentCreateParams.payment_method_options.us_bank_account`, and `PaymentIntentUpdateParams.payment_method_options.us_bank_account`
* Add support for `optional_items` on `PaymentLinkUpdateParams`
* Remove support for unused `card_issuer_decline` on `Radar.PaymentEvaluation.insights`
* Add support for `payment_behavior` on `SubscriptionItemDeleteParams`
* Add support for `lk` on `Tax.Registration.country_options` and `Tax.RegistrationCreateParams.country_options`
* Add support for `cellular` and `stripe_s710` on `Terminal.ConfigurationCreateParams`, `Terminal.ConfigurationUpdateParams`, and `Terminal.Configuration`
* Add support for new values `simulated_stripe_s710` and `stripe_s710` on enums `Terminal.Reader.device_type` and `Terminal.ReaderListParams.device_type`
* Add support for new values `reserve.hold.created`, `reserve.hold.updated`, `reserve.plan.created`, `reserve.plan.disabled`, `reserve.plan.expired`, `reserve.plan.updated`, and `reserve.release.created` on enums `WebhookEndpointCreateParams.enabled_events` and `WebhookEndpointUpdateParams.enabled_events`
* Add support for new value `2026-02-25.clover` on enum `WebhookEndpointCreateParams.api_version`
* Add support for snapshot events `ReserveHoldCreatedEvent` and `ReserveHoldUpdatedEvent` with resource `Reserve.Hold`
* Add support for snapshot events `ReservePlanCreatedEvent`, `ReservePlanDisabledEvent`, `ReservePlanExpiredEvent`, and `ReservePlanUpdatedEvent` with resource `Reserve.Plan`
* Add support for snapshot event `ReserveReleaseCreatedEvent` with resource `Reserve.Release`
* Add support for error codes `storer_capability_missing` and `storer_capability_not_active` on `Invoice.last_finalization_error`, `PaymentIntent.last_payment_error`, `SetupAttempt.setup_error`, `SetupIntent.last_setup_error`, and `StripeError`
