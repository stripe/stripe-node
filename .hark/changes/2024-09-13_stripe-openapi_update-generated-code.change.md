---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/2170
is_stripe_api_change: true
released_in_version: 16.12.0-beta.1
---

* Add support for new resources `Issuing.DisputeSettlementDetail` and `Issuing.Settlement`
* Add support for `list` and `retrieve` methods on resource `DisputeSettlementDetail`
* Remove support for `list` method on resource `QuotePhase`
* Add support for new value `rechnung` on enum `Checkout.SessionCreateParams.payment_method_types[]`
* Add support for new values `issuing_dispute_settlement_detail.created`, `issuing_dispute_settlement_detail.updated`, `issuing_settlement.created`, and `issuing_settlement.updated` on enum `Event.type`
* Add support for `settlement` on `Issuing.TransactionListParams` and `Issuing.Transaction`
* Add support for new values `issuing_dispute_settlement_detail.created`, `issuing_dispute_settlement_detail.updated`, `issuing_settlement.created`, and `issuing_settlement.updated` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
