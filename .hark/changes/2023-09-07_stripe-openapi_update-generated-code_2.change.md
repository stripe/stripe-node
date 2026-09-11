---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/1892
is_stripe_api_change: true
released_in_version: 13.6.0-beta.1
---

* Remove support for `submit_card` test helper method on resource `Issuing.Card`
* Add support for `tax_forms` on `Account.settings`, `AccountCreateParams.settings`, and `AccountUpdateParams.settings`
* Add support for `card_design` on `Issuing.CardUpdateParams`
* Remove support for value `submitted` from enum `Issuing.Card.shipping.status`
* Add support for new value `platform_default` on enums `Issuing.CardDesign.preference` and `Issuing.CardDesignListParams.preference`
