---
title: API Updates for beta branch
pr_url: https://github.com/stripe/stripe-node/pull/1479
is_stripe_api_change: true
released_in_version: 9.15.0-beta.1
---

- Updated stable APIs to the latest version
- Add `Price.migrate_to` property
- Add `SubscriptionSchedule.amend` method.
- Add `Discount.subscription_item` property.
- Add `Quote.subscription_data.billing_behavior`, `billing_cycle_anchor`, `end_behavior`, `from_schedule`, `from_subscription`, `prebilling`, `proration_behavior` properties.
- Add `phases` parameter to `Quote.create`
- Add `Subscription.discounts`, `prebilling` properties.
