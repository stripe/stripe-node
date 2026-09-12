---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2088
is_stripe_api_change: true
released_in_version: 15.7.0
---

* Add support for `fee_source` on `ApplicationFee`
* Add support for `net_available` on `Balance.instant_available[]`
* Add support for `preferred_locales` on `Charge.payment_method_details.card_present`, `ConfirmationToken.payment_method_preview.card_present`, and `PaymentMethod.card_present`
* Add support for `klarna` on `Dispute.payment_method_details`
* Add support for new value `klarna` on enum `Dispute.payment_method_details.type`
* Add support for `archived` and `lookup_key` on `Entitlements.FeatureListParams`
* Change `FinancialConnections.SessionCreateParams.filters.countries` to be optional
* Add support for `no_valid_authorization` on `Issuing.Dispute.evidence`, `Issuing.DisputeCreateParams.evidence`, and `Issuing.DisputeUpdateParams.evidence`
* Add support for new value `no_valid_authorization` on enums `Issuing.Dispute.evidence.reason`, `Issuing.DisputeCreateParams.evidence.reason`, and `Issuing.DisputeUpdateParams.evidence.reason`
* Add support for `loss_reason` on `Issuing.Dispute`
* Add support for `routing` on `PaymentIntent.payment_method_options.card_present`, `PaymentIntentConfirmParams.payment_method_options.card_present`, `PaymentIntentCreateParams.payment_method_options.card_present`, and `PaymentIntentUpdateParams.payment_method_options.card_present`
* Add support for `application_fee_amount` and `application_fee` on `Payout`
* Add support for `stripe_s700` on `Terminal.ConfigurationCreateParams`, `Terminal.ConfigurationUpdateParams`, and `Terminal.Configuration`
* Change `Treasury.OutboundPayment.tracking_details` and `Treasury.OutboundTransfer.tracking_details` to be required
