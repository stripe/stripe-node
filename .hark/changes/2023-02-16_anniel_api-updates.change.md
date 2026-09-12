---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1681
is_stripe_api_change: true
released_in_version: 11.11.0
---

* Add support for `refund_payment` method on resource `Terminal.Reader`
* Add support for new value `name` on enums `BillingPortal.Configuration.features.customer_update.allowed_updates[]`, `BillingPortal.ConfigurationCreateParams.features.customer_update.allowed_updates[]`, and `BillingPortal.ConfigurationUpdateParams.features.customer_update.allowed_updates[]`
* Add support for `custom_fields` on `Checkout.Session`, `Checkout.SessionCreateParams`, `PaymentLinkCreateParams`, `PaymentLinkUpdateParams`, and `PaymentLink`
* Change `Subscription.trial_settings.end_behavior` and `Subscription.trial_settings` to be required
* Add support for `interac_present` on `Terminal.ReaderPresentPaymentMethodParams.testHelpers`
* Change type of `Terminal.ReaderPresentPaymentMethodParams.testHelpers.type` from `literal('card_present')` to `enum('card_present'|'interac_present')`
* Add support for `refund_payment` on `Terminal.Reader.action`
* Add support for new value `refund_payment` on enum `Terminal.Reader.action.type`
