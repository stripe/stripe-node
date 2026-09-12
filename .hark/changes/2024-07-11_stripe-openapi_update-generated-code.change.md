---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2130
is_breaking: true
is_stripe_api_change: true
released_in_version: 16.3.0
---

* ⚠️ Remove support for values `billing_policy_remote_function_response_invalid`, `billing_policy_remote_function_timeout`, `billing_policy_remote_function_unexpected_status_code`, and `billing_policy_remote_function_unreachable` from enums `Invoice.last_finalization_error.code`, `PaymentIntent.last_payment_error.code`, `SetupAttempt.setup_error.code`, `SetupIntent.last_setup_error.code`, and `StripeError.code`.
* ⚠️ Remove support for value `payment_intent_fx_quote_invalid` from enum `StripeError.code`. The was mistakenly released last week.
* Add support for `payment_method_options` on `ConfirmationToken`
* Add support for `payment_element` on `CustomerSession.components` and `CustomerSessionCreateParams.components`
* Add support for `address_validation` on `Issuing.Card.shipping` and `Issuing.CardCreateParams.shipping`
* Add support for `shipping` on `Issuing.CardUpdateParams`
* Change `Plan.meter` and `Price.recurring.meter` to be required
