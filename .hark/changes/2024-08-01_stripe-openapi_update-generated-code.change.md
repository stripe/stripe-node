---
title: Update generated code for beta
pr_url: https://github.com/stripe/stripe-node/pull/2145
is_stripe_api_change: true
released_in_version: 16.7.0-beta.1
---

* Add support for `attach_payment` method on resource `Invoice`
* Add support for `app_install` and `app_viewport` on `AccountSessionCreateParams.components`
* Remove support for `partner_rejected_details` on `Dispute.evidence_details.enhanced_eligibility.visa_compelling_evidence_3`
* Add support for `lines_invalid` on `Quote.status_details.stale.last_reason`
* Add support for new value `lines_invalid` on enum `Quote.status_details.stale.last_reason.type`
* Add support for `last_price_migration_error` on `SubscriptionSchedule` and `Subscription`
