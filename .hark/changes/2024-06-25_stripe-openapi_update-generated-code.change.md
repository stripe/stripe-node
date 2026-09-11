---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/2110
is_stripe_api_change: true
released_in_version: 16.2.0-beta.1
---

* Remove support for `payment_method_set_as_default` on `CustomerSession.components.payment_element.features` and `CustomerSessionCreateParams.components.payment_element.features`
* Add support for new value `ch_uid` on enums `OrderCreateParams.tax_details.tax_ids[].type` and `OrderUpdateParams.tax_details.tax_ids[].type`
* Add support for new value `ch_uid` on enum `Order.tax_details.tax_ids[].type`
