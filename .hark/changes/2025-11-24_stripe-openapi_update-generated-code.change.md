---
title: Update generated code for private-preview
pr_link: https://github.com/stripe/stripe-node/pull/2512
is_stripe_api_change: true
released_in_version: 20.1.0-alpha.3
---

* Add support for new resource `ProductCatalog.TrialOffer`
* Add support for `create` method on resource `ProductCatalog.TrialOffer`
* Remove support for `amount_subtotal_after_discount` on `DelegatedCheckout.RequestedSession.line_item_details[]` and `DelegatedCheckout.RequestedSession.total_details`
* Remove support for `amount_total`, `unit_amount_after_discount`, and `unit_discount` on `DelegatedCheckout.RequestedSession.line_item_details[]`
* Add support for `amount_cart_discount` and `amount_items_discount` on `DelegatedCheckout.RequestedSession.total_details`
* Remove support for `amount_discount` on `DelegatedCheckout.RequestedSession.total_details`
* Add support for `payments_orchestration` on `PaymentIntentCreateParams` and `PaymentIntent`
