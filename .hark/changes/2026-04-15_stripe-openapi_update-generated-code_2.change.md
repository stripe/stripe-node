---
title: Update generated code for private-preview
pr_link: https://github.com/stripe/stripe-node/pull/2682
is_breaking: true
is_stripe_api_change: true
released_in_version: 22.1.0-alpha.3
---

* Add support for new resources `V2.Core.WorkflowRun` and `V2.Core.Workflow`
* Add support for `report_authorized` method on resource `PaymentAttemptRecord`
* Add support for `list` and `retrieve` methods on resource `V2.Core.WorkflowRun`
* Add support for `invoke`, `list`, and `retrieve` methods on resource `V2.Core.Workflow`
* Add support for `next_action` and `status` on `SharedPayment.IssuedToken`
* ⚠️ Remove support for `network_id` on `SharedPayment.IssuedToken.seller_details`
* Add support for `bills` on `AccountSession.components`
* Add support for `settlement_currencies` on `BalanceSettingUpdateParams.payments` and `BalanceSettings.payments`
* Add support for `default_settlement_currency` on `BalanceSettings.payments`
* Add support for `account_funding` on `Charge.payment_method_details.card`
* Add support for `automatic_surcharge` on `Checkout.SessionCreateParams`, `Checkout.Session`, `PaymentLinkCreateParams`, and `PaymentLink`
* Add support for `bizum` on `Checkout.Session.payment_method_options` and `Checkout.SessionCreateParams.payment_method_options`
* Add support for `surcharge_cost` on `Checkout.Session`
* Add support for `amount_surcharge` on `Checkout.Session.total_details`
* Add support for `shared_payment_granted_token` on `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_data`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
* Add support for new value `email` on enums `Identity.VerificationReportListParams.type`, `Identity.VerificationSessionCreateParams.type`, and `Identity.VerificationSessionUpdateParams.type`
* Add support for `details` on `Identity.VerificationReport.email`
* ⚠️ Add support for new value `email` on enums `Identity.VerificationReport.type` and `Identity.VerificationSession.type`
* Add support for `confirm` on `Identity.VerificationSessionCreateParams` and `Identity.VerificationSessionUpdateParams`
* Add support for `subscription` on `InvoiceItem.parent.schedule_details`
* ⚠️ Remove support for `shared_payment_granted_token` on `PaymentIntentConfirmParams` and `PaymentIntentCreateParams`
* Add support for `money_services` on `PaymentIntent.payment_details`
* ⚠️ Remove support for `external_reference` on `Plan`
* Change `SharedPayment.GrantedToken.payment_method_details.billing_details` to be required
