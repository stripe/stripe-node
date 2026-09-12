---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1338
is_stripe_api_change: true
released_in_version: 8.200.0
---

* Change `Checkout.Session.payment_link` to be required
* Add support for `phone_number_collection` on `PaymentLinkCreateParams` and `PaymentLink`
* Add support for new values `payment_link.created` and `payment_link.updated` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
* Add support for new value `is_vat` on enums `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, and `TaxId.type`
* Add support for new value `is_vat` on enums `CustomerCreateParams.tax_id_data[].type`, `InvoiceUpcomingParams.customer_details.tax_ids[].type`, `InvoiceUpcomingLinesParams.customer_details.tax_ids[].type`, and `TaxIdCreateParams.type`
