---
title: Update generated code for beta
pr_url: https://github.com/stripe/stripe-node/pull/1975
is_stripe_api_change: true
released_in_version: 14.10.0-beta.1
---

* Add support for `preview_mode` and `subscription_details` on `InvoiceUpcomingLinesParams` and `InvoiceUpcomingParams`
* Remove support for `subscription_trial_from_plan` on `InvoiceUpcomingLinesParams` and `InvoiceUpcomingParams`
* Add support for `billing_behavior`, `end_behavior`, and `proration_behavior` on `InvoiceUpcomingLinesParams.schedule_details` and `InvoiceUpcomingParams.schedule_details`
