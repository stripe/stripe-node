---
title: Pull in V2 FinancialAccount changes for June release
pr_url: https://github.com/stripe/stripe-node/pull/2367
is_stripe_api_change: true
released_in_version: 18.4.0-beta.2
---

* Add support for `close` and `create` methods on resource `V2.MoneyManagement.FinancialAccount`
* Add support for new value `storer` on enums `V2.Core.Account.applied_configurations` and `V2.Core.AccountCloseParams.applied_configurations`
* Add support for `storer` on `V2.Core.Account.configuration`, `V2.Core.AccountCreateParams.configuration`, and `V2.Core.AccountUpdateParams.configuration`
* Add support for new values `financial_addresses.bank_accounts`, `holds_currencies.gbp`, `inbound_transfers.financial_accounts`, `outbound_payments.bank_accounts`, `outbound_payments.cards`, `outbound_payments.financial_accounts`, `outbound_transfers.bank_accounts`, and `outbound_transfers.financial_accounts` on enum `V2.Core.Account.requirements.entries[].impact.restricts_capabilities[].capability`
* Add support for new value `storer` on enum `V2.Core.Account.requirements.entries[].impact.restricts_capabilities[].configuration`
* Add support for `status_details` on `V2.MoneyManagement.FinancialAccount`
* Add support for `status` on `V2.MoneyManagement.FinancialAccountListParams`
* Add support for new value `configuration.storer` on enums `V2.Core.AccountCreateParams.include`, `V2.Core.AccountRetrieveParams.include`, and `V2.Core.AccountUpdateParams.include`
* Add support for thin events `V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent` and `V2CoreAccountIncludingConfigurationStorerUpdatedEvent` with related object `V2.Core.Account`
* Add support for error types `AlreadyExistsError` and `NonZeroBalanceError`
