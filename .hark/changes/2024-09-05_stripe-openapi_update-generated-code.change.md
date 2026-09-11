---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/2162
is_stripe_api_change: true
released_in_version: 16.11.0-beta.1
---

* Add support for new resources `Billing.MeterErrorReport` and `Terminal.ReaderCollectedData`
* Add support for `retrieve` method on resource `ReaderCollectedData`
* Add support for `recipients` on `AccountSessionCreateParams.components`
* Add support for new value `terminal_reader_collected_data_invalid` on enums `Invoice.last_finalization_error.code`, `PaymentIntent.last_payment_error.code`, `SetupAttempt.setup_error.code`, `SetupIntent.last_setup_error.code`, and `StripeError.code`
* Add support for new value `mb_way` on enum `Checkout.SessionCreateParams.payment_method_types[]`
* Add support for `business_name`, `email`, `phone`, and `tax_ids` on `Checkout.Session.collected_information`
* Add support for new value `billing.meter_error_report.triggered` on enum `Event.type`
* Add support for `regulatory_reporting_file` on `Issuing.CreditUnderwritingRecordCorrectParams`, `Issuing.CreditUnderwritingRecordCreateFromProactiveReviewParams`, `Issuing.CreditUnderwritingRecordReportDecisionParams`, and `Issuing.CreditUnderwritingRecord`
* Add support for new value `mb_way` on enums `PaymentLink.payment_method_types[]`, `PaymentLinkCreateParams.payment_method_types[]`, and `PaymentLinkUpdateParams.payment_method_types[]`
* Remove support for `rechnung` on `PaymentMethodUpdateParams`
* Add support for new value `billing.meter_error_report.triggered` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
