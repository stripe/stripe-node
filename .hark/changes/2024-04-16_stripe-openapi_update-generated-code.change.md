---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/2064
is_stripe_api_change: true
released_in_version: 15.2.0
---

* Add support for new resource `Entitlements.ActiveEntitlementSummary`
* Add support for `balances` and `payouts_list` on `AccountSession.components` and `AccountSessionCreateParams.components`
* Change `AccountSession.components.payment_details.features.destination_on_behalf_of_charge_management` and `AccountSession.components.payments.features.destination_on_behalf_of_charge_management` to be required
* Change `Billing.MeterEventCreateParams.timestamp` and `Dispute.payment_method_details.card` to be optional
* Change type of `Dispute.payment_method_details.card` from `DisputePaymentMethodDetailsCard | null` to `DisputePaymentMethodDetailsCard`
* Add support for new value `entitlements.active_entitlement_summary.updated` on enum `Event.type`
* Remove support for `config` on `Forwarding.RequestCreateParams` and `Forwarding.Request`. This field is no longer used by the Forwarding Request API.
* Add support for `capture_method` on `PaymentIntent.payment_method_options.revolut_pay`, `PaymentIntentConfirmParams.payment_method_options.revolut_pay`, `PaymentIntentCreateParams.payment_method_options.revolut_pay`, and `PaymentIntentUpdateParams.payment_method_options.revolut_pay`
* Add support for `swish` on `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, and `PaymentMethodConfiguration`
* Add support for new value `entitlements.active_entitlement_summary.updated` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
