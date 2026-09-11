---
title: Update generated code for private-preview
pr_link: https://github.com/stripe/stripe-node/pull/2797
is_breaking: true
is_stripe_api_change: true
released_in_version: 22.5.0-alpha.2
---

* Add support for new resource `Billing.FeedbackOptions`
* Add support for `sequra_payments` on `Account.capabilities`
* Add support for `feedback_options` on `BillingPortal.Configuration.features.subscription_cancel.cancellation_reason`
* Add support for `sequra` on `Charge.payment_method_details`, `Checkout.Session.payment_method_options`, `ConfirmationToken.payment_method_preview`, `PaymentAttemptRecord.payment_method_details`, `PaymentIntent.payment_method_options`, and `PaymentRecord.payment_method_details`
* Add support for `retrieval_reference_number` on `Charge.payment_method_details.card_present`, `ConfirmationToken.payment_method_preview.card.generated_from.payment_method_details.card_present`, `PaymentAttemptRecord.payment_method_details.card_present`, `PaymentMethod.card.generated_from.payment_method_details.card_present`, and `PaymentRecord.payment_method_details.card_present`
* Add support for `pricing_group` on `Charge.payment_method_details.link`
* Add support for `tax_rates` on `Checkout.Session.shipping_options[]`, `Checkout.SessionCreateParams.shipping_options[]`, and `Checkout.SessionUpdateParams.shipping_options[]`
* ⚠️ Add support for new value `daikin` on enums `Checkout.Session.automatic_surcharge.provider` and `PaymentLink.automatic_surcharge.provider`
* Add support for `funding_types_blocked` on `Checkout.Session.payment_method_options.card.restrictions`
* Add support for new value `sequra` on enums `ConfirmationTokenCreateParams.testHelpers.payment_method_data.type`, `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
* Add support for new value `sequra` on enums `ConfirmationToken.payment_method_preview.type` and `PaymentMethod.type`
* Add support for new value `sequra` on enums `CustomerListPaymentMethodsParams.type`, `PaymentMethodCreateParams.type`, and `PaymentMethodListParams.type`
* Add support for `healthcare` on `Issuing.AuthorizationCaptureParams.testHelpers.purchase_details`, `Issuing.AuthorizationCreateParams.testHelpers`, `Issuing.TransactionCreateForceCaptureParams.testHelpers.purchase_details`, and `Issuing.TransactionCreateUnlinkedRefundParams.testHelpers.purchase_details`
* Change type of `Issuing.Authorization.healthcare.verification_status` from `enum('iias_merchant_exempt'|'iias_merchant_not_certified'|'iias_verified'|'not_verified') | null` to `enum('iias_merchant_exempt'|'iias_merchant_not_certified'|'iias_verified'|'not_verified')`
* Add support for `is_anomalous` on `PaymentAttemptRecordReportGuaranteedParams`
* Add support for new value `sequra` on enums `PaymentIntent.excluded_payment_method_types`, `PaymentIntentConfirmParams.excluded_payment_method_types`, `PaymentIntentCreateParams.excluded_payment_method_types`, `PaymentIntentUpdateParams.excluded_payment_method_types`, `SetupIntent.excluded_payment_method_types`, `SetupIntentCreateParams.excluded_payment_method_types`, and `SetupIntentUpdateParams.excluded_payment_method_types`
* Add support for `aade_data` on `PaymentIntent.payment_method_options.card_present`
* Change `Radar.PaymentEvaluation.payment_details.payment_method_details.card.first6` to be required
* Change `Radar.PaymentEvaluation.payment_details.payment_method_details.card.last4` to be required
* Add support for `feedback_option` on `Subscription.cancellation_details`
* Add support for `application` on `V2.Payments.OffSessionPayment`
* Add support for `status` on `V2.MoneyManagement.FinancialAccountStatementListParams`
* Change `V2.Billing.ContractCreateParams.pricing_lines` to be optional
