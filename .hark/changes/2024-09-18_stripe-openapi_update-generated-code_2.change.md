---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2175
is_stripe_api_change: true
released_in_version: 16.12.0
---

* Add support for new value `verification_supportability` on enums `Account.future_requirements.errors[].code`, `Account.requirements.errors[].code`, `BankAccount.future_requirements.errors[].code`, and `BankAccount.requirements.errors[].code`
* Add support for new value `terminal_reader_invalid_location_for_activation` on enums `Invoice.last_finalization_error.code`, `PaymentIntent.last_payment_error.code`, `SetupAttempt.setup_error.code`, `SetupIntent.last_setup_error.code`, and `StripeError.code`
* Add support for `payer_details` on `Charge.payment_method_details.klarna`
* Add support for `amazon_pay` on `Dispute.payment_method_details`
* Add support for new value `amazon_pay` on enum `Dispute.payment_method_details.type`
* Add support for `automatically_finalizes_at` on `Invoice`
* Add support for `state_sales_tax` on `Tax.Registration.country_options.us` and `Tax.RegistrationCreateParams.country_options.us`
