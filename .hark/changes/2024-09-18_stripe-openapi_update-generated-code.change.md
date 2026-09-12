---
title: Update generated code for beta
pr_url: https://github.com/stripe/stripe-node/pull/2178
is_stripe_api_change: true
released_in_version: 16.13.0-beta.1
---

* Remove support for resource `QuotePhase`
* Remove support for `list_line_items` and `retrieve` methods on resource `QuotePhase`
* Add support for `send_money` and `transfer_balance` on `AccountSessionCreateParams.components.financial_account.features`
* Add support for new value `rechnung` on enums `PaymentLink.payment_method_types[]`, `PaymentLinkCreateParams.payment_method_types[]`, and `PaymentLinkUpdateParams.payment_method_types[]`
* Change `Quote.subscription_data_overrides[].end_behavior` to be optional
