---
title: Update generated code for private-preview
pr_link: https://github.com/stripe/stripe-node/pull/2793
is_breaking: true
is_stripe_api_change: true
released_in_version: 22.5.0-alpha.1
---

* Add support for new resources `V2.MoneyManagement.ReceivedDebitMandate`, `V2.Risk.Inquiry`, `V2.Signals.AccountActivity`, and `V2.Signals.AccountEvaluation`
* Add support for `create` and `retrieve` methods on resource `V2.Signals.AccountEvaluation`
* Add support for `create`, `del`, and `retrieve` methods on resource `V2.Signals.AccountActivity`
* Add support for `list`, `retrieve`, and `update` methods on resource `V2.Risk.Inquiry`
* Add support for `cancel`, `list`, and `retrieve` methods on resource `V2.MoneyManagement.ReceivedDebitMandate`
* Add support for `rate_cards` on `Billing.CreditBalanceSummaryRetrieveParams.filter.applicability_scope`, `Billing.CreditGrant.applicability_config.scope`, and `Billing.CreditGrantCreateParams.applicability_config.scope`
* ⚠️ Change type of `ConfirmationToken.payment_method_preview.gift_card.brand`, `GiftCard.brand`, `GiftCardCreateParams.brand`, `PaymentMethod.gift_card.brand`, `Terminal.ReaderActivateGiftCardParams.brand`, `Terminal.ReaderCashoutGiftCardParams.brand`, `Terminal.ReaderCheckGiftCardBalanceParams.brand`, and `Terminal.ReaderReloadGiftCardParams.brand` from `enum('fiserv_valuelink'|'givex'|'svs')` to `literal('svs')`
* Add support for new value `tempo` on enum `Crypto.CustomerConsumerWallet.network`
* Add support for new value `tempo` on enums `Crypto.OnrampSession.transaction_details.destination_network`, `Crypto.OnrampSessionCreateParams.destination_network`, `Crypto.OnrampSessionListParams.destination_network`, and `Crypto.OnrampTransactionLimitRetrieveParams.destination_network`
* Add support for new value `tempo` on enums `Crypto.OnrampSession.transaction_details.destination_networks` and `Crypto.OnrampSessionCreateParams.destination_networks`
* Add support for `tempo` on `Crypto.OnrampSession.transaction_details.wallet_addresses`
* Add support for new value `try_again_later` on enum `GiftCardOperation.failure_code`
* Add support for `healthcare` on `Issuing.Authorization`
* Add support for `product_code` on `Issuing.CardCreateParams`, `Issuing.CardUpdateParams`, and `Issuing.Card`
* Add support for `product_graduation_state` on `Issuing.Card`
* Add support for `cvc` and `number` on `Radar.PaymentEvaluationCreateParams.payment_details.payment_method_details.card`
* Change `Radar.PaymentEvaluationCreateParams.payment_details.payment_method_details.card.first6` to be optional
* Change `Radar.PaymentEvaluationCreateParams.payment_details.payment_method_details.card.last4` to be optional
* Add support for `card` on `Radar.PaymentEvaluation.payment_details.payment_method_details`
* ⚠️ Change type of `Terminal.ReaderCollectPaymentMethodParams.collect_config.gift_card_brand` and `Terminal.ReaderProcessPaymentIntentParams.process_config.gift_card_brand` from `enum('fiserv_valuelink'|'givex'|'svs')` to `literal('svs')`
* Add support for `gift_card` on `Terminal.ReaderPresentPaymentMethodParams.testHelpers`
* Add support for new value `gift_card` on enum `Terminal.ReaderPresentPaymentMethodParams.testHelpers.type`
* Add support for `amount_due` and `customer_balance_applied` on `V2.Billing.Intent.amount_details`
* ⚠️ Change type of `V2.Core.AccountEvaluation.evaluations_triggered` from `literal('fraudulent_website')` to `enum('fraudulent_website'|'user_account_sharing'|'user_multi_accounting')`
* Add support for `gross_settlement` on `V2.Core.Account.configuration.merchant`, `V2.Core.AccountCreateParams.configuration.merchant`, and `V2.Core.AccountUpdateParams.configuration.merchant`
* ⚠️ Change type of `V2.MoneyManagement.DebitDispute.bank_transfer.network` from `literal('ach')` to `enum('ach'|'bacs')`
* Add support for new values `beneficiary_unrecognized`, `mandate_canceled_by_stripe`, `mandate_canceled`, `no_advance_notice`, `originator_requested`, and `signature_invalid` on enum `V2.MoneyManagement.DebitDispute.bank_transfer.reason`
* ⚠️ Remove support for `managed_by` on `V2.MoneyManagement.FinancialAccount`
* Add support for `payout_intent` on `V2.MoneyManagement.OutboundPayment`
* Add support for `settles_at` on `V2.MoneyManagement.ReceivedDebit`
* Add support for `gb_bank_account` on `V2.MoneyManagement.ReceivedDebit.bank_transfer`
* ⚠️ Change type of `V2.MoneyManagement.ReceivedDebit.bank_transfer.origin_type` from `literal('us_bank_account')` to `enum('gb_bank_account'|'us_bank_account')`
* ⚠️ Change type of `V2.MoneyManagement.ReceivedDebit.bank_transfer.payment_method_type` from `literal('us_bank_account')` to `enum('gb_bank_account'|'us_bank_account')`
* Add support for new value `scheduled` on enum `V2.MoneyManagement.ReceivedDebit.status`
* Add support for new value `no_mandate` on enum `V2.MoneyManagement.ReceivedDebit.status_details.failed.reason`
* Add support for `target_date` on `V2.Payments.OffSessionPaymentCreateParams` and `V2.Payments.OffSessionPayment`
* Add support for `account_evaluation`, `fraudulent_website`, `payment_delinquency_exposure`, `user_account_sharing`, and `user_multi_accounting` on `V2.Signals.AccountSignal`
* Add support for new values `fraudulent_website`, `user_account_sharing`, and `user_multi_accounting` on enums `V2.Signals.AccountSignal.type` and `V2.Signals.AccountSignalListParams.type`
* Change type of `V2.MoneyManagement.FinancialAddressDebitSimulationDebitParams.network` from `literal('ach')` to `enum('ach'|'bacs')`
* Add support for `received_debit_mandate` on `V2.MoneyManagement.ReceivedDebitListParams`
* ⚠️ Remove support for `payout_intent` on `V2.MoneyManagement.OutboundPaymentCreateParams`
* Change type of `V2.Core.AccountEvaluationCreateParams.signals` from `literal('fraudulent_website')` to `enum('fraudulent_website'|'user_account_sharing'|'user_multi_accounting')`
* ⚠️ Remove support for `id` on `EventsV2SignalsAccountSignalFraudulentMerchantReadyEvent`
* Add support for event notifications `V2MoneyManagementReceivedDebitCreatedEvent` and `V2MoneyManagementReceivedDebitScheduledEvent` with related object `V2.MoneyManagement.ReceivedDebit`
* Add support for event notifications `V2MoneyManagementReceivedDebitMandateCanceledEvent`, `V2MoneyManagementReceivedDebitMandateCreatedEvent`, `V2MoneyManagementReceivedDebitMandateExpiredEvent`, `V2MoneyManagementReceivedDebitMandatePendingCancellationEvent`, and `V2MoneyManagementReceivedDebitMandateUpdatedEvent` with related object `V2.MoneyManagement.ReceivedDebitMandate`
* Add support for event notification `V2SignalsAccountEvaluationCompleteEvent` with related object `V2.Signals.AccountEvaluation`
* Add support for event notifications `V2SignalsAccountSignalFraudulentWebsiteReadyEvent` and `V2SignalsAccountSignalPaymentDelinquencyExposureReadyEvent` with related object `V2.Signals.AccountSignal`
