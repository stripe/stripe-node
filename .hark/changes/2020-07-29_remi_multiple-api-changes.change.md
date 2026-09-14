---
title: Multiple API changes
pr_url: https://github.com/stripe/stripe-node/pull/969
is_stripe_api_change: true
released_in_version: 8.80.0
---

* Add support for `id`, `invoice` and `invoice_item` on `Discount` and `DeletedDiscount`
* Add support for `discount_amounts` on `CreditNote`, `CreditNoteLineItem`, `InvoiceLineItem`
* Add support for `discounts` on `InvoiceItem`, `InvoiceLineItem` and `Invoice`
* Add support for `total_discount_amounts` on `Invoice`
* Make `customer` and `verification` on `TaxId` optional as the resource will be re-used for `Account` in the future.
