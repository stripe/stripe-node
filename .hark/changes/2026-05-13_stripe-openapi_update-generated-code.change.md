---
title: Update generated code for private-preview
pr_url: https://github.com/stripe/stripe-node/pull/2708
is_breaking: true
is_stripe_api_change: true
released_in_version: 22.2.0-alpha.5
---

* Add support for new resources `V2.Core.FeeBatch`, `V2.Core.FeeEntry`, `V2.MoneyManagement.DebitDispute`, and `V2.MoneyManagement.FinancialAccountStatement`
* Add support for `simulate_network_lifecycle_pre_arbitration_response` and `simulate_network_lifecycle_pre_arbitration_submission` test helper methods on resource `Issuing.Dispute`
* Add support for `list` method on resource `PaymentLocation`
* Add support for `list` and `retrieve` methods on resources `V2.Core.FeeBatch`, `V2.Core.FeeEntry`, and `V2.MoneyManagement.FinancialAccountStatement`
* Add support for `create`, `list`, and `retrieve` methods on resource `V2.MoneyManagement.DebitDispute`
* Add support for `discounts` on `DelegatedCheckout.RequestedSessionCreateParams`, `DelegatedCheckout.RequestedSessionUpdateParams`, and `DelegatedCheckout.RequestedSession`
* Add support for `amount_sale` on `DelegatedCheckout.RequestedSession.line_item_details[]` and `DelegatedCheckout.RequestedSession.total_details`
* Add support for `amount_discount` and `breakdown` on `DelegatedCheckout.RequestedSession.total_details`
* ⚠️ Remove support for `check_deposit_address` on `Invoice.payment_settings.payment_method_options.check_scan`, `InvoiceCreateParams.payment_settings.payment_method_options.check_scan`, `InvoiceUpdateParams.payment_settings.payment_method_options.check_scan`, `QuotePreviewInvoice.payment_settings.payment_method_options.check_scan`, `Subscription.payment_settings.payment_method_options.check_scan`, `SubscriptionCreateParams.payment_settings.payment_method_options.check_scan`, and `SubscriptionUpdateParams.payment_settings.payment_method_options.check_scan`
* Add support for `payment_evaluations` on `PaymentAttemptRecordReportGuaranteedParams`, `PaymentRecordReportPaymentAttemptGuaranteedParams`, `PaymentRecordReportPaymentAttemptParams.guaranteed`, and `PaymentRecordReportPaymentParams.guaranteed`
* Add support for `location` on `PaymentIntentConfirmParams.payment_details`, `PaymentIntentCreateParams.payment_details`, `PaymentIntentUpdateParams.payment_details`, `SetupIntentConfirmParams.setup_details`, `SetupIntentCreateParams.setup_details`, and `SetupIntentUpdateParams.setup_details`
* Add support for `onboarding_data_update_acknowledged` on `PaymentLocationUpdateParams`
* Change `PaymentLocationCreateParams.address.country` and `PaymentLocationUpdateParams.address.country` to be optional
* Add support for `customer` on `Radar.CustomerEvaluationUpdateParams`
* Add support for `status` on `Radar.CustomerEvaluationUpdateParams` and `Radar.CustomerEvaluation`
* Change `Radar.CustomerEvaluationUpdateParams.type` to be optional
* Add support for `payment_behavior` on `SubscriptionResumeParams`
* Add support for `dispute_details` on `V2.MoneyManagement.ReceivedDebit`
* ⚠️ Add support for new value `debit_dispute` on enums `V2.MoneyManagement.Transaction.category` and `V2.MoneyManagement.TransactionEntry.transaction_details.category`
* Add support for `debit_dispute` on `V2.MoneyManagement.Transaction.flow` and `V2.MoneyManagement.TransactionEntry.transaction_details.flow`
* ⚠️ Add support for new value `debit_dispute` on enums `V2.MoneyManagement.Transaction.flow.type` and `V2.MoneyManagement.TransactionEntry.transaction_details.flow.type`
* Add support for `payment_attempt_record` on `EventsV2PaymentsOffSessionPaymentAttemptFailedEvent` and `EventsV2PaymentsOffSessionPaymentFailedEvent`
* Add support for event notifications `V2MoneyManagementFinancialAccountStatementCreatedEvent` and `V2MoneyManagementFinancialAccountStatementRestatedEvent` with related object `V2.MoneyManagement.FinancialAccountStatement`
