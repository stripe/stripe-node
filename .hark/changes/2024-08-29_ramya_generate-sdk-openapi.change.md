---
title: Generate SDK for OpenAPI spec version 1230
pr_url: https://github.com/stripe/stripe-node/pull/2163
released_in_version: 16.9.0
---

* Change `AccountLinkCreateParams.collection_options.fields` and `LineItem.description` to be optional
* Add support for new value `hr_oib` on enums `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, `Tax.Calculation.customer_details.tax_ids[].type`, `Tax.Transaction.customer_details.tax_ids[].type`, and `TaxId.type`
* Add support for new value `hr_oib` on enums `CustomerCreateParams.tax_id_data[].type`, `InvoiceCreatePreviewParams.customer_details.tax_ids[].type`, `InvoiceUpcomingLinesParams.customer_details.tax_ids[].type`, `InvoiceUpcomingParams.customer_details.tax_ids[].type`, `Tax.CalculationCreateParams.customer_details.tax_ids[].type`, and `TaxIdCreateParams.type`
* Add support for new value `issuing_regulatory_reporting` on enums `File.purpose` and `FileListParams.purpose`
* Add support for new value `issuing_regulatory_reporting` on enum `FileCreateParams.purpose`
* Change `Issuing.Card.shipping.address_validation` to be required
* Add support for `status_details` on `TestHelpers.TestClock`
