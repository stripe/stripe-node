---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1133
is_stripe_api_change: true
released_in_version: 8.140.0
---

* `Capability.requirements.errors[].code`, `Account.requirements.errors[].code` and `Person.requirements.errors[].code` added new enum members: `verification_missing_owners, verification_missing_executives and verification_requires_additional_memorandum_of_associations`
* `SessionCreateParams.locale` and `Checkout.Session.locale` added new enum members: `th`
