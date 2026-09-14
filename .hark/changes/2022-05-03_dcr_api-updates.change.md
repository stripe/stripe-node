---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1407
is_stripe_api_change: true
released_in_version: 8.220.0
---

* Add support for new resource `CashBalance`
* Change type of `BillingPortal.Configuration.application` from `$Application` to `deletable($Application)`
* Add support for `alipay` on `Checkout.Session.payment_method_options` and `Checkout.SessionCreateParams.payment_method_options`
* Change type of `Checkout.SessionCreateParams.payment_method_options.konbini.expires_after_days` from `emptyStringable(integer)` to `integer`
* Add support for new value `eu_oss_vat` on enums `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, and `TaxId.type`
* Add support for new value `eu_oss_vat` on enums `CustomerCreateParams.tax_id_data[].type`, `InvoiceUpcomingLinesParams.customer_details.tax_ids[].type`, `InvoiceUpcomingParams.customer_details.tax_ids[].type`, and `TaxIdCreateParams.type`
* Add support for `cash_balance` on `Customer`
* Add support for `application` on `Invoice`, `Quote`, `SubscriptionSchedule`, and `Subscription`
