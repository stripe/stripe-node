---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2057
released_in_version: 15.0.0
---

* This release changes the pinned API version to `2024-04-10`. Please read the [API Changelog](https://docs.stripe.com/changelog/2024-04-10) and carefully review the API changes before upgrading.

### ⚠️ Breaking changes

* Rename event type `InvoiceitemCreatedEvent` to `InvoiceItemCreatedEvent`
* Rename event type `InvoiceitemDeletedEvent` to `InvoiceItemDeletedEvent`
* Rename `features` to `marketing_features` on `ProductCreateOptions`, `ProductUpdateOptions`, and `Product`.

#### ⚠️ Removal of enum values, properties and events that are no longer part of the publicly documented Stripe API

* Remove `subscription_pause` from the below as the feature to pause subscription on the portal has been deprecated.
   * `BillingPortal.Configuration.Features`
   * `BillingPortal.ConfigurationCreateParams.Features`
   * `BillingPortal.ConfigurationUpdateParams.Features`
* Remove the below deprecated values for the type `BalanceTransaction.Type`
    * `obligation_inbound`
    * `obligation_payout`
    * `obligation_payout_failure`
    * `'obligation_reversal_outbound'`
 * Remove deprecated value `various` for the type `Climate.Supplier.RemovalPathway`
 * Remove deprecated events
   * `invoiceitem.updated`
   * `order.created`
   * `recipient.created`
   * `recipient.deleted`
   * `recipient.updated`
   * `sku.created`
   * `sku.deleted`
   * `sku.updated`
 * Remove types for the deprecated events
    * `InvoiceItemUpdatedEvent`
    * `OrderCreatedEvent`
    * `RecipientCreatedEvent`
    * `RecipientDeletedEvent`
    * `RecipientUpdatedEvent`
    * `SKUCreatedEvent`
    * `SKUDeletedEvent`
 * Remove the deprecated value `include_and_require` for the type`InvoiceCreateParams.PendingInvoiceItemsBehavior`
 * Remove the deprecated value `service_tax` for the types `TaxRate.TaxType`, `TaxRateCreateParams.TaxType`, `TaxRateUpdateParams.TaxType`, and `InvoiceUpdateLineItemParams.TaxAmount.TaxRateData`
 * Remove `request_incremental_authorization` from `PaymentIntentCreateParams.PaymentMethodOptions.CardPresent`, `PaymentIntentUpdateParams.PaymentMethodOptions.CardPresent` and `PaymentIntentConfirmParams.PaymentMethodOptions.CardPresent`
 * Remove support for `id_bank_transfer`, `multibanco`, `netbanking`, `pay_by_bank`, and `upi` on `PaymentMethodConfiguration`
 * Remove the deprecated value `obligation` for the type `Reporting.ReportRunCreateParams.Parameters.ReportingCategory`
 * Remove the deprecated value `challenge_only` from the type `SetupIntent.PaymentMethodOptions.Card.RequestThreeDSecure`
* Remove the legacy field `rendering_options` in `Invoice`, `InvoiceCreateOptions` and `InvoiceUpdateOptions`. Use `rendering` instead.
