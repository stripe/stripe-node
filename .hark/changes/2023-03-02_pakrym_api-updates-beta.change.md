---
title: API Updates for beta branch
pr_url: https://github.com/stripe/stripe-node/pull/1697
is_stripe_api_change: true
released_in_version: 11.14.0-beta.1
---

* Updated stable APIs to the latest version
* Add support for new resources `Issuing.CardBundle` and `Issuing.CardDesign`
* Add support for `list` and `retrieve` methods on resource `CardBundle`
* Add support for `list`, `retrieve`, and `update` methods on resource `CardDesign`
* Remove support for `controller` on `AccountUpdateParams`
* Add support for `card_design` on `Issuing.Card` and `IssuingCardCreateParams`
* Add support for new values `issuing_card_design.activated`, `issuing_card_design.deactivated`, and `issuing_card_design.updated` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
