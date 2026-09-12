---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/1998
is_stripe_api_change: true
released_in_version: 14.14.0
---

* Add support for `annual_revenue` and `estimated_worker_count` on `Account.business_profile`, `AccountCreateParams.business_profile`, and `AccountUpdateParams.business_profile`
* Add support for new value `registered_charity` on enums `Account.company.structure`, `AccountCreateParams.company.structure`, `AccountUpdateParams.company.structure`, and `TokenCreateParams.account.company.structure`
* Add support for `collection_options` on `AccountLinkCreateParams`
* Add support for `liability` on `Checkout.Session.automatic_tax`, `Checkout.SessionCreateParams.automatic_tax`, `PaymentLink.automatic_tax`, `PaymentLinkCreateParams.automatic_tax`, `PaymentLinkUpdateParams.automatic_tax`, `Quote.automatic_tax`, `QuoteCreateParams.automatic_tax`, `QuoteUpdateParams.automatic_tax`, `SubscriptionSchedule.default_settings.automatic_tax`, `SubscriptionSchedule.phases[].automatic_tax`, `SubscriptionScheduleCreateParams.default_settings.automatic_tax`, `SubscriptionScheduleCreateParams.phases[].automatic_tax`, `SubscriptionScheduleUpdateParams.default_settings.automatic_tax`, and `SubscriptionScheduleUpdateParams.phases[].automatic_tax`
* Add support for `issuer` on `Checkout.Session.invoice_creation.invoice_data`, `Checkout.SessionCreateParams.invoice_creation.invoice_data`, `PaymentLink.invoice_creation.invoice_data`, `PaymentLinkCreateParams.invoice_creation.invoice_data`, `PaymentLinkUpdateParams.invoice_creation.invoice_data`, `Quote.invoice_settings`, `QuoteCreateParams.invoice_settings`, `QuoteUpdateParams.invoice_settings`, `SubscriptionSchedule.default_settings.invoice_settings`, `SubscriptionSchedule.phases[].invoice_settings`, `SubscriptionScheduleCreateParams.default_settings.invoice_settings`, `SubscriptionScheduleCreateParams.phases[].invoice_settings`, `SubscriptionScheduleUpdateParams.default_settings.invoice_settings`, and `SubscriptionScheduleUpdateParams.phases[].invoice_settings`
* Add support for `invoice_settings` on `Checkout.SessionCreateParams.subscription_data`, `PaymentLink.subscription_data`, `PaymentLinkCreateParams.subscription_data`, and `PaymentLinkUpdateParams.subscription_data`
* Add support for new value `challenge` on enums `Invoice.payment_settings.payment_method_options.card.request_three_d_secure`, `InvoiceCreateParams.payment_settings.payment_method_options.card.request_three_d_secure`, `InvoiceUpdateParams.payment_settings.payment_method_options.card.request_three_d_secure`, `Subscription.payment_settings.payment_method_options.card.request_three_d_secure`, `SubscriptionCreateParams.payment_settings.payment_method_options.card.request_three_d_secure`, and `SubscriptionUpdateParams.payment_settings.payment_method_options.card.request_three_d_secure`
* Add support for `promotion_code` on `InvoiceUpcomingLinesParams.discounts[]`, `InvoiceUpcomingLinesParams.invoice_items[].discounts[]`, `InvoiceUpcomingParams.discounts[]`, and `InvoiceUpcomingParams.invoice_items[].discounts[]`
* Add support for `account_type` on `PaymentMethodUpdateParams.us_bank_account`
