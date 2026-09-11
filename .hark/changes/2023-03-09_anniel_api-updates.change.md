---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1703
is_stripe_api_change: true
released_in_version: 11.14.0
---

* Add support for `card_issuing` on `Issuing.CardholderCreateParams.individual` and `Issuing.CardholderUpdateParams.individual`
* Add support for new value `requirements.past_due` on enum `Issuing.Cardholder.requirements.disabled_reason`
* Add support for new values `individual.card_issuing.user_terms_acceptance.date` and `individual.card_issuing.user_terms_acceptance.ip` on enum `Issuing.Cardholder.requirements.past_due[]`
* Add support for `cancellation_details` on `SubscriptionCancelParams`, `SubscriptionUpdateParams`, and `Subscription`
