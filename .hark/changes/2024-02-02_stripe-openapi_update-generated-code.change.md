---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/2002
is_stripe_api_change: true
released_in_version: 14.15.0-beta.2
---

* Add support for new resources `Entitlements.Event` and `Entitlements.Feature`
* Add support for `create` method on resource `Event`
* Add support for `create` and `list` methods on resource `Feature`
* Add support for `swish` on `ConfirmationToken.payment_method_preview`
* Add support for new value `swish` on enum `ConfirmationToken.payment_method_preview.type`
* Add support for new value `customer.entitlement_summary.updated` on enum `Event.type`
* Add support for `account_tax_ids` on `InvoiceCreatePreviewParams.schedule_details.phases[].invoice_settings`, `InvoiceUpcomingLinesParams.schedule_details.phases[].invoice_settings`, and `InvoiceUpcomingParams.schedule_details.phases[].invoice_settings`
* Add support for `feature` on `Product.features[]`, `ProductCreateParams.features[]`, and `ProductUpdateParams.features[]`
* Add support for new value `customer.entitlement_summary.updated` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
