---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/2410
is_stripe_api_change: true
released_in_version: 19.1.0-beta.1
---

* Add support for new resources `V2.Billing.BillSettingVersion`, `V2.Billing.BillSetting`, `V2.Billing.Cadence`, `V2.Billing.CollectionSettingVersion`, `V2.Billing.CollectionSetting`, and `V2.Billing.Profile`
* Add support for `create`, `list`, `retrieve`, and `update` methods on resources `V2.Billing.BillSetting`, `V2.Billing.CollectionSetting`, and `V2.Billing.Profile`
* Add support for `list` and `retrieve` methods on resources `V2.Billing.BillSettingVersion` and `V2.Billing.CollectionSettingVersion`
* Add support for `cancel`, `create`, `list`, `retrieve`, and `update` methods on resource `V2.Billing.Cadence`
* Add support for new value `crypto_wallet` on enum `V2.Core.Account.configuration.recipient.default_outbound_destination.type`
* Add support for `profile` on `V2.Core.Account.defaults`, `V2.Core.AccountCreateParams.defaults`, and `V2.Core.AccountUpdateParams.defaults`
* Add support for `i_p` on `V2.Core.Account.identity.attestations.directorship_declaration`, `V2.Core.Account.identity.attestations.ownership_declaration`, `V2.Core.Account.identity.attestations.terms_of_service.account`, `V2.Core.Account.identity.attestations.terms_of_service.storer`, `V2.Core.Account.identity.individual.additional_terms_of_service.account`, `V2.Core.AccountCreateParams.identity.attestations.terms_of_service.account`, `V2.Core.AccountCreateParams.identity.attestations.terms_of_service.storer`, `V2.Core.AccountUpdateParams.identity.attestations.terms_of_service.account`, `V2.Core.AccountUpdateParams.identity.attestations.terms_of_service.storer`, `V2.Core.Person.additional_terms_of_service.account`, `V2.Core.PersonCreateParams.additional_terms_of_service.account`, and `V2.Core.PersonUpdateParams.additional_terms_of_service.account`
* Remove support for `ip` on `V2.Core.Account.identity.attestations.directorship_declaration`, `V2.Core.Account.identity.attestations.ownership_declaration`, `V2.Core.Account.identity.attestations.terms_of_service.account`, `V2.Core.Account.identity.attestations.terms_of_service.storer`, `V2.Core.Account.identity.individual.additional_terms_of_service.account`, `V2.Core.AccountCreateParams.identity.attestations.terms_of_service.account`, `V2.Core.AccountCreateParams.identity.attestations.terms_of_service.storer`, `V2.Core.AccountUpdateParams.identity.attestations.terms_of_service.account`, `V2.Core.AccountUpdateParams.identity.attestations.terms_of_service.storer`, `V2.Core.Person.additional_terms_of_service.account`, `V2.Core.PersonCreateParams.additional_terms_of_service.account`, and `V2.Core.PersonUpdateParams.additional_terms_of_service.account`
* Remove support for `doing_business_as`, `product_description`, and `url` on `V2.Core.Account.identity.business_details`, `V2.Core.AccountCreateParams.identity.business_details`, and `V2.Core.AccountUpdateParams.identity.business_details`
* Add support for `settlement_currency` on `V2.MoneyManagement.FinancialAddress`
* Add support for `sepa_bank_account` on `V2.MoneyManagement.FinancialAddress.credentials` and `V2.MoneyManagement.ReceivedCredit.bank_transfer`
* Add support for new value `sepa_bank_account` on enum `V2.MoneyManagement.FinancialAddress.credentials.type`
* Add support for `amount_details` and `payments_orchestration` on `V2.Payments.OffSessionPaymentCreateParams` and `V2.Payments.OffSessionPayment`
* Add support for new value `authorization_expired` on enum `V2.Payments.OffSessionPayment.failure_reason`
* Add support for `retry_policy` on `V2.Payments.OffSessionPayment.retry_details` and `V2.Payments.OffSessionPaymentCreateParams.retry_details`
* Add support for new values `heuristic` and `scheduled` on enums `V2.Payments.OffSessionPayment.retry_details.retry_strategy` and `V2.Payments.OffSessionPaymentCreateParams.retry_details.retry_strategy`
* Change type of `V2.MoneyManagement.OutboundPaymentQuote.fx_quote.lock_duration` from `literal('five_minutes')` to `enum('five_minutes'|'none')`
* Change type of `V2.MoneyManagement.OutboundPaymentQuote.fx_quote.lock_expires_at` from `DateTime` to `DateTime | null`
* Add support for new value `none` on enum `V2.MoneyManagement.OutboundPaymentQuote.fx_quote.lock_status`
* Add support for new value `crypto_wallet` on enums `V2.MoneyManagement.OutboundSetupIntentCreateParams.payout_method_data.type`, `V2.MoneyManagement.OutboundSetupIntentUpdateParams.payout_method_data.type`, and `V2.MoneyManagement.PayoutMethod.type`
* Add support for `origin_type` on `V2.MoneyManagement.ReceivedCredit.bank_transfer`
* Remove support for `payment_method_type` on `V2.MoneyManagement.ReceivedCredit.bank_transfer`
* Add support for new value `prevented` on enum `Dispute.status`
* Add support for `mandate_data` and `payment_method_options` on `V2.Payments.OffSessionPaymentCreateParams`
* Add support for `type` on `V2.MoneyManagement.FinancialAddressCreateParams`
* Remove support for `currency` on `V2.MoneyManagement.FinancialAddressCreateParams`
* Add support for new values `financial_addressses.crypto_wallets`, `holds_currencies.usdc`, `outbound_payments.crypto_wallets`, and `outbound_transfers.crypto_wallets` on enum `EventsV2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent.updated_capability`
* Add support for thin event `V2BillingBillSettingUpdatedEvent` with related object `V2.Billing.BillSetting`
* Add support for error type `RateLimitError`
* Add support for error code `invalid_payout_method_crypto_wallet` on `InvalidPayoutMethodError`
