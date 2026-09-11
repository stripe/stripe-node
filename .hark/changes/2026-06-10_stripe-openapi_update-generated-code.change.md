---
title: Update generated code for private-preview
pr_link: https://github.com/stripe/stripe-node/pull/2744
is_breaking: true
is_stripe_api_change: true
released_in_version: 22.3.0-alpha.3
---

* Add support for new resources `GiftCardOperation`, `GiftCard`, and `TaxFund`
* Add support for `retrieve` method on resource `GiftCardOperation`
* Add support for `activate`, `cashout`, `check_balance`, `create`, `reload`, `retrieve`, and `void_operation` methods on resource `GiftCard`
* Add support for `list` and `retrieve` methods on resource `TaxFund`
* Add support for `update_crypto_refund_address` method on resource `PaymentIntent`
* Add support for `performance_location_details` on `Tax.CalculationCreateParams.line_items[]`, `Tax.CalculationLineItem`, and `Tax.TransactionLineItem`
* ⚠️ Remove support for `money_services` on `ChargeCaptureParams.payment_details`, `ChargeUpdateParams.payment_details`, and `PaymentIntentCaptureParams.payment_details`
* Add support for `fr_meal_voucher` on `Charge.payment_method_details.card.benefits`
* Add support for `multicapture` on `Charge.payment_method_details.card_present`, `ConfirmationToken.payment_method_preview.card.generated_from.payment_method_details.card_present`, `PaymentAttemptRecord.payment_method_details.card_present`, `PaymentMethod.card.generated_from.payment_method_details.card_present`, and `PaymentRecord.payment_method_details.card_present`
* Add support for `pix` on `Checkout.Session.current_attempt.payment_method_details`
* ⚠️ Add support for new value `jaywan` on enum `Checkout.Session.current_attempt.payment_method_details.card.brand`
* Add support for `provisional_credit` on `Issuing.DisputeUpdateParams` and `Issuing.Dispute`
* Add support for `reason` on `PaymentAttemptRecordReportCanceledParams` and `PaymentRecordReportPaymentAttemptCanceledParams`
* Add support for `fiserv_valuelink`, `givex`, and `svs` on `PaymentAttemptRecord.processor_details` and `PaymentRecord.processor_details`
* ⚠️ Change type of `PaymentAttemptRecord.processor_details.type` and `PaymentRecord.processor_details.type` from `literal('custom')` to `enum('custom'|'fiserv_valuelink'|'givex'|'svs')`
* Add support for `capture_by` and `capture_delay` on `PaymentIntent.payment_method_options.card_present`, `PaymentIntent.payment_method_options.card`, `PaymentIntentConfirmParams.payment_method_options.card_present`, `PaymentIntentConfirmParams.payment_method_options.card`, `PaymentIntentCreateParams.payment_method_options.card_present`, `PaymentIntentCreateParams.payment_method_options.card`, `PaymentIntentUpdateParams.payment_method_options.card_present`, and `PaymentIntentUpdateParams.payment_method_options.card`
* ⚠️ Remove support for `liquid_asset` on `PaymentIntentConfirmParams.payment_method_options.card.payment_details.money_services.account_funding`, `PaymentIntentConfirmParams.payment_method_options.card_present.payment_details.money_services.account_funding`, `PaymentIntentCreateParams.payment_method_options.card.payment_details.money_services.account_funding`, `PaymentIntentCreateParams.payment_method_options.card_present.payment_details.money_services.account_funding`, `PaymentIntentUpdateParams.payment_method_options.card.payment_details.money_services.account_funding`, and `PaymentIntentUpdateParams.payment_method_options.card_present.payment_details.money_services.account_funding`
* Add support for `request_multicapture` on `PaymentIntent.payment_method_options.card_present`, `PaymentIntentConfirmParams.payment_method_options.card_present`, `PaymentIntentCreateParams.payment_method_options.card_present`, and `PaymentIntentUpdateParams.payment_method_options.card_present`
* Add support for new value `transaction_verification` on enums `PaymentIntentConfirmParams.payment_method_options.crypto.mode`, `PaymentIntentCreateParams.payment_method_options.crypto.mode`, and `PaymentIntentUpdateParams.payment_method_options.crypto.mode`
* Add support for `ignore_application_fee`, `ignore_transfer_data`, and `request_partial_authorization` on `PaymentIntentConfirmParams.payment_method_options.gift_card`, `PaymentIntentCreateParams.payment_method_options.gift_card`, and `PaymentIntentUpdateParams.payment_method_options.gift_card`
* Change `PaymentIntentConfirmParams.payment_details.benefit.fr_meal_voucher.siret`, `PaymentIntentCreateParams.payment_details.benefit.fr_meal_voucher.siret`, `PaymentIntentUpdateParams.payment_details.benefit.fr_meal_voucher.siret`, `SetupIntentConfirmParams.setup_details.benefit.fr_meal_voucher.siret`, `SetupIntentCreateParams.setup_details.benefit.fr_meal_voucher.siret`, and `SetupIntentUpdateParams.setup_details.benefit.fr_meal_voucher.siret` to be optional
* Add support for `latest_payment_attempt_record` and `payment_record` on `PaymentIntent`
* ⚠️ Remove support for `reauthorization` and `reauthorize_before` on `PaymentIntent.advanced_feature_details`
* Add support for `refund_address` on `PaymentIntent.next_action.crypto_display_details.deposit_addresses.base`, `PaymentIntent.next_action.crypto_display_details.deposit_addresses.solana`, and `PaymentIntent.next_action.crypto_display_details.deposit_addresses.tempo`
* Add support for `location` on `PaymentIntent.payment_details` and `SetupIntent.setup_details`
* ⚠️ Add support for new value `transaction_verification` on enum `PaymentIntent.payment_method_options.crypto.mode`
* Add support for `data` on `Radar.AccountEvaluationCreateParams.login_initiated.client_device_metadata_details`, `Radar.AccountEvaluationCreateParams.registration_initiated.client_device_metadata_details`, and `Radar.CustomerEvaluationCreateParams.evaluation_context[].client_details`
* Change `Radar.AccountEvaluationCreateParams.login_initiated.client_device_metadata_details.radar_session`, `Radar.AccountEvaluationCreateParams.registration_initiated.client_device_metadata_details.radar_session`, and `Radar.CustomerEvaluationCreateParams.evaluation_context[].client_details.radar_session` to be optional
* ⚠️ Add support for new value `promotion` on enum `V2.Commerce.ProductCatalogImport.feed_type`
* ⚠️ Change type of `V2.Core.FeeBatch.adjustments.tax_adjustment` from `amount` to `an object`
* ⚠️ Change type of `V2.Core.FeeBatch.amount`, `V2.Core.FeeBatch.collection_records[].amount`, `V2.Core.FeeBatch.collection_records[].tax.amount`, `V2.Core.FeeBatch.tax.amount`, `V2.Core.FeeEntry.amount`, and `V2.Core.FeeEntry.tax.amount` from `amount` to `an object`
* ⚠️ Add support for new value `tax_fund` on enums `V2.MoneyManagement.Transaction.category` and `V2.MoneyManagement.TransactionEntry.transaction_details.category`
* Add support for `tax_fund` on `V2.MoneyManagement.Transaction.flow` and `V2.MoneyManagement.TransactionEntry.transaction_details.flow`
* ⚠️ Add support for new value `tax_fund` on enums `V2.MoneyManagement.Transaction.flow.type` and `V2.MoneyManagement.TransactionEntry.transaction_details.flow.type`
* Add support for new value `promotion` on enum `V2.Commerce.ProductCatalogImportCreateParams.feed_type`
* Add support for error code `default_us_bank_account_cannot_be_archived` on `CannotProceedError`
