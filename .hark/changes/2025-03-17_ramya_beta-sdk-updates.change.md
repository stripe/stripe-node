---
title: Beta SDK updates between Open API versions 1473 and 1505
pr_url: https://github.com/stripe/stripe-node/pull/2271
released_in_version: 17.8.0-beta.1
---

* Add support for `succeed_input_collection` and `timeout_input_collection` test helper methods on resource `Terminal.Reader`
* Change type of `Account.risk_controls.rejected_reason` from enum to enum | null
* Change `Checkout.Session.collected_information.shipping_details` and `Checkout.Session.collected_information` to be required
* Add support for `target_date` on `Order.payment.settings.payment_method_options.acss_debit`, `Order.payment.settings.payment_method_options.sepa_debit`, `OrderCreateParams.payment.settings.payment_method_options.acss_debit`, `OrderCreateParams.payment.settings.payment_method_options.sepa_debit`, `OrderUpdateParams.payment.settings.payment_method_options.acss_debit`, and `OrderUpdateParams.payment.settings.payment_method_options.sepa_debit`
