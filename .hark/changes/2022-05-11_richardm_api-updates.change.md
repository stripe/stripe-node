---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1420
is_stripe_api_change: true
released_in_version: 9.1.0
---

* Add support for `description` on `Checkout.SessionCreateParams.subscription_data`, `SubscriptionCreateParams`, `SubscriptionUpdateParams`, and `Subscription`
* Add support for `consent_collection`, `payment_intent_data`, `shipping_options`, `submit_type`, and `tax_id_collection` on `PaymentLinkCreateParams` and `PaymentLink`
* Add support for `customer_creation` on `PaymentLinkCreateParams`, `PaymentLinkUpdateParams`, and `PaymentLink`
* Add support for `metadata` on `SubscriptionSchedule.phases[]`, `SubscriptionScheduleCreateParams.phases[]`, and `SubscriptionScheduleUpdateParams.phases[]`
* Add support for new value `billing_portal.session.created` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
