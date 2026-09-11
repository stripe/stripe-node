---
title: Update generated code for private-preview
pr_link: https://github.com/stripe/stripe-node/pull/2494
is_stripe_api_change: true
released_in_version: 19.4.0-alpha.2
---

* Remove support for resource `V2.Tax.AutomaticRule`
* Remove support for `create`, `deactivate`, `find`, `retrieve`, and `update` methods on resource `V2.Tax.AutomaticRule`
* Add support for `self_reported_income` and `self_reported_monthly_housing_payment` on `AccountCreateParams.individual`, `AccountCreatePersonParams`, `AccountUpdateParams.individual`, `AccountUpdatePersonParams`, `Person`, `TokenCreateParams.account.individual`, and `TokenCreateParams.person`
* Add support for new values `amendment_end`, `line_ends_at`, `schedule_end`, and `upcoming_invoice` on enums `InvoiceCreatePreviewParams.subscription_details.billing_schedules[].bill_until.type`, `Subscription.billing_schedules[].bill_until.type`, `SubscriptionCreateParams.billing_schedules[].bill_until.type`, and `SubscriptionUpdateParams.billing_schedules[].bill_until.type`
* Add support for `billing_schedules` and `phase_effective_at` on `Quote.subscription_data_overrides[]`, `Quote.subscription_data`, `QuoteCreateParams.subscription_data_overrides[]`, `QuoteCreateParams.subscription_data`, `QuoteUpdateParams.subscription_data_overrides[]`, and `QuoteUpdateParams.subscription_data`
* Add support for `bill_from` on `Subscription.billing_schedules[]`
* Add support for `amendment_end` and `line_ends_at` on `Subscription.billing_schedules[].bill_until`
