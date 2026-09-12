---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1167
is_stripe_api_change: true
released_in_version: 8.152.0
---

* Add support for new resource `TaxCode`.
* Add support for `tax_code` on `Product`, `ProductCreateParams`, `ProductUpdateParams`, `PriceCreateParams.product_data`, `PlanCreateParams.product`, and Checkout `SessionCreateParams.line_items[].price_data.product_data`.
* Add support for `tax` to `Customer`, `CustomerCreateParams`, `CustomerUpdateParams`.
* Add support for `default_settings[automatic_tax]` and `phases[].automatic_tax` on `SubscriptionSchedule`, `SubscriptionScheduleCreateParams`, and `SubscriptionScheduleUpdateParams`.
* Add support for `automatic_tax` on `Subscription`, `SubscriptionCreateParams`, `SubscriptionUpdateParams`; `Invoice`, `InvoiceCreateParams`, `InvoiceRetrieveUpcomingParams` and `InvoiceLineItemListUpcomingParams`; Checkout `Session` and Checkout `SessionCreateParams`.
* Add support for `tax_behavior` to `Price`, `PriceCreateParams`, `PriceUpdateParams` and to the many Param objects that contain `price_data`:
    - `SubscriptionScheduleCreateParams` and `SubscriptionScheduleUpdateParams`, beneath `phases[].add_invoice_items[]` and `phases[].items[]`
    - `SubscriptionItemCreateParams` and `SubscriptionItemUpdateParams`, on the top-level
    - `SubscriptionCreateParams` create and `UpdateCreateParams`, beneath `items[]` and `add_invoice_items[]`
    - `InvoiceItemCreateParams` and `InvoiceItemUpdateParams`,  on the top-level
    - `InvoiceRetrieveUpcomingParams` and `InvoiceLineItemListUpcomingParams` beneath `subscription_items[]` and `invoice_items[]`.
    - Checkout `SessionCreateParams`, beneath `line_items[]`.
* Add support for `customer_update` to Checkout `SessionCreateParams`.
* Add support for `customer_details` to `InvoiceRetrieveUpcomingParams` and `InvoiceLineItemListUpcomingParams`.
* Add support for `tax_type` to `TaxRate`, `TaxRateCreateParams`, and `TaxRateUpdateParams`.
