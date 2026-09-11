---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1524
is_stripe_api_change: true
released_in_version: 10.4.0
---

* Change `Terminal.Reader.action` to be required
* Change `Treasury.OutboundTransferCreateParams.destination_payment_method` to be optional
* Change type of `Treasury.OutboundTransfer.destination_payment_method` from `string` to `string | null`
* Change the return type of `Customer.fundCashBalance` test helper from `CustomerBalanceTransaction` to `CustomerCashBalanceTransaction`.
  * This would generally be considered a breaking change, but we've worked with all existing users to migrate and are comfortable releasing this as a minor as it is solely a test helper method. This was essentially broken prior to this change.
