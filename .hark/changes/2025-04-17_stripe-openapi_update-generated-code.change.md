---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/2302
is_stripe_api_change: true
released_in_version: 18.1.0-beta.3
---

* Add support for new resources `FxQuote` and `PaymentIntentAmountDetailsLineItem`
* Add support for `create`, `list`, and `retrieve` methods on resource `FxQuote`
* Remove support for `attach_payment_intent` method on resource `Invoice`
* Add support for `registration_date` on `Account.company`, `AccountCreateParams.company`, `AccountUpdateParams.company`, and `TokenCreateParams.account.company`
* Add support for `customer_reference` and `order_reference` on `ChargeCaptureParams.payment_details`, `ChargeUpdateParams.payment_details`, `PaymentIntent.payment_details`, `PaymentIntentCaptureParams.payment_details`, `PaymentIntentConfirmParams.payment_details`, `PaymentIntentCreateParams.payment_details`, and `PaymentIntentUpdateParams.payment_details`
* Add support for `tax_id` on `Charge.billing_details`, `ConfirmationToken.payment_method_preview.billing_details`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data.billing_details`, `PaymentIntentConfirmParams.payment_method_data.billing_details`, `PaymentIntentCreateParams.payment_method_data.billing_details`, `PaymentIntentUpdateParams.payment_method_data.billing_details`, `PaymentMethod.billing_details`, `PaymentMethodCreateParams.billing_details`, `PaymentMethodUpdateParams.billing_details`, `SetupIntentConfirmParams.payment_method_data.billing_details`, `SetupIntentCreateParams.payment_method_data.billing_details`, `SetupIntentUpdateParams.payment_method_data.billing_details`, and `Treasury.OutboundPaymentCreateParams.destination_payment_method_data.billing_details`
* Add support for `price_data` on `Checkout.SessionUpdateParams.line_items[]`
* Change type of `Checkout.SessionUpdateParams.line_items[].quantity` from `longInteger` to `emptyable(longInteger)`
* Add support for `script` on `CouponCreateParams` and `Coupon`
* Add support for `type` on `Coupon`
* Add support for new value `fx_quote.expired` on enum `Event.type`
* Add support for new value `affirm` on enums `Invoice.payment_settings.payment_method_types`, `InvoiceCreateParams.payment_settings.payment_method_types`, `InvoiceUpdateParams.payment_settings.payment_method_types`, `QuotePreviewInvoice.payment_settings.payment_method_types`, `Subscription.payment_settings.payment_method_types`, `SubscriptionCreateParams.payment_settings.payment_method_types`, and `SubscriptionUpdateParams.payment_settings.payment_method_types`
* Add support for `fx_quote` on `PaymentIntentConfirmParams`, `PaymentIntentCreateParams`, `PaymentIntentUpdateParams`, `PaymentIntent`, `TransferCreateParams`, and `Transfer`
* Add support for `discount_amount`, `line_items`, `shipping`, and `tax` on `PaymentIntent.amount_details`
* Add support for `pix` on `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, and `PaymentMethodConfiguration`
* Add support for `us_cfpb_data` on `Person` and `TokenCreateParams.person`
* Add support for `pending_reason` on `Refund`
* Add support for `aw`, `az`, `bd`, `bj`, `et`, `kg`, `la`, and `ph` on `Tax.Registration.country_options` and `Tax.RegistrationCreateParams.country_options`
* Add support for new value `fx_quote.expired` on enums `WebhookEndpointCreateParams.enabled_events` and `WebhookEndpointUpdateParams.enabled_events`
* Add support for snapshot event `FxQuoteExpiredEvent` with resource `FxQuote`
