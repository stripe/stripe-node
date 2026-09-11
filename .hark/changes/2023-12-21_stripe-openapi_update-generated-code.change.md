---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/1976
is_stripe_api_change: true
released_in_version: 14.10.0
---

* Add support for new resource `FinancialConnections.Transaction`
* Add support for `list` and `retrieve` methods on resource `Transaction`
* Add support for `subscribe` and `unsubscribe` methods on resource `FinancialConnections.Account`
* Add support for `features` on `AccountSessionCreateParams.components.payouts`
* Add support for `edit_payout_schedule`, `instant_payouts`, and `standard_payouts` on `AccountSession.components.payouts.features`
* Change type of `Checkout.Session.payment_method_options.us_bank_account.financial_connections.prefetch[]`, `Checkout.SessionCreateParams.payment_method_options.us_bank_account.financial_connections.prefetch[]`, `Invoice.payment_settings.payment_method_options.us_bank_account.financial_connections.prefetch[]`, `InvoiceCreateParams.payment_settings.payment_method_options.us_bank_account.financial_connections.prefetch[]`, `InvoiceUpdateParams.payment_settings.payment_method_options.us_bank_account.financial_connections.prefetch[]`, `PaymentIntent.payment_method_options.us_bank_account.financial_connections.prefetch[]`, `PaymentIntentConfirmParams.payment_method_options.us_bank_account.financial_connections.prefetch[]`, `PaymentIntentCreateParams.payment_method_options.us_bank_account.financial_connections.prefetch[]`, `PaymentIntentUpdateParams.payment_method_options.us_bank_account.financial_connections.prefetch[]`, `SetupIntent.payment_method_options.us_bank_account.financial_connections.prefetch[]`, `SetupIntentConfirmParams.payment_method_options.us_bank_account.financial_connections.prefetch[]`, `SetupIntentCreateParams.payment_method_options.us_bank_account.financial_connections.prefetch[]`, `SetupIntentUpdateParams.payment_method_options.us_bank_account.financial_connections.prefetch[]`, `Subscription.payment_settings.payment_method_options.us_bank_account.financial_connections.prefetch[]`, `SubscriptionCreateParams.payment_settings.payment_method_options.us_bank_account.financial_connections.prefetch[]`, and `SubscriptionUpdateParams.payment_settings.payment_method_options.us_bank_account.financial_connections.prefetch[]` from `literal('balances')` to `enum('balances'|'transactions')`
* Add support for new value `financial_connections.account.refreshed_transactions` on enum `Event.type`
* Add support for new value `transactions` on enum `FinancialConnections.AccountRefreshParams.features[]`
* Add support for `subscriptions` and `transaction_refresh` on `FinancialConnections.Account`
* Add support for `next_refresh_available_at` on `FinancialConnections.Account.balance_refresh`
* Add support for new value `transactions` on enums `FinancialConnections.Session.prefetch[]` and `FinancialConnections.SessionCreateParams.prefetch[]`
* Add support for new value `unknown` on enums `Issuing.Authorization.verification_data.authentication_exemption.type` and `Issuing.AuthorizationCreateParams.testHelpers.verification_data.authentication_exemption.type`
* Add support for new value `challenge` on enums `PaymentIntent.payment_method_options.card.request_three_d_secure`, `PaymentIntentConfirmParams.payment_method_options.card.request_three_d_secure`, `PaymentIntentCreateParams.payment_method_options.card.request_three_d_secure`, `PaymentIntentUpdateParams.payment_method_options.card.request_three_d_secure`, `SetupIntent.payment_method_options.card.request_three_d_secure`, `SetupIntentConfirmParams.payment_method_options.card.request_three_d_secure`, `SetupIntentCreateParams.payment_method_options.card.request_three_d_secure`, and `SetupIntentUpdateParams.payment_method_options.card.request_three_d_secure`
* Add support for `revolut_pay` on `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, and `PaymentMethodConfiguration`
* Change type of `Quote.invoice_settings` from `InvoiceSettingQuoteSetting | null` to `InvoiceSettingQuoteSetting`
* Add support for `destination_details` on `Refund`
* Add support for new value `financial_connections.account.refreshed_transactions` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
