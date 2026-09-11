---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/1916
is_stripe_api_change: true
released_in_version: 13.9.0
---

* Add support for new resource `Issuing.Token`
* Add support for `list`, `retrieve`, and `update` methods on resource `Token`
* Add support for `amount_authorized`, `extended_authorization`, `incremental_authorization`, `multicapture`, and `overcapture` on `Charge.payment_method_details.card`
* Add support for `token` on `Issuing.Authorization` and `Issuing.Transaction`
* Add support for `authorization_code` on `Issuing.Authorization.request_history[]`
* Add support for `request_extended_authorization`, `request_multicapture`, and `request_overcapture` on `PaymentIntent.payment_method_options.card`, `PaymentIntentConfirmParams.payment_method_options.card`, `PaymentIntentCreateParams.payment_method_options.card`, and `PaymentIntentUpdateParams.payment_method_options.card`
* Add support for `request_incremental_authorization` on `PaymentIntent.payment_method_options.card`, `PaymentIntentConfirmParams.payment_method_options.card_present`, `PaymentIntentConfirmParams.payment_method_options.card`, `PaymentIntentCreateParams.payment_method_options.card_present`, `PaymentIntentCreateParams.payment_method_options.card`, `PaymentIntentUpdateParams.payment_method_options.card_present`, and `PaymentIntentUpdateParams.payment_method_options.card`
* Add support for `final_capture` on `PaymentIntentCaptureParams`
* Add support for `metadata` on `PaymentLink.payment_intent_data`, `PaymentLink.subscription_data`, `PaymentLinkCreateParams.payment_intent_data`, and `PaymentLinkCreateParams.subscription_data`
* Add support for `statement_descriptor_suffix` and `statement_descriptor` on `PaymentLink.payment_intent_data` and `PaymentLinkCreateParams.payment_intent_data`
* Add support for `payment_intent_data` and `subscription_data` on `PaymentLinkUpdateParams`
