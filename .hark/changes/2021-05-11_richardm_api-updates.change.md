---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1158
is_stripe_api_change: true
released_in_version: 8.149.0
---

* `AccountUpdateParams.business_profile.support_url` and `AccountCreatParams.business_profile.support_url` changed from `string` to `Stripe.Emptyable<string>`
* `File.purpose` added new enum members: `finance_report_run`, `document_provider_identity_document`, and `sigma_scheduled_query`
