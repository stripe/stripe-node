---
title: Update generated code for private-preview
pr_url: https://github.com/stripe/stripe-node/pull/2822
is_breaking: true
is_stripe_api_change: true
released_in_version: 22.7.0-alpha.1
---

* Add support for new resource `CustomerTaxExemption`
* Add support for `create`, `del`, `list`, and `retrieve` methods on resource `CustomerTaxExemption`
* ⚠️ Remove support for `sequra_payments` on `Account.capabilities`
* Add support for `details` on `Account.future_requirements.errors[]`, `Account.requirements.errors[]`, `BankAccount.future_requirements.errors[]`, `BankAccount.requirements.errors[]`, `Capability.future_requirements.errors[]`, `Capability.requirements.errors[]`, `Person.future_requirements.errors[]`, and `Person.requirements.errors[]`
* Add support for `subscription_pause` on `BillingPortal.SessionCreateParams.flow_data`
* ⚠️ Remove support for `sequra` on `Charge.payment_method_details`, `Checkout.Session.payment_method_options`, `ConfirmationToken.payment_method_preview`, `PaymentAttemptRecord.payment_method_details`, `PaymentIntent.payment_method_options`, and `PaymentRecord.payment_method_details`
* Add support for `enablement_details` on `Checkout.Session.automatic_tax`
* ⚠️ Remove support for value `sequra` from enums `ConfirmationTokenCreateParams.testHelpers.payment_method_data.type`, `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
* ⚠️ Remove support for value `sequra` from enums `ConfirmationToken.payment_method_preview.type` and `PaymentMethod.type`
* ⚠️ Remove support for value `sequra` from enums `CustomerListPaymentMethodsParams.type`, `PaymentMethodCreateParams.type`, and `PaymentMethodListParams.type`
* Add support for `credit` on `FinancialConnections.Transaction.classifications[]`
* Change type of `FinancialConnections.Transaction.classifications[].money_movement` from `BankConnectionsResourceTransactionResourceClassificationsLabels | null` to `BankConnectionsResourceTransactionResourceClassificationsLabels`
* Change type of `FinancialConnections.Transaction.classifications[].personal_finance` from `BankConnectionsResourceTransactionResourceClassificationsLabels | null` to `BankConnectionsResourceTransactionResourceClassificationsLabels`
* ⚠️ Change `FinancialConnections.Transaction.classifications[].money_movement` to be optional
* ⚠️ Change `FinancialConnections.Transaction.classifications[].personal_finance` to be optional
* Add support for `user_consent` on `Identity.VerificationSessionCreateParams` and `Identity.VerificationSessionUpdateParams`
* Add support for `company_details` on `Invoice.payment_settings.payment_method_options.billie`, `PaymentIntent.payment_method_options.billie`, `PaymentIntentConfirmParams.payment_method_options.billie`, `PaymentIntentCreateParams.payment_method_options.billie`, `PaymentIntentUpdateParams.payment_method_options.billie`, `QuotePreviewInvoice.payment_settings.payment_method_options.billie`, and `Subscription.payment_settings.payment_method_options.billie`
* Add support for `reference` on `Invoice.payment_settings.payment_method_options.billie`, `PaymentIntent.payment_method_options.billie`, `PaymentIntentConfirmParams.payment_method_options.billie`, `PaymentIntentCreateParams.payment_method_options.billie`, `PaymentIntentUpdateParams.payment_method_options.billie`, and `QuotePreviewInvoice.payment_settings.payment_method_options.billie`
* Add support for `pos_condition` on `Issuing.AuthorizationCreateParams.testHelpers` and `Issuing.Authorization`
* Add support for `crypto_wallet` on `Issuing.CardCreateParams`, `Issuing.CardUpdateParams`, and `Issuing.Card`
* Add support for `payment_evaluations` and `payment_method_details` on `PaymentAttemptRecordReportAuthorizedParams`
* Add support for `aade_data` on `PaymentIntentConfirmParams.payment_method_options.card_present`, `PaymentIntentCreateParams.payment_method_options.card_present`, and `PaymentIntentUpdateParams.payment_method_options.card_present`
* ⚠️ Remove support for `cancel_at_period_end` on `Subscription.pending_update`
* Add support for `blik_recurring_payments` on `V2.Core.Account.configuration.merchant.capabilities`, `V2.Core.AccountCreateParams.configuration.merchant.capabilities`, and `V2.Core.AccountUpdateParams.configuration.merchant.capabilities`
* Add support for `user_access` on `V2.Iam.ActivityLog.details`
* Add support for new value `user_access` on enum `V2.Iam.ActivityLog.details.type`
* Add support for new value `user_access_started` on enum `V2.Iam.ActivityLog.type`
* Add support for new value `user_access` on enum `V2.Iam.ActivityLogListParams.action_groups`
* Add support for new value `user_access_started` on enum `V2.Iam.ActivityLogListParams.actions`
* Add support for new value `blik_recurring_payments` on enum `EventsV2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent.updated_capability`
