---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1453
is_stripe_api_change: true
released_in_version: 9.9.0
---

* Add support for `fund_cash_balance` test helper method on resource `Customer`
* Add support for `statement_descriptor_prefix_kana` and `statement_descriptor_prefix_kanji` on `Account.settings.card_payments`, `Account.settings.payments`, `AccountCreateParams.settings.card_payments`, and `AccountUpdateParams.settings.card_payments`
* Add support for `statement_descriptor_suffix_kana` and `statement_descriptor_suffix_kanji` on `Checkout.Session.payment_method_options.card`, `Checkout.SessionCreateParams.payment_method_options.card`, `PaymentIntent.payment_method_options.card`, `PaymentIntentConfirmParams.payment_method_options.card`, `PaymentIntentCreateParams.payment_method_options.card`, and `PaymentIntentUpdateParams.payment_method_options.card`
* Add support for `total_excluding_tax` on `CreditNote`
* Change type of `CustomerCreateParams.invoice_settings.rendering_options` and `CustomerUpdateParams.invoice_settings.rendering_options` from `rendering_options_param` to `emptyStringable(rendering_options_param)`
* Add support for `rendering_options` on `Customer.invoice_settings` and `Invoice`
