---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2843
semver_level: major
is_stripe_api_change: true
---

* ⚠️ Remove support for `nesting_demo` on `AccountSession.components`
* Add support for `verification_method` on `Checkout.Session.payment_method_options.bacs_debit` and `Checkout.SessionCreateParams.payment_method_options.bacs_debit`
* Add support for new value `sequra` on enum `Checkout.SessionCreateParams.payment_method_types`
* Add support for new value `ripusd` on enums `Crypto.OnrampSession.transaction_details.destination_currency`, `Crypto.OnrampSessionCreateParams.destination_currency`, and `Crypto.OnrampSessionListParams.destination_currency`
* Add support for new value `ripusd` on enums `Crypto.OnrampSession.transaction_details.destination_currencies` and `Crypto.OnrampSessionCreateParams.destination_currencies`
* Add support for new values `cad`, `cop`, and `php` on enums `Crypto.OnrampSession.transaction_details.source_currency` and `Crypto.OnrampSessionCreateParams.source_currency`
* Add support for `appeal` on `Dispute.evidence`
* Add support for `bacs_debit` on `Invoice.payment_settings.payment_method_options`, `InvoiceCreateParams.payment_settings.payment_method_options`, `InvoiceUpdateParams.payment_settings.payment_method_options`, `QuotePreviewInvoice.payment_settings.payment_method_options`, `Subscription.payment_settings.payment_method_options`, `SubscriptionCreateParams.payment_settings.payment_method_options`, and `SubscriptionUpdateParams.payment_settings.payment_method_options`
* Add support for `pricing_token` on `InvoiceCreatePreviewParams`
* Add support for new values `2.3.0` and `2.3.1` on enums `PaymentAttemptRecord.payment_method_details.card.three_d_secure.version` and `PaymentRecord.payment_method_details.card.three_d_secure.version`
* Add support for `funding_source_group` on `PaymentAttemptRecord.payment_method_details.link` and `PaymentRecord.payment_method_details.link`
* Add support for `payout_method_options` on `PayoutCreateParams`
* ⚠️ Change `ProductCatalog.TrialOffer.end_behavior.transition` to be optional
* ⚠️ Remove support for `igic` on `Tax.Registration.country_options.at`, `Tax.Registration.country_options.be`, `Tax.Registration.country_options.bg`, `Tax.Registration.country_options.cy`, `Tax.Registration.country_options.cz`, `Tax.Registration.country_options.de`, `Tax.Registration.country_options.dk`, `Tax.Registration.country_options.ee`, `Tax.Registration.country_options.fi`, `Tax.Registration.country_options.fr`, `Tax.Registration.country_options.gr`, `Tax.Registration.country_options.hr`, `Tax.Registration.country_options.hu`, `Tax.Registration.country_options.ie`, `Tax.Registration.country_options.it`, `Tax.Registration.country_options.lt`, `Tax.Registration.country_options.lu`, `Tax.Registration.country_options.lv`, `Tax.Registration.country_options.mt`, `Tax.Registration.country_options.nl`, `Tax.Registration.country_options.pl`, `Tax.Registration.country_options.pt`, `Tax.Registration.country_options.ro`, `Tax.Registration.country_options.se`, `Tax.Registration.country_options.si`, and `Tax.Registration.country_options.sk`
* Add support for new value `igic` on enum `Tax.Registration.country_options.es.type`
