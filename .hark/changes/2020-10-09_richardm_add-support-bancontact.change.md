---
title: Add support for `Bancontact/iDEAL/Sofort -> SEPA`
pr_link: https://github.com/stripe/stripe-node/pull/1028
is_stripe_api_change: true
released_in_version: 8.108.0
---

* Add support for `generated_sepa_debit` and `generated_sepa_debit_mandate` on `Charge.payment_method_details.ideal`, `Charge.payment_method_details.bancontact` and `Charge.payment_method_details.sofort`
* Add support for `generated_from` on `PaymentMethod.sepa_debit`
* Add support for `ideal`, `bancontact` and `sofort` on `SetupAttempt.payment_method_details`
