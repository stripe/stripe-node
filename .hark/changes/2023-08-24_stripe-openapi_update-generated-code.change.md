---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/1873
is_stripe_api_change: true
released_in_version: 13.0.0-beta.1
---

* Add support for new resources `QuotePreviewInvoice` and `QuotePreviewSchedule`
* Change `Checkout.Session.payment_method_options.us_bank_account.financial_connections.prefetch`, `FinancialConnections.Session.prefetch`, `Invoice.charge`, `Invoice.customer`, `Invoice.payment_settings.payment_method_options.us_bank_account.financial_connections.prefetch`, `PaymentIntent.payment_method_options.us_bank_account.financial_connections.prefetch`, `SetupIntent.payment_method_options.us_bank_account.financial_connections.prefetch`, and `Subscription.payment_settings.payment_method_options.us_bank_account.financial_connections.prefetch` to be required
* Remove support for `applies_to` on `Invoice` and `SubscriptionSchedule`
* Add support for `cl`, `co`, `id`, `kr`, `mx`, `my`, `sa`, `th`, `tr`, and `vn` on `Tax.Registration.country_options` and `Tax.RegistrationCreateParams.country_options`
* Remove support for `hk` on `Tax.Registration.country_options` and `Tax.RegistrationCreateParams.country_options`
