---
title: Update generated code for beta
pr_url: https://github.com/stripe/stripe-node/pull/1906
is_stripe_api_change: true
released_in_version: 13.8.0-beta.1
---

* Remove support for `customer` on `ConfirmationToken`
* Add support for `issuer` on `InvoiceCreateParams`, `InvoiceUpcomingLinesParams`, `InvoiceUpcomingParams`, `InvoiceUpdateParams`, `Invoice`, `Quote.invoice_settings`, `QuoteCreateParams.invoice_settings`, `QuoteUpdateParams.invoice_settings`, `SubscriptionSchedule.default_settings.invoice_settings`, `SubscriptionSchedule.phases[].invoice_settings`, `SubscriptionScheduleCreateParams.default_settings.invoice_settings`, `SubscriptionScheduleCreateParams.phases[].invoice_settings`, `SubscriptionScheduleUpdateParams.default_settings.invoice_settings`, and `SubscriptionScheduleUpdateParams.phases[].invoice_settings`
* Add support for `on_behalf_of` on `InvoiceUpcomingLinesParams` and `InvoiceUpcomingParams`
* Add support for `liability` on `Invoice.automatic_tax`, `InvoiceCreateParams.automatic_tax`, `InvoiceUpcomingLinesParams.automatic_tax`, `InvoiceUpcomingParams.automatic_tax`, `InvoiceUpdateParams.automatic_tax`, `Quote.automatic_tax`, `QuoteCreateParams.automatic_tax`, `QuoteUpdateParams.automatic_tax`, `Subscription.automatic_tax`, `SubscriptionCreateParams.automatic_tax`, `SubscriptionSchedule.default_settings.automatic_tax`, `SubscriptionSchedule.phases[].automatic_tax`, `SubscriptionScheduleCreateParams.default_settings.automatic_tax`, `SubscriptionScheduleCreateParams.phases[].automatic_tax`, `SubscriptionScheduleUpdateParams.default_settings.automatic_tax`, `SubscriptionScheduleUpdateParams.phases[].automatic_tax`, and `SubscriptionUpdateParams.automatic_tax`
* Change type of `Issuing.CardDesignUpdateParams.carrier_text` from `carrier_text_param` to `emptyStringable(carrier_text_param)`
* Add support for `invoice_settings` on `SubscriptionCreateParams` and `SubscriptionUpdateParams`
