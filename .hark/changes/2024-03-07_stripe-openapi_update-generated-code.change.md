---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/2033
is_stripe_api_change: true
released_in_version: 14.20.0
---

* Add support for `documents` on `AccountSession.components` and `AccountSessionCreateParams.components`
* Add support for `request_three_d_secure` on `Checkout.Session.payment_method_options.card` and `Checkout.SessionCreateParams.payment_method_options.card`
* Add support for `created` on `CreditNoteListParams`
* Add support for `sepa_debit` on `Invoice.payment_settings.payment_method_options`, `InvoiceCreateParams.payment_settings.payment_method_options`, and `InvoiceUpdateParams.payment_settings.payment_method_options`
