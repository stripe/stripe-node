---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2882
semver_level: major
is_stripe_api_change: true
---

* Add support for new resources `Radar.Rule` and `V2.MoneyManagement.FundingSession`
* Add support for `create` method on resource `V2.MoneyManagement.FundingSession`
* ⚠️ Change type of `Charge.outcome.rule` from `RadarRule` to `Radar.Rule`
* Add support for new value `ousd` on enums `Charge.payment_method_details.crypto.token_currency`, `PaymentAttemptRecord.payment_method_details.crypto.token_currency`, and `PaymentRecord.payment_method_details.crypto.token_currency`
* Add support for `payment_settings` on `Checkout.SessionCreateParams` and `Checkout.Session`
* Add support for `on_behalf_of` on `Checkout.Session`
* Add support for new values `fednow` and `rtp` on enum `CustomerCashBalanceTransaction.funded.bank_transfer.us_bank_transfer.network`
* Add support for `fuels` on `Issuing.Transaction.purchase_details`
* Add support for `fleet` on `PaymentIntent.payment_method_options.card_present`, `PaymentIntentConfirmParams.payment_method_options.card_present`, `PaymentIntentCreateParams.payment_method_options.card_present`, and `PaymentIntentUpdateParams.payment_method_options.card_present`
* Add support for `subscription_reference` on `PaymentIntent.payment_method_options.paypay`, `PaymentIntentConfirmParams.payment_method_options.paypay`, `PaymentIntentCreateParams.payment_method_options.paypay`, and `PaymentIntentUpdateParams.payment_method_options.paypay`
* Add support for `us_bank_account` on `Radar.PaymentEvaluation.payment_details.money_movement_details` and `Radar.PaymentEvaluationCreateParams.payment_details.money_movement_details`
* Change type of `Radar.PaymentEvaluationCreateParams.payment_details.money_movement_details.money_movement_type` from `literal('card')` to `enum('card'|'us_bank_account')`
* Add support for `rules` on `Radar.PaymentEvaluation`
* ⚠️ Change type of `Radar.PaymentEvaluation.payment_details.money_movement_details.money_movement_type` from `literal('card')` to `enum('card'|'us_bank_account')`
* Add support for new values `request_three_d_secure` and `reroute` on enum `Radar.PaymentEvaluation.recommended_action`
* Add support for `bank_initiated_return` on `Radar.PaymentEvaluation.signals`
* Add support for `account` on `V2.MoneyManagement.FinancialAddressCreateParams`, `V2.MoneyManagement.FinancialAddressListParams`, and `V2.MoneyManagement.FinancialAddress`
* Add support for new values `bre_b` and `pix` on enum `V2.MoneyManagement.FinancialAddress.bank_account.type`
* Add support for `supported_network_details` on `V2.MoneyManagement.FinancialAddress.crypto_wallet`
* Add support for new value `bitcoin` on enums `V2.MoneyManagement.FinancialAddress.crypto_wallet.network`, `V2.MoneyManagement.FinancialAddressCreateParams.crypto_wallet.network`, and `V2.MoneyManagement.ReceivedCredit.crypto_wallet_transfer.crypto_wallet.network`
* Add support for `network_details` on `V2.MoneyManagement.InboundTransferCreateParams` and `V2.MoneyManagement.InboundTransfer`
* Add support for `originating_crypto_wallet`, `token_currency`, and `transaction_hash` on `V2.MoneyManagement.ReceivedCredit.crypto_wallet_transfer`
* Add support for new values `brl` and `cop` on enum `V2.MoneyManagement.FinancialAddressCreateParams.bank_account.currency`
* Add support for `customer` and `subscription` on `EventsV1InvoiceUpcomingEvent`
