---
title: Update generated code for beta
pr_url: https://github.com/stripe/stripe-node/pull/2253
is_stripe_api_change: true
released_in_version: 17.6.0-beta.3
---

* Change `Refund.destination_details.blik.network_decline_code` and `Refund.destination_details.swish.network_decline_code` to be required
* Remove support for `stripe_account` on `Terminal.Reader.action.collect_payment_method`, `Terminal.Reader.action.confirm_payment_intent`, `Terminal.Reader.action.process_payment_intent`, and `Terminal.Reader.action.refund_payment`
