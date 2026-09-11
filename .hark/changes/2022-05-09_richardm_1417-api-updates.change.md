---
title: "[#1417](https://github.com/stripe/stripe-node/pull/1417) API Updates"
pr_link: https://github.com/stripe/stripe-node/pull/1415
is_breaking: true
released_in_version: 9.0.0
---

* ⚠️ Replace the legacy `Order` API with the new `Order` API.
  * Resource modified: `Order`.
  * New methods: `cancel`, `list_line_items`, `reopen`, and `submit`
  * Removed methods: `pay` and `return_order`
  * Removed resources: `OrderItem` and `OrderReturn`
  * Removed references from other resources: `Charge.order`
* Add support for `amount_discount`, `amount_tax`, and `product` on `LineItem`
* Change type of `Charge.shipping.name`, `Checkout.Session.shipping.name`, `Customer.shipping.name`, `Invoice.customer_shipping.name`, `PaymentIntent.shipping.name`, `ShippingDetails.name`, and `Source.source_order.shipping.name` from `nullable(string)` to `string`
