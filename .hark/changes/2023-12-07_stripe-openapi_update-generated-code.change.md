---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/1968
is_stripe_api_change: true
released_in_version: 14.8.0
---

* Add support for `payment_details`, `payments`, and `payouts` on `AccountSession.components` and `AccountSessionCreateParams.components`
* Add support for `features` on `AccountSession.components.account_onboarding` and `AccountSessionCreateParams.components.account_onboarding`
* Add support for new values `customer_tax_location_invalid` and `financial_connections_no_successful_transaction_refresh` on enums `Invoice.last_finalization_error.code`, `PaymentIntent.last_payment_error.code`, `SetupAttempt.setup_error.code`, `SetupIntent.last_setup_error.code`, and `StripeError.code`
* Add support for new values `payment_network_reserve_hold` and `payment_network_reserve_release` on enum `BalanceTransaction.type`
* Change `Climate.Product.metric_tons_available` to be required
* Remove support for value `various` from enum `Climate.Supplier.removal_pathway`
* Remove support for values `challenge_only` and `challenge` from enum `PaymentIntent.payment_method_options.card.request_three_d_secure`
* Add support for `inactive_message` and `restrictions` on `PaymentLinkCreateParams`, `PaymentLinkUpdateParams`, and `PaymentLink`
* Add support for `transfer_group` on `PaymentLink.payment_intent_data`, `PaymentLinkCreateParams.payment_intent_data`, and `PaymentLinkUpdateParams.payment_intent_data`
* Add support for `trial_settings` on `PaymentLink.subscription_data`, `PaymentLinkCreateParams.subscription_data`, and `PaymentLinkUpdateParams.subscription_data`
