---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/2071
is_stripe_api_change: true
released_in_version: 15.4.0
---

* Add support for `setup_future_usage` on `Checkout.Session.payment_method_options.amazon_pay`, `Checkout.Session.payment_method_options.revolut_pay`, `PaymentIntent.payment_method_options.amazon_pay`, and `PaymentIntent.payment_method_options.revolut_pay`
* Change type of `Entitlements.ActiveEntitlement.feature` from `string` to `expandable(Entitlements.Feature)`
* Remove support for inadvertently released identity verification features `email` and `phone` on `Identity.VerificationSessionCreateParams.options` and `Identity.VerificationSessionUpdateParams.options`
* Change `Identity.VerificationSession.provided_details`, `Identity.VerificationSession.verified_outputs.email`, and `Identity.VerificationSession.verified_outputs.phone` to be required
* Add support for new values `amazon_pay` and `revolut_pay` on enums `Invoice.payment_settings.payment_method_types[]`, `InvoiceCreateParams.payment_settings.payment_method_types[]`, `InvoiceUpdateParams.payment_settings.payment_method_types[]`, `Subscription.payment_settings.payment_method_types[]`, `SubscriptionCreateParams.payment_settings.payment_method_types[]`, and `SubscriptionUpdateParams.payment_settings.payment_method_types[]`
* Add support for `amazon_pay` and `revolut_pay` on `Mandate.payment_method_details` and `SetupAttempt.payment_method_details`
* Add support for `ending_before`, `limit`, and `starting_after` on `PaymentMethodConfigurationListParams`
* Add support for `mobilepay` on `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, and `PaymentMethodConfiguration`
