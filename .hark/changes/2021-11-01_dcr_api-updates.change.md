---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1283
is_stripe_api_change: true
released_in_version: 8.186.0
---

* Add support for `ownership_declaration` on `AccountUpdateParams.company`, `AccountCreateParams.company`, `Account.company`, and `TokenCreateParams.account.company`
* Add support for `proof_of_registration` on `AccountUpdateParams.documents` and `AccountCreateParams.documents`
* Add support for `ownership_declaration_shown_and_signed` on `TokenCreateParams.account`
