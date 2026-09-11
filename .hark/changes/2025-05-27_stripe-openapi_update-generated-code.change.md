---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/2324
is_stripe_api_change: true
released_in_version: 18.3.0-beta.1
---

### Breaking changes
* Remove support for deprecated previews
  * Remove support for resources `Billing.MeterErrorReport`, `GiftCards.Card`, and `GiftCards.Transaction`
  * Remove support for `create`, `list`, `retrieve`, `update`, and `validate` methods on resource `GiftCards.Card`
  * Remove support for `cancel`, `confirm`, `create`, `list`, `retrieve`, and `update` methods on resource `GiftCards.Transaction`
  * Remove support for `provisioning` on `ProductCreateParams` and `Product`
  * Remove support for snapshot event `BillingMeterErrorReportTriggeredEvent` with resource `Billing.MeterErrorReport`
  * Remove support for error codes `gift_card_balance_insufficient`, `gift_card_code_exists`, and `gift_card_inactive` on `QuotePreviewInvoice.last_finalization_error` and `StripeError`
* Remove support for values `credits_attributed_to_debits` and `legacy_prorations` from enums `Checkout.SessionCreateParams.subscription_data.billing_mode`, `InvoiceCreatePreviewParams.schedule_details.billing_mode`, `InvoiceCreatePreviewParams.subscription_details.billing_mode`, `Quote.subscription_data.billing_mode`, `QuoteCreateParams.subscription_data.billing_mode`, `QuotePreviewSubscriptionSchedule.billing_mode`, `Subscription.billing_mode`, `SubscriptionCreateParams.billing_mode`, `SubscriptionSchedule.billing_mode`, and `SubscriptionScheduleCreateParams.billing_mode`
* Change type of `Checkout.SessionUpdateParams.line_items[].quantity` from `emptyable(longInteger)` to `longInteger`
* Change `CreditNote.post_payment_amount` to be required
* Change `CreditNote.pre_payment_amount` to be required
* Change type of `InvoiceCreatePreviewParams.subscription_details.cancel_at`, `SubscriptionCreateParams.cancel_at`, and `SubscriptionUpdateParams.cancel_at` from `DateTime` to `DateTime | enum('max_period_end'|'min_period_end')`
* Remove support for `credits` on `OrderCreateParams`, `OrderUpdateParams`, and `Order`
* Remove support for `amount_remaining` on `Order`
* Remove support for `amount_credit` on `Order.total_details`
* Change type of `PaymentAttemptRecord.metadata` and `PaymentRecord.metadata` from `map(string: string) | null` to `map(string: string)`
* Change type of `PaymentRecordReportPaymentAttemptCanceledParams.metadata`, `PaymentRecordReportPaymentAttemptFailedParams.metadata`, `PaymentRecordReportPaymentAttemptGuaranteedParams.metadata`, `PaymentRecordReportPaymentAttemptParams.metadata`, and `PaymentRecordReportPaymentParams.metadata` from `map(string: string)` to `emptyable(map(string: string))`
* Change type of `Privacy.RedactionJob.status` from `string` to `enum`
* Change type of `Privacy.RedactionJob.validation_behavior` from `string` to `enum('error'|'fix')`
* Change type of `Privacy.RedactionJobValidationError.code` from `string` to `enum`
* Change type of `Privacy.RedactionJobValidationError.erroring_object` from `map(string: string)` to `RedactionResourceErroringObject`
* Remove support for `status_details` and `status` on `Tax.Association`

### Other changes
* Add support for `migrate` method on resource `Subscription`
* Add support for `distance`, `pickup_location_name`, `return_location_name`, and `vehicle_identification_number` on `ChargeCaptureParams.payment_details.car_rental`, `ChargeUpdateParams.payment_details.car_rental`, `PaymentIntent.payment_details.car_rental`, `PaymentIntentCaptureParams.payment_details.car_rental`, `PaymentIntentConfirmParams.payment_details.car_rental`, `PaymentIntentCreateParams.payment_details.car_rental`, and `PaymentIntentUpdateParams.payment_details.car_rental`
* Add support for `driver_identification_number` and `driver_tax_number` on `ChargeCaptureParams.payment_details.car_rental.drivers[]`, `ChargeUpdateParams.payment_details.car_rental.drivers[]`, `PaymentIntent.payment_details.car_rental.drivers[]`, `PaymentIntentCaptureParams.payment_details.car_rental.drivers[]`, `PaymentIntentConfirmParams.payment_details.car_rental.drivers[]`, `PaymentIntentCreateParams.payment_details.car_rental.drivers[]`, and `PaymentIntentUpdateParams.payment_details.car_rental.drivers[]`
* Add support for new values `classic` and `flexible` on enums `Checkout.SessionCreateParams.subscription_data.billing_mode`, `InvoiceCreatePreviewParams.schedule_details.billing_mode`, `InvoiceCreatePreviewParams.subscription_details.billing_mode`, `Quote.subscription_data.billing_mode`, `QuoteCreateParams.subscription_data.billing_mode`, `QuotePreviewSubscriptionSchedule.billing_mode`, `Subscription.billing_mode`, `SubscriptionCreateParams.billing_mode`, `SubscriptionSchedule.billing_mode`, and `SubscriptionScheduleCreateParams.billing_mode`
* Add support for `institution` on `FinancialConnections.Account`
* Add support for `countries` on `FinancialConnections.Institution`
* Add support for `location` and `reader` on `PaymentAttemptRecord.payment_method_details.affirm`, `PaymentAttemptRecord.payment_method_details.wechat_pay`, `PaymentRecord.payment_method_details.affirm`, and `PaymentRecord.payment_method_details.wechat_pay`
* Add support for `hooks` on `PaymentIntentCaptureParams`, `PaymentIntentConfirmParams`, `PaymentIntentCreateParams`, `PaymentIntentDecrementAuthorizationParams`, `PaymentIntentIncrementAuthorizationParams`, `PaymentIntentUpdateParams`, and `PaymentIntent`
* Remove support for `async_workflows` on `PaymentIntentCaptureParams`, `PaymentIntentConfirmParams`, `PaymentIntentCreateParams`, `PaymentIntentDecrementAuthorizationParams`, `PaymentIntentIncrementAuthorizationParams`, `PaymentIntentUpdateParams`, and `PaymentIntent`
* Add support for `card_present` on `PaymentIntentAmountDetailsLineItem.payment_method_options`
* Add support for `livemode` on `Privacy.RedactionJob`
* Add support for `billing_thresholds` on `QuotePreviewSubscriptionSchedule.default_settings`, `QuotePreviewSubscriptionSchedule.phases[].items[]`, and `QuotePreviewSubscriptionSchedule.phases[]`
* Add support for `billing_mode_details` on `Subscription`
* Add support for `tax_transaction_attempts` on `Tax.Association`
* Add support for `confirm_config` on `Terminal.Reader.action.confirm_payment_intent` and `Terminal.ReaderConfirmPaymentIntentParams`
* Add support for error code `forwarding_api_upstream_error` on `QuotePreviewInvoice.last_finalization_error`
