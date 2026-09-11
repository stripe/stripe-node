---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1422
is_stripe_api_change: true
released_in_version: 9.2.0
---

* Add support for new `Treasury` APIs: `CreditReversal`, `DebitReversal`, `FinancialAccountFeatures`, `FinancialAccount`, `FlowDetails`, `InboundTransfer`, `OutboundPayment`, `OutboundTransfer`, `ReceivedCredit`, `ReceivedDebit`, `TransactionEntry`, and `Transaction`
* Add support for `treasury` on `Issuing.Authorization`, `Issuing.Dispute`, `Issuing.Transaction`, and `Issuing.DisputeCreateParams`
* Add support for `retrieve_payment_method` method on resource `Customer`
* Add support for `list_owners` and `list` methods on resource `FinancialConnections.Account`
* Change `BillingPortal.ConfigurationCreateParams.features.customer_update.allowed_updates` to be optional
* Change type of `BillingPortal.Session.return_url` from `string` to `nullable(string)`
* Add support for `afterpay_clearpay`, `au_becs_debit`, `bacs_debit`, `eps`, `fpx`, `giropay`, `grabpay`, `klarna`, `paynow`, and `sepa_debit` on `Checkout.Session.payment_method_options`
* Add support for `financial_account` on `Issuing.Card` and `Issuing.CardCreateParams`
* Add support for `client_secret` on `Order`
* Add support for `networks` on `PaymentIntentConfirmParams.payment_method_options.us_bank_account`, `PaymentIntentCreateParams.payment_method_options.us_bank_account`, `PaymentIntentUpdateParams.payment_method_options.us_bank_account`, `PaymentMethod.us_bank_account`, `SetupIntentConfirmParams.payment_method_options.us_bank_account`, `SetupIntentCreateParams.payment_method_options.us_bank_account`, and `SetupIntentUpdateParams.payment_method_options.us_bank_account`
* Add support for `attach_to_self` and `flow_directions` on `SetupIntent`
* Add support for `save_default_payment_method` on `Subscription.payment_settings`, `SubscriptionCreateParams.payment_settings`, and `SubscriptionUpdateParams.payment_settings`
* Add support for `czk` on `Terminal.Configuration.tipping`, `Terminal.ConfigurationCreateParams.tipping`, and `Terminal.ConfigurationUpdateParams.tipping`
