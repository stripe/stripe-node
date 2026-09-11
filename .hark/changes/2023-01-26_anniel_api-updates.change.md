---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1665
is_stripe_api_change: true
released_in_version: 11.8.0
---

* Add support for new value `BE` on enums `Checkout.Session.payment_method_options.customer_balance.bank_transfer.eu_bank_transfer.country`, `Invoice.payment_settings.payment_method_options.customer_balance.bank_transfer.eu_bank_transfer.country`, `PaymentIntent.payment_method_options.customer_balance.bank_transfer.eu_bank_transfer.country`, and `Subscription.payment_settings.payment_method_options.customer_balance.bank_transfer.eu_bank_transfer.country`
* Add support for new values `cs-CZ`, `el-GR`, `en-CZ`, and `en-GR` on enums `PaymentIntentConfirmParams.payment_method_options.klarna.preferred_locale`, `PaymentIntentCreateParams.payment_method_options.klarna.preferred_locale`, and `PaymentIntentUpdateParams.payment_method_options.klarna.preferred_locale`
