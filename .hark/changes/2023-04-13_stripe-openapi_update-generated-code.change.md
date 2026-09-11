---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/1751
is_stripe_api_change: true
released_in_version: 12.2.0-beta.1
---

* Add support for `collect_payment_method` and `confirm_payment_intent` methods on resource `Terminal.Reader`
* Add support for `paypal_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
* Add support for new value `REVOIE23` on enums `Charge.payment_method_details.ideal.bic`, `PaymentMethod.ideal.bic`, and `SetupAttempt.payment_method_details.ideal.bic`
* Add support for `collect_payment_method` and `confirm_payment_intent` on `Terminal.Reader.action`
* Add support for `stripe_account` on `Terminal.Reader.action.process_payment_intent` and `Terminal.Reader.action.refund_payment`
* Add support for new values `collect_payment_method` and `confirm_payment_intent` on enum `Terminal.Reader.action.type`
* Add support for new value `terminal.reader.action_updated` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
