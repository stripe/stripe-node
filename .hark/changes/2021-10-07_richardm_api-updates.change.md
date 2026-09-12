---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1265
is_stripe_api_change: true
released_in_version: 8.179.0
---

* Add support for `phone_number_collection` on `Checkout.SessionCreateParams` and `Checkout.Session`
* Add support for `phone` on `Checkout.Session.customer_details`
* Change `PaymentMethodListParams.customer` to be optional
* Add support for new value `customer_id` on enums `Radar.ValueListCreateParams.item_type` and `Radar.ValueList.item_type`
* Add support for new value `bbpos_wisepos_e` on enums `Terminal.ReaderListParams.device_type` and `Terminal.Reader.device_type`
