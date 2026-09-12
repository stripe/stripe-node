---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2171
is_stripe_api_change: true
released_in_version: 16.11.0
---

* Add support for new resource `InvoiceRenderingTemplate`
* Add support for `archive`, `list`, `retrieve`, and `unarchive` methods on resource `InvoiceRenderingTemplate`
* Add support for `required` on `Checkout.Session.tax_id_collection`, `Checkout.SessionCreateParams.tax_id_collection`, `PaymentLink.tax_id_collection`, `PaymentLinkCreateParams.tax_id_collection`, and `PaymentLinkUpdateParams.tax_id_collection`
* Add support for `template` on `Customer.invoice_settings.rendering_options`, `CustomerCreateParams.invoice_settings.rendering_options`, `CustomerUpdateParams.invoice_settings.rendering_options`, `Invoice.rendering`, `InvoiceCreateParams.rendering`, and `InvoiceUpdateParams.rendering`
* Add support for `template_version` on `Invoice.rendering`, `InvoiceCreateParams.rendering`, and `InvoiceUpdateParams.rendering`
* Add support for new value `submitted` on enum `Issuing.Card.shipping.status`
* Change `TestHelpers.TestClock.status_details` to be required
