# Changelog

## 12.9.0 - 2023-06-08
* [#1809](https://github.com/stripe/stripe-node/pull/1809) Update generated code
  * Change `Charge.payment_method_details.cashapp.buyer_id`, `Charge.payment_method_details.cashapp.cashtag`, `PaymentMethod.cashapp.buyer_id`, and `PaymentMethod.cashapp.cashtag` to be required
  * Add support for `taxability_reason` on `Tax.Calculation.tax_breakdown[]`
* [#1812](https://github.com/stripe/stripe-node/pull/1812) More helpful error when signing secrets contain whitespace

## 12.8.0 - 2023-06-01
* [#1799](https://github.com/stripe/stripe-node/pull/1799) Update generated code
  * Add support for `numeric` and `text` on `CheckoutSessionCreateParams.custom_fields[]`, `PaymentLinkCreateParams.custom_fields[]`, and `PaymentLinkUpdateParams.custom_fields[]`
  * Add support for new values `aba` and `swift` on enums `Checkout.Session.payment_method_options.customer_balance.bank_transfer.requested_address_types[]`, `CheckoutSessionCreateParams.payment_method_options.customer_balance.bank_transfer.requested_address_types[]`, `PaymentIntent.payment_method_options.customer_balance.bank_transfer.requested_address_types[]`, `PaymentIntentConfirmParams.payment_method_options.customer_balance.bank_transfer.requested_address_types[]`, `PaymentIntentCreateParams.payment_method_options.customer_balance.bank_transfer.requested_address_types[]`, and `PaymentIntentUpdateParams.payment_method_options.customer_balance.bank_transfer.requested_address_types[]`
  * Add support for new value `us_bank_transfer` on enums `Checkout.Session.payment_method_options.customer_balance.bank_transfer.type`, `CheckoutSessionCreateParams.payment_method_options.customer_balance.bank_transfer.type`, `CustomerCreateFundingInstructionsParams.bank_transfer.type`, `PaymentIntent.next_action.display_bank_transfer_instructions.type`, `PaymentIntent.payment_method_options.customer_balance.bank_transfer.type`, `PaymentIntentConfirmParams.payment_method_options.customer_balance.bank_transfer.type`, `PaymentIntentCreateParams.payment_method_options.customer_balance.bank_transfer.type`, and `PaymentIntentUpdateParams.payment_method_options.customer_balance.bank_transfer.type`
  * Add support for `maximum_length` and `minimum_length` on `Checkout.Session.custom_fields[].numeric` and `Checkout.Session.custom_fields[].text`
  * Add support for `preferred_locales` on `Issuing.Cardholder`, `IssuingCardholderCreateParams`, and `IssuingCardholderUpdateParams`
  * Add support for `description`, `iin`, and `issuer` on `PaymentMethod.card_present` and `PaymentMethod.interac_present`
  * Add support for `payer_email` on `PaymentMethod.paypal`

## 12.7.0 - 2023-05-25
* [#1797](https://github.com/stripe/stripe-node/pull/1797) Update generated code
  * Add support for `zip_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
  * Change type of `Invoice.last_finalization_error.code`, `PaymentIntent.last_payment_error.code`, `SetupAttempt.setup_error.code`, `SetupIntent.last_setup_error.code`, and `StripeError.code` from `string` to `enum`
  * Add support for `zip` on `Charge.payment_method_details`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, `PaymentMethodUpdateParams`, `PaymentMethod`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
  * Add support for new value `zip` on enums `CheckoutSessionCreateParams.payment_method_types[]` and `PaymentMethodCreateParams.type`
  * Add support for new value `zip` on enums `CustomerListPaymentMethodsParams.type` and `PaymentMethodListParams.type`
  * Add support for new value `zip` on enums `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
  * Add support for new value `zip` on enum `PaymentMethod.type`

## 12.6.0 - 2023-05-19
* [#1787](https://github.com/stripe/stripe-node/pull/1787) Update generated code
  * Add support for `subscription_update_confirm` and `subscription_update` on `BillingPortal.Session.flow` and `BillingPortalSessionCreateParams.flow_data`
  * Add support for new values `subscription_update_confirm` and `subscription_update` on enums `BillingPortal.Session.flow.type` and `BillingPortalSessionCreateParams.flow_data.type`
  * Add support for `link` on `Charge.payment_method_details.card.wallet` and `PaymentMethod.card.wallet`
  * Add support for `buyer_id` and `cashtag` on `Charge.payment_method_details.cashapp` and `PaymentMethod.cashapp`
  * Add support for new values `amusement_tax` and `communications_tax` on enums `TaxRate.tax_type`, `TaxRateCreateParams.tax_type`, and `TaxRateUpdateParams.tax_type`

## 12.5.0 - 2023-05-11
* [#1785](https://github.com/stripe/stripe-node/pull/1785) Update generated code
  * Add support for `paypal` on `Charge.payment_method_details`, `CheckoutSessionCreateParams.payment_method_options`, `Mandate.payment_method_details`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, `PaymentMethod`, `SetupAttempt.payment_method_details`, `SetupIntent.payment_method_options`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentConfirmParams.payment_method_options`, `SetupIntentCreateParams.payment_method_data`, `SetupIntentCreateParams.payment_method_options`, `SetupIntentUpdateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_options`
  * Add support for `network_token` on `Charge.payment_method_details.card`
  * Add support for new value `paypal` on enums `CheckoutSessionCreateParams.payment_method_types[]` and `PaymentMethodCreateParams.type`
  * Add support for `taxability_reason` and `taxable_amount` on `Checkout.Session.shipping_cost.taxes[]`, `Checkout.Session.total_details.breakdown.taxes[]`, `CreditNote.shipping_cost.taxes[]`, `CreditNote.tax_amounts[]`, `Invoice.shipping_cost.taxes[]`, `Invoice.total_tax_amounts[]`, `LineItem.taxes[]`, `Quote.computed.recurring.total_details.breakdown.taxes[]`, `Quote.computed.upfront.total_details.breakdown.taxes[]`, and `Quote.total_details.breakdown.taxes[]`
  * Add support for new value `paypal` on enums `CustomerListPaymentMethodsParams.type` and `PaymentMethodListParams.type`
  * Add support for new value `paypal` on enums `Invoice.payment_settings.payment_method_types[]`, `InvoiceCreateParams.payment_settings.payment_method_types[]`, `InvoiceUpdateParams.payment_settings.payment_method_types[]`, `Subscription.payment_settings.payment_method_types[]`, `SubscriptionCreateParams.payment_settings.payment_method_types[]`, and `SubscriptionUpdateParams.payment_settings.payment_method_types[]`
  * Add support for new value `paypal` on enums `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
  * Add support for new value `eftpos_au` on enums `PaymentIntent.payment_method_options.card.network`, `PaymentIntentConfirmParams.payment_method_options.card.network`, `PaymentIntentCreateParams.payment_method_options.card.network`, `PaymentIntentUpdateParams.payment_method_options.card.network`, `SetupIntent.payment_method_options.card.network`, `SetupIntentConfirmParams.payment_method_options.card.network`, `SetupIntentCreateParams.payment_method_options.card.network`, `SetupIntentUpdateParams.payment_method_options.card.network`, `Subscription.payment_settings.payment_method_options.card.network`, `SubscriptionCreateParams.payment_settings.payment_method_options.card.network`, and `SubscriptionUpdateParams.payment_settings.payment_method_options.card.network`
  * Add support for new value `paypal` on enums `PaymentLink.payment_method_types[]`, `PaymentLinkCreateParams.payment_method_types[]`, and `PaymentLinkUpdateParams.payment_method_types[]`
  * Add support for `brand`, `cardholder_name`, `country`, `exp_month`, `exp_year`, `fingerprint`, `funding`, `last4`, `networks`, and `read_method` on `PaymentMethod.card_present` and `PaymentMethod.interac_present`
  * Add support for `preferred_locales` on `PaymentMethod.interac_present`
  * Add support for new value `paypal` on enum `PaymentMethod.type`
  * Add support for `effective_percentage` on `TaxRate`
  * Add support for `gb_bank_transfer` and `jp_bank_transfer` on `CustomerCashBalanceTransaction.Funded.BankTransfer`

## 12.4.0 - 2023-05-04
* [#1774](https://github.com/stripe/stripe-node/pull/1774) Update generated code
  * Add support for `link` on `Checkout.Session.payment_method_options` and `CheckoutSessionCreateParams.payment_method_options`
  * Add support for `brand`, `country`, `description`, `exp_month`, `exp_year`, `fingerprint`, `funding`, `iin`, `issuer`, `last4`, `network`, and `wallet` on `SetupAttempt.payment_method_details.card`
* [#1782](https://github.com/stripe/stripe-node/pull/1782) Let user supply a timestamp when verifying webhooks

## 12.3.0 - 2023-04-27
* [#1770](https://github.com/stripe/stripe-node/pull/1770) Update generated code
  * Add support for `billing_cycle_anchor` and `proration_behavior` on `CheckoutSessionCreateParams.subscription_data`
  * Add support for `terminal_id` on `Issuing.Authorization.merchant_data` and `Issuing.Transaction.merchant_data`
  * Add support for `metadata` on `PaymentIntentCaptureParams`
  * Add support for `checks` on `SetupAttempt.payment_method_details.card`
  * Add support for `tax_breakdown` on `Tax.Calculation.shipping_cost` and `Tax.Transaction.shipping_cost`

## 12.2.0 - 2023-04-20
* [#1759](https://github.com/stripe/stripe-node/pull/1759) Update generated code
  * Change `Checkout.Session.currency_conversion` to be required
  * Change `Identity.VerificationReport.options` and `Identity.VerificationReport.type` to be optional
  * Change type of `Identity.VerificationSession.options` from `VerificationSessionOptions` to `VerificationSessionOptions | null`
  * Change type of `Identity.VerificationSession.type` from `enum('document'|'id_number')` to `enum('document'|'id_number') | null`
* [#1762](https://github.com/stripe/stripe-node/pull/1762) Add Deno webhook signing example
* [#1761](https://github.com/stripe/stripe-node/pull/1761) Add Deno usage instructions in README

## 12.1.1 - 2023-04-13
No product changes.

## 12.1.0 - 2023-04-13
* [#1754](https://github.com/stripe/stripe-node/pull/1754) Update generated code
  * Add support for new value `REVOIE23` on enums `Charge.payment_method_details.ideal.bic`, `PaymentMethod.ideal.bic`, and `SetupAttempt.payment_method_details.ideal.bic`
* [#1749](https://github.com/stripe/stripe-node/pull/1749) Type extend and ResourceNamespace better

## 12.0.0 - 2023-04-06
* [#1743](https://github.com/stripe/stripe-node/pull/1743) Remove `Stripe.default` and `Stripe.Stripe`
This was added to maintain backwards compatibility during the transition of stripe-node to a dual ES module / CommonJS package, and should not be functionally necessary.
* [#1742](https://github.com/stripe/stripe-node/pull/1743) Pin latest API version as the default
  **⚠️ ACTION REQUIRED: the breaking change in this release likely affects you ⚠️**

  In this release, Stripe API Version `2022-11-15` (the latest at time of release) will be sent by default on all requests.
  The previous default was to use your [Stripe account's default API version](https://stripe.com/docs/development/dashboard/request-logs#view-your-default-api-version).

  To successfully upgrade to stripe-node v12, you must either

  1. **(Recommended) Upgrade your integration to be compatible with API Version `2022-11-15`.**

     Please read the API Changelog carefully for each API Version from `2022-11-15` back to your [Stripe account's default API version](https://stripe.com/docs/development/dashboard/request-logs#view-your-default-api-version). Determine if you are using any of the APIs that have changed in a breaking way, and adjust your integration accordingly. Carefully test your changes with Stripe [Test Mode](https://stripe.com/docs/keys#test-live-modes) before deploying them to production.

     You can read the [v12 migration guide](https://github.com/stripe/stripe-node/wiki/Migration-guide-for-v12) for more detailed instructions.
  2. **(Alternative option) Specify a version other than `2022-11-15` when initializing `stripe-node`.**

     If you were previously initializing stripe-node without an explicit API Version, you can postpone modifying your integration by specifying a version equal to your [Stripe account's default API version](https://stripe.com/docs/development/dashboard/request-logs#view-your-default-api-version). For example:

     ```diff
     - const stripe = require('stripe')('sk_test_...');
     + const stripe = require('stripe')('sk_test_...', {
     +   apiVersion: 'YYYY-MM-DD' // Determine your default version from https://dashboard.stripe.com/developers
     + })
     ```

     If you were already initializing stripe-node with an explicit API Version, upgrading to v12 will not affect your integration.

     Read the [v12 migration guide](https://github.com/stripe/stripe-node/wiki/Migration-guide-for-v12) for more details.

  Going forward, each major release of this library will be *pinned* by default to the latest Stripe API Version at the time of release.
  That is, instead of upgrading stripe-node and separately upgrading your Stripe API Version through the Stripe Dashboard. whenever you upgrade major versions of stripe-node, you should also upgrade your integration to be compatible with the latest Stripe API version.

## 11.18.0 - 2023-04-06
* [#1738](https://github.com/stripe/stripe-node/pull/1738) Update generated code
  * Add support for new value `link` on enums `Charge.payment_method_details.card.wallet.type` and `PaymentMethod.card.wallet.type`
  * Change `IssuingCardholderCreateParams.type` to be optional
  * Add support for `country` on `PaymentMethod.link`
  * Add support for `status_details` on `PaymentMethod.us_bank_account`
* [#1747](https://github.com/stripe/stripe-node/pull/1747) (Typescript) remove deprecated properties

## 11.17.0 - 2023-03-30
* [#1734](https://github.com/stripe/stripe-node/pull/1734) Update generated code
  * Remove support for `create` method on resource `Tax.Transaction`
    * This is not a breaking change, as this method was deprecated before the Tax Transactions API was released in favor of the `createFromCalculation` method.
  * Add support for `export_license_id` and `export_purpose_code` on `Account.company`, `AccountCreateParams.company`, `AccountUpdateParams.company`, and `TokenCreateParams.account.company`
  * Remove support for value `deleted` from enum `Invoice.status`
    * This is not a breaking change, as `deleted` was never returned or accepted as input.
  * Add support for `amount_tip` on `TerminalReaderPresentPaymentMethodParams.testHelpers`

## 11.16.0 - 2023-03-23
* [#1730](https://github.com/stripe/stripe-node/pull/1730) Update generated code
  * Add support for new resources `Tax.CalculationLineItem`, `Tax.Calculation`, `Tax.TransactionLineItem`, and `Tax.Transaction`
  * Add support for `create` and `list_line_items` methods on resource `Calculation`
  * Add support for `create_from_calculation`, `create_reversal`, `create`, `list_line_items`, and `retrieve` methods on resource `Transaction`
  * Add support for new value `link` on enum `CheckoutSessionCreateParams.payment_method_types[]`
  * Add support for `currency_conversion` on `Checkout.Session`
  * Add support for new value `link` on enums `PaymentLink.payment_method_types[]`, `PaymentLinkCreateParams.payment_method_types[]`, and `PaymentLinkUpdateParams.payment_method_types[]`
  * Add support for `automatic_payment_methods` on `SetupIntentCreateParams` and `SetupIntent`
* [#1726](https://github.com/stripe/stripe-node/pull/1726) Add Deno entry point

## 11.15.0 - 2023-03-16
* [#1714](https://github.com/stripe/stripe-node/pull/1714) API Updates
  * Add support for `cashapp_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
  * Add support for new value `cashapp` as a new `type` throughout the API.
  * Add support for `future_requirements` and `requirements` on `BankAccount`
  * Add support for `country` on `Charge.payment_method_details.link`
  * Add support for new value `automatic_async` on enums `CheckoutSessionCreateParams.payment_intent_data.capture_method`, `PaymentIntent.capture_method`, `PaymentIntentConfirmParams.capture_method`, `PaymentIntentCreateParams.capture_method`, `PaymentIntentUpdateParams.capture_method`, `PaymentLink.payment_intent_data.capture_method`, and `PaymentLinkCreateParams.payment_intent_data.capture_method`

  * Add support for `preferred_locale` on `PaymentIntent.payment_method_options.affirm`,
  * Add support for `cashapp_handle_redirect_or_display_qr_code` on `PaymentIntent.next_action` and `SetupIntent.next_action`
  * Add support for new value `payout.reconciliation_completed` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
* [#1709](https://github.com/stripe/stripe-node/pull/1709) Add ES module package entry point
  * Add support for ES modules by defining a separate ESM entry point. This updates stripe-node to be a [dual CommonJS / ES module package](https://nodejs.org/api/packages.html#dual-commonjses-module-packages).
* [#1704](https://github.com/stripe/stripe-node/pull/1704) Configure 2 TypeScript compile targets for ESM and CJS
* [#1710](https://github.com/stripe/stripe-node/pull/1710) Update generated code (new)
  * Add support for `cashapp_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
  * Add support for `cashapp` on `Charge.payment_method_details`, `Checkout.Session.payment_method_options`, `CheckoutSessionCreateParams.payment_method_options`, `Mandate.payment_method_details`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, `PaymentMethodUpdateParams`, `PaymentMethod`, `SetupAttempt.payment_method_details`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
  * Add support for new value `cashapp` on enum `CheckoutSessionCreateParams.payment_method_types[]`
  * Add support for new value `cashapp` on enums `CustomerListPaymentMethodsParams.type` and `PaymentMethodListParams.type`
  * Add support for new value `cashapp` on enums `Invoice.payment_settings.payment_method_types[]`, `InvoiceCreateParams.payment_settings.payment_method_types[]`, `InvoiceUpdateParams.payment_settings.payment_method_types[]`, `Subscription.payment_settings.payment_method_types[]`, `SubscriptionCreateParams.payment_settings.payment_method_types[]`, and `SubscriptionUpdateParams.payment_settings.payment_method_types[]`
  * Add support for new value `cashapp` on enums `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
  * Add support for `preferred_locale` on `PaymentIntent.payment_method_options.affirm`, `PaymentIntentConfirmParams.payment_method_options.affirm`, `PaymentIntentCreateParams.payment_method_options.affirm`, and `PaymentIntentUpdateParams.payment_method_options.affirm`
  * Add support for `cashapp_handle_redirect_or_display_qr_code` on `PaymentIntent.next_action` and `SetupIntent.next_action`
  * Add support for new value `cashapp` on enums `PaymentLink.payment_method_types[]`, `PaymentLinkCreateParams.payment_method_types[]`, and `PaymentLinkUpdateParams.payment_method_types[]`
  * Add support for new value `cashapp` on enum `PaymentMethodCreateParams.type`
  * Add support for new value `cashapp` on enum `PaymentMethod.type`
  * Add support for new value `payout.reconciliation_completed` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`

## 11.14.0 - 2023-03-09
* [#1703](https://github.com/stripe/stripe-node/pull/1703) API Updates
  * Add support for `card_issuing` on `IssuingCardholderCreateParams.individual` and `IssuingCardholderUpdateParams.individual`
  * Add support for new value `requirements.past_due` on enum `Issuing.Cardholder.requirements.disabled_reason`
  * Add support for new values `individual.card_issuing.user_terms_acceptance.date` and `individual.card_issuing.user_terms_acceptance.ip` on enum `Issuing.Cardholder.requirements.past_due[]`
  * Add support for `cancellation_details` on `SubscriptionCancelParams`, `SubscriptionUpdateParams`, and `Subscription`
* [#1701](https://github.com/stripe/stripe-node/pull/1701) Change httpProxy to httpAgent in README example
* [#1695](https://github.com/stripe/stripe-node/pull/1695) Migrate generated files to ES module syntax
* [#1699](https://github.com/stripe/stripe-node/pull/1699) Remove extra test directory

## 11.13.0 - 2023-03-02
* [#1696](https://github.com/stripe/stripe-node/pull/1696) API Updates
  * Add support for new values `electric_vehicle_charging`, `emergency_services_gcas_visa_use_only`, `government_licensed_horse_dog_racing_us_region_only`, `government_licensed_online_casions_online_gambling_us_region_only`, `government_owned_lotteries_non_us_region`, `government_owned_lotteries_us_region_only`, and `marketplaces` on spending control categories.
  * Add support for `reconciliation_status` on `Payout`
  * Add support for new value `lease_tax` on enums `TaxRate.tax_type`, `TaxRateCreateParams.tax_type`, and `TaxRateUpdateParams.tax_type`

* [#1689](https://github.com/stripe/stripe-node/pull/1689) Update v11.8.0 changelog with breaking change disclaimer

## 11.12.0 - 2023-02-23
* [#1688](https://github.com/stripe/stripe-node/pull/1688) API Updates
  * Add support for new value `yoursafe` on enums `Charge.payment_method_details.ideal.bank`, `PaymentIntentConfirmParams.payment_method_data.ideal.bank`, `PaymentIntentCreateParams.payment_method_data.ideal.bank`, `PaymentIntentUpdateParams.payment_method_data.ideal.bank`, `PaymentMethod.ideal.bank`, `PaymentMethodCreateParams.ideal.bank`, `SetupAttempt.payment_method_details.ideal.bank`, `SetupIntentConfirmParams.payment_method_data.ideal.bank`, `SetupIntentCreateParams.payment_method_data.ideal.bank`, and `SetupIntentUpdateParams.payment_method_data.ideal.bank`
  * Add support for new value `BITSNL2A` on enums `Charge.payment_method_details.ideal.bic`, `PaymentMethod.ideal.bic`, and `SetupAttempt.payment_method_details.ideal.bic`
  * Add support for new value `igst` on enums `TaxRate.tax_type`, `TaxRateCreateParams.tax_type`, and `TaxRateUpdateParams.tax_type`
* [#1687](https://github.com/stripe/stripe-node/pull/1687) Convert TypeScript files to use ES modules

## 11.11.0 - 2023-02-16
* [#1681](https://github.com/stripe/stripe-node/pull/1681) API Updates
  * Add support for `refund_payment` method on resource `Terminal.Reader`
  * Add support for new value `name` on enums `BillingPortal.Configuration.features.customer_update.allowed_updates[]`, `BillingPortalConfigurationCreateParams.features.customer_update.allowed_updates[]`, and `BillingPortalConfigurationUpdateParams.features.customer_update.allowed_updates[]`
  * Add support for `custom_fields` on `Checkout.Session`, `CheckoutSessionCreateParams`, `PaymentLinkCreateParams`, `PaymentLinkUpdateParams`, and `PaymentLink`
  * Change `Subscription.trial_settings.end_behavior` and `Subscription.trial_settings` to be required
  * Add support for `interac_present` on `TerminalReaderPresentPaymentMethodParams.testHelpers`
  * Change type of `TerminalReaderPresentPaymentMethodParams.testHelpers.type` from `literal('card_present')` to `enum('card_present'|'interac_present')`
  * Add support for `refund_payment` on `Terminal.Reader.action`
  * Add support for new value `refund_payment` on enum `Terminal.Reader.action.type`
* [#1683](https://github.com/stripe/stripe-node/pull/1683) Add NextJS webhook sample
* [#1685](https://github.com/stripe/stripe-node/pull/1685) Add more webhook parsing checks
* [#1684](https://github.com/stripe/stripe-node/pull/1684) Add infrastructure for mocked tests

## 11.10.0 - 2023-02-09
* [#1679](https://github.com/stripe/stripe-node/pull/1679) Enable library to work in worker environments without extra configuration.

## 11.9.1 - 2023-02-03
* [#1672](https://github.com/stripe/stripe-node/pull/1672) Update main entrypoint on package.json

## 11.9.0 - 2023-02-02
* [#1669](https://github.com/stripe/stripe-node/pull/1669) API Updates
  * Add support for `resume` method on resource `Subscription`
  * Add support for `payment_link` on `CheckoutSessionListParams`
  * Add support for `trial_settings` on `CheckoutSessionCreateParams.subscription_data`, `SubscriptionCreateParams`, `SubscriptionUpdateParams`, and `Subscription`
  * Add support for `shipping_cost` on `CreditNoteCreateParams`, `CreditNotePreviewLinesParams`, `CreditNotePreviewParams`, `CreditNote`, `InvoiceCreateParams`, `InvoiceUpdateParams`, and `Invoice`
  * Add support for `amount_shipping` on `CreditNote` and `Invoice`
  * Add support for `shipping_details` on `InvoiceCreateParams`, `InvoiceUpdateParams`, and `Invoice`
  * Add support for `subscription_resume_at` on `InvoiceUpcomingLinesParams` and `InvoiceUpcomingParams`
  * Change `IssuingCardholderCreateParams.individual.first_name`, `IssuingCardholderCreateParams.individual.last_name`, `IssuingCardholderUpdateParams.individual.first_name`, and `IssuingCardholderUpdateParams.individual.last_name` to be optional
  * Change type of `Issuing.Cardholder.individual.first_name` and `Issuing.Cardholder.individual.last_name` from `string` to `string | null`
  * Add support for `invoice_creation` on `PaymentLinkCreateParams`, `PaymentLinkUpdateParams`, and `PaymentLink`
  * Add support for new value `America/Ciudad_Juarez` on enum `ReportingReportRunCreateParams.parameters.timezone`
  * Add support for new value `paused` on enum `SubscriptionListParams.status`
  * Add support for new value `paused` on enum `Subscription.status`
  * Add support for new values `customer.subscription.paused` and `customer.subscription.resumed` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
  * Add support for new value `funding_reversed` on enum `CustomerCashBalanceTransaction.type`

* [#1670](https://github.com/stripe/stripe-node/pull/1670) Change default entrypoint to stripe.node
* [#1668](https://github.com/stripe/stripe-node/pull/1668) Use EventTarget in worker / browser runtimes
* [#1667](https://github.com/stripe/stripe-node/pull/1667) fix: added support for TypeScript "NodeNext" module resolution

## 11.8.0 - 2023-01-26
* [#1665](https://github.com/stripe/stripe-node/pull/1665) API Updates
  * Add support for new value `BE` on enums `Checkout.Session.payment_method_options.customer_balance.bank_transfer.eu_bank_transfer.country`, `Invoice.payment_settings.payment_method_options.customer_balance.bank_transfer.eu_bank_transfer.country`, `PaymentIntent.payment_method_options.customer_balance.bank_transfer.eu_bank_transfer.country`, and `Subscription.payment_settings.payment_method_options.customer_balance.bank_transfer.eu_bank_transfer.country`
  * Add support for new values `cs-CZ`, `el-GR`, `en-CZ`, and `en-GR` on enums `PaymentIntentConfirmParams.payment_method_options.klarna.preferred_locale`, `PaymentIntentCreateParams.payment_method_options.klarna.preferred_locale`, and `PaymentIntentUpdateParams.payment_method_options.klarna.preferred_locale`
* [#1660](https://github.com/stripe/stripe-node/pull/1660) Introduce separate entry point for worker environments
  * This is technically a breaking change that explicitly defines package entry points and was mistakenly released in a minor version. If your application previously imported other internal files from stripe-node and this change breaks it, please open an issue detailing your use case.

## 11.7.0 - 2023-01-19
* [#1661](https://github.com/stripe/stripe-node/pull/1661) API Updates
  * Add support for `verification_session` on `EphemeralKeyCreateParams`
  * Add support for new values `refund.created` and `refund.updated` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
* [#1647](https://github.com/stripe/stripe-node/pull/1647) Bump json5 from 2.2.1 to 2.2.3

## 11.6.0 - 2023-01-05
* [#1646](https://github.com/stripe/stripe-node/pull/1646) API Updates
  * Add support for `card_issuing` on `Issuing.Cardholder.individual`

## 11.5.0 - 2022-12-22
* [#1642](https://github.com/stripe/stripe-node/pull/1642) API Updates
  * Add support for new value `merchant_default` on enums `CashBalanceUpdateParams.settings.reconciliation_mode`, `CustomerCreateParams.cash_balance.settings.reconciliation_mode`, and `CustomerUpdateParams.cash_balance.settings.reconciliation_mode`
  * Add support for `using_merchant_default` on `CashBalance.settings`
  * Change `CheckoutSessionCreateParams.cancel_url` to be optional
  * Change type of `Checkout.Session.cancel_url` from `string` to `string | null`

## 11.4.0 - 2022-12-15
* [#1639](https://github.com/stripe/stripe-node/pull/1639) API Updates
  * Add support for new value `invoice_overpaid` on enum `CustomerBalanceTransaction.type`
* [#1637](https://github.com/stripe/stripe-node/pull/1637) Update packages in examples/webhook-signing

## 11.3.0 - 2022-12-08
* [#1634](https://github.com/stripe/stripe-node/pull/1634) API Updates
  * Change `CustomerListPaymentMethodsParams.type` and `PaymentMethodListParams.type` to be optional

## 11.2.0 - 2022-12-06
* [#1632](https://github.com/stripe/stripe-node/pull/1632) API Updates
  * Add support for `flow_data` on `BillingPortalSessionCreateParams`
  * Add support for `flow` on `BillingPortal.Session`
* [#1631](https://github.com/stripe/stripe-node/pull/1631) API Updates
  * Add support for `india_international_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
  * Add support for `invoice_creation` on `Checkout.Session` and `CheckoutSessionCreateParams`
  * Add support for `invoice` on `Checkout.Session`
  * Add support for `metadata` on `SubscriptionSchedule.phases[].items[]`, `SubscriptionScheduleCreateParams.phases[].items[]`, and `SubscriptionScheduleUpdateParams.phases[].items[]`
* [#1630](https://github.com/stripe/stripe-node/pull/1630) Remove BASIC_METHODS from TS definitions
* [#1629](https://github.com/stripe/stripe-node/pull/1629) Narrower type for stripe.invoices.retrieveUpcoming()
* [#1627](https://github.com/stripe/stripe-node/pull/1627) remove unneeded IIFE
* [#1625](https://github.com/stripe/stripe-node/pull/1625) Remove API version from the path
* [#1626](https://github.com/stripe/stripe-node/pull/1626) Move child resource method params next to method declarations
* [#1624](https://github.com/stripe/stripe-node/pull/1624) Split resource and service types

## 11.1.0 - 2022-11-17
* [#1623](https://github.com/stripe/stripe-node/pull/1623) API Updates
  * Add support for `hosted_instructions_url` on `PaymentIntent.next_action.wechat_pay_display_qr_code`
* [#1622](https://github.com/stripe/stripe-node/pull/1622) API Updates
  * Add support for `custom_text` on `Checkout.Session`, `CheckoutSessionCreateParams`, `PaymentLinkCreateParams`, `PaymentLinkUpdateParams`, and `PaymentLink`
  * Add support for `hosted_instructions_url` on `PaymentIntent.next_action.paynow_display_qr_code`


## 11.0.0 - 2022-11-16

This release includes breaking changes resulting from moving to use the new API version "2022-11-15". To learn more about these changes to Stripe products, see https://stripe.com/docs/upgrades#2022-11-15

"⚠️" symbol highlights breaking changes.

* [#1608](https://github.com/stripe/stripe-node/pull/1608) Next major release changes
* [#1619](https://github.com/stripe/stripe-node/pull/1619) Annotate prototypes with types
* [#1612](https://github.com/stripe/stripe-node/pull/1612) Add type information here and there
* [#1615](https://github.com/stripe/stripe-node/pull/1615) API Updates
  * ⚠️ Remove support for `tos_shown_and_accepted` on `CheckoutSessionCreateParams.payment_method_options.paynow`. The property was mistakenly released and never worked.

### ⚠️ Changed
* Drop support for Node.js 8 and 10. We now support Node.js 12+. ((#1579)
* Change `StripeSignatureVerificationError` to have `header` and `payload` fields instead of `detail`. To access these properties, use `err.header` and `err.payload` instead of `err.detail.header` and `err.detail.payload`. (#1574)

### ⚠️ Removed
* Remove `Orders` resource. (#1580)
* Remove `SKU` resource (#1583)
* Remove deprecated `CheckoutSessionCreateParams.subscription_data.items`. (#1580)
* Remove deprecated configuration setter methods (`setHost`, `setProtocol`, `setPort`, `setApiVersion`, `setApiKey`, `setTimeout`, `setAppInfo`, `setHttpAgent`, `setMaxNetworkRetries`, and `setTelemetryEnabled`). (#1597)

  Use the config object to set these options instead, for example:
  ```typescript
  const stripe = Stripe('sk_test_...', {
    apiVersion: '2019-08-08',
    maxNetworkRetries: 1,
    httpAgent: new ProxyAgent(process.env.http_proxy),
    timeout: 1000,
    host: 'api.example.com',
    port: 123,
    telemetry: true,
  });
  ```
* Remove deprecated basic method definitions. (#1600)
  Use basic methods defined on the resource instead.
  ```typescript
  // Before
  basicMethods: true

  // After
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/resource',
  }),
  list: stripeMethod({
    method: 'GET',
    methodType: 'list',
    fullPath: '/v1/resource',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/resource/{id}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/resource/{id}',
  }),
  // Avoid 'delete' keyword in JS
  del: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/resource/{id}',
  }),
  ```
* Remove deprecated option names. Use the following option names instead (`OLD`->`NEW`): `api_key`->`apiKey`, `idempotency_key`->`idempotencyKey`, `stripe_account`->`stripeAccount`, `stripe_version`->`apiVersion`, `stripeVersion`->`apiVersion`. (#1600)
* Remove `charges` field on `PaymentIntent` and replace it with `latest_charge`. (#1614 )
* Remove deprecated `amount` field on `Checkout.Session.LineItem`. (#1614 )
* Remove support for `tos_shown_and_accepted` on `Checkout.Session.PaymentMethodOptions.Paynow`. (#1614 )

## 10.17.0 - 2022-11-08
* [#1610](https://github.com/stripe/stripe-node/pull/1610) API Updates
  * Add support for new values `eg_tin`, `ph_tin`, and `tr_tin` on enums `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, `Order.tax_details.tax_ids[].type`, and `TaxId.type`
  * Add support for new values `eg_tin`, `ph_tin`, and `tr_tin` on enums `CustomerCreateParams.tax_id_data[].type`, `InvoiceUpcomingLinesParams.customer_details.tax_ids[].type`, `InvoiceUpcomingParams.customer_details.tax_ids[].type`, `OrderCreateParams.tax_details.tax_ids[].type`, `OrderUpdateParams.tax_details.tax_ids[].type`, and `TaxIdCreateParams.type`
  * Add support for `reason_message` on `Issuing.Authorization.request_history[]`
  * Add support for new value `webhook_error` on enum `Issuing.Authorization.request_history[].reason`

## 10.16.0 - 2022-11-03
* [#1596](https://github.com/stripe/stripe-node/pull/1596) API Updates
  * Add support for `on_behalf_of` on `CheckoutSessionCreateParams.subscription_data`, `SubscriptionCreateParams`, `SubscriptionSchedule.default_settings`, `SubscriptionSchedule.phases[]`, `SubscriptionScheduleCreateParams.default_settings`, `SubscriptionScheduleCreateParams.phases[]`, `SubscriptionScheduleUpdateParams.default_settings`, `SubscriptionScheduleUpdateParams.phases[]`, `SubscriptionUpdateParams`, and `Subscription`
  * Add support for `tax_behavior` and `tax_code` on `InvoiceItemCreateParams`, `InvoiceItemUpdateParams`, `InvoiceUpcomingLinesParams.invoice_items[]`, and `InvoiceUpcomingParams.invoice_items[]`

## 10.15.0 - 2022-10-20
* [#1588](https://github.com/stripe/stripe-node/pull/1588) API Updates
  * Add support for new values `jp_trn` and `ke_pin` on enums `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, `Order.tax_details.tax_ids[].type`, and `TaxId.type`
  * Add support for new values `jp_trn` and `ke_pin` on enums `CustomerCreateParams.tax_id_data[].type`, `InvoiceUpcomingLinesParams.customer_details.tax_ids[].type`, `InvoiceUpcomingParams.customer_details.tax_ids[].type`, `OrderCreateParams.tax_details.tax_ids[].type`, `OrderUpdateParams.tax_details.tax_ids[].type`, and `TaxIdCreateParams.type`
  * Add support for `tipping` on `Terminal.Reader.action.process_payment_intent.process_config` and `TerminalReaderProcessPaymentIntentParams.process_config`
* [#1585](https://github.com/stripe/stripe-node/pull/1585) use native UUID method if available

## 10.14.0 - 2022-10-13
* [#1582](https://github.com/stripe/stripe-node/pull/1582) API Updates
  * Add support for new values `invalid_representative_country` and `verification_failed_residential_address` on enums `Account.future_requirements.errors[].code`, `Account.requirements.errors[].code`, `Capability.future_requirements.errors[].code`, `Capability.requirements.errors[].code`, `Person.future_requirements.errors[].code`, and `Person.requirements.errors[].code`
  * Add support for `request_log_url` on `StripeError` objects
  * Add support for `network_data` on `Issuing.Authorization`
  * ⚠️  Remove `currency`, `description`, `images`, and `name` from `Checkout.SessionCreateParams`. These properties do not work on the latest API version. (fixes #1575)

## 10.13.0 - 2022-10-06
* [#1571](https://github.com/stripe/stripe-node/pull/1571) API Updates
  * Add support for new value `invalid_dob_age_under_18` on enums `Account.future_requirements.errors[].code`, `Account.requirements.errors[].code`, `Capability.future_requirements.errors[].code`, `Capability.requirements.errors[].code`, `Person.future_requirements.errors[].code`, and `Person.requirements.errors[].code`
  * Add support for new value `bank_of_china` on enums `Charge.payment_method_details.fpx.bank`, `PaymentIntentConfirmParams.payment_method_data.fpx.bank`, `PaymentIntentCreateParams.payment_method_data.fpx.bank`, `PaymentIntentUpdateParams.payment_method_data.fpx.bank`, `PaymentMethod.fpx.bank`, `PaymentMethodCreateParams.fpx.bank`, `SetupIntentConfirmParams.payment_method_data.fpx.bank`, `SetupIntentCreateParams.payment_method_data.fpx.bank`, and `SetupIntentUpdateParams.payment_method_data.fpx.bank`
  * Add support for new values `America/Nuuk`, `Europe/Kyiv`, and `Pacific/Kanton` on enum `ReportingReportRunCreateParams.parameters.timezone`
  * Add support for `klarna` on `SetupAttempt.payment_method_details`
* [#1570](https://github.com/stripe/stripe-node/pull/1570) Update node-fetch to 2.6.7
* [#1568](https://github.com/stripe/stripe-node/pull/1568) Upgrade dependencies
* [#1567](https://github.com/stripe/stripe-node/pull/1567) Fix release tag calculation

## 10.12.0 - 2022-09-29
* [#1564](https://github.com/stripe/stripe-node/pull/1564) API Updates
  * Change type of `Charge.payment_method_details.card_present.incremental_authorization_supported` and `Charge.payment_method_details.card_present.overcapture_supported` from `boolean | null` to `boolean`
  * Add support for `created` on `Checkout.Session`
  * Add support for `setup_future_usage` on `PaymentIntent.payment_method_options.pix`, `PaymentIntentConfirmParams.payment_method_options.pix`, `PaymentIntentCreateParams.payment_method_options.pix`, and `PaymentIntentUpdateParams.payment_method_options.pix`
  * Deprecate `CheckoutSessionCreateParams.subscription_data.items` (use the `line_items` param instead). This will be removed in the next major version.
* [#1563](https://github.com/stripe/stripe-node/pull/1563) Migrate other Stripe infrastructure to TS
* [#1562](https://github.com/stripe/stripe-node/pull/1562) Restore lib after generating
* [#1551](https://github.com/stripe/stripe-node/pull/1551) Re-introduce Typescript changes

## 10.11.0 - 2022-09-22
* [#1560](https://github.com/stripe/stripe-node/pull/1560) API Updates
  * Add support for `terms_of_service` on `Checkout.Session.consent_collection`, `Checkout.Session.consent`, `CheckoutSessionCreateParams.consent_collection`, `PaymentLink.consent_collection`, and `PaymentLinkCreateParams.consent_collection`
  * ⚠️  Remove support for `plan` on `CheckoutSessionCreateParams.payment_method_options.card.installments`. The property was mistakenly released and never worked.
  * Add support for `statement_descriptor` on `PaymentIntentIncrementAuthorizationParams`
  * Change `SubscriptionSchedule.phases[].currency` to be required


## 10.10.0 - 2022-09-15
* [#1552](https://github.com/stripe/stripe-node/pull/1552) API Updates
  * Add support for `pix` on `Charge.payment_method_details`, `Checkout.Session.payment_method_options`, `CheckoutSessionCreateParams.payment_method_options`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, `PaymentMethod`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
  * Add support for new value `pix` on enum `CheckoutSessionCreateParams.payment_method_types[]`
  * Add support for new value `pix` on enums `CustomerListPaymentMethodsParams.type` and `PaymentMethodListParams.type`
  * Add support for `from_invoice` on `InvoiceCreateParams` and `Invoice`
  * Add support for `latest_revision` on `Invoice`
  * Add support for `amount` on `IssuingDisputeCreateParams` and `IssuingDisputeUpdateParams`
  * Add support for new value `pix` on enums `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
  * Add support for `pix_display_qr_code` on `PaymentIntent.next_action`
  * Add support for new value `pix` on enums `PaymentLink.payment_method_types[]`, `PaymentLinkCreateParams.payment_method_types[]`, and `PaymentLinkUpdateParams.payment_method_types[]`
  * Add support for new value `pix` on enum `PaymentMethodCreateParams.type`
  * Add support for new value `pix` on enum `PaymentMethod.type`
  * Add support for `created` on `Treasury.CreditReversal` and `Treasury.DebitReversal`

## 10.9.0 - 2022-09-09
* [#1549](https://github.com/stripe/stripe-node/pull/1549) API Updates
  * Add support for new value `terminal_reader_splashscreen` on enums `File.purpose` and `FileListParams.purpose`
  * Add support for `require_signature` on `Issuing.Card.shipping` and `IssuingCardCreateParams.shipping`

## 10.8.0 - 2022-09-07
* [#1544](https://github.com/stripe/stripe-node/pull/1544) API Updates
  * Add support for new value `terminal_reader_splashscreen` on enums `File.purpose` and `FileListParams.purpose`

## 10.7.0 - 2022-08-31
* [#1540](https://github.com/stripe/stripe-node/pull/1540) API Updates
  * Add support for new values `de-CH`, `en-CH`, `en-PL`, `en-PT`, `fr-CH`, `it-CH`, `pl-PL`, and `pt-PT` on enums `OrderCreateParams.payment.settings.payment_method_options.klarna.preferred_locale`, `OrderUpdateParams.payment.settings.payment_method_options.klarna.preferred_locale`, `PaymentIntentConfirmParams.payment_method_options.klarna.preferred_locale`, `PaymentIntentCreateParams.payment_method_options.klarna.preferred_locale`, and `PaymentIntentUpdateParams.payment_method_options.klarna.preferred_locale`
  * Add support for `description` on `PaymentLink.subscription_data` and `PaymentLinkCreateParams.subscription_data`

## 10.6.0 - 2022-08-26
* [#1534](https://github.com/stripe/stripe-node/pull/1534) API Updates
  * Change `Account.company.name`, `Charge.refunds`, `PaymentIntent.charges`, `Product.caption`, `Product.statement_descriptor`, `Product.unit_label`, `Terminal.Configuration.tipping.aud.fixed_amounts`, `Terminal.Configuration.tipping.aud.percentages`, `Terminal.Configuration.tipping.cad.fixed_amounts`, `Terminal.Configuration.tipping.cad.percentages`, `Terminal.Configuration.tipping.chf.fixed_amounts`, `Terminal.Configuration.tipping.chf.percentages`, `Terminal.Configuration.tipping.czk.fixed_amounts`, `Terminal.Configuration.tipping.czk.percentages`, `Terminal.Configuration.tipping.dkk.fixed_amounts`, `Terminal.Configuration.tipping.dkk.percentages`, `Terminal.Configuration.tipping.eur.fixed_amounts`, `Terminal.Configuration.tipping.eur.percentages`, `Terminal.Configuration.tipping.gbp.fixed_amounts`, `Terminal.Configuration.tipping.gbp.percentages`, `Terminal.Configuration.tipping.hkd.fixed_amounts`, `Terminal.Configuration.tipping.hkd.percentages`, `Terminal.Configuration.tipping.myr.fixed_amounts`, `Terminal.Configuration.tipping.myr.percentages`, `Terminal.Configuration.tipping.nok.fixed_amounts`, `Terminal.Configuration.tipping.nok.percentages`, `Terminal.Configuration.tipping.nzd.fixed_amounts`, `Terminal.Configuration.tipping.nzd.percentages`, `Terminal.Configuration.tipping.sek.fixed_amounts`, `Terminal.Configuration.tipping.sek.percentages`, `Terminal.Configuration.tipping.sgd.fixed_amounts`, `Terminal.Configuration.tipping.sgd.percentages`, `Terminal.Configuration.tipping.usd.fixed_amounts`, `Terminal.Configuration.tipping.usd.percentages`, `Treasury.FinancialAccount.active_features`, `Treasury.FinancialAccount.pending_features`, `Treasury.FinancialAccount.platform_restrictions`, and `Treasury.FinancialAccount.restricted_features` to be optional
    * This is a bug fix. These fields were all actually optional and not guaranteed to be returned by the Stripe API, however the type annotations did not correctly reflect this.
    * Fixes https://github.com/stripe/stripe-node/issues/1518.
  * Add support for `login_page` on `BillingPortal.Configuration`, `BillingPortalConfigurationCreateParams`, and `BillingPortalConfigurationUpdateParams`
  * Add support for new value `deutsche_bank_ag` on enums `Charge.payment_method_details.eps.bank`, `PaymentIntentConfirmParams.payment_method_data.eps.bank`, `PaymentIntentCreateParams.payment_method_data.eps.bank`, `PaymentIntentUpdateParams.payment_method_data.eps.bank`, `PaymentMethod.eps.bank`, `PaymentMethodCreateParams.eps.bank`, `SetupIntentConfirmParams.payment_method_data.eps.bank`, `SetupIntentCreateParams.payment_method_data.eps.bank`, and `SetupIntentUpdateParams.payment_method_data.eps.bank`
  * Add support for `customs` and `phone_number` on `Issuing.Card.shipping` and `IssuingCardCreateParams.shipping`
  * Add support for `description` on `Quote.subscription_data`, `QuoteCreateParams.subscription_data`, `QuoteUpdateParams.subscription_data`, `SubscriptionSchedule.default_settings`, `SubscriptionSchedule.phases[]`, `SubscriptionScheduleCreateParams.default_settings`, `SubscriptionScheduleCreateParams.phases[]`, `SubscriptionScheduleUpdateParams.default_settings`, and `SubscriptionScheduleUpdateParams.phases[]`

* [#1532](https://github.com/stripe/stripe-node/pull/1532) Update coveralls step to run for one node version, remove finish step
* [#1531](https://github.com/stripe/stripe-node/pull/1531) Regen yarn.lock.

## 10.5.0 - 2022-08-24
* [#1527](https://github.com/stripe/stripe-node/pull/1527) fix: Update FetchHttpClient to send empty string for empty POST/PUT/PATCH requests.
* [#1528](https://github.com/stripe/stripe-node/pull/1528) Update README.md to use a new NOTE notation
* [#1526](https://github.com/stripe/stripe-node/pull/1526) Add test coverage using Coveralls

## 10.4.0 - 2022-08-23
* [#1520](https://github.com/stripe/stripe-node/pull/1520) Add beta readme.md section
* [#1524](https://github.com/stripe/stripe-node/pull/1524) API Updates
  * Change `Terminal.Reader.action` to be required
  * Change `TreasuryOutboundTransferCreateParams.destination_payment_method` to be optional
  * Change type of `Treasury.OutboundTransfer.destination_payment_method` from `string` to `string | null`
  * Change the return type of `Customer.fundCashBalance` test helper from `CustomerBalanceTransaction` to `CustomerCashBalanceTransaction`.
    * This would generally be considered a breaking change, but we've worked with all existing users to migrate and are comfortable releasing this as a minor as it is solely a test helper method. This was essentially broken prior to this change.


## 10.3.0 - 2022-08-19
* [#1516](https://github.com/stripe/stripe-node/pull/1516) API Updates
  * Add support for new resource `CustomerCashBalanceTransaction`
  * Remove support for value `paypal` from enums `Order.payment.settings.payment_method_types[]`, `OrderCreateParams.payment.settings.payment_method_types[]`, and `OrderUpdateParams.payment.settings.payment_method_types[]`
  * Add support for `currency` on `PaymentLink`
  * Add support for `network` on `SetupIntentConfirmParams.payment_method_options.card`, `SetupIntentCreateParams.payment_method_options.card`, `SetupIntentUpdateParams.payment_method_options.card`, `Subscription.payment_settings.payment_method_options.card`, `SubscriptionCreateParams.payment_settings.payment_method_options.card`, and `SubscriptionUpdateParams.payment_settings.payment_method_options.card`
  * Change `Subscription.currency` to be required
  * Change type of `Topup.source` from `Source` to `Source | null`
  * Add support for new value `customer_cash_balance_transaction.created` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
* [#1515](https://github.com/stripe/stripe-node/pull/1515) Add a support section to the readme

## 10.2.0 - 2022-08-11
* [#1510](https://github.com/stripe/stripe-node/pull/1510) API Updates
  * Add support for `payment_method_collection` on `Checkout.Session`, `CheckoutSessionCreateParams`, `PaymentLinkCreateParams`, `PaymentLinkUpdateParams`, and `PaymentLink`


## 10.1.0 - 2022-08-09
* [#1506](https://github.com/stripe/stripe-node/pull/1506) API Updates
  * Add support for `process_config` on `Terminal.Reader.action.process_payment_intent`
* [#1505](https://github.com/stripe/stripe-node/pull/1505) Simplify AddressParam definitions
  - Rename `AddressParam` to `ShippingAddressParam`, and change type of `Source.source_order.shipping.address`, `SourceUpdateParams.SourceOrder.Shipping.address`, and `SessionCreateParams.PaymentIntentData.Shipping.address` to `ShippingAddressParam`
  - Rename `AccountAddressParam` go `AddressParam`, and change type of `AccountCreateParams.BusinessProfile.support_address`, `AccountCreateParams.Company.address`, `AccountCreateParams.Individual.address `, `AccountCreateParams.Individual.registered_address`, `AccountUpdateParams.BusinessProfile.support_address`, `AccountUpdateParams.Company.address`, `AccountUpdateParams.Individual.address`, `AccountUpdateParams.Individual.registered_address`, `ChargeCreateParams.Shipping.address`, `ChargeUpdateParams.Shipping.address`, `CustomerCreateParams.Shipping.address`, `CustomerUpdateParams.Shipping.address`, `CustomerSourceUpdateParams.Owner.address`, `InvoiceListUpcomingLinesParams.CustomerDetails.Shipping.address`, `InvoiceRetrieveUpcomingParams.CustomerDetails.Shipping.address`, `OrderCreateParams.BillingDetails.address`, `OrderCreateParams.ShippingDetails.address`, `OrderUpdateParams.BillingDetails.address`, `OrderUpdateParams.ShippingDetails.address`, `PaymentIntentCreateParams.Shipping.address`, `PaymentIntentUpdateParams.Shipping.address`, `PaymentIntentConfirmParams.Shipping.address`, `PersonCreateParams.address`, `PersonCreateParams.registered_address`, `PersonUpdateParams.address`, `PersonUpdateParams.registered_address`, `SourceCreateParams.Owner.address`, `SourceUpdateParams.Owner.address`, `TokenCreateParams.Account.Company.address`, `TokenCreateParams.Account.Individual.address`, `TokenCreateParams.Account.Individual.registered_address`, `TokenCreateParams.Person.address`, `TokenCreateParams.Person.registered_address`, and `Terminal.LocationUpdateParams.address` to `AddressParam`
* [#1503](https://github.com/stripe/stripe-node/pull/1503) API Updates
  * Add support for `expires_at` on `Apps.Secret` and `AppsSecretCreateParams`

## 10.0.0 - 2022-08-02

This release includes breaking changes resulting from:

* Moving to use the new API version "2022-08-01". To learn more about these changes to Stripe products, see https://stripe.com/docs/upgrades#2022-08-01
* Cleaning up the SDK to remove deprecated/unused APIs and rename classes/methods/properties to sync with product APIs. Read more detailed description at https://github.com/stripe/stripe-node/wiki/Migration-guide-for-v10.

"⚠️" symbol highlights breaking changes.

* [#1497](https://github.com/stripe/stripe-node/pull/1497) API Updates
* [#1493](https://github.com/stripe/stripe-node/pull/1493) Next major release changes

### Added
* Add support for new value `invalid_tos_acceptance` on enums `Account.future_requirements.errors[].code`, `Account.requirements.errors[].code`, `Capability.future_requirements.errors[].code`, `Capability.requirements.errors[].code`, `Person.future_requirements.errors[].code`, and `Person.requirements.errors[].code`
* Add support for `shipping_cost` and `shipping_details` on `Checkout.Session`

### ⚠️ Changed
* Change type of `business_profile`, `business_type`, `country`, `default_currency`, and `settings` properties on `Account` resource to be nullable.
* Change type of `currency` property on `Checkout.Session` resource from `string` to `'cad' | 'usd'`.
* Change location of TypeScript definitions for `CreditNoteLineItemListPreviewParams`, `CreditNoteLineItemListPreviewParams.Line`, `CreditNoteLineItemListPreviewParams.Line.Type`, and `CreditNoteLineItemListPreviewParams.Line.Reason` interfaces from `CreditNoteLineItems.d.ts` to `CreditNotes.d.ts`.
* Change type of `address`, `currency`, `delinquent`, `discount`, `invoice_prefix`, `name`, `phone`, and `preferred_locales` properties on `Customer` resource to be nullable.
* Rename `InvoiceRetrieveUpcomingParams` to `InvoiceListUpcomingLinesParams`.

### ⚠️ Removed
* Remove for `AlipayAccount`, `DeletedAlipayAccount`, `BitcoinReceiver`, `DeletedBitcoinReceiver`, `BitcoinTransaction`, and `BitcoinTransactionListParams` definitions.
* Remove `AlipayAccount` and `BitcoinReceiver` from `CustomerSource`.
* Remove `Stripe.DeletedAlipayAccount` and `Stripe.DeletedBitcoinReceiver` from possible values of `source` property in `PaymentIntent`.
* Remove `IssuerFraudRecord`, `IssuerFraudRecordRetrieveParams`, `IssuerFraudRecordListParams`, and `IssuerFraudRecordsResource`, definitions.
* Remove `treasury.received_credit.reversed` webhook event constant. Please use `treasury.received_credit.returned` instead.
* Remove `order.payment_failed`, `transfer.failed`, and `transfer.paid`. The events were deprecated.
* Remove `retrieveDetails` method from `Issuing.Card` resource. The method was unsupported. Read more at https://stripe.com/docs/issuing/cards/virtual.
* Remove `Issuing.CardDetails` and `CardRetrieveDetailsParams` definition.
* Remove `IssuerFraudRecords` resource.
* Remove `Recipient` resource and`recipient` property from `Card` resource.
* Remove `InvoiceMarkUncollectibleParams` definition.
* Remove deprecated `Stripe.Errors` and `StripeError` (and derived `StripeCardError`, `StripeInvalidRequestError`, `StripeAPIError`, `StripeAuthenticationError`,  `StripePermissionError`, `StripeRateLimitError`, `StripeConnectionError`, `StripeSignatureVerificationError`, `StripeIdempotencyError`, and `StripeInvalidGrantError`)  definitions.
* Remove `redirect_url` from `LoginLinks` definition. The property is no longer supported.
* Remove `LineItemListParams` definition. The interface was no longer in use.

### ⚠️ Renamed
* Rename `listUpcomingLineItems` method on `Invoice` resource to `listUpcomingLines`.
* Rename `InvoiceLineItemListUpcomingParams` to `InvoiceListUpcomingLinesParams`.
* Rename `InvoiceRetrieveUpcomingParams` to `InvoiceListUpcomingLinesParams`.

## 9.16.0 - 2022-07-26
* [#1492](https://github.com/stripe/stripe-node/pull/1492) API Updates
  * Add support for new value `exempted` on enums `Charge.payment_method_details.card.three_d_secure.result` and `SetupAttempt.payment_method_details.card.three_d_secure.result`
  * Add support for `customer_balance` on `Checkout.Session.payment_method_options` and `CheckoutSessionCreateParams.payment_method_options`
  * Add support for new value `customer_balance` on enum `CheckoutSessionCreateParams.payment_method_types[]`
  * Add support for new values `en-CA` and `fr-CA` on enums `OrderCreateParams.payment.settings.payment_method_options.klarna.preferred_locale`, `OrderUpdateParams.payment.settings.payment_method_options.klarna.preferred_locale`, `PaymentIntentConfirmParams.payment_method_options.klarna.preferred_locale`, `PaymentIntentCreateParams.payment_method_options.klarna.preferred_locale`, and `PaymentIntentUpdateParams.payment_method_options.klarna.preferred_locale`

## 9.15.0 - 2022-07-25
* [#1486](https://github.com/stripe/stripe-node/pull/1486) API Updates
  * Add support for `installments` on `Checkout.Session.payment_method_options.card`, `CheckoutSessionCreateParams.payment_method_options.card`, `Invoice.payment_settings.payment_method_options.card`, `InvoiceCreateParams.payment_settings.payment_method_options.card`, and `InvoiceUpdateParams.payment_settings.payment_method_options.card`
  * Add support for `default_currency` and `invoice_credit_balance` on `Customer`
  * Add support for `currency` on `InvoiceCreateParams`
  * Add support for `default_mandate` on `Invoice.payment_settings`, `InvoiceCreateParams.payment_settings`, and `InvoiceUpdateParams.payment_settings`
  * Add support for `mandate` on `InvoicePayParams`
  * Add support for `product_data` on `OrderCreateParams.line_items[]` and `OrderUpdateParams.line_items[]`


## 9.14.0 - 2022-07-18
* [#1477](https://github.com/stripe/stripe-node/pull/1477) API Updates
  * Add support for `blik_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
  * Add support for `blik` on `Charge.payment_method_details`, `Mandate.payment_method_details`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, `PaymentMethodUpdateParams`, `PaymentMethod`, `SetupAttempt.payment_method_details`, `SetupIntent.payment_method_options`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentConfirmParams.payment_method_options`, `SetupIntentCreateParams.payment_method_data`, `SetupIntentCreateParams.payment_method_options`, `SetupIntentUpdateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_options`
  * Change type of `Checkout.Session.consent_collection.promotions`, `CheckoutSessionCreateParams.consent_collection.promotions`, `PaymentLink.consent_collection.promotions`, and `PaymentLinkCreateParams.consent_collection.promotions` from `literal('auto')` to `enum('auto'|'none')`
  * Add support for new value `blik` on enum `CheckoutSessionCreateParams.payment_method_types[]`
  * Add support for new value `blik` on enums `CustomerListPaymentMethodsParams.type` and `PaymentMethodListParams.type`
  * Add support for new value `blik` on enums `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
  * Add support for new value `blik` on enums `PaymentLink.payment_method_types[]`, `PaymentLinkCreateParams.payment_method_types[]`, and `PaymentLinkUpdateParams.payment_method_types[]`
  * Add support for new value `blik` on enum `PaymentMethodCreateParams.type`
  * Add support for new value `blik` on enum `PaymentMethod.type`
* [#1476](https://github.com/stripe/stripe-node/pull/1476) fix: Include trailing slash when passing empty query parameters.
* [#1475](https://github.com/stripe/stripe-node/pull/1475) Move @types/node to devDependencies

## 9.13.0 - 2022-07-12
* [#1473](https://github.com/stripe/stripe-node/pull/1473) API Updates
  * Add support for `customer_details` on `CheckoutSessionListParams`
  * Change `LineItem.amount_discount` and `LineItem.amount_tax` to be required
  * Change `Transfer.source_type` to be optional and not nullable
* [#1471](https://github.com/stripe/stripe-node/pull/1471) Update readme to include a note on beta packages

## 9.12.0 - 2022-07-07
* [#1468](https://github.com/stripe/stripe-node/pull/1468) API Updates
  * Add support for `currency` on `CheckoutSessionCreateParams`, `InvoiceUpcomingLinesParams`, `InvoiceUpcomingParams`, `PaymentLinkCreateParams`, `SubscriptionCreateParams`, `SubscriptionSchedule.phases[]`, `SubscriptionScheduleCreateParams.phases[]`, `SubscriptionScheduleUpdateParams.phases[]`, and `Subscription`
  * Add support for `currency_options` on `CheckoutSessionCreateParams.shipping_options[].shipping_rate_data.fixed_amount`, `CouponCreateParams`, `CouponUpdateParams`, `Coupon`, `OrderCreateParams.shipping_cost.shipping_rate_data.fixed_amount`, `OrderUpdateParams.shipping_cost.shipping_rate_data.fixed_amount`, `PriceCreateParams`, `PriceUpdateParams`, `Price`, `ProductCreateParams.default_price_data`, `PromotionCode.restrictions`, `PromotionCodeCreateParams.restrictions`, `ShippingRate.fixed_amount`, and `ShippingRateCreateParams.fixed_amount`
  * Add support for `restrictions` on `PromotionCodeUpdateParams`
  * Add support for `fixed_amount` and `tax_behavior` on `ShippingRateUpdateParams`
* [#1467](https://github.com/stripe/stripe-node/pull/1467) API Updates
  * Add support for `customer` on `CheckoutSessionListParams` and `RefundCreateParams`
  * Add support for `currency` and `origin` on `RefundCreateParams`
  * Add support for new values `financial_connections.account.created`, `financial_connections.account.deactivated`, `financial_connections.account.disconnected`, `financial_connections.account.reactivated`, and `financial_connections.account.refreshed_balance` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`

## 9.11.0 - 2022-06-29
* [#1462](https://github.com/stripe/stripe-node/pull/1462) API Updates
  * Add support for `deliver_card`, `fail_card`, `return_card`, and `ship_card` test helper methods on resource `Issuing.Card`
  * Change type of `PaymentLink.payment_method_types[]`, `PaymentLinkCreateParams.payment_method_types[]`, and `PaymentLinkUpdateParams.payment_method_types[]` from `literal('card')` to `enum`
  * Add support for `hosted_regulatory_receipt_url` on `Treasury.ReceivedCredit` and `Treasury.ReceivedDebit`

## 9.10.0 - 2022-06-23
* [#1459](https://github.com/stripe/stripe-node/pull/1459) API Updates
  * Add support for `capture_method` on `PaymentIntentConfirmParams` and `PaymentIntentUpdateParams`
* [#1458](https://github.com/stripe/stripe-node/pull/1458) API Updates
  * Add support for `promptpay_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
  * Add support for `promptpay` on `Charge.payment_method_details`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, `PaymentMethod`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
  * Add support for new value `promptpay` on enum `CheckoutSessionCreateParams.payment_method_types[]`
  * Add support for `subtotal_excluding_tax` on `CreditNote` and `Invoice`
  * Add support for `amount_excluding_tax` and `unit_amount_excluding_tax` on `CreditNoteLineItem` and `InvoiceLineItem`
  * Add support for new value `promptpay` on enums `CustomerListPaymentMethodsParams.type` and `PaymentMethodListParams.type`
  * Add support for `rendering_options` on `InvoiceCreateParams` and `InvoiceUpdateParams`
  * Add support for new value `promptpay` on enums `Invoice.payment_settings.payment_method_types[]`, `InvoiceCreateParams.payment_settings.payment_method_types[]`, `InvoiceUpdateParams.payment_settings.payment_method_types[]`, `Subscription.payment_settings.payment_method_types[]`, `SubscriptionCreateParams.payment_settings.payment_method_types[]`, and `SubscriptionUpdateParams.payment_settings.payment_method_types[]`
  * Add support for `total_excluding_tax` on `Invoice`
  * Add support for `automatic_payment_methods` on `Order.payment.settings`
  * Add support for new value `promptpay` on enums `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
  * Add support for `promptpay_display_qr_code` on `PaymentIntent.next_action`
  * Add support for new value `promptpay` on enum `PaymentMethodCreateParams.type`
  * Add support for new value `promptpay` on enum `PaymentMethod.type`
* [#1455](https://github.com/stripe/stripe-node/pull/1455) fix: Stop using path.join to create URLs.

## 9.9.0 - 2022-06-17
* [#1453](https://github.com/stripe/stripe-node/pull/1453) API Updates
  * Add support for `fund_cash_balance` test helper method on resource `Customer`
  * Add support for `statement_descriptor_prefix_kana` and `statement_descriptor_prefix_kanji` on `Account.settings.card_payments`, `Account.settings.payments`, `AccountCreateParams.settings.card_payments`, and `AccountUpdateParams.settings.card_payments`
  * Add support for `statement_descriptor_suffix_kana` and `statement_descriptor_suffix_kanji` on `Checkout.Session.payment_method_options.card`, `CheckoutSessionCreateParams.payment_method_options.card`, `PaymentIntent.payment_method_options.card`, `PaymentIntentConfirmParams.payment_method_options.card`, `PaymentIntentCreateParams.payment_method_options.card`, and `PaymentIntentUpdateParams.payment_method_options.card`
  * Add support for `total_excluding_tax` on `CreditNote`
  * Change type of `CustomerCreateParams.invoice_settings.rendering_options` and `CustomerUpdateParams.invoice_settings.rendering_options` from `rendering_options_param` to `emptyStringable(rendering_options_param)`
  * Add support for `rendering_options` on `Customer.invoice_settings` and `Invoice`
* [#1452](https://github.com/stripe/stripe-node/pull/1452) Fix non-conforming changelog entries and port the Makefile fix
* [#1450](https://github.com/stripe/stripe-node/pull/1450) Only publish stable version to the latest tag

## 9.8.0 - 2022-06-09
* [#1448](https://github.com/stripe/stripe-node/pull/1448) Add types for extra request options
* [#1446](https://github.com/stripe/stripe-node/pull/1446) API Updates
  * Add support for `treasury` on `Account.settings`, `AccountCreateParams.settings`, and `AccountUpdateParams.settings`
  * Add support for `rendering_options` on `CustomerCreateParams.invoice_settings` and `CustomerUpdateParams.invoice_settings`
  * Add support for `eu_bank_transfer` on `CustomerCreateFundingInstructionsParams.bank_transfer`, `Invoice.payment_settings.payment_method_options.customer_balance.bank_transfer`, `InvoiceCreateParams.payment_settings.payment_method_options.customer_balance.bank_transfer`, `InvoiceUpdateParams.payment_settings.payment_method_options.customer_balance.bank_transfer`, `Order.payment.settings.payment_method_options.customer_balance.bank_transfer`, `OrderCreateParams.payment.settings.payment_method_options.customer_balance.bank_transfer`, `OrderUpdateParams.payment.settings.payment_method_options.customer_balance.bank_transfer`, `PaymentIntent.payment_method_options.customer_balance.bank_transfer`, `PaymentIntentConfirmParams.payment_method_options.customer_balance.bank_transfer`, `PaymentIntentCreateParams.payment_method_options.customer_balance.bank_transfer`, `PaymentIntentUpdateParams.payment_method_options.customer_balance.bank_transfer`, `Subscription.payment_settings.payment_method_options.customer_balance.bank_transfer`, `SubscriptionCreateParams.payment_settings.payment_method_options.customer_balance.bank_transfer`, and `SubscriptionUpdateParams.payment_settings.payment_method_options.customer_balance.bank_transfer`
  * Change type of `CustomerCreateFundingInstructionsParams.bank_transfer.requested_address_types[]` from `literal('zengin')` to `enum('iban'|'sort_code'|'spei'|'zengin')`
  * Change type of `CustomerCreateFundingInstructionsParams.bank_transfer.type`, `Order.payment.settings.payment_method_options.customer_balance.bank_transfer.type`, `OrderCreateParams.payment.settings.payment_method_options.customer_balance.bank_transfer.type`, `OrderUpdateParams.payment.settings.payment_method_options.customer_balance.bank_transfer.type`, `PaymentIntent.next_action.display_bank_transfer_instructions.type`, `PaymentIntent.payment_method_options.customer_balance.bank_transfer.type`, `PaymentIntentConfirmParams.payment_method_options.customer_balance.bank_transfer.type`, `PaymentIntentCreateParams.payment_method_options.customer_balance.bank_transfer.type`, and `PaymentIntentUpdateParams.payment_method_options.customer_balance.bank_transfer.type` from `literal('jp_bank_transfer')` to `enum('eu_bank_transfer'|'gb_bank_transfer'|'jp_bank_transfer'|'mx_bank_transfer')`
  * Add support for `iban`, `sort_code`, and `spei` on `FundingInstructions.bank_transfer.financial_addresses[]` and `PaymentIntent.next_action.display_bank_transfer_instructions.financial_addresses[]`
  * Add support for new values `bacs`, `fps`, and `spei` on enums `FundingInstructions.bank_transfer.financial_addresses[].supported_networks[]` and `PaymentIntent.next_action.display_bank_transfer_instructions.financial_addresses[].supported_networks[]`
  * Add support for new values `sort_code` and `spei` on enums `FundingInstructions.bank_transfer.financial_addresses[].type` and `PaymentIntent.next_action.display_bank_transfer_instructions.financial_addresses[].type`
  * Change type of `Order.payment.settings.payment_method_options.customer_balance.bank_transfer.requested_address_types[]`, `OrderCreateParams.payment.settings.payment_method_options.customer_balance.bank_transfer.requested_address_types[]`, `OrderUpdateParams.payment.settings.payment_method_options.customer_balance.bank_transfer.requested_address_types[]`, `PaymentIntent.payment_method_options.customer_balance.bank_transfer.requested_address_types[]`, `PaymentIntentConfirmParams.payment_method_options.customer_balance.bank_transfer.requested_address_types[]`, `PaymentIntentCreateParams.payment_method_options.customer_balance.bank_transfer.requested_address_types[]`, and `PaymentIntentUpdateParams.payment_method_options.customer_balance.bank_transfer.requested_address_types[]` from `literal('zengin')` to `enum`
  * Add support for `custom_unit_amount` on `PriceCreateParams` and `Price`

## 9.7.0 - 2022-06-08
* [#1441](https://github.com/stripe/stripe-node/pull/1441) API Updates
  * Add support for `affirm`, `bancontact`, `card`, `ideal`, `p24`, and `sofort` on `Checkout.Session.payment_method_options` and `CheckoutSessionCreateParams.payment_method_options`
  * Add support for `afterpay_clearpay`, `au_becs_debit`, `bacs_debit`, `eps`, `fpx`, `giropay`, `grabpay`, `klarna`, `paynow`, and `sepa_debit` on `CheckoutSessionCreateParams.payment_method_options`
  * Add support for `setup_future_usage` on `Checkout.Session.payment_method_options.*` and `CheckoutSessionCreateParams.payment_method_options.*`,
  * Change `PaymentMethod.us_bank_account.networks` and `SetupIntent.flow_directions` to be required
  * Add support for `attach_to_self` on `SetupAttempt`, `SetupIntentCreateParams`, `SetupIntentListParams`, and `SetupIntentUpdateParams`
  * Add support for `flow_directions` on `SetupAttempt`, `SetupIntentCreateParams`, and `SetupIntentUpdateParams`

## 9.6.0 - 2022-06-01
* [#1439](https://github.com/stripe/stripe-node/pull/1439) API Updates
  * Add support for `radar_options` on `ChargeCreateParams`, `Charge`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentMethodCreateParams`, `PaymentMethod`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
  * Add support for `account_holder_name`, `account_number`, `account_type`, `bank_code`, `bank_name`, `branch_code`, and `branch_name` on `FundingInstructions.bank_transfer.financial_addresses[].zengin` and `PaymentIntent.next_action.display_bank_transfer_instructions.financial_addresses[].zengin`
  * Add support for new values `en-AU` and `en-NZ` on enums `OrderCreateParams.payment.settings.payment_method_options.klarna.preferred_locale`, `OrderUpdateParams.payment.settings.payment_method_options.klarna.preferred_locale`, `PaymentIntentConfirmParams.payment_method_options.klarna.preferred_locale`, `PaymentIntentCreateParams.payment_method_options.klarna.preferred_locale`, and `PaymentIntentUpdateParams.payment_method_options.klarna.preferred_locale`
  * Change type of `Order.payment.settings.payment_method_options.customer_balance.bank_transfer.type` and `PaymentIntent.payment_method_options.customer_balance.bank_transfer.type` from `enum` to `literal('jp_bank_transfer')`
    * This is technically breaking in Typescript, but now accurately represents the behavior that was allowed by the server. We haven't historically treated breaking Typescript changes as requiring a major.
  * Change `PaymentIntent.next_action.display_bank_transfer_instructions.hosted_instructions_url` to be required
  * Add support for `network` on `SetupIntent.payment_method_options.card`
  * Add support for new value `simulated_wisepos_e` on enums `Terminal.Reader.device_type` and `TerminalReaderListParams.device_type`


## 9.5.0 - 2022-05-26
* [#1434](https://github.com/stripe/stripe-node/pull/1434) API Updates
  * Add support for `affirm_payments` and `link_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
  * Add support for `id_number_secondary` on `AccountCreateParams.individual`, `AccountUpdateParams.individual`, `PersonCreateParams`, `PersonUpdateParams`, `TokenCreateParams.account.individual`, and `TokenCreateParams.person`
  * Add support for new value `affirm` on enum `CheckoutSessionCreateParams.payment_method_types[]`
  * Add support for `hosted_instructions_url` on `PaymentIntent.next_action.display_bank_transfer_instructions`
  * Add support for `id_number_secondary_provided` on `Person`
  * Add support for `card_issuing` on `TreasuryFinancialAccountCreateParams.features`, `TreasuryFinancialAccountUpdateFeaturesParams`, and `TreasuryFinancialAccountUpdateParams.features`

* [#1432](https://github.com/stripe/stripe-node/pull/1432) docs: Update HttpClient documentation to remove experimental status.

## 9.4.0 - 2022-05-23
* [#1431](https://github.com/stripe/stripe-node/pull/1431) API Updates
  * Add support for `treasury` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`

## 9.3.0 - 2022-05-23
* [#1430](https://github.com/stripe/stripe-node/pull/1430) API Updates
  * Add support for new resource `Apps.Secret`
  * Add support for `affirm` on `Charge.payment_method_details`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, `PaymentMethodUpdateParams`, `PaymentMethod`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
  * Add support for `link` on `Charge.payment_method_details`, `Mandate.payment_method_details`, `OrderCreateParams.payment.settings.payment_method_options`, `OrderUpdateParams.payment.settings.payment_method_options`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, `PaymentMethodUpdateParams`, `PaymentMethod`, `SetupAttempt.payment_method_details`, `SetupIntent.payment_method_options`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentConfirmParams.payment_method_options`, `SetupIntentCreateParams.payment_method_data`, `SetupIntentCreateParams.payment_method_options`, `SetupIntentUpdateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_options`
  * Add support for new values `affirm` and `link` on enums `CustomerListPaymentMethodsParams.type` and `PaymentMethodListParams.type`
  * Add support for new value `link` on enums `Invoice.payment_settings.payment_method_types[]`, `InvoiceCreateParams.payment_settings.payment_method_types[]`, `InvoiceUpdateParams.payment_settings.payment_method_types[]`, `Subscription.payment_settings.payment_method_types[]`, `SubscriptionCreateParams.payment_settings.payment_method_types[]`, and `SubscriptionUpdateParams.payment_settings.payment_method_types[]`
  * Add support for new values `affirm` and `link` on enums `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
  * Add support for new values `affirm` and `link` on enum `PaymentMethodCreateParams.type`
  * Add support for new values `affirm` and `link` on enum `PaymentMethod.type`

## 9.2.0 - 2022-05-19
* [#1422](https://github.com/stripe/stripe-node/pull/1422) API Updates
  * Add support for new `Treasury` APIs: `CreditReversal`, `DebitReversal`, `FinancialAccountFeatures`, `FinancialAccount`, `FlowDetails`, `InboundTransfer`, `OutboundPayment`, `OutboundTransfer`, `ReceivedCredit`, `ReceivedDebit`, `TransactionEntry`, and `Transaction`
  * Add support for `treasury` on `Issuing.Authorization`, `Issuing.Dispute`, `Issuing.Transaction`, and `IssuingDisputeCreateParams`
  * Add support for `retrieve_payment_method` method on resource `Customer`
  * Add support for `list_owners` and `list` methods on resource `FinancialConnections.Account`
  * Change `BillingPortalConfigurationCreateParams.features.customer_update.allowed_updates` to be optional
  * Change type of `BillingPortal.Session.return_url` from `string` to `nullable(string)`
  * Add support for `afterpay_clearpay`, `au_becs_debit`, `bacs_debit`, `eps`, `fpx`, `giropay`, `grabpay`, `klarna`, `paynow`, and `sepa_debit` on `Checkout.Session.payment_method_options`
  * Add support for `financial_account` on `Issuing.Card` and `IssuingCardCreateParams`
  * Add support for `client_secret` on `Order`
  * Add support for `networks` on `PaymentIntentConfirmParams.payment_method_options.us_bank_account`, `PaymentIntentCreateParams.payment_method_options.us_bank_account`, `PaymentIntentUpdateParams.payment_method_options.us_bank_account`, `PaymentMethod.us_bank_account`, `SetupIntentConfirmParams.payment_method_options.us_bank_account`, `SetupIntentCreateParams.payment_method_options.us_bank_account`, and `SetupIntentUpdateParams.payment_method_options.us_bank_account`
  * Add support for `attach_to_self` and `flow_directions` on `SetupIntent`
  * Add support for `save_default_payment_method` on `Subscription.payment_settings`, `SubscriptionCreateParams.payment_settings`, and `SubscriptionUpdateParams.payment_settings`
  * Add support for `czk` on `Terminal.Configuration.tipping`, `TerminalConfigurationCreateParams.tipping`, and `TerminalConfigurationUpdateParams.tipping`

## 9.1.0 - 2022-05-11
* [#1420](https://github.com/stripe/stripe-node/pull/1420) API Updates
  * Add support for `description` on `CheckoutSessionCreateParams.subscription_data`, `SubscriptionCreateParams`, `SubscriptionUpdateParams`, and `Subscription`
  * Add support for `consent_collection`, `payment_intent_data`, `shipping_options`, `submit_type`, and `tax_id_collection` on `PaymentLinkCreateParams` and `PaymentLink`
  * Add support for `customer_creation` on `PaymentLinkCreateParams`, `PaymentLinkUpdateParams`, and `PaymentLink`
  * Add support for `metadata` on `SubscriptionSchedule.phases[]`, `SubscriptionScheduleCreateParams.phases[]`, and `SubscriptionScheduleUpdateParams.phases[]`
  * Add support for new value `billing_portal.session.created` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`

## 9.0.0 - 2022-05-09
Major version release - The [migration guide](https://github.com/stripe/stripe-node/wiki/Migration-Guide-for-v9) contains a detailed list of backwards-incompatible changes with upgrade instructions.
(⚠️ = breaking changes):
* ⚠️[#1336](https://github.com/stripe/stripe-node/pull/1336) feat(http-client): retry closed connection errors
* [#1415](https://github.com/stripe/stripe-node/pull/1415) [#1417](https://github.com/stripe/stripe-node/pull/1417) API Updates
  * ⚠️ Replace the legacy `Order` API with the new `Order` API.
    * Resource modified: `Order`.
    * New methods: `cancel`, `list_line_items`, `reopen`, and `submit`
    * Removed methods: `pay` and `return_order`
    * Removed resources: `OrderItem` and `OrderReturn`
    * Removed references from other resources: `Charge.order`
  * Add support for `amount_discount`, `amount_tax`, and `product` on `LineItem`
  * Change type of `Charge.shipping.name`, `Checkout.Session.shipping.name`, `Customer.shipping.name`, `Invoice.customer_shipping.name`, `PaymentIntent.shipping.name`, `ShippingDetails.name`, and `Source.source_order.shipping.name` from `nullable(string)` to `string`

## 8.222.0 - 2022-05-05
* [#1414](https://github.com/stripe/stripe-node/pull/1414) API Updates
  * Add support for `default_price_data` on `ProductCreateParams`
  * Add support for `default_price` on `ProductUpdateParams` and `Product`
  * Add support for `instructions_email` on `RefundCreateParams` and `Refund`


## 8.221.0 - 2022-05-05
* [#1413](https://github.com/stripe/stripe-node/pull/1413) API Updates
  * Add support for new resources `FinancialConnections.AccountOwner`, `FinancialConnections.AccountOwnership`, `FinancialConnections.Account`, and `FinancialConnections.Session`
  * Add support for `financial_connections` on `Checkout.Session.payment_method_options.us_bank_account`, `CheckoutSessionCreateParams.payment_method_options.us_bank_account`, `Invoice.payment_settings.payment_method_options.us_bank_account`, `InvoiceCreateParams.payment_settings.payment_method_options.us_bank_account`, `InvoiceUpdateParams.payment_settings.payment_method_options.us_bank_account`, `PaymentIntent.payment_method_options.us_bank_account`, `PaymentIntentConfirmParams.payment_method_options.us_bank_account`, `PaymentIntentCreateParams.payment_method_options.us_bank_account`, `PaymentIntentUpdateParams.payment_method_options.us_bank_account`, `SetupIntent.payment_method_options.us_bank_account`, `SetupIntentConfirmParams.payment_method_options.us_bank_account`, `SetupIntentCreateParams.payment_method_options.us_bank_account`, `SetupIntentUpdateParams.payment_method_options.us_bank_account`, `Subscription.payment_settings.payment_method_options.us_bank_account`, `SubscriptionCreateParams.payment_settings.payment_method_options.us_bank_account`, and `SubscriptionUpdateParams.payment_settings.payment_method_options.us_bank_account`
  * Add support for `financial_connections_account` on `PaymentIntentConfirmParams.payment_method_data.us_bank_account`, `PaymentIntentCreateParams.payment_method_data.us_bank_account`, `PaymentIntentUpdateParams.payment_method_data.us_bank_account`, `PaymentMethod.us_bank_account`, `PaymentMethodCreateParams.us_bank_account`, `SetupIntentConfirmParams.payment_method_data.us_bank_account`, `SetupIntentCreateParams.payment_method_data.us_bank_account`, and `SetupIntentUpdateParams.payment_method_data.us_bank_account`

* [#1410](https://github.com/stripe/stripe-node/pull/1410) API Updates
  * Add support for `registered_address` on `AccountCreateParams.individual`, `AccountUpdateParams.individual`, `PersonCreateParams`, `PersonUpdateParams`, `Person`, `TokenCreateParams.account.individual`, and `TokenCreateParams.person`
  * Change type of `PaymentIntent.amount_details.tip.amount` from `nullable(integer)` to `integer`
  * Change `PaymentIntent.amount_details.tip.amount` to be optional
  * Add support for `payment_method_data` on `SetupIntentConfirmParams`, `SetupIntentCreateParams`, and `SetupIntentUpdateParams`
* [#1409](https://github.com/stripe/stripe-node/pull/1409) Update autoPagination tests to be hermetic.
* [#1411](https://github.com/stripe/stripe-node/pull/1411) Enable CI on beta branch

## 8.220.0 - 2022-05-03
* [#1407](https://github.com/stripe/stripe-node/pull/1407) API Updates
  * Add support for new resource `CashBalance`
  * Change type of `BillingPortal.Configuration.application` from `$Application` to `deletable($Application)`
  * Add support for `alipay` on `Checkout.Session.payment_method_options` and `CheckoutSessionCreateParams.payment_method_options`
  * Change type of `CheckoutSessionCreateParams.payment_method_options.konbini.expires_after_days` from `emptyStringable(integer)` to `integer`
  * Add support for new value `eu_oss_vat` on enums `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, and `TaxId.type`
  * Add support for new value `eu_oss_vat` on enums `CustomerCreateParams.tax_id_data[].type`, `InvoiceUpcomingLinesParams.customer_details.tax_ids[].type`, `InvoiceUpcomingParams.customer_details.tax_ids[].type`, and `TaxIdCreateParams.type`
  * Add support for `cash_balance` on `Customer`
  * Add support for `application` on `Invoice`, `Quote`, `SubscriptionSchedule`, and `Subscription`
* [#1403](https://github.com/stripe/stripe-node/pull/1403) Add tests for specifying a custom host on StripeMethod.

## 8.219.0 - 2022-04-21
* [#1398](https://github.com/stripe/stripe-node/pull/1398) API Updates
  * Add support for `expire` test helper method on resource `Refund`
  * Change type of `BillingPortal.Configuration.application` from `string` to `expandable($Application)`
  * Change `IssuingDisputeCreateParams.transaction` to be optional

## 8.218.0 - 2022-04-18
* [#1396](https://github.com/stripe/stripe-node/pull/1396) API Updates
  * Add support for new resources `FundingInstructions` and `Terminal.Configuration`
  * Add support for `create_funding_instructions` method on resource `Customer`
  * Add support for new value `customer_balance` as a payment method `type`.
  * Add support for `customer_balance` on `Charge.payment_method_details`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, and `PaymentMethod`
  * Add support for `cash_balance` on `CustomerCreateParams` and `CustomerUpdateParams`
  * Add support for `amount_details` on `PaymentIntent`
  * Add support for `display_bank_transfer_instructions` on `PaymentIntent.next_action`
  * Add support for `configuration_overrides` on `Terminal.Location`, `TerminalLocationCreateParams`, and `TerminalLocationUpdateParams`

## 8.217.0 - 2022-04-13
* [#1395](https://github.com/stripe/stripe-node/pull/1395) API Updates
  * Add support for `increment_authorization` method on resource `PaymentIntent`
  * Add support for `incremental_authorization_supported` on `Charge.payment_method_details.card_present`
  * Add support for `request_incremental_authorization_support` on `PaymentIntent.payment_method_options.card_present`, `PaymentIntentConfirmParams.payment_method_options.card_present`, `PaymentIntentCreateParams.payment_method_options.card_present`, and `PaymentIntentUpdateParams.payment_method_options.card_present`

## 8.216.0 - 2022-04-08
* [#1391](https://github.com/stripe/stripe-node/pull/1391) API Updates
  * Add support for `apply_customer_balance` method on resource `PaymentIntent`
  * Add support for new value `cash_balance.funds_available` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`

## 8.215.0 - 2022-04-01
* [#1389](https://github.com/stripe/stripe-node/pull/1389) API Updates
  * Add support for `bank_transfer_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
  * Add support for `capture_before` on `Charge.payment_method_details.card_present`
  * Add support for `address` and `name` on `Checkout.Session.customer_details`
  * Add support for `customer_balance` on `Invoice.payment_settings.payment_method_options`, `InvoiceCreateParams.payment_settings.payment_method_options`, `InvoiceUpdateParams.payment_settings.payment_method_options`, `Subscription.payment_settings.payment_method_options`, `SubscriptionCreateParams.payment_settings.payment_method_options`, and `SubscriptionUpdateParams.payment_settings.payment_method_options`
  * Add support for new value `customer_balance` on enums `Invoice.payment_settings.payment_method_types[]`, `InvoiceCreateParams.payment_settings.payment_method_types[]`, `InvoiceUpdateParams.payment_settings.payment_method_types[]`, `Subscription.payment_settings.payment_method_types[]`, `SubscriptionCreateParams.payment_settings.payment_method_types[]`, and `SubscriptionUpdateParams.payment_settings.payment_method_types[]`
  * Add support for `request_extended_authorization` on `PaymentIntent.payment_method_options.card_present`, `PaymentIntentConfirmParams.payment_method_options.card_present`, `PaymentIntentCreateParams.payment_method_options.card_present`, and `PaymentIntentUpdateParams.payment_method_options.card_present`
  * Add support for new values `payment_intent.partially_funded`, `terminal.reader.action_failed`, and `terminal.reader.action_succeeded` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`

* [#1388](https://github.com/stripe/stripe-node/pull/1388) Stop sending Content-Length header for verbs which don't have bodies.
  * Fixes https://github.com/stripe/stripe-node/issues/1360.

## 8.214.0 - 2022-03-30
* [#1386](https://github.com/stripe/stripe-node/pull/1386) API Updates
  * Add support for `cancel_action`, `process_payment_intent`, `process_setup_intent`, and `set_reader_display` methods on resource `Terminal.Reader`
  * Change `Charge.failure_balance_transaction`, `Invoice.payment_settings.payment_method_options.us_bank_account`, `PaymentIntent.next_action.verify_with_microdeposits.microdeposit_type`, `SetupIntent.next_action.verify_with_microdeposits.microdeposit_type`, and `Subscription.payment_settings.payment_method_options.us_bank_account` to be required
  * Add support for `action` on `Terminal.Reader`

## 8.213.0 - 2022-03-28
* [#1383](https://github.com/stripe/stripe-node/pull/1383) API Updates
  * Add support for Search API
    * Add support for `search` method on resources `Charge`, `Customer`, `Invoice`, `PaymentIntent`, `Price`, `Product`, and `Subscription`
* [#1384](https://github.com/stripe/stripe-node/pull/1384) Bump qs package to latest.

## 8.212.0 - 2022-03-25
* [#1381](https://github.com/stripe/stripe-node/pull/1381) API Updates
  * Add support for PayNow and US Bank Accounts Debits payments
      * **Charge** ([API ref](https://stripe.com/docs/api/charges/object#charge_object-payment_method_details))
          * Add support for `paynow` and `us_bank_account` on `Charge.payment_method_details`
      * **Customer** ([API ref](https://stripe.com/docs/api/payment_methods/customer_list#list_customer_payment_methods-type))
          * Add support for new values `paynow` and `us_bank_account` on enum `CustomerListPaymentMethodsParams.type`
      * **Payment Intent** ([API ref](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-payment_method_options))
          * Add support for `paynow` and `us_bank_account` on `payment_method_options` on `PaymentIntent`, `PaymentIntentCreateParams`, `PaymentIntentUpdateParams`, and `PaymentIntentConfirmParams`
          * Add support for `paynow` and `us_bank_account` on `payment_method_data` on `PaymentIntentCreateParams`, `PaymentIntentUpdateParams`, and `PaymentIntentConfirmParams`
          * Add support for `paynow_display_qr_code` on `PaymentIntent.next_action`
          * Add support for new values `paynow` and `us_bank_account` on enums `payment_method_data.type` on `PaymentIntentCreateParams`, and `PaymentIntentUpdateParams`, and `PaymentIntentConfirmParams`
      * **Setup Intent** ([API ref](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-payment_method_options))
          * Add support for `us_bank_account` on `payment_method_options` on `SetupIntent`, `SetupIntentCreateParams`, `SetupIntentUpdateParams`, and `SetupIntentConfirmParams`
      * **Setup Attempt** ([API ref](https://stripe.com/docs/api/setup_attempts/object#setup_attempt_object-payment_method_details))
          * Add support for `us_bank_account` on `SetupAttempt.payment_method_details`
      * **Payment Method** ([API ref](https://stripe.com/docs/api/payment_methods/object#payment_method_object-paynow))
          * Add support for `paynow` and `us_bank_account` on `PaymentMethod` and `PaymentMethodCreateParams`
          * Add support for `us_bank_account` on `PaymentMethodUpdateParams`
          * Add support for new values `paynow` and `us_bank_account` on enums `PaymentMethod.type`, `PaymentMethodCreateParams.type`. and `PaymentMethodListParams.type`
      * **Checkout Session** ([API ref](https://stripe.com/docs/api/checkout/sessions/create#create_checkout_session-payment_method_types))
          * Add support for `us_bank_account` on `payment_method_options` on `Checkout.Session` and `CheckoutSessionCreateParams`
          * Add support for new values `paynow` and `us_bank_account` on enum `CheckoutSessionCreateParams.payment_method_types[]`
      * **Invoice** ([API ref](https://stripe.com/docs/api/invoices/object#invoice_object-payment_settings-payment_method_types))
          * Add support for `us_bank_account` on `payment_settings.payment_method_options` on `Invoice`, `InvoiceCreateParams`, and `InvoiceUpdateParams`
          * Add support for new values `paynow` and `us_bank_account` on enums `payment_settings.payment_method_types[]` on `Invoice`, `InvoiceCreateParams`, and `InvoiceUpdateParams`
      * **Subscription** ([API ref](https://stripe.com/docs/api/subscriptions/object#subscription_object-payment_settings-payment_method_types))
          * Add support for `us_bank_account` on `Subscription.payment_settings.payment_method_options`, `SubscriptionCreateParams.payment_settings.payment_method_options`, and `SubscriptionUpdateParams.payment_settings.payment_method_options`
          * Add support for new values `paynow` and `us_bank_account` on enums `payment_settings.payment_method_types[]` on `Subscription`, `SubscriptionCreateParams`, and `SubscriptionUpdateParams`
      * **Account capabilities** ([API ref](https://stripe.com/docs/api/accounts/object#account_object-capabilities))
          * Add support for `paynow_payments` on `capabilities` on `Account`, `AccountCreateParams`, and `AccountUpdateParams`
  * Add support for `failure_balance_transaction` on `Charge`
  * Add support for `capture_method` on `afterpay_clearpay`, `card`, and `klarna` on `payment_method_options` on
  `PaymentIntent`, `PaymentIntentCreateParams`, `PaymentIntentUpdateParams`, and `PaymentIntentConfirmParams` ([API ref](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-payment_method_options-afterpay_clearpay-capture_method))
  * Add additional support for verify microdeposits on Payment Intent and Setup Intent ([API ref](https://stripe.com/docs/api/payment_intents/verify_microdeposits))
      * Add support for `microdeposit_type` on `next_action.verify_with_microdeposits` on `PaymentIntent` and `SetupIntent`
      * Add support for `descriptor_code` on `PaymentIntentVerifyMicrodepositsParams` and `SetupIntentVerifyMicrodepositsParams`
  * Add support for `test_clock` on `SubscriptionListParams` ([API ref](https://stripe.com/docs/api/subscriptions/list#list_subscriptions-test_clock))
* [#1375](https://github.com/stripe/stripe-node/pull/1375) Update error types to be namespaced under Stripe.error
* [#1380](https://github.com/stripe/stripe-node/pull/1380) Force update minimist dependency

## 8.211.0 - 2022-03-23
* [#1377](https://github.com/stripe/stripe-node/pull/1377) API Updates
  * Add support for `cancel` method on resource `Refund`
  * Add support for new values `bg_uic`, `hu_tin`, and `si_tin` on enums `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, and `TaxId.type`
  * Add support for new values `bg_uic`, `hu_tin`, and `si_tin` on enums `CustomerCreateParams.tax_id_data[].type`, `InvoiceUpcomingLinesParams.customer_details.tax_ids[].type`, `InvoiceUpcomingParams.customer_details.tax_ids[].type`, and `TaxIdCreateParams.type`
  * Change `InvoiceCreateParams.customer` to be optional
  * Add support for `test_clock` on `QuoteListParams`
  * Add support for new values `test_helpers.test_clock.advancing`, `test_helpers.test_clock.created`, `test_helpers.test_clock.deleted`, `test_helpers.test_clock.internal_failure`, and `test_helpers.test_clock.ready` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`

## 8.210.0 - 2022-03-18
* [#1372](https://github.com/stripe/stripe-node/pull/1372) API Updates
  * Add support for `status` on `Card`

## 8.209.0 - 2022-03-11
* [#1368](https://github.com/stripe/stripe-node/pull/1368) API Updates
  * Add support for `mandate` on `Charge.payment_method_details.card`
  * Add support for `mandate_options` on `PaymentIntentCreateParams.payment_method_options.card`, `PaymentIntentUpdateParams.payment_method_options.card`, `PaymentIntentConfirmParams.payment_method_options.card`, `PaymentIntent.payment_method_options.card`, `SetupIntentCreateParams.payment_method_options.card`, `SetupIntentUpdateParams.payment_method_options.card`, `SetupIntentConfirmParams.payment_method_options.card`, and `SetupIntent.payment_method_options.card`
  * Add support for `card_await_notification` on `PaymentIntent.next_action`
  * Add support for `customer_notification` on `PaymentIntent.processing.card`
  * Change `PaymentLinkCreateParams.line_items` to be required, and change `PaymentLink.create` to require `PaymentLinkCreateParams`

* [#1364](https://github.com/stripe/stripe-node/pull/1364) Update search pagination to use page param instead of next_page.

## 8.208.0 - 2022-03-09
* [#1366](https://github.com/stripe/stripe-node/pull/1366) API Updates
  * Add support for `test_clock` on `CustomerListParams`
  * Change `Invoice.test_clock`, `InvoiceItem.test_clock`, `Quote.test_clock`, `Subscription.test_clock`, and `SubscriptionSchedule.test_clock` to be required

## 8.207.0 - 2022-03-02
* [#1363](https://github.com/stripe/stripe-node/pull/1363) API Updates
  * Add support for new resources `CreditedItems` and `ProrationDetails`
  * Add support for `proration_details` on `InvoiceLineItem`

## 8.206.0 - 2022-03-01
* [#1361](https://github.com/stripe/stripe-node/pull/1361) [#1362](https://github.com/stripe/stripe-node/pull/1362) API Updates
  * Add support for new resource `TestHelpers.TestClock`
  * Add support for `test_clock` on `CustomerCreateParams`, `Customer`, `Invoice`, `InvoiceItem`, `QuoteCreateParams`, `Quote`, `Subscription`, and `SubscriptionSchedule`
  * Add support for `pending_invoice_items_behavior` on `InvoiceCreateParams`
  * Change type of `ProductUpdateParams.url` from `string` to `emptyStringable(string)`
  * Add support for `next_action` on `Refund`

## 8.205.0 - 2022-02-25
* [#1098](https://github.com/stripe/stripe-node/pull/1098) Typescript: add declaration for `onDone` on `autoPagingEach`
* [#1357](https://github.com/stripe/stripe-node/pull/1357) Properly handle API errors with unknown error types
* [#1359](https://github.com/stripe/stripe-node/pull/1359) API Updates
  * Change `BillingPortalConfiguration` `.business_profile.privacy_policy_url` and `.business_profile.terms_of_service_url` to be optional on requests and responses

  * Add support for `konbini_payments` on `AccountUpdateParams.capabilities`, `AccountCreateParams.capabilities`, and `Account.capabilities`
  * Add support for `konbini` on `Charge.payment_method_details`,
  * Add support for `.payment_method_options.konbini` and `.payment_method_data.konbini` on the `PaymentIntent` API.
  * Add support for `.payment_settings.payment_method_options.konbini` on the `Invoice` API.
  * Add support for `.payment_method_options.konbini` on the `Subscription` API
  * Add support for `.payment_method_options.konbini` on the `CheckoutSession` API
  * Add support for `konbini` on the `PaymentMethod` API.
  * Add support for `konbini_display_details` on `PaymentIntent.next_action`
* [#1311](https://github.com/stripe/stripe-node/pull/1311) update documentation to use appInfo

## 8.204.0 - 2022-02-23
* [#1354](https://github.com/stripe/stripe-node/pull/1354) API Updates
  * Add support for `setup_future_usage` on `PaymentIntentCreateParams.payment_method_options.*`
  * Add support for new values `bbpos_wisepad3` and `stripe_m2` on enums `TerminalReaderListParams.device_type` and `Terminal.Reader.device_type`
  * Add support for `object` on `ExternalAccountListParams` (fixes #1351)

## 8.203.0 - 2022-02-15
* [#1350](https://github.com/stripe/stripe-node/pull/1350) API Updates
  * Add support for `verify_microdeposits` method on resources `PaymentIntent` and `SetupIntent`
  * Add support for new value `grabpay` on enums `InvoiceCreateParams.payment_settings.payment_method_types[]`, `InvoiceUpdateParams.payment_settings.payment_method_types[]`, `Invoice.payment_settings.payment_method_types[]`, `SubscriptionCreateParams.payment_settings.payment_method_types[]`, `SubscriptionUpdateParams.payment_settings.payment_method_types[]`, and `Subscription.payment_settings.payment_method_types[]`
* [#1348](https://github.com/stripe/stripe-node/pull/1348) API Updates
  * Add support for `pin` on `IssuingCardUpdateParams`

## 8.202.0 - 2022-02-03
* [#1344](https://github.com/stripe/stripe-node/pull/1344) API Updates
  * Add support for new value `au_becs_debit` on enum `CheckoutSessionCreateParams.payment_method_types[]`
  * Change type of `Refund.reason` from `string` to `enum('duplicate'|'expired_uncaptured_charge'|'fraudulent'|'requested_by_customer')`

## 8.201.0 - 2022-01-28
* [#1342](https://github.com/stripe/stripe-node/pull/1342) Bump nanoid from 3.1.20 to 3.2.0.
* [#1335](https://github.com/stripe/stripe-node/pull/1335) Fix StripeResource to successfully import TIMEOUT_ERROR_CODE.
* [#1339](https://github.com/stripe/stripe-node/pull/1339) Bump node-fetch from 2.6.2 to 2.6.7

## 8.200.0 - 2022-01-25
* [#1338](https://github.com/stripe/stripe-node/pull/1338) API Updates
  * Change `Checkout.Session.payment_link` to be required
  * Add support for `phone_number_collection` on `PaymentLinkCreateParams` and `PaymentLink`
  * Add support for new values `payment_link.created` and `payment_link.updated` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
  * Add support for new value `is_vat` on enums `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, and `TaxId.type`
  * Add support for new value `is_vat` on enums `CustomerCreateParams.tax_id_data[].type`, `InvoiceUpcomingParams.customer_details.tax_ids[].type`, `InvoiceUpcomingLinesParams.customer_details.tax_ids[].type`, and `TaxIdCreateParams.type`

* [#1333](https://github.com/stripe/stripe-node/pull/1333) Customer tax_ids is not included by default

## 8.199.0 - 2022-01-20
* [#1332](https://github.com/stripe/stripe-node/pull/1332) API Updates
  * Add support for new resource `PaymentLink`
  * Add support for `payment_link` on `Checkout.Session`

## 8.198.0 - 2022-01-19
* [#1331](https://github.com/stripe/stripe-node/pull/1331) API Updates
  * Change type of `Charge.status` from `string` to `enum('failed'|'pending'|'succeeded')`
  * Add support for `bacs_debit` and `eps` on `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentIntentConfirmParams.payment_method_options`, and `PaymentIntent.payment_method_options`
  * Add support for `image_url_png` and `image_url_svg` on `PaymentIntent.next_action.wechat_pay_display_qr_code`

## 8.197.0 - 2022-01-13
* [#1329](https://github.com/stripe/stripe-node/pull/1329) API Updates
  * Add support for `paid_out_of_band` on `Invoice`

## 8.196.0 - 2022-01-12
* [#1328](https://github.com/stripe/stripe-node/pull/1328) API Updates
  * Add support for `customer_creation` on `CheckoutSessionCreateParams` and `Checkout.Session`
  * Add support for `fpx` and `grabpay` on `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentIntentConfirmParams.payment_method_options`, and `PaymentIntent.payment_method_options`
* [#1315](https://github.com/stripe/stripe-node/pull/1315) API Updates
  * Add support for `mandate_options` on `SubscriptionCreateParams.payment_settings.payment_method_options.card`, `SubscriptionUpdateParams.payment_settings.payment_method_options.card`, and `Subscription.payment_settings.payment_method_options.card`
* [#1327](https://github.com/stripe/stripe-node/pull/1327) Remove DOM type references.
* [#1325](https://github.com/stripe/stripe-node/pull/1325) Add comment documenting makeRequest#headers type.

## 8.195.0 - 2021-12-22
* [#1314](https://github.com/stripe/stripe-node/pull/1314) API Updates
  * Add support for `au_becs_debit` on `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentIntentConfirmParams.payment_method_options`, and `PaymentIntent.payment_method_options`
  * Change type of `PaymentIntent.processing.type` from `string` to `literal('card')`. This is not considered a breaking change as the field was added in the same release.
* [#1313](https://github.com/stripe/stripe-node/pull/1313) API Updates
  * Add support for new values `en-FR`, `es-US`, and `fr-FR` on enums `PaymentIntentCreateParams.payment_method_options.klarna.preferred_locale`, `PaymentIntentUpdateParams.payment_method_options.klarna.preferred_locale`, and `PaymentIntentConfirmParams.payment_method_options.klarna.preferred_locale`
  * Add support for `boleto` on `SetupAttempt.payment_method_details`

* [#1312](https://github.com/stripe/stripe-node/pull/1312) API Updates
  * Add support for `processing` on `PaymentIntent`

## 8.194.0 - 2021-12-15
* [#1309](https://github.com/stripe/stripe-node/pull/1309) API Updates
  * Add support for new resource `PaymentIntentTypeSpecificPaymentMethodOptionsClient`
  * Add support for `setup_future_usage` on `PaymentIntentCreateParams.payment_method_options.card`, `PaymentIntentUpdateParams.payment_method_options.card`, `PaymentIntentConfirmParams.payment_method_options.card`, and `PaymentIntent.payment_method_options.card`

## 8.193.0 - 2021-12-09
* [#1308](https://github.com/stripe/stripe-node/pull/1308) API Updates
  * Add support for `metadata` on `BillingPortalConfigurationCreateParams`, `BillingPortalConfigurationUpdateParams`, and `BillingPortal.Configuration`

## 8.192.0 - 2021-12-09
* [#1307](https://github.com/stripe/stripe-node/pull/1307) API Updates
  * Add support for new values `ge_vat` and `ua_vat` on enums `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, and `TaxId.type`
  * Add support for new values `ge_vat` and `ua_vat` on enums `CustomerCreateParams.tax_id_data[].type`, `InvoiceUpcomingParams.customer_details.tax_ids[].type`, `InvoiceUpcomingLinesParams.customer_details.tax_ids[].type`, and `TaxIdCreateParams.type`
  * Change type of `PaymentIntentCreateParams.payment_method_data.billing_details.email`, `PaymentIntentUpdateParams.payment_method_data.billing_details.email`, `PaymentIntentConfirmParams.payment_method_data.billing_details.email`, `PaymentMethodCreateParams.billing_details.email`, and `PaymentMethodUpdateParams.billing_details.email` from `string` to `emptyStringable(string)`
  * Add support for `giropay` on `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentIntentConfirmParams.payment_method_options`, and `PaymentIntent.payment_method_options`
  * Add support for new value `en-IE` on enums `PaymentIntentCreateParams.payment_method_options.klarna.preferred_locale`, `PaymentIntentUpdateParams.payment_method_options.klarna.preferred_locale`, and `PaymentIntentConfirmParams.payment_method_options.klarna.preferred_locale`
* [#1301](https://github.com/stripe/stripe-node/pull/1301) Remove coveralls from package.json
* [#1300](https://github.com/stripe/stripe-node/pull/1300) Fix broken link in docstring

## 8.191.0 - 2021-11-19
* [#1299](https://github.com/stripe/stripe-node/pull/1299) API Updates
  * Add support for `wallets` on `Issuing.Card`

* [#1298](https://github.com/stripe/stripe-node/pull/1298) API Updates
  * Add support for `interac_present` on `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentIntentConfirmParams.payment_method_options`, and `PaymentIntent.payment_method_options`
  * Add support for new value `jct` on enums `TaxRateCreateParams.tax_type`, `TaxRateUpdateParams.tax_type`, and `TaxRate.tax_type`

## 8.190.0 - 2021-11-17
* [#1297](https://github.com/stripe/stripe-node/pull/1297) API Updates
  * Add support for `automatic_payment_methods` on `PaymentIntentCreateParams` and `PaymentIntent`


## 8.189.0 - 2021-11-16
* [#1295](https://github.com/stripe/stripe-node/pull/1295) API Updates
  * Add support for new resource `ShippingRate`
  * Add support for `shipping_options` on `CheckoutSessionCreateParams` and `Checkout.Session`
  * Add support for `shipping_rate` on `Checkout.Session`

## 8.188.0 - 2021-11-12
* [#1293](https://github.com/stripe/stripe-node/pull/1293) API Updates
  * Add support for new value `agrobank` on enums `Charge.payment_method_details.fpx.bank`, `PaymentIntentCreateParams.payment_method_data.fpx.bank`, `PaymentIntentUpdateParams.payment_method_data.fpx.bank`, `PaymentIntentConfirmParams.payment_method_data.fpx.bank`, `PaymentMethodCreateParams.fpx.bank`, and `PaymentMethod.fpx.bank`

## 8.187.0 - 2021-11-11
* [#1292](https://github.com/stripe/stripe-node/pull/1292) API Updates
  * Add support for `expire` method on resource `Checkout.Session`
  * Add support for `status` on `Checkout.Session`
* [#1288](https://github.com/stripe/stripe-node/pull/1288) Add SubtleCryptoProvider and update Webhooks to allow async crypto.
* [#1291](https://github.com/stripe/stripe-node/pull/1291) Better types in `lib.d.ts`

## 8.186.1 - 2021-11-04
* [#1284](https://github.com/stripe/stripe-node/pull/1284) API Updates
  * Remove support for `ownership_declaration_shown_and_signed` on `TokenCreateParams.account`. This API was unused.
  * Add support for `ownership_declaration_shown_and_signed` on `TokenCreateParams.account.company`


## 8.186.0 - 2021-11-01
* [#1283](https://github.com/stripe/stripe-node/pull/1283) API Updates
  * Add support for `ownership_declaration` on `AccountUpdateParams.company`, `AccountCreateParams.company`, `Account.company`, and `TokenCreateParams.account.company`
  * Add support for `proof_of_registration` on `AccountUpdateParams.documents` and `AccountCreateParams.documents`
  * Add support for `ownership_declaration_shown_and_signed` on `TokenCreateParams.account`

## 8.185.0 - 2021-11-01
* [#1282](https://github.com/stripe/stripe-node/pull/1282) API Updates
  * Change type of `AccountUpdateParams.individual.full_name_aliases`, `AccountCreateParams.individual.full_name_aliases`, `PersonCreateParams.full_name_aliases`, `PersonUpdateParams.full_name_aliases`, `TokenCreateParams.account.individual.full_name_aliases`, and `TokenCreateParams.person.full_name_aliases` from `array(string)` to `emptyStringable(array(string))`
  * Add support for new values `en-BE`, `en-ES`, and `en-IT` on enums `PaymentIntentCreateParams.payment_method_options.klarna.preferred_locale`, `PaymentIntentUpdateParams.payment_method_options.klarna.preferred_locale`, and `PaymentIntentConfirmParams.payment_method_options.klarna.preferred_locale`

## 8.184.0 - 2021-10-20
* [#1276](https://github.com/stripe/stripe-node/pull/1276) API Updates
  * Change `Account.controller.type` to be required
  * Add support for `buyer_id` on `Charge.payment_method_details.alipay`
* [#1273](https://github.com/stripe/stripe-node/pull/1273) Add typed createFetchHttpClient function.

## 8.183.0 - 2021-10-15
* [#1272](https://github.com/stripe/stripe-node/pull/1272) API Updates
  * Change type of `UsageRecordCreateParams.timestamp` from `integer` to `literal('now') | integer`
  * Change `UsageRecordCreateParams.timestamp` to be optional

## 8.182.0 - 2021-10-14
* [#1271](https://github.com/stripe/stripe-node/pull/1271) API Updates
  * Change `Charge.payment_method_details.klarna.payment_method_category`, `Charge.payment_method_details.klarna.preferred_locale`, `Checkout.Session.customer_details.phone`, and `PaymentMethod.klarna.dob` to be required
  * Add support for new value `klarna` on enum `CheckoutSessionCreateParams.payment_method_types[]`

## 8.181.0 - 2021-10-11
* [#1269](https://github.com/stripe/stripe-node/pull/1269) API Updates
  * Add support for `payment_method_category` and `preferred_locale` on `Charge.payment_method_details.klarna`
  * Add support for new value `klarna` on enums `CustomerListPaymentMethodsParams.type` and `PaymentMethodListParams.type`
  * Add support for `klarna` on `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntent.payment_method_options`, `PaymentMethodCreateParams`, and `PaymentMethod`
  * Add support for new value `klarna` on enums `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, and `PaymentIntentConfirmParams.payment_method_data.type`
  * Add support for new value `klarna` on enum `PaymentMethodCreateParams.type`
  * Add support for new value `klarna` on enum `PaymentMethod.type`

## 8.180.0 - 2021-10-11
* [#1266](https://github.com/stripe/stripe-node/pull/1266) API Updates
  * Add support for `list_payment_methods` method on resource `Customer`

## 8.179.0 - 2021-10-07
* [#1265](https://github.com/stripe/stripe-node/pull/1265) API Updates
  * Add support for `phone_number_collection` on `CheckoutSessionCreateParams` and `Checkout.Session`
  * Add support for `phone` on `Checkout.Session.customer_details`
  * Change `PaymentMethodListParams.customer` to be optional
  * Add support for new value `customer_id` on enums `RadarValueListCreateParams.item_type` and `Radar.ValueList.item_type`
  * Add support for new value `bbpos_wisepos_e` on enums `TerminalReaderListParams.device_type` and `Terminal.Reader.device_type`

## 8.178.0 - 2021-09-29
* [#1261](https://github.com/stripe/stripe-node/pull/1261) API Updates
  * Add support for `klarna_payments` on `AccountUpdateParams.capabilities`, `AccountCreateParams.capabilities`, and `Account.capabilities`

## 8.177.0 - 2021-09-28
* [#1257](https://github.com/stripe/stripe-node/pull/1257) API Updates
  * Add support for `amount_authorized` and `overcapture_supported` on `Charge.payment_method_details.card_present`
* [#1256](https://github.com/stripe/stripe-node/pull/1256) Bump up ansi-regex version to 5.0.1.
* [#1253](https://github.com/stripe/stripe-node/pull/1253) Update FetchHttpClient to make fetch function optional.

## 8.176.0 - 2021-09-16
* [#1248](https://github.com/stripe/stripe-node/pull/1248) API Updates
  * Add support for `full_name_aliases` on `AccountUpdateParams.individual`, `AccountCreateParams.individual`, `PersonCreateParams`, `PersonUpdateParams`, `Person`, `TokenCreateParams.account.individual`, and `TokenCreateParams.person`
* [#1247](https://github.com/stripe/stripe-node/pull/1247) Update README.md
* [#1245](https://github.com/stripe/stripe-node/pull/1245) Fix StripeResource.extend type

## 8.175.0 - 2021-09-15
* [#1242](https://github.com/stripe/stripe-node/pull/1242) API Updates
  * Change `BillingPortal.Configuration.features.subscription_cancel.cancellation_reason` to be required
  * Add support for `default_for` on `CheckoutSessionCreateParams.payment_method_options.acss_debit.mandate_options`, `Checkout.Session.payment_method_options.acss_debit.mandate_options`, `Mandate.payment_method_details.acss_debit`, `SetupIntentCreateParams.payment_method_options.acss_debit.mandate_options`, `SetupIntentUpdateParams.payment_method_options.acss_debit.mandate_options`, `SetupIntentConfirmParams.payment_method_options.acss_debit.mandate_options`, and `SetupIntent.payment_method_options.acss_debit.mandate_options`
  * Add support for `acss_debit` on `InvoiceCreateParams.payment_settings.payment_method_options`, `InvoiceUpdateParams.payment_settings.payment_method_options`, `Invoice.payment_settings.payment_method_options`, `SubscriptionCreateParams.payment_settings.payment_method_options`, `SubscriptionUpdateParams.payment_settings.payment_method_options`, and `Subscription.payment_settings.payment_method_options`
  * Add support for new value `acss_debit` on enums `InvoiceCreateParams.payment_settings.payment_method_types[]`, `InvoiceUpdateParams.payment_settings.payment_method_types[]`, `Invoice.payment_settings.payment_method_types[]`, `SubscriptionCreateParams.payment_settings.payment_method_types[]`, `SubscriptionUpdateParams.payment_settings.payment_method_types[]`, and `Subscription.payment_settings.payment_method_types[]`
  * Add support for `livemode` on `Reporting.ReportType`
* [#1235](https://github.com/stripe/stripe-node/pull/1235) API Updates
  * Change `Account.future_requirements.alternatives`, `Account.requirements.alternatives`, `Capability.future_requirements.alternatives`, `Capability.requirements.alternatives`, `Checkout.Session.after_expiration`, `Checkout.Session.consent`, `Checkout.Session.consent_collection`, `Checkout.Session.expires_at`, `Checkout.Session.recovered_from`, `Person.future_requirements.alternatives`, and `Person.requirements.alternatives` to be required
  * Change type of `Capability.future_requirements.alternatives`, `Capability.requirements.alternatives`, `Person.future_requirements.alternatives`, and `Person.requirements.alternatives` from `array(AccountRequirementsAlternative)` to `nullable(array(AccountRequirementsAlternative))`
  * Add support for new value `rst` on enums `TaxRateCreateParams.tax_type`, `TaxRateUpdateParams.tax_type`, and `TaxRate.tax_type`
  * Add support for new value `checkout.session.expired` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
* [#1237](https://github.com/stripe/stripe-node/pull/1237) Add a CryptoProvider interface and NodeCryptoProvider implementation.
* [#1236](https://github.com/stripe/stripe-node/pull/1236) Add an HTTP client which uses fetch.

## 8.174.0 - 2021-09-01
* [#1231](https://github.com/stripe/stripe-node/pull/1231) API Updates
  * Add support for `future_requirements` on `Account`, `Capability`, and `Person`
  * Add support for `alternatives` on `Account.requirements`, `Capability.requirements`, and `Person.requirements`

## 8.173.0 - 2021-09-01
* [#1230](https://github.com/stripe/stripe-node/pull/1230) [#1228](https://github.com/stripe/stripe-node/pull/1228) API Updates
  * Add support for `after_expiration`, `consent_collection`, and `expires_at` on `CheckoutSessionCreateParams` and `Checkout.Session`
  * Add support for `consent` and `recovered_from` on `Checkout.Session`

## 8.172.0 - 2021-08-31
* [#1198](https://github.com/stripe/stripe-node/pull/1198) Add support for  paginting SearchResult objects.

## 8.171.0 - 2021-08-27
* [#1226](https://github.com/stripe/stripe-node/pull/1226) API Updates
  * Add support for `cancellation_reason` on `BillingPortalConfigurationCreateParams.features.subscription_cancel`, `BillingPortalConfigurationUpdateParams.features.subscription_cancel`, and `BillingPortal.Configuration.features.subscription_cancel`

## 8.170.0 - 2021-08-19
* [#1223](https://github.com/stripe/stripe-node/pull/1223) API Updates
  * Add support for new value `fil` on enums `CheckoutSessionCreateParams.locale` and `Checkout.Session.locale`
  * Add support for new value `au_arn` on enums `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, and `TaxId.type`
  * Add support for new value `au_arn` on enums `CustomerCreateParams.tax_id_data[].type`, `InvoiceUpcomingParams.customer_details.tax_ids[].type`, `InvoiceUpcomingLinesParams.customer_details.tax_ids[].type`, and `TaxIdCreateParams.type`
* [#1221](https://github.com/stripe/stripe-node/pull/1221) Add client name property to HttpClient.
* [#1219](https://github.com/stripe/stripe-node/pull/1219) Update user agent computation to handle environments without process.
* [#1218](https://github.com/stripe/stripe-node/pull/1218) Add an HttpClient interface and NodeHttpClient implementation.
* [#1217](https://github.com/stripe/stripe-node/pull/1217) Update nock.

## 8.169.0 - 2021-08-11
* [#1215](https://github.com/stripe/stripe-node/pull/1215) API Updates
  * Add support for `locale` on `BillingPortalSessionCreateParams` and `BillingPortal.Session`
  * Change type of `Invoice.collection_method` and `Subscription.collection_method` from `nullable(enum('charge_automatically'|'send_invoice'))` to `enum('charge_automatically'|'send_invoice')`

## 8.168.0 - 2021-08-04
* [#1211](https://github.com/stripe/stripe-node/pull/1211) API Updates
  * Change type of `PaymentIntentCreateParams.payment_method_options.sofort.preferred_language`, `PaymentIntentUpdateParams.payment_method_options.sofort.preferred_language`, and `PaymentIntentConfirmParams.payment_method_options.sofort.preferred_language` from `enum` to `emptyStringable(enum)`
  * Change `Price.tax_behavior`, `Product.tax_code`, `Quote.automatic_tax`, and `TaxRate.tax_type` to be required

## 8.167.0 - 2021-07-28
* [#1206](https://github.com/stripe/stripe-node/pull/1206) Fix Typescript definition for `StripeResource.LastResponse.headers`
* [#1205](https://github.com/stripe/stripe-node/pull/1205) Prevent concurrent initial `uname` invocations
* [#1199](https://github.com/stripe/stripe-node/pull/1199) Explicitly define basic method specs
* [#1200](https://github.com/stripe/stripe-node/pull/1200) Add support for `fullPath` on method specs

## 8.166.0 - 2021-07-28
* [#1203](https://github.com/stripe/stripe-node/pull/1203) API Updates
  * Bugfix: add missing autopagination methods to `Quote.listLineItems` and `Quote.listComputedUpfrontLineItems`
  * Add support for `account_type` on `BankAccount`, `ExternalAccountUpdateParams`, and `TokenCreateParams.bank_account`
  * Add support for `category_code` on `Issuing.Authorization.merchant_data` and `Issuing.Transaction.merchant_data`
  * Add support for new value `redacted` on enum `Review.closed_reason`
  * Remove duplicate type definition for `Account.retrieve`.
  * Fix some `attributes` fields mistakenly defined as `Stripe.Metadata`
* [#1097](https://github.com/stripe/stripe-node/pull/1097) fix error arguments

## 8.165.0 - 2021-07-22
* [#1197](https://github.com/stripe/stripe-node/pull/1197) API Updates
  * Add support for new values `hr`, `ko`, and `vi` on enums `CheckoutSessionCreateParams.locale` and `Checkout.Session.locale`
  * Add support for `payment_settings` on `SubscriptionCreateParams`, `SubscriptionUpdateParams`, and `Subscription`

## 8.164.0 - 2021-07-20
* [#1196](https://github.com/stripe/stripe-node/pull/1196) API Updates
  * Remove support for values `api_connection_error`, `authentication_error`, and `rate_limit_error` from enums `StripeError.type`, `StripeErrorResponse.error.type`, `Invoice.last_finalization_error.type`, `PaymentIntent.last_payment_error.type`, `SetupAttempt.setup_error.type`, and `SetupIntent.last_setup_error.type`
  * Add support for `wallet` on `Issuing.Transaction`
  * Add support for `ideal` on `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentIntentConfirmParams.payment_method_options`, and `PaymentIntent.payment_method_options`


## 8.163.0 - 2021-07-15
* [#1102](https://github.com/stripe/stripe-node/pull/1102), [#1191](https://github.com/stripe/stripe-node/pull/1191) Add support for `stripeAccount` when initializing the client

## 8.162.0 - 2021-07-14
* [#1194](https://github.com/stripe/stripe-node/pull/1194) API Updates
  * Add support for `quote.accepted`, `quote.canceled`, `quote.created`, and `quote.finalized` events.
* [#1190](https://github.com/stripe/stripe-node/pull/1190) API Updates
  * Add support for `list_computed_upfront_line_items` method on resource `Quote`
* [#1192](https://github.com/stripe/stripe-node/pull/1192) Update links to Stripe.js docs

## 8.161.0 - 2021-07-09
* [#1188](https://github.com/stripe/stripe-node/pull/1188) API Updates
  * Add support for new resource `Quote`
  * Add support for `quote` on `Invoice`
  * Add support for new value `quote_accept` on enum `Invoice.billing_reason`
  * Changed type of `Charge.payment_method_details.card.three_d_secure.result`, `SetupAttempt.payment_method_details.card.three_d_secure.result`, `Charge.payment_method_details.card.three_d_secure.version`, and `SetupAttempt.payment_method_details.card.three_d_secure.version` to be nullable.

* [#1187](https://github.com/stripe/stripe-node/pull/1187) Bugfix in binary streaming support

## 8.160.0 - 2021-06-30
* [#1182](https://github.com/stripe/stripe-node/pull/1182) API Updates
  * Add support for new value `boleto` on enums `InvoiceCreateParams.payment_settings.payment_method_types[]`, `InvoiceUpdateParams.payment_settings.payment_method_types[]`, and `Invoice.payment_settings.payment_method_types[]`.

## 8.159.0 - 2021-06-30
* [#1180](https://github.com/stripe/stripe-node/pull/1180) API Updates
  * Add support for `wechat_pay` on `Charge.payment_method_details`, `CheckoutSessionCreateParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntent.payment_method_options`, `PaymentMethodCreateParams`, and `PaymentMethod`
  * Add support for new value `wechat_pay` on enums `CheckoutSessionCreateParams.payment_method_types[]`, `InvoiceCreateParams.payment_settings.payment_method_types[]`, `InvoiceUpdateParams.payment_settings.payment_method_types[]`, `Invoice.payment_settings.payment_method_types[]`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentMethodCreateParams.type`, `PaymentMethodListParams.type`, and `PaymentMethod.type`
  * Add support for `wechat_pay_display_qr_code`, `wechat_pay_redirect_to_android_app`, and `wechat_pay_redirect_to_ios_app` on `PaymentIntent.next_action`

## 8.158.0 - 2021-06-29
* [#1179](https://github.com/stripe/stripe-node/pull/1179) API Updates
  * Added support for `boleto_payments` on `Account.capabilities`
  * Added support for `boleto` and `oxxo` on `Checkout.SessionCreateParams.payment_method_options` and `Checkout.Session.payment_method_options`
  * Added support for `boleto` and `oxxo` as members of the `type` enum inside `Checkout.SessionCreateParams.payment_method_types[]`.

## 8.157.0 - 2021-06-25
* [#1177](https://github.com/stripe/stripe-node/pull/1177) API Updates
  * Added support for `boleto` on `PaymentMethodCreateParams`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `Charge.payment_method_details` and `PaymentMethod`
  * `PaymentMethodListParams.type`, `PaymentMethodCreateParams.type`, `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `PaymentIntentCreataParams.payment_method_data.type` and `PaymentMethod.type` added new enum members: `boleto`
  * Added support for `boleto_display_details` on `PaymentIntent.next_action`
  * `TaxIdCreateParams.type`, `Invoice.customer_tax_ids[].type`, `InvoiceLineItemListUpcomingParams.customer_details.tax_ids[].type`, `InvoiceUpcomingParams.customer_details.tax_ids[].type`, `CustomerCreateParams.tax_id_data[].type`, `Checkout.Session.customer_details.tax_ids[].type` and `TaxId.type` added new enum members: `il_vat`.
* [#1157](https://github.com/stripe/stripe-node/pull/1157) Add support for streaming requests

## 8.156.0 - 2021-06-18
* [#1175](https://github.com/stripe/stripe-node/pull/1175) API Updates
  * Add support for new TaxId types: `ca_pst_mb`, `ca_pst_bc`, `ca_gst_hst`, and `ca_pst_sk`.

## 8.155.0 - 2021-06-16
* [#1173](https://github.com/stripe/stripe-node/pull/1173) API Updates
  * Add support for `url` on Checkout `Session`.

## 8.154.0 - 2021-06-07
* [#1170](https://github.com/stripe/stripe-node/pull/1170) API Updates
  * Added support for `tax_id_collection` on Checkout `Session.tax_id_collection` and `SessionCreateParams`
  * Update `Terminal.Reader.location` to be expandable (TypeScript breaking change)

## 8.153.0 - 2021-06-04
* [#1168](https://github.com/stripe/stripe-node/pull/1168) API Updates
  * Add support for `controller` on `Account`.

## 8.152.0 - 2021-06-04
* [#1167](https://github.com/stripe/stripe-node/pull/1167) API Updates
  * Add support for new resource `TaxCode`.
  * Add support for `tax_code` on `Product`, `ProductCreateParams`, `ProductUpdateParams`, `PriceCreateParams.product_data`, `PlanCreateParams.product`, and Checkout `SessionCreateParams.line_items[].price_data.product_data`.
  * Add support for `tax` to `Customer`, `CustomerCreateParams`, `CustomerUpdateParams`.
  * Add support for `default_settings[automatic_tax]` and `phases[].automatic_tax` on `SubscriptionSchedule`, `SubscriptionScheduleCreateParams`, and `SubscriptionScheduleUpdateParams`.
  * Add support for `automatic_tax` on `Subscription`, `SubscriptionCreateParams`, `SubscriptionUpdateParams`; `Invoice`, `InvoiceCreateParams`, `InvoiceRetrieveUpcomingParams` and `InvoiceLineItemListUpcomingParams`; Checkout `Session` and Checkout `SessionCreateParams`.
  * Add support for `tax_behavior` to `Price`, `PriceCreateParams`, `PriceUpdateParams` and to the many Param objects that contain `price_data`:
      - `SubscriptionScheduleCreateParams` and `SubscriptionScheduleUpdateParams`, beneath `phases[].add_invoice_items[]` and `phases[].items[]`
      - `SubscriptionItemCreateParams` and `SubscriptionItemUpdateParams`, on the top-level
      - `SubscriptionCreateParams` create and `UpdateCreateParams`, beneath `items[]` and `add_invoice_items[]`
      - `InvoiceItemCreateParams` and `InvoiceItemUpdateParams`,  on the top-level
      - `InvoiceRetrieveUpcomingParams` and `InvoiceLineItemListUpcomingParams` beneath `subscription_items[]` and `invoice_items[]`.
      - Checkout `SessionCreateParams`, beneath `line_items[]`.
  * Add support for `customer_update` to Checkout `SessionCreateParams`.
  * Add support for `customer_details` to `InvoiceRetrieveUpcomingParams` and `InvoiceLineItemListUpcomingParams`.
  * Add support for `tax_type` to `TaxRate`, `TaxRateCreateParams`, and `TaxRateUpdateParams`.

## 8.151.0 - 2021-06-02
* [#1166](https://github.com/stripe/stripe-node/pull/1166) API Updates
  * Added support for `llc`, `free_zone_llc`, `free_zone_establishment` and `sole_establishment` to the `structure` enum on `Account.company`, `AccountCreateParams.company`, `AccountUpdateParams.company` and `TokenCreateParams.account.company`.

## 8.150.0 - 2021-05-26
* [#1163](https://github.com/stripe/stripe-node/pull/1163) API Updates
  * Added support for `documents` on `PersonUpdateParams`, `PersonCreateParams` and `TokenCreateParams.person`

## 8.149.0 - 2021-05-19
* [#1159](https://github.com/stripe/stripe-node/pull/1159) API Updates
  * Add support for Identity VerificationSupport and VerificationReport APIs
  * Update Typescript for `CouponCreateParams.duration` and `CouponCreateParams.products` to be optional.
* [#1158](https://github.com/stripe/stripe-node/pull/1158) API Updates
  * `AccountUpdateParams.business_profile.support_url` and `AccountCreatParams.business_profile.support_url` changed from `string` to `Stripe.Emptyable<string>`
  * `File.purpose` added new enum members: `finance_report_run`, `document_provider_identity_document`, and `sigma_scheduled_query`

## 8.148.0 - 2021-05-06
* [#1154](https://github.com/stripe/stripe-node/pull/1154) API Updates
  * Added support for `reference` on `Charge.payment_method_details.afterpay_clearpay`
  * Added support for `afterpay_clearpay` on `PaymentIntent.payment_method_options`.

## 8.147.0 - 2021-05-05
* [#1153](https://github.com/stripe/stripe-node/pull/1153) API Updates
  * Add support for `payment_intent` on `Radar.EarlyFraudWarning`

## 8.146.0 - 2021-05-04
* Add support for `card_present` on `PaymentIntent#confirm.payment_method_options`, `PaymentIntent#update.payment_method_options`, `PaymentIntent#create.payment_method_options` and `PaymentIntent.payment_method_options`
* `SubscriptionItem#create.payment_behavior`, `Subscription#update.payment_behavior`, `Subscription#create.payment_behavior` and `SubscriptionItem#update.payment_behavior` added new enum members: `default_incomplete`

## 8.145.0 - 2021-04-21
* [#1143](https://github.com/stripe/stripe-node/pull/1143) API Updates
  * Add support for `single_member_llc` as an enum member of `Account.company.structure` and `TokenCreateParams.account.company.structure` added new enum members:
  * Add support for `dhl` and `royal_mail` as enum members of `Issuing.Card.shipping.carrier`.
* [#1142](https://github.com/stripe/stripe-node/pull/1142) Improve type definition for for `AccountCreateParams.external_account`

## 8.144.0 - 2021-04-16
* [#1140](https://github.com/stripe/stripe-node/pull/1140) API Updates
  * Add support for `currency` on `Checkout.Session.PaymentMethodOptions.AcssDebit`

## 8.143.0 - 2021-04-12
* [#1139](https://github.com/stripe/stripe-node/pull/1139) API Updates
  * Add support for `acss_debit_payments` on `Account.capabilities`
  * Add support for `payment_method_options` on `Checkout.Session`
  * Add support for `acss_debit` on `SetupIntent.payment_method_options`, `SetupAttempt.payment_method_details`, `PaymentMethod`, `PaymentIntent.payment_method_options`,  `PaymentIntentUpdateParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_data`, `Mandate.payment_method_details` and `SetupIntent.payment_method_options`
  * Add support for `verify_with_microdeposits` on `PaymentIntent.next_action` and `SetupIntent.next_action`
  * Add support for `acss_debit` as member of the `type` enum on `PaymentMethod` and `PaymentIntent`, and inside `Checkout.SessionCreateParams.payment_method_types[]`.

## 8.142.0 - 2021-04-02
* [#1138](https://github.com/stripe/stripe-node/pull/1138) API Updates
  * Add support for `subscription_pause` on `BillingPortal.ConfigurationUpdateParams.features`, `BillingPortal.ConfigurationCreateParams.features` and `BillingPortal.Configuration.features`

## 8.141.0 - 2021-03-31
* [#1137](https://github.com/stripe/stripe-node/pull/1137) API Updates
  * Add support for `transfer_data` on `SessionCreateParams.subscription_data`
* [#1134](https://github.com/stripe/stripe-node/pull/1134) API Updates
  * Added support for `card_issuing` on `AccountUpdateParams.settings` and `Account.settings`

## 8.140.0 - 2021-03-25
* [#1133](https://github.com/stripe/stripe-node/pull/1133) API Updates
  * `Capability.requirements.errors[].code`, `Account.requirements.errors[].code` and `Person.requirements.errors[].code` added new enum members: `verification_missing_owners, verification_missing_executives and verification_requires_additional_memorandum_of_associations`
  * `SessionCreateParams.locale` and `CheckoutSession.locale` added new enum members: `th`

## 8.139.0 - 2021-03-22
* [#1132](https://github.com/stripe/stripe-node/pull/1132) API Updates
  * Added support for `shipping_rates` on `SessionCreateOptions`
  * Added support for `amount_shipping` on `Checkout.SessionTotalDetails`
* [#1131](https://github.com/stripe/stripe-node/pull/1131) types: export StripeRawError type

## 8.138.0 - 2021-03-10
* [#1124](https://github.com/stripe/stripe-node/pull/1124) API Updates
  * Added support for `BillingPortal.Configuration` API.
  * `Terminal.LocationUpdateParams.country` is now optional.

## 8.137.0 - 2021-02-17
* [#1123](https://github.com/stripe/stripe-node/pull/1123) API Updates
  * Add support for on_behalf_of to Invoice
  * Add support for enum member revolut on PaymentIntent.payment_method_data.ideal.bank, PaymentMethod.ideal.bank, Charge.payment_method_details.ideal.bank and SetupAttempt.payment_method_details.ideal.bank
  * Added support for enum member REVOLT21 on PaymentMethod.ideal.bic, Charge.payment_method_details.ideal.bic and SetupAttempt.payment_method_details.ideal.bic

## 8.136.0 - 2021-02-16
* [#1122](https://github.com/stripe/stripe-node/pull/1122) API Updates
  * Add support for `afterpay_clearpay` on `PaymentMethod`, `PaymentIntent.payment_method_data`, and `Charge.payment_method_details`.
  * Add support for `afterpay_clearpay` as a payment method type on `PaymentMethod`, `PaymentIntent` and `Checkout.Session`
  * Add support for `adjustable_quantity` on `SessionCreateParams.LineItem`
  * Add support for `bacs_debit`, `au_becs_debit` and `sepa_debit` on `SetupAttempt.payment_method_details`

## 8.135.0 - 2021-02-08
* [#1119](https://github.com/stripe/stripe-node/pull/1119) API Updates
  * Add support for `afterpay_clearpay_payments` on `Account.capabilities`
  * Add support for `payment_settings` on `Invoice`

## 8.134.0 - 2021-02-05
* [#1118](https://github.com/stripe/stripe-node/pull/1118) API Updates
  * `LineItem.amount_subtotal` and `LineItem.amount_total` changed from `nullable(integer)` to `integer`
  * Improve error message for `EphemeralKeys.create`

## 8.133.0 - 2021-02-03
* [#1115](https://github.com/stripe/stripe-node/pull/1115) API Updates
  * Added support for `nationality` on `Person`, `PersonUpdateParams`, `PersonCreateParams` and `TokenCreateParams.person`
  * Added `gb_vat` to `TaxId.type` enum.

## 8.132.0 - 2021-01-21
* [#1112](https://github.com/stripe/stripe-node/pull/1112) API Updates
  * `Issuing.Transaction.type` dropped enum members: 'dispute'
  * `LineItem.price` can now be null.

## 8.131.1 - 2021-01-15
* [#1104](https://github.com/stripe/stripe-node/pull/1104) Make request timeout errors eligible for retry

## 8.131.0 - 2021-01-14
* [#1108](https://github.com/stripe/stripe-node/pull/1108) Multiple API Changes
  * Added support for `dynamic_tax_rates` on `Checkout.SessionCreateParams.line_items`
  * Added support for `customer_details` on `Checkout.Session`
  * Added support for `type` on `Issuing.TransactionListParams`
  * Added support for `country` and `state` on `TaxRateUpdateParams`, `TaxRateCreateParams` and `TaxRate`
* [#1107](https://github.com/stripe/stripe-node/pull/1107) More consistent type definitions

## 8.130.0 - 2021-01-07
* [#1105](https://github.com/stripe/stripe-node/pull/1105) API Updates
  * Added support for `company_registration_verification`, `company_ministerial_decree`, `company_memorandum_of_association`, `company_license` and `company_tax_id_verification` on AccountUpdateParams.documents and AccountCreateParams.documents
* [#1100](https://github.com/stripe/stripe-node/pull/1100) implement/fix reverse iteration when iterating with ending_before
* [#1096](https://github.com/stripe/stripe-node/pull/1096) typo receieved -> received

## 8.129.0 - 2020-12-15
* [#1093](https://github.com/stripe/stripe-node/pull/1093) API Updates
  * Added support for card_present on SetupAttempt.payment_method_details

## 8.128.0 - 2020-12-10
* [#1088](https://github.com/stripe/stripe-node/pull/1088) Multiple API changes
  * Add newlines for consistency.
  * Prefix deleted references with `Stripe.` for consistency.
  * Add support for `bank` on `PaymentMethod[eps]`.
  * Add support for `tos_shown_and_accepted` to `payment_method_options[p24]` on `PaymentMethod`.

## 8.127.0 - 2020-12-03
* [#1084](https://github.com/stripe/stripe-node/pull/1084) Add support for `documents` on `Account` create and update
* [#1080](https://github.com/stripe/stripe-node/pull/1080) fixed promises example

## 8.126.0 - 2020-11-24
* [#1079](https://github.com/stripe/stripe-node/pull/1079) Multiple API changes
  * Add support for `account_tax_ids` on `Invoice`
  * Add support for `payment_method_options[sepa_debit]` on `PaymentIntent`

## 8.125.0 - 2020-11-20
* [#1075](https://github.com/stripe/stripe-node/pull/1075) Add support for `capabilities[grabpay_payments]` on `Account`

## 8.124.0 - 2020-11-19
* [#1074](https://github.com/stripe/stripe-node/pull/1074)
  * Add support for mandate_options on SetupIntent.payment_method_options.sepa_debit.
  * Add support for card_present and interact_present as values for PaymentMethod.type.
* [#1073](https://github.com/stripe/stripe-node/pull/1073) More consistent namespacing for shared types

## 8.123.0 - 2020-11-18
* [#1072](https://github.com/stripe/stripe-node/pull/1072) Add support for `grabpay` on `PaymentMethod`

## 8.122.1 - 2020-11-17
* Identical to 8.122.0. Published to resolve a release issue.

## 8.122.0 - 2020-11-17
* [#1070](https://github.com/stripe/stripe-node/pull/1070)
  * Add support for `sepa_debit` on `SetupIntent.PaymentMethodOptions`
  * `Invoice.tax_amounts` and `InvoiceLineItem.tax_rates` are no longer nullable
  * `Invoice.default_tax_rates` and `InvoiceLineItem.tax_amounts` are no longer nullable

## 8.121.0 - 2020-11-09
* [#1064](https://github.com/stripe/stripe-node/pull/1064) Add `invoice.finalization_error` as a `type` on `Event`
* [#1063](https://github.com/stripe/stripe-node/pull/1063) Multiple API changes
  * Add support for `last_finalization_error` on `Invoice`
  * Add support for deserializing Issuing `Dispute` as a `source` on `BalanceTransaction`
  * Add support for `payment_method_type` on `StripeError` used by other API resources

## 8.120.0 - 2020-11-04
* [#1061](https://github.com/stripe/stripe-node/pull/1061) Add support for `company[registration_number]` on `Account`

## 8.119.0 - 2020-10-27
* [#1056](https://github.com/stripe/stripe-node/pull/1056) Add  `payment_method_details[interac_present][preferred_locales]` on `Charge`
* [#1057](https://github.com/stripe/stripe-node/pull/1057) Standardize on CRULD order for method definitions
* [#1055](https://github.com/stripe/stripe-node/pull/1055) Added requirements to README

## 8.118.0 - 2020-10-26
* [#1053](https://github.com/stripe/stripe-node/pull/1053) Multiple API changes
  * Improving Typescript types for nullable parameters and introduced `Stripe.Emptyable` as a type
  * Add support for `payment_method_options[card][cvc_token]` on `PaymentIntent`
  * Add support for `cvc_update[cvc]` on `Token` creation
* [#1052](https://github.com/stripe/stripe-node/pull/1052) Add Stripe.Emptyable type definition

## 8.117.0 - 2020-10-23
* [#1050](https://github.com/stripe/stripe-node/pull/1050) Add support for passing `p24[bank]` for P24 on `PaymentIntent` or `PaymentMethod`

## 8.116.0 - 2020-10-22
* [#1049](https://github.com/stripe/stripe-node/pull/1049) Support passing `tax_rates` when creating invoice items through `Subscription` or `SubscriptionSchedule`

## 8.115.0 - 2020-10-20
* [#1048](https://github.com/stripe/stripe-node/pull/1048) Add support for `jp_rn` and `ru_kpp` as a `type` on `TaxId`
* [#1046](https://github.com/stripe/stripe-node/pull/1046) chore: replace recommended extension sublime babel with babel javascript

## 8.114.0 - 2020-10-15
* [#1045](https://github.com/stripe/stripe-node/pull/1045) Make `original_payout` and `reversed_by` not optional anymore

## 8.113.0 - 2020-10-14
* [#1044](https://github.com/stripe/stripe-node/pull/1044) Add support for `discounts` on `Session.create`

## 8.112.0 - 2020-10-14
* [#1042](https://github.com/stripe/stripe-node/pull/1042) Add support for the Payout Reverse API
* [#1041](https://github.com/stripe/stripe-node/pull/1041) Do not mutate user-supplied opts

## 8.111.0 - 2020-10-12
* [#1038](https://github.com/stripe/stripe-node/pull/1038) Add support for `description`, `iin` and `issuer` in `payment_method_details[card_present]` and `payment_method_details[interac_present]` on `Charge`

## 8.110.0 - 2020-10-12
* [#1035](https://github.com/stripe/stripe-node/pull/1035) Add support for `setup_intent.requires_action` on Event

## 8.109.0 - 2020-10-09
* [#1033](https://github.com/stripe/stripe-node/pull/1033) Add support for internal-only `description`, `iin`, and `issuer` for `card_present` and `interac_present` on `Charge.payment_method_details`

## 8.108.0 - 2020-10-08
* [#1028](https://github.com/stripe/stripe-node/pull/1028) Add support for `Bancontact/iDEAL/Sofort -> SEPA`
  * Add support for `generated_sepa_debit` and `generated_sepa_debit_mandate` on `Charge.payment_method_details.ideal`, `Charge.payment_method_details.bancontact` and `Charge.payment_method_details.sofort`
  * Add support for `generated_from` on `PaymentMethod.sepa_debit`
  * Add support for `ideal`, `bancontact` and `sofort` on `SetupAttempt.payment_method_details`

## 8.107.0 - 2020-10-02
* [#1026](https://github.com/stripe/stripe-node/pull/1026) Add support for `tos_acceptance[service_agreement]` on `Account`
* [#1025](https://github.com/stripe/stripe-node/pull/1025) Add support for new payments capabilities on `Account`

## 8.106.0 - 2020-09-29
* [#1024](https://github.com/stripe/stripe-node/pull/1024) Add support for the `SetupAttempt` resource and List API

## 8.105.0 - 2020-09-29
* [#1023](https://github.com/stripe/stripe-node/pull/1023) Add support for `contribution` in `reporting_category` on `ReportRun`

## 8.104.0 - 2020-09-28
* [#1022](https://github.com/stripe/stripe-node/pull/1022) Add support for `oxxo_payments` capability on `Account`

## 8.103.0 - 2020-09-28
* [#1021](https://github.com/stripe/stripe-node/pull/1021) Add VERSION constant to instantiated Stripe client.

## 8.102.0 - 2020-09-25
* [#1019](https://github.com/stripe/stripe-node/pull/1019) Add support for `oxxo` as a valid `type` on the List PaymentMethod API

## 8.101.0 - 2020-09-25
* [#1018](https://github.com/stripe/stripe-node/pull/1018) More idiomatic types

## 8.100.0 - 2020-09-24
* [#1016](https://github.com/stripe/stripe-node/pull/1016) Multiple API changes
  * Add support for OXXO on `PaymentMethod` and `PaymentIntent`
  * Add support for `contribution` on `BalanceTransaction`

## 8.99.0 - 2020-09-24
* [#1011](https://github.com/stripe/stripe-node/pull/1011) Add type definition for Stripe.StripeResource

## 8.98.0 - 2020-09-23
* [#1014](https://github.com/stripe/stripe-node/pull/1014) Multiple API changes
  * Add support for `issuing_dispute.closed` and `issuing_dispute.submitted` events
  * Add support for `instant_available` on `Balance`

## 8.97.0 - 2020-09-21
* [#1012](https://github.com/stripe/stripe-node/pull/1012) Multiple API changes
  * `metadata` is now always nullable on all resources
  * Add support for `amount_captured` on `Charge`
  * Add `checkout_session` on `Discount`

## 8.96.0 - 2020-09-13
* [#1003](https://github.com/stripe/stripe-node/pull/1003) Add support for `promotion_code.created` and `promotion_code.updated` on `Event`

## 8.95.0 - 2020-09-10
* [#999](https://github.com/stripe/stripe-node/pull/999) Add support for SEPA debit on Checkout

## 8.94.0 - 2020-09-09
* [#998](https://github.com/stripe/stripe-node/pull/998) Multiple API changes
  * Add support for `sofort` as a `type` on the List PaymentMethods API
  * Add back support for `invoice.payment_succeeded`

## 8.93.0 - 2020-09-08
* [#995](https://github.com/stripe/stripe-node/pull/995) Add support for Sofort on `PaymentMethod` and `PaymentIntent`

## 8.92.0 - 2020-09-02
* [#993](https://github.com/stripe/stripe-node/pull/993) Multiple API changes
  * Add support for the Issuing `Dispute` submit API
  * Add support for evidence details on Issuing `Dispute` creation, update and the resource.
  * Add `available_payout_methods` on `BankAccount`
  * Add `payment_status` on Checkout `Session`

## 8.91.0 - 2020-08-31
* [#992](https://github.com/stripe/stripe-node/pull/992) Add support for `payment_method.automatically_updated` on `WebhookEndpoint`

## 8.90.0 - 2020-08-28
* [#991](https://github.com/stripe/stripe-node/pull/991) Multiple API changes
* [#990](https://github.com/stripe/stripe-node/pull/990) Typescript: add 'lastResponse' to return types

## 8.89.0 - 2020-08-19
* [#988](https://github.com/stripe/stripe-node/pull/988) Multiple API changes
  * `tax_ids` on `Customer` can now be nullable
  * Added support for `expires_at` on `File`

## 8.88.0 - 2020-08-17
* [#987](https://github.com/stripe/stripe-node/pull/987) Add support for `amount_details` on Issuing `Authorization` and `Transaction`

## 8.87.0 - 2020-08-17
* [#984](https://github.com/stripe/stripe-node/pull/984) Multiple API changes
  * Add `alipay` on `type` for the List PaymentMethods API
  * Add `payment_intent.requires_action` as a new `type` on `Event`

## 8.86.0 - 2020-08-13
* [#981](https://github.com/stripe/stripe-node/pull/981) Add support for Alipay on Checkout `Session`

## 8.85.0 - 2020-08-13
* [#980](https://github.com/stripe/stripe-node/pull/980) [codegen] Multiple API Changes
  * Added support for bank_name on `Charge.payment_method_details.acss_debit`
  * `Issuing.dispute.balance_transactions` is now nullable.

## 8.84.0 - 2020-08-07
* [#975](https://github.com/stripe/stripe-node/pull/975) Add support for Alipay on `PaymentMethod` and `PaymentIntent`

## 8.83.0 - 2020-08-05
* [#973](https://github.com/stripe/stripe-node/pull/973) Multiple API changes
  * Add support for the `PromotionCode` resource and APIs
  * Add support for `allow_promotion_codes` on Checkout `Session`
  * Add support for `applies_to[products]` on `Coupon`
  * Add support for `promotion_code` on `Customer` and `Subscription`
  * Add support for `promotion_code` on `Discount`

## 8.82.0 - 2020-08-04
* [#972](https://github.com/stripe/stripe-node/pull/972) Multiple API changes
  * Add `zh-HK` and `zh-TW` as `locale` on Checkout `Session`
  * Add `payment_method_details[card_present][receipt][account_type]` on `Charge`

## 8.81.0 - 2020-07-30
* [#970](https://github.com/stripe/stripe-node/pull/970) Improve types for `customer` on `CreditNote` to support `DeletedCustomer`

## 8.80.0 - 2020-07-29
* [#969](https://github.com/stripe/stripe-node/pull/969) Multiple API changes
  * Add support for `id`, `invoice` and `invoice_item` on `Discount` and `DeletedDiscount`
  * Add support for `discount_amounts` on `CreditNote`, `CreditNoteLineItem`, `InvoiceLineItem`
  * Add support for `discounts` on `InvoiceItem`, `InvoiceLineItem` and `Invoice`
  * Add support for `total_discount_amounts` on `Invoice`
  * Make `customer` and `verification` on `TaxId` optional as the resource will be re-used for `Account` in the future.

## 8.79.0 - 2020-07-24
* [#967](https://github.com/stripe/stripe-node/pull/967) Multiple API changes
  * Make all properties from `Discount` available on `DeletedDiscount`
  * Add `capabilities[fpx_payments]` on `Account` create and update

## 8.78.0 - 2020-07-22
* [#965](https://github.com/stripe/stripe-node/pull/965) Add support for `cartes_bancaires_payments` as a `Capability`

## 8.77.0 - 2020-07-20
* [#963](https://github.com/stripe/stripe-node/pull/963) Add support for `capabilities` as a parameter on `Account` create and update

## 8.76.0 - 2020-07-17
* [#962](https://github.com/stripe/stripe-node/pull/962) Add support for `political_exposure` on `Person`

## 8.75.0 - 2020-07-16
* [#961](https://github.com/stripe/stripe-node/pull/961) Add support for `account_onboarding` and `account_update` as `type` on `AccountLink`

## 8.74.0 - 2020-07-16
* [#959](https://github.com/stripe/stripe-node/pull/959) Refactor remaining 'var' to 'let/const' usages
* [#960](https://github.com/stripe/stripe-node/pull/960) Use strict equality check for 'protocol' field for consistency
* [#952](https://github.com/stripe/stripe-node/pull/952) Add new fields to lastResponse: apiVersion, stripeAccount, idempotencyKey

## 8.73.0 - 2020-07-15
* [#958](https://github.com/stripe/stripe-node/pull/958) Multiple API changes
  * Add support for `en-GB`, `fr-CA` and `id` as `locale` on Checkout `Session`
  * Move `purpose` to an enum on `File`
* [#957](https://github.com/stripe/stripe-node/pull/957) Bump lodash from 4.17.15 to 4.17.19

## 8.72.0 - 2020-07-15
* [#956](https://github.com/stripe/stripe-node/pull/956) Add support for `amount_total`, `amount_subtotal`, `currency` and `total_details` on Checkout `Session`

## 8.71.0 - 2020-07-14
* [#955](https://github.com/stripe/stripe-node/pull/955) Change from string to enum value for `billing_address_collection` on Checkout `Session`

## 8.70.0 - 2020-07-13
* [#953](https://github.com/stripe/stripe-node/pull/953) Multiple API changes
  * Adds `es-419` as a `locale` to Checkout `Session`
  * Adds `billing_cycle_anchor` to `default_settings` and `phases` for `SubscriptionSchedule`

## 8.69.0 - 2020-07-06
* [#946](https://github.com/stripe/stripe-node/pull/946) Fix `assert_capabilities` type definition
* [#920](https://github.com/stripe/stripe-node/pull/920) Expose StripeResource on instance

## 8.68.0 - 2020-07-01
* [#940](https://github.com/stripe/stripe-node/pull/940) Document but discourage `protocol` config option
* [#933](https://github.com/stripe/stripe-node/pull/933) Fix tests for `Plan` and `Price` to not appear as amount can be updated.

## 8.67.0 - 2020-06-24
* [#929](https://github.com/stripe/stripe-node/pull/929) Add support for `invoice.paid` event

## 8.66.0 - 2020-06-23
* [#927](https://github.com/stripe/stripe-node/pull/927) Add support for `payment_method_data` on `PaymentIntent`

## 8.65.0 - 2020-06-23
* [#926](https://github.com/stripe/stripe-node/pull/926) Multiple API changes
  * Add `discounts` on `LineItem`
  * Add `document_provider_identity_document` as a `purpose` on `File`
  * Support nullable `metadata` on Issuing `Dispute`
  * Add `klarna[shipping_delay]` on `Source`

## 8.64.0 - 2020-06-18
* [#924](https://github.com/stripe/stripe-node/pull/924) Multiple API changes
  * Add support for `refresh_url` and `return_url` on `AccountLink`
  * Add support for `issuing_dispute.*` events

## 8.63.0 - 2020-06-11
* [#919](https://github.com/stripe/stripe-node/pull/919) Multiple API changes
  * Add `transaction` on Issuing `Dispute`
  * Add `payment_method_details[acss_debit][mandate]` on `Charge`

## 8.62.0 - 2020-06-10
* [#918](https://github.com/stripe/stripe-node/pull/918) Add support for Cartes Bancaires payments on `PaymentIntent` and `Pay…

## 8.61.0 - 2020-06-09
* [#917](https://github.com/stripe/stripe-node/pull/917) Add support for `id_npwp` and `my_frp` as `type` on `TaxId`

## 8.60.0 - 2020-06-03
* [#911](https://github.com/stripe/stripe-node/pull/911) Add support for `payment_intent_data[transfer_group]` on Checkout `Session`

## 8.59.0 - 2020-06-03
* [#910](https://github.com/stripe/stripe-node/pull/910) Add support for Bancontact, EPS, Giropay and P24 on Checkout `Session`

## 8.58.0 - 2020-06-03
* [#909](https://github.com/stripe/stripe-node/pull/909) Multiple API changes
  * Add `bacs_debit_payments` as a `Capability`
  * Add support for BACS Debit on Checkout `Session`
  * Add support for `checkout.session.async_payment_failed` and `checkout.session.async_payment_succeeded` as `type` on `Event`

## 8.57.0 - 2020-06-03
* [#908](https://github.com/stripe/stripe-node/pull/908) Multiple API changes
  * Add support for bg, cs, el, et, hu, lt, lv, mt, ro, ru, sk, sl and tr as new locale on Checkout `Session`
  * Add `settings[sepa_debit_payments][creditor_id]` on `Account`
  * Add support for Bancontact, EPS, Giropay and P24 on `PaymentMethod`, `PaymentIntent` and `SetupIntent`
  * Add support for `order_item[parent]` on `Source` for Klarna
* [#905](https://github.com/stripe/stripe-node/pull/905) Add support for BACS Debit as a `PaymentMethod`

## 8.56.0 - 2020-05-28
* [#904](https://github.com/stripe/stripe-node/pull/904) Multiple API changes
  * Add `payment_method_details[card][three_d_secure][authentication_flow]` on `Charge`
  * Add `line_items[][price_data][product_data]` on Checkout `Session` creation

## 8.55.0 - 2020-05-22
* [#899](https://github.com/stripe/stripe-node/pull/899) Multiple API changes
  * Add support for `ae_trn`, `cl_tin` and `sa_vat` as `type` on `TaxId`
  * Add `result` and `result_reason` inside `payment_method_details[card][three_d_secure]` on `Charge`

## 8.54.0 - 2020-05-20
* [#897](https://github.com/stripe/stripe-node/pull/897) Multiple API changes
  * Add `anticipation_repayment` as a `type` on `BalanceTransaction`
  * Add `interac_present` as a `type` on `PaymentMethod`
  * Add `payment_method_details[interac_present]` on `Charge`
  * Add `transfer_data` on `SubscriptionSchedule`

## 8.53.0 - 2020-05-18
* [#895](https://github.com/stripe/stripe-node/pull/895) Multiple API changes
  * Add support for `issuing_dispute` as a `type` on `BalanceTransaction`
  * Add `balance_transactions` as an array of `BalanceTransaction` on Issuing `Dispute`
  * Add `fingerprint` and `transaction_id` in `payment_method_details[alipay]` on `Charge`
  * Add `transfer_data[amount]` on `Invoice`
  * Add `transfer_data[amount_percent]` on `Subscription`
  * Add `price.created`, `price.deleted` and `price.updated` on `Event`

## 8.52.0 - 2020-05-13
* [#891](https://github.com/stripe/stripe-node/pull/891) Add support for `purchase_details` on Issuing `Transaction`

## 8.51.0 - 2020-05-11
* [#890](https://github.com/stripe/stripe-node/pull/890) Add support for the `LineItem` resource and APIs

## 8.50.0 - 2020-05-07
* [#888](https://github.com/stripe/stripe-node/pull/888) Multiple API changes
  * Remove parameters in `price_data[recurring]` across APIs as they were never supported
  * Move `payment_method_details[card][three_d_secure]` to a list of enum values on `Charge`
  * Add support for for `business_profile[support_adress]` on `Account` create and update

## 8.49.0 - 2020-05-01
* [#883](https://github.com/stripe/stripe-node/pull/883) Multiple API changes
  * Add `issuing` on `Balance`
  * Add `br_cnpj` and `br_cpf` as `type` on `TaxId`
  * Add `price` support in phases on `SubscriptionSchedule`
  * Make `quantity` nullable on `SubscriptionSchedule` for upcoming API version change

## 8.48.0 - 2020-04-29
* [#881](https://github.com/stripe/stripe-node/pull/881) Add support for the `Price` resource and APIs

## 8.47.1 - 2020-04-28
* [#880](https://github.com/stripe/stripe-node/pull/880) Make `display_items` on Checkout `Session` optional

## 8.47.0 - 2020-04-24
* [#876](https://github.com/stripe/stripe-node/pull/876) Add support for `jcb_payments` as a `Capability`

## 8.46.0 - 2020-04-22
* [#875](https://github.com/stripe/stripe-node/pull/875) Add support for `coupon` when for subscriptions on Checkout

## 8.45.0 - 2020-04-22
* [#874](https://github.com/stripe/stripe-node/pull/874) Add support for `billingPortal` namespace and `session` resource and APIs

## 8.44.0 - 2020-04-17
* [#873](https://github.com/stripe/stripe-node/pull/873) Multiple API changes
  * Add support for `cardholder_name` in `payment_method_details[card_present]` on `Charge`
  * Add new enum values for `company.structure` on `Account`

## 8.43.0 - 2020-04-16
* [#868](https://github.com/stripe/stripe-node/pull/868) Multiple API changes

## 8.42.0 - 2020-04-15
* [#867](https://github.com/stripe/stripe-node/pull/867) Clean up deprecated features in our Typescript definitions for Issuing and other resources

## 8.41.0 - 2020-04-14
* [#866](https://github.com/stripe/stripe-node/pull/866) Add support for `settings[branding][secondary_color]` on `Account`

## 8.40.0 - 2020-04-13
* [#865](https://github.com/stripe/stripe-node/pull/865) Add support for `description` on `WebhookEndpoint`

## 8.39.2 - 2020-04-10
* [#864](https://github.com/stripe/stripe-node/pull/864) Multiple API changes
  * Make `payment_intent` expandable on `Charge`
  * Add support for `sg_gst` as a value for `type` on `TaxId` and related APIs
  * Add `cancellation_reason` and new enum values for `replacement_reason` on Issuing `Card`

## 8.39.1 - 2020-04-08
* [#848](https://github.com/stripe/stripe-node/pull/848) Fix TS return type for autoPagingEach

## 8.39.0 - 2020-04-03
* [#859](https://github.com/stripe/stripe-node/pull/859) Add support for `calculatedStatementDescriptor` on `Charge`

## 8.38.0 - 2020-03-27

- [#853](https://github.com/stripe/stripe-node/pull/853) Improve StripeError.generate()
  - Add `doc_url` field to StripeError.
  - Expose `Stripe.errors.generate()` as a convenience for `Stripe.errors.StripeError.generate()`.
  - Fix several TS types related to StripeErrors.
  - Add types for `StripeInvalidGrantError`.
  - Add support for `authentication_error` and `rate_limit_error` in `.generate()`.

## 8.37.0 - 2020-03-26

- [#851](https://github.com/stripe/stripe-node/pull/851) Add support for `spending_controls` on Issuing `Card` and `Cardholder`

## 8.36.0 - 2020-03-25

- [#850](https://github.com/stripe/stripe-node/pull/850) Multiple API changes
  - Add support for `pt-BR` as a `locale` on Checkout `Session`
  - Add support for `company` as a `type` on Issuing `Cardholder`

## 8.35.0 - 2020-03-24

- [#849](https://github.com/stripe/stripe-node/pull/849) Add support for `pause_collection` on `Subscription`

## 8.34.0 - 2020-03-24

- [#847](https://github.com/stripe/stripe-node/pull/847) Add new capabilities for AU Becs Debit and tax reporting

## 8.33.0 - 2020-03-20

- [#842](https://github.com/stripe/stripe-node/pull/842) Multiple API changes for Issuing:
  - Add `amount`, `currency`, `merchant_amount` and `merchant_currency` on `Authorization`
  - Add `amount`, `currency`, `merchant_amount` and `merchant_currency` inside `request_history` on `Authorization`
  - Add `pending_request` on `Authorization`
  - Add `amount` when approving an `Authorization`
  - Add `replaced_by` on `Card`

## 8.32.0 - 2020-03-13

- [#836](https://github.com/stripe/stripe-node/pull/836) Multiple API changes for Issuing:
  - Rename `speed` to `service` on Issuing `Card`
  - Rename `wallet_provider` to `wallet` and `address_zip_check` to `address_postal_code_check` on Issuing `Authorization`
  - Mark `is_default` as deprecated on Issuing `Cardholder`

## 8.31.0 - 2020-03-12

- [#835](https://github.com/stripe/stripe-node/pull/835) Add support for `shipping` and `shipping_address_collection` on Checkout `Session`

## 8.30.0 - 2020-03-12

- [#834](https://github.com/stripe/stripe-node/pull/834) Add support for `ThreeDSecure` on Issuing `Authorization`

## 8.29.0 - 2020-03-05

- [#833](https://github.com/stripe/stripe-node/pull/833) Make metadata nullable in many endpoints

## 8.28.1 - 2020-03-05

- [#827](https://github.com/stripe/stripe-node/pull/827) Allow `null`/`undefined` to be passed for `options` arg.

## 8.28.0 - 2020-03-04

- [#830](https://github.com/stripe/stripe-node/pull/830) Add support for `metadata` on `WebhookEndpoint`

## 8.27.0 - 2020-03-04

- [#829](https://github.com/stripe/stripe-node/pull/829) Multiple API changes
  - Add support for `account` as a parameter on `Token` to create Account tokens
  - Add support for `verification_data.expiry_check` on Issuing `Authorization`
  - Add support for `incorrect_cvc` and `incorrect_expiry` as a value for `request_history.reason` on Issuing `Authorization`

## 8.26.0 - 2020-03-04

- [#828](https://github.com/stripe/stripe-node/pull/828) Multiple API changes
  - Add support for `errors` in `requirements` on `Account`, `Capability` and `Person`
  - Add support for `payment_intent.processing` as a new `type` on `Event`.

## 8.25.0 - 2020-03-03

⚠️ This is a breaking change for TypeScript users.

- [#826](https://github.com/stripe/stripe-node/pull/826) Multiple API changes:
  - ⚠️ Types are now for the API version `2020-03-02`. This is a breaking change for TypeScript users
  - Remove `uob_regional` as a value on `bank` for FPX as this is deprecated and was never used
  - Add support for `next_invoice_sequence` on `Customer`
  - Add support for `proration_behavior` on `SubscriptionItem` delete

## 8.24.1 - 2020-03-02

- [#824](https://github.com/stripe/stripe-node/pull/824) Update type for StripeError to extend Error

## 8.24.0 - 2020-02-28

- [#822](https://github.com/stripe/stripe-node/pull/822) Add `my_sst` as a valid value for `type` on `TaxId`

## 8.23.0 - 2020-02-27

- [#821](https://github.com/stripe/stripe-node/pull/821) Make `type` on `AccountLink` an enum

## 8.22.0 - 2020-02-24

- [#820](https://github.com/stripe/stripe-node/pull/820) Add new enum values in `reason` for Issuing `Dispute` creation

## 8.21.0 - 2020-02-24

- [#819](https://github.com/stripe/stripe-node/pull/819) Add support for listing Checkout `Session` and passing tax rate information

## 8.20.0 - 2020-02-21

- [#813](https://github.com/stripe/stripe-node/pull/813) Multiple API changes
  - Add support for `timezone` on `ReportRun`
  - Add support for `proration_behavior` on `SubscriptionSchedule`

## 8.19.0 - 2020-02-18

- [#807](https://github.com/stripe/stripe-node/pull/807) Change timeout default to constant 80000 instead Node default

## 8.18.0 - 2020-02-14

- [#802](https://github.com/stripe/stripe-node/pull/802) TS Fixes
  - Correctly type `Array<CustomField>`
  - More consistently describe nullable fields as `| null`, vs `| ''`.

## 8.17.0 - 2020-02-12

- [#804](https://github.com/stripe/stripe-node/pull/804) Add support for `payment_intent_data[transfer_data][amount]` on Checkout `Session`

## 8.16.0 - 2020-02-12

- [#803](https://github.com/stripe/stripe-node/pull/803) Multiple API changes reflect in Typescript definitions
  - Add `fpx` as a valid `source_type` on `Balance`, `Payout` and `Transfer`
  - Add `fpx` support on Checkout `Session`
  - Fields inside `verification_data` on Issuing `Authorization` are now enums
  - Support updating `payment_method_options` on `PaymentIntent` and `SetupIntent`

## 8.15.0 - 2020-02-10

- [#801](https://github.com/stripe/stripe-node/pull/801) Multiple API changes
  - Add support for new `type` values for `TaxId`.
  - Add support for `payment_intent_data[statement_descriptor_suffix]` on Checkout `Session`.

## 8.14.0 - 2020-02-04

- [#793](https://github.com/stripe/stripe-node/pull/793) Rename `sort_code` to `sender_sort_code` on `SourceTransaction` for BACS debit.

## 8.13.0 - 2020-02-03

- [#792](https://github.com/stripe/stripe-node/pull/792) Multiple API changes
  - Add new `purpose` for `File`: `additional_verification`
  - Add `error_on_requires_action` as a parameter for `PaymentIntent` creation and confirmation

## 8.12.0 - 2020-01-31

- [#790](https://github.com/stripe/stripe-node/pull/790) Add new type of `TaxId`

## 8.11.0 - 2020-01-30

- [#789](https://github.com/stripe/stripe-node/pull/789) Add support for `company.structure` on `Account` and other docs changes

## 8.10.0 - 2020-01-30

- [#788](https://github.com/stripe/stripe-node/pull/788) Make typescript param optional

## 8.9.0 - 2020-01-30

- [#787](https://github.com/stripe/stripe-node/pull/787) Add support for FPX as a `PaymentMethod`
- [#769](https://github.com/stripe/stripe-node/pull/769) Fix Typescript definition on `Token` creation for bank accounts

## 8.8.2 - 2020-01-30

- [#785](https://github.com/stripe/stripe-node/pull/785) Fix file uploads with nested params

## 8.8.1 - 2020-01-29

- [#784](https://github.com/stripe/stripe-node/pull/784) Allow @types/node 8.1

## 8.8.0 - 2020-01-28

- [#780](https://github.com/stripe/stripe-node/pull/780) Add new type for `TaxId` and `sender_account_name` on `SourceTransaction`

## 8.7.0 - 2020-01-24

- [#777](https://github.com/stripe/stripe-node/pull/777) Add support for `shipping[speed]` on Issuing `Card`

## 8.6.0 - 2020-01-23

- [#775](https://github.com/stripe/stripe-node/pull/775) Gracefully handle a missing `subprocess` module

## 8.5.0 - 2020-01-23

- [#776](https://github.com/stripe/stripe-node/pull/776) Add support for new `type` on `CustomerTaxId`

## 8.4.1 - 2020-01-21

- [#774](https://github.com/stripe/stripe-node/pull/774) Improve docstrings for many properties and parameters

## 8.4.0 - 2020-01-17

- [#771](https://github.com/stripe/stripe-node/pull/771) Add `metadata` on Checkout `Session` and remove deprecated features
- [#764](https://github.com/stripe/stripe-node/pull/764) Added typescript webhook example

## 8.3.0 - 2020-01-15

- [#767](https://github.com/stripe/stripe-node/pull/767) Adding missing events for pending updates on `Subscription`

## 8.2.0 - 2020-01-15

- [#765](https://github.com/stripe/stripe-node/pull/765) Add support for `pending_update` on `Subscription` to the Typescript definitions

## 8.1.0 - 2020-01-14

- [#763](https://github.com/stripe/stripe-node/pull/763) Add support for listing line items on a `CreditNote`
- [#762](https://github.com/stripe/stripe-node/pull/762) Improve docs for core fields such as `metadata` on Typescript definitions

## 8.0.1 - 2020-01-09

- [#757](https://github.com/stripe/stripe-node/pull/757) [bugfix] Add types dir to npmignore whitelist and stop warning when instantiating stripe with no args

## 8.0.0 - 2020-01-09

Major version release, adding TypeScript definitions and dropping support for Node 6. [The migration guide](https://github.com/stripe/stripe-node/wiki/Migration-guide-for-v8) contains a detailed list of backwards-incompatible changes with upgrade instructions.

Major pull requests included in this release (cf. [#742](https://github.com/stripe/stripe-node/pull/742)) (⚠️ = breaking changes):

- [#736](https://github.com/stripe/stripe-node/pull/736) Add TypeScript definitions
- [#744](https://github.com/stripe/stripe-node/pull/744) Remove deprecated resources and methods
- [#752](https://github.com/stripe/stripe-node/pull/752) Deprecate many library api's, unify others

## 7.63.1 - 2020-11-17
- Identical to 7.15.0.

## 7.63.0 - 2020-11-17
- Published in error. Do not use. This is identical to 8.122.0.

## 7.15.0 - 2019-12-30

- [#745](https://github.com/stripe/stripe-node/pull/745) Bump handlebars from 4.1.2 to 4.5.3
- [#737](https://github.com/stripe/stripe-node/pull/737) Fix flows test

## 7.14.0 - 2019-11-26

- [#732](https://github.com/stripe/stripe-node/pull/732) Add support for CreditNote preview

## 7.13.1 - 2019-11-22

- [#728](https://github.com/stripe/stripe-node/pull/728) Remove duplicate export

## 7.13.0 - 2019-11-06

- [#703](https://github.com/stripe/stripe-node/pull/703) New config object

## 7.12.0 - 2019-11-05

- [#724](https://github.com/stripe/stripe-node/pull/724) Add support for `Mandate`

## 7.11.0 - 2019-10-31

- [#719](https://github.com/stripe/stripe-node/pull/719) Define 'type' as a property on errors rather than a getter
- [#709](https://github.com/stripe/stripe-node/pull/709) README: imply context of stripe-node
- [#717](https://github.com/stripe/stripe-node/pull/717) Contributor Convenant

## 7.10.0 - 2019-10-08

- [#699](https://github.com/stripe/stripe-node/pull/699) Add request-specific fields from raw error to top level error

## 7.9.1 - 2019-09-17

- [#692](https://github.com/stripe/stripe-node/pull/692) Retry based on `Stripe-Should-Retry` and `Retry-After` headers

## 7.9.0 - 2019-09-09

- [#691](https://github.com/stripe/stripe-node/pull/691) GET and DELETE requests data: body->queryParams
- [#684](https://github.com/stripe/stripe-node/pull/684) Bump eslint-utils from 1.3.1 to 1.4.2

## 7.8.0 - 2019-08-12

- [#678](https://github.com/stripe/stripe-node/pull/678) Add `subscriptionItems.createUsageRecord()` method

## 7.7.0 - 2019-08-09

- [#675](https://github.com/stripe/stripe-node/pull/675) Remove subscription schedule revisions
  - This is technically a breaking change. We've chosen to release it as a minor vesion bump because the associated API is unused.

## 7.6.2 - 2019-08-09

- [#674](https://github.com/stripe/stripe-node/pull/674) Refactor requestDataProcessor for File out into its own file

## 7.6.1 - 2019-08-08

- [#673](https://github.com/stripe/stripe-node/pull/673) Add request start and end time to request and response events

## 7.6.0 - 2019-08-02

- [#661](https://github.com/stripe/stripe-node/pull/661) Refactor errors to ES6 classes.
- [#672](https://github.com/stripe/stripe-node/pull/672) Refinements to error ES6 classes.

## 7.5.5 - 2019-08-02

- [#665](https://github.com/stripe/stripe-node/pull/665) Remove `lodash.isplainobject`.

## 7.5.4 - 2019-08-01

- [#671](https://github.com/stripe/stripe-node/pull/671) Include a prefix in generated idempotency keys and remove uuid dependency.

## 7.5.3 - 2019-07-31

- [#667](https://github.com/stripe/stripe-node/pull/667) Refactor request headers, allowing any header to be overridden.

## 7.5.2 - 2019-07-30

- [#664](https://github.com/stripe/stripe-node/pull/664) Expose and use `once`

## 7.5.1 - 2019-07-30

- [#662](https://github.com/stripe/stripe-node/pull/662) Remove `safe-buffer` dependency
- [#666](https://github.com/stripe/stripe-node/pull/666) Bump lodash from 4.17.11 to 4.17.15
- [#668](https://github.com/stripe/stripe-node/pull/668) Move Balance History to /v1/balance_transactions

## 7.5.0 - 2019-07-24

- [#660](https://github.com/stripe/stripe-node/pull/660) Interpret any string in args as API Key instead of a regex
  - ⚠️ Careful: passing strings which are not API Keys as as the final argument to a request previously would have ignored those strings, and would now result in the request failing with an authentication error.
  - ⚠️ Careful: The private api `utils.isAuthKey` was removed.
- [#658](https://github.com/stripe/stripe-node/pull/658) Update README retry code sample to use two retries
- [#653](https://github.com/stripe/stripe-node/pull/653) Reorder customer methods

## 7.4.0 - 2019-06-27

- [#652](https://github.com/stripe/stripe-node/pull/652) Add support for the `SetupIntent` resource and APIs

## 7.3.0 - 2019-06-24

- [#649](https://github.com/stripe/stripe-node/pull/649) Enable request latency telemetry by default

## 7.2.0 - 2019-06-17

- [#608](https://github.com/stripe/stripe-node/pull/608) Add support for `CustomerBalanceTransaction` resource and APIs

## 7.1.0 - 2019-05-23

- [#632](https://github.com/stripe/stripe-node/pull/632) Add support for `radar.early_fraud_warning` resource

## 7.0.1 - 2019-05-22

- [#631](https://github.com/stripe/stripe-node/pull/631) Make autopagination functions work for `listLineItems` and `listUpcomingLineItems`

## 7.0.0 - 2019-05-14

Major version release. [The migration guide](https://github.com/stripe/stripe-node/wiki/Migration-guide-for-v7) contains a detailed list of backwards-incompatible changes with upgrade instructions.

Pull requests included in this release (cf. [#606](https://github.com/stripe/stripe-node/pull/606)) (⚠️ = breaking changes):

- ⚠️ Drop support for Node 4, 5 and 7 ([#606](https://github.com/stripe/stripe-node/pull/606))
- Prettier formatting ([#604](https://github.com/stripe/stripe-node/pull/604))
- Alphabetize “basic” methods ([#610](https://github.com/stripe/stripe-node/pull/610))
- Use `id` for single positional arguments ([#611](https://github.com/stripe/stripe-node/pull/611))
- Modernize ES5 to ES6 with lebab ([#607](https://github.com/stripe/stripe-node/pull/607))
- ⚠️ Remove deprecated methods ([#613](https://github.com/stripe/stripe-node/pull/613))
- Add VSCode and EditorConfig files ([#620](https://github.com/stripe/stripe-node/pull/620))
- ⚠️ Drop support for Node 9 and bump dependencies to latest versions ([#614](https://github.com/stripe/stripe-node/pull/614))
- Misc. manual formatting ([#623](https://github.com/stripe/stripe-node/pull/623))
- ⚠️ Remove legacy parameter support in `invoices.retrieveUpcoming()` ([#621](https://github.com/stripe/stripe-node/pull/621))
- ⚠️ Remove curried urlData and manually specified urlParams ([#625](https://github.com/stripe/stripe-node/pull/625))
- Extract resources file ([#626](https://github.com/stripe/stripe-node/pull/626))

## 6.36.0 - 2019-05-14

- [#622](https://github.com/stripe/stripe-node/pull/622) Add support for the `Capability` resource and APIs

## 6.35.0 - 2019-05-14

- [#627](https://github.com/stripe/stripe-node/pull/627) Add `listLineItems` and `listUpcomingLineItems` methods to `Invoice`

## 6.34.0 - 2019-05-08

- [#619](https://github.com/stripe/stripe-node/pull/619) Move `generateTestHeaderString` to stripe.webhooks (fixes a bug in 6.33.0)

## 6.33.0 - 2019-05-08

**Important**: This version is non-functional and has been yanked in favor of 6.32.0.

- [#609](https://github.com/stripe/stripe-node/pull/609) Add `generateWebhookHeaderString` to make it easier to mock webhook events

## 6.32.0 - 2019-05-07

- [#612](https://github.com/stripe/stripe-node/pull/612) Add `balanceTransactions` resource

## 6.31.2 - 2019-05-03

- [#602](https://github.com/stripe/stripe-node/pull/602) Handle errors from the oauth/token endpoint

## 6.31.1 - 2019-04-26

- [#600](https://github.com/stripe/stripe-node/pull/600) Fix encoding of nested parameters in multipart requests

## 6.31.0 - 2019-04-24

- [#588](https://github.com/stripe/stripe-node/pull/588) Add support for the `TaxRate` resource and APIs

## 6.30.0 - 2019-04-22

- [#589](https://github.com/stripe/stripe-node/pull/589) Add support for the `TaxId` resource and APIs
- [#593](https://github.com/stripe/stripe-node/pull/593) `retrieveUpcoming` on `Invoice` can now take one hash as parameter instead of requiring a customer id.

## 6.29.0 - 2019-04-18

- [#585](https://github.com/stripe/stripe-node/pull/585) Add support for the `CreditNote` resource and APIs

## 6.28.0 - 2019-03-18

- [#570](https://github.com/stripe/stripe-node/pull/570) Add support for the `PaymentMethod` resource and APIs
- [#578](https://github.com/stripe/stripe-node/pull/578) Add support for retrieving a Checkout `Session`

## 6.27.0 - 2019-03-15

- [#581](https://github.com/stripe/stripe-node/pull/581) Add support for deleting Terminal `Location` and `Reader`

## 6.26.1 - 2019-03-14

- [#580](https://github.com/stripe/stripe-node/pull/580) Fix support for HTTPS proxies

## 6.26.0 - 2019-03-11

- [#574](https://github.com/stripe/stripe-node/pull/574) Encode `Date`s as Unix timestamps

## 6.25.1 - 2019-02-14

- [#565](https://github.com/stripe/stripe-node/pull/565) Always encode arrays as integer-indexed hashes

## 6.25.0 - 2019-02-13

- [#559](https://github.com/stripe/stripe-node/pull/559) Add `stripe.setMaxNetworkRetries(n)` for automatic network retries

## 6.24.0 - 2019-02-12

- [#562](https://github.com/stripe/stripe-node/pull/562) Add support for `SubscriptionSchedule` and `SubscriptionScheduleRevision`

## 6.23.1 - 2019-02-04

- [#560](https://github.com/stripe/stripe-node/pull/560) Enable persistent connections by default

## 6.23.0 - 2019-01-30

- [#557](https://github.com/stripe/stripe-node/pull/557) Add configurable telemetry to gather information on client-side request latency

## 6.22.0 - 2019-01-25

- [#555](https://github.com/stripe/stripe-node/pull/555) Add support for OAuth methods

## 6.21.0 - 2019-01-23

- [#551](https://github.com/stripe/stripe-node/pull/551) Rename `CheckoutSession` to `Session` and move it under the `checkout` namespace. This is a breaking change, but we've reached out to affected merchants and all new merchants would use the new approach.

## 6.20.1 - 2019-01-17

- [#552](https://github.com/stripe/stripe-node/pull/552) Fix `Buffer` deprecation warnings

## 6.20.0 - 2018-12-21

- [#539](https://github.com/stripe/stripe-node/pull/539) Add support for the `CheckoutSession` resource

## 6.19.0 - 2018-12-10

- [#535](https://github.com/stripe/stripe-node/pull/535) Add support for account links

## 6.18.1 - 2018-12-07

- [#534](https://github.com/stripe/stripe-node/pull/534) Fix iterating on `files.list` method

## 6.18.0 - 2018-12-06

- [#530](https://github.com/stripe/stripe-node/pull/530) Export errors on root Stripe object

## 6.17.0 - 2018-11-28

- [#527](https://github.com/stripe/stripe-node/pull/527) Add support for the `Review` APIs

## 6.16.0 - 2018-11-27

- [#515](https://github.com/stripe/stripe-node/pull/515) Add support for `ValueLists` and `ValueListItems` for Radar

## 6.15.2 - 2018-11-26

- [#526](https://github.com/stripe/stripe-node/pull/526) Fixes an accidental mutation of input in rare cases

## 6.15.1 - 2018-11-23

- [#523](https://github.com/stripe/stripe-node/pull/523) Handle `Buffer` instances in `Webhook.constructEvent`

## 6.15.0 - 2018-11-12

- [#474](https://github.com/stripe/stripe-node/pull/474) Add support for `partner_id` in `setAppInfo`

## 6.14.0 - 2018-11-09

- [#509](https://github.com/stripe/stripe-node/pull/509) Add support for new `Invoice` methods

## 6.13.0 - 2018-10-30

- [#507](https://github.com/stripe/stripe-node/pull/507) Add support for persons
- [#510](https://github.com/stripe/stripe-node/pull/510) Add support for webhook endpoints

## 6.12.1 - 2018-09-24

- [#502](https://github.com/stripe/stripe-node/pull/502) Fix test suite

## 6.12.0 - 2018-09-24

- [#498](https://github.com/stripe/stripe-node/pull/498) Add support for Stripe Terminal
- [#500](https://github.com/stripe/stripe-node/pull/500) Rename `FileUploads` to `Files`. For backwards compatibility, `Files` is aliased to `FileUploads`. `FileUploads` is deprecated and will be removed from the next major version.

## 6.11.0 - 2018-09-18

- [#496](https://github.com/stripe/stripe-node/pull/496) Add auto-pagination

## 6.10.0 - 2018-09-05

- [#491](https://github.com/stripe/stripe-node/pull/491) Add support for usage record summaries

## 6.9.0 - 2018-09-05

- [#493](https://github.com/stripe/stripe-node/pull/493) Add support for reporting resources

## 6.8.0 - 2018-08-27

- [#488](https://github.com/stripe/stripe-node/pull/488) Remove support for `BitcoinReceivers` write-actions

## 6.7.0 - 2018-08-03

- [#485](https://github.com/stripe/stripe-node/pull/485) Add support for `cancel` on topups

## 6.6.0 - 2018-08-02

- [#483](https://github.com/stripe/stripe-node/pull/483) Add support for file links

## 6.5.0 - 2018-07-28

- [#482](https://github.com/stripe/stripe-node/pull/482) Add support for Sigma scheduled query runs

## 6.4.0 - 2018-07-26

- [#481](https://github.com/stripe/stripe-node/pull/481) Add support for Stripe Issuing

## 6.3.0 - 2018-07-18

- [#471](https://github.com/stripe/stripe-node/pull/471) Add support for streams in file uploads

## 6.2.1 - 2018-07-03

- [#475](https://github.com/stripe/stripe-node/pull/475) Fixes array encoding of subscription items for the upcoming invoices endpoint.

## 6.2.0 - 2018-06-28

- [#473](https://github.com/stripe/stripe-node/pull/473) Add support for payment intents

## 6.1.1 - 2018-06-07

- [#469](https://github.com/stripe/stripe-node/pull/469) Add `.npmignore` to create a lighter package (minus examples and tests)

## 6.1.0 - 2018-06-01

- [#465](https://github.com/stripe/stripe-node/pull/465) Warn when unknown options are passed to functions

## 6.0.0 - 2018-05-14

- [#453](https://github.com/stripe/stripe-node/pull/453) Re-implement usage record's `create` so that it correctly passes all arguments (this is a very minor breaking change)

## 5.10.0 - 2018-05-14

- [#459](https://github.com/stripe/stripe-node/pull/459) Export error types on `stripe.errors` so that errors can be matched with `instanceof` instead of comparing the strings generated by `type`

## 5.9.0 - 2018-05-09

- [#456](https://github.com/stripe/stripe-node/pull/456) Add support for issuer fraud records

## 5.8.0 - 2018-04-04

- [#444](https://github.com/stripe/stripe-node/pull/444) Introduce flexible billing primitives for subscriptions

## 5.7.0 - 2018-04-02

- [#441](https://github.com/stripe/stripe-node/pull/441) Write directly to a connection that's known to be still open

## 5.6.1 - 2018-03-25

- [#437](https://github.com/stripe/stripe-node/pull/437) Fix error message when passing invalid parameters to some API methods

## 5.6.0 - 2018-03-24

- [#439](https://github.com/stripe/stripe-node/pull/439) Drop Bluebird dependency and use native ES6 promises

## 5.5.0 - 2018-02-21

- [#425](https://github.com/stripe/stripe-node/pull/425) Add support for topups

## 5.4.0 - 2017-12-05

- [#412](https://github.com/stripe/stripe-node/pull/412) Add `StripeIdempotencyError` type for new kind of stripe error

## 5.3.0 - 2017-10-31

- [#405](https://github.com/stripe/stripe-node/pull/405) Support for exchange rates APIs

## 5.2.0 - 2017-10-26

- [#404](https://github.com/stripe/stripe-node/pull/404) Support for listing source transactions

## 5.1.1 - 2017-10-04

- [#394](https://github.com/stripe/stripe-node/pull/394) Fix improper warning for requests that have options but no parameters

## 5.1.0 - 2017-09-25

- Add check for when options are accidentally included in an arguments object
- Use safe-buffer package instead of building our own code
- Remove dependency on object-assign package
- Bump required versions of bluebird and qs

## 5.0.0 - 2017-09-12

- Drop support for Node 0.x (minimum required version is now >= 4)

## 4.25.0 - 2017-09-05

- Switch to Bearer token authentication on API requests

## 4.24.1 - 2017-08-25

- Specify UTF-8 encoding when verifying HMAC-SHA256 payloads

## 4.24.0 - 2017-08-10

- Support informational events with `Stripe.on` (see README for details)

## 4.23.2 - 2017-08-03

- Handle `Buffer.from` incompatibility for Node versions prior to 4.5.x

## 4.23.1 - 2017-06-24

- Properly encode subscription items when retrieving upcoming invoice

## 4.23.0 - 2017-06-20

- Add support for ephemeral keys

## 4.22.1 - 2017-06-20

- Fix usage of hasOwnProperty in utils

## 4.22.0 - 2017-05-25

- Make response headers accessible on error objects

## 4.21.0 - 2017-05-25

- Add support for account login links

## 4.20.0 - 2017-05-24

- Add `stripe.setAppInfo` for plugin authors to register app information

## 4.19.1 - 2017-05-18

- Tweak class initialization for compatibility with divergent JS engines

## 4.19.0 - 2017-05-11

- Support for checking webhook signatures

## 4.18.0 - 2017-04-12

- Reject ID parameters that don't look like strings

## 4.17.1 - 2017-04-05

- Fix paths in error messages on bad arguments

## 4.17.0 - 2017-03-31

- Add support for payouts

## 4.16.1 - 2017-03-30

- Fix bad reference to `requestId` when initializing errors

## 4.16.0 - 2017-03-22

- Make `requestId` available on resource `lastResponse` objects

## 4.15.1 - 2017-03-08

- Update required version of "qs" dependency to 6.0.4+

## 4.15.0 - 2017-01-18

- Add support for updating sources

## 4.14.0 - 2016-12-01

- Add support for verifying sources

## 4.13.0 - 2016-11-21

- Add retrieve method for 3-D Secure resources

## 4.12.0 - 2016-10-18

- Support for 403 status codes (permission denied)

## 4.11.0 - 2016-09-16

- Add support for Apple Pay domains

## 4.10.0 - 2016-08-29

- Refactor deprecated uses of Bluebird's `Promise.defer`

## 4.9.1 - 2016-08-22

- URI-encode unames for Stripe user agents so we don't fail on special characters

## 4.9.0 - 2016-07-19

- Add `Source` model for generic payment sources support (experimental)

## 4.8.0 - 2016-07-14

- Add `ThreeDSecure` model for 3-D secure payments

## 4.7.0 - 2016-05-25

- Add support for returning Relay orders

## 4.6.0 - 2016-05-04

- Add `update`, `create`, `retrieve`, `list` and `del` methods to `stripe.subscriptions`

## 4.5.0 - 2016-03-15

- Add `reject` on `Account` to support the new API feature

## 4.4.0 - 2016-02-08

- Add `CountrySpec` model for looking up country payment information

## 4.3.0 - 2016-01-26

- Add support for deleting Relay SKUs and products

## 4.2.0 - 2016-01-13

- Add `lastResponse` property on `StripeResource` objects
- Return usage errors of `stripeMethod` through callback instead of raising
- Use latest year for expiry years in tests to avoid new year problems

## 4.1.0 - 2015-12-02

- Add a verification routine for external accounts

## 4.0.0 - 2015-09-17

- Remove ability for API keys to be passed as 1st param to acct.retrieve
- Rename StripeInvalidRequest to StripeInvalidRequestError

## 3.9.0 - 2015-09-14

- Add Relay resources: Products, SKUs, and Orders

## 3.8.0 - 2015-09-11

- Added rate limiting responses

## 3.7.1 - 2015-08-17

- Added refund object with listing, retrieval, updating, and creation.

## 3.7.0 - 2015-08-03

- Added managed account deletion
- Added dispute listing and retrieval

## 3.6.0 - 2015-07-07

- Added request IDs to all Stripe errors

## 3.5.2 - 2015-06-30

- [BUGFIX] Fixed issue with uploading binary files (Gabriel Chagas Marques)

## 3.5.1 - 2015-06-30

- [BUGFIX] Fixed issue with passing arrays of objects

## 3.5.0 - 2015-06-11

- Added support for optional parameters when retrieving an upcoming invoice
  (Matthew Arkin)

## 3.4.0 - 2015-06-10

- Added support for bank accounts and debit cards in managed accounts

## 3.3.4 - 2015-04-02

- Remove SSL revocation tests and check

## 3.3.3 - 2015-03-31

- [BUGFIX] Fix support for both stripe.account and stripe.accounts

## 3.3.2 - 2015-02-24

- Support transfer reversals.

## 3.3.1 - 2015-02-21

- [BUGFIX] Fix passing in only a callback to the Account resource. (Matthew Arkin)

## 3.3.0 - 2015-02-19

- Support BitcoinReceiver update & delete actions
- Add methods for manipulating customer sources as per 2015-02-18 API version
- The Account resource will now take an account ID. However, legacy use of the resource (without an account ID) will still work.

## 3.2.0 - 2015-02-05

- [BUGFIX] Fix incorrect failing tests for headers support
- Update all dependencies (remove mocha-as-promised)
- Switch to bluebird for promises

## 3.1.0 - 2015-01-21

- Support making bitcoin charges through BitcoinReceiver source object

## 3.0.3 - 2014-12-23

- Adding file uploads as a resource.

## 3.0.2 - 2014-11-26

- [BUGFIX] Fix issue where multiple expand params were not getting passed through (#130)

## 3.0.1 - 2014-11-26

- (Version skipped due to npm mishap)

## 3.0.0 - 2014-11-18

- [BUGFIX] Fix `stringifyRequestData` to deal with nested objs correctly
- Bump MAJOR as we're no longer supporting Node 0.8

## 2.9.0 - 2014-11-12

- Allow setting of HTTP agent (proxy) (issue #124)
- Add stack traces to all Stripe Errors

## 2.8.0 - 2014-07-26

- Make application fee refunds a list instead of array

## 2.7.4 - 2014-07-17

- [BUGFIX] Fix lack of subscription param in `invoices#retrieveUpcoming` method
- Add support for an `optional!` annotation on `urlParams`

## 2.7.3 - 2014-06-17

- Add metadata to disputes and refunds

## 2.6.3 - 2014-05-21

- Support cards for recipients.

## 2.5.3 - 2014-05-16

- Allow the `update` method on coupons for metadata changes

## 2.5.2 - 2014-04-28

- [BUGFIX] Fix when.js version string in package.json to support older npm versions

## 2.5.1 - 2014-04-25

- [BUGFIX] Fix revoked-ssl check
- Upgrade when.js to 3.1.0

## 2.5.0 - 2014-04-09

- Ensure we prevent requests using revoked SSL certs

## 2.4.5 - 2014-04-08

- Add better checks for incorrect arguments (throw exceptions accordingly).
- Validate the Connect Auth key, if passed

## 2.4.4 - 2014-03-27

- [BUGFIX] Fix URL encoding issue (not encoding interpolated URL params, see issue #93)

## 2.4.3 - 2014-03-27

- Add more debug information to the case of a failed `JSON.parse()`

## 2.4.2 - 2014-02-20

- Add binding for `transfers/{tr_id}/transactions` endpoint

## 2.4.1 - 2014-02-07

- Ensure raw error object is accessible on the generated StripeError

## 2.4.0 - 2014-01-29

- Support multiple subscriptions per customer

## 2.3.4 - 2014-01-11

- [BUGFIX] Fix #76, pass latest as version to api & fix constructor arg signature

## 2.3.3 - 2014-01-10

- Document cancelSubscription method params and add specs for `at_period_end`

## 2.3.2 - 2013-12-02

- Add application fees API

## 2.2.2 - 2013-11-20

- [BUGFIX] Fix incorrect deleteDiscount method & related spec(s)

### 2.2.1 - 2013-12-01

- [BUGFIX] Fix user-agent header issue (see issue #75)

## 2.2.0 - 2013-11-09

- Add support for setTimeout
- Add specs for invoice-item listing/querying via timestamp

## 2.1.0 - 2013-11-07

- Support single key/value setting on setMetadata method
- [BUGFIX] Fix Windows url-path issue
- Add missing stripe.charges.update method
- Support setting auth_token per request (useful in Connect)
- Remove global 'resources' variable

## 2.0.0 - 2013-10-18

- API overhaul and refactor, including addition of promises.
- Release of version 2.0.0

## 1.3.0 - 2013-01-30

- Requests return Javascript Errors (Guillaume Flandre)

## 1.2.0 - 2012-08-03

- Added events API (Jonathan Hollinger)
- Added plans update API (Pavan Kumar Sunkara)
- Various test fixes, node 0.8.x tweaks (Jan Lehnardt)

## 1.1.0 - 2012-02-01

- Add Coupons API (Ryan)
- Pass a more robust error object to the callback (Ryan)
- Fix duplicate callbacks from some functions when called incorrectly (bug #24, reported by Kishore Nallan)

## 1.0.0 - 2011-12-06

- Add APIs and tests for Plans and "Invoice Items"
  (both changes by Ryan Ettipio)

## 0.0.5 - 2011-11-26

- Add Subscription API (John Ku, #3)
- Add Invoices API (Chris Winn, #6)
- [BUGFIX] Fix a bug where callback could be called twice, if the callback() threw an error itself (Peteris Krumins)
- [BUGFIX] Fix bug in tokens.retrieve API (Xavi)
- Change documentation links (Stripe changed their URL structure)
- Make tests pass again (error in callback is null instead of 0 if all is well)
- Amount in stripe.charges.refund is optional (Branko Vukelic)
- Various documentation fixes (Xavi)
- Only require node 0.4.0

## 0.0.3 - 2011-10-05

- Add Charges API (issue #1, brackishlake)
- Add customers.list API

## 0.0.2 - 2011-09-28

- Initial release with customers and tokens APIs
