---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1571
is_stripe_api_change: true
released_in_version: 10.13.0
---

* Add support for new value `invalid_dob_age_under_18` on enums `Account.future_requirements.errors[].code`, `Account.requirements.errors[].code`, `Capability.future_requirements.errors[].code`, `Capability.requirements.errors[].code`, `Person.future_requirements.errors[].code`, and `Person.requirements.errors[].code`
* Add support for new value `bank_of_china` on enums `Charge.payment_method_details.fpx.bank`, `PaymentIntentConfirmParams.payment_method_data.fpx.bank`, `PaymentIntentCreateParams.payment_method_data.fpx.bank`, `PaymentIntentUpdateParams.payment_method_data.fpx.bank`, `PaymentMethod.fpx.bank`, `PaymentMethodCreateParams.fpx.bank`, `SetupIntentConfirmParams.payment_method_data.fpx.bank`, `SetupIntentCreateParams.payment_method_data.fpx.bank`, and `SetupIntentUpdateParams.payment_method_data.fpx.bank`
* Add support for new values `America/Nuuk`, `Europe/Kyiv`, and `Pacific/Kanton` on enum `Reporting.ReportRunCreateParams.parameters.timezone`
* Add support for `klarna` on `SetupAttempt.payment_method_details`
