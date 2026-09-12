---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1588
is_stripe_api_change: true
released_in_version: 10.15.0
---

* Add support for new values `jp_trn` and `ke_pin` on enums `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, `Order.tax_details.tax_ids[].type`, and `TaxId.type`
* Add support for new values `jp_trn` and `ke_pin` on enums `CustomerCreateParams.tax_id_data[].type`, `InvoiceUpcomingLinesParams.customer_details.tax_ids[].type`, `InvoiceUpcomingParams.customer_details.tax_ids[].type`, `OrderCreateParams.tax_details.tax_ids[].type`, `OrderUpdateParams.tax_details.tax_ids[].type`, and `TaxIdCreateParams.type`
* Add support for `tipping` on `Terminal.Reader.action.process_payment_intent.process_config` and `Terminal.ReaderProcessPaymentIntentParams.process_config`
