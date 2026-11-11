---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2925
semver_level: major
is_stripe_api_change: true
---

* Add support for new resource `V2.MoneyManagement.SpendingMandate`
* Add support for `cancel`, `list`, and `retrieve` methods on resource `V2.MoneyManagement.SpendingMandate`
* Add support for `cardholder_message` on `Charge.payment_method_details.card_present.receipt`, `ConfirmationToken.payment_method_preview.card.generated_from.payment_method_details.card_present.receipt`, `PaymentAttemptRecord.payment_method_details.card_present.receipt`, `PaymentMethod.card.generated_from.payment_method_details.card_present.receipt`, and `PaymentRecord.payment_method_details.card_present.receipt`
* Add support for `pricing_token` on `Checkout.SessionCreateParams`
* Add support for `marketing_attributions` on `CustomerUpdateParams`
* Add support for `fraudulent_selfie` on `Identity.VerificationReport.signals`
* Add support for `toss_pay` on `Mandate.payment_method_details`, `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, `PaymentMethodConfiguration`, and `SetupAttempt.payment_method_details`
* Add support for `payment_evaluations` on `PaymentAttemptRecordReportAuthenticatedParams`
* Add support for `three_d_secure` on `PaymentAttemptRecordReportAuthorizedParams.payment_method_details.card`, `PaymentAttemptRecordReportGuaranteedParams.payment_method_details.card`, `PaymentRecordReportPaymentAttemptGuaranteedParams.payment_method_details.card`, `PaymentRecordReportPaymentAttemptParams.payment_method_details.card`, and `PaymentRecordReportPaymentParams.payment_method_details.card`
* Add support for `wechat_pay_redirect_to_mini_program` on `PaymentIntent.next_action`
* Add support for `customer_presence` and `payment_type` on `Radar.PaymentEvaluation.payment_details.money_movement_details.sepa_debit` and `Radar.PaymentEvaluationCreateParams.payment_details.money_movement_details.sepa_debit`
* Add support for `financial_connections` on `SetupIntent.payment_method_options.bacs_debit`, `SetupIntentConfirmParams.payment_method_options.bacs_debit`, `SetupIntentCreateParams.payment_method_options.bacs_debit`, and `SetupIntentUpdateParams.payment_method_options.bacs_debit`
* Add support for `referral_fee_details` on `SharedPayment.GrantedToken`, `SharedPayment.IssuedTokenCreateParams`, and `SharedPayment.IssuedToken`
* Add support for new values `stripe_s700_devkit`, `stripe_s710_devkit`, `stripe_t600_devkit`, `verifone_ux700_devkit`, and `verifone_v660p_devkit` on enum `Terminal.ReaderListParams.device_type`
* Add support for `device_health_details` and `device_health` on `Terminal.Reader`
* Add support for new values `check_attachment_too_large`, `check_expired`, and `check_undeliverable` on enum `V2.MoneyManagement.OutboundPayment.status_details.failed.reason`
* Add support for `check_send` on `V2.MoneyManagement.OutboundPayment.to.payout_method_options`, `V2.MoneyManagement.OutboundPayment.tracking_details`, `V2.MoneyManagement.OutboundPaymentCreateParams.to.payout_method_options`, `V2.MoneyManagement.OutboundSetupIntentCreateParams.payout_method_data`, `V2.MoneyManagement.PayoutIntent.to.payout_method_options`, `V2.MoneyManagement.PayoutIntentCreateParams.to.payout_method_options`, `V2.MoneyManagement.PayoutIntentUpdateParams.to.payout_method_options`, and `V2.MoneyManagement.PayoutMethod`
* Add support for new values `check_attachment_too_large`, `check_expired`, and `check_undeliverable` on enum `V2.MoneyManagement.PayoutIntent.next_action.handle_failure.failure_reason`
* Add support for new value `check_send` on enums `V2.MoneyManagement.OutboundSetupIntentCreateParams.payout_method_data.type`, `V2.MoneyManagement.OutboundSetupIntentUpdateParams.payout_method_data.type`, and `V2.MoneyManagement.PayoutMethod.type`
* Add support for `spending_mandate` on `V2.MoneyManagement.ReceivedDebit.bank_transfer` and `V2.MoneyManagement.ReceivedDebitListParams`
* Add support for event notifications `V2MoneyManagementSpendingMandateCanceledEvent`, `V2MoneyManagementSpendingMandateCreatedEvent`, `V2MoneyManagementSpendingMandateExpiredEvent`, `V2MoneyManagementSpendingMandatePendingCancellationEvent`, and `V2MoneyManagementSpendingMandateUpdatedEvent` with related object `V2.MoneyManagement.SpendingMandate`
* ⚠️ Add error type `MerchantNotGatedError` on `V2.Core.Vault.NetworkToken#create_from_credential`
