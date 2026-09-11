---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1610
is_stripe_api_change: true
released_in_version: 10.17.0
---

* Add support for new values `eg_tin`, `ph_tin`, and `tr_tin` on enums `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, `Order.tax_details.tax_ids[].type`, and `TaxId.type`
* Add support for new values `eg_tin`, `ph_tin`, and `tr_tin` on enums `CustomerCreateParams.tax_id_data[].type`, `InvoiceUpcomingLinesParams.customer_details.tax_ids[].type`, `InvoiceUpcomingParams.customer_details.tax_ids[].type`, `OrderCreateParams.tax_details.tax_ids[].type`, `OrderUpdateParams.tax_details.tax_ids[].type`, and `TaxIdCreateParams.type`
* Add support for `reason_message` on `Issuing.Authorization.request_history[]`
* Add support for new value `webhook_error` on enum `Issuing.Authorization.request_history[].reason`
