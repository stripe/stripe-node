---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1441
is_stripe_api_change: true
released_in_version: 9.7.0
---

* Add support for `affirm`, `bancontact`, `card`, `ideal`, `p24`, and `sofort` on `Checkout.Session.payment_method_options` and `Checkout.SessionCreateParams.payment_method_options`
* Add support for `afterpay_clearpay`, `au_becs_debit`, `bacs_debit`, `eps`, `fpx`, `giropay`, `grabpay`, `klarna`, `paynow`, and `sepa_debit` on `Checkout.SessionCreateParams.payment_method_options`
* Add support for `setup_future_usage` on `Checkout.Session.payment_method_options.*` and `Checkout.SessionCreateParams.payment_method_options.*`,
* Change `PaymentMethod.us_bank_account.networks` and `SetupIntent.flow_directions` to be required
* Add support for `attach_to_self` on `SetupAttempt`, `SetupIntentCreateParams`, `SetupIntentListParams`, and `SetupIntentUpdateParams`
* Add support for `flow_directions` on `SetupAttempt`, `SetupIntentCreateParams`, and `SetupIntentUpdateParams`
