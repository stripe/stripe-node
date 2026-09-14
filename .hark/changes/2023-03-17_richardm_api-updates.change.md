---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1714
is_stripe_api_change: true
released_in_version: 11.15.0
---

* Add support for `cashapp_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
* Add support for new value `cashapp` as a new `type` throughout the API.
* Add support for `future_requirements` and `requirements` on `BankAccount`
* Add support for `country` on `Charge.payment_method_details.link`
* Add support for new value `automatic_async` on enums `Checkout.SessionCreateParams.payment_intent_data.capture_method`, `PaymentIntent.capture_method`, `PaymentIntentConfirmParams.capture_method`, `PaymentIntentCreateParams.capture_method`, `PaymentIntentUpdateParams.capture_method`, `PaymentLink.payment_intent_data.capture_method`, and `PaymentLinkCreateParams.payment_intent_data.capture_method`

* Add support for `preferred_locale` on `PaymentIntent.payment_method_options.affirm`,
* Add support for `cashapp_handle_redirect_or_display_qr_code` on `PaymentIntent.next_action` and `SetupIntent.next_action`
* Add support for new value `payout.reconciliation_completed` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
