---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1242
is_stripe_api_change: true
released_in_version: 8.175.0
---

* Change `BillingPortal.Configuration.features.subscription_cancel.cancellation_reason` to be required
* Add support for `default_for` on `Checkout.SessionCreateParams.payment_method_options.acss_debit.mandate_options`, `Checkout.Session.payment_method_options.acss_debit.mandate_options`, `Mandate.payment_method_details.acss_debit`, `SetupIntentCreateParams.payment_method_options.acss_debit.mandate_options`, `SetupIntentUpdateParams.payment_method_options.acss_debit.mandate_options`, `SetupIntentConfirmParams.payment_method_options.acss_debit.mandate_options`, and `SetupIntent.payment_method_options.acss_debit.mandate_options`
* Add support for `acss_debit` on `InvoiceCreateParams.payment_settings.payment_method_options`, `InvoiceUpdateParams.payment_settings.payment_method_options`, `Invoice.payment_settings.payment_method_options`, `SubscriptionCreateParams.payment_settings.payment_method_options`, `SubscriptionUpdateParams.payment_settings.payment_method_options`, and `Subscription.payment_settings.payment_method_options`
* Add support for new value `acss_debit` on enums `InvoiceCreateParams.payment_settings.payment_method_types[]`, `InvoiceUpdateParams.payment_settings.payment_method_types[]`, `Invoice.payment_settings.payment_method_types[]`, `SubscriptionCreateParams.payment_settings.payment_method_types[]`, `SubscriptionUpdateParams.payment_settings.payment_method_types[]`, and `Subscription.payment_settings.payment_method_types[]`
* Add support for `livemode` on `Reporting.ReportType`
