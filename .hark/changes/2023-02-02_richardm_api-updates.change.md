---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1669
is_stripe_api_change: true
released_in_version: 11.9.0
---

* Add support for `resume` method on resource `Subscription`
* Add support for `payment_link` on `Checkout.SessionListParams`
* Add support for `trial_settings` on `Checkout.SessionCreateParams.subscription_data`, `SubscriptionCreateParams`, `SubscriptionUpdateParams`, and `Subscription`
* Add support for `shipping_cost` on `CreditNoteCreateParams`, `CreditNotePreviewLinesParams`, `CreditNotePreviewParams`, `CreditNote`, `InvoiceCreateParams`, `InvoiceUpdateParams`, and `Invoice`
* Add support for `amount_shipping` on `CreditNote` and `Invoice`
* Add support for `shipping_details` on `InvoiceCreateParams`, `InvoiceUpdateParams`, and `Invoice`
* Add support for `subscription_resume_at` on `InvoiceUpcomingLinesParams` and `InvoiceUpcomingParams`
* Change `Issuing.CardholderCreateParams.individual.first_name`, `Issuing.CardholderCreateParams.individual.last_name`, `Issuing.CardholderUpdateParams.individual.first_name`, and `Issuing.CardholderUpdateParams.individual.last_name` to be optional
* Change type of `Issuing.Cardholder.individual.first_name` and `Issuing.Cardholder.individual.last_name` from `string` to `string | null`
* Add support for `invoice_creation` on `PaymentLinkCreateParams`, `PaymentLinkUpdateParams`, and `PaymentLink`
* Add support for new value `America/Ciudad_Juarez` on enum `Reporting.ReportRunCreateParams.parameters.timezone`
* Add support for new value `paused` on enum `SubscriptionListParams.status`
* Add support for new value `paused` on enum `Subscription.status`
* Add support for new values `customer.subscription.paused` and `customer.subscription.resumed` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
* Add support for new value `funding_reversed` on enum `CustomerCashBalanceTransaction.type`
