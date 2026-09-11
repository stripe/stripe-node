---
title: Update generated code for private-preview
pr_link: https://github.com/stripe/stripe-node/pull/2839
is_stripe_api_change: true
released_in_version: 22.7.0-alpha.3
---

* Add support for `customer_tax_exemption` on `Tax.Calculation.shipping_cost.tax_breakdown[]`, `Tax.CalculationLineItem.tax_breakdown[]`, and `Tax.Transaction.shipping_cost.tax_breakdown[]`
* Add support for new value `data_share_only` on enums `Charge.payment_method_details.card.three_d_secure.result`, `PaymentAttemptRecord.payment_method_details.card.three_d_secure.result`, `PaymentRecord.payment_method_details.card.three_d_secure.result`, and `SetupAttempt.payment_method_details.card.three_d_secure.result`
* Add support for `backdate_start_date` on `Checkout.Session.items[].subscription` and `Checkout.SessionCreateParams.items[].subscription`
* Add support for `signals` on `Identity.VerificationReport`
* Add support for `network_response_code` on `Issuing.Authorization.request_history[]`
* Add support for `unit_cost_precision` on `PaymentIntentAmountDetailsLineItem`, `PaymentIntentCaptureParams.amount_details.line_items[]`, `PaymentIntentConfirmParams.amount_details.line_items[]`, `PaymentIntentCreateParams.amount_details.line_items[]`, `PaymentIntentDecrementAuthorizationParams.amount_details.line_items[]`, `PaymentIntentIncrementAuthorizationParams.amount_details.line_items[]`, and `PaymentIntentUpdateParams.amount_details.line_items[]`
* Change `PaymentIntent.payment_record` to be required
* Add support for `active` on `ProductCatalog.TrialOfferListParams`
* Change `Subscription.trial_settings.end_behavior.billing_cycle_anchor` to be required
* Add support for new value `rtp` on enum `Treasury.FinancialAccount.financial_addresses[].supported_networks`
* Add support for new value `blik_recurring_payments` on enums `V2.Core.Account.future_requirements.entries[].impact.restricts_capabilities[].capability` and `V2.Core.Account.requirements.entries[].impact.restricts_capabilities[].capability`
