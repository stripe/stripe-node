---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/2795
is_stripe_api_change: true
released_in_version: 22.4.0
---

* Add support for new resource `FinancialConnections.Authorization`
* Add support for `unreject` method on resource `Account`
* Add support for `list` method on resource `PaymentRecord`
* Add support for `administrative_address` and `principal_place_of_business` on `Account.company`, `AccountCreateParams.company`, `AccountUpdateParams.company`, and `TokenCreateParams.account.company`
* Add support for `sepa_debit_payments` on `AccountUpdateParams.settings`
* Remove support for `proof_of_registration` on `AccountCreateParams.documents`.  This field was limited-use and is being deprecated.
* Add support for `payouts_action` on `AccountRejectParams`
* Add support for new values `mass_transit_parking_tax` and `parking_tax` on enums `Tax.Calculation.shipping_cost.tax_breakdown[].tax_rate_details.tax_type`, `Tax.Calculation.tax_breakdown[].tax_rate_details.tax_type`, `Tax.CalculationLineItem.tax_breakdown[].tax_rate_details.tax_type`, and `Tax.Transaction.shipping_cost.tax_breakdown[].tax_rate_details.tax_type`
* Add support for new value `chaps` on enums `FundingInstructions.bank_transfer.financial_addresses[].supported_networks` and `PaymentIntent.next_action.display_bank_transfer_instructions.financial_addresses[].supported_networks`
* Add support for `smart_disputes_management` on `AccountSession.components.disputes_list.features`, `AccountSession.components.payment_details.features`, `AccountSession.components.payment_disputes.features`, `AccountSession.components.payments.features`, `AccountSessionCreateParams.components.disputes_list.features`, `AccountSessionCreateParams.components.payment_details.features`, `AccountSessionCreateParams.components.payment_disputes.features`, and `AccountSessionCreateParams.components.payments.features`
* Add support for new value `data_share_only` on enums `Charge.payment_method_details.card.three_d_secure.result`, `PaymentAttemptRecord.payment_method_details.card.three_d_secure.result`, `PaymentRecord.payment_method_details.card.three_d_secure.result`, and `SetupAttempt.payment_method_details.card.three_d_secure.result`
* Add support for new values `bnp_paribas`, `citibank`, and `mbsb_bank` on enums `Charge.payment_method_details.fpx.bank`, `ConfirmationToken.payment_method_preview.fpx.bank`, `PaymentAttemptRecord.payment_method_details.fpx.bank`, `PaymentMethod.fpx.bank`, and `PaymentRecord.payment_method_details.fpx.bank`
* Remove support for `dynamic_tax_rates` on `Checkout.SessionCreateParams.line_items[]`.  This field was limited-use and is being deprecated.
* Add support for `setup_future_usage` on `Checkout.Session.payment_method_options.payco`, `Checkout.Session.payment_method_options.samsung_pay`, `Checkout.SessionCreateParams.payment_method_options.payco`, `Checkout.SessionCreateParams.payment_method_options.samsung_pay`, `PaymentIntent.payment_method_options.payco`, `PaymentIntent.payment_method_options.samsung_pay`, `PaymentIntentConfirmParams.payment_method_options.payco`, `PaymentIntentConfirmParams.payment_method_options.samsung_pay`, `PaymentIntentCreateParams.payment_method_options.payco`, `PaymentIntentCreateParams.payment_method_options.samsung_pay`, `PaymentIntentUpdateParams.payment_method_options.payco`, `PaymentIntentUpdateParams.payment_method_options.samsung_pay`, and `PaymentLinkUpdateParams.payment_intent_data`
* Add support for new value `ic_nif` on enums `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, `Tax.Calculation.customer_details.tax_ids[].type`, `Tax.Transaction.customer_details.tax_ids[].type`, and `TaxId.type`
* Add support for new values `bnp_paribas`, `citibank`, and `mbsb_bank` on enums `ConfirmationTokenCreateParams.testHelpers.payment_method_data.fpx.bank`, `PaymentIntentConfirmParams.payment_method_data.fpx.bank`, `PaymentIntentCreateParams.payment_method_data.fpx.bank`, `PaymentIntentUpdateParams.payment_method_data.fpx.bank`, `PaymentMethodCreateParams.fpx.bank`, `SetupIntentConfirmParams.payment_method_data.fpx.bank`, `SetupIntentCreateParams.payment_method_data.fpx.bank`, and `SetupIntentUpdateParams.payment_method_data.fpx.bank`
* Add support for new value `ic_nif` on enums `CustomerCreateParams.tax_id_data[].type`, `CustomerCreateTaxIdParams.type`, `InvoiceCreatePreviewParams.customer_details.tax_ids[].type`, `Tax.CalculationCreateParams.customer_details.tax_ids[].type`, and `TaxIdCreateParams.type`
* Add support for `network` on `Dispute.payment_method_details.card`
* Add support for new values `financial_connections.account.expected_deactivation_date_updated`, `financial_connections.account.supported_payment_method_types_updated`, `financial_connections.account.upcoming_deactivation`, `financial_connections.authorization.expected_deactivation_date_updated`, and `financial_connections.authorization.upcoming_deactivation` on enum `Event.type`
* Add support for `limits` and `manual_entry` on `FinancialConnections.SessionCreateParams` and `FinancialConnections.Session`
* Add support for `require_payment_method_support` on `FinancialConnections.Session.filters` and `FinancialConnections.SessionCreateParams.filters`
* Add support for `bank_account_token` on `FinancialConnections.Session`
* Add support for new values `alipay` and `mb_way` on enums `Invoice.payment_settings.payment_method_types`, `InvoiceCreateParams.payment_settings.payment_method_types`, `InvoiceUpdateParams.payment_settings.payment_method_types`, `Subscription.payment_settings.payment_method_types`, `SubscriptionCreateParams.payment_settings.payment_method_types`, and `SubscriptionUpdateParams.payment_settings.payment_method_types`
* Add support for new values `mass_transit_parking_tax` and `parking_tax` on enums `InvoiceAddLinesParams.lines[].tax_amounts[].tax_rate_data.tax_type`, `InvoiceLineItemUpdateParams.tax_amounts[].tax_rate_data.tax_type`, `InvoiceUpdateLinesParams.lines[].tax_amounts[].tax_rate_data.tax_type`, `TaxRate.tax_type`, `TaxRateCreateParams.tax_type`, and `TaxRateUpdateParams.tax_type`
* Add support for `metadata` on `InvoiceCreatePreviewParams.subscription_details`
* Add support for new value `stripe_internal_error` on enum `Issuing.Authorization.request_history[].reason`
* Add support for `business_name` on `Issuing.Card.shipping`, `Issuing.CardCreateParams.shipping`, and `Issuing.CardUpdateParams.shipping`
* Add support for new value `correos` on enum `Issuing.Card.shipping.carrier`
* Add support for `allowed_payment_method_types` on `PaymentIntentConfirmParams`, `PaymentIntentCreateParams`, `PaymentIntentUpdateParams`, `PaymentIntent`, `SetupIntentConfirmParams`, `SetupIntentCreateParams`, `SetupIntentUpdateParams`, and `SetupIntent`
* Add support for `referrer` on `PaymentIntentConfirmParams.radar_options` and `PaymentIntentCreateParams.radar_options`
* Add support for `consent_collection` and `shipping_options` on `PaymentLinkUpdateParams`
* Add support for `custom_fields`, `description`, and `footer` on `Quote.invoice_settings`, `QuoteCreateParams.invoice_settings`, `QuoteUpdateParams.invoice_settings`, `SubscriptionSchedule.default_settings.invoice_settings`, `SubscriptionSchedule.phases[].invoice_settings`, `SubscriptionScheduleCreateParams.default_settings.invoice_settings`, `SubscriptionScheduleCreateParams.phases[].invoice_settings`, `SubscriptionScheduleUpdateParams.default_settings.invoice_settings`, and `SubscriptionScheduleUpdateParams.phases[].invoice_settings`
* Add support for `customer_account` and `customer` on `Refund`
* Add support for `payment_method` on `Refund` and `Topup`
* Add support for `trial` on `SubscriptionSchedule.phases[]`
* Add support for `mass_transit_parking_tax` and `parking_tax` on `Tax.Registration.country_options.us` and `Tax.RegistrationCreateParams.country_options.us`
* Add support for new values `mass_transit_parking_tax` and `parking_tax` on enum `Tax.RegistrationCreateParams.country_options.us.type`
* Add support for new values `mass_transit_parking_tax` and `parking_tax` on enum `Tax.Registration.country_options.us.type`
* Add support for `initiated_by` and `payment_method_options` on `Topup`
* Add support for new values `financial_connections.account.expected_deactivation_date_updated`, `financial_connections.account.supported_payment_method_types_updated`, `financial_connections.account.upcoming_deactivation`, `financial_connections.authorization.expected_deactivation_date_updated`, and `financial_connections.authorization.upcoming_deactivation` on enums `WebhookEndpointCreateParams.enabled_events` and `WebhookEndpointUpdateParams.enabled_events`
* Add support for new value `2026-07-29.dahlia` on enum `WebhookEndpointCreateParams.api_version`
* Add support for `additional_addresses` on `V2.Core.Account.identity.business_details`, `V2.Core.AccountCreateParams.identity.business_details`, `V2.Core.AccountTokenCreateParams.identity.business_details`, and `V2.Core.AccountUpdateParams.identity.business_details`
* Add support for snapshot events `FinancialConnectionsAccountExpectedDeactivationDateUpdatedEvent`, `FinancialConnectionsAccountSupportedPaymentMethodTypesUpdatedEvent`, and `FinancialConnectionsAccountUpcomingDeactivationEvent` with resource `FinancialConnections.Account`
* Add support for snapshot events `FinancialConnectionsAuthorizationExpectedDeactivationDateUpdatedEvent` and `FinancialConnectionsAuthorizationUpcomingDeactivationEvent` with resource `FinancialConnections.Authorization`
