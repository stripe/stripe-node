---
title: Update generated code for private-preview
pr_link: https://github.com/stripe/stripe-node/pull/2741
is_breaking: true
is_stripe_api_change: true
released_in_version: 22.3.0-alpha.2
---

* Add support for new resources `DelegatedCheckout.OrderEvent`, `DelegatedCheckout.Order`, `V2.Billing.ContractLicensePricingQuantityChange`, `V2.Billing.Contract`, and `V2.Signals.AccountSignal`
* Add support for `retrieve` method on resource `DelegatedCheckout.Order`
* Add support for `list_orders` method on resource `DelegatedCheckout.RequestedSession`
* Add support for `list` and `retrieve` methods on resource `V2.Signals.AccountSignal`
* Add support for `activate`, `cancel`, `create`, `list`, `retrieve`, and `update` methods on resource `V2.Billing.Contract`
* Add support for `birth_address` on `AccountCreateParams.individual`, `AccountCreatePersonParams`, `AccountUpdateParams.individual`, `AccountUpdatePersonParams`, `Person`, `TokenCreateParams.account.individual`, and `TokenCreateParams.person`
* Change type of `ChargeCaptureParams.payment_details.money_services.transaction_type`, `ChargeUpdateParams.payment_details.money_services.transaction_type`, `PaymentIntentCaptureParams.payment_details.money_services.transaction_type`, `PaymentIntentConfirmParams.payment_details.money_services.transaction_type`, `PaymentIntentCreateParams.payment_details.money_services.transaction_type`, and `PaymentIntentUpdateParams.payment_details.money_services.transaction_type` from `literal('account_funding')` to `enum('account_funding'|'debt_repayment')`
* ⚠️ Add support for new value `proserv` on enums `Checkout.Session.automatic_surcharge.provider` and `PaymentLink.automatic_surcharge.provider`
* Add support for `provisioning_decision` and `token_type` on `Issuing.Authorization.token_details` and `Issuing.Token`
* Add support for `token_decision_recommendation` on `Issuing.Authorization.token_details.network_data.visa` and `Issuing.Token.network_data.visa`
* Add support for `language` on `Issuing.Token.network_data.device`
* Add support for `digital_asset_category` on `PaymentIntentConfirmParams.payment_method_options.card.payment_details.money_services.account_funding`, `PaymentIntentConfirmParams.payment_method_options.card_present.payment_details.money_services.account_funding`, `PaymentIntentCreateParams.payment_method_options.card.payment_details.money_services.account_funding`, `PaymentIntentCreateParams.payment_method_options.card_present.payment_details.money_services.account_funding`, `PaymentIntentUpdateParams.payment_method_options.card.payment_details.money_services.account_funding`, and `PaymentIntentUpdateParams.payment_method_options.card_present.payment_details.money_services.account_funding`
* Add support for `static_address` on `PaymentIntent.payment_method_options.crypto.deposit_options`, `PaymentIntentConfirmParams.payment_method_options.crypto.deposit_options`, `PaymentIntentCreateParams.payment_method_options.crypto.deposit_options`, and `PaymentIntentUpdateParams.payment_method_options.crypto.deposit_options`
* Add support for `payment_reference` on `PaymentIntentCreateParams.payments_orchestration`
* ⚠️ Remove support for `payment_details` on `PaymentIntentCreateParams.payments_orchestration`
* ⚠️ Change type of `PaymentIntent.payment_details.money_services.transaction_type` from `literal('account_funding')` to `enum('account_funding'|'debt_repayment')`
* Add support for `ending_before`, `limit`, and `starting_after` on `PaymentLocationListParams`
* ⚠️ Change `Radar.IssuingAuthorizationEvaluationCreateParams.card_details.last4` to be required
* Add support for `schema` on `V2.Data.Reporting.QueryRun.result.file` and `V2.Reporting.ReportRun.result.file`
* ⚠️ Add support for new value `payout_method_amount_limit_exceeded` on enum `V2.MoneyManagement.OutboundPayment.status_details.failed.reason`
* Add support for `include` on `V2.Data.Reporting.QueryRunRetrieveParams` and `V2.Reporting.ReportRunRetrieveParams`
* Add support for `requirements_collector` on `V2.Core.AccountCreateParams.defaults.responsibilities` and `V2.Core.AccountUpdateParams.defaults.responsibilities`
* Add support for event notification `V2SignalsAccountSignalMerchantDelinquencyReadyEvent` with related object `V2.Signals.AccountSignal`
