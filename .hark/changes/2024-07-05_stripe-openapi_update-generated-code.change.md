---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/2126
is_breaking: true
is_stripe_api_change: true
released_in_version: 16.3.0-beta.1
---

* ⚠️ Remove support for `payment_method_update` on `CustomerSession.components.payment_element.features` and `CustomerSessionCreateParams.components.payment_element.features`. Users are expected to completely migrate from using `payment_method_update`.
* Add support for new resource `FinancialConnections.Institution`
* Add support for `list` and `retrieve` methods on resource `Institution`
* Add support for `institution` on `Checkout.Session.payment_method_options.us_bank_account.financial_connections.filters`, `FinancialConnections.Session.filters`, `FinancialConnections.SessionCreateParams.filters`, `Invoice.payment_settings.payment_method_options.us_bank_account.financial_connections.filters`, `InvoiceCreateParams.payment_settings.payment_method_options.us_bank_account.financial_connections.filters`, `InvoiceUpdateParams.payment_settings.payment_method_options.us_bank_account.financial_connections.filters`, `PaymentIntent.payment_method_options.us_bank_account.financial_connections.filters`, `PaymentIntentConfirmParams.payment_method_options.us_bank_account.financial_connections.filters`, `PaymentIntentCreateParams.payment_method_options.us_bank_account.financial_connections.filters`, `PaymentIntentUpdateParams.payment_method_options.us_bank_account.financial_connections.filters`, `SetupIntent.payment_method_options.us_bank_account.financial_connections.filters`, `SetupIntentConfirmParams.payment_method_options.us_bank_account.financial_connections.filters`, `SetupIntentCreateParams.payment_method_options.us_bank_account.financial_connections.filters`, `SetupIntentUpdateParams.payment_method_options.us_bank_account.financial_connections.filters`, `Subscription.payment_settings.payment_method_options.us_bank_account.financial_connections.filters`, `SubscriptionCreateParams.payment_settings.payment_method_options.us_bank_account.financial_connections.filters`, and `SubscriptionUpdateParams.payment_settings.payment_method_options.us_bank_account.financial_connections.filters`
* Add support for `payment_method_allow_redisplay_filters`, `payment_method_redisplay_limit`, `payment_method_redisplay`, and `payment_method_save_usage` on `CustomerSession.components.payment_element.features` and `CustomerSessionCreateParams.components.payment_element.features`
* Add support for new value `balance` on enums `FinancialConnections.Account.subscriptions[]`, `FinancialConnections.AccountSubscribeParams.features[]`, and `FinancialConnections.AccountUnsubscribeParams.features[]`
