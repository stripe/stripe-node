---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2495
is_stripe_api_change: true
released_in_version: 20.0.0
---

* Add support for new resources `Tax.Association` and `Terminal.OnboardingLink`
* Add support for `find` method on resource `Tax.Association`
* Add support for `create` method on resource `Terminal.OnboardingLink`
* Add support for `payment_method_configuration` on `BillingPortal.Configuration.features.payment_method_update`
* Add support for `transaction_id` on `Charge.payment_method_details.ideal`, `PaymentAttemptRecord.payment_method_details.ideal`, and `PaymentRecord.payment_method_details.ideal`
* Add support for new value `finom` on enums `Charge.payment_method_details.ideal.bank`, `ConfirmationToken.payment_method_preview.ideal.bank`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data.ideal.bank`, `PaymentAttemptRecord.payment_method_details.ideal.bank`, `PaymentIntentConfirmParams.payment_method_data.ideal.bank`, `PaymentIntentCreateParams.payment_method_data.ideal.bank`, `PaymentIntentUpdateParams.payment_method_data.ideal.bank`, `PaymentMethod.ideal.bank`, `PaymentMethodCreateParams.ideal.bank`, `PaymentRecord.payment_method_details.ideal.bank`, `SetupAttempt.payment_method_details.ideal.bank`, `SetupIntentConfirmParams.payment_method_data.ideal.bank`, `SetupIntentCreateParams.payment_method_data.ideal.bank`, and `SetupIntentUpdateParams.payment_method_data.ideal.bank`
* Add support for new value `FNOMNL22` on enums `Charge.payment_method_details.ideal.bic`, `ConfirmationToken.payment_method_preview.ideal.bic`, `PaymentAttemptRecord.payment_method_details.ideal.bic`, `PaymentMethod.ideal.bic`, `PaymentRecord.payment_method_details.ideal.bic`, and `SetupAttempt.payment_method_details.ideal.bic`
* Add support for new value `tokenized_account_number_deactivated` on enums `ConfirmationToken.payment_method_preview.us_bank_account.status_details.blocked.reason` and `PaymentMethod.us_bank_account.status_details.blocked.reason`
* Add support for `created` on `CustomerListCustomerBalanceTransactionsParams` and `InvoicePaymentListParams`
* Add support for new values `financial_connections.account.account_numbers_updated` and `financial_connections.account.upcoming_account_number_expiry` on enum `Event.type`
* Add support for `account_numbers` on `FinancialConnections.Account`
* Change type of `FinancialConnections.Session.client_secret` from `string` to `string | null`
* Add support for `fraud_risk` on `Issuing.AuthorizationCreateParams.testHelpers.risk_assessment`
* Add support for `latest_fraud_warning` on `Issuing.Card`
* Add support for `hooks` on `PaymentIntentCaptureParams`, `PaymentIntentConfirmParams`, `PaymentIntentCreateParams`, `PaymentIntentIncrementAuthorizationParams`, `PaymentIntentUpdateParams`, and `PaymentIntent`
* Add support for `mb_way` and `twint` on `Refund.destination_details`
* Add support for new values `financial_connections.account.account_numbers_updated` and `financial_connections.account.upcoming_account_number_expiry` on enums `WebhookEndpointCreateParams.enabled_events` and `WebhookEndpointUpdateParams.enabled_events`
* Add support for snapshot events `FinancialConnectionsAccountAccountNumbersUpdatedEvent` and `FinancialConnectionsAccountUpcomingAccountNumberExpiryEvent` with resource `FinancialConnections.Account`
