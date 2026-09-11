---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1486
is_stripe_api_change: true
released_in_version: 9.15.0
---

* Add support for `installments` on `Checkout.Session.payment_method_options.card`, `Checkout.SessionCreateParams.payment_method_options.card`, `Invoice.payment_settings.payment_method_options.card`, `InvoiceCreateParams.payment_settings.payment_method_options.card`, and `InvoiceUpdateParams.payment_settings.payment_method_options.card`
* Add support for `default_currency` and `invoice_credit_balance` on `Customer`
* Add support for `currency` on `InvoiceCreateParams`
* Add support for `default_mandate` on `Invoice.payment_settings`, `InvoiceCreateParams.payment_settings`, and `InvoiceUpdateParams.payment_settings`
* Add support for `mandate` on `InvoicePayParams`
* Add support for `product_data` on `OrderCreateParams.line_items[]` and `OrderUpdateParams.line_items[]`
