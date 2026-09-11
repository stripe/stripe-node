---
title: API Updates for beta branch
pr_link: https://github.com/stripe/stripe-node/pull/1666
is_stripe_api_change: true
released_in_version: 11.9.0-beta.1
---

* Updated stable APIs to the latest version
* Add support for `billing_agreement_id` on `CheckoutSessionCreateParams.payment_method_options.paypal`
* Add support for `list_transactions` method on resource `Tax.Transaction`
* Change type of `QuoteUpdateParams.subscription_data_overrides` from `array(create_specs)` to `emptyStringable(array(update_specs))`
