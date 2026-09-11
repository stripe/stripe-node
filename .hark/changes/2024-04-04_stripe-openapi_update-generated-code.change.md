---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/2053
is_stripe_api_change: true
released_in_version: 14.24.0
---

* Change `Charge.payment_method_details.us_bank_account.payment_reference`, `PaymentIntent.next_action.swish_handle_redirect_or_display_qr_code.hosted_instructions_url`, `PaymentIntent.next_action.swish_handle_redirect_or_display_qr_code.mobile_auth_url`, `PaymentIntent.next_action.swish_handle_redirect_or_display_qr_code.qr_code.data`, `PaymentIntent.next_action.swish_handle_redirect_or_display_qr_code.qr_code.image_url_png`, `PaymentIntent.next_action.swish_handle_redirect_or_display_qr_code.qr_code.image_url_svg`, `PaymentIntent.next_action.swish_handle_redirect_or_display_qr_code.qr_code`, and `PaymentIntent.payment_method_options.swish.reference` to be required
* Change type of `Checkout.SessionCreateParams.payment_method_options.swish.reference` from `emptyable(string)` to `string`
* Add support for `subscription_item` on `Discount`
* Add support for `email` and `phone` on `Identity.VerificationReport`, `Identity.VerificationSession.options`, `Identity.VerificationSession.verified_outputs`, `Identity.VerificationSessionCreateParams.options`, and `Identity.VerificationSessionUpdateParams.options`
* Add support for `verification_flow` on `Identity.VerificationReport`, `Identity.VerificationSessionCreateParams`, and `Identity.VerificationSession`
* Add support for new value `verification_flow` on enums `Identity.VerificationReport.type` and `Identity.VerificationSession.type`
* Add support for `provided_details` on `Identity.VerificationSessionCreateParams`, `Identity.VerificationSessionUpdateParams`, and `Identity.VerificationSession`
* Change `Identity.VerificationSessionCreateParams.type` to be optional
* Add support for new values `email_unverified_other`, `email_verification_declined`, `phone_unverified_other`, and `phone_verification_declined` on enum `Identity.VerificationSession.last_error.code`
* Add support for `promotion_code` on `InvoiceCreateParams.discounts[]`, `InvoiceItemCreateParams.discounts[]`, `InvoiceItemUpdateParams.discounts[]`, `InvoiceUpdateParams.discounts[]`, `QuoteCreateParams.discounts[]`, and `QuoteUpdateParams.discounts[]`
* Add support for `discounts` on `InvoiceUpcomingLinesParams.subscription_items[]`, `InvoiceUpcomingParams.subscription_items[]`, `QuoteCreateParams.line_items[]`, `QuoteUpdateParams.line_items[]`, `SubscriptionCreateParams.add_invoice_items[]`, `SubscriptionCreateParams.items[]`, `SubscriptionCreateParams`, `SubscriptionItemCreateParams`, `SubscriptionItemUpdateParams`, `SubscriptionItem`, `SubscriptionSchedule.phases[].add_invoice_items[]`, `SubscriptionSchedule.phases[].items[]`, `SubscriptionSchedule.phases[]`, `SubscriptionScheduleCreateParams.phases[].add_invoice_items[]`, `SubscriptionScheduleCreateParams.phases[].items[]`, `SubscriptionScheduleCreateParams.phases[]`, `SubscriptionScheduleUpdateParams.phases[].add_invoice_items[]`, `SubscriptionScheduleUpdateParams.phases[].items[]`, `SubscriptionScheduleUpdateParams.phases[]`, `SubscriptionUpdateParams.add_invoice_items[]`, `SubscriptionUpdateParams.items[]`, `SubscriptionUpdateParams`, and `Subscription`
* Change type of `Invoice.discounts` from `array(expandable(deletable($Discount))) | null` to `array(expandable(deletable($Discount)))`
* Add support for `allowed_merchant_countries` and `blocked_merchant_countries` on `Issuing.Card.spending_controls`, `Issuing.CardCreateParams.spending_controls`, `Issuing.CardUpdateParams.spending_controls`, `Issuing.Cardholder.spending_controls`, `Issuing.CardholderCreateParams.spending_controls`, and `Issuing.CardholderUpdateParams.spending_controls`
* Add support for `zip` on `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, and `PaymentMethodConfiguration`
* Add support for `offline` on `SetupAttempt.payment_method_details.card_present`
* Add support for `card_present` on `SetupIntent.payment_method_options`, `SetupIntentConfirmParams.payment_method_options`, `SetupIntentCreateParams.payment_method_options`, and `SetupIntentUpdateParams.payment_method_options`
* Add support for new value `mobile_phone_reader` on enums `Terminal.Reader.device_type` and `Terminal.ReaderListParams.device_type`
