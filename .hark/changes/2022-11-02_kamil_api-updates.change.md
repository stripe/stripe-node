---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1596
is_stripe_api_change: true
released_in_version: 10.16.0
---

* Add support for `on_behalf_of` on `Checkout.SessionCreateParams.subscription_data`, `SubscriptionCreateParams`, `SubscriptionSchedule.default_settings`, `SubscriptionSchedule.phases[]`, `SubscriptionScheduleCreateParams.default_settings`, `SubscriptionScheduleCreateParams.phases[]`, `SubscriptionScheduleUpdateParams.default_settings`, `SubscriptionScheduleUpdateParams.phases[]`, `SubscriptionUpdateParams`, and `Subscription`
* Add support for `tax_behavior` and `tax_code` on `InvoiceItemCreateParams`, `InvoiceItemUpdateParams`, `InvoiceUpcomingLinesParams.invoice_items[]`, and `InvoiceUpcomingParams.invoice_items[]`
