---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/1971
is_stripe_api_change: true
released_in_version: 14.9.0
---

* Add support for `payment_method_reuse_agreement` on `Checkout.Session.consent_collection`, `Checkout.SessionCreateParams.consent_collection`, `PaymentLink.consent_collection`, and `PaymentLinkCreateParams.consent_collection`
* Add support for `after_submit` on `Checkout.Session.custom_text`, `Checkout.SessionCreateParams.custom_text`, `PaymentLink.custom_text`, `PaymentLinkCreateParams.custom_text`, and `PaymentLinkUpdateParams.custom_text`
* Add support for `created` on `Radar.EarlyFraudWarningListParams`
