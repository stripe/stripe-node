---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/1897
is_stripe_api_change: true
released_in_version: 13.6.0
---

* Add support for `capture`, `create`, `expire`, `increment`, and `reverse` test helper methods on resource `Issuing.Authorization`
* Add support for `create_force_capture`, `create_unlinked_refund`, and `refund` test helper methods on resource `Issuing.Transaction`
* Add support for new value `stripe_tax_inactive` on enums `Invoice.last_finalization_error.code`, `PaymentIntent.last_payment_error.code`, `SetupAttempt.setup_error.code`, `SetupIntent.last_setup_error.code`, and `StripeError.code`
* Add support for `nonce` on `EphemeralKeyCreateParams`
* Add support for `cashback_amount` on `Issuing.Authorization.amount_details`, `Issuing.Authorization.pending_request.amount_details`, `Issuing.Authorization.request_history[].amount_details`, and `Issuing.Transaction.amount_details`
* Add support for `serial_number` on `Terminal.ReaderListParams`
