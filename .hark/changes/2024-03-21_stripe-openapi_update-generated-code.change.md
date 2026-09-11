---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/2039
is_stripe_api_change: true
released_in_version: 14.23.0-beta.1
---

* Add support for new resources `Entitlements.ActiveEntitlementSummary` and `Entitlements.ActiveEntitlement`
* Add support for `list` method on resource `ActiveEntitlement`
* Add support for `mobilepay` on `ConfirmationToken.payment_method_preview` and `ConfirmationTokenCreateParams.testHelpers.payment_method_data`
* Add support for new value `mobilepay` on enum `ConfirmationTokenCreateParams.testHelpers.payment_method_data.type`
* Add support for `use_stripe_sdk` on `ConfirmationToken`
* Remove support for `payment_method` on `ConfirmationToken`
* Change type of `ConfirmationToken.mandate_data` from `ConfirmationTokensResourceMandateData` to `ConfirmationTokensResourceMandateData | null`
* Add support for new value `mobilepay` on enum `ConfirmationToken.payment_method_preview.type`
* Add support for `metadata` on `Entitlements.FeatureCreateParams` and `Entitlements.Feature`
* Add support for `active` on `Entitlements.Feature`
* Add support for new value `entitlements.active_entitlement_summary.updated` on enum `Event.type`
* Remove support for value `customer.entitlement_summary.updated` from enum `Event.type`
* Add support for new value `entitlements.active_entitlement_summary.updated` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
* Remove support for value `customer.entitlement_summary.updated` from enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
