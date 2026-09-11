---
title: Update generated code for private-preview
pr_link: https://github.com/stripe/stripe-node/pull/2537
is_stripe_api_change: true
released_in_version: 20.2.0-alpha.2
---

* Add support for `tracking_details` on `V2.MoneyManagement.OutboundPayment`
* Add support for `paper_check` on `V2.MoneyManagement.OutboundPayment.delivery_options` and `V2.MoneyManagement.OutboundPaymentCreateParams.delivery_options`
* Add support for event notification `V2CoreAccountIncludingFutureRequirementsUpdatedEvent` with related object `V2.Core.Account`
* Add support for error code `account_rate_limit_exceeded` on `RateLimitError`
