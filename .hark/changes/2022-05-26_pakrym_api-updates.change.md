---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1434
is_stripe_api_change: true
released_in_version: 9.5.0
---

* Add support for `affirm_payments` and `link_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
* Add support for `id_number_secondary` on `AccountCreateParams.individual`, `AccountUpdateParams.individual`, `PersonCreateParams`, `PersonUpdateParams`, `TokenCreateParams.account.individual`, and `TokenCreateParams.person`
* Add support for new value `affirm` on enum `Checkout.SessionCreateParams.payment_method_types[]`
* Add support for `hosted_instructions_url` on `PaymentIntent.next_action.display_bank_transfer_instructions`
* Add support for `id_number_secondary_provided` on `Person`
* Add support for `card_issuing` on `Treasury.FinancialAccountCreateParams.features`, `Treasury.FinancialAccountUpdateFeaturesParams`, and `Treasury.FinancialAccountUpdateParams.features`
