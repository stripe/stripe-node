---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1413
is_stripe_api_change: true
released_in_version: 8.221.0
---

* Add support for new resources `FinancialConnections.AccountOwner`, `FinancialConnections.AccountOwnership`, `FinancialConnections.Account`, and `FinancialConnections.Session`
* Add support for `financial_connections` on `Checkout.Session.payment_method_options.us_bank_account`, `Checkout.SessionCreateParams.payment_method_options.us_bank_account`, `Invoice.payment_settings.payment_method_options.us_bank_account`, `InvoiceCreateParams.payment_settings.payment_method_options.us_bank_account`, `InvoiceUpdateParams.payment_settings.payment_method_options.us_bank_account`, `PaymentIntent.payment_method_options.us_bank_account`, `PaymentIntentConfirmParams.payment_method_options.us_bank_account`, `PaymentIntentCreateParams.payment_method_options.us_bank_account`, `PaymentIntentUpdateParams.payment_method_options.us_bank_account`, `SetupIntent.payment_method_options.us_bank_account`, `SetupIntentConfirmParams.payment_method_options.us_bank_account`, `SetupIntentCreateParams.payment_method_options.us_bank_account`, `SetupIntentUpdateParams.payment_method_options.us_bank_account`, `Subscription.payment_settings.payment_method_options.us_bank_account`, `SubscriptionCreateParams.payment_settings.payment_method_options.us_bank_account`, and `SubscriptionUpdateParams.payment_settings.payment_method_options.us_bank_account`
* Add support for `financial_connections_account` on `PaymentIntentConfirmParams.payment_method_data.us_bank_account`, `PaymentIntentCreateParams.payment_method_data.us_bank_account`, `PaymentIntentUpdateParams.payment_method_data.us_bank_account`, `PaymentMethod.us_bank_account`, `PaymentMethodCreateParams.us_bank_account`, `SetupIntentConfirmParams.payment_method_data.us_bank_account`, `SetupIntentCreateParams.payment_method_data.us_bank_account`, and `SetupIntentUpdateParams.payment_method_data.us_bank_account`
