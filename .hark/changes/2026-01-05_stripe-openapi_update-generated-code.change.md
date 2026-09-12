---
title: Update generated code for private-preview
pr_url: https://github.com/stripe/stripe-node/pull/2524
is_stripe_api_change: true
released_in_version: 20.2.0-alpha.2
---

* Add support for new resource `Tax.Location`
* Add support for `create`, `list`, and `retrieve` methods on resource `Tax.Location`
* Add support for `pause` method on resource `Subscription`
* Add support for `performance_location` on `Checkout.SessionCreateParams.line_items[].price_data.product_data.tax_details`, `Checkout.SessionUpdateParams.line_items[].price_data.product_data.tax_details`, `InvoiceAddLinesParams.lines[].price_data.product_data.tax_details`, `InvoiceLineItemUpdateParams.price_data.product_data.tax_details`, `InvoiceUpdateLinesParams.lines[].price_data.product_data.tax_details`, `PaymentLinkCreateParams.line_items[].price_data.product_data.tax_details`, `ProductCreateParams.tax_details`, `ProductUpdateParams.tax_details`, `Tax.CalculationCreateParams.line_items[]`, and `Tax.CalculationLineItem`
* Add support for new value `performance` on enums `Tax.Calculation.shipping_cost.tax_breakdown[].sourcing`, `Tax.CalculationLineItem.tax_breakdown[].sourcing`, and `Tax.Transaction.shipping_cost.tax_breakdown[].sourcing`
* Add support for new values `admissions_tax`, `attendance_tax`, `entertainment_tax`, `gross_receipts_tax`, `hospitality_tax`, `luxury_tax`, `resort_tax`, and `tourism_tax` on enums `Tax.Calculation.shipping_cost.tax_breakdown[].tax_rate_details.tax_type`, `Tax.Calculation.tax_breakdown[].tax_rate_details.tax_type`, `Tax.CalculationLineItem.tax_breakdown[].tax_rate_details.tax_type`, and `Tax.Transaction.shipping_cost.tax_breakdown[].tax_rate_details.tax_type`
* Change type of `DelegatedCheckout.RequestedSessionUpdateParams.metadata` from `map(string: string)` to `emptyable(map(string: string))`
* Change type of `DelegatedCheckout.RequestedSessionUpdateParams.payment_method_data` from `payment_method_data` to `emptyable(payment_method_data)`
* Change type of `DelegatedCheckout.RequestedSessionUpdateParams.shared_metadata` from `map(string: string)` to `emptyable(map(string: string))`
* Add support for `subscription` on `Invoice.parent.schedule_details` and `QuotePreviewInvoice.parent.schedule_details`
* Change type of `PaymentIntentConfirmParams.payment_details.benefit.fr_meal_voucher`, `PaymentIntentCreateParams.payment_details.benefit.fr_meal_voucher`, `PaymentIntentUpdateParams.payment_details.benefit.fr_meal_voucher`, `SetupIntentConfirmParams.setup_details.benefit.fr_meal_voucher`, `SetupIntentCreateParams.setup_details.benefit.fr_meal_voucher`, and `SetupIntentUpdateParams.setup_details.benefit.fr_meal_voucher` from `payment_details_benefit_fr_meal_voucher` to `emptyable(payment_details_benefit_fr_meal_voucher)`
* Add support for `tax_details` on `PlanCreateParams.product[0]` and `PriceCreateParams.product_data`
* Add support for `external_reference` on `Plan` and `Price`
* Add support for new value `phase_start` on enums `Quote.subscription_data.phase_effective_at`, `Quote.subscription_data_overrides[].phase_effective_at`, `QuoteCreateParams.subscription_data.phase_effective_at`, `QuoteCreateParams.subscription_data_overrides[].phase_effective_at`, `QuoteUpdateParams.subscription_data.phase_effective_at`, and `QuoteUpdateParams.subscription_data_overrides[].phase_effective_at`
* Remove support for value `line_start` from enums `Quote.subscription_data.phase_effective_at`, `Quote.subscription_data_overrides[].phase_effective_at`, `QuoteCreateParams.subscription_data.phase_effective_at`, `QuoteCreateParams.subscription_data_overrides[].phase_effective_at`, `QuoteUpdateParams.subscription_data.phase_effective_at`, and `QuoteUpdateParams.subscription_data_overrides[].phase_effective_at`
* Add support for new values `admissions_tax`, `attendance_tax`, `entertainment_tax`, `gross_receipts_tax`, `hospitality_tax`, `luxury_tax`, `resort_tax`, and `tourism_tax` on enums `Tax.Registration.country_options.us.type` and `Tax.RegistrationCreateParams.country_options.us.type`
* Add support for `admissions_tax`, `attendance_tax`, `entertainment_tax`, `gross_receipts_tax`, `hospitality_tax`, `luxury_tax`, `resort_tax`, and `tourism_tax` on `Tax.Registration.country_options.us`
* Add support for `requirements` on `TaxCode`
