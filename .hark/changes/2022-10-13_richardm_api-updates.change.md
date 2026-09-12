---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1582
is_breaking: true
is_stripe_api_change: true
released_in_version: 10.14.0
---

* Add support for new values `invalid_representative_country` and `verification_failed_residential_address` on enums `Account.future_requirements.errors[].code`, `Account.requirements.errors[].code`, `Capability.future_requirements.errors[].code`, `Capability.requirements.errors[].code`, `Person.future_requirements.errors[].code`, and `Person.requirements.errors[].code`
* Add support for `request_log_url` on `StripeError` objects
* Add support for `network_data` on `Issuing.Authorization`
* ⚠️  Remove `currency`, `description`, `images`, and `name` from `Checkout.SessionCreateParams`. These properties do not work on the latest API version. (fixes #1575)
