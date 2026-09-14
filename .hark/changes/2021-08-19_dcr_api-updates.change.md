---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1223
is_stripe_api_change: true
released_in_version: 8.170.0
---

* Add support for new value `fil` on enums `Checkout.SessionCreateParams.locale` and `Checkout.Session.locale`
* Add support for new value `au_arn` on enums `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, and `TaxId.type`
* Add support for new value `au_arn` on enums `CustomerCreateParams.tax_id_data[].type`, `InvoiceUpcomingParams.customer_details.tax_ids[].type`, `InvoiceUpcomingLinesParams.customer_details.tax_ids[].type`, and `TaxIdCreateParams.type`
