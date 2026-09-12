---
title: Update generated code for private-preview
pr_url: https://github.com/stripe/stripe-node/pull/2594
is_breaking: true
is_stripe_api_change: true
released_in_version: 20.5.0-alpha.3
---

* Add support for new resource `Radar.IssuingAuthorizationEvaluation`
* Add support for `create` method on resource `Radar.IssuingAuthorizationEvaluation`
* Add support for new value `fee_credits` on enum `BalanceTransaction.balance_type`
* ⚠️ Rename `affiliate_attributions` to `affiliate_attribution` on `DelegatedCheckout.RequestedSessionConfirmParams` and `DelegatedCheckout.RequestedSessionCreateParams`
* Add support for `amount_to_counter` on `Dispute`
* Add support for `frozen_fields` on `InvoiceItem`
* Add support for new value `next_billing_period_start` on enums `V2.Billing.IntentAction.apply.effective_at.type` and `V2.Billing.IntentCreateParams.actions[].apply.effective_at.type`
* Add support for `consumer` on `V2.Core.Account.configuration.card_creator.capabilities`, `V2.Core.Account.identity.attestations.terms_of_service.card_creator`, `V2.Core.AccountCreateParams.configuration.card_creator.capabilities`, `V2.Core.AccountCreateParams.identity.attestations.terms_of_service.card_creator`, `V2.Core.AccountUpdateParams.configuration.card_creator.capabilities`, and `V2.Core.AccountUpdateParams.identity.attestations.terms_of_service.card_creator`
* Add support for `fifth_third` on `V2.Core.Account.configuration.card_creator.capabilities.commercial`, `V2.Core.Account.identity.attestations.terms_of_service.card_creator.commercial`, `V2.Core.AccountCreateParams.configuration.card_creator.capabilities.commercial`, `V2.Core.AccountCreateParams.identity.attestations.terms_of_service.card_creator.commercial`, `V2.Core.AccountUpdateParams.configuration.card_creator.capabilities.commercial`, and `V2.Core.AccountUpdateParams.identity.attestations.terms_of_service.card_creator.commercial`
* Add support for `prepaid_card` on `V2.Core.Account.configuration.card_creator.capabilities.commercial.cross_river_bank`, `V2.Core.Account.identity.attestations.terms_of_service.card_creator.commercial.cross_river_bank`, `V2.Core.AccountCreateParams.configuration.card_creator.capabilities.commercial.cross_river_bank`, `V2.Core.AccountCreateParams.identity.attestations.terms_of_service.card_creator.commercial.cross_river_bank`, `V2.Core.AccountUpdateParams.configuration.card_creator.capabilities.commercial.cross_river_bank`, and `V2.Core.AccountUpdateParams.identity.attestations.terms_of_service.card_creator.commercial.cross_river_bank`
* Add support for new values `commercial.cross_river_bank.prepaid_card`, `commercial.fifth_third.charge_card`, `consumer.celtic.revolving_credit_card`, `consumer.cross_river_bank.prepaid_card`, and `consumer.lead.prepaid_card` on enums `V2.Core.Account.future_requirements.entries[].impact.restricts_capabilities[].capability` and `V2.Core.Account.requirements.entries[].impact.restricts_capabilities[].capability`
* Add support for `payment_method_data` on `V2.Payments.OffSessionPaymentCreateParams`
* Change `V2.Payments.OffSessionPaymentCreateParams.payment_method` to be optional
* Add support for new values `commercial.cross_river_bank.prepaid_card`, `commercial.fifth_third.charge_card`, `consumer.celtic.revolving_credit_card`, `consumer.cross_river_bank.prepaid_card`, and `consumer.lead.prepaid_card` on enum `EventsV2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEvent.updated_capability`
