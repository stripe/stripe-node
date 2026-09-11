---
title: Please read the [API Changelog](https://docs.stripe.com/changelog/2024-06-20) and carefully review the API changes before upgrading.
pr_link: https://github.com/stripe/stripe-node/pull/2113
released_in_version: 16.0.0
---

### ⚠️ Breaking changes

  * Remove the unused resource `PlatformTaxFee`
  * Rename `volume_decimal` to `quantity_decimal` on
    *  `Issuing.AuthorizationCaptureParams.testHelpers.purchase_details.fuel`,
    *  `Issuing.Transaction.purchase_details.fuel`,
    *  `Issuing.TransactionCreateForceCaptureParams.testHelpers.purchase_details.fuel`, and
    *  `Issuing.TransactionCreateUnlinkedRefundParams.testHelpers.purchase_details.fuel`
  * `Capabilities.Requirements.disabled_reason` and `Capabilities.Requirements.disabled_reason` are now enums with the below values
    * `other`
    * `paused.inactivity`
    * `pending.onboarding`
    * `pending.review`
    * `platform_disabled`
    * `platform_paused`
    * `rejected.inactivity`
    * `rejected.other`
    * `rejected.unsupported_business`
    * `requirements.fields_needed`

### Additions

  * Add support for new values `charging_minute`, `imperial_gallon`, `kilogram`, `kilowatt_hour`, and `pound` on enums `Issuing.AuthorizationCaptureParams.testHelpers.purchase_details.fuel.unit`, `Issuing.TransactionCreateForceCaptureParams.testHelpers.purchase_details.fuel.unit`, and `Issuing.TransactionCreateUnlinkedRefundParams.testHelpers.purchase_details.fuel.unit`
  * Add support for new values `card_canceled`, `card_expired`, `cardholder_blocked`, `insecure_authorization_method`, and `pin_blocked` on enum `Issuing.Authorization.request_history[].reason`
* Add support for `finalize_amount` test helper method on resource `Issuing.Authorization`
* Add support for new value `ch_uid` on enums `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, `Tax.Calculation.customer_details.tax_ids[].type`, `Tax.Transaction.customer_details.tax_ids[].type`, and `TaxId.type`
* Add support for new value `ch_uid` on enums `CustomerCreateParams.tax_id_data[].type`, `InvoiceCreatePreviewParams.customer_details.tax_ids[].type`, `InvoiceUpcomingLinesParams.customer_details.tax_ids[].type`, `InvoiceUpcomingParams.customer_details.tax_ids[].type`, `Tax.CalculationCreateParams.customer_details.tax_ids[].type`, and `TaxIdCreateParams.type`
* Add support for `fleet` on `Issuing.AuthorizationCaptureParams.testHelpers.purchase_details`, `Issuing.AuthorizationCreateParams.testHelpers`, `Issuing.Authorization`, `Issuing.Transaction.purchase_details`, `Issuing.TransactionCreateForceCaptureParams.testHelpers.purchase_details`, and `Issuing.TransactionCreateUnlinkedRefundParams.testHelpers.purchase_details`
* Add support for `fuel` on `Issuing.AuthorizationCreateParams.testHelpers` and `Issuing.Authorization`
* Add support for `industry_product_code` and `quantity_decimal` on `Issuing.AuthorizationCaptureParams.testHelpers.purchase_details.fuel`, `Issuing.Transaction.purchase_details.fuel`, `Issuing.TransactionCreateForceCaptureParams.testHelpers.purchase_details.fuel`, and `Issuing.TransactionCreateUnlinkedRefundParams.testHelpers.purchase_details.fuel`
* Add support for new value `2024-06-20` on enum `WebhookEndpointCreateParams.api_version`
