---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/2026
is_stripe_api_change: true
released_in_version: 14.20.0-beta.1
---

* Remove support for resource `Entitlements.Event`
* Change type of `ConfirmationToken.mandate_data` from `ConfirmationTokensResourceMandateData | null` to `ConfirmationTokensResourceMandateData`
* Change `ConfirmationToken.mandate_data`, `ConfirmationToken.payment_method_options`, and `ConfirmationToken.payment_method` to be optional
* Remove support for `quantity` and `type` on `Entitlements.FeatureCreateParams` and `Entitlements.Feature`
* Add support for `livemode` on `Issuing.PersonalizationDesign`
* Add support for `application_fee_amount`, `description`, `metadata`, and `transfer_data` on `PaymentIntentDecrementAuthorizationParams`
* Add support for `enable_customer_cancellation` on `Terminal.Reader.action.collect_payment_method.collect_config` and `Terminal.ReaderCollectPaymentMethodParams.collect_config`
