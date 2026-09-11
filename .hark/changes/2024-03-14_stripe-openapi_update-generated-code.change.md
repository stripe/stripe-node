---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/2036
is_stripe_api_change: true
released_in_version: 14.22.0-beta.1
---

* Add support for new resources `Billing.MeterEventAdjustment`, `Billing.MeterEvent`, and `Billing.Meter`
* Add support for `create`, `deactivate`, `list`, `reactivate`, `retrieve`, and `update` methods on resource `Meter`
* Add support for `create` method on resources `MeterEventAdjustment` and `MeterEvent`
* Add support for `create` test helper method on resource `ConfirmationToken`
* Add support for `add_lines`, `remove_lines`, and `update_lines` methods on resource `Invoice`
* Add support for `multibanco` payment method throughout the API.
* Add support for `second_line` on `Issuing.PhysicalBundle.features`
* Add support for `multibanco_display_details` on `PaymentIntent.next_action`
* Add support for `meter` on `PlanCreateParams`, `Plan`, `Price.recurring`, `PriceCreateParams.recurring`, and `PriceListParams.recurring`
