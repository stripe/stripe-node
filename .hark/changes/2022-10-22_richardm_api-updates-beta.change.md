---
title: API Updates for beta branch
pr_link: https://github.com/stripe/stripe-node/pull/1589
is_stripe_api_change: true
released_in_version: 10.16.0-beta.1
---

* Updated stable APIs to the latest version
* Add support for new value `revoked` on enum `CapitalFinancingOfferListParams.status`
* Add support for `paypal` on `Charge.payment_method_details` and `Source`
* Add support for `network_data` on `Issuing.Transaction`
* Add support for new value `paypal` on enum `Source.type`
* Add support for `billing_cycle_anchor` on `SubscriptionScheduleAmendParams.amendments[]`
