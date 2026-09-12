---
title: Support for APIs in the new API version 2025-03-31.basil
pr_url: https://github.com/stripe/stripe-node/pull/2279
is_stripe_api_change: true
released_in_version: 18.0.0
---

This release changes the pinned API version to `2025-03-31.basil`.

### ⚠️ Breaking changes due to changes in the Stripe API

Please review details for the breaking changes and alternatives in the [Stripe API changelog](https://docs.stripe.com/changelog/basil) before upgrading.

* Remove support for resources `SubscriptionItemUsageRecordSummary` and `SubscriptionItemUsageRecord`
* Remove support for `listUpcomingLines` and `retrieveUpcoming` methods on resource `Invoice`
* Remove support for `createUsageRecord` and `listUsageRecordSummaries` methods on resource `SubscriptionItems`
* Remove support for `invoice` on `Charge` and `PaymentIntent`
* Remove support for `shipping_details` on `Checkout.Session`
* Remove support for `carrier`, `phone`, and `tracking_number` on `Checkout.Session.collected_information.shipping_details`. Make `name` and `address` required instead of optional.
* Remove support for `refund` on `CreditNoteCreateParams`, `CreditNoteListPreviewLineItemsParams`, `CreditNotePreviewParams`, and `CreditNote`
* Remove support for `tax_amounts` on `CreditNoteLineItem`, `CreditNote`, and `InvoiceLineItem`
* Remove support for `amount_excluding_tax` and `unit_amount_excluding_tax` on `CreditNoteLineItem` and `InvoiceLineItem`
* Remove support for `coupon` on `CustomerCreateParams`, `CustomerUpdateParams`, `InvoiceCreatePreviewParams.schedule_details.phases[]`, `InvoiceCreatePreviewParams`, `SubscriptionCreateParams`, `SubscriptionSchedule.phases[]`, `SubscriptionScheduleCreateParams.phases[]`, `SubscriptionScheduleUpdateParams.phases[]`, and `SubscriptionUpdateParams`
* Remove support for `promotion_code` on `CustomerCreateParams`, `CustomerUpdateParams`, `SubscriptionCreateParams`, and `SubscriptionUpdateParams`
* Remove support for `price` on `InvoiceAddLinesParams.lines[]`, `InvoiceItemCreateParams`, `InvoiceItemUpdateParams`, `InvoiceItem`, `InvoiceLineItemUpdateParams`, `InvoiceLineItem`, and `InvoiceUpdateLinesParams.lines[]. Use `pricing` instead.
* Remove support for `billing_thresholds` on `InvoiceCreatePreviewParams.schedule_details.phases[].items[]`, `InvoiceCreatePreviewParams.schedule_details.phases[]`, `InvoiceCreatePreviewParams.subscription_details.items[]`, `SubscriptionCreateParams.items[]`, `SubscriptionCreateParams`, `SubscriptionItemCreateParams`, `SubscriptionItemUpdateParams`, `SubscriptionItem`, `SubscriptionSchedule.default_settings`, `SubscriptionSchedule.phases[].items[]`, `SubscriptionSchedule.phases[]`, `SubscriptionScheduleCreateParams.default_settings`, `SubscriptionScheduleCreateParams.phases[].items[]`, `SubscriptionScheduleCreateParams.phases[]`, `SubscriptionScheduleUpdateParams.default_settings`, `SubscriptionScheduleUpdateParams.phases[].items[]`, `SubscriptionScheduleUpdateParams.phases[]`, `SubscriptionUpdateParams.items[]`, `SubscriptionUpdateParams`, and `Subscription`
* Remove support for `application_fee_amount`, `charge`, `paid_out_of_band`, `paid`, `payment_intent`, `quote`, `subscription`, `subscription_details`, `subscription_proration_date`, `tax`, `total_tax_amounts`, and `transfer_data` on `Invoice`
* Remove support for `discount` on `Invoice` and `Subscription`
* Remove support for `invoice_item`, `proration_details`, `proration`, `tax_rates`, and `type` on `InvoiceLineItem`
* Remove support for `plan` and `subscription_item` on `InvoiceItem` and `InvoiceLineItem`
* Remove support for `unit_amount` on `InvoiceItemCreateParams`, `InvoiceItemUpdateParams`, and `InvoiceItem`
* Remove support for `subscription` and `unit_amount_decimal` on `InvoiceItem`
* Remove support for `naver_pay` on `PaymentMethodUpdateParams`
* Remove support for `aggregate_usage` on `PlanCreateParams`, `Plan`, `Price.recurring`, and `PriceCreateParams.recurring`
* Remove support for `current_period_end` and `current_period_start` on `Subscription`
* `page` has been removed from all V2 list method params (e.g. `EventService.list()`); use the [auto paginator](https://github.com/stripe/stripe-node?tab=readme-ov-file#auto-pagination) or the `next_page_url` and `previous_page_url` fields instead ([more info](https://docs.stripe.com/api-v2-overview#list-pagination))

### Changes

* Change `Checkout.Session.collected_information` to be required
* Change `Checkout.Session.collected_information.shipping_details` to be required
* Change `Checkout.Session.collected_information.shipping_details.address` to be required
* Change `Checkout.Session.collected_information.shipping_details.name` to be required
* Change `PaymentIntentConfirmParams.payment_method_options.wechat_pay.client`, `PaymentIntentCreateParams.payment_method_options.wechat_pay.client`, and `PaymentIntentUpdateParams.payment_method_options.wechat_pay.client` to be optional
* Change `political_exposure` on resources `Person` and `Token` and params `Token.CreateParams` from string to enum("existing" | "none")

### Additions

* Add support for new resource `InvoicePayment`
* Add support for `list` and `retrieve` methods on resource `InvoicePayment`
* Add support for `billie_payments`, `nz_bank_account_becs_debit_payments`, and `satispay_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
* Add support for `hosted_payment_method_save` on `Account.settings.invoices` and `AccountUpdateParams.settings.invoices`
* Add support for `invoices` on `AccountCreateParams.settings`
* Add support for new values `information_missing`, `invalid_signator`, `verification_failed_authorizer_authority`, and `verification_rejected_ownership_exemption_reason` on enums `Account.future_requirements.errors[].code`, `Account.requirements.errors[].code`, `AccountCapability.future_requirements.errors[].code`, `AccountCapability.requirements.errors[].code`, `AccountPerson.future_requirements.errors[].code`, `AccountPerson.requirements.errors[].code`, `BankAccount.future_requirements.errors[].code`, and `BankAccount.requirements.errors[].code`
* Add support for new values `forwarding_api_retryable_upstream_error` and `setup_intent_mobile_wallet_unsupported` on enums `Invoice.last_finalization_error.code`, `PaymentIntent.last_payment_error.code`, `SetupAttempt.setup_error.code`, `SetupIntent.last_setup_error.code`, and `StripeError.code`
* Add support for new values `stripe_balance_payment_debit_reversal` and `stripe_balance_payment_debit` on enum `BalanceTransaction.type`
* Add support for new value `last` on enums `Billing.Meter.default_aggregation.formula` and `Billing.MeterCreateParams.default_aggregation.formula`
* Add support for `presentment_details` on `Charge`, `Checkout.Session`, `PaymentIntent`, and `Refund`
* Add support for `billie` and `satispay` on `Charge.payment_method_details`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `CustomerPaymentMethod`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, `PaymentMethodConfiguration`, `PaymentMethodCreateParams`, `PaymentMethod`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
* Add support for `nz_bank_account` on `Charge.payment_method_details`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `CustomerPaymentMethod`, `Mandate.payment_method_details`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, `PaymentMethodConfiguration`, `PaymentMethodCreateParams`, `PaymentMethod`, `SetupAttempt.payment_method_details`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
* Add support for `optional_items` on `Checkout.SessionCreateParams`, `Checkout.Session`, `PaymentLinkCreateParams`, and `PaymentLink`
* Add support for `permissions` on `Checkout.SessionCreateParams` and `Checkout.Session`
* Add support for new values `billie` and `satispay` on enum `Checkout.SessionCreateParams.payment_method_types`
* Add support for new value `custom` on enums `Checkout.Session.ui_mode` and `Checkout.SessionCreateParams.ui_mode`
* Add support for `shipping_options` on `Checkout.SessionUpdateParams`
* Add support for new values `billie`, `nz_bank_account`, and `satispay` on enums `ConfirmationTokenCreateParams.testHelpers.payment_method_data.type`, `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
* Add support for `buyer_id` on `ConfirmationToken.payment_method_preview.naver_pay`, `CustomerPaymentMethod.naver_pay`, and `PaymentMethod.naver_pay`
* Add support for new values `billie`, `nz_bank_account`, and `satispay` on enums `ConfirmationToken.payment_method_preview.type`, `CustomerPaymentMethod.type`, and `PaymentMethod.type`
* Add support for `refunds` on `CreditNoteCreateParams`, `CreditNoteListPreviewLineItemsParams`, `CreditNotePreviewParams`, and `CreditNote`
* Add support for `total_taxes` on `CreditNote` and `Invoice`
* Add support for `taxes` on `CreditNoteLineItem` and `InvoiceLineItem`
* Add support for `checkout_session` on `CustomerBalanceTransaction`
* Add support for new values `checkout_session_subscription_payment_canceled` and `checkout_session_subscription_payment` on enum `CustomerBalanceTransaction.type`
* Add support for new values `billie`, `nz_bank_account`, and `satispay` on enums `CustomerPaymentMethodListParams.type`, `PaymentMethodCreateParams.type`, and `PaymentMethodListParams.type`
* Add support for new value `invoice.overpaid` on enum `Event.type`
* Add support for new values `klarna` and `nz_bank_account` on enums `Invoice.payment_settings.payment_method_types`, `InvoiceCreateParams.payment_settings.payment_method_types`, `InvoiceUpdateParams.payment_settings.payment_method_types`, `Subscription.payment_settings.payment_method_types`, `SubscriptionCreateParams.payment_settings.payment_method_types`, and `SubscriptionUpdateParams.payment_settings.payment_method_types`
* Add support for `pricing` on `InvoiceAddLinesParams.lines[]`, `InvoiceItemCreateParams`, `InvoiceItemUpdateParams`, `InvoiceItem`, `InvoiceLineItemUpdateParams`, `InvoiceLineItem`, and `InvoiceUpdateLinesParams.lines[]`
* Add support for `taxability_reason` on `InvoiceAddLinesParams.lines[].tax_amounts[]`, `InvoiceLineItemUpdateParams.tax_amounts[]`, and `InvoiceUpdateLinesParams.lines[].tax_amounts[]`
* Add support for `jurisdiction_level` on `InvoiceAddLinesParams.lines[].tax_amounts[].tax_rate_data`, `InvoiceLineItemUpdateParams.tax_amounts[].tax_rate_data`, and `InvoiceUpdateLinesParams.lines[].tax_amounts[].tax_rate_data`
* Add support for `amount_overpaid`, `confirmation_secret`, and `payments` on `Invoice`
* Add support for `parent` on `InvoiceItem`, `InvoiceLineItem`, and `Invoice`
* Add support for new value `expired` on enums `Issuing.Authorization.status` and `Issuing.AuthorizationListParams.status`
* Add support for new value `network_fallback` on enum `Issuing.Authorization.request_history[].reason`
* Add support for `naver_pay` on `Mandate.payment_method_details` and `SetupAttempt.payment_method_details`
* Add support for `setup_future_usage` on `PaymentIntent.payment_method_options.naver_pay`, `PaymentIntentConfirmParams.payment_method_options.naver_pay`, `PaymentIntentCreateParams.payment_method_options.naver_pay`, and `PaymentIntentUpdateParams.payment_method_options.naver_pay`
* Add support for new value `expired` on enum `PaymentIntent.cancellation_reason`
* Add support for `default_value` on `PaymentLink.custom_fields[].dropdown`, `PaymentLink.custom_fields[].numeric`, `PaymentLink.custom_fields[].text`, `PaymentLinkCreateParams.custom_fields[].dropdown`, `PaymentLinkCreateParams.custom_fields[].numeric`, `PaymentLinkCreateParams.custom_fields[].text`, `PaymentLinkUpdateParams.custom_fields[].dropdown`, `PaymentLinkUpdateParams.custom_fields[].numeric`, and `PaymentLinkUpdateParams.custom_fields[].text`
* Add support for new values `billie` and `satispay` on enums `PaymentLink.payment_method_types`, `PaymentLinkCreateParams.payment_method_types`, and `PaymentLinkUpdateParams.payment_method_types`
* Add support for `nz_bank_transfer` on `Refund.destination_details`
* Add support for new value `canceled` on enum `Review.closed_reason`
* Add support for `current_period_end` and `current_period_start` on `SubscriptionItem`
* Add support for `wifi` on `Terminal.ConfigurationCreateParams`, `Terminal.ConfigurationUpdateParams`, and `Terminal.Configuration`
* Add support for new value `invoice.overpaid` on enums `WebhookEndpointCreateParams.enabled_events` and `WebhookEndpointUpdateParams.enabled_events`
* Add support for new values `2025-03-01.dashboard` and `2025-03-31.basil` on enum `WebhookEndpointCreateParams.api_version`
