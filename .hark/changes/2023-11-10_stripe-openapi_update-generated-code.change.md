---
title: Update generated code for beta
pr_url: https://github.com/stripe/stripe-node/pull/1948
is_stripe_api_change: true
released_in_version: 14.5.0-beta.1
---

* Add support for new value `quote.reestimate_failed` on enum `Event.type`
* Add support for `metadata` on `QuoteCreateParams.phases[]`, `QuotePhase`, and `QuoteUpdateParams.phases[]`
* Add support for `last_reestimation_details` on `Quote.computed`
* Add support for new value `quote.reestimate_failed` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
