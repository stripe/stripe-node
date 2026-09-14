---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1359
is_stripe_api_change: true
released_in_version: 8.205.0
---

* Change `BillingPortal.Configuration` `.business_profile.privacy_policy_url` and `.business_profile.terms_of_service_url` to be optional on requests and responses

* Add support for `konbini_payments` on `AccountUpdateParams.capabilities`, `AccountCreateParams.capabilities`, and `Account.capabilities`
* Add support for `konbini` on `Charge.payment_method_details`,
* Add support for `.payment_method_options.konbini` and `.payment_method_data.konbini` on the `PaymentIntent` API.
* Add support for `.payment_settings.payment_method_options.konbini` on the `Invoice` API.
* Add support for `.payment_method_options.konbini` on the `Subscription` API
* Add support for `.payment_method_options.konbini` on the `Checkout.Session` API
* Add support for `konbini` on the `PaymentMethod` API.
* Add support for `konbini_display_details` on `PaymentIntent.next_action`
