---
title: Update generated code for private-preview
pr_link: https://github.com/stripe/stripe-node/pull/2484
is_stripe_api_change: true
released_in_version: 19.3.0-alpha.2
---

* Change `DelegatedCheckout.RequestedSessionUpdateParams.line_item_details[].quantity` to be required
* Add support for `payment_method_preview` on `DelegatedCheckout.RequestedSession`
* Add support for `order_id` on `DelegatedCheckout.RequestedSession.order_details`
* Add support for `lead` on `V2.Core.Account.configuration.card_creator.capabilities.commercial`, `V2.Core.Account.identity.attestations.terms_of_service.card_creator.commercial`, `V2.Core.AccountCreateParams.configuration.card_creator.capabilities.commercial`, `V2.Core.AccountCreateParams.identity.attestations.terms_of_service.card_creator.commercial`, `V2.Core.AccountUpdateParams.configuration.card_creator.capabilities.commercial`, and `V2.Core.AccountUpdateParams.identity.attestations.terms_of_service.card_creator.commercial`
* Add support for `global_account_holder` on `V2.Core.Account.identity.attestations.terms_of_service.card_creator.commercial`, `V2.Core.AccountCreateParams.identity.attestations.terms_of_service.card_creator.commercial`, and `V2.Core.AccountUpdateParams.identity.attestations.terms_of_service.card_creator.commercial`
* Add support for new value `commercial.lead.prepaid_card` on enum `V2.Core.Account.requirements.entries[].impact.restricts_capabilities[].capability`
* Add support for new value `commercial.lead.prepaid_card` on enum `EventsV2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEvent.updated_capability`
