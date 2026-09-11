---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/1788
is_stripe_api_change: true
released_in_version: 12.7.0-beta.1
---

* Add support for `subscribe` and `unsubscribe` methods on resource `FinancialConnections.Account`
* Add support for `next_refresh_available_at` on `FinancialConnections.Account.balance_refresh`, `FinancialConnections.Account.inferred_balances_refresh`, `FinancialConnections.Account.ownership_refresh`, and `FinancialConnections.Account.transaction_refresh`
* Add support for `status_details` and `status` on `Tax.Settings`
* Add support for new value `tax.settings.updated` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
