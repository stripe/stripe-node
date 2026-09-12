---
title: Update generated code for beta
pr_url: https://github.com/stripe/stripe-node/pull/1989
is_stripe_api_change: true
released_in_version: 14.13.0-beta.1
---

* Add support for `amount` on `ChargeCaptureParams.payment_details.flight.segments[]`, `ChargeUpdateParams.payment_details.flight.segments[]`, `PaymentIntentCaptureParams.payment_details.flight.segments[]`, `PaymentIntentConfirmParams.payment_details.flight.segments[]`, `PaymentIntentCreateParams.payment_details.flight.segments[]`, and `PaymentIntentUpdateParams.payment_details.flight.segments[]`
* Add support for `number_of_rooms` and `room_class` on `ChargeCaptureParams.payment_details.lodging`, `ChargeUpdateParams.payment_details.lodging`, `PaymentIntentCaptureParams.payment_details.lodging`, `PaymentIntentConfirmParams.payment_details.lodging`, `PaymentIntentCreateParams.payment_details.lodging`, and `PaymentIntentUpdateParams.payment_details.lodging`
* Change `ConfirmationToken.setup_future_usage` to be required
* Add support for `buy_button` on `CustomerSession.components` and `CustomerSessionCreateParams.components`
* Add support for new values `high_risk_industry`, `insufficient_margin_ratio`, `insufficient_operating_profit`, `insufficient_reserves`, `insufficient_time_in_network`, `lacking_cash_account`, and `poor_payment_history_with_platform` on enums `Issuing.CreditUnderwritingRecord.decision.application_rejected.reasons[]`, `Issuing.CreditUnderwritingRecordCorrectParams.decision.application_rejected.reasons[]`, and `Issuing.CreditUnderwritingRecordReportDecisionParams.decision.application_rejected.reasons[]`
* Add support for new values `high_risk_industry`, `insufficient_margin_ratio`, `insufficient_operating_profit`, `insufficient_reserves`, `insufficient_time_in_network`, and `lacking_cash_account` on enums `Issuing.CreditUnderwritingRecord.decision.credit_limit_decreased.reasons[]`, `Issuing.CreditUnderwritingRecord.decision.credit_line_closed.reasons[]`, `Issuing.CreditUnderwritingRecordCorrectParams.decision.credit_limit_decreased.reasons[]`, `Issuing.CreditUnderwritingRecordCorrectParams.decision.credit_line_closed.reasons[]`, `Issuing.CreditUnderwritingRecordCreateFromProactiveReviewParams.decision.credit_limit_decreased.reasons[]`, and `Issuing.CreditUnderwritingRecordCreateFromProactiveReviewParams.decision.credit_line_closed.reasons[]`
