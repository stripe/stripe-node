---
title: Update generated code for beta
pr_url: https://github.com/stripe/stripe-node/pull/2307
is_stripe_api_change: true
released_in_version: 18.2.0-beta.1
---

This release changes the pinned API version to `2025-04-30.preview`.

* Add support for `billing_mode` on `Checkout.SessionCreateParams.subscription_data`, `InvoiceCreatePreviewParams.schedule_details`, `InvoiceCreatePreviewParams.subscription_details`, `Quote.subscription_data`, `QuoteCreateParams.subscription_data`, `QuotePreviewSubscriptionSchedule`, `SubscriptionCreateParams`, `SubscriptionScheduleCreateParams`, `SubscriptionSchedule`, and `Subscription`
* Add support for new values `aw_tin`, `az_tin`, `bd_bin`, `bf_ifu`, `bj_ifu`, `cm_niu`, `cv_nif`, `et_tin`, `kg_tin`, and `la_tin` on enums `Checkout.Session.collected_information.tax_ids[].type`, `Order.tax_details.tax_ids[].type`, and `QuotePreviewInvoice.customer_tax_ids[].type`
* Change `Checkout.Session.automatic_tax.provider`, `Invoice.automatic_tax.provider`, `Quote.automatic_tax.provider`, and `QuotePreviewInvoice.automatic_tax.provider` to be required
* Add support for `account_number` on `ConfirmationToken.payment_method_preview.acss_debit` and `PaymentMethod.acss_debit`
* Add support for new value `balance_settings.updated` on enum `Event.type`
* Add support for new values `aw_tin`, `az_tin`, `bd_bin`, `bf_ifu`, `bj_ifu`, `cm_niu`, `cv_nif`, `et_tin`, `kg_tin`, and `la_tin` on enums `OrderCreateParams.tax_details.tax_ids[].type` and `OrderUpdateParams.tax_details.tax_ids[].type`
* Add support for new value `balance_settings.updated` on enums `WebhookEndpointUpdateParams.enabled_events`
