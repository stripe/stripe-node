---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/1842
is_stripe_api_change: true
released_in_version: 12.14.0
---

* Add support for new value `ro_tin` on enums `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, `Tax.Calculation.customer_details.tax_ids[].type`, and `Tax.Transaction.customer_details.tax_ids[].type`
* Remove support for values `excluded_territory`, `jurisdiction_unsupported`, and `vat_exempt` from enums `Checkout.Session.shipping_cost.taxes[].taxability_reason`, `Checkout.Session.total_details.breakdown.taxes[].taxability_reason`, `CreditNote.shipping_cost.taxes[].taxability_reason`, `Invoice.shipping_cost.taxes[].taxability_reason`, `LineItem.taxes[].taxability_reason`, `Quote.computed.recurring.total_details.breakdown.taxes[].taxability_reason`, `Quote.computed.upfront.total_details.breakdown.taxes[].taxability_reason`, and `Quote.total_details.breakdown.taxes[].taxability_reason`
* Add support for new value `ro_tin` on enums `CustomerCreateParams.tax_id_data[].type`, `InvoiceUpcomingLinesParams.customer_details.tax_ids[].type`, `InvoiceUpcomingParams.customer_details.tax_ids[].type`, and `Tax.CalculationCreateParams.customer_details.tax_ids[].type`
* Add support for `use_stripe_sdk` on `SetupIntentConfirmParams` and `SetupIntentCreateParams`
* Add support for new value `service_tax` on enums `TaxRate.tax_type`, `TaxRateCreateParams.tax_type`, and `TaxRateUpdateParams.tax_type`
