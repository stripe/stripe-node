---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1713
is_stripe_api_change: true
released_in_version: 11.16.0-beta.1
---

* Add support for `create_from_calculation` method on resource `Tax.Transaction`
* Change type of `Invoice.applies_to` from `QuotesResourceQuoteLinesAppliesTo | null` to `QuotesResourceQuoteLinesAppliesTo`
* Add support for `paypal` on `Mandate.payment_method_details`, `SetupAttempt.payment_method_details`, `SetupIntent.payment_method_options`, `SetupIntentConfirmParams.payment_method_options`, `SetupIntentCreateParams.payment_method_options`, and `SetupIntentUpdateParams.payment_method_options`
* Add support for new value `automatic_async` on enums `Order.payment.settings.payment_method_options.afterpay_clearpay.capture_method`, `Order.payment.settings.payment_method_options.card.capture_method`, `OrderCreateParams.payment.settings.payment_method_options.afterpay_clearpay.capture_method`, `OrderCreateParams.payment.settings.payment_method_options.card.capture_method`, `OrderUpdateParams.payment.settings.payment_method_options.afterpay_clearpay.capture_method`, and `OrderUpdateParams.payment.settings.payment_method_options.card.capture_method`
* Add support for `setup_future_usage` on `Order.payment.settings.payment_method_options.paypal`, `OrderCreateParams.payment.settings.payment_method_options.paypal`, `OrderUpdateParams.payment.settings.payment_method_options.paypal`, `PaymentIntent.payment_method_options.paypal`, `PaymentIntentConfirmParams.payment_method_options.paypal`, `PaymentIntentCreateParams.payment_method_options.paypal`, and `PaymentIntentUpdateParams.payment_method_options.paypal`
* Change `PaymentIntent.next_action.cashapp_handle_redirect_or_display_qr_code.hosted_instructions_url`, `PaymentIntent.next_action.cashapp_handle_redirect_or_display_qr_code.mobile_auth_url`, `PaymentIntent.next_action.cashapp_handle_redirect_or_display_qr_code.qr_code.expires_at`, `PaymentIntent.next_action.cashapp_handle_redirect_or_display_qr_code.qr_code.image_url_png`, `PaymentIntent.next_action.cashapp_handle_redirect_or_display_qr_code.qr_code.image_url_svg`, `PaymentIntent.next_action.cashapp_handle_redirect_or_display_qr_code.qr_code`, `SetupIntent.next_action.cashapp_handle_redirect_or_display_qr_code.hosted_instructions_url`, `SetupIntent.next_action.cashapp_handle_redirect_or_display_qr_code.mobile_auth_url`, `SetupIntent.next_action.cashapp_handle_redirect_or_display_qr_code.qr_code.expires_at`, `SetupIntent.next_action.cashapp_handle_redirect_or_display_qr_code.qr_code.image_url_png`, `SetupIntent.next_action.cashapp_handle_redirect_or_display_qr_code.qr_code.image_url_svg`, and `SetupIntent.next_action.cashapp_handle_redirect_or_display_qr_code.qr_code` to be required
* Remove support for `applies_to` on `QuotePreviewInvoiceLinesParams`
* Add support for `shipping_cost` on `Tax.Calculation`, `Tax.Transaction`, `TaxCalculationCreateParams`, and `TaxTransactionCreateReversalParams`
* Add support for `tax_breakdown` on `Tax.Calculation`
* Remove support for `tax_summary` on `Tax.Calculation`
