---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/1920
is_stripe_api_change: true
released_in_version: 13.10.0
---

* Add support for `redirect_on_completion`, `return_url`, and `ui_mode` on `Checkout.SessionCreateParams` and `Checkout.Session`
* Change `Checkout.Session.custom_fields[].dropdown`, `Checkout.Session.custom_fields[].numeric`, `Checkout.Session.custom_fields[].text`, `Checkout.SessionCreateParams.success_url`, `PaymentLink.custom_fields[].dropdown`, `PaymentLink.custom_fields[].numeric`, and `PaymentLink.custom_fields[].text` to be optional
* Add support for `client_secret` on `Checkout.Session`
* Change type of `Checkout.Session.custom_fields[].dropdown` from `PaymentPagesCheckoutSessionCustomFieldsDropdown | null` to `PaymentPagesCheckoutSessionCustomFieldsDropdown`
* Change type of `Checkout.Session.custom_fields[].numeric` and `Checkout.Session.custom_fields[].text` from `PaymentPagesCheckoutSessionCustomFieldsNumeric | null` to `PaymentPagesCheckoutSessionCustomFieldsNumeric`
* Add support for `postal_code` on `Issuing.Authorization.verification_data`
* Change type of `PaymentLink.custom_fields[].dropdown` from `PaymentLinksResourceCustomFieldsDropdown | null` to `PaymentLinksResourceCustomFieldsDropdown`
* Change type of `PaymentLink.custom_fields[].numeric` and `PaymentLink.custom_fields[].text` from `PaymentLinksResourceCustomFieldsNumeric | null` to `PaymentLinksResourceCustomFieldsNumeric`
* Add support for `offline` on `Terminal.ConfigurationCreateParams`, `Terminal.ConfigurationUpdateParams`, and `Terminal.Configuration`
