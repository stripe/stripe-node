---
title: Update generated code for private-preview
pr_url: https://github.com/stripe/stripe-node/pull/2544
is_stripe_api_change: true
released_in_version: 20.2.0-alpha.6
---

* Add support for `risk_details` on `DelegatedCheckout.RequestedSession`
* Remove support for `description`, `images`, and `name` on `DelegatedCheckout.RequestedSession.line_item_details[]`
* Add support for `name` on `ProductCatalog.TrialOfferCreateParams` and `ProductCatalog.TrialOffer`
* Add support for `login_failed` and `registration_failed` on `Radar.AccountEvaluation.events[]` and `Radar.AccountEvaluationUpdateParams`
* Change type of `Radar.AccountEvaluationUpdateParams.type` from `literal('registration_succeeded')` to `enum('login_failed'|'login_succeeded'|'registration_failed'|'registration_succeeded')`
