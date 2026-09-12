---
title: Update generated code for beta
pr_url: https://github.com/stripe/stripe-node/pull/2298
is_stripe_api_change: true
released_in_version: 18.1.0-beta.2
---

### Breaking changes
* Change type of `V2.MoneyManagement.ReceivedDebit.status_transitions` from `an object` to `an object | null`
* Remove support for values `bank_accounts.local_uk`, `bank_accounts.wire_uk`, `cards_uk`, and `crypto_wallets_v2` from enum `EventsV2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent.updated_capability`

### Additions
* Add support for new resources `Privacy.RedactionJobRootObjects`, `Privacy.RedactionJobValidationError`, and `Privacy.RedactionJob`
* Add support for `cancel`, `create`, `list`, `retrieve`, `run`, `update`, and `validate` methods on resource `RedactionJob`
* Add support for `list` and `retrieve` methods on resource `RedactionJobValidationError`
* Add support for `minority_owned_business_designation` on `Account.business_profile`, `AccountCreateParams.business_profile`, and `AccountUpdateParams.business_profile`
* Add support for new value `verification_legal_entity_structure_mismatch` on enums `Account.future_requirements.errors[].code`, `Account.requirements.errors[].code`, `AccountCapability.future_requirements.errors[].code`, `AccountCapability.requirements.errors[].code`, `AccountPerson.future_requirements.errors[].code`, `AccountPerson.requirements.errors[].code`, `BankAccount.future_requirements.errors[].code`, and `BankAccount.requirements.errors[].code`
* Add support for `export_tax_transactions` and `payment_disputes` on `AccountSessionCreateParams.components`
* Add support for new value `tax_id_prohibited` on enums `Invoice.last_finalization_error.code`, `PaymentIntent.last_payment_error.code`, `QuotePreviewInvoice.last_finalization_error.code`, `SetupAttempt.setup_error.code`, `SetupIntent.last_setup_error.code`, and `StripeError.code`
* Add support for new value `fixed_term_loan` on enum `Capital.FinancingOffer.type`
* Add support for `wallet_options` on `Checkout.SessionCreateParams` and `Checkout.Session`
* Add support for new values `privacy.redaction_job.canceled`, `privacy.redaction_job.created`, `privacy.redaction_job.ready`, `privacy.redaction_job.succeeded`, and `privacy.redaction_job.validation_error` on enum `Event.type`
* Add support for `klarna` on `PaymentMethodDomain`
* Change type of `Tax.CalculationLineItem.reference` from `string | null` to `string`
* Add support for `in` on `Tax.Registration.country_options` and `Tax.RegistrationCreateParams.country_options`
* Add support for new values `privacy.redaction_job.canceled`, `privacy.redaction_job.created`, `privacy.redaction_job.ready`, `privacy.redaction_job.succeeded`, and `privacy.redaction_job.validation_error` on enums `WebhookEndpointCreateParams.enabled_events` and `WebhookEndpointUpdateParams.enabled_events`
