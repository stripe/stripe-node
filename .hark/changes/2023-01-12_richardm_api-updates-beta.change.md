---
title: API Updates for beta branch
pr_url: https://github.com/stripe/stripe-node/pull/1653
is_stripe_api_change: true
released_in_version: 11.7.0-beta.2
---

* Updated stable APIs to the latest version
* Add support for new resource `Tax.Registration`
* Add support for `create`, `list`, and `update` methods on resource `Registration`
* Add support for `controller` on `AccountCreateParams` and `AccountUpdateParams`
* Add support for `application` and `dashboard` on `Account.controller`
* Change type of `Quote.subscription_data_overrides[].proration_behavior` from `enum('always_invoice'|'create_prorations'|'none')` to `enum('always_invoice'|'create_prorations'|'none') | null`
* Remove support for `timestamp` on `QuoteLine.actions[].add_discount.discount_end`
* Change type of `QuoteLine.actions[].add_discount.discount_end.type` from `literal('timestamp')` to `literal('line_ends_at')`
* Remove support for `index` on `QuoteLine.actions[].add_item.discounts[]`, `QuoteLine.actions[].remove_discount`, `QuoteLine.actions[].set_discounts[]`, `QuoteLine.actions[].set_items[].discounts[]`, `SubscriptionSchedule.phases[].add_invoice_items[].discounts[]`, `SubscriptionSchedule.phases[].discounts[]`, and `SubscriptionSchedule.phases[].items[].discounts[]`
* Change `QuoteLine.actions[].add_discount.index` to be required
* Add support for new values `quote.accepting`, `quote.reestimated`, and `quote.stale` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`

* Change `quote.draft_quote` implementation from hitting `POST /v1/quotes/{quote}/draft` to `POST /v1/quotes/{quote}/mark_draft`
