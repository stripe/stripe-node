---
title: API Updates for beta branch
pr_url: https://github.com/stripe/stripe-node/pull/1698
is_stripe_api_change: true
released_in_version: 11.14.0-beta.2
---

* Updated stable APIs to the latest version
* Add support for `update_behavior` on `Subscription.prebilling`, `SubscriptionCreateParams.prebilling`, `SubscriptionSchedule.prebilling`, `SubscriptionScheduleCreateParams.prebilling`, `SubscriptionScheduleUpdateParams.prebilling`, and `SubscriptionUpdateParams.prebilling`
* Add support for `prebilling` on `SubscriptionScheduleAmendParams`
* Add support for `taxability_override` on `Tax.Calculation.customer_details`, `Tax.Transaction.customer_details`, and `TaxCalculationCreateParams.customer_details`
* Add support for `tax_summary` on `Tax.Calculation`
* Remove support for `tax_breakdown` on `Tax.Calculation`
