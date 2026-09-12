---
title: Update generated code for private-preview
pr_url: https://github.com/stripe/stripe-node/pull/2457
is_stripe_api_change: true
released_in_version: 19.2.0-alpha.2
---

* Add support for new resource `PaymentMethodBalance`
* Add support for `check_balance` method on resource `PaymentMethod`
* Add support for `benefits` on `Card`, `Charge.payment_method_details.card`, `ConfirmationToken.payment_method_preview.card`, and `PaymentMethod.card`
* Add support for `benefit` on `PaymentIntent.payment_details`, `PaymentIntentConfirmParams.payment_details`, `PaymentIntentCreateParams.payment_details`, and `PaymentIntentUpdateParams.payment_details`
* Add support for `setup_details` on `SetupIntentConfirmParams`, `SetupIntentCreateParams`, `SetupIntentUpdateParams`, and `SetupIntent`
* Add support for new value `card_creator` on enums `V2.Core.Account.applied_configurations` and `V2.Core.AccountCloseParams.applied_configurations`
* Add support for `card_creator` on `V2.Core.Account.configuration`, `V2.Core.Account.identity.attestations.terms_of_service`, `V2.Core.AccountCreateParams.configuration`, `V2.Core.AccountCreateParams.identity.attestations.terms_of_service`, `V2.Core.AccountUpdateParams.configuration`, and `V2.Core.AccountUpdateParams.identity.attestations.terms_of_service`
* Add support for new values `commercial.celtic.charge_card`, `commercial.celtic.spend_card`, `commercial.cross_river_bank.charge_card`, `commercial.cross_river_bank.spend_card`, `commercial.stripe.charge_card`, and `commercial.stripe.prepaid_card` on enum `V2.Core.Account.requirements.entries[].impact.restricts_capabilities[].capability`
* Add support for new value `card_creator` on enum `V2.Core.Account.requirements.entries[].impact.restricts_capabilities[].configuration`
* Add support for new value `configuration.card_creator` on enums `V2.Core.AccountCreateParams.include`, `V2.Core.AccountRetrieveParams.include`, and `V2.Core.AccountUpdateParams.include`
* Add support for thin events `V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEvent` and `V2CoreAccountIncludingConfigurationCardCreatorUpdatedEvent` with related object `V2.Core.Account`
* Remove support for thin events `V1CustomerDiscountCreatedEvent`, `V1CustomerDiscountDeletedEvent`, and `V1CustomerDiscountUpdatedEvent` with related object `Discount`
