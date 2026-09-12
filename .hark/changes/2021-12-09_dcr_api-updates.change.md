---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1307
is_stripe_api_change: true
released_in_version: 8.192.0
---

* Add support for new values `ge_vat` and `ua_vat` on enums `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, and `TaxId.type`
* Add support for new values `ge_vat` and `ua_vat` on enums `CustomerCreateParams.tax_id_data[].type`, `InvoiceUpcomingParams.customer_details.tax_ids[].type`, `InvoiceUpcomingLinesParams.customer_details.tax_ids[].type`, and `TaxIdCreateParams.type`
* Change type of `PaymentIntentCreateParams.payment_method_data.billing_details.email`, `PaymentIntentUpdateParams.payment_method_data.billing_details.email`, `PaymentIntentConfirmParams.payment_method_data.billing_details.email`, `PaymentMethodCreateParams.billing_details.email`, and `PaymentMethodUpdateParams.billing_details.email` from `string` to `emptyStringable(string)`
* Add support for `giropay` on `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentIntentConfirmParams.payment_method_options`, and `PaymentIntent.payment_method_options`
* Add support for new value `en-IE` on enums `PaymentIntentCreateParams.payment_method_options.klarna.preferred_locale`, `PaymentIntentUpdateParams.payment_method_options.klarna.preferred_locale`, and `PaymentIntentConfirmParams.payment_method_options.klarna.preferred_locale`
