---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2889
semver_level: major
is_stripe_api_change: true
---

* ⚠️ Remove support for `capture` method on resource `V2.Payments.OffSessionPayment`
* ⚠️ Remove support for `acknowledge_confirmation_of_payee` and `initiate_confirmation_of_payee` methods on resource `V2.Core.Vault.GbBankAccount`
* Add support for `wechat_pay_mobile_web_payments` on `Account.settings`, `AccountCreateParams.settings`, and `AccountUpdateParams.settings`
* ⚠️ Remove support for `wechat_pay_payments` on `Account.settings`, `AccountCreateParams.settings`, and `AccountUpdateParams.settings`
* Add support for `settlement_reserved` on `Balance`
* Add support for new value `settlement_reserved` on enum `BalanceTransaction.balance_type`
* Add support for `carecredit`, `getflex`, and `sezzle` on `Charge.payment_method_details`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `PaymentAttemptRecord.payment_method_details`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, `PaymentMethod`, `PaymentRecord.payment_method_details`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
* Add support for new value `auto` on enums `Checkout.Session.payment_method_collection` and `Checkout.SessionCreateParams.payment_method_collection`
* Add support for `mandate_options` on `Checkout.SessionCreateParams.payment_method_options.card`
* Change `Checkout.Session.items[].subscription.backdate_start_date` to be required
* Add support for new values `carecredit`, `getflex`, and `sezzle` on enums `ConfirmationTokenCreateParams.testHelpers.payment_method_data.type`, `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
* Add support for new values `carecredit`, `getflex`, and `sezzle` on enums `ConfirmationToken.payment_method_preview.type` and `PaymentMethod.type`
* Add support for new values `carecredit`, `getflex`, and `sezzle` on enums `CustomerListPaymentMethodsParams.type`, `PaymentMethodCreateParams.type`, and `PaymentMethodListParams.type`
* Add support for new values `three_d_secure.authentication.canceled`, `three_d_secure.authentication.challenge_started`, `three_d_secure.authentication.errored`, `three_d_secure.authentication.failed`, `three_d_secure.authentication.requires_challenge`, `three_d_secure.authentication.requires_submission`, and `three_d_secure.authentication.succeeded` on enum `Event.type`
* Add support for new values `carecredit`, `getflex`, and `sezzle` on enums `PaymentIntent.allowed_payment_method_types`, `PaymentIntentConfirmParams.allowed_payment_method_types`, `PaymentIntentCreateParams.allowed_payment_method_types`, `PaymentIntentUpdateParams.allowed_payment_method_types`, `SetupIntent.allowed_payment_method_types`, `SetupIntentConfirmParams.allowed_payment_method_types`, `SetupIntentCreateParams.allowed_payment_method_types`, and `SetupIntentUpdateParams.allowed_payment_method_types`
* Add support for new values `carecredit`, `getflex`, and `sezzle` on enums `PaymentIntent.excluded_payment_method_types`, `PaymentIntentConfirmParams.excluded_payment_method_types`, `PaymentIntentCreateParams.excluded_payment_method_types`, `PaymentIntentUpdateParams.excluded_payment_method_types`, `SetupIntent.excluded_payment_method_types`, `SetupIntentCreateParams.excluded_payment_method_types`, and `SetupIntentUpdateParams.excluded_payment_method_types`
* Add support for new values `simulated_stripe_t600` and `stripe_t600` on enum `Terminal.ReaderListParams.device_type`
* Add support for new values `three_d_secure.authentication.canceled`, `three_d_secure.authentication.challenge_started`, `three_d_secure.authentication.errored`, `three_d_secure.authentication.failed`, `three_d_secure.authentication.requires_challenge`, `three_d_secure.authentication.requires_submission`, and `three_d_secure.authentication.succeeded` on enums `WebhookEndpointCreateParams.enabled_events` and `WebhookEndpointUpdateParams.enabled_events`
* Add support for `contact_email` on `V2.Core.AccountEvaluation.account_data`, `V2.Core.AccountEvaluationCreateParams.account_data`, `V2.Signals.AccountActivity.account_details.data`, `V2.Signals.AccountActivityCreateParams.account_details.data`, `V2.Signals.AccountEvaluation.account_details.data`, and `V2.Signals.AccountEvaluationCreateParams.account_details.data`
* Add support for `bre_b`, `nip`, and `pix` on `V2.MoneyManagement.FinancialAddress.bank_account` and `V2.MoneyManagement.ReceivedCredit.bank_transfer.originating_bank_account`
* Add support for new values `bre_b`, `nip`, and `pix` on enum `V2.MoneyManagement.ReceivedCredit.bank_transfer.originating_bank_account.type`
* ⚠️ Remove support for `amount_capturable` on `V2.Payments.OffSessionPayment`
* ⚠️ Remove support for `capture` on `V2.Payments.OffSessionPaymentCreateParams` and `V2.Payments.OffSessionPayment`
* Add support for new values `bre_b` and `pix` on enum `V2.MoneyManagement.FinancialAddressCreditSimulationCreditParams.network`
* Add support for snapshot events `ThreeDSecureAuthenticationCanceledEvent`, `ThreeDSecureAuthenticationChallengeStartedEvent`, `ThreeDSecureAuthenticationErroredEvent`, `ThreeDSecureAuthenticationFailedEvent`, `ThreeDSecureAuthenticationRequiresChallengeEvent`, `ThreeDSecureAuthenticationRequiresSubmissionEvent`, and `ThreeDSecureAuthenticationSucceededEvent` with resource `ThreeDSecure.Authentication`
* ⚠️ Remove support for event notification `V2PaymentsOffSessionPaymentRequiresCaptureEvent` with related object `V2.Payments.OffSessionPayment`
