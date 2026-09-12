---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/1933
is_stripe_api_change: true
released_in_version: 14.1.0
---

* Add support for new value `invalid_dob_age_under_minimum` on enums `Account.future_requirements.errors[].code`, `Account.requirements.errors[].code`, `BankAccount.future_requirements.errors[].code`, and `BankAccount.requirements.errors[].code`
* Change `Checkout.Session.client_secret` and `Checkout.Session.ui_mode` to be required
