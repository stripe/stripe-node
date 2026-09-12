---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/1961
is_stripe_api_change: true
released_in_version: 14.6.0
---

* Add support for `electronic_commerce_indicator` on `Charge.payment_method_details.card.three_d_secure` and `SetupAttempt.payment_method_details.card.three_d_secure`
* Add support for `exemption_indicator_applied` and `exemption_indicator` on `Charge.payment_method_details.card.three_d_secure`
* Add support for `transaction_id` on `Charge.payment_method_details.card.three_d_secure`, `Issuing.Authorization.network_data`, `Issuing.Transaction.network_data`, and `SetupAttempt.payment_method_details.card.three_d_secure`
* Add support for `offline` on `Charge.payment_method_details.card_present`
* Add support for `system_trace_audit_number` on `Issuing.Authorization.network_data`
* Add support for `network_risk_score` on `Issuing.Authorization.pending_request` and `Issuing.Authorization.request_history[]`
* Add support for `requested_at` on `Issuing.Authorization.request_history[]`
* Add support for `authorization_code` on `Issuing.Transaction.network_data`
* Add support for `three_d_secure` on `PaymentIntentConfirmParams.payment_method_options.card`, `PaymentIntentCreateParams.payment_method_options.card`, `PaymentIntentUpdateParams.payment_method_options.card`, `SetupIntentConfirmParams.payment_method_options.card`, `SetupIntentCreateParams.payment_method_options.card`, and `SetupIntentUpdateParams.payment_method_options.card`
