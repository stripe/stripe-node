---
title: Add decimal_string support with vendored Decimal type
pr_url: https://github.com/stripe/stripe-node/pull/2617
is_breaking: true
released_in_version: 21.0.0
---

- All `decimal_string` fields changed type from `string` to `Stripe.Decimal` in both request params and response objects. Code that reads or writes these fields as `string` will need to use `Stripe.Decimal` instead (construct via `Decimal.from("1.23")`, serialize via `.toString()`). Affected fields across v1 and v2 APIs:
  - **Checkout.Session**: `currency_conversion.fx_rate`
  - **Climate.Order**: `metric_tons`; **Climate.Product**: `metric_tons_available`
  - **CreditNoteLineItem**: `unit_amount_decimal`
  - **InvoiceItem**: `quantity_decimal`, `unit_amount_decimal`
  - **InvoiceLineItem**: `quantity_decimal`, `unit_amount_decimal`
  - **Issuing.Authorization** / **Issuing.Transaction** (and TestHelpers): `quantity_decimal`, `unit_cost_decimal`, `gross_amount_decimal`, `local_amount_decimal`, `national_amount_decimal`
  - **Plan**: `amount_decimal`, `flat_amount_decimal`, `unit_amount_decimal`
  - **Price**: `unit_amount_decimal`, `flat_amount_decimal` (including `currency_options` and `tiers`)
  - **V2.Core.Account** / **V2.Core.AccountPerson**: `percent_ownership`
  - Request params on **Invoice**, **Product**, **Quote**, **Subscription**, **SubscriptionItem**, **SubscriptionSchedule**, **PaymentLink**: `unit_amount_decimal`, `flat_amount_decimal`, `quantity_decimal` (where applicable)
