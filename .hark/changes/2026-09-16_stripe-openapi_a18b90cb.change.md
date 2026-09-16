---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2843
semver_level: major
is_stripe_api_change: true
released_in_version: 22.7.0-alpha.4
---

* Add support for new resources `Apps.Install` and `V2.Core.Vault.NetworkToken`
* Add support for `create_from_credential`, `create`, `generate_cryptogram`, and `retrieve` methods on resource `V2.Core.Vault.NetworkToken`
* ⚠️ Remove support for `nesting_demo` on `AccountSession.components`
* Add support for `shared_payment_granted_token` on `Charge.payment_method_details`
* ⚠️ Change type of `Charge.payment_method_details.card.mandate` from `string` to `expandable(Mandate)`
* Add support for `current_trial` on `Checkout.Session.items[].subscription.items[]` and `Checkout.SessionCreateParams.items[].subscription.items[]`
* Add support for `verification_method` on `Checkout.Session.payment_method_options.bacs_debit` and `Checkout.SessionCreateParams.payment_method_options.bacs_debit`
* Add support for new value `sequra` on enum `Checkout.SessionCreateParams.payment_method_types`
* Add support for new values `address_validation_failed` and `person_verification_failed` on enum `Crypto.Customer.kyc_tiers[].verification_errors`
* Add support for new values `address_validation_failed` and `person_verification_failed` on enum `Crypto.Customer.verifications[].errors`
* Add support for new value `ripusd` on enums `Crypto.OnrampSession.transaction_details.destination_currency`, `Crypto.OnrampSessionCreateParams.destination_currency`, and `Crypto.OnrampSessionListParams.destination_currency`
* Add support for new value `ripusd` on enums `Crypto.OnrampSession.transaction_details.destination_currencies` and `Crypto.OnrampSessionCreateParams.destination_currencies`
* Add support for new values `cad`, `cop`, and `php` on enums `Crypto.OnrampSession.transaction_details.source_currency` and `Crypto.OnrampSessionCreateParams.source_currency`
* Add support for `appeal` on `Dispute.evidence`
* Add support for `bacs_debit` on `Invoice.payment_settings.payment_method_options`, `InvoiceCreateParams.payment_settings.payment_method_options`, `InvoiceUpdateParams.payment_settings.payment_method_options`, `QuotePreviewInvoice.payment_settings.payment_method_options`, `Subscription.payment_settings.payment_method_options`, `SubscriptionCreateParams.payment_settings.payment_method_options`, and `SubscriptionUpdateParams.payment_settings.payment_method_options`
* Add support for `pricing_token` on `InvoiceCreatePreviewParams`
* Add support for `expires_at` on `Mandate.payment_method_details.blik`, `PaymentIntent.next_action.swish_handle_redirect_or_display_qr_code.qr_code`, and `Subscription.payment_settings.payment_method_options.blik.mandate_options`
* ⚠️ Remove support for `expires_after` on `Mandate.payment_method_details.blik` and `Subscription.payment_settings.payment_method_options.blik.mandate_options`
* Add support for `momo` on `PaymentAttemptRecord.payment_method_details` and `PaymentRecord.payment_method_details`
* Add support for new values `2.3.0` and `2.3.1` on enums `PaymentAttemptRecord.payment_method_details.card.three_d_secure.version` and `PaymentRecord.payment_method_details.card.three_d_secure.version`
* Add support for `link` on `PaymentAttemptRecord.payment_method_details.card.wallet` and `PaymentRecord.payment_method_details.card.wallet`
* Add support for `funding_source_group` on `PaymentAttemptRecord.payment_method_details.link` and `PaymentRecord.payment_method_details.link`
* Add support for `payout_method_options` on `PayoutCreateParams`
* ⚠️ Change `ProductCatalog.TrialOffer.end_behavior.transition` to be optional
* Add support for `early_fraud_warning` and `fraudulent_dispute` on `Radar.PaymentEvaluation.signals`
* ⚠️ Remove support for `igic` on `Tax.Registration.country_options.at`, `Tax.Registration.country_options.be`, `Tax.Registration.country_options.bg`, `Tax.Registration.country_options.cy`, `Tax.Registration.country_options.cz`, `Tax.Registration.country_options.de`, `Tax.Registration.country_options.dk`, `Tax.Registration.country_options.ee`, `Tax.Registration.country_options.fi`, `Tax.Registration.country_options.fr`, `Tax.Registration.country_options.gr`, `Tax.Registration.country_options.hr`, `Tax.Registration.country_options.hu`, `Tax.Registration.country_options.ie`, `Tax.Registration.country_options.it`, `Tax.Registration.country_options.lt`, `Tax.Registration.country_options.lu`, `Tax.Registration.country_options.lv`, `Tax.Registration.country_options.mt`, `Tax.Registration.country_options.nl`, `Tax.Registration.country_options.pl`, `Tax.Registration.country_options.pt`, `Tax.Registration.country_options.ro`, `Tax.Registration.country_options.se`, `Tax.Registration.country_options.si`, and `Tax.Registration.country_options.sk`
* Add support for new value `igic` on enum `Tax.Registration.country_options.es.type`
* Add support for `metadata` on `V2.Billing.Contract.one_time_fees.data[]`, `V2.Billing.ContractCreateParams.one_time_fees[]`, `V2.Billing.ContractUpdateParams.one_time_fee_actions[].add`, and `V2.Billing.ContractUpdateParams.one_time_fee_actions[].update`
* Add support for `bank_account` and `crypto_wallet` on `V2.MoneyManagement.FinancialAddressCreateParams` and `V2.MoneyManagement.FinancialAddress`
* Add support for `type` on `V2.MoneyManagement.FinancialAddress` and `V2.MoneyManagement.ReceivedCredit.crypto_wallet_transfer`
* ⚠️ Remove support for `credentials` and `currency` on `V2.MoneyManagement.FinancialAddress`
* Add support for `amount_received` on `V2.MoneyManagement.ReceivedCredit`
* Add support for `originating_bank_account` on `V2.MoneyManagement.ReceivedCredit.bank_transfer`
* ⚠️ Remove support for `origin_type` on `V2.MoneyManagement.ReceivedCredit.bank_transfer` and `V2.MoneyManagement.ReceivedCredit.crypto_wallet_transfer`
* Add support for `latest_payment_attempt_record_details` on `V2.Payments.OffSessionPayment`
* Add support for `account_reviewed` on `V2.Signals.AccountActivityCreateParams` and `V2.Signals.AccountActivity`
* Add support for new value `account_reviewed` on enums `V2.Signals.AccountActivity.type`, `V2.Signals.AccountActivityCreateParams.type`, and `V2.Signals.AccountEvaluationCreateParams.account_activity_details.data.type`
* ⚠️ Change `V2.Signals.PaymentRetrySignal.payment_record` to be optional
* Add support for `include` on `V2.Payments.OffSessionPaymentCreateParams`
* ⚠️ Remove support for `include` on `V2.MoneyManagement.FinancialAddressListParams` and `V2.MoneyManagement.FinancialAddressRetrieveParams`
* ⚠️ Remove support for `crypto_properties` and `sepa_bank_account` on `V2.MoneyManagement.FinancialAddressCreateParams`
* ⚠️ Add support for new value `bank_account` on enum `V2.MoneyManagement.FinancialAddressCreateParams.type`
* ⚠️ Remove support for values `ca_bank_account`, `gb_bank_account`, `mx_bank_account`, `sepa_bank_account`, and `us_bank_account` from enum `V2.MoneyManagement.FinancialAddressCreateParams.type`
* Add support for error type `MerchantNotGatedError`
* Add support for error code `merchant_not_enrolled` on `BlockedByStripeError`
* Add support for error codes `card_brand_not_supported`, `cryptogram_type_unsupported`, `network_token_not_active`, and `tokenization_not_supported` on `CannotProceedError`
* Add support for error codes `billing_contract_rate_limit_exceeded` and `cryptogram_rate_limit` on `RateLimitError`
