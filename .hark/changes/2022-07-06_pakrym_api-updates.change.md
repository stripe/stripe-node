---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1467
is_stripe_api_change: true
released_in_version: 9.12.0
---

* Add support for `customer` on `Checkout.SessionListParams` and `RefundCreateParams`
* Add support for `currency` and `origin` on `RefundCreateParams`
* Add support for new values `financial_connections.account.created`, `financial_connections.account.deactivated`, `financial_connections.account.disconnected`, `financial_connections.account.reactivated`, and `financial_connections.account.refreshed_balance` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
