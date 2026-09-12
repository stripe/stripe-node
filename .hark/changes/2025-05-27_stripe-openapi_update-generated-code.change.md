---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2338
is_stripe_api_change: true
released_in_version: 18.2.0
---

* Add support for `attach_payment` method on resource `Invoice`
* Add support for `collect_inputs` method on resource `Terminal.Reader`
* Add support for `succeed_input_collection` and `timeout_input_collection` test helper methods on resource `Terminal.Reader`
* Add support for `pix_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
* Add support for `disputes_list` and `payment_disputes` on `AccountSession.components` and `AccountSessionCreateParams.components`
* Add support for `refund_and_dispute_prefunding` on `Balance`
* Add support for `balance_type` on `BalanceTransaction`
* Change `Billing.AlertCreateParams.usage_threshold.meter` to be required
* Add support for `location` and `reader` on `Charge.payment_method_details.affirm` and `Charge.payment_method_details.wechat_pay`
* Add support for `payment_method_remove` on `Checkout.SessionCreateParams.saved_payment_method_options`
* Add support for `setup_future_usage` on `Checkout.Session.payment_method_options.naver_pay`
* Change `ConfirmationToken.payment_method_preview.naver_pay.buyer_id` and `PaymentMethod.naver_pay.buyer_id` to be required
* Add support for `post_payment_amount` and `pre_payment_amount` on `CreditNote`
* Add support for new value `mixed` on enum `CreditNote.type`
* Add support for new value `invoice_payment.paid` on enum `Event.type`
* Add support for `sex`, `unparsed_place_of_birth`, and `unparsed_sex` on `Identity.VerificationReport.document` and `Identity.VerificationSession.verified_outputs`
* Add support for `billing_thresholds` on `InvoiceCreatePreviewParams.schedule_details.phases[].items[]`, `InvoiceCreatePreviewParams.schedule_details.phases[]`, `InvoiceCreatePreviewParams.subscription_details.items[]`, `SubscriptionCreateParams.items[]`, `SubscriptionCreateParams`, `SubscriptionItemCreateParams`, `SubscriptionItemUpdateParams`, `SubscriptionItem`, `SubscriptionSchedule.default_settings`, `SubscriptionSchedule.phases[].items[]`, `SubscriptionSchedule.phases[]`, `SubscriptionScheduleCreateParams.default_settings`, `SubscriptionScheduleCreateParams.phases[].items[]`, `SubscriptionScheduleCreateParams.phases[]`, `SubscriptionScheduleUpdateParams.default_settings`, `SubscriptionScheduleUpdateParams.phases[].items[]`, `SubscriptionScheduleUpdateParams.phases[]`, `SubscriptionUpdateParams.items[]`, `SubscriptionUpdateParams`, and `Subscription`
* Add support for `satispay` on `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_options`, and `PaymentIntentUpdateParams.payment_method_options`
* Add support for `capture_method` on `PaymentIntent.payment_method_options.billie`
* Add support for `kakao_pay`, `kr_card`, `naver_pay`, `payco`, and `samsung_pay` on `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, and `PaymentMethodConfiguration`
* Add support for `network_decline_code` on `Refund.destination_details.paypal`
* Add support for `metadata` on `Tax.CalculationCreateParams.line_items[]` and `Tax.CalculationLineItem`
* Add support for new value `simulated_stripe_s700` on enums `Terminal.Reader.device_type` and `Terminal.ReaderListParams.device_type`
* Add support for `return_url` on `Terminal.Reader.action.process_payment_intent.process_config` and `Terminal.ReaderProcessPaymentIntentParams.process_config`
* Add support for `collect_inputs` on `Terminal.Reader.action`
* Add support for new value `collect_inputs` on enum `Terminal.Reader.action.type`
* Add support for new value `invoice_payment.paid` on enums `WebhookEndpointCreateParams.enabled_events` and `WebhookEndpointUpdateParams.enabled_events`
* Add support for new value `2025-05-28.basil` on enum `WebhookEndpointCreateParams.api_version`
* Add support for snapshot event `InvoicePaymentPaidEvent` with resource `InvoicePayment`
* Add support for error code `forwarding_api_upstream_error` on `Invoice.last_finalization_error`, `PaymentIntent.last_payment_error`, `SetupAttempt.setup_error`, `SetupIntent.last_setup_error`, and `StripeError`
