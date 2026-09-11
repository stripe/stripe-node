---
title: Support for APIs in the new API version 2024-09-30.acacia
pr_link: https://github.com/stripe/stripe-node/pull/2192
is_stripe_api_change: true
released_in_version: 17.0.0
---

This release changes the pinned API version to `2024-09-30.acacia`. Please read the [API Changelog](https://docs.stripe.com/changelog/acacia#2024-09-30.acacia) and carefully review the API changes before upgrading.

### ⚠️ Breaking changes  due to changes in the Stripe API
- Rename `usage_threshold_config` to `usage_threshold` on `Billing.AlertCreateParams` and `Billing.Alert`
- Remove support for `filter` on `Billing.AlertCreateParams` and `Billing.Alert`. Use the filters on the `usage_threshold` instead
- Remove support for `customer_consent_collected` on `Terminal.ReaderProcessSetupIntentParams`.

### ⚠️ Other Breaking changes in the SDK
- Adjusted default values around reties for HTTP requests. You can use the old defaults by setting them explicitly. New values are:
    - max retries: `1` -> `2`
    - max timeout (seconds): `2` -> `5`


### Additions
* Add support for `custom_unit_amount` on `ProductCreateParams.default_price_data`
* Add support for `allow_redisplay` on `Terminal.ReaderProcessPaymentIntentParams.process_config` and `Terminal.ReaderProcessSetupIntentParams`
* Add support for new value `international_transaction` on enum `Treasury.ReceivedCredit.failure_code`
* Add support for new value `2024-09-30.acacia` on enum `WebhookEndpointCreateParams.api_version`
* Add support for new Usage Billing APIs `Billing.MeterEvent`, `Billing.MeterEventAdjustments`, `Billing.MeterEventSession`, `Billing.MeterEventStream` and the new Events API `Core.Events` in the [v2 namespace ](https://docs.stripe.com/api-v2-overview)
* Add method `parseThinEvent()` on the `Stripe` class to parse [thin events](https://docs.stripe.com/event-destinations#events-overview).
* Add method [rawRequest()](https://github.com/stripe/stripe-node/tree/master?tab=readme-ov-file#custom-requests) on the `Stripe` class that takes a HTTP method type, url and relevant parameters to make requests to the Stripe API that are not yet supported in the SDK.

### Changes
* Change `BillingPortal.ConfigurationCreateParams.features.subscription_update.default_allowed_updates` and `BillingPortal.ConfigurationCreateParams.features.subscription_update.products` to be optional
