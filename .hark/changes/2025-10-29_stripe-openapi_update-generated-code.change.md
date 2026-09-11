---
title: Update generated code for private-preview
pr_link: https://github.com/stripe/stripe-node/pull/2476
is_stripe_api_change: true
released_in_version: 19.3.0-alpha.1
---

* Add support for `report_refund` method on resource `PaymentRecord`
* Add support for `representative_declaration` on `Account.company`, `AccountCreateParams.company`, `AccountUpdateParams.company`, and `TokenCreateParams.account.company`
* Add support for new value `verification_data_not_found` on enums `Account.future_requirements.errors[].code`, `Account.requirements.errors[].code`, `BankAccount.future_requirements.errors[].code`, `BankAccount.requirements.errors[].code`, `Capability.future_requirements.errors[].code`, `Capability.requirements.errors[].code`, `Person.future_requirements.errors[].code`, and `Person.requirements.errors[].code`
* Add support for `tenants` on `Billing.Analytics.MeterUsageRow`
* Add support for `transfer` on `ApplicationFee.fee_source`
* Add support for new value `transfer` on enum `ApplicationFee.fee_source.type`
* Add support for `transit_balances_total` on `Balance`
* Add support for new value `transit` on enum `BalanceTransaction.balance_type`
* Add support for `tenant_group_by_keys` on `Billing.Analytics.MeterUsageRetrieveParams.meters[]`
* Change `Billing.CreditGrantCreateParams.category` to be optional
* Add support for `payment_method_configuration` on `BillingPortal.ConfigurationCreateParams.features.payment_method_update` and `BillingPortal.ConfigurationUpdateParams.features.payment_method_update`
* Add support for new value `solana` on enums `Charge.payment_method_details.crypto.network`, `PaymentAttemptRecord.payment_method_details.crypto.network`, and `PaymentRecord.payment_method_details.crypto.network`
* Add support for `payment_portal_url` on `Charge.payment_method_details.rechnung`, `PaymentAttemptRecord.payment_method_details.rechnung`, and `PaymentRecord.payment_method_details.rechnung`
* Add support for `twint` on `Checkout.Session.payment_method_options` and `Checkout.SessionCreateParams.payment_method_options`
* Add support for new value `custom` on enums `ConfirmationToken.payment_method_preview.type` and `PaymentMethod.type`
* Change `CreditNote.refunds[].payment_record_refund` to be required
* Change `CreditNote.refunds[].type` to be required
* Add support for `customer_sheet`, `mobile_payment_element`, and `tax_id_element` on `CustomerSession.components` and `CustomerSessionCreateParams.components`
* Add support for new value `custom` on enums `CustomerListPaymentMethodsParams.type`, `PaymentMethodCreateParams.type`, and `PaymentMethodListParams.type`
* Add support for `provider` on `Customer.tax`
* Remove support for `risk_details` on `DelegatedCheckout.RequestedSessionCreateParams`
* Add support for `risk_details` on `DelegatedCheckout.RequestedSessionConfirmParams`
* Add support for new value `platform_terms_of_service` on enums `File.purpose` and `FileListParams.purpose`
* Add support for new value `platform_terms_of_service` on enum `FileCreateParams.purpose`
* Add support for `starting_after` on `PaymentAttemptRecordListParams`
* Add support for `reference` on `PaymentIntentAmountDetailsLineItem.payment_method_options.klarna`, `PaymentIntentCaptureParams.amount_details.line_items[].payment_method_options.klarna`, `PaymentIntentConfirmParams.amount_details.line_items[].payment_method_options.klarna`, `PaymentIntentCreateParams.amount_details.line_items[].payment_method_options.klarna`, `PaymentIntentIncrementAuthorizationParams.amount_details.line_items[].payment_method_options.klarna`, and `PaymentIntentUpdateParams.amount_details.line_items[].payment_method_options.klarna`
* Add support for `allocated_funds` on `PaymentIntent`
* Change `PaymentIntent.payment_details.customer_reference` to be required
* Change `PaymentIntent.payment_details.order_reference` to be required
* Add support for `subscription_reference` on `PaymentIntentAmountDetailsLineItem.payment_method_options.klarna`
* Add support for `name_collection` on `PaymentLinkCreateParams`, `PaymentLinkUpdateParams`, and `PaymentLink`
* Add support for `crypto` on `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, `PaymentMethodConfiguration`, and `Refund.destination_details`
* Add support for `mb_way` on `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, and `PaymentMethodConfiguration`
* Add support for `custom` on `PaymentMethodCreateParams` and `PaymentMethod`
* Add support for `excluded_payment_method_types` on `SetupIntentCreateParams`, `SetupIntentUpdateParams`, and `SetupIntent`
* Change `SetupIntent.flow_directions` to be optional
* Add support for `tw` on `Tax.Registration.country_options` and `Tax.RegistrationCreateParams.country_options`
* Add support for `gip` on `Terminal.Configuration.tipping`, `Terminal.ConfigurationCreateParams.tipping`, and `Terminal.ConfigurationUpdateParams.tipping`
* Add support for `last_seen_at` on `Terminal.Reader`
* Add support for `application_fee_amount` on `TransferCreateParams` and `Transfer`
* Add support for `application_fee` on `Transfer`
* Add support for new value `2025-10-29.clover` on enum `WebhookEndpointCreateParams.api_version`
* Add support for `high_risk_activities_description`, `high_risk_activities`, `money_services_description`, `operates_in_prohibited_countries`, `participates_in_regulated_activity`, `purpose_of_funds_description`, `purpose_of_funds`, `regulated_activity`, `source_of_funds_description`, and `source_of_funds` on `V2.Core.Account.configuration.storer`, `V2.Core.AccountCreateParams.configuration.storer`, and `V2.Core.AccountUpdateParams.configuration.storer`
* Add support for `crypto_wallets` on `V2.Core.Account.configuration.storer.capabilities.financial_addresses`, `V2.Core.Account.configuration.storer.capabilities.outbound_payments`, `V2.Core.Account.configuration.storer.capabilities.outbound_transfers`, `V2.Core.AccountCreateParams.configuration.storer.capabilities.financial_addresses`, `V2.Core.AccountCreateParams.configuration.storer.capabilities.outbound_payments`, `V2.Core.AccountCreateParams.configuration.storer.capabilities.outbound_transfers`, `V2.Core.AccountUpdateParams.configuration.storer.capabilities.financial_addresses`, `V2.Core.AccountUpdateParams.configuration.storer.capabilities.outbound_payments`, and `V2.Core.AccountUpdateParams.configuration.storer.capabilities.outbound_transfers`
* Add support for `usdc` on `V2.Core.Account.configuration.storer.capabilities.holds_currencies`, `V2.Core.AccountCreateParams.configuration.storer.capabilities.holds_currencies`, and `V2.Core.AccountUpdateParams.configuration.storer.capabilities.holds_currencies`
* Add support for `crypto_storer` on `V2.Core.Account.identity.attestations.terms_of_service` and `V2.Core.AccountCreateParams.identity.attestations.terms_of_service`
* Add support for `compliance_screening_description` on `V2.Core.Account.identity.business_details`, `V2.Core.AccountCreateParams.identity.business_details`, and `V2.Core.AccountUpdateParams.identity.business_details`
* Add support for `external_amount` on `V2.MoneyManagement.ReceivedCredit` and `V2.MoneyManagement.ReceivedDebit`
* Add support for error code `payment_intent_rate_limit_exceeded` on `Invoice.last_finalization_error`, `PaymentIntent.last_payment_error`, `QuotePreviewInvoice.last_finalization_error`, `SetupAttempt.setup_error`, `SetupIntent.last_setup_error`, and `StripeError`
