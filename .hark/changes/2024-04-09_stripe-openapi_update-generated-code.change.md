---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2059
is_stripe_api_change: true
released_in_version: 14.25.0
---

* Add support for new resources `Entitlements.ActiveEntitlement` and `Entitlements.Feature`
* Add support for `list` and `retrieve` methods on resource `ActiveEntitlement`
* Add support for `create`, `list`, `retrieve`, and `update` methods on resource `Feature`
* Add support for `controller` on `AccountCreateParams`
* Add support for `fees`, `losses`, `requirement_collection`, and `stripe_dashboard` on `Account.controller`
* Add support for new value `none` on enum `Account.type`
* Add support for `event_name` on `Billing.MeterEventAdjustmentCreateParams` and `Billing.MeterEventAdjustment`
* Add support for `cancel` and `type` on `Billing.MeterEventAdjustment`
