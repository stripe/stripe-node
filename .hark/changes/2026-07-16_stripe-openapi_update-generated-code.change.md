---
title: Update generated code for private-preview
pr_link: https://github.com/stripe/stripe-node/pull/2782
is_breaking: true
is_stripe_api_change: true
released_in_version: 22.4.0-alpha.4
---

* ⚠️ Remove support for resource `FrMealVouchersOnboarding`
* ⚠️ Remove support for `create`, `list`, `retrieve`, and `update` methods on resource `FrMealVouchersOnboarding`
* Add support for `create` method on resource `PaymentRecord`
* Add support for new value `chaps` on enums `FundingInstructions.bank_transfer.financial_addresses[].supported_networks` and `PaymentIntent.next_action.display_bank_transfer_instructions.financial_addresses[].supported_networks`
* ⚠️ Remove support for `financial_accounts_transactions`, `financial_accounts`, and `recipients_list` on `AccountSessionCreateParams.components`
* Add support for `smart_disputes_management` on `AccountSession.components.disputes_list.features`, `AccountSession.components.payment_details.features`, `AccountSession.components.payment_disputes.features`, and `AccountSession.components.payments.features`
* ⚠️ Add support for new value `ic_nif` on enums `Checkout.Session.collected_information.tax_id.type`, `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, `Order.tax_details.tax_ids[].type`, `QuotePreviewInvoice.customer_tax_ids[].type`, `Tax.Calculation.customer_details.tax_ids[].type`, and `Tax.Transaction.customer_details.tax_ids[].type`
* Add support for new values `financial_connections.account.expected_deactivation_date_updated`, `financial_connections.account.supported_payment_method_types_updated`, `financial_connections.account.upcoming_deactivation`, `financial_connections.authorization.expected_deactivation_date_updated`, and `financial_connections.authorization.upcoming_deactivation` on enum `Event.type`
* Add support for `mode` on `FinancialConnections.Session.manual_entry`
* Add support for new values `alipay` and `sequra` on enums `Invoice.payment_settings.payment_method_types`, `InvoiceCreateParams.payment_settings.payment_method_types`, `InvoiceUpdateParams.payment_settings.payment_method_types`, `QuotePreviewInvoice.payment_settings.payment_method_types`, `Subscription.payment_settings.payment_method_types`, `SubscriptionCreateParams.payment_settings.payment_method_types`, and `SubscriptionUpdateParams.payment_settings.payment_method_types`
* Add support for new value `stripe_internal_error` on enum `Issuing.Authorization.request_history[].reason`
* Add support for `business_name` on `Issuing.Card.shipping`
* Add support for new value `correos` on enum `Issuing.Card.shipping.carrier`
* ⚠️ Change type of `Issuing.Transaction.network_data.trace_id` from `IssuingTransactionTraceId` to `IssuingTransactionTraceId | null`
* Add support for `pause_schedules` on `QuotePreviewSubscriptionSchedule`, `SubscriptionScheduleCreateParams`, `SubscriptionScheduleUpdateParams`, and `SubscriptionSchedule`
* Add support for `trial` on `QuotePreviewSubscriptionSchedule.phases[]` and `SubscriptionSchedule.phases[]`
* Add support for `payment_record` on `RefundCreateParams`
* Add support for `redirect_to_url` on `SharedPayment.IssuedToken.next_action`
* ⚠️ Change type of `SharedPayment.IssuedToken.next_action.type` from `literal('use_stripe_sdk')` to `enum('redirect_to_url'|'use_stripe_sdk')`
* Add support for new values `financial_connections.account.expected_deactivation_date_updated`, `financial_connections.account.supported_payment_method_types_updated`, `financial_connections.account.upcoming_deactivation`, `financial_connections.authorization.expected_deactivation_date_updated`, and `financial_connections.authorization.upcoming_deactivation` on enums `WebhookEndpointCreateParams.enabled_events` and `WebhookEndpointUpdateParams.enabled_events`
* Add support for snapshot events `FinancialConnectionsAccountExpectedDeactivationDateUpdatedEvent`, `FinancialConnectionsAccountSupportedPaymentMethodTypesUpdatedEvent`, and `FinancialConnectionsAccountUpcomingDeactivationEvent` with resource `FinancialConnections.Account`
* Add support for snapshot events `FinancialConnectionsAuthorizationExpectedDeactivationDateUpdatedEvent` and `FinancialConnectionsAuthorizationUpcomingDeactivationEvent` with resource `FinancialConnections.Authorization`
