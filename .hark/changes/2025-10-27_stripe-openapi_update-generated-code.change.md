---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/2443
is_stripe_api_change: true
released_in_version: 19.3.0-beta.1
---

* Add support for `update` method on resource `V2.MoneyManagement.FinancialAccount`
* Add support for `confirm_microdeposits`, `list`, and `send_microdeposits` methods on resource `V2.Core.Vault.UsBankAccount`
* Add support for `list` method on resource `V2.Core.Vault.GbBankAccount`
* Add support for new value `verification_data_not_found` on enums `Account.future_requirements.errors[].code`, `Account.requirements.errors[].code`, `BankAccount.future_requirements.errors[].code`, `BankAccount.requirements.errors[].code`, `Capability.future_requirements.errors[].code`, `Capability.requirements.errors[].code`, `Person.future_requirements.errors[].code`, and `Person.requirements.errors[].code`
* Add support for `payment_portal_url` on `Charge.payment_method_details.rechnung`, `PaymentAttemptRecord.payment_method_details.rechnung`, and `PaymentRecord.payment_method_details.rechnung`
* Add support for `tax_id_element` on `CustomerSession.components` and `CustomerSessionCreateParams.components`
* Add support for `starting_after` on `PaymentAttemptRecordListParams`
* Add support for new value `solana` on enums `PaymentAttemptRecord.payment_method_details.crypto.network` and `PaymentRecord.payment_method_details.crypto.network`
* Add support for `reference` on `PaymentIntentAmountDetailsLineItem.payment_method_options.klarna`, `PaymentIntentCaptureParams.amount_details.line_items[].payment_method_options.klarna`, `PaymentIntentConfirmParams.amount_details.line_items[].payment_method_options.klarna`, `PaymentIntentCreateParams.amount_details.line_items[].payment_method_options.klarna`, `PaymentIntentIncrementAuthorizationParams.amount_details.line_items[].payment_method_options.klarna`, and `PaymentIntentUpdateParams.amount_details.line_items[].payment_method_options.klarna`
* Change `PaymentIntent.payment_details.customer_reference` to be required
* Change `PaymentIntent.payment_details.order_reference` to be required
* Add support for `subscription_reference` on `PaymentIntentAmountDetailsLineItem.payment_method_options.klarna`
* Add support for `closed` on `V2.Core.AccountListParams` and `V2.Core.Account`
* Add support for new value `payment_method` on enums `V2.Core.Account.configuration.customer.automatic_indirect_tax.location_source`, `V2.Core.AccountCreateParams.configuration.customer.automatic_indirect_tax.location_source`, and `V2.Core.AccountUpdateParams.configuration.customer.automatic_indirect_tax.location_source`
* Add support for `usd` on `V2.Core.Account.configuration.storer.capabilities.holds_currencies`, `V2.Core.AccountCreateParams.configuration.storer.capabilities.holds_currencies`, and `V2.Core.AccountUpdateParams.configuration.storer.capabilities.holds_currencies`
* Add support for new values `application_custom` and `application_express` on enums `V2.Core.Account.defaults.responsibilities.fees_collector`, `V2.Core.AccountCreateParams.defaults.responsibilities.fees_collector`, and `V2.Core.AccountUpdateParams.defaults.responsibilities.fees_collector`
* Add support for `representative_declaration` on `V2.Core.Account.identity.attestations`, `V2.Core.AccountCreateParams.identity.attestations`, and `V2.Core.AccountUpdateParams.identity.attestations`
* Add support for new value `holds_currencies.usd` on enum `V2.Core.Account.requirements.entries[].impact.restricts_capabilities[].capability`
* Add support for `verification` on `V2.Core.Vault.UsBankAccount`
* Add support for `v1_id` on `EventsV2MoneyManagementTransactionCreatedEvent`
* Remove support for thin event `V2BillingBillSettingUpdatedEvent` with related object `V2.Billing.BillSetting`
* Add support for error code `payment_intent_rate_limit_exceeded` on `QuotePreviewInvoice.last_finalization_error`
* Add support for error codes `blocked_payout_method_crypto_wallet` and `unsupported_payout_method_crypto_wallet` on `BlockedByStripeError`
* Add support for error code `outbound_flow_from_closed_financial_account_unsupported` on `FeatureNotEnabledError`
* Add support for error code `limit_payout_method_crypto_wallet` on `QuotaExceededError`
