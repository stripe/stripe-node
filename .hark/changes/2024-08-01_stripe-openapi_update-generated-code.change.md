---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2144
is_breaking: true
is_stripe_api_change: true
released_in_version: 16.6.0
---

* Add support for new resources `Billing.AlertTriggered` and `Billing.Alert`
* Add support for new value `charge_exceeds_transaction_limit` on enums `Invoice.last_finalization_error.code`, `PaymentIntent.last_payment_error.code`, `SetupAttempt.setup_error.code`, `SetupIntent.last_setup_error.code`, and `StripeError.code`
* ⚠️ Remove support for `authorization_code` on `Charge.payment_method_details.card`. This was accidentally released last week.
* Add support for new value `billing.alert.triggered` on enum `Event.type`
* Add support for new value `billing.alert.triggered` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
