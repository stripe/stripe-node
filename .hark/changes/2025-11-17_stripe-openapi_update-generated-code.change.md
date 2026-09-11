---
title: Update generated code for private-preview
pr_link: https://github.com/stripe/stripe-node/pull/2504
is_stripe_api_change: true
released_in_version: 20.1.0-alpha.1
---

* Add support for new resources `BalanceTransfer` and `Radar.AccountEvaluation`
* Add support for `create` method on resource `BalanceTransfer`
* Add support for `create`, `retrieve`, and `update` methods on resource `Radar.AccountEvaluation`
* Add support for `specified_commercial_transactions_act_url` on `Account.business_profile`, `AccountCreateParams.business_profile`, and `AccountUpdateParams.business_profile`
* Add support for `paypay_payments` on `Account.settings`, `AccountCreateParams.settings`, and `AccountUpdateParams.settings`
* Change `Tax.Association.tax_transaction_attempts` to be required
* Change type of `Billing.Analytics.MeterUsageRetrieveParams.meters[].dimension_filters` from `string` to `array(string)`
* Change type of `Billing.Analytics.MeterUsageRetrieveParams.meters[].tenant_filters` from `string` to `array(string)`
* Add support for `payment_method_configuration` on `BillingPortal.Configuration.features.payment_method_update`
* Add support for `car_rental_data`, `flight_data`, and `lodging_data` on `ChargeCaptureParams.payment_details`, `ChargeUpdateParams.payment_details`, `PaymentIntentCaptureParams.payment_details`, `PaymentIntentConfirmParams.payment_details`, `PaymentIntentCreateParams.payment_details`, and `PaymentIntentUpdateParams.payment_details`
* Add support for `transaction_id` on `Charge.payment_method_details.ideal`, `PaymentAttemptRecord.payment_method_details.ideal`, and `PaymentRecord.payment_method_details.ideal`
* Add support for new value `finom` on enums `Charge.payment_method_details.ideal.bank`, `ConfirmationToken.payment_method_preview.ideal.bank`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data.ideal.bank`, `PaymentAttemptRecord.payment_method_details.ideal.bank`, `PaymentIntentConfirmParams.payment_method_data.ideal.bank`, `PaymentIntentCreateParams.payment_method_data.ideal.bank`, `PaymentIntentUpdateParams.payment_method_data.ideal.bank`, `PaymentMethod.ideal.bank`, `PaymentMethodCreateParams.ideal.bank`, `PaymentRecord.payment_method_details.ideal.bank`, `SetupAttempt.payment_method_details.ideal.bank`, `SetupIntentConfirmParams.payment_method_data.ideal.bank`, `SetupIntentCreateParams.payment_method_data.ideal.bank`, and `SetupIntentUpdateParams.payment_method_data.ideal.bank`
* Add support for new value `FNOMNL22` on enums `Charge.payment_method_details.ideal.bic`, `ConfirmationToken.payment_method_preview.ideal.bic`, `PaymentAttemptRecord.payment_method_details.ideal.bic`, `PaymentMethod.ideal.bic`, `PaymentRecord.payment_method_details.ideal.bic`, and `SetupAttempt.payment_method_details.ideal.bic`
* Add support for new value `tokenized_account_number_deactivated` on enums `ConfirmationToken.payment_method_preview.us_bank_account.status_details.blocked.reason` and `PaymentMethod.us_bank_account.status_details.blocked.reason`
* Add support for `created` on `CustomerListCustomerBalanceTransactionsParams` and `InvoicePaymentListParams`
* Add support for new values `capital.financing_offer.accepted_other_offer`, `financial_connections.account.account_numbers_updated`, and `financial_connections.account.upcoming_account_number_expiry` on enum `Event.type`
* Add support for `account_numbers` on `FinancialConnections.Account`
* Change type of `FinancialConnections.Session.client_secret` from `string` to `string | null`
* Add support for `fraud_risk` on `Issuing.AuthorizationCreateParams.testHelpers.risk_assessment`
* Add support for `latest_fraud_warning` on `Issuing.Card`
* Add support for `supplementary_purchase_data` on `OrderCreateParams.payment.settings.payment_method_options.klarna`, `OrderUpdateParams.payment.settings.payment_method_options.klarna`, `PaymentIntentConfirmParams.payment_method_options.klarna`, `PaymentIntentCreateParams.payment_method_options.klarna`, and `PaymentIntentUpdateParams.payment_method_options.klarna`
* Add support for `capture_method` on `PaymentIntent.payment_method_options.card_present`, `PaymentIntentConfirmParams.payment_method_options.card_present`, `PaymentIntentCreateParams.payment_method_options.card_present`, and `PaymentIntentUpdateParams.payment_method_options.card_present`
* Add support for `allow_redisplay` and `customer_account` on `PaymentMethodListParams`
* Add support for `mb_way` and `twint` on `Refund.destination_details`
* Change type of `SubscriptionScheduleUpdateParams.billing_schedules` from `array(billing_schedules_update_params)` to `emptyable(array(billing_schedules_update_params))`
* Add support for new values `capital.financing_offer.accepted_other_offer`, `financial_connections.account.account_numbers_updated`, and `financial_connections.account.upcoming_account_number_expiry` on enums `WebhookEndpointCreateParams.enabled_events` and `WebhookEndpointUpdateParams.enabled_events`
* Add support for new value `2025-11-17.clover` on enum `WebhookEndpointCreateParams.api_version`
* Add support for snapshot events `FinancialConnectionsAccountAccountNumbersUpdatedEvent` and `FinancialConnectionsAccountUpcomingAccountNumberExpiryEvent` with resource `FinancialConnections.Account`
