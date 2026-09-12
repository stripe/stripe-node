---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1235
is_stripe_api_change: true
released_in_version: 8.175.0
---

* Change `Account.future_requirements.alternatives`, `Account.requirements.alternatives`, `Capability.future_requirements.alternatives`, `Capability.requirements.alternatives`, `Checkout.Session.after_expiration`, `Checkout.Session.consent`, `Checkout.Session.consent_collection`, `Checkout.Session.expires_at`, `Checkout.Session.recovered_from`, `Person.future_requirements.alternatives`, and `Person.requirements.alternatives` to be required
* Change type of `Capability.future_requirements.alternatives`, `Capability.requirements.alternatives`, `Person.future_requirements.alternatives`, and `Person.requirements.alternatives` from `array(AccountRequirementsAlternative)` to `nullable(array(AccountRequirementsAlternative))`
* Add support for new value `rst` on enums `TaxRateCreateParams.tax_type`, `TaxRateUpdateParams.tax_type`, and `TaxRate.tax_type`
* Add support for new value `checkout.session.expired` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
