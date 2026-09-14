---
title: Update generated code for beta
pr_url: https://github.com/stripe/stripe-node/pull/2487
is_stripe_api_change: true
released_in_version: 20.1.0-beta.1
---

* Add support for new resources `V2.Core.AccountPersonToken` and `V2.Core.AccountToken`
* Remove support for resource `V2.Payments.OffSessionPayment`
* Add support for `create` and `retrieve` methods on resources `V2.Core.AccountPersonToken` and `V2.Core.AccountToken`
* Remove support for `cancel`, `capture`, `create`, `list`, and `retrieve` methods on resource `V2.Payments.OffSessionPayment`
* Add support for `specified_commercial_transactions_act_url` on `Account.business_profile`, `AccountCreateParams.business_profile`, and `AccountUpdateParams.business_profile`
* Add support for `paypay_payments` on `Account.settings`, `AccountCreateParams.settings`, and `AccountUpdateParams.settings`
* Change `Tax.Association.tax_transaction_attempts` to be required
* Change type of `Billing.Analytics.MeterUsageRetrieveParams.meters[].dimension_filters` from `string` to `array(string)`
* Change type of `Billing.Analytics.MeterUsageRetrieveParams.meters[].tenant_filters` from `string` to `array(string)`
* Add support for `car_rental_data`, `flight_data`, and `lodging_data` on `ChargeCaptureParams.payment_details`, `ChargeUpdateParams.payment_details`, `PaymentIntentCaptureParams.payment_details`, `PaymentIntentConfirmParams.payment_details`, `PaymentIntentCreateParams.payment_details`, and `PaymentIntentUpdateParams.payment_details`
* Add support for `supplementary_purchase_data` on `OrderCreateParams.payment.settings.payment_method_options.klarna`, `OrderUpdateParams.payment.settings.payment_method_options.klarna`, `PaymentIntentConfirmParams.payment_method_options.klarna`, `PaymentIntentCreateParams.payment_method_options.klarna`, and `PaymentIntentUpdateParams.payment_method_options.klarna`
* Add support for `allow_redisplay` and `customer_account` on `PaymentMethodListParams`
* Add support for `future_requirements` on `V2.Core.Account`
* Add support for `konbini_payments` and `script_statement_descriptor` on `V2.Core.Account.configuration.merchant`, `V2.Core.AccountCreateParams.configuration.merchant`, and `V2.Core.AccountUpdateParams.configuration.merchant`
* Add support for `eur` on `V2.Core.Account.configuration.storer.capabilities.holds_currencies`, `V2.Core.AccountCreateParams.configuration.storer.capabilities.holds_currencies`, and `V2.Core.AccountUpdateParams.configuration.storer.capabilities.holds_currencies`
* Add support for `requirements_collector` on `V2.Core.Account.defaults.responsibilities`
* Add support for new value `ar_cuit` on enums `V2.Core.Account.identity.business_details.id_numbers[].type`, `V2.Core.AccountCreateParams.identity.business_details.id_numbers[].type`, and `V2.Core.AccountUpdateParams.identity.business_details.id_numbers[].type`
* Add support for new value `ar_dni` on enums `V2.Core.Account.identity.individual.id_numbers[].type`, `V2.Core.AccountCreateParams.identity.individual.id_numbers[].type`, `V2.Core.AccountPerson.id_numbers[].type`, `V2.Core.AccountPersonCreateParams.id_numbers[].type`, `V2.Core.AccountPersonUpdateParams.id_numbers[].type`, and `V2.Core.AccountUpdateParams.identity.individual.id_numbers[].type`
* Remove support for `collector` on `V2.Core.Account.requirements`
* Add support for new value `holds_currencies.eur` on enum `V2.Core.Account.requirements.entries[].impact.restricts_capabilities[].capability`
* Add support for new values `payment_method` and `person` on enum `V2.Core.Account.requirements.entries[].reference.type`
* Remove support for value `resource` from enum `V2.Core.Account.requirements.entries[].reference.type`
* Remove support for value `future_requirements` from enum `V2.Core.Account.requirements.entries[].requested_reasons[].code`
* Add support for `changes` on `V2.Core.Event`
* Remove support for value `sepa_bank_account` from enums `V2.MoneyManagement.FinancialAddress.credentials.type` and `V2.MoneyManagement.FinancialAddressCreateParams.type`
* Add support for `account_token` on `V2.Core.AccountCreateParams` and `V2.Core.AccountUpdateParams`
* Add support for new value `future_requirements` on enums `V2.Core.AccountCreateParams.include`, `V2.Core.AccountRetrieveParams.include`, and `V2.Core.AccountUpdateParams.include`
* Add support for `person_token` on `V2.Core.AccountPersonCreateParams` and `V2.Core.AccountPersonUpdateParams`
* Add support for `changes` on `v2.core.Event`
* Add support for thin event `V2CoreHealthEventGenerationFailureResolvedEvent`
* Remove support for thin events `V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEvent`, `V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEvent`, `V2PaymentsOffSessionPaymentCanceledEvent`, `V2PaymentsOffSessionPaymentCreatedEvent`, `V2PaymentsOffSessionPaymentFailedEvent`, `V2PaymentsOffSessionPaymentRequiresCaptureEvent`, and `V2PaymentsOffSessionPaymentSucceededEvent` with related object `V2.Payments.OffSessionPayment`
