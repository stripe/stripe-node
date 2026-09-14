---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1377
is_stripe_api_change: true
released_in_version: 8.211.0
---

* Add support for `cancel` method on resource `Refund`
* Add support for new values `bg_uic`, `hu_tin`, and `si_tin` on enums `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, and `TaxId.type`
* Add support for new values `bg_uic`, `hu_tin`, and `si_tin` on enums `CustomerCreateParams.tax_id_data[].type`, `InvoiceUpcomingLinesParams.customer_details.tax_ids[].type`, `InvoiceUpcomingParams.customer_details.tax_ids[].type`, and `TaxIdCreateParams.type`
* Change `InvoiceCreateParams.customer` to be optional
* Add support for `test_clock` on `QuoteListParams`
* Add support for new values `test_helpers.test_clock.advancing`, `test_helpers.test_clock.created`, `test_helpers.test_clock.deleted`, `test_helpers.test_clock.internal_failure`, and `test_helpers.test_clock.ready` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
