---
title: Update generated code for beta
pr_url: https://github.com/stripe/stripe-node/pull/2229
is_stripe_api_change: true
released_in_version: 17.5.0-beta.1
---

* Add support for `network_advice_code` and `network_decline_code` on `Charge.outcome`, `Invoice.last_finalization_error`, `PaymentIntent.last_payment_error`, `SetupAttempt.setup_error`, `SetupIntent.last_setup_error`, and `StripeError`
* Change `BillingPortal.Configuration.features.subscription_update.schedule_at_period_end` and `LineItem.description` to be required
* Add support for `funding` on `Charge.payment_method_details.amazon_pay` and `Charge.payment_method_details.revolut_pay`
* Add support for `amount_requested` and `partial_authorization` on `Charge.payment_method_details.card`
* Add support for `metadata` on `Checkout.SessionCreateParams.line_items[]` and `LineItem`
* Add support for `line_items` on `Checkout.Session.permissions.update`, `Checkout.SessionCreateParams.permissions.update`, and `Checkout.SessionUpdateParams`
* Add support for new value `invoice.overpaid` on enum `Event.type`
* Add support for `adjustable_quantity` and `display` on `LineItem`
* Change type of `LineItem.description` from `string` to `string | null`
* Add support for `request_partial_authorization` on `PaymentIntent.payment_method_options.card`, `PaymentIntentConfirmParams.payment_method_options.card`, `PaymentIntentCreateParams.payment_method_options.card`, and `PaymentIntentUpdateParams.payment_method_options.card`
* Add support for `payment_method_options` on `PaymentIntentIncrementAuthorizationParams`
* Add support for new value `invoice.overpaid` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
