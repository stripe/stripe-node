---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2256
is_stripe_api_change: true
released_in_version: 17.7.0
---

* Add support for `prices` on `Billing.CreditBalanceSummaryRetrieveParams.filter.applicability_scope`, `Billing.CreditGrant.applicability_config.scope`, and `Billing.CreditGrantCreateParams.applicability_config.scope`
* Change `Billing.CreditBalanceSummaryRetrieveParams.filter.applicability_scope.price_type`, `Billing.CreditGrant.applicability_config.scope.price_type`, and `Billing.CreditGrantCreateParams.applicability_config.scope.price_type` to be optional
* Add support for `priority` on `Billing.CreditGrantCreateParams` and `Billing.CreditGrant`
* Add support for `target_date` on `Checkout.Session.payment_method_options.acss_debit`, `Checkout.Session.payment_method_options.au_becs_debit`, `Checkout.Session.payment_method_options.bacs_debit`, `Checkout.Session.payment_method_options.sepa_debit`, `Checkout.Session.payment_method_options.us_bank_account`, `Checkout.SessionCreateParams.payment_method_options.acss_debit`, `Checkout.SessionCreateParams.payment_method_options.au_becs_debit`, `Checkout.SessionCreateParams.payment_method_options.bacs_debit`, `Checkout.SessionCreateParams.payment_method_options.sepa_debit`, `Checkout.SessionCreateParams.payment_method_options.us_bank_account`, `PaymentIntent.payment_method_options.acss_debit`, `PaymentIntent.payment_method_options.au_becs_debit`, `PaymentIntent.payment_method_options.bacs_debit`, `PaymentIntent.payment_method_options.sepa_debit`, `PaymentIntent.payment_method_options.us_bank_account`, `PaymentIntentConfirmParams.payment_method_options.acss_debit`, `PaymentIntentConfirmParams.payment_method_options.au_becs_debit`, `PaymentIntentConfirmParams.payment_method_options.bacs_debit`, `PaymentIntentConfirmParams.payment_method_options.sepa_debit`, `PaymentIntentConfirmParams.payment_method_options.us_bank_account`, `PaymentIntentCreateParams.payment_method_options.acss_debit`, `PaymentIntentCreateParams.payment_method_options.au_becs_debit`, `PaymentIntentCreateParams.payment_method_options.bacs_debit`, `PaymentIntentCreateParams.payment_method_options.sepa_debit`, `PaymentIntentCreateParams.payment_method_options.us_bank_account`, `PaymentIntentUpdateParams.payment_method_options.acss_debit`, `PaymentIntentUpdateParams.payment_method_options.au_becs_debit`, `PaymentIntentUpdateParams.payment_method_options.bacs_debit`, `PaymentIntentUpdateParams.payment_method_options.sepa_debit`, and `PaymentIntentUpdateParams.payment_method_options.us_bank_account`
* Add support for `restrictions` on `Checkout.Session.payment_method_options.card` and `Checkout.SessionCreateParams.payment_method_options.card`
* Add support for `collected_information` on `Checkout.SessionUpdateParams` and `Checkout.Session`
* Change `Checkout.Session.discounts`, `Refund.destination_details.blik.network_decline_code`, and `Refund.destination_details.swish.network_decline_code` to be required
* Add support for `metadata` on `ProductCreateParams.default_price_data`
* Change type of `TokenCreateParams.person.political_exposure` from `string` to `enum('existing'|'none')`
* Add support for new value `2025-02-24.acacia` on enum `WebhookEndpointCreateParams.api_version`
