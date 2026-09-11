---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/2072
is_stripe_api_change: true
released_in_version: 15.5.0
---

* Add support for new value `shipping_address_invalid` on enums `Invoice.last_finalization_error.code`, `PaymentIntent.last_payment_error.code`, `SetupAttempt.setup_error.code`, `SetupIntent.last_setup_error.code`, and `StripeError.code`
* Fix properties incorrectly marked as required in the OpenAPI spec.
  * Change `Apps.Secret.payload`, `BillingPortal.Configuration.features.subscription_update.products`, `Charge.refunds`, `ConfirmationToken.payment_method_preview.klarna.dob`, `Identity.VerificationReport.document.dob`, `Identity.VerificationReport.document.expiration_date`, `Identity.VerificationReport.document.number`, `Identity.VerificationReport.id_number.dob`, `Identity.VerificationReport.id_number.id_number`, `Identity.VerificationSession.provided_details`, `Identity.VerificationSession.verified_outputs.dob`, `Identity.VerificationSession.verified_outputs.id_number`, `Identity.VerificationSession.verified_outputs`, `Issuing.Dispute.balance_transactions`, `Issuing.Transaction.purchase_details`, `PaymentMethod.klarna.dob`, `Tax.Calculation.line_items`, `Tax.CalculationLineItem.tax_breakdown`, `Tax.Transaction.line_items`, `Treasury.FinancialAccount.financial_addresses[].aba.account_number`, `Treasury.ReceivedCredit.linked_flows.source_flow_details`, `Treasury.Transaction.entries`, `Treasury.Transaction.flow_details`, and `Treasury.TransactionEntry.flow_details` to be optional
* Add support for `paypal` on `Dispute.payment_method_details`
* Change type of `Dispute.payment_method_details.type` from `literal('card')` to `enum('card'|'paypal')`
* Change type of `Entitlements.FeatureUpdateParams.metadata` from `map(string: string)` to `emptyable(map(string: string))`
* Add support for `payment_method_types` on `PaymentIntentConfirmParams`
* Add support for `ship_from_details` on `Tax.CalculationCreateParams`, `Tax.Calculation`, and `Tax.Transaction`
* Add support for `bh`, `eg`, `ge`, `ke`, `kz`, `ng`, and `om` on `Tax.Registration.country_options` and `Tax.RegistrationCreateParams.country_options`
