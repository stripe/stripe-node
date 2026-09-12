---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1282
is_stripe_api_change: true
released_in_version: 8.185.0
---

* Change type of `AccountUpdateParams.individual.full_name_aliases`, `AccountCreateParams.individual.full_name_aliases`, `PersonCreateParams.full_name_aliases`, `PersonUpdateParams.full_name_aliases`, `TokenCreateParams.account.individual.full_name_aliases`, and `TokenCreateParams.person.full_name_aliases` from `array(string)` to `emptyStringable(array(string))`
* Add support for new values `en-BE`, `en-ES`, and `en-IT` on enums `PaymentIntentCreateParams.payment_method_options.klarna.preferred_locale`, `PaymentIntentUpdateParams.payment_method_options.klarna.preferred_locale`, and `PaymentIntentConfirmParams.payment_method_options.klarna.preferred_locale`
