---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/2018
is_stripe_api_change: true
released_in_version: 14.17.0
---

* Add support for `networks` on `Card`, `PaymentMethodCreateParams.card`, `PaymentMethodUpdateParams.card`, and `TokenCreateParams.card`
* Add support for new value `no_voec` on enums `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, `Tax.Calculation.customer_details.tax_ids[].type`, `Tax.Transaction.customer_details.tax_ids[].type`, and `TaxId.type`
* Add support for new value `no_voec` on enums `CustomerCreateParams.tax_id_data[].type`, `InvoiceUpcomingLinesParams.customer_details.tax_ids[].type`, `InvoiceUpcomingParams.customer_details.tax_ids[].type`, `Tax.CalculationCreateParams.customer_details.tax_ids[].type`, and `TaxIdCreateParams.type`
* Add support for new value `financial_connections.account.refreshed_ownership` on enum `Event.type`
* Add support for `display_brand` on `PaymentMethod.card`
* Add support for new value `financial_connections.account.refreshed_ownership` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
