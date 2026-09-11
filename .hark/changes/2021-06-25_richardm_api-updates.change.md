---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1177
is_stripe_api_change: true
released_in_version: 8.157.0
---

* Added support for `boleto` on `PaymentMethodCreateParams`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `Charge.payment_method_details` and `PaymentMethod`
* `PaymentMethodListParams.type`, `PaymentMethodCreateParams.type`, `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `PaymentIntentCreataParams.payment_method_data.type` and `PaymentMethod.type` added new enum members: `boleto`
* Added support for `boleto_display_details` on `PaymentIntent.next_action`
* `TaxIdCreateParams.type`, `Invoice.customer_tax_ids[].type`, `InvoiceLineItemListUpcomingParams.customer_details.tax_ids[].type`, `InvoiceUpcomingParams.customer_details.tax_ids[].type`, `CustomerCreateParams.tax_id_data[].type`, `Checkout.Session.customer_details.tax_ids[].type` and `TaxId.type` added new enum members: `il_vat`.
