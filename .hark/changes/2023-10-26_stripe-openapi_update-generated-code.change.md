---
title: Update generated code for beta
pr_url: https://github.com/stripe/stripe-node/pull/1938
is_stripe_api_change: true
released_in_version: 14.3.0-beta.1
---

* Add support for new resource `Margin`
* Add support for `create`, `list`, `retrieve`, and `update` methods on resource `Margin`
* Add support for `subsellers` on `Checkout.SessionCreateParams.payment_method_options.paypal`, `Order.payment.settings.payment_method_options.paypal`, `OrderCreateParams.payment.settings.payment_method_options.paypal`, `OrderUpdateParams.payment.settings.payment_method_options.paypal`, `PaymentIntent.payment_method_options.paypal`, `PaymentIntentConfirmParams.payment_method_options.paypal`, `PaymentIntentCreateParams.payment_method_options.paypal`, `PaymentIntentUpdateParams.payment_method_options.paypal`, `SetupIntent.payment_method_options.paypal`, `SetupIntentConfirmParams.payment_method_options.paypal`, `SetupIntentCreateParams.payment_method_options.paypal`, and `SetupIntentUpdateParams.payment_method_options.paypal`
* Add support for `default_margins` on `InvoiceCreateParams`, `InvoiceUpdateParams`, and `Invoice`
* Add support for `total_margin_amounts` on `Invoice`
* Add support for `margins` on `InvoiceItemCreateParams`, `InvoiceItemUpdateParams`, and `InvoiceItem`
* Add support for new values `applicant_is_not_beneficial_owner`, `current_account_tier_ineligible`, `customer_requested_account_closure`, `dispute_rate_too_high`, and `invalid_business_license` on enums `Issuing.CreditUnderwritingRecord.decision.credit_limit_decreased.reasons[]`, `Issuing.CreditUnderwritingRecord.decision.credit_line_closed.reasons[]`, `Issuing.CreditUnderwritingRecordCorrectParams.decision.credit_limit_decreased.reasons[]`, `Issuing.CreditUnderwritingRecordCorrectParams.decision.credit_line_closed.reasons[]`, `Issuing.CreditUnderwritingRecordCreateFromProactiveReviewParams.decision.credit_limit_decreased.reasons[]`, and `Issuing.CreditUnderwritingRecordCreateFromProactiveReviewParams.decision.credit_line_closed.reasons[]`
* Add support for new values `applicant_is_not_beneficial_owner`, `current_account_tier_ineligible`, `customer_requested_account_closure`, `dispute_rate_too_high`, and `invalid_business_license` on enums `Issuing.CreditUnderwritingRecord.decision.application_rejected.reasons[]`, `Issuing.CreditUnderwritingRecordCorrectParams.decision.application_rejected.reasons[]`, and `Issuing.CreditUnderwritingRecordReportDecisionParams.decision.application_rejected.reasons[]`
* Remove support for values `change_in_financial_state`, `change_in_utilization_of_credit_line`, `decrease_in_income_to_expense_ratio`, `decrease_in_social_media_performance`, `exceeds_acceptable_platform_exposure`, `has_recent_credit_limit_increase`, `insufficient_credit_utilization`, `insufficient_usage_as_qualified_expenses`, and `poor_payment_history_with_platform` from enums `Issuing.CreditUnderwritingRecord.decision.application_rejected.reasons[]`, `Issuing.CreditUnderwritingRecordCorrectParams.decision.application_rejected.reasons[]`, and `Issuing.CreditUnderwritingRecordReportDecisionParams.decision.application_rejected.reasons[]`
* Add support for `is_default` on `Issuing.PersonalizationDesign.preferences`, `Issuing.PersonalizationDesignCreateParams.preferences`, `Issuing.PersonalizationDesignListParams.preferences`, and `Issuing.PersonalizationDesignUpdateParams.preferences`
* Add support for `is_platform_default` on `Issuing.PersonalizationDesign.preferences` and `Issuing.PersonalizationDesignListParams.preferences`
* Remove support for `account_default` on `Issuing.PersonalizationDesign.preferences`, `Issuing.PersonalizationDesignCreateParams.preferences`, `Issuing.PersonalizationDesignListParams.preferences`, and `Issuing.PersonalizationDesignUpdateParams.preferences`
* Remove support for `platform_default` on `Issuing.PersonalizationDesign.preferences` and `Issuing.PersonalizationDesignListParams.preferences`
* Add support for `liability` on `PaymentLink.automatic_tax`, `PaymentLinkCreateParams.automatic_tax`, and `PaymentLinkUpdateParams.automatic_tax`
* Add support for `issuer` on `PaymentLink.invoice_creation.invoice_data`, `PaymentLinkCreateParams.invoice_creation.invoice_data`, and `PaymentLinkUpdateParams.invoice_creation.invoice_data`
* Add support for `invoice_settings` on `PaymentLink.subscription_data`, `PaymentLinkCreateParams.subscription_data`, and `PaymentLinkUpdateParams.subscription_data`
* Add support for new value `accept_failed_validations` on enum `Quote.status_details.stale.last_reason.type`
