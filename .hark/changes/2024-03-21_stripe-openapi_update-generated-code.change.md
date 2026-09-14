---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2040
is_stripe_api_change: true
released_in_version: 14.22.0
---

* Add support for new resources `ConfirmationToken` and `Forwarding.Request`
* Add support for `retrieve` method on resource `ConfirmationToken`
* Add support for `create`, `list`, and `retrieve` methods on resource `Request`
* Add support for `mobilepay_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
* Add support for new values `forwarding_api_inactive`, `forwarding_api_invalid_parameter`, `forwarding_api_upstream_connection_error`, and `forwarding_api_upstream_connection_timeout` on enums `Invoice.last_finalization_error.code`, `PaymentIntent.last_payment_error.code`, `SetupAttempt.setup_error.code`, `SetupIntent.last_setup_error.code`, and `StripeError.code`
* Add support for `mobilepay` on `Charge.payment_method_details`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, `PaymentMethod`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
* Add support for `payment_reference` on `Charge.payment_method_details.us_bank_account`
* Add support for new value `mobilepay` on enums `CustomerListPaymentMethodsParams.type`, `PaymentMethodCreateParams.type`, and `PaymentMethodListParams.type`
* Add support for `confirmation_token` on `PaymentIntentConfirmParams`, `PaymentIntentCreateParams`, `SetupIntentConfirmParams`, and `SetupIntentCreateParams`
* Add support for new value `mobilepay` on enums `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
* Add support for new value `mobilepay` on enum `PaymentMethod.type`
* Add support for `name` on `Terminal.ConfigurationCreateParams`, `Terminal.ConfigurationUpdateParams`, and `Terminal.Configuration`
* Add support for `payout` on `Treasury.ReceivedDebit.linked_flows`
