---
title: Update generated code for beta
pr_url: https://github.com/stripe/stripe-node/pull/2587
is_breaking: true
is_stripe_api_change: true
released_in_version: 21.1.0-beta.1
---

* Add support for new resources `ProductCatalog.TrialOffer`, `Tax.Location`, and `V2.Core.BatchJob`
* Add support for `create` method on resource `ProductCatalog.TrialOffer`
* Add support for `create`, `list`, and `retrieve` methods on resource `Tax.Location`
* Add support for `cancel`, `create`, and `retrieve` methods on resource `V2.Core.BatchJob`
* Add support for `performance_location` on `Tax.CalculationCreateParams.line_items[]` and `Tax.CalculationLineItem`
* ⚠️ Add support for new value `performance` on enums `Tax.Calculation.shipping_cost.tax_breakdown[].sourcing`, `Tax.CalculationLineItem.tax_breakdown[].sourcing`, and `Tax.Transaction.shipping_cost.tax_breakdown[].sourcing`
* ⚠️ Add support for new values `admissions_tax`, `attendance_tax`, `entertainment_tax`, `gross_receipts_tax`, `hospitality_tax`, `luxury_tax`, `resort_tax`, and `tourism_tax` on enums `Tax.Calculation.shipping_cost.tax_breakdown[].tax_rate_details.tax_type`, `Tax.Calculation.tax_breakdown[].tax_rate_details.tax_type`, `Tax.CalculationLineItem.tax_breakdown[].tax_rate_details.tax_type`, and `Tax.Transaction.shipping_cost.tax_breakdown[].tax_rate_details.tax_type`
* Add support for `trial_offer` on `InvoiceCreatePreviewParams.schedule_details.amendments[].item_actions[].add`, `InvoiceCreatePreviewParams.schedule_details.amendments[].item_actions[].set`, `InvoiceCreatePreviewParams.schedule_details.phases[].items[]`, `QuoteCreateParams.lines[].actions[].add_item`, `QuoteCreateParams.lines[].actions[].set_items[]`, `QuoteLine.actions[].add_item`, `QuoteLine.actions[].set_items[]`, `QuotePreviewSubscriptionSchedule.phases[].items[]`, `QuoteUpdateParams.lines[].actions[].add_item`, `QuoteUpdateParams.lines[].actions[].set_items[]`, `SubscriptionSchedule.phases[].items[]`, `SubscriptionScheduleAmendParams.amendments[].item_actions[].add`, `SubscriptionScheduleAmendParams.amendments[].item_actions[].set`, `SubscriptionScheduleCreateParams.phases[].items[]`, and `SubscriptionScheduleUpdateParams.phases[].items[]`
* Add support for `risk_reserved` on `Balance`
* ⚠️ Remove support for `source_type` on `Charge.payment_method_details.stripe_balance`, `ConfirmationToken.payment_method_preview.stripe_balance`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data.stripe_balance`, `PaymentAttemptRecord.payment_method_details.stripe_balance`, `PaymentIntentConfirmParams.payment_method_data.stripe_balance`, `PaymentIntentCreateParams.payment_method_data.stripe_balance`, `PaymentIntentUpdateParams.payment_method_data.stripe_balance`, `PaymentMethod.stripe_balance`, `PaymentMethodCreateParams.stripe_balance`, `PaymentRecord.payment_method_details.stripe_balance`, `SetupIntentConfirmParams.payment_method_data.stripe_balance`, `SetupIntentCreateParams.payment_method_data.stripe_balance`, and `SetupIntentUpdateParams.payment_method_data.stripe_balance`
* Add support for `tax_details` on `Checkout.SessionCreateParams.line_items[].price_data.product_data`, `Checkout.SessionUpdateParams.line_items[].price_data.product_data`, `InvoiceAddLinesParams.lines[].price_data.product_data`, `InvoiceLineItemUpdateParams.price_data.product_data`, `InvoiceUpdateLinesParams.lines[].price_data.product_data`, `PaymentLinkCreateParams.line_items[].price_data.product_data`, `PlanCreateParams.product[0]`, `PriceCreateParams.product_data`, `ProductCreateParams`, and `ProductUpdateParams`
* Add support for `pending_invoice_item_interval` on `Checkout.SessionUpdateParams.subscription_data`
* Add support for `hosted` and `ui_mode` on `FinancialConnections.SessionCreateParams` and `FinancialConnections.Session`
* Add support for `url` on `FinancialConnections.Session`
* Add support for `expires_after_seconds` on `Invoice.payment_settings.payment_method_options.pix`, `InvoiceCreateParams.payment_settings.payment_method_options.pix`, `InvoiceUpdateParams.payment_settings.payment_method_options.pix`, `QuotePreviewInvoice.payment_settings.payment_method_options.pix`, `Subscription.payment_settings.payment_method_options.pix`, `SubscriptionCreateParams.payment_settings.payment_method_options.pix`, and `SubscriptionUpdateParams.payment_settings.payment_method_options.pix`
* Add support for `current_trial` on `InvoiceCreatePreviewParams.subscription_details.items[]`, `SubscriptionCreateParams.items[]`, `SubscriptionItemCreateParams`, `SubscriptionItemUpdateParams`, `SubscriptionItem`, and `SubscriptionUpdateParams.items[]`
* Add support for `surcharge` on `PaymentIntent.amount_details`, `PaymentIntentCaptureParams.amount_details`, `PaymentIntentConfirmParams.amount_details`, `PaymentIntentCreateParams.amount_details`, `PaymentIntentIncrementAuthorizationParams.amount_details`, and `PaymentIntentUpdateParams.amount_details`
* Add support for `amount_details` and `payment_details` on `PaymentIntentDecrementAuthorizationParams`
* Add support for `mandate_options` on `PaymentIntent.payment_method_options.stripe_balance`
* Add support for `managed_payments` on `PaymentLinkCreateParams` and `PaymentLink`
* Add support for `stripe_balance` on `SetupIntent.payment_method_options`, `SetupIntentConfirmParams.payment_method_options`, `SetupIntentCreateParams.payment_method_options`, and `SetupIntentUpdateParams.payment_method_options`
* Add support for `billing_cycle_anchor` on `Subscription.trial_settings.end_behavior`, `SubscriptionCreateParams.trial_settings.end_behavior`, and `SubscriptionUpdateParams.trial_settings.end_behavior`
* ⚠️ Add support for new values `admissions_tax`, `attendance_tax`, `entertainment_tax`, `gross_receipts_tax`, `hospitality_tax`, `luxury_tax`, `resort_tax`, and `tourism_tax` on enums `Tax.Registration.country_options.us.type` and `Tax.RegistrationCreateParams.country_options.us.type`
* Add support for `admissions_tax`, `attendance_tax`, `entertainment_tax`, `gross_receipts_tax`, `hospitality_tax`, `luxury_tax`, `resort_tax`, and `tourism_tax` on `Tax.Registration.country_options.us`
* Add support for `requirements` on `TaxCode`
* ⚠️ Change type of `V2.Billing.Cadence.settings_data.collection.payment_method_options.card.mandate_options.amount`, `V2.Billing.CollectionSetting.payment_method_options.card.mandate_options.amount`, `V2.Billing.CollectionSettingCreateParams.payment_method_options.card.mandate_options.amount`, `V2.Billing.CollectionSettingUpdateParams.payment_method_options.card.mandate_options.amount`, and `V2.Billing.CollectionSettingVersion.payment_method_options.card.mandate_options.amount` from `longInteger` to `int64_string`
* ⚠️ Add support for new values `ar_bank_account`, `co_bank_account`, and `eg_bank_account` on enum `V2.Core.Account.configuration.recipient.default_outbound_destination.type`
* Add support for `timezone` on `V2.Core.Account.defaults`, `V2.Core.AccountCreateParams.defaults`, and `V2.Core.AccountUpdateParams.defaults`
* Add support for `azure_event_grid` on `V2.Core.EventDestinationCreateParams` and `V2.Core.EventDestination`
* ⚠️ Add support for new value `no_azure_partner_topic_exists` on enum `V2.Core.EventDestination.status_details.disabled.reason`
* ⚠️ Add support for new value `azure_event_grid` on enums `V2.Core.EventDestination.type` and `V2.Core.EventDestinationCreateParams.type`
* Add support for `supported_currencies` on `V2.Core.Vault.GbBankAccount`, `V2.Core.Vault.UsBankAccount`, and `V2.MoneyManagement.PayoutMethod.card`
* ⚠️ Change `V2.Core.Vault.GbBankAccount.sort_code` and `V2.Core.Vault.GbBankAccountCreateParams.sort_code` to be optional
* Add support for `restricted` on `V2.MoneyManagement.PayoutMethod`
* Add support for `currencies` on `V2.MoneyManagement.PayoutMethodsBankAccountSpec.countries.value.fields[]`
* Add support for `counterparty` and `description` on `V2.MoneyManagement.Transaction`
* ⚠️ Add support for `currency` on `V2.Core.Vault.GbBankAccountCreateParams`, `V2.Core.Vault.UsBankAccountCreateParams`, `V2.MoneyManagement.OutboundSetupIntentCreateParams.payout_method_data.bank_account`, `V2.MoneyManagement.OutboundSetupIntentCreateParams.payout_method_data.card`, `V2.MoneyManagement.OutboundSetupIntentUpdateParams.payout_method_data.bank_account`, and `V2.MoneyManagement.OutboundSetupIntentUpdateParams.payout_method_data.card`
* Add support for `iban` on `V2.Core.Vault.GbBankAccountCreateParams`
* Change `V2.Core.Vault.GbBankAccountCreateParams.account_number` to be optional
* ⚠️ Add support for new value `currency` on enum `InvalidPaymentMethodError.invalid_param`
* Add support for event notifications `V2CoreBatchJobBatchFailedEvent`, `V2CoreBatchJobCanceledEvent`, `V2CoreBatchJobCompletedEvent`, `V2CoreBatchJobCreatedEvent`, `V2CoreBatchJobReadyForUploadEvent`, `V2CoreBatchJobTimeoutEvent`, `V2CoreBatchJobUpdatedEvent`, `V2CoreBatchJobUploadTimeoutEvent`, `V2CoreBatchJobValidatingEvent`, and `V2CoreBatchJobValidationFailedEvent` with related object `V2.Core.BatchJob`
* Add support for error code `service_period_coupon_with_metered_tiered_item_unsupported` on `QuotePreviewInvoice.last_finalization_error`
