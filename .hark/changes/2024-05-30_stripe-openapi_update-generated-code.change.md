---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/2095
is_stripe_api_change: true
released_in_version: 15.9.0
---

* Add support for new value `verification_requires_additional_proof_of_registration` on enums `Account.future_requirements.errors[].code`, `Account.requirements.errors[].code`, `BankAccount.future_requirements.errors[].code`, and `BankAccount.requirements.errors[].code`
* Add support for `default_value` on `Checkout.Session.custom_fields[].dropdown`, `Checkout.Session.custom_fields[].numeric`, `Checkout.Session.custom_fields[].text`, `Checkout.SessionCreateParams.custom_fields[].dropdown`, `Checkout.SessionCreateParams.custom_fields[].numeric`, and `Checkout.SessionCreateParams.custom_fields[].text`
* Add support for `generated_from` on `ConfirmationToken.payment_method_preview.card` and `PaymentMethod.card`
* Add support for new values `issuing_personalization_design.activated`, `issuing_personalization_design.deactivated`, `issuing_personalization_design.rejected`, and `issuing_personalization_design.updated` on enum `Event.type`
* Change `Issuing.Card.personalization_design` and `Issuing.PhysicalBundle.features` to be required
* Add support for new values `en-RO` and `ro-RO` on enums `PaymentIntentConfirmParams.payment_method_options.klarna.preferred_locale`, `PaymentIntentCreateParams.payment_method_options.klarna.preferred_locale`, and `PaymentIntentUpdateParams.payment_method_options.klarna.preferred_locale`
* Add support for new values `issuing_personalization_design.activated`, `issuing_personalization_design.deactivated`, `issuing_personalization_design.rejected`, and `issuing_personalization_design.updated` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
