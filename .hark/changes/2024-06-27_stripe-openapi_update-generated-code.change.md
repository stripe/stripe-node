---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/2120
is_stripe_api_change: true
released_in_version: 16.1.0
---

* Add support for `filters` on `Checkout.Session.payment_method_options.us_bank_account.financial_connections`, `Invoice.payment_settings.payment_method_options.us_bank_account.financial_connections`, `InvoiceCreateParams.payment_settings.payment_method_options.us_bank_account.financial_connections`, `InvoiceUpdateParams.payment_settings.payment_method_options.us_bank_account.financial_connections`, `PaymentIntent.payment_method_options.us_bank_account.financial_connections`, `PaymentIntentConfirmParams.payment_method_options.us_bank_account.financial_connections`, `PaymentIntentCreateParams.payment_method_options.us_bank_account.financial_connections`, `PaymentIntentUpdateParams.payment_method_options.us_bank_account.financial_connections`, `SetupIntent.payment_method_options.us_bank_account.financial_connections`, `SetupIntentConfirmParams.payment_method_options.us_bank_account.financial_connections`, `SetupIntentCreateParams.payment_method_options.us_bank_account.financial_connections`, `SetupIntentUpdateParams.payment_method_options.us_bank_account.financial_connections`, `Subscription.payment_settings.payment_method_options.us_bank_account.financial_connections`, `SubscriptionCreateParams.payment_settings.payment_method_options.us_bank_account.financial_connections`, and `SubscriptionUpdateParams.payment_settings.payment_method_options.us_bank_account.financial_connections`
* Add support for `email_type` on `CreditNoteCreateParams`, `CreditNotePreviewLinesParams`, and `CreditNotePreviewParams`
* Add support for `account_subcategories` on `FinancialConnections.Session.filters` and `FinancialConnections.SessionCreateParams.filters`
* Add support for new values `multibanco`, `twint`, and `zip` on enums `PaymentLink.payment_method_types[]`, `PaymentLinkCreateParams.payment_method_types[]`, and `PaymentLinkUpdateParams.payment_method_types[]`
* Add support for `reboot_window` on `Terminal.ConfigurationCreateParams`, `Terminal.ConfigurationUpdateParams`, and `Terminal.Configuration`
