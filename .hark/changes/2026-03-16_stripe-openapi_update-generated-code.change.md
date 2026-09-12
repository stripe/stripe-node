---
title: Update generated code for private-preview
pr_url: https://github.com/stripe/stripe-node/pull/2599
is_breaking: true
is_stripe_api_change: true
released_in_version: 20.5.0-alpha.4
---

* Add support for new resources `Orchestration.PaymentAttempt` and `Radar.CustomerEvaluation`
* Add support for `retrieve` method on resource `Orchestration.PaymentAttempt`
* Add support for `create` and `update` methods on resource `Radar.CustomerEvaluation`
* Add support for `approve` method on resource `Checkout.Session`
* Add support for `report_authenticated`, `report_canceled`, `report_failed`, `report_guaranteed`, `report_informational`, and `report_refund` methods on resource `PaymentAttemptRecord`
* Add support for `create_us_paper_check_on_application` on `AccountSessionCreateParams.components.check_scanning.features`
* ⚠️ Change `AccountSignals.delinquency` to be optional
* Add support for `approval_method` on `Checkout.SessionCreateParams` and `Checkout.Session`
* Add support for `current_attempt` on `Checkout.Session`
* Add support for `selected_fulfillment_option_overrides` on `DelegatedCheckout.RequestedSessionUpdateParams.fulfillment_details`
* Add support for `pricing_plan_subscription_details` on `InvoiceItem.parent` and `InvoiceLineItem.parent`
* ⚠️ Remove support for `license_fee_subscription_details` on `InvoiceItem.parent` and `InvoiceLineItem.parent`
* ⚠️ Remove support for `pricing_plan_subscription` and `pricing_plan_version` on `InvoiceItem.parent.rate_card_subscription_details` and `InvoiceLineItem.parent.rate_card_subscription_details`
* Add support for new value `pricing_plan_subscription_details` on enum `InvoiceItem.parent.type`
* ⚠️ Remove support for value `license_fee_subscription_details` from enum `InvoiceItem.parent.type`
* Add support for new value `discounts` on enum `InvoiceItem.frozen_fields`
* Add support for new value `pricing_plan_subscription_details` on enum `InvoiceLineItem.parent.type`
* ⚠️ Remove support for value `license_fee_subscription_details` from enum `InvoiceLineItem.parent.type`
* Add support for `token_details` on `Issuing.Authorization`
* Add support for `failure_code` on `PaymentRecordReportPaymentAttemptFailedParams`, `PaymentRecordReportPaymentAttemptParams.failed`, and `PaymentRecordReportPaymentParams.failed`
* Change `PaymentRecordReportPaymentAttemptCanceledParams.canceled_at` to be optional
* Change `PaymentRecordReportPaymentAttemptFailedParams.failed_at` to be optional
* Change `PaymentRecordReportPaymentAttemptGuaranteedParams.guaranteed_at` to be optional
* Change `PaymentRecordReportRefundParams.refunded` to be optional
* ⚠️ Remove support for value `now` from enums `QuoteCreateParams.subscription_data.billing_schedules[].bill_from.type`, `QuoteCreateParams.subscription_data_overrides[].billing_schedules[].bill_from.type`, `QuoteUpdateParams.subscription_data.billing_schedules[].bill_from.type`, and `QuoteUpdateParams.subscription_data_overrides[].billing_schedules[].bill_from.type`
* ⚠️ Change `Radar.IssuingAuthorizationEvaluationCreateParams.card_details.bin_country` to be required
* Add support for `recurring_interval` on `SharedPayment.GrantedTokenCreateParams.testHelpers.usage_limits`
* Change `SharedPayment.GrantedTokenCreateParams.testHelpers.usage_limits.expires_at` to be optional
* Add support for `home_rule_tax` on `Tax.Registration.country_options.us` and `Tax.RegistrationCreateParams.country_options.us`
* Add support for new value `home_rule_tax` on enums `Tax.Registration.country_options.us.type` and `Tax.RegistrationCreateParams.country_options.us.type`
