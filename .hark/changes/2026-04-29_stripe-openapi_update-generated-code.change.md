---
title: Update generated code for private-preview
pr_url: https://github.com/stripe/stripe-node/pull/2696
is_breaking: true
is_stripe_api_change: true
released_in_version: 22.2.0-alpha.3
---

* Add support for `debit_card` on `V2.Core.Account.configuration.card_creator.capabilities.consumer.lead`, `V2.Core.Account.identity.attestations.terms_of_service.card_creator.consumer.lead`, `V2.Core.AccountCreateParams.configuration.card_creator.capabilities.consumer.lead`, `V2.Core.AccountCreateParams.identity.attestations.terms_of_service.card_creator.consumer.lead`, `V2.Core.AccountUpdateParams.configuration.card_creator.capabilities.consumer.lead`, and `V2.Core.AccountUpdateParams.identity.attestations.terms_of_service.card_creator.consumer.lead`
* ⚠️ Add support for new value `consumer.lead.debit_card` on enums `V2.Core.Account.future_requirements.entries[].impact.restricts_capabilities[].capability` and `V2.Core.Account.requirements.entries[].impact.restricts_capabilities[].capability`
* ⚠️ Add support for new value `consumer.lead.debit_card` on enum `EventsV2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEvent.updated_capability`
