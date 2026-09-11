---
title: Update generated code for private-preview
pr_link: https://github.com/stripe/stripe-node/pull/2578
is_stripe_api_change: true
released_in_version: 20.5.0-alpha.1
---

* Add support for new resource `AccountSignals`
* Add support for `retrieve` method on resource `AccountSignals`
* Add support for `aggregation_period`, `group_by`, and `triggered_at` on `Billing.AlertTriggered`
* Add support for `external_account_collection` on `AccountLinkCreateParams.collection_options`
* Add support for `funding_source` on `ApplicationFee`
* Change `DelegatedCheckout.RequestedSessionConfirmParams.payment_method_data.billing_details.address.line1`, `DelegatedCheckout.RequestedSessionCreateParams.fulfillment_details.address.line1`, `DelegatedCheckout.RequestedSessionCreateParams.payment_method_data.billing_details.address.line1`, `DelegatedCheckout.RequestedSessionUpdateParams.fulfillment_details.address.line1`, and `DelegatedCheckout.RequestedSessionUpdateParams.payment_method_data.billing_details.address.line1` to be optional
* Add support for `hosted` and `ui_mode` on `FinancialConnections.SessionCreateParams` and `FinancialConnections.Session`
* Add support for `url` on `FinancialConnections.Session`
* Add support for `billing_cycle_anchor` on `SubscriptionCreateParams.trial_settings.end_behavior` and `SubscriptionUpdateParams.trial_settings.end_behavior`
