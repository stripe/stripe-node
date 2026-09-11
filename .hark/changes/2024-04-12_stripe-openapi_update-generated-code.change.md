---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/2058
is_stripe_api_change: true
released_in_version: 15.2.0-beta.1
---

* Add support for `retrieve` method on resources `Entitlements.ActiveEntitlement` and `Entitlements.Feature`
* Add support for `fees`, `losses`, `requirement_collection`, and `stripe_dashboard` on `AccountCreateParams.controller`
* Change type of `Entitlements.Feature.metadata` from `map(string: string) | null` to `map(string: string)`
* Change `FinancialConnections.Account.ownership_refresh.next_refresh_available_at` to be required
* Add support for new values `bh_vat`, `kz_bin`, `ng_tin`, and `om_vat` on enums `InvoiceCreatePreviewParams.customer_details.tax_ids[].type`, `OrderCreateParams.tax_details.tax_ids[].type`, and `OrderUpdateParams.tax_details.tax_ids[].type`
* Add support for new values `bh_vat`, `kz_bin`, `ng_tin`, and `om_vat` on enum `Order.tax_details.tax_ids[].type`
* Add support for `hosted_voucher_url` on `PaymentIntent.next_action.multibanco_display_details`
* Add support for `toggles` on `Terminal.Reader.action.collect_inputs.inputs[]` and `Terminal.ReaderCollectInputsParams.inputs[]`
* Add support for new values `email`, `numeric`, `phone`, and `text` on enum `Terminal.ReaderCollectInputsParams.inputs[].type`
* Add support for `email`, `numeric`, `phone`, and `text` on `Terminal.Reader.action.collect_inputs.inputs[]`
